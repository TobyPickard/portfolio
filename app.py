'''
    This is the main function for the portfolio web application
'''
###############################################################################

import sqlite3
from flask import Flask, render_template, request, redirect

from src.classes.operators import ComparisonOperators
from src.db_queries import pragma_query, select_query, insert_query, \
    update_query, delete_query

###############################################################################

app = Flask(__name__)

###############################################################################

@app.route('/')
def home():
    '''
        This function renders the user/home.html page for the web app.
    '''
    return render_template('user/home.html')

##=============================================================================

@app.route('/about')
def about():
    '''
        This function renders the user/about.html for the web app.
    '''
    return render_template('user/about.html')

##=============================================================================

@app.route('/contact')
def contact():
    '''
        This function renders the user/contact.html for the web app.
    '''
    return render_template('user/contact.html')

##=============================================================================

@app.route('/projects')
def projects():
    '''
        This function renders the user/projects.html for the web app.
    '''
    connection = sqlite3.connect('example.db')
    cursor = connection.cursor()

    query = pragma_query('projects')
    cursor.execute(query)
    result = cursor.fetchall()
    column_names = [column[1] for column in result]

    query = select_query(table_name='projects', column_names=['*'])
    cursor.execute(query)
    project_data = cursor.fetchall()

    projects_as_list = []
    for project in project_data:
        project_dict = {column_names[idx]: i for idx, i in enumerate(project)}
        projects_as_list.append(project_dict)
    return render_template('user/projects.html', data=projects_as_list)

##=============================================================================

@app.route('/admin_add_project')
def admin_add_project():
    '''
        This function renders the admin/add_project.html for the web app.
    '''
    return render_template('admin/add_project.html')

@app.route('/admin_edit_project', methods=['POST'])
def admin_edit_project():
    '''
        This function renders the admin/edit_project.html for the web app.
    '''
    if request.method == 'POST':
        data_as_list = [dict(request.form)]
    return render_template('admin/edit_project.html', data=data_as_list)

##=============================================================================

@app.route('/add_project', methods=['POST'])
def add_project():
    '''
        This function takes data submitted from the admin/add_project.html file 
        and adds it to the projects table in the database.
    '''
    if request.method == 'POST':
        connection = sqlite3.connect('example.db')
        cursor = connection.cursor()

        form_columns = ['id']
        id_query = select_query(table_name='projects', column_names=['*'], count=True)
        cursor.execute(id_query)
        form_data = [cursor.fetchone()[0]]

        for thing in request.form:
            form_columns.append(thing)
            form_data.append(request.form[thing])

        query = insert_query('projects', form_columns, form_data)
        cursor.execute(query)

        connection.commit()
        connection.close()
    return redirect('/')

@app.route('/delete_project', methods=['POST'])
def delete_project():
    '''
        This functions takes the project id and deletes it when requested by 
        the user.
    '''
    if request.method == 'POST':
        connection = sqlite3.connect('example.db')
        cursor = connection.cursor()

        project_id = request.form['id']

        cursor.execute(delete_query('projects', project_id, 'id'))
        cursor.execute(
            update_query(
                'projects',
                {'id': 'id-1'},
                'id',
                ComparisonOperators.MORETHAN
            ),
            (project_id)
        )

        connection.commit()
        connection.close()
    return redirect('/projects')

@app.route('/edit_project', methods=['POST'])
def edit_project():
    '''
        This function takes data and uses it to update an entry in
        the projects database.
    '''
    if request.method == 'POST':
        connection = sqlite3.connect('example.db')
        cursor = connection.cursor()

        data = dict(request.form)
        proj_id = data.pop('id')

        cursor.execute(
            update_query(
                'projects', 
                data,
                'id',
                ComparisonOperators.EQUAL
            ),
            (proj_id)
        )

        connection.commit()
        connection.close()
    return redirect('/projects')

##=============================================================================

@app.route('/send_contact', methods=['POST'])
def send_contact():
    '''
        This function takes data submitted from the user/contact.html file 
        and sends an automated email. 
    '''
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

##=============================================================================

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=600)
