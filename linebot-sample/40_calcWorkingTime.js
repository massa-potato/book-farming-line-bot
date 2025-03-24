/**
* 作業時間を計算する関数
* 
* @param {Date} start - 作業開始時間
* @param {Date} end - 作業終了時間
* @return {number} 作業時間（分）、終了時間が開始時間より前の場合は0
*/
function calcWorkingTime(start, end) {

    const diff = end - start;
    if(diff <= 0) return 0;
  
    const workingMinutes = Math.floor(diff / (60*1000));
    return workingMinutes;
  }