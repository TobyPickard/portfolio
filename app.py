from datetime import date
from operator import imod
from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///reviews.db'

db = SQLAlchemy(app)

class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name =  db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, nullable = False, default=datetime.utcnow)
    relation = db.Column(db.String(200), nullable=False)
    review = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return '<Name %r Relation Review>' % self.id

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

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/review', methods=['POST','GET'])
def review():
    if request.method == "POST":
        form_data = {}
        fname = request.form['first_name']
        lname = request.form['last_name']
        form_data['name'] = f'{fname} {lname}'
        form_data['relation'] = request.form['relation']
        form_data['review'] = request.form['review']
        
        for i in form_data:
            if not form_data[i]:
                print(f'{i} was left empty')
                print("invalid review")
                print("please try again")
                return render_template('review.html'), '400'
        
        new_review = Reviews(name=form_data['name'],relation=form_data['relation'], review=form_data['review'])
        
        try:
            db.session.add(new_review)
            db.session.commit()
            return redirect('/review')
        except:
            return 'There was an error'
        
    else:
        reviews = Reviews.query.order_by(Reviews.date_created)
        return render_template('review.html', friends=reviews)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)