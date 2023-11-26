import { readFileSync } from 'fs';
const input = readFileSync('day11.txt', 'utf8')
const monkeyInput = input.split(/\n\n/), monkeys = new Map()
let globalMod

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

function init() {
    monkeyInput.forEach(monkeyText => {
        parseMonkey(monkeyText)
    })

    globalMod = [...monkeys.values()]
    .map(m => m.divisibleBy)
    .reduce((a, b) => a * b)
}

function calcRound(monkey, divideBy) {
    let parts = [], arg, worryLevel, targetMonkey, val
    while (monkey.startingItems.length > 0) {
        parts = monkey.operation.split(" ")
        arg = (parts[1] == "old") ?
            monkey.startingItems[0] :
            Number(parts[1])
        val = monkey.startingItems.shift()
        switch (parts[0]) {
            case "+": worryLevel = val + arg; break
            case "*": worryLevel = val * arg; break
        }

        worryLevel = Math.floor(worryLevel / divideBy) % globalMod
        targetMonkey = (worryLevel % monkey.divisibleBy == 0) ?
            monkey.ifTrue :
            monkey.ifFalse;
        monkeys.get(targetMonkey).startingItems.push(worryLevel)
        monkey.numComparisons++
    }
}

function main(maxRounds, divideBy) {
    for (let round = 0; round < maxRounds; round++) {
        [...monkeys.values()].forEach(monkey => {
            calcRound(monkey, divideBy)
        });
    }

    console.log("\n----------------------------")
    console.log(`num rounds: ${maxRounds}`)
    monkeys.forEach((value, key) => {
        console.log(`monkey ${key}, numComps: ${value.numComparisons}`)
    })
    let sorted = [...monkeys.values()]
        .map(m => m.numComparisons)
        .sort((a, b) => b - a)
    console.log(`\nresult: ${sorted[0] * sorted[1]}`)
}

init()
main(20, 3) // 56595

init()
main(10000, 1) // 15693274740