 function share() {
     document.write("<script type='text/javascript' src='http://res.wx.qq.com/open/js/jweixin-1.0.0.js'> </script>");
     document.write("<script type='text/javascript' src='http://dev.odb.sh.cn/Content/Scripts/ODBWechat.js'> </script>");
     document.write("<script type='text/javascript'> console.log('wxshare'); wxShare( '2020年世界海洋日', 'http://dev.odb.sh.cn/OceansDay2020/index.html','http://dev.odb.sh.cn/OceansDay2020/images/share.jpg','2020年“世界海洋日”暨“全国海洋宣传日”')</script>");
 }
 share();