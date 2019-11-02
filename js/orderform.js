function validate() {
    var result = true;

    var namefield = document.getElementById("yourname");
    var nameerr = document.getElementById("nameerr");
    var namefieldRE = /^[\w ]+$/;

    var emailfield = document.getElementById("youremail");
    var emailerr = document.getElementById("emailerr");

    var emailfieldRE = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/ ;

    if(!namefield.value.match(namefieldRE)){
        nameerr.innerHTML = "Please fill in your name";
        nameerr.style.color = "#ff0000";
        result = false;
    } else{
        nameerr.innerHTML = "";
        result = true;
    }

    if (!emailfield.value.match(emailfieldRE)){
        emailerr.innerHTML = "Please fill in your email";
        emailerr.style.color = "#ff0000";
        result = false;
    } else{
        emailerr.innerHTML = "";
        result = true;
    }

    return result;
}

function doTotals() {
    var radio = ['Radios_'];
    var priceStr = 'price';
    var quantityStr = 'quantity';
    var total = 0;
    for (var i = 0; i < radio.length; i++) {
        var price = document.getElementById(radio[i] + priceStr).value;
        var quantity = document.getElementById(radio[i] + quantityStr).value;    
        total += price * quantity;
    }
    document.getElementById("finaltotal").innerHTML = total;
}

function setup() {
    
    var theForm = document.getElementById("radiosorderform");

    var amounts = document.getElementsByTagName("select");
    for(var i = 0; i < amounts.length; i++){
        amounts[i].onchange = doTotals;
    }

    theForm.onsubmit = validate;
}

window.onload = setup;

