// const movies = document.getElementsByClassName("our-story-card");
// console.log(movies);
// // movies[0].addEventListener("click", () => {
// //   console.log("hello");
// // });
// for (var i = 0; i < movies.length; i++) {
//   movies[i].addEventListener("click", function () {
//     console.log("hello");
//   });
// }
/*const arr = [7, 3, -1, 4, "error", -5, -10];
let min = arr[0];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (typeof arr[i] !== "number") {
    continue;
  }
  if (max < arr[i]) {
    max = arr[i];
  }
  if (min > arr[i]) {
    min = arr[i];
  }
  console.log(max, min);
}
console.log(max, min);*/
const arr = [12, 5, -5, 0, 4];
function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1}days ...`;
  }
  console.log(str);
}
printForecast(arr);
