import { isValidColor } from "./colors"

function logWords(results) {
	console.log(results[results.length - 1][0].transcript)
}

export function handleResult({ results }) {
	logWords(results)
	const words = results[results.length - 1][0].transcript

    let color = words.toLowerCase()
    // color = color.replaceAll(' ', '')
    color = color.replace(/\s/g, '')
    if (!isValidColor(color)) return
    // const colorSpan = document.querySelector(`.${color}`)
    const colorSpan = document.getElementById(`${color}`)
    colorSpan.classList.add('got')

    console.log(colorSpan)

    console.log("VALID COLOR", color)
    
}
