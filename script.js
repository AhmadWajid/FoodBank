document.addEventListener('DOMContentLoaded', function () {
    fetch('food_banks.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('foodBankContainer');
            data.forEach(foodBank => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${foodBank.image}" alt="${foodBank.name}">
                    <div class="card-content">
                        <h2>${foodBank.name}</h2>
                        <p>${foodBank.address}</p>
                        <a href="${foodBank.url}" target="_blank">More Info</a>
                        <p>Date: ${foodBank.date}</p>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});