

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
   
    
   
    Monitor: {
        f: AppearTombstones,
        ar: [2, 3, 5]
    },UserDefinedFlagFunc: function(b) {
        var a = oP.FlagZombies;
        switch (true) {
        	case a == 30 : 
        	oP.SetTimeoutTomZombie([oFootballZombie]);
        	oP.SetTimeoutTomZombie([oFootballZombie]);
        	oP.SetTimeoutTomZombie([oFootballZombie]);
        	oP.SetTimeoutTomZombie([oFootballZombie]);
        	oP.SetTimeoutTomZombie([oFootballZombie]);
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
    LevelName: "魔音之旅--第5天",
    LvlEName: 0,
    InitLawnMower: function() {//oLawnCleaner
    	CustomSpecial(oLawnCleaner, 1, -1)
        CustomSpecial(oLawnCleaner, 2, -1)
        CustomSpecial(oLawnCleaner, 3, -1)
        CustomSpecial(oLawnCleaner, 4, -1)
        CustomSpecial(oLawnCleaner, 5, -1)
   
   CustomSpecial(oPotatoMine, 1, 1)
   CustomSpecial(oPotatoMine, 2, 1)
        CustomSpecial(oPotatoMine, 3, 1)
    
 
   
        CustomSpecial(oPotatoMine, 4, 1)
    CustomSpecial(oPotatoMine, 5, 1)
        
        
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
        a2: [1, 2, 4, 8, 16,32,64,1,1,1,512,256,1,1,1,1,1,1,1,1,1,1,1,1,400,1,1,1,1,300]
       
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
