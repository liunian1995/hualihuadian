
function prices(){
	var subtract=document.getElementById("subtract");
	var add=document.getElementById("add");
	var numbers=document.getElementById("numbers");
	var alls=document.getElementById("alls");
	add.onclick=function(){
		numbers.innerText=parseInt(numbers.innerText)+1;
		alls.innerText=599*numbers.innerText;
	};
	subtract.onclick=function(){
		if(numbers.innerText<=0){
			alert("产品数量已经为0了,不能再减了哦!");
			numbers.innerText=0;
		}else{
			numbers.innerText=parseInt(numbers.innerText)-1;
			alls.innerText=599*numbers.innerText;
		}
	};
	
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
	tab();
	Img();
	on_service();
	nav();
	cart_drag();
};
