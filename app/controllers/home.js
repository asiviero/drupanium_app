// create table view event listener
$.tableview_index.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title,
			backgroundColor:'#fff',
		});
		Ti.API.info(Ti.UI.currentTab);
		Ti.API.info($.hometab);
		$.hometab.open(win,{animated:true});
	}
});
