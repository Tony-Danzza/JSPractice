const tabs = document.querySelector('.tabs')
const tabButtons = tabs.querySelectorAll('[role="tab"]')
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'))

function handleTabClick(e) {
    tabPanels.forEach((panel) => (panel.hidden = true))
    
	tabButtons.forEach((button) => (button.setAttribute('aria-selected', false)))

	e.currentTarget.setAttribute('aria-selected', true)

	const { id } = e.currentTarget

    const tabPanel = tabPanels.find(panel => {
        if (panel.getAttribute('aria-labelledby') === id) {
            return true
        }
    })
    console.log(tabPanel);
    tabPanel.hidden = false
	console.log(id)
	console.log(e.currentTarget)
}

tabButtons.forEach((button) => button.addEventListener('click', handleTabClick))
