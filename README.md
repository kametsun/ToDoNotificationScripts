# ToDoNotificationScripts
NotionのデータベースからToDoリストをLINEに通知するbotです。

## How to use
### 内部インテグレーションシークレットトークンを発行する
[こちら](https://www.notion.so/profile/integrations/)にアクセスし、インテグレーションを作成し、トークンを発行する。

### LINE Botの作成
1. [LNE Developers](https://developers.line.biz/)から作成し、チャネルアクセストークンを発行する。
2. Webhook URLにGASで作成し、デプロイしたURLを貼り付け、接続する。
3. LINEから送信された際に、格納されている自分のUserIdを確認しておく。

### GASでの設定
- 内部インテグレーションシークレットトークン
- チャンネルアクセストークン
- LINEのユーザID
- NotionのデータベースID
以上の値をGASの設定からスクリプトプロパティにセットしておく。
