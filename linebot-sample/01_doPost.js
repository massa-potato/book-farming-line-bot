/**
* LINE Messaging APIからのWebhookを処理する関数
* 
* @param {Object} e - POSTリクエストのイベントオブジェクト
*/
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const event = data.events[0];

  outputLog(event);

  if(event.type === 'message') { handleMessageEvent(event) };
  if(event.type === 'postback') { handlePostbackEvent(event) };
  if(event.type === 'follow') { handleFollowEvent(event)};
}