let choice=prompt("Enter Your Choice").value;
let variable=document.querySelector("h1");
if (choice>=18) {
    variable.textContent='You are elgible to vote';
  } else if (choice<=18) {
    variable.textContent = 'you are not elgible to vote';
  }
   else {
    variable.textContent = 'Provide Your Correct Age';
  }
  let cheese = 'Cheddar';

  if (cheese) {
    console.log('Yay! Cheese available for making cheese on toast.');
  } else {
    console.log('No cheese on toast for you today.');
  }
