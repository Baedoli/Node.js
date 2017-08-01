/**
 * http://usejsdoc.org/
 */

function getFibonaccieNumber(total) {
	
	var results = [ 0,1 ];

	console.time("Getting Fibonaccie Numbers");
	console.log("Let's get Fibonaccie Number..");

	for ( var i=0; i<total; i++) {
		if (i>=2) {
			results.push(results[i-2]+results[i-1]);
		}
	}

	console.log("Fibonacci ["+total+"] th Number is ["+results[total-1]+"]");
	console.log("All Number is ["+results+"]");

	console.timeEnd('Getting Fibonaccie Numbers');
	
	return results[total-1];
	
	}

module.exports.getFibonaccieNumber = getFibonaccieNumber;