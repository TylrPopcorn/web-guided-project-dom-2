console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
//EDITED BY ME//
const launchButton = document.querySelector("#launchButton");
const confirmButton = document.querySelector("#confirmButton");
const cancelButton = document.querySelector("#cancelButton");

// B- MESSAGES
const successMessage = document.querySelector("h1.success")
const failureMessage = document.querySelector("h1.failure");

// C- MODAL
const modal = document.querySelector("div.modal");


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute
launchButton.onClick = function () {
    console.log("Where'd the HTML onclick go?!?!?!?!?!?!?!?");
}
//  C- element.addEventListener('click', callback)
launchButton.addEventListener("click", function (evnt) {
    console.log("All the event listeners!");
    console.log(`Event type: ${evnt.type}`);
    console.log(`Event target: ${evnt.target}`);
});

document.addEventListener("click", function (val) {
    if (val.target === launchButton) {
        console.log("launching!");
    } else {
        console.log("Not quite sure what to do wit this one pal.");
    }
})

const links = document.links;
Array.from(links).forEach(links => {
    links.addEventListener("click", function (val) {
        val.preventDefault();
        console.log("Sending user to another place.")
    })
})

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
function launch() {
    modal.classList.remove("off");
    //   successMessage.classList.add("off"); //easier way
    //   failureMessage.classList.add("off"); //easier way
}

launchButton.addEventListener("click", launch);

function handleClick(evnt) {
    modal.classLiist.add("off")
    if (evnt.target === confirmButton) {
        successMessage.classList.add("off");
        failureMessage.classList.add("off");
    } else if (evnt.target == cancelButton) {
        successMessage.classList.add("off");
        failureMessage.classList.add("off");
    }
}

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
confirmButton.addEventListener("click", function (val) {
    modal.classList.add("off")
    successMessage.classList.remove("off");
    failureMessage.classList.add("off");
})


// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
function cancel() {
    modal.classList.add("off");
    failureMessage.classList.remove("off");
    successMessage.classList.add("off");
}

cancelButton.addEventListener("click", cancel)


// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
function escKey(evnt) {
    console.group(evnt.Key);
    if (evnt.key === "Escape") {
        modal.classList.add("off");
        successMessage.classList.add("off");
        failureMessage.classList.add("off");
    }
}

document.addEventListener("keydown", escKey);


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.

document.querySelector("*").forEach(elem => {
    console.log(elem);
    elem.addEventListener("click", function (evt) {
        console.log("target:     ", evt.target);
        console.log("current target:     ", evt.currentTarget);
        console.log("\n");
    })
})

modal.addEventListener("click", evt => {
    console.log("u shall not pass");
    evt.stopPropagation();
})










// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
document.addEventListener("mouseover", function (evnnt) {
    console.log("X: ", evnt.X);
    console.log("Y: ", evnt.Y);
})