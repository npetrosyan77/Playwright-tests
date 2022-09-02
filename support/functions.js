export function findLocale (arg, rangeUp, rangeTo) {
    let changed = false;
    for (let l of arg) {
        if (l.charCodeAt() >= rangeUp && l.charCodeAt() <= rangeTo) {
            changed = true
        }
        if(!changed){
            throw new Error('Locale is not changed.');
        }
    }
    console.log('Locale is changed.')
}