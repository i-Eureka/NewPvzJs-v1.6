/*oS.Init({
    PName: [oPeashooter, oSunFlower],
    ZName: [oZombie],
    PicArr: function() {
        return ["images/interface/background3.jpg"]
    } (),
    backgroundImage: "images/interface/background3.jpg",
    LargeWaveFlag: {
        10 : $("imgFlag2"),
        20 : $("imgFlag1")
    },
    CanSelectCard: 1,
    LF: [1, 2, 3, 2, 1, 1],
    LevelName: "0",
    LvlEName: 0,
    SunNum:50
},
{
    AZ:[[oZombie, 5, 1]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [3, 5, 9],
        a2: [3, 4, 5, 10]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
  NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
              onclick: function() {
                  SelectModal(0)
              }
        });
    }
});*/

oS.Init({
	  // ,oFlamesMushroom,oSnowRepeater,oGatlingPea,oThreepeater,oTwinSunflower2
//oTenManNute
    PName: [    oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oOxygen, ostar, oTTS, oGun, oTenManNut, oSeaAnemone, oCactus, oGatlingPea, oTwinSunflower, oSnowRepeater, oSeaShroom, oLing, oPumpkinHead, oGarlic, oLotusRoot, oStarfruit, oCoffeeBean, oGloomShroom,oFlamesMushroom,oTenManNute,oTwinSunflower2],
    ZName: [oZombie, oZombie2, oConeheadZombie,oFootballZombie,oHeiFootballZombie],
    PicArr: function() {
        return ["images/interface/rrg.jpg"]
    } (),
    backgroundImage: "images/interface/rrg.jpg",
    LargeWaveFlag: {
    	3 : $("imgFlag4"),
        6 : $("imgFlag3"),
    	9 : $("imgFlag2"),
        
        12 : $("imgFlag1")
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
                innerText(c, "我们来到了1980年(点击继续)");
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
                innerText(c, "这里一点儿都不平静(点击继续)");
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
                innerText(c, "这里有很多的僵尸，非常可怕(点击继续)");
                break;
            case 3:
                PlayAudio("crazydaveshort2");
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
                innerText(c, "别问我为什么知道。(点击继续)");
                break;
                 case 4:
                PlayAudio("crazydavecrazy");
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
                innerText(c, "因为我疯了！！！(点击继续)");
                break;
            case 5:
                $("dDave").src = "images/interface/Dave2.gif";
                ClearChild($("DivTeach"));
                oSym.addTask(5,
                function() {
                    ClearChild($("dDave"));
                    a(0)
                },
                [])
            }
        })(0)
    },
    LF: [0, 1, 1, 1, 1,1],
    LevelName: "魔音之旅--第1天",
    LvlEName: 0,
    
    SunNum:250,
    StartGameMusic: "kfc",
    LoadMusic:"uub"
    //, [oHeiFootballZombie, 3, 5]
},
{
    AZ:[[oFootballZombie, 1, 5],[oHeiFootballZombie, 1, 6],[oCFootballZombie, 1, 7],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1],[oZombie, 5, 1], [oZombie2, 5, 1]],
    FlagNum: 12,
    FlagToSumNum: {
        a1: [3, 6, 12, 342, 386],
        a2: [48, 170, 291, 342, 386]
       
    },
    FlagToMonitor: {
        2 : [ShowLargeWave, 0],
         5 : [ShowLargeWave, 0],
         8 : [ShowLargeWave, 0],
         
        11 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
  NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
              onclick: function() {
                  SelectModal(0)
              }
        });
    }
});
