$(function() {
	$('#myAffix').affix({
		offset: {
			top: 100,
			bottom: function() {
				return (this.bottom =
					$('.bs-footer').outerHeight(true))
			}
		}
	});
});