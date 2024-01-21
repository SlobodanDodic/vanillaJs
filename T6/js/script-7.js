// Zadatak 7:

// Uz pomoć forEach-a proci kroz sve objekte i u konzoli ispisati:
// - svojstvo name (naziv grada) i svojstvo temp (svojstva main) umanjeno za 273,15.

// ForEach-u proslediti funkciju kao callback (neka prima dva parametra: objekat i index):
// - prvi parametar callback funkcije će biti trenutni objekat for petlje.
// - U callback funkciji pristupiti svojstvima trenutno objekta i logovati ih u konzolu.

jsonString =
  '[{"coord":{"lon":19.84,"lat":45.25},"sys":{"type":1,"id":7030,"message":0.0041,"country":"RS","sunrise":1548051128,"sunset":1548084728},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50n"},{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09n"}],"main":{"temp":273.67,"pressure":1021,"humidity":95,"temp_min":273.15,"temp_max":274.15},"visibility":5000,"wind":{"speed":1.5,"deg":330},"clouds":{"all":90},"dt":1548051660,"id":3194360,"name":"Novi Sad"},{"coord":{"lon":20.64,"lat":44.87},"sys":{"type":1,"id":7028,"message":0.0044,"country":"RS","sunrise":1548050868,"sunset":1548084603},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09n"},{"id":701,"main":"Mist","description":"mist","icon":"50n"}],"main":{"temp":273.47,"pressure":1021,"humidity":93,"temp_min":273.15,"temp_max":274.15},"visibility":5000,"wind":{"speed":2.1,"deg":350},"clouds":{"all":90},"dt":1548051660,"id":787237,"name":"Pancevo"},{"coord":{"lon":19.61,"lat":44.98},"sys":{"type":1,"id":7030,"message":0.0389,"country":"RS","sunrise":1548051135,"sunset":1548084831},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50n"},{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09n"}],"main":{"temp":273.66,"pressure":1021,"humidity":95,"temp_min":273.15,"temp_max":274.15},"visibility":5000,"wind":{"speed":1.5,"deg":330},"clouds":{"all":90},"dt":1548051660,"id":3190103,"name":"Sremska Mitrovica"},{"coord":{"lon":21.9,"lat":43.32},"sys":{"type":1,"id":7031,"message":0.0036,"country":"RS","sunrise":1548050298,"sunset":1548084568},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"main":{"temp":274.15,"pressure":1020,"humidity":100,"temp_min":274.15,"temp_max":274.15},"visibility":8000,"wind":{"speed":4.6,"deg":320},"clouds":{"all":90},"dt":1548051660,"id":787657,"name":"Nis"},{"coord":{"lon":96.16,"lat":16.81},"sys":{"type":1,"id":9322,"message":0.008,"country":"MM","sunrise":1548029279,"sunset":1548069920},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"main":{"temp":304.15,"pressure":1014,"humidity":43,"temp_min":304.15,"temp_max":304.15},"visibility":8000,"wind":{"speed":2.6,"deg":310},"clouds":{"all":0},"dt":1548051660,"id":1298824,"name":"Rangoon"},{"coord":{"lon":113.96,"lat":62.54},"sys":{"type":0,"id":0,"message":0.0062,"country":"RU","sunrise":1548033716,"sunset":1548056970},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"main":{"temp":258.231,"pressure":975.42,"humidity":81,"temp_min":258.231,"temp_max":258.231,"sea_level":1020.33,"grnd_level":975.42},"wind":{"speed":1.46,"deg":234.505},"clouds":{"all":68},"dt":1548051660,"id":2019951,"name":"Mirnyy"}]';
niz = JSON.parse(jsonString);

niz.forEach((e) => console.log(`${e.name} ${(e.main.temp - 273.15).toFixed(2)}`));

niz.forEach(function (grad) {
  console.log(`${grad.name} ${(grad.main.temp - 273.15).toFixed(2)}`);
});
