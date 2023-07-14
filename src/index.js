import users from './users.json';
import usersTpl from '../templates/users-item.handlebars';
 

console.log(usersTpl);
const users = document.querySelector('users-list');
console.log(users);

const markup = usersTpl(users);
users.innerHTML = markup;
 
 
 

const btn = document.querySelector('.filterButton');
btn.addEventListener('click', function(){
    const filteredUsers = users.sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));
    const alphabetFiltered = filteredUsers.map(users).join('');
    users.innerHTML = alphabetFiltered;
})

 
 