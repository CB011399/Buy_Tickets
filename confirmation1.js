const menuBtn = document.querySelector(`.menu-btn`);
const navlinks = document.querySelector(`.nav-links`);

menuBtn.addEventListener(`click`, () => {
  navlinks.classList.toggle(`mobile-menu`);
});

const savedSummaryData = JSON.parse(localStorage.getItem("userData"));
// Retrieve the stored JSON string from local storage
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

const savedSummaryForm = JSON.parse(localStorage.getItem("summaryDetails"));
const summaryTableDetails = document.getElementById("summaryTable"); // Change to your actual target element ID

const Name = document.getElementById("name");
Name.textContent = savedSummaryForm.name;

const Email = document.getElementById("email");
Email.textContent = savedSummaryForm.email;

const Mobile = document.getElementById("mobile");
Mobile.textContent = savedSummaryForm.mobile;
