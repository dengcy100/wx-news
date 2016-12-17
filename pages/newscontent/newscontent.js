Page({
  data:{
      
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
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