
// var loader_off;
// var loader_on;
var prel = 0;
var game = new Phaser.Game(800, 480, Phaser.CANVAS);

var Preloader={
	loader_off:undefined,
	loader_on:undefined,
	progress:0,
	preload: function(){		
        game.load.image('loader_off', 'assets/loader_off.png');
        game.load.image('loader_on', 'assets/loader_on.png');
        game.load.image('cieloA', 'assets/cielo.jpg');
        game.load.image('cieloB', 'assets/cielo.jpg');

        game.load.image('edificioFondoA', 'assets/fondo.png');
        game.load.image('edificioFondoB', 'assets/fondo.png');

        game.load.image('edificioA', 'assets/edificio.png');
        game.load.image('edificioB', 'assets/edificio.png');

        game.load.image('aceraA', 'assets/acera.png');
        game.load.image('aceraB', 'assets/acera.png');


        // player.crear();
        game.load.atlasJSONHash('correr', 'assets/correr.png','assets/correr.json' );
        game.load.atlasJSONHash('saltar', 'assets/saltar.png','assets/saltar.json' );
        game.load.atlasJSONHash('barrer', 'assets/barrer.png','assets/barrer.json' );
        game.load.atlasJSONHash('slowing', 'assets/slowing.png','assets/slowing.json' );
        game.load.atlasJSONHash('fast', 'assets/fast.png','assets/fast.json' );


        game.load.onFileComplete.add(this.preloadBar, this);

	},
	create:function(){		
        game.loader_off = game.add.sprite(game.world.width/2, game.world.height/2,'loader_off');
        game.loader_on = game.add.sprite(game.world.width/2, game.world.height/2,'loader_on');
        game.loader_on.cropEnabled = true;
        game.loader_on.crop.width  = 0;
	},
	preloadBar: function(){
		l("preloaded")
		game.progress++
		game.loader_on.crop.width = Math.ceil( 100/100 * this.progress)
	}
	// ,
	// update: function()
	// {
	// 	log("aaaaaa")
	// }
}

// function preloadBar(progreso)
// {
// 	l("preloaded")
// 	loader_on.crop.width = 100/100 * 2
// }



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


// var _boot = new Boot();
// var _preloader = new Preloader();

    // game.state.add('gaming', gaming);
    // game.state.add('select', levelSelect);


function boot(){
	game.state.add('preloader', Preloader, true);		
}

window.onload = function() { 
	boot()
}