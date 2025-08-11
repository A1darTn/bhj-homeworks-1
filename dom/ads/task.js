const rotators = document.querySelectorAll(".rotator");

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');

    let currentIndex = Array.from(cases).findIndex(c => 
        c.classList.contains("rotator__case_active")
    );

    function initActiveCase() {
        const activeCase = cases[currentIndex];

        if (activeCase.style.color) {
            activeCase.style.color = activeCase.dataset.color;
        }

        return parseInt(activeCase.dataset.speed) || 1000;
    }

    let speed = initActiveCase;

    function rotate() {
        cases[currentIndex].classList.remove("rotator__case_active");
        currentIndex = (currentIndex + 1) % cases.length;

        const nextCase = cases[currentIndex];
        nextCase.classList.add("rotator__case_active");
        
        nextCase.style.color = nextCase.dataset.color;

        speed = parseInt(nextCase.dataset.speed) || 1000;

        setTimeout(rotate, speed);
    }

    setTimeout(rotate, speed);
})

