//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: ''
    })
  },
  onLoad: function () {
    console.log('onLoad')
    //授权函数
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {//data里的catIUse变量也没有用到
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
            hasUserInfo: true//是否拥有用户信息，此变量并没有用到
          })
        }
      })
    }
    console.log(this.data.userInfo.nickName)
    /*var that = this
    //调用应用实例的方法获取全局数据
    //获取用户的信息
    app.getUserInfo(function (userInfo1) {
      //更新数据
      that.setData({
        userInfo: userInfo1
      })
    })*/
  },
  edit:function(){
    wx.showModal({
      title: '提示',
      content: '该功能还未完全开放',
      success: function () {
        
        },
        fail:function(){}
      })
    },
  reback:function(){
    wx.navigateTo({
      url: '../reback/reback?con=reback',
    })

  },
  version:function(){
    wx.showModal({
      title: '声明',
      content: '此项目仅为北大软微某小组织学习交流项目，如想参与，可微信联系13371469630，共同开发维护。',
    })

  },
  browser:function(){
    wx.showModal({
      title: '提示',
      content: '工程师太笨了，还不会设计',
      success: function () {

      },
      fail: function () { }
    })
  },
  myquestion:function(){
    wx.navigateTo({
      url: '../myquestion/myquestion',
    })
  },
  myanswer:function(){
    wx.navigateTo({
      url: '../myanswer/myanswer',
    })
  },
  mylove:function(){
    wx.navigateTo({
      url: '../mylove/mylove',
    })
  }
  
})