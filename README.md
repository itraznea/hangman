# Hangman Game

This my final project for the CS50 course.

### **Description:**
The Hangman game I created is a web-based implementation of the classic word-guessing game. I utilized Flask as the backend framework to serve HTML pages. The game allows users to guess letters to ultimately unveil a hidden word, which is randomly selected from the database. The database was populated with words using a python script that I wrote.This project integrates Flask, SQLite, HTML, CSS, and JavaScript to create an interactive and engaging user experience.

### **Overview of Files**
**app.py**: This is the main Flask application that handles the routing of the game. It establishes a connection and interacts with the database. It implements several key functionalities such as selecting a random word and serving the files to the user.

**templates/**: This directory contains HTML files that define the user interface. The main HTML file is index.html, which serves as the entry point for the game that allows selecting the difficulty of the game. After the difficulty is selected, the game is served from the game.html file.

**static/**: This folder contains the images used in the game and the CSS and JavaScript files that enhance the styling and interactivity of the game. The CSS file styles the game interface, while JavaScript manages the game logic in the client-side browser. It maintains the game state, including tracking incorrect guesses, the current word's progress, and whether the game has been won or lost.

**wordlist.db**: This is the SQLite database where the words used in the game are stored along with its difficulty level. Each word is selected randomly when the game begins, providing endless possibilities for players.

### **Design Choices**
**Database Choice**: I opted for SQLite due to its lightweight nature and simplicity for small-scale projects. This decision allowed me to focus on developing the game rather than database management.

**Interface Design**: The choice to use HTML and CSS for frontend design was based on their widespread support and ease of use.

**Flask Framework**: I chose Flask because of its simplicity and flexibility. It allowed me to quickly set up a web server and handle HTTP requests without the overhead of more complex frameworks.

### **Other Resources**
The win game image and lost game image where taken from here:
https://pixabay.com/illustrations/cup-victory-winner-award-gold-1010916/
https://pixabay.com/illustrations/game-game-over-tshirt-t-shirt-7167792/
All the other basic images were created by me using GIMP.

The words used were taken from https://www.oxfordlearnersdictionaries.com .

### Run the game on localhost
Clone this repository then in the game's folder run:
source env/bin/activate
python3 app.py
You can then access the game at:
http://127.0.0.1:5000