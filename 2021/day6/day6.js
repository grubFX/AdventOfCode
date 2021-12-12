import { readFileSync } from 'fs';
const input = readFileSync('day6.txt', 'utf8')
const lines = input.split(/\r?\n/)
const numbers = lines[0].split(',').map(Number);
const startState = 8;

class Fishy {
    #state;

    constructor(input) {
        this.#state = input;
    }

    tick() {
        let newFish = null;
        if (this.#state == 0)
            newFish = new Fishy(startState);

        this.#state -= 1;
        if (this.#state < 0)
            this.#state = 6;
            
        return  newFish;
    }
}

calc(80);
calc(256); // won't run, out of memory lol

function calc(numDays) {
    let fishies = [];
    numbers.forEach(number => {
        fishies.push(new Fishy(number));
    });

    for (let i = 0; i < numDays; i++) {
        let newFishies = [];
        fishies.forEach(fish => {
            let newFish = fish.tick();
            if (newFish != null)
                newFishies.push(newFish);
        });
        fishies = fishies.concat(newFishies);
    }
    console.log(fishies.length);
}
