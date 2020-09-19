

oS.Init({
	//oFlamesMushroom
    PName: [    oPeashooter, oSunFlower, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShrooms, oSunShroom, oFumeShroom, oHypnoShroom, oScaredyShroom, oIceShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oOxygen, ostar, oTTS, oGun, oTenManNut, oSeaAnemone, oCactus, oGatlingPea, oTwinSunflower, oSnowRepeater, oSeaShroom, oLing, oPumpkinHead, oGarlic, oLotusRoot, oStarfruit, oCoffeeBean, oGloomShroom,oTenManNute,oTwinSunflower2],
    ZName: [oZombie,oFootballZombie,oNewspaperZombie,oMustacheZombie,oConeheadZombie,oBucketheadZombie],
    PicArr: function() {
        return ["images/interface/djt.jpg"]
    } (),
    backgroundImage: "images/interface/djt.jpg",
    LargeWaveFlag: {
    	15 : $("imgFlag2"),
     
        20 : $("imgFlag1")
    },
    CanSelectCard: 1,
     Monitor: {
        f: AppearTombstones,
        ar: [4, 8, 5]
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
    LevelName: "远古教堂（门）--第2夜",
    LvlEName: 0,
    DKind: 0,
   
    SunNum:100,
    StartGameMusic: "djt",
    
    LoadMusic:"djtqm"
    //, [oHeiFootballZombie, 3, 5]oDuckyTubeZombie1
},
{
    AZ:[[oNewspaperZombie, 5, 1],[oBucketheadZombie, 5, 1],[oConeheadZombie, 1, 1],[oZombie, 1, 1],[oMustacheZombie, 1, 1],[oFootballZombie, 1, 1]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        a2: [1, 2, 4, 8, 16,32,64,64,64,128,128,200,300,300,2000,3,400,400,2000,8800,4000,1,1,1,400,1,1,1,1,300]
       
    },
    FlagToMonitor: {
        14 : [ShowLargeWave, 0],
         
         
        19 : [ShowFinalWavedjt, 0]
    },
    FlagToEnd: function() {
  NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
              onclick: function() {
                  SelectModal(0)
              }
        });
    }
});
