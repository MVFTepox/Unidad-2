document.getElementById('generate-user').addEventListener('click', async function () {
    await fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const resultadosUser = document.getElementById('generadorResultados');
            resultadosUser.innerHTML = '';
            resultadosUser.innerHTML = `
            <div class=card>
                <h2 class="card-title text-center pt-2">${data.results[0].name.first} ${data.results[0].name.last}</h2>
                
                <img src="${data.results[0].picture.large}" class="img-fluid rounded-circle border border-3 border-black align-self-center p-2" style="width: 200px;" alt="Imagen de ${data.results[0].name.first} ${data.results[0].name.last}">
                
                <ul class="nav nav-tabs justify-content-center my-3" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="nombre-tab" data-bs-toggle="tab" data-bs-target="#Nombre"
                            type="button" role="tab" aria-controls="Nombre" aria-selected="true"><i class="bi bi-person-video"></i></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="correo-tab" data-bs-toggle="tab" data-bs-target="#Correo" type="button"
                            role="tab" aria-controls="Correo" aria-selected="false"><i class="bi icon-pers bi-envelope"></i></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link text-nowrap" id="fecha-tab" data-bs-toggle="tab" data-bs-target="#Fecha" type="button"
                            role="tab" aria-controls="Fecha" aria-selected="false"><i class="bi icon-pers bi-calendar"></i></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="direccion-tab" data-bs-toggle="tab" data-bs-target="#Direccion" type="button"
                            role="tab" aria-controls="Direccion" aria-selected="false"><i class="bi icon-pers bi-house"></i></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link text-color-dark" id="telefono-tab" data-bs-toggle="tab" data-bs-target="#Telefono" type="button"
                            role="tab" aria-controls="Telefono" aria-selected="false"><i class="bi icon-pers bi-telephone"></i></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contraseña-tab" data-bs-toggle="tab" data-bs-target="#Contraseña" type="button"
                            role="tab" aria-controls="Contraseña" aria-selected="false"><i class="bi icon-pers bi-lock"></i></button>
                    </li>
                </ul>
            </div>
            
            `;
        })
        .catch(error => {
            console.error('Error al obtener la respuesta:', error);
            const resultadosUser = document.getElementById('generadorResultados');
            resultadosUser.innerHTML = `<p>Error al obtener la respuesta. Por favor, inténtalo de nuevo.</p>`;
        });

});