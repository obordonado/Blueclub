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

> In this ocasion I've made a relational database using the tecnologies below...
<img src="/img/ubuntu.png" style="width:80px;"/>  

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


>It will generate the <b>JSON Web Token</b> that looks like ;

><i>"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJuYW1lIjoiWm90ZSIsImNsaWVudF9udW1iZXIiOjY2LCJhZ2UiOjE1LCJnZW5kZXIiOiJtYWxlIiwicGFzc3dvcmQiOiIkMmEkMDgkRjFqRzh0UWJuNWZFc1RwTnlUZzcuTzVaSFMxSWtmYnB5T2wwM013Tld4NVdndEl5d2lYWHUiLCJyb2xlIjoiYWRtaW4iLCJjcmVhdGVkQXQiOiIyMDIyLTA2LTE2VDE3OjExOjI5LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA2LTE2VDIwOjM5OjI2LjAwMFoifSwiaWF0IjoxNjU1NDc0NDM4LCJleHAiOjE2NTYzNzQ0Mzh9.-vkJX64xwksEKGSsOa7yZET12o8TRZxO2HoPAoLa7DM"</i>

>* <b>The expiring date of the token as well as the strength can be set as we wish.</b> 

----

- <b>.../users/update</b>
<img src="/img/userUpdate.png" style="width:600px;"/>

>Here we update a user, and can see that the original password (123456) has been previously <b>Hashed.</b>

<br>

----


- <b>.../users</b>
<img src="/img/listUsers.png" style="width:600px;"/>

>In this case we get the complete JSON of users. 
>As seen above, the data we obtain has been filtered so that no sensible data (password,role) can be seen.
---

<br>

- <b>.../films/addfilm</b>
<img src="/img/addFilm.png" style="width:600px;"/>

---

<br>


- <b>.../films/search</b>
<img src="/img/searchFilm.png" style="width:600px;"/>

> Here we get the information of the film we are searching for.

---

<br>

- <b>.../films</b>
<img src="/img/getFilms.png" style="width:600px;"/>

>In this case we get the complete JSON of films. 

---

<br>

- <b>POST.../rent/rent</b>
<img src="/img/makeRent.png" style="width:600px;"/>

>We generated another input in rent. 


---

<br>

- <b>GET.../rent/rent</b>
<img src="/img/getRents.png" style="width:600px;"/>

>This user has the "isadmin" attribute.
>By this method we retrieve the JSON package of all rents made.