from flask import Flask, render_template,request,redirect



app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/timezones')
def index():
    return render_template('index.html')

@app.route('/todolist')
def todolist():
    return render_template('todolist.html')

@app.route('/clock')
def clock():
    return render_template('clock.html')

@app.route('/game')
def game():
    return render_template('game.html')


if __name__=="__main__":
    app.run(debug=True,port=8000)
