import { readFileSync } from 'fs';
const input = readFileSync('day11.txt', 'utf8')
const monkeyInput = input.split(/\n\n/), monkeys = new Map(), maxRounds = 20

class Monkey {
    constructor(startingItems, operation, divisibleBy, ifTrue, ifFalse) {
        this.startingItems = startingItems;
        this.operation = operation;
        this.divisibleBy = divisibleBy;
        this.ifTrue = ifTrue;
        this.ifFalse = ifFalse;
        this.numComparisons = 0
        return this;
    }
}

function parseMonkey(inputText) {
    const lines = inputText.split(/\n/)
    monkeys.set(
        Number(lines[0].charAt(7)),
        new Monkey(
            lines[1].slice(18).split(", ").map(Number),
            lines[2].slice(23),
            Number(lines[3].slice(21)),
            Number(lines[4].slice(29)),
            Number(lines[5].slice(30))))
}

monkeyInput.forEach(monkeyText => {
    parseMonkey(monkeyText)
})

function calcRound(monkey) {
    let parts = [], arg, worryLevel, targetMonkey
    while (monkey.startingItems.length > 0) {
        parts = monkey.operation.split(" ")
        arg = (parts[1] == "old") ?
            monkey.startingItems[0] :
            Number(parts[1])
        switch (parts[0]) {
            case "*":
                worryLevel = monkey.startingItems.shift() * arg
                break
            case "+":
                worryLevel = monkey.startingItems.shift() + arg
                break
        }
        worryLevel = Math.floor(worryLevel / 3)
        targetMonkey = (worryLevel % monkey.divisibleBy == 0) ?
            monkey.ifTrue :
            monkey.ifFalse;
        console.log(`passing ${worryLevel} to monkey ${targetMonkey}`)
        monkeys.get(targetMonkey).startingItems.push(worryLevel)
        monkey.numComparisons++
    }
}

for (let round = 0; round < maxRounds; round++) {
    [...monkeys.values()].forEach(monkey => {
        calcRound(monkey)
    });
}

console.log()
monkeys.forEach((value, key) => {
    console.log(`monkey ${key}, numComps: ${value.numComparisons}`)
})

//TODO multiply two highest vals