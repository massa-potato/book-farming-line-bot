/**
* デバッグ用ログをスプレッドシートに出力する関数
* 「logs」シートに現在時刻とJSONデータを新しい行として追加
* 
* @param {Object} data - ログ出力するデータオブジェクト
*/
function outputLog(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('logs');

  sheet.appendRow([
      new Date(), 
      JSON.stringify(data)
  ]);
}