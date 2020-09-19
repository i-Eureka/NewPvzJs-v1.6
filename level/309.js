

oS.Init({
	//oFlamesMushroom/*,oSpikeweeden*/ oshitou, 
    PName: [ oPeashooter, oSunFlower, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShrooms, oSunShroom, oFumeShroom, oHypnoShroom, oScaredyShroom, oIceShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oGatlingPea, oTwinSunflower, oSnowRepeater, oSeaShroom, oLing, oPumpkinHead, oGarlic, oLotusRoot, oStarfruit, oCoffeeBean, oGloomShroom,oTwinSunflower2,oTenManNute],
    ZName: [oZombie,oScreenDoorZombie,oFootballZombie,oNewspaperZombie,oMustacheZombie,oConeheadZombie,oBucketheadZombie],
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
    
     InitLawnMower: function() {//oLawnCleaner
     	for(var bb = 6;bb<=7;bb++){
     		 CustomSpecial(oSpikeweeden, 2, bb)
        CustomSpecial(oSpikeweeden, 4, bb)
       
         
     
     		}
  		for(var cc =0 ; cc<=4;cc++){
  			  
        CustomSpecial(oSpikeweeden, 3, cc)
  		}
   CustomSpecial(oSpikeweeden, 3, 12)
         CustomSpecial(oFlowerPotAir3, 2, 5)
     CustomSpecial(oFlowerPotAir2, 3, 5)
     CustomSpecial(oFlowerPotAir4, 2, 4)
     CustomSpecial(oFlowerPotAir1, 4, 4)
     CustomSpecial(oFlowerPotAir4, 2, 3)
     CustomSpecial(oFlowerPotAir1, 4, 3)
     CustomSpecial(oFlowerPotAir4, 2, 2)
     CustomSpecial(oFlowerPotAir1, 4, 2)
     CustomSpecial(oFlowerPotAir4, 2, 1)
     CustomSpecial(oFlowerPotAir1, 4, 1)
     CustomSpecial(oFlowerPotAir4, 2, 0)
     CustomSpecial(oFlowerPotAir1, 4, 0)
     CustomSpecial(oFlowerPotAir4, 2, -1)
     CustomSpecial(oFlowerPotAir1, 4, -1)
      CustomSpecial(oFlowerPotAir4, 2, 12)
     CustomSpecial(oFlowerPotAir1, 4, 12)
   
    CustomSpecial(oFlowerPotAir3, 2, 9)
     CustomSpecial(oFlowerPotAir1, 4, 9)
      CustomSpecial(oAirZ, 2, 8)
     CustomSpecial(oAirZ, 4, 8)
     CustomSpecial(oAirZ, 3, 4)
      CustomSpecial(oFlowerPotAir3, 2, 10)
     CustomSpecial(oFlowerPotAir1, 4, 10)
		CustomSpecial(oFlowerPotAir1, 4, 5)
   
       CustomSpecial(oFlowerPotAir1, 3, 6)
        CustomSpecial(oFlowerPotAir1, 3, 7)
         CustomSpecial(oFlowerPotAir1, 3, 8)
          CustomSpecial(oFlowerPotAir2, 3, 9)
          CustomSpecial(oFlowerPotAir2, 3, 10)
          CustomSpecial(oFlowerPotAir1, 3, 11)
          //CustomSpecial(oFlowerPotAir1, 3, 12)
           CustomSpecial(oCleaner, 2, -1)
        CustomSpecial(oCleaner, 4, -1)
    },
    LF: [0, 0, 3,3, 3,0],
    LevelName: "远古教堂(断桥)--第2夜",
    LvlEName: 0,
    DKind: 0,
 
    SunNum:250,
    StartGameMusic: "djt",
    
    LoadMusic:"djtqm"
   
    
   
    //, [oHeiFootballZombie, 3, 5]oDuckyTubeZombie1
},
{
    AZ:[[oNewspaperZombie, 5, 5],[oBucketheadZombie, 5, 5],[oScreenDoorZombie,6,3],[oConeheadZombie, 3, 5],[oZombie, 13, 1],[oMustacheZombie, 3, 20],[oFootballZombie, 1, 23],[oHeiFootballZombie,1,24]],
    FlagNum: 30,
    FlagToSumNum: {
       // a1: [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        //a2: [0, 0, 0, 0, 0,160,40,0,30,0,5,0,160,80,2,3,4,8,16,32,64,128,256,512,0,0,20,0,40,600]
        a1:[1,7,14,19,24,29,30],
        a2:[10,20,50,100,160,200,250]
       
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





