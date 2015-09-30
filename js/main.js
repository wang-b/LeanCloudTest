/**
 * LeanCloud工具方法
 * @author wangbin
 * @date 2015-09-24 15:24:35
 * @version 1.0.0
 */
(function(){
    window.AV = window.AV || {};

    var LCConstants = {
        appID: '1YaglwHXhOV3mIsBkCxXTDwG',
        appKey: 'eq3AEgKOQvU6Oqn9Dgc0blgM',
        masterKey: 'Qn73dECkOgYOzn0Axwtk3wzn'
    };

    window.LCConstants = LCConstants;

    var LCManager = {};
    /** 初始化 */
    LCManager.initialize = function(){
        AV.initialize(LCConstants.appID, LCConstants.appKey);
    };

    /** 定义实体类 */
    LCManager.extend = function(className, methods){
        return AV.Object.extend(className, methods);
    };

    var LCEntity = {};

    LCEntity.Message = LCManager.extend('Message');

    LCManager.initialize();
    window.LCManager = LCManager;
    window.LCEntity = LCEntity;
})();