/**
* ユーザーのプロフィール情報を取得する関数
*
* @param {string} userId - プロフィール情報を取得するLINEユーザーID
* @return {Object} ユーザープロフィール情報（表示名、画像URL等）を含むオブジェクト
*/
function getUserProfile(userId) {

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
  
    return profile;
  }
  
  
  /**
  * getUserProfil()のテスト用関数
  */
  function test_getUserProfile() {
    const userId = 'U4e99427124639a7e9b3a1e739e9ebeaa';
    const profile = getUserProfile(userId);
    
    console.log(profile);
  }