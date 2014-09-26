// alternative to DOMContentLoaded
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        
		request = new XMLHttpRequest;
		request.open('GET', 'status.json', true);
		request.send();

		var el = document.querySelector('#status');

		request.onload = function() {
			try {
				data = JSON.parse(request.responseText);
			} catch (e) {
				showError(e);
			}
			
			if (el.classList)
			  el.classList.add(data.status);
			else
			  el.className += ' ' + data.status;

			el.setAttribute('data-satus', data.status);

			el.innerHTML = '<p>' + data.text + '</p>';
		};

		request.onerror = function() {
			showError('Can\'t retrieve status');
		}

		function showError(err) {			
			el.innerHTML = '<p>' + err + '</p>';
		}

    }
}