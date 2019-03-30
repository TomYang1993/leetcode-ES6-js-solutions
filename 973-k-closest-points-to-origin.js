/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest1 = function(points, K) {
    if(points.length === 1) {
        return points;
    }
    let newPoints = points.map((point) => {
        let newPoint = {};
        newPoint.position = [point[0], point[1]];
        newPoint.distance = point[0]*point[0] + point[1]*point[1]
        return newPoint;
    })
    
    newPoints.sort((a,b) => {
        return a.distance - b.distance;       
    })    
    newPoints = newPoints.slice(0, K);
    newPoints = newPoints.map((point) => {
        let newPoint = [point.position[0], point.position[1]];
        return newPoint;
    })
    return newPoints
};



// sort portion uses quicksort 


var kClosest2 = function(points, k) {
    var distPoints = points.map(point => new DistancePoint(point) );
    quickSort(distPoints, k);
    return distPoints.slice(0,k).map(distPoint => {
      return distPoint.point;
    })
  };
  //+++++++++++++++++++++++++
  // quickSort
  //+++++++++++++++++++++++++
  function quickSort(array, k) {
    quickSortRecursive(array, 0, array.length-1, k);
  }
  function quickSortRecursive(array, start, end, k) {
    if(start > end) return;
    var pivotValue = array[end].distance;
    var left=start, right=start;
    while(right<end) {
      var thisValue = array[right].distance;
      if(thisValue <= pivotValue) {
        swapIJ(array, left, right);
        left++;
      }
      right++;
    }
    swapIJ(array, left, end);
    if(left===k-1) {
      // all left side items are <=kth value >>  don't need more work
    } else if(left > k-1) {
      quickSortRecursive(array, start, left-1, k);
    } else if(left < k-1) {
      quickSortRecursive(array, start, left-1, k);
      quickSortRecursive(array, left+1, end, k);
    }
  }
  function swapIJ(array, i, j) {
    var tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
  //+++++++++++++++++++++++++
  // class
  //+++++++++++++++++++++++++
  class DistancePoint {
    constructor(point) {
      this.point = point;
      this.distance = point[0]*point[0] + point[1]*point[1];
    }
  }
  
  
