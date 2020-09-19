

oS.Init({
	
    PName: [    oPeashooter, oSunFlower, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShrooms, oSunShroom, oFumeShroom, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oOxygen, ostar, oTTS, oGun, oTenManNut, oSeaAnemone, oCactus, oGatlingPea, oTwinSunflower, oSnowRepeater, oSeaShroom, oLing, oPumpkinHead, oGarlic, oLotusRoot, oStarfruit, oCoffeeBean, oGloomShroom,oFlamesMushroom,oTenManNute,oTwinSunflower2],
    ZName: [oZombie,oFootballZombie,oNewspaperZombie,oMustacheZombie,oConeheadZombie,oBucketheadZombie],
    PicArr: function() {
        return ["images/interface/grr.jpg"]
    } (),
    backgroundImage: "images/interface/grr.jpg",
    LargeWaveFlag: {
    	14 : $("imgFlag2"),
     
        19 : $("imgFlag1")
    },
    CanSelectCard: 1,
    LoadAccess: function(a) {
        NewImg("dDave", "images/interface/Dave.gif", "left:0;top:81px", EDAll);
        NewEle("DivTeach", "div", 0, 0, EDAll); (function(d) {
            var b = arguments.callee,
            c = $("DivTeach");
            switch (d) {
            case 0:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [1])
                    }
                },
                []);
                innerText(c, "嘿，我回来了(点击继续)");
                break;
            case 1:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [2])
                    }
                },
                []);
                innerText(c, "看起来僵尸攻势没有减弱啊(点击继续)");
                break;
            case 2:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [3])
                    }
                },
                []);
                innerText(c, "这应该是最后两天了(点击继续)");
                break;
            case 3:
                PlayAudio("crazydavelong1");
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(1,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [4])
                    }
                },
                []);
                innerText(c, "你先在这打僵尸吧，我去找找时光隧道的入口(点击继续)");
                break;
                 case 4:
                PlayAudio("crazydavelong3");
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(1,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [5])
                    }
                },
                []);
                innerText(c, "( ^_^ )/~~拜拜……(点击继续)");
                break;
                 case 5:
                PlayAudio("crazydavecrazy");
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(1,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [6])
                    }
                },
                []);
                innerText(c, "我会通知你的，用我的……脑子！！！(点击继续)");
                break;
            case 6:
                $("dDave").src = "images/interface/Dave2.gif";
                ClearChild($("DivTeach"));
                oSym.addTask(6,
                function() {
                    ClearChild($("dDave"));
                    a(0)
                },
                [])
            }
        })(0)
    },
    LF: [0, 1, 1, 1, 1,1],
    LevelName: "魔音之旅--第9天",
    LvlEName: 0,
    DKind: 0,
    InitLawnMower: function() {//oLawnCleaner
    	
    },
    SunNum:9900,
    StartGameMusic: "TOE",
    
    LoadMusic:"uub"
    //, [oHeiFootballZombie, 3, 5]oDuckyTubeZombie1
},
{
    AZ:[[oNewspaperZombie, 5, 1],[oBucketheadZombie, 5, 1],[oConeheadZombie, 1, 1],[oZombie, 1, 1],[oMustacheZombie, 1, 1],[oFootballZombie, 1, 1]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        a2: [100, 100, 300, 500, 300,400,500,20,30,100,512,666,300,900,1,3,500,400,1,1,1,1,1,1,400,1,1,1,1,300]
       
    },
    FlagToMonitor: {
        15 : [ShowLargeWave, 0],
         
         
        20 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
  NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
              onclick: function() {
                  SelectModal(0)
              }
        });
    }
});
