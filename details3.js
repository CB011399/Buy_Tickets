const menuBtn = document.querySelector(`.menu-btn`);
const navlinks = document.querySelector(`.nav-links`);

menuBtn.addEventListener(`click`, () => {
  navlinks.classList.toggle(`mobile-menu`);
});

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const confirmEmailInput = document.getElementById("confirmEmail");
const mobileCountryCodeInput = document.getElementById("mobileCountryCode");
const mobileNumberInput = document.getElementById("mobileNumber");
const purchaseButton = document.getElementById("purchaseButton");

const nameView = document.getElementById("name");
const mobileView = document.getElementById("mobile");
const emailView = document.getElementById("email");

const purchaseForm = document.getElementById("purchaseForm");

nameInput.addEventListener("input", function () {
  const enteredName = nameInput.value;
  nameView.textContent = enteredName;
  validateForm();
});
mobileNumberInput.addEventListener("input", function () {
  const enteredNum = mobileNumberInput.value;
  const countryCode = mobileCountryCodeInput.value;
  mobileView.textContent = `${countryCode} ${enteredNum}`;
  validateForm();
});
emailInput.addEventListener("input", function () {
  const enteredMail = emailInput.value;
  emailView.textContent = enteredMail;
  validateForm();
});

// fullNameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
confirmEmailInput.addEventListener("input", validateForm);
mobileCountryCodeInput.addEventListener("input", validateForm);
//mobileNumberInput.addEventListener("input", validateForm);

function validateForm() {
  // Validate full name
  if (nameInput.value.trim() === "") {
    showError("fullNameError", "Please enter your full name.");
  } else {
    // hideError("fullNameError");
  }

  // Validate email
  if (emailInput.value.trim() === "") {
    showError("emailError", "Please enter your email address.");
  } else {
    // hideError("emailError");
  }

  // Validate confirm email
  if (emailInput.value !== confirmEmailInput.value) {
    showError("confirmEmailError", "Email addresses do not match.");
  } else {
    //hideError("confirmEmailError");
  }

  // Validate mobile country code selection
  if (mobileCountryCodeInput.value === "") {
    showError("mobileNumberError", "Please select a country code.");
  } else {
    // hideError("mobileNumberError");
  }

  // Validate mobile number
  const mobileNumberRegex = /^\d{8,}$/; // Change this regex as per your desired mobile number format
  if (!mobileNumberRegex.test(mobileNumberInput.value.trim())) {
    showError("mobileNumberError", "Please add a valid mobile number.");
  } else {
    //hideError("mobileNumberError");
  }

  // Enable the purchase button if all validations pass
  if (
    !nameInput.validity.valid ||
    !emailInput.validity.valid ||
    !confirmEmailInput.validity.valid ||
    !mobileCountryCodeInput.validity.valid ||
    !mobileNumberInput.validity.valid
  ) {
    purchaseButton.disabled = true;
  } else {
    purchaseButton.disabled = false;
  }

  return true;
}

function showError(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = errorMessage;
}

// function hideError(elementId) {
//   const errorElement = document.getElementById(elementId);
//   errorElement.textContent = "";
//   document.getElementById("purchaseButton").addEventListener("click", () => {
//     // Generate the summary table
//     // const summaryTableHTML = generateSummaryTable();

//     // // Proceed to the next page if the required fields are completed
//     // if (summaryTableHTML) {
//     //   // Show the summary table in the summary container
//     //   const summaryContainer = document.getElementById("summary-container");
//     //   summaryContainer.innerHTML = summaryTableHTML;

//     //   // Here, you can redirect the user to the next page
//     //   // console.log("Summary Table:", summaryTableHTML);

//     //   // Uncomment the following line to redirect the user to the next page
//     window.location.href = "payment.html";

//     //   saveName()
//     // }

//     updateSummaryTable();
//   });
// }

// Your existing JavaScript code goes here
//const summaryTableBody = document.querySelector("#summaryTable tbody");

// function updateSummaryTable() {
//   // Clear existing table rows
//   summaryTableBody.innerHTML = "";

//   // Get form input values
//   const fullName = fullNameInput.value.trim();
//   const email = emailInput.value.trim();
//   const mobileCountryCode = mobileCountryCodeInput.value;
//   const mobileNumber = mobileNumberInput.value.trim();

//   // Create a new table row for the summary
//   const newRow = document.createElement("tr");

//   // Create table data cells for each field
//   const fullNameCell = document.createElement("td");
//   const emailCell = document.createElement("td");
//   const mobileCell = document.createElement("td");

//   // Set the text content of each cell to the form input values
//   fullNameCell.textContent = fullName;
//   emailCell.textContent = email;
//   mobileCell.textContent = `${mobileCountryCode} ${mobileNumber}`;

//   // Append the cells to the new row
//   newRow.appendChild(fullNameCell);
//   newRow.appendChild(emailCell);
//   newRow.appendChild(mobileCell);

//   // Append the new row to the table body
//   summaryTableBody.appendChild(newRow);
// }

// // Call the function to update the summary table when form inputs change
// fullNameInput.addEventListener("input", updateSummaryTable);
// emailInput.addEventListener("input", updateSummaryTable);
// confirmEmailInput.addEventListener("input", updateSummaryTable);
// mobileCountryCodeInput.addEventListener("input", updateSummaryTable);
// mobileNumberInput.addEventListener("input", updateSummaryTable);

// // ... (Existing code)

// function updateSummaryTable() {
//   // Clear existing table rows
//   summaryTableBody.innerHTML = "";

//   // Get form input values
//   const fullName = fullNameInput.value.trim();
//   const email = emailInput.value.trim();
//   const mobileCountryCode = mobileCountryCodeInput.value;
//   const mobileNumber = mobileNumberInput.value.trim();

//   // Store the form values in local storage
//   const formData = {
//     fullName,
//     email,
//     mobileCountryCode,
//     mobileNumber,
//   };

//   localStorage.setItem("formData", JSON.stringify(formData));

//   // Create a new table row for the summary
//   const newRow = document.createElement("tr");

//   // Create table data cells for each field
//   const fullNameCell = document.createElement("td");
//   const emailCell = document.createElement("td");
//   const mobileCell = document.createElement("td");

//   // Set the text content of each cell to the form input values
//   fullNameCell.textContent = fullName;
//   emailCell.textContent = email;
//   mobileCell.textContent = `${mobileCountryCode} ${mobileNumber}`;

//   // Append the cells to the new row
//   newRow.appendChild(fullNameCell);
//   newRow.appendChild(emailCell);
//   newRow.appendChild(mobileCell);

//   // Append the new row to the table body
//   summaryTableBody.appendChild(newRow);
// }

// Get the saved summary data from localStorage
const savedSummaryData = JSON.parse(localStorage.getItem("userData"));

// Get the element where you want to display the summary data
const summaryTable = document.getElementById("summaryTable"); // Change to your actual target element ID
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

const duration = document.getElementById("duration");
duration.textContent = `${savedSummaryData.selectedTimeSlots.length} hrs (${savedSummaryData.nonPeakCount} normal : ${savedSummaryData.peakCount} peak) `;

purchaseForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const summaryDetails = {
    ...savedSummaryData,
    name: nameInput.value,
    email: emailInput.value,

    mobile: `${mobileCountryCodeInput.value}${mobileNumberInput.value}`,
  };
  localStorage.setItem("summaryDetails", JSON.stringify(summaryDetails));

  window.location.href = "payment3.html";
});
