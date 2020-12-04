var MachineValue = "";
for (let index = 0; index < 4; index++) {
    MachineValue +=  Math.round(Math.random()*6);
}
// For hackers :)
alert("To check if it works = "+ MachineValue);

alert("Welcome to my small game!");
while (Result != "++++") {
    var CustomValue = prompt("Enter Value");
    if (!Number(CustomValue) || CustomValue.length != 4)  {
        alert("Enter correct value, please!");   
    }
    else
    {
        //1xxx
        var Result = "";
        var MachineThousand = Math.floor(Number(MachineValue) / 1000);
        var UserThousand = Math.floor(Number(CustomValue) / 1000);
        //x1xx
        var MachineHundred = Math.floor(Number(MachineValue) / 100) - MachineThousand * 10;
        var UserHundred = Math.floor(Number(CustomValue) / 100) - UserThousand * 10;
        //xx1x
        var MachineTenth = Math.floor(Number(MachineValue) / 10) - (MachineThousand * 100 + MachineHundred * 10);
        var UserTenth = Math.floor(Number(CustomValue) / 10) -  (UserThousand * 100 + UserHundred * 10);
        //xxx1
        var MachineOne = Math.floor(Number(MachineValue)) - (MachineThousand * 1000 + MachineHundred * 100  + MachineTenth * 10);
        var UserOne = Math.floor(Number(CustomValue)) - (UserThousand * 1000 + UserHundred * 100  + UserTenth * 10);
        // First Value 
        if (MachineThousand == UserThousand) {
            Result += "+";
        }else if(UserThousand == MachineHundred || UserThousand == MachineTenth || UserThousand == MachineOne){
            Result += "-";
        }else{
            Result += " ";
        }
        // Second Value
        if (MachineHundred == UserHundred) {
            Result += "+";
        }else if(UserHundred == MachineThousand || UserHundred == MachineTenth || UserHundred == MachineOne){
            Result += "-";
        }else{
            Result += " ";
        }
        // Third Value
        if (MachineTenth == UserTenth) {
            Result += "+";
        }else if(UserTenth == MachineThousand || UserTenth == MachineHundred || UserTenth == MachineOne){
            Result += "-";
        }else{
            Result += " ";
        }
        // Fourth Value
        if (MachineOne == UserOne) {
            Result += "+";
        }else if(UserOne == MachineThousand || UserOne == MachineTenth || UserOne == MachineHundred){
            Result += "-";
        }else{
            Result += " ";
        }
        alert(Result);
    }
}
alert("Yohooooo you are the winner! The value was = " + MachineValue);