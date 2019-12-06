  // import service from '../../service.js';
    // import {
    //     mapState,
    //     mapMutations
    // } from 'vuex'
    // import mInput from '../../components/m-input.vue'

var GP 

var ACCOUNT = [
	{username:"caokh",password:"123456"},
	{username:"liujh",password:"123456"},
	{username:"chencs",password:"123456"},
	{username:"liaowj",password:"123456"},
	{username:"qianj",password:"123456"},
	{username:"tangxl",password:"123456"},
	{username:"wangb",password:"123456"},
	{username:"liwh",password:"123456"},
	{username:"xiexk",password:"123456"},
	{username:"tangld",password:"123456"},
	{username:"caicl",password:"123456"},
	{username:"duwh",password:"123456"},
	{username:"moby",password:"123456"},
	{username:"mengfg",password:"123456"},
	{username:"zhangxf",password:"123456"},
	{username:"chensw",password:"123456"},
	{username:"huangzb",password:"123456"},
	{username:"lihh",password:"123456"},
	{username:"chend",password:"123456"},
	{username:"songjy",password:"123456"},
	{username:"wangl",password:"123456"},
	{username:"yeb",password:"123456"},
	{username:"changq",password:"123456"},
	{username:"caiqz",password:"123456"},
	{username:"kegs",password:"123456"},
	{username:"huangkl",password:"123456"},
	{username:"huangsx",password:"123456"},
	{username:"longg",password:"123456"},
	{username:"chenwj",password:"123456"},
	{username:"shim",password:"123456"},
]

    export default {
        // components: {
        //     mInput
        // },
        data() {
            return {
				header:{
					title:"广西科技项目管理APP",
					subTitle:"三百两千项目",
					btn:"项目大数据",
					
				},
				
                providerList: [],
                hasProvider: false,
                account: '',
                password: '',
                positionTop: 0,
				
					
				userName:"",
				password:""
            }
        },
		
		onLoad(){
			GP = this
			// this.checkStatus()
			// this.getCode()
			// this.test()
		},
        methods: {
				
						
			/**
			 * @method 登陆表单submit
			 */
			formSubmit: function(e) {
				var userName = e.detail.value.username
				var password = e.detail.value.password	
				
				if( userName=="" || password == ""){
					uni.showModal({
						title:"请输入完整的账号密码",
						showCancel:false,
					})
					return 
				}
				
				this.$db.login({
					accout:userName,
					password:password,
				}).then(res=>{
					console.log(res)
					if(res.code == 0){
						
						uni.setStorageSync(this.$db.KEY_USERNAME ,userName)
						uni.setStorageSync(this.$db.KEY_PASSWORD ,password)
						uni.redirectTo({
							url:"/pages/index/index"						
						})
					} else{
						uni.showModal({
							title:res.msg,
							showCancel:false,
						})
					}
				})
				
			},
					
        },

		
        onReady() {
        },
		
    }