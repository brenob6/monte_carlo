function drawInSpace(callback) {
	const canvas = document.getElementById("space")
	const ctx = canvas.getContext("2d")
	callback(ctx)
}

function drawRect() {

	drawInSpace((ctx) => {

		ctx.lineWidth = 3;
		ctx.strokeStyle = "white";
		ctx.strokeRect(0, 0, 500, 500)
	})
}

function drawCircle() {

	drawInSpace((ctx) => {

		ctx.beginPath();
		ctx.arc(250, 250, 250, 0, Math.PI * 2, true);
		
		ctx.lineWidth = 3;
		ctx.strokeStyle = "white";
		ctx.stroke();
	})
}

function drawDot(x, y) {
	drawInSpace((ctx) => {
		r = Math.random() * 255
		g = Math.random() * 255
		b = Math.random() * 255

		ctx.fillStyle = `rgba(${r},${g},${b}, 0.5)`
		ctx.beginPath()
		ctx.arc(x*500, y*500, 3, 0, Math.PI * 2, true);
		ctx.fill()
	})
}

function changePi(pi){
	document.getElementById("pi").innerHTML = pi.toFixed(12)
}

window.addEventListener("load", ()=>{

	drawCircle()
	drawRect()

	let count_square = 0;
	let count_circle = 0;

	setInterval(() => {
		let xaxis = Math.random();
		let yaxis = Math.random();

		if(Math.pow(xaxis - 0.5, 2) + Math.pow(yaxis - 0.5, 2) <= 0.25)
			count_circle++;

		count_square++;

		drawDot(xaxis, yaxis)
		pi = count_circle / ( count_square*0.25 );

		changePi(pi)
	}, 0);
});
