import fs from 'fs';
import type {Plugin} from 'vite';

export const viteTemplatePlugin: Plugin = ({template}: { template: string }) => {
	const fileContent = fs.readFileSync(template, 'utf-8');
	return {
		name: 'vite-plugin-template',
		transformIndexHtml: {
			enforce: 'pre',
			transform() {
				return fileContent;
			},
		},
	};
};
