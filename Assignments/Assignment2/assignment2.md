# COIS 2430H Assignment 2

### Question 1
![Assignment 2 Question 1](Assignment2.1/A2q1.png)


#### Question Two - Part A UnStyled
![Assignment 2 Part A](Assignment2.1/A2PA.png)

### Question Two Part A Styled
![Assignment 2 Part B](Assignment2.2/A2PA2.png)

### Code 
``` html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/main.css" />
    <title>Assignment 2 Part A</title>
    <script
      src="https://kit.fontawesome.com/b64131f3cf.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <header>
      <h1>Part A - Flexbox Navigation</h1>
      <div class="navbar">
        <div class="broomball">
          <h1><i class="fa-solid fa-broom-ball" title="Broomball"></i></h1></div>
        <ul class="links">
          <a href="http://127.0.0.1:5500/Assignment2/Assignment2.3/index.html">Home</a></li>
          <a href="herp">Products</a>
          <a href="her">Services</a>
        </ul>
        <div class="inputbox">
        <div class="searchicon">
          <i class="fa-solid fa-search"></i></div>
        <input type="text" placeholder=""/>
        <button type="submit">Go</button></div>
      </div>
        </section> 
    </header>
  </body>
</html>
```

``` css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;
}

.navbar {
    display: flex;
    align-items: center;
    width: 65em;
    height: 3em;
    background-color: rebeccapurple; 
    border: none;
    border-radius: 0.25em;
  }

  .navbar .links {
    display: flex;
    align-self: center;
    gap: 2rem;
  }

.navbar .inputbox {
 position: relative;
 top: -0.5em;
 left: 3em;
align-items: center;
padding-left: 45%;
  }
.inputbox i {
  position: absolute;
  align-items: center;
  left: 29.5em;
  top: 1em;
  font-size: 1em;
}
  a:visited {
color:#ff6666
  }
  a:link {
    font-weight: 400;
    font-size: 1em;
    text-decoration: none;
    margin-left: -1em;
    color: #ccff66
  }
  a:hover {
color: white;
  }

.navbar .broomball {
  margin-left: 1em;
    color: white;
}

.navbar .searchicon {
    color: white;
}


a:link 
{
color: #ccff66;;
}
a:visited {
color: #ff6666;
}
a:hover {
    color: pink;
}


[type=text] {
background-color: #2ec4b6;
height: 1.75em;
border-style: none;
border-radius: 0.25em;
margin-top: 1em;
  }

[type=submit] {
position: absolute;
top: 1em;
left: 39em;
background-color: white;
font-weight: 400;
font-size: 1em;
border-style: none;
width: 3em;
border-radius: 0.5em;
color:rebeccapurple;
  }
```
### Question 2 Part B - Unstyled
![Assignment 2 Part B](Assignment2.3/A2PA.png)

### Question 2 Part B - Styled
![Assignment 2 Part B](Assignment2.3/A2PB.png)

### Code
```html
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/main.css" />
    <title>Assignment 2 Part A</title>
    <script
      src="https://kit.fontawesome.com/b64131f3cf.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <header> 
<h1>Part B - Login Form</h1>
      <div class = "navbar">
        <h1>Login</h1>
        <div class="input-box">
          <h3>Username</h3><input type="text" placeholder="Type your username"/>
          <i class="fa-solid fa-user"></i></div>
          <div class="input-box">
            <h3>Password</h3><input type="text" placeholder="Type your password" />
            <i class="fa-solid fa-lock"></i></div>
          <div> <a href="#for-further-reading" class="forgot">Forgot Password?</a>
            <button type="submit" class ="button">LOGIN</button></div>
            <div class="signup">
            <h2>Or Sign in Using Social</h2>
            <div class="icons"> 
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-apple"></i></div>
            <h2>Or Sign Up With Email</h2>
            <a href="#for-further-reading" class="signuplink">Sign Up</a></div>
          </section>
          </div>
        </div>
              </section>
              </div>
            </div>
          </div>
        </section> 
    </header>
  </body>
</html>
```
```css 
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
* {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: bold;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60em;
    background-image: linear-gradient(to right, rgb(186, 189, 229), midnightblue);
}

.navbar h1 {
    margin-top: 1em;
    font-weight: 700;
    text-align: center;
    color: black;
}
.navbar {
    display: grid;
    border-radius: 0.5em;
    width: 30em; 
    height: 45em;
    background: white;
    color: lightgray;
    padding: 1em 2em;
}

.navbar .input-box {
    position: relative;
    width: 90%;
    height: 0.5em
}
.navbar input {
    position: absolute;
    top: 1em;
    left: 1em;
    width: 100%;
    height: 100%;
    background: transparent;
    border-style: none none solid none;
    padding: 1em 1em 1em 2em;
    border-color: lightgrey;
    font-size: 1em;
}


.input-box i {
    position: absolute;
    left: 1em;
    top: 1.5em;
    font-size: 1em;
}

.input-box h3 {
    position: absolute;
    top: -1em;
    font-weight: 700em;
    color: black;
}

.navbar input:hover {
    color: black;
    border-color: black;
    }

.navbar .icons:hover {
    color: black;
    }

.navbar .input-box:hover {
    color:black;
}

.signup {
    position: relative;
    left: 17em;
    top: -1.5em;
    font-weight: 400;
    font-size: 0.5em;
    color: black;
}

.signup h2:first-of-type {
    position: absolute;
     top: -7em;
}
.signup h2:last-of-type {
    position: absolute;
    top: 4em;
}


.signuplink {
    position: absolute;
    top: 7em;
    left: 4em;
    font-size: 1.5em;
}
.icons {
    position: relative;
    top: -2em;
    left: -0.25em;
    padding-bottom: 1em;
    font-size: 3.5em;
}
.icons i:first-of-type {
    position: absolute;
    left: 0em;
  color:rgb(37, 37, 107);
  font-size: 1.3em;
}
.icons i:nth-of-type(2) {
    position: absolute;
    left: 2em;
    padding-top: 0.3em;
    color: white;
    background-color: #1DA1F2;
    text-align: center;
    width: 1.5em;
    height: 1.5em;
    border-style: none;
    border-radius: 1.5em;
  }
.icons i:last-of-type {
    position: absolute;
    left: 4.2em;
    padding-top: 0.2em;
    color: white;
    background-color: black;
    text-align: center;
    width: 1.5em;
    height: 1.5em;
    border-style: none;
    border-radius: 1.5em;
  }

a:link 
{
color: black;
}
a:visited {
color: #ff6666;
}
a:hover {
    color: pink;
}

.forgot
{
 position: absolute;
    top: 40.5em;
    left: 88em;
    font-size: 0.75em;
    font-weight: 300;


}
.navbar .button {
    position: absolute;
    width: 25em;
    bottom: 23em;
    height: 3em;
    color: white;
    font-size: 1em;
    font-weight: 300;
    background-image: linear-gradient(to right, lightblue, midnightblue, purple, rgb(81, 9, 126));
    border: none;
    outline: none;
    border-radius: 1.5em;
    cursor: pointer;
}

```