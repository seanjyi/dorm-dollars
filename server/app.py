from flask import Flask, jsonify, request
from flask_cors import CORS
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
CORS(app)

@app.route("/", methods=["GET", "POST"])
def hello_world():
    if request.method == "GET":
        cur.execute("SELECT * from person;")
        return cur.fetchall()
    elif request.method == "POST":
        return {"message":"Hello World!"}
    
@app.route("/login", methods=["POST"])
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

@app.route('/transactions', methods=["POST"])
def get_transactions():
    if request.method == "POST":
        params = request.get_json()
        userid = params['userid']
        category = params['category']
        start_date = params['start_date']
        end_date = params['end_date']

        if category == '' and start_date == '' and end_date == '':
            cur.execute('SELECT * '
                        'FROM public.transactions '
                        'WHERE userid=%s', userid)
            response = cur.fetchall()

            ret = []
            for line in response:
                ret.append({
                    'transactionid': line['transactionid'],
                    'userid': line['userid'],
                    'date': line['date'].strftime("%Y-%m-%d"),
                    'category': line['category'],
                    'amount': float(line['amount']),
                    'method_of_payment': line['method_of_payment'],
                    'repayment': line['repayment'],
                })

            return jsonify(ret)
        elif category == '' and start_date == '' and len(end_date) > 0:
            cur.execute('SELECT * '
                        'FROM public.transactions '
                        'WHERE userid=%s AND date<=%s', (userid, end_date))
            response = cur.fetchall()

            ret = []
            for line in response:
                ret.append({
                    'transactionid': line['transactionid'],
                    'userid': line['userid'],
                    'date': line['date'].strftime("%Y-%m-%d"),
                    'category': line['category'],
                    'amount': float(line['amount']),
                    'method_of_payment': line['method_of_payment'],
                    'repayment': line['repayment'],
                })

            return jsonify(ret)
        elif category == '' and len(start_date) > 0 and end_date == '':
            cur.execute('SELECT * '
                        'FROM public.transactions '
                        'WHERE userid=%s AND date>=%s', (userid, start_date))
            response = cur.fetchall()

            ret = []
            for line in response:
                ret.append({
                    'transactionid': line['transactionid'],
                    'userid': line['userid'],
                    'date': line['date'].strftime("%Y-%m-%d"),
                    'category': line['category'],
                    'amount': float(line['amount']),
                    'method_of_payment': line['method_of_payment'],
                    'repayment': line['repayment'],
                })

            return jsonify(ret)
        elif category == '' and len(start_date) > 0 and len(end_date) > 0:
            cur.execute('SELECT * '
                        'FROM public.transactions '
                        'WHERE userid=%s AND date BETWEEN %s AND %s', (userid, start_date, end_date))
            response = cur.fetchall()

            ret = []
            for line in response:
                ret.append({
                    'transactionid': line['transactionid'],
                    'userid': line['userid'],
                    'date': line['date'].strftime("%Y-%m-%d"),
                    'category': line['category'],
                    'amount': float(line['amount']),
                    'method_of_payment': line['method_of_payment'],
                    'repayment': line['repayment'],
                })

            return jsonify(ret)
        elif len(category) > 0 and start_date == '' and end_date == '':
            cur.execute('SELECT * '
                        'FROM public.transactions '
                        'WHERE userid=%s AND category=%s', (userid, category))
            response = cur.fetchall()

            ret = []
            for line in response:
                ret.append({
                    'transactionid': line['transactionid'],
                    'userid': line['userid'],
                    'date': line['date'].strftime("%Y-%m-%d"),
                    'category': line['category'],
                    'amount': float(line['amount']),
                    'method_of_payment': line['method_of_payment'],
                    'repayment': line['repayment'],
                })

            return jsonify(ret)
        
        elif len(category) > 0 and start_date == '' and len(end_date) > 0:
            cur.execute('SELECT * '
                        'FROM public.transactions '
                        'WHERE userid=%s AND category=%s AND date<=%s', (userid, category, end_date))
            response = cur.fetchall()

            ret = []
            for line in response:
                ret.append({
                    'transactionid': line['transactionid'],
                    'userid': line['userid'],
                    'date': line['date'].strftime("%Y-%m-%d"),
                    'category': line['category'],
                    'amount': float(line['amount']),
                    'method_of_payment': line['method_of_payment'],
                    'repayment': line['repayment'],
                })

            return jsonify(ret)
        elif len(category) > 0 and len(start_date) > 0 and end_date == '':
            cur.execute('SELECT * '
                        'FROM public.transactions '
                        'WHERE userid=%s AND category=%s AND date>=%s', (userid, category, start_date))
            response = cur.fetchall()

            ret = []
            for line in response:
                ret.append({
                    'transactionid': line['transactionid'],
                    'userid': line['userid'],
                    'date': line['date'].strftime("%Y-%m-%d"),
                    'category': line['category'],
                    'amount': float(line['amount']),
                    'method_of_payment': line['method_of_payment'],
                    'repayment': line['repayment'],
                })

            return jsonify(ret)
        else:
            cur.execute('SELECT * '
                        'FROM public.transactions '
                        'WHERE userid=%s AND category=%s AND date BETWEEN %s AND %s', 
                        (userid, category, start_date, end_date))
            response = cur.fetchall()

            ret = []
            for line in response:
                ret.append({
                    'transactionid': line['transactionid'],
                    'userid': line['userid'],
                    'date': line['date'].strftime("%Y-%m-%d"),
                    'category': line['category'],
                    'amount': float(line['amount']),
                    'method_of_payment': line['method_of_payment'],
                    'repayment': line['repayment'],
                })

            return jsonify(ret)
        
@app.route('/loans', methods=["POST"])
def get_loans():
    if request.method == "POST":
        params = request.get_json()
        userid = params['userid']

        cur.execute('SELECT * '
                    'FROM public.loans '
                    'WHERE userid=%s', userid)
        response = cur.fetchall()
        
        ret = []
        for line in response:
            ret.append({
                'loanid': line['loanid'],
                'userid': line['userid'],
                'loan_name': line['loan_name'],
                'amount': float(line['amount']),
            })

        return jsonify(ret)

@app.route('/add_transaction', methods=['POST'])
def add_transaction():
    if request.method == 'POST':
        params = request.get_json()
        userid = params['userid']
        category = params['category']
        date = params['date']
        amount = params['amount']
        m_o_p = params['method_of_payment']

        cur.execute('INSERT INTO public.transactions '
                    '(userid, "date", category, amount, method_of_payment, repayment) '
                    'VALUES(%s, %s, %s, %s, %s, %s)',
                    (userid, date, category, amount, m_o_p, ''))
        conn.commit()
        return "Success"

@app.route('/add_loan', methods=['POST'])
def add_loans():
    if request.method == 'POST':
        params = request.get_json()
        userid = params['userid']
        loan_name = params['loan_name']
        amount = params['amount']

        cur.execute('INSERT INTO public.loans '
                    '(userid, loan_name, amount) '
                    'VALUES(%s, %s, %s);',
                    (userid, loan_name, amount))
        conn.commit()
        return "Success"

@app.route('/delete_transaction', methods=['POST'])
def delete_transaction():
    if request.method == 'POST':
        transactionid = request.get_json()['transactionid']
        
        cur.execute('DELETE FROM public.transactions '
                    'WHERE transactionid=%s;', transactionid)
        conn.commit()
        return "Success"
    
@app.route('/delete_loan', methods=['POST'])
def delete_loan():
    if request.method == 'POST':
        loanid = request.get_json()['loanid']
        
        cur.execute('DELETE FROM public.loans '
                    'WHERE loanid=%s;', loanid)
        conn.commit()
        return "Success"


if __name__ == "__main__":
    app.run(port=5000, debug=True)