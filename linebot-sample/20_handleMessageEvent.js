/**
* メッセージイベントを処理する関数
* 
* @param {Object} event - LINEプラットフォームから受け取ったメッセージイベントオブジェクト
*/
function handleMessageEvent(event) {

    const messageText = event.message.text;
    const replyToken = event.replyToken;
  
    if(messageText === '作業を記録') { sendSagyokirokuButton(replyToken) };
  }