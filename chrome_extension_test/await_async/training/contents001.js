/** ----------------------------------------------------------
 * パターン1 ： 基本形(成功と失敗のパターン)
 * ----------------------------------------------------------*/
$(function(){

    // 非同期関数
    function test() {
        const promise = new Promise((resolve, reject) => {
            const is_even = Math.floor((Math.random() * 10)) % 2; 
            if (is_even) {
                resolve();
            } else {
                reject();
            }
        });
        promise.then(onSucceed, onReject);
        return promise;
    }

    // コールバック関数を定義する。
    const onSucceed = () => {
        console.log('resolveが呼ばれたときのメソッド');
    };
    const onReject = () => {
        console.log('rejectが呼ばれたときのメソッド');
    };



    // クリックイベント
    $('input[name="execute"]').click(() => {
        test();
    });
});