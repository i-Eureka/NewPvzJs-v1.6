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
//
    PName: [    oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oOxygen, ostar, oTTS, oGun, oTenManNut, oSeaAnemone, oCactus, oGatlingPea, oTwinSunflower, oSnowRepeater, oSeaShroom, oLing, oPumpkinHead, oGarlic, oLotusRoot, oStarfruit, oCoffeeBean, oGloomShroom,oFlamesMushroom,oTenManNute,oTwinSunflower2],
    ZName: [oZombie, oZombie2, oConeheadZombie,oFootballZombie,oNewspaperZombie],
    PicArr: function() {
        return ["images/interface/rrg.jpg"]
    } (),
    backgroundImage: "images/interface/rrg.jpg",
    LargeWaveFlag: {
    	16 : $("imgFlag2"),
     
        30 : $("imgFlag1")
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
                innerText(c, "这些僵尸开始动歪脑筋了(点击继续)");
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
                innerText(c, "他们肯定有阴谋(点击继续)");
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
                innerText(c, "也许这里非常可怕(点击继续)");
                break;
            case 3:
                PlayAudio("crazydaveshort1");
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
                innerText(c, "你能不损车过关吗，我不信！(点击继续)");
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
                innerText(c, "我先走了，( ^_^ )/~~拜拜(点击继续)");
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
                innerText(c, "你就防守吧，哈哈哈哈哈哈哈哈哈！(点击继续)");
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
    LevelName: "魔音之旅--第3天",
    LvlEName: 0,
    InitLawnMower: function() {//oLawnCleaner
    	CustomSpecial(oLawnCleaner, 1, -1)
        CustomSpecial(oLawnCleaner, 2, -1)
        CustomSpecial(oLawnCleaner, 3, -1)
        CustomSpecial(oLawnCleaner, 4, -1)
        CustomSpecial(oLawnCleaner, 5, -1)
   
   CustomSpecial(oPotatoMine, 1, 9)
   CustomSpecial(oPotatoMine, 2, 9)
        CustomSpecial(oPotatoMine, 3, 9)
    
 
   
        CustomSpecial(oPotatoMine, 4, 9)
    CustomSpecial(oPotatoMine, 5, 9)
        
        
    },
    SunNum:100,
    StartGameMusic: "kfc",
    LoadMusic:"uub"
    //, [oHeiFootballZombie, 3, 5]
},
{
    AZ:[[oNewspaperZombie, 1, 1],[oFootballZombie, 1, 1],[oZombie2, 1, 1],[oConeheadZombie, 1, 1],[oZombie, 1, 1]],
    FlagNum: 30,
    FlagToSumNum: {
        a1: [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        a2: [1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1,444,1,1,1,1,1,1,1,1,1,100,100,100,100,100,3000]
       
    },
    FlagToMonitor: {
        14 : [ShowLargeWave, 0],
         
         
        29 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
  NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
              onclick: function() {
                  SelectModal(0)
              }
        });
    }
});
