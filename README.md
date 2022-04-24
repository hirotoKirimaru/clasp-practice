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