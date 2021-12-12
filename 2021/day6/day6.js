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

part1();
part2();

function part1() {
    let fishies = [];
    numbers.forEach(number => {
        fishies.push(new Fishy(number));
    });

    for (let i = 0; i < 80; i++) {
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

function part2() {

}

