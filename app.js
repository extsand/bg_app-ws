//Color choice app
const controllers = document.querySelectorAll('.controller')
const leftPanel = document.querySelector('.textColumn')
const colorCode = document.querySelector('.colorCode')
const notification = document.querySelector('.notification')



//  leftPanel.style.backgroundColor = "red";

const colorsDB = { 
	yellow: '#EFA00B',
	blue: '#228cdb',
	purpure: '#170A1C',
	red: '#F71735',
	orange: '#FF9F1C',
	green: '#4CE670'

}


// console.log(controllers)
controllers.forEach( item => {
	console.log(item.dataset.colorchoice)

	item.addEventListener('click', (e) => {
		
		const color = e.target.dataset.colorchoice
		const setColor = colorsDB[color]
		leftPanel.style.transition = "all 2s"
		leftPanel.style.backgroundColor = setColor	
		

		colorCode.textContent = setColor

	})
})



colorCode.addEventListener('click', (e) => {
	const selectedText = colorCode.textContent
	console.log(selectedText)


const navi = 	navigator.clipboard.writeText(selectedText)
		.then( (data) => {
			console.log('text copied')
			addNotification('color copied')
			
		
		})
		.catch((err) => console.log(err))	

	
})


function addNotification(text, timeout=1000) {
	notification.textContent = text
	notification.style.opacity = 1
	setTimeout(() => {
		notification.style.opacity = 0
	}, timeout)
}



