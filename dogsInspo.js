/*PROJECT NAME: SWEET PAW VETERINARIAN
AUTHOR: Natalia Paredes
CSE 121B
*/

// Define a variable to store a new Date
// Define a variable to store the date of the week using the .getDay method 
let theDate = new Date();
let dayOfWeek = theDate.getDay();

// Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if (dayOfWeek >= 1 || dayOfWeek <= 5) {
  messageDay = 'Hang in there!';
}
else {
  messageDay = 'Woohoo! It is the weekend';
};

// Declare a new variable to hold another message
let nameDay = '';

//Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared previously
switch (dayOfWeek) {
  case 0:
    nameDay = 'Sunday';
    break;
  
  case 1:
    nameDay = 'Monday';
    break;
  
  case 2:
    nameDay = 'Tuesday';
    break;

  case 3:
    nameDay = 'Wednesday';
    break;

  case 4:
    nameDay = 'Thursday';
    break;

  case 5:
    nameDay = 'Friday';
    break;

  case 6:
    nameDay = 'Saturday';
    break;
  
  default:
    nameDay = `Unknown!: ${dayOfWeek}`;
}

// Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').textContent = messageDay;

// Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').textContent = nameDay;

// Declare a function named output that creates an HTML element to display a picture of a random dog.
const output = (dogImg) => {

  let article = document.createElement('article');
  let img = document.createElement('img');
  img.setAttribute('src', dogImg.message);

  article.appendChild(img);

  document.querySelector('#image').appendChild(img);
  
  // Declare a variable that stores the name of the dog. 
  let text = dogImg.message;
  const myArray = text.split("/");
  
  // Create a second variable that displays a friendly message which includes the breed of the dog.
  let dogBreed = `Enjoy this picture of this ${myArray[4]}.`;
  img.setAttribute('alt', dogBreed);

  document.getElementById("pictureTitle").innerHTML = dogBreed; 

};

// Create a function and use the fetch method to obtain random pictures of dog.
const url = 'https://dog.ceo/api/breeds/image/random';
async function getList(url) {
  const response = await fetch(url);
  dogImg = await response.json();
  // console.log(dogImg);
  
  // Call the output fucntion and pass the picture obtained from the URL
  output(dogImg);
};
// Execute the getList function to make sure it works correctly.
getList(url);


// Define a function that add the breed of the dog to a friendly message.
function addName() {
  let theName = document.querySelector('#yourDog').value;
  
  let inputName = `${theName} is lucky to have you as its owner!`;
  
  document.getElementById("message3").innerHTML = inputName; 
  
  //Call the getDiscount function after the name of the dog has been input
  const discount = ['10%', '15%', '20%', '25%'];
  let randomDiscount = discount[Math.floor(Math.random()*discount.length)];
  let newDiscount = `Today you have won a ${randomDiscount} off for your next purchase!`
  document.getElementById("message4").innerHTML = newDiscount;
};

document.querySelector('#buttonDog').addEventListener('click', addName);

// Define a function that 
