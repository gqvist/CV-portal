document.addEventListener("DOMContentLoaded", () => {
  // Open boxes with info buttons
  document.querySelectorAll(".info-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.add("show");
    });
  });

  // Close when clicking close button
  document.querySelectorAll(".close-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").classList.remove("show");
    });
  });

  // Close when clicking outside content (good practice)
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  });
});

// Easteregg-1: Konami code to change profile picture
document.addEventListener("DOMContentLoaded", () => {
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  let userInput = [];

  document.addEventListener("keydown", (e) => {
    userInput.push(e.key);

    // Only check last 10 inputs (= length of konami code)
    if (userInput.length > konamiCode.length) {
      userInput.shift();
    }

    // If user input matches konami code, activate easter egg
    if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
      activateEasterEgg();
    }
  });

  function activateEasterEgg() {
    const profileImage = document.getElementById("profile-img");

    profileImage.src = "images/profile-secret.jpg";

    console.log("Easter egg number #1 Found!");
  }
});

// Easteregg-2: Triple click on profile picture to toggle Comic Sans mode
document.addEventListener("DOMContentLoaded", function () {
  const profileImage = document.getElementById("profile-img");

  let clickCount = 0;
  let clickTimer;

  profileImage.addEventListener("click", function () {
    clickCount++;

    if (clickCount === 1) {
      // Reset after 600ms if no more clicks
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 600);
    }

    if (clickCount === 3) {
      clearTimeout(clickTimer);
      clickCount = 0;

      // Toggle Comic Sans mode
      document.body.classList.toggle("comic-mode");
    }
  });
});
