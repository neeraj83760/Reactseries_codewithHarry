// Geeks for Geeks string problems 

// let str = [];

// let arr = ['my','.','name','.','is','.','neeraj']; 
// let p=0 ;
// for(let i=arr.length; i>= 0 ; i--)
// {
//     if(arr[i] === '.'){

//         str[p]= arr[i+1];
//         str[p+1]= arr[i]; 
//         // console.log(str[p+1]) 
//         p = p+2;
//     }

//     if(i===0)

//     {
//         str[p]= arr[i];
//     }


// } 

// console.log(str);



// let counter =0;

// let str = "neeraj.is.my.name"

// for(let i=0;i<str.length;i++)
// {
//     counter++;
// }

// console.log(counter); 

// for(let i=str.length; i> 0;i--){

//     if(str[i]==='.')
//     presentCounter = counter -i
//     str.slice(presentCounter,counter)
//     counter = presentCounter;

// }


//   ************************  Anagram of a string **********************

// let str =  'johnymeranaam'

// let str2 = 'merajohnnynaam'
// // let arr = str.split('');

// let a = new Map(); 

// for(let i=0; i<str.length;i++){

//     a.set(str[i], i) 
// }

// console.log(a); 

// let hashMap = {}

// for(i=0; i< arr.length; i++){

//     if(!hashMap[arr[i]])
    
//     hashMap[arr[i]]=1;

//     else

//     hashMap[arr[i]]+=1; 
// } 

// console.log(hashMap);


//************************** palindrome of the given string******************** */

let ab = 'neeraj';

// if(ab ===(ab.split('').reverse().join(""))){

//     console.log('Sting is palindrome') 

// }

// else{

//     console.log('Sting is not a palindrome') 
// }

// console.log(ab.split(' '))

// console.log(ab.split('').filter((ab)=>{'N'})) 

// let arr1 =[4,7,1,8,9,5]


// const result = arr1.filter(i => i%2 === 0);

// console.log(result)

// for(let i=0;i<ab.length;i++){

//     ar.push(ab[i])

//     if((ab.slice(0,i+1)) === ar.reverse().join('')){

//         console.log('Longest palindrome in the sequence is of length '+ counter)
//         counter++; 
//     } 
//

// let start=0, end=0; 

// let expandFromCentre =(ab, i, j)=>{

//     while(i>=0 && j< ab.length && ab.charAt(i) === ab.charAt(j)){

//         i--;
//         j++;
//     }

//     return (j-i)-1; 

// }



// for(let i=0; i<ab.length;i++){

// let Len1 = expandFromCentre(ab,i,i+1);
// let len2 = expandFromCentre(ab,i,i);  
// let len = Math.max(Len1,len2);

// if((end - start) < len){

//     start = i -(len -1)/2;
//     end = i + len/2;

//     console.log('start and end is', start +'     '+ end +' '+len) 
// }

// }


// console.log(ab.substring(start, end+1))


// ******************** Try to Implement heap data structure *************

class MaxHeap {
    constructor(){
        // this is where the array that represents our heap will be stored
        this.values = [];
    }


// index of the parent node
parent(index) {
    return Math.floor((index - 1) / 2);
}

// index of the left child node
leftChild(index) {
    return (index * 2) + 1;
}

// index of the right child node
rightChild(index) {
    return (index * 2) + 2;
}

// Now we’re going to make a method to determine if a given node is a leaf. A leaf is a node that 
// doesn’t have any children. In a complete binary tree, the number of leaves is (number of nodes + 1) / 2. 
// We can use that to our advantage, to find the index of the first leaf. We can use the length property 
// of our values array to get the correct starting index of the leaves. The leaves will go from this 
// index until the index of the last element in our array.

// returns true if index is of a node that has no children
isLeaf(index) {
    return (
        index >= Math.floor(this.values.length / 2) && index <= this.values.length - 1
    )
}

// swap using ES6 destructuring
swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
}

add(element) {
    // add element to the end of the heap
    this.values.push(element);
    // move element up until it's in the correct position
    this.heapifyUp(this.values.length - 1);
}

heapifyUp(index) {
    let currentIndex = index,
        parentIndex = this.parent(currentIndex);

    // while we haven't reached the root node and the current element is greater than its parent node
    while (currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
        // swap
        this.swap(currentIndex, parentIndex);
        // move up the binary heap
        currentIndex = parentIndex;
        parentIndex = this.parent(parentIndex);
    }


}

// removes and returns max element
extractMax() {
    if (this.values.length < 1) return 'heap is empty';

    // get max and last element
    const max = this.values[0];
    const end = this.values.pop();
    // reassign first element to the last element
    this.values[0] = end;
    // heapify down until element is back in its correct position
    this.heapifyDown(0);

    // return the max
    return max;
}

heapifyDown(index) {
    // if the node at index has children
    if (!this.isLeaf(index)) {

        // get indices of children
        let leftChildIndex = this.leftChild(index),
            rightChildIndex = this.rightChild(index),

            // start out largest index at parent index
            largestIndex = index;

        // if the left child > parent
        if (this.values[leftChildIndex] > this.values[largestIndex]) {
            // reassign largest index to left child index
            largestIndex = leftChildIndex;
        }

        // if the right child > element at largest index (either parent or left child)
        if (this.values[rightChildIndex] >= this.values[largestIndex]) {
            // reassign largest index to right child index
            largestIndex = rightChildIndex;
        }

        // if the largest index is not the parent index
        if (largestIndex !== index) {
            // swap
            this.swap(index, largestIndex);
            // recursively move down the heap
            this.heapifyDown(largestIndex);
        }
    }

}

    buildHeap(array){
        this.values = array;
        // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
        for(let i = Math.floor(this.values.length / 2); i >= 0; i--){
            this.heapifyDown(i);
        }
    }

    print() {
        let i = 0;
        while (!this.isLeaf(i)) {
            console.log("PARENT:", this.values[i]);
            console.log("LEFT CHILD:", this.values[this.leftChild(i)]);
            console.log("RIGHT CHILD:", this.values[this.rightChild(i)]);
            i++;
        }      
    }
}



const n = new MaxHeap()

console.log(n); 