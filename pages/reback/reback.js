// pages/reback/reback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'',
   

  },
onLoad(options){
this.remark = options.con
console.log("style",this.remark)
},
  input:function(e){
    this.content = e.detail.value
    console.log("content",this.content)
  },
  submit:function(){
    wx.showModal({
      title: '喵喵喵',
      content: '提交成功，我们会及时查看的哦',
    })
    console.log("reback",this.content)
  }
})