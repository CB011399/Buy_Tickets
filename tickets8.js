const menuBtn = document.querySelector(`.menu-btn`);
const navlinks = document.querySelector(`.nav-links`);

let totalAmount = 0;
const totalView = document.getElementById("total");

menuBtn.addEventListener(`click`, () => {
  navlinks.classList.toggle(`mobile-menu`);
});

let sl_adult_amount = 0;
let sl_child_amount = 0;
let foreign_adult_amount = 0;
let foreign_child_amount = 0;

let peakNoTickets = 0;
let nonPeakNoTickets = 0;

let incrementButton = document.getElementsByClassName(`inc`);
let decrementButton = document.getElementsByClassName(`dec`);
/*console.log(incrementButton);
  console.log(decrementButton);*/
for (let i = 0; i < incrementButton.length; i++) {
  let button = incrementButton[i];
  button.addEventListener(`click`, function (event) {
    let buttonClicked = event.target;
    //console.log(buttonClicked);
    let input = buttonClicked.parentElement.children[3];
    //console.log(input);
    let inputValue = input.value;
    //console.log(inputValue);
    let newValue = parseInt(inputValue) + 1;
    //console.log(newValue);
    input.value = newValue;
  });
}

for (let i = 0; i < decrementButton.length; i++) {
  let button = decrementButton[i];
  button.addEventListener(`click`, function (event) {
    let buttonClicked = event.target;
    //console.log(buttonClicked);
    let input = buttonClicked.parentElement.children[3];
    console.log(input);
    let inputValue = input.value;
    //console.log(inputValue);
    let newValue = parseInt(inputValue) - 1;
    //console.log(newValue);
    if (newValue >= 0) {
      input.value = newValue;
    } else {
      input.value = 0;
      //alert(`Qty cannot be less than zero`);
    }
  });
}

// Get the select element

// Add event listener to handle the selection change

// Function to handle the selection change
function handleTimeSelection() {
  // Get all selected options
  const selectedOptions = Array.from(timeSelect.selectedOptions);

  console.log("Selected Time Slots:");
  selectedOptions.forEach((option) => {
    console.log(option.value);
  });
  // You can now use 'selectedOptions' for further processing.
}

// Function to get ticket prices based on the duration type
function getTicketPrices() {
  // Assume you have this information somewhere
  const durationType = document.querySelector(".sno").textContent.trim();
  if (durationType.includes("Normal Hour")) {
    return [10, 5, 4, 2];
  } else if (durationType.includes("Peak Hour")) {
    return [13, 8, 6, 3];
  } else {
    return [0, 0, 0, 0];
  }
}

// Function to get the selected category text
function getCategoryText() {
  // Assume you have this information somewhere
  const categoryTexts = [
    "SL Adult",
    "SL Child",
    "Foreigner Adult",
    "Foreigner Child",
  ];
  return categoryTexts.join(", ");
}

function getAmount(category, peakCount, normalCount, qty) {
  let total = 0;
  if (category === "SL_Adult") {
    const peak = peakCount * 6 * qty;
    const normal = normalCount * 4 * qty;
    total = peak + normal;
  }
  if (category === "SL_CHILD") {
    const peak = peakCount * 3 * qty;
    const normal = normalCount * 2 * qty;
    total = peak + normal;
  }
  if (category === "F_ADULT") {
    const peak = peakCount * 13 * qty;
    const normal = normalCount * 10 * qty;
    total = peak + normal;
  }
  if (category === "F_CHILD") {
    const peak = peakCount * 8 * qty;
    const normal = normalCount * 5 * qty;
    total = peak + normal;
  }
  return total;
}

document.getElementById("continue-btn").addEventListener("click", () => {
  
  console.log("hello world");

  saveName();
});

function updateSummaryTable() {
  const summaryBody = document.getElementById("summary-body");
  summaryBody.innerHTML = ""; // Clear the previous content

  // Get the selected date
  const selectedDate = document.getElementById("birthday").value;

  // Get the selected time slots
  const timeSelect = document.getElementById("time");
  const selectedTimeSlots = Array.from(timeSelect.selectedOptions).map(
    (option) => option.value
  );

  let peakCount = 0;
  let nonPeakCount = 0;

  // Get ticket quantities
  const ticketQuantities = Array.from(
    document.getElementsByClassName("input-field")
  ).map((input) => parseInt(input.value));

  const selectedOptions = document.querySelectorAll("#time option:checked");

  selectedOptions.forEach((option) => {
    const isPeak = option.getAttribute("data-peak") === "true";
    if (isPeak) {
      peakCount++;
    } else {
      nonPeakCount++;
    }
  });

  peakNoTickets = peakCount;
  nonPeakNoTickets = nonPeakCount;

  let total = 0; // Initialize the total amount variable outside the loop

  // Get ticket prices

  // Calculate total amount
  // const totalAmount = calculateTotalAmount(ticketPrices, ticketQuantities);

  // Generate the summary table rows dynamically
  const categories = getCategoryText().split(", ");
  for (let i = 0; i < categories.length; i++) {
    const row = document.createElement("tr");
    const categoryCell = document.createElement("td");
    const dateCell = document.createElement("td");
    const timeSlotCell = document.createElement("td");
    const ticketQuantityCell = document.createElement("td");
    const amountCell = document.createElement("td");
    const durationCell = document.createElement("td");

    let amount = 0;

    categoryCell.textContent = categories[i];
    dateCell.textContent = selectedDate;
    timeSlotCell.textContent = selectedTimeSlots.join(", ");
    ticketQuantityCell.textContent = ticketQuantities[i];

    if (categories[i] === "SL Adult") {
      amount = getAmount(
        "SL_Adult",
        peakCount,
        nonPeakCount,
        ticketQuantities[i]
      );
      amountCell.textContent = amount;
      sl_adult_amount = amount;
    }
    if (categories[i] === "SL Child") {
      amount = getAmount(
        "SL_CHILD",
        peakCount,
        nonPeakCount,
        ticketQuantities[i]
      );
      amountCell.textContent = amount;
      sl_child_amount = amount;
    }
    if (categories[i] === "Foreigner Adult") {
      amount = getAmount(
        "F_ADULT",
        peakCount,
        nonPeakCount,
        ticketQuantities[i]
      );
      amountCell.textContent = amount;
      foreign_adult_amount = amount;
    }
    if (categories[i] === "Foreigner Child") {
      amount = getAmount(
        "F_CHILD",
        peakCount,
        nonPeakCount,
        ticketQuantities[i]
      );
      amountCell.textContent = amount;
      foreign_child_amount = amount;
    }
    total += amount;

    durationCell.textContent = `Peak ${peakCount}, Non Peak ${nonPeakCount}`;

    row.appendChild(categoryCell);
    row.appendChild(dateCell);
    row.appendChild(timeSlotCell);
    row.appendChild(ticketQuantityCell);
    row.appendChild(amountCell);
    row.appendChild(durationCell);

    summaryBody.appendChild(row);
  }

  console.log("total ", total);

  totalAmount = total;
  totalView.textContent = `Total Payable ${totalAmount.toString()}`;
}

document.getElementById("time").addEventListener("change", function () {
  updateSummaryTable();
});

// Attach event listener for the date input to update the Summary Table
document.getElementById("birthday").addEventListener("change", function () {
  updateSummaryTable();
});

// Attach event listeners for "+" (inc) and "-" (dec) buttons to update the Summary Table
const incrementButtons = document.getElementsByClassName("inc");
const decrementButtons = document.getElementsByClassName("dec");

for (let i = 0; i < incrementButtons.length; i++) {
  incrementButtons[i].addEventListener("click", function () {
    updateSummaryTable();
  });
}

for (let i = 0; i < decrementButtons.length; i++) {
  decrementButtons[i].addEventListener("click", function () {
    updateSummaryTable();
  });
}

function saveName() {
  // Get other input values
  const dateInput = document.getElementById("birthday");
  const selectedDate = dateInput.value;

  const tickets = {
    SL_Adult: document.getElementById("1").value,
    SL_Child: document.getElementById("2").value,
    Foreigner_Adult: document.getElementById("3").value,
    Foreigner_Child: document.getElementById("4").value,
    Infant: document.getElementById("5").value,
  };

  const selectedTimeSlots = [];
  const timeSelect = document.getElementById("time");
  for (let i = 0; i < timeSelect.options.length; i++) {
    if (timeSelect.options[i].selected) {
      selectedTimeSlots.push(timeSelect.options[i].value);
    }
  }

  const amount = {
    sl_adult_amount: sl_adult_amount,
    sl_child_amount: sl_child_amount,
    foreign_adult_amount: foreign_adult_amount,
    foreign_child_amount: foreign_child_amount,
  };

  // Create an object to store the collected data
  const userData = {
    name: name,
    selectedDate: selectedDate,
    tickets: tickets,
    selectedTimeSlots: selectedTimeSlots,
    amount: amount,
    total: totalAmount,
    peakCount: peakNoTickets,
    nonPeakCount: nonPeakNoTickets,
  };

  // Store the data in local storage
  localStorage.setItem("userData", JSON.stringify(userData));
}

// Call the function initially to display the initial summary
updateSummaryTable();
