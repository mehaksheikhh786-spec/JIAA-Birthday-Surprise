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

document.getElementById("welcomeBox").style.display="none";

document.getElementById("lovePage").classList.remove("hidden");

}



function yesLove(){

document.getElementById("lovePage").style.display="none";

document.getElementById("yesPage").classList.remove("hidden");

}



function noLove(){

document.getElementById("lovePage").style.display="none";

document.getElementById("noPage").classList.remove("hidden");

}
function birthdayPage(){

document.getElementById("yesPage").style.display="none";

document.getElementById("birthdayPage").classList.remove("hidden");

}



function giftPage(){

alert("Your surprise gift is coming 🎁💗");

}
