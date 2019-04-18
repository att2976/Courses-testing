# Courses-testing
Austin Tyler - Blockchain hw4

## To run:

1. cd to Courses-testing directory
1. `truffle compile`
1. `truffle migrate  --reset`
1. in a new console(cd to same directory): `testrpc`
1. in the previous tab: `truffle test test/Courses.js`
1. All tests should pass

## Answers:

1. Test 1: setInstructor()
  Deploys the contract promise and calls funciton with a given set of params. Then, calls the mapping of instructors to get that instructor and verify that the correct args were passed.
1. Test 2: getInstructors()
  Gets new promise and calls the setInstructor() function 3 times with different data. Then calls getInstructor() function and verifies that the correct number of results were returned.
1. Test 3: getInstructor()
  Gets new promise and calls setInstructor() function with given set of params. Then calls getInstructor() method and checks that the correct values were passed.
1. Test 4: countInstructors()
  Gets new promise and calls the setInstructor() function 3 times with different data. Then calls countInstructors() function and verifies that the correct number of results were returned.
