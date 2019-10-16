var unsolved = [
	[0, 0, 0, 2, 6, 0, 7, 0, 1],
	[6, 8, 0, 0, 7, 0, 0, 9, 0],
	[1, 9, 0, 0, 0, 4, 5, 0, 0],
	[8, 2, 0, 1, 0, 0, 0, 4, 0],
	[0, 0, 4, 6, 0, 2, 9, 0, 0],
	[0, 5, 0, 0, 0, 3, 0, 2, 8],
	[0, 0, 9, 3, 0, 0, 0, 7, 4],
	[0, 4, 0, 0, 5, 0, 0, 3, 6],
	[7, 0, 3, 0, 1, 8, 0, 0, 0]
];
console.log("this is your unSolved sudoku puzzle:-\n", unsolved);


// puzzle solver start from here.
function sudokuPuzzle(puzzle){
	var emptyCell = 1;
	// this loop going for whole 81 boxes.
	while (emptyCell > 0){
		emptyCell = 0;
		// this loop for columns
		for (var vert = 0; vert < puzzle.length; vert++){ 
			// this loop for rows
	        for (var horz=0; horz < puzzle.length; horz++){
	        	// this line checking in whole puzzle zero value.
	            if ((puzzle[vert][horz]) === 0){
	            	// this is variable storing the possiable value.
		           storePosiableNumber = [];
		        //    this loop for store the possiable value in object.
		            for(let i =0;i< puzzle.length; i++){
		            	// this condition checking row.
		              	if (puzzle[vert][i] >0){
		              		console.log(puzzle[vert][i]);
		              		
		              	}
		            }  	
	           	 	}
	        	}
	    	}
		
	
	}

}
let funCall = sudokuPuzzle(unsolved);



