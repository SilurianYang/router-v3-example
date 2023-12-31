import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import {resolve} from 'path'
// 线上包
// import vitePluginUniRouter from  `./uni-simple-router/compiler`

//本地包
import vitePluginUniRouter from  `E:/My-git/uni-simple-router-v3/packages/vite-plugin-router/dist/vite-plugin-router.js`


/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
    plugins: [
		vitePluginUniRouter({
			routesMain:'./router/routes.js',
			pluginPath:`./uni-simple-router`,
			// pluginPath:'E:/My-git/router-v3-example/node_modules/@hhyang/uni-simple-router',
			excludeCallBack:(str)=>{
				// console.log(`排除成功文件：${str}`)
			},
			applet:{
				enterPage:{
					style:{
						navigationStyle:`default`
					}
				}
			}
		}),
        uni()
	]
});
