//------------Intro---------------------------
    var poeng = 0;

    var info4El = document.querySelector("#info4");

    var infoDiv = document.querySelector(".center");

    
//------------Mal-----------------------------

    var eksempelEl = document.querySelector("#poeng");

    var eksempel = 0;
    var eksempelPris = 0;
    var eksempelPrisInterval = 0;
    var eksempelPoengAdd = 0;
    var eksempelNavn = 0;

    var eksempelOutput = 0;

    function eksempelBuy() {
        return;
    }

    function eksempelAddPoeng() {
        return;
    }

    function eksempelClicker() {
        return;
    }

    var eksempelRevealCheckerStatus = true;
    var eksempelActivate = true;
    var eksempelRevealPoeng = 0;

    var upgrade1Rank5RevealCheckerInterval = setInterval(10000, eksempelRevealChecker);

    var eksempel1Rank1Adder = 0;

    function eksempelRevealChecker(){
        return;
    }

    function eksempelReveal(){
        return;
    }

//------------Main-Click--------------------

    var buttonEl = document.querySelector("#button");

    //------------Click---------------------------

        var poengEl = document.querySelector("#poeng");
        buttonEl.addEventListener("click", click);

        var clickerCount = 0;
        var clickerAdd = 1;

        function click() {
            console.log("click");
            poeng += clickerAdd;
            clickerCount++;
            poengEl.innerHTML = "<b>Poeng: </b>" + poeng;

    //------------Click-Upgrade-1-----------------

            if (clickerCount === 250){
                clickerAdd = 5;
                buttonEl.src = "bilder/button2.png";
            }
        
    //------------Click-Upgrade-2-----------------
        
            if (clickerCount === 500) {
                clickerAdd = 25;
                buttonEl.src = "bilder/button3.png";
            }
        }

//------------Main-Person-1-------------------

    var info1El = document.querySelector("#info1");

    //------------Person-1--------------------------

        var bilde1El = document.querySelector("#bilde1");
        bilde1El.addEventListener("click", bilde1Buy);

        function bilde1Buy() {
            if (poeng >= bilde1Pris) {
                poeng -= bilde1Pris;
                bilde1Output += bilde1PoengAdd;
                bilde1Clicker();
                bilde1BuySound();
            }
        }

        var bilde1 = 0;
        var bilde1Pris = 50;
        var bilde1PrisInterval = 1.07;
        var bilde1PoengAdd = 1;
        var bilde1Output = bilde1 * bilde1PoengAdd;
        var bilde1Navn = "Autister";

        function bilde1Clicker() {
            setInterval(bilde1AddPoengFunction, 1000);
            bilde1++;
            bilde1Pris = Math.round(bilde1Pris * bilde1PrisInterval);
            info1El.innerHTML = "<b>Pris:</b> " + bilde1Pris + ",-     <b>" + bilde1Navn + ": </b>" + bilde1 + "        <b>Output:</b> " + bilde1Output + " per sekund";
        }

        function bilde1AddPoengFunction() {
            poeng += bilde1PoengAdd;
            console.log(bilde1PoengAdd);
        }

    //------------Info1---------------------------

        info1El.innerHTML = "<b>Pris:</b> " + bilde1Pris + ",-"

    //------------Reveal-Upgrade-1-Rank-1--------------

        var upgrade1El = document.querySelector("#upgrade1");

        var upgrade1Rank1RevealCheckerStatus = true;
        var upgrade1Rank1RevealPoeng = 400;

        setInterval(upgrade1Rank1RevealChecker, 1000);

        function upgrade1Rank1RevealChecker() {
            if (poeng >= upgrade1Rank1RevealPoeng && upgrade1Rank1RevealCheckerStatus === true) {
                upgrade1Rank1Reveal()
                upgrade1Rank1RevealCheckerStatus = false;
            }
        }

        function upgrade1Rank1Reveal() {
            upgrade1El.src = "bilder/Upgrade.jpg";
            upgrade1El.addEventListener("click", upgrade1Rank1Buy);
        }

    //------------Upgrade-1-1---------------------

        var upgrade1Rank1Pris = 2000;
        var upgrade1Rank1Adder = 4;

        function upgrade1Rank1Buy() {
            if (poeng >= upgrade1Rank1Pris) {
                var upgrade1Rank1BuyPrompt = prompt("Vil du kjøpe 'aggressiv autisme' for " + upgrade1Rank1Pris + " poeng? (Skriv ja for kjøp) Multiply: " + upgrade1Rank1Adder);
            } else{
                alert("Pris: " + upgrade1Rank1Pris + " Multiply: " + upgrade1Rank1Adder);
            }
            if (upgrade1Rank1BuyPrompt === "ja" || upgrade1Rank1BuyPrompt === "Ja") {
                poeng -= upgrade1Rank1Pris;
                upgrade1Rank1();
            }
        }

        function upgrade1Rank1() {
            console.log("Aggressive autister aktivert");
            bilde1PoengAdd = bilde1PoengAdd * upgrade1Rank1Adder;
            upgrade1El.src = "bilder/maskin_ukjent.png";
            upgrade1El.removeEventListener("click", upgrade1Rank1Buy);
            bilde1Navn = "Aggressive autister";
            bilde1Output = bilde1 * bilde1PoengAdd;
            bilde1El.src = "bilder/william2.png";
            info1El.innerHTML = "<b>Pris:</b> " + bilde1Pris + ",-     <b>" + bilde1Navn + ": </b>" + bilde1 + "        <b>Output:</b> " + bilde1Output + " per sekund";
            setInterval(upgrade1Rank2RevealChecker, 1000);
            upgrade1Rank2RevealCheckerStatus = true;
        }
    
    //------------Reveal-Upgrade-1-Rank-2--------------

        var upgrade1Rank2RevealCheckerStatus = false;
        var upgrade1Rank2RevealPoeng = 100000;

        function upgrade1Rank2RevealChecker() {
            if (poeng >= upgrade1Rank2RevealPoeng && upgrade1Rank2RevealCheckerStatus === true) {
                upgrade1Rank2Reveal()
                upgrade1Rank2RevealCheckerStatus = false;
            }
        }
    
        function upgrade1Rank2Reveal() {
            upgrade1El.src = "bilder/weaponized.jpg";
            upgrade1El.addEventListener("click", upgrade1Rank2Buy);
        }

    //------------Upgrade-1-2---------------------

        var upgrade1Rank2Pris = 200000;
        var upgrade1Rank2Adder = 30;
    
            function upgrade1Rank2Buy() {
                if (poeng >= upgrade1Rank2Pris) {
                    var upgrade1Rank2BuyPrompt = prompt("Vil du kjøpe 'weaponized autism' for " + upgrade1Rank2Pris + " poeng? (Skriv ja for kjøp) Multiply: " + upgrade1Rank2Adder);
                } else{
                    alert("Pris: " + upgrade1Rank2Pris + " Multiply: " + upgrade1Rank2Adder)
                }
                if (upgrade1Rank2BuyPrompt === "ja" || upgrade1Rank2BuyPrompt === "Ja") {
                    poeng -= upgrade1Rank2Pris;
                    upgrade1Rank2()
                }
            }
    
            function upgrade1Rank2() {
                console.log("weaponized autism aktivert");
                bilde1PoengAdd = bilde1PoengAdd * upgrade1Rank2Adder;
                upgrade1El.src = "bilder/maskin_ukjent.png";
                upgrade1El.removeEventListener("click", upgrade1Rank2Buy);
                bilde1Navn = "Weaponized autists";
                bilde1Output = bilde1 * bilde1PoengAdd;
                bilde1El.src = "bilder/william3.jpg";
                info1El.innerHTML = "<b>Pris:</b> " + bilde1Pris + ",-     <b>" + bilde1Navn + ": </b>" + bilde1 + "        <b>Output:</b> " + bilde1Output + " per sekund";
                setInterval(upgrade1Rank3RevealChecker, 1000);
                upgrade1Rank3RevealCheckerStatus = true;
            }

    //------------Reveal-Upgrade-1-Rank-3--------------

        var upgrade1Rank3RevealCheckerStatus = false;
        var upgrade1Rank3RevealPoeng = 2000000;

        function upgrade1Rank3RevealChecker() {
            if (poeng >= upgrade1Rank3RevealPoeng && upgrade1Rank3RevealCheckerStatus === true) {
                upgrade1Rank3Reveal()
                upgrade1Rank3RevealCheckerStatus = false;
            }
        }

        function upgrade1Rank3Reveal() {
            upgrade1El.src = "bilder/lazytown-fruit.jpg";
            upgrade1El.addEventListener("click", upgrade1Rank3Buy);
        }

    //------------Upgrade-1-3---------------------

        var upgrade1Rank3Pris = 2500000;
        var upgrade1Rank3Adder = 6;

        function upgrade1Rank3Buy() {
            if (poeng >= upgrade1Rank3Pris) {
                var upgrade1Rank3BuyPrompt = prompt("Vil du kjøpe 'basic apple' for " + upgrade1Rank3Pris + " poeng? (Skriv ja for kjøp) Multiply: " + upgrade1Rank3Adder);
            } else{
                alert("Pris: " + upgrade1Rank3Pris + " Multiply: " + upgrade1Rank3Adder)
            }
            if (upgrade1Rank3BuyPrompt === "ja" || upgrade1Rank3BuyPrompt === "Ja") {
                poeng -= upgrade1Rank3Pris;
                upgrade1Rank3()
            }
        }

        function upgrade1Rank3() {
            console.log("basic apple aktivert");
            bilde1PoengAdd = bilde1PoengAdd * upgrade1Rank3Adder;
            upgrade1El.src = "bilder/maskin_ukjent.png";
            upgrade1El.removeEventListener("click", upgrade1Rank3Buy);
            bilde1Navn = "Healthy autists";
            bilde1Output = bilde1 * bilde1PoengAdd;
            bilde1El.src = "bilder/william4.jpg";
            info1El.innerHTML = "<b>Pris:</b> " + bilde1Pris + ",-     <b>" + bilde1Navn + ": </b>" + bilde1 + "        <b>Output:</b> " + bilde1Output + " per sekund";
            setInterval(upgrade1Rank4RevealChecker, 1000);
            upgrade1Rank4RevealCheckerStatus = true;
        }


    //------------Reveal-Upgrade-1-Rank-4--------------

        var upgrade1Rank4RevealCheckerStatus = true;
        var upgrade1Rank4RevealPoeng = 5000000;

        function upgrade1Rank4RevealChecker() {
            if (poeng >= upgrade1Rank4RevealPoeng && upgrade1Rank4RevealCheckerStatus === true) {
                upgrade1Rank4Reveal()
                upgrade1Rank4RevealCheckerStatus = false;
            }
        }

        function upgrade1Rank4Reveal() {
            upgrade1El.src = "bilder/glider.png";
            upgrade1El.addEventListener("click", upgrade1Rank4Buy);
        }


    //------------Upgrade-1-4---------------------

        var upgrade1Rank4Pris = 10000000;
        var upgrade1Rank4Adder = 10;
    
            function upgrade1Rank4Buy() {
                if (poeng >= upgrade1Rank4Pris) {
                    var upgrade1Rank4BuyPrompt = prompt("Vil du kjøpe 'glider' for " + upgrade1Rank4Pris + " poeng? (Skriv ja for kjøp) Multiply: " + upgrade1Rank4Adder);
                } else{
                    alert("Pris: " + upgrade1Rank4Pris + " Multiply: " + upgrade1Rank4Adder)
                }
                if (upgrade1Rank4BuyPrompt === "ja" || upgrade1Rank4BuyPrompt === "Ja") {
                    poeng -= upgrade1Rank4Pris;
                    upgrade1Rank4()
                }
            }
    
            function upgrade1Rank4() {
                console.log("glider aktivert");
            bilde1PoengAdd = bilde1PoengAdd * upgrade1Rank4Adder;
                upgrade1El.src = "bilder/maskin_ukjent.png";
                upgrade1El.removeEventListener("click", upgrade1Rank4Buy);
                bilde1Navn = "Geograbic autists";
                bilde1Output = bilde1 * bilde1PoengAdd;
                bilde1El.src = "bilder/william5.png";
                info1El.innerHTML = "<b>Pris:</b> " + bilde1Pris + ",-     <b>" + bilde1Navn + ": </b>" + bilde1 + "        <b>Output:</b> " + bilde1Output + " per sekund";
                var upgrade1Rank5RevealCheckerInterval = setInterval(upgrade1Rank5RevealChecker, 1000);
                upgrade1Rank5RevealCheckerStatus = true;
            }

            
    //------------Reveal-Upgrade-1-Rank-5--------------

        var upgrade1Rank5RevealCheckerStatus = false;
        var upgrade1Rank5RevealPoeng = 500000000;

        function upgrade1Rank5RevealChecker() {
            if (poeng >= upgrade1Rank5RevealPoeng && upgrade1Rank5RevealCheckerStatus === true) {
                upgrade1Rank5Reveal()
                clearInterval(upgrade1Rank5RevealCheckerInterval);
                upgrade1Rank5RevealCheckerStatus = false;
            }
        }

        function upgrade1Rank5Reveal() {
            upgrade1El.src = "bilder/guitar.png";
            upgrade1El.addEventListener("click", upgrade1Rank5Buy);
        }


    //------------Upgrade-1-5---------------------

        var upgrade1Rank5Pris = 1000000000;
        var upgrade1Rank5Adder = 10;
    
        function upgrade1Rank5Buy() {
                if (poeng >= upgrade1Rank5Pris) {
                    var upgrade1Rank5BuyPrompt = prompt("Vil du kjøpe 'guitar' for " + upgrade1Rank5Pris + " poeng? (Skriv ja for kjøp) Multiply: " + upgrade1Rank5Adder);
                } else{
                    alert("Pris: " + upgrade1Rank5Pris + " Multiply: " + upgrade1Rank5Adder)
                }
                if (upgrade1Rank5BuyPrompt === "ja" || upgrade1Rank5BuyPrompt === "Ja") {
                    poeng -= upgrade1Rank5Pris;
                    upgrade1Rank5()
                }
            }
    
        function upgrade1Rank5() {
                console.log("guitar aktivert");
                bilde1PoengAdd = bilde1PoengAdd * upgrade1Rank5Adder;
                upgrade1El.src = "bilder/maskin_ukjent.png";
                upgrade1El.removeEventListener("click", upgrade1Rank5Buy);
                bilde1Navn = "Autists playing guitar";
                bilde1Output = bilde1 * bilde1PoengAdd;
                bilde1El.src = "bilder/william6.png";
                info1El.innerHTML = "<b>Pris:</b> " + bilde1Pris + ",-     <b>" + bilde1Navn + ": </b>" + bilde1 + "        <b>Output:</b> " + bilde1Output + " per sekund";
                //setInterval(upgrade1Rank6RevealChecker, 1000);
                upgrade1Rank6RevealCheckerStatus = true;
            }



//------------Main-Person-2-------------------

    var bilde2El = document.querySelector("#bilde2");
    var info2El = document.querySelector("#info2");

    //------------Person-2--------------------------

        bilde2El.addEventListener("click", bilde2Buy);

        function bilde2Buy() {
            if (poeng >= bilde2Pris) {
                poeng -= bilde2Pris;
                bilde2Output++;
                bilde2Clicker();
                bilde2BuySound();
            }
        }

        var bilde2 = 0;
        var bilde2Pris = 250;
        var bilde2PrisInterval = 1.10;
        var bilde2PoengAdd = 7;
        var bilde2Navn = "Svensker"
        var bilde2Output = bilde2 * bilde2PoengAdd;

        function bilde2Clicker() {
            setInterval(bilde2AddPoeng, 1000);
            bilde2++;
            bilde2Pris = Math.round(bilde2Pris * bilde2PrisInterval);
            bilde2Output = bilde2 * bilde2PoengAdd;
            info2El.innerHTML = "<b>Pris:</b> " + bilde2Pris + ",-         <b>" + bilde2Navn + ": </b>" + bilde2 + "<b> Output:</b> " + bilde2Output + " per sekund";
        }

        function bilde2AddPoeng() {
            poeng += bilde2PoengAdd;
            console.log(bilde2PoengAdd);
        }

    //------------Info2---------------------------

        info2El.innerHTML = "<b>Pris:</b> " + bilde2Pris + ",-";

    //------------Reveal-Upgreade-2-1-------------

        var upgrade2El = document.querySelector("#upgrade2");

        var upgrade2Rank1RevealCheckerStatus = true;
        var upgrade2Rank1RevealPoeng = 3000;

        setInterval(upgrade2Rank1RevealChecker, 1000);

        function upgrade2Rank1RevealChecker() {
            if (poeng >= upgrade2Rank1RevealPoeng && upgrade2Rank1RevealCheckerStatus === true) {
                upgrade2Rank1Reveal()
                upgrade2Rank1RevealCheckerStatus = false;
            }
        }
        function upgrade2Rank1Reveal() {
            upgrade2El.src = "bilder/bullar.jpg";
            upgrade2El.addEventListener("click", upgrade2Rank1Buy);
        }

    //------------Upgreade-2-1--------------------
        var videoEl = document.querySelector("video");
        var upgrade2Rank1Pris = 7500;
        var upgrade2Rank1Adder = 3;

        function upgrade2Rank1Buy() {
            if (poeng >= upgrade2Rank1Pris) {
                var upgrade2Rank1BuyPrompt = prompt("Vil du kjøpe 'köttbullar' for " + upgrade2Rank1Pris + " poeng? (Skriv ja for kjøp) Multiply: " + upgrade2Rank1Adder);
            } else{
                alert("Pris: " + upgrade2Rank1Pris + " Multiply: " + upgrade2Rank1Adder);
            }
            if (upgrade2Rank1BuyPrompt === "ja" || upgrade2Rank1BuyPrompt === "Ja") {
                poeng -= upgrade2Rank1Pris;
                upgrade2Rank1();
                upgrade2Rank1Audiovisuals();
                setTimeout(upgrade2Rank1tilbakestill, 31000);
            }
        }

        function upgrade2Rank1() {
            console.log("Kjöttbullar aktivert");
            bilde2PoengAdd = bilde2PoengAdd * upgrade2Rank1Adder;
            upgrade2El.src = "bilder/maskin_ukjent.png";
            upgrade2El.removeEventListener("click", upgrade2Rank1Buy);
            bilde2Output = bilde2 * bilde2PoengAdd;
            bilde2El.src = "bilder/NuKjor.png";
            info2El.innerHTML = "<b>Pris:</b> " + bilde2Pris + ",-         <b>" + bilde2Navn + ": </b>" + bilde2 + "<b> Output:</b> " + bilde2Output + " per sekund";
            setInterval(upgrade2Rank2RevealChecker, 1000);
            upgrade2Rank2RevealCheckerStatus = true;
        }
    //---------------Upgrade-2-1-Audiovisuals-----------
        
        function mute(e)
        {
            e = e || window.event;
            audio.muted = !audio.muted;
            e.preventDefault();
        }

        function upgrade2Rank1Audiovisuals() {
            videoEl.src = "media/Sweden Flag.mp4";
            mute();
            upgrade2Rank1BuySound();
            muteEl.removeEventListener('click', function (e)
            {
                e = e || window.event;
                audio.muted = !audio.muted;
                e.preventDefault();
            }, false);
        }
        function upgrade2Rank1tilbakestill(){
            videoEl.src = "media/poker.mp4";
            mute();
            muteEl.addEventListener("click",  function (e)
            {
                e = e || window.event;
                audio.muted = !audio.muted;
                e.preventDefault();
            }, false);
        }
    
    //------------Reveal-Upgreade-2-2-------------
    
            var upgrade2Rank2RevealCheckerStatus = false;
            var upgrade2Rank2RevealPoeng = 750000;
    
            function upgrade2Rank2RevealChecker() {
                if (poeng >= upgrade2Rank2RevealPoeng && upgrade2Rank2RevealCheckerStatus === true) {
                    upgrade2Rank2Reveal()
                    upgrade2Rank2RevealCheckerStatus = false;
                }
            }
            function upgrade2Rank2Reveal() {
                upgrade2El.src = "bilder/volvo.jpg";
                upgrade2El.addEventListener("click", upgrade2Rank2Buy);
            }
    
    //------------Upgreade-2-2--------------------
            var upgrade2Rank2Pris = 1500000;
            var upgrade2Rank2Adder = 25;
    
            function upgrade2Rank2Buy() {
                if (poeng >= upgrade2Rank2Pris) {
                    var upgrade2Rank2BuyPrompt = prompt("Vil du kjøpe 'volvo' for " + upgrade2Rank2Pris + " poeng? (Skriv ja for kjøp) Multiply: " + upgrade2Rank2Adder);
                } else{
                    alert("Pris: " + upgrade2Rank2Pris + " Multiply: " + upgrade2Rank2Adder);
                }
                if (upgrade2Rank2BuyPrompt === "ja" || upgrade2Rank2BuyPrompt === "Ja") {
                    poeng -= upgrade2Rank2Pris;
                    upgrade2Rank2();
                    upgrade2Rank2Audiovisuals();
                    setTimeout(upgrade2Rank2tilbakestill, 20000);
                }
            }
    
            function upgrade2Rank2() {
                console.log("Nu kör vi");
                bilde2PoengAdd = bilde2PoengAdd * upgrade2Rank2Adder;
                upgrade2El.src = "bilder/maskin_ukjent.png";
                upgrade2El.removeEventListener("click", upgrade2Rank2Buy);
                bilde2Output = bilde2 * bilde2PoengAdd;
                bilde2El.src = "bilder/mathias3.jpg";
                info2El.innerHTML = "<b>Pris:</b> " + bilde2Pris + ",-         <b>" + bilde2Navn + ": </b>" + bilde2 + "<b> Output:</b> " + bilde2Output + " per sekund";
                setInterval(upgrade2Rank3RevealChecker, 1000);
                upgrade2Rank3RevealCheckerStatus = true;
            }
    //---------------Upgrade-2-2-Audiovisuals-----------
    
            function upgrade2Rank2Audiovisuals() {
                videoEl.src = "media/NuKörVi.mp4";
                mute();
                upgrade2Rank2BuySound();
                muteEl.removeEventListener('click', function (e)
                {
                    e = e || window.event;
                    audio.muted = !audio.muted;
                    e.preventDefault();
                }, false);
            }
            function upgrade2Rank2tilbakestill(){
                videoEl.src = "media/poker.mp4";
                mute();
                muteEl.addEventListener("click",  function (e)
                {
                    e = e || window.event;
                    audio.muted = !audio.muted;
                    e.preventDefault();
                }, false);
            }

    //------------Reveal-Upgreade-2-3-------------
    
            var upgrade2Rank3RevealCheckerStatus = false;
            var upgrade2Rank3RevealPoeng = 7500000;
    
            function upgrade2Rank3RevealChecker() {
                if (poeng >= upgrade2Rank3RevealPoeng && upgrade2Rank3RevealCheckerStatus === true) {
                    upgrade2Rank3Reveal()
                    upgrade2Rank3RevealCheckerStatus = false;
                }
            }
            function upgrade2Rank3Reveal() {
                upgrade2El.src = "bilder/ikea.png";
                upgrade2El.addEventListener("click", upgrade2Rank3Buy);
            }
    
    //------------Upgreade-2-3--------------------
            var upgrade2Rank3Pris = 15000000;
            var upgrade2Rank3Adder = 100;
    
            function upgrade2Rank3Buy() {
                if (poeng >= upgrade2Rank3Pris) {
                    var upgrade2Rank3BuyPrompt = prompt("Vil du kjøpe 'volvo' for " + upgrade2Rank3Pris + " poeng? (Skriv ja for kjøp) Multiply: " + upgrade2Rank3Adder);
                } else{
                    alert("Pris: " + upgrade2Rank3Pris + " Multiply: " + upgrade2Rank3Adder);
                }
                if (upgrade2Rank3BuyPrompt === "ja" || upgrade2Rank3BuyPrompt === "Ja") {
                    poeng -= upgrade2Rank3Pris;
                    upgrade2Rank3();
                }
            }
    
            function upgrade2Rank3() {
                console.log("Ikea aktivert");
                bilde2PoengAdd = bilde2PoengAdd * upgrade2Rank3Adder;
                upgrade2El.src = "bilder/maskin_ukjent.png";
                upgrade2El.removeEventListener("click", upgrade2Rank3Buy);
                bilde2Output = bilde2 * bilde2PoengAdd;
                bilde2El.src = "bilder/mathias4.png";
                info2El.innerHTML = "<b>Pris:</b> " + bilde2Pris + ",-         <b>" + bilde2Navn + ": </b>" + bilde2 + "<b> Output:</b> " + bilde2Output + " per sekund";
            }

//------------Main-Person-3-------------------

    var bilde3El = document.querySelector("#bilde3");
    var info3El = document.querySelector("#info3");

    //------------Reveal-Bilde3-------------------

        var bilde3Activate = false;
        var bilde3RevealCheckerStatus = true;
        var bilde3RevealPoeng = 15000;

        setInterval(bilde3RevealChecker, 1000);

        function bilde3RevealChecker() {
            if (poeng >= bilde3RevealPoeng && bilde3RevealCheckerStatus === true) {
                bilde3Reveal()
                bilde3RevealCheckerStatus = false;
            }
        }

        function bilde3Reveal() {
            bilde3El.src = "bilder/sigurd.png";
            info3El.innerHTML = "<b>Pris: </b>" + bilde3Pris;
            bilde3Activate = true;
        }

    //------------Bilde3--------------------------

        bilde3El.addEventListener("click", bilde3Buy);

        var bilde3Pris = 30000;
        var bilde3 = 0;
        var bilde3PrisInterval = 1.12;
        var bilde3PoengAdd = 400;
        var bilde3Output = bilde3 * bilde3PoengAdd;
        var bilde3Navn = "Skaumenn";

        function bilde3Buy() {
            if (poeng >= bilde3Pris && bilde3Activate === true) {
                poeng -= bilde3Pris;
                bilde3Output += bilde3PoengAdd;
                bilde3Clicker();
                bilde3BuySound();
            }
        }

        function bilde3Clicker() {
            setInterval(bilde3AddPoeng, 1000);
            bilde3++;
            bilde3Pris = Math.round(bilde3Pris * bilde3PrisInterval);
            info3El.innerHTML = "<b>Pris:</b> " + bilde3Pris + ",-     <b>" + bilde3Navn + ": </b>" + bilde3 + "        <b>Output:</b> " + bilde3Output + " per sekund";
        }

        function bilde3AddPoeng() {
            poeng += bilde3PoengAdd;
            console.log(bilde3PoengAdd);
        }

    //------------Reveal-Upgrade-3-1--------------

        var upgrade3El = document.querySelector("#upgrade3");

        var upgrade3Rank1RevealCheckerStatus = true;
        var upgrade3Rank1RevealPoeng = 50000;

        setInterval(upgrade3Rank1RevealChecker, 1000);

        function upgrade3Rank1RevealChecker() {
            if (poeng >= upgrade3Rank1RevealPoeng && upgrade3Rank1RevealCheckerStatus === true) {
                upgrade3Rank1Reveal()
                upgrade3Rank1RevealCheckerStatus = false;
            }
        }

        function upgrade3Rank1Reveal() {
            upgrade3El.src = "bilder/vannhentere.jpg";
            upgrade3El.addEventListener("click", upgrade3Rank1Buy);
        }

    //------------Upgrade-3-1---------------------

        var upgrade3Rank1Pris = 150000;
        var upgrade3Rank1Adder = 3;

        function upgrade3Rank1Buy() {
            if (poeng >= upgrade3Rank1Pris) {
                var upgrade3Rank1BuyPrompt = prompt("Vil du kjøpe 'vannhentere' for " + upgrade3Rank1RevealPoeng + " poeng? (Skriv ja for kjøp) Multiply: " + upgrade3Rank1Adder);
            } else{
                alert("Pris: " + upgrade3Rank1Pris + " Multiply: " + upgrade3Rank1Adder)
            }
            if (upgrade3Rank1BuyPrompt === "ja" || upgrade3Rank1BuyPrompt === "Ja") {
                poeng -= upgrade3Rank1Pris;
                upgrade3Rank1();
                upgrade3Rank1Audiovisuals();
                setTimeout(upgrade3Rank1tilbakestill, 53000);
            }
        }

        function upgrade3Rank1() {
            console.log("Vannhentere aktivert");
            bilde3PoengAdd = bilde3PoengAdd * upgrade3Rank1Adder;
            upgrade3El.src = "bilder/maskin_ukjent.png";
            upgrade3El.removeEventListener("click", upgrade3Rank1Buy);
            bilde3Navn = "Fokuserte Skaumenn";
            bilde3Output = bilde3 * bilde3PoengAdd;
            bilde3El.src = "bilder/sigurt.jpg";
            info3El.innerHTML = "<b>Pris:</b> " + bilde3Pris + ",-     <b>" + bilde3Navn + ": </b>" + bilde3 + "        <b>Output:</b> " + bilde3Output + " per sekund";
            setInterval(upgrade3Rank2RevealChecker, 1000);
            upgrade3Rank2RevealCheckerStatus = true;
        }


        //---------------Upgrade3-1-Audiovisuals----
            function upgrade3Rank1Audiovisuals() {
                videoEl.src = "media/fugler.mp4";
                mute();
                upgrade3Rank1BuySound();
                muteEl.removeEventListener('click', function (e)
                {
                    e = e || window.event;
                    audio.muted = !audio.muted;
                    e.preventDefault();
                }, false);
            }

            

            function upgrade3Rank1tilbakestill(){
                videoEl.src = "media/poker.mp4";
                mute();
                muteEl.addEventListener("click",  function (e)
                {
                    e = e || window.event;
                    audio.muted = !audio.muted;
                    e.preventDefault();
                }, false);
            }

    //------------Reveal-Upgrade-3-2--------------
    
            var upgrade3Rank2RevealCheckerStatus = false;
            var upgrade3Rank2RevealPoeng = 500000;
    
            setInterval(upgrade3Rank2RevealChecker, 1000);
    
            function upgrade3Rank2RevealChecker() {
                if (poeng >= upgrade3Rank2RevealPoeng && upgrade3Rank2RevealCheckerStatus === true) {
                    upgrade3Rank2Reveal()
                    upgrade3Rank2RevealCheckerStatus = false;
                }
            }
    
            function upgrade3Rank2Reveal() {
                upgrade3El.src = "bilder/klarinett.png";
                upgrade3El.addEventListener("click", upgrade3Rank2Buy);
            }
    
    //------------Upgrade-3-2---------------------
    
            var upgrade3Rank2Pris = 1000000;
            var upgrade3Rank2Adder = 3;
    
            function upgrade3Rank2Buy() {
                if (poeng >= upgrade3Rank2Pris) {
                    var upgrade3Rank2BuyPrompt = prompt("Vil du kjøpe 'klarinett' for " + upgrade3Rank2RevealPoeng + " poeng? (Skriv ja for kjøp) Multiply: " + upgrade3Rank2Adder);
                } else{
                    alert("Pris: " + upgrade3Rank2Pris + " Multiply: " + upgrade3Rank2Adder)
                }
                if (upgrade3Rank2BuyPrompt === "ja" || upgrade3Rank2BuyPrompt === "Ja") {
                    poeng -= upgrade3Rank2Pris;
                    upgrade3Rank2();
                }
            }
    
            function upgrade3Rank2() {
                console.log("Klarinett aktivert");
                bilde3PoengAdd = bilde3PoengAdd * upgrade3Rank2Adder;
                upgrade3El.src = "bilder/maskin_ukjent.png";
                upgrade3El.removeEventListener("click", upgrade3Rank2Buy);
                bilde3Navn = "Musikalske Skaumenn";
                bilde3Output = bilde3 * bilde3PoengAdd;
                bilde3El.src = "bilder/sigurd2.png";
                info3El.innerHTML = "<b>Pris:</b> " + bilde3Pris + ",-     <b>" + bilde3Navn + ": </b>" + bilde3 + "        <b>Output:</b> " + bilde3Output + " per sekund";
                setInterval(upgrade3Rank3RevealChecker, 1000);
                upgrade3Rank3RevealCheckerStatus = true;
            }

    //------------Reveal-Upgrade-3-3--------------
    
            var upgrade3Rank3RevealCheckerStatus = false;
            var upgrade3Rank3RevealPoeng = 10000000;
    
            setInterval(upgrade3Rank3RevealChecker, 1000);
    
            function upgrade3Rank3RevealChecker() {
                if (poeng >= upgrade3Rank3RevealPoeng && upgrade3Rank3RevealCheckerStatus === true) {
                    upgrade3Rank3Reveal()
                    upgrade3Rank3RevealCheckerStatus = false;
                }
            }
    
            function upgrade3Rank3Reveal() {
                upgrade3El.src = "bilder/axe.png";
                upgrade3El.addEventListener("click", upgrade3Rank3Buy);
            }
    
    //------------Upgrade-3-3---------------------
    
            var upgrade3Rank3Pris = 15000000;
            var upgrade3Rank3Adder = 20;
    
            function upgrade3Rank3Buy() {
                if (poeng >= upgrade3Rank3Pris) {
                    var upgrade3Rank3BuyPrompt = prompt("Vil du kjøpe 'øks' for " + upgrade3Rank3RevealPoeng + " poeng? (Skriv ja for kjøp) Multiply: " + upgrade3Rank3Adder);
                } else{
                    alert("Pris: " + upgrade3Rank3Pris + " Multiply: " + upgrade3Rank3Adder)
                }
                if (upgrade3Rank3BuyPrompt === "ja" || upgrade3Rank3BuyPrompt === "Ja") {
                    poeng -= upgrade3Rank3Pris;
                    upgrade3Rank3();
                }
            }
    
            function upgrade3Rank3() {
                console.log("Øks aktivert");
                bilde3PoengAdd = bilde3PoengAdd * upgrade3Rank3Adder;
                upgrade3El.src = "bilder/maskin_ukjent.png";
                upgrade3El.removeEventListener("click", upgrade3Rank3Buy);
                bilde3Navn = "Skaumenn med økser";
                bilde3Output = bilde3 * bilde3PoengAdd;
                bilde3El.src = "bilder/sigurd3.jpg";
                info3El.innerHTML = "<b>Pris:</b> " + bilde3Pris + ",-     <b>" + bilde3Navn + ": </b>" + bilde3 + "        <b>Output:</b> " + bilde3Output + " per sekund";
                setInterval(upgrade3Rank4RevealChecker, 1000);
                upgrade3Rank4RevealCheckerStatus = true;
            }
    

    //------------Reveal-Upgrade-3-4--------------
    
            var upgrade3Rank4RevealCheckerStatus = false;
            var upgrade3Rank4RevealPoeng = 10000000000;
    
            setInterval(upgrade3Rank4RevealChecker, 1000);
    
            function upgrade3Rank4RevealChecker() {
                if (poeng >= upgrade3Rank4RevealPoeng && upgrade3Rank4RevealCheckerStatus === true) {
                    upgrade3Rank4Reveal()
                    upgrade3Rank4RevealCheckerStatus = false;
                }
            }
    
            function upgrade3Rank4Reveal() {
                upgrade3El.src = "bilder/improved.png";
                upgrade3El.addEventListener("click", upgrade3Rank4Buy);
            }
    
    //------------Upgrade-3-4---------------------
    
            var upgrade3Rank4Pris = 25000000000;
            var upgrade3Rank4Adder = 20;
    
            function upgrade3Rank4Buy() {
                if (poeng >= upgrade3Rank4Pris) {
                    var upgrade3Rank4BuyPrompt = prompt("Vil du kjøpe 'improved technique' for " + upgrade3Rank4RevealPoeng + " poeng? (Skriv ja for kjøp) Multiply: " + upgrade3Rank4Adder);
                } else{
                    alert("Pris: " + upgrade3Rank4Pris + " Multiply: " + upgrade3Rank4Adder)
                }
                if (upgrade3Rank4BuyPrompt === "ja" || upgrade3Rank4BuyPrompt === "Ja") {
                    poeng -= upgrade3Rank4Pris;
                    upgrade3Rank4();
                }
            }
    
            function upgrade3Rank4() {
                console.log("Improved technique aktivert");
                bilde3PoengAdd = bilde3PoengAdd * upgrade3Rank4Adder;
                upgrade3El.src = "bilder/maskin_ukjent.png";
                upgrade3El.removeEventListener("click", upgrade3Rank4Buy);
                bilde3Navn = "♫ Skaumenn ♫";
                bilde3Output = bilde3 * bilde3PoengAdd;
                bilde3El.src = "bilder/sigurd4.png";
                info3El.innerHTML = "<b>Pris:</b> " + bilde3Pris + ",-     <b>" + bilde3Navn + ": </b>" + bilde3 + "        <b>Output:</b> " + bilde3Output + " per sekund";
                //setInterval(upgrade1Rank4RevealChecker, 1000);
                upgrade3Rank5RevealCheckerStatus = true;
            }
    

//------------Main-Person-4-------------------
   
    var bilde4El = document.querySelector("#bilde4");
    var info4El = document.querySelector("#info4");

    //------------Reveal-Bilde4-------------------

        var bilde4Activate = false;
        var bilde4RevealCheckerStatus = true;
        var bilde4RevealPoeng = 2500000;

        setInterval(bilde4RevealChecker, 1000);

        function bilde4RevealChecker() {
            if (poeng >= bilde4RevealPoeng && bilde4RevealCheckerStatus === true) {
                bilde4Reveal()
                bilde4RevealCheckerStatus = false;
            }
        }

        function bilde4Reveal() {
            bilde4El.src = "bilder/martin2.jpg";
            info4El.innerHTML = "<b>Pris: </b>" + bilde4Pris;
            bilde4Activate = true;
        }

    //------------Bilde4--------------------------

        bilde4El.addEventListener("click", bilde4Buy);

        var bilde4Pris = 5000000;
        var bilde4 = 0;
        var bilde4PrisInterval = 1.15;
        var bilde4PoengAdd = 25000;
        var bilde4Output = bilde4 * bilde4PoengAdd;
        var bilde4Navn = "DJ Helland";

        function bilde4Buy() {
            if (poeng >= bilde4Pris && bilde4Activate === true) {
                poeng -= bilde4Pris;
                bilde4Output += bilde4PoengAdd;
                bilde4Clicker();
                bilde4BuySound();
            }
        }

        function bilde4Clicker() {
            setInterval(bilde4AddPoeng, 1000);
            bilde4++;
            bilde4Pris = Math.round(bilde4Pris * bilde4PrisInterval);
            info4El.innerHTML = "<b>Pris:</b> " + bilde4Pris + ",-     <b>" + bilde4Navn + ": </b>" + bilde4 + "        <b>Output:</b> " + bilde4Output + " per sekund";
        }

        function bilde4AddPoeng() {
            poeng += bilde4PoengAdd;
            console.log(bilde4PoengAdd);
        }


        //------------Reveal-Upgreade-4-1-------------

            var upgrade4El = document.querySelector("#upgrade4");
        
                var upgrade4Rank1RevealCheckerStatus = true;
                var upgrade4Rank1RevealPoeng = 25000000;
        
                setInterval(upgrade4Rank1RevealChecker, 1000);
        
                function upgrade4Rank1RevealChecker() {
                    if (poeng >= upgrade4Rank1RevealPoeng && upgrade4Rank1RevealCheckerStatus === true) {
                        upgrade4Rank1Reveal()
                        upgrade4Rank1RevealCheckerStatus = false;
                    }
                }
                function upgrade4Rank1Reveal() {
                    upgrade4El.src = "bilder/photoshop.svg";
                    upgrade4El.addEventListener("click", upgrade4Rank1Buy);
                }
        
        //------------Upgreade-4-1--------------------
                var upgrade4Rank1Pris = 50000000;
                var upgrade4Rank1Adder = 8;
        
                function upgrade4Rank1Buy() {
                    if (poeng >= upgrade4Rank1Pris) {
                        var upgrade4Rank1BuyPrompt = prompt("Vil du kjøpe 'Photoshop' for " + upgrade4Rank1Pris + " poeng? (Skriv ja for kjøp) Multiply: " + upgrade4Rank1Adder);
                    } else{
                        alert("Pris: " + upgrade4Rank1Pris + " Multiply: " + upgrade4Rank1Adder);
                    }
                    if (upgrade4Rank1BuyPrompt === "ja" || upgrade4Rank1BuyPrompt === "Ja") {
                        poeng -= upgrade4Rank1Pris;
                        upgrade4Rank1();
                        upgrade4Rank1Audiovisuals();
                        setTimeout(upgrade4Rank1tilbakestill, 79000);
                    }
                }
        
                function upgrade4Rank1() {
                    console.log("DJ Helland aktivert");
                    bilde4PoengAdd = bilde4PoengAdd * upgrade4Rank1Adder;
                    upgrade4El.src = "bilder/maskin_ukjent.png";
                    upgrade4El.removeEventListener("click", upgrade4Rank1Buy);
                    bilde4Output = bilde4 * bilde4PoengAdd;
                    bilde4El.src = "bilder/martin.png";
                    info4El.innerHTML = "<b>Pris:</b> " + bilde4Pris + ",-         <b>" + bilde4Navn + ": </b>" + bilde4 + "<b> Output:</b> " + bilde4Output + " per sekund";
                }
        //---------------Upgrade-4-1-Audiovisuals-----------
        
                function upgrade4Rank1Audiovisuals() {
                    videoEl.src = "media/sjobanan.mp4";
                    mute();
                    upgrade4Rank1BuySound();
                    muteEl.removeEventListener('click', function (e)
                    {
                        e = e || window.event;
                        audio.muted = !audio.muted;
                        e.preventDefault();
                    }, false);
                }
                function upgrade4Rank1tilbakestill(){
                    videoEl.src = "media/poker.mp4";
                    mute();
                    muteEl.addEventListener("click",  function (e)
                    {
                        e = e || window.event;
                        audio.muted = !audio.muted;
                        e.preventDefault();
                    }, false);
                }
            
//------------Main-Person-5-------------------
   
    var bilde5El = document.querySelector("#bilde5");
    var info5El = document.querySelector("#info5");

    //------------Reveal-Bilde5-------------------

        var bilde5Activate = false;
        var bilde5RevealCheckerStatus = true;
        var bilde5RevealPoeng = 50000000;

        setInterval(bilde5RevealChecker, 1000);

        function bilde5RevealChecker() {
            if (poeng >= bilde5RevealPoeng && bilde5RevealCheckerStatus === true) {
                bilde5Reveal()
                bilde5RevealCheckerStatus = false;
            }
        }

        function bilde5Reveal() {
            bilde5El.src = "bilder/sindre1.png";
            info5El.innerHTML = "<b>Pris: </b>" + bilde5Pris;
            bilde5Activate = true;
        }

    //------------Bilde5--------------------------

        bilde5El.addEventListener("click", bilde5Buy);

        var bilde5Pris = 100000000;
        var bilde5 = 0;
        var bilde5PrisInterval = 1.22;
        var bilde5PoengAdd = 100000;
        var bilde5Output = bilde4 * bilde4PoengAdd;
        var bilde5Navn = "Dompidaler";

        function bilde5Buy() {
            if (poeng >= bilde5Pris && bilde5Activate === true) {
                poeng -= bilde5Pris;
                bilde5Output += bilde5PoengAdd;
                bilde5Clicker();
                bilde5BuySound();
            }
        }

        function bilde5Clicker() {
            setInterval(bilde5AddPoeng, 1000);
            bilde5++;
            bilde5Pris = Math.round(bilde5Pris * bilde5PrisInterval);
            info5El.innerHTML = "<b>Pris:</b> " + bilde5Pris + ",-     <b>" + bilde5Navn + ": </b>" + bilde5 + "        <b>Output:</b> " + bilde5Output + " per sekund";
        }

        function bilde5AddPoeng() {
            poeng += bilde5PoengAdd;
            console.log(bilde5PoengAdd);
        }


    //------------Reveal-Upgreade-5-1-------------

        var upgrade5El = document.querySelector("#upgrade5");
        
        var upgrade5Rank1RevealCheckerStatus = true;
        var upgrade5Rank1RevealPoeng = 3000000000;
        
        setInterval(upgrade5Rank1RevealChecker, 1000);
        
        function upgrade5Rank1RevealChecker() {
            if (poeng >= upgrade5Rank1RevealPoeng && upgrade5Rank1RevealCheckerStatus === true) {
                upgrade5Rank1Reveal()
                upgrade5Rank1RevealCheckerStatus = false;
            }
        }
        function upgrade5Rank1Reveal() {
            upgrade5El.src = "bilder/JohanDomp.png";
            upgrade5El.addEventListener("click", upgrade5Rank1Buy);
        }
        
    //------------Upgreade-5-1--------------------
                var upgrade5Rank1Pris = 5000000000;
                var upgrade5Rank1Adder = 25;
        
                function upgrade5Rank1Buy() {
                    if (poeng >= upgrade5Rank1Pris) {
                        var upgrade5Rank1BuyPrompt = prompt("Vil du kjøpe 'Johan Dompidal' for " + upgrade5Rank1Pris + " poeng? (Skriv ja for kjøp) Multiply: " + upgrade5Rank1Adder);
                    } else{
                        alert("Pris: " + upgrade5Rank1Pris + " Multiply: " + upgrade5Rank1Adder);
                    }
                    if (upgrade5Rank1BuyPrompt === "ja" || upgrade5Rank1BuyPrompt === "Ja") {
                        poeng -= upgrade5Rank1Pris;
                        upgrade5Rank1();
                    }
                }
        
                function upgrade5Rank1() {
                    console.log("Johan Domp aktivert");
                    bilde5PoengAdd = bilde5PoengAdd * upgrade5Rank1Adder;
                    upgrade5El.src = "bilder/maskin_ukjent.png";
                    upgrade5El.removeEventListener("click", upgrade5Rank1Buy);
                    bilde5Navn = "Tech støttede dompidaler"
                    bilde5Output = bilde5 * bilde5PoengAdd;
                    bilde5El.src = "bilder/sindre2.png";
                    info5El.innerHTML = "<b>Pris:</b> " + bilde5Pris + ",-         <b>" + bilde5Navn + ": </b>" + bilde5 + "<b> Output:</b> " + bilde5Output + " per sekund";
                }

//------------Poeng-Updater-------------------

    setInterval(sjekkResultat, 500);
    function sjekkResultat() {
        poengEl.innerHTML = "<b>Poeng: </b>" + poeng;
    }