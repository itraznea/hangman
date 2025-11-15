from flask import Flask, render_template, url_for, request
import sqlite3

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('wordlist.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/easy')
def easy():
    conn = get_db_connection()
    random_word = conn.execute("SELECT * FROM words WHERE difficulty = 1 ORDER BY RANDOM() LIMIT 1").fetchone()
    conn.close()
    return render_template("game.html", random_word = random_word[0])

@app.route('/medium')
def medium():
    conn = get_db_connection()
    random_word = conn.execute("SELECT * FROM words WHERE difficulty = 2 ORDER BY RANDOM() LIMIT 1").fetchone()
    conn.close()
    return render_template("game.html", random_word = random_word[0])

@app.route('/hard')
def hard():
    conn = get_db_connection()
    random_word = conn.execute("SELECT * FROM words WHERE difficulty = 3 ORDER BY RANDOM() LIMIT 1").fetchone()
    conn.close()
    return render_template("game.html", random_word = random_word[0])

if __name__ == "__main__":
    app.run(debug=False)