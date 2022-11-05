addEventListener ('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section')
    const menuItems = document.querySelectorAll('.btn_menu')

    const functionObserver = entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const itemActual = Array.from(menuItems).find(item => item.dataset.url === entry.target.id)
                itemActual.classList.add('active')
                for (const item of menuItems) {
                    if (item != itemActual) {
                        item.classList.remove('active')
                    }
                }
            }
        })
    }

    const observer = new IntersectionObserver(functionObserver, {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    })

    sections.forEach(section => observer.observe(section))
})