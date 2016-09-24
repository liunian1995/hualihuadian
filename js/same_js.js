function on_service(){
	var service=document.getElementById("on_service");
	var indent=service.getElementsByTagName("span")[1];
	var dis_service=document.getElementById("dis_service");
	service.onclick=function(){
		if(indent.innerHTML=="&lt;&lt;"){
			indent.innerHTML="&gt;&gt;";
			dis_service.style.right="0";
		}else{
			indent.innerHTML="&lt;&lt;";
			dis_service.style.right="-130px";
		}
			
	};
}
//响应式导航栏隐藏和显示
function nav(){
	var nav=document.getElementById("nav");
	var spans=nav.getElementsByTagName("span")[0];
	var uls=nav.getElementsByTagName("ul")[0];
	spans.onclick=function(){
		if(uls.className==""){
			uls.className="appear";
		}
		else{
			uls.className="";
		}
	};
}
function cart_drag(){
	var aCart=document.getElementById("cart");
	aCart.onmousedown=fnDown;
}
function fnDown(event){
	event=event || window.event;
	var aCart=document.getElementById("cart");
	//光标按下时光标和面板之间的距离
	var disX=event.clientX-aCart.offsetLeft,
		disY=event.clientY-aCart.offsetTop;
		//移动
	document.onmousemove=function(event){
		event=event || window.event;
		fnMove(event,disX,disY);
	}
}
function fnMove(e,posX,posY){
	var aCart=document.getElementById("cart");
	var l=e.clientX-posX,
		t=e.clientY-posY;
	aCart.style.left=l+"px";
	aCart.style.top=t+"px";
}

function getByClass(clsName,parent){
	var oCart=document.getElementById("cart");
	
	
}

