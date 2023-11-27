console.log('hello');

function example() {
    if (true) {
        var x = 10;
        console.log(x); // 10 (block-scoped)
    }
    console.log(x); // ReferenceError: x is not defined
}

// var is function scoped, let and const are block scoped.

example();

var ourDog = {
    "name":"Camper",
    "legs":4,
    "tails":1,
    "friends":["a","b"]
};

//Object.freeze(ourDog); 
//ourDog.friends = ['c','d']; // won't matter if freeze is called.

console.log(ourDog);

var squarelist = (list) => list.filter(num => num >2).map(num => num*2);


list = [1,2,3,4];
console.log(list);
console.log(squarelist(list));

