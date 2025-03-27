/**
* 作業終了時間を選択する日時ピッカーを送信する関数
* 
* @param {string} replyToken - リプライトークン
*/
function sendEndDatetimePicker(replyToken) {

  const actions = [
    {
      type: 'datetimepicker',
      label: '入力',
      data: 'chooseEndTime',
      mode: 'datetime'
    }
  ];

  const messages = [
    {
      type: 'template',
      altText: '作業を終えた時間を入力',
      template: {
        type: 'buttons',
        text: '作業を終えた時間を入力してください。',
        actions: actions
      }
    }
  ];

  sendReplyMessage(replyToken, messages);
}