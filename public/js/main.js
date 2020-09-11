var socket = io();


socket.on('enter room', function(roomId){
	transition('/room/' + roomId)
})

socket.on('message', function(name, message){
	var iframe = document.getElementById('streamIframe');
	iframe.src = 'https://player.twitch.tv/?'+message+'&parent=streamernews.example.com';
})