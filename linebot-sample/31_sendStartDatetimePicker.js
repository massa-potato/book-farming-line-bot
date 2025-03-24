/**
* 作業開始時間を選択する日時ピッカーを送信する関数
* 
* @param {string} replyToken - リプライトークン
*/
function sendStartDatetimePicker(replyToken) {

    const actions = [
      {
        type: 'datetimepicker',
        label: '入力',
        data: 'chooseStartTime',
        mode: 'datetime'
      }
    ];
  
    const messages = [
      {
        type: 'template',
        altText: 'スタート時間を入力',
        template: {
          type: 'buttons',
          text: 'スタート時間を入力してください。',
          actions: actions
        }
      }
    ];
  
    sendReplyMessage(replyToken, messages);
  }