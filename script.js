(function () {
    'use strict';
    const detailForm = document.querySelector('#destination_form');
    detailForm.addEventListener('submit', handleFormSubmit);
    function handleFormSubmit(event) {
        event.preventDefault();
        const destName = event.target.elements['Name'].value;
        const destLocation = event.target.elements['Location'].value;
        const destPhoto = event.target.elements['Photo'].value;
        const destDesc = event.target.elements['Description'].value;
        for (var i = 0; i < detailForm.length; i++) {
            detailForm.elements[i].value = '';
        }
        const destcard = createDistinationCard(destName, destLocation, destPhoto, destDesc);
        const wishListContainer = document.getElementById('destination_container');
        if (wishListContainer.children.length === 0) {
            document.getElementById('title').innerHTML = "My Destination Wish-List";
        }
        document.querySelector('#destination_container').appendChild(destcard);
    }
    function createDistinationCard(Name, Location, PhotoURL, Description) {
        const card = document.createElement("div");
        card.className = 'card';

        const img = document.createElement('img');
        img.setAttribute('alt', Name);

        const constantPhotoUrl = "images\signpost.jpg";
        if (PhotoURL.length === 0) {
            img.setAttribute('src', constantPhotoUrl);
        }
        else {
            img.setAttribute('src', PhotoURL);
        }
        card.appendChild(img);
        const cardBody = document.createElement('div');
        cardBody.className = "card-body";

        const cardTitle = document.createElement('h3');
        cardTitle.innerText = Name;
        cardBody.appendChild(cardTitle);

        const cardSubtitle = document.createElement('h4');
        cardSubtitle.innerText = Location;
        cardBody.appendChild(cardSubtitle);

        if (Description.length !== 0) {
            const cardText = document.createElement('p');
            cardText.className = "card-text";
            cardText.innerText = Description;
            cardBody.appendChild(cardText);
        }
        const cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerText = 'Remove';

        cardDeleteBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);
        return card;

    }
    function removeDestination(event) {
        const card = event.target.parentElement.parentElement;
        card.remove();
    }


})();
