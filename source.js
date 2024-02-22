document.getElementById('signInForm').addEventListener('submit', function(event) {
	event.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const regex = /^[a-zA-Z0-9]+$/;

	if (!regex.test(username)) {
		alert('Invalid username. Username can only contain letters and numbers.');
		return;
	}

	if (password.length < 8) {
		alert('Invalid password. Password must be at least 8 characters long.');
		return;
	}

	this.submit();
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
	event.preventDefault();
	const fullname = document.getElementById('fullname').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const username = document.getElementById('signUpUsername').value;
	const password = document.getElementById('signUpPassword').value;
	const regex = /^[a-zA-Z0-9]+$/;

	if (!regex.test(username)) {
		alert('Invalid username. Username can only contain letters and numbers.');
		return;
	}

	if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
		alert('Invalid email address.');
		return;
	}

	if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone)) {
		alert('Invalid phone number. Phone number must be in the format XXX-XXX-XXXX.');
		return;
	}

	if (fullname.length < 3) {
		alert('Invalid full name. Full name must be at least 3 characters long.');
		return;
	}

	if (password.length < 8) {
		alert('Invalid password. Password must be at least 8 characters long.');
		return;
	}

	this.submit();
});


document.querySelectorAll('#signInForm input, #signUpForm input').forEach(function(input) {
	input.addEventListener('input', function() {
		if (this.value.length === 0) {
			this.classList.add('error');
		} else {
			this.classList.remove('error');
		}
	});
});