# Get Starship name

Ambil model starship apa saja yang pernah digunakan oleh seorang karakter starwars. Contoh, karakter dengan id = 1 adalah "Luke Skywalker" pernah menggunakan starship "T-65 X-wing" dan "Lambda-class
T-4a shuttle".
Keluarkan model starship tersebut dalam bentuk array of string.

Referensi:
* https://swapi.dev/documentation#people
* https://swapi.dev/documentation#starships

```
Input: 1 //Karakter id
Output: ["T-65 X-wing", "Lambda-class T-4a shuttle"]
```
Gunakan async/await untuk menyelesaikan tugas ini.

## Langkah Kerja 
- Ambil List Startship dari API => URL Startships
- Dapatkan Starshipname dari API