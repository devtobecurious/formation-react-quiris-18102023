const callBack = () => {
    // contexte numéro 2
    console.info('1s');
};

function getTempsQuiFait() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.info('this is a promise', this);

            const tempsQuiFait = {
                meteo: 'soleil'
            };
            resolve(tempsQuiFait);
        }, 2000);
    });
}

function hello() {
    // contexte numéro 1
    console.info('-----------------------------------');

    // setTimeout(callBack, 0);    
    const promise = getTempsQuiFait();
    

    promise.then(result => {
        console.info('result', result);
    });

    // contexte numéro 1
    console.info('**********************************');
}

async function viveLAsync() {
    console.info('début');

    const result = await getTempsQuiFait();

    // ce code devient async
    console.info('fin', result);

    return result;
}

viveLAsync().then(result => console.info('rrrrresult', result));

// ordre: contexte numéro 1 > contexte numéro 2 (même si timeout = 0s)

hello();

const helloInstance = new hello();



