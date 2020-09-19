

oS.Init({
	
    PName: [    oPeashooter, oSunFlower, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShrooms, oSunShroom, oFumeShroom, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oOxygen, ostar, oTTS, oGun, oTenManNut, oSeaAnemone, oCactus, oGatlingPea, oTwinSunflower, oSnowRepeater, oSeaShroom, oLing, oPumpkinHead, oGarlic, oLotusRoot, oStarfruit, oCoffeeBean, oGloomShroom,oFlamesMushroom,oTenManNute,oTwinSunflower2],
    ZName: [oZombie,oFootballZombie,oNewspaperZombie,oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3],
    PicArr: function() {
        return ["images/interface/grgr.jpg"]
    } (),
    backgroundImage: "images/interface/grgr.jpg",
    LargeWaveFlag: {
    	16 : $("imgFlag2"),
     
        19 : $("imgFlag1")
    },
    CanSelectCard: 1,
    LF: [0, 1, 1, 2, 1,1],
    LevelName: "魔音之旅--第8天",
    LvlEName: 0,
    DKind: 0,
    InitLawnMower: function() {//oLawnCleaner
    	CustomSpecial(oLawnCleaner, 1, -1)
        CustomSpecial(oLawnCleaner, 2, -1)
        CustomSpecial(oPoolCleaner, 3, -1)
        CustomSpecial(oLawnCleaner, 4, -1)
        CustomSpecial(oLawnCleaner, 5, -1)
   
   CustomSpecial(oPotatoMine, 1, 1)
   CustomSpecial(oPotatoMine, 2, 1)
        
    
 CustomSpecial(oLilyPad, 3, 1)
  CustomSpecial(oLilyPad, 3, 2)
   CustomSpecial(oLilyPad, 3, 3)
    CustomSpecial(oLilyPad, 3, 4)
     CustomSpecial(oLilyPad, 3, 5)
      CustomSpecial(oLilyPad, 3, 6)
       CustomSpecial(oLilyPad, 3, 7)
        CustomSpecial(oLilyPad, 3, 8)
         CustomSpecial(oLilyPad, 3, 9)
   CustomSpecial(oSquash, 3, 1)
        CustomSpecial(oPotatoMine, 4, 1)
    CustomSpecial(oPotatoMine, 5, 1)
        
        
    },
    SunNum:100,
    StartGameMusic: "TOE",
    LoadMusic:"uub"
    //, [oHeiFootballZombie, 3, 5]oDuckyTubeZombie1
},
{
    AZ:[[oNewspaperZombie, 5, 1],[oDuckyTubeZombie1, 5, 1],[oDuckyTubeZombie2, 1, 1],[oDuckyTubeZombie3, 1, 1],[oFootballZombie, 1, 1]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        a2: [1, 1, 1, 1, 1,1,13,20,30,100,512,666,300,300,1,3,500,400,1,1,1,1,1,1,400,1,1,1,1,300]
       
    },
    FlagToMonitor: {
        14 : [ShowLargeWave, 0],
         
         
        19 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
  NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
              onclick: function() {
                  SelectModal(0)
              }
        });
    }
});
