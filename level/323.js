

oS.Init({
	//oFlamesMushroomoSpikeweeden,oGarlicss
    PName: [oFlowerPot,oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oOxygen, ostar, oTTS, oGun, oTenManNut, oSeaAnemone, oCactus, oGatlingPea, oTwinSunflower, oSnowRepeater, oSeaShroom, oLing, oPumpkinHead, oGarlic, oLotusRoot, oStarfruit, oCoffeeBean, oGloomShroom],
      ZName: [oZombie6,oZombie7,oConeheadZombie2],
    PicArr: function() {
        return ["images/interface/Lava.jpg"]
    } (),
    backgroundImage: "images/interface/Lava.jpg",
    LargeWaveFlag: {
    	15 : $("imgFlag2"),
     
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
                innerText(c, "这些僵尸们又想出些小聪明了(点击继续)");
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
                innerText(c, "他们开始装死啦(点击继续)");
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
                innerText(c, "好好加油吧(点击继续)");
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
                innerText(c, "bye(点击继续)");
                break;
                 
                 case 4:
                  $("dDave").src = "images/interface/Dave2.gif";
                ClearChild($("DivTeach"));
                oSym.addTask(4,
                function() {
                    ClearChild($("dDave"));
                    a(0)
                },
                [])
            
              
            }
        })(0)
    },
    LF: [0, 3, 3, 3, 3,3],
    LevelName: "熔岩洞穴 -第3天",
    LvlEName: 323,
    InitLawnMower: function() {//oLawnCleaner
    	for(var cspe = 1;cspe<=5;cspe++){
    		CustomSpecial(oLawnCleaner, cspe, -1)
    		for(var what = 1;what<=3;what++){
    			CustomSpecial(oFlowerPot, cspe, what)
    		}
    		
    	}
    	
        
   
        
    },
    DKind: 1,
   
    SunNum:100,
    StartGameMusic: "Lava",
    
    LoadMusic:"Lava"
    //, [oHeiFootballZombie, 3, 5]oDuckyTubeZombie1
},
{ AZ: [[oZombie6,3,1],[oZombie7,3,1],[oConeheadZombie2,1,3]],
    FlagNum: 30,
    FlagToSumNum: {
        a1: [3, 5, 9,15,21,23,27,30],
        a2: [5, 7, 10, 70,13,17,20,130]
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
