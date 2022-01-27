# Express Animal List

Ein Server mit mehreren GET-Routen.
Die Routen geben alle JSON Daten zurück.

### Install
```
npm install
```

### Start
```
node src/index.js
```

## Routen
* `GET /animals` -> Liste aller Tiere
* `GET /animals/color/:color` -> Liste der Tier mit einer Farbe
* `GET /animals/kind/:kind` -> Liste der Tier von einer Art
* `GET /animals/random` -> Ein zufälliges Tier

## Aufgabe
* Füge die Routen in die src/index.js hinzu.
* Die "Controller-Methoden" sollen in die Datei animal.controller.js
* Die Daten sind in der Datei database.js. Es sollen keine eigenen Datein hinzugefügt werden.