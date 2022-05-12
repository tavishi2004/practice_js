// First Name Validation
var fvalid = document.getElementById("fName");



var firstNameValidation = function () {
  let firstNameValue = fvalid.value.trim();
  let validFirstName = /^[A-Za-z]+$/;
  let firstNameErr = document.getElementById("firstNametag");
    firstNameErr.style.color = "red";

  if (firstNameValue == "") {
    firstNameErr.innerHTML = "First Name is required";
  } else if (!validFirstName.test(firstNameValue)) {
    firstNameErr.innerHTML =
      "First Name must be only string without white spaces";
        
  } else {
    firstNameErr.innerHTML = "";
    return true;
  }
};

fName.oninput = function () {
  firstNameValidation();
};

// Last Name Validations
var lvalid = document.getElementById("lName");

var lastNameValidation = function () {
  lastNameValue = lvalid.value.trim();
  validLastName = /^[A-Za-z]+$/;
  lastNameErr = document.getElementById("lasttNametag");
  lastNameErr.style.color = "red";

  if (lastNameValue == "") {
    lastNameErr.innerHTML = "Last Name is required";
  } else if (!validLastName.test(lastNameValue)) {
    lastNameErr.innerHTML =
      "Last Name must be only string without white spaces";
  } else {
    lastNameErr.innerHTML = "";
    return true;
  }
};

lName.oninput = function () {
  lastNameValidation();
};

// Email Address Validation
var emailAddress = document.getElementById("mail");
var emailAddressValidation = function () {
  emailAddressValue = emailAddress.value.trim();
  validEmailAddress = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  emailAddressErr = document.getElementById("emailNametag");
  emailAddressErr.style.color = "red";
  if (emailAddressValue == "") {
    emailAddressErr.innerHTML = "Email Address is required";
  } else if (!validEmailAddress.test(emailAddressValue)) {
    emailAddressErr.innerHTML =
      "Email Address must be in valid formate with @ symbol";
  } else {
    emailAddressErr.innerHTML = "";
    return true;
  }
};

mail.oninput = function () {
  emailAddressValidation();
};

// Mobile Number Validation
var mobileNumber = document.getElementById("phone");

var mobileNumberValidation = function () {
  mobileNumberValue = mobileNumber.value.trim();
  validMobileNumber = /^[0-9]*$/;
  mobileNumberErr = document.getElementById("mobileTag");
    mobileNumberErr.style.color="red";


  if (mobileNumberValue == "") {
    mobileNumberErr.innerHTML = "Mobile Number is required";
  } 
  
  
  
  else if (mobileNumberValue.length != 10) {
    mobileNumberErr.innerHTML = "Mobile Number must have 10 digits";
  } else {
    mobileNumberErr.innerHTML = "";
    return true;
  }
};
phone.oninput = function () {
  mobileNumberValidation();
};




// Password Validation
var passwordvalid= document.getElementById("formpass");;

var passwordValidation = function(){

  passwordValue=passwordvalid.value.trim(); 
   validPassword=/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/
   
   passwordErr = document.getElementById("passwordtag");

   passwordErr.style.color="red";

   if(passwordValue=="")
   {
    passwordErr.innerHTML="Password is required";
   }else if(!validPassword.test(passwordValue)){
     passwordErr.innerHTML="Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters";
   }
   else{
     passwordErr.innerHTML="";
     return true;
   }
}

passwordvalid.oninput=function(){

   passwordValidation();

//  confirmPasswordValidation();
   
}

// Confirm Password Validation
var confirmPassword= document.getElementById("confirmpass");

var confirmPasswordValidation=function(){
   confirmPasswordValue=confirmPassword.value.trim(); 
   
   confirmPasswordErr=document.getElementById('confirmpasswordtag');

   confirmPasswordErr.style.color="red";
   if(confirmPasswordValue==""){
       confirmPasswordErr.innerHTML="Confirm Password is required";
   }

  else if(confirmPasswordValue!=passwordvalid.value){
     confirmPasswordErr.innerHTML="Password Mismatch";
   }
   else{
     confirmPasswordErr.innerHTML="";
     return true;
   }
}

confirmPassword.oninput=function(){

 confirmPasswordValidation();
   
}