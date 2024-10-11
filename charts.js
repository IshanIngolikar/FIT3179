var vg_1 = "vega/proportional.vg.json";
vegaEmbed("#map", vg_1, {"actions": false}).then(function(result) {
}).catch(console.error);

var vg_2 = "vega/choropleth.vg.json";
vegaEmbed("#bedperperson", vg_2, {"actions": false}).then(function(result) {
}).catch(console.error);

var vg_3 = "vega/pie.vg.json";
vegaEmbed("#sectoranalysis", vg_3, {"actions": false}).then(function(result) {
}).catch(console.error);
