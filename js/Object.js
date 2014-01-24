

var ObjectManager=function()
{
	var game;
	var objeto;
	var heroSpeed;

	function constructor(_heroSpeed, _game){
		game = _game;
		heroSpeed = _heroSpeed;
		// player = _player;
	}

	function crearObjeto(elObjeto){
	    objeto=game.add.sprite(game.world.width-200,game.world.height-100, elObjeto)
	    // objeto.anchor.setTo(0,1);
	}

  	var update= function(){
		objeto.x-=heroSpeed;
	}

	var checkCollision = function(){

	}

	return{
		constructor:constructor,
		crearObjeto:crearObjeto,
		update:update
	}
}
