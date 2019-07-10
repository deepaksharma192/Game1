var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 650,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    physics: {
        default: 'impact',
        impact: {
            gravity: 800,
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
   
var game = new Phaser.Game(config);
//fgfgfg
function preload ()
{
    this.load.image('blue', 'img/blue.png');
     this.load.image('green', 'img/green.png');
     this.load.image('hotspot', 'img/red.png');
}
function create ()
{//this.game.startFullscreen();
    var graphics = this.add.graphics();
    // graphics.rotation=0.42;
    // graphics.x=150;
    // graphics.y=-110;
 
function DrawGamePoints(){
  graphics.clear();
  graphics.lineStyle(2, 0xffffff, 1);
    Curve1_1.draw(graphics, 150);    
    Curve1_2.draw(graphics, 150);    
    Curve1_3.draw(graphics, 150);    
    Curve1_4.draw(graphics, 150);    
    Curve1_5.draw(graphics, 150);
    Curve1_6.draw(graphics, 150);
    Curve1_7.draw(graphics, 150); 
    Curve1_8.draw(graphics, 150);    
    Curve2_1.draw(graphics, 150);    
    Curve2_2.draw(graphics, 150);    
    Curve2_3.draw(graphics, 150);    
    Curve2_4.draw(graphics, 150);    
    Curve2_5.draw(graphics, 150);    
    Curve2_6.draw(graphics, 150);
    Curve2_7.draw(graphics, 150); 
    Curve2_8.draw(graphics, 150);
    Curve3_1.draw(graphics, 150);
    Curve3_2.draw(graphics, 150);
    Curve3_3.draw(graphics, 150);
    Curve3_4.draw(graphics, 150);    
    Curve3_5.draw(graphics, 150);    
    Curve3_6.draw(graphics, 150);    
    Curve3_7.draw(graphics, 150);    
    Curve3_8.draw(graphics, 150);    
   path1_1.draw(graphics, 1)   
   path1_2.draw(graphics, 1)   
   path1_3.draw(graphics, 1)   
   path2_1.draw(graphics, 1)   
   path2_2.draw(graphics, 1)   
   path2_3.draw(graphics, 1)   
   path3_1.draw(graphics, 1)   
   path3_2.draw(graphics, 1)   
   path3_3.draw(graphics, 1)   
   path4_1.draw(graphics, 1)   
   path4_2.draw(graphics, 1)   
   path4_3.draw(graphics, 1)   
   path5_1.draw(graphics, 1)   
   path5_2.draw(graphics, 1)   
   path5_3.draw(graphics, 1)   
   path6_1.draw(graphics, 1)   
   path6_2.draw(graphics, 1)   
   path6_3.draw(graphics, 1)   
   path7_1.draw(graphics, 1)   
   path7_2.draw(graphics, 1)   
   path7_3.draw(graphics, 1)   
   path8_1.draw(graphics, 1)   
   path8_2.draw(graphics, 1)   
   path8_3.draw(graphics, 1)
}

    var Curve1_1 = new Phaser.Curves.Ellipse(400, 300, 300, 300,315,360);
    var Curve1_2 = new Phaser.Curves.Ellipse(400, 300, 300, 300,270,315);
    var Curve1_3 = new Phaser.Curves.Ellipse(400, 300, 300, 300,225,270);
    var Curve1_4 = new Phaser.Curves.Ellipse(400, 300, 300, 300,180,225);
    var Curve1_5 = new Phaser.Curves.Ellipse(400, 300, 300, 300,135,180);
    var Curve1_6 = new Phaser.Curves.Ellipse(400, 300, 300, 300,90,135);
    var Curve1_7 = new Phaser.Curves.Ellipse(400, 300, 300, 300,45,90);
    var Curve1_8 = new Phaser.Curves.Ellipse(400, 300, 300, 300,0,45);
    var Curve2_1 = new Phaser.Curves.Ellipse(400, 300, 200, 200,315,360);
    var Curve2_2 = new Phaser.Curves.Ellipse(400, 300, 200, 200,270,315);
    var Curve2_3 = new Phaser.Curves.Ellipse(400, 300, 200, 200,225,270);
    var Curve2_4 = new Phaser.Curves.Ellipse(400, 300, 200, 200,180,225);
    var Curve2_5 = new Phaser.Curves.Ellipse(400, 300, 200, 200,135,180);
    var Curve2_6 = new Phaser.Curves.Ellipse(400, 300, 200, 200,90,135);
    var Curve2_7 = new Phaser.Curves.Ellipse(400, 300, 200, 200,45,90);
    var Curve2_8 = new Phaser.Curves.Ellipse(400, 300, 200, 200,0,45);
    var Curve3_1 = new Phaser.Curves.Ellipse(400, 300, 100, 100,315,360);
    var Curve3_2 = new Phaser.Curves.Ellipse(400, 300, 100, 100,270,315);
    var Curve3_3 = new Phaser.Curves.Ellipse(400, 300, 100, 100,225,270);
    var Curve3_4 = new Phaser.Curves.Ellipse(400, 300, 100, 100,180,225);
    var Curve3_5 = new Phaser.Curves.Ellipse(400, 300, 100, 100,135,180);
    var Curve3_6 = new Phaser.Curves.Ellipse(400, 300, 100, 100,90,135);
    var Curve3_7 = new Phaser.Curves.Ellipse(400, 300, 100, 100,45,90);
    var Curve3_8 = new Phaser.Curves.Ellipse(400, 300, 100, 100,0,45);
   var path1_1 = new Phaser.Curves.Path(611, 88).lineTo(542, 158);
   var path1_2 = new Phaser.Curves.Path(542, 158).lineTo(470, 228);
   var path1_3 = new Phaser.Curves.Path(470, 228).lineTo(400, 300);
   var path2_1 = new Phaser.Curves.Path(400, 2).lineTo(400, 100);
   var path2_2 = new Phaser.Curves.Path(400, 100).lineTo(400, 200);
   var path2_3 = new Phaser.Curves.Path(400, 200).lineTo(400, 300);
   var path3_1 = new Phaser.Curves.Path(185, 87).lineTo(257, 158);
   var path3_2 = new Phaser.Curves.Path(257, 158).lineTo(330, 230);
   var path3_3 = new Phaser.Curves.Path(330, 230).lineTo(400, 300);
   var path4_1 = new Phaser.Curves.Path(100, 300).lineTo(200, 300);
   var path4_2 = new Phaser.Curves.Path(200, 300).lineTo(300, 300);
   var path4_3 = new Phaser.Curves.Path(300, 300).lineTo(400, 300);
    var path5_1 = new Phaser.Curves.Path(187, 514).lineTo(257, 440);
   var path5_2 = new Phaser.Curves.Path(257, 440).lineTo(330, 370);
   var path5_3 = new Phaser.Curves.Path(330, 370).lineTo(400, 300);
   var path6_1 = new Phaser.Curves.Path(400, 600).lineTo(400, 500);
   var path6_2 = new Phaser.Curves.Path(400, 500).lineTo(400, 400);
   var path6_3 = new Phaser.Curves.Path(400, 400).lineTo(400, 300);
   var path7_1 = new Phaser.Curves.Path(611, 513).lineTo(539, 440);
   var path7_2 = new Phaser.Curves.Path(539, 440).lineTo(469, 369);
   var path7_3 = new Phaser.Curves.Path(469, 369).lineTo(400, 300);
    var path8_1 = new Phaser.Curves.Path(700, 300).lineTo(600, 300);
   var path8_2 = new Phaser.Curves.Path(600, 300).lineTo(500, 300);
   var path8_3 = new Phaser.Curves.Path(500, 300).lineTo(400, 300);
   
    DrawGamePoints();


    
    var Guti1_1 = this.add.follower(path1_1, 1, 1, 'green');
    Guti1_1.Name="Guti1_1";
    Guti1_1.CurrentPath="path1_1";



    var Guti1_2 = this.add.follower(path1_2, 1, 1, 'green');
    Guti1_2.Name="Guti1_2";
    Guti1_2.CurrentPath="path1_2";

    var Guti1_3 = this.add.follower(path1_3, 1, 1, 'green');
    Guti1_3.Name="Guti1_3";
    Guti1_3.CurrentPath="path1_3";

    var Guti1_4 = this.add.follower(path2_1, 1, 1, 'green');
    Guti1_4.Name="Guti1_4";
    Guti1_4.CurrentPath="path2_1";

    var Guti1_5 = this.add.follower(path2_2, 1, 1, 'green');
    Guti1_5.Name="Guti1_5";
    Guti1_5.CurrentPath="path2_2";

    var Guti1_6 = this.add.follower(path2_3, 1, 1, 'green');
    Guti1_6.Name="Guti1_6";
    Guti1_6.CurrentPath="path2_3";

    var Guti1_7 = this.add.follower(path3_1, 1, 1, 'green');
    Guti1_7.Name="Guti1_7";
    Guti1_7.CurrentPath="path3_1";


    var Guti1_8 = this.add.follower(path3_2, 1, 1, 'green');
    Guti1_8.Name="Guti1_8";
    Guti1_8.CurrentPath="path3_2";

    var Guti1_9 = this.add.follower(path3_3, 1, 1, 'green');
    Guti1_9.Name="Guti1_9";
    Guti1_9.CurrentPath="path3_3";

    var Guti1_10 = this.add.follower(path4_1, 1, 1, 'green');
    Guti1_10.Name="Guti1_10";
    Guti1_10.CurrentPath="path4_1";

    var Guti1_11 = this.add.follower(path4_2, 1, 1, 'green');
    Guti1_11.Name="Guti1_11";
    Guti1_11.CurrentPath="path4_2";

    var Guti1_12 = this.add.follower(path4_3, 1, 1, 'green');
    Guti1_12.Name="Guti1_12";
    Guti1_12.CurrentPath="path4_3";


    var Guti2_1 = this.add.follower(path5_1, 1, 1, 'blue');
    Guti2_1.Name="Guti2_1";
    Guti2_1.CurrentPath="path5_1";

    var Guti2_2 = this.add.follower(path5_2, 1, 1, 'blue');
    Guti2_2.Name="Guti2_2";
    Guti2_2.CurrentPath="path5_2";

    var Guti2_3 = this.add.follower(path5_3, 1, 1, 'blue');
    Guti2_3.Name="Guti2_3";
    Guti2_3.CurrentPath="path5_3";

    var Guti2_4 = this.add.follower(path6_1, 1, 1, 'blue');
    Guti2_4.Name="Guti2_4";
    Guti2_4.CurrentPath="path6_1";

    var Guti2_5 = this.add.follower(path6_2, 1, 1, 'blue');
    Guti2_5.Name="Guti2_5";
    Guti2_5.CurrentPath="path6_2";

    var Guti2_6 = this.add.follower(path6_3, 1, 1, 'blue');
    Guti2_6.Name="Guti2_6";
    Guti2_6.CurrentPath="path6_3";

    var Guti2_7 = this.add.follower(path7_1, 1, 1, 'blue');
    Guti2_7.Name="Guti2_7";
    Guti2_7.CurrentPath="path7_1";

    var Guti2_8 = this.add.follower(path7_2, 1, 1, 'blue');
    Guti2_8.Name="Guti2_8";
    Guti2_8.CurrentPath="path7_2";

    var Guti2_9 = this.add.follower(path7_3, 1, 1, 'blue');
    Guti2_9.Name="Guti2_9";
    Guti2_9.CurrentPath="path7_3";

    var Guti2_10 = this.add.follower(path8_1, 1, 1, 'blue');
    Guti2_10.Name="Guti2_10";
    Guti2_10.CurrentPath="path8_1";

    var Guti2_11 = this.add.follower(path8_2, 1, 1, 'blue');
    Guti2_11.Name="Guti2_11";
    Guti2_11.CurrentPath="path8_2";

    var Guti2_12 = this.add.follower(path8_3, 1, 1, 'blue');
    Guti2_12.Name="Guti2_12";
    Guti2_12.CurrentPath="path8_3";
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
        {HName:"hotspot13",catagory:"B",Path:"path5_1,Curve1_5,Curve1_6",pos:"R1_L5",Guti:"Guti2_1",CurrentPath:"path5_1",dr:{'Curve1_6':-1}},
        {HName:"hotspot14",catagory:"B",Path:"path5_2,Curve2_5,Curve2_6,path5_1",pos:"R2_L5",Guti:"Guti2_2",CurrentPath:"path5_2",dr:{'Curve2_6':-1,'path5_1':-1}},
        {HName:"hotspot15",catagory:"B",Path:"path5_3,Curve3_5,Curve3_6,path5_2",pos:"R3_L5",Guti:"Guti2_3",CurrentPath:"path5_3",dr:{'Curve3_6':-1,'path5_2':-1}},
        {HName:"hotspot16",catagory:"B",Path:"path6_1,Curve1_6,Curve1_7",pos:"R1_L6",Guti:"Guti2_4",CurrentPath:"path6_1",dr:{'Curve1_7':-1}},
        {HName:"hotspot17",catagory:"B",Path:"path6_2,Curve2_6,Curve2_7,path6_1",pos:"R2_L6",Guti:"Guti2_5",CurrentPath:"path6_2",dr:{'Curve2_7':-1,'path6_1':-1}},
        {HName:"hotspot18",catagory:"B",Path:"path6_3,Curve3_6,Curve3_7,path6_2",pos:"R3_L6",Guti:"Guti2_6",CurrentPath:"path6_3",dr:{'Curve3_7':-1,'path6_2':-1}},
        {HName:"hotspot19",catagory:"B",Path:"path7_1,Curve1_7,Curve1_8",pos:"R1_L7",Guti:"Guti2_7",CurrentPath:"path7_1",dr:{'Curve1_8':-1}},
        {HName:"hotspot20",catagory:"B",Path:"path7_2,Curve2_7,Curve2_8,path7_1",pos:"R2_L7",Guti:"Guti2_8",CurrentPath:"path7_2",dr:{'Curve2_8':-1,'path7_1':-1}},
        {HName:"hotspot21",catagory:"B",Path:"path7_3,Curve3_7,Curve3_8,path7_2",pos:"R3_L7",Guti:"Guti2_9",CurrentPath:"path7_3",dr:{'Curve3_8':-1,'path7_2':-1}},
        {HName:"hotspot22",catagory:"B",Path:"path8_1,Curve1_8,Curve1_1",pos:"R1_L8",Guti:"Guti2_10",CurrentPath:"path8_1",dr:{'Curve1_1':-1}},
        {HName:"hotspot23",catagory:"B",Path:"path8_2,Curve2_8,Curve2_1,path8_1",pos:"R2_L8",Guti:"Guti2_11",CurrentPath:"path8_2",dr:{'Curve2_1':-1,'path8_1':-1}},
        {HName:"hotspot24",catagory:"B",Path:"path8_3,Curve3_8,Curve3_1,path8_2",pos:"R3_L8",Guti:"Guti2_12",CurrentPath:"path8_3",dr:{'Curve3_1':-1,'path8_2':-1}},
        {HName:"hotspot25",catagory:"B",Path:"path1_3,path2_3,path3_3,path4_3,path5_3,path6_3,path7_3,path8_3",pos:"R0_L8",Guti:null,CurrentPath:"path8_3",dr:{'path1_3':-1,'path2_3':-1,'path3_3':-1,'path4_3':-1,'path5_3':-1,'path6_3':-1,'path7_3':-1,'path8_3':-1}},
    ]
  //  vat h=[];
  var t =this;
  drowHotspot();
  function drowHotspot(){
     $.each(hotspot,function(k,v){
        this[v.HName]  =t.add.follower(eval(v.CurrentPath), 1, 1, 'hotspot').setInteractive();
        this[v.HName].catagory=v.catagory;
        this[v.HName].Path=v.Path;
        this[v.HName].pos=v.pos;
        this[v.HName].Guti=v.Guti;
        this[v.HName].CurrentPath=v.CurrentPath;
        this[v.HName].HName=v.HName;
        this[v.HName].dr=v.dr;
            if(v.HName == "hotspot25"){
                SetGuti(this[v.HName],eval(v.CurrentPath),false,-1,0);
            }else{
                SetGuti(this[v.HName],eval(v.CurrentPath),false,0,0);    
            }
    })
  }
function updateHotspotData(){
     $.each(hotspot,function(k,v){
        this[v.HName].catagory=v.catagory;
        this[v.HName].Path=v.Path;
        this[v.HName].pos=v.pos;
        this[v.HName].Guti=v.Guti;
        this[v.HName].CurrentPath=v.CurrentPath;
        this[v.HName].HName=v.HName;
        this[v.HName].dr=v.dr;
    })
}
    SetGuti(Guti1_1,path1_1,false,0);
    SetGuti(Guti1_2,path1_2,false,0);
    SetGuti(Guti1_3,path1_3,false,0);
    SetGuti(Guti1_4,path2_1,false,0);
    SetGuti(Guti1_5,path2_2,false,0);
    SetGuti(Guti1_6,path2_3,false,0);
    SetGuti(Guti1_7,path3_1,false,0);
    SetGuti(Guti1_8,path3_2,false,0);
    SetGuti(Guti1_9,path3_3,false,0);
    SetGuti(Guti1_10,path4_1,false,0);
    SetGuti(Guti1_11,path4_2,false,0);
    SetGuti(Guti1_12,path4_3,false,0);

    SetGuti(Guti2_1,path5_1,false,0);
    SetGuti(Guti2_2,path5_2,false,0);
    SetGuti(Guti2_3,path5_3,false,0);
    SetGuti(Guti2_4,path6_1,false,0);
    SetGuti(Guti2_5,path6_2,false,0);
    SetGuti(Guti2_6,path6_3,false,0);
    SetGuti(Guti2_7,path7_1,false,0);
    SetGuti(Guti2_8,path7_2,false,0);
    SetGuti(Guti2_9,path7_3,false,0);
    SetGuti(Guti2_10,path8_1,false,0);
    SetGuti(Guti2_11,path8_2,false,0);
    SetGuti(Guti2_12,path8_3,false,0);
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
        },
        onComplete: function(tween, target){
            if(path.type != 'EllipseCurve'){
             if(step==1 ){
                  gutiName.path.startPoint.x=path._tmpVec2B.x;
                  gutiName.path.startPoint.y=path._tmpVec2B.y;
        
                }else{
                    gutiName.path.startPoint.x=path._tmpVec2A.x;
                     gutiName.path.startPoint.y=path._tmpVec2A.y;
                }
            }
        },
        onUpdate: function(tween, target){

           // console.log(target)
        }
    });
}

    var getUA={};
   this.input.on('pointerup', function (event, gameObjects) {
        var CH =gameObjects[0];
        if(CH){
            var paths = CH.Path.split(','); 
            getUA[CH.HName]={};
            getUA[CH.HName].path = paths;
            getUA[CH.HName].startGuiti=eval(CH.Guti);
            getUA[CH.HName].changeGutiStatus=CH.Guti;
            getUA[CH.HName].hotspotTarget=CH.HName; 
            getUA[CH.HName].dr=CH.dr;
            getUA[CH.HName].xx=CH.x;
            getUA[CH.HName].yy=CH.y;
             if(Object.keys(getUA).length==1){
                DrawGamePoints();
                $.each(paths,function(k,v){
                    $.each(hotspot,function(k1,v1){
                        if(CH.HName  != v1.HName){
                            var y =v1.Path.split(',').indexOf(v);
                               if(y!=-1){
                                if(!v1.Guti){
                                    var p = eval(v);
                                    graphics.lineStyle(2, 0xff0000,2);
                                    p.draw(graphics, 150);
                                }
                            }
                        }
                    })
                })

             }else if(Object.keys(getUA).length == 2 && (CH.Guti==null)){
                var movePath = getUA[Object.keys(getUA)[0]].path.filter(function(obj) { return getUA[Object.keys(getUA)[1]].path.indexOf(obj)   != -1; });
                var drMove=(getUA[Object.keys(getUA)[0]].dr[movePath[0]])? -1: 1;    

                getUA[Object.keys(getUA)[0]].startGuiti.CurrentPath=movePath[0]; 
                getUA[Object.keys(getUA)[0]].startGuiti.xx=getUA[Object.keys(getUA)[0]].xx;
                getUA[Object.keys(getUA)[0]].startGuiti.yy=getUA[Object.keys(getUA)[0]].yy;
                moveGuti(getUA[Object.keys(getUA)[0]].startGuiti,movePath[0],false,drMove,1000);
                $.each(hotspot,function(k,v){
                    if(v.HName==getUA[Object.keys(getUA)[0]].hotspotTarget){
                        v.Guti=null;
                    }
                    if(v.HName==CH.HName){
                        v.Guti=getUA[Object.keys(getUA)[0]].changeGutiStatus;
                    }
                })
                updateHotspotData();
                DrawGamePoints();
                getUA={};
            }else{
                DrawGamePoints();
                getUA={};
            }
        }
    });

  
    this.input.on('pointerdown', function (pointer) {
      console.log(pointer.upX+":X -- Y:"+pointer.upY)
    }, this);
}
