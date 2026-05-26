import os
import re
import sys
import urllib.request
import json

SPREADSHEET_ID = os.environ["SPREADSHEET_ID"]
API_KEY        = os.environ["SHEETS_API_KEY"]
SHEET_RANGE    = os.environ.get("SHEET_RANGE", "Sheet1!A:A")  # 名前の列
HTML_PATH      = "index.html"

url = (
    f"https://sheets.googleapis.com/v4/spreadsheets/{SPREADSHEET_ID}"
    f"/values/{SHEET_RANGE}?key={API_KEY}"
)

with urllib.request.urlopen(url) as res:
    data = json.loads(res.read())

rows = data.get("values", [])
# ヘッダー行を除いた空でない行数 = 部員数
count = sum(1 for row in rows[1:] if row and row[0].strip())

print(f"部員数: {count} 人")

with open(HTML_PATH, encoding="utf-8") as f:
    html = f.read()

updated = re.sub(
    r'(<div class="stat-num">)\d+(<span class="unit">members</span></div>)',
    rf'\g<1>{count}\2',
    html
)

if html == updated:
    print("変更なし（人数が同じ）")
    sys.exit(0)

with open(HTML_PATH, "w", encoding="utf-8") as f:
    f.write(updated)

print(f"index.html を更新しました: {count} members")
