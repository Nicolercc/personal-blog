import React, { useState } from "react";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-gray-800 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-white text-xl">MyLogo</div>
				<div className="relative">
					<button
						className="text-white px-4 py-2 bg-gray-700 rounded"
						onClick={toggleDropdown}
					>
						Menu
					</button>
					{/* Dropdown menu */}
					{isOpen && (
						<div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-20">
							<a
								href="#"
								className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
							>
								Home
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
							>
								About
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
							>
								Blog
							</a>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
