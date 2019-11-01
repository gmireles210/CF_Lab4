# Comparison Operators: Evaluating Conditions

  - You can evaluate a situation by comparing one value in the script to what you expect it might be. The result will be a Boolean: True or False
  
    - == : is equal to
    - === : strict equal to
    - != : is not equal to
    - !== : strict not equal to
    - > : greater than
    - < : less than
    - >= : greater than or equal to
    - <= : less than or equal to
    
# Logical Operators

  - Comparison operator usually return single values of true or false
  - Logical operators allow you to compare the results of more than one comparison operator
  
    - && : Logical And
    - || : Logical Or
    - ! : Logical Not
    
  - Short-circuit evaluation
    - Logical expressions are evaluated LEFT to RIGHT. If the first condition can provide enough info to get the answer, then there is no need to evaluate the second condition
    - There is no point continuing to determine the other result. They CANNOT both be TRUE
    - There is no point continuing because at least one of the values is TRUE
    
# Loops

  - Loops check a condition. If ti returns true, a code block will run. Then the condition will be checked again and if it still returns ture, the code block will run again
    It repeats until the condition returns false. There are THREE common types of loops:
    
    - FOR: If you need to run code a specific number of times, use a FOR loop (it is the most common loop)
           In a for loop, the condition is usually a counter which is used to tell how many times theloop should run

    - WHILE: If you do not know how many times the code should run, you can use a WHILE loop. Here the condition can be something other than a counter, and the code will continue to loop for as long as the condition is true

    - DO WHILE: The DO...WHILE loop is very similar to the while loop, but has ONE key difference: it will always run the statements inside the curly braces at least once, even if the condition evaluates to FALSE
      
# Loop Counters

  - A for loops uses a counter as a condition. This instructs the code to run a specified number of times. Here you can see the condition is made up of three statements:
  
    - INITIALIZATION: Create a variable and set it to 0. This variable is commonly called i, and it acts as the counter
    
    - CONDITION: The loop should continue to run until the counter reaches a specified number
    
    - UPDATE: Every time the loop has run the statements in the curly braces, it adds one to the counter
    
# Looping

  - The first time the loop is run, the variable i (the counter) is assigned a value of zero
  - Every time the loop is run, the condition is checked.
  - Then the code inside the loop (the staements between the curly brackets) is run.
  - The variable i can be used inside the loop
  - When the statements have finished, the variable i is incremented by 1
  - When the condition is no longer true, the loop ends. The script moves to the next line of code
  
# Using While Loops

  - This loop will continue to run for as long as the condition in the parentheses is true. That condition is a counter indicating that, as long as the variable i remains less than 10, the statements in the subsequent code block should run
  - When the loop has finished, the interpreter goes to the next line of code, which writes the msg variable to the page
  
