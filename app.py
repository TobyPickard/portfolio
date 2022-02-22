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

@app.route('/')
def index():
    return render_template('index.html')

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

@app.route('/home')
def home():
    return render_template('home.html')