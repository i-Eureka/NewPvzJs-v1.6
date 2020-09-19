

oS.Init({
	//oFlamesMushroomoSpikeweeden,oGarlicss
    PName: [    oPeashooter, oSunFlower, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShrooms, oSunShroom, oFumeShroom, oHypnoShroom, oScaredyShroom, oIceShroom, oLilyPad, oThreepeater, oTangleKlep, oSpikeweed, oTorchwood, oTallNut, oOxygen, ostar, oTTS, oGun, oTenManNut, oSeaAnemone, oCactus, oGatlingPea, oTwinSunflower, oSnowRepeater, oSeaShroom, oLing, oPumpkinHead, oGarlic, oLotusRoot, oStarfruit, oCoffeeBean, oGloomShroom,oTenManNute,oTwinSunflower2],
    ZName: [oZombie,oFootballZombie,oNewspaperZombie,oMustacheZombie,oConeheadZombie,oBucketheadZombie],
    PicArr: function() {
        return ["images/interface/Unity.png"]
    } (),
    backgroundImage: "images/interface/Unity.png",
    LargeWaveFlag: {
    	15 : $("imgFlag2"),
     
        20 : $("imgFlag1")
    },
    CanSelectCard: 1,
    
    LF: [0, 1, 1, 1, 1,1],
    LevelName: "电音时代--第2天",
    LvlEName: 0,
    InitLawnMower: function() {//oLawnCleaner
    	CustomSpecial(oLawnCleaner, 1, -1)
        CustomSpecial(oLawnCleaner, 2, -1)
        CustomSpecial(oLawnCleaner, 3, -1)
        CustomSpecial(oLawnCleaner, 4, -1)
        CustomSpecial(oLawnCleaner, 5, -1)
   
   CustomSpecial(oGarlicss, 1, 6)
   CustomSpecial(oGarlicss, 2, 6)
        CustomSpecial(oGarlicss, 3, 6)
    
 
   
        CustomSpecial(oGarlicss, 4, 6)
    CustomSpecial(oGarlicss, 5, 6)
        CustomSpecial(oGarlicss, 1, 7)
   CustomSpecial(oGarlicss, 2, 7)
        CustomSpecial(oGarlicss, 3, 7)
    
 
   
        CustomSpecial(oGarlicss, 4, 7)
    CustomSpecial(oGarlicss, 5, 7)
     
    CustomSpecial(oTitle1, 0, 4)

    },
    DKind: 1,
   
    SunNum:100,
    StartGameMusic: "T7S",
    
    LoadMusic:"T7S"
    //, [oHeiFootballZombie, 3, 5]oDuckyTubeZombie1
},
{
    AZ:[[oNewspaperZombie, 5, 2],[oBucketheadZombie, 5, 5],[oConeheadZombie, 1, 3],[oZombie4, 1, 20,[20]],[oZombie, 1, 1],[oMustacheZombie, 1, 2],[oFootballZombie, 3, 7]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        a2: [0, 0, 0, 0, 0,1,1,1,1,1,2,2,3,3,100,3,400,400,1,100]
       
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
