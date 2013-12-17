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

	// var Background= function()
	// {
	// 	var item
	// 	var crear = function(nombre, asset)
	// 	{
	// 		// console.log(game, asset)
	// 		game.load.image(nombre, asset);
			
	// 	};
	// 	var addStage = function(nombre)
	// 	{
	// 		// console.log('added', item)
	// 		item = game.add.sprite(0, 0,nombre);
	// 	}
	// 	var getItem = function()
	// 	{
	// 		return item;
	// 	};

	// 	return{			
	// 		crear:crear,
	// 		addStage:addStage,
	// 		item:item
	// 	}
	// }

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
		var personaje;
		function crear(x, y, pj)
		{
			if(pj=='correr')
			{
			    personaje=game.add.sprite(x,y,pj)
			    personaje.animations.add('run')
			    personaje.animations.play('run', 12, true);
			}
			else if(pj=='saltar')
			{
			    personaje=game.add.sprite(x,y,pj)
			    personaje.animations.add('run')
			    personaje.animations.play('run', 12, false);
			}
			else if(pj=='barrer')
			{
			    personaje=game.add.sprite(x,y,pj)
			    personaje.animations.add('run')
			    personaje.animations.play('run', 12, false);				
			}
			else if(pj=='frenar')
			{
			    personaje=game.add.sprite(x,y,pj)
			    personaje.animations.add('run')
			    personaje.animations.play('run', 12, false);				
			}

		    if(debug)
		    {
				// game.debug.renderSpriteCorners(personaje, false, true);			    	
		    }

		}

		function destruir()
		{
			personaje.destroy();
		}

		function getPersonaje()
		{
			return personaje;

		}


		return{
			crear:crear,
			destruir:destruir,
			getPersonaje:getPersonaje

		}

	}

	// var PersonajeManager = function()
	// {
	// 	function crear(x, y, sprite)
	// 	{
	

	// 	}

	// 	function update()
	// 	{

	// 	}

	// 	return{
	// 		crear:crear,
	// 		update:update

	// 	}

	// }


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

	var debug=true;

	var contadorActividad=0;

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


	//Fondos
	var cieloA, cieloB, edificioFondoA, edificioFondoB, edificioA, edificioB;
	var _backgroundManager = new BackgroundManager()
	var fondosArray=[];


	//personaje
	var _personaje = new Personaje();



	function preload() {	

	    game.load.image('cieloA', 'assets/cielo.jpg');
	    game.load.image('cieloB', 'assets/cielo.jpg');

	    game.load.image('edificioFondoA', 'assets/fondo.png');
	    game.load.image('edificioFondoB', 'assets/fondo.png');

	    game.load.image('edificioA', 'assets/edificio.png');
	    game.load.image('edificioB', 'assets/edificio.png');

	    game.load.image('aceraA', 'assets/acera.png');
	    game.load.image('aceraB', 'assets/acera.png');


	    // _personaje.crear();
	    game.load.atlasJSONHash('correr', 'assets/correr.png','assets/correr.json' );
	    game.load.atlasJSONHash('saltar', 'assets/saltar.png','assets/saltar.json' );
	    game.load.atlasJSONHash('barrer', 'assets/barrer.png','assets/barrer.json' );

	}



	function create() {

	    cieloB = game.add.sprite(game.world.width, 0,'cieloB');
	    cieloA = game.add.sprite(0, 0,'cieloA');

	    edificioFondoB = game.add.sprite(game.world.width, 0,'edificioFondoB');
	    edificioFondoA = game.add.sprite(0, 0,'edificioFondoA');

	    edificioB = game.add.sprite(game.world.width, 0,'edificioB');
	    edificioA = game.add.sprite(0, 0,'edificioA');

	    aceraB = game.add.sprite(game.world.width, 408,'aceraB');
	    aceraA = game.add.sprite(0, 408,'aceraA');

	    fondosArray.push(cieloB)
	    fondosArray.push(cieloA)
	    fondosArray.push(edificioFondoB)
	    fondosArray.push(edificioFondoA)
	    fondosArray.push(edificioB)
	    fondosArray.push(edificioA)
	    fondosArray.push(aceraB)
	    fondosArray.push(aceraA)




	    _personaje.crear(120,250,'correr')

	    // personaje=game.add.sprite(120,250,'personaje')
	    // personaje.animations.add('run')
	    // personaje.animations.play('run', 12, true);


	    // personaje.body.velocity.x=-120;

	}


	var contadorBarrido=0;
	var contadorSalto=-3;
	var n=-6,j;
	var subiendo=true;

	function update(swipe)
	{
	    _backgroundManager.update(fondosArray)


	    if(saltar)
	    {

	    	contadorActividad++
	    	// contadorSalto++


	    	// _personaje.getPersonaje().y-=1;
	    	
	    	if(_personaje.getPersonaje().y<150)
	    	{
	    		subiendo=false;
	    	}

	    	if(subiendo)
	    	{
	    		_personaje.getPersonaje().y-=6;
	    	}
	    	else
	    	{
	    		// console.log('bajando')
	    		_personaje.getPersonaje().y+=6;	
	    	}
	    	
	    	// else{
	    	// 	_personaje.getPersonaje().y+=6
	    	// }

	    	// _personaje.getPersonaje().y+=n
	    	// else if(_personaje.getPersonaje().y<180)
	    	// {
	    	// 	_personaje.getPersonaje().y-=3
	    	// }

	    	// console.log(_personaje.getPersonaje().y)

	    	if(contadorActividad==35)
	    	{
				_personaje.destruir();
				_personaje.crear(120,250,'correr')

				contadorActividad=0;
				contadorSalto=0;
				saltar=false;
				subiendo=true;
	    	}

	    }
	    else if(barrer)
	    {
	    	contadorActividad++

	    	contadorBarrido++

	    	if(contadorBarrido==6)
	    	{
		    	_personaje.getPersonaje().y=251
	    	}
	    	else if(contadorBarrido==12)
	    	{
	    		_personaje.getPersonaje().y=253
	    	}
	    	else if(contadorBarrido==18)
	    	{
	    		_personaje.getPersonaje().y=255
	    	}
	    	else if(contadorBarrido==24)
	    	{
	    		_personaje.getPersonaje().y=330
	    	}
	    	else if(contadorBarrido==48)
	    	{
	    		_personaje.getPersonaje().y=255
	    	}
	    	else if(contadorBarrido==54)
	    	{
	    		_personaje.getPersonaje().y=251
	    	}
	    	
	    	if(contadorActividad==69)
	    	{
				_personaje.destruir();
				_personaje.crear(120,250,'correr')

				contadorActividad=0;
				contadorBarrido=0;
				barrer=false;
	    	}	
	    }   

	    if(debug)
	    {
	    	// console.log('sdfsd')
	    }
	    

	}

	// function 

	function animarFondo()
	{	
		
		// console.log(fondo.position.x)

	}

	function render()
	{
		// game.debug.renderSpriteInfo(personaje, 32, 200);
		// game.debug.renderSpriteCorners(personaje, false, true);
		game.debug.renderSpriteCorners(_personaje.getPersonaje(), false, true);	

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
		_personaje.destruir();
		_personaje.crear(120,250,'saltar') 
		saltar=true;  
		// console.log('the swipeUp')
		// _personaje.destruir();
		// _personaje.crear(120,250,'saltar')

	});

	$$('canvas').swipeRight(function() {
		console.log('the swipeRight')
	});
	$$('canvas').swipeDown(function() {
		console.log('the swipeDown')
		_personaje.destruir();
		_personaje.crear(120,250,'barrer')

		// _personaje.getPersonaje().y=350 
		
		barrer=true;  

	});
	$$('canvas').swipeLeft(function() {
		console.log('the swipeLeft')
	});


});


