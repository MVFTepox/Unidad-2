document.addEventListener('DOMContentLoaded', function () {
    const pagination = document.querySelector('.pagination');
    const urlBase = 'https://reqres.in/api/users?page=';

    async function loadUsers(pageNumber) {
        const url = urlBase + pageNumber;
        try {
            const response = await fetch(url);
            const data = await response.json();

            const user = document.getElementById('root');
            user.innerHTML = '';

            data.data.forEach(element => {
                const div = document.createElement('div');
                div.classList.add('col-md-4', 'mb-3');
                div.innerHTML = `
                    <div class="card h-100">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${element.avatar}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${element.first_name} ${element.last_name}</h5>
                                    <p class="card-text">${element.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                user.appendChild(div);
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    // Cargar la primera página de usuarios al cargar la página
    loadUsers(1);

    // Agregar evento de clic para la paginación
    pagination.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const pageNumber = e.target.textContent;
            loadUsers(pageNumber);
        }
    });

    // Agregar evento de envío para el formulario de búsqueda por ID
    const form = document.getElementById('form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const imguser = document.getElementById('imagen-user');
        imguser.src = '';
        const id = document.getElementById('id').value;
        const url = `https://reqres.in/api/users/${id}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            imguser.src = data.data.avatar;
            const nombre = document.getElementById('nombreDeUsuarioCarta');
            nombre.innerHTML = `<h1 class="text-center my-3">${data.data.first_name} ${data.data.last_name}</h1>`;
            const user = document.getElementById('cartaDeUsuario');
            user.innerHTML = `
                <div class="card">
                    <div class="card-body bg-warning text-center p-3">
                        <h5 class="card-title">${data.data.first_name} ${data.data.last_name}</h5>
                        <p class="card-text">${data.data.email}</p>
                    </div>
                </div>
            `;
        } catch (error) {
            console.error('Error fetching user by ID:', error);
        }
    });

    // Agregar evento de clic para el botón de registro
    const botonregistro = document.getElementById('boton-crear-usuario');
    botonregistro.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById('CorreoRegistro').value;
        const contrasena = document.getElementById('ContraseñaRegistro').value;

        localStorage.setItem('email', email);
        localStorage.setItem('contrasena', contrasena);
        alert('Registro exitoso. Puedes iniciar sesión ahora.');
    });

    // Agregar evento de clic para el botón de iniciar sesión
    const botonIniciarSesion = document.getElementById('boton-iniciar-sesion');
    botonIniciarSesion.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const contrasena = document.getElementById('Contraseña').value;
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('contrasena');

        if (email === storedEmail && contrasena === storedPassword) {
            alert('Iniciando sesión...');
            setTimeout(() => {
                console.log('Sesión iniciada');
                mostrarContenedorPrincipal();
            }, 1500);
        } else {
            alert('Credenciales incorrectas');
        }
    });

    // Función para mostrar el contenedor principal y ocultar el secundario
    function mostrarContenedorPrincipal() {
        const contenedorPrincipal = document.getElementById('nuevocontenedor');
        contenedorPrincipal.style.display = 'block';

        const contenedorSecundario = document.getElementById('tacosdesuadero');
        contenedorSecundario.style.display = 'none';
    }

    // Función asincrónica para obtener y mostrar recursos
    async function recursosList() {
        const url = 'https://reqres.in/api/unknown';

        try {
            const response = await fetch(url);
            const data = await response.json();

            const userContainer = document.getElementById('nuevocontenedor');
            userContainer.innerHTML = '';
            userContainer.innerHTML = '<H1 class="text-center my-3">Listado de Recursos</H1>';

            const row = document.createElement('div');
            row.classList.add('row');

            data.data.forEach(element => {
                const col = document.createElement('div');
                col.classList.add('col-md-4', 'mb-3');

                const card = document.createElement('div');
                card.classList.add('card');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');
                cardBody.style.backgroundColor = element.color;

                const title = document.createElement('h5');
                title.classList.add('card-title');
                title.textContent = element.name;

                const year = document.createElement('p');
                year.classList.add('card-text');
                year.textContent = element.year;

                cardBody.appendChild(title);
                cardBody.appendChild(year);

                card.appendChild(cardBody);
                col.appendChild(card);

                row.appendChild(col);
            });

            userContainer.appendChild(row);
        } catch (error) {
            console.error('Error fetching resources:', error);
        }
    }

    // Llamar a la función para cargar recursos al cargar la página
    recursosList();


    // Crear usuarios
    // Crear usuarios
    const crearUsuarioBtn = document.getElementById('crear-usuario');
    crearUsuarioBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombrecrear').value;
        const apellidos = document.getElementById('apellidoscrear').value;
        const email = document.getElementById('emailcrear').value; // Corregido el ID
        const username = document.getElementById('nombredeusuario').value;

        const contenedor = document.getElementById('contenedorDeusuarios');

        const card = document.createElement('div');
        card.classList.add('mb-3');
        card.innerHTML = `
            <div class="card" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${nombre} ${apellidos}</h5>
                            <p class="card-text">Hola ${nombre}, bienvenido a la página. Este es tu correo: ${email}</p>
                            <p class="card-text"><small class="text-body-secondary">Este es tu nombre de usuario: ${username}</small></p>
                            <button type="button" id="btneliminar" class="btn btn-danger">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
    `;
        contenedor.appendChild(card);

        // Limpiar los campos después de agregar el usuario
        document.getElementById('nombrecrear').value = '';
        document.getElementById('apellidoscrear').value = '';
        document.getElementById('emailcrear').value = '';
        document.getElementById('nombredeusuario').value = '';

        const btnEliminar = card.querySelector('#btneliminar');  // Selección correcta del botón por su ID
        btnEliminar.addEventListener('click', () => {
            contenedor.removeChild(card);
        });
    });
});
