import React from "react";
import { FiSettings } from "react-icons/fi";

const FloatingButton = ({ onClick }) => {
	return (
		<div>
			<button
				onClick={onClick}
				className="fixed bottom-5 right-5 bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded-full shadow-lg"
			>
				<FiSettings size={24} />
			</button>
		</div>
	);
};

export default FloatingButton;
