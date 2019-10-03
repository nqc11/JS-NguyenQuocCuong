const array1 = [1, 2, 3, 4,];
const array2 = [...array1,5, 6, 7, 8, ];

const name = {
    name1: 'Quoc Cuong',
    name2: 'My Hang',
};

const dsLop = {
    ...name,
    name3: 'Van Hoa',
    name4: 'Phi Dai',
    name5: 'Huu Bang',
}
console.log(name);
console.log(dsLop);

console.log(array1);
console.log(array2);