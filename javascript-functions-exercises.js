// http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223	

function rev(num) {
	var myarray = num.toString().split(''); // [ '3', '2', '2', '4', '3' ]
	console.log(myarray);
	var temp = []; 
	for (var i = myarray.length-1; i >= 0; i--) {
		temp.push(myarray[i]);
	}
	return parseInt(temp.join(''));
}
rev(32243); 


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.


var sample = 'nurses run'; 

function pal(string) {
	var array = (string.split(' ').join('').split('')); // [ 'n', 'u', 'r', 's', 'e', 's', 'r', 'u', 'n' ]
	var temp = true;
	for (var i = 0; i <= (array.length-1)/2; i++) {
		if (array[i] !== array[array.length - (i+1)]) {
    		temp = false;
		}
    }
    return temp;
}
pal(sample);




// 3. Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 




function combo(string) {
	string = string.split('');
  var newArr = [];
	for (var i = 0; i < string.length; i++) {
  	for(var j = i + 1; j <= string.length; j++) {
    	newArr.push(string.slice(i, j).join(''));
  	}
	}
  return newArr;
};



// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.




var mySort = function(str) {
	str = str.toLowerCase();
	var arr = str.split('');
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (var i = 1; i<arr.length; i++) {
    for (var j = 0; j<arr.length; j++) {
      if (alphabet.indexOf(arr[j]) > alphabet.indexOf(arr[i])) {
        var temp = arr[i]; // switch
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr.join('');
};


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '







// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'




function longest(str) {
	str = str.split(' ');
  var final = '';
  for(var i = 0; i < str.length; i++) {
  	if (str[i].length > final.length) {
    	final = str[i];
    }
  }
  return final;
};

/* 
function longest(sentense) {
	var temp; 
	var array = sentense.split(' '); // ['Web', 'Development', 'Tutorial'];
	for (var i = 1; i < array.length; i++) {
  		for (var j = 0; j < array.length; j++) {
			if (array[i].length > array[j].length) {
				temp = array[j];
				array[j] = array[i];
				array[i] = temp;
			}
		}
	}
	return array.join(' '); // 'Development Tutorial Web'
	return array[0]; // 'Development'
}
*/ 


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5

function vowel(str) {
	var vow = ['a', 'e', 'i', 'o', 'u'];
	var count = 0;
	for (var i=0; i<str.length; i++) {
		for (var j=0; j<vow.length; j++) {
			if(str[i] === vow[j]) {
				count+=1;
			}
		}
	}
	return count;
/* with reduce
	str = str.split('');
	var obj = {a:'', e:'', i:'', o:'', u:''};
	return str.reduce(function(all, item) {
		if (item in obj) {
			all += 1;
		}
		return all;
	}, 0);
*/
}

console.log(vowel('The quick brown fox'));

// redo
// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function prime(num) {
var is_prime = true;
for(var i = 2; i <= Math.sqrt(num); i++) {
	if (num % i === 0) {
		is_prime = false;
	}
}
return is_prime;
}




// 9. Write a JavaScript function which accepts an argument and returns the type. Go to the editor
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.






// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. Go to the editor


// skip



// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Go to the editor
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 






// 12. Write a JavaScript function which says whether a number is perfect. Go to the editor
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.


// from Evan
function perfect(num) {
var arr = [];
for (var i = 1; i <= Math.round(num/2); i++) {
	if(num % i === 0) {
		arr.push(i);
	}
}
var result = arr.reduce(function(all, item) {
	all += item;
	return all;
}, 0);

return result === num;
}




// 13. Write a JavaScript function to compute the factors of a positive integer. Go to the editor

function factorial(num) {
	for (var i=num-1; i>0; i--) {
		 num*=i;
	}
	return num;
}





// 14. Write a JavaScript function to convert an amount to coins. Go to the editor
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1







// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. Go to the editor







// 16. Write a JavaScript function to extract unique characters from a string. Go to the editor
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"







// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. Go to the editor







// 18. Write a function for searching JavaScript arrays with a binary search. Go to the editor
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.







// 19. Write a JavaScript function that returns array elements larger than a number. Go to the editor







// 20. Write a JavaScript function that generates a string id (specified length) of random characters. Go to the editor
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"







// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. Go to the editor
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]







// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Go to the editor
// Sample arguments : 'w3resource.com', 'o' 
// Expected output : 2 






// 23. Write a JavaScript function to find the first not repeated character. Go to the editor
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 






// 24. Write a JavaScript function to apply Bubble Sort algorithm. Go to the editor 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]






// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"






// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. Go to the editor







// 27. Write a JavaScript function that returns the longest palindrome in a given string. Go to the editor

// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.







// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. Go to the editor







// 29. Write a JavaScript function to get the function name. Go to the editor









