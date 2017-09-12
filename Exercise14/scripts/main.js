document.getElementById('btnAddRed').addEventListener('click', function () {
    var elm =
        document.getElementById("content");
    elm.classList.add("red");
});

document.getElementById('btnRemoveRed').addEventListener('click', function () {
    var elm =
        document.getElementById("content");
    elm.classList.remove("red");
});



function validate(username) {
    var MyValue = document.getElementById(username).value;
    if (MyValue == "") {
        alert('First Name is requird ');
    }
}

function ValidateEmail(email) {
    var MyEmail = document.getElementById(email).value;

    if (MyEmail == "") {
        alert('Email is required');
    }
}

function validate(password) {
    var myPassword = document.getElementById(password).value;
    if (myPassword == "") {
        alert('Password is required');
    }
}

function validateSelect(myDropDown) {
    var selectedOption = document.getElementById(myDropDown).selectedIndex;
    if (selectedOption == "") {
        alert('please select one');
    }
}

function validateCheckBox(checkbox) {
    var checkBox = document.getElementById(checkbox).checked;
    if (checkBox == false) {
        alert('Please select ');
    }
}