module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          50: "#7271d6",
          100: "#ae75eb",
        },
        border: {
          50: "#E5DDFB",
        },
        text: {
          50: "#4e4bcf",
          100: "#9a58e0",
        },
      },
    },
  },
  plugins: [],
};
