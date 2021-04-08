console.log("####### plugin #######")

const currentUrl = window.location.href;
const currentUserId = currentUrl.split("/")[4];
const userStatusUrl = `https://chrome-roblox-extension.herokuapp.com/?userId=${currentUserId}`;

let container = document.getElementsByClassName("profile-header-top")[0].children[1].children[0].children[0].children[0];

fetch(userStatusUrl)
  .then(response => response.json())
  .then(data => {
        container.innerText = 
        container.innerText + " last login: " + (new Date(data.LastOnline)).toDateString();
    });



  