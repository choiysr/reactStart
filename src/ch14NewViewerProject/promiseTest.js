function increase(number) {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = number + 10;
            if (number > 50) {
                const e = new Error('NumberTooBig');
                reject(e);
            }
            resolve(result);
        }, 1000)
    });

    return promise;

}

increase(0)
    .then(result => {
        console.log(result);
        return increase(result);
    })
    .then(result => {
        console.log(result);
        return increase(result);
    })
    .catch(e => {
        console.log(e);
    });

async function runTasks() {
    try { // try~catch로 에러를 처리한다.
        let result = await increase(0);
        console.log(result);
        result = await increase(result);
        console.log(result);
    } catch(e) {
        console.log(e);
    }
}