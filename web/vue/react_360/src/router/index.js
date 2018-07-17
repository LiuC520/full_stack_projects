import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const enjoyvr = r => require.ensure([], () => r(require('../pages/enjoyvr.vue')), 'enjoyvr')
const createfirstproject = r => require.ensure([], () => r(require('../pages/createfirstproject.vue')), 'createfirstproject')
const explorecode = r => require.ensure([], () => r(require('../pages/explorecode.vue')), 'explorecode')
const whatisreact360 = r => require.ensure([], () => r(require('../pages/whatisreact360.vue')), 'whatisreact360')
const runtime = r => require.ensure([], () => r(require('../pages/runtime.vue')), 'runtime')
const photosvideos = r => require.ensure([], () => r(require('../pages/photosvideos.vue')), 'photosvideos')
const surfaces = r => require.ensure([], () => r(require('../pages/surfaces.vue')), 'surfaces')
const objects3d = r => require.ensure([], () => r(require('../pages/objects3d.vue')), 'objects3d')
const layout = r => require.ensure([], () => r(require('../pages/layout.vue')), 'layout')
const playaudio = r => require.ensure([], () => r(require('../pages/playaudio.vue')), 'playaudio')
const inputhandle = r => require.ensure([], () => r(require('../pages/inputhandle.vue')), 'inputhandle')
const nativemodules = r => require.ensure([], () => r(require('../pages/nativemodules.vue')), 'nativemodules')
const legacyreactvrapps = r => require.ensure([], () => r(require('../pages/legacyreactvrapps.vue')), 'legacyreactvrapps')
const build = r => require.ensure([], () => r(require('../pages/build.vue')), 'build')
const staticassets = r => require.ensure([], () => r(require('../pages/staticassets.vue')), 'staticassets')
const integrateothersite = r => require.ensure([], () => r(require('../pages/integrateothersite.vue')), 'integrateothersite')
const view = r => require.ensure([], () => r(require('../pages/view.vue')), 'view')
const text = r => require.ensure([], () => r(require('../pages/text.vue')), 'text')
const image = r => require.ensure([], () => r(require('../pages/image.vue')), 'image')
const entity = r => require.ensure([], () => r(require('../pages/entity.vue')), 'entity')
const vrbutton = r => require.ensure([], () => r(require('../pages/vrbutton.vue')), 'vrbutton')
const animated = r => require.ensure([], () => r(require('../pages/animated.vue')), 'animated')
const asyncstorage = r => require.ensure([], () => r(require('../pages/asyncstorage.vue')), 'asyncstorage')
const controllerinfo = r => require.ensure([], () => r(require('../pages/controllerinfo.vue')), 'controllerinfo')
const enviroment = r => require.ensure([], () => r(require('../pages/enviroment.vue')), 'enviroment')


const routes = [{
	path: '/',
  component: enjoyvr,
  name:'欣赏示例'
}, {
	path: '/enjoyvr',
  name:'欣赏示例',
	component: enjoyvr,
},
{
	path: '/createfirstproject',
	component: createfirstproject,
  meta: ['创建第一个应用', '添加商铺'],
  name:'创建第一个应用',

}, {
	path: '/explorecode',
	component: explorecode,
  meta: ['探索代码', '添加商品'],
  name:'探索代码',

}, {
	path: '/whatisreact360',
	component: whatisreact360,
  meta: ['什么是react 360', '属性'],
  name:'什么是react 360',
}, {
	path: '/runtime',
	component: runtime,
  meta: ['Runtime运行时', '属性'],
  name:'Runtime运行时',

}, {
	path: '/photosvideos',
	component: photosvideos,
  meta: ['360度照片和视频', '属性'],
  name:'360度照片和视频',

}, {
	path: '/surfaces',
	component: surfaces,
  meta: ['面', '属性'],
  name:'曲面',

},
{
	path: '/objects3d',
	component: objects3d,
  meta: ['三维物体', '属性'],
  name:'三维物体',

},
{
	path: '/layout',
	component: layout,
  meta: ['布局', '属性'],
  name:'布局',

},
{
	path: '/playaudio',
	component: playaudio,
  meta: ['播放音频', '属性'],
  name:'播放音频',

}, {
	path: '/inputhandle',
	component: inputhandle,
  meta: ['输入控制', '属性'],
  name:'输入控制',

}, {
	path: '/nativemodules',
	component: nativemodules,
  meta: ['原生模块', '属性'],
  name:'原生模块',

}, {
	path: '/legacyreactvrapps',
	component: legacyreactvrapps,
  meta: ['迁移react vr项目', '属性'],
  name:'迁移react vr项目',

}, {
	path: '/build',
	component: build,
  meta: ['构建你的项目', '属性'],
  name:'构建你的项目',

}, {
	path: '/staticassets',
	component: staticassets,
  meta: ['静态文件', '属性'],
  name:'静态文件',

}, {
	path: '/integrateothersite',
	component: integrateothersite,
  meta: ['和现有的网页交互', '属性'],
  name:'和现有的网页交互',

}, {
	path: '/view',
	component: view,
  meta: ['view', '属性'],
  name:'view',

}, {
	path: '/text',
	component: text,
  meta: ['text', '属性'],
  name:'text',

}, {
	path: '/image',
	component: image,
  meta: ['image', '属性'],
  name:'image',

}, {
	path: '/entity',
	component: entity,
  meta: ['Entity', '属性'],
  name:'Entity',

}, {
	path: '/vrbutton',
	component: vrbutton,
  meta: ['VrButton', '属性'],
  name:'VrButton',

}, {
	path: '/animated',
	component: animated,
  meta: ['动画', '属性'],
  name:'动画',

}, {
	path: '/asyncstorage',
	component: asyncstorage,
  meta: ['AsyncStorage 存储', '属性'],
  name:'AsyncStorage 存储',
}, {
	path: '/controllerinfo',
	component: controllerinfo,
  meta: ['ControllerInfo 控制器', '属性'],
  name:'ControllerInfo 控制器',
}, {
	path: '/enviroment',
	component: enviroment,
  meta: ['Environment 环境', '属性'],
  name:'Environment 环境',
}
]
export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
