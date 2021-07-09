const counters = document.querySelectorAll('.counter');

// NodeList counters. Loop
counters.forEach((counter)=>{
    // Set the origin counter to 0
    counter.innerText = '0';

    // Create a function to update DOM
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 100;

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target;
        }

        console.log(target, c);
    }

    updateCounter();
})