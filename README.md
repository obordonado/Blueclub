<!-- ![Axios](/img/axios.png)*Axios* -->
<img src="/img/Geekshubs.png" style="width:900px;"/>

---

<pre>
<center><img src="/img/axios.png" style="width:80px;"/>Axios  <img src="/img/bcrypt.jpg" style="width:180px;"/>     <img src="/img/jwt.png" style="width:80px;"/>    <img src="/img/mysql.jpg" style="width:180px;"/>   <img src="/img/doenv.png" style="width:90px";></center>


<center><img src="/img/Nodejs.png" style="width:150px;"/>      <img src="/img/nodeExpress.png" style="width:150px;"/>      <img src="/img/nodemon.png" style="width:80px;"/>      <img src="/img/sql.jpg" style="width:100px;"/>      <img src="/img/sequelize-icon.svg" style="width:80px;"/></center>
</pre>

---

# <center>Relational Database Project.</center>

## REST API <I>" VIDEO STORE ".</I> 

> In this ocasion I've made a relational database using the listed below tecnologies on <b>Linux 20.04 OS.</b>

    "axios": "0.27.2",
    "bcryptjs": "2.4.3",
    "dotenv": "16.0.1",
    "express": "4.18.1",
    "jsonwebtoken": "8.5.1",
    "mysql2": "2.3.3",
    "nodemon": "2.0.16",
    "sequelize": "6.20.1"

>*  In order to divide the program logic, I've used the <b>MVC (Model-View-Controller)</b> architectural pattern, making the code easier to manipulate if needed further on.

>* <b>JSON Web Token</b> will grant secure shared information between two parties and <b>BCRYPTJS</b> will hash every password

>* It's also possible to create a <b>user with administrator privileges.</b>


<br>
> <b>By Using POSTMAN you will be able to access the following endpoints:</b>

## List of endpoints:

- .../users/adduser

        {
            "name":"Name",
            "client_number": "some number",
            "age":"some number",
            "gender":"some gender",    
            "password": "some password",
            "role":"can be <b>admin</b> or none"
        }

- .../users/login
- .../users/update
- .../users