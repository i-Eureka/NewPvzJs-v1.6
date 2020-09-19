oS.Init({
    PName: [  oChomper, oRepeater, oFumeShroom, oHypnoShroom, oIceShroom, oSquash, oThreepeater, oJalapeno, oTorchwood, oTallNut, oCactus, oGatlingPea, oSnowRepeater,  oPumpkinHead, oGarlic,  oStarfruit,oTenManNute],
    ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oCXZombie, oFootballZombie, oCConeheadZombie, oPoleVaultingZombie, oCPoleVaultingZombie, oHeiFootballZombie, oXBZombie, oCZombie, oCBucketheadZombie, oMustacheZombie, oTrashZombie, oJX, oNewspaperZombie, oCNewspaperZombie, oCFootballZombie, oEmperor, oWJY],
    PicArr: ["images/interface/a.png", "images/interface/trophy.png"],
    backgroundImage: "images/interface/a.png",
    CanSelectCard: 0,
    
    InitLawnMower: function() {//oLawnCleaner
     	for(var bb = 7;bb<=8;bb++){
     		
       CustomSpecial(oFlowerPotAir1, 5, bb)
  		CustomSpecial(oFlowerPotAir6, 1, bb)
  
          
     
     		}
     		for(var asd = 9;asd<=11;asd++){
     		CustomSpecial(oFlowerPotAir1, 5, asd)
  		CustomSpecial(oFlowerPotAir5, 1, asd)
  		  CustomSpecial(oFlowerPotAir3, 4, asd)
          CustomSpecial(oFlowerPotAir4, 2, asd)}
     		CustomSpecial(oFlowerPotAir1, 5, 6)
  		CustomSpecial(oFlowerPotAir5, 1, 6)
  		
  		for(var cc =3 ; cc<=5;cc++){
  			  CustomSpecial(oFlowerPotAir4, 4, cc)
          CustomSpecial(oFlowerPotAir4, 2, cc)
       
  		}
  		CustomSpecial(oFlowerPotAir4, 2, 6)
  		 CustomSpecial(oFlowerPotAir3, 4, 6)
  		 
  		 
  		for(var Flower1 = -1;Flower1<=2;Flower1++){
  			CustomSpecial(oFlowerPotAir5, 1, Flower1)
  		CustomSpecial(oFlowerPotAir4, 2, Flower1)
  		
  		CustomSpecial(oFlowerPotAir3, 4, Flower1)
  			 CustomSpecial(oFlowerPotAir1, 5, Flower1)
  		}
          
       CustomSpecial(oAirZ, 2, 8)
       CustomSpecial(oAirZ, 4, 8)
       CustomSpecial(oSpikeweeden, 2, 7)
       CustomSpecial(oSpikeweeden, 4, 7)
       CustomSpecial(oAirZ, 1, 5)
       CustomSpecial(oAirZ, 5, 5)
       for(var asddd = 4;asddd<=4;asddd++){
       	 CustomSpecial(oSpikeweeden, 1, asddd)
       CustomSpecial(oSpikeweeden, 5, asddd)
       }
      
           CustomSpecial(oCleaner, 2, -1)
        CustomSpecial(oCleaner, 4, -1)
        
    },
    LF: [0, 3, 3,0, 3,3],
    LevelName: "远古教堂--最终之战",
    LvlEName: 0,
    LargeWaveFlag: {
        10 : $("imgFlag3"),
        20 : $("imgFlag1")
    },
    DKind:0,
    StaticCard: 0,
    LoadMusic: "DL",
    StartGameMusic: "DL",
    StartGame: function() {
        StopMusic();
        PlayMusic(oS.LoadMusic = oS.StartGameMusic);
        SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
        SetHidden($("dSunNum"));
        oS.InitLawnMower();
        PrepareGrowPlants(function() {
            oP.Monitor({
                f: function() { (function() {
                        var a = ArCard.length;
                        if (a < 11) {
                            var c = oS.PName,
                            b = Math.floor(Math.random() * c.length),
                            e = c[b],
                            d = e.prototype,
                            f = "dCard" + Math.random();
                            ArCard[a] = {
                                DID: f,
                                PName: e,
                                PixelTop: 600
                            };
                            NewImg(f, d.PicArr[d.CardGif], "top:600px;width:100px;height:120px;cursor:pointer;clip:rect(auto,auto,60px,auto)", $("dCardList"), {
                                onmouseover: function(g) {
                                    ViewPlantTitle(GetChoseCard(f), g)
                                },
                                onmouseout: function() {
                                    SetHidden($("dTitle"))
                                },
                                onclick: function(g) {
                                    ChosePlant(g, oS.ChoseCard, f)
                                }
                            })
                        }
                        oSym.addTask(350, arguments.callee, [])
                    })(); (function() {
                        var b = ArCard.length,
                        a, c;
                        while (b--) { (c = (a = ArCard[b]).PixelTop) > 60 * b && ($(a.DID).style.top = (a.PixelTop = c - 1) + "px")
                        }
                        oSym.addTask(1, arguments.callee, [])
                    })()
                },
                ar: []
            });
            oP.AddZombiesFlag();
            SetVisible($("dFlagMeterContent"))
        })
    }
},
{
    AZ: [[oZombie, 1, 1], [oConeheadZombie, 1, 2], [oBucketheadZombie, 1, 3], [oCXZombie, 1, 4], [oFootballZombie, 1, 6],  [oCConeheadZombie, 1, 7], [oPoleVaultingZombie, 1, 8], [oHeiFootballZombie, 1, 9], [oCZombie, 1, 10], [oXBZombie, 1, 11], [oCBucketheadZombie, 1, 12], [oMustacheZombie, 1, 11], [oTrashZombie, 1, 10], [oJX, 1, 9], [oNewspaperZombie, 1, 8], [oCFootballZombie, 1, 6], [oCNewspaperZombie, 1, 5], [oCPoleVaultingZombie, 1, 4], [oEmperor, 1, 30, [30]], [oWJY, 1, 30, [30]]],
    FlagNum: 30,
    FlagToSumNum: {
        a1: [3, 5, 9, 10, 13, 15, 19, 20, 23, 25, 29,30],
        a2: [0, 30, 66, 77, 250, 50, 100, 34, 200, 400, 30, 30, 400]
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
},
{
    GetChoseCard: function(b) {
        if (oS.Chose) {
            return
        }
        var a = ArCard.length;
        while (a--) {
            ArCard[a].DID == b && (oS.ChoseCard = a, a = 0)
        }
        return oS.ChoseCard
    },
    ChosePlant: function(a, b) {
        PlayAudio("seedlift");
        a = window.event || a;
        var f = ArCard[oS.ChoseCard],
        e = a.clientX - EDAlloffsetLeft + EBody.scrollLeft || EElement.scrollLeft,
        d = a.clientY + EBody.scrollTop || EElement.scrollTop,
        c = f.PName.prototype;
        oS.Chose = 1;
        EditImg(NewImg("MovePlant", c.PicArr[c.StaticGif], "left:" + e - 0.5 * (c.beAttackedPointL + c.beAttackedPointR) + "px;top:" + d + 20 - c.height + "px;z-index:254", EDAll).cloneNode(false), "MovePlantAlpha", "", {
            visibility: "hidden",
            filter: "alpha(opacity=40)",
            opacity: 0.4,
            zIndex: 30
        },
        EDAll);
        SetAlpha($(f.DID), 50, 0.5);
        SetHidden($("dTitle"));
        GroundOnmousemove = GroundOnmousemove1
    },
    CancelPlant: function() {
        ClearChild($("MovePlant"), $("MovePlantAlpha"));
        oS.Chose = 0;
        SetAlpha($(ArCard[oS.ChoseCard].DID), 100, 1);
        oS.ChoseCard = "";
        GroundOnmousemove = function() {}
    },
    GrowPlant: function(l, c, b, f, a) {
        var j = oS.ChoseCard,
        g = ArCard[j],
        i = g.PName,
        k = i.prototype,
        d = g.DID,
        e,
        h = oGd.$LF[f];
        k.CanGrow(l, f, a) &&
        function() {
            PlayAudio(h != 2 ? "plant" + Math.floor(1 + Math.random() * 2) : "plant_water"); (new i).Birth(c, b, f, a, l);
            oSym.addTask(20, SetNone, [SetStyle($("imgGrowSoil"), {
                left: c - 30 + "px",
                top: b - 40 + "px",
                zIndex: 3 * f,
                visibility: "visible"
            })]);
            ClearChild($("MovePlant"), $("MovePlantAlpha"));
            $("dCardList").removeChild(e = $(d));
            e = null;
            ArCard.splice(j, 1);
            oS.ChoseCard = "";
            oS.Chose = 0;
            GroundOnmousemove = function() {}
        } ()
    },
    ViewPlantTitle: function(a) {
        var c = $("dTitle"),
        b = ArCard[a].PName.prototype;
        c.innerHTML = b.CName + "<br>" + b.Tooltip;
        SetStyle(c, {
            top: 60 * a + "px",
            left: "100px"
        })
    }
});