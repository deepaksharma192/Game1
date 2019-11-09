var config = {
    type: Phaser.CANVAS,
    width: 1080,
    height: 1820,
    backgroundColor: 'rgba(255,110,110,0)',

    parent: 'phaser-example',
    physics: {
        default: 'impact',
        impact: {
            gravity: 1080,
            debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload: preload,
        create: create
    }
};
var KillGuti = { A: [], B: [] }


var game = new Phaser.Game(config);
var hotspot = [
    { HName: "hotspot1", catagory: "A", Path: "path1_1,Curve1_1,Curve1_2", pos: "R1_L1", Guti: "Guti1_1", CurrentPath: "path1_1", dr: { 'Curve1_2': -1 } },
    { HName: "hotspot2", catagory: "A", Path: "path1_2,Curve2_1,Curve2_2,path1_1", pos: "R2_L1", Guti: "Guti1_2", CurrentPath: "path1_2", dr: { 'Curve2_2': -1, 'path1_1': -1 } },
    { HName: "hotspot3", catagory: "A", Path: "path1_3,Curve3_1,Curve3_2,path1_2", pos: "R3_L1", Guti: "Guti1_3", CurrentPath: "path1_3", dr: { 'Curve3_2': -1, 'path1_2': -1 } },
    { HName: "hotspot4", catagory: "A", Path: "path2_1,Curve1_2,Curve1_3", pos: "R1_L2", Guti: "Guti1_4", CurrentPath: "path2_1", dr: { 'Curve1_3': -1 } },
    { HName: "hotspot5", catagory: "A", Path: "path2_2,Curve2_2,Curve2_3,path2_1", pos: "R2_L2", Guti: "Guti1_5", CurrentPath: "path2_2", dr: { 'Curve2_3': -1, 'path2_1': -1 } },
    { HName: "hotspot6", catagory: "A", Path: "path2_3,Curve3_2,Curve3_3,path2_2", pos: "R3_L2", Guti: "Guti1_6", CurrentPath: "path2_3", dr: { 'Curve3_3': -1, 'path2_2': -1 } },
    { HName: "hotspot7", catagory: "A", Path: "path3_1,Curve1_3,Curve1_4", pos: "R1_L3", Guti: "Guti1_7", CurrentPath: "path3_1", dr: { 'Curve1_4': -1 } },
    { HName: "hotspot8", catagory: "A", Path: "path3_2,Curve2_3,Curve2_4,path3_1", pos: "R2_L3", Guti: "Guti1_8", CurrentPath: "path3_2", dr: { 'Curve2_4': -1, 'path3_1': -1 } },
    { HName: "hotspot9", catagory: "A", Path: "path3_3,Curve3_3,Curve3_4,path3_2", pos: "R3_L3", Guti: "Guti1_9", CurrentPath: "path3_3", dr: { 'Curve3_4': -1, 'path3_2': -1 } },
    { HName: "hotspot10", catagory: "A", Path: "path4_1,Curve1_4,Curve1_5", pos: "R1_L4", Guti: "Guti1_10", CurrentPath: "path4_1", dr: { 'Curve1_5': -1 } },
    { HName: "hotspot11", catagory: "A", Path: "path4_2,Curve2_4,Curve2_5,path4_1", pos: "R2_L4", Guti: "Guti1_11", CurrentPath: "path4_2", dr: { 'Curve2_5': -1, 'path4_1': -1 } },
    { HName: "hotspot12", catagory: "A", Path: "path4_3,Curve3_4,Curve3_5,path4_2", pos: "R3_L4", Guti: "Guti1_12", CurrentPath: "path4_3", dr: { 'Curve3_5': -1, 'path4_2': -1 } },
    { HName: "hotspot13", catagory: "B", Path: "path5_1,Curve1_5,Curve1_6", pos: "R1_L1", Guti: "Guti2_1", CurrentPath: "path5_1", dr: { 'Curve1_6': -1 } },
    { HName: "hotspot14", catagory: "B", Path: "path5_2,Curve2_5,Curve2_6,path5_1", pos: "R2_L1", Guti: "Guti2_2", CurrentPath: "path5_2", dr: { 'Curve2_6': -1, 'path5_1': -1 } },
    { HName: "hotspot15", catagory: "B", Path: "path5_3,Curve3_5,Curve3_6,path5_2", pos: "R3_L1", Guti: "Guti2_3", CurrentPath: "path5_3", dr: { 'Curve3_6': -1, 'path5_2': -1 } },
    { HName: "hotspot16", catagory: "B", Path: "path6_1,Curve1_6,Curve1_7", pos: "R1_L2", Guti: "Guti2_4", CurrentPath: "path6_1", dr: { 'Curve1_7': -1 } },
    { HName: "hotspot17", catagory: "B", Path: "path6_2,Curve2_6,Curve2_7,path6_1", pos: "R2_L2", Guti: "Guti2_5", CurrentPath: "path6_2", dr: { 'Curve2_7': -1, 'path6_1': -1 } },
    { HName: "hotspot18", catagory: "B", Path: "path6_3,Curve3_6,Curve3_7,path6_2", pos: "R3_L2", Guti: "Guti2_6", CurrentPath: "path6_3", dr: { 'Curve3_7': -1, 'path6_2': -1 } },
    { HName: "hotspot19", catagory: "B", Path: "path7_1,Curve1_7,Curve1_8", pos: "R1_L3", Guti: "Guti2_7", CurrentPath: "path7_1", dr: { 'Curve1_8': -1 } },
    { HName: "hotspot20", catagory: "B", Path: "path7_2,Curve2_7,Curve2_8,path7_1", pos: "R2_L3", Guti: "Guti2_8", CurrentPath: "path7_2", dr: { 'Curve2_8': -1, 'path7_1': -1 } },
    { HName: "hotspot21", catagory: "B", Path: "path7_3,Curve3_7,Curve3_8,path7_2", pos: "R3_L3", Guti: "Guti2_9", CurrentPath: "path7_3", dr: { 'Curve3_8': -1, 'path7_2': -1 } },
    { HName: "hotspot22", catagory: "B", Path: "path8_1,Curve1_8,Curve1_1", pos: "R1_L4", Guti: "Guti2_10", CurrentPath: "path8_1", dr: { 'Curve1_1': -1 } },
    { HName: "hotspot23", catagory: "B", Path: "path8_2,Curve2_8,Curve2_1,path8_1", pos: "R2_L4", Guti: "Guti2_11", CurrentPath: "path8_2", dr: { 'Curve2_1': -1, 'path8_1': -1 } },
    { HName: "hotspot24", catagory: "B", Path: "path8_3,Curve3_8,Curve3_1,path8_2", pos: "R3_L4", Guti: "Guti2_12", CurrentPath: "path8_3", dr: { 'Curve3_1': -1, 'path8_2': -1 } },
    { HName: "hotspot25", catagory: "B", Path: "path1_3,path2_3,path3_3,path4_3,path5_3,path6_3,path7_3,path8_3", pos: "R0_L0", Guti: null, CurrentPath: "path8_3", dr: { 'path1_3': -1, 'path2_3': -1, 'path3_3': -1, 'path4_3': -1, 'path5_3': -1, 'path6_3': -1, 'path7_3': -1, 'path8_3': -1 } },
];

var Curve_line = ["Curve1_1", "Curve1_5", "Curve2_1", "Curve2_5", "Curve3_1", "Curve3_5"];
var GutiData = [{ "name": "Guti1_1", "path": "path1_1" }, { "name": "Guti1_2", "path": "path1_2" }, { "name": "Guti1_3", "path": "path1_3" }, { "name": "Guti1_4", "path": "path2_1" }, { "name": "Guti1_5", "path": "path2_2" }, { "name": "Guti1_6", "path": "path2_3" }, { "name": "Guti1_7", "path": "path3_1" }, { "name": "Guti1_8", "path": "path3_2" }, { "name": "Guti1_9", "path": "path3_3" }, { "name": "Guti1_10", "path": "path4_1" }, { "name": "Guti1_11", "path": "path4_2" }, { "name": "Guti1_12", "path": "path4_3" }, { "name": "Guti2_1", "path": "path5_1" }, { "name": "Guti2_2", "path": "path5_2" }, { "name": "Guti2_3", "path": "path5_3" }, { "name": "Guti2_4", "path": "path6_1" }, { "name": "Guti2_5", "path": "path6_2" }, { "name": "Guti2_6", "path": "path6_3" }, { "name": "Guti2_7", "path": "path7_1" }, { "name": "Guti2_8", "path": "path7_2" }, { "name": "Guti2_9", "path": "path7_3" }, { "name": "Guti2_10", "path": "path8_1" }, { "name": "Guti2_11", "path": "path8_2" }, { "name": "Guti2_12", "path": "path8_3" }];
var CurveLine = ["Curve1_1", "Curve1_2", "Curve1_3", "Curve1_4", "Curve1_5", "Curve1_6", "Curve1_7", "Curve1_8", "Curve2_1", "Curve2_2", "Curve2_3", "Curve2_4", "Curve2_5", "Curve2_6", "Curve2_7", "Curve2_8", "Curve3_1", "Curve3_2", "Curve3_3", "Curve3_4", "Curve3_5", "Curve3_6", "Curve3_7", "Curve3_8"];
var StraightLine = ["path1_1", "path1_2", "path1_3", "path2_1", "path2_2", "path2_3", "path3_1", "path3_2", "path3_3", "path4_1", "path4_2", "path4_3", "path5_1", "path5_2", "path5_3", "path6_1", "path6_2", "path6_3", "path7_1", "path7_2", "path7_3", "path8_1", "path8_2", "path8_3"]

function preload() {
    $('.phaser-example').hide()
    this.load.image('blue', 'img/blue.png');
    this.load.image('green', 'img/green.png');
    this.load.image('hotspot', 'img/hotspot.png');
}
var t;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '0x';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setting() {
    swal("Good job!", "You clicked the button!", "success")
}

function create() {

    $('.phaser-example').show()
    t = this;
    //  this.stage.backgroundColor = "#4488AA";
    //this.game.startFullscreen();
    var graphics = this.add.graphics();
    // graphics.rotation=0.42;
    // graphics.x=150;
    // graphics.y=-110;
    var colors = [0xFFFF00, 0xfffff1, 0xFFFF00, 0xfffff3, 0xFFFF00, 0xfffff5, 0xFFFF00, 0xfffff7, 0xFFFF00, 0xfffff1, 0xFFFF00, 0xfffff3, 0xFFFF00, 0xfffff5, 0xFFFF00, 0xfffff7, 0xFFFF00, 0xfffff1, 0xFFFF00, 0xfffff3, 0xFFFF00, 0xfffff5, 0xFFFF00, 0xfffff7];

    function DrawGamePoints() {
        graphics.clear();
        CurveLine.forEach(function(v, i, arr) {
            //console.log(i)
            graphics.lineStyle(9, 0xffffff, 3);
            // console.log(v)
            if (Curve_line.indexOf(v) != -1) {
                eval(v).draw(graphics, 1);
            } else {
                eval(v).draw(graphics, 50);
            }
        })

        StraightLine.forEach(function(v, i, arr) {
            graphics.lineStyle(9, 0xffffff, 3);
            eval(v).draw(graphics, 1);
        })
    }
    //var Curve1_1 = new Phaser.Curves.Ellipse(540, 950, 500, 550, 337.5, 22.5);
    var Curve1_1 = new Phaser.Curves.Path(1002, 738).lineTo(1001, 1159);
    var Curve1_2 = new Phaser.Curves.Ellipse(540, 950, 500, 550, 292.5, 337.5);
    var Curve1_3 = new Phaser.Curves.Ellipse(540, 950, 500, 550, 247.5, 292.5);
    var Curve1_4 = new Phaser.Curves.Ellipse(540, 950, 500, 550, 202.5, 247.5);
    //var Curve1_5 = new Phaser.Curves.Ellipse(540, 950, 500, 550, 157.5, 202.5);
    var Curve1_5 = new Phaser.Curves.Path(78, 1163).lineTo(80, 737);
    var Curve1_6 = new Phaser.Curves.Ellipse(540, 950, 500, 550, 112.5, 157.5);
    var Curve1_7 = new Phaser.Curves.Ellipse(540, 950, 500, 550, 67.5, 112.5);
    var Curve1_8 = new Phaser.Curves.Ellipse(540, 950, 500, 550, 22.5, 67.5);

    //var Curve2_1 = new Phaser.Curves.Ellipse(540, 950, 300, 340, 337.5, 22.5);
    var Curve2_1 = new Phaser.Curves.Path(814, 817).lineTo(817, 1083);
    var Curve2_2 = new Phaser.Curves.Ellipse(540, 950, 300, 340, 292.5, 337.5);
    var Curve2_3 = new Phaser.Curves.Ellipse(540, 950, 300, 340, 247.5, 292.5);
    var Curve2_4 = new Phaser.Curves.Ellipse(540, 950, 300, 340, 202.5, 247.5);
    //  var Curve2_5 = new Phaser.Curves.Ellipse(540, 950, 300, 340, 157.5, 202.5);
    var Curve2_5 = new Phaser.Curves.Path(263, 1078).lineTo(263, 820);;
    var Curve2_6 = new Phaser.Curves.Ellipse(540, 950, 300, 340, 112.5, 157.5);
    var Curve2_7 = new Phaser.Curves.Ellipse(540, 950, 300, 340, 67.5, 112.5);
    var Curve2_8 = new Phaser.Curves.Ellipse(540, 950, 300, 340, 22.5, 67.5);
    //var Curve3_1 = new Phaser.Curves.Ellipse(540, 950, 150, 175, 337.5, 22.5);
    var Curve3_1 = new Phaser.Curves.Path(676, 881).lineTo(676, 1017);;
    var Curve3_2 = new Phaser.Curves.Ellipse(540, 950, 150, 175, 292.5, 337.5);
    var Curve3_3 = new Phaser.Curves.Ellipse(540, 950, 150, 175, 247.5, 292.5);
    var Curve3_4 = new Phaser.Curves.Ellipse(540, 950, 150, 175, 202.5, 247.5);
    // var Curve3_5 = new Phaser.Curves.Ellipse(540, 950, 150, 175, 157.5, 202.5);
    var Curve3_5 = new Phaser.Curves.Path(402, 1019).lineTo(402, 878);
    var Curve3_6 = new Phaser.Curves.Ellipse(540, 950, 150, 175, 112.5, 157.5);
    var Curve3_7 = new Phaser.Curves.Ellipse(540, 950, 150, 175, 67.5, 112.5);
    var Curve3_8 = new Phaser.Curves.Ellipse(540, 950, 150, 175, 22.5, 67.5);

    var path1_1 = new Phaser.Curves.Path(1001, 739).lineTo(816, 819);
    var path1_2 = new Phaser.Curves.Path(816, 819).lineTo(679, 883);
    var path1_3 = new Phaser.Curves.Path(679, 883).lineTo(540, 950);

    var path2_1 = new Phaser.Curves.Path(731, 442).lineTo(655, 635);
    var path2_2 = new Phaser.Curves.Path(655, 635).lineTo(597, 788);
    var path2_3 = new Phaser.Curves.Path(597, 788).lineTo(540, 950);

    var path3_1 = new Phaser.Curves.Path(347, 441).lineTo(425, 634);
    var path3_2 = new Phaser.Curves.Path(425, 634).lineTo(483, 787);
    var path3_3 = new Phaser.Curves.Path(483, 787).lineTo(540, 950);

    var path4_1 = new Phaser.Curves.Path(76, 739).lineTo(263, 819);
    var path4_2 = new Phaser.Curves.Path(263, 819).lineTo(401, 882);
    var path4_3 = new Phaser.Curves.Path(401, 882).lineTo(540, 950);

    var path5_1 = new Phaser.Curves.Path(78, 1161).lineTo(262, 1080);
    var path5_2 = new Phaser.Curves.Path(262, 1080).lineTo(402, 1017);
    var path5_3 = new Phaser.Curves.Path(402, 1017).lineTo(540, 950);

    var path6_1 = new Phaser.Curves.Path(348, 1458).lineTo(425, 1264);
    var path6_2 = new Phaser.Curves.Path(425, 1264).lineTo(481, 1110);
    var path6_3 = new Phaser.Curves.Path(481, 1110).lineTo(540, 950);

    var path7_1 = new Phaser.Curves.Path(730, 1457).lineTo(655, 1263);
    var path7_2 = new Phaser.Curves.Path(655, 1263).lineTo(596, 1111);
    var path7_3 = new Phaser.Curves.Path(596, 1111).lineTo(540, 950);

    var path8_1 = new Phaser.Curves.Path(1001, 1160).lineTo(817, 1081);
    var path8_2 = new Phaser.Curves.Path(817, 1081).lineTo(678, 1017);
    var path8_3 = new Phaser.Curves.Path(678, 1017).lineTo(540, 950);

    GutiData.forEach(function(v, i, arr) {
        var check = (v.name.match(/Guti1/g) == "Guti1") ? 'green' : 'blue';
        t[(v.name)] = t.add.follower(eval(v.path), 1, 1, check);
        t[(v.name)].Name = v.name;
        t[(v.name)].CurrentPath = v.path;
        SetGuti(t[(v.name)], eval(v.path), false, 0);
    })
    DrawGamePoints();
    drowHotspot();

    function drowHotspot() {
        $.each(hotspot, function(k, v) {
            //  console.log(v.HName)
            t[v.HName] = t.add.follower(eval(v.CurrentPath), 1, 1, 'hotspot').setInteractive();
            
            // setTimeout(function(){ 
            //     v.x = t[v.HName].x;
            // v.y = t[v.HName].y;
            // }, 300);
            t[v.HName].catagory = v.catagory;
            t[v.HName].Path = v.Path;
            t[v.HName].pos = v.pos;
            t[v.HName].Guti = v.Guti;
            t[v.HName].CurrentPath = v.CurrentPath;
            t[v.HName].HName = v.HName;
            t[v.HName].dr = v.dr;
            
           // console.log(v.x,v.y)
            if (v.HName == "hotspot25") {
                SetGuti(t[v.HName], eval(v.CurrentPath), false, -1, 0);
            } else {
                SetGuti(t[v.HName], eval(v.CurrentPath), false, 0, 0);
            }
        })
    }

    function updateHotspotData() {
        $.each(hotspot, function(k, v) {
            t[v.HName].catagory = v.catagory;
            t[v.HName].Path = v.Path;
            t[v.HName].pos = v.pos;
            t[v.HName].Guti = v.Guti;
            t[v.HName].CurrentPath = v.CurrentPath;
            t[v.HName].HName = v.HName;
            t[v.HName].dr = v.dr;
        })
    }


    function SetGuti(gutiName, moveingLine, lineCurve, step) {
        var from = (step == -1) ? 1 : 0;
        step = (step == -1) ? 0 : step;
        gutiName.setPath((moveingLine));
        gutiName.startFollow({
            positionOnPath: true,
            duration: 0,
            yoyo: false,
            repeat: 0,
            from: from,
            to: step,
        });
    }

    function moveGuti(gutiName, moveingLine, lineCurve, step, duration) {
        var from = (step == -1) ? 1 : 0;
        step = (step == -1) ? 0 : step;
        if (moveingLine == gutiName.CurrentPath) {
            gutiName.setPath(eval(moveingLine));
        } else {
            gutiName.setPath(eval(moveingLine));
        }

        var path = eval(moveingLine);
        gutiName.startFollow({
            positionOnPath: true,
            duration: duration,
            yoyo: false,
            repeat: 0,
            from: from,
            to: step,
            delay: 0,
            onStart: function(tween, target) {
                gutiName.x = gutiName.xx;
                gutiName.y = gutiName.yy;
                // C_[0].Guti=null;
            },
            onComplete: function(tween, target) {
              
                turnFun(gutiName.Name)
            },
            onUpdate: function(tween, target) {}
        });
    }
    var killStep = [];

    function getSecond(CH, CH1) {
        var paths = CH.Path.split(',');
        var paths1 = CH1.Path.split(',');
        var firstPath = paths1.filter(function(obj) { return paths.indexOf(obj) != -1; });
        var getWay = { a1: CH1.HName, a2: CH.HName, path1: firstPath[0] };
        if (CH1.Guti) {
            $.each(paths, function(k, v) {
                $.each(hotspot, function(k1, v1) {
                    if (CH.HName != v1.HName && CH1.HName != v1.HName) {
                        var y = v1.Path.split(',').indexOf(v);
                        if (y != -1) {
                            var C_CurveCheck = CH1.pos.split('_')[0];
                            var C_lineCheck = CH1.pos.split('_')[1];
                            var T_CurveCheck = v1.pos.split('_')[0];
                            var T_lineCheck = v1.pos.split('_')[1];
                            if ((C_lineCheck == T_lineCheck)) {
                                var path_2 = v1.Path.split(',');
                                var movePath = path_2.filter(function(obj) { return obj.indexOf('path') != -1; });
                                var mo = movePath.filter(function(obj) { return v == obj; });
                                getWay['a3'] = v1.HName;
                                getWay['path2'] = mo[0];
                            }
                            if (C_CurveCheck == T_CurveCheck) {
                                var path_2 = v1.Path.split(',');
                                var movePath = path_2.filter(function(obj) { return obj.indexOf('Curve') != -1; });
                                var mo = movePath.filter(function(obj) { return CH.Path.split(',').indexOf(obj) != -1; });
                                if (mo.length) {

                                    var C = parseInt(C_CurveCheck.match(/\d+/g)[0])
                                    var T = parseInt(mo[0].split('_')[0].match(/\d+/g));
                                    if ((mo[0].match(/Curve/g) == "Curve") && (C == T)) {
                                        getWay['a3'] = v1.HName;
                                        getWay['path2'] = mo[0];
                                    }
                                }
                            }
                            if (v1.pos == "R0_L0") {
                                var path_2 = v1.Path.split(',');
                                var movePath = path_2.filter(function(obj) { return obj.indexOf('path') != -1; });
                                var mo = movePath.filter(function(obj) { return CH.Path.split(',').indexOf(obj) != -1; });
                                var C = parseInt(C_lineCheck.match(/\d+/g)[0])
                                var T = parseInt(mo[0].split('_')[0].match(/\d+/g));
                                T = (T == 8) ? 4 : T;
                                T = (T == 7) ? 3 : T;
                                T = (T == 6) ? 2 : T;
                                T = (T == 5) ? 1 : T;
                                if ((mo[0].match(/path/g) == "path") && (C == T)) {
                                    getWay['a3'] = v1.HName;
                                    getWay['path2'] = mo[0];
                                }
                            }
                            if (CH1.pos == "R0_L0") {
                                var path_2 = v1.Path.split(',');
                                var movePath = path_2.filter(function(obj) { return obj.indexOf('path') != -1; });
                                movePath = movePath[0].split('_')[0];

                                var path_3 = CH.Path.split(',');
                                var movePath1 = path_3.filter(function(obj) { return obj.indexOf('path') != -1; });
                                movePath1 = movePath1[0].split('_')[0];
                                if (movePath == movePath1) {
                                    getWay['a3'] = v1.HName;
                                    getWay['path2'] = v1.CurrentPath;
                                }

                            }
                            if (firstPath) {
                                var tp = getWay;
                                var a3 = tp.hasOwnProperty('a3');
                                if (a3) {

                                    if (tp.hasOwnProperty('path2')) {
                                        var a1_ = hotspot.filter(function(obj) { return obj.HName == tp.a1; })[0];
                                        var a2_ = hotspot.filter(function(obj) { return obj.HName == tp.a2; })[0];
                                        var a3_ = hotspot.filter(function(obj) { return obj.HName == tp.a3; })[0];
                                        a1_ = a1_.Guti.split('_')[0].match(/\d+/)[0];
                                        a2_ = a2_.Guti.split('_')[0].match(/\d+/)[0];
                                        if (!a3_.Guti && (a1_ != a2_)) {
                                            graphics.lineStyle(9, 0xFF0000, 2);
                                            draws(tp['path1']);
                                            draws(tp['path2']);
                                            //console.log(getWay);
                                            tp['HName']=CH1.HName;
                                            killStep.push(getWay);
                                        }
                                    }
                                }
                            }

                        }
                    }
                })
            })
            
            
        }

    }

    function draws(val) {
        var p = eval(val);
        if (Curve_line.indexOf(val) != -1) {
            p.draw(graphics, 1);
        } else {
            p.draw(graphics, 50);
        }
    }

    var getUA = {};
    function selectGuti(CH){
         if (CH) {
            var a1_ = (CH.Guti) ? CH.Guti.split('_')[0].match(/\d+/)[0] : null;
            if ((t.Anims.turn == a1_ || a1_ == null)) {

                var paths = CH.Path.split(',');
                getUA[CH.HName] = {};
                getUA[CH.HName].path = paths;
                getUA[CH.HName].startGuiti = t[CH.Guti];
                getUA[CH.HName].changeGutiStatus = CH.Guti;
                getUA[CH.HName].hotspotTarget = CH.HName;
                getUA[CH.HName].dr = CH.dr;
                getUA[CH.HName].xx = CH.x;
                getUA[CH.HName].yy = CH.y;
                if (Object.keys(getUA).length == 1) {
                      killStep=[];
                    if (CH.Guti) {
                        DrawGamePoints();
                        $.each(paths, function(k, v) {
                            $.each(hotspot, function(k1, v1) {
                                if (CH.HName != v1.HName) {
                                    var y = v1.Path.split(',').indexOf(v);
                                    if (y != -1) {
                                        if (!v1.Guti) {
                                            //select first step path.
                                            //console.log(v1)
                                            graphics.lineStyle(9, 0xFF0000, 2);
                                            draws(v);
                                        } else {
                                            //select second step path.
                                            getSecond(t[v1.HName], CH);
                                        }
                                    }
                                }
                            })
                        })
                    } else {
                        updateHotspotData();
                        DrawGamePoints();
                        getUA = {};
                    }
                } else if (Object.keys(getUA).length == 2 && (CH.Guti == null)) {

                    var movePath = getUA[Object.keys(getUA)[0]].path.filter(function(obj) { return getUA[Object.keys(getUA)[1]].path.indexOf(obj) != -1; });
                    if (movePath[0]) {
                        var drMove = (getUA[Object.keys(getUA)[0]].dr[movePath[0]]) ? -1 : 1;
                        getUA[Object.keys(getUA)[0]].startGuiti.xx = getUA[Object.keys(getUA)[0]].xx;
                        getUA[Object.keys(getUA)[0]].startGuiti.yy = getUA[Object.keys(getUA)[0]].yy;
                        getUA[Object.keys(getUA)[0]].startGuiti.CurrentPath = movePath[0];
                        moveGuti(getUA[Object.keys(getUA)[0]].startGuiti, movePath[0], false, drMove, 500);
                        $.each(hotspot, function(k, v) {
                            if (v.HName == getUA[Object.keys(getUA)[0]].hotspotTarget) {
                                v.Guti = null;
                            }
                            if (v.HName == CH.HName) {
                                v.Guti = getUA[Object.keys(getUA)[0]].changeGutiStatus;
                            }
                        })
                    } else {
                        var C_ = killStep.filter(function(obj) { return obj.a3 == CH.HName; });
                        var tyu = (C_.length == 2) ? C_[1] : C_[0];
                        if (tyu) {
                            tyu = (C_.length == 3) ? C_[2] : tyu;
                            var drMove = (getUA[Object.keys(getUA)[0]].dr[tyu.path1]) ? -1 : 1;
                            getUA[Object.keys(getUA)[0]].startGuiti.xx = getUA[Object.keys(getUA)[0]].xx;
                            getUA[Object.keys(getUA)[0]].startGuiti.yy = getUA[Object.keys(getUA)[0]].yy;
                            var a1_ = hotspot.filter(function(obj) { return obj.HName == tyu.a1; })[0];
                            var a2_ = hotspot.filter(function(obj) { return obj.HName == tyu.a2; })[0];
                            a1_ = a1_.Guti.split('_')[0].match(/\d+/)[0];
                            a2_ = a2_.Guti.split('_')[0].match(/\d+/)[0];
                            turns = 0;
                            if (a1_ != a2_) {
                                moveGuti1(getUA[Object.keys(getUA)[0]].startGuiti, tyu, false, drMove, 500, 1);
                                $.each(hotspot, function(k, v) {
                                    if (v.HName == getUA[Object.keys(getUA)[0]].hotspotTarget) {
                                        v.Guti = null;
                                    }
                                    if (v.HName == CH.HName) {
                                        v.Guti = getUA[Object.keys(getUA)[0]].changeGutiStatus;
                                    }
                                })
                            }
                        }
                    }
                    updateHotspotData();
                    DrawGamePoints();
                    getUA = {};
                } else {
                    DrawGamePoints();
                    getUA = {};
                }
            }
        }
    }
    this.input.on('pointerdown', function(event, gameObjects) {
        //console.log(event.upX.toFixed(0) + "," + event.upY.toFixed(0))
        //console.log(gameObjects[0])
      
        var CH = gameObjects[0];
        selectGuti(CH);
    });

    var turns = 0;
    function moveGuti1(gutiName, moveingLine, lineCurve, step, duration, turn) {
        var from = (step == -1) ? 1 : 0;
        step = (step == -1) ? 0 : step;
        var selectPath = (turn == 1) ? moveingLine.path1 : moveingLine.path2;
        if (selectPath == gutiName.CurrentPath) {
            var p = eval(selectPath)
            if (Curve_line.indexOf(selectPath) != -1) {
                p.draw(graphics, 1);
            } else {
                p.draw(graphics, 50);
            }
            gutiName.setPath(p);

        } else {
            var p = eval(selectPath)
            if (Curve_line.indexOf(selectPath) != -1) {
                p.draw(graphics, 1);
            } else {
                p.draw(graphics, 50);
            }
            gutiName.x = t[moveingLine.a2].x;
            gutiName.y = t[moveingLine.a2].y;
            gutiName.setPath(p, {
                from: from,
                to: step
            });
            gutiName.x = t[moveingLine.a2].x;
            gutiName.y = t[moveingLine.a2].y;
        }
        var path = eval(selectPath);
        gutiName.startFollow({
            positionOnPath: true,
            duration: duration,
            yoyo: false,
            repeat: 0,
            from: from,
            to: step,
            delay: 0,
            onStart: function(tween, target) {
                if (turn == 1 && turns == 0) {
                    gutiName.x = gutiName.xx;
                    gutiName.y = gutiName.yy;
                } else if (turn == 2 && turns == 2) {
                    gutiName.x = t[moveingLine.a2].x;
                    gutiName.y = t[moveingLine.a2].y;
                }
            },
            onComplete: function(tween, target) {
                if (turn == 1 && turns == 0) {
                    var a1_ = hotspot.filter(function(obj) { return obj.HName == moveingLine.a1; });
                    var a2_ = hotspot.filter(function(obj) { return obj.HName == moveingLine.a2; });
                    if (a2_[0].Guti) {
                        t[a2_[0].Guti].x = 0;
                        t[a2_[0].Guti].y = 0;
                        var gutiG = a2_[0].Guti.split('_')[0].match(/\d+/)[0];
                        if (gutiG == 1) {
                            KillGuti['A'].push(a2_[0].Guti);
                        } else {
                            KillGuti['B'].push(a2_[0].Guti);
                        }
                        showKillGuti();
                    }
                    a2_[0].Guti = null;
                    var drMove1 = (a2_[0].dr[moveingLine.path2]) ? -1 : 1;
                    gutiName.xxx = gutiName.x;
                    gutiName.yyx = gutiName.y;
                    moveGuti1(gutiName, moveingLine, false, drMove1, 500, 2);
                    turns = 2;
                    killStep = [];
                } else {
                    turnFun(gutiName.Name);
                    updateHotspotData();
                    DrawGamePoints();
                    getUA = {};
                }
            },
            onUpdate: function(tween, target) {
                // console.log(gutiName.x,gutiName.y)
            }
        });
    }
function turnFun(v) {
    var gutiG = v.split('_')[0].match(/\d+/)[0];
    t.Anims.CGuti=gutiG;
    t.Anims.turn = (gutiG == 1) ? 2 : 1;
    t.Anims.i = 0;
    t.Anims.prec = 0;
    DrawGamePoints();
    getUA = {};
    setTurn(t.Anims.turn);
    if(t.Anims.turn== 2){
      Bot();  
    } 

}
// Bot();
function Bot(){
    //selectGuti(t[hotspot[14].HName]);
        //selectGuti(t[hotspot[2].HName]);
        //console.log(getWay)
        var liveG =[];
        $.each(hotspot, function(k, v) {
            if(v.Guti != null){
                var gutiG = v.Guti.split('_')[0].match(/\d+/)[0];
                if(gutiG == 2){
                    liveG.push(v.HName);
                }
            }
        });
        
        var loop= 0;
        callboot();
        function callboot(){
            var g = liveG[loop];
            selectGuti(t[g]);
            var k = killStep;
            console.log(k)
             if(loop<liveG.length ){
                var inter = setTimeout(function(){
                    if(k.length==0){
                        loop++;
                        getUA = {};
                        callboot();
                    }else{
                        selectGuti(t[k[0].a3]);
                    }
                    clearTimeout(inter);
                 },200)
            }
        }
        // $.each(liveG, function(k, v) {

        //     setTimeout(function(){
                
        //     },500)
        //       //  selectGuti(t[v]);
        //        // console.log(v)
        // })
       // console.log(liveG)

}
    // t.Anims.setTurn(t.Anims.turn);
    
 //updateHotspotData();
                    

function showKillGuti() {
    KillGuti['A'].forEach(function(v, i, arr) {
        $("#user1 li").eq(i).addClass('addGreen')
    })
    KillGuti['B'].forEach(function(v, i, arr) {
        $("#user2 li").eq(i).addClass('addBlue')
    })
}
t.Anims = {};
callAnim(360, 60, "anim", "activeBorder", "activeBorder1", 1);
function callAnim(degs, sec, el, el1, el2, turn) {
        t.Anims.degs = degs
        t.Anims.turn = turn;
        t.Anims.sec = sec;
        t.Anims.el1 = el1;
        t.Anims.el2 = el2;
        t.Anims.el = el;
        t.Anims.i = 0;
                t.Anims.prec = 0;
        $("." + el).append("<div id='circle' class='circle'><span class='prec 360' id='prec'>0%</span></div>");
        t.Anims.activeBorder = $("." + el);
        setTimeout(function() {
          loopit("c");
        }, 66);
    }
   function loopit(dir) {
        setInterval(function() {
            if (t.Anims.prec == 100) {
                t.Anims.i = 0;
                t.Anims.prec = 0;
                
                if(t.Anims.CGuti){
                    t.Anims.turn = (t.Anims.CGuti == 1) ? 2 : 1;
                }else{
                   t.Anims.turn = (t.Anims.turn == 1) ? 2 : 1; 
                }
                
                // setTurn.call(t.Anims.turn);
                setTurn(t.Anims.turn);
                t.Anims.CGuti=null
            } else {
                // clearInterval(t)
                t.Anims.i++;
                if (t.Anims.i < 0) {
                    t.Anims.i = 0;
                }
                if (t.Anims.i > t.Anims.degs) {
                    t.Anims.i = t.Anims.degs;
                }
                t.Anims.prec = (100 * t.Anims.i) / 360;
                $("." + t.Anims.el + " .prec").html(Math.round(t.Anims.prec) + "%");

                if (t.Anims.i <= 180) {
                    $("." + t.Anims.el).css('background-image', 'linear-gradient(' + (90 + t.Anims.i) + 'deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
                } else {
                    $("." + t.Anims.el).css('background-image', 'linear-gradient(' + (t.Anims.i - 90) + 'deg, transparent 50%, #ff0000 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
                }
                // window.requestAnimationFrame(thi.loopit);
            }

        }, t.Anims.sec);

    }


function setTurn(val) {
   // console.log("Guti Moved.", t.Anims.turn)
    if (val == 2) {
        $("#" + t.Anims.el1).removeClass('anim').html('').attr('style', '');
        $("#" + t.Anims.el2).addClass('anim');
    }
    if (val == 1) {
        $("#" + t.Anims.el2).removeClass('anim').html('').attr('style', '');
        $("#" + t.Anims.el1).addClass('anim');
    }
    $("." + t.Anims.el).append("<div id='circle' class='circle'><span class='prec 360' id='prec'>0%</span></div>");
    // thi.loopit("c");
}
}