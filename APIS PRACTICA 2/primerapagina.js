document.getElementById('askButton').addEventListener('click',
    async function () {
        await fetch('https://yesno.wtf/api')
            .then(response => response.json())
            .then(data => {
                const answerDiv = document.getElementById('answer');

                answerDiv.innerHTML = '';
                answerDiv.innerHTML = `
                <div class=card>
                    <h2 class="card-title text-center pt-2">${data.answer.toUpperCase()}</h2>
                    <img src="${data.image}" style="width: 200px class="img-fluid gifperso p-3" alt="Respuesta de ${data.answer}">
                </div>
            `;
            })
            .catch(error => {
                console.error('Error al obtener la respuesta:', error);
                const answerDiv = document.getElementById('answer');
                answerDiv.innerHTML = `<p>Error al obtener la respuesta. Por favor, inténtalo de nuevo.</p>`;
            });
    });
