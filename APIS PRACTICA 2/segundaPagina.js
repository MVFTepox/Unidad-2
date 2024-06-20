document.getElementById('generate-user').addEventListener('click', async function () {
    await fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const resultadosUser =document.getElementById('generadorResultados');
            resultadosUser.innerHTML = '';
            resultadosUser.innerHTML = `
            <div class=card>
                <h2 class="card-title text-center pt-2">${data.results[0].name.first} ${data.results[0].name.last}</h2>
                <img src="${data.results[0].picture.large}" class="img-fluid rounded-circle align-self-center p-3" style="width: 200px;" alt="Imagen de ${data.results[0].name.first} ${data.results[0].name.last}">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: ${data.results[0].email}</li>
                    <li class="list-group-item">Celular: ${data.results[0].cell}</li>
            `;
        })
        .catch(error => {
            console.error('Error al obtener la respuesta:', error);
            const resultadosUser =document.getElementById('generadorResultados');
            resultadosUser.innerHTML = `<p>Error al obtener la respuesta. Por favor, inténtalo de nuevo.</p>`;
        });

});