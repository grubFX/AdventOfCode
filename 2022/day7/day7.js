import fs from 'fs';
import path from 'path';
const input = fs.readFileSync('day7.txt', 'utf8');
const lines = input.split(/\r?\n/);
let currentPath = "./temp", parts = [], temp;

function createStructure() {
    lines.forEach(line => {
        console.log(`--- working on line \"${line}\", currentDir: ${currentPath}`)
        parts = line.split(" ")
        if (parts[0] == "$") {
            parseCommand(parts[1], parts[2]);
        } else {
            parseFilesAndFolders(parts);
        }
    })
}

function parseCommand(command, param) {
    if (command != "cd") return

    if (param == "/" || (param == ".." && currentPath == "./temp")) {
        // prevent going "above root"
        currentPath = "./temp"
    } else {
        currentPath = path.join(currentPath, param)
    }
}

function parseFilesAndFolders(parts) {
    temp = path.join(currentPath, parts[1]);
    if (parts[0] == "dir") { // new dir
        if (!fs.existsSync(temp)) {
            fs.mkdirSync(temp, { recursive: true });
        }
    } else { // new file
        fs.writeFileSync(temp, new Buffer.alloc(Number(parts[0])))
    }
}

function listFoldersSmallerThan(size) {
    //TODO
    return [0,0,0]
}

createStructure()
console.log(listFoldersSmallerThan(10000).reduce((a, b) => a + b, 0))