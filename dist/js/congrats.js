(function(window, document){

	var video;

	function cl(txt){console.log('%c '+txt,'background: rgba(51, 255, 0, 0.3); color: white;'); }

	function init(e){
		cl('init');
		video = document.getElementById('video');

		// document.querySelector('.play').addEventListener('click', onPlayClick);
		document.querySelector('.play').addEventListener('click', onContClick);
	}

	function onPlayClick(e){
		cl('onPlayClick');
		document.querySelector('.step1').classList.add('fadeOut');
		setTimeout(loadVideo, 400);
	}

	function onContClick(e){
		cl('onContClick');
		// document.querySelector('.ani').classList.add('fadeOut');
		// setTimeout(loadVideo, 400);
		document.querySelector('.step1').classList.add('fadeOut');
		setTimeout(showEnd, 400);
	}

	function loadVideo(e){
		cl('loadVideo ');
		video.load();//Aborts existing media

		video.src = 'video/winner.mp4';
	 	video.addEventListener('canplay', onVideoReady);
		video.addEventListener('ended', onVideoEnd);
	}
	function playVideo(){
		cl('	playVideo >>');
		video.play();
	}
	function onVideoReady(){
		cl('	onVideoReady!');
		playVideo();
	}
	function onVideoEnd(){
		cl('	onVideoEnd');
		var _btn = document.querySelector('.continue');
		_btn.classList.remove('hidden');
		_btn.addEventListener('click', onContClick);

		video.pause();
	}

	function showEnd(e){
		cl('showEnd');
		document.querySelector('.finale').classList.remove('hidden');
		
	}
	window.addEventListener('load', init);
	cl('congrats');
})(this,document);