
var n=0
function takeANumber(katzDeliLine,n){
n++
    katzDeliLine.push(n);

    return ("Welcome,You are number " + n);
  }

function nowServing(katzDeliLine){
if(katzDeliLine.length==0){
return("There is nobody waiting to be served!")
}
  return ("Currently serving "+katzDeliLine.shift()+".")
  }
function currentLine(line){
  if(line.length==0){
    return ("The line is currently empty.");
  }
  const newLineFormat=[];
  for (var i=0;i<line.length;i++){
    newLineFormat.push(" "+[i+1]+". "+line[i]);
  }
  return ("The line is currently:"+newLineFormat)
}
