let inputLoginUsername = document.getElementById("username")
let loginBtn = document.querySelector(".login-btn");
let loggedMessage = document.querySelector(".logged-successful")
let loginContainer = document.getElementById("login-container")
let publishTweetBtn = document.getElementById("publish-tweet-btn")
let feed = document.querySelector(".feed")
let username = document.getElementById("username");
let password = document.getElementById("password");
let contador = 0;


let existingAccounts = [
  {
    username: "test@mail.com",
    password: "hello",
  },
];

console.log(existingAccounts  )

let currentAccount;

function logIn() {
  console.log("Log In Button Clicked")
  console.log(username.value, password.value)

  for (let i = 0; i < existingAccounts.length; i++) {
    if (username.value == existingAccounts[i].username && password.value == existingAccounts[i].password) {
    loginContainer.style.display = "none" 
    loggedMessage.classList.remove("hidden")

    }
  }
  currentAccount = username.value
  console.log(currentAccount);
}



// Tweet Implementation



let content
let allTweets = [
{
  author: "unknown",
  content: "Tweet number 1",
  day: 21,
  month: 1,
  hours: 10,
  minutes: 22,
},
{
  author: "unknown",
  content: "Test",
  day: 23,
  month: 2,
  hours: 11,
  minutes: 59,
},
]




for (let i = 0; i < allTweets.length; i++) {
  const previousTweetSpace = `
  <div class="tweet-container">
<div class="tweet"><b>${allTweets[i].content}</b></div>
<div class="tweet-date">${allTweets[i].day}/${allTweets[i].month} ${allTweets[i].hours}:${allTweets[i].minutes}</div>
</div>
`;
  feed.insertAdjacentHTML("afterbegin", previousTweetSpace)
  console.log(allTweets)
}

function publishTweet() {
  let message = prompt("What's Happening?")
  if(message !== null) {
    const date = new Date();
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let month = date.getMonth() + 1;
  
      const tweetSpace = `
      <div class="tweet-container">
      <div class="tweet"><b>${message}</b></div>
      <div class="tweet-date">${day}/${month} ${hours}:${minutes}</div>
      </div>`
      feed.insertAdjacentHTML("afterbegin", tweetSpace)
  }



  }


