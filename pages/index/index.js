//index.js
//获取应用实例
const app = getApp()

Page({
  data: {//定义了此页面的变量信息
    motto: 'Hello World',
    userInfo: {},//用户信息
    hasUserInfo: false,//是否拥有用户信息
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    info:"",
    arrow:""
  },
  //事件处理函数
  bindViewTap: function() {
    /*wx.navigateTo({//跳转页面
      url: '../logs/logs'
    })*/
  },
  onLoad: function () {//加载页面时的函数
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  login:function(){//授权登陆的函数
    if(app.globalData.userInfo){
      this.setData({
        info: "yes"
      })
      wx.redirectTo({
        url: '/pages/welcome/index',
        
      })
    }
    else{
      this.setData({info:"您还未授权"})
    }
  },
  look:function(){
    this.setData({
      arrow:"../images/arrow.jpg"
    })

  }
})
