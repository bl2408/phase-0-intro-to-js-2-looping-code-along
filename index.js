// Code your solutions in this file

function writeCards(arrNames, eventName){

    const msgs = [];

    for(let c = 0; c < arrNames.length; c++){
        msgs.push(`Thank you, ${arrNames[c]}, for the wonderful ${eventName} gift!`);
    }

    return msgs;
}

function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
}