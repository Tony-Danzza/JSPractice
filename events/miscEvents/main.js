const signupForm = document.querySelector('[name="signup"]')

function logEvent(e) {
    console.log(e.type)
    console.log(e.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent)

const photo = document.querySelector(".photo");

// photo.addEventListener("click", function() {
//   console.log("you clicked the photo");
// });


function handlePhotoClick(event) {
    if (event.type == 'clicked' || event.key === "Enter")
        console.log("you clicked the photo");
}

// photo.addEventListener('click', handlePhotoClick)
// Buttons are meant to be used for actions that happen inside of an application.

// Links on the other hand are used to change the page.

// using the tab button on your keyboard, you should be able to tab through everything on the browser.

// An easy solution is giving the element the following attribute: role="button".

// you mean for something to be a button that is not a button tag, such as a div, if you mean for it to be used like a button,
// you should add the role attribute like so 👇

// <div role="button" tabindex="0">click me</div>

// NOTE: tabindex="0"  set it to first tab index
// NOTE: You will likely set that to 0, which will put that element in the flow so people can tab to it with their keyboards.

const test = document.querySelector("#test")

test.addEventListener('click', function (e) {
    console.log("clickes")
})