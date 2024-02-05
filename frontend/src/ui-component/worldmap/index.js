import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map"
import MainCard from 'ui-component/cards/MainCard';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

function Worldmap({countries, selectedCountries, addCountry}) {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");


    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
        panX: "translateX",
        panY: "translateY",
        maxZoomLevel: 400})
    );

    var zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
    zoomControl.homeButton.set("visible", true);

    let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          exclude: ["AQ"]
        })
    );

    let validCountries = [];
    for (const country of countries) {

      let color = am5.color('#2196f3');
      if( selectedCountries.indexOf(country.name) >= 0 ) {
        color = am5.color('#673ab7')
      }
      validCountries.push({
        id: country.alpha2code,
        polygonSettings: {
          fill: color
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
        addCountry(ev.target.dataItem.get("id"));
    });
      
    polygonSeries.data.setAll(validCountries);
    return () => {
      root.dispose();
    };
  }, [countries, selectedCountries, addCountry]);

  return (
    <MainCard>
        <div id="chartdiv" style={{ width: "auto", height: "500px" }}></div>
    </MainCard>
  );
}
export default Worldmap;