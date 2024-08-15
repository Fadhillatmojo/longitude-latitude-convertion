// import React, { useState } from "react";
// import MapComponent from "./components/MapComponent.jsx";
// import FloatingButton from "./components/FloatingButton.jsx";
// import DDtoDMS from "./components/Form/DDtoDMSForm.jsx";
// import DMStoDD from "./components/Form/DMStoDDForm.jsx";
// import { FiX } from "react-icons/fi";

// const App = () => {
// 	const [isPopupOpen, setIsPopupOpen] = useState(false);
// 	const [activeTab, setActiveTab] = useState("DMStoDD");
// 	const [mapInstance, setMapInstance] = useState(null);

// 	const togglePopup = () => {
// 		setIsPopupOpen(!isPopupOpen);
// 	};

// 	const handleAddToMap = (coords) => {
// 		if (mapInstance) {
// 			mapInstance.addMarker(coords);
// 			togglePopup();
// 		}
// 	};

// 	return (
// 		<div>
// 			<MapComponent  />
// 			<FloatingButton onClick={togglePopup} />
// 			{isPopupOpen && (
// 				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
// 					<div className="relative bg-white p-5 rounded-lg shadow-lg w-1/3">
// 						{/* Close Button */}
// 						<button
// 							onClick={togglePopup}
// 							className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
// 						>
// 							<FiX size={24} />
// 						</button>
// 						<div className="flex mb-4">
// 							<button
// 								className={`flex-1 p-2 ${
// 									activeTab === "DMStoDD"
// 										? "border-b-2 border-blue-500"
// 										: ""
// 								}`}
// 								onClick={() => setActiveTab("DMStoDD")}
// 							>
// 								DMS to DD
// 							</button>
// 							<button
// 								className={`flex-1 p-2 ${
// 									activeTab === "DDtoDMS"
// 										? "border-b-2 border-blue-500"
// 										: ""
// 								}`}
// 								onClick={() => setActiveTab("DDtoDMS")}
// 							>
// 								DD to DMS
// 							</button>
// 						</div>
// 						<div>
// 							{activeTab === "DMStoDD" ? (
// 								<DMStoDD onAddToMap={handleAddToMap} />
// 							) : (
// 								<DDtoDMS onAddToMap={handleAddToMap} />
// 							)}
// 						</div>
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default App;

import React, { useState } from "react";
import FloatingButton from "./components/FloatingButton.jsx";
import DMStoDD from "./components/Form/DMStoDDForm.jsx";
import DDtoDMS from "./components/Form/DDtoDMSForm.jsx";
import MapComponent from "./components/MapComponent.jsx";
import { FiX } from "react-icons/fi";

const App = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("DMStoDD");
	const [coordinates, setCoordinates] = useState(null);

	const togglePopup = () => {
		setIsPopupOpen(!isPopupOpen);
	};

	const handleAddToMap = (lat, lon) => {
		setCoordinates([lon, lat]);
		togglePopup();
	};

	return (
		<div className="App">
			<MapComponent coordinates={coordinates} />

			<FloatingButton onClick={togglePopup} />
			{isPopupOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="relative bg-white p-5 rounded-lg shadow-lg w-1/3">
						{/* Close Button */}
						<button
							onClick={togglePopup}
							className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
						>
							<FiX size={24} />
						</button>
						<div className="flex mb-4">
							<button
								className={`flex-1 p-2 ${
									activeTab === "DMStoDD"
										? "border-b-2 border-blue-500"
										: ""
								}`}
								onClick={() => setActiveTab("DMStoDD")}
							>
								DMS to DD
							</button>
							<button
								className={`flex-1 p-2 ${
									activeTab === "DDtoDMS"
										? "border-b-2 border-blue-500"
										: ""
								}`}
								onClick={() => setActiveTab("DDtoDMS")}
							>
								DD to DMS
							</button>
						</div>
						<div>
							{activeTab === "DMStoDD" ? (
								<DMStoDD onAddToMap={handleAddToMap} />
							) : (
								<DDtoDMS onAddToMap={handleAddToMap} />
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
