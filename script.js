document.addEventListener("DOMContentLoaded", () => {
    const petListContainer = document.querySelector(".pet-list");

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://www.adoptapet.com/public/apis/pet_list.html";

    fetch(proxyUrl + apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the data and create pet cards
            data.forEach(pet => {
                const petCard = document.createElement("div");
                petCard.classList.add("pet-card");
                petCard.innerHTML = `
                    <h2>${pet.name}</h2>
                    <p>Species: ${pet.species}</p>
                    <p>Age: ${pet.age}</p>
                    <p>Location: ${pet.location}</p>
                    <p>Contact: ${pet.contact}</p>
                `;
                petListContainer.appendChild(petCard);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});