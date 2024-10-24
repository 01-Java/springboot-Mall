/// <reference types="vite/client" />

declare module "*.vue" {
	import { DefineComponent } from "vue";
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

export interface ImportMetaEnv {
	/**
	 * 应用端口
	 * @example
	 * "8080"
	 */
	VITE_APP_PORT: `${number}`;

	/**
	 * API 基础路径(代理前缀)
	 * @example
	 * '/dev-api'
	 */
	VITE_APP_BASE_API: string;

	/**
	 * API 地址
	 * @example
	 * http://localhost:9999
	 * https://api.youlai.tech
	 */
	VITE_APP_API_URL: string;

	/** 是否开启 Mock 服务 */
	VITE_MOCK_DEV_SERVER: `${boolean}`;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

/**
 * 平台的名称、版本、运行所需的`node`版本、依赖、构建时间的类型提示
 */
declare const __APP_INFO__: {
	pkg: {
		name: string;
		version: string;
		engines: {
			node: string;
		};
		dependencies: Record<string, string>;
		devDependencies: Record<string, string>;
	};
	buildTimestamp: number;
};
