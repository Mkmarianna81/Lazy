import { defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const env=loadEnv(mode,process.cwd());
  return{
    base:'/Lazy',
    bulid:{
      chunkSizeWarningLimit:1600
    },
  plugins: [react()],
  server:{
    port: env.VITE_PORT,
  }
}
})

/*export default defineConfig({
plugins: [react()],
});*/