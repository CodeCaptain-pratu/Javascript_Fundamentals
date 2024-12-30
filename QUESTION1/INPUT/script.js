function outerFunction(outerParam){
    //variable declared within the function
    let outerVar="Hello I am variable from OuterFunction";
    return function innerFunction(innerParam){
        //Accessing variables from innerFunction and outerFunction
        console.log("Outer Parameter",outerParam);
        console.log("Outer Function Variable",outerVar);
        console.log("Inner Parameter",innerParam);
    };
}
//create reference to inner function
let innerReference=outerFunction("Hello from Outer Parameter");
//call the inner function with an argument
innerFunction("Hello From Inner Parameter");