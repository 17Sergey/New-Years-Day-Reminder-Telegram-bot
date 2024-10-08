function isValidIP(str) {
    const octets = str.split(".");

    if (octets.length !== 4) return false;

    function hasSpecialCharacters(str) {
        const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?e\/`~\s]/;
        return regex.test(str);
    }

    for (let i = 0; i < octets.length; i++) {
        let octet = octets[i];

        if (hasSpecialCharacters(octet)) return false;
        if (octet.length === 0) return false;
        if (octet > 255 || octet < 0) return false;
        if (octet.length === 1 && Number(octet) === 0) continue;
        if (!Number(octet)) return false;

        const regEx = /^0+\d+/;
        if (regEx.test(octet)) return false;
    }

    return true;
}

// console.log(isValidIP("0.0.0.0"));
// console.log(isValidIP("12.255.56.1"));
// console.log(isValidIP("137.255.156.100"));

// console.log(isValidIP("12.255.056.1"));
// console.log(isValidIP("122.256.56.1"));

console.log(isValidIP("0.0.0.0") + " - true");
console.log(isValidIP("12.255.56.1") + " - true");
console.log(isValidIP("137.255.156.100") + " - true");
console.log(isValidIP("") + " - false");
console.log(isValidIP("abc.def.ghi.jkl") + " - false");
console.log(isValidIP("123.456.789.0") + " - false");
console.log(isValidIP("12.34.56") + " - false");
console.log(isValidIP("01.02.03.04") + " - false");
console.log(isValidIP("256.1.2.3") + " - false");
console.log(isValidIP("1.2.3.4.5") + " - false");
console.log(isValidIP("123,45,67,89") + " - false");
console.log(isValidIP("1e0.1e1.1e2.2e2") + " - false");
console.log(isValidIP(" 1.2.3.4") + " - false");
console.log(isValidIP("1.2.3.4 ") + " - false");
console.log(isValidIP("12.34.56.-7") + " - false");
console.log(isValidIP("1.2.3.4\n") + " - false");
console.log(isValidIP("\n1.2.3.4") + " - false");
