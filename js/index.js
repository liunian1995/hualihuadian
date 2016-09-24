//搜索框的onfocus和onblur
function search(){
	var inputSearch=document.getElementById("text");
	inputSearch.onfocus=function(){
		this.placeholder="";
	}
	inputSearch.onblur=function(){
		this.placeholder="请输入商品的名称";
	}
}
//banner条轮播效果
function click(){
	var left=document.getElementById("left");
	var right=document.getElementById("right");
	var pics=['images/pic6.png','images/lun_pic2.png','images/lun_pic3.png'];
	var Img=document.getElementById("pic");
	var aDiv=document.getElementById("banner").getElementsByTagName("div");
	var num=0;
	right.onclick=function(){
		clearInterval(timer);
		num++;
		if(num==pics.length) num=0;
		modify();
		timer=setInterval(autoPlay,3000);
	};
	left.onclick=function(){
		clearInterval(timer);
		num--;
		if(num==-1) num=pics.length-1;
		modify();
		timer=setInterval(autoPlay,3000);
	};
	function modify(){
		clearInterval(timer);
		// Img.className="disappear";
		Img.src=pics[num];
		// Img.className="appear";
		for(var i=0;i<aDiv.length;i++){
			aDiv[i].className="circle"+i;
		}
		aDiv[num].className+=" active";
		timer=setInterval(autoPlay,3000);
	}
	for(var j=0;j<aDiv.length;j++){
		(function(j){
			aDiv[j].onclick=function(){
				num=j;
				modify();
			};
			
		})(j);
	}
	function autoPlay(){
		num++;
		if(num==pics.length) num=0;
		modify();
	}
	var timer=setInterval(autoPlay,3000);
}

window.onload=function(){
	search();
	on_service();
	nav();
	click();
	cart_drag();
//	small_search();
};