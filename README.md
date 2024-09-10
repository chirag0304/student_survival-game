How to Run
          Include the JavaScript code in a script tag or external JS file.
          Create corresponding HTML elements for the player (stud), the failure object (fail), and the game over message (gameover).
          Add necessary CSS, including the animation for the stud and fail objects.
          Launch the HTML file in a browser to play the game.
Game Description
          This code is part of a simple student life-themed browser game. 
          The player controls a character (represented by an HTML element with the ID "stud") that moves left, right, or jumps up using keyboard arrow keys. 
          The objective is to avoid a "fail" obstacle (represented by an element with the ID "fail") that moves on the screen.
          If the player collides with the obstacle, the game ends, and a "game over" message is displayed. The player accumulates points for staying alive, which are displayed during gameplay.
Game Controls
          Up Arrow (↑): The student character jumps.
          Right Arrow (→): The student moves to the right.
          Left Arrow (←): The student moves to the left.
Game Logic
          The student starts in a stationary position.
          The fail object moves on the screen (controlled separately, possibly with CSS animations).
          If the student and fail object collide, the game ends, the fail animation stops, and the student character disappears from the screen.
          The game continually checks the position of the student and the fail object.
          If the student avoids the fail object, points are awarded, which are shown on the screen.
Game Features
          Collision Detection: The game checks the distance between the student and the fail object. If they are too close (both horizontally and vertically), the game ends.
          Score System: The player's score (marks) increases as long as they avoid the fail object.
          Game Over: When a collision occurs, the game over screen appears, and the student disappears from the screen.
