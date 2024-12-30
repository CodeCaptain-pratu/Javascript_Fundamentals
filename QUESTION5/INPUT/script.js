function calculateDeliveryTime(packageType){
    let deliveryTime;
    switch(packageType.toLowerCase()){
        case "standard":
            deliveryTime="3-5 days";
            break;

        case "express":
            deliveryTime="1-2 days";
            break;
        
        case "overnight":
            deliveryTime="Next day";
            break;
        
        default:
            deliveryTime="Invalid package type please choose 'standard','express' and 'overnight'.";
    }
    console.log(`Package  Type :${packageType}`);
    console.log(`Estimated Delivery Time : ${deliveryTime}`);
}
calculateDeliveryTime("standard");
calculateDeliveryTime("express");
calculateDeliveryTime("overnight");
calculateDeliveryTime("economy");