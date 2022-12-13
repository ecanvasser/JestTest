const capitalize = (s) => {
    let arr = s.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.toString().replaceAll(',', '')
 }

 export {capitalize}    