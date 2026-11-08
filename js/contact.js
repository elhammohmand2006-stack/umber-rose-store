const form = document.getElementById('contact-form');
const success = document.getElementById('success');

// show or hide the error under one field
function setError(inputId, message){
    const field = document.getElementById(inputId).closest('.field');
    field.classList.toggle('error', message !== '');
    field.querySelector('.error-text').textContent = message;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();   // stop the page from reloading

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let ok = true;

    if (name.length < 2){
        setError('name', 'Please write your name.');
        ok = false;
    } else {
        setError('name', '');
    }

    // a simple email check: something@something.something
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)){
        setError('email', 'Please write a correct email, like name@mail.com');
        ok = false;
    } else {
        setError('email', '');
    }

    if (message.length < 10){
        setError('message', 'Your message should have at least 10 letters.');
        ok = false;
    } else {
        setError('message', '');
    }

    if (ok){
        success.textContent = 'Thank you, ' + name + '! We got your message and will answer within one day.';
        success.classList.add('show');
        form.reset();
    } else {
        success.classList.remove('show');
    }
});
