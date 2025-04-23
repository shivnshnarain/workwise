document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email.endsWith('@graphicera.edu.in')) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userEmail', email);
        window.location.href = 'index.html';
    } else { alert('Please use your institutional email');}
});
if (localStorage.getItem('loggedIn') === 'true') {
    window.location.href = 'index.html';
}