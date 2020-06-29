var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");

//hide hints
$("form span").hide();

function isPasswordValidLength() {
	var validated = true;
	if ($password.val().length < 9)
		validated = false;
	return validated;
}

function isPasswordValidName() {
	var validated = true;
	if (!/\d/.test($password.val()))
		validated = false;
	if(!/[a-z]/.test($password.val()))
		validated = false;
	if(!/[A-Z]/.test($password.val()))
		validated = false;
	if(/[^0-9a-zA-Z]/.test($password.val()))
		validated = false;
	return validated;
}

function arePasswordsMatching() {
	return $password.val() === $confirmPassword.val();
}

function isUsernameValid() {
	return $username.val().length > 5;
}

function canSubmit() {
	return isPasswordValidLength() && isPasswordValidName() && arePasswordsMatching() && isUsernameValid();
}

function passwordEvent() {
	//find out if password is valid
	if (isPasswordValidLength()) {
		//hide hint if valid
		$password.next().hide();
	} else {
		//else show hint
		$password.next().show();
	}
	if (isPasswordValidName()) {
		//hide hint if valid
		$password.prev().hide();
	} else {
		//else show hint
		$password.prev().show();
	}
}

function confirmPasswordEvent() {
	//find out if password and confirmation match
	if (arePasswordsMatching()) {
		//hide hint if matched
		$confirmPassword.next().hide();
	} else {
		//else show hint
		$confirmPassword.next().show();
	}
}

function usernameEvent() {
	//find out if username is valid
	if (isUsernameValid()) {
		//hide hint if valid
		$username.next().hide();
	} else {
		//else show hint
		$username.next().show();
	}
}

function enableSubmitEvent() {
	$("#submit").prop("disabled", !canSubmit());
}

//when event happens on password input
$password.focus(passwordEvent)
	.keyup(passwordEvent)
	.keyup(confirmPasswordEvent)
	.keyup(enableSubmitEvent);
	
		
//when event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent)
	.keyup(confirmPasswordEvent)
	.keyup(enableSubmitEvent);

//when event happens on username input	
$username.focus(usernameEvent)
	.keyup(usernameEvent)
	.keyup(enableSubmitEvent);
	
enableSubmitEvent();
