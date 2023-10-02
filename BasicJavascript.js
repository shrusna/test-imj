//By Syahrul Husna

// First of all, i use javascript looping that called 'for'
// After that i declare a variable to make the looping syntax works, i use let i=1; i <= 100; i++
// Then, i declare a variable called output and the value was empty string
// On the first if statement, i do check if the number can divided by 3, if it's true then i add 'One' to the output string
// On the second if statement, i do check if the number can divided by 5, if it's true then i add 'Block' to the output string
// Then, i print the output string to the console and if the number is not divisible by 3 or 5, i print the number

for (let i = 1; i <= 100; i++) {
  let output = "";

  if (i % 3 === 0) {
    output += "One";
  }

  if (i % 5 === 0) {
    output += "Block";
  }

  console.log(output || i);
}
