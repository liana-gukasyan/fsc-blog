---
title: "Before You Code, Remember to PREP for Your Bootcamp Coding Interview"
date: "2016-12-21"
details: ""
---

![](prep.png)

PREP is a mnemonic for methodically solving coding problems. It expands to: Parameters, Return, Example, Pseudocode. 

The mnemonic is new, but the underlying technique is battle tested. This is essentially a beginner-friendly version of [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development) that lends itself well to coding challenges.

Let’s get right to it and learn PREP through an example problem! We’ll use JavaScript, but this technique works for just about any programming language.

-----

##Suppose your interviewer asks you...
_**"Write a function that accepts a sentence and returns the longest word."**_  
###PARAMETERS (INPUT)
Most problems involve writing a function. In this step we need to determine what parameters our function should accept, and then we need to give them meaningful names.

Keywords like “takes in” or “accepts” in the problem statement will guide us here. If it’s unclear, we can also ask the interviewer for clarification. In our case, the statement “accepts a sentence” tells us the function should accept a single string parameter.

So, we have determined the type of our parameter, but what should we name it?  It might sound simple, but good naming is a crucial programming skill, and it takes practice. We could call ours "sentenceString," but calling it "sentence" is more concise and still makes it clear we're dealing with a string.

Since this is our first step, we also need to think of a meaningful name for our function itself. In our case, "longestWord" is both concise and descriptive. Now that we've decided, we can write the shell for our function like this:

```javascript

function longestWord(sentence){
  
}
```  

###RETURN (OUTPUT)
What does this function *return*? Is it a number? A boolean? A string?

Remember: the value a function returns is not the same as what it might display in a print/log statement. Once again, we can look at the problem statement for clarification. “Returns the longest word" tells us that we're returning a word, and we know that words are strings. Let’s make this crystal clear by creating a variable to represent this return value and rigging up our function to return it. Even though we aren't returning the correct answer yet, we are set up to return the correct type. We have created a placeholder that will make the next steps easier.

```javascript
function longestWord(sentence){
  var word = "placeholder";
  
  return word;
}
```

###EXAMPLE (TEST)
Even for expert developers, static code is harder to understand than running code. We want to make our code runnable and "alive" as soon as possible. We can breathe life into our function with an example test invocation.

We know that if our function accepts the sentence, "I saw a hippopotamus," it should return the string “hippopotamus” once it’s properly working. But for now, we just want to see our placeholder value from the last step to confirm our code is runnable and setup correctly.

```javascript
function longestWord(sentence){
  var word = "placeholder";
  
  return word;
}

// This should log "hippopotamus" once we finish the later steps
// For now, it just logs "placeholder"
console.log(longestWord("I saw a hippopotamus"));
```  

###PSEUDOCODE
While it’s tempting to just dive in and start coding now, it would be too easy to get caught up in a detail that could distract from the bigger picture. We need to devise a strategy first, and pseudocoding is just the tactic for this. Pseudocode is simply a series of precise statements written in spoken language comments to describe we need to do.

```javascript
function longestWord(sentence){
  // Use a variable to keep track of the longest word so far.
  var word = "placeholder";
  
  // Convert the sentence into an array of words, so we can easily iterate
  // over each word.
  
  // Loop through each of the words.
  
  // If the length of the current word is greater than the longest so far,
  // update our variable tracking the longest word.
  
  // After we've looked at every word, return the tracking variable.
  return word;
}

// This should log "hippopotamus" once our function is working correctly.
// Currently, it logs "placeholder"
console.log(longestWord("I saw a hippopotamus"));
```

###WE HAVE FINISHED PREP. NOW WE CAN CODE!
The four steps in PREP helped us clearly frame the problem and think about how to solve it. In truth, accurate framing is half the battle. Most interviewers will already be impressed to see our methodical approach. At this point, our goal is simply to write code that will make our examples/tests pass. We'll do this by encoding each of our pseudocode steps.

We know we've got a working solution when we can run our code and see the correct output. 
```javascript
function longestWord(sentence){
  // Use a variable to keep track of the longest word so far.
  var longestWordSoFar = "";
  
  // Convert the sentence into an array of words, so we can easily iterate
  // over each word.
  var wordArray = sentence.split(" ");
  var currentWord;
 
  // Loop through each of the words.
  for (var i = 0; i < wordArray.length; i++){
    currentWord = wordArray[i];
    // If the length of the current word is greater than the longest so far,
    // update our variable tracking the longest word.
    if (currentWord.length > longestWordSoFar.length){
      longestWordSoFar = currentWord;
    }
  }
  
  // after we've looked at every word, return the tracking variable
  return longestWordSoFar;
}

// This should log "hippopotamus" once our function is working correctly.
console.log(longestWord("I saw a hippopotamus"));
```

We're through the hardest part now, and we can breathe a sigh of relief that we've at least gotten to a working answer! At this point, there are just two more questions to think about:

* Are there any edge cases that would break the code? For example, do we need to take into account sentences that have a period at the end? We'll write more test cases for these edge cases, and fix the code if necessary.
* Can we make the code cleaner or more efficient now? We should discuss ideas with the interviewer so they know our thoughts before risking breaking the solution.
That's it! The process might seem overly mechanical at first, but trust me, it will become second nature - much like the steps in learning to drive. Even after programming for more than 12 years, this is still roughly the sequence I follow when I’m problem solving. I'll likely use formal testing frameworks instead of log statements, but the steps are the same.

Now you try it! Here are a few beginner-level problems you can practice with, in ascending order of difficulty:

1. Suppose you have an array of string like [ “adios”, “bye”, “ciao” ]. Your task is to write a function called total_characters that accepts such an array as a parameter and returns the summed number of characters across all the strings in the array.
 
2. Write a function to flip a coin n times that returns the numbers of times a “heads” was flipped.
 
3. (From CoderByte) Using the JavaScript language, have the function alphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

I’d love to see your solutions and provide feedback. Submit your answers in the comments and / or directly to answers@firststepcoding.com

PREP has already helped several First Step Coding learners ace their interviews, and I hope it helps you too. Happy coding!