const generateButton = document.getElementById('generate-user');
const historial = document.getElementById('historialContenedor');
let userHistory = [];

generateButton.addEventListener('click', async function crearusuario() {
    await fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            // Información del usuario
            const fullName = `${user.name.first} ${user.name.last}`;
            const email = user.email;
            const dob = new Date(user.dob.date).toLocaleDateString();
            const address = `${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;
            const phone = user.phone;
            const password = user.login.password;
            const picture = user.picture.large;

            // Actualizar el DOM con la información del usuario
            document.getElementById('fullName').innerText = fullName;
            document.getElementById('photo').src = picture;

            document.getElementById('Nombre').innerText = fullName;
            document.getElementById('Correo').innerText = email;
            document.getElementById('Fecha').innerText = dob;
            document.getElementById('Direccion').innerText = address;
            document.getElementById('Telefono').innerText = phone;
            document.getElementById('Contrasena').innerText = password;

            // Agregar el usuario al historial
            userHistory.push({ fullName, email, dob, address, phone, password, picture });
            actualizarHistorial();
        })
        .catch(error => {
            console.error('Error al obtener la respuesta:', error);
            const resultadosUser = document.getElementById('generadorResultados');
            resultadosUser.innerHTML = `<p>Error al obtener la respuesta. Por favor, inténtalo de nuevo.</p>`;
        });
});

function actualizarHistorial() {
    historial.innerHTML = userHistory.map(user => `
        <div class="card mb-3" style="max-width: 540px max-height: 240px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${user.picture}" class="img-fluid rounded" style="width: 200px; alt="${user.fullName}">
                </div>
                <div class="col-md-8">
                    <div class="card-body text-center" style="font-size: 10px;">
                        <h5 class="card-title">${user.fullName}</h5>
                        <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                        <p class="card-text"><strong>Fecha de Nacimiento:</strong> ${user.dob}</p>
                        <p class="card-text"><strong>Dirección:</strong> ${user.address}</p>
                        <p class="card-text"><strong>Teléfono:</strong> ${user.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function borrarHistorial() {
    historial.innerHTML = '';
    userHistory = [];
}
