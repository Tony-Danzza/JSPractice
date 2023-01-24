import { colorsByLength, isDark } from './modules/colors'
import { handleResult } from './modules/handlers'

const colorsEl = document.querySelector('.colors')

// function displayMyColors(colors) {
//     return colors
//         .map(
//             (color) =>
//                 `<span class='color ${color}' style='background:${color};' >${color}</span>`
//         )
// }

function displayColors(colors) {
	return colors
		.map(
			(color) =>
				`<span class="color ${isDark(color) ? 'dark' : ''}" style="background: ${color};">${color}</span>`
		)
		.join('')
}

// console.log(displayColors(colorsByLength))

window.SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition

function start() {
	if (!('SpeechRecognition' in window)) {
		console.log(
			'Sorry your current browser does not support Speech Recognition'
		)
		return
	}
	console.log('starting...')

	const recognition = new SpeechRecognition()
	recognition.continuous = true
	recognition.interimResults = true
	recognition.onresult = handleResult
	recognition.start()

	console.log(recognition)
}

// colorsByLength.map((color) => console.log(color))

start()

colorsEl.innerHTML = displayColors(colorsByLength)
