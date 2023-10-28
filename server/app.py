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
        password = data['password']
        q = f"SELECT * from users where username = %s and password = %s"
        cur.execute(q, (username, password))
        user = cur.fetchone()
        if not user:
            return {
                "Status": 500,
                "Error": "Invalid credentials."
            }, 500
        return user



if __name__ == "__main__":
    app.run(port=5000, debug=True)