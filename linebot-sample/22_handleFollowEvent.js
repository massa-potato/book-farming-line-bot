/**
* フォローイベント（友だち追加）を処理する関数
* ユーザー情報をスプレッドシートに登録（既存ユーザーの場合は何もしない）
* 
* @param {Object} event - LINEプラットフォームから受け取ったフォローイベントオブジェクト
*/
function handleFollowEvent(event) {

    const userSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ユーザー情報');
    const userData = userSheet.getDataRange().getValues();
    userData.shift();
  
    const userId = event.source.userId;
    const userName = getUserProfile(userId).displayName;
  
    if(userData) {
      for(const user of userData) {
        if(user[0] === userId) return; // userIdが既に登録済みなら何もしない
      } 
    }
  
    userSheet.appendRow([userId, userName]);
  }