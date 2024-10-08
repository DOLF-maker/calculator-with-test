import { expect, test } from "vitest";
import { calculate } from "../calculator";

// sayhello ('Sarah') => 'hello, Sarah'

test ('Add 5 to 7', () => {
    let result = calculate (5,7, '+')
    expect(result).toBe(12)
    })
test ('Subtract 3 by 1', () => {
    let result = calculate (3,1, '-')
    expect(result).toBe(2)
    })
test ('Multiply 10 by 22', () => {
    let result = calculate (10,22, '*')
    expect(result).toBe(220)
    })
test ('Divide 10 by 2', () => {
    let result = calculate (10,2, '/')
    expect(result).toBe(5)
    })
test ('Divide by zero', () => {
    let result = calculate (10, 0, '/')
    expect(result).toBe('Cannot divide by zero')
    })
test ('Invalid operator', () => {
    expect( () => calculate (10, 3, '&') ).toThrowError('Invalid Operator')
})