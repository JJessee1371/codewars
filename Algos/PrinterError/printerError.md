# Printer Error

## Scenario
A factory uses a printer to label boxes. The colors of various inks are represented by the letters a - m. For each label, the color combinations are recorded in a control string. For example: aaabbbccc. Occasionally there are errors and a bad control string is produced. For example: aazybcdv (v, y, and z are outside of teh acceptable range). 

## Task
Write a function which, when provided with a control string, will return the a fraction converted to a string representing the number of errors as the numerator and the total length of the control string as the denominator. 

## Constraints
The string will always be at least one character long and will only contain letters from a - z.