 
  if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

      navigator.serviceWorker

        .register("/service-worker.js")

        .then((registration) => {

          console.log("Service Worker registered with scope:", registration.scope);

        })

        .catch((error) => {

          console.log("Service Worker registration failed:", error);

        });

    });

// Save notes to localStorage
const saveNotes = () => {
  const notes = {};
  document.querySelectorAll('.day').forEach((day, index) => {
      const note = day.querySelector('.notes').value;
      notes[index] = note; // Save note by day index
  });
  localStorage.setItem('dayNotes', JSON.stringify(notes)); // Store notes as a JSON string
  alert('Notes saved!');
};

// Load notes from localStorage
const loadNotes = () => {
  const savedNotes = JSON.parse(localStorage.getItem('dayNotes'));
  if (savedNotes) {
      document.querySelectorAll('.day').forEach((day, index) => {
          if (savedNotes[index]) {
              day.querySelector('.notes').value = savedNotes[index]; // Load note for each day
          }
      });
  }
};

// Event listener for the Save Notes button
document.getElementById('save-notes-btn').addEventListener('click', saveNotes);

// Load notes on page load
loadNotes();
