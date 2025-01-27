function reverses(str)
{

    // LET, VAR and CONST
	let inputArray = str.split("");
		let result = new Array(inputArray.length);

		// Mark spaces in result
		for (let i = 0; i < inputArray.length; i++) {
			if (inputArray[i] == ' ') {
				result[i] = ' ';
			}
		}

		// Traverse input string from beginning
		// and put characters in result from end
		let j = result.length - 1;
		for (let i = 0; i < inputArray.length; i++) {

			// Ignore spaces in input string
			if (inputArray[i] != ' ') {

				// ignore spaces in result.
				if (result[j] == ' ') {
					j--;
				}
				result[j] = inputArray[i];
				j--;
			}
		}
		console.log((result).join(""));
}
reverses("internship at geeks for geeks");


