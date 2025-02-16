module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        },
        extend: {
        colors: {
            primary: '#fd5545',
            secondary: '#000000',
            gray: '#eeeeee',
            'gray-darker': '#e0e0e0',
            'gray-100': '#f8f8f8',
            'gray-dark': '#c3c3c3',
            'gray-light': '#f5f5f5',
        },
        },
    },
    plugins: [require('@tailwindcss/forms')], // eslint-disable-line
}
