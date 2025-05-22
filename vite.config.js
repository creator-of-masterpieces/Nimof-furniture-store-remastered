import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',           // корень проекта (если переместил index.html внутрь src/)
    build: {
        outDir: '../dist',   // куда складывать сборку
        emptyOutDir: true,   // очищать папку перед сборкой
    },
    server: {
        port: 3000,          // порт dev-сервера
        open: true,          // открывать браузер при запуске
    },
});
