from flask import Flask, request, render_template
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()


conn = psycopg2.connect(
    host=os.getenv("DB_HOST"),
    database=os.getenv("DB_NAME"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASS")
)

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def hello_world():
    if request.method == "GET":
        return "<p>Hello World<p>"
    elif request.method == "POST":
        return {"message":"Hello World!"}
    
@app.route("/login/", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return "<p>Login page<p>"
    elif request.method == "POST":
        return {"message":"Login page"} 



if __name__ == "__main__":
    app.run(port=5000, debug=True)