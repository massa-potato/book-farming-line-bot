/**
* LINEからのメッセージに応答する関数
* 
* @param {string} replyToken - リプライトークン
* @param {Array} messages - 送信するメッセージオブジェクトの配列
*/
function sendReplyMessage(replyToken, messages) {

    const url = 'https://api.line.me/v2/bot/message/reply';
    const method = 'POST';
  
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + TOKEN
    };
  
    const body = {
      replyToken: replyToken,
      messages: messages
    };
  
    const params = {
      method: method,
      headers: headers,
      payload: JSON.stringify(body)
    };
  
    UrlFetchApp.fetch(url, params);
  }
  
  
  /**
   * sendReplyMessage()のテスト用doPost関数
   * ※運用時はコメントアウト
   */
  // function doPost(e) {
  
  //   const json = e.postData.contents;
  //   const obj = JSON.parse(json);
  //   const event = obj.events[0];
  
  //   const replyToken = event.replyToken;
  //   const messages = [{type: 'text', text: 'にゃー'}];
  
  //   sendReplyMessage(replyToken, messages);
  // }