oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean, oBigChomper, oFlamesMushroom], 
    ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oBalloonZombie, oBackupDancer,oDancingZombie],
  
     PicArr: function() {
        var a = oRepeater.prototype,
        b = a.PicArr;
        return ["images/interface/background1.jpg", b[a.CardGif], b[a.NormalGif]]
    } (),
    SunNum: 5000,
    backgroundImage: "images/interface/background2.jpg",
    CanSelectCard: 1,
    LevelName: "僵尸盛宴",
    LvlEName: "ZombieFeast",
    StartGameMusic: "Ultimate battle",
    DKind: 0,
    LargeWaveFlag: {
        10 : $("imgFlag1")
    },Monitor: {
        f: AppearTombstones,
        ar: [1, 9, 10]
    }, UserDefinedFlagFunc: function(a) {
    	var a = oP.FlagZombies;
    	
        oP.FlagNum == a && oP.SetTimeoutTomZombie([oDancingZombie])
    },
},
{
    AZ: [[oZombie, 5, 1], [oConeheadZombie, 5, 1], [oBucketheadZombie, 5, 1],[oDancingZombie, 5, 1],[oBalloonZombie, 5, 1]],
    FlagNum: 10,
    FlagToSumNum: {
        a1: [2, 3, 5, 7, 10],
        a2: [1, 5, 10, 15, 20, 99]
    },
    FlagToMonitor: {
        9 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
        NewImg("imgSF", "images/Card/Plants/Repeater.png", "left:827px;top:525px;clip:rect(auto,auto,60px,auto)", EDAll, {
            onclick: function() {
                GetNewCard(this, oRepeater, 9)
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:490px;left:836px", EDAll)
    }
});