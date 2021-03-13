const boxes = document.querySelectorAll('.box');

//Add an event on the window
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        //Method getBoundingClientRect()
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show');            
        }
        else{
            box.classList.remove('show');
        }
    })
}