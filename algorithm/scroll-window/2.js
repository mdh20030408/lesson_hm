const myset = new Set();
myset.add(1);
myset.add("hello");
myset.add(true);
console.log(myset);
console.log(myset.has(1));
myset.delete(1);
console.log(myset);
for(const item of myset){
    console.log(item);
}
console.log(Array.from(myset))