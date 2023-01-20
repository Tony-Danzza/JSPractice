const video = document.querySelector('.webcam')

const canvas = document.querySelector('.video')
const ctx = canvas.getContext('2d')

const faceCanvas = document.querySelector('.face')
const faceCtx = faceCanvas.getContext('2d')

// eslint-disable-next-line no-undef
const faceDetector = new window.FaceDetector()
console.log(video, canvas, faceCanvas, faceDetector)

// console.log(ctx, faceCtx);
const options = {
	SIZE: 10,
	SCALE: 1.5,
	
}

async function populateVideo() {
	const stream = await navigator.mediaDevices.getUserMedia({
		video: { width: 1280, height: 720 }, //TODO: uncomment for correct functionality
		// audio: true,
	})
	video.srcObject = stream
	await video.play()
	console.log(stream)
	canvas.width = video.videoWidth
	canvas.height = video.videoHeight
	faceCanvas.width = video.videoWidth
	faceCanvas.height = video.videoHeight
}

async function detect() {
	const faces = await faceDetector.detect(video)
	console.log(faces)
	console.log(faces.length)
	faces.forEach(drawFace)
	faces.forEach(censor)

	requestAnimationFrame(detect) //NOTE: using this function instead of setInterval for recursion of our detect function.
}

function drawFace(face) {
	console.log(face)
	const { width, height, top, left } = face.boundingBox
	console.log({ width, height, left, top }) //NOTE: {} trick. wrap variable in curly brackets, and in the browser it will return the names with them.
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.strokeStyle = '#ffc600'
	ctx.lineWidth = 2
	ctx.strokeRect(left, top, width, height)
}

function censor({ boundingBox: face }) {
	faceCtx.imageSmoothingEnabled = false
	faceCtx.clearRect(0,0, faceCanvas.width, faceCanvas.height)
	// draw small face
	faceCtx.drawImage(
		// 5 source arguments
		video, // where does the src come frm?
		face.x, //
		face.y, //X, y cord where we start the source pull from?
		face.width,
		face.height, // next desired height and width of the pull
		// 4 draw arguments
		face.x, //where to start drawing our x, y
		face.y,
		options.SIZE,
		options.SIZE
	)
	
	const width = face.width * options.SCALE
	const height = face.height * options.SCALE
	faceCtx.drawImage(
		faceCanvas,
		face.x,
		face.y,
		options.SIZE,
		options.SIZE,
		face.x - (width - face.width) / 2,
		face.y - (height - face.height) / 2,
		width,
		height
	)
	// take small face out

	// and redraw at normal options.size
}

populateVideo().then(detect)
