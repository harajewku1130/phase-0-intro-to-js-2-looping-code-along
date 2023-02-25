// Code your solutions in this file
function writeCards(names,event){
    const newNames = [];
    for(let i = 0; i < names.length; i++){
        newNames[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return newNames;
}

 function countDown(num){
   let i = num;
    while(i >= 0){
        console.log(i);
         i--;
    }
}
