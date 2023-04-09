/** ----------------------------------------------------------
 * パターン3 ： 基本形(コールバック関数に引数を渡す)
 * ----------------------------------------------------------*/
$(function(){

    // 非同期関数
    function test() {
        const promise = new Promise((resolve, reject) => {
            const is_even = Math.floor((Math.random() * 10)) % 2;
            console.log(is_even); 
            if (is_even) {
                resolve('おめでとう');
            } else {
                reject('残念でした');
            }
        });
        promise.then(onSucceed, onReject);
        return promise;
    }

    // コールバック関数を定義する。
    const onSucceed = (message) => {
        console.log('resolve : ' + message);
    };
    const onReject = (message) => {
        console.log('reject : ' + message);
    };




    // クリックイベント
    $('input[name="execute"]').click(() => {
        test();
    });
});