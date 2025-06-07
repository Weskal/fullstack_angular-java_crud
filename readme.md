
# Employee Management CRUD Application

This project is a full stack CRUD application for managing employees, built using Java (Spring Boot) for the backend and Angular for the frontend. It was created as a learning exercise to understand how to develop a complete CRUD system involving these technologies.

__Features__:
- Create, Read, Update, and Delete (CRUD) operations for employee records
- Backend REST API implemented with Spring Boot
- Frontend SPA built with Angular
- Integration between frontend and backend
- Simple and clean UI with Bootstrap

Technologies Used
- Java 17+
- Spring Boot
- Maven
- Angular 15+
- Node.js
- Bootstrap CSS
- MySQL 

## Getting Started 🚀
🛠️ __Prerequisites:__ 

Make sure you have the following installed:

- ☕ Java JDK 17 or higher
- 📦 Maven
- 🟢Node.js and npm
- 🅰️ Angular CLI (npm install -g @angular/cli)
- 🐬 MySQL (or your preferred relational database)
- 🌱 Git

### 📚 1) Clone the Repository

```
git clone https://github.com/Weskal/fullstack_angular-java_crud
cd fullstack_angular-java_crud
```

### 💾 2) Create SQL database

Create a database named as below
```
employee_management_system
```

### ⚙️ 3) Backend Setup

In the backend directory, find the file in src/main/resources/example-application.properties
and rename to 
```
application.properties
```

Now, inside springboot-backend directory, run the Backend with

```
./mvnw spring-boot:run
```

You can test the backend going to http://localhost:8080/api/v1/

### 🌐 4) Frontend Setup

navigate to frontend folder 
```
cd angular-frontend
```

Install dependencies

__I)__ npm & node.js
```
npm install
``` 

__II)__ Install bootstrap if no installed yet
```
npm install bootstrap
``` 

also add bootstrap to your angular.json in
```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]

```

__III)__ In the frotend folder, run Angular
```
ng serve
```

### 4) Test

Type http://localhost:4200 in your browser and see if it works!

## 📚 Notes
- This project is intended as a learning tool to understand full stack CRUD development with Java and Angular.
- Make sure your backend is running before starting the frontend to avoid API connection errors.
- You can extend this project by adding authentication, pagination, and better error handling.

## 🐞 Troubleshooting
- If Angular cannot connect to backend, check CORS settings and backend server URL.
- If you get database connection errors, verify your database credentials and that the database is running.
- Delete node_modules and run npm install again if you face dependency issues.

## 💡

Special thanks to Java Guides for the great tutorial that helped guide this project!

## 📢 Contribution
Feel free to open issues or submit PRs with improvements, ideas, or fixes.

## 🧑‍💻 Author
Developed by __Gabriel Paliato__

# 📲 Connect with me on LinkedIn
I am always open to exchanging experiences, sharing knowledge, and exploring new opportunities in Data Engineering, Fullstack Development, Data Analysis, and DevOps.

Let's connect!
https://www.linkedin.com/in/gabriel-paliato-49467b211/