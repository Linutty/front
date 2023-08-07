# Finishing solutions

Sveiki! Šiame dokumente pateikiamos instrukcijos, kaip parsisiųsti ir pasieisti projektą.

## Prieš Pradėdami

- Turėkite MongoDB duomenų bazės serverį veikiančią lokalioje arba jūsų pasirinktoje aplinkoje.
- Sukurkite `.env` failą pagal šablono aprašymą žemiau.

## Parsisiuntimas ir paleidimas

1. Atsisiųskite back-end projektą:
   cd C:/node.js
   git clone https:...............
2. Naviguokite į projekto aplanką naudodami terminalą:
   cd back
3. Įdiekite projekto priklausomybes naudodami npm arba yarn:
   npm install

4. Sukurkite `.env` failą projekto šakniniame aplanke ir nurodykite reikiamus kintamuosius:

PORT=3001
DBURL = "jūsų_mongodb_uri"

5. Paleiskite backend serverį:
   nodemon server.js

Jei viskas sėkmingai, backend serveris turėtų pradėti veikti ant porto 3001.

## API maršrutai

Šis projektas turi API maršrutus, kurie gali būti pasiekti per šiuos adresus:

- `GET /projects` - Gauti projektų sąrašą
- `PUT /future` - Pridėti projektą į sąrašą

## Pastaba

Užtikrinkite, kad turite Node.js ir npm/yarn įdiegtus savo kompiuteryje.
