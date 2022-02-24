from flask import Flask, render_template, request

app = Flask(__name__)

def shutdown_server():
    func = request.environ.get('werkzeug.server.shutdown')
    if func is None:
        raise RuntimeError('Not running with the Werkzeug Server')
    func()
    
@app.get('/shutdown')
def shutdown():
    shutdown_server()
    return 'Server shutting down...'

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

@app.route('/review')
def review():
    return render_template('review.html')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/review', methods=['POST'])
def action():
    form_data = {}
    form_data['first_name'] = request.form['first_name']
    form_data['last_name'] = request.form['last_name']
    form_data['relation'] = request.form['relation']
    form_data['review'] = request.form['review']
    
    for i in form_data:
        if not form_data[i]:
            print(f'{i} was left empty')
            print("invalid review")
            print("please try again")
            break
    
    return render_template('review.html')