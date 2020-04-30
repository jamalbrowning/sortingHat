# Sorting Hat
# You are in charge of bringing the Hogwarts sorting hat to life!

# To start off with, you will use a bootstrap jumbotron to have your sorting hat introduce itself and start the sorting process (by clicking on a button). A bootstrap form will then appear to fill in the student's name and a button to sort. This should then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). On sorting a student, the form should clear and a bootstrap card with the student's name and house should print below the form. You should also be able to expel a student after they have been sorted, which should remove their card from the student record.

# Technical Requirements 
 You must use Boostrap 4 to style your page components.
You should apply responsive design to your page (aka your app should be designed to work on small screens)
Your JS file should be comprised of functions, no actions should happen in your code outside of a function
Your HTML and JS should all have proper indentation
Helpful Form: An error message shows if a user tries to sort a student without filling out the form
Add Button Hints
When a new student is added an object should be created and that object should be pushed into an array of students that then prints to the dom.

# Expel Button Hints
Think of a way you can expel students without just hiding those divs on the page. This would mean when the button is clicked you modify the array of students and pass the new array into your print to dom function. Double hint - put a unique id in the student object when you create them.

# Optional Bonus
House Colors: The color of the student's card changes depending on which house they were sorted.
Card Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)
Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students. -->
