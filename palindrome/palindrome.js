function palindrom(str) {
    const data = str.split("").reverse().join("");
    return data === str;
}
console.log(palindrom("hello"));
console.log(palindrom("eye"));