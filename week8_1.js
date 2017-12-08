   let arr = [];
    for( let i=1; i<=1000;i++){
        arr.push(i);
    }
    console.log(arr);

    // here please start your solution

    // using closures, functions and (map,filter,reduce)
    function divisibleFactory (z){
        function isDivisible(a){
            if (a % z === 0)
                return a;
        }
return isDivisible;
    }
 
    function showResult(){
        let DivisibleNumber=document.querySelector("#number").value;
        const newArr= arr.filter(divisibleFactory(DivisibleNumber));
        let myDiv=document.querySelector("#myDiv");
        myDiv.innerHTML="Nmbers which are divisible by" +DivisibleNumber +" : " +newArr;
       
    }
var arrOfDivisibles=[];
for (let i=1;i<=30;i++){
    let myNewArr=arr.filter(divisibleFactory(i));
    arrOfDivisibles.push(myNewArr.length);
}

console.log(arrOfDivisibles);


    // apply your function
    // const divisbleByWHATEVERNUMBER = arr ... WHATEVERNUMBER ... ;