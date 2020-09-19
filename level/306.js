

oS.Init({
	//oFlamesMushroom/*,oSpikeweeden*/ oshitou, 
    PName: [  oPeashooter, oSunFlower, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShrooms, oSunShroom, oFumeShroom, oHypnoShroom, oScaredyShroom, oIceShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oOxygen, ostar, oTTS, oGun, oTenManNut, oSeaAnemone, oCactus, oGatlingPea, oTwinSunflower, oSnowRepeater, oSeaShroom, oLing, oPumpkinHead, oGarlic, oLotusRoot, oStarfruit, oCoffeeBean, oGloomShroom,oTwinSunflower2,oTenManNute],
    ZName: [oZombie,oFootballZombie,oNewspaperZombie,oMustacheZombie,oConeheadZombie,oBucketheadZombie],
    PicArr: function() {
        return ["images/interface/djtlsbf.jpg"]
    } (),
    backgroundImage: "images/interface/djtlsbf.jpg",
    LargeWaveFlag: {
    	7 : $("imgFlag3"),
    	13 : $("imgFlag2"),
     
        30 : $("imgFlag1")
    },
    CanSelectCard: 1,
    
     InitLawnMower: function() {//oLawnCleaner
    	CustomSpecial(oLawnCleaner, 1, -1)
        CustomSpecial(oLawnCleaner, 2, -1)
        CustomSpecial(oLawnCleaner, 3, -1)
        CustomSpecial(oLawnCleaner, 4, -1)
        CustomSpecial(oLawnCleaner, 5, -1)
   CustomSpecial(oshitou0, parseInt(Math.random()*5)+1, parseInt(Math.random()*5)+5)
  CustomSpecial(oshitou2, parseInt(Math.random()*5)+1, parseInt(Math.random()*5)+5)
	CustomSpecial(oshitou1, parseInt(Math.random()*5)+1, parseInt(Math.random()*5)+5)
  // CustomSpecial(oshitou, parseInt(Math.random()*5)+1, parseInt(Math.random()*6)+4)
        
        //CustomSpecial(oshitou, parseInt(Math.random()*5)+1, parseInt(Math.random()*6)+4)
       
    },
    LF: [0, 1, 1,1, 1,1],
    LevelName: "远古教堂(落石部分)--第1夜",
    LvlEName: 0,
    DKind: 0,
 
    SunNum:200,
    StartGameMusic: "djt",
    
    LoadMusic:"djtqm"
   
    
   
    //, [oHeiFootballZombie, 3, 5]oDuckyTubeZombie1
},
{
    AZ:[[oNewspaperZombie, 5, 1],[oBucketheadZombie, 5, 1],[oConeheadZombie, 1, 1],[oZombie, 1, 1],[oMustacheZombie, 1, 1],[oFootballZombie, 1, 1]],
    FlagNum: 30,
    FlagToSumNum: {
        a1: [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        a2: [0, 0, 0, 0, 0,0,160,0,0,0,0,0,200,1,2,3,4,8,16,32,64,128,256,512,0,0,0,0,0,600]
       
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
