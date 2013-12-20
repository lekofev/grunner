var Preloader = function(){

	var startPreloader = function()
	{
		console.log("start Preloader")	
	}


	function preload() {
		// body...

	}

	function create () {
		// body...

	}



	return{
		startPreloader:startPreloader
	}
}




var Boot = function(){

	function game (argument) {
		
	}

	var init = function()
	{
		console.log("boots start")
	    // var sarahandduck = new Phaser.Game(this, null, 1024, 672);
	    // sarahandduck.switchState(SarahAndDuck.Boot);

		// var game = new Phaser.Game(800, 480, Phaser.CANVAS,{preload:preload, create:create});


	    // game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
	    // game.stage.disableVisibilityChange = true;
	    // game.input.maxPointers = 1;
	    // game.stage.disablePauseScreen = true;

	    // game.stage.scale.minWidth = 480;
	    // game.stage.scale.minHeight = 260;

	    // game.stage.scale.maxWidth = 1024;
	    // game.stage.scale.maxHeight = 672;
	    // game.stage.scale.pageAlignHorizontally = true;

	    // if (this.game.device.android && this.game.device.chrome == false)
	    // {
	    //     game.stage.scaleMode = Phaser.StageScaleMode.EXACT_FIT;
	    //     game.stage.scale.maxIterations = 1;
	    // }

	    function preload() {
	        game.load.image('logo', 'assets/logo.png');
	        game.load.image('loaderFull', 'assets/loader_on.png');
	        game.load.image('loaderEmpty', 'assets/loader_off.png');
	    }

	    function create() {

	        // this.game.stage.enableOrientationCheck(true, false, 'orientation');
	        game.switchState(_preloader.startPreloader());
	    }

		// game.switchState(Preloader.startPreloader());		
	}

	return{
		init:init
	}

}

function boot(){
	    function preload() {
	        game.load.image('logo', 'assets/logo.png');
	        game.load.image('loaderFull', 'assets/loader_on.png');
	        game.load.image('loaderEmpty', 'assets/loader_off.png');
	    }

	    function create() {

	        // this.game.stage.enableOrientationCheck(true, false, 'orientation');
	        game.switchState(_preloader.startPreloader());
	    }
}




var _boot = new Boot();
var _preloader = new Preloader();
var game = new Phaser.Game(800, 480, Phaser.CANVAS);
	


window.onload = function() { 
	boot()
	// _boot.init();
}