
const video = document.querySelector('.webcam')

const canvas =  document.querySelector('.video')
const ctx = canvas.getContext('2d')

const faceCanvas = document.querySelector('.face')
const faceCtx = canvas.getContext('2d')




// eslint-disable-next-line no-undef
const faceDetector = new FaceDetector()
console.log(video, canvas, faceCanvas, faceDetector)

// console.log(ctx, faceCtx);

function populateVideo() {
    const stream = navigator.mediaDevices.getUserMedia({
        video: {width: 1280, height:720}
    })
    console.log(stream)
}


