const pagination = document.querySelector('.pagination');
const urlBase = 'https://reqres.in/api/users?page=';

pagination.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        const pageNumber = e.target.textContent;
        const url = urlBase + pageNumber;
        fetch(url)
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
          
          `;
                    user.append(div);
                });
            });
    }
});