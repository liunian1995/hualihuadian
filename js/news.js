
function showList(){
	var pics=document.getElementById("pics")
	var spans=pics.getElementsByClassName("span");
	var divs=pics.getElementsByClassName("div");
	for (var i = 0; i < spans.length; i++) {
		// spans[i].num=i;
			(function(x){
				spans[x].onclick=function(){
				if (divs[x].offsetHeight==0) {
					for (var j = 0; j < spans.length; j++) {
						spans[j].className="span";
						divs[j].className="div";
						}
					divs[x].className="div cur";
				}
				else{
					divs[x].className="div disappear";
					spans[x].className="span";
				}
			}
		})(i);
	}
}
function zan(){
	var icon=document.getElementById("icon");
	var zan=icon.getElementsByClassName("com")[0];
	var nums=icon.getElementsByClassName("num")[0];
	zan.onclick=function(){
		if(zan.className=="com"){
			zan.style.color="#00A0E9";
			zan.className+=" active";
			nums.innerText=parseInt(nums.innerText)+1;
//			alert(nums.innerText);
		}else{
			zan.style.color="#000";
			zan.className="com";
			nums.innerText=parseInt(nums.innerText)-1;
		}
		
	}
}
//胶卷滚动
function scroll(){
	var box=document.getElementById("box");
	var uls=box.getElementsByTagName("ul")[0];
	var lis=box.getElementsByTagName("li");
	uls.innerHTML+=uls.innerHTML;
	uls.style.width=lis[0].offsetWidth*lis.length+"px";
	setInterval(function(){
		if(uls.offsetLeft<-uls.offsetWidth/2){
			uls.style.left="0px";
		}else{
			uls.style.left=uls.offsetLeft-5+"px";
		}
	},100);
}
window.onload=function(){
	on_service();
	showList();
	zan();
	scroll();
	nav();
};
