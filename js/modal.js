// 1
// const productName = "droid";
// console.log(productName);
// // 'Droid'
// const pricePerItem = 2000;
// console.log(pricePerItem);
// // 2000

// 2
// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line
// productName = "Repair droid";
// console.log(productName);

// pricePerItem = 3500;
// console.log(pricePerItem);

// 3// Change code below this line
// const topSpeed = 160;
// console.log(topSpeed)

// const distance = 617.54;
// console.log(distance)

// const login = "mango935";
// console.log("mango935")

// const isOnline = true;
// console.log(isOnline)

// const isAdmin = false;
// console.log(isAdmin)

// 4

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// 5
// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// 6
// Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const massage = `You ordered droids worth ${totalPrice} credits. Delivery (${
//   deliveryFee > credits
// } is included in total price.`;
// console.log(massage);

// 7
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

// 8
// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// 9
// function add(a, b, c) {
//   // Change code below this line

//   return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// 10
// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }

// makeMessage("Radar", 6150);
// makeMessage("Scanner", 3500);
// makeMessage("Reactor", 8000);
// makeMessage("Engine", 4070);

// 11
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;
//   console.log(totalPrice);

//   // Change code above this line
//   return totalPrice;
// }

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   console.log(message);
//   // Change code above this line
//   return message;
// }

// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// 13

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }

// 14

// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }

// 15
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }

//   return message;
// }

// 16

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available >= ordered) {
//     // Change this line
//     message = "Order is processed, our manager will contact you.";
//   } else {
//     message = "Not enough goods in stock!";
//   }

//   // Change code above this line
//   return message;
// }

// 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   // Change code above this line
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// 19

// 20
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else if (available >= ordered) {
//     message = "The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// 21
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// 22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

//   return canAccessContent;
// }
// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

// 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

// 24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if (totalSpent >= 50000){return 0.1 }

//     else if (totalSpent >= 20000){ return 0.05   }

//     else if(totalSpent >= 5000){return 0.02   }

//     else:
//         return 0
//   // Change code above this line
//   return discount;
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

// 25

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";

//   // Change code above this line
//   return message;
// }

// 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? "Access is allowed"
//       : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }

// 27

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// 29
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case "China": // Change this line
//       message = "Shipping to China will cost 100 credits"; // Change this line
//       break;

//     case "Chile": // Change this line
//       message = "Shipping to Chile will cost 250 credits"; // Change this line
//       break;

//     case "Australia": // Change this line
//       message = "Shipping to Australia will cost 170 credits"; // Change this line
//       break;

//     case "Jamaica": // Change this line
//       message = "Shipping to Jamaica will cost 120 credits"; // Change this line
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//       break;
//   }
//   // Change code above this line
//   return message;
// }

// 30
// function getNameLength(name) {
//   const length = name.length;
//   const message = `Name ${name} is ${length} characters long`; // Change this line

//   return message;
// }
