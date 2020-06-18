
//Callback?

// Là hàm khi truyền qua đối số 
// Khi gọi hàm khác 

//1. Là Hàm 
//2. Được truyền qua đối số 


function MyFunction(param) {

    if (typeof param === 'function') {
        param("Học lập trình ");
    }
   
}
function MyCallback(value) {
    console.log("value: ", value);
}


MyFunction(MyCallback);
