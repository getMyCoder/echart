$(function(){ 
   $(".container").height(document.documentElement.clientHeight);
// <--------------------title-------------------------------------------------------->
   var conJson={
   	   Tit:[
   	          ["title01",160,"接入终端数量",55],
   	          ["title02",160,"今日接入数量",55],
   	          ["title03",160,"今日新增存储数量",55],
   	          ["title04",120,"总存储量",40],
   	          ["title05",110,"当前任务个数",35],
   	          ["title06",100,"当前集群数",35]
   	       ],
   	   BL:[
   	          ["A机型",30,"#0072e8",25],
   	          ["B机型",55,"#dd954f",50],
   	          ["C机型",80,"#37338f",75],
   	          ["D机型",105,"#00af59",100],
   	          ["E机型",130,"#00b5c5",125],
   	          ["F机型",155,"#009e9a",150],
   	          ["G机型",180,"#b2246c",175]
   	       ],
   	   BM:[
	   	      ["#0072e8",0,30],
	   	      ["#dd954f",30,50],
	   	      ["#37338f",50,180],
	   	      ["#00af59",180,200],
	   	      ["#00b5c5",200,250],
	   	      ["#009e9a",250,300],
	   	      ["#b2246c",300,360],
	   	      ["#b2246c",0,0]
   	      ],
   	   BR:[
   	          ["items1",66,"#007930"],
   	          ["items2",52,"#006bd1"],
   	          ["items3",34,"#008681"]
   	      ],
       BTR:[20,36,66,55,23,65,45,89,56,23,55,44,77,88,99,66,22,11,44,77,88,99,100,120,130,120,111,9,56,23,55],
       BTL:{
   	       RColor:['#0067cf','#009895','#fa8a31'],
           arr:[
               [150,180,158,168,200,120,140],
               [120,150,120,105,170,150,160],
               [100,100,100,70,120,180,120]
           ]
       }
   };
 // <----------------------------------------------------------------------------------->  
	for (var a=0;a<conJson.Tit.length;a++) {
	   	titleStroke(conJson.Tit[a][0],conJson.Tit[a][1],conJson.Tit[a][2],conJson.Tit[a][3])
	}
// <--------------------------------------bodyLeft-------------------------------------->
   var ogBl=getCanvas("bLeft");  
   for (var b=0;b<conJson.BL.length;b++) {
   	   middleLeft(ogBl,conJson.BL[b][0],conJson.BL[b][1],conJson.BL[b][2],conJson.BL[b][3])
   }
// <--------------------------------------bodyMiddle-------------------------------------->		
   var obgBM=getCanvas("bMiddle");
   var radius=80;
   for (var c=0;c<conJson.BM.length;c++) {
   	   countColor(obgBM,conJson.BM[c][0],radius,conJson.BM[c][1],conJson.BM[c][2]);   	   
   	   if(c!=(conJson.BM.length-1)){
   	    	countText(obgBM,conJson.BM[c][0],conJson.BM[c][1],conJson.BM[c][2],conJson.BL[c][0]);
   	   }
   }
   obgBM.save();
   obgBM.translate(155,130);
   obgBM.fillStyle=$(".container").css('background');
   obgBM.arc(0,0,45,0,Math.PI*2);
   obgBM.fill();
   obgBM.restore();
// <--------------------------------------bodyRight-------------------------------------->		
   for (var d=0;d<conJson.BR.length;d++) {
   	   countArc(conJson.BR[d][0],conJson.BR[d][1],conJson.BR[d][2])
   }
// <--------------------------------------conRight-------------------------------------->	
   var conL=getCanvas("conLeft");
   conL.strokeStyle="#033147";
   conL.translate(45.5,170.5);
   conL.moveTo(0,0);
   conL.lineTo(0,-160.5);
    conL.moveTo(0,0);
   conL.lineTo(475.5,0);
   conL.stroke();
   conL.fillStyle="#fff";
   conL.font="10px Airal";
   conL.textAlign='right';
   for (var d=0;d<=5;d++){
       conL.fillText(d*30,-10,-d*33+5)
   }
    var Data=new Date();
    for (var f=0;f<=10;f++){
        var GD=new Date(Data.getTime() - (f*3+1) * 24 * 3600 * 1000);
        var GM=GD.getMonth()+1;
        var Gd=GD.getDate();
        conL.save();
        conL.translate(f*42,0);
        conL.rotate(-Math.PI/4);
        conL.fillText(GM+"/"+Gd,0,15);
        conL.restore();
    }
    conL.save();
    conL.beginPath();
    conL.strokeStyle="#009991";
    var sizeB=33/30;
    conL.moveTo(0,-conJson.BTR[0]*sizeB);
    var arr=[];
    for (var g=0;g<conJson.BTR.length;g++){
        var arrS=[];
        arrS.push(g*14);
        arrS.push(-conJson.BTR[g]);
        arr.push(arrS);
        arrS=[];
    }
    var h=0;
    var timer=setInterval(function () {
        if (h<arr.length-1){
            var numbS=(arr[h+1][0]-arr[h][0])/2+arr[h][0];
            conL.bezierCurveTo(numbS,arr[h][1]*sizeB,numbS,arr[h+1][1]*sizeB,arr[h+1][0],arr[h+1][1]*sizeB);
            conL.strokeStyle="#009991";
            conL.stroke();
            h++;
        }else{
            clearInterval(timer);
            conL.fillStyle="rgba(0,153,145,0.1)";
            conL.lineTo((conJson.BTR.length-1)*14,0);
            conL.lineTo(0,0);
            conL.lineTo(0,-conJson.BTR[0]);
            conL.fill();
        }
    },30);
    conL.closePath();
    conL.restore();
// <---------------------------------------lastCanvas-------------------------------------->
    var conR=getCanvas("conRight");
    var RSize=35/100;
    var timeS=[];
    conR.translate(30.5,180.5);
    clearCan();
    function clearCan() {
        conR.beginPath();
        conR.beginPath();
        conR.strokeStyle="#033147";
        conR.fillStyle="#fff";
        conR.moveTo(0,0);
        conR.lineTo(0,-170.5);
        conR.moveTo(0,0);
        conR.lineTo(365.5,0);
        conR.stroke();
        conR.closePath();
        conR.beginPath();
        conR.strokeStyle="#fff";
        conR.fillStyle="#fff";
        conR.font="10px Airal";
        conR.textAlign='right';
        for (var i=0;i<=5;i++){
            conR.fillText(i*100,-10,-i*35+5)
        }
        var DataT=new Date();
        for (var j=0;j<7;j++){
            var GDT=new Date(DataT.getTime() - (j*10) * 60*1000);
            var GMT=GDT.getHours();
            var GdT=GDT.getMinutes();
            conR.fillText(GMT+":"+GdT,j*60+10,15);
            timeS.push(GMT+":"+GdT)
        }
        conR.closePath();
        for (var m=0;m<conJson.BTL.arr.length;m++){
            lineT(conR,conJson.BTL.RColor[m],conJson.BTL.arr[m],RSize,2);
        }
        styleR("网络",conJson.BTL.RColor[0],-130,-135);
        styleR("内存",conJson.BTL.RColor[1],-105,-110);
        styleR("CPU",conJson.BTL.RColor[2],-80,-85);
        function styleR(RText,RCOLOR,PR,APR) {
            conR.save();
            conR.beginPath();
            conR.fillStyle=RCOLOR;
            conR.font="12px Times";
            conR.moveTo(395,APR);
            conR.arc(395,APR,7.5,0,Math.PI*2);
            conR.closePath();
            conR.fill();
            conR.beginPath();
            conR.fillStyle="#fff";
            conR.fillText(RText,435,PR);
            conR.closePath();
            conR.restore();
        }
    }
    var posR=[0,35,95,155,215,275,335,395];
    var posX1=0,posX2=0,itemsO=0;
    $("#conRight").click(function () {
        conR.clearRect(-30.5,-180.5,490,200);
    });
    $("#conRight").mouseenter(function () {
        $(".mD").show();
       $(this).mousemove(function (evt) {
           var posP=evt.clientX-$(this).position().left-30.5;
           var posPT=evt.clientY-$(this).position().top-180.5;
           for (var o=0;o<posR.length;o++){
               if (posP>posR[o] && posP<posR[o+1]){
                   posX1=posR[o];
                   posX2=posR[o+1];
                   itemsO=o;
               }
           }
           $(".mD").find("h2").html(timeS[itemsO]);
           $(".mD").find("p").eq(0).find("i").html(conJson.BTL.arr[0][itemsO]);
           $(".mD").find("p").eq(1).find("i").html(conJson.BTL.arr[1][itemsO]);
           $(".mD").find("p").eq(2).find("i").html(conJson.BTL.arr[2][itemsO]);
           if (posP>posX1 && posP<posX2){
               conR.clearRect(-30.5,-180.5,490,200);
               clearCan();
               conR.save();
               conR.beginPath();
               conR.strokeStyle="rgba(255,255,255,1)";
               conR.moveTo(itemsO*60,0);
               conR.lineTo(itemsO*60,-170);
               conR.closePath();
               conR.stroke();
               conR.restore();
               for (var p=0;p<conJson.BTL.arr.length;p++){
                   conR.save();
                   conR.beginPath();
                   conR.strokeStyle=conJson.BTL.RColor[p];
                   conR.fillStyle=conJson.BTL.RColor[p];
                   conR.moveTo(itemsO*60,-conJson.BTL.arr[p][itemsO]*RSize);
                   conR.arc(itemsO*60,-conJson.BTL.arr[p][itemsO]*RSize,5,0,Math.PI*2);
                   conR.closePath();
                   conR.fill();
                   conR.stroke();
                   conR.restore();
               }
           }
           if (posP>365){
               if ((posP>387 && posP<412) && (posPT>-142 && posPT<-128)){
                   lineRL(0)
               }else if ((posP>387 && posP<412) && (posPT>-117 && posPT<-103)){
                   lineRL(1)
               }else if ((posP>387 && posP<412) && (posPT>-92 && posPT<-77)){
                   lineRL(2)
               }else{
                   conR.clearRect(-30.5,-180.5,490,200);
                   clearCan();
               }
               $(".mD").hide()
           }
           if ((posP<365 && posP>0) && (posPT>-180 && posPT<0)){
               $(".mD").show()
           }
           var DX=evt.clientX+10,DY=evt.clientY+10;
           $(".mD").css({"top":DY+"px","left":DX+"px"})
       });
       $(this).mouseout(function () {
           conR.clearRect(-30.5,-180.5,490,200);
           clearCan();
           $(".mD").hide()
       });
   });
    function lineRL(itsS) {
        for (var q=0;q<conJson.BTL.arr[0].length;q++){
            conR.save();
            conR.beginPath();
            conR.strokeStyle=conJson.BTL.RColor[itsS];
            conR.fillStyle=conJson.BTL.RColor[itsS];
            conR.moveTo(q*60,-conJson.BTL.arr[itsS][q]*RSize);
            conR.arc(q*60,-conJson.BTL.arr[itsS][q]*RSize,5,0,Math.PI*2);
            conR.closePath();
            conR.fill();
            conR.stroke();
            conR.restore();
        }
    }
});
//<---------------------------------------封装函数-------------------------------------->
//getID/get2D
function getCanvas(ID){
   var canva=document.getElementById(ID);
   var oGc=canva.getContext('2d');	
   return oGc;
}
//title
function titleStroke(DivName,endP,text,textL){
   var DivName=document.getElementById(DivName);
   var Div=DivName.getContext("2d");
   Div.save() ;
   Div.fillStyle="#00918b";
   Div.fillRect(0,0,4,4);       	   
   Div.strokeStyle="#00918b";       	   
   Div.moveTo(0,0);
   Div.lineTo(30,30);
   Div.lineTo(endP,30);
   Div.stroke();
   Div.font="12px impact";
   Div.fillText(text,textL,45);
   Div.restore()
}
//bodyLeft
function middleLeft(DivM,text,textT,arcColor,arcT){
  	DivM.save();  	
    DivM.font="12px Times";
  	DivM.fillStyle="#fff";
  	DivM.fillText(text,45,textT);
  	DivM.beginPath();
  	DivM.fillStyle=arcColor; 
    DivM.arc(20,arcT,6,0,Math.PI*2,false) ;
    DivM.closePath();
    DivM.fill();
    DivM.restore();
  }
//bodyMiddle
function countColor(arcDiv,bgColor,radius,sDeg,eDeg){
   	var startDeg=Math.PI/(180/sDeg);
   	var endDeg=Math.PI/(180/eDeg);
	arcDiv.save();	
	arcDiv.fillStyle=bgColor;
	arcDiv.translate(155,130);
	arcDiv.beginPath(); 
	arcDiv.arc(0,0,radius,startDeg, endDeg);
	arcDiv.lineTo(0,0); 
	arcDiv.closePath();
	arcDiv.fill();	
	arcDiv.restore();	
}
function countText(arcDiv,bgColor,sDeg,eDeg,textH){
    var startDeg=Math.PI/(180/sDeg);
   	var endDeg=Math.PI/(180/eDeg);
	arcDiv.save();  
    arcDiv.strokeStyle=bgColor;
    arcDiv.translate(155,130);
    arcDiv.rotate(startDeg+(endDeg-startDeg)/2);
    arcDiv.moveTo(0,0);
    arcDiv.lineTo(100,0);
    arcDiv.translate(120,0);
    arcDiv.font="14px Times";
  	arcDiv.fillStyle=bgColor;
  	arcDiv.rotate(-(startDeg+(endDeg-startDeg)/2));
  	arcDiv.fillText(textH,-18,8);
    arcDiv.stroke();
	arcDiv.restore();		
}
//bodyRight
function countArc(DivNameR,_Pre,arcColor){   
   var DivNameRs=document.getElementById(DivNameR);
   var RDiv=DivNameRs.getContext("2d");   
   var RDeg=(_Pre/100)*360;
   var REDeg=Math.PI/(180/RDeg);
   
   RDiv.save();    
   RDiv.fillStyle="#063145";
   RDiv.beginPath();
   RDiv.translate(66,66);
   RDiv.arc(0,0,56,0,Math.PI*2);
   RDiv.moveTo(56,0);
   RDiv.lineTo(66,0);
   RDiv.arc(0,0,66,0,Math.PI*2,true);
   RDiv.closePath();
   RDiv.fill();
   
   RDiv.fillStyle=arcColor;
   RDiv.beginPath();
   RDiv.arc(0,-61,5,0,Math.PI*2);
   RDiv.lineTo(0,0) ;
   RDiv.closePath();   
   RDiv.fill();
   RDiv.restore();
   
   RDiv.save();
   RDiv.fillStyle=arcColor;
   RDiv.beginPath();
   RDiv.translate(66,66);
   RDiv.rotate(REDeg);
   RDiv.arc(0,-61,5,0,Math.PI*2);
   RDiv.lineTo(0,0);
   RDiv.closePath();   
   RDiv.fill();
   
   RDiv.fillStyle=arcColor;
   RDiv.beginPath();
// RDiv.translate(66,66)
   RDiv.rotate(-REDeg);
   RDiv.arc(0,0,56,REDeg-Math.PI/2,-Math.PI/2,true);
   RDiv.lineTo(0,-66);
   RDiv.arc(0,0,66,-Math.PI/2,REDeg-Math.PI/2);
   RDiv.lineTo(0,0);
   RDiv.closePath();
   RDiv.fill();
   
   RDiv.fillStyle="#fff";
   RDiv.font="18px Airal";
   RDiv.beginPath();
   RDiv.fillText(_Pre+"%",-15,8);
   RDiv.closePath();
   RDiv.fill();
   RDiv.restore();
}
// bottomRight
function lineT(DivR,lineColor,arrSR,RSize,Radiu) {
    DivR.save();
    DivR.beginPath();
    DivR.strokeStyle=lineColor;
    DivR.fillStyle=lineColor;
    for (var l=0;l<arrSR.length;l++){
        DivR.moveTo(l*60,-arrSR[l]*RSize,Radiu,0,Math.PI*2);
        DivR.arc(l*60,-arrSR[l]*RSize,Radiu,0,Math.PI*2);
    }
    DivR.fill();
    DivR.stroke();
    DivR.moveTo(0,-arrSR[0]*RSize);
    for (var k=0;k<arrSR.length;k++){
        DivR.lineTo(k*60,-arrSR[k]*RSize)
    }
    DivR.stroke();
    DivR.closePath();
    DivR.restore();
}