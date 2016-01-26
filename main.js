$( document ).ready(function() {
	open_sidebar();
  select_tab();
});

function open_sidebar() {
	$('td').on('click', function(){
		$('.sidebar').show();
		$('.container').css('width','65%');
	})
}

function close_sidebar() {
	// hide .sidebar
	// expand width of .container
}

function select_tab() {
	$('.nav-option').on('click', function(){
		// Toggles the selected state of the nav button
		var selection = $(this);
		$('.nav-option').removeClass('nav-selected');
		$(this).addClass('nav-selected');

		// Hide all, only show the content with a class matching the ID of nav element
		$('.content-option').hide();
		var show_class = $(this).attr('id');
		$('.content-option').filter('.' + show_class).show();
	})
}