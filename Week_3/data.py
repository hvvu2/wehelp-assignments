import json
import urllib.request as req

url = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
with req.urlopen(url) as response:
    data = json.load(response)

data_csv = open("data.csv", mode="w", encoding="utf-8")

atnList = data["result"]["results"]
for i in atnList:
    stitle = i["stitle"]
    address = i["address"]
    longitude = i["longitude"]
    latitude = i["latitude"]
    file = "https:" + i["file"].split("https:")[1]
    data_csv.write(f"{stitle},{address[5:8]},{longitude},{latitude},{file}\n")

data_csv.close()
