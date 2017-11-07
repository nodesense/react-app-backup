export  function reCalculate(items) {
        let amount = 0;
        let count = 0;

        for (let item of items) {
            amount += item.qty * item.price
            count += item.qty;
        }

        return {amount, count}
}