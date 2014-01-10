(function () {  

    // var init = {
    //     boot:function(game){
    //         this.game = game;
    //     },
    //     preload:function(){
    //         l("init preload")
    //         var game = this.game
    //         game.load.image('loader_off', 'assets/loader_off.png');
    //         game.load.image('loader_on', 'assets/loader_on.png');
    //     }

    // } 

    var preload = {
        loader_on:Phaser.Sprite,
        loader_off:Phaser.Sprite,
        m:0,
        boot:function(game){
            this.game = game;
        },
        preload:function(){
            l("preload preload")
            // this.loader_off = this.game.add.sprite(game.world.width/2, game.world.height/2,'loader_off');
            // this.loader_on = this.game.add.sprite(game.world.width/2, game.world.height/2,'loader_on');
            // this.loader_on.cropEnabled = true;
            // this.loader_on.crop.width  = 10;  

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
 
    var start = {
        hacha:Phaser.Sprite,
        ea:Phaser.Sprite,
        boot:function(game){
            this.game = game;
        },
        preload:function(){
            l("start preload")
            this.game.load.image('logo', 'assets/logos/hacha.png');
            this.game.load.image('ea', 'assets/logos/ea.png');
            this.game.load.image('loader_off', 'assets/loader_off.png');
            this.game.load.image('loader_on', 'assets/loader_on.png');

        },
        create:function(){
            var game = this.game<
            var hacha = this.hacha
            var ea = this.ea
            game.stage.backgroundColor="#ffffff"
            hacha = game.add.sprite(game.world.width/2, game.world.height/2,'logo');
            ea = game.add.sprite(game.world.width/2, game.world.height/2,'ea');
            hacha.anchor.setTo(0.5, 0.5)
            ea.anchor.setTo(0.5, 0.5)
            hacha.alpha =0;
            ea.alpha =0;

            // loader_off = game.add.sprite(game.world.width/2, game.world.height/2,'loader_off');
            // loader_on = game.add.sprite(game.world.width/2, game.world.height/2,'loader_on');
            this.logoIntro(hacha, ea)
        },
        logoIntro:function(hacha, ea){
            var game = this.game;
            var hacha=game.add.tween(hacha);
            var ea=game.add.tween(ea);

            hacha.to({ alpha:1 }, 1000, Phaser.Easing.Linear.None)
            .to({ alpha:0 }, 500, Phaser.Easing.Linear.None, false, 2000)            
            // tween._lastChild.onComplete.add(this.theEnd, this);
            .start()
            ._lastChild.onComplete.add(function(){ea.start();}, this);
            // .onCompleteCallback(function(){ea.start()})
           
            ea.to({ alpha:1 }, 1000, Phaser.Easing.Linear.In)
            .to({ alpha:0 }, 500, Phaser.Easing.Linear.In, false, 2000)
            ._lastChild.onComplete.add(this.changeGameState, this);
        },
        changeGameState:function(){
            // game.state.start('welcome', true, true);
        }
    }

    var welcome={
        runnerLogo:Phaser.Sprite,
        nueva_partida:Phaser.Button,
        ver_records:Phaser.Button,
        salir:Phaser.Button,
        boot:function(game){
            this.game = game;
        },
        preload:function(){
            l("welcome preload");
            var game = this.game;
            game.load.image('runner', 'assets/logos/runner.png');

            game.load.spritesheet('nueva_partida', 'assets/botones/nueva_partida.png', 150, 20);
            game.load.spritesheet('ver_records', 'assets/botones/ver_records.png', 150, 20);
            game.load.spritesheet('salir', 'assets/botones/salir.png', 150, 20);
        },
        create:function(){
            var game = this.game;
            var runnerLogo = this.runnerLogo;
            var nueva_partida = this.nueva_partida;
            var ver_records = this.runver_recordsner;
            var salir = this.salir;

            runnerLogo = game.add.sprite(game.world.width/2, 20,'runner')
            .anchor.setTo(0.5,0)

            
            // nueva_partida = game.add.sprite(game.world.width/2, 150,'nueva_partida')
            nueva_partida = game.add.button(game.world.width/2, 150, 'nueva_partida', this.nueva_partida_click, this, 1, 0, 1)
            .anchor.setTo(0.5,0)

            ver_records = game.add.button(game.world.width/2, 180,'ver_records', this.ver_records_click, this, 1, 0, 1)
            .anchor.setTo(0.5,0)

            salir = game.add.button(game.world.width/2, 210,'salir', this.salir_click, this, 1, 0, 1)
            .anchor.setTo(0.5,0)
        },
        update:function(){

        },
        nueva_partida_click:function(){
            l("nueva_partida_click")

        },
        ver_records_click:function(){
            l("ver_records_click")

        },
        salir_click:function(){
            l("salir_click")

        }
    }
    var cinematica ={
        salir_cinematica:Phaser.Button,
        cuadrado:Phaser.Rectangle,
        mov:-1,
        boot:function(game){
            this.game = game;
        },
        preload:function(){
            l("cinematica preload")
            var game = this.game;
            game.load.spritesheet('salir_cinematica', 'assets/botones/salir_cinematica.png', 150, 20);

        },
        create:function(){
            l("cinematica create")
            var game = this.game;
            var salir_cinematica = this.salir_cinematica;
            var cuadrado = this.cuadrado;

            game.stage.backgroundColor="#ffffff"
            cuadrado = new Phaser.Rectangle(100, 100, 100, 100);

            salir_cinematica = game.add.button(game.world.width/2, game.world.height-60, 'salir_cinematica', this.salir_cinematica_click, this, 1, 0, 1)
            .anchor.setTo(0.5,0)
        },
        update:function(){
            l("cinematica update")
            var game = this.game;
            var cuadrado = this.cuadrado;
            var mov = this.mov;
            // l(game.time.fps)
            cuadrado.x+=mov
            if(cuadrado.x>200)
            {
                mov=mov*-1
            }
            else if(cuadrado.x<50){
                mov = mov*-1
            }
        },
        render:function(){
            var game = this.game;
            var cuadrado = this.cuadrado;

            game.debug.renderRectangle(cuadrado,'#cccccc');
        },
        salir_cinematica_click:function(){
            l("salir_cinematica_click")
        }
    }
    var playing={
        boot:function(game){
            this.game = game;
        },
        preload:function(){
            l("thegame preload")
            var game = this.game;
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
    cinematica.boot = game;
    playing.boot = game;

    game.state.add('preload', preload, true);
    game.state.add('start', start, false);    
    game.state.add('welcome', welcome, false);
    game.state.add('cinematica', cinematica, false);
    game.state.add('playing', playing, false);

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