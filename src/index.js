module.exports = function getZerosCount(number) {

    let sum = 0, divider = 5;

    while (true) {

        quantity = (number - number % divider) / divider;

        if (quantity > 0) {
            sum += quantity;
            divider *= 5;
        }
        else {
            break;
        }
    }

    return sum;

}
