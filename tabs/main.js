const tabs = document.querySelector('.tabs')
const tabBtns = tabs.querySelectorAll('[role="tab"]')
// const tabPanels = tabs.querySelectorAll('[role="tabpanel"]')
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'))

// function handleTabClick(e) {
//     // console.log(e.currentTarget.attributes['aria-selected'])
   
//     // console.log(e.currentTarget.id)
//     const { id } = e.currentTarget.id

//     e.currentTarget.setAttribute('aria-selected', true)
//     console.log(e.target);
    
// }


// tabPanels.forEach((panel) => {
//     panel.hidden = true;
//     console.log('PANEL', panel)
// })

function handleTabClick(event) {
    // hide all tab panels
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    // mark all tabs as unselected
    tabBtns.forEach(tab => {
        // tab.ariaSelected = false;
        tab.setAttribute('aria-selected', false);
    });
    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);
    // find the associated tabPanel and show it!
    const { id } = event.currentTarget;

    // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`)
    // console.log(tabPanel)
    // tabPanel.hidden = false
   console.log(tabPanels)
    const tabPanel = tabPanels.find((panel) => {
        if (panel.getAttribute('aria-labelledby') === id) {
            return true
        }
    })
    tabPanel.hidden = false
    console.log(tabPanel);
}


tabBtns.forEach((tab) => {
    tab.addEventListener('click', handleTabClick)
    tab.setAttribute('aria-selected', false)
    console.log('BTN', tab.innerText);
})
