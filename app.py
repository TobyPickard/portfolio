from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import sqlite3

conn = sqlite3.connect('reviews.db') 
c = conn.cursor()
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///reviews.db'

db = SQLAlchemy(app)

class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name =  db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, nullable = False, default=datetime.utcnow)
    relation = db.Column(db.String(200), nullable=False)
    review = db.Column(db.String(200), nullable=False)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/education')
def education():
    return render_template('education.html')

@app.route('/professional')
def professional():
    return render_template('professional.html')

@app.route('/personal')
def personal():
    return render_template('personal.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/send_contact', methods=['POST'])
def send_contact():
    if request.method == 'POST':
        form_data = {}
        form_data['Name'] = request.form['name']
        form_data['Email'] = request.form['email']
        form_data['Subject'] = request.form['subject']
        form_data['Message'] = request.form['message']
        
        print(form_data)
    return redirect('/contact')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/review')
def review():
    reviews = Reviews.query.order_by(Reviews.date_created)
    return render_template('review.html', reviews=reviews)

@app.route('/review_process', methods=['POST'])
def process_review():
    if request.method == "POST":
        form_data = {}
        form_data['fname'] = request.form['first_name']
        form_data['lname'] = request.form['last_name']
        form_data['relation'] = request.form['relation']
        form_data['review'] = request.form['review']
        
        print(form_data)
        for user_inp in form_data.values():
            if not user_inp:
                print('invalid')
                return redirect('/review')
        print(form_data)
        new_review = Reviews(name=form_data['fname'] + ' ' + form_data['lname'],relation=form_data['relation'], review=form_data['review'])
        print(new_review)
        try: 
            db.session.add(new_review)
            db.session.commit()
        except Exception as e:
            print(e)
            return 'there was an error'
    return redirect('/review')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=600)
