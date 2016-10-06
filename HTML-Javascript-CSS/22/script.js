function processForm() {

    var listItem = document.myCheckListForm.checklistItem.value;
		
	  var listed = '<div><input type="checkbox" />' + listItem + '</div>';
    
    document.getElementById("checkList").innerHTML += listed;

}
