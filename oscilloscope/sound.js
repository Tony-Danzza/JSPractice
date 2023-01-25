const [WIDTH, HEIGHT] = [1500, 1500]

// console.log(height, width);
const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')

canvas.width, (canvas.height = [WIDTH, HEIGHT])

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
	analyzer.fftSize = 2 ** 10
	// NOTE: pull data off audio
	bufferLength = analyzer.frequencyBinCount
	const timeData = new Uint8Array(analyzer.frequencyBinCount) //NOTE: 'UintxArray' for large amount data.
	const frequencyData = new Uint8Array(analyzer.frequencyBinCount)

	drawTimeData(timeData)
	console.log(frequencyData)
}

function drawTimeData(timeData) {
	analyzer.getByteTimeDomainData(timeData) //NOTE: this is where were insert timeData data into timeData
	// console.log(timeData)

	ctx.lineWidth = 10
	ctx.strokeStyle = '#ffe500'
	ctx.beginPath()

	const sliceWidth = WIDTH / bufferLength

	let x = 0

	timeData.forEach((data, i) => {
		const v = data / 128
	})
	requestAnimationFrame(() => drawTimeData(timeData))
}

getAudio().catch(handleError)
