function outerFunction(outerParam) {
    let outerVar = "Hello I am variable from OuterFunction";
    return function innerFunction(innerParam) {
        console.log("Outer Parameter:", outerParam);
        console.log("Outer Function Variable:", outerVar);
        console.log("Inner Parameter:", innerParam);
    };
}

let innerReference = outerFunction("Hello from Outer Parameter");

innerReference("Hello From Inner Parameter");
