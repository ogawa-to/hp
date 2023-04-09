/** ----------------------------------------------------------
 * パターン2-1 ： 基本形(成功パターンのみ)
 * ----------------------------------------------------------*/
$(function(){

    // 非同期関数
    function test() {
        const promise = new Promise((resolve) => {
            const is_even = Math.floor((Math.random() * 10)) % 2;
            console.log(is_even); 
            if (is_even) {
                resolve();
            } else {
                console.log('何も処理しないよ');
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