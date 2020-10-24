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

module.exports = {
    algo
}