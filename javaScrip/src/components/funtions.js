document.addEventListener('DOMContentLoaded', () => {
    const username = document.getElementById('Username');
    const email = document.getElementById('correoElectronico');
    const password = document.getElementById('contraseña');
    const confirmPassword = document.getElementById('ConfirmarContraseña');
    const dateOfBirth = document.getElementById('FechaDeNacimiento');
    const age = document.getElementById('ageInput');
    const telefono = document.getElementById('telefono');
    const terms = document.getElementById('ConfirmacionDeTerminos');
    const submitButton = document.getElementById('botonSave');
    let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    let f = new Date();
    const labelsRegistro = [username, email, confirmPassword, password, dateOfBirth, age, telefono, terms];
    submitButton.addEventListener('click', (event) => {
        let valid = true;
        labelsRegistro.forEach(field => {
            field.classList.remove('is-invalid', 'valid');
        });
        if (password.value !== confirmPassword.value) {
            password.classList.add('is-invalid');
            confirmPassword.classList.add('is-invalid');
            alert('Las contraseñas no coinciden');
            valid = false;
        } else {
            password.classList.add('valid');
            confirmPassword.classList.add('valid');
        }
        labelsRegistro.forEach(field => {
            if (field === terms) {
                if (!field.checked) {
                    field.classList.add('is-invalid');
                    valid = false;
                    alert('Debes aceptar los términos y condiciones');
                } else {
                    field.classList.add('valid');
                }
            } else {
                if (field.value.trim() === '') {
                    field.classList.add('is-invalid');
                    valid = false;
                    alert('Todos los campos son obligatorios');
                } else {
                    field.classList.add('valid');
                }
            }
        });
        if (!valid) {
            event.preventDefault();
        } else {
            alert('Registro exitoso');
        }
        if (valid) {
            const newRow = dataTable.insertRow();
            newRow.innerHTML = `
                <td>${username.value}</td>
                <td>${dateOfBirth.value}</td>
                <td>${telefono.value}</td>
                <td>${email.value}</td>
                <td>${f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()}</td>
            '`;
        }
    });
});
