function boot() {
	console.log("boots start")

    var sarahandduck = new Phaser.Game(this, null, 1024, 672);

    sarahandduck.switchState(SarahAndDuck.Boot);

}




window.onload = function() {
	boot();
}