//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    arr:['1','2','3','4','5','6','7','8','9','10']
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  bindKeyInput: function(e) {
    this.setData({
      message: e.detail.value
    })
  },
  sendMessage:function(e){ 
    
      wx.showToast({
            title:'发送跟帖：'+e.detail.value.message,
            icon:'loading',
            duration:2000
        })
   
  }
})
