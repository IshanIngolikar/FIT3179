// JavaScript code to embed and control the charts

// Function to embed the first chart
function embedFirstChart(selectedState) {
    var vg_1 = "vega/proportional.vg.json";
    vegaEmbed("#map", vg_1, {"actions": false}).then(function(result) {
      // Update the parameter in the chart
      result.view.signal("selectedState", selectedState).run();
    }).catch(console.error);
  }
  
  // Function to embed the second chart
  function embedSecondChart(selectedState) {
    var vg_2 = "vega/choropleth.vg.json";
    vegaEmbed("#bedperperson", vg_2, {"actions": false}).then(function(result) {
      // Update the parameter in the chart
      result.view.signal("selectedState", selectedState).run();
    }).catch(console.error);
  }

  function embedThirdChart(selectedState) {
    var vg_3 = "vega/pie.vg.json";
    vegaEmbed("#sectoranalysis", vg_3, {"actions": false}).then(function(result) {
      // Update the parameter in the chart
      result.view.signal("selectedState", selectedState).run();
    }).catch(console.error);
  }
  
  // Initial embedding with no state selected (null)
  embedFirstChart(null);
  embedSecondChart(null);
  
  // Add event listener to the drop-down
  document.getElementById("state-select").addEventListener("change", function() {
    var selectedState = this.value || null;
  
    // Update both charts with the new selection
    console.log(selectedState)
    embedFirstChart(selectedState);
    embedSecondChart(selectedState);
    embedThirdChart(selectedState)
  });
  
  
