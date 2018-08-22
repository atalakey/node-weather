/* 
  There are four major parts that make up the Node process:
  1. Call Stack:
     The call stack is a simple data structure that keeps track of
     the program execution inside of the V8 engine. The call stack
     keeps track of the function currently executed and the statements
     that are fired. The call stack can only run one thing at a time.
     Two things can be done to the call stack:
       a. add something on the top of it.
       b. remove the top item.
  2. Node APIs:
     The Node APIs is where event listeners are registered. The Node APIs
     is responsible for adding event listeners callback functions to the
     callback queue when the event is fired.
  3. Callback Queue:
     The callback queue holds all the callback functions that are ready
     to get fired. the call back queue is where all callback functions
     wait for the call stack to be empty because callbacks cannot run
     until the call stack is empty.
  4. Event Loop:
     The event loop keeps track of what's on the call stack.
     If the call stack is not empty then the event loop doesn't do anything.
     If the call stack is empty, the event loop will check if there is anything
     in the callback queue waiting to run and push it onto the call stack.
*/

/*
  app execution process:
  01. run the main() function by adding it onto the call stack.
  02. push the console.log('Starting app') statement onto the call stack.
  03. print 'Starting app' to the screen.
  04. pop the console.log('Starting app') statement from the call stack.
  05. push the setTimeout(2 sec) statement onto the call stack.
  06. register the setTimeout(2 sec) event listener in the Nose APIs.
  07. pop the setTimeout(2 sec) statement from the call stack.
  08. push the setTimeout(0 sec) statement onto the call stack.
  09. register the setTimeout(0 sec) event listener in the Nose APIs.
  10. pop the setTimeout(0 sec) statement from the call stack.
  11. push the console.log('Finishing up') statement onto the call stack.
      setTimeout(0 sec) event is fired:
      a. setTimeout(0 sec) event listener gets removed from the Node APIs
      b. setTimeout(0 sec) callback(...) function gets added to the callback queue.
  12. print 'Finishing up' to the screen.
  13. pop the console.log('Finishing up') statement from the call stack.
  14. pop the main() function from the call stack.
  15. the event loop detects that the call stack is empty and that there is
      an event callback function waiting to get fired. the event loop takes
      the setTimeout(0 sec) callback(...) function and push it onto the call stack.
  16. push the console.log('Second setTimeout') statement onto the call stack.
  17. print 'Second setTimeout' to the screen.
  18. pop the console.log('Second setTimeout') statement from the call stack.
  19. pop the setTimeout(0 sec) callback(...) function from the call stack.
  20. the event loop detects that the call stack is empty and that there is
      an event listener that has not yet been fired.
      after 2 seconds setTimeout(2 sec) event is fired:
      a. setTimeout(2 sec) event listener gets removed from the Node APIs
      b. setTimeout(2 sec) callback(...) function gets added to the callback queue.
  21. the event loop detects that the call stack is empty and that there is
      an event callback function waiting to get fired. the event loop takes
      the setTimeout(2 sec) callback(...) function and push it onto the call stack.
  22. push the console.log('Inside of callback') statement onto the call stack.
  23. print 'Inside of callback' to the screen.
  24. pop the console.log('Inside of callback') statement from the call stack.
  25. pop the setTimeout(2 sec) callback(...) function from the call stack.
  26. the app is terminated.
*/

console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('Second setTimeout');
}, 0);

console.log('Finishing up');
