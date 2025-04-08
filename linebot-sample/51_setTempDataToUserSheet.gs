/**
* 作業記録の一時データをスプレッドシートに設定する関数
* 「ユーザー情報」シートの指定されたユーザー行の特定列に値を設定
* 
* @param {string} userId - 日報入力者のユーザーID
* @param {*} param - 設定する値（作業機名や日時など）
* @param {number} targetCol - 設定する列番号
*/
function setTempDataToUserSheet(userId, param, targetCol) {
  
  const userSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ユーザー情報');
  const userIdsList = userSheet.getRange(2, 1, userSheet.getLastRow(), 1).getValues().flat();

  const targetRow = userIdsList.indexOf(userId) + 2;

  userSheet.getRange(targetRow, targetCol).setValue(param);
}