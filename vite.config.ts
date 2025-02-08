import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	base: '',
	plugins: [react()],
	server: {
		open: true,
		port: 3000,
		host: 'localhost'
	},
	build: {
		outDir: 'build',
		emptyOutDir: true,
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true
		}
	}
});
