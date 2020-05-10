export default (expenses) => {
    return expenses.map(
        (expense) =>expense.amount).reduce((aux, valor) => aux + valor, 0)

}