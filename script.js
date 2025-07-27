function calculateWater() {
  const weight = document.getElementById("weight").value;
  const activity = document.getElementById("activity").value;
  const result = document.getElementById("result");

  const weightValue = parseFloat(weight);
if (isNaN(weightValue) || weightValue <= 0) {
    alert("Please enter a valid weight.");
    return;
  }
  if (!activity) {
    alert("Please select an activity level.");
    return;
  }
   let multiplier = 30;
  if (activity === "moderate") multiplier = 35;
  else if (activity === "high") multiplier = 40;

  const waterIntake = (weightValue * multiplier) / 1000;
  result.value = waterIntake.toFixed(2) + " Liters";
}
function validatePurchaseForm() {
  const quantity = parseInt(document.getElementById("quantity").value);
  const address = document.getElementById("address").value.trim();

  if (isNaN(quantity) || quantity < 1) {
    alert("Please enter a valid quantity (1 or more).");
    return false; 
  }

  if (address === "") {
    alert("Please enter your shipping address.");
    return false; 
  }

  alert("Form submitted successfully!");
  return true;
}


