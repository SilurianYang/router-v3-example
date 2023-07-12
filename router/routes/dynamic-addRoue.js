import {
	__dynamicImportComponent__
} from '@/uni-simple-router'

export const dynamicRoutes = [{
	path: `/dynamic/auth/:list`,
	name: `dynamicAuth`,
	component: __dynamicImportComponent__(`../../examples/dynamic/auth/index.vue`, {
		pageType: `top`
	}),
	children: [{
		path: `profile`,
		name: `dynamicAuthProfile`,
		component: __dynamicImportComponent__(`../../examples/dynamic/auth/profile.vue`),
		meta: {
			showName: `profile`,
			class: `primary`
		},
	}, {
		path: `emails`,
		name: `dynamicAuthEmails`,
		component: __dynamicImportComponent__(`../../examples/dynamic/auth/emails.vue`),
		meta: {
			showName: `emails`,
			class: `success`
		},
	}, {
		path: `overview`,
		name: `dynamicAuthOverview`,
		component: __dynamicImportComponent__(`../../examples/dynamic/auth/overview.vue`),
		meta: {
			showName: `overview`,
			class: `error`
		},
	}, {
		path: `setting`,
		name: `dynamicAuthSetting`,
		component: __dynamicImportComponent__(`../../examples/dynamic/auth/setting.vue`),
		meta: {
			showName: `setting`,
			class: `warning`
		},
	}]
}]

export const staticAddRoue = [{
	path: `/dynamic/addRoue`,
	name: `dynamicAddRoue`,
	component: __dynamicImportComponent__(`../../examples/dynamic/index.vue`, {
		pageType: `top`
	}),
}]