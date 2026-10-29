let arr=[1,6,3,4,35];
// let newArr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }
let newArr=arr.map((e , index,array)=>{
    return e**2
})


console.log(newArr)



const greaterthanseven =(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log (newArr.filter(greaterthanseven))




let arr2=[1,3,4,5,43];
sum=0;
for(i=0;i<arr2.length;i++){
sum=sum+arr2[i]
console.log(sum)
}