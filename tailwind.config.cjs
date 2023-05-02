/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [

		"./src/**/*.astro",
	],

	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					primary: "#3D5A80",
					secondary: "#C7485F",
					accent: "#C79D20",
					neutral: "#3D4451",
					"base-100": "#E0FBFC",
					info: "#06b6d4",
					success: "#22c55e",
					warning: "#facc15",
					error: "#dc2626",

				},
			},
			{
				dark: {
					primary: "#3D5A80",
					secondary: "#C7485F",
					accent: "#C79D20",
					neutral: "#3D4451",
					"base-100": "#101019",
					info: "#a5f3fc",
					success: "#bef264",
					warning: "#fde047",
					error: "#f87171",

				},
			},
		],
	},
};
