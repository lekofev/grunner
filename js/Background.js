

var BackgroundManager=function(_objA, _objB, _heroSpeed, _bgSpeed, _game)
{
	var bgA = _objA
	var bgB = _objB
	var bgSpeed = _bgSpeed
	var heroSpeed = _heroSpeed
	var game = _game;

	var setOnCanvas = function(fitScreen)
	{
	    if(fitScreen)
	    {
	        bgA.x = 0;
	        bgA.y = 0
	        bgB.x = bgA.width;
	        bgB.y = 0;
	    }
	    else
	    {
	        bgA.x = 0;
	        bgA.y = game.world.height-bgA.height;
	        bgB.x = bgA.width;
	        bgB.y = bgA.y;
	    }
	}

  	var update= function()
	{
		bgA.x -= Math.ceil( heroSpeed * bgSpeed)
		bgB.x -= Math.ceil( heroSpeed * bgSpeed)
		if (bgA.x < -game.world.width)
		{
			bgA.x = 0
			bgB.x = game.world.width
		}

	}
	// var setBgSpeed = function(a)
	// {
	// 	bgSpeed = a
	// }
	// var getBgSpeed = function()
	// {
	// 	return bgSpeed		
	// }
	var setHeroSpeed = function(newHeroSpeed)
	{
		heroSpeed = newHeroSpeed
	}
	return{
		setOnCanvas:setOnCanvas,
		update:update,
		// setBgSpeed:setBgSpeed,
		// getBgSpeed:getBgSpeed,
		setHeroSpeed:setHeroSpeed
	}
}
