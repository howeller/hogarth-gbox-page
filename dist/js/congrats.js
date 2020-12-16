(function(window, document){

	var email, name, video, myForm;

	function cl(txt){console.log('%c '+txt,'background: rgba(51, 255, 0, 0.3); color: white;'); }

	function init(e){
		cl('init');
		email = document.getElementById('email');
		name = document.getElementById('name');
		video = document.getElementById('video');

		myForm = {
			email:{value:'E-mail'},
			name:{value:'Name'}
		}

		 document.querySelector('.play').addEventListener('click', onPlayClick);
		//document.querySelector('.play').addEventListener('click', onContClick);
	}

	function onPlayClick(e){
		cl('onPlayClick');
		document.querySelector('.step1').classList.add('fadeOut');
		document.querySelector('.ani').classList.remove('hidden');
		setTimeout(loadVideo, 400);
	}

	function onContClick(e){
		cl('onContClick');
		document.querySelector('.ani').classList.add('fadeOut');
		// document.querySelector('.step1').classList.add('fadeOut');
		initForm();
		setTimeout(showEnd, 400);
	}

	/* Video */

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
	cl('congrats');
})(this,document);