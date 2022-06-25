// claspではimport/exportが利用できないため、外部ファイルの関数定義はnamespaceを利用して利用して参照している。
// ref: https://github.com/google/clasp/blob/e851215b8abe4de282c62c4d61076c85e89a56ba/docs/typescript.md

// スプレッドシート起動時に動くメソッド
function onOpen() {
    SpreadsheetApp
        .getUi()
        .createMenu('★メニュー★')
        .addItem('トースト起動', 'showToast')
        .addItem('CSVダウンロード', 'downloadCsv')
        .addSubMenu(
            SpreadsheetApp.getUi().createMenu('メール関連')
                .addItem('下書きメール作成', 'createDraft')
        )
        .addToUi();
}

function showToast() {
    SpreadsheetApp.getActive().toast("処理が正常に完了しました", "★結果★");
}

function downloadCsv() {
    var html = HtmlService.createTemplateFromFile("dialog").evaluate();
    SpreadsheetApp.getUi().showModalDialog(html, "Download!!");
}

function getData() {
    var values = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
    var data = [];
    for (const element of values) {
        data.push(element.join(","));
    }
    return data.join("\r\n");
}

function getFileName() {
    var sheetName = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName()
    var datetime = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyyMMddHHmm');

    return sheetName + '_' + datetime + '.csv';
}

function createDraft() {
    mail.createDraft();
}