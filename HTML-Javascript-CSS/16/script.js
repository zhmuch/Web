function processForm() {
    
    var temperature = Number(document.tempForm.temp.value);
    var tempType;

    for (var i=0; i < document.tempForm.choice.length; i++) {
        if (document.tempForm.choice[i].checked) {
            tempType = document.tempForm.choice[i].value;
        }
    }
    
    alert(tempType);
}
