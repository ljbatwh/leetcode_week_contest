/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    const initInDegrees = new Array(n).fill(0);
    console.log(`initInDegrees = ${JSON.stringify(initInDegrees)}`)

    const calculateInDegree = (a,inDegrees) => {
        console.log(`a = ${JSON.stringify(a)} inDegrees=${JSON.stringify(inDegrees)}`)
        return a.reduce((m,i)=>{
            console.log(`m = ${JSON.stringify(m)} i=${i}`)

            if(i!=-1){
                m[i] = m[i]+1;
            }
            return m;
        },inDegrees);
    };

    const leftInDegrees = calculateInDegree(leftChild, initInDegrees);
    console.log(`${JSON.stringify(leftChild)} get in degrees ${JSON.stringify(leftInDegrees)}`)

    const inDegrees = calculateInDegree(rightChild,leftInDegrees);
    console.log(`${JSON.stringify(rightChild)} get in degrees ${JSON.stringify(inDegrees)}`)
    
    let rootCount = 0;
    let inDegreeBiggerThanOne = false;
    //should only 1 zero in degree node and all other node are 1 in degree
    for(let i=0;i<inDegrees.length;i++){
        if(inDegrees[i]===0){
            rootCount += 1;
            if(rootCount>1){
                break;
            }
                    
        }
        if(inDegrees[i]>1){
            inDegreeBiggerThanOne = true;
            break;
        }

    }
    const result = (rootCount ===1 && !inDegreeBiggerThanOne)
    console.log(`${n} ${JSON.stringify(leftChild)} ${JSON.stringify(rightChild)} rootCount ${rootCount} inDegreeBiggerThanOne=${inDegreeBiggerThanOne} result ${result}`)
    return result;
};
//Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
//Output: true
validateBinaryTreeNodes(4,[1,-1,3,-1],[2,-1,-1,-1]);
//Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]
//Output: false
validateBinaryTreeNodes(4,[1,-1,3,-1],[2,3,-1,-1]);
//Input: n = 2, leftChild = [1,0], rightChild = [-1,-1]
//Output: false
validateBinaryTreeNodes(2,[1,0],[-1,-1]);
//Input: n = 6, leftChild = [1,-1,-1,4,-1,-1], rightChild = [2,-1,-1,5,-1,-1]
//Output: false
validateBinaryTreeNodes(6,[1,-1,-1,4,-1,-1],[2,-1,-1,5,-1,-1]);
