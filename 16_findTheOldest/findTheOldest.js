const findTheOldest = function(people) {
    for (let person of people) {
        if(person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
    }

    let peopleMapped = people.map(person => ({
        name: person.name,
        age: person.yearOfDeath - person.yearOfBirth
    }));

    peopleMapped.sort((a,b) => a.age - b.age);

    const end = parseInt(peopleMapped.length);

    return peopleMapped[end - 1];

};

// Do not edit below this line
module.exports = findTheOldest;
