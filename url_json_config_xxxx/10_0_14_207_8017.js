/**
	当前文件：全网 - 商机服务	1.0
	主机地址: 10.0.14.207:8017  
*/

export default {

/********** NC系统调用接口文档 ***************************************************/

/**
	NC系统推送商机到招生工作台  
*/
createCustomerFromNcUsingPOST : {
	url: `/ncController/createCustomerFromNc`,
	method: `post`,
	mime: `application/json`
},


/**
	招生工作台推送商机到NC系统1  
*/
requestSaveCustomerUsingPOST : {
	url: `/ncController/requestSaveCustomer`,
	method: `post`,
	mime: `application/json`
},


/**
	招生工作台推送商机到NC系统  
*/
transferCustomerToNcUsingPOST : {
	url: `/ncController/transferCustomerToNc`,
	method: `post`,
	mime: `application/json`
},


/********** demo ***************************************************/

/**
	helloWorld-你好 世界  
*/
helloWorldUsingGET : {
	url: `/demo/helloWorld`,
	method: `get`,
	mime: `application/json`
},


/**
	测试springCloud Stream 发送消息  
*/
testStreamSendMsgUsingGET : {
	url: `/demo/testStreamSendMsg`,
	method: `get`,
	mime: `application/json`
},


/********** 与全网系统交互接口文档 ***************************************************/

/**
	招生工作台推送商机到全网系统  
*/
transferCustomerToMustangUsingPOST : {
	url: `/mustangController/transferCustomerToMustang`,
	method: `post`,
	mime: `application/json`
},


/********** 冻结客户 ***************************************************/

/**
	拨打频次校验  
*/
checkCallUsingPOST : {
	url: `/customerFreeze/checkCall`,
	method: `post`,
	mime: `application/json`
},


/**
	冻结客户-分页列表  
*/
listByPageUsingPOST_1 : {
	url: `/customerFreeze/listByPage`,
	method: `post`,
	mime: `application/json`
},


/**
	冻结客户-分页列表  
*/
listByPageByCustomerIdUsingPOST_1 : {
	url: `/customerFreeze/listByPageByCustomerId`,
	method: `post`,
	mime: `application/json`
},


/**
	冻结客户-手动释放  
*/
releaseByUserUsingPOST : {
	url: `/customerFreeze/releaseByUser`,
	method: `post`,
	mime: `application/json`
},


/********** 启课程调用接口文档 ***************************************************/

/**
	启课程新增商机  
*/
createCustomerFromQkcUsingPOST : {
	url: `/qkcController/createCustomerFromQkc`,
	method: `post`,
	mime: `application/json`
},


/**
	根据赛道类型和客户手机号查询客户信息  
*/
getCustomerInfoUsingPOST : {
	url: `/qkcController/getCustomerInfo`,
	method: `post`,
	mime: `application/json`
},


/********** 商机回收申请 ***************************************************/

/**
	创建数据  
*/
createUsingPOST_2 : {
	url: `/recycleApply/create`,
	method: `post`,
	mime: `application/json`
},


/**
	根据主键id 获取 待处理记录  
*/
getDetailUsingPOST_2 : {
	url: `/recycleApply/getDetail`,
	method: `post`,
	mime: `application/json`
},


/**
	处理类型列表  
*/
getHandleTypeListUsingGET : {
	url: `/recycleApply/getHandleTypeList`,
	method: `get`,
	mime: `application/json`
},


/**
	商机回收申请-分页列表  
*/
listByPageUsingPOST_9 : {
	url: `/recycleApply/listByPage`,
	method: `post`,
	mime: `application/json`
},


/**
	重启，清空运行次数  
*/
reStartUsingPOST : {
	url: `/recycleApply/reStart`,
	method: `post`,
	mime: `application/json`
},


/**
	手动回收商机  
*/
recycleCustomerByHandleUsingPOST : {
	url: `/recycleApply/recycleCustomerByHandle`,
	method: `post`,
	mime: `application/json`
},


/**
	从表中删除  
*/
removeUsingPOST : {
	url: `/recycleApply/remove`,
	method: `post`,
	mime: `application/json`
},


/**
	从表中删除  
*/
removeBatchUsingPOST : {
	url: `/recycleApply/removeBatch`,
	method: `post`,
	mime: `application/json`
},


/**
	更新数据  
*/
updateUsingPOST : {
	url: `/recycleApply/update`,
	method: `post`,
	mime: `application/json`
},


/********** 坐席新增客户 ***************************************************/

/**
	审核  
*/
auditUsingPOST : {
	url: `/seatCustomer/audit`,
	method: `post`,
	mime: `application/json`
},


/**
	新增  
*/
createSeatCustomerUsingPOST : {
	url: `/seatCustomer/createSeatCustomer`,
	method: `post`,
	mime: `application/json`
},


/**
	分页查询  
*/
listByPageUsingPOST_10 : {
	url: `/seatCustomer/listByPage`,
	method: `post`,
	mime: `application/json`
},


/**
	编辑  
*/
updateSeatCustomerUsingPOST : {
	url: `/seatCustomer/updateSeatCustomer`,
	method: `post`,
	mime: `application/json`
},


/********** 外部系统创建客户文档 ***************************************************/

/**
	创建客户，直接创建，并返回客户信息  
*/
createCustomerUsingPOST : {
	url: `/customerFeign/createCustomer`,
	method: `post`,
	mime: `application/json`
},


/**
	创建客户  推送到 MQ ，异步处理  
*/
sendCreateCustomerRequestToMqUsingPOST : {
	url: `/customerFeign/createCustomerFromMq`,
	method: `post`,
	mime: `application/json`
},


/********** 客户列表 ***************************************************/

/**
	下载客户导入模版  
*/
downloadCustomerExcelUsingGET : {
	url: `/customerList/downloadCustomerExcel`,
	method: `get`,
	mime: `application/json`
},


/**
	所有客户-导出客户  
*/
exportCustomerUsingPOST : {
	url: `/customerList/exportCustomer`,
	method: `post`,
	mime: `application/json`
},


/**
	所有客户-分页列表  
*/
listByPageUsingPOST_3 : {
	url: `/customerList/listByPage`,
	method: `post`,
	mime: `application/json`
},


/**
	公海客户-分页列表  
*/
listByPageForCommonUsingPOST : {
	url: `/customerList/listByPageForCommon`,
	method: `post`,
	mime: `application/json`
},


/**
	成交客户-分页列表  
*/
listByPageForDealUsingPOST : {
	url: `/customerList/listByPageForDeal`,
	method: `post`,
	mime: `application/json`
},


/**
	我的客户（我的潜在客户）-分页列表  
*/
listByPageForMyCustomerUsingPOST : {
	url: `/customerList/listByPageForMyCustomer`,
	method: `post`,
	mime: `application/json`
},


/**
	私海客户-分页列表  
*/
listByPageForPrivateUsingPOST : {
	url: `/customerList/listByPageForPrivate`,
	method: `post`,
	mime: `application/json`
},


/**
	领取客户-分页列表  
*/
listByPageForReceiveUsingPOST : {
	url: `/customerList/listByPageForReceive`,
	method: `post`,
	mime: `application/json`
},


/**
	今日客户-分页列表  
*/
listByPageForTodayUsingPOST : {
	url: `/customerList/listByPageForToday`,
	method: `post`,
	mime: `application/json`
},


/********** 客户日志 ***************************************************/

/**
	客户所有动态日志 - 完成新增订单，新增升班，转班，退费后调用  
*/
insertUsingPOST : {
	url: `/customerLog/insert`,
	method: `post`,
	mime: `application/json`
},


/**
	客户所有动态日志  
*/
listByPageUsingPOST_4 : {
	url: `/customerLog/listByPage`,
	method: `post`,
	mime: `application/json`
},


/********** 客户流程记录 ***************************************************/

/**
	判断当前流程是否是当前用户  
*/
processUsingGET : {
	url: `/process/belongToMe/{customerId}`,
	method: `get`,
	mime: `application/json`
},


/**
	客户流程-分页列表  
*/
listByPageUsingPOST_8 : {
	url: `/process/listByPage`,
	method: `post`,
	mime: `application/json`
},


/**
	客户流程-分页列表  
*/
listByPageByCustomerIdUsingPOST_6 : {
	url: `/process/listByPageByCustomerId`,
	method: `post`,
	mime: `application/json`
},


/********** 客户留存记录 ***************************************************/

/**
	移入留存  
*/
addReserveUsingPOST : {
	url: `/customerReserve/addReserve`,
	method: `post`,
	mime: `application/json`
},


/**
	客户留存-分页列表  
*/
listByPageUsingPOST_6 : {
	url: `/customerReserve/listByPage`,
	method: `post`,
	mime: `application/json`
},


/**
	客户留存-分页列表  
*/
listByPageByCustomerIdUsingPOST_4 : {
	url: `/customerReserve/listByPageByCustomerId`,
	method: `post`,
	mime: `application/json`
},


/**
	 移出留存  
*/
removeReserveUsingPOST : {
	url: `/customerReserve/removeReserve`,
	method: `post`,
	mime: `application/json`
},


/**
	移入/出留存前判断余额  
*/
reserveJudgeUsingPOST : {
	url: `/customerReserve/reserveJudge`,
	method: `post`,
	mime: `application/json`
},


/********** 客户管理 ***************************************************/

/**
	检测学员归属是否是当前用户  
*/
checkHandleUsingPOST : {
	url: `/customer/checkHandle`,
	method: `post`,
	mime: `application/json`
},


/**
	手工录入  
*/
createForHandUsingPOST : {
	url: `/customer/createForHand`,
	method: `post`,
	mime: `application/json`
},


/**
	客户轨迹--根据联系方式查询客户  
*/
getCutomerByContactUsingPOST : {
	url: `/customer/getCutomerByContact`,
	method: `post`,
	mime: `application/json`
},


/**
	客户轨迹--根据客户编号查询客户信息  
*/
getCutomerByQueryUsingPOST : {
	url: `/customer/getCutomerByQuery`,
	method: `post`,
	mime: `application/json`
},


/**
	根据主键id 获取 客户详情信息  
*/
getDetailUsingPOST_1 : {
	url: `/customer/getDetail`,
	method: `post`,
	mime: `application/json`
},


/**
	根据code 获取 客户详情信息  
*/
getDetailByCodeUsingGET : {
	url: `/customer/getDetailByCode`,
	method: `get`,
	mime: `application/json`
},


/**
	订单列表-根据手机和姓名查询商机id  
*/
getIdsByPhoneAndUserNameUsingPOST : {
	url: `/customer/getIdsByPhoneAndUserName`,
	method: `post`,
	mime: `application/json`
},


/**
	公海客户-条件查询上一条下一条客户记录  
*/
getNearCustomerUsingPOST : {
	url: `/customer/getNearCustomer`,
	method: `post`,
	mime: `application/json`
},


/**
	所有客户-条件查询上一条下一条客户记录  
*/
getNearCustomerOnDealUsingPOST : {
	url: `/customer/getNearCustomerOnAll`,
	method: `post`,
	mime: `application/json`
},


/**
	潜在客户-条件查询上一条下一条客户记录  
*/
getNearCustomerOnPrivateUsingPOST : {
	url: `/customer/getNearCustomerOnPrivate`,
	method: `post`,
	mime: `application/json`
},


/**
	首页展示今日任务  
*/
getTodayMissionUsingGET : {
	url: `/customer/getTodayMission`,
	method: `get`,
	mime: `application/json`
},


/**
	导入客户列表  
*/
importCustomerUsingPOST : {
	url: `/customer/importCustomer`,
	method: `post`,
	mime: `multipart/form-data`
},


/**
	领取客户  
*/
receiveCustomerBatchUsingPOST : {
	url: `/customer/receiveCustomerBatch`,
	method: `post`,
	mime: `application/json`
},


/**
	主动退回公海  
*/
returnToCommonBatchUsingPOST : {
	url: `/customer/returnToCommonBatch`,
	method: `post`,
	mime: `application/json`
},


/**
	客户转移  
*/
transferCustomerUsingPOST : {
	url: `/customer/transferCustomer`,
	method: `post`,
	mime: `application/json`
},


/**
	保存修改客户基本资料  
*/
updateCustomerInfoUsingPOST : {
	url: `/customer/updateCustomerInfo`,
	method: `post`,
	mime: `application/json`
},


/**
	退款后，修改商机状态，开启回收  
*/
updateCustomerStatusAfterCancelOrderUsingPOST : {
	url: `/customer/updateCustomerStatusAfterCancelOrder`,
	method: `post`,
	mime: `application/json`
},


/**
	收到付款后，修改商机状态，停止回收  
*/
updateCustomerStatusAfterDealUsingPOST : {
	url: `/customer/updateCustomerStatusAfterDeal`,
	method: `post`,
	mime: `application/json`
},


/********** 客户绑定标签管理 ***************************************************/

/**
	删除商机标签  
*/
deleteUsingPOST : {
	url: `/bizCustomerLabel/delete`,
	method: `post`,
	mime: `application/json`
},


/**
	查询客户已绑定的标签  
*/
getBizCustomerLabelAllUsingPOST : {
	url: `/bizCustomerLabel/getBizCustomerLabelAll`,
	method: `post`,
	mime: `application/json`
},


/**
	为商机添加商机标签  
*/
saveUsingPOST : {
	url: `/bizCustomerLabel/save`,
	method: `post`,
	mime: `application/json`
},


/********** 客户联系方式 ***************************************************/

/**
	针对联系方式:手机号或座机号是否允许更改或删除  
*/
checkIsAllowUpdateOrDeleteUsingPOST : {
	url: `/customerContact/checkIsAllowUpdateOrDelete`,
	method: `post`,
	mime: `application/json`
},


/**
	新增客户联系方式  
*/
createUsingPOST : {
	url: `/customerContact/create`,
	method: `post`,
	mime: `application/json`
},


/**
	删除联系方式  
*/
deleteContactUsingPOST : {
	url: `/customerContact/deleteContact`,
	method: `post`,
	mime: `application/json`
},


/**
	根据客户Id获取客户全部联系方式  
*/
getContactListByCustomerIdUsingPOST : {
	url: `/customerContact/getContactListByCustomerId`,
	method: `post`,
	mime: `application/json`
},


/**
	根据客户Id获取客户的手机号  
*/
getPhoneByCustomerIdUsingPOST : {
	url: `/customerContact/getPhoneByCustomerId`,
	method: `post`,
	mime: `application/json`
},


/**
	查询该联系方式的所有赛道  
*/
getProjectByContactUsingPOST : {
	url: `/customerContact/getProjectByContact`,
	method: `post`,
	mime: `application/json`
},


/**
	修改联系方式  
*/
updateContactUsingPOST : {
	url: `/customerContact/updateContact`,
	method: `post`,
	mime: `application/json`
},


/********** 客户跟进记录 ***************************************************/

/**
	新增跟进记录  
*/
createUsingPOST_1 : {
	url: `/follow/create`,
	method: `post`,
	mime: `application/json`
},


/**
	公海客户-跟进记录列表  
*/
listByIdUsingPOST : {
	url: `/follow/listById`,
	method: `post`,
	mime: `application/json`
},


/**
	客户跟进-分页列表  
*/
listByPageUsingPOST_7 : {
	url: `/follow/listByPage`,
	method: `post`,
	mime: `application/json`
},


/**
	客户跟进-分页列表  
*/
listByPageByCustomerIdUsingPOST_5 : {
	url: `/follow/listByPageByCustomerId`,
	method: `post`,
	mime: `application/json`
},


/**
	修改跟进记录  
*/
updateFollowInfoUsingPOST : {
	url: `/follow/updateFollowInfo`,
	method: `post`,
	mime: `application/json`
},


/********** 待处理数据 ***************************************************/

/**
	创建数据  
*/
createUsingPOST_3 : {
	url: `/waitingHandleData/create`,
	method: `post`,
	mime: `application/json`
},


/**
	根据主键id 获取 待处理记录  
*/
getDetailUsingPOST_3 : {
	url: `/waitingHandleData/getDetail`,
	method: `post`,
	mime: `application/json`
},


/**
	处理类型列表  
*/
getHandleTypeListUsingGET_1 : {
	url: `/waitingHandleData/getHandleTypeList`,
	method: `get`,
	mime: `application/json`
},


/**
	立即执行-单个  
*/
handleRightNowUsingPOST : {
	url: `/waitingHandleData/handleRightNow`,
	method: `post`,
	mime: `application/json`
},


/**
	立即执行-批量  
*/
handleRightNowBatchUsingPOST : {
	url: `/waitingHandleData/handleRightNowBatch`,
	method: `post`,
	mime: `application/json`
},


/**
	分页列表  
*/
listByPageUsingPOST_11 : {
	url: `/waitingHandleData/listByPage`,
	method: `post`,
	mime: `application/json`
},


/**
	重启  
*/
reStartUsingPOST_1 : {
	url: `/waitingHandleData/reStart`,
	method: `post`,
	mime: `application/json`
},


/**
	从表中删除  
*/
removeUsingPOST_1 : {
	url: `/waitingHandleData/remove`,
	method: `post`,
	mime: `application/json`
},


/**
	从表中删除  
*/
removeBatchUsingPOST_1 : {
	url: `/waitingHandleData/removeBatch`,
	method: `post`,
	mime: `application/json`
},


/**
	更新数据  
*/
updateUsingPOST_1 : {
	url: `/waitingHandleData/update`,
	method: `post`,
	mime: `application/json`
},


/********** 无效客户 ***************************************************/

/**
	无效客户-导出无效客户  
*/
exportInvalidCustomerUsingPOST : {
	url: `/invalidCustomer/exportInvalidCustomer`,
	method: `post`,
	mime: `application/json`
},


/**
	设置客户为无效状态  
*/
invalidCustomerBatchUsingPOST : {
	url: `/invalidCustomer/invalidCustomerBatch`,
	method: `post`,
	mime: `application/json`
},


/**
	无效客户-分页列表  
*/
listByPageUsingPOST_2 : {
	url: `/invalidCustomer/listByPage`,
	method: `post`,
	mime: `application/json`
},


/**
	无效客户-根据客户ID 查询分页列表  
*/
listByPageByCustomerIdUsingPOST_2 : {
	url: `/invalidCustomer/listByPageByCustomerId`,
	method: `post`,
	mime: `application/json`
},


/**
	无效客户-质检记录-分页列表  
*/
listByPageForQcLogUsingPOST : {
	url: `/invalidCustomer/listByPageForQcLog`,
	method: `post`,
	mime: `application/json`
},


/**
	质检操作  
*/
quantityInspectUsingPOST : {
	url: `/invalidCustomer/quantityInspect`,
	method: `post`,
	mime: `application/json`
},


/********** 用户绑定标签管理 ***************************************************/

/**
	删除用户常用标签  
*/
deleteUsingPOST_1 : {
	url: `/bizUserLabel/delete`,
	method: `post`,
	mime: `application/json`
},


/**
	查询用户已绑定的标签  
*/
getUserLabelInfoUsingPOST : {
	url: `/bizUserLabel/getUserLabelInfo`,
	method: `post`,
	mime: `application/json`
},


/**
	为用户添加常用标签  
*/
saveUsingPOST_1 : {
	url: `/bizUserLabel/save`,
	method: `post`,
	mime: `application/json`
},


/********** 第三方新增商机接口 ***************************************************/

/**
	第三方新增商机  
*/
createCustomerFromThirdPartyUsingPOST : {
	url: `/thirdPartyController/createCustomerFromThirdParty`,
	method: `post`,
	mime: `application/json`
},


/********** 网校调用接口文档 ***************************************************/

/**
	生成订单前推送商机，确保商机归属人信息填充  
*/
pushCustomerBeforeCreateOrderUsingPOST : {
	url: `/onlineSchool/pushCustomerBeforeCreateOrder`,
	method: `post`,
	mime: `application/json`
},


/**
	客户详情与转介绍  
*/
studentIntroduceBillsUsingPOST : {
	url: `/onlineSchool/studentIntroduceBills`,
	method: `post`,
	mime: `application/json`
},


/**
	付款后更新商机，停止回收任务  
*/
updateCustomerAfterPayUsingPOST : {
	url: `/onlineSchool/updateCustomerAfterPay`,
	method: `post`,
	mime: `application/json`
},


/********** 自动调度任务Api ***************************************************/

/**
	自动释放 冻结期到了的 冻结客户  
*/
autoReleaseFreezeCustomerUsingGET : {
	url: `/taskApi/autoReleaseFreezeCustomer`,
	method: `get`,
	mime: `application/json`
},


/**
	商机回收  
*/
bizRecycleForCustomerExpireUsingGET : {
	url: `/taskApi/bizRecycleForCustomerExpire`,
	method: `get`,
	mime: `application/json`
},


/**
	计算响应周期  
*/
calculateResponseUsingGET : {
	url: `/taskApi/calculateResponse`,
	method: `get`,
	mime: `application/json`
},


/**
	消费消息队列异常重试  
*/
messageHandleExceptionReplenishUsingGET : {
	url: `/taskApi/messageHandleExceptionReplenish`,
	method: `get`,
	mime: `application/json`
},


/**
	下次联系时间 到了的商机，回收到 今日客户  
*/
recycleNextContactTimeCustomerToTodayUsingGET : {
	url: `/taskApi/recycleNextContactTimeCustomerToToday`,
	method: `get`,
	mime: `application/json`
},


/********** 重单客户 ***************************************************/

/**
	重单客户-分页列表  
*/
listByPageUsingPOST_5 : {
	url: `/customerRepeat/listByPage`,
	method: `post`,
	mime: `application/json`
},


/**
	重单客户-分页列表  
*/
listByPageByCustomerIdUsingPOST_3 : {
	url: `/customerRepeat/listByPageByCustomerId`,
	method: `post`,
	mime: `application/json`
},


/********** 预约客户 ***************************************************/

/**
	客户预约/再次预约操作  
*/
appointmentCustomerUsingPOST : {
	url: `/customerAppointment/appointmentCustomer`,
	method: `post`,
	mime: `application/json`
},


/**
	获取预约成交信息 - 升班  
*/
getAppintInfoInUpClassUsingPOST : {
	url: `/customerAppointment/getAppintInfoForUpClass`,
	method: `post`,
	mime: `application/json`
},


/**
	获取预约成交信息 - 报名页  
*/
getAppointInfoUsingPOST : {
	url: `/customerAppointment/getAppointInfo`,
	method: `post`,
	mime: `application/json`
},


/**
	获取预约成交信息 - 转班  
*/
getAppointInfoInChangeClassUsingPOST : {
	url: `/customerAppointment/getAppointInfoInChangeClass`,
	method: `post`,
	mime: `application/json`
},


/**
	查询预约详情  
*/
getDetailUsingPOST : {
	url: `/customerAppointment/getDetail`,
	method: `post`,
	mime: `application/json`
},


/**
	预约客户-分页列表  
*/
listByPageUsingPOST : {
	url: `/customerAppointment/listByPage`,
	method: `post`,
	mime: `application/json`
},


/**
	预约客户-分页列表  
*/
listByPageByCustomerIdUsingPOST : {
	url: `/customerAppointment/listByPageByCustomerId`,
	method: `post`,
	mime: `application/json`
},


/**
	预约详情更新保存  
*/
updateAppointmentUsingPOST : {
	url: `/customerAppointment/updateAppointment`,
	method: `post`,
	mime: `application/json`
},


/********** 默认校区 ***************************************************/

/**
	默认校区-根据用户id获取默认校区  
*/
getDefaultSchoolByUserIdUsingPOST : {
	url: `/defaultSchool/getDefaultSchoolByUserId`,
	method: `post`,
	mime: `application/json`
},


}