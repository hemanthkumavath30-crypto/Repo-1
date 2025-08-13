document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMessage').textContent = '';

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;

  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    valid = false;
  }

  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    valid = false;
  }

  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required.';
    valid = false;
  }

  if (valid) {
    document.getElementById('successMessage').textContent = 'Form submitted successfully!';
    document.getElementById('contactForm').reset();
  }
});
