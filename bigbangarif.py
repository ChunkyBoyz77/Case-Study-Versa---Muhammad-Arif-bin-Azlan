import json

bigbang = []

for i in range (1,101):
    if i % 3 == 0 and i % 5 == 0:
        bigbang.append("BIGBANG")
    elif i % 3 == 0:
        bigbang.append("BIG")
    elif i % 5 == 0:
        bigbang.append("BANG")
    else:
        bigbang.append(str(i))

print(bigbang)

with open("output.json", "w") as f:
    json.dump(bigbang, f)
    