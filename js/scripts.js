// Utility Logic
function isEmpty()  {
  for (let i=0; i < arguments.length; i++)  {
    if (arguments[i].length === 0) {
      return true;
    }
  }
  return false;
}

// Business Logic
function numberTranslate(numInput)  {
  if (isEmpty(numInput))  {
    return 0;
  }
  const numArray = [];

  for (let i=0; i <= numInput; i++)  {
    numArray.push(i.toString());

    if  (numArray[i].includes('3')) {
      numArray[i] = "Won't you be my neighbor?";
    }

    if  (numArray[i].includes('2')) {
      numArray[i] = "Boop!";
    }

    if  (numArray[i].includes('1')) {
      numArray[i] = "Beep!";
    }
    }
  
  return numArray;
}

// UI Logic
function  printResults(text)  {
  if (isEmpty())  {
    return null;
  }
  const p = document.createElement("p");
  let numArray = text.split(" ");

  numArray.forEach(function(element) {
    p.append(element);
  });
  return p;
}

function handleFormSubmission() {
  event.preventDefault();
  const numberInput = document.getElementById("number").value;
  const translatedInput = numberTranslate(numberInput);
  let printResults = printResults(translatedInput);
  document.querySelector("div#output").append(printResults);
}

window.addEventListener("load", function()  {
  document.querySelector("form#conter-container").addEventListener("submit",handleFormSubmission);
})