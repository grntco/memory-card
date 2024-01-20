export function deal(array, amount) {
    if (!array.length >= 0) {
        return array.slice(0, amount)
    }
}
