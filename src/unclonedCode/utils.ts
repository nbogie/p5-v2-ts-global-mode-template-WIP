//this function is just here as an example for unit testing
export function addTwoNumbers(a: number, b: number): number {
    return a + b;
}
/**
 * Creates an array of numElements containing the collected results of calling the given function repeatedly.
 * @example
 * Here's an example where we want to collect 100 random numbers from 0 to 5.
 *
 * ```const myNumbers = collect(100, () => random(0, 5))```
 *
 * @param numElements
 * @param creatorFn
 * @returns
 */
export function collect<T>(
    numElements: number,
    creatorFn: (index: number) => T
): T[] {
    const results = [];
    for (let i = 0; i < numElements; i++) {
        results.push(creatorFn(i));
    }
    return results;
}
