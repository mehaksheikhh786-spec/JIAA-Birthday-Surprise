function checkPassword(){

let password = document.getElementById("password").value;


if(password === "2009"){

document.getElementById("passwordBox").style.display="none";

document.getElementById("welcomeBox").classList.remove("hidden");

}

else{

document.getElementById("message").innerHTML =
"🥺 Wrong password, try again 💗";

}

}



function nextPage(){

alert("Next surprise is coming 💌");

}
