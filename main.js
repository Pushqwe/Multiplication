function generateTable() {
  // Get the input value
  const numberInput = document.getElementById("numberInput").value;
  const resultDiv = document.getElementById("result");

  // Clear previous result
  resultDiv.innerHTML = '';

  // Validate the input
  const number = parseInt(numberInput);
  if (isNaN(number) || number < 1 || number > 10) {
      resultDiv.innerHTML = "<p>Please enter a valid number between 1 and 10.</p>";
      return;
  }

  // Use a while loop to generate the multiplication table
  let i = 1;
  while (i <= 10) {
      const product = number * i;
      resultDiv.innerHTML += `<p>${number} x ${i} = ${product}</p>`;
      i++;
  }
}
