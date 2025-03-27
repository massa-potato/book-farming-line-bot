/**
* 作業記録データをスプレッドシートに登録する関数
* 「作業記録シート」に新しい行としてデータを追加（作業時間と現在のタイムスタンプを含む）
* 
* @param {Array} data - 登録する作業記録データの配列
*/
function setDataToKirokuSheet(data) {

  const kirokuSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('作業記録');

  data.pop();
  const workingTime = calcWorkingTime(data[3], data[4]);
  const timestamp = new Date();
  data.push(workingTime, timestamp)
  
  kirokuSheet.appendRow(data);  
}