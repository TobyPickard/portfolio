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
    connection = sqlite3.connect('example.db')
    cursor = connection.cursor()
    query = '''PRAGMA table_info(projects)'''
    cursor.execute(query)
    result = cursor.fetchall()
    column_names = [column[1] for column in result]
    query = '''SELECT * from projects'''
    cursor.execute(query)
    projects = cursor.fetchall()
    
    projects_as_list = []
    for project in projects:
        project_dict = {column_names[idx]: i for idx, i in enumerate(project)}
        projects_as_list.append(project_dict)
    return render_template('user/projects.html', data=projects_as_list)

@app.route('/admin_add_project')
def admin_add_project():
    return render_template('admin/add_project.html')

@app.route('/add_project', methods=['POST'])
def add_project():
    if request.method == 'POST':
        connection = sqlite3.connect('example.db')
        cursor = connection.cursor()
        
        form_columns = ['id']
        id_query = f'''SELECT COUNT(*) FROM projects'''
        cursor.execute(id_query)
        form_data = [cursor.fetchone()[0]]

        for thing in request.form: 
            form_columns.append(thing)
            form_data.append(request.form[thing])

        query = f'''
            INSERT INTO projects {tuple(form_columns)}
            VALUES {tuple(form_data)}
        '''
        cursor.execute(query)
        connection.commit()
        connection.close()
    return redirect('/')

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
