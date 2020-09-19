oS.Init({
    PName: [  oPotatoMinep,oGayPea,oTallNutp,oPeashooterpai,oSquashp,oJalapenop],
    ZName: [oZombie,oConeheadZombie,oBucketheadZombie],
    PicArr: ["images/interface/background1.jpg", "images/interface/trophy.png"],
    backgroundImage: "images/interface/background1.jpg",
    CanSelectCard: 0,
      LoadAccess: function(a) {
      
        NewImg("dDave", "images/interface/Dave.gif", "left:0;top:81px", EDAll);
        NewEle("DivTeach", "div", 0, 0, EDAll); (function(d) {
            var b = arguments.callee,
            c = $("DivTeach");
            switch (d) {
            case 0:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [1])
                    }
                },
                []);
                innerText(c, "Hey，我们暂时回来了(点击继续)");
                break;
            case 1:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [2])
                    }
                },
                []);
                innerText(c, "我带你玩一个小游戏(点击继续)");
                break;
            case 2:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [3])
                    }
                },
                []);
                innerText(c, "在这一天，植物们都加强了(点击继续)");
                break;
            case 3:
                PlayAudio("crazydavelong1");
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(1,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [4])
                    }
                },
                []);
                innerText(c, "享受吧！(点击继续)");
                break;
                 
                 case 4:
                  $("dDave").src = "images/interface/Dave2.gif";
                ClearChild($("DivTeach"));
                oSym.addTask(4,
                function() {
                    ClearChild($("dDave"));
                    a(0)
                },
                [])
            
              
            }
        })(0)
        
    },
   
    LF: [0, 1, 1,1, 1,1],
    LevelName: "小游戏--排山倒海",
    LvlEName: 0,
    LargeWaveFlag: {
        10 : $("imgFlag3"),
        15 : $("imgFlag2"),
        20 : $("imgFlag1")
    },
    DKind:0,
    chuan:1,
    StaticCard: 0,
    LoadMusic: "PSDH",
    StartGameMusic: "PSDH",
    StartGame: function() {
    		NewImg("imgSFS", "images/interface/传送带.gif", "left:0;top:0px", EDAll);
        StopMusic();
        PlayMusic(oS.LoadMusic = oS.StartGameMusic);
        SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
        SetHidden($("dSunNum"));
        oS.InitLawnMower();
        PrepareGrowPlants(function() {
        	b=0,
        	nn=1,
            oP.Monitor({
                f: function() { (function() {
                        var a = ArCard.length;
                        if (a < 8) {
                            var c = oS.PName,
                            	
                            
                           
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
                            if(nn==1){
                            if(b<3){
                            	b++
                            }
                            
                            if(b==3){
                            	
                            	b = 1,
                            	nn++
                            }
                            }else if(nn==2){
                            	if(b<3){
                            		if(b!=2){
                            		b++}else{
                            			b=4,
                            			nn++
                            		}
                            	}
                            }else if(nn<=16){
                            	b = Math.floor(Math.random() * 4),
                            	nn++
                            	}else if(nn<=19){
                            		b=4,
                            		nn++
                            	}else if(nn<=20){
                            		b=5,
                            		nn++
                            	}else if(nn<=25){
                            		b=Math.floor(Math.random() * 3)+1
                            		if(b==2){
                            		b=Math.floor(Math.random() * 3)+1
                            		if(b==2){
                            			b=Math.floor(Math.random() * 3)+1
                            		}	
                            		}
                            		nn++
                            	}else if(nn<=51){
                            		b = Math.floor(Math.random() * 3)+2,
                            		nn++
                            	}else if(nn<=53){
                            		b = Math.floor(Math.random() * 2)+3,
                            		nn++
                            	}else{
                            		b = Math.floor(Math.random() * c.length)
                            	}
                            
                            
                        }
                        oSym.addTask(800, arguments.callee, [])
                    })(); (function() {
                        var b = ArCard.length,
                        a, c;
                        while (b--) { (c = (a = ArCard[b]).PixelTop) > 60 * b && ($(a.DID).style.top = (a.PixelTop = c - 1) + "px")
                        }
                        oSym.addTask(3, arguments.callee, [])
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
    AZ: [[oZombie, 4, 1],[oConeheadZombie,2,1],[oBucketheadZombie,1,1]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [1, 5, 9, 10, 13, 15,18, 19, 20, 23, 25, 29,30],
        a2: [0, 60, 70, 700, 100, 1000,130, 170, 3400, 200, 400, 30, 30, 400]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
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