/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution; //fixme
  var board = new Board({n: n});
  var pair = [0, 0];
  var rookCount = 0;
  
  for (var i = 0; i < n * n; i++) {
    //place rook in that location
    var arr = board.get(pair[0]);
    arr[pair[1]] = 1;
    //console.log(pair[1]);
    //check to see if there are any conflicts
    if (board.hasAnyColConflicts() || board.hasAnyRowConflicts()) {
      arr[pair[1]] = 0;
    }
    //increment the 'columnIndex' in our pair
    pair[1]++;
    if (pair[1] === n) {
      pair[1] = 0;
      pair[0]++;
    }
  }  
  //return 1;
  solution = board.rows();
  //console.log(board);



  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  //create empty arr to hold all matrixs
  var solutions = []; 
  //build up blank board
    //instatuate new board(n)
  var boardObj = new Board({n: n });
  //set new board equal to newBoardName.rows();
  var emptyBoard = boardObj.rows();
  //create new recursive function(counter, board)
  var addNextRook = function(counter, board) {
    if (counter === undefined) {
      counter = 0;
      board = emptyBoard.slice();
    }
    if ( counter === n - 1) { 
      
      var finalCopy = board.slice();
      solutions.push(finalCopy);
    }

    if (counter < n - 1) {
      for (var i = 0; i < n; i++) { 
        board[counter][i] = 1;
        var sampleBoardObj = new Board(board);
        if (!sampleBoardObj.hasAnyRooksConflicts()) {
          var continueWithBoard = board.slice();
          addNextRook(counter + 1, continueWithBoard);  
        } else {
          board[counter][i] = 0; 
        }
        //add copy to prevent overwriting once recursion ended?
        board = board.slice();
        board[counter][i] = 0;
      }
    }
  
  };
  addNextRook();
  //console.log(solutions);
  
//************** finish under this line 
    //if counter < n-1
      //for loop (0 - n )
        //currentBoard[counter][i] = 1
        //set equal to new board with 
        
  solutionCount = solutions.length;      

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; 
  
  //declare a variable to hold fresh board

  

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};







































