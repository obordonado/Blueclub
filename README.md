<!-- ![Axios](/img/axios.png)*Axios* -->
<img src="/img/Geekshubs.png" style="width:900px;"/>

---

<pre>
<center><img src="/img/axios.png" style="width:80px;"/>Axios  <img src="/img/bcrypt.jpg" style="width:180px;"/>     <img src="/img/jwt.png" style="width:80px;"/>    <img src="/img/mysql.jpg" style="width:180px;"/>   <img src="/img/doenv.png" style="width:90px";></center>


<center><img src="/img/Nodejs.png" style="width:150px;"/>      <img src="/img/nodeExpress.png" style="width:150px;"/>      <img src="/img/nodemon.png" style="width:80px;"/>      <img src="/img/sql.jpg" style="width:100px;"/>      <img src="/img/sequelize-icon.svg" style="width:80px;"/></center>
</pre>

---

# <center>Relational Database Project.</center>

## REST API <I>" BLUE-CLUB VIDEO STORE ".</I> 

> In this ocasion I've made a relational database installing using the listed below tecnologies on <b>Linux 20.04 OS.</b>

    "axios": "0.27.2",
    "bcryptjs": "2.4.3",
    "jsonwebtoken": "8.5.1",
    "mysql2": "2.3.3",
    "dotenv": "16.0.1",
    "nodeJS"
    "express": "4.18.1",
    "nodemon": "2.0.16",
    "mysql-server"
    "sequelize": "6.20.1"

>*  In order to divide the program logic, I've used the <b>MVC (Model-View-Controller)</b> architectural pattern, making the code easier to manipulate if needed in the future.

>* <b>JSON Web Token</b> will grant secure shared information between two parties and <b>BCRYPTJS</b> will hash every password

>* It's also possible to create a <b>user with administrator privileges.</b>


<br>

>* By Using <b>POSTMAN</b> and <b>HTTP methods GET, POST, PUT</b> you will be able to access the following endpoints:
<br>

## List of endpoints:

- <b>.../users/adduser</b>
<img src="/img/adduser.png" style="width:600px;"/>

------

<br>


- <b>.../users/login</b>

<img src="/img/userLogin.png" style="width:600px;"/>


>It will give the <b>JSON Web Token</b> that looks like ;

><i>"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJuYW1lIjoiWm90ZSIsImNsaWVudF9udW1iZXIiOjY2LCJhZ2UiOjE1LCJnZW5kZXIiOiJtYWxlIiwicGFzc3dvcmQiOiIkMmEkMDgkRjFqRzh0UWJuNWZFc1RwTnlUZzcuTzVaSFMxSWtmYnB5T2wwM013Tld4NVdndEl5d2lYWHUiLCJyb2xlIjoiYWRtaW4iLCJjcmVhdGVkQXQiOiIyMDIyLTA2LTE2VDE3OjExOjI5LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA2LTE2VDIwOjM5OjI2LjAwMFoifSwiaWF0IjoxNjU1NDc0NDM4LCJleHAiOjE2NTYzNzQ0Mzh9.-vkJX64xwksEKGSsOa7yZET12o8TRZxO2HoPAoLa7DM"</i>

>* <b>The expiring date of the token can be set as we wish.</b> 

----

- <b>.../users/update</b>








- .../users