// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideImgs: [
      {
        url: '/assets/img/ic_p9.jpg',
      },
      {
        url: '/assets/img/ic_p9.jpg'
      },
      {
        url: '/assets/img/ic_p9.jpg'
      },
    ],
    funcs: [
      {
        icon: '/assets/img/ic_phone.svg',
        name: '店铺设计',
        link: '../storeDesign/storeDesign',
      },
      {
        icon: '/assets/img/ic_phone.svg',
        name: '店铺设计',
      },
      {
        icon: '/assets/img/ic_phone.svg',
        name: '店铺设计',
      },
      {
        icon: '/assets/img/ic_phone.svg',
        name: '店铺设计',
      },
      {
        icon: '/assets/img/ic_phone.svg',
        name: '店铺设计',
      },
      {
        icon: '/assets/img/ic_phone.svg',
        name: '店铺设计',
      },
      {
        icon: '/assets/img/ic_phone.svg',
        name: '店铺设计',
      },
      {
        icon: '/assets/img/ic_phone.svg',
        name: '店铺设计',
      },
      {
        icon: '/assets/img/ic_phone.svg',
        name: '店铺设计',
      },
      {
        icon: '/assets/img/ic_phone.svg',
        name: '店铺设计',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  btnClickFuncItem: function (e) {
    console.log('link', e.currentTarget.dataset.item);
    wx.navigateTo({
      url: e.currentTarget.dataset.item.link
    })
  }
})