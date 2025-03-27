/**
* フォローイベント（友だち追加）を処理する関数
* ユーザー情報をスプレッドシートに登録（既存ユーザーの場合は何もしない）
* 
* @param {Object} event - LINEプラットフォームから受け取ったフォローイベントオブジェクト
*/
function handleFollowEvent(event) {

  const userId = event.source.userId;
  const userName = getUserName(userId);

  setUserDataToUserSheet(userId, userName);
}