
function searchGrounds() {

    let input = document.getElementById("searchInput");

    let searchText = input.value.toLowerCase().trim();

    let cards = document.querySelectorAll(".ground-card");

    let found = 0;

    cards.forEach(function(card) {

        let groundInfo = card.innerText.toLowerCase();

        if (groundInfo.includes(searchText)) {

            card.style.display = "block";
            found++;

        } else {

            card.style.display = "none";

        }

    });

    let message = document.getElementById("searchMessage");

    if (!message) {

        message = document.createElement("p");

        message.id = "searchMessage";

        input.parentElement.appendChild(message);

    }

    if (searchText === "") {

        message.innerText = "Showing all demo grounds.";

    } else if (found > 0) {

        message.innerText = found + " ground(s) found.";

    } else {

        message.innerText = "No grounds found. Try another location.";

    }

}
