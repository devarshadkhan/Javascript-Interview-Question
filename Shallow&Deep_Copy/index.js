// what is diffrence between shallow copy and deep copy?

// shallow copy
// shallow copy me srif top level properties ka copy banata hai. agar hamare pass array ya object ke ander nested aaray ya object  hai toh unka refrense copy hoga value nhi.

//prerequisite

// 1. Hamare object ki first layer ka refrense or values change nhi hoga kyuki inka alag refrense banega but agar mere pass object ke ander object hai yani nested object toh unka refrense copy hoga value nhi. me agar shallow copy banake change {...obj} toh main object me reflest karega. first layer ko chod kar nested me same hoga.

// Top-level properties ko copy karta hai, nested objects/arrays ka reference copy karta hai.
// Example

const mainObj = {
  DevName: "Arshad Khan",
  tech_stack: {
    first: "React JS",
    second: "JavaScript",
    third: "Node JS",
  },
};

// mainObj.tech_stack.first = "HTML"; // without shallow copy
// console.log(mainObj);

// with shallow copy

// const copyObject = { ...mainObj };
// const copyObject = Object.assign({}, mainObj);

// copyObject.DevName = "Shah Rukh Khan"; // copy object me change main object me nhi  hua yani refrense dono ka alag h... main ka bhi or copy ka bhi.

// ===== Interesting Point
// ------ 1. Ham first layes ko bhi chnage kar sakte hai but woh orignal me chnage nhi hoga.

// try nested object

// copyObject.tech_stack.first = "Angular JS";

// console.log("copyObject", copyObject);
// console.log("Main-Object", mainObj);

// Deep Copy

// deep copy me array ya object ka pura new copy banata hai alag se inka refrense copy nhi hota hai.
// Pura structure (top-level + nested) ko copy karta hai, kisi bhi tarah ka reference nahi copy hota.

const deepCopyObject = JSON.parse(JSON.stringify(mainObj));
deepCopyObject.DevName = "Pathaan Khan";
deepCopyObject.tech_stack.first = "Next JS";
console.log("deepCopyObject", deepCopyObject); // yeh alag refrense copy bana h
console.log("mainObj", mainObj);

// Summary:
// Deep copy mein: Original object aur copied object ka reference alag hota hai, isliye aap copied object mein koi bhi changes karenge to original object unaffected rahega.
// Shallow copy mein: Nested objects ka reference same hota hai, isliye nested objects mein changes original object ko affect karte hain.
