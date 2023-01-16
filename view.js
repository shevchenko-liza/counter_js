function createView({
    onIncrement,
    onDecrement,
    onReset,
}) {
    const counterNode = document.querySelector('.counter_js');
    const incrementNode = document.querySelector('.increment_js');
    const decrementNode = document.querySelector('.decrement_js');
    const resetNode = document.querySelector('.reset_js');

    // два способа записи можно сразу onIncrement, а можно через стрелочную функцию передать
    incrementNode.addEventListener('click', onIncrement);

    decrementNode.addEventListener('click', () => {
        onDecrement();
    });
    resetNode.addEventListener('click', () => {
        onReset();
    });
    return {
        render({ counter }) {
            counterNode.innerHTML = counter
        }
    }
}