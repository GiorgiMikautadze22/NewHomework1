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

posOrNeg();

// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს 1 დან 100 მდე

function sum(num) {
  let NumbSum = 0;
  for (let i = 0; i <= num; i++) {
    NumbSum = NumbSum + i;
  }
  console.log(NumbSum);
}

sum(10);
