import Vue from 'vue'
import App from './App'
import DB from './db/db.js'
import CODE from './db/code.js'
import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import uniTag from '@/components/uni-tag/uni-tag.vue'
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
import xxTab from '@/components/xx_tab/xx_tab.vue'
import uniIcon from '@/components/uni-icon/uni-icon.vue'

Vue.config.productionTip = false
Vue.prototype.$db = DB;
Vue.prototype.$CODE = CODE;

function setData(obj){  
	let that = this;  
	let keys = [];  
	let val,data;  
	Object.keys(obj).forEach(function(key){  
		 keys = key.split('.');  
		 val = obj[key];  
		 data = that.$data;  
		 keys.forEach(function(key2,index){  
			 if(index+1 == keys.length){  
				 that.$set(data,key2,val);  
			 }else{  
				 if(!data[key2]){  
					that.$set(data,key2,{});  
				 }  
			 }  
			 data = data[key2];  
		 })  
	});  
}  
Vue.prototype.setData = setData

// 公共组件
Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)
Vue.component('uniTag', uniTag)
Vue.component('uni-load-more', uniLoadMore)
Vue.component('xx_tab', xxTab)
Vue.component('uni-icon', uniIcon)

App.mpType = 'app'


const app = new Vue({
    ...App
})
app.$mount()



// ,
// 	"tabBar": {
// 		"color": "#888888",
// 		"selectedColor": "#007AFF",
// 		"borderStyle": "black",
// 		"backgroundColor": "#ffffff",
// 		"list": [{
// 				"pagePath": "pages/index/index",
// 				"iconPath": "static/images/tabbar5_1.png",
// 				"selectedIconPath": "static/images/tabbar5-actived.png",
// 				"text": "科技情报"
// 			},
// 			{
// 				"pagePath": "pages/user/user",
// 				"iconPath": "static/images/tabbar4_1.png",
// 				"selectedIconPath": "static/images/tabbar4-actived.png",
// 				"text": "我的"
// 			}
// 		]
// 	}