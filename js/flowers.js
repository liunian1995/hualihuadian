function color(){
	var liObjs=document.getElementById("menu").getElementsByTagName("li");
	var lis=Array.prototype.slice.call(liObjs,0);
	for(var i=0;i<lis.length;i++){
//		var color=lis[i].getElementsByTagName("span");
		(function(){
			var color=lis[i].getElementsByTagName("span");
			for(var j=0;j<color.length;j++){
				color[j].num=j;
				color[j].onclick=function(){
					for(var x=0;x<color.length;x++){
						color[x].className="";
					}
					this.className="active";
				};
				
			}
		})(i);
	}
}
function page(){
	var number=document.getElementById("pic").getElementsByClassName("number")[0];
	var num=number.getElementsByTagName("span");
	var nums=Array.prototype.slice.call(num,0);
	var numnum=/\snum\d$/
	var pics=document.getElementById("pic").getElementsByClassName("pics");
	for(var i=0;i<nums.length;i++){
		nums[i].index=i;
		nums[i].onclick=function(){
			for(var j=0;j<nums.length;j++){
				nums[j].className="num";
				pics[j].style.display="none";
			}	
			this.className+=" active";
			pics[this.index].style.display="block";
		};
	}
}
function change_flow(){
	var pic=document.getElementById("pic");
	var pics=pic.getElementsByClassName("pics");
	color();
	
}
window.onload=function(){
	color();
	page();
//	change_flow();
	on_service();
	nav();
};
