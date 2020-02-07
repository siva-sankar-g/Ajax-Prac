var std, user_id, user_name, password, email,
    mobile, website, doorno, village, mandal, district, state, country, formdata;



var string = location.search;
var arr = string.split('=');
var id = arr[arr.length - 1];
var http1 = new XMLHttpRequest();
http1.open('GET', 'https://jsonplaceholder.typicode.com/users')
http1.responseType = 'json';
http1.send();
http1.onload = function () {
    std = http1.response;
    console.log(std)
}

document.getElementById('userid').value = std.id;
document.getElementById('username').value = std.username;
document.getElementById('password').value;
document.getElementById('email').value = std.email;
document.getElementById('mobileno').value = std.phone;
document.getElementById('website').value;
document.getElementById('doorno').value;
document.getElementById('street').value;
document.getElementById('mandal').value;
document.getElementById('district').value;
document.getElementById('statenames').value;
document.getElementById('countrynames').value;



















function sub(){
user_id = document.getElementById('userid').value;
user_name = document.getElementById('username').value;
password = document.getElementById('password').value;
email = document.getElementById('email').value;
mobile = document.getElementById('mobileno').value;
website = document.getElementById('website').value;
doorno = document.getElementById('doorno').value;
village = document.getElementById('street').value;
mandal = document.getElementById('mandal').value;
district = document.getElementById('district').value;
state = document.getElementById('statenames').value;
country = document.getElementById('countrynames').value;

formdata = {
    id: user_id,
    username: user_name,
    password: password,
    email: email,
    phone: mobile,
    address: {
        doorno: doorno,
        village: village,
        mandal: mandal,
        district: district,
        state: state,
        country: country
    },
    website: website
}

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: user_name,
//       body: email,
//       userId: user_id
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))

var key = new XMLHttpRequest();
console.log(key)
key.open('POST', 'https://jsonplaceholder.typicode.com/users')
key.responseType = 'json';
key.send(formdata);
key.onload = function () {
    console.log(key.response);

}

//}