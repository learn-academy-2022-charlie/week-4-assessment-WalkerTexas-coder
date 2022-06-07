# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer:

    Researched answer:In React, everything is a component. Props is a keyword that is short for properties, and it allows components to communicate to each other. There are two types of components in React, they are smart components that hold state, and dumb components that do not hold state. It is best to keep state at the top parent component and to only change it there since props are passed from parent to child. I have used props in React to create a tic-tac-toe game. My parent object held state and updated the game board, while the board itself was held in a separate component. I was able to pass props of clicking the board to make an x or o, disabling pointer events on the board, and to keep tract of each player's turn. - Stephen O



2. What is a DOM event?

  Your answer:

  Researched answer:Document Obeject Model (DOM) events are changes that occur in a document. These can be caused by the user or system. For example, the user may click on an element and that will generate an event. A DOM event can also be system generated, when the browser has completed loading the document, an event is generated and can be monitored using JavaScript.
By including event listeners in the document HTML and/or the JS code, we can use DOM events to act as triggers that run JS commands. Event listeners are methods that trigger a JS function to run when a specified event occurs. - Jorge L



3. What is object-oriented programming? How is it different than functional programming?

  Your answer:

  Researched answer:
  Object oriented programming is a way to program that is based on objects and classes while functional programming is more about creating logic through functions. From my understanding React is used as a functional programming framework, using functions and hooks. At Learn Academy, we primarily use the OOP style of programming with React, re-building the components into classes from their standard function component boilerplate. - Damien R



4. What is the difference between a Float and an Integer in Ruby?

  Your answer:

  Researched answer: Both numerical data, Floats are used when there is more precision needed for a problem. Floats can be changed into Integers or whole numbers by adding Math.floor to them which round the decimal to the nearest whole number. - Collin


5. Ruby has an implicit return. What does that mean?

  Your answer:

  Researched answer: With the use of implicit returns, we can let Ruby handle the flow of code execution. Letting Ruby handle the flow of execution is better than explicitly stating the return. This could cause some problems down the line when other people have to work on Ruby code. Without explicit returns, we run into the possibility of confusing what it is that we intended to return with the method. -Don



## Looking Ahead: Terms for Next Week

1. Instance Variable: Variable defined ina class. Every object of that class has a copy of it. 

2. PostgreSQL: Open source relational database system that supports SQL and JSON. Used as a Database.

3. Ruby on Rails: Open source web app development frame work written in ruby. 

4. ORM: Object Relational mapping. Allows you to write and manipulate data from a data base using OOP paradigm 

5. Active Record: 
