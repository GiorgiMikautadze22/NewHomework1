// 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"

function posOrNeg(num) {
  if (num > 0) {
    console.log("დადებითია");
  } else if (num === 0) {
    console.log("ნულია");
  } else if (num < 0) {
    console.log("უარყოფითია");
  } else {
    console.log("ჩაწერეთ რიცხვი");
  }
}

posOrNeg(22);

// // 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს 1 დან 100 მდე

function sum(num) {
  let NumbSum = 0;
  for (let i = 0; i <= num; i++) {
    NumbSum = NumbSum + i;
  }
  console.log(NumbSum);
}

sum(10);

//3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// დააბრუნოს ეს ციფრი კენტია თუ ლუწი

function evenOrOdd(num) {
  if (num === 0) {
    console.log("ნულია");
  } else if (num % 2 === 0) {
    console.log("ლუწია");
  } else if (num % 2 === 1) {
    console.log("კენტია");
  } else {
    console.log("ჩაწერეთ რიცხვი");
  }
}

evenOrOdd(21);

// 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი

const car = {
  year: 1994,
  model: "very good model",
};

function carAge(x) {
  let data = new Date();
  console.log(data.getFullYear() - x);
}

carAge(car.year);

// 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს,
// მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს
// მასივის უდიდესი ციფრი

let arrMax = [1, 4, 2222, 88, 999, 123];

function Max() {
  let maxNum = arrMax.sort((a, b) => b - a);

  console.log(maxNum[0]);
}

Max();

// 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი

let arrMin = [1, 4, 2222, 88, 999, 123];

function Min() {
  let minNum = arrMin.sort((a, b) => a - b);

  console.log(minNum[0]);
}

Min();

// 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
// ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
// მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"

function reverse(str) {
  let reversedStr = "";
  for (let i = str.length; i > 0; i--) {
    reversedStr = reversedStr + str[i - 1];
  }
  console.log(reversedStr);
}

reverse("ერთი");
