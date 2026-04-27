const adoptButtons = document.querySelectorAll('article button:first-of-type');
const petDropdown = document.querySelector('select[name="pet"]');
const adoptionForm = document.querySelector('form');

adoptButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const animalName = event.target.closest('article').querySelector('h3').innerText;
    petDropdown.value = animalName;
    adoptionForm.scrollIntoView({ behavior: 'smooth' });
  });
});

//=================================================

adoptionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const submitButton = adoptionForm.querySelector('button[type="submit"]');
  
  submitButton.textContent = 'Sent!';
  submitButton.style.backgroundColor = '#83d875';
  submitButton.style.borderColor = '#6bc25d';
  
  adoptionForm.reset();
  
  setTimeout(() => {
    submitButton.textContent = 'Send';
    submitButton.style.backgroundColor = '';
    submitButton.style.borderColor = ''; 
  }, 3000);
});