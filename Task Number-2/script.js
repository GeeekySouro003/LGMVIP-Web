const form = document.getElementById('registrationForm');
const outputBody = document.querySelector('#output tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const website = document.getElementById('website').value;
  const imageLink = document.getElementById('image').value;
  const gender = document.getElementById('gender').value;
  const skills = document.getElementById('skills').value;

  const newRow = outputBody.insertRow();

  const descriptionCell = newRow.insertCell();
  const imageCell = newRow.insertCell();

  descriptionCell.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Website:</strong> ${website}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Skills:</strong> ${skills}</p>
  `;
  imageCell.innerHTML = `<img src="${imageLink}" alt="User Image" width="100">`;

  // Reset form fields
  form.reset();
});