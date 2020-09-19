

oS.Init({
	//oFlamesMushroom/*,oSpikeweeden*/
    PName: [   oFlowerPot, oPeashooter, oSunFlower, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShrooms, oSunShroom, oFumeShroom, oHypnoShroom, oScaredyShroom, oIceShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oOxygen, ostar, oTTS, oGun, oTenManNut, oSeaAnemone, oCactus, oGatlingPea, oTwinSunflower, oSnowRepeater, oSeaShroom, oLing, oPumpkinHead, oGarlic, oLotusRoot, oStarfruit, oCoffeeBean, oGloomShroom,oTwinSunflower2,oTenManNute],
    ZName: [oZombie,oFootballZombie,oNewspaperZombie,oMustacheZombie,oConeheadZombie,oBucketheadZombie],
    PicArr: function() {
        return ["images/interface/djtls.jpg"]
    } (),
    backgroundImage: "images/interface/djtls.jpg",
    LargeWaveFlag: {
    	3 : $("imgFlag2"),
     
        5 : $("imgFlag1")
    },
    CanSelectCard: 1,
    
     InitLawnMower: function() {//oLawnCleaner
    	CustomSpecial(oLawnCleaner, 1, -1)
        CustomSpecial(oLawnCleaner, 2, -1)
        CustomSpecial(oLawnCleaner, 3, -1)
        CustomSpecial(oLawnCleaner, 4, -1)
        CustomSpecial(oLawnCleaner, 5, -1)
   
  
   CustomSpecial(oFlowerPot, 2, 1)
        CustomSpecial(oFlowerPot, 3, 1)
    
 CustomSpecial(oFlowerPot, 2, 2)
        CustomSpecial(oFlowerPot, 3, 2)
   
        
        
        
    },
    LF: [0, 1, 3, 3, 1,1],
    LevelName: "远古教堂(绿地)--第3夜",
    LvlEName: 0,
    DKind: 0,
 
    SunNum:1000,
    StartGameMusic: "djt",
    
    LoadMusic:"djtqm"
   
    
   
    //, [oHeiFootballZombie, 3, 5]oDuckyTubeZombie1
},
{
    AZ:[[oNewspaperZombie, 5, 1],[oBucketheadZombie, 5, 1],[oConeheadZombie, 1, 1],[oZombie, 1, 1],[oMustacheZombie, 1, 1],[oFootballZombie, 1, 1]],
    FlagNum: 5,
    FlagToSumNum: {
        a1: [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        a2: [10, 20, 40, 200, 3000,16,16,16,16,32,64,100,200,1,200,3,400,400,1000,200,400,1,1,1,400,1,1,1,1,300]
       
    },
    FlagToMonitor: {
    	
        2 : [ShowLargeWave, 0],
         
         
        4 : [ShowFinalWavedjt, 0]
    },
    FlagToEnd: function() {
  NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
              onclick: function() {
                  SelectModal(0)
              }
        });
    }
});
