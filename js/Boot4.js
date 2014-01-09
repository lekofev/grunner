(function () {

 
    // game.state.add('preload', preload, false);

    var welcome = {

        boot:function(game){
            this.game = game;
        },
        preload:function(){
            l("welcome preload")
            game.load.image('loader_off', 'assets/loader_off.png');
            game.load.image('loader_on', 'assets/loader_on.png');

        },
        create:function(){
            // loader_off = game.add.sprite(game.world.width/2, game.world.height/2,'loader_off');
            // loader_on = game.add.sprite(game.world.width/2, game.world.height/2,'loader_on');
            
        }

    }







    var game = new Phaser.Game(640, 480, Phaser.CANVAS);
    game.state.add('welcome', welcome, true);
    game.state.add('preload', preload, false);
    game.state.add('options', options, false);


    var b1 = document.getElementById('preload').onclick = function () {
        game.state.start('preload', true, true);
    };

    var b2 = document.getElementById('welcome').onclick = function () {
        game.state.start('welcome', true, true);
    };

})();