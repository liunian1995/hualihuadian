 

//window.onload=function(){
//	on_service();
//};
window.onscroll = function(){
	var menu=document.getElementById("menu");
	//菜单的每个li
	var mts=menu.getElementsByTagName("li");
	var content=document.getElementById("content");
	//content中每个div块，即每个模块
	var divs=content.getElementsByClassName("same");
	var ht=document.documentElement.scrollTop || document.body.scrollTop; 
	for(var i=0;i<mts.length;i++){
		if(mts.item(i).offsetTop<ht+100 && mts.item(i+1).offsetTop>ht+100){
			for(var x=0;x<=i;x++)
				mts.item(x).style.color="red";
		}
		else{
				mts.item(i).style.color="#ccc";
			}
	}
	if(ht>5){
		menu.style.position="fixed";
		menu.style.top="100px";
		menu.style.right="50px";
		menu.style.display="block";
		}
	else{
		menu.style.position="relative";
		menu.style.display="none";
		}
};  //onscroll end	