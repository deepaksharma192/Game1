var config = {
    type: Phaser.CANVAS,
    width: 1080,
    height: 1920,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    physics: {
        default: 'impact',
        impact: {
            gravity: 1080,
            debug: true
        }
    },scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload: preload,
        create: create
    }
};
var cam = null;
var game = new Phaser.Game(config);
var hotspot  = [
        {HName:"hotspot1",catagory:"A",Path:"path1_1,Curve1_1,Curve1_2",pos:"R1_L1",Guti:"Guti1_1",CurrentPath:"path1_1",dr:{'Curve1_2':-1}},
        {HName:"hotspot2",catagory:"A",Path:"path1_2,Curve2_1,Curve2_2,path1_1",pos:"R2_L1",Guti:"Guti1_2",CurrentPath:"path1_2",dr:{'Curve2_2':-1,'path1_1':-1}},
        {HName:"hotspot3",catagory:"A",Path:"path1_3,Curve3_1,Curve3_2,path1_2",pos:"R3_L1",Guti:"Guti1_3",CurrentPath:"path1_3",dr:{'Curve3_2':-1,'path1_2':-1}},
        {HName:"hotspot4",catagory:"A",Path:"path2_1,Curve1_2,Curve1_3",pos:"R1_L2",Guti:"Guti1_4",CurrentPath:"path2_1",dr:{'Curve1_3':-1}},
        {HName:"hotspot5",catagory:"A",Path:"path2_2,Curve2_2,Curve2_3,path2_1",pos:"R2_L2",Guti:"Guti1_5",CurrentPath:"path2_2",dr:{'Curve2_3':-1,'path2_1':-1}},
        {HName:"hotspot6",catagory:"A",Path:"path2_3,Curve3_2,Curve3_3,path2_2",pos:"R3_L2",Guti:"Guti1_6",CurrentPath:"path2_3",dr:{'Curve3_3':-1,'path2_2':-1}},
        {HName:"hotspot7",catagory:"A",Path:"path3_1,Curve1_3,Curve1_4",pos:"R1_L3",Guti:"Guti1_7",CurrentPath:"path3_1",dr:{'Curve1_4':-1}},
        {HName:"hotspot8",catagory:"A",Path:"path3_2,Curve2_3,Curve2_4,path3_1",pos:"R2_L3",Guti:"Guti1_8",CurrentPath:"path3_2",dr:{'Curve2_4':-1,'path3_1':-1}},
        {HName:"hotspot9",catagory:"A",Path:"path3_3,Curve3_3,Curve3_4,path3_2",pos:"R3_L3",Guti:"Guti1_9",CurrentPath:"path3_3",dr:{'Curve3_4':-1,'path3_2':-1}},
        {HName:"hotspot10",catagory:"A",Path:"path4_1,Curve1_4,Curve1_5",pos:"R1_L4",Guti:"Guti1_10",CurrentPath:"path4_1",dr:{'Curve1_5':-1}},
        {HName:"hotspot11",catagory:"A",Path:"path4_2,Curve2_4,Curve2_5,path4_1",pos:"R2_L4",Guti:"Guti1_11",CurrentPath:"path4_2",dr:{'Curve2_5':-1,'path4_1':-1}},
        {HName:"hotspot12",catagory:"A",Path:"path4_3,Curve3_4,Curve3_5,path4_2",pos:"R3_L4",Guti:"Guti1_12",CurrentPath:"path4_3",dr:{'Curve3_5':-1,'path4_2':-1}},
        {HName:"hotspot13",catagory:"B",Path:"path5_1,Curve1_5,Curve1_6",pos:"R1_L1",Guti:"Guti2_1",CurrentPath:"path5_1",dr:{'Curve1_6':-1}},
        {HName:"hotspot14",catagory:"B",Path:"path5_2,Curve2_5,Curve2_6,path5_1",pos:"R2_L1",Guti:"Guti2_2",CurrentPath:"path5_2",dr:{'Curve2_6':-1,'path5_1':-1}},
        {HName:"hotspot15",catagory:"B",Path:"path5_3,Curve3_5,Curve3_6,path5_2",pos:"R3_L1",Guti:"Guti2_3",CurrentPath:"path5_3",dr:{'Curve3_6':-1,'path5_2':-1}},
        {HName:"hotspot16",catagory:"B",Path:"path6_1,Curve1_6,Curve1_7",pos:"R1_L2",Guti:"Guti2_4",CurrentPath:"path6_1",dr:{'Curve1_7':-1}},
        {HName:"hotspot17",catagory:"B",Path:"path6_2,Curve2_6,Curve2_7,path6_1",pos:"R2_L2",Guti:"Guti2_5",CurrentPath:"path6_2",dr:{'Curve2_7':-1,'path6_1':-1}},
        {HName:"hotspot18",catagory:"B",Path:"path6_3,Curve3_6,Curve3_7,path6_2",pos:"R3_L2",Guti:"Guti2_6",CurrentPath:"path6_3",dr:{'Curve3_7':-1,'path6_2':-1}},
        {HName:"hotspot19",catagory:"B",Path:"path7_1,Curve1_7,Curve1_8",pos:"R1_L3",Guti:"Guti2_7",CurrentPath:"path7_1",dr:{'Curve1_8':-1}},
        {HName:"hotspot20",catagory:"B",Path:"path7_2,Curve2_7,Curve2_8,path7_1",pos:"R2_L3",Guti:"Guti2_8",CurrentPath:"path7_2",dr:{'Curve2_8':-1,'path7_1':-1}},
        {HName:"hotspot21",catagory:"B",Path:"path7_3,Curve3_7,Curve3_8,path7_2",pos:"R3_L3",Guti:"Guti2_9",CurrentPath:"path7_3",dr:{'Curve3_8':-1,'path7_2':-1}},
        {HName:"hotspot22",catagory:"B",Path:"path8_1,Curve1_8,Curve1_1",pos:"R1_L4",Guti:"Guti2_10",CurrentPath:"path8_1",dr:{'Curve1_1':-1}},
        {HName:"hotspot23",catagory:"B",Path:"path8_2,Curve2_8,Curve2_1,path8_1",pos:"R2_L4",Guti:"Guti2_11",CurrentPath:"path8_2",dr:{'Curve2_1':-1,'path8_1':-1}},
        {HName:"hotspot24",catagory:"B",Path:"path8_3,Curve3_8,Curve3_1,path8_2",pos:"R3_L4",Guti:"Guti2_12",CurrentPath:"path8_3",dr:{'Curve3_1':-1,'path8_2':-1}},
        {HName:"hotspot25",catagory:"B",Path:"path1_3,path2_3,path3_3,path4_3,path5_3,path6_3,path7_3,path8_3",pos:"R0_L0",Guti:null,CurrentPath:"path8_3",dr:{'path1_3':-1,'path2_3':-1,'path3_3':-1,'path4_3':-1,'path5_3':-1,'path6_3':-1,'path7_3':-1,'path8_3':-1}},
    ];
var GutiData = [{"name":"Guti1_1","path":"path1_1"},{"name":"Guti1_2","path":"path1_2"},{"name":"Guti1_3","path":"path1_3"},{"name":"Guti1_4","path":"path2_1"},{"name":"Guti1_5","path":"path2_2"},{"name":"Guti1_6","path":"path2_3"},{"name":"Guti1_7","path":"path3_1"},{"name":"Guti1_8","path":"path3_2"},{"name":"Guti1_9","path":"path3_3"},{"name":"Guti1_10","path":"path4_1"},{"name":"Guti1_11","path":"path4_2"},{"name":"Guti1_12","path":"path4_3"},{"name":"Guti2_1","path":"path5_1"},{"name":"Guti2_2","path":"path5_2"},{"name":"Guti2_3","path":"path5_3"},{"name":"Guti2_4","path":"path6_1"},{"name":"Guti2_5","path":"path6_2"},{"name":"Guti2_6","path":"path6_3"},{"name":"Guti2_7","path":"path7_1"},{"name":"Guti2_8","path":"path7_2"},{"name":"Guti2_9","path":"path7_3"},{"name":"Guti2_10","path":"path8_1"},{"name":"Guti2_11","path":"path8_2"},{"name":"Guti2_12","path":"path8_3"}];
var CurveLine = ["Curve1_1","Curve1_2","Curve1_3","Curve1_4","Curve1_5","Curve1_6","Curve1_7","Curve1_8","Curve2_1","Curve2_2","Curve2_3","Curve2_4","Curve2_5","Curve2_6","Curve2_7","Curve2_8","Curve3_1","Curve3_2","Curve3_3","Curve3_4","Curve3_5","Curve3_6","Curve3_7","Curve3_8"];
var StraightLine = ["path1_1","path1_2","path1_3","path2_1","path2_2","path2_3","path3_1","path3_2","path3_3","path4_1","path4_2","path4_3","path5_1","path5_2","path5_3","path6_1","path6_2","path6_3","path7_1","path7_2","path7_3","path8_1","path8_2","path8_3"]
function preload ()
{
    this.load.image('blue', 'img/hotspot.png');
     this.load.image('green', 'img/hotspot.png');
     this.load.image('hotspot', 'img/hotspot.png');
}
var t 
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '0x';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function create ()
{
     t =this;
     cam  = this.cameras.add(0, 0, 900, 600);
    //this.game.startFullscreen();
    var graphics = this.add.graphics();
    // graphics.rotation=0.42;
    // graphics.x=150;
    // graphics.y=-110;
 //var colors=  [0xfffff0,0xfffff1,0xfffff2,0xfffff3,0xfffff4,0xfffff5,0xfffff6,0xfffff7,0xfffff0,0xfffff1,0xfffff2,0xfffff3,0xfffff4,0xfffff5,0xfffff6,0xfffff7,0xfffff0,0xfffff1,0xfffff2,0xfffff3,0xfffff4,0xfffff5,0xfffff6,0xfffff7];
    function DrawGamePoints(){
        graphics.clear();
        CurveLine.forEach(function(v,i,arr){
        graphics.lineStyle(3, getRandomColor(), 2);
         eval(v).draw(graphics, 150);  
        }) 
       
        StraightLine.forEach(function(v,i,arr){
            graphics.lineStyle(2, 0xffffff, 1);
         eval(v).draw(graphics, 1);  

        })
    }
    var Curve1_1 = new Phaser.Curves.Ellipse(540, 950, 500, 550,315,360);
    var Curve1_2 = new Phaser.Curves.Ellipse(540, 950, 500, 550,270,315);
    var Curve1_3 = new Phaser.Curves.Ellipse(540, 950, 500, 550,225,270);
    var Curve1_4 = new Phaser.Curves.Ellipse(540, 950, 500, 550,180,225);
    var Curve1_5 = new Phaser.Curves.Ellipse(540, 950, 500, 550,135,180);
    var Curve1_6 = new Phaser.Curves.Ellipse(540, 950, 500, 550,90,135);
    var Curve1_7 = new Phaser.Curves.Ellipse(540, 950, 500, 550,45,90);
    var Curve1_8 = new Phaser.Curves.Ellipse(540, 950, 500, 550,0,45);

    var Curve2_1 = new Phaser.Curves.Ellipse(540, 950, 300, 350,315,360);
    var Curve2_2 = new Phaser.Curves.Ellipse(540, 950, 300, 350,270,315);
    var Curve2_3 = new Phaser.Curves.Ellipse(540, 950, 300, 350,225,270);
    var Curve2_4 = new Phaser.Curves.Ellipse(540, 950, 300, 350,180,225);
    var Curve2_5 = new Phaser.Curves.Ellipse(540, 950, 300, 350,135,180);
    var Curve2_6 = new Phaser.Curves.Ellipse(540, 950, 300, 350,90,135);
    var Curve2_7 = new Phaser.Curves.Ellipse(540, 950, 300, 350,45,90);
    var Curve2_8 = new Phaser.Curves.Ellipse(540, 950, 300, 350,0,45);

    var Curve3_1 = new Phaser.Curves.Ellipse(540, 950, 150, 175,315,360);
    var Curve3_2 = new Phaser.Curves.Ellipse(540, 950, 150, 175,270,315);
    var Curve3_3 = new Phaser.Curves.Ellipse(540, 950, 150, 175,225,270);
    var Curve3_4 = new Phaser.Curves.Ellipse(540, 950, 150, 175,180,225);
    var Curve3_5 = new Phaser.Curves.Ellipse(540, 950, 150, 175,135,180);
    var Curve3_6 = new Phaser.Curves.Ellipse(540, 950, 150, 175,90,135);
    var Curve3_7 = new Phaser.Curves.Ellipse(540, 950, 150, 175,45,90);
    var Curve3_8 = new Phaser.Curves.Ellipse(540, 950, 150, 175,0,45);

    var path1_1 = new Phaser.Curves.Path(897,523).lineTo(754,666);
    var path1_2 = new Phaser.Curves.Path(754,666).lineTo(605,853);
    var path1_3 = new Phaser.Curves.Path(605,853).lineTo(540, 950);

    var path2_1 = new Phaser.Curves.Path(540, 350).lineTo(540, 550);
    var path2_2 = new Phaser.Curves.Path(540, 550).lineTo(540, 750);
    var path2_3 = new Phaser.Curves.Path(540, 750).lineTo(540, 950);

    var path3_1 = new Phaser.Curves.Path(210,497).lineTo(330,660);
    var path3_2 = new Phaser.Curves.Path(330,660).lineTo(459,821);
    var path3_3 = new Phaser.Curves.Path(459,821).lineTo(540, 950);

    var path4_1 = new Phaser.Curves.Path(40, 950).lineTo(240, 950);
    var path4_2 = new Phaser.Curves.Path(240, 950).lineTo(440, 950);
    var path4_3 = new Phaser.Curves.Path(440, 950).lineTo(540, 950);

    var path5_1 = new Phaser.Curves.Path(96,1227).lineTo(272,1128);
    var path5_2 = new Phaser.Curves.Path(272,1128).lineTo(447,1023);
    var path5_3 = new Phaser.Curves.Path(447,1023).lineTo(540, 950);

    var path6_1 = new Phaser.Curves.Path(540, 1550).lineTo(540, 1350);
    var path6_2 = new Phaser.Curves.Path(540, 1350).lineTo(540, 1150);
    var path6_3 = new Phaser.Curves.Path(540, 1150).lineTo(540, 950);

    var path7_1 = new Phaser.Curves.Path(877,1388).lineTo(733, 1244);
    var path7_2 = new Phaser.Curves.Path(733, 1244).lineTo(620, 1070);
    var path7_3 = new Phaser.Curves.Path(620, 1070).lineTo(540, 950);

    var path8_1 = new Phaser.Curves.Path(1040, 950).lineTo(840, 950);
    var path8_2 = new Phaser.Curves.Path(840, 950).lineTo(640, 950);
    var path8_3 = new Phaser.Curves.Path(640, 950).lineTo(540, 950);

    GutiData.forEach(function(v,i,arr){ 
        var check = (v.name.match(/Guti1/g)=="Guti1")?'green':'blue';
        t[(v.name)] = t.add.follower(eval(v.path), 1, 1, check);
        t[(v.name)].Name=v.name;
        t[(v.name)].CurrentPath=v.path;
        SetGuti(t[(v.name)],eval(v.path),false,0);
    })
    DrawGamePoints();
    drowHotspot();
  function drowHotspot(){
     $.each(hotspot,function(k,v){
      //  console.log(v.HName)
        t[v.HName]  =t.add.follower(eval(v.CurrentPath), 1, 1, 'hotspot').setInteractive();
        t[v.HName].catagory=v.catagory;
        t[v.HName].Path=v.Path;
        t[v.HName].pos=v.pos;
        t[v.HName].Guti=v.Guti;
        t[v.HName].CurrentPath=v.CurrentPath;
        t[v.HName].HName=v.HName;
        t[v.HName].dr=v.dr;
            if(v.HName == "hotspot25"){
                SetGuti(t[v.HName],eval(v.CurrentPath),false,-1,0);
            }else{
                SetGuti(t[v.HName],eval(v.CurrentPath),false,0,0);    
            }
    })
  }
function updateHotspotData(){
     $.each(hotspot,function(k,v){
        t[v.HName].catagory=v.catagory;
        t[v.HName].Path=v.Path;
        t[v.HName].pos=v.pos;
        t[v.HName].Guti=v.Guti;
        t[v.HName].CurrentPath=v.CurrentPath;
        t[v.HName].HName=v.HName;
        t[v.HName].dr=v.dr;
    })
}


function SetGuti(gutiName,moveingLine,lineCurve,step){
    var from=(step==-1)?1:0;
    step = (step == -1)?0:step; 
    gutiName.setPath((moveingLine));
    gutiName.startFollow({
        positionOnPath: true,
        duration: 0,
        yoyo: false,
        repeat:0,
        from: from,
        to:step,
    });
}

function moveGuti(gutiName,moveingLine,lineCurve,step,duration){
    var from=(step==-1)?1:0;
    step = (step == -1)?0:step; 
    if(moveingLine == gutiName.CurrentPath){ 
        gutiName.setPath(eval(moveingLine));
    }else{
        gutiName.setPath(eval(moveingLine));
    }

    var path = eval(moveingLine);
    gutiName.startFollow({
        positionOnPath: true,
        duration: duration,
        yoyo: false,
        repeat:0,
        from: from,
        to:step,
        delay:0,
        onStart:function(tween, target){
            gutiName.x=gutiName.xx;
            gutiName.y=gutiName.yy;
           // C_[0].Guti=null;
        },
        onComplete: function(tween, target){
             // delete gutiName;
        },
        onUpdate: function(tween, target){
        }
    });
}
 var killStep =[];
function getSecond(CH,CH1){
    var paths = CH.Path.split(','); 
    var paths1 = CH1.Path.split(','); 
    var firstPath = paths1.filter(function(obj) { return paths.indexOf(obj)   != -1; });
    var getWay={a1:CH1.HName,a2:CH.HName,path1:firstPath[0]};
     ///this['killStep'].push()
   // console.log(firstPath)
   if(CH1.Guti){
    $.each(paths,function(k,v){
        $.each(hotspot,function(k1,v1){
            if(CH.HName  != v1.HName && CH1.HName  != v1.HName){

                var y =v1.Path.split(',').indexOf(v);

                if(y!=-1){
                   
                   //  getWay.push({HName:CH.HName,path:firstPath[0]})
                    var C_CurveCheck =CH1.pos.split('_')[0];
                    var C_lineCheck =CH1.pos.split('_')[1];
                    var T_CurveCheck =v1.pos.split('_')[0];
                    var T_lineCheck =v1.pos.split('_')[1];
                    
                  //  console.log(C_CurveCheck +" = "+T_CurveCheck+" - "+C_lineCheck +" = "+T_lineCheck)
                    if((C_lineCheck == T_lineCheck )){
                        var path_2  = v1.Path.split(',');
                        var movePath = path_2.filter(function(obj) { return obj.indexOf('path')   != -1; });
                        var mo = movePath.filter(function(obj) { return v   == obj; });
                        //  console.log(CH1.HName+" = "+CH.HName +" = "+v1.HName)
                        // console.log("Line",v1.HName)
                         getWay['a3']=v1.HName;
                         getWay['path2']=mo[0];
                        //getWay.push({HName:v1.HName,path:mo[0]})
                        var p = eval(mo[0]);
                        graphics.lineStyle(2, 0xff0000,2);
                        p.draw(graphics, 150);
                    }
                    if(C_CurveCheck == T_CurveCheck){
                        var path_2  = v1.Path.split(',');
                        var movePath = path_2.filter(function(obj) { return obj.indexOf('Curve')   != -1; });
                        var mo = movePath.filter(function(obj) { return CH.Path.split(',').indexOf(obj)   != -1; });
                        if(mo.length){
                               
                            var C = parseInt(C_CurveCheck.match(/\d+/g)[0])
                            var T =parseInt(mo[0].split('_')[0].match(/\d+/g));
                            if((mo[0].match(/Curve/g)=="Curve")&&(C==T)){
                           //  console.log("Curve",v1.HName)
                              getWay['a3']=v1.HName;
                         getWay['path2']=mo[0];
                                var p = eval(mo[0]);
                                graphics.lineStyle(2, 0xff0000,2);
                                p.draw(graphics, 150);
                            }
                        }
                    }
                    if(v1.pos =="R0_L0"){
                        var path_2  = v1.Path.split(',');
                        var movePath = path_2.filter(function(obj) { return obj.indexOf('path')   != -1; });
                        var mo = movePath.filter(function(obj) { return CH.Path.split(',').indexOf(obj)   != -1; });
                        var C = parseInt(C_lineCheck.match(/\d+/g)[0])
                        var T =parseInt(mo[0].split('_')[0].match(/\d+/g));
                        T = (T == 8)? 4:T;
                        T = (T == 7)? 3:T;
                        T = (T == 6)? 2:T;
                        T = (T == 5)? 1:T;
                        if((mo[0].match(/path/g)=="path")&&(C==T)){
                         //  console.log("25",v1.HName)
                           getWay['a3']=v1.HName;
                         getWay['path2']=mo[0];
                            var p = eval(mo[0]);
                            graphics.lineStyle(2, 0xff0000,2);
                            p.draw(graphics, 150);
                        }
                    }
                    if(CH1.pos =="R0_L0"){
                            var path_2  = v1.Path.split(',');
                            var movePath = path_2.filter(function(obj) { return obj.indexOf('path')   != -1; });
                            movePath =movePath[0].split('_')[0];

                            var path_3  = CH.Path.split(',');
                            var movePath1 = path_3.filter(function(obj) { return obj.indexOf('path')   != -1; });
                            movePath1 =movePath1[0].split('_')[0];
                            if(movePath==movePath1){
                                // console.log("1_25",v1.HName)
                                 getWay['a3']=v1.HName;
                         getWay['path2']=v1.CurrentPath;
                                var p = eval(v1.CurrentPath);
                                graphics.lineStyle(2, 0xff0000,2);
                                p.draw(graphics, 150);  
                            }
                        
                    }
                    if(firstPath){
                        var p = eval(firstPath[0]);
                        graphics.lineStyle(2, 0xff0000,2);
                        p.draw(graphics, 150);
                    }
                   // if(getWay.length>0){
                        
                   // }
                  
                }
            }
        })
    })
killStep.push(getWay); 
//console.log(killStep)
}

}
    var getUA={};
   this.input.on('pointerdown', function (event, gameObjects) {
     console.log(event.upX.toFixed(0)+","+event.upY.toFixed(0))
        var CH =gameObjects[0];
        if(CH){
            var paths = CH.Path.split(','); 
            getUA[CH.HName]={};
            getUA[CH.HName].path = paths;
            getUA[CH.HName].startGuiti=t[CH.Guti];
            getUA[CH.HName].changeGutiStatus=CH.Guti;
            getUA[CH.HName].hotspotTarget=CH.HName; 
            getUA[CH.HName].dr=CH.dr;
            getUA[CH.HName].xx=CH.x;
            getUA[CH.HName].yy=CH.y;
             if(Object.keys(getUA).length == 1){
                if(CH.Guti){
                    DrawGamePoints();
                    $.each(paths,function(k,v){
                        $.each(hotspot,function(k1,v1){
                            if(CH.HName  != v1.HName){
                                var y =v1.Path.split(',').indexOf(v);
                                   if(y!=-1){
                                    if(!v1.Guti){
                                        //select first step path.
                                        var p = eval(v);
                                        graphics.lineStyle(2, 0xff0000,2);
                                        p.draw(graphics, 150);
                                    }else{
                                         //select second step path.
                                        getSecond(t[v1.HName],CH);  
                                    }
                                }
                            }
                        })
                    })
                }else{
                    updateHotspotData();
                    DrawGamePoints();
                    getUA={};  
                }
             }else if(Object.keys(getUA).length == 2 && (CH.Guti==null)){

                var movePath = getUA[Object.keys(getUA)[0]].path.filter(function(obj) { return getUA[Object.keys(getUA)[1]].path.indexOf(obj)   != -1; });
                if(movePath[0]){
                     var drMove=(getUA[Object.keys(getUA)[0]].dr[movePath[0]])? -1: 1;   
                     getUA[Object.keys(getUA)[0]].startGuiti.xx=getUA[Object.keys(getUA)[0]].xx;
                getUA[Object.keys(getUA)[0]].startGuiti.yy=getUA[Object.keys(getUA)[0]].yy;
 
                    getUA[Object.keys(getUA)[0]].startGuiti.CurrentPath=movePath[0]; 
                    moveGuti(getUA[Object.keys(getUA)[0]].startGuiti,movePath[0],false,drMove,1000);
                    //console.log(getUA[Object.keys(getUA)[0]].startGuiti)
                     $.each(hotspot,function(k,v){
                        if(v.HName==getUA[Object.keys(getUA)[0]].hotspotTarget){
                            v.Guti=null;
                        }
                        if(v.HName==CH.HName){
                            v.Guti=getUA[Object.keys(getUA)[0]].changeGutiStatus;
                        }
                    })
                }else{
                    //console.log(killStep)
                    var C_ = killStep.filter(function(obj) { return obj.a3 == CH.HName; });
                    //console.log(C_[0])
                   // console.log(getUA[Object.keys(getUA)[0]])
                  //  console.log(CH)
                  var tyu  =(C_.length==2)?C_[1]:C_[0];
                  tyu =(C_.length==3)?C_[2]:tyu;
                    var drMove=(getUA[Object.keys(getUA)[0]].dr[tyu.path1])? -1: 1; 
                    getUA[Object.keys(getUA)[0]].startGuiti.xx=getUA[Object.keys(getUA)[0]].xx;
                    getUA[Object.keys(getUA)[0]].startGuiti.yy=getUA[Object.keys(getUA)[0]].yy;
//console.log(C_)
                    //console.log(tyu)
                  turns=0;
                    moveGuti1(getUA[Object.keys(getUA)[0]].startGuiti,tyu,false,drMove,1000,1);
                    $.each(hotspot,function(k,v){
                        if(v.HName==getUA[Object.keys(getUA)[0]].hotspotTarget){
                            v.Guti=null;
                        }
                        if(v.HName==CH.HName){
                            v.Guti=getUA[Object.keys(getUA)[0]].changeGutiStatus;
                        }
                    })
                }

               
                updateHotspotData();
                DrawGamePoints();
                getUA={};
            }else{
                DrawGamePoints();
                getUA={};
            }
        }
    });
var turns=0;
  function moveGuti1(gutiName,moveingLine,lineCurve,step,duration,turn){
   // console.log(turn)
    var from=(step==-1)?1:0;
    step = (step == -1)?0:step;
     var selectPath =(turn==1)?moveingLine.path1:moveingLine.path2;

    if(selectPath == gutiName.CurrentPath){ 
        gutiName.setPath(eval(selectPath));

    }else{
        gutiName.x=t[moveingLine.a2].x;
                 gutiName.y=t[moveingLine.a2].y;
        gutiName.setPath(eval(selectPath),{from: from,
        to:step});
        gutiName.x=t[moveingLine.a2].x;
                 gutiName.y=t[moveingLine.a2].y;
    }
    var path = eval(selectPath);


    gutiName.startFollow({
        positionOnPath: true,
        duration: duration,
        yoyo: false,
        repeat:0,
        from: from,
        to:step,
        delay:0,
        onStart:function(tween, target){
        
            if(turn == 1 && turns ==0){     
                console.log('star1')
                gutiName.x=gutiName.xx;
                gutiName.y=gutiName.yy;
            }else if(turn == 2 && turns ==2){
                console.log('star2');
                 gutiName.x=t[moveingLine.a2].x;
                 gutiName.y=t[moveingLine.a2].y;
                 console.log(t[moveingLine.a2].x,t[moveingLine.a2].y);
                // console.log(gutiName.xx,gutiName.yy);
            }
      
           
        },
        onComplete: function(tween, target){
            if(turn == 1 && turns ==0){
                var C_ = hotspot.filter(function(obj) { return obj.HName == moveingLine.a2; });
               if(C_[0].Guti){
                    t[C_[0].Guti].x=0;;
                    t[C_[0].Guti].y=0;;
                }
                C_[0].Guti=null;
                var drMove1=(C_[0].dr[moveingLine.path2])? -1: 1;
              //  console.log(gutiName.x,gutiName.y)
                gutiName.xxx=gutiName.x;
                gutiName.yyx=gutiName.y;
                // console.log(gutiName.xx,gutiName.yy)
                moveGuti1(gutiName,moveingLine,false,drMove1,1000,2);
                turns=2;
                killStep =[];
            }else{
                 
                updateHotspotData();
                DrawGamePoints();
                getUA={};
            }
        },
        onUpdate: function(tween, target){
           // console.log(gutiName.x,gutiName.y)
        }
    });
}
    // this.input.on('pointerdown', function (pointer) {
     
    // }, this);
}
