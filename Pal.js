document.addEventListener("DOMContentLoaded", () => {
  // Get ALL special sections
  const specials = document.querySelectorAll(".special");
  let notificationsEnabled = true; // default: notifications ON

  specials.forEach((specialLi) => {
    const specialIcon = specialLi.querySelector(".special-icon");
    const specialOverlay = specialLi.querySelector(".special-overlay");

    if (specialIcon && specialOverlay) {
      // Start hidden
      specialOverlay.style.display = "none";

      // Toggle when clicking icon
      specialIcon.addEventListener("click", (e) => {
        e.stopPropagation();

        // Close all other open overlays first
        document.querySelectorAll(".special.active").forEach((other) => {
          if (other !== specialLi) {
            other.classList.remove("active");
            const otherOverlay = other.querySelector(".special-overlay");
            if (otherOverlay) {
              otherOverlay.classList.remove("slide-down");
              otherOverlay.style.display = "none";
            }
          }
        });

        // Toggle this one
        specialLi.classList.toggle("active");
        if (specialLi.classList.contains("active")) {
          specialOverlay.style.display = "block";
          specialOverlay.classList.add("slide-down");
        } else {
          specialOverlay.classList.remove("slide-down");
          setTimeout(() => (specialOverlay.style.display = "none"), 300);
        }
      });

      // Close when clicking outside
      document.addEventListener("click", (e) => {
        if (!specialOverlay.contains(e.target) && !specialIcon.contains(e.target)) {
          specialLi.classList.remove("active");
          specialOverlay.classList.remove("slide-down");
          setTimeout(() => (specialOverlay.style.display = "none"), 300);
        }
      });
      
    }
  });
});

// Function to show speech bubble notifications
function showNotification(message) {
  const speech = document.getElementById("petSpeech");
  const text = document.getElementById("speechText");

  if (!speech || !text) return;

  text.textContent = message;
  speech.classList.add("show");

  // Optional: Read out loud
  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(message);
    utter.rate = 1.1; // slightly faster, more natural
    utter.pitch = 1.2;
    speechSynthesis.speak(utter);
  }

  // Hide after 5 seconds
  setTimeout(() => {
    speech.classList.remove("show");
  }, 5000);
}

// Example usage:
document.addEventListener("DOMContentLoaded", () => {
  // Example notification on page load
  setTimeout(() => showNotification("Welcome back! Your pet missed you."), 1500);

  // You can trigger this anywhere in your code, e.g.:
  // showNotification("Your pet needs food!");
});

let petStats = {
  hunger: 80,      // 0 = starving, 100 = full
  happiness: 60,   // 0 = sad, 100 = happy
  energy: 50,      // 0 = tired, 100 = energetic
  eventComing: false // true if a scheduled event is near
};

function checkPetNeeds() {
  if (petStats.hunger < 30) {
    showNotification("I'm hungry! Please feed me!");
  } else if (petStats.energy < 25) {
    showNotification("I'm so tired... can I nap soon? ");
  } else if (petStats.happiness < 40) {
    showNotification("I'm feeling a bit lonely. Can we play? ");
  } else if (petStats.eventComing) {
    showNotification("Hey! You have an event coming up soon! ");
    petStats.eventComing = false; // reset so it doesn’t repeat
  }
}

setInterval(() => {
  checkPetNeeds();
}, 15000); // check every 15 seconds (adjust as needed)

setInterval(() => {
  petStats.hunger -= 5;
  petStats.energy -= 3;
  petStats.happiness -= 2;

  // keep values in range 0–100
  Object.keys(petStats).forEach(key => {
    if (petStats[key] < 0) petStats[key] = 0;
    if (petStats[key] > 100) petStats[key] = 100;
  });

  console.log(petStats); // see changes in console
}, 10000); // decrease stats every 10 seconds

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".stats-overlay .bar");

  bars.forEach(bar => {
    // Generate a random mileage between 5 and 25
    const randomMileage = Math.floor(Math.random() * 21) + 5;

    // Update bar height and text
    bar.style.height = `${randomMileage * 10}px`; // scale visually
    bar.textContent = randomMileage;
  });
});

const settingsButton = document.querySelector('.settings');
const settingsOverlay = document.getElementById('settingsOverlay');

settingsButton.addEventListener('click', () => {
  settingsOverlay.classList.toggle('show');
});

// Initialize notificationsEnabled from localStorage if available
let notificationsEnabled = localStorage.getItem("notificationsEnabled");
if (notificationsEnabled === null) {
  notificationsEnabled = true; // default: ON
} else {
  notificationsEnabled = notificationsEnabled === "true"; // convert string to boolean
}

// Select the "Turn off Notifications" button
const notificationsButton = document.getElementById("id-overlay");

// Update button text on page load
notificationsButton.textContent = notificationsEnabled
  ? "Turn off Notifications"
  : "Turn on Notifications";

// Toggle notifications on/off
notificationsButton.addEventListener("click", () => {
  notificationsEnabled = !notificationsEnabled;

  // Save preference in localStorage
  localStorage.setItem("notificationsEnabled", notificationsEnabled);

  // Update button text
  notificationsButton.textContent = notificationsEnabled
    ? "Turn off Notifications"
    : "Turn on Notifications";

  // Optional: Notify user of the change
  showNotification(
    notificationsEnabled
      ? "Notifications are ON"
      : "Notifications are OFF"
  );
});

// Update showNotification function to respect toggle
function showNotification(message) {
  if (!notificationsEnabled) return; // exit if notifications are OFF

  const speech = document.getElementById("petSpeech");
  const text = document.getElementById("speechText");

  if (!speech || !text) return;

  text.textContent = message;
  speech.classList.add("show");

  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(message);
    utter.rate = 1.1;
    utter.pitch = 1.2;
    speechSynthesis.speak(utter);
  }

  setTimeout(() => {
    speech.classList.remove("show");
  }, 5000);
}

