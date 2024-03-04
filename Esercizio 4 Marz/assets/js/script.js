/* Primo esercizio */

class User {
    constructor (_firstName, _lastName, _age, _location){
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }

    confronta(altroUtente) {
        if (this.age < altroUtente.age) {
            return `${this.firstName} è più giovane di ${altroUtente.firstName}`;
          } else if (this.age > altroUtente.age) {
            return `${this.firstName} è più vecchio di ${altroUtente.firstName}`;
          } else {
            return `${this.firstName} ha la stessa età di ${altroUtente.firstName}`;
          }
    }
} 

const user1 = new User('Fabio', 'Gallingani', 28, 'Reggio');
const user2 = new User('John', 'Doe', 31, 'New York');

const result = user1.confronta(user2);
console.log(result)



/* secondo Esercizio */

let petList = [];


class Pet {
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

    hasSameOwner(anotherPet) {
        return this.ownerName === anotherPet.ownerName;
    }
}


const addPet = () => {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;
    const newPet = new Pet(petName, ownerName, species, breed);
    petList.push(newPet);
    displayPet(newPet);
    document.getElementById('petForm').reset();
}


const displayPet = (pet) => {
    let petListDisplay = document.getElementById('listaPet');
    let petListItem = document.createElement('li');
     petListItem.innerText = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petListDisplay.appendChild(petListItem)
}

const pet1 = new Pet('giorgio','giovanni','s','d');
const pet2 = new Pet('giorvanni', 'giovanni', 'd', 's');
console.log(pet2.hasSameOwner(pet1));


