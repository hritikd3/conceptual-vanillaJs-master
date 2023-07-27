// // const student= {
// //  name: " hritik",
// //  course: "MCA",
// //  currCGPA: 9.0
// // }
// // console.log(student.name)
// // console.log(student.course)
// // console.log(student.currCGPA)

// var a=2;
// function foo(){
//     var a=10;
//     console.log(a)
// }
// console.log(a)
// foo()

function descendingSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap the elements if they are in the wrong order
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const input = [-3, -2, 1, 2, 4, 89, 99];
const output = descendingSort(input);
console.log(output); // Output: [99, 89, 4, 2, 1, -2, -3]
