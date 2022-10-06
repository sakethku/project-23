/*var myBankBalance=2;
var msg=""
while(myBankBalance <=10)
{
    msg=msg+"my bank balance is"+myBankBalance+"<br>"
    myBankBalance++
}
document.write(msg)*/
/*var myBankBalance=15;
var msg=""
do{
    
    msg=msg+"my bank balance is: "+myBankBalance+"<br>"
    myBankBalance++

}
while(myBankBalance<=10)
document.write(msg);*/

/*for(var myBankBalance=1;myBankBalance<10;myBankBalance++)

{
    document.write(myBankBalance)
}*/
/*var text=""
var i;
for(i=0;i<5;i++)
{
    if(i===3)
    {
        break
    }
    text="the number is : "
    
}
document.write(text)*/

/*for(var count=0;count<5;count++)
{
    
   document.write(count)
}
/*var count=0;
var msg=""
while(count<5)
{
    msg=msg+"the number is: "+count+"<br>"
    count++

}
document.write(msg)
var total=0;
for(var i=0;i<5;i++)
{
    let k=prompt("enter the mark: ");
    total=total+parseInt(k);

  
}
document.write(total)*/
var total=0;
var count=0;

while(count<5)
{
    var m=prompt("enter mark: ");
    total=total+parseInt(m);
    count++;
}
document.write(total)