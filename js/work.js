var selected;

$(document).ready(function() {
	$('ul#filter div').each(function (elem) {
		$(this).bind( 'click', { item:this }, filterClick );
		$(this).bind( 'mouseover', { item:this }, filterOver );
		$(this).bind( 'mouseout', { item:this }, filterOut );
	});
});

function filterClick(event) 
{
	var item = event.data.item;

	if( item == selected )
	{
		$(selected).bind( 'mouseout', { item:selected }, filterOut );
		selected.style.background = "url('images/nav-" + selected.id + ".gif') no-repeat 0 0px";
		
		selected = null;
		
		//	filter: show all filter
		$('ul#portfolio li.hidden').fadeIn('fast').removeClass('hidden');
		
		return false;
	}

	if( selected )
	{
		$(selected).bind( 'mouseout', { item:selected }, filterOut );
		selected.style.background = "url('images/nav-" + selected.id + ".gif') no-repeat 0 0px";
	}

	selected = item;
	
	//filter
		$('ul#portfolio li').each(function() {
			
			if(!$(this).hasClass(selected.id)) {
				$(this).hide().addClass('hidden');
			} else {
				$(this).fadeIn().removeClass('hidden');
			}
			
			$(item).unbind('mouseout', filterOut);
		});
			
	
	$(item).unbind('mouseout', filterOut);
	item.style.background = "url('images/nav-" + item.id + ".gif') no-repeat 0 100%";
}

function filterOver(event)
{
	var item = event.data.item;

	item.style.background = "url('images/nav-" + item.id + ".gif') no-repeat 0 100%";
}

function filterOut(event) 
{
	var item = event.data.item;
	
	item.style.background = "url('images/nav-" + item.id + ".gif') no-repeat 0 0px";
}
