import { calculate } from "../src/calculator";

test("Add 2 and 4 to equal 6",()=> {
    expect(calculate(2, 4, "add")).toBe(6)
})

test("subtract 4 and 2 to equal 2",()=> {
    expect(calculate(4, 2, "subtract")).toBe(2)
})

test("divide 6 by 2 to equal 3",()=> {
    expect(calculate(6, 2, "divide")).toBe(3)
})

test("multiply 2 and 4 to equal 8",()=> {
    expect(calculate(2, 4, "multiply")).toBe(8)
})