const startPosition = [220, 300];
const move = () => {
	player.style.left = startPosition[0] + 'px';
	player.style.top = startPosition[1] + 'px';
}
move()

document.addEventListener('keydown', e => {
	let x = player.style.left;
	switch (e.key) {
		case "ArrowLeft":
		if (startPosition[0] > 0) startPosition[0] -= 10 ;
		move()
		break
		case "ArrowRight":
		if(startPosition[0] < 450) startPosition[0] += 10;
		move()
		break
	}
})