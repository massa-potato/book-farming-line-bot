/**
* ポストバックイベントを処理する関数
* ポストバックデータの種類に応じて以下の処理を実行:
*  - 作業機選択後の処理
*  - 開始時間入力後の処理
*  - 終了時間入力後の処理
*  - 確認選択後の処理（作業記録の登録または再入力）
* 
* @param {Object} event - LINEプラットフォームから受け取ったポストバックイベントオブジェクト
*/
function handlePostbackEvent(event) {

    const replyToken = event.replyToken;
    const userId = event.source.userId;
  
    const [category, param] = event.postback.data.split('=');
  
    // ①作業機を選択した後の処理
    if(category === 'tractor') {
  
      setTempDataToUserSheet(userId, param, 3);
      sendStartDatetimePicker(replyToken);
      return;
    }
  
    // ②スタート時間を入力した後の処理
    if(category === 'chooseStartTime') {
  
      setTempDataToUserSheet(userId, event.postback.params.datetime, 4);
      sendEndDatetimePicker(replyToken);
      return;
    }
  
    // ③終了時間を入力した後の処理
    if(category === 'chooseEndTime') {
  
      setTempDataToUserSheet(userId, event.postback.params.datetime, 5);
      sendConfirmQuickReply(replyToken, userId);
      return;
    }
  
    // ④確認クイックリプライを選択した後の処理
    if(category === 'confirm') {
      let messages;
  
      if(param === 'はい') {
        const tempData = getTempDataFromUserSheet(userId);
        setDataToKirokuSheet(tempData);
  
        messages = [{type:'text', text:'登録しました！'}];
      }
  
      if(param === 'いいえ') {
        messages = [{type:'text', text:'もう一度入力してください。'}];
      }
  
      sendReplyMessage(replyToken, messages);
    }
  }