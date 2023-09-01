var tubeimg;
function start() {
  document.getElementById("step1").disabled = false;
  document.getElementById("step0").disabled = true;
}

function thaw() {
  //document.getElementById("writeaction").innerHTML="Thawing the PCR reaction components on ice";
  document.getElementById("step2").disabled = false;
  document.getElementById("step1").disabled = true;
}

function prepmix() {
  //document.getElementById("writeaction").innerHTML="Preparation of the PCR reaction mix";
  document.getElementById("tube").style.display = "block";
  tubeimg = document.getElementById('tube');
  document.getElementById("step3").disabled = false;
  document.getElementById("step2").disabled = true;
  tubeimg.removeEventListener('click', tubeinsert);
}



function PCRincub() {
  // document.getElementById("writeaction").innerHTML="Incubation of the PCR reaction mixture in a thermal cycler";
  document.getElementById("opentc").style.display = "block";
  //document.getElementById("step3").disabled=true;
}

/* var imgotc=null;
 function openthermalcycle(){
    document.getElementById("tube").style.display="block";
    var otc=document.getElementById("pcrmachinecover");
  //  otc.style.transform = 'rotateX(70deg)';
     var ottop=3; //initial  position
    clearInterval(imgotc);
      imgotc = setInterval(frame, 20); // frame is 7 denotes the speed of the movement
    function frame() {
        if (ottop == -20) {  //1
           
          clearInterval(imgotc); 
          
        } else {
            
          ottop--; 
          otc.style.top = ottop + '%'; 
         
        }
      } 
 } */

/* var imgtccl=null;
function closethermalcycle(){
   var tccl=document.getElementById("pcrmachinecover");
  // tccl.style.transform = 'rotateX(0deg)';
    var ttopclp=-20; //initial  position
   clearInterval(imgtccl);
   imgtccl = setInterval(frame, 20); // frame is 7 denotes the speed of the movement
   function frame() {
       if (ttopclp == 3) { 
           //tccl.style.zIndex = 2 + '%'; 
         clearInterval(imgtccl); 
         
       } else {
           
           ttopclp++; 
           tccl.style.top = ttopclp + '%'; 
        
       }
     } 
} */

var imgodtb = null;
var imgtbdown = null;
function tubeinsert() {
  var tubeinst = document.getElementById("tube");
  var tubetopp = 17;
  var tubeleftp = 40; //initial  position
  clearInterval(imgodtb);
  //clearInterval(imgtbdown);
  imgodtb = setInterval(frame, 40); /* frame is 7 denotes the speed of the movement*/

  function frame() {
    if (tubeleftp == 14) {

      clearInterval(imgodtb);

      //imgtbdown = setInterval(frame, 20);
      imgtbdown = setInterval(frames, 60);

    } else {

      tubeleftp--;
      tubeinst.style.left = tubeleftp + '%';

    }
  }

  function frames() {
    if (tubetopp == 20) {
      tubeinst.style.zIndex = -2;
      clearInterval(imgtbdown);

    } else {

      tubetopp++;
      tubeinst.style.top = tubetopp + '%';

    }
  }
}


var element1 = document.querySelector(".open");
var element2 = document.querySelector(".door1");

element1.addEventListener("click", toggleDoor);

function toggleDoor() {
  element2.classList.toggle("doorOpen1");

}


function openthermalcycle() {
  var btntext = document.getElementById("opentc");
  if (btntext.innerHTML === "Open") {
    btntext.innerHTML = "Close";
    tubeimg.addEventListener('click', tubeinsert);
  } else {
    btntext.innerHTML = "Open";
    document.getElementById("run").style.display = "block";
  }
}


var imgdnaa = null;
var imgdnab = null;
var imgdnapria = null;
var imgdnaprib = null;
var imgdnac2sepa = null;
var imgdnac2sepb = null;
function runpcr() {
  document.getElementById("dnastrandsa").style.display = "block";
  document.getElementById("dnastrandsb").style.display = "block";
  document.getElementById("stepshead").innerHTML = "1. Denaturation";
  document.getElementById("den3min").style.background = "#ADFFF5 ";
  document.getElementById("den3min").style.opacity = "50%";
  setTimeout(separatedna, 2000);
  setTimeout(separatednb, 2000);

  function separatedna() {


    var dnaa = document.getElementById("dnastrandsa");

    var dnatopp = 35; //initial  position
    clearInterval(imgdnaa);
    imgdnaa = setInterval(frame, 50); // frame is 30 denotes the speed of the movement
    function frame() {
      if (dnatopp == 20) {  //1

        clearInterval(imgdnaa);
        setTimeout(primerdna, 3000);
      } else {

        dnatopp--;
        dnaa.style.top = dnatopp + '%';

      }
    }
  }

  function separatednb() {


    var dnab = document.getElementById("dnastrandsb");

    var dnabtopp = 35; //initial  position
    clearInterval(imgdnab);
    imgdnab = setInterval(frame, 50); // frame is 30 denotes the speed of the movement
    function frame() {
      if (dnabtopp == 50) {  //1

        clearInterval(imgdnab);
        setTimeout(primerdnab, 3000);
      } else {

        dnabtopp++;
        dnab.style.top = dnabtopp + '%';

      }
    }
  }


  function primerdna() {

    document.getElementById("den3min").style.opacity = "0%";
    document.getElementById("ann2min").style.background = "#ADFFF5 ";
    document.getElementById("ann2min").style.opacity = "50%";
    document.getElementById("stepshead").innerHTML = "2. Annealing";
    document.getElementById("dnaprimer").style.display = "block";
    var dnapria = document.getElementById("dnaprimer");

    var dnapritopp = 40; //initial  position
    clearInterval(imgdnapria);
    imgdnapria = setInterval(frame, 50); // frame is 30 denotes the speed of the movement
    function frame() {
      if (dnapritopp == 46) {  //1

        clearInterval(imgdnab);
        setTimeout(primerextdnaa, 3000);
      } else {

        dnapritopp++;
        dnapria.style.top = dnapritopp + '%';

      }
    }
  }

  function primerdnab() {
    document.getElementById("den3min").style.opacity = "0%";
    document.getElementById("ann2min").style.background = "#ADFFF5 ";
    document.getElementById("ann2min").style.opacity = "50%";
    document.getElementById("stepshead").innerHTML = "2. Annealing";
    document.getElementById("dnaprimerb").style.display = "block";
    var dnaprib = document.getElementById("dnaprimerb");

    var dnapribtopp = 35; //initial  position
    clearInterval(imgdnaprib);
    imgdnaprib = setInterval(frame, 50); // frame is 30 denotes the speed of the movement
    function frame() {
      if (dnapribtopp == 24) {  //1

        clearInterval(imgdnaprib);
        setTimeout(primerextdnab, 3000);
      } else {

        dnapribtopp--;
        dnaprib.style.top = dnapribtopp + '%';

      }
    }
  }

  function primerextdnaa() {
    document.getElementById("ann2min").style.opacity = "0%";
    document.getElementById("ext1min").style.background = "#ADFFF5 ";
    document.getElementById("ext1min").style.opacity = "50%";
    document.getElementById("stepshead").innerHTML = "3. Extension";
    document.getElementById("dnastrandsa").style.display = "none";
    document.getElementById("dnaprimer").style.display = "none";
    document.getElementById("c2dna").style.display = "block";
    document.getElementById("c2dnaa").style.display = "block";
    //setTimeout(gotostep2, 2000);
    setTimeout(c2dnaseparatea, 5000);
    

  }



  function primerextdnab() {
    document.getElementById("ann2min").style.opacity = "0%";
    document.getElementById("ext1min").style.background = "#ADFFF5 ";
    document.getElementById("ext1min").style.opacity = "50%";
    document.getElementById("stepshead").innerHTML = "3. Extension";

    document.getElementById("dnastrandsb").style.display = "none";
    document.getElementById("dnaprimerb").style.display = "none";
    document.getElementById("c2dnab").style.display = "block";
    document.getElementById("c2dnac").style.display = "block";
    //setTimeout(gotostep2, 2000);
    setTimeout(c2dnaseparateb, 5000);

  }

/* function gotostep2(){
  document.getElementById("goto2").style.background = "#ADFFF5 ";
  document.getElementById("goto2").style.opacity = "50%";
  document.getElementById("ext1min").style.opacity = "0%";
  document.getElementById("cyclenum").innerHTML = "Cycle 2"; 
  
  setTimeout(c2dnaseparateb, 5000);
  setTimeout(c2dnaseparatea, 5000);
} */




//Cycle 2 starts


  function c2dnaseparateb() {
   document.getElementById("stepshead").innerHTML = "1. Denaturation";
   document.getElementById("den2min").style.background = "#ADFFF5 ";
    document.getElementById("den2min").style.opacity = "50%";
   
    document.getElementById("cyclenum").innerHTML = "Cycle 2"; 
    var dnac2sepb = document.getElementById("c2dnaa");

    var dnasepbtopp = 40; //initial  position
    clearInterval(imgdnac2sepb);
    imgdnac2sepb = setInterval(frame, 50); // frame is 30 denotes the speed of the movement
    function frame() {
      if (dnasepbtopp == 50) {

        clearInterval(imgdnac2sepb);
        setTimeout(c2dnaprimer, 5000);

      } else {

        dnasepbtopp++;
        dnac2sepb.style.top = dnasepbtopp + '%';

      }
    }
  }


  function c2dnaseparatea() {
   
     document.getElementById("stepshead").innerHTML = "1. Denaturation";
    document.getElementById("den2min").style.background = "#ADFFF5 ";
    document.getElementById("den2min").style.opacity = "50%";
    
    document.getElementById("cyclenum").innerHTML = "Cycle 2"; 
    var dnac2sep = document.getElementById("c2dnab");
    dnac2sep.style.top = 30 + '%';
    setTimeout(c2dnaprimer, 5000);

    /* var dnasepatopp = 23; //initial  position
    clearInterval(imgdnac2sepa);
    imgdnac2sepa = setInterval(frame, 50); // frame is 30 denotes the speed of the movement
    function frame() {
      if (dnasepatopp == 33) {

        clearInterval(imgdnac2sepa);

      } else {

        dnasepatopp++;
        dnac2sep.style.top = dnasepatopp + '%';

      }
    } */
  }

  function c2dnaprimer(){
    document.getElementById("den2min").style.opacity = "0%";
    document.getElementById("ann2min").style.background = "#ADFFF5 ";
    document.getElementById("ann2min").style.opacity = "50%";
    document.getElementById("stepshead").innerHTML = "2. Annealing";
    document.getElementById("cyclenum").innerHTML = "Cycle 2";
    document.getElementById("dnaprimerc2").style.display = "block";
    document.getElementById("dnaprimer12c2").style.display = "block";
    document.getElementById("dnaprimerc2b").style.display = "block";
    document.getElementById("dnaprimer22c2b").style.display = "block";
    setTimeout(c2dnaext, 5000);

  }

  function c2dnaext(){
    document.getElementById("ann2min").style.opacity = "0%";
    document.getElementById("ext1min").style.background = "#ADFFF5 ";
    document.getElementById("ext1min").style.opacity = "50%";
    document.getElementById("stepshead").innerHTML = "3. Extension";
    document.getElementById("cyclenum").innerHTML = "Cycle 2";
    document.getElementById("dnastrandsac2ext").style.display = "block";
    document.getElementById("dnastrandsbc2ext").style.display = "block";
    document.getElementById("dnac2exta").style.display = "block";
    document.getElementById("dnac2extb").style.display = "block";
  }

}