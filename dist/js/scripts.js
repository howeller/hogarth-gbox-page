(function(window, document){

	var email, name, video, myForm, isWinner, isPlaying, version = '1.0.7';

	function cl(txt){console.log('%c '+txt,'background: rgba(51, 255, 0, 0.3); color: white;'); }

	function init(e){
		isWinner = document.querySelector('.video-wrapper').hasAttribute("data-id");
		cl('isWinner ? '+isWinner +' iOS? '+iOS());

		email = document.getElementById('email');
		name = document.getElementById('name');
		video = document.getElementById('video');

		myForm = {
			email:{value:'E-mail'},
			name:{value:'Name'}
		}

		 document.querySelector('.play').addEventListener('click', onPlayClick);
	}

	function onPlayClick(e){
		cl('onPlayClick');
		document.querySelector('.step1').classList.add('fadeOut');
		var videoInit = iOS() ?	onVideoReady : checkVideoStatus;// Video events do not fire in iOS
		setTimeout(videoInit, 400);
	}

	function onContClick(e){
		cl('onContClick');
		document.querySelector('.ani').classList.add('fadeOut');
		initForm();
		setTimeout(showEnd, 400);
	}

	/* Video */

	function checkVideoStatus(e){
		cl('checkVideoStatus '+video.readyState);
		if(video.readyState > 3){
			onVideoReady();
		}else{
			cl('Video not ready... waiting for video canplay event');
			video.addEventListener('canplay', onVideoReady, false);
		}
	}

	function playVideo(){
		cl('	playVideo >>');
		if(isPlaying)return;
		isPlaying = true;
		video.play();
	}

	function onVideoReady(){
		cl('	onVideoReady!');
		if(isPlaying)return;
		document.querySelector('.ani').classList.remove('hidden');
		playVideo();
		video.addEventListener('ended', onVideoEnd);
	}

	function onVideoEnd(){
		cl('	onVideoEnd');
		video.pause();

		if(isWinner){
			var _btn = document.querySelector('.continue');
			_btn.classList.remove('hidden');
			_btn.addEventListener('click', onContClick);
		}
	}

	function showEnd(e){
		cl('showEnd');
		document.querySelector('.finale').classList.remove('hidden');
	}
	
	/* Form */

	function initForm(){
		cl('initForm');
		email.value = myForm.email.value;
		name.value = myForm.name.value;
		email.onfocus = name.onfocus = onFocusClick;// When the input fields is clicked.
		email.onblur = name.onblur = onBlurClick;	
	}

	function onFocusClick(e){
		var _input = e.target,
				_id = e.target.getAttribute("id");
		
		cl('* '+ e.target.getAttribute("id") + ' onFocusClick');
		if(_input.value==myForm[_id].value){_input.value='';}
	}

	function onBlurClick(e){
		var _input = e.target,
				_id = e.target.getAttribute("id");
		
		cl('* '+ e.target.getAttribute("id") + ' onBlurClick');
		if(_input.value==''){_input.value=myForm[_id].value;}
	}

	/* iOS Sniffing */

	function iOS() {
		return [
		'iPad Simulator',
		'iPhone Simulator',
		'iPod Simulator',
		'iPad',
		'iPhone',
		'iPod'
		].includes(navigator.platform)
		// iPad on iOS 13 detection
		|| (navigator.userAgent.includes("Mac") && "ontouchend" in document)
	}
/*	function onSuccessAni(){
		if(emailSuccess){return;}
		//cl("* onSuccessAni *");
		document.querySelector('.finale').classList.add('fadeOut');
	}
	function ValidateEmail(mail){
		//cl("ValidateEmail "+mail)
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
			return (true);
		}
		//alert("You have entered an invalid email address!");
		return (false);
	}*/
	window.addEventListener('load', init);
	cl('version: '+version);
})(this,document);