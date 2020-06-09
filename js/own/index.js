// 按钮绑定
function pop1() {
    $(".pop1").on('click', function(event) {
        console.log('pop1')
        $(".pop1Img").show();
        return false;
    });
    $(".close1").on('click', function(event) {
        $(".pop1Img").hide();
        return false;
    });
    $(".pop2").on('click', function(event) {
        console.log('pop2')
        $(".pop2Img").show();
        return false;
    });
    $(".close2").on('click', function(event) {
        $(".pop2Img").hide();
        return false;
    });
    $(".pop3").on('click', function(event) {
        console.log('pop2')
        $(".pop3Img").show();
        return false;
    });
    $(".close3").on('click', function(event) {
        $(".pop3Img").hide();
        return false;
    });

    $(".title1").on('click', function(event) {
        console.log('pop2')
        $(".pop4Img").show();
        return false;
    });
    $(".close4").on('click', function(event) {
        console.log('close4')
        $(".pop4Img").hide();
        return false;
    });

    $(".pop5").on('click', function(event) {
        console.log('pop2')
        $(".pop5Img").show();
        return false;
    });
    $(".close5").on('click', function(event) {
        console.log('close4')
        $(".pop5Img").hide();
        return false;
    });

    $(".pop6").on('click', function(event) {
        console.log('pop2')
        $(".pop6Img").show();
        return false;
    });
    $(".close6").on('click', function(event) {
        console.log('close4')
        $(".pop6Img").hide();
        return false;
    });


}

pop1();

// 百分比显示
var rate = 0;
document.onreadystatechange = function() {
    $('.load').show();
    var timer = setInterval(loading, 100);

    function loading() {
        if (rate < 99) {
            rate += 1;
        }
        $('.loading').text(rate + '%')
    }
    if (document.readyState == "complete") {
        if (rate <= 99) {
            rate = 100;
            setTimeout(ready, 2000);
        }
    }
}

function ready() {
    $('.load').fadeOut(
        () => {
            $('.content').removeClass('hidden');
            $('#music').show();
            $('.biaoti2').css("display", "block").addClass('play1');
        }
    );

}

// loading页面图片切换

let index = 1; //全局变量，在0到(num-1)之间循环
var num = 5;
var img = document.getElementById("pic"); //获取图片ID
// var title = document.getElementById("title");
function picChange() {
    switch (index) {
        case 1:
            img.src = "./images/loading/1.png";
            break; //切换到1.jpg
        case 2:
            img.src = "./images/loading/2.png";
            break; //切换到2.jpg
        case 3:
            img.src = "./images/loading/3.png";
            break; //切换到3.jpg
        case 4:
            img.src = "./images/loading/4.png";
            break; //切换到4.jpg
        case 5:
            img.src = "./images/loading/5.png";
            break; //切换到5.jpg

    }

    index++; //切换到下一张
    if (index > num) {
        index = index % num; //大于最多图片数量后回到第0张
    }
}
setInterval("picChange()", 100); //设置定时器，作用于PicChange()函数内，时间为600毫秒刷新一次



// loading 圆圈

window.onload = function() {
    var canvas = document.getElementById('canvas'), //获取canvas元素
        context = canvas.getContext('2d'), //获取画图环境，指明为2d
        centerX = canvas.width / 2, //Canvas中心点x轴坐标
        centerY = canvas.height / 2, //Canvas中心点y轴坐标
        rad = Math.PI * 2 / 100, //将360度分成100份，那么每一份就是rad度
        speed = 0.8; //加载的快慢就靠它了
    //绘制蓝色外圈
    function blueCircle(n) {
        context.save();
        context.strokeStyle = "#fff"; //设置描边样式
        context.lineWidth = 2; //设置线宽
        context.beginPath(); //路径开始
        context.arc(centerX, centerY, 35, -Math.PI / 2, -Math.PI / 2 + n * rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
        context.stroke(); //绘制
        context.closePath(); //路径结束
        context.restore();
    }
    //绘制白色外圈
    function whiteCircle() {
        context.save();
        context.beginPath();
        // context.strokeStyle = "white";
        context.arc(centerX, centerY, 35, 0, Math.PI * 2, false);
        // context.stroke();
        context.closePath();
        context.restore();
    }
    //百分比文字绘制
    function text(n) {
        context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
        // context.strokeStyle = "#fff"; //设置描边样式
        context.font = "40px Arial"; //设置字体大小和字体
        //绘制字体，并且指定位置
        // context.strokeText(n.toFixed(0)+"%", centerX-25, centerY+10);
        // context.stroke(); //执行绘制
        context.restore();
    }
    //动画循环
    (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);
        whiteCircle();
        text(speed);
        blueCircle(speed);
        if (speed > 100) speed = 0;
        speed += 0.8;
    }());
}