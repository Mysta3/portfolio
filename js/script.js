
  /* Reference Messages Collection */ 
  //var db = firebase.firestore("https://contactform-105e8.firebaseio.com/");
  var db = firebase.firestore();

document.querySelector('#submit').addEventListener('click',
    function(){
        db.collection('newMessage').doc().set({
            name    : document.querySelector('#name').value,
            email   : document.querySelector('#email').value,
            message : document.querySelector('#message').value
        });
        console.log("submit successful")
    }
)



//listen for Form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    //Get values
    var name    = document.getElementById(name).value; //getInputVal(name);
    var email   = document.getElementById(email).value; //getInputVal(email);
    var message = document.getElementById(message).value; //getInputVal(message);


    //call saveMessage funciton
    saveMessage(name, email, message);
} 

/*
//Function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

*/


//Save Message to firebase messages table

function saveMessage(name, email, message){
    var newMessageref = messageref.push();
    newMessageref.set({
        name: name,
        email: email,
        message: message
    });
}


