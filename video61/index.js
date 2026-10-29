let random=Math.random()
let a = prompt("enter first number")
let b=prompt("enter operation")
let c= prompt("enter second number")
let obj={
    "+": "-",
    "*": "+",
    "-": "/",
    "/":"**",



}
if(random>0.1){
console.log(`the result is ${a} ${b} ${c}`)
}
else{
    c=obj[c]
    alert(`the result is ${a} ${b} ${c} `)
}