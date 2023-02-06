function findingBadData(receiveArray){
    if(Array.isArray(receiveArray)){
        let count=0;
    //for counting bad data
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
// const givenArray=[ -4, -9, -5, -33, -55 ];
const givenArray="nn";
const badData=findingBadData(givenArray);
console.log(badData);

/*---------------------------------Problem 5----------------------------------*/
   /*This function have three parameters which takes three integer value. This integer value is diamond quantity. After calculating diamond quantity and jamesPower it will give us diamond*/
/*
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
const diamond=gemsToDiamond(20,200,50);
console.log(diamond);
*/