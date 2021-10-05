const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// Call this function as soon as the page loads
updateBigCup();

smallCups.forEach((cup, idx) => {
    //Add event listener on each cup
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    // Check if the current small cup contains the class full and the next small cup doesn't contain the class full, decrement the idx in order to toggle the class full on the second click on the full small cup.
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) { // Make sure the previous cups are also filled.
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }

        
    })

    // Call it at the end of the above loop
    updateBigCup();
}

function updateBigCup() {
    // The length of the small cups with a class full
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    // The length of all small cups
    const totalCups = smallCups.length;

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups) / 1000} L`
    }
}