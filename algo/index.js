"use strict";

const { xor } = require("lodash");

const algo = (req, res, next) => {
    console.log("=== req ====",req.query)
    let {questionHash, inputArray}= req.query
    inputArray = JSON.parse(inputArray)
    let outputL;
    switch (questionHash) {
        case "singleNumber":
            console.log(questionHash," === singleNumberLL ===",inputArray)
            outputL = _singleNumber(inputArray)
            break;
        case "isHappy":
            outputL = isHappy(inputArray)
            break;
        case "maxSubArray":
            outputL = maxSubArray(inputArray);
            break;
        case "bfsShortDistance":
            console.log(questionHash," === bfsShortDistance ===",inputArray)
            outputL = _bfsShortDistance(inputArray)
            break;
        default:
            break;
    }
    res.status(200).json({
        status: "success",
        message: "action was successful",
        data: outputL
    })
}

/*
**
* 
***
 * **/
const _singleNumber = async (arr = []) => {
    try{
        
        arr = JSON.parse(arr)
        let len = inputArray.length
        
        if(len < 1){
            return;
        }
        if(len == 1){
            return arr[0]
        }
        for(var i = 0; i < arr.length; i++){
            let j = arr.length;
            while(j > 0){
                if(j !== i && arr[i] == arr[j] && dupArr.indexOf(arr[i]) == -1){
                    dupArr.push(arr[i])
                }
              j--;
            }
        }
        arr.map(item => {
            if(dupArr.indexOf(item) == -1){
              singleVal = item
            }
        })
        return singleVal;
    }catch(err){
        console.log("Error: ",err)
    }
}

/***
 * Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.
 */
const isHappy = (n) => {
    let result = 0;
    // convert n to string then seperate them
    let ntoString = n.toString()//.split()
    for(var i = 0; i < ntoString.length; i++){
      let toIntV = parseInt(ntoString[i]);
      let toSquare = toIntV * toIntV;
      result = result + toSquare
      //console.log(typeof result,"= ntoString", typeof result)
    }
    console.log(ntoString.length,"=== ntoString ==result: ",result)
    //use recursion
    
    if(result !== 1){
        isHappy(result)
    }
  	return true
}

/**
 * question: Find shortest safe route in a field with sensors present
 * description: Given a rectangular field with few sensors present on it, cross it by taking the shortest safe route without activating the sensors.
 * 
 * The rectangular field is given in the form of M x N matrix and we need to find the shortest path from any cell in first column to any cell in the last column of the matrix. The sensors are marked by value 0 in the matrix and all its 8 adjacent cells can also activate the sensors. 
 * The path can only be constructed out of cells having value 1 and at any given moment, we can only move one step in one of the four directions. The valid moves are:
 * *
 * **/
const _bfsShortDistance = (matrix) => {
    try{
        let M, N = 0;
        M = matrix.length;
        N = matrix[0].length;
        var row = [-1,0,0,1];
        var col = [0,-1,1,0];
        
        if(M < 1){
            console.log("the matrix is invalid")
            return false
        }
        let visited = matrix.map(M => M.map(N => N = false))
        let queue = []
        let dist = 0;//distance
        const isSafe = (matrix, visited, x, y) => matrix[x][y] == 1 && visited[x][y] !== true;
        const isValid = (x, y) => M > x >= 0 && N > y >= 0;
        console.log(M,N," M N=== visited ====",visited)
        for(var i = 0; i < M; i++){
            for(var j = 0; j < N; j++){
                if(isSafe(matrix, visited, i, j)){
                    //dist =+ 1;
                    queue.push({i,j,dist});//if object doesn't work use array
                }
            }
        }
        console.log(queue.length," :len || Enqueue: ",queue)
        while (queue.length > 0){
          let {i, j, dist} =  queue.shift()
          console.log(row.length,"== lastElemen ==",i, j, dist)
          if(j > N - 1){
              return dist;
          }
          for(var k = 0; k < row.length; k++){
              console.log(col[k],`i(${i}),j (${j}), k (${k})`,row[k])
            i = i + row[k];
            j = j + col[k];
            if(isValid(i, j) && isSafe(matrix, visited, i, j)){
                console.log("=== dest: ",dist)
                dist =+ 1;
                queue.push({i ,j,dist});
                visited[i][j] = true
            }
          }
        }
        console.log(M,N," | M, N === after visited ====",visited)

    }catch(err){
        console.log("err: ", err)
    }
}

const maxSubArray = (nums) => {
    console.log(nums.length," j =")
      //TODO: 
      //check if nums length and make sure its not less than 2, if it is return index 0
      // since it contiguous, sorting is out of the picture
      //
        if(nums.length == 0){
         return 0;
      }
      if(nums.length < 1){
         return nums[0];
      }
        
      let max_sum = Number.NEGATIVE_INFINITY;//Math.min_value;//nums[0]
      let len = nums.length;
      for(var i = 0; i < len; i++){
          let current_sum = 0;
          let j = i;// + 1;
          while(j < len){
              current_sum += nums[j];
              if(current_sum > max_sum){
                 max_sum = current_sum;
                console.log("max_sum so far ",max_sum)
              }
              j++;
          }
      }
      
      return max_sum;
  };

module.exports = {
    algo
}