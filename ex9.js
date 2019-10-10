const numbers = [1,9,2,9,6,1];

const num1s = numbers.map( (n) => {
    return n * 2;
});

const num2s = numbers.filter( n => n === 9);

const locSanPham = (...dssanpham) => {
    return dssanpham.filter(n => n === 1 );
};

console.log(locSanPham(1,2,3,5,6));
console.log(locSanPham(3,5,6,7,8,9,1,0,1,2,2,3,5,6,7,8,9));

console.log(numbers);
console.log(num1s);
console.log(num2s);
