function* generate(){
    let count=0;
    for(let i=0;i<10;i++){
        count++;
        yield i
    }
    return count;
}
let flow=generate();
console.log(flow.next())
for(let i=0;i<=10;i++){
    console.log(flow.next())
}
console.log(flow)
