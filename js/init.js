/**
*
* @fileoverview Libreria con funciones de utilidad
* @author Nombre_programador
* @date Fecha_inicio
* @version 1.0
*/

$(document).ready(function(){


// Classes y objetos

//	Bakground Manager

	var Background= function()
	{
		var item
		var crear = function(nombre, asset)
		{
			// console.log(nombre, asset)
			game.load.image('cieloA', 'assets/cielo.jpg');
			
		};
		var addStage = function()
		{

			item = game.add.sprite(0, 0,'cieloA');
			console.log('added', item)
		}
		var getItem = function()
		{
			return item;
		};

		return{			
			crear:crear,
			addStage:addStage,
			item:item
		}
	}

	var BackgroundManager=function()
	{
	  	var update= function(arr)
		{
			var i;
			var velocidadBackGround=0;
			var m=arr.length-1
			for(i = m; i>=0;i--)
			{
				switch(arr[i].key)
				{
					case 'cieloA':
						velocidadBackGround=velocidadRunner*0.2;
					break;
					case 'cieloB':
						velocidadBackGround=velocidadRunner*0.2;
					break;
					case 'edificioFondoA':
						velocidadBackGround=velocidadRunner*0.5;
					break;
					case 'edificioFondoB':
						velocidadBackGround=velocidadRunner*0.5;
					break;
					case 'edificioA':
						velocidadBackGround=velocidadRunner;
					break;
					case 'edificioB':
						velocidadBackGround=velocidadRunner;
					break;
					case 'aceraA':
						velocidadBackGround=velocidadRunner;
					break;
					case 'aceraB':
						velocidadBackGround=velocidadRunner;
					break;
				}
				arr[i].x-=velocidadBackGround;
				if(arr[i].x< -game.world.width)
				{
					arr[i].x=game.world.width;			
				}				
			}			
		}	
		return{
			update:update
		}

	}


//	personaje Manager

	var Personaje= function()
	{
		function crear(x, y, sprite)
		{
			if(correr)
			{
			    personaje=game.add.sprite(x,y,sprite)
			    personaje.animations.add('run')
			    personaje.animations.play('run', 12, true);
			}
			else if(saltar)
			{
			    personaje=game.add.sprite(x,y,sprite)
			    personaje.animations.add('run')
			    personaje.animations.play('run', 12, true);
			}
			else if(barrer)
			{
			    personaje=game.add.sprite(x,y,sprite)
			    personaje.animations.add('run')
			    personaje.animations.play('run', 12, true);				
			}
			else if(frenar)
			{
			    personaje=game.add.sprite(x,y,sprite)
			    personaje.animations.add('run')
			    personaje.animations.play('run', 12, true);				
			}

		}

		return{
			crear:crear
		}

	}

	var ManagerPersonaje = function()
	{
		function crear(x, y, sprite)
		{
	

		}

		function update()
		{

		}

		return{
			crear:crear,
			update:update

		}

	}


	var Hola = function()
	{
		var qhace;
		var hola = function()
		{
			console.log('hola')
			qhacer='que hace?'
		}

		var getqhace= function()
		{
			return qhacer;
		}

		return{
			getqhace:getqhace,
			hola:hola
		}
	}


//	obstaculos Manager




//# End clases y objetos

// Init master
	var pause=false;
	var play=true;

	var correr=true;
	var saltar=false;
	var barrer=false;	
	var frenar= false;

	var game = new Phaser.Game(800, 480, Phaser.CANVAS, 'trunner', 
			{ 
				preload: preload, 
				create: create,
				update:update,
				render:render 
			}
		);

	var velocidadRunner=3.5;

	var velocidadCielo=velocidadRunner*1;
	var velocidadEdificioFondo=velocidadRunner*0.2;
	var velocidadEdificio=velocidadRunner;


	// fondo
	var cieloA, cieloB, edificioFondoA, edificioFondoB, edificioA, edificioB;

	var _backgroundCielo = new Background(game)
	var _backgroundManager = new BackgroundManager()
	var fondosArray=[];

	// var robot;

	// var _hola = new Hola()

	// _hola.hola();
	// console.log(_hola.getqhace())



	function preload() {		

		_backgroundCielo.crear('cieloB', 'assets/cielo.jpg')
		_backgroundCielo.addStage();
		// _background.crear('edificioFondoA', 'assets/cielo.jpg')
		// _background.crear('edificioFondoB', 'assets/cielo.jpg')

		// _background.crear('edificioA', 'assets/cielo.jpg')
		// _background.crear('edificioB', 'assets/cielo.jpg')

		// _background.crear('aceraA', 'assets/cielo.jpg')
		// _background.crear('aceraB', 'assets/cielo.jpg')

	    //  You can fill the preloader with as many assets as your game requires

	    //  Here we are loading an image. The first parameter is the unique
	    //  string by which we'll identify the image later in our code.

	    //  The second parameter is the URL of the image (relative)


	    // game.load.image('cieloA', 'assets/cielo.jpg');
	    // game.load.image('cieloB', 'assets/cielo.jpg');

	    // game.load.image('edificioFondoA', 'assets/fondo.png');
	    // game.load.image('edificioFondoB', 'assets/fondo.png');

	    // game.load.image('edificioA', 'assets/edificio.png');
	    // game.load.image('edificioB', 'assets/edificio.png');

	    // game.load.image('aceraA', 'assets/acera.png');
	    // game.load.image('aceraB', 'assets/acera.png');



	    // game.load.atlasJSONHash('personaje', 'assets/personaje.png','assets/personaje.json' );

	}



	function create() {

	    // cieloB = game.add.sprite(game.world.width, 0,'cieloB');
	    // cieloA = game.add.sprite(0, 0,'cieloA');
	    // // cieloB.body.velocity.x=-velocidadRunner;

	    // edificioFondoB = game.add.sprite(game.world.width, 0,'edificioFondoB');
	    // edificioFondoA = game.add.sprite(0, 0,'edificioFondoA');

	    // edificioB = game.add.sprite(game.world.width, 0,'edificioB');
	    // edificioA = game.add.sprite(0, 0,'edificioA');

	    // aceraB = game.add.sprite(game.world.width, 408,'aceraB');
	    // aceraA = game.add.sprite(0, 408,'aceraA');

	    // fondosArray.push(cieloB)
	    // fondosArray.push(cieloA)
	    // fondosArray.push(edificioFondoB)
	    // fondosArray.push(edificioFondoA)
	    // fondosArray.push(edificioB)
	    // fondosArray.push(edificioA)
	    // fondosArray.push(aceraB)
	    // fondosArray.push(aceraA)


	    // personaje=game.add.sprite(120,250,'personaje')
	    // personaje.animations.add('run')
	    // personaje.animations.play('run', 12, true);


	    // personaje.body.velocity.x=-120;

	}
	function update()
	{
	    // _backgroundManager.update(fondosArray)

	}




	function animarFondo()
	{	
		
		// console.log(fondo.position.x)

	}

	function render()
	{
		// game.debug.renderSpriteInfo(personaje, 32, 200);
		// game.debug.renderSpriteCorners(personaje, false, true);

	}

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
		console.log('the swipeUp')

	});

	$$('canvas').swipeRight(function() {
		console.log('the swipeRight')
	});
	$$('canvas').swipeDown(function() {
		console.log('the swipeDown')
	});
	$$('canvas').swipeLeft(function() {
		console.log('the swipeLeft')
	});


});


