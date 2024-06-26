const askButton = document.getElementById('askButton');
const colorletra = document.getElementById('gif');
const defaultColor = "linear-gradient(25deg, #d21111 , #0044ff)";
const lightBgColor = "linear-gradient(25deg, #d24411, #0044ff)";

askButton.addEventListener('click', async function () {
    await fetch('https://yesno.wtf/api')
        .then(response => response.json())
        .then(data => {
            const answerDiv = document.getElementById('answer');
            answerDiv.innerHTML = '';
            answerDiv.innerHTML = `
                <div class="card">
                    <h2 class="card-title text-center pt-2">${data.answer.toUpperCase()}</h2>
                    <img src="${data.image}" style="width: 200px;" class="img-fluid align-self-center rounded-circle gifperso p-3" alt="Respuesta de ${data.answer}">
                </div>
            `;

            const bg = document.querySelector('.tacosdePastor'); // Asegúrate de que la clase coincide
            if (data.answer.toUpperCase() === 'YES') {
                bg.style.background = defaultColor;
            } else {
                bg.style.background = lightBgColor;
            }
        })
        .catch(error => {
            console.error('Error al obtener la respuesta:', error);
            const answerDiv = document.getElementById('answer');
            answerDiv.innerHTML = `<p>Error al obtener la respuesta. Por favor, inténtalo de nuevo.</p>`;
        });
});
