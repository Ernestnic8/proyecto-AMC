import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),      
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@types": fileURLToPath(new URL("./src/types", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/Pages", import.meta.url)),
      "@layouts": fileURLToPath(new URL("./src/Layouts", import.meta.url)),
      "@api": fileURLToPath(new URL("./src/api", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
