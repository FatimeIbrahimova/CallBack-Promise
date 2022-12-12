let USERNAME = "Fatima";
let PASSWORD = 12345;
function login(username, password, callback) {
    if (username !== USERNAME || password !== PASSWORD) {
        setTimeout(() => {
            console.log("Invalid credentials!");
        }, 4000);
    } else {
        setTimeout(() => {
            function welcome(name, callback) {
                console.log(`Welcome ${name}`);
            }
        }, 1000);
    }
}

// function welcome(name,callback){
//     if(username==USERNAME || password==PASSWORD){
//         console.log(`Welcome ${name}`);
//     }
// }

function getListOfFriends(callback) {
    const friends = ["Valide", "Amina", "Xanim", "Leyla"]
    setTimeout(() => {
        callback(friends);
    }, 1000);
}
function showFriend(friend) {
    console.log(friend[0]);
}

const user = login("Fatima", 12345, function (user) {
    welcome(user);
});
const myfriends = getListOfFriends(function (myfriends) {
    showFriend(myfriends);
})

