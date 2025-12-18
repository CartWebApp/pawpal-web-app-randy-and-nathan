document.addEventListener('DOMContentLoaded', () => {
    const activityInput = document.getElementById('Activity-TypeA');
    const dateInput = document.getElementById('Date-TypeA');
    const addActivityBtn = document.getElementById('addActivityBtn');
  
    // Create a container for the activity logs if it doesn't already exist
    let activityLog = document.querySelector('.activity-log');
    if (!activityLog) {
      activityLog = document.createElement('ul');
      activityLog.classList.add('activity-log');
      // Insert the activity log below the input buttons
      const addActivitiesSection = document.querySelector('.add-activities');
      addActivitiesSection.parentNode.insertBefore(activityLog, addActivitiesSection.nextSibling);
    }
  
    // Add event listener to the "Add New Activity" button
    addActivityBtn.addEventListener('click', () => {
      const activity = activityInput.value.trim();
      const date = dateInput.value.trim();
  
      // Validate inputs
      if (!activity || !date) {
        alert('Please fill out both the activity and the date fields.');
        return;
      }
  
      // Create a new activity log entry
      const newActivity = document.createElement('li');
      newActivity.classList.add('activity-item');
      newActivity.innerHTML = `
        <span class="activity-name">${activity}</span> - 
        <span class="activity-date">${date}</span>
        <button class="cancel-btn">Cancel</button>
      `;
  
      // Append the new activity to the activity log (so it appears at the bottom)
      activityLog.appendChild(newActivity);
  
      // Add functionality to the "Cancel" button
      const cancelBtn = newActivity.querySelector('.cancel-btn');
      cancelBtn.addEventListener('click', () => {
        newActivity.remove(); // Remove the activity from the DOM
      });
  
      // Clear the input fields after adding the activity
      activityInput.value = '';
      dateInput.value = '';
    });
  });