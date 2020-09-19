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
    ZName: [oZombie, oZombie2, oConeheadZombie,oNewspaperZombie],
    PicArr: function() {
        return ["images/interface/rrg.jpg"]
    } (),
    backgroundImage: "images/interface/rrg.jpg",
    LargeWaveFlag: {
    	16 : $("imgFlag2"),
     
        30 : $("imgFlag1")
    },
    CanSelectCard: 1,
    LF: [0, 1, 1, 1, 1,1],
    LevelName: "魔音之旅--第2天",
    LvlEName: 0,
    InitLawnMower: function() {//oLawnCleaner
    	CustomSpecial(oLawnCleaner, 1, -1)
        CustomSpecial(oLawnCleaner, 2, -1)
        CustomSpecial(oLawnCleaner, 3, -1)
        CustomSpecial(oLawnCleaner, 4, -1)
        CustomSpecial(oLawnCleaner, 5, -1)
        CustomSpecial(oWallNut, 1, 1)
        CustomSpecial(oWallNut, 2, 1)
        CustomSpecial(oWallNut, 3, 1)
        CustomSpecial(oWallNut, 4, 1)
        CustomSpecial(oWallNut, 5, 1)
        CustomSpecial(oWallNut, 1, 2)
        CustomSpecial(oWallNut, 2, 2)
        CustomSpecial(oWallNut, 3, 2)
        CustomSpecial(oWallNut, 4, 2)
        CustomSpecial(oWallNut, 5, 2)
        CustomSpecial(oWallNut, 1, 3)
        CustomSpecial(oWallNut, 2, 3)
        CustomSpecial(oWallNut, 3, 3)
        CustomSpecial(oWallNut, 4, 3)
        CustomSpecial(oWallNut, 5, 3)
        CustomSpecial(oWallNut, 1, 4)
        CustomSpecial(oWallNut, 1, 5)
        CustomSpecial(oWallNut, 1, 6)
        CustomSpecial(oWallNut, 1, 7)
        CustomSpecial(oWallNut, 1, 8)
        CustomSpecial(oWallNut, 1, 9)
        CustomSpecial(oWallNut, 2, 4)
        CustomSpecial(oWallNut, 2, 5)
        CustomSpecial(oWallNut, 2, 6)
        CustomSpecial(oWallNut, 2, 7)
        CustomSpecial(oWallNut, 2, 8)
        CustomSpecial(oWallNut, 2, 9)
        CustomSpecial(oWallNut, 3, 4)
        CustomSpecial(oWallNut, 3, 5)
        CustomSpecial(oWallNut, 3, 6)
        CustomSpecial(oWallNut, 3, 7)
        CustomSpecial(oWallNut, 3, 8)
        CustomSpecial(oWallNut, 3, 9)
        CustomSpecial(oWallNut, 4, 4)
        CustomSpecial(oWallNut, 4, 5)
        CustomSpecial(oWallNut, 4, 6)
        CustomSpecial(oWallNut, 4, 7)
        CustomSpecial(oWallNut, 4, 8)
        CustomSpecial(oWallNut, 4, 9)
        CustomSpecial(oWallNut, 5, 4)
        CustomSpecial(oWallNut, 5, 5)
        CustomSpecial(oWallNut, 5, 6)
        CustomSpecial(oWallNut, 5, 7)
        CustomSpecial(oWallNut, 5, 8)
        CustomSpecial(oWallNut, 5, 9)
        
        
        
    },
    SunNum:0,
    StartGameMusic: "kfc",
    LoadMusic:"uub"
    //, [oHeiFootballZombie, 3, 5]
},
{
    AZ:[[oZombie, 5, 1], [oZombie2, 5, 1], [oNewspaperZombie, 20, 20],[oConeheadZombie, 20, 3]],
    FlagNum: 30,
    FlagToSumNum: {
        a1: [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        a2: [1, 10, 40, 48, 103,160,182,173,199,233,235,237,239,250,300,350,377,379,391,399,450]
       
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
