/* const userEmail = prompt('Enter email');
if (userEmail) {
    const mail = userEmail.toLowerCase();
    if (mail.includes('@') && mail.includes('.')) {
      console.log('success');  
    }
    else {
        console.log('email is invalide');
    }
} else {
    console.log('window is closed');
} */

/* Дано рядок, що складається із символів, наприклад abcd.Перевірте,
    що першим символом цього рядкає буква а.Якщо не так - виведіть так, якщл інакше - виведіть ні.
 */
/* const str = 'babcde';
str.startsWith('a') ? console.log('так') : console.log('ні');  *

робимо імітацію логіна юзера і визначаємо до якої групи він відноситься
в перший prompt юзер вводить своє імя, в другий - свій вік
якщо юзер молодший 18 років виведемо стрінг `User ${userName} has been added to the children group`
`User ${name} has been added to the adult group`*/
/* const ageToNumber = Number(age);
const userName = prompt("What is your name?");
const age = prompt('What is your age?');


const ageToNumber = Number(age);
ageToNumber < 18 && age > 0 ? console.log(`User ${userName} has been added to the children group`)
    : console.log(`User ${userName} has been added to the adult group`) */



const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];
// Change code above this line