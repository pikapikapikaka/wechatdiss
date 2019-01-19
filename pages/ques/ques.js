// pages/ques/ques.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    con:'',
    niming: [
      { name: 'yes', value: '匿名' },
      { name: 'no', value: '不匿名', checked: 'true' },
      
    ],
    isNi:false,
    teacher:'',
    course:'',
    titleInput:'',
    contentInput:'',
    res:''

  },
/**
 *以下四个文本框输入处理函数
*/
  titleInputF:function(e){
    this.titleInput = e.detail.value
    console.log('标题名称', this.titleInput)

  },
  contentInputF:function(e){
    this.contentInput = e.detail.value
    console.log('内容名称', this.contentInput)

  },

  //提交问题的函数
  submit:function(){
    this.res = this.titleInput+':'+this.contentInput
    wx.showModal({
      title: 'Diss',
      content: this.res,
    })
  },

  //匿名状态改变
  radioChange:function(){
    if(this.isNi){
      this.isNi = false
    }else{
      this.isNi = true
    }
    console.log('状态改变')
  },
  fromSubmit(e) {
    console.log(this.teacher,this.course,this.titleInput,this.contentInput)
  },
})