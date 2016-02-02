var baseConfig = require('./config');
var libSign = require('./sign');

var pay_page = function (req, res) {

    // 订单参数
    var params = {
        "payment_type": '1',
        "out_trade_no": '20120708132324',
        "subject": req.body.subject,
        "body": req.body.description,
        "total_fee": req.body.total_fee,
        "paymethod": "",
        "defaultbank": "",
        "anti_phishing_key": "",
        "exter_invoke_ip": "",
        "extra_common_param": "",
        "buyer_email": "",
        "royalty_type": "",
        "royalty_parameters": "",
        "service": "create_direct_pay_by_user",
        "partner": baseConfig.partner,
        "return_url":  baseConfig.return_url,
        "notify_url":  baseConfig.notify_url,
        "seller_email":  baseConfig.seller_email,
        "input_charset":  baseConfig.input_charset
    };

    // 签名结果与签名方式加入请求提交参数组中
    params['sign'] = libSign.buildSign(params);
    params['sign_type'] = baseConfig.sign_type;


    // 拼接URL地址
    var url_params = this.buildURL(params, true);

    res.redirect("https://" + baseConfig.ALIPAY_HOST + "/" + baseConfig.ALIPAY_PATH + url_params);
};

export default pay_page();