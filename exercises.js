const capitalize = (s) => {
    let arr = s.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.toString().replaceAll(',', '')
 }

 const reverseString = (s) => {
    if (s.length === 0) {
        return s
    }
    return reverseString(s.substr(1)) + s.charAt(0)
 }

export {capitalize, reverseString}    