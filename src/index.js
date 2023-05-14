function showForm() {
    document.getElementById("section-form").classList.remove("hidden");
}

function hideForm() {
    document.getElementById("section-form").classList.add("hidden");
}

function addSection(event) {
    event.preventDefault();
    const sectionName = document.getElementById("section-name").value;
    const orgName = document.getElementById("organization-name").value;
    const repName = document.getElementById("representer-name").value;
    const startDate = document.getElementById("start-date-time").value;
    const endDate = document.getElementById("end-date-time").value;
    const csvFile = document.getElementById("csv-file").value;
  
    const section = document.createElement("div");
    section.classList.add("bg-white", "p-4", "mb-4");
    section.innerHTML = `
      <h2 class="text-lg font-bold mb-2">${sectionName}</h2>
      <p class="mb-2"><strong>Organization Name:</strong> ${orgName}</p>
      <p class="mb-2"><strong>Representer Name:</strong> ${repName}</p>
      <p class="mb-2"><strong>Start Date and Time:</strong> ${startDate}</p>
      <p class="mb-2"><strong>End Date and Time:</strong> ${endDate}</p>
      <p class="mb-2"><strong>CSV File:</strong> <a href="${csvFile}" download>Download</a></p>
      <div class="flex justify-end">
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="deleteSection(this)">Delete</button>
      </div>
    `;
  
    const sections = document.getElementById("sections");
    sections.appendChild(section);
    hideForm();
  }  

function deleteSection(element) {
    element.closest(".bg-white").remove();
}