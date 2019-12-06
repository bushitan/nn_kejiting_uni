class db{	
	/**
	 * @statics 静态变量
	 */
	KEY_USER_INFO = "user_info"
	KEY_UUID = "uuid"
	KEY_USERNAME = "username"
	KEY_PASSWORD = "password"
	
	
	HOST = "https://www.51zfgx.com/nn_kejiting_server/"
	HOST_DIAO = "http://106.13.100.67/"
	// HOST = "http://192.168.200.105:8000/nn_kejiting_server/"
	// HOST = "http://120.77.152.75:9000/nn_kejiting_server/"
	URL = this.HOST + "photo/"
	// URL = this.HOST
	// API_LOGIN =  `${this.URL}system/set/user_info/`
	
	API_LOGIN = "http://nnjc.lwdweb.top/User/Login"
	API_INDEX =  `${this.URL}article/get/list/`
	
	constructor(){}
	
	
	// 封装基础的请求
    base(options){
        return new Promise((resolve, reject) => {
            var data = options.data || {}
            // data['customer_uuid'] = wx.getStorageSync(API.UUID)
			
            uni.request({
                url: options.url,
                method: options.method || "POST",
                header: {
                    'content-type': 'application/x-www-form-urlencoded' ,// 默认值
                    // 'content-type': 'application/json' ,// 默认值
					// 'Access-Control-Allow-Origin':true,
                },
                data: data,
                success(res) {
                    resolve(res)
                },
                fail(res) {
                    console.log(res)
                    reject(res)
                },
            })
        })
    }
	
    // 获取店铺列表
    baseURL(url,data,method) {
        return new Promise((resolve, reject) => {
			uni.showLoading()
            this.base({
                url: url,
                data:data || {},
				method:method
            })
            .then(res => {
				uni.hideLoading()
				resolve(res)
			})
            .catch(res => {
				uni.hideLoading()
				reject(res)
			})
        })
    }
	
	/****业务详情****/
    // 1 用户登录认证
    login(obj) {
        return new Promise((resolve, reject) => {
			this.baseURL( this.HOST_DIAO + "api/employee/login/?accout=" + obj.accout + "&password=" + obj.password, {} ,"POST" )
			.then(res => resolve( res.data ))
			.catch(res => reject(res.data))
        })
    }
	
	getIndex() {
        return new Promise((resolve, reject) => {
			this.baseURL( this.API_INDEX )
			.then(res => resolve( res.data ))
			.catch(res => reject(res.data))
        })
    }
	
	
	// 1 获取考勤统计
	getTotal(obj) {
	    return new Promise((resolve, reject) => {
			this.baseURL( this.HOST_DIAO + "api/attendence/gettotalstat/", obj ,"GET" )
			.then(res => resolve( res.data ))
			.catch(res => reject(res.data))
	    })
	}
	
	
    // 2 获取领导考勤记录
    getLog(obj) {
        return new Promise((resolve, reject) => {
			this.baseURL( this.HOST_DIAO + "api/attendence/getloglist/", obj ,"GET" )
			.then(res => resolve( res.data ))
			.catch(res => reject(res.data))
        })
    }
	
	// 3 首页信息获取
	getMainInfo(obj) {
	    return new Promise((resolve, reject) => {
			this.baseURL( "http://121.31.6.5:9980/wx/push/list/", obj ,"POST" )
			.then(res => resolve( res.data ))
			.catch(res => reject(res.data))
	    })
	}
	
}
module.exports = new db()