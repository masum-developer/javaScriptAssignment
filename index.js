/*..................Problem 1.......*/
/* This function receive positive number input parameter. 
After that some math operation it return value */
function mindGame(number){
    if(typeof number!=='number'){
        return "Please write a number";
     }
    else if(number<0){
        return "Please write a positive number";
    }
    else{
        let total=0;
        total=number*3;
        total=total+10;
        total=total/2;
        total=total-5;
        return total;
       //return (((number*3)+10)/2)-5;
    }
}
/*
const a=mindGame(6);
console.log(a);
*/

/*..............Problem 2.........*/
/*this function takes string parameter and determine how many characters this string belongs. If the characters are even no then it return even otherwise it return odd */

function evenOdd(inputString){
    
    if(typeof inputString==='string'){
        const totalCharacter=inputString.length;
        //Check no is even or odd
        if(totalCharacter%2===0){
            return 'Even';
        }
        return 'Odd';
    }
    return "Please enter string value";
}

//const a = evenOdd('Phero');
//const a = evenOdd('chatgpt');
 //const a = evenOdd(7);
 //console.log(a);

/*.........................................Problem 3.........................*/

/*This function takes the difference(it can be negative also) between input number and 7.  if difference is less than 7 then return difference number otherwise return double of input number */



function isLGSeven(number){
    // Check this is number or not
    if(typeof number!=='number'){
        return "Please write a number";
     }
    const differenceNum=number-7;
    if(differenceNum<7){
        return differenceNum;
    }
    return number*2;
}
/*
const b=isLGSeven(15);
console.log(b);
*/

function findingBadData(receiveArray){
    if(Array.isArray(receiveArray)){
        let count=0;
    //counting bad data
        for(let i=0;i<receiveArray.length;i++){
            const element=receiveArray[i];
            if(element<0){
                //finding bad data
                count=count+1;
            }
        }
        return count;
    }
    else{
        return 'Please Enter a number Array';
    }
}
/*
const givenArray=[ -4, -9, -5, -33, -55 ];
//const givenArray="nn";
const badData=findingBadData(givenArray);
console.log(badData);
*/

/*---------------------------------Problem 5----------------------------------*/
   /*This function have three parameters which takes three integer value. This integer value is diamond quantity. After calculating diamond quantity and jamesPower it will give us diamond*/

function gemsToDiamond(firstFrndJamesQnty,secondFrndJamesQnty,thirdFrndJamesQnty){
    if(typeof firstFrndJamesQnty=='undefined' || typeof secondFrndJamesQnty=='undefined' || typeof thirdFrndJamesQnty=='undefined' ){
        return "Please input three parameter";
     }
    else if(typeof firstFrndJamesQnty!=='number' || typeof secondFrndJamesQnty!=='number' || typeof thirdFrndJamesQnty!=='number' ){
        return "Please write a number";
     }
    else
    {
        const firstFrndJamesPower=21;
        const secondFrndJamesPower=32;
        const thirdFrndJamesPower=43;
        let totalDiamond=(firstFrndJamesPower*firstFrndJamesQnty)+(secondFrndJamesPower*secondFrndJamesQnty)+(thirdFrndJamesPower*thirdFrndJamesQnty);
        if(totalDiamond>1000*2){
            const restOfDiamond=totalDiamond-2000;
            return restOfDiamond;
        }

        return totalDiamond;
    }
    
}
/*
const diamond=gemsToDiamond(20,200,50);
console.log(diamond);
*/