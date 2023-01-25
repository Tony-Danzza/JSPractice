import { hslToRgb } from "./utlils"

// const [WIDTH, HEIGHT] = [1500, 1500]
const WIDTH = 1500
const HEIGHT = 800
const FPS = 30
// console.log(height, width);
const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')

canvas.width = WIDTH
canvas.height = HEIGHT

// console.log(canvas.height)

let analyzer

let bufferLength

function handleError(err) {
	console.log(err)
}

async function getAudio() {
	const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
	const audioCtx = new AudioContext()
	analyzer = audioCtx.createAnalyser()
	const source = audioCtx.createMediaStreamSource(stream)
	source.connect(analyzer)
	// NOTE: Set the amount of data to collect
	analyzer.fftSize = 2 ** 12
	// NOTE: pull data off audio
	bufferLength = analyzer.frequencyBinCount
	const timeData = new Uint8Array(analyzer.frequencyBinCount) //NOTE: 'UintxArray' for large amount data.
	const frequencyData = new Uint8Array(analyzer.frequencyBinCount)

    drawTimeData(timeData)
    drawFrequency(frequencyData)
	// console.log(frequencyData)
}

function drawTimeData(timeData) {
	analyzer.getByteTimeDomainData(timeData) //NOTE: this is where were insert timeData data into timeData
	// console.log(timeData)

	ctx.clearRect(0, 0, WIDTH, HEIGHT) //NOTE: clear canvas before each operation
	ctx.lineWidth = 8
	ctx.strokeStyle = 'rgba(75,0,255,1)'
	ctx.beginPath()

	const sliceWidth = WIDTH / bufferLength

	let x = 0

	timeData.forEach((data, i) => {
		const v = data / 128
		const y = (v * HEIGHT) / 2
		if (i === 0) {
			ctx.moveTo(x, y)
		} else {
			ctx.lineTo(x, y)
		}
		x += sliceWidth
	})
	ctx.stroke()
	requestAnimationFrame(() => drawTimeData(timeData))
}




function drawFrequency(frequencyData) {
    analyzer.getByteFrequencyData(frequencyData)

    const barWidth = (WIDTH / bufferLength) * 5

    let x = 0

    frequencyData.forEach((amount) => {
        const percent = amount / 255
        const [h, s, l] = [(360 / (percent * 360))- 0.7, 0.85, 0.5]
        const barHeight = (HEIGHT * percent) / 2
        // console.log(h,s,l)

        // ctx.fillStyle = `rgba(0,145,225,0.6)`

        const [r,g,b] = hslToRgb(h,s,l)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.9)`
        

        ctx.fillRect(
            x,
            HEIGHT - barHeight,
            barWidth,
            barHeight,
            x += barWidth + 5
        )


    })

    // console.log(frequencyData);
    // setTimeout(() => {
    //     requestAnimationFrame(drawFrequency(frequencyData))
    // }, 500)

    requestAnimationFrame(()=> {drawFrequency(frequencyData)})
    
}
getAudio()
