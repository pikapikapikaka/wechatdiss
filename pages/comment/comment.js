//answer.js
var util = require('../../utils/util.js')

var app = getApp()
Page({
  data: {
    motto: '知乎--微信小程序版',
    userInfo: {},
    answer:'',
    res:''
  },
  //事件处理函数
  bindItemTap: function () {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  tapName: function (event) {
    console.log(event)
  },
  input:function(e){
    this.answer = e.detail.value
    console.log('value',this.answer)

  },
  submit:function(e){
    this.content = e.detail.value
    console.log("content",this.content)
    wx.showModal({
      title: '提示',
      content: '发表成功！',
    })

  },
  clear:function(e){
    this.setData({
      res:''
    })
    
  }
})
