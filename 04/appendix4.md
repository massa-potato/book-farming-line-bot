## イベント情報とイベントオブジェクト

### イベント情報の構造

```json
{
    "destination": "xxxx",
    "events": [
        {
            // イベントオブジェクト（内容は省略）
        }
    ]
}
```

### メッセージイベントのオブジェクト例

```json
{
  "type": "message",
  "message": {
    "type": "text",
    "id": "xxxx",
    "quoteToken": "xxxxxxxx",
    "text": "テキストメッセージ送信"
  },
  "webhookEventId": "xxxx",
  "deliveryContext": {
    "isRedelivery": false
  },
  "timestamp": 1741811257751,
  "source": {
    "type": "user",
    "userId": "xxxx"
  },
  "replyToken": "xxxx",
  "mode": "active"
}
```

### フォローイベントのオブジェクト例

```json
{
  "type": "follow",
  "follow": {
    "isUnblocked": true
  },
  "webhookEventId": "xxxx",
  "deliveryContext": {
    "isRedelivery": false
  },
  "timestamp": 1741900346384,
  "source": {
     "type": "user",
    "userId": "xxxx"
  },
  "replyToken": "xxxx",
  "mode": "active"
}
```

### ポストバックイベントのオブジェクト例

```json
{
  "type": "postback",
  "postback": {
    "data": "ポストバックのデータ"
  },
  "webhookEventId": "xxxx",
  "deliveryContext": {
    "isRedelivery": false
  },
  "timestamp": 1741911654058,
  "source": {
    "type": "user",
    "userId": "xxxx"
  },
  "replyToken": "xxxx",
  "mode": "active"
}
```
