export const reverseString = (string) => {
    const stringLength = string.length
    let newString = ""

    for (let i = 0; i <= string.length; i++) {
        newString = newString + string.charAt(stringLength - i)
    }

    return newString

}