const video = document.querySelector('.webcam')

const canvas = document.querySelector('.video')
const ctx = canvas.getContext('2d')

const faceCanvas = document.querySelector('.face')
const faceCtx = canvas.getContext('2d')

// eslint-disable-next-line no-undef
const faceDetector = new window.FaceDetector()
console.log(video, canvas, faceCanvas, faceDetector)

const SIZE = 10

// console.log(ctx, faceCtx);

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
		SIZE,
		SIZE
	)
	// take small face out

	// and redraw at normal size
}

populateVideo().then(detect)
