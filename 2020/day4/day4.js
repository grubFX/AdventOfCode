const fs = require('fs')
const ppStrings = fs.readFileSync('2020/day4/day4.txt', 'utf8').split(/§/)
var passports = [];
for (let p of ppStrings) {
    let passport = {}
    let kvps = p.split('\n').filter(s => s != '')
    for (let kvp of kvps) {
        let pair = kvp.split(':')
        passport[pair[0].trim()] = pair[1].trim()
    }
    passports.push(passport)
}

