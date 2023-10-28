from flask import Flask, request, render_template
import psycopg2
from psycopg2 import extras
import os
from dotenv import load_dotenv

load_dotenv()


conn = psycopg2.connect(
    database=os.getenv("DB_NAME"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASS"),
    host=os.getenv("DB_HOST"),
    sslmode="disable"
)

cur = conn.cursor(cursor_factory=extras.RealDictCursor)

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def hello_world():
    if request.method == "GET":
        cur.execute("SELECT * from person;")
        return cur.fetchall()
    elif request.method == "POST":
        return {"message":"Hello World!"}
    
@app.route("/login/", methods=["POST"])
def login():
    if request.method == "POST":
        data = request.get_json()
        username = data['username']
        q = f"SELECT * from person where name = '{username}'"
        cur.execute(q)
        return [row for row in cur.fetchall()]



if __name__ == "__main__":
    app.run(port=5000, debug=True)