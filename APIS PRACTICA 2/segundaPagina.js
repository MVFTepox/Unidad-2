document.getElementById('generate-user').addEventListener('click', async function () {
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
            document.querySelector('.card-title').innerText = fullName;
            document.querySelector('.card img').src = picture;

            document.getElementById('Nombre').innerText = fullName;
            document.getElementById('Correo').innerText = email;
            document.getElementById('Fecha').innerText = dob;
            document.getElementById('Direccion').innerText = address;
            document.getElementById('Telefono').innerText = phone;
            document.getElementById('Contrasena').innerText = password;
        })
        .catch(error => {
            console.error('Error al obtener la respuesta:', error);
            const resultadosUser = document.getElementById('generadorResultados');
            resultadosUser.innerHTML = `<p>Error al obtener la respuesta. Por favor, inténtalo de nuevo.</p>`;
        });
});
