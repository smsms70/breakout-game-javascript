const cover = document.getElementById('cover');
const player = document.getElementById('player');
const emptyArr = [];
const Ball = document.createElement('div');
	Ball.setAttribute('id', 'ball');
	cover.appendChild(Ball);

let ballX = 260;
let ballY = 250;
let x = true;
let y = true;
const createElements = () => { 
	for (var i = 0; i < 24 ; i++) {
		let element = document.createElement('div');
		element.setAttribute('id', 'block');
		cover.appendChild(element);

		element.style.left = (i % 6) * 90 + 'px';
		if (i <= 5) element.style.top = '10px';
		if (i <= 11 && i > 5) element.style.top = '50px';
		if (i <= 17 && i > 11) element.style.top = '90px';
		if (i <= 23 && i > 17) element.style.top = '130px';

		emptyArr.push([element.getBoundingClientRect().x - 56, element.getBoundingClientRect().y - 61, element])
		console.log(((i % 6)* 40 + 10), (i % 6) * 90)
	}
}
createElements()

const moveBall = () => {
	Ball.style.left = ballX + 'px';
	Ball.style.top = ballY + 'px';
}
const changePosition = () => {
	if (ballX < 10) x = true;
	if (ballY < 10) y = true;

	if (ballX > 550 - 25 - 10) x = false;
	if (ballY > 350 - 25 - 10) y = false;
// derecha a izquierda
	if ((ballX > startPosition[0] - 25 &&  ballX < startPosition[0]) && ballY > startPosition[1] - 30 && ballY < startPosition[1] + 20) {
		x = false; 
	}
// izquierda a derecha
	if ((ballX > startPosition[0] + 80 &&  ballX < startPosition[0] + 105)  && ballY > startPosition[1] - 30 && ballY < startPosition[1] + 20) {
		x = true;
	}
	if ((ballY > startPosition[1] - 30 && ballY > startPosition[1] -25) && ballX > startPosition[0] - 20 && ballX < startPosition[0] + 100) {
		y = false;
	};
	emptyArr.forEach( e => {
	// arriba a abajo
		if (ballY === e[1] + 20 && ballX > e[0] -25 && ballX < e[0] +80) {
			y = true;
			cover.removeChild(e[2])
			emptyArr.splice(emptyArr.indexOf(e), 1)
		}
	// derecha a izquierda
		if ((ballX > e[0] - 25 &&  ballX < e[0]) && ballY > e[1] - 30 && ballY < e[1] + 10) {
			x = false;
			cover.removeChild(e[2])
			emptyArr.splice(emptyArr.indexOf(e), 1)
		}
	// izquierda a derecha
		if ((ballX > e[0] + 80 &&  ballX < e[0] + 105)  && ballY > e[1] - 30 && ballY < e[1] + 10) {
			x = true;
			cover.removeChild(e[2])
			emptyArr.splice(emptyArr.indexOf(e), 1)
		}
	// abajo a arriba
		if (ballY === e[1] -25 && ballX > e[0] && ballX < e[0] +80) {
			y = false;
			cover.removeChild(e[2])
			emptyArr.splice(emptyArr.indexOf(e), 1)
		}
	})
}
const running = () => {
		changePosition()
		if (x) ballX += 10;
		if (y) ballY += 10;
		if (!x) ballX -= 10;
		if (!y) ballY -= 5;
		moveBall()
}
setInterval(running, 50)


console.log(emptyArr)