function regexMatch(pattern,inputString){
    let regex=new RegExp(pattern);
    return regex.test(inputString);
}



let tests=[
    {pattern:"^hello",string:"hello world",expected:true},
    {pattern:"world$",string:"hello world",expected:true},
    {pattern:"\\d+",string:"123abc",expected:true},
    {pattern:"\\d+",string:"abc",expected:false},
    {pattern:"^[A-Za-z]+$",string:"Hello123",expected:false},
    {pattern:"^[A-Za-z]+$",string:"Hello",expected:true},
    {pattern:"cat|dog",string:"I have  a dog ",expected:true},
    {pattern:"cat|dog",string:"I have a fish",expected:false},
];

tests.forEach(({pattern,string,expected},index)=>{
    let result=regexMatch(pattern,string);
    console.log(`Test ${index+1}: pattern:/${pattern}/,string:"${string}"`)
    console.log(`Expected :${expected}, Got:${result}`);
    console.log(result===expected?"pass":"fail");
});