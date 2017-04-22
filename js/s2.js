(function (win, doc, $) {
		var scrollbar = {
			init : function (settings) {
				this.slide_direction = settings.direction;
				this.slide_bar = $('.' + settings.slide_bar);
				this.slider_bar_height = this.slide_bar.height();
				this.slider = $('.' + settings.slider);
				this.slider_height = this.slider.height();
				this.slide_content = $('.' + settings.content);
				this.slide_content_height = this.slide_content.height();
				this.slider_scrollheight = doc.getElementsByClassName(settings.content)[0].scrollHeight;

				this.slider_ratio = this.slider_height / this.slider_bar_height;
				this.content_frame_ratio = this.slide_content_height / this.slider_scrollheight;

				// SET SLIDER SIZE
				this.slider.height(this.slider_bar_height * this.content_frame_ratio);
			},

			slide_page : function (o_y, c_y) {
				var distance = c_y - o_y;
				var slider_scrolltop = this.slide_content.scrollTop();
				var max_scrolltop = this.get_max_scrolltop();
				var ratio = distance / this.slide_bar.height();
				var scroll_top = this.slider_scrollheight * ratio;
				this.slide_content.scrollTop(scroll_top);

			// if (max_scrolltop > slider_scrolltop &&
			// slider_scrolltop > 0) {
			// 	this.slider.css('top', distance + 'px');
			// }
			},

			get_max_scrolltop : function () {
				return this.slider_scrollheight - this.slide_content.height();
			},

			update_slider : function () {
				var slider = this.slider;
				slider.css('top', this.slide_bar.height() * (this.slide_content.scrollTop() / this.slider_scrollheight));
			}
		};

// INITIAL SCROLLBAR
		var o_y, moveable = false;
		var scrollbar1 = new scrollbar;
		scrollbar.init({
			direction:'y', 
			slide_bar:'scrollbar_1', 
			slider:'scroll_1', 
			content:'slide-content',
			frame:'sideMenu_1'});

		 scrollbar.init({
		 	direction:'y', 
		 	slide_bar:'scrollbar_2', 
		 	slider:'scroll_2', 
		 	content:'cards-list',
		 	frame:'event-cards-wrapper'});

		
// SCROLLING EVENTS
		scrollbar.slider.on('mousedown', function (e) {
			o_y = e.clientY;
			moveable = true;
		});

		$(win).on('mousemove', function (e) {
			var c_y;
			if (moveable) {
				c_y = e.clientY;
				scrollbar.slide_page(o_y, c_y);
			}
		}).on('mouseup', function () {
			if (moveable) {
				moveable = false;
			}
		});
		
		scrollbar.slide_content.on('scroll', function () {
			scrollbar.update_slider();
		})

// WHEN TO SHOW SCROLLBAR?
		if (scrollbar.get_max_scrolltop() <= 0 || scrollbar.get_max_scrolltop() == undefined) {
			scrollbar.slide_bar.css('display', 'none');
		}

	})(window, document, jQuery);