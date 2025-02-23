import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
	base: '',
	plugins: [
		react(),
		VitePWA({
			injectRegister: null, // Manually register the service worker
			manifest: false,
			strategies: 'injectManifest',
			srcDir: 'src',
			filename: 'service-worker.ts',
			includeAssets: ['manifest.json', 'logos/*.{png,ico,svg,jpg,gif,webp}', '2338-logo.png']
		})
	],
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
