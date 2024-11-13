/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				dark: 'var(--dark)',
				light: 'var(--light)',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				accent: 'var(--accent)',
			},
			boxShadow: {
				custom: '0px 0px 50px 0px rgba(255, 255, 255, 0.5)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
