import User from './user-class.js';

const button = document.getElementById('fetch-button');
button.addEventListener('click', fetchData, {once: true});

const container = document.querySelector('main');

function fetchData() {
    return fetch('http://dummyjson.com/user/1')
        .then(response => response.json())
        .then((data) => {
            createUser(data);
        })
        .catch(err => console.error(err));
}

function createUser(data) {
    const user = new User(...Object.values(data));
    displayUser(user);
}

function displayUser(user) {
    Object.entries(user).forEach(([key, value]) => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${key.toUpperCase()}:</strong> ${value}`;
        container.appendChild(div);
    });
}