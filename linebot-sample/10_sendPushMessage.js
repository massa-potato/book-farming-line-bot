/**
* LINEユーザーにメッセージをプッシュ送信する関数
* 
* @param {string} userId - メッセージ送信先のLINEユーザーID
* @param {Array} messages - 送信するメッセージオブジェクトの配列
*/
function sendPushMessage(userId, messages) {

    const url = 'https://api.line.me/v2/bot/message/push';
    const method = 'POST';
  
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + TOKEN
    };
  
    const body = {
      to: userId,
      messages: messages,
      notificationDisabled: true
    };
  
    const params = {
      method: method,
      headers: headers,
      payload: JSON.stringify(body)
    };
  
    UrlFetchApp.fetch(url, params);
  }
  
  
  /**
  * sendPushMessage()のテスト用関数
  */
  function test_sendPushMessage() {
  
    const userId = USER_ID;
    const messages =  [{ type: 'text', text: 'わんわん' }];
  
    sendPushMessage(userId, messages);
  }