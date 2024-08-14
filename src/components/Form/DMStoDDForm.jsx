import React, {useState} from "react";

const DMStoDDForm = () => {
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
	const [latitudeDD, setLatitudeDD] = useState("");
	const [longitudeDD, setLongitudeDD] = useState("");

	const handleInputChange = (e, type, coord) => {
		const value = e.target.value;
		if (coord === "latitude") {
			setLatitudeDMS({ ...latitudeDMS, [type]: value });
		} else {
			setLongitudeDMS({ ...longitudeDMS, [type]: value });
		}
	};

	const convertDMStoDD = () => {
		const convert = ({ degree, minutes, seconds }) => {
			return (
				parseFloat(degree) +
				parseFloat(minutes) / 60 +
				parseFloat(seconds) / 3600
			);
		};

		setLatitudeDD(convert(latitudeDMS).toFixed(6));
		setLongitudeDD(convert(longitudeDMS).toFixed(6));
	};

	return (
		<div className="flex flex-col justify-center items-center space-y-5">
			<h1 className="text-xl font-bold mb-4">
				Convert coordinate DMS to DD
			</h1>

			{/* Latitude */}
			<div className="mb-4">
				<label className="block text-gray-700">Latitude</label>
				<div className="flex gap-2">
					<input
						type="number"
						placeholder="Degree"
						value={latitudeDMS.degree}
						onChange={(e) =>
							handleInputChange(e, "degree", "latitude")
						}
						className="border p-2 rounded w-1/3"
					/>
					<input
						type="number"
						placeholder="Minutes"
						value={latitudeDMS.minutes}
						onChange={(e) =>
							handleInputChange(e, "minutes", "latitude")
						}
						className="border p-2 rounded w-1/3"
					/>
					<input
						type="number"
						placeholder="Seconds"
						value={latitudeDMS.seconds}
						onChange={(e) =>
							handleInputChange(e, "seconds", "latitude")
						}
						className="border p-2 rounded w-1/3"
					/>
				</div>
			</div>

			{/* Longitude */}
			<div className="mb-4">
				<label className="block text-gray-700">Longitude</label>
				<div className="flex gap-2">
					<input
						type="number"
						placeholder="Degree"
						value={longitudeDMS.degree}
						onChange={(e) =>
							handleInputChange(e, "degree", "longitude")
						}
						className="border p-2 rounded w-1/3"
					/>
					<input
						type="number"
						placeholder="Minutes"
						value={longitudeDMS.minutes}
						onChange={(e) =>
							handleInputChange(e, "minutes", "longitude")
						}
						className="border p-2 rounded w-1/3"
					/>
					<input
						type="number"
						placeholder="Seconds"
						value={longitudeDMS.seconds}
						onChange={(e) =>
							handleInputChange(e, "seconds", "longitude")
						}
						className="border p-2 rounded w-1/3"
					/>
				</div>
			</div>

			{/* Convert Button */}
			<button
				onClick={convertDMStoDD}
				className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mb-4"
			>
				Convert
			</button>

			{/* Converted Coordinates */}
			<div className="mb-4">
				<p>
					<strong>Latitude (DD):</strong> {latitudeDD}
				</p>
				<p>
					<strong>Longitude (DD):</strong> {longitudeDD}
				</p>
			</div>

			{/* Add to Maps Button */}
			<button className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
				Add to Maps
			</button>
		</div>
	);
};

export default DMStoDDForm;
