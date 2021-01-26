//Create
// function createUser(data) {
//     firebase.firestore().collection('users').add(data); //đang truy cập vào root và truy cập vào collection trên "users", và add thêm 1 document vào collection đó
// }

// createUser({
//     name: "Ly",
//     age: 18,
//     address: "Hà Nội",
//     status: "ế",
//     type: [
//         "đẹp trai",
//         "giàu",
//         "cao to"
//     ],
//     appearance: [
//         "xinh gái",
//         "cute"
//     ]
// }); //phương thức add luôn nhận vào 1 object, id tự sinh

//Read
// async function readUserById(id) { //async tức là khai báo hàm đó bất đồng bộ
//     var result = await firebase.firestore().collection('users').doc(id).get() //đây là lấy dữ liệu ở firebase từ 1 id bất kì
//     console.log (result);
//     console.log (result.data()); //muốn xem được dữ liệu chúng ta cần tương ứng với id, thêm data()
// }
// readUserById("tzn5PvoqmsNuHkDnOFSp"); //đây là lấy ra 1 dữ liệu từ id
//cứ có promise thì có await, có await thì phải có async
// async function readALLUser() { //đây là Read tất cả người dùng
//     var result = await firebase.firestore().collection('users').get();
//     console.log (result);
//     for(var document of result.docs) { //result.docs là 1 mảng các document dữ liệu, xem trong inspect (f12)
//         console.log (document.id, document.data()); //đây là xem dữ liệu và id tương ứng với dữ liệu đó
//     }
// }
// readALLUser();
// async function ReadUserWithCondition(field, operator, value) { //đây là Read người dùng nhưng có điều kiện nào đó
//     var result = await firebase.firestore().collection('users').where(field, operator, value).get();
//     console.log (result);
//     for (var document of result.docs) {
//         console.log (document.id, document.data());
//     }
// }
// ReadUserWithCondition('age', '>=', 20);
// ReadUserWithCondition('appearance', 'array-contains', 'đẹp trai'); //read với điều kiện là có từ đẹp trai trong mảng
// ReadUserWithCondition('status', '==', 'ế');



//Update (chỉ trên 1 document)
function updateUser(id, data) {
    firebase.firestore().collection('users').doc(id).update(data);
}
updateUser('C8pLKN4pEGpXUGsdrv8d', {name: 'Nga', age: 20, appearance: ['mũm mĩm', 'dễ nhìn'], characters: ['dễ gần', 'đanh đá']}); //đây là update thông tin vào 1 document với id tương ứng

//Delete (chỉ trên 1 document)
function deleteUser(id) {
    firebase.firestore().collection('users').doc(id).delete();
}


//Realtime Update