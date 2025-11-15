import sqlite3

inserted_words = 0

def get_difficulty(word_length):
    if word_length <= 5:
        return 1
    elif 6 <= word_length <= 10:
        return 2
    else:
        return 3

conn = sqlite3.connect('wordlist.db')
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS words (
    word TEXT NOT NULL UNIQUE,
    difficulty TINYINT NOT NULL
);
''')

try:
    conn.execute("BEGIN TRANSACTION")
    
    with open('oxford_wordlist.txt', 'r', encoding='utf-8') as file:
        for line in file:
            word = line.strip()
            word_length = len(word)
            difficulty = get_difficulty(word_length)

            try:
                cursor.execute("INSERT INTO words (word, difficulty) VALUES (?, ?)", (word, difficulty))
                inserted_words += 1
            except sqlite3.IntegrityError:
                print(f"The word '{word}' already exists.")
    
    conn.commit()
except Exception as e:
    print(f"Error: {e}")
finally:
    conn.close()
