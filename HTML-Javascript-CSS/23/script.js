var i=0; /* start counter */

function processForm() {

    i++; /*increment by 1 */
    
	var listItem = document.myCheckListForm.checklistItem.value;
		
	var listed = '<div id="item' + i + '"><input type="checkbox" />' + listItem + '</div>';

	document.getElementById("checkList").innerHTML += listed;

}
