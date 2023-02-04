function convert(num) {
    const table = {
        1000 : 'M',
        900 : 'CM',
        500 : 'D',
        400 : 'CD',
        100 : 'C',
        90 : 'XC',
        50 : 'L',
        40 : 'XL',
        10 : 'X',
        9 : 'IX',
        5 : 'V',
        4 : 'IV',
        1 : 'I',
    }

    const key = Object.keys(table);
    let result = '';
    for(let i = key.length -1 ; i>=0; i -= 1) {
        let  q = Math.floor(num / key[i]);
        result = result + table[key[i]].repeat(q);
        num = num % key[i];
        if(num === 0) break;
    }
    console.log(result);
    return result;
}

convert(3);
convert(58);
convert(1994);