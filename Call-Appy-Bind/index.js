const obj = {
  name: "Arshad khan",
  func: function () {
    return `My name is ${this.name}`;
  },
};
// console.log(obj.func())

// Call method

const obj2 = {
  name: "Shah Rukh Khan",
};
// console.log(obj.func.call(obj2))

// Apply Method

const obj3 = {
  name: "Salman Khan",
};

// console.log(obj.func.apply(obj3));

// Bind Method

const newFunc = obj.func.bind(obj3);
// console.log(newFunc());

// Call: Call method function ko invoke (turant call) call karta hai or har ek ek argument ko pass karta hai.
// Apply: Apply method function ko invoke karta hai or argument ko array ki form me pass karta hai.
// Bind: Bind function ko turant call nhi karta hai balke function ko return karta hai or isme this or arguments predefined hote hai.

// Output based question

var newObj = { name: "Arshad" };

function sayHello() {
  return "Hello " + this.name;
}

// console.log(sayHello()); // undefined because this refer the current object

function sayHello() {
  return "Hello " + this.name;
}

var secondObk = { name: "Shah rukh khan" };

sayHello.call(secondObk);











