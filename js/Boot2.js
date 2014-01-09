(function () {

	var m=0
    var preload = {
    	loader_off:Phaser.Sprite,
    	loader_on:Phaser.Sprite,
    	boot: function(game){
    		this.game = game;
    	},
        preload: function () {
        	l("preload")
            // game.load.image('nocooper', 'assets/pics/1984-nocooper-space.png');
	        this.game.load.image('loader_off', 'assets/loader_off.png');
	        this.game.load.image('loader_on', 'assets/loader_on.png');
	        this.game.load.image('cieloA', 'assets/cielo.jpg');
	        this.game.load.image('cieloB', 'assets/cielo.jpg');

	        this.game.load.image('edificioFondoA', 'assets/fondo.png');
	        this.game.load.image('edificioFondoB', 'assets/fondo.png');

	        this.game.load.image('edificioA', 'assets/edificio.png');
	        this.game.load.image('edificioB', 'assets/edificio.png');

	        this.game.load.image('aceraA', 'assets/acera.png');
	        this.game.load.image('aceraB', 'assets/acera.png');


	        // player.crear();
	        this.game.load.atlasJSONHash('correr', 'assets/correr.png','assets/correr.json' );
	        this.game.load.atlasJSONHash('saltar', 'assets/saltar.png','assets/saltar.json' );
	        this.game.load.atlasJSONHash('barrer', 'assets/barrer.png','assets/barrer.json' );
	        this.game.load.atlasJSONHash('slowing', 'assets/slowing.png','assets/slowing.json' );
	        this.game.load.atlasJSONHash('fast', 'assets/fast.png','assets/fast.json' );

	        this.game.load.onFileComplete.add(this.preloadBar, this);

        },
        create: function () {
        	l("create")
	        this.loader_off = this.game.add.sprite(this.game.world.width/2, this.game.world.height/2,'loader_off');
	        this.loader_on = this.game.add.sprite(this.game.world.width/2, this.game.world.height/2,'loader_on');
	        this.loader_on.cropEnabled = true;
	        this.loader_on.crop.width  = 50;
        	// l(this.loader_on)
       	},
        preloadBar: function(){
        	m++
        	l("create", m, preload)
        	this.loader_on.crop.Phaser.Rectangle.width = m*5
        }
    }

    var welcome = {
        preload: function () {
        	l("welcome preaload")
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
        },
        create: function () {
        	l("welcome create")
            var cieloA = game.add.sprite(0, 0, 'cieloA');
        }
    }

    var game = new Phaser.Game(640, 480, Phaser.CANVAS);
    preload.boot = game;

    game.state.add('preload', preload, false);
    game.state.add('welcome', welcome, false);


    var b1 = document.getElementById('preload').onclick = function () {
        game.state.start('preload', true, true);
    };

    var b2 = document.getElementById('welcome').onclick = function () {
        game.state.start('welcome', true, true);
    };

})();