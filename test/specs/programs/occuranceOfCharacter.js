let str = "hello"

let strArray =str.split("")
let set = new Set(strArray)
// console.log(set); 

// set.forEach((element)=>{
//     let count = 0
//     for(const char of str){
//         if (element == char) {
//             count = count+1
            
//         }
//     }
// })

//using object
let c_obj = {}
for(const char of str){
    if(!(c_obj[char])){
        c_obj[char] = 1
    }
    else{
        c_obj[char] = c_obj[char]+1
    }

}
console.log(c_obj);        //{ h: 1, e: 1, l: 2, o: 1 }