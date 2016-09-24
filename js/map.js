function check(){
	var psd1=document.getElementById("psd");
	var psd2=document.getElementById("psd2");
	var buttons=document.getElementById("submit");
	var name=document.getElementById("name");
	var tel=document.getElementById("tel");
	var mail=document.getElementById("email");
	buttons.onclick=function(){
		var nameReg= /^[A-Za-z u4E00-u9FA5]+$/;
		if(name.value.match(nameReg)==null){
			alert("请输入正确的姓名");
			name.value="";
		}
		if(psd1.value.length<6){
			alert('请输入6位以上数字或字母的密码');
			psd1.value="";
		}
		else if(psd1.value!=psd2.value){
			alert("密码不一致！");
			psd1.value="";
			psd2.value="";
		}
		else if(psd1.value.match(/^[a-zA-Z0-9]+$/)==null){
			alert('密码只能长度为6的大小写字母或数字组合');
			psd1.value="";
		}
		if(tel.value.match(/\D/)!=null||tel.value.length<12){
			alert("请输入正确的电话号码");
			tel.value="";
		}
		var reg=
/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
		var mailVal=mail.value;
		if(mailVal.match(reg)==null){
			alert("E-mail格式不正确");
			mailVal="";
		}
		else return;
	}
}
function maps(){
	// 按照默认属性创建地图和标记
	var map = new AMap.Map('map');
    map.setZoom(15);//设置缩放级别
    map.setCenter([116.2695662200,40.1312580041]);//设置中心坐标
    var marker = new AMap.Marker({//创建标记
        position: [116.2695662200,40.1312580041],//设置标记位置
        map:map//设置map属性，使得标记能被立即添加到地图上
    });
	 //marker.setMap();移除点标记
// 创建并且设置信息窗口
	 AMap.plugin('AMap.AdvancedInfoWindow',function(){
       infowindow = new AMap.AdvancedInfoWindow({
        content: '<div class="info-title">高德地图</div><div class="info-content">'+'我的位置。<br/>'+'</div>',//设置信息窗口内容
        offset: new AMap.Pixel(0, 30)//设置窗口位置相对于标记的偏移量
      });
      infowindow.open(map,[121.48,31.22]);//创建好信息窗口后，立即调用open方法，让它显示在需要的位置
	})
// 添加工具条和比例尺子
	AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){//加载工具条和比例尺两个插件放到数组中
        var toolBar = new AMap.ToolBar();//在回调函数里进行控件的生成和添加
        var scale = new AMap.Scale();
        map.addControl(toolBar);
        map.addControl(scale);
    })
	//map.removeControl(toolBar);移除控件
//  click();
}
window.onload=function(){
	maps();
    on_service();
    check();
    nav();
};