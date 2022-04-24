// スプレッドシート起動時に動くメソッド
function onOpen() {
    SpreadsheetApp
        .getUi()
        .createMenu('★メニュー★')
        .addItem('トースト起動', 'showToast')
        .addToUi();
}

function showToast() {
    SpreadsheetApp.getActive().toast("Message", "Title");
}

