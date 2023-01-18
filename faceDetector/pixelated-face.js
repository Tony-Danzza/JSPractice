const video = document.querySelector('.webcam')

const canvas = document.querySelector('.video')
const ctx = canvas.getContext('2d')
ctx.strokeStyle = '#ffc600'
ctx.lineWidth = 2

const faceCanvas = document.querySelector('.face')
const faceCtx = canvas.getContext('2d')

// eslint-disable-next-line no-undef
const faceDetector = new window.FaceDetector()
console.log(video, canvas, faceCanvas, faceDetector)

// console.log(ctx, faceCtx);

async function populateVideo() {
	const stream = await navigator.mediaDevices.getUserMedia({
		// video: {width: 1280, height:720}, //TODO: uncomment for correct functionality
		audio: true,
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
	console.log(face);
	const {width, height, top, left} = face.boundingBox
	console.log({ width, height, left, top }) //NOTE: {} trick. wrap variable in curly brackets, and in the browser it will return the names with them.
	ctx.strokeRect(left, top, width, height)
}

populateVideo().then(detect)