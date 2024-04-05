#! /usr/bin/env node
// Check if a year is a leap year
//Solution
// Take input from user trhough "inquirer", Import inquirer
import inquirer from "inquirer";
// defined a function to ask user for another year to test?
async function testAgain(): Promise<boolean> {
  const userTest = await inquirer.prompt([
    {
      name: "option",
      type: "string",
      message:"Do you want to test another Year, press 'y' for yes or press any other key to exit."
    },
  ]);
  if (userTest.option=="y"){
    return true;
  }else {
    return false
  }
}
console.log("This application checks whether a Year is a Leap Year or Not!")
var again: boolean = true;
do {
  const userInput = await inquirer.prompt([
    {
      name: "year",
      type: "number",
      message: "Enter Year: ",
    },
  ]);
  if (isNaN(userInput.year) || userInput.year < 0) {
    console.log("Plz Enter a valid year");
    again = await testAgain();
  }else if (userInput.year==0){
    console.log("This is the convention used in astronomical year numbering")
    console.log("and in the international standard date system, ISO 8601.") 
    console.log ("In these systems, the year 0 is a leap year.")
    again = await testAgain();
  } else if(userInput.year%4 == 0){
      if(userInput.year%100==0){
        if(userInput.year%400==0){
          console.log(`${userInput.year} is a leap year`);
          again = await testAgain();
        }else{
          console.log(`${userInput.year} is not a leap year`);
          again = await testAgain();
        }

      }else {
          console.log(`${userInput.year} is a leap year`);
          again = await testAgain();
      }
    
  }else{
    console.log(`${userInput.year} is not a leap year`);
    again = await testAgain();
  }
} while (again);
