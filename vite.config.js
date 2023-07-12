import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import vitePluginUniRouter from  `./uni-simple-router/compiler`

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
    plugins: [
		vitePluginUniRouter({
			routesMain:'./router/routes.js',
			pluginPath:`./uni-simple-router`,
			excludeCallBack:(str)=>{
				// console.log(`排除成功文件：${str}`)
			}
		}),
        uni()
	]
});
