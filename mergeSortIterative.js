function mergeSortIterative(arr)
{
	var dubNum = 0;
	var end = Math.log2(arr.length) - 1;
	while(dubNum <= end)
	{
		var buffer = Math.pow(2, dubNum);
		var current = 0;
		var next = 0;
		for(var i = 0; i < arr.length - buffer; i += buffer)
		{
			for(var j = 0; j <= buffer * 2; j++)
			{
				if(arr[i+current] > arr[i+buffer+next])
				{
					var tmp = arr[i+current];
					arr[i+current] = arr[i+buffer+next];
					arr[i+buffer+next] = tmp
					current++;
				}
				if(arr[i+current] < arr[i+buffer+next])
				{
					next++;
				}
			}
		}
		dubNum++;
	}
	return arr;
}
var base = [];
var test1 = [4,2,5,32,1,5,7,8,0,4,5,2,7];
var test2 = [5,2,4,8,4,32,1,4,5,6.2];
var test3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var test4 = [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
var test5 = [642];
var test6 = [235,2416,1324,4,42,2,6,21,1,6,2314,673,417,4358,75462,84,5623546234,67435,75,5,3,3,623467,3574,4652,65465165,51,651,6251,3,84,65,16,51,32,16,54,95,46,216,21,6954,987460,21,3241,9454,];

console.log("the first value of any given array is base mergeSort, the second is my implementation");
console.log(mergesort(base)); console.log(mergeSortIterative(base));
console.log(mergesort(test1)); console.log(mergeSortIterative(test1));
console.log(mergesort(test2)); console.log(mergeSortIterative(test2));
console.log(mergesort(test3)); console.log(mergeSortIterative(test3));
console.log(mergesort(test4)); console.log(mergeSortIterative(test4));
console.log(mergesort(test5)); console.log(mergeSortIterative(test5));
console.log(mergesort(test6)); console.log(mergeSortIterative(test6));


function msort(x, lo, hi, tmp) {
	if(lo >= hi) return;
	var mid = Math.floor((lo+hi)/2);
	msort(x, lo, mid, tmp);
	msort(x, mid+1, hi, tmp);
	merge(x, lo, mid, hi, tmp);
}
function mergesort(x) {
	var tmp = [];
	msort(x, 0, x.length - 1, tmp);
	return tmp;
}
function merge(x, lo, mid, hi, tmp) {
	var a = lo, b = mid + 1;
	for(var k = lo; k <= hi; k++) {
		if(a <= mid && (b > hi || x[a] < x[b])) {
			tmp[k] = x[a++];
		} else {
			tmp[k] = x[b++];
		}
	}
	for(var k = lo; k <= hi; k++) {
		x[k] = tmp[k];
	}
}
