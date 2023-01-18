
const video = document.querySelector('.webcam')

const canvas =  document.querySelector('.video')
const ctx = canvas.getContext('2d')

const faceCanvas = document.querySelector('.face')
const faceCtx = canvas.getContext('2d')




// eslint-disable-next-line no-undef
const faceDetector = new FaceDetector()
console.log(video, canvas, faceCanvas, faceDetector)

// console.log(ctx, faceCtx);

async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        // video: {width: 1280, height:720}, //NOTE: uncomment for correct functionality
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
    console.log(faces);
}

detect()
window.populateVideo = populateVideo
