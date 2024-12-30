function extractUsingGroups(pattern,inputString){
    let regex=new RegExp(pattern);
    let match=inputString.match(regex);
    if(match){
        return match.groups || "No named group Defined";
    }
    else{
        return "No match Found";
    }
}
let string = "Today's date is 30-12-2024";
let datePattern = /(?<day>\d{2})-(?<month>\d{2})-(?<year>\d{4})/;

console.log(`Input String : "${String}"`)
console.log(`datePattern : ${datePattern}`);

let result=extractUsingGroups(datePattern,string);

if(typeof result === "string"){
    console.log(result);
}
else{
    console.log("Extracted Groups:",result);
}