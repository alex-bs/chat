
var $main = $('#main');

function attachListenerToMessenger(){
	$('form#messenger').submit(function(){
		var message = $('#messenger input').val();
		$('#messenger input').val('');

		if (/\S/.test(message)) //check if string is not just whitespace
			socket.emit('message', message);

		return false;
	})
}


function transition(url){


	$.get(url, function(data){
		$main.fadeOut(300, function(){
			$main.html(data);
			$main.fadeIn(300);
			attachListenerToMessenger();
		})
	})

}

socket.on('enter room', function(roomId){
	transition('/room/' + roomId)
	window.history.pushState("object or string", "Title", roomId);
})