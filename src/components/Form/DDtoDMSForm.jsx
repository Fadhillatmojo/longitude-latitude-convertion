import React, {useState} from "react";

const DDtoDMSForm = () => {
	const [latitudeDD, setLatitudeDD] = useState("");
	const [longitudeDD, setLongitudeDD] = useState("");
	const [latitudeDMS, setLatitudeDMS] = useState({
		degree: "",
		minutes: "",
		seconds: "",
	});
	const [longitudeDMS, setLongitudeDMS] = useState({
		degree: "",
		minutes: "",
		seconds: "",
	});

	const handleInputChange = (e, coord) => {
		const value = e.target.value;
		if (coord === "latitude") {
			setLatitudeDD(value);
		} else {
			setLongitudeDD(value);
		}
	};

	const convertDDtoDMS = () => {
		const convert = (decimal) => {
			const degree = Math.floor(decimal);
			const minutes = Math.floor((decimal - degree) * 60);
			const seconds = (((decimal - degree) * 60 - minutes) * 60).toFixed(
				2
			);
			return { degree, minutes, seconds };
		};

		setLatitudeDMS(convert(parseFloat(latitudeDD)));
		setLongitudeDMS(convert(parseFloat(longitudeDD)));
	};

	return (
		<div className="flex flex-col justify-center items-center space-y-5 w-full">
			<h1 className="text-xl font-bold mb-4">
				Convert coordinate DD to DMS
			</h1>

			{/* Latitude */}
			<div className="mb-4 w-full">
				<label className="block text-gray-700">Latitude (DD)</label>
				<input
					type="number"
					step="any"
					placeholder="Enter Decimal Degrees"
					value={latitudeDD}
					onChange={(e) => handleInputChange(e, "latitude")}
					className="border p-2 rounded w-full"
				/>
			</div>

			{/* Longitude */}
			<div className="mb-4 w-full">
				<label className="block text-gray-700">Longitude (DD)</label>
				<input
					type="number"
					step="any"
					placeholder="Enter Decimal Degrees"
					value={longitudeDD}
					onChange={(e) => handleInputChange(e, "longitude")}
					className="border p-2 rounded w-full"
				/>
			</div>

			{/* Convert Button */}
			<button
				onClick={convertDDtoDMS}
				className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mb-4"
			>
				Convert
			</button>

			{/* Converted Coordinates */}
			<div className="mb-4">
				<p>
					<strong>Latitude (DMS):</strong> {latitudeDMS.degree}°{" "}
					{latitudeDMS.minutes}' {latitudeDMS.seconds}''N
				</p>
				<p>
					<strong>Longitude (DMS):</strong> {longitudeDMS.degree}°{" "}
					{longitudeDMS.minutes}' {longitudeDMS.seconds}''E
				</p>
			</div>

			{/* Add to Maps Button */}
			<button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
				Add to Maps
			</button>
		</div>
	);
};

export default DDtoDMSForm;
