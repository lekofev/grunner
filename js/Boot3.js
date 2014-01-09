(function () {

	var m=0

    	var game = new Phaser.Game(640, 480, Phaser.CANVAS,null, {preload:preload, create:create});

    	// var loader_off = Phaser.Sprite;
    	// var loader_on = Phaser.Sprite;
    	var loader_off;
    	var loader_on;

        function preload () {
        	l("preload")
	        game.load.image('loader_off', 'assets/loader_off.png');
	        // loader_off.crop = new Phaser.Rectangle(200,200, 100, 20);
	        game.load.image('loader_on', 'assets/loader_on.png');	        	        
	        // loader_on.crop = new Phaser.Rectangle(200, 200, 0, 20);
	        loader_off = game.add.sprite(game.world.width/2, game.world.height/2,'loader_off');
	        loader_on = game.add.sprite(game.world.width/2, game.world.height/2,'loader_on');
	        loader_on.cropEnabled = true;
	        loader_on.crop.width  = 2;


	        game.load.image('cieloA', 'assets/cielo.jpg');
	        game.load.image('cieloB', 'assets/cielo.jpg');

	        game.load.image('edificioFondoA', 'assets/fondo.png');
	        game.load.image('edificioFondoB', 'assets/fondo.png');

	        game.load.image('edificioA', 'assets/edificio.png');
	        game.load.image('edificioB', 'assets/edificio.png');

	        game.load.image('aceraA', 'assets/acera.png');
	        game.load.image('aceraB', 'assets/acera.png');
			game.load.image('test', "http://upload.wikimedia.org/wikipedia/commons/0/01/Mars_'Curiosity'_Rover,_Spacecraft_Assembly_Facility,_Pasadena,_California_(2011).jpg");

	        // player.crear();
	        game.load.atlasJSONHash('correr', 'assets/correr.png','assets/correr.json' );
	        game.load.atlasJSONHash('saltar', 'assets/saltar.png','assets/saltar.json' );
	        game.load.atlasJSONHash('barrer', 'assets/barrer.png','assets/barrer.json' );
	        game.load.atlasJSONHash('slowing', 'assets/slowing.png','assets/slowing.json' );
	        game.load.atlasJSONHash('fast', 'assets/fast.png','assets/fast.json' );

	        game.load.onFileComplete.add(preloadBar);

        }
        function create() {
        	l("create")
	        // loader_off = game.add.sprite(game.world.width/2, game.world.height/2,'loader_off');
	        // loader_on = game.add.sprite(game.world.width/2, game.world.height/2,'loader_on');
	        // loader_on.crop = new Phaser.Rectangle(0, 0,loader_on.width,loader_on.height);
	        // game.load.setPreloadSprite(loader_on, 0)
	        // loader_on.cropEnabled = true;
	        // loader_on.crop.width  = 5;
	        // game.load.setPreloadSprite(loader_on, 0)
        	// l(this.loader_on)
       	}
        function preloadBar(){
        	m++
        	l("create", m)
        	// l("create", loader_on)
        	loader_on.crop.width = m*5
        }

        // setTimeout(function(){loader_on.crop.width=80}, 2000)

    // var welcome = {
    //     preload: function () {
    //     	l("welcome preaload")
	   //      game.load.image('loader_off', 'assets/loader_off.png');
	   //      game.load.image('loader_on', 'assets/loader_on.png');
	   //      game.load.image('cieloA', 'assets/cielo.jpg');
	   //      game.load.image('cieloB', 'assets/cielo.jpg');

	   //      game.load.image('edificioFondoA', 'assets/fondo.png');
	   //      game.load.image('edificioFondoB', 'assets/fondo.png');

	   //      game.load.image('edificioA', 'assets/edificio.png');
	   //      game.load.image('edificioB', 'assets/edificio.png');

	   //      game.load.image('aceraA', 'assets/acera.png');
	   //      game.load.image('aceraB', 'assets/acera.png');


	   //      // player.crear();
	   //      game.load.atlasJSONHash('correr', 'assets/correr.png','assets/correr.json' );
	   //      game.load.atlasJSONHash('saltar', 'assets/saltar.png','assets/saltar.json' );
	   //      game.load.atlasJSONHash('barrer', 'assets/barrer.png','assets/barrer.json' );
	   //      game.load.atlasJSONHash('slowing', 'assets/slowing.png','assets/slowing.json' );
	   //      game.load.atlasJSONHash('fast', 'assets/fast.png','assets/fast.json' );
    //     },
    //     create: function () {
    //     	l("welcome create")
    //         var cieloA = game.add.sprite(0, 0, 'cieloA');
    //     }
    // }
    

    // game.state.add('preload', preload, false);
    game.state.add('welcome', welcome, false);


    var b1 = document.getElementById('preload').onclick = function () {
        game.state.start('preload', true, true);
    };

    var b2 = document.getElementById('welcome').onclick = function () {
        game.state.start('welcome', true, true);
    };

})();