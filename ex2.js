// Ham
// Cach viet thong thuong cu~
function hello(name) {
    console.log(name);
}
// Cach viet khac
const hello1 = function(name){
    console.log(name +  "den tu hello1");
}

// Cach viet ham trong JS ES6
const hello2 = (name) => {
    console.log(name + ' den tu hello hien dai');
}
// Neu chi co 1 tham so va 1 gia tr return
const tinhBinhPhuong = so => so * so;
console.log(tinhBinhPhuong(2));

hello ('Quoc Cuong');
hello1('My Hang');
hello2('Kim Ngan');