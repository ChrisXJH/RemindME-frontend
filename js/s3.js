
var moved_distance = 0;
		function Scrollbar (settings) {
				this.moveable = false;
				this.slide_direction = settings.direction;
				this.slide_bar = $('.' + settings.slide_bar);
				this.slider_bar_height = this.slide_bar.height();
				this.slider = $('.' + settings.slider);
				this.slider_height = this.slider.height();
				this.slide_content = $('.' + settings.content);
				this.slide_content_height = this.slide_content.height();
				this.slider_scrollheight = document.getElementsByClassName(settings.content)[0].scrollHeight;

				this.slider_ratio = this.slider_height / this.slider_bar_height;
				this.content_frame_ratio = this.slide_content_height / this.slider_scrollheight;

				// SET SLIDER SIZE
				this.slider.height(this.slider_bar_height * this.content_frame_ratio);
				

			this.slide_page = function (o_y, c_y) {

				var distance = c_y - o_y;
				var slider_scrolltop = this.slide_content.scrollTop();
				var ratio = distance / this.slide_bar.height();
				var scroll_amount = this.slider_scrollheight * ratio;
				console.log(moved_distance);

					this.slide_content.scrollTop(moved_distance + scroll_amount);

			// if (max_scrolltop > slider_scrolltop &&
			// slider_scrolltop > 0) {
			// 	this.slider.css('top', distance + 'px');
			// }
			};

			this.get_max_scrolltop = function () {
				return this.slider_scrollheight - this.slide_content.height();
			};

			this.update_slider = function () {
				var slider = this.slider;
				slider.css('top', this.slide_bar.height() * (this.slide_content.scrollTop() / this.slider_scrollheight));
			};

			return this;
		}

// INITIAL SCROLLBAR
		
		// o_scrollbar = new Scrollbar({
		// 	direction:'y', 
		// 	slide_bar:'scrollbar_1', 
		// 	slider:'scroll_1', 
		// 	content:'slide-content',
		// 	frame:'sideMenu_1'});

		// o_scrollbar[1] = new Scrollbar({
		// 	direction:'y', 
		//   	slide_bar:'scrollbar_2', 
		//   	slider:'scroll_2', 
		//   	content:'cards-list',
		//   	frame:'event-cards-wrapper'});
$(window).ready(
(function (win, doc, $) {
				var o_y;
				var o_scrollbar = new Array(
					new Scrollbar({
					direction:'y', 
					slide_bar:'scrollbar_1', 
					slider:'scroll_1', 
					content:'slide-content',
					frame:'sideMenu_1'}),
					
					new Scrollbar({
				 	direction:'y', 
				   	slide_bar:'scrollbar_2', 
				   	slider:'scroll_2', 
				   	content:'cards-list',
				   	frame:'event-cards-wrapper'})
					);
	

	// SLIDER 0
	// SLIDER 0
	
				o_scrollbar[0].slider.on('mousedown', function (e) {
					o_y = e.clientY;
					o_scrollbar[0].moveable = true;
				});
				
				$(win).on('mousemove', function (e) {
					var c_y;
					if (o_scrollbar[0].moveable) {
						c_y = e.clientY;
						o_scrollbar[0].slide_page(o_y, c_y);
					}
				}).on('mouseup', function (e) {
					var distance;
					var ratio;
					var scroll_amount;

					if (o_scrollbar[0].moveable) {
						o_scrollbar[0].moveable = false;
						distance = e.clientY - o_y;
						ratio = distance / o_scrollbar[0].slide_bar.height();
						scroll_amount = o_scrollbar[0].slider_scrollheight * ratio;
						moved_distance += scroll_amount;

					}
				});

				o_scrollbar[0].slide_content.on('scroll', function () {
					o_scrollbar[0].update_slider();
				});

				// WHEN TO SHOW o_scrollbar[0]?
				if (o_scrollbar[0].get_max_scrolltop() <= 0 ||
					o_scrollbar[0].get_max_scrolltop() == undefined) {

					o_scrollbar[0].slide_bar.css('display', 'none');
				}



				// SLIDER 1
				// SLIDER 1
	
				o_scrollbar[1].slider.on('mousedown', function (e) {
					o_y = e.clientY;
					o_scrollbar[1].moveable = true;
				});
				
				$(win).on('mousemove', function (e) {
					var c_y;
					if (o_scrollbar[1].moveable) {
						c_y = e.clientY;
						o_scrollbar[1].slide_page(o_y, c_y);
					}
				}).on('mouseup', function () {
					if (o_scrollbar[1].moveable) {
						o_scrollbar[1].moveable = false;
					}
				});

				o_scrollbar[1].slide_content.on('scroll', function () {
					o_scrollbar[1].update_slider();
				});

				// WHEN TO SHOW o_scrollbar[1]?
				// console.log(o_scrollbar[1].get_max_scrolltop());
				// if (o_scrollbar[1].get_max_scrolltop() <= 0 ||
				// 	o_scrollbar[1].get_max_scrolltop() == undefined) {

				// 	o_scrollbar[1].slide_bar.css('display', 'none');
				// }
})(window, document, jQuery));