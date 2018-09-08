

// addStudentButton.onclick = AddStudent;

firstName.onblur = CheckValue;
lastName.onblur = CheckValue;
dni.onblur = CheckDNI;
dni.onkeyup = restrictDNILength;
addStudentButton.onclick = AddStudent;

function CheckValue() {
    if(firstName.value === '') {
        firstName.classList.remove('is-valid');
        firstName.classList.add('is-invalid');
    } else {
        firstName.classList.remove('is-invalid');
        firstName.classList.add('is-valid');
    }
    if(lastName.value === '') {
        lastName.classList.remove('is-valid');
        lastName.classList.add('is-invalid');
    } else {
        lastName.classList.remove('is-invalid');
        lastName.classList.add('is-valid');
    }
}

function CheckDNI() {
    if(dni.value === ''  || dni.value <= 0 || dni.value.length != 8 )
    {
        dni.classList.remove('is-valid');
        dni.classList.add('is-invalid');
    } else {
        dni.classList.remove('is-invalid');
        dni.classList.add('is-valid');
    }
}

var dniOldValue = 191919;

function restrictDNILength(){
    if (dni.value.indexOf("-") === 0) {
        dni.value = "";
    }
    if(dni.value.length > 8){
        dni.value = dniOldValue;
    } else {
        dniOldValue = dni.value;
    }
}

function AddStudent() {
    if(dni.value.length != 8)
    {
        alert('El DNI tiene que tener 8 digitos.');
        return;
    }
    var objStudent = new Student(firstName.value, lastName.value, dni.value, email.value);
    var objStudentJSON = JSON.stringify(objStudent);
    localStorage.setItem(objStudent.DNI, objStudentJSON);
    console.log(localStorage.getItem(objStudent.DNI));
    alert('Todo esta bien ;)');
}

function Student(first, last, dni, email) {
    this.Name = first;
    this.LastName = last;
    this.DNI = dni;
    this.Email = email;
}
