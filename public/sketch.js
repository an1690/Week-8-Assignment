//Open and connect socket
let socket = io();

//Listen for confirmation of connection
socket.on('connect', function() {
    console.log("Connected");
});

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    textAlign(CENTER);
    textSize(30);
    text('Click to add an emoji!', width/2, 40)

    //Listen for messages named 'data' from the server
    socket.on('data', function(emojiObject) {
        placeEmoji(emojiObject);
    });
}

function mousePressed () {
    let object = {
        "x": mouseX,
        "y": mouseY
    }

    socket.emit('data', object);
}

function placeEmoji(object) {
    fill(0);
    text('😊', object.x, object.y)
}