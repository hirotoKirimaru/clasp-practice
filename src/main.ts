// スプレッドシート起動時に動くメソッド
function onOpen() {
    SpreadsheetApp
        .getUi()
        .createMenu('★メニュー★')
        .addItem('トースト起動', 'showToast')
        .addItem('CSVダウンロード', 'downloadCsv')
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
    for (var i = 0; i < values.length; i++) {
        data.push(values[i].join(","));
    }
    return data.join("\r\n");
}

function getFileName() {
    var sheetName = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName()
    var datetime = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyyMMddHHmm');

    return sheetName + '_' + datetime + '.csv';
}
