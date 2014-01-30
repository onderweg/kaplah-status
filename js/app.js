$( document ).ready(function() {

	$.ajax({
	  dataType: "json",
	  url: 'status.json',
	}).then(function(data) {

		$('#status')
		  .addClass(data.status)
		  .attr('data-status', data.status)
		  .html('<p>' + data.text + '</p>');

	}, function(x) {

		alert('Status error occured');

	});

});