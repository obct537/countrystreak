import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map"
import MainCard from 'ui-component/cards/MainCard';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

function Worldmap() {
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
        maxZoomLevel: 400,
        componentDidMount: function() {
            console.log("HERE");
        }})
    );

    var zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
    zoomControl.homeButton.set("visible", true);

    let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          exclude: ["AQ"]
        })
    );

    polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color(0x677935)
    });

    polygonSeries.mapPolygons.template.states.create("click", {
        
    })
      
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <MainCard>
        <div id="chartdiv" style={{ width: "1800px", height: "500px" }}></div>
    </MainCard>
  );
}
export default Worldmap;