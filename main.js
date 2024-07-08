const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');

const TILES = {
    GRASS: 'green',
    WATER: 'blue',
    FIELD: 'yellow',
    TREE: 'darkgreen',
    BUSH: 'forestgreen',
    HILL: 'sienna'
};

let mapWidth, mapHeight, tileSize;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    mapWidth = Math.ceil(canvas.width / tileSize);
    mapHeight = Math.ceil(canvas.height / tileSize);
    generateMap();
}

function generateMap() {
    for (let y = 0; y < mapHeight; y++) {
        for (let x = 0; x < mapWidth; x++) {
            const tileType = getRandomTile();
            ctx.fillStyle = TILES[tileType];
            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }
}

function getRandomTile() {
    const rand = Math.random();
    if (rand < 0.6) return 'GRASS';
    if (rand < 0.7) return 'WATER';
    if (rand < 0.8) return 'FIELD';
    if (rand < 0.9) return 'TREE';
    if (rand < 0.95) return 'BUSH';
    return 'HILL';
}

function init() {
    tileSize = 10; // Adjust this value to change the scale
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
}

init();
