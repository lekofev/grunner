
var CharacterManager= function()
{
	var player, activity;
	var x=120, y=430;
	var completeEvent = false;
	var game;

	// function createCharacter(x, y, activity)
	// {

	// }

	function constructor(_game){
		game = _game;
		// player = _player;
	}

	function run(){
	    player=game.add.sprite(x,y,"correr")
	    player.anchor.y = 1;
	    player.animations.add('run')
	    player.animations.play('run', 12, true);
	}
	function jump(){
		var up, down;
	    player=game.add.sprite(x,y,"saltar")
	    player.anchor.y = 1;
	    player.animations.add('run')
	    player.animations.play('run', 12, false, true);

		up=game.add.tween(player);
		up.to({y:300 }, 300, Phaser.Easing.Linear.Out, true)

		down=game.add.tween(player);
		down.to({y:y }, 300, Phaser.Easing.Linear.Out, false)

		up.chain(down)
		down.onComplete.add(function(){
			run();
			console.log("complete jump")
			completeEvent = true;
		}, this);
	}
	function dash(){
		var up, down;
	    player=game.add.sprite(x,y,"barrer")
	    player.anchor.y = 1;
	    player.animations.add('run')
	    player.animations.play('run', 12, false, true);
	    player.events.onAnimationComplete.add(function(){
			console.log("complete dash")
			run();
			completeEvent = true;
		}, this);
	}
	function slow(){
	    player=game.add.sprite(x,y,"slowing")
	    player.anchor.y = 1;
	    player.animations.add('run')
	    player.animations.play('run', 12, false,true);
	    player.events.onAnimationComplete.add(function(){
			console.log("complete slowing")
			run();
			completeEvent = true;
		}, this);
	}
	function accelerate() {
	    player=game.add.sprite(x,y,"fast")
	    player.anchor.y = 1;
	    player.animations.add('run')
	    player.animations.play('run', 12, false, true);
	    player.events.onAnimationComplete.add(function(){
			console.log("complete fast")
			run();
			completeEvent = true;
		}, this);
	}
	function setCompleteEvent(){
		completeEvent = false
	}
	function getCompleteEvent(){
		return completeEvent;
	}

	function destroy()
	{
		player.destroy();
	}

	function getPlayer()
	{
		return player;
	}
	function setPlayer(_player)
	{
		player = _player;
	}
	return{
		constructor:constructor,
		destroy:destroy,
		run:run,
		jump:jump,
		dash:dash,
		slow:slow,
		accelerate:accelerate,
		setCompleteEvent:setCompleteEvent,
		getCompleteEvent:getCompleteEvent,
		setPlayer:setPlayer,
		getPlayer:getPlayer
	}

}