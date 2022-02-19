from flask import Flask, render_template

app = Flask(__name__)

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