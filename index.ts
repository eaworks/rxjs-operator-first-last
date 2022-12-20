import { from, first, last } from 'rxjs';

const source = from([1, 2, 3, 4, 5]);

// const example = source.pipe(first());
const example = source.pipe(last());
example.subscribe((val) => console.log(val));
