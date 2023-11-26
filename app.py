import sqlite3
from flask import Flask, render_template, request, redirect
from sqlalchemy import create_engine

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('user/home.html')

@app.route('/about')
def about():
    return render_template('user/about.html')

@app.route('/contact')
def contact():
    return render_template('user/contact.html')

@app.route('/projects')
def projects():
    return render_template('user/projects.html')

@app.route('/admin_add_project')
def admin_add_project():
    return render_template('admin/add_project.html')

@app.route('/add_project', methods=['POST'])
def add_project():
    if request.method == 'POST':
        form_data = {
            'Project Name': request.form['proj-name'],
            'Project Purpose': request.form['purpose'],
            'Objective': request.form['objective'],
            'Tech Stack': request.form['stack'],
            'Description': request.form['description'],
            'Project Start': request.form['proj-start'],
            'Project End': request.form['proj-end'],
            'Final Product': request.form['final'],
            'Github Link': request.form['gh-link']
        }
        # This requires a database set-up so I can store data. 
        # This may need to wait for the app to be deployed somewhere on the cloud. 
        print(form_data)
    return redirect('user/home.html')

@app.route('/projects')
def projects():
    return render_template('USER/projectS.html')

@app.route('/send_contact', methods=['POST'])
def send_contact():
    if request.method == 'POST':
        form_data = {
            'Name': request.form['name'],
            'Email': request.form['email'],
            'Subject': request.form['subject'],
            'Message': request.form['message']
        }
    # this is easy to implement a basic form of it using this tutorial:
    # https://www.educative.io/answers/how-to-send-emails-with-api-in-flask-mail
        print(form_data)
    return redirect('user/contact')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=600)
