function searchGrounds() {

    let input = document.getElementById("searchInput");
    let district = document.getElementById("districtFilter");

    let searchText = input.value.toLowerCase().trim();
    let selectedDistrict = district.value.toLowerCase();

    let cards = document.querySelectorAll(".ground-card");

    let found = 0;

    cards.forEach(function(card) {

        let groundInfo = card.innerText.toLowerCase();

        let matchesSearch = groundInfo.includes(searchText);
        let matchesDistrict = selectedDistrict === "" ||
                              groundInfo.includes(selectedDistrict);

        if (matchesSearch && matchesDistrict) {

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

    if (found > 0) {

        message.innerText = found + " ground(s) found.";

    } else {

        message.innerText = "No grounds found. Try another location.";

    }

}
