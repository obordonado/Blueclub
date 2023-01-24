
<pre>
<center><img src="/img/axios.png" style="width:80px;"/>Axios  <img src="/img/bcrypt.jpg" style="width:180px;"/>     <img src="/img/jwt.png" style="width:80px;"/>    <img src="/img/mysql.jpg" style="width:180px;"/>   <img src="/img/doenv.png" style="width:90px";></center>


<center><img src="/img/Nodejs.png" style="width:150px;"/>      <img src="/img/nodeExpress.png" style="width:150px;"/>      <img src="/img/nodemon.png" style="width:80px;"/>      <img src="/img/sql.jpg" style="width:100px;"/>      <img src="/img/sequelize-icon.svg" style="width:80px;"/></center>
</pre>

---

# <center>Relational Database Project.</center>

## RESTful API <I>" BLUE-CLUB VIDEO STORE ".</I> 

> In order to make a video store, I've made a relational database using the above tecnologies.
<img src="/img/ubuntu.png" style="width:80px;"/>  

>LINUX IS AWESOME!

<center><img src="/img/tablas.png" style="width:400px;"/> </center> 


>*  To separate the programs logic, I've used the <b>MVC (Model-View-Controller)</b> architectural pattern, making the code easier to manipulate if needed in the future.

>* <b>JSON Web Token</b> will grant secure shared information between two parties and <b>BCRYPTJS</b> will hash every password.

>* It's also possible to create a <b>user with administrator privileges.</b>
>* By the way, it's design won't let you insert an empty or null attribute when using a POST method, and will give feedback in case you do so.


>* By Using <b>POSTMAN</b> and <b>HTTP methods GET, POST, PUT and DELETE</b> you will be able to access the endpoints and manage the database.

> * #### Important info:
>* <b>Keep in mind that all you are able to do with the film db, could be easily done with User && Rent tables by using the code contained in "controllers/FilmsController.js"</b>

>* I've left many <b>references inside the code</b> so that anyone can understand what's going on.
<br>

## Sorted list of endpoints:

###### <center><span style="color:red"> USER MANAGEMENT</span></center> 



- <b>.../users/adduser</b>
<img src="/img/adduser.png" style="width:600px;"/>

>This way you will be able to add a <b>new user.</b>
------

<br>


- <b>.../users/login</b>

<img src="/img/userLogin.png" style="width:600px;"/>


>When you log in, it will generate the <b>JSON Web Token</b> that looks like ;

><i>"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJuYW1lIjoiWm90ZSIsImNsaWVudF9udW1iZXIiOjY2LCJhZ2UiOjE1LCJnZW5kZXIiOiJtYWxlIiwicGFzc3dvcmQiOiIkMmEkMDgkRjFqRzh0UWJuNWZFc1RwTnlUZzcuTzVaSFMxSWtmYnB5T2wwM013Tld4NVdndEl5d2lYWHUiLCJyb2xlIjoiYWRtaW4iLCJjcmVhdGVkQXQiOiIyMDIyLTA2LTE2VDE3OjExOjI5LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA2LTE2VDIwOjM5OjI2LjAwMFoifSwiaWF0IjoxNjU1NDc0NDM4LCJleHAiOjE2NTYzNzQ0Mzh9.-vkJX64xwksEKGSsOa7yZET12o8TRZxO2HoPAoLa7DM"</i>

>* <b>The expiring date of the token as well as the strength can be set as we wish in /config/auth.js.</b> 

----

- <b>.../users/update</b>
<img src="/img/userUpdate.png" style="width:600px;"/>

>Here we update any given user so that any user previously logged in can change its own info, and we can also see that the original password (123456) used to log in, has been <b>Hashed.</b>

<br>

----


- <b>.../users</b>
<img src="/img/listUsers.png" style="width:600px;"/>

>If <b>admin</b> wishes to do so, in this case we get the complete JSON of users.
>As seen above, the data we obtain has been <b>filtered</b> so that no sensible data (password,role) can be seen. This can be changed by modifying "..controllers/UserController.js", inside User.findAll(). 
---

###### <center><span style="color:red"> MOVIE MANAGEMENT</span></center> 

- <b>.../films/addfilm</b>
<img src="/img/addFilm.png" style="width:600px;"/>

>Only an <b>admin</b> can add a new movie. 

---



- <b>.../films/search</b>
<img src="/img/searchFilm.png" style="width:600px;"/>

> This method works by passing the name of the movie we're looking for through the body.

---


- <b>.../films/:id</b>
<img src="/img/getFilmById.png" style="width:600px;"/>

> This other method works by passing the id of the movie (in case we know it) through the url.

---


- <b>.../films/:title</b>
<img src="/img/getMovieByUrl.png" style="width:600px;"/>

> A better method is finding a movie by passing its name through the url.

---


- <b>.../films</b>
<img src="/img/getFilms.png" style="width:600px;"/>

>In this case we get the complete JSON of "films" in order to see the complete movie billboard. 

---

###### <center><span style="color:red"> RENT MANAGEMENT</span></center> 

- <b>POST.../rent/rent</b>
<img src="/img/makeRent.png" style="width:600px;"/>

>By usig <b>POST method</b>  we generated another "sale" in rent table. ("auth" needed)



---

- <b>GET.../rent/rent</b>
<img src="/img/getRents.png" style="width:600px;"/>

>Only a user with the <b>"isadmin"</b> attribute, will be able to have access to the whole rent JSON.
>By using this endpoint we retrieve the JSON object of all rents previously made.

----
###### <center><span style="color:red"> DELETING (Only working in Film db, but you get the idea..)</span></center> 

---

- <b>DELETE.../films/id</b>
<img src="/img/delById.png" style="width:600px;"/>

>The <b>"isadmin"</b> attribute is needed to delete a movie by id. 

>By using this method, we can <b>delete movies one by one</b> passing the id through the url.

<br>

----


- <b>DELETE.../films/</b>
<img src="/img/deleteSeveralById.png" style="width:600px;"/>

>The <b>"isadmin"</b> attribute is needed to <b>delete several movies by id.</b> 

><b>As mentioned in the begining of this document</b>, you could easily <b>ERASE THE WHOLE</b> movie db if you wished to do so.

<br>

----

<img src="/img/finish.png" style="width:300px;"/><img src="/img/end.jpg" style="width:200px;"/><img src="/img/end.jpg" style="width:200px;"/>


<br>

>It's been a wonderful experience to code this project.<br>
>I'm very open to any suggestions you may have about it !!<br>
>The whole job has taken approximately 20 hours from start to end


> Feel free to play with it Geek!!


