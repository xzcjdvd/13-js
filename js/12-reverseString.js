console.clear()

function reverseString(str){
    if (typeof str !== 'string') {
        return 'ERROR: reikalingas tekstas';
    }

    if (typeof str === '') {
        return 'ERROR: reikalingas ne tuscias tekstas';
    }
    let ats = '';
    // 1 - imti simbolius is galo ir sujungti is eiles
     for (let i=str.length-1; i>=0; i++){
        ats += str[i];
     }
    
    // 2 - imti raides is priekio
    // for (let i=0; i<str.length; i++){
    //    ats = str[i] + ats;
    // }

    // 3 - eiti is priekio, bet raides imame is galo
    // for (let i=0; i < str.length; i++){
    //    ats += str[str.length - i - 1];
    // }
    // 0
    // ats = str.split('').reverse().join('');

    return ats;
    }

console.log(reverseString());
console.log(reverseString(5));
console.log(reverseString(true));
console.log(reverseString(['asdsff']));
console.log(reverseString(''));
