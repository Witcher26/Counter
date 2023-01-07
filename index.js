const counter = createCounter();
const view = createView({
    onIncrementButtonClick: handleIcremenentButtonClick,
    onDesrementButtonClick: onDecrementButtonClick,
    onResetButtonClick: onResetButtonClick,
    
});

view.render({
    counter: counter.get()
});

function handleIcremenentButtonClick(){
    counter.increment();
    view.render({
        counter: counter.get()
    });
};

function onDecrementButtonClick(){
    counter.descrement();
    view.render({
        counter: counter.get()
    });
};

function onResetButtonClick(){
    counter.reset();
    view.render({
        counter: counter.get()
    });
};