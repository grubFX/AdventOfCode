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

let filtered = passports.filter(pp => {
    return pp.hasOwnProperty('byr') && Number(pp['byr'] >= 1920 && Number(pp['byr'] <= 2002)) &&
        pp.hasOwnProperty('iyr') && Number(pp['iyr'] >= 2010 && Number(pp['iyr'] <= 2020)) &&
        pp.hasOwnProperty('eyr') && Number(pp['eyr'] >= 2020 && Number(pp['eyr'] <= 2030)) &&
        pp.hasOwnProperty('hgt') && //TODO
        pp.hasOwnProperty('hcl') && //TODO
        pp.hasOwnProperty('ecl') && //TODO
        pp.hasOwnProperty('pid') //TODO
})
console.log(filtered.length)