//https://stanford.edu/~cpiech/karel/ide.html
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   //your code here  
   putBeeper();
   moveDiagonalBeeper4times();
}

function moveDiagonalBeeper(){
   move();
   turnLeft();
   move();
   putBeeper();
   turnRight();
}

function moveDiagonalBeeper4times(){
   moveDiagonalBeeper();
   moveDiagonalBeeper();
   moveDiagonalBeeper();
   moveDiagonalBeeper();         
}
