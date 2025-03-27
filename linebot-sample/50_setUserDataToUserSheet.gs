/**
 * ユーザー情報をスプレッドシートに追加する関数
 * 「ユーザー情報」シートにユーザーIDとユーザー名を追加する
 * ただし、すでに同じユーザーIDが存在する場合は何も行わない
 * 
 * @param {string} userId - 追加するユーザーのID
 * @param {string} userName - 追加するユーザーの名前
 */
function setUserDataToUserSheet(userId, userName) {

  const userSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ユーザー情報');
  const userData = userSheet.getDataRange().getValues();
  userData.shift();

  if(userData) {
      for(const user of userData) {
        if(user[0] === userId) return; // userIdが既に登録済みなら何もしない
      } 
  }

  userSheet.appendRow([userId, userName]);
}