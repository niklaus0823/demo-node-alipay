var libSign = require('./sign');

// 处理逻辑与notify_page, 区别在于notify_page是不需要html页面的，但return_page可以显示页面。
var return_page = function (req, res) {
    var trade_status = req.query.trade_status;//交易状态

    libSign.veritySign(req.query, function(result) {
        if (result) {

            if( trade_status == "TRADE_FINISHED") {
                // 判断该笔订单是否在商户网站中已经做过处理
                // 如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
                // 如果有做过处理，不执行商户的业务程序

                // 注意：
                // 该种交易状态只在两种情况下出现
                // 1、开通了普通即时到账，买家付款成功后。
                // 2、开通了高级即时到账，从该笔交易成功时间算起，过了签约时的可退款时限（如：三个月以内可退款、一年以内可退款等）后。
            } else if (trade_status=="TRADE_SUCCESS") {
                // 判断该笔订单是否在商户网站中已经做过处理
                // 如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
                // 如果有做过处理，不执行商户的业务程序

                // 注意：
                // 该种交易状态只在一种情况下出现——开通了高级即时到账，买家付款成功后。
            }

            res.end("success"); // 此处可以显示页面。
        } else{
            res.end("fail");
        }

    });
};

export default return_page();