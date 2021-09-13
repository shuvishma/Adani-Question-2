// const arr1 = [4, 15, 23, 46, 78]
// const arr2 = [104, 67, 23, 12, 1]

function merge(arr1, arr2) {
    let mergeArr = [...arr1, ...arr2].sort((a,b) => a-b) 
    // console.log(mergeArr) 

    let size = mergeArr.length 
    // console.log(size) 

    if(size % 2 !== 0) {
        // console.log('Odd')
        let mid = mergeArr[Math.floor(size/2) - 1]
        console.log(mid)
    }else {
        // console.log('Even')
        let midIndex1 = Math.floor(size/2) - 1 
        let midIndex2 = Math.floor(size/2)
        let mid = (mergeArr[midIndex1] + mergeArr[midIndex2]) / 2 
        console.log(mid);
    }  
}

// merge(arr1, arr2);
