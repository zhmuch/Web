function processForm() {
    
    var temperature = Number(document.tempForm.temp.value);
    var tempType;
    var result;

    for (var i=0; i < document.tempForm.choice.length; i++) {
   
        if (document.tempForm.choice[i].checked) {
            tempType = document.tempForm.choice[i].value;
        }
    }

    /*conditional to perform calculations based on choice */

    if (tempType === 'fahrenheit') {
        result = temperature * 9/5 + 32;
    }
    else {
    	result = (temperature -  32)  *  5/9;
    }

}
