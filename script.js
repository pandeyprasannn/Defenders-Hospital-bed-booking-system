document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');
    const viewDataBtn = document.getElementById('viewDataBtn');
    const dataDisplay = document.getElementById('dataDisplay');
    const collectedDataList = document.getElementById('collectedDataList');
    const hospitalLogin = document.getElementById('hospitalLogin');
    const userLogin = document.getElementById('userLogin');
    const hospitalLoginBtn = document.getElementById('hospitalLoginBtn');
    const userLoginBtn = document.getElementById('userLoginBtn');

    let collectedData = [];

    // Show Hospital Login Section
    hospitalLoginBtn.addEventListener('click', function() {
        hospitalLogin.style.display = 'block';
        userLogin.style.display = 'none';
    });

    // Show User Login Section
    userLoginBtn.addEventListener('click', function() {
        hospitalLogin.style.display = 'none';
        userLogin.style.display = 'block';
        displayCollectedData();
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const address = document.getElementById('address').value;
        const number = document.getElementById('number').value;
        const availableBeds = parseInt(document.getElementById('availableBeds').value, 10);
        const vacantOPDs = parseInt(document.getElementById('vacantOPDs').value, 10);
        const availableDoctor = document.getElementById('availableDoctor').value;

        const formData = {
            address,
            number,
            availableBeds,
            vacantOPDs,
            availableDoctor
        };

        collectedData.push(formData);

        // Show popup
        popup.style.display = 'block';

        // Clear form fields
        form.reset();
    });

    closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    function displayCollectedData() {
        dataDisplay.style.display = 'block';
        collectedDataList.innerHTML = '';

        collectedData.forEach(function(data) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>A Blood Group:</strong> ${data.address} <br>
                <strong>B Blood Group:</strong> ${data.number} <br>
                <strong>AB Blood Group:</strong> ${data.availableBeds} <br>
                <strong>O Blood Group:</strong> ${data.vacantOPDs} <br>
                <strong>Available Doctor:</strong> ${data.availableDoctor}
            `;
            collectedDataList.appendChild(listItem);
        });
    }
});
