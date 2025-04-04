/**
* ユーザー名を取得する関数
*
* @param {string} userId - ユーザー名を取得するLINEユーザーID
* @return {string} ユーザー名
*/
function getUserName(userId) {

  const url = 'https://api.line.me/v2/bot/profile/' + userId;
  const method = 'GET';

  const headers = {
    Authorization: 'Bearer ' + TOKEN
  };

  const params = {
    method: method,
    headers: headers
  };

  const res = UrlFetchApp.fetch(url, params);
  const json = res.getContentText()
  const profile = JSON.parse(json);
  const userName = profile.displayName;

  return userName;
}
  
  
/**
* getUserName()のテスト用関数
*/
function test_getUserName() {
  const userId = '【ユーザーID】';
  const userName = getUserName(userId);
  
  console.log(userName);
}