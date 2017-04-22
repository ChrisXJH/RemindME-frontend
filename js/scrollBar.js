function Scrollbar(settings) {
	this.slide_bar = $(settings.slide_bar);
	this.slider = $(settings.slider);
	this.content = $(settings.content);

	var scroll = function (amount) {
		content.scrollTop(moved_distance + amount);
		update_slider();
	}

	var update_slider = function () {
		slider.css('top', ((content.scrollTop() / content_scroll_height) * slide_bar_height) + 'px');
	}

	var update_moved = function () {
		moved_distance = content.scrollTop();
	}

	var convert_to_content_distance = function (distance) {
		return (distance / slide_bar_height) * content_scroll_height;
	}



	var content = this.content, slider = this.slider, slide_bar = this.slide_bar;
	var content_height = content.height(),
		slide_bar_height = slide_bar.height(),
		content_scroll_height = content[0].scrollHeight;

	var content_ratio = content_height / content_scroll_height,
		slider_height = slider_height = slider.height(),
		slide_bar_ratio = slider_height / slide_bar_height;

	slider.height(content_ratio * slide_bar_height);



	var moved_distance = 0;
	var o_y;
	var moveable = false;

	slider.on('mousedown', function (e) {
		o_y = e.clientY;
		moveable = true;
		update_moved();
	});

	$(window).on('mousemove', function (e) {

		if (moveable) {
			distance = e.clientY - o_y;
			scroll(convert_to_content_distance(e.clientY - o_y));
		}
	}).on('mouseup', function (e) {
		moveable = false;
		moved_distance += convert_to_content_distance(e.clientY - o_y);
	});

	content.on('scroll',function () {
		update_slider();

	})
	// When to show?

	
	return this;
}

function Scrollbar2(settings) {
	this.slide_bar = $(settings.slide_bar);
	this.slider = $(settings.slider);
	this.content = $(settings.content);

	var scroll = function (amount) {
		content.scrollTop(moved_distance + amount);
		update_slider();
	}

	var update_slider = function () {
		slider.css('top', ((content.scrollTop() / content_scroll_height) * slide_bar_height) + 'px');
	}

	var update_moved = function () {
		moved_distance = content.scrollTop();
	}

	var convert_to_content_distance = function (distance) {
		return (distance / slide_bar_height) * content_scroll_height;
	}



	var content = this.content, slider = this.slider, slide_bar = this.slide_bar;
	var content_height = content.height(),
		slide_bar_height = slide_bar.height(),
		content_scroll_height = content[0].scrollHeight;

	var content_ratio = content_height / content_scroll_height,
		slider_height = slider_height = slider.height(),
		slide_bar_ratio = slider_height / slide_bar_height;

	slider.height(content_ratio * slide_bar_height);



	var moved_distance = 0;
	var o_y;
	var moveable = false;

	slider.on('mousedown', function (e) {
		o_y = e.clientY;
		moveable = true;
		update_moved();
	});

	$(window).on('mousemove', function (e) {

		if (moveable) {
			distance = e.clientY - o_y;
			scroll(convert_to_content_distance(e.clientY - o_y));
		}
	}).on('mouseup', function (e) {
		moveable = false;
		moved_distance += convert_to_content_distance(e.clientY - o_y);
	});

	content.on('scroll',function () {
		update_slider();

	})
	// When to show?

	
	return this;
}