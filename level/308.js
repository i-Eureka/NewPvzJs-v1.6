

oS.Init({
	//oFlamesMushroom/*,oSpikeweeden*/ oshitou, 
    PName: [ oPeashooter, oSunFlower, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShrooms, oSunShroom, oFumeShroom, oHypnoShroom, oScaredyShroom, oIceShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oOxygen, ostar, oTTS, oGun, oTenManNut, oSeaAnemone, oCactus, oGatlingPea, oTwinSunflower, oSnowRepeater, oSeaShroom, oLing, oPumpkinHead, oGarlic, oLotusRoot, oStarfruit, oCoffeeBean, oGloomShroom,oTwinSunflower2,oTenManNute],
    ZName: [oZombie,oFootballZombie,oNewspaperZombie,oMustacheZombie,oConeheadZombie,oBucketheadZombie],
    PicArr: function() {
        return ["images/interface/a.png"]
    } (),
    backgroundImage: "images/interface/a.png",
    LargeWaveFlag: {
    	7 : $("imgFlag3"),
    	13 : $("imgFlag2"),
     
        30 : $("imgFlag1")
    },
    CanSelectCard: 1,
    
     InitLawnMower: function() {//oLawnCleaneroSpikeweeden
  
       
   
     CustomSpecial(oFlowerPotAir1, 3, 0)
     CustomSpecial(oFlowerPotAir1, 3, -1)
   
  CustomSpecial(oFlowerPotAir1, 3, 1)
   CustomSpecial(oFlowerPotAir1, 3, 2)
    CustomSpecial(oFlowerPotAir1, 3, 3)
     CustomSpecial(oFlowerPotAir1, 3, 4)
      CustomSpecial(oFlowerPotAir1, 3, 5)
       CustomSpecial(oFlowerPotAir1, 3, 6)
        CustomSpecial(oFlowerPotAir1, 3, 7)
         CustomSpecial(oFlowerPotAir1, 3, 8)
          CustomSpecial(oFlowerPotAir1, 3, 9)
          CustomSpecial(oFlowerPotAir1, 3, 10)
          CustomSpecial(oFlowerPotAir1, 3, 11)
          CustomSpecial(oFlowerPotAir1, 3, 12)
           CustomSpecial(oLawnCleaner, 3, -1)
        CustomSpecial(oLawnCleaner, 3, -2)
    },
    LF: [0, 0, 0,3, 0,0],
    LevelName: "远古教堂(断桥)--第1夜",
    LvlEName: 0,
    DKind: 0,
 
    SunNum:233,
    StartGameMusic: "djt",
    
    LoadMusic:"djtqm"
   
    
   
    //, [oHeiFootballZombie, 3, 5]oDuckyTubeZombie1
},
{
    AZ:[[oNewspaperZombie, 5, 15],[oBucketheadZombie, 5, 15],[oConeheadZombie, 3, 15],[oZombie, 13, 1],[oMustacheZombie, 3, 15],[oFootballZombie, 1, 15],[oHeiFootballZombie,1,7]],
    FlagNum: 30,
    FlagToSumNum: {
        a1: [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        a2: [0, 0, 0, 0, 0,160,40,0,30,0,5,0,160,80,2,3,4,8,16,32,64,128,256,512,0,0,20,0,40,600]
       
    },
    FlagToMonitor: {
    	
        6 : [ShowLargeWave, 0],
         
         
        12 : [ShowLargeWave, 0],
        29 : [ShowFinalWavedjt, 0]
    },
    FlagToEnd: function() {
  NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
              onclick: function() {
                  SelectModal(0)
              }
        });
    }
});





