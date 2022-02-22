// vite.config.js
import { defineConfig } from "vite";
import { getBabelOutputPlugin as babel } from "@rollup/plugin-babel";

export default defineConfig({
	plugins: [
		{
			...babel({
				presets: [
					[
						"@babel/preset-env",
						{
							corejs: 3,
							modules: false,
							useBuiltIns: "usage",
						},
					],
				],
			}),
		},
	],
});
