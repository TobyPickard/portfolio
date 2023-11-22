import sqlite3
from datetime import datetime
from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route('/about')
def about():
    return render_template('about.html')

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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=600)
