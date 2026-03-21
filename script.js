

const btn = document.getElementById("btn").addEventListener("click", function()
{
    alert("This is a personal info of Mr. Shreyas Pail! dont share it with anyone!");
});


document.getElementById("loginForm").addEventListener("submit", function(event){

   event.preventDefault(); // prevents page reload

   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;

   console.log("Email:", email);
   console.log("Password:", password);

   document.getElementById("message").innerHTML = "Login Successful";
});



