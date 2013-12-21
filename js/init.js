

window.l= console.log.bind(console)


var gaming={
    preload: function()
    {
        console.log ("preload")
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
    create: function(){
        console.log("create")
        cieloA = game.add.sprite(0, 0,'cieloA');
        cieloB = game.add.sprite(0, 0,'cieloB');
        bgCielo = new BackgroundManager(cieloA, cieloB, runnerSpeed, 0.2)
        bgCielo.setOnCanvas(true)

        edificioFondoA = game.add.sprite(0, 0,'edificioFondoA');
        edificioFondoB = game.add.sprite(0, 0,'edificioFondoB');
        bgBackBuildings = new BackgroundManager(edificioFondoA, edificioFondoB, runnerSpeed, 0.5)
        bgBackBuildings.setOnCanvas(true)

        edificioA = game.add.sprite(0, 0,'edificioA');
        edificioB = game.add.sprite(0, 0,'edificioB');
        bgFrontBuildings = new BackgroundManager(edificioA, edificioB, runnerSpeed, 1)
        bgFrontBuildings.setOnCanvas(false)

        aceraA = game.add.sprite(0, 0,'aceraA');
        aceraB = game.add.sprite(0, 0,'aceraB');
        bgSideWalk = new BackgroundManager(aceraA, aceraB, runnerSpeed, 1)
        bgSideWalk.setOnCanvas(false)
    }    
}

// gaming.prototype = {
//     preload: function()
//     {
//         console.log ("preload")
//     },
//     create: function(){
//         console.log("create")
//     }
// }


function _gaming(){
    var pause=false;
    var play=true;

    var changeActivity = false
    var running=true;
    var jumping=false;
    var dashing=false;	
    var slowing= false;
    var accelerating= false;

    var debug=true;

    var contadorActividad=0;

    // var game = new Phaser.Game(800, 480, Phaser.CANVAS, 'trunner', 
    // 		{ 
    // 			preload: preload, 
    // 			create: create,
    // 			update:update,
    // 			render:render 
    // 		}
    // 	);

    var runnerSpeed = 4

    //Fondos
    var cieloA, cieloB, edificioFondoA, edificioFondoB, edificioA, edificioB;
    var bgCielo, bgBackBuildings, bgFrontBuildings, bgSideWalk;


    //personaje
    var player = new CharacterManager();


    function preload() {
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

    }

    function create() {

        cieloA = game.add.sprite(0, 0,'cieloA');
        cieloB = game.add.sprite(0, 0,'cieloB');
        bgCielo = new BackgroundManager(cieloA, cieloB, runnerSpeed, 0.2)
        bgCielo.setOnCanvas(true)

        edificioFondoA = game.add.sprite(0, 0,'edificioFondoA');
        edificioFondoB = game.add.sprite(0, 0,'edificioFondoB');
        bgBackBuildings = new BackgroundManager(edificioFondoA, edificioFondoB, runnerSpeed, 0.5)
        bgBackBuildings.setOnCanvas(true)

        edificioA = game.add.sprite(0, 0,'edificioA');
        edificioB = game.add.sprite(0, 0,'edificioB');
        bgFrontBuildings = new BackgroundManager(edificioA, edificioB, runnerSpeed, 1)
        bgFrontBuildings.setOnCanvas(false)

        aceraA = game.add.sprite(0, 0,'aceraA');
        aceraB = game.add.sprite(0, 0,'aceraB');
        bgSideWalk = new BackgroundManager(aceraA, aceraB, runnerSpeed, 1)
        bgSideWalk.setOnCanvas(false)

        player.run()

    }// end create

    function update()
    {
        bgCielo.update()
        bgBackBuildings.update()
        bgFrontBuildings.update()
        bgSideWalk.update()
        watcherActivity()

    }// end update

    function render()
    {
        // game.debug.renderSpriteInfo(personaje, 32, 200);
        // game.debug.renderSpriteCorners(personaje, false, true);
        // game.debug.renderSpriteCorners(player.getPlayer(), false, true); 

    }

    function watcherActivity()
    {
        if(changeActivity)
        {
            if(running)
            {
                console.log("running")
                changeActivity = false;
            }
            else if(jumping)
            {
                console.log("jumping")

                player.destroy();
                player.jump()

                changeActivity = false;
                jumping = false;
            }
            else if(dashing) 
            {
                console.log("dashing")

                player.destroy();
                player.dash() 

                changeActivity = false;
                dashing = false;
            }    
            else if(slowing)
            {
                console.log("slowing")
                bgActivity(2)
                player.destroy();
                player.slow();
                changeActivity = false;
                slowing = false;
            }
            else if(accelerating)
            {
                console.log("accelerating")
                bgActivity(7)
                player.destroy();
                player.accelerate();
                changeActivity = false;
                accelerating = false;
            }
        }
        if(player.getCompleteEvent()) {
            console.log ("normalspeed")
            bgActivity(4)
            player.setCompleteEvent()
        };
    }

    function bgActivity(newSpeed)
    {
        bgCielo.setHeroSpeed(newSpeed)
        bgBackBuildings.setHeroSpeed(newSpeed)
        bgFrontBuildings.setHeroSpeed(newSpeed)
        bgSideWalk.setHeroSpeed(newSpeed)
    }

}


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
        changeActivity = true
        running = false
        jumping = true

	});
    $$('canvas').swipeDown(function() {
        console.log('the swipeDown')
        changeActivity = true
        running = false
        dashing = true 
    });
	$$('canvas').swipeRight(function() {
		console.log('the swipeRight')
        changeActivity = true
        running = false
        accelerating = true 
	});

	$$('canvas').swipeLeft(function() {
		console.log('the swipeLeft')
        changeActivity = true
        running = false
        slowing = true 
	});


});//end jquery


