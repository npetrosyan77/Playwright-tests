export function findLocale (arg, rangeUp, rangeTo) {
    let check = false;
    for (let l of arg) {
        if (l.charCodeAt() >= rangeUp && l.charCodeAt() <= rangeTo) {
            check = true
        }
        if(!check){
            throw new Error('not');
        }
    }
    console.log('Locale is changed')
}