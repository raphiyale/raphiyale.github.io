//Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/css3_logo1.png') {
      myImage.setAttribute ('src','images/w3c.png');
    } else {
      myImage.setAttribute ('src','images/css3_logo1.png');
    }
}

//Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to my site, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
    } else {
        var storedName = localStorage.getItem('name');
        myHeading.innerHTML = 'Welcome to my site, ' + StoredName;
}

myButton.onclick = function() {
    setUserName();
}
