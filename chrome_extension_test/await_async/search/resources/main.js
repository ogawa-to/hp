/**
 * キャラクター一覧
 */
const characterList = [
    {"id":	"1",	"name":	"クレス・アルベイン",	"sex":	"男",	"series":	"ファンタジア"},
    {"id":	"2",	"name":	"カイル・デュナミス",	"sex":	"男",	"series":	"デスティニー2"},
    {"id":	"3",	"name":	"ユーリ・ローウェル",	"sex":	"男",	"series":	"ヴェスペリア"},
    {"id":	"4",	"name":	"リオン・マグナス",	"sex":	"男",	"series":	"デスティニー"},
    {"id":	"5",	"name":	"ルーク・フォン・ファブレ",	"sex":	"男",	"series":	"ジアビス"},
    {"id":	"6",	"name":	"リタ・モルディオ",	"sex":	"女",	"series":	"ヴェスペリア"},
];

/**
 * 一覧画面を表示する。
 */
function showList() {

    // 詳細画面を非表示にする。
    document.querySelector("#edit").style.display = 'none';
    document.querySelector("#list").style.display = 'block';
    // 一覧情報を削除し、再表示する。
    deleteList();
    let container = document.querySelector("#list");
    let tbody_elem = container.querySelector("tbody");
    for (let i = 0; i < characterList.length; i++) {
        addCharacterInfo(tbody_elem, i);
    }
}

// 一覧情報を削除する。
function deleteList() {
    let container = document.querySelector("#list");
    let tbody_elem = container.querySelector("tbody");
    while(tbody_elem.firstChild) {
        tbody_elem.removeChild(tbody_elem.firstChild);  
    }
}

// キャラクター情報を追加する。
function addCharacterInfo(elem, id) {
    let character = characterList[id];
    let tr = document.createElement("tr");
    let td_id = document.createElement("td");
    td_id.innerText = character["id"];
    let td_name = document.createElement("td");
    td_name.innerText = character["name"];
    let td_sex = document.createElement("td");
    td_sex.innerText = character["sex"];
    let td_series = document.createElement("td");
    td_series.innerText = character["series"];
    
    let td_button = document.createElement("td");
    let button = document.createElement("input");
    button.type="button";
    button.name="edit";

    button.setAttribute('onclick', 'showDetail(' + character["id"] + ')');
    button.innerText = "編集";
    tr.appendChild(td_id);
    tr.appendChild(td_name);
    tr.appendChild(td_sex);
    tr.appendChild(td_series);

    td_button.appendChild(button);
    tr.appendChild(td_button);
    elem.appendChild(tr);
}

/**
 * 詳細画面を表示する。
 * @param {id} 選択されたキャラクター番号 
 */
function showDetail(id) {

    const waitTime =  getRandom(1000, 3000);
    loadingBegin();
    setTimeout(() => {
        loadingEnd();
        // 一覧情報を削除する。
        document.querySelector("#list").style.display = 'none';
        let container = document.querySelector("#edit");
        let tbody_elem = container.querySelector("tbody");

        container.style.display = 'block';
        let c = characterList[id - 1];
        tbody_elem.querySelector('input[name="id"]').value=c["id"];
        tbody_elem.querySelector('input[name="name"]').value=c["name"];
        tbody_elem.querySelector('input[name="sex"]').value=c["sex"];
        tbody_elem.querySelector('input[name="series"]').value=c["series"];
        tbody_elem.querySelector('input[name="entry_button"]').setAttribute('onclick', 'update(this)');
    }, waitTime);
}

/**
 * キャラクター情報を更新する。
 * @param {id} 選択されたキャラクター番号 
 */
function update(elem) {

    let tbody_elem = elem.parentNode.parentNode;
    const id = tbody_elem.querySelector('input[name="id"]').value;
    let c = characterList[id - 1];
    c["name"] = tbody_elem.querySelector('input[name="name"]').value;
    c["sex"] = tbody_elem.querySelector('input[name="sex"]').value;
    c["series"] = tbody_elem.querySelector('input[name="series"]').value;

    const waitTime =  getRandom(1000, 3000);
    loadingBegin();
    setTimeout(() => {
        showList();
        loadingEnd();        
    }, waitTime);

}

// ローディング開始
function loadingBegin() {
    let container = document.querySelector('#loading');
    container.style.display = 'block'; 
    container.querySelector('.waiting').animate(
        [
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' }
        ],
        {
            duration: 1000,
            easing: 'linear',
            iterations: Infinity
        }
    );
}

/**
 * ローディング終了
 */
function loadingEnd() {
    let container = document.querySelector('#loading');
    container.style.display = 'none'; 
}

// 乱数を取得する。
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

/** -------------------------------------------------------
 * 読み込み完了時の処理
 * -------------------------------------------------------*/
window.addEventListener('load', showList);