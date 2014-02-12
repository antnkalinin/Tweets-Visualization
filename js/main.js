$(document).ready(function () {

	$('#add').bind('click', function(){
		var m = $('#index').val();
		$('#checkbox-list').append('' +
						'<div class="wq">' +
						'<label class="checkbox">' +
						'<input type="checkbox" />' + m + '' +
						'</label>' +
						'<i class="icon-remove close-img"></i>' +
						'</div>'
		);
		removeTwit();
	});

	$('.clear-checkbox-list').bind('click', function() {
		$('#checkbox-list').replaceWith('<form id="checkbox-list" class="form-inline"></form>');
	});

	function removeTwit() {
		$('.close-img').bind('click', function () {
			$(this).closest("div").remove();
		});
	}

});