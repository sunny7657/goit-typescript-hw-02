function identify<T>(arg: T): T{
    return arg;
}
let output1 = identify<string>('str');
let output2 = identify<number>(10);



function reverse<T>(items: T[]): T[]{
    return items.reverse();
}

let numbers = reverse<number>([1, 2, 3, 4, 5]);
let string = reverse<string>(['a', 'b', 'c']);
