// Before anything else, write the pseudocode of your steps and how you will solve this exercise.
// Create a string for the user saying:
// You have received this message because you have been chosen to open an important vault.
// Here is the secret combination:
// Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-*/).
// Each must equal one of the three codes in the combination.
// Add comments throughout the code to explain each step in the process.
// Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.
// Please submit either a file with your code or a screenshot of the code, with the pseudocode showing, or a GitHub link.

// COMBINATION IS : 10, 40, 39

// 1. Create the string with assigned text

const str1 =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// 2. Assign 3 variables that use an arithmetic operator in an equation that
// equals one of the 3 numbers in the combination.

let a = 25 - 15;
let d = 20 * 2;
let b = 30 + 9;

// 3. Each equation must use a different arithmetic operator
// Done above

// 4. Create the dialog box with vault code and message.

alert(str1 + " " + a + " " + d + " " + b);
