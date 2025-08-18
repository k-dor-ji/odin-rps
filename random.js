/*function sumOfTripledEvens(arr){
    return arr
    .filter((num)=>(num%2==0))
    .map((num)=>(num*3))
    .reduce((a,c)=>(a*c))
}

let arr = [1,2,3,4,5]
console.log(sumOfTripledEvens(arr))

function camelize(str){
    return str
    .split("-")
    .map((word,index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('')
}

console.log(camelize("background-color"))

function filterRange(arr, a, b){
    arr=  arr
    .filter((item)=> item>=a && item<=b)
    console.log(arr)
}

let arr =[ 5,3,8,1]
console.log(filterRange(arr,1,4))

function shuffle(arr){
    return arr.sort(() => Math.random() - 0.5)
}
let arr = [1,2,3,4,5]

console.log(shuffle(arr))

function copySorted(arr){
    return arr.slice().sort()
}

let arr = ["HTML", "CSS", "JavaScript"]
console.log(copySorted(arr))*/

function unique(arr){

    return Array.from(new Set(arr))
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(strings))