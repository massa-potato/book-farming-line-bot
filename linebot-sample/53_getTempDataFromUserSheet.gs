/**
* ユーザーの一時データをスプレッドシートから取得する関数
* 
* @param {string} userId - 日報入力者のユーザーのID
* @return {Array} ユーザーの一時データを含む配列（ユーザーIDに一致する行データ）
*/
function getTempDataFromUserSheet(userId) {
  
  const userSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ユーザー情報');
  const userList = userSheet.getDataRange().getValues();

  for(const data of userList) {
    if(data[0] === userId) {
      return data;
    }
  }
}