import fs from 'fs';
import type {Plugin} from 'vite';

export default ({template}: { template: string }): Plugin => {
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
