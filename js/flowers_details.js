function prices(){
	var number=document.getElementById("num_sort");
	var all_prices=document.getElementsByClassName("pro_price")[0].getElementsByTagName("strong")[0];
			number.onclick=function(){
				var num=number.value;
				all_prices.innerHTML=599*num;
			}	
}
function starts(){
	var rating=document.getElementsByClassName("rating")[0];
	var start=rating.getElementsByTagName("a");
	var liObjs=rating.getElementsByTagName("li");
	for(var i=0;i<start.length;i++){
		(function(i){
			start[i].onclick=function(){
				var name=liObjs[i].className;
				start[i].style.backgroundPosition="0 "+(i+1)*16*(-1)+"px";
				rating.className="rating "+name+"star";
			}
		})(i);
	}
}
function tab(){
	var tab=document.getElementById("tab");
	var lis=Array.prototype.slice.call(tab.getElementsByTagName('li'),0);
	var tab_content=document.getElementById('tab_content');
	var contents=Array.prototype.slice.call(tab_content.getElementsByTagName('div'),0);
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			if(this.className=='cur') return;
			for(var j=0;j<lis.length;j++){
				if(lis[j].className=="cur")
					contents[lis[j].index].className="content disappear";
				lis[j].className="";
			}
			this.className="cur";
			contents[this.index].className="content show";
		};
	}
}
function Img(){
	var bigImg=document.getElementById("bigimg");
	var smallImg=document.getElementById("imgList").getElementsByTagName("a");
	var smallImgs=Array.prototype.slice.call(smallImg,0);
	for(var i=0;i<smallImgs.length;i++){
		smallImgs[i].index=i;
		smallImgs[i].onmouseover=function(){
			bigImg.setAttribute("src","../images/flowers_"+(this.index+1)+".JPG");
			this.style.border="1px solid skyblue";
		}
		smallImgs[i].onmouseout=function(){
			this.style.border="1px solid #ccc";
		}
		
	}
	bigImg.onmousemove=function(e){
		e=e||window.event;
		
		var large=document.getElementById("large");
		large.style.backgroundImage="url("+bigImg.src+")";
		var sizeX=((e.clientX-this.offsetLeft)/this.offsetWidth)*100;
		var sizeY=(e.offsetY/this.offsetHeight)*100;
		large.style.backgroundPosition=sizeX+"% "+sizeY+"%";
		
//		var newDiv=document.getElementById("move");
//		if(newDiv==null){
//			var newDiv=document.createElement("div");
//			newDiv.setAttribute("id","move");
//			newDiv.className="move";
//			document.getElementById("flProitem").appendChild(newDiv);
//		}
//		newDiv.style.left=e.layerX+50+"px";
//		newDiv.style.top=e.layerY+50+"px";
	};
	
}

window.onload=function(){
	prices();
	starts();
	tab();
	Img();
	on_service();
	nav();
	cart_drag();
};
