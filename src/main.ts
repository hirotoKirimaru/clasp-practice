// スプレッドシート起動時に動くメソッド
function onOpen() {
    SpreadsheetApp
        .getUi()
        .createMenu('★メニュー★')
        .addItem('トースト起動', 'showToast')
        .addToUi();
}

function showToast() {
    SpreadsheetApp.getActive().toast("処理が正常に完了しました", "★結果★");
}

