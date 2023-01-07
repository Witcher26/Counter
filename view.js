function createView({
    onIncrementButtonClick,
    onDesrementButtonClick,
    onResetButtonClick
}) {
    const counterNode = document.querySelector('.js-counter');
    const incrementNode = document.querySelector('.js-increment');
    const descrementNode = document.querySelector('.js-decrement');
    const resetNode = document.querySelector('.js-reset');

    incrementNode.addEventListener('click', onIncrementButtonClick);

    descrementNode.addEventListener('click', function () {
        onDesrementButtonClick();
    });

    resetNode.addEventListener('click', function () {
        onResetButtonClick();
    })

    return {
        render({ counter }) {
            counterNode.innerHTML = counter;
        }
    }
}