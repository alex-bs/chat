var socket = io();


socket.on('enter room', function(roomId){
	transition('/room/' + roomId)
})

socket.on('message', function(name, message){
	var iframe = document.getElementById('streamIframe');
	iframe.src = 'https://player.twitch.tv/?'+message+'&parent=twitchchat3-env.eba-dtg8awxh.us-west-2.elasticbeanstalk.com';
})