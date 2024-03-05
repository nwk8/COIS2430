# COIS 2430H Assignment 2

```css
@import url("Assignment2.1/styles/reset.css"); 

p { 
    color: rebeccapurple;
}

h1, h2 {
   color: midnightblue;
}

ul li {
   color: darkslateblue;
}

.title {  
    color: aqua;
}
    
.term:first-child{
    color: darkmagenta;
}
.term:last-child{
   color: cadetblue;
}

#var_fallback {
    color: skyblue; 
}

nav a:link {
    color: green;
}

nav a:visited {
    color: lightgreen;
}

nav a:hover {
   color: darkgreen;
}

a:link {
    color: blue;
}

a:visited {
    color: dodgerblue;
}

a:hover {
   color: darkblue;
}

dd:nth-child(4){
   color:firebrick;
}

h1 + p::first-letter, h2 + p::first-letter{
   color: sienna; 
   font-size: 1.5em; /* Added 'em' for clarity */
}

ul li::marker {
   color: goldenrod;
}

a::after{
   content: "💯";
}

/* Question 2 */

#Q2PA > nav a:link {
    color: #ccff66;
}

#Q2PA > nav a:visited {
    color: #ff6666;
}

#Q2PA > nav a:hover {
   color: pink;
}


##  CSS Reset and Additional Styles

Below is a CSS reset intended to normalize styling across different browsers, followed by some additional style definitions:

```css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* Extra Styles */
input[type="checkbox"] {
    vertical-align: middle;
}
sup, sub {
    font-size: 50%;
    margin: 0;
    padding: 0;
    border: 0;
}

* {
    font-family: "Arial", sans-serif;
    font-weight: 700;
    font-style: normal;
}

.navbar {
    display: flex;
    align-items: center;
    width: 60%;
    height: 50%;
    background-color: rebeccapurple;
}

.navbar .links {
    display: flex;
    align-self: center;
    gap: 2rem;
}

.navbar .inputbox {
    display: flex;
    justify-content: right;
    padding-left: 45%;
    position: absolute;
    gap: 0.2rem;
    align-items: flex-end;
    flex-direction: row;
}

.inputbox i {
    position: absolute;
    left: 72.5em;
    top: 77%;
    transform: translateY(-50%);
    font-size: 0.75em;
}

a:visited {
    color: #ff6666;
}

a:link {
    color: #ccff66;
}

a:hover {
    color: white;
}

.navbar .broomball, .navbar .searchicon {
    color: white;
}

[type="text"] {
    background-color: #2ec4b6;
    border-style: none;
    border-radius: 0.5em;
    margin-top: 1em;
}

[type="submit"] {
    background-color: white;
    border-style: none;
    border-radius: 0.5em;
    color: rebeccapurple;
}

# Assignment 2 Part A - HTML Document

Below is the HTML structure for the Assignment 2 Part A, featuring Flexbox navigation and integration with FontAwesome for icons.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/main.css" />
    <title>Assignment 2 Part A</title>
    <script src="https://kit.fontawesome.com/b64131f3cf.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <header>
      <h1>Part A - Flexbox Navigation</h1>
      <div class="navbar">
        <div class="broomball">
          <h1><i class="fa-solid fa-broom-ball" title="Broomball"></i></h1>
        </div>
        <ul class="links">
          <li><a href="http://127.0.0.1:5500/Assignment2/Assignment2.3/index.html">Home</a></li>
          <li><a href="herp">Products</a></li>
          <li><a href="her">Services</a></li>
        </ul>
        <div class="inputbox">
          <div class="searchicon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <input type="text" placeholder=""/>
          <button type="submit">Go</button>
        </div>
      </div>
    </header>
  </body>
</html>
##  Assignment 2 Part B - HTML Document for Login Form

Below is the HTML structure for Assignment 2 Part B, which features a login form along with social media sign-in options:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./main.css" />
    <title>Assignment 2 Part A</title>
    <script src="https://kit.fontawesome.com/b64131f3cf.js" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <h1>Part B - Login Form</h1>
        <div class="navbar">
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" placeholder="Type your username"/>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Type your password" />
                <i class="fa-solid fa-lock"></i>
            </div>
            <div>
                <a href="#for-further-reading">Forgot Password?</a>
                <button type="submit" class="button">Login</button>
            </div>
            <div class="signup">
                <h2>Or Sign in Using Social</h2>
                <div class="icons">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-apple"></i>
                </div>
                <h2>Or Sign Up With Email</h2>
                <a href="#for-further-reading">Sign Up</a>
            </div>
        </div>
    </header>
</body>
</html>

## Custom Styling with CSS and Google Fonts

This section contains CSS for a custom-styled component that uses the Google Font "Poppins" and demonstrates various CSS properties for layout, typography, and interactivity.

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

* {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
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
    text-align: center;
}

.navbar {
    display: grid;
    border-radius: 0.5em;
    width: 30em;
    height: 40em;
    background: white;
    color: black;
    padding: 1em 2em;
}

.navbar .input-box {
    position: relative;
    width: 95%;
    height: 40%;
}

.navbar input {
    width: 100%;
    height: 100%;
    background: transparent;
    border-style: none solid none none;
    padding: 1em 1em 1em 2em;
    border-color: black;
    font-size: 1em;
}

.input-box input::placeholder {
    color: white;
}

.input-box i {
    position: absolute;
    left: 0.5em;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1em;
}

.signup {
    font-size: 1em;
    font-weight: 300;
    font-style: italic;
}

.icons {
    grid-template-columns: auto;
    justify-self: center;
    gap: 2rem;
}

a:link {
    color: blue;
}

a:visited {
    color: #ff6666;
}

a:hover {
    color: pink;
}

.navbar .button {
    width: 100%;
    height: 2em;
    background-image: linear-gradient(to right, lightblue, purple);
    border: none;
    outline: none;
    border-radius: 0.5em;
    cursor: pointer;
    font-size: 1em;
    font-weight: 700;
}

```
---
### Below are the images for this assignment. 

![alt text](image1.png)
---

![alt text](image2.png)
---

![alt text](image3.png)

