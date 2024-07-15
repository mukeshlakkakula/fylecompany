let formContainer = document.getElementById("contactForm");
let closeFormBtn = document.getElementById("closeFormBtn");
let Email = document.getElementById("Email");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let CheckboxBtn = document.getElementById("CheckboxBtn");
let FormFullContainer = document.getElementById("PopupFormFullContainer");
let ContactUsBtn = document.getElementById("ContactUsBtn");
let elements = document.querySelectorAll(".opsClass");
let contactForm = document.getElementById("contactForm");

// opens PopupForm

ContactUsBtn.onclick = function () {
  FormFullContainer.style.display = "block";
  // Trigger the transition by updating opacity and scale
  elements.forEach((element) => {
    element.style.opacity = 0.1;
  });

  setTimeout(() => {
    FormFullContainer.style.opacity = 1;
    FormFullContainer.style.transform = "translate(-50%, -50%) scale(1)";
  }, 0);
  document.body.classList.add("no-scroll");
};

// closes popupForm

closeFormBtn.addEventListener("click", function () {
  FormFullContainer.style.opacity = 0;

  FormFullContainer.style.transform = "translate(-50%, -50%) scale(0.8)";
  setTimeout(() => {
    elements.forEach((element) => {
      element.style.opacity = 1;
    });
    FormFullContainer.style.display = "none";
  }, 400);

  document.body.classList.remove("no-scroll");
});

// For OnBlur events

let forEmail = document.getElementById("forEmail");
let forFirstName = document.getElementById("forFirstName");
let forLastName = document.getElementById("forLastName");

// Blur events

Email.addEventListener("blur", (event) => {
  const inputE1 = event.target;
  const Val = event.target.value;
  console.log(inputE1, Val);

  if (Val !== "") {
    forEmail.classList.add("filled");
  } else {
    forEmail.classList.remove("filled");
  }
});

firstName.addEventListener("blur", (event) => {
  const inputE1 = event.target;
  const Val = event.target.value;
  console.log(inputE1, Val);

  if (Val !== "") {
    forFirstName.classList.add("filled");
  } else {
    forFirstName.classList.remove("filled");
  }
});

lastName.addEventListener("blur", (event) => {
  const inputE1 = event.target;
  const Val = event.target.value;
  console.log(inputE1, Val);

  if (Val !== "") {
    forLastName.classList.add("filled");
  } else {
    forLastName.classList.remove("filled");
  }
});

// OnSubmitForm

document.addEventListener("DOMContentLoaded", (event) => {
  // Get the form element
  var form = document.getElementById("submitEvent");

  // Add event listener for the submit event
  form.addEventListener("submit", function (event) {
    // Get form elements
    event.preventDefault();
  });
  setTimeout(() => {
    contactForm.reset();
  }, 800);
});

// recheck Slider

// carousel section

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");
  const scrollContent = document.querySelector(".scroll-content");
  const dotsContainer = document.querySelector(".dots-container");
  const items = document.querySelectorAll(".item");
  const numDots = items.length;
  let scrollInterval;

  // Generate dots
  for (let i = 0; i < numDots / 2; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll(".dot");

  // Update active dot based on scroll position
  function updateDots() {
    const scrollLeft = scrollContainer.scrollLeft;
    const containerWidth = scrollContainer.offsetWidth;
    const contentWidth = scrollContent.scrollWidth;
    const activeIndex = Math.round(scrollLeft / (contentWidth / numDots));

    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[activeIndex]) {
      dots[activeIndex].classList.add("active");
    }
  }

  // Initial call to set the first active dot
  updateDots();

  // Add scroll event listener
  scrollContainer.addEventListener("scroll", updateDots);

  // Enable horizontal scroll with mouse wheel
  scrollContainer.addEventListener("wheel", (e) => {
    if (e.deltaY != 0) {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    }
  });

  // Start automatic scrolling
  function startAutoScroll() {
    scrollInterval = setInterval(() => {
      const startScrollLeft = scrollContainer.scrollLeft;
      const scrollAmount = 100; // Adjust this value for desired scroll amount
      const scrollDuration = 1000; // Scroll for 1 second
      const frameRate = 60; // 60 frames per second
      const totalFrames = scrollDuration / (1000 / frameRate);
      let currentFrame = 0;

      const scrollStep = scrollAmount / totalFrames;
      const scrollStepInterval = setInterval(() => {
        scrollContainer.scrollLeft += scrollStep;
        currentFrame++;

        if (currentFrame >= totalFrames) {
          clearInterval(scrollStepInterval);
        }
      }, 1000 / frameRate);
    }, 2000); // Adjust this interval to control how often the scrolling starts
  }

  // Stop automatic scrolling
  function stopAutoScroll() {
    clearInterval(scrollInterval);
  }

  // Start automatic scrolling initially
  startAutoScroll();

  // Add hover event listeners to stop/start scrolling
  items.forEach((item) => {
    item.addEventListener("mouseenter", stopAutoScroll);
    item.addEventListener("mouseleave", startAutoScroll);
  });
});

let firstContainer = document.getElementById("firstContainer");
let secondContainer = document.getElementById("secondContainer");
let thirdContainer = document.getElementById("thirdContainer");

function changeImage(imageName, id) {
  let container = document.getElementById(id);
  console.log(id == firstContainer, firstContainer);
  if (id == firstContainer.id) {
    firstContainer.classList.remove("notActiveContainer");
    container.classList.add("activeContainer");
  }
  if (id == firstContainer.id) {
    secondContainer.classList.add("notActiveContainer");
    thirdContainer.classList.add("notActiveContainer");
  }

  if (id == secondContainer.id) {
    container.classList.remove("notActiveContainer");
    container.classList.add("activeContainer");
  }
  if (id == secondContainer.id) {
    firstContainer.classList.add("notActiveContainer");
    thirdContainer.classList.add("notActiveContainer");
  }

  if (id == thirdContainer.id) {
    container.classList.remove("notActiveContainer");
    container.classList.add("activeContainer");
  }
  if (id == thirdContainer.id) {
    secondContainer.classList.add("notActiveContainer");
    firstContainer.classList.add("notActiveContainer");
  }

  document.getElementById("mainImage").src = imageName;
}
