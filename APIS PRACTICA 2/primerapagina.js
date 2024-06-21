const askButton = document.getElementById('askButton');
const defaultColor = "linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 68, 255))";
const lightBgColor = "linear-gradient(to right, rgb(229, 229, 229), rgb(0, 68, 255), #04f)";

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
        })
        .catch(error => {
            console.error('Error al obtener la respuesta:', error);
            const answerDiv = document.getElementById('answer');
            answerDiv.innerHTML = `<p>Error al obtener la respuesta. Por favor, inténtalo de nuevo.</p>`;
        });

    const bg = document.querySelector('.tacosDePastor');
    if (bg.style.background === "" || bg.style.background === defaultColor) {
        bg.style.background = lightBgColor;
    } else {
        bg.style.background = defaultColor;
    }
});
