​
2
const solution = (arr) => {
3
   let left, right, leftSum, rightSum;
4
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
5
    
6
   left = [...arr].slice(0, arr.length / 2)
7
   right = [...arr].slice(arr.length / 2, arr.length)
8
    
9
   console.log('arr: ', arr)
10
   console.log('left: ', left)
11
   console.log('right: ', right)    
12
   
13
   leftSum = left.reduce(reducer);
14
   rightSum = right.reduce(reducer);
15
   
16
   console.log('leftSum: ', leftSum) 
17
   console.log('rightSum: ', rightSum)
18
    
19
   if(arr.length === 0){
20
       return '';
21
   } else if (leftSum === rightSum){
22
        return ''; 
23
    } else if(leftSum > rightSum) {
24
        return "Left";
25
    } else if (rightSum > leftSum) {
26
        return "Right";
27
    }
28
};
1/5 test case
