// Works only in sorted array
// Complexity O(logn)

function customBinarySearch(start, end, arr, target) {
  if (!arr.length) return -1;
  if (start === end && arr[start] === target) return start;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(customBinarySearch(0, 4, [1, 2, 3, 4], 4));
