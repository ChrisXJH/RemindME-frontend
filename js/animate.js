(function (argument) {
	var collasp_btn = $('.collapse-btn');
	var side_bar = $('#sidebar');
	var main_page = $('#mainpage');
	var add_card = $('.add-btn');
	var edit_btn = $('.edit-btn');
	var cancle_btn = $('.cancle-btn');

	// SIDEBAR COLLAPSE
	collasp_btn.on('click',function () {
		collasp_btn.children(0).toggleClass('fa-angle-double-right');
		side_bar.toggleClass('sidebar_collapse');
		main_page.toggleClass('mainpage-collapse');
	});

	// ADD EVENT
	add_card.on('click', function () {
		$(this).parent().parent().addClass('show-edit-event');
	});

	cancle_btn.on('click',function () {
		$(this).parent().parent().parent().parent().removeClass('show-edit-event');
	});

	// EDIT EVENT
	edit_btn.on('click', function () {
		$(this).parent().parent().parent().addClass('show-edit-event');
	});
})(window, document, jQuery);