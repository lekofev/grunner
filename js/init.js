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
        barra_cover:Phaser.Graphics,
        barra_loader:Phaser.Graphics,
        contador_archivos:0,
        total_archivos:13,
        boot:function(game){
            this.game = game;
        },
        preload:function(){
            l("preload preload")
            // this.loader_off = this.game.add.sprite(game.world.width/2, game.world.height/2,'loader_off');
            // this.loader_on = this.game.add.sprite(game.world.width/2, game.world.height/2,'loader_on');
            // this.loader_on.cropEnabled = true;
            // this.loader_on.crop.width  = 10;  
            var game = this.game;
            var barra_cover = this.barra_cover;
            var barra_loader = this.barra_loader;

            game.stage.backgroundColor="#ffffff"


            barra_cover = game.add.graphics(0, 0);
            barra_loader = game.add.graphics(0, 0);

            barra_cover.lineStyle(5, 0x0000FF, 1);
            barra_cover.drawRect(50, 250, 600, 30);

            barra_loader.lineStyle(10, 0x0000FF, 1);
            barra_loader.moveTo(60,265)
            barra_loader.lineTo(61, 265);

            this.barra_loader = barra_loader;

            game.load.image('cieloA', 'assets/cielo.jpg');
            game.load.image('cieloB', 'assets/cielo.jpg');

            game.load.image('edificioFondoA', 'assets/fondo.png');
            game.load.image('edificioFondoB', 'assets/fondo.png');

            game.load.image('edificioA', 'assets/edificio.png');
            game.load.image('edificioB', 'assets/edificio.png');

            game.load.image('aceraA', 'assets/acera.png');
            game.load.image('aceraB', 'assets/acera.png');

            game.load.image('caja', 'objetos/caja.png');

            // player.crear();
            game.load.atlasJSONHash('correr', 'assets/correr.png','assets/correr.json' );
            game.load.atlasJSONHash('saltar', 'assets/saltar.png','assets/saltar.json' );
            game.load.atlasJSONHash('barrer', 'assets/barrer.png','assets/barrer.json' );
            game.load.atlasJSONHash('slowing', 'assets/slowing.png','assets/slowing.json' );
            game.load.atlasJSONHash('fast', 'assets/fast.png','assets/fast.json' );

            game.load.spritesheet('contador321', 'assets/libs/contador321.png', 119, 104, 4)

            game.load.onFileComplete.add(this.preloadBar, this);

            this.game = game;
        },
        create:function(){
            // aa = game.add.sprite(0, 0,'test');
        },
        preloadBar:function(){
            var barra_loader = this.barra_loader;
            this.contador_archivos++
            l("running prealod", this.contador_archivos)
            barra_loader.lineTo(61+(this.contador_archivos*20), 265)
            if(this.contador_archivos == this.total_archivos){
                l("completo loadr")
                setTimeout(function(){ game.state.start('start', true, true); },1000)
            }
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
        },
        create:function(){
            var game = this.game;
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
            this.game = game;

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


            this.game = game;
        },
        changeGameState:function(){
            this.game.state.start('welcome', true, true);
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

            this.game = game;
        },
        update:function(){

        },
        nueva_partida_click:function(){
            l("nueva_partida_click")
            var game = this.game;
            game.state.start('cinematica', true, true);

            this.game = game;

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


            this.game = game;
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


            this.game = game;
        },
        update:function(){
            l("cinematica update")
            var game = this.game;

        },
        render:function(){
            var game = this.game;
            var cuadrado = this.cuadrado;

        },
        salir_cinematica_click:function(){
            l("salir_cinematica_click")
            game.state.start('playing', true, true);
        }
    }
    var playing={
        pause:false,
        changeActivity:false,
        running:true,
        jumping:false,
        dashing:false,
        slowing:false,
        accelerating:false,
        debug:true,
        contadorActividad:0,
        runnerSpeed:4,
        cieloA:Phaser.Sprite,
        cieloB:Phaser.Sprite,
        edificioFondoA:Phaser.Sprite, 
        edificioFondoB:Phaser.Sprite,
        edificioA:Phaser.Sprite,
        edificioB:Phaser.Sprite,
        bgCielo:{},
        bgBackBuildings:Phaser.Sprite, 
        bgFrontBuildings:Phaser.Sprite,
        bgSideWalk:Phaser.Sprite,
        player:new CharacterManager(),
        obstaculo:new ObjectManager(),
        boot:function(game){
            this.game = game;
        },
        preload:function(){
            l("playing preload")
            var game = this.game;

            game.load.image('cieloA', 'assets/cielo.jpg');
            game.load.image('cieloB', 'assets/cielo.jpg');

            game.load.image('edificioFondoA', 'assets/fondo.png');
            game.load.image('edificioFondoB', 'assets/fondo.png');

            game.load.image('edificioA', 'assets/edificio.png');
            game.load.image('edificioB', 'assets/edificio.png');

            game.load.image('aceraA', 'assets/acera.png');
            game.load.image('aceraB', 'assets/acera.png');

            game.load.image('caja', 'assets/objetos/caja.png');

            // player.crear();
            game.load.atlasJSONHash('correr', 'assets/correr.png','assets/correr.json' );
            game.load.atlasJSONHash('saltar', 'assets/saltar.png','assets/saltar.json' );
            game.load.atlasJSONHash('barrer', 'assets/barrer.png','assets/barrer.json' );
            game.load.atlasJSONHash('slowing', 'assets/slowing.png','assets/slowing.json' );
            game.load.atlasJSONHash('fast', 'assets/fast.png','assets/fast.json' );

            game.load.spritesheet('contador321', 'assets/libs/contador321.png', 119, 104, 4)

            this.game = game;
        },
        create:function(){
            l("playing create")
            var game = this.game;
            var obstaculo = this.obstaculo;

            this.cieloA = game.add.sprite(0, 0,'cieloA');
            this.cieloB = game.add.sprite(0, 0,'cieloB');
            this.bgCielo = new BackgroundManager(this.cieloA, this.cieloB, this.runnerSpeed, 0.2, game)
            this.bgCielo.setOnCanvas(true)

            this.edificioFondoA = game.add.sprite(0, 0,'edificioFondoA');
            this.edificioFondoB = game.add.sprite(0, 0,'edificioFondoB');
            this.bgBackBuildings = new BackgroundManager(this.edificioFondoA, this.edificioFondoB, this.runnerSpeed, 0.5, game)
            this.bgBackBuildings.setOnCanvas(true)

            this.edificioA = game.add.sprite(0, 0,'edificioA');
            this.edificioB = game.add.sprite(0, 0,'edificioB');
            this.bgFrontBuildings = new BackgroundManager(this.edificioA, this.edificioB, this.runnerSpeed, 1, game)
            this.bgFrontBuildings.setOnCanvas(false)

            this.aceraA = game.add.sprite(0, 0,'aceraA');
            this.aceraB = game.add.sprite(0, 0,'aceraB');
            this.bgSideWalk = new BackgroundManager(this.aceraA, this.aceraB, this.runnerSpeed, 1, game)
            this.bgSideWalk.setOnCanvas(false)

            this.player.constructor(game)
            // this.player.setPlayer(player)
            this.player.run()

            // var text = "3";
            // var style = { font: "100px Arial", fill: "#ff0044", align: "center" };            
            // var txt321 = game.add.text(game.world.centerX, game.world.centerY, text, style);            
            // txt321.anchor.setTo(0.5, 0.5);
           
            var txtContador = game.add.sprite(game.world.centerX, game.world.centerY, "contador321")
            txtContador.anchor.setTo(0.5, 0.5);

            txtContador.animations.add('cont_321',[0,1,2,3]);
            txtContador.animations.play('cont_321',1, false, true);

            // this.contadorInicio(txtContador)

            obstaculo.constructor(this.runnerSpeed, game)
            obstaculo.crearObjeto('caja')

            this.game = game;            
        },
        update:function(){
            l("playing update")
            this.bgCielo.update()
            this.bgBackBuildings.update()
            this.bgFrontBuildings.update()
            this.bgSideWalk.update()
            this.watcherActivity()

            this.obstaculo.update()
        },
        contadorInicio:function(t){
            // var game = this.game;
            // var txt = t;
            // var txt321=game.add.tween(txt);
            // var cont = 3;            

            // txt321.to({ alpha:0 }, 500, Phaser.Easing.Linear.None)
            // .start()
            // ._lastChild.onComplete.add(function(){
            //     // ea.start();
            //     // txt.setText("2")

            // }, this);            
            // // .onCompleteCallback(function(){ea.start()})


            // this.game = game;
        },
        render:function () {
        },
        watcherActivity:function (){
            if(this.changeActivity)
            {
                if(this.running)
                {
                    console.log("running")
                    this.changeActivity = false;
                }
                else if(this.jumping)
                {
                    console.log("jumping")

                    this.player.destroy();
                    this.player.jump()

                    this.changeActivity = false;
                    this.jumping = false;
                }
                else if(this.dashing) 
                {
                    console.log("dashing")

                    this.player.destroy();
                    this.player.dash() 

                    this.changeActivity = false;
                    this.dashing = false;
                }    
                else if(this.slowing)
                {
                    console.log("slowing")
                    this.bgActivity(2)
                    this.player.destroy();
                    this.player.slow();
                    this.changeActivity = false;
                    this.slowing = false;
                }
                else if(this.accelerating)
                {
                    console.log("accelerating")
                    this.bgActivity(7)
                    this.player.destroy();
                    this.player.accelerate();
                    this.changeActivity = false;
                    this.accelerating = false;
                }
            }
            if(this.player.getCompleteEvent()) {
                console.log ("normalspeed")
                this.bgActivity(4)
                this.player.setCompleteEvent()
            };
            
        },
        bgActivity:function(newSpeed)
        {
            this.bgCielo.setHeroSpeed(newSpeed)
            this.bgBackBuildings.setHeroSpeed(newSpeed)
            this.bgFrontBuildings.setHeroSpeed(newSpeed)
            this.bgSideWalk.setHeroSpeed(newSpeed)
        }
    }


    var game = new Phaser.Game(800, 480, Phaser.CANVAS);
    start.boot = game;
    preload.boot = game;
    welcome.boot = game;
    cinematica.boot = game;
    playing.boot = game;

    game.state.add('preload', preload, false);
    game.state.add('start', start, false);    
    game.state.add('welcome', welcome, false);
    game.state.add('cinematica', cinematica, false);
    game.state.add('playing', playing, true);

    var b1 = document.getElementById('preload').onclick = function () {
        game.state.start('preload', true, true);
    };

    var b2 = document.getElementById('welcome').onclick = function () {
        game.state.start('welcome', true, true);
    };
    var b3 = document.getElementById('thegame').onclick = function () {
        game.state.start('thegame', true, true);
    };





    $(document).ready(function(){   

        $$('canvas').tap(function() {
            console.log('the tap')
        });
        $$('canvas').doubleTap(function() {
            console.log('the doubleTap')
        });
        $$('canvas').hold(function() {
            console.log('the hold')
        });


        $$('canvas').swipeUp(function() {
            playing.changeActivity = true
            playing.running = false
            playing.jumping = true

        });
        $$('canvas').swipeDown(function() {
            console.log('the swipeDown')
            playing.changeActivity = true
            playing.running = false
            playing.dashing = true 
        });
        $$('canvas').swipeRight(function() {
            console.log('the swipeRight')
            playing.changeActivity = true
            playing.running = false
            playing.accelerating = true 
        });

        $$('canvas').swipeLeft(function() {
            console.log('the swipeLeft')
            playing.changeActivity = true
            playing.running = false
            playing.slowing = true 
        });


    });//end jquery




})();