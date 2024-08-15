import React, { useState, useEffect } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Style, Icon } from "ol/style.js";

function MapComponent({ coordinates }) {
	const [map, setMap] = useState(null);
	const [vectorSource, setVectorSource] = useState(new VectorSource());

	useEffect(() => {
		const osmLayer = new TileLayer({
			preload: Infinity,
			source: new OSM(),
		});

		const initialMap = new Map({
			target: "map",
			layers: [
				osmLayer,
				new VectorLayer({
					source: vectorSource,
				}),
			],
			view: new View({
				center: [0, 0],
				zoom: 0,
			}),
		});

		setMap(initialMap);

		return () => initialMap.setTarget(null);
	}, [vectorSource]);

	useEffect(() => {
		if (map && coordinates) {
			const [lon, lat] = coordinates;
			const transformedCoordinates = fromLonLat([lon, lat]);

			// Clear previous markers
			vectorSource.clear();

			// Create a new marker with default style
			const marker = new Feature({
				geometry: new Point(transformedCoordinates),
			});

			// Apply a style to the marker
			marker.setStyle(
				new Style({
					image: new Icon({
						src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg",
						scale: 1,
					}),
				})
			);

			// Add the new marker to the vector source
			vectorSource.addFeature(marker);

			// Center the map to the marker
			map.getView().setCenter(transformedCoordinates);
			map.getView().setZoom(12);
		}
	}, [map, coordinates, vectorSource]);


	return (
		<div
			style={{ height: "100vh", width: "100%" }}
			id="map"
			className="map-container"
		/>
	);
}

export default MapComponent;
