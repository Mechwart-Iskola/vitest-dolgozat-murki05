import {expect , it, describe } from 'vitest'

describe('factorial', () => {
    const factorial = (n) => {
        if (n < 0) throw new Error('Factorial is not defined for negative numbers');
        return n === 0 ? 1 : n * factorial(n - 1);
    };

    it('Pozitív egész számok: n = 5', ()=> {
        expect(factorial(5)).toBe(120);
    });

    it('Pozitív egész számok: n = 3', ()=> {
        expect(factorial(3)).toBe(6);
    });

    it('Nulla: n = 0', () =>{
        expect(factorial(0)).toBe(1);
    });

    it('Negatív számok: n = -3', () =>{
        expect(() => factorial(-3)).toThrow('Factorial is not defined for negative numbers');
    });
});

describe('findLongestWord', () =>{
    const findLongestWord = (sentence) => {
        if (!sentence.trim()) return '';
        return sentence
            .trim()
            .split(/\s+/)
            .reduce((longest, word) => (word.length > longest.length ? word : longest), '');
    };

    it('Normál mondat', ()=>{
        expect(findLongestWord('The quick brown fox jumps over the lazy dog')).toBe('jumps');
    });

    it('Egy szavas mondat', () => {
        expect(findLongestWord('Hello')).toBe('Hello');
    });

    it('Üres mondat', ()=> {
        expect(findLongestWord('')).toBe('');
    });

    it('Mondat extra szóközökkel', () => {
        expect(findLongestWord('  A quick test  ')).toBe('quick');
    });
});

describe('countVowels', () => {
    const countVowels = (input) => {
        return (input.match(/[aeiouAEIOU]/g) || []).length;
    };

    it('Normál szöveg', () => {
        expect(countVowels('Hello World')).toBe(3);
    });

    it('Csak mássalhangzók', () => {
        expect(countVowels('bcdfg')).toBe(0);
    });

    it('Vegyes kis- és nagybetűk', () => {
        expect(countVowels('AeIoU')).toBe(5);
    });

    it('Üres sztring', () => {
        expect(countVowels('')).toBe(0);
    });
});

describe('isSubset', () => {
    const isSubset = (obj1, obj2) => {
        return Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]);
    };

    it('Részhalmaz', () => {
        expect(isSubset({ a: 1 }, { a: 1, b: 2 })).toBe(true);
    });

    it('Nem részhalmaz', () => {
        expect(isSubset({ c: 3 }, { a: 1, b: 2 })).toBe(false);
    });
});

describe('findCommonObjects', () => {
    const findCommonObjects = (arr1, arr2) => {
        return arr1.filter(obj1 => arr2.some(obj2 => JSON.stringify(obj1) === JSON.stringify(obj2)));
    };

    it('Közös objektumok vannak', () => {
        const arr1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
        const arr2 = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
        expect(findCommonObjects(arr1, arr2)).toEqual([{ id: 2, name: 'Bob' }]);
    });

    it('Nincsenek közös objektumok', () => {
        const arr1 = [{ id: 1, name: 'Alice' }];
        const arr2 = [{ id: 3, name: 'Charlie' }];
        expect(findCommonObjects(arr1, arr2)).toEqual([]);
    });

    it('Üres tömbök', () => {
        expect(findCommonObjects([], [])).toEqual([]);
    });

    it('Egyik tömb üres', () => {
        const arr1 = [{ id: 1, name: 'Alice' }];
        expect(findCommonObjects(arr1, [])).toEqual([]);
    });
});
