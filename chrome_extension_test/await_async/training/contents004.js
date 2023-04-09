/** ----------------------------------------------------------
 * パターン4 ： 基本形(コールバック関数に引数を渡す)
 * ----------------------------------------------------------*/
$(function(){

    // 非同期関数
    function delay(ms) {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ms);    
            }, ms);
        });
        promise.then(onSucceed);
        return promise;
    }

    // コールバック関数を定義する。
    const onSucceed = (ms) => {
        console.log(ms + 'ms秒間待機しました');
    };




    // クリックイベント
    $('input[name="execute"]').click(() => {
        delay(1000);
    });
});