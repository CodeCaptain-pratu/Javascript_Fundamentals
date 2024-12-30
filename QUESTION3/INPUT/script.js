function findCharacterClasses(pattern,inputString){
    let regex = new RegExp(pattern,"g");
    let matches=inputString.match(regex);
    return matches||[];
}

let string = "Hello123@world";

let Pattern ={
    digits:"\\d",
    uppercase:"[A-Z]",
    lowercase:"[a-z]",
    specialCharacter:"[^A-Za-z0-9]"
};

console.log(`Input String  : ${string}`);

Object.keys(Pattern).forEach((key)=>{
    let pattern=Pattern[key];
    let matches=findCharacterClasses(pattern,string);
    console.log(`Matches for ${key} (${pattern}) : `,matches);
})