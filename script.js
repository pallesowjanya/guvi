document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const food = Array.from(document.getElementById('food').selectedOptions).map(option => option.text).join(', ');
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    const table = document.getElementById('userTable');
    const row = table.insertRow();
    row.insertCell(0).textContent = firstName;
    row.insertCell(1).textContent = lastName;
    row.insertCell(2).textContent = email;
    row.insertCell(3).textContent = address;
    row.insertCell(4).textContent = pincode;
    row.insertCell(5).textContent = gender;
    row.insertCell(6).textContent = food;
    row.insertCell(7).textContent = state;
    row.insertCell(8).textContent = country;

    document.getElementById('userForm').reset();
});
