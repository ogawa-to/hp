/** ----------------------------------------------------------
 * パターン2-2 ： 基本形(失敗パターンのみ)
 * ----------------------------------------------------------*/
$(function(){

    // 非同期関数
    function test() {
        const promise = new Promise((undefined, reject) => {
            const is_even = Math.floor((Math.random() * 10)) % 2;
            console.log(is_even); 
            if (is_even) {
                console.log('何も処理しないよ');
            } else {
                reject();
            }
        });
        promise.then(undefined, onReject);
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