# Claspを素振りする


# 公式
https://github.com/google/clasp



```
npm install -g @google/clasp
```

メモ：
https://docs.google.com/spreadsheets/d/1ria9rddhghlbZ69UL2U07j_HjSYzBMXrpq1h16Pz8Ys/edit#gid=0


# Docker環境でのログイン
```bash
# コンテナへのログイン
docker-compose run clasp bash

cd /usr/src/app
# Googleへのログイン
clasp login --no-localhost
# npm install
npm install
# KPIシート作成
clasp create --title "テスト" --type sheets --rootDir ./src
# .clasp.jsonの移動
mv ./src/.clasp.json ./.clasp.json
clasp pull
clasp push
```

# ファイルダウンロード
https://www.pnkts.net/2019/12/18/gas-download-csv


# デプロイ先のURLが知りたい

```bash
clasp open
```

# スプレッドシートに飛びたい

Clasp自体には「create」時に紐づけを指定できるが、create後は特に紐づけることはコマンドではできなさそう。

```bash
export url_root=https://docs.google.com/spreadsheets/d/
echo ${url_root}
cat .clasp.json | jq ".parentId[]" | sed 's/"//g' | echo ${url_root}$(cat)

# catで設定値を読み込む
# jqでスプレッドシートを読み込む
# sedで余計なダブルクォーテーションを削除する
# 出力する
```


# Q&A


```
# ログインすればいい？
ENOENT: no such file or directory, open '/root/.clasprc.json'
```