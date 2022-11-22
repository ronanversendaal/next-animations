/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.white'),
						a: {
							color: theme('colors.white'),
						},
						strong: {
							color: theme('colors.teal.500'),
						},
						h1: {
							color: theme('colors.white'),
						},
						h2: {
							color: theme('colors.white'),
						},
						h3: {
							color: theme('colors.white'),
						},
					},
				},
			})
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
	variants: {
		display: ['group-hover', 'group-focus']
	}
}
