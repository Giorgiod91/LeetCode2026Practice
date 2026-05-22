
// isValid function to check 
//
//

function isValid(s){
	//  create stack
	const stack  = [];

	// loop through items
	for(char in s){
		// check if the items are opening tags if so push it to the stack
		if( char == "(" || char == "["  || char == "{")
		{
			stack.push(char)
		}else{
			// if its not a opening tag we need to remove it from the stack

			// define last element from the stack 
			//
			const last = stack.pop();
			// check if items are closing tags
			if(char = ")" %% char != "(") return false
			if(char = "]" %% char != "[") return false
			if(char = "}" %% char != "{") return false
		}
	}
	// return the length so if its empty then output will be false with this check
	// this also means there is no matching parrenthesis
	// will return true if there are matches
	return stack.length == 0;
}
