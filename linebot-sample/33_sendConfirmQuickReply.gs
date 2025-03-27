/**
 * 作業記録の確認用クイックリプライを送信する関数
 * 
 * @param {string} replyToken - リプライトークン
 * @param {string} userId - 日報入力者のユーザーID
 */
function sendConfirmQuickReply(replyToken, userId) {

  const tempData = getTempDataFromUserSheet(userId);
  const workTime = calcWorkingTime(start=tempData[3], end=tempData[4]);

  const confirmText= `この日報を登録しますか？

作業機：${tempData[2]}
開始：${Utilities.formatDate(tempData[3], 'JST', 'MM/dd HH:mm')}
終了：${Utilities.formatDate(tempData[4], 'JST', 'MM/dd HH:mm')}
合計時間：${workTime}分`

  const quickReply = {
    items:[
      {
        type: 'action',
        action: {
          type: 'postback',
          label: 'はい',
          data: 'confirm=はい',
          displayText: 'はい'
        }
      },{
        type: 'action',
        action: {
          type: 'postback',
          label: 'いいえ',
          data: 'confirm=いいえ',
          displayText: 'いいえ'
        }
      },
    ]
  }

  const messages = [
    {
      type: 'text',
      text: confirmText,
      quickReply: quickReply
    }
  ]

  sendReplyMessage(replyToken, messages);
}