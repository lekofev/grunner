(function () {

 
    // game.state.add('preload', preload, false);

    var start = {

        boot:function(game){
            this.game = game;
        },
        preload:function(){
            l("start preload")
            this.game.load.image('logo', 'assets/logo.png');
            this.game.load.image('loader_off', 'assets/loader_off.png');
            this.game.load.image('loader_on', 'assets/loader_on.png');

        },
        create:function(){
            this.game.stage.backgroundColor="#cccccc"
            logo = game.add.sprite(game.world.width/2, 20,'logo');
            // loader_off = game.add.sprite(game.world.width/2, game.world.height/2,'loader_off');
            // loader_on = game.add.sprite(game.world.width/2, game.world.height/2,'loader_on');            
        }

    }

    var preload = {
        loader_on:Phaser.Sprite,
        loader_off:Phaser.Sprite,
        m:0,
        boot:function(game){
            this.game = game;
        },
        preload:function(){
            l("preload preload")
            this.loader_off = this.game.add.sprite(game.world.width/2, game.world.height/2,'loader_off');
            this.loader_on = this.game.add.sprite(game.world.width/2, game.world.height/2,'loader_on');
            this.loader_on.cropEnabled = true;
            this.loader_on.crop.width  = 10;   


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

            this.game.load.onFileComplete.add(this.preloadBar, this);
        },
        create:function(){
            // aa = game.add.sprite(0, 0,'test');
        },
        preloadBar:function(){
            this.m++
            l("running prealod", this.m)
            this.loader_on.crop.width  += 5;   

        }


    }

    var welcome={
        boot:function(game){
            this.game = game;
        },
        preload:function(){
            l("welcome preload")
            this.game.load.image('welcome', 'assets/welcome.png');
        },
        create:function(){
            nn = game.add.sprite(game.world.width/2, 20,'welcome');
            // loader_off = game.add.sprite(game.world.width/2, game.world.height/2,'loader_off');
            // loader_on = game.add.sprite(game.world.width/2, game.world.height/2,'loader_on');            
        },
        update:function(){

        }
    }
    var thegame={
        boot:function(game){
            this.game = game;
        },
        preload:function(){
            l("thegame preload")
            this.game.load.image('welcome', 'assets/welcome.png');
        },
        create:function(){
            l("thegame create")
            nn = game.add.sprite(game.world.width/2, 20,'welcome');
            // loader_off = game.add.sprite(game.world.width/2, game.world.height/2,'loader_off');
            // loader_on = game.add.sprite(game.world.width/2, game.world.height/2,'loader_on');            
        },
        update:function(){
            l("thegame update")

        }
    }

    var game = new Phaser.Game(640, 480, Phaser.CANVAS);
    start.boot = game;
    preload.boot = game;
    welcome.boot = game;
    thegame.boot = game;
    // welcome.boot = game;
    game.state.add('start', start, true);
    game.state.add('preload', preload, false);
    game.state.add('welcome', welcome, false);
    game.state.add('thegame', thegame, false);

    var b1 = document.getElementById('preload').onclick = function () {
        game.state.start('preload', true, true);
    };

    var b2 = document.getElementById('welcome').onclick = function () {
        game.state.start('welcome', true, true);
    };
    var b3 = document.getElementById('thegame').onclick = function () {
        game.state.start('thegame', true, true);
    };
})();