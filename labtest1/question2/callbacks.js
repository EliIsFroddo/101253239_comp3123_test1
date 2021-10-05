
const resolvedPromise = () => {
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            let success = {'message' : 'delayed success!'}
            console.log(success);
            resolve();
        }, 500);
    });
}
resolvedPromise();



const rejectedPromise = () => {
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            let error = 'error : delayed exception!';
            console.log(error);
            reject();
        }, 500);
    });
}
rejectedPromise();

