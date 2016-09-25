var screen_width = 800;
var screen_height = 600;

var paddle_width;
var paddle_height;

var player1_paddle, player2_paddle, ball;

// instantiate game
var game = new Phaser.Game(screen_width, screen_height, Phaser.AUTO, 'pong', { preload: preload, create: create, update:update });
var cache = new Phaser.Cache(game);

function preload() {

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('player1_paddle', '/assets/bar.png');
    game.load.image('player2_paddle', '/assets/bar.png');
    game.load.image('ball', '/assets/ball.png');

}

function create() {

    // obtain the image, post-load, to obtain width & height
    paddle_width = cache.getImage("player1_paddle").width;
    paddle_height = cache.getImage("player1_paddle").height;

    //  create the paddle sprites
    player1_paddle = game.add.sprite(0, screen_height/2, 'player1_paddle');
    player2_paddle = game.add.sprite(screen_width, screen_height/2, 'player2_paddle');
    //  create ball sprite
    ball = game.add.sprite(screen_width/2, screen_height/2, 'ball');
}

function update() {

    //player 2 uses the arrow keys, this is their input handling code
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        player2_paddle.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        player2_paddle.y += 4;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        player2_paddle.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        player2_paddle.x += 4;
    }

    //player 2 uses WASD, this is their input handling code
    if (game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        player1_paddle.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.S))
    {
        player1_paddle.y += 4;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        player1_paddle.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        player1_paddle.x += 4;
    }

}