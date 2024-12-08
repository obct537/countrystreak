import { useEffect, useContext } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map"
import MainCard from 'components/cards/MainCard';


import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

import { CountryContext } from 'components/countries/context';

function Worldmap() {

  const countryContext = useContext(CountryContext);

  useEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let coords = countryContext.mapCoordinates;

    let chartSettings = {
      projection: am5map.geoMercator(),
      panX: "translateX",
      panY: "translateY",
      maxZoomLevel: 400
    };

    let chart = root.container.children.push(
      am5map.MapChart.new(root, chartSettings)
    );

    var zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
    zoomControl.homeButton.set("visible", true);

    chart.hide(0);

    let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow
        })
    );
    
    let validCountries = [];
    for ( const country of countryContext.validCountries ) {

      let color = am5.color('#2196f3');

      if( country.leftOrRight == 'L' ) {
        color = am5.color('#673ab7')
      }
      let pattern = null;

      if( countryContext.selectedCountries.indexOf(country.alpha2code) >= 0 ) {
        pattern = am5.LinePattern.new(root, {
          fill: color,
          color: am5.color('#fff'),
          rotation: 0,
          gap: 2,
          width: 200,
          height: 1000
        });
      }
      validCountries.push({
        id: country.alpha2code,
        polygonSettings: {
          fill: color,
          fillPattern: pattern
        }
      })
    }

    polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true,
        fill: am5.color("#ddd"),
        templateField: 'polygonSettings'
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color('#90caf9')
    });

    polygonSeries.mapPolygons.template.events.on("click", function(ev) {
      let id = ev.target.dataItem.get("id");
      if( id in countryContext.countryNameMapping ) {
        
        let newCoords = [{
          x: chart._settings.translateX,
          y: chart._settings.translateY
        }, chart._settings.zoomLevel];

        countryContext.setCoordinates(newCoords);
        if( countryContext.selectedCountries.indexOf(id) >= 0 ) {
          countryContext.removeSelectedCountry(id);
        }else{
          countryContext.addSelectedCountry(id);
        }
      }
    });

    polygonSeries.events.on("datavalidated", function() {
      if( countryContext.mapCoordinates) {
        chart.set('translateX', countryContext.mapCoordinates[0]['x']);
        chart.set('translateY', countryContext.mapCoordinates[0]['y']);
        chart.set('zoomLevel', countryContext.mapCoordinates[1]);
      }

      chart.appear(0);
    });
      
    polygonSeries.data.setAll(validCountries);
    return () => {
      root.dispose();
    };
  });

  return (
  <MainCard>
    <div id="chartdiv" style={{ width: "auto", height: "500px" }}></div>
  </MainCard>
  );
}
export default Worldmap;