const input = 289326;

function part1() {
    var dict = {};
    dict[0] = 1;
    var i = 0;
    do { // step out until input is on outer ring
        i++;
        dict[i] = dict[i - 1] + 4 * (2 * i - 1) + 4; // 4 corners + 4 sides
        // console.log(`i: ${i}, sum: ${dict[i]}`);
    } while (dict[i] < input)

    // ... then calc dist to center
    var sideLen = 2 * (i - 1) + 1;
    var diff = input - dict[i - 1];
    var side = Math.floor(diff / sideLen);
    var x = 0, y = 0;
    switch (side) {
        case 0: // right
            x = i;
            y = diff - sideLen * side - i + 1;
            break;

        case 1: // top
            x = i - (diff - sideLen * side - 1);
            y = i;
            break;

        case 2: // left
            x = -i;
            y = i - (diff - sideLen * side - 1);
            break;

        case 3: // bottom 
            x = -i + (diff - sideLen * side - 1);
            y = -i;
            break;
    }
    console.log(`x: ${x}, y: ${y}, dist: ${Math.abs(x) + Math.abs(y)}`);
}

part1();
