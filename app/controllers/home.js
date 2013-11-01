// create table view event listener
$.tableview_index.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
	  controller = Alloy.createController(e.rowData.test);
		$.hometab.open(controller.getView());
	}
});
