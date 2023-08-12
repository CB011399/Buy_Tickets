const menuBtn = document.querySelector(`.menu-btn`);
const navlinks = document.querySelector(`.nav-links`);

menuBtn.addEventListener(`click`, () => {
  navlinks.classList.toggle(`mobile-menu`);
});
const cardNumberInput = document.getElementById("cardNumber");
const expiryDateInput = document.getElementById("expiryDate");
const cvcInput = document.getElementById("cvc");
const nameOnCardInput = document.getElementById("nameOnCard");
const purchaseButton = document.getElementById("purchaseButton");

cardNumberInput.addEventListener("input", validateForm);
expiryDateInput.addEventListener("input", validateForm);
cvcInput.addEventListener("input", validateForm);
nameOnCardInput.addEventListener("input", validateForm);

function validateForm() {
  // Your existing form validation code ...

  // Validate card number
  const cardNumberRegex = /^[0-9]{16}$/; // Assuming card numbers should be 16 digits
  if (!cardNumberRegex.test(cardNumberInput.value.trim())) {
    showError("cardNumberError", "Please enter a valid 16-digit card number.");
  } else {
    hideError("cardNumberError");
  }

  // Validate expiry date
  const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/; // Assuming date format MM/YYYY or MM/YY
  if (!expiryDateRegex.test(expiryDateInput.value.trim())) {
    showError("expiryDateError", "Please enter a valid expiry date.");
  } else {
    hideError("expiryDateError");
  }

  // Validate CVC/CNN
  const cvcRegex = /^[0-9]{3,4}$/; // Assuming CVC/CNN should be 3 or 4 digits
  if (!cvcRegex.test(cvcInput.value.trim())) {
    showError("cvcError", "Please enter a valid CVC/CNN.");
  } else {
    hideError("cvcError");
  }

  // Validate name on card
  if (nameOnCardInput.value.trim() === "") {
    showError("nameOnCardError", "Please enter the name on card.");
  } else {
    hideError("nameOnCardError");
  }

  // Enable the purchase button if all validations pass
  if (
    // Your existing conditions ...
    !cardNumberRegex.test(cardNumberInput.value.trim()) ||
    !expiryDateRegex.test(expiryDateInput.value.trim()) ||
    !cvcRegex.test(cvcInput.value.trim()) ||
    nameOnCardInput.value.trim() === ""
  ) {
    purchaseButton.disabled = true;
  } else {
    purchaseButton.disabled = false;
  }

  return true;
}

// Function to display an error message
function showError(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = errorMessage;
}

// Function to hide an error message
function hideError(elementId) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = "";
}

const storedFormData = localStorage.getItem("formData");

// Parse the JSON string back into an object
const formData = JSON.parse(storedFormData);

// Now you can use the formData object to populate the summary table
const summaryTableBody = document.querySelector("#summaryTable tbody");

// Create a new table row for the summary
//const newRow = document.createElement("tr");
// Create table data cells for each field
const fullNameCell = document.createElement("td");
const emailCell = document.createElement("td");
const mobileCell = document.createElement("td");

// Set the text content of each cell using the stored form data
// fullNameCell.textContent = formData.name;
// emailCell.textContent = formData.email;
// mobileCell.textContent = `${formData.mobileCountryCode} ${formData.mobileNumber}`;

// Append the cells to the new row
// newRow.appendChild(fullNameCell);
// newRow.appendChild(emailCell);
// newRow.appendChild(mobileCell);

// Append the new row to the table body
//summaryTableBody.appendChild(newRow);
const savedSummaryData = JSON.parse(localStorage.getItem("userData"));
const summaryTable = document.getElementById("summaryTable");
const date = document.getElementById("date");
date.textContent = savedSummaryData.selectedDate;
const time = document.getElementById("time-slot");
time.textContent = savedSummaryData.selectedTimeSlots[0];
const slAdultQty = document.getElementById("sl-adult-qty");
slAdultQty.textContent = `${savedSummaryData.tickets.SL_Adult} SL Adult`;
const slChildQty = document.getElementById("sl-child-qty");
slChildQty.textContent = `${savedSummaryData.tickets.SL_Child} SL Child`;
const foreignerAdultQty = document.getElementById("foreigner-adult-qty");
foreignerAdultQty.textContent = `${savedSummaryData.tickets.Foreigner_Adult} 
 Foreigner Adult`;
const foreignerChildQty = document.getElementById("foreigner-child-qty");
foreignerChildQty.textContent = `${savedSummaryData.tickets.Foreigner_Child} 
 Foreigner Child`;
const infantQty = document.getElementById("infant-qty");
infantQty.textContent = `${savedSummaryData.tickets.Infant} 
 Infant`;
const slAdultAmount = document.getElementById("sl-adult-amount");
slAdultAmount.textContent = `${savedSummaryData.amount.sl_adult_amount} `;

const slChildAmount = document.getElementById("sl-child-amount");
slChildAmount.textContent = `${savedSummaryData.amount.sl_child_amount}`;

const foreignerAdultAmount = document.getElementById("foreigner-adult-amount");
foreignerAdultAmount.textContent = `${savedSummaryData.amount.foreign_adult_amount}`;

const foreignerChildAmount = document.getElementById("foreigner-child-amount");
foreignerChildAmount.textContent = `${savedSummaryData.amount.foreign_child_amount}`;

const totalPayable = document.getElementById("total");
totalPayable.textContent = `${savedSummaryData.total}`;
purchaseButton.textContent = ` Pay ${savedSummaryData.total}`;

const savedSummaryDetails = JSON.parse(localStorage.getItem("summaryDetails"));
const summaryTableDetails = document.getElementById("summaryTable"); // Change to your actual target element ID

const Name = document.getElementById("name");
Name.textContent = savedSummaryDetails.name;

const Email = document.getElementById("email");
Email.textContent = savedSummaryDetails.email;

const Mobile = document.getElementById("mobile");
Mobile.textContent = savedSummaryDetails.mobile;

purchaseForm.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = "confirmation1.html";
});
