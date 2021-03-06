// pages/storeDesign/storeDesign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImgs: [
    ],
    currentSliderBgIndex: 0,
    logoImg: '',
    storeName: '欧莱雅美发店',
    goodsFuncName: '理发师',
    appointmentsFuncName: '我的预约',
    editIcon: '/assets/img/ic_edit.svg',
    addIcon: '/assets/img/ic_add.svg',
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

  // 点击事件
  btnClickEditBgImg: function () {
    let _this = this;
    wx.chooseImage({
      count: 5, // 最多可选5张
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;
        _this.setData({
          bgImgs: tempFilePaths
        })
      }
    })
  },

  btnClickDelectBgImg: function () {
    this.data.bgImgs.splice(this.data.currentSliderBgIndex, 1);
    this.data.currentSliderBgIndex -= 1;
    this.setData({
      bgImgs: this.data.bgImgs
    })
  },

  btnClickEditLogoImg: function () {
    let _this = this;
    wx.chooseImage({
      count: 1, // 最多可选5张
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;
        if (tempFilePaths && tempFilePaths.length > 0) {
          _this.setData({
            logoImg: tempFilePaths[0]
          })
        }
      }
    })
  },

  listenerStoreNameInput: function (e) {
    this.setData({
      storeName: e.detail.value
    })
  },

  listenerGoodsFuncNameInput: function (e) {
    this.setData({
      goodsFuncName: e.detail.value
    })
  },

  listenerAppointmentFuncNameInput: function (e) {
    this.setData({
      appointmentsFuncName: e.detail.value
    })
  },

  
})