
// Array containing information about King Gnu members
const members = [
   {
      id: "iguchi",
      name: "Satoru Iguchi",
      role: "Main vocalist and keyboardist",
      description: "Iguchi is known for his powerful vocal range and has also worked as an actor and narrator."
   },
   {
      id: "tsuneta",
      name: "Daiki Tsuneta",
      role: "Vocalist and guitarist",
      description: "Tsuneta is the band's main songwriter and is also involved in music production and visual direction."
   },
   {
      id: "arai",
      name: "Kazuki Arai",
      role: "Bassist",
      description: "Arai brings his jazz background and unique bass playing style to King Gnu's music."
   },
   {
      id: "seki",
      name: "Yu Seki",
      role: "Drummer and sampler",
      description: "Seki contributes rhythmic drumming and electronic sounds to the band's music."
   }
];

// Get the button and selection menu
const memberButton = document.getElementById("member-button");
const memberChoice = document.querySelector("#member-choice");
const memberInformation = document.getElementById("member-information");

// Function to display the selected member's information
function showMember() {

   // Get the selected member
   const selectedMember = memberChoice.value;

   // Find the matching member in the array
   let foundMember = null;

   for (let i = 0; i < members.length; i++) {

      if (members[i].id === selectedMember) {
         foundMember = members[i];
         break;
      }
   }

   // Check whether a member was selected
   if (foundMember !== null) {

      memberInformation.innerHTML =
         "<h3>" + foundMember.name + "</h3>" +
         "<p><strong>Role:</strong> " + foundMember.role + "</p>" +
         "<p>" + foundMember.description + "</p>";

   } else {

      memberInformation.textContent =
         "Please select a band member first.";
   }
}

// Listen for button clicks
memberButton.addEventListener("click", showMember);
