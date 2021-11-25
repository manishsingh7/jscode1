// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    let BMI = mass / (height**2);
  
  if(BMI < 18.5){
    return "Underweight";
  }else if (BMI < 25){
    return "Normal";
  }else if (BMI < 30){
    return "Overweight";
  }else{
    return "Obese";
  }
}


export default BMICalculator;
