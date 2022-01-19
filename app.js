const on = document.querySelector('.on');
const off = document.querySelector('.off');
const input = document.querySelector('.input');
const run = document.querySelector('.run');

const allLights = document.querySelectorAll('.circle');
const animationSpeed = document.querySelectorAll('.animation-speed');
const delayedBeams = document.querySelectorAll('.animation-delay')

off.addEventListener('click', () => {
    ChristmasLights.ligthtsOff();
})

on.addEventListener('click', () => {
    ChristmasLights.lightsOn();
})

run.addEventListener('click', () => {
    ChristmasLights.veryfiInput();
    ChristmasLights.animationSpeed();
})

// input.addEventListener('change', () => {
//     ChristmasLights.veryfiInput();
// });

class ChristmasLights {
    static ligthtsOff() {
        allLights.forEach( (light) =>{
            light.classList.add('lightsOff');
        } );
    }

    static lightsOn() {
        allLights.forEach( (light) => {
            light.classList.remove('lightsOff');
        } );
    }

    static animationSpeed() {
        const speed = input.value * 0.2;

        animationSpeed.forEach( (light) => {
            light.style.animationDuration = `${speed}s`;
        } );

        delayedBeams.forEach( (light) => {
            light.style.animationDelay  = `${speed}s`;
        } );

    }

    static veryfiInput() {
        if (input.value < 1)
            input.value = 1;
        else if (input.value > 5)
            input.value = 5;
    }
}