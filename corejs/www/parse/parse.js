/******************************************************************************/
// EXERCISE:
//
// The `Parse' function below will be called multiple times with a
// varying number of arguments.  The function should return the number
// of arguments that could successfully be parsed as integers.
Parse = function() {
	var count = 0;

	for(var i=0; i < arguments.length; i++)
	{
		if(isFinite(parseInt(arguments[i])))
		{
			count++;
		}
	}

	return count;
	
  // Your code here...

};
