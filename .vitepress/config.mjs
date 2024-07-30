import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Boom.Lit",
	base: "/boom.lit",
	description: "Home Cloud Lit ver.",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [{ text: "安装", link: "/install/pve" }],

		sidebar: [],

		socialLinks: [
			{ icon: "github", link: "https://github.com/charlzyx/boom.lit" },
		],
	},
});
