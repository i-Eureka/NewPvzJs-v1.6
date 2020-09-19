

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
    
    LF: [0, 3, 3, 3, 3,3],
    LevelName: "Halloween",
    LvlEName: "lol",
    
    InitLawnMower: function() {//oLawnCleaner
    	for(var cspe = 1;cspe<=5;cspe++){
    		CustomSpecial(oLawnCleaner, cspe, -1)
    		for(var what = 1;what<=8;what++){
    			CustomSpecial(oFlowerPot, cspe, what)
    			if(what==8){
    				CustomSpecial(oTenManNut, cspe, what)
    			}
    		}
    		
    	}
    	
        
   
        
    },
    DKind: 1,
   
    SunNum:300,
    StartGameMusic: "Hellow",
    
    LoadMusic:"Hellow"
    //, [oHeiFootballZombie, 3, 5]oDuckyTubeZombie1
},
{ AZ: [[oZombie6,3,1],[oZombie7,3,1],[oConeheadZombie2,1,3]],
    FlagNum: 30,
    FlagToSumNum: {
        a1: [3, 5, 9,15,21,23,27,30],
        a2: [46, 45, 66, 70,66,79,88,3333]
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
