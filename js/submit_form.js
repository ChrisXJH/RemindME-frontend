$(function () {
	var edit_event_form = $('form.ajax_1');

	edit_event_form.on('submit',function () {
		var me = $(this),
			method = me.attr('method'),
			action = me.attr('action'),
			data = {};

		me.find('[name]').each(function (index, value) {
			var me = $(this),
				name = me.attr('name'),
				val = me.val();

			data[name] = val;

		});

		$.ajax({
			url: url,
			type: method,
			data: data,
			success: function (va) {
				console.log(va);
			}
		});

		return false;
	});
});