import { capitalize } from "../src/capitalize";

test("Capitalize john", ()=>{
    expect(capitalize("john")).toBe("John")
})