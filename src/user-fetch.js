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
    const resultsArray = [];
    for (let i = 0; i < Object.keys(data).length; i++) {
        resultsArray.push(Object.values(data)[i]);
    }
    const user = new User(...resultsArray);
    container.append(JSON.stringify(user));
}