function processForm() {

	var listItem = document.myCheckListForm.checklistItem.value;
		
	var listed = '<div>' + listItem + '</div>';
	
	document.getElementById("checkList").innerHTML += listed;

}
