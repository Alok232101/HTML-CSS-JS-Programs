var i = 0;
function countNumbers(){
if(i < 100000){
i = i + 1;
postMessage(i);
}


setTimeout("countNumbers()", 2000);
}
countNumbers();