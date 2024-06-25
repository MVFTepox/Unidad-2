document.addEventListener('DOMContentLoaded', function () {
    const pagination = document.querySelector('.pagination');
    const urlBase = 'https://reqres.in/api/users?page=';

    async function loadUsers(pageNumber) {
        const url = urlBase + pageNumber;
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                const user = document.getElementById('root');
                user.innerHTML = '';
                data.data.forEach(element => {
                    const div = document.createElement('div');
                    div.classList.add('col-md-4');
                    div.classList.add('mb-3');
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
                    user.append(div);
                });
            });
    }

    // Cargar la primera página de usuarios al cargar la página
    loadUsers(1);

    // Event listener para el clic en la paginación
    pagination.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const pageNumber = e.target.textContent;
            loadUsers(pageNumber);
        }
    });
});


const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    const imguser = document.getElementById('imagen-user');
    imguser.src = '';
    e.preventDefault();
    const id = document.getElementById('id').value;
    const url = `https://reqres.in/api/users/${id}`;
    fetch(url)  
        .then(response => response.json())
        .then(data => {
            imguser.src = data.data.avatar;
            const nombre = document.getElementById('nombreDeUsuarioCarta');
            nombre.innerHTML = `
            <h1 class="text-center my-3">${data.data.first_name} ${data.data.last_name}</h1>
            `
            const user = document.getElementById('cartaDeUsuario');
            user.innerHTML = '';
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${data.data.first_name} ${data.data.last_name}</h5>
                    <p class="card-text">${data.data.email}</p>
                </div>
            `;
            user.append(div);
        });
})  