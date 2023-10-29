# Dorm Dollars - budgeting for college

Dorm Dollars is a college/beginner friendly budget planner that highlights useful information about your spending habits.

<img src="https://github.com/seanjyi/dorm-dollars/assets/80228469/8eb00561-773a-424e-8105-e20bc05a9c16" width="400">

## Team members 
[Abel Lu](https://www.linkedin.com/in/aluprof4/), 
[Eric Li](https://www.linkedin.com/in/ericli0721/), 
[Sean Yi](https://www.linkedin.com/in/seanjyi/) 


### Application architecture
This full-stack application was built using **React** for the frontend, **Flask** for the backend, and **Google Cloud Postgres** as a database.
We also used **CanvasJS** to create graphs, and leveraged **Vite** as a build tool.

<img src="/media/app_architecture.png" width="600">

### Frontend

Our application has three views:
- A login page
- Home page / dashboard
- Transaction history page

### Login

The login page utilizes the **CORS** library to authenticate the user.  

<img src="https://github.com/seanjyi/dorm-dollars/assets/80228469/58e5ab3d-f6e1-498f-a79a-7f91e92ddb9f" width="800">  

### Dashboard

The dashboard displays numerous user data statistics:
- Summary stats: monthly earnings, monthly expense, and net income
- Recent purchases: 5 most recent transactions the user made
- Display graphs: current month's spending by category and spending by payment method

<img src="https://github.com/seanjyi/dorm-dollars/assets/66392457/dc0962b5-5930-4e1f-b353-f09c0563ba08" width="800">
<img src="https://github.com/seanjyi/dorm-dollars/assets/66392457/4ba87417-94ba-4241-b907-3b7c200044e1" width="800">

### History

The history page allows the user to view their past transactions, add new transactions, and filter the transactions.

<img src="https://github.com/seanjyi/dorm-dollars/assets/66392457/0591ac3c-c1f7-4c87-9096-bf8d8ad6da25" width="800">
<img src="https://github.com/seanjyi/dorm-dollars/assets/66392457/47015f7c-6036-4c2b-b7b0-86d6477cd5d2" width="800">
<img src="https://github.com/seanjyi/dorm-dollars/assets/66392457/0485b9ec-f28a-4600-ab85-106dff6c7527" width="800">

### Database

The database is hosted on **Google Cloud**.

<img src="https://github.com/seanjyi/dorm-dollars/assets/80228469/0dd2a498-27d1-47cf-872e-7c813345f1da" width="800">

The database utilizes a **PostgreSQL** database, which had 3 tables: Users, Loans, Tranactions.

<img src="https://github.com/seanjyi/dorm-dollars/assets/80228469/af9cd05e-0e79-437c-871f-1f06d99facab" width="800">
<img src="https://github.com/seanjyi/dorm-dollars/assets/80228469/3160d7c8-332b-4dda-bab4-539691fd3b0d" width="800">
<img src="https://github.com/seanjyi/dorm-dollars/assets/80228469/5a8715e0-7dfe-4592-8104-38bc83de4a66" width="800">

<img src="/media/wireframe_struct.png" width="400">  
<img src="/media/login.png" width="400">  
<img src="/media/dashboard.jpg" width="400">  
<img src="/media/history.png" width="400">

### Reflection

<img src="/media/sql_struct.png" width="500">  

