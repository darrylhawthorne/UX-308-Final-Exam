let currentState = welcoming;
let selectedService = '';

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput(){
  currentState = welcoming;
  selectedService = '';
}

function welcoming() {
  let aReturn = [];
  currentState = selectingService;
  aReturn.push("Welcome to Darryl's Cuts!");
  aReturn.push("What can we do for you today? Try: Buzz Cut, 1 Blade, Regular Cut, or Beard Trim.");
  return aReturn;
}

function selectingService(sInput) {
  let aReturn = [];
  selectedService = sInput;
  currentState = upselling;
  aReturn.push(`Great choice — a ${sInput} it is!`);
  aReturn.push("Would you like to add a shampoo treatment for just $8?");
  return aReturn;
}

function upselling(sInput) {
  let aReturn = [];
  currentState = welcoming;
  if (sInput.toLowerCase().startsWith('y')) {
    aReturn.push(`Perfect! Your ${selectedService} + shampoo treatment is all booked.`);
    let d = new Date();
    d.setMinutes(d.getMinutes() + 30);
    aReturn.push(`We'll see you soon. Thanks for choosing Darryl's Cuts!`);
  } else {
    aReturn.push(`No problem! Your ${selectedService} is booked.`);
    aReturn.push("See you soon at Darryl's Cuts!");
  }
  return aReturn;
}