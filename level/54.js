

oS.Init({
	
    PName: [    oPeashooter, oSunFlower, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oOxygen, ostar, oTTS, oGun, oTenManNut, oSeaAnemone, oCactus, oGatlingPea, oTwinSunflower, oSnowRepeater, oSeaShroom, oLing, oPumpkinHead, oGarlic, oLotusRoot, oStarfruit, oCoffeeBean, oGloomShroom,oFlamesMushroom,oTenManNute,oTwinSunflower2],
    ZName: [oZombie,oFootballZombie,oNewspaperZombie],
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
                innerText(c, "NO,这些僵尸偷走了我们的樱桃炸弹和咬咬碑(点击继续)");
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
                innerText(c, "他们的阴谋越来越大了，肯定是要搞事情啊(点击继续)");
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
                innerText(c, "不，这里不能继续待下去了(点击继续)");
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
    Monitor: {
        f: AppearTombstones,
        ar: [7, 8, 8]
    },UserDefinedFlagFunc: function(b) {
        var a = oP.FlagZombies;
        switch (true) {
        	case a == 30 : oP.SetTimeoutTomZombie([oFootballZombie]);
        	oP.SetTimeoutTomZombie([oFootballZombie]);
        	oP.SetTimeoutTomZombie([oFootballZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	 	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
        	oP.SetTimeoutTomZombie([oNewspaperZombie]);
            break;
            case a == 23 : oP.SetTimeoutTomZombie([oFootballZombie]);
            break;
            case a == 21 : oP.SetTimeoutTomZombie([oFootballZombie]);
            break;
            case a == 19 : oP.SetTimeoutTomZombie([oFootballZombie]);
            break;
            case a == 16 : oP.SetTimeoutTomZombie([oNewspaperZombie]);
            break;
            case a == 15 : oP.SetTimeoutTomZombie([oNewspaperZombie]);
            break;
            case a == 13 : oP.SetTimeoutTomZombie([oNewspaperZombie]);
            break;
            case a == 11 : oP.SetTimeoutTomZombie([oNewspaperZombie]);
            break;
        case a == 8 : oP.SetTimeoutTomZombie([oNewspaperZombie]);
            break;
        case a == 5 : oP.SetTimeoutTomZombie([oNewspaperZombie]);
        break;
        case a == 3 : oP.SetTimeoutTomZombie([oZombie])
        }
    },
    LF: [0, 1, 1, 1, 1,1],
    LevelName: "魔音之旅--第4天",
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
    SunNum:400,
    StartGameMusic: "kfc",
    LoadMusic:"uub"
    //, [oHeiFootballZombie, 3, 5]
},
{
    AZ:[[oNewspaperZombie, 5, 1],[oFootballZombie, 1, 1]],
    FlagNum: 30,
    FlagToSumNum: {
        a1: [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        a2: [1, 2, 4, 8, 16,32,64,1,1,1,512,256,1,1,1,1,1,1,1,1,1,1,1,1,400,1,1,1,1,1]
       
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
