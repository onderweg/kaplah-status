// alternative to DOMContentLoaded
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        
		request = new XMLHttpRequest;
		request.open('GET', 'status.json', true);
		request.send();

		request.onload = function() {
			data = JSON.parse(request.responseText);

			var el = document.querySelector('#status');
			if (el.classList)
			  el.classList.add(data.status);
			else
			  el.className += ' ' + data.status;

			el.setAttribute('data-satus', data.status);

			el.innerHTML = '<p>' + data.text + '</p>';
		};

		request.onerror = function() {
			alert('Status error occured');
		}

    }
}