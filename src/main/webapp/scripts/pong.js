var screen_width = 800;
var screen_height = 600;

//var paddle_width;
//var paddle_height;

var paddle_speed = 8;

var player1_score = 0, player2_score = 0;

var player1_paddle, player2_paddle, ball;

var score1_text, score2_text, pause_text;
var style1, style2, style3;

// instantiate game
var game = new Phaser.Game(screen_width, screen_height, Phaser.AUTO, 'pong', { preload: preload, create: create, update:update });
var cache = new Phaser.Cache(game);

function preload() {

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('player1_paddle', '/assets/bar1.png');
    game.load.image('player2_paddle', '/assets/bar2.png');
    game.load.image('ball', '/assets/ball.png');

}

function create() {

    //  create the paddle sprites
    player1_paddle = game.add.sprite(0, screen_height/2, 'player1_paddle');
    player2_paddle = game.add.sprite(screen_width, screen_height/2, 'player2_paddle');
    //  create ball sprite
    ball = game.add.sprite(screen_width/2, screen_height/2, 'ball');

    //enable collision
    game.physics.enable([ball,player1_paddle, player2_paddle], Phaser.Physics.ARCADE);
    player1_paddle.body.collideWorldBounds = true;
    player2_paddle.body.collideWorldBounds = true;
    ball.body.collideWorldBounds = true;

    player1_paddle.body.immovable = true;
    player2_paddle.body.immovable = true;

    //this code allows collisions between the paddles and the ball
    player1_paddle.body.bounce.setTo(1, 1);
    player2_paddle.body.bounce.setTo(1, 1);

    //enable ball bouncing
    ball.body.bounce.setTo(1,1);
    ball.body.velocity.x = 300;
    ball.body.velocity.y = 300;
    ball.anchor.x=0.5;
    ball.anchor.y=0.5;

    //create score text
    style1 = { font: "32px Arial", fill: "#ff0000", align: "center" };
    style2 = { font: "32px Arial", fill: "#0000ff", align: "center" };
    style3 = { font: "64px Arial", fill: "#ff0000", align: "center" };

    score1_text = game.add.text(game.world.centerX - 100, 20, player1_score, style1);
    score1_text.anchor.set(0.5);

    score2_text = game.add.text(game.world.centerX + 100, 20, player2_score, style2);
    score2_text.anchor.set(0.5);

    pause_text = game.add.text(game.world.centerX, game.world.centerY, "CLICK TO PLAY", style3);
    pause_text.anchor.set(0.5);

    //allow for game to be paused
    game.paused = true;
    game.events.onInputDown.add(click_listener, this);
}

function update() {
    //allows collisions between sprites to be recognised
    game.physics.arcade.collide(ball, player1_paddle);
    game.physics.arcade.collide(ball, player2_paddle);
    game.physics.arcade.collide(player1_paddle, player2_paddle);

    //player 2 uses the arrow keys, this is their input handling code
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        player2_paddle.y -= paddle_speed;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        player2_paddle.y += paddle_speed;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        player2_paddle.x -= paddle_speed;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        player2_paddle.x += paddle_speed;
    }

    //player 2 uses WASD, this is their input handling code
    if (game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        player1_paddle.y -= paddle_speed;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.S))
    {
        player1_paddle.y += paddle_speed;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        player1_paddle.x -= paddle_speed;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        player1_paddle.x += paddle_speed;
    }

    //score checking
    if(ball.x <= 15)
    {
        player2_score += 1;
        reset();
    }
    if(ball.x >= screen_width-15)
    {
        player1_score += 1;
        reset();
    }

}

//function to reset position
function reset()
{
    player1_paddle.x = 0
    player1_paddle.y = screen_height/2;
    player2_paddle.x = screen_width
    player2_paddle.y = screen_height/2;
    ball.x = screen_width/2;
    ball.y = screen_height/2;

    //update scoreboard
    score1_text.setText(player1_score);
    score2_text.setText(player2_score);

    //reverse ball
    ball.body.velocity.x = -ball.body.velocity.x;

    game.paused = true;
    add_pause_text();
}

function click_listener()
{
    if(game.paused)
    {
        game.paused = false;
        pause_text.destroy();
    }
    else
    {
        game.paused = true;
        addPauseText();
    }
}

function add_pause_text()
{
    pause_text = game.add.text(game.world.centerX, game.world.centerY, "CLICK TO PLAY", style3);
    pause_text.anchor.set(0.5);
}