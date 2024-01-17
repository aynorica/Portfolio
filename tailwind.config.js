/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			backgroundImage: {
				"custom-gradient":
					"linear-gradient(to right, #111f2e, #34abb6)",
				"custom-gradient-2":
					"linear-gradient(135deg, #213b64, #16655c)",
			},
			backgroundColor: {
				primary: "#081d37",
			},
			fontFamily: {
				tektur: ["tektur", "sans-serif"],
				orbitron: ["Orbitron", "sans-serif"],
				"kanit-italic": ["Kanit", "sans-serif"],
			},
		},
	},
	plugins: [],
};
