/*  
Lab name: Experimental Biochemistry
Exp name: DNA amplification by polymerase chain reaction (PCR)
File name: main.js
Developer: Prakriti Dhang
*/

var tubeimg;
function start() {
  document.getElementById("step1").disabled = false;
  document.getElementById("step0").disabled = true;
  //alert("A desktop or laptop is the preferred choice for an enhanced viewing experience.");
}

function restartexp() {
  location.reload();
}

var thawcomponents = document.getElementById("step1");
function thawcomp() {
  document.getElementById("step2").disabled = false;
  if (thawcomponents.options[thawcomponents.selectedIndex].value == 0) {
    document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
    document.getElementById("thaw").innerHTML = "The components of the PCR reaction that are thawed and centrifuged:  ";

  }
  if (thawcomponents.options[thawcomponents.selectedIndex].value == 1) {
    document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
    document.getElementById("thaw").innerHTML = thawcomponents.options[thawcomponents.selectedIndex].text + " has been added in the ice bucket";
    //document.getElementById("opt1").disabled = false;
    document.getElementById("tube1").style.display = "block";
  }
  if (thawcomponents.options[thawcomponents.selectedIndex].value == 2) {
    document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
    document.getElementById("thaw").innerHTML = thawcomponents.options[thawcomponents.selectedIndex].text + " has been added in the ice bucket";
    //document.getElementById("opt2").disabled = false;
    document.getElementById("tube2").style.display = "block";
  }
  if (thawcomponents.options[thawcomponents.selectedIndex].value == 3) {
    document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
    document.getElementById("thaw").innerHTML = thawcomponents.options[thawcomponents.selectedIndex].text + " has been added in the ice bucket";
    // document.getElementById("opt3").disabled = false;
    document.getElementById("tube3").style.display = "block";
  }
  if (thawcomponents.options[thawcomponents.selectedIndex].value == 4) {
    document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
    document.getElementById("thaw").innerHTML = thawcomponents.options[thawcomponents.selectedIndex].text + " has been added in the ice bucket";
    //document.getElementById("opt6").disabled = false;
    document.getElementById("tube6").style.display = "block";
  }
  if (thawcomponents.options[thawcomponents.selectedIndex].value == 5) {
    document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
    document.getElementById("thaw").innerHTML = thawcomponents.options[thawcomponents.selectedIndex].text + " has been added in the ice bucket";
    // document.getElementById("opt4").disabled = false;
    document.getElementById("tube4").style.display = "block";
  }
  if (thawcomponents.options[thawcomponents.selectedIndex].value == 6) {
    document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
    document.getElementById("thaw").innerHTML = thawcomponents.options[thawcomponents.selectedIndex].text + " has been added in the ice bucket";
    // document.getElementById("opt5").disabled = false;
    document.getElementById("tube5").style.display = "block";
  }

  if ((thawcomponents.options[thawcomponents.selectedIndex].value == 7) || (thawcomponents.options[thawcomponents.selectedIndex].value == 8)) {
    document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
    document.getElementById("thaw").innerHTML = thawcomponents.options[thawcomponents.selectedIndex].text + " is not a correct component";
  }
}


function prepmix() {
  //if ((document.getElementById('opt1').checked) && (document.getElementById('opt2').checked) && (document.getElementById('opt3').checked) && (document.getElementById('opt4').checked) && (document.getElementById('opt5').checked) && (document.getElementById('opt6').checked)) {
  // alert("correct");
  document.getElementById("tube").style.display = "block";
  document.getElementById("step2").disabled = true;
  document.getElementById("thaw").innerHTML = "";
  document.getElementById("actionhead").innerHTML = "Action: Preparation of the PCR reaction mix";
  document.getElementById("prep").innerHTML = "The components required for PCR as mentioned above are assembled in a tube and mixed and centrifuged";
  tubeimg = document.getElementById('tube');
  document.getElementById("step3").disabled = false;
  document.getElementById("tube1").style.display = "none";
  document.getElementById("tube2").style.display = "none";
  document.getElementById("tube3").style.display = "none";
  document.getElementById("tube4").style.display = "none";
  document.getElementById("tube5").style.display = "none";
  document.getElementById("tube6").style.display = "none";
  document.getElementById("icebucket").style.display = "none";



  //
  tubeimg.removeEventListener('click', tubeinsert);
  /*}
  else if ((document.getElementById('opt1').checked == false) || (document.getElementById('opt2').checked == false) || (document.getElementById('opt3').checked == false) || (document.getElementById('opt4').checked == false) || (document.getElementById('opt5').checked == false) || (document.getElementById('opt6').checked == false)) {
    alert("One or more component(s) is(are) required for preparing the mixture.");
    document.getElementById("thaw").innerHTML = "";
    document.getElementById("actionhead").innerHTML = "Action: Preparation of the PCR reaction mix";
    document.getElementById("prep").innerHTML = "One or more component(s) is(are) required for preparing the mixture.";
  }
*/
  // document.getElementById("prep").innerHTML = "The components required for PCR as mentioned before are assembled in a tube and mixed and centrifuged. Bubbles must be avoided in the PCR reaction tube. In order to avoid  non-specific primed synthesis during the assembly of the reaction prior to PCR cycling, all components of the PCR reaction must be assembled on ice and the DNA- Polymerase should be added at last.";


}



function PCRincub() {
  document.getElementById("prep").innerHTML = "";
  document.getElementById("actionhead").innerHTML = "Action: Incubation of the PCR reaction mixture in a thermal cycler";
  // document.getElementById("cyclenum").innerHTML = "Cycle 1";
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
      document.getElementById("tubecover").style.display="block";

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
var imgdnac2prifc21 = null;
var imgdnac2prirc21 = null;
var imgdnac2prifc22 = null;
var imgdnac2prirc22 = null;

function runpcr() {
  document.getElementById("dnastrandsa").style.display = "block";
  document.getElementById("dnastrandsb").style.display = "block";
  document.getElementById("run").style.display = "none";
  //document.getElementById("stepshead").innerHTML = "1. Denaturation";
  document.getElementById("pcrstp1").style.display = "block";
  document.getElementById("den3min").style.background = "#ADFFF5 ";
  document.getElementById("den3min").style.opacity = "50%";
  document.getElementById("cyclenum").innerHTML = "Cycle 1";
  document.getElementById("stepcycle").style.display = "block";
  document.getElementById("thermo").style.display = "block";

  document.getElementById("thermometerborder").style.display = "block";


  setTimeout(separatedna, 2000);
  setTimeout(separatednb, 2000);

  function separatedna() {

    document.getElementById("thermometer").style.display = "block";
    increasetemp94();

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
    decreasetemp57();

    document.getElementById("den3min").style.opacity = "0%";
    document.getElementById("ann2min").style.background = "#ADFFF5 ";
    document.getElementById("ann2min").style.opacity = "50%";
    //document.getElementById("stepshead").innerHTML = "2. Annealing";
    document.getElementById("pcrstp2").style.display = "block";
    document.getElementById("dnaprimer").style.display = "block";
    var dnapria = document.getElementById("dnaprimer");

    var dnapritopp = 40; //initial  position
    clearInterval(imgdnapria);
    imgdnapria = setInterval(frame, 50); // frame is 30 denotes the speed of the movement
    function frame() {
      if (dnapritopp == 46) {  //1

        clearInterval(imgdnab);
        setTimeout(primerextdnaa, 2000);
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
    // document.getElementById("stepshead").innerHTML = "2. Annealing";
    document.getElementById("pcrstp2").style.display = "block";
    document.getElementById("dnaprimerb").style.display = "block";
    var dnaprib = document.getElementById("dnaprimerb");

    var dnapribtopp = 35; //initial  position
    clearInterval(imgdnaprib);
    imgdnaprib = setInterval(frame, 50); // frame is 30 denotes the speed of the movement
    function frame() {
      if (dnapribtopp == 24) {  //1

        clearInterval(imgdnaprib);
        setTimeout(primerextdnab, 2000);
      } else {

        dnapribtopp--;
        dnaprib.style.top = dnapribtopp + '%';

      }
    }
  }

  function primerextdnaa() {
    increasetemp72();
    document.getElementById("ann2min").style.display = "none";
    document.getElementById("ext1min").style.background = "#ADFFF5 ";
    document.getElementById("ext1min").style.opacity = "50%";
    //document.getElementById("stepshead").innerHTML = "3. Extension";
    document.getElementById("pcrstp3").style.display = "block";
    document.getElementById("dnastrandsa").style.display = "block";
    document.getElementById("dnaprimer").style.display = "block";
    document.getElementById("taqpoly").style.display = "block";
    /*  document.getElementById("c2dna").style.display = "block";
     document.getElementById("c2dnaa").style.display = "block"; */
    //setTimeout(gotostep2, 2000);
    //setTimeout(c2dnaseparatea, 5000);


  }



  function primerextdnab() {
    document.getElementById("ann2min").style.display = "none";
    document.getElementById("ext1min").style.background = "#ADFFF5 ";
    document.getElementById("ext1min").style.opacity = "50%";
    //document.getElementById("stepshead").innerHTML = "3. Extension";
    document.getElementById("pcrstp3").style.display = "block";
    document.getElementById("dnastrandsb").style.display = "block";
    document.getElementById("dnaprimerb").style.display = "block";
    document.getElementById("taqpolyr").style.display = "block";

    /* document.getElementById("c2dnab").style.display = "block";
    document.getElementById("c2dnac").style.display = "block"; */
    setTimeout(cycle2, 2000);
    //setTimeout(c2dnaseparateb, 5000);

  }

  function cycle2() {
    //document.getElementById("cycle1dna").style.display = "block";
    document.getElementById("dnastrandsac21").style.display = "block";
    document.getElementById("dnastrandsbc21").style.display = "block";
    document.getElementById("dnastrandsac22").style.display = "block";
    document.getElementById("dnastrandsbc22").style.display = "block";
    document.getElementById("dnastrandsa").style.visibility = "hidden";
    document.getElementById("dnaprimer").style.visibility = "hidden";
    document.getElementById("taqpoly").style.visibility = "hidden";
    document.getElementById("dnastrandsb").style.display = "none";
    document.getElementById("dnaprimerb").style.display = "none";
    document.getElementById("taqpolyr").style.display = "none";
    setTimeout(gotostep2, 2000);
  }

  function gotostep2() {
    // cleartemp();
    document.getElementById("goto2").style.background = "#ADFFF5 ";
    document.getElementById("goto2").style.opacity = "50%";
    document.getElementById("ext1min").style.display = "none";
    document.getElementById("cyclenum").innerHTML = "Go to step 2";
    /*  document.getElementById("pcrstp1").style.display = "none";
    document.getElementById("pcrstp2").style.display = "none";
    document.getElementById("pcrstp3").style.display = "none";   */

    setTimeout(c2dnaseparatea, 4000);
    setTimeout(c2dnaseparateb, 4000);
  }




  //Cycle 2 starts


  function c2dnaseparateb() {

    increasec2temp94();
    document.getElementById("pcrstp1").style.display = "block";
    //document.getElementById("stepsheadc21").style.display = "block";
    //document.getElementById("pcrsteps").style.display = "none";
    document.getElementById("den2min").style.background = "#ADFFF5 ";
    document.getElementById("den2min").style.opacity = "50%";
    document.getElementById("goto2").style.display = "none";
    //document.getElementById("stepshead").style.display = "none";
    document.getElementById("cyclenum").innerHTML = "Cycle 2";
    var dnac2sepb = document.getElementById("dnastrandsac21");

    var dnasepbtopp = 20; //initial  position
    clearInterval(imgdnac2sepb);
    imgdnac2sepb = setInterval(frame, 50); // frame is 30 denotes the speed of the movement
    function frame() {
      if (dnasepbtopp == 8) {

        clearInterval(imgdnac2sepb);
        setTimeout(c2dnaprimer1, 3000);

      } else {

        dnasepbtopp--;
        dnac2sepb.style.top = dnasepbtopp + '%';

      }
    }
  }


  function c2dnaseparatea() {
    // document.getElementById("stepsheadc21").style.display = "block";
    document.getElementById("pcrstp1").style.display = "block";
    //document.getElementById("pcrsteps").style.display = "none";
    //document.getElementById("stepshead").style.display = "none";
    /* document.getElementById("den2min").style.background = "#ADFFF5 ";
    document.getElementById("den2min").style.opacity = "50%"; */
    document.getElementById("goto2").style.display = "none";

    document.getElementById("cyclenum").innerHTML = "Cycle 2";
    var dnac2sep = document.getElementById("dnastrandsbc22");
    // dnac2sep.style.top = 30 + '%';



    var dnasepatopp = 50; //initial  position
    clearInterval(imgdnac2sepa);
    imgdnac2sepa = setInterval(frame, 50); // frame is 30 denotes the speed of the movement
    function frame() {
      if (dnasepatopp == 70) {

        clearInterval(imgdnac2sepa);
        setTimeout(c2dnaprimer2, 3000);

      } else {

        dnasepatopp++;
        dnac2sep.style.top = dnasepatopp + '%';

      }
    }
  }

  function c2dnaprimer1() {
    document.getElementById("thermometer").style.display = "none";
    document.getElementById("thermometer1").style.display = "block";
    decreasec2temp57();
    document.getElementById("dnaprimerc2f1").style.display = "block";
    document.getElementById("dnaprimerbc2r1").style.display = "block";
    document.getElementById("pcrstp2").style.display = "block";
    document.getElementById("den2min").style.display = "none";
    document.getElementById("ann2min").style.display = "block";

    document.getElementById("cyclenum").innerHTML = "Cycle 2";

    var dnac2prif = document.getElementById("dnaprimerc2f1");
    // dnac2sep.style.top = 30 + '%';



    var dnaprifc2topp = 18; //initial  position
    clearInterval(imgdnac2prifc21);
    imgdnac2prifc21 = setInterval(frame, 50); // frame is 30 denotes the speed of the movement
    function frame() {
      if (dnaprifc2topp == 20) {

        clearInterval(imgdnac2prifc21);
        setTimeout(c2dnaext, 3000);

      } else {

        dnaprifc2topp++;
        dnac2prif.style.top = dnaprifc2topp + '%';

      }
    }

    var dnac2prir = document.getElementById("dnaprimerbc2r1");
    // dnac2sep.style.top = 30 + '%';



    var dnaprirc2topp = 15; //initial  position
    clearInterval(imgdnac2prirc21);
    imgdnac2prirc21 = setInterval(frame1, 50); // frame is 30 denotes the speed of the movement
    function frame1() {
      if (dnaprirc2topp == 12) {

        clearInterval(imgdnac2prirc21);


      } else {

        dnaprirc2topp--;
        dnac2prir.style.top = dnaprirc2topp + '%';

      }
    }


  }

  function c2dnaprimer2() {

    document.getElementById("dnaprimerc2f2").style.display = "block";
    document.getElementById("dnaprimerbc2r2").style.display = "block";
    document.getElementById("pcrstp2").style.display = "block";
    document.getElementById("den2min").style.display = "none";
    document.getElementById("ann2min").style.display = "block";
    //document.getElementById("stepshead").style.display = "none";
    document.getElementById("cyclenum").innerHTML = "Cycle 2";


    var dnac2prif2 = document.getElementById("dnaprimerc2f2");
    // dnac2sep.style.top = 30 + '%';



    var dnaprif2c2topp = 58; //initial  position
    clearInterval(imgdnac2prifc22);
    imgdnac2prifc22 = setInterval(frame, 50); // frame is 30 denotes the speed of the movement
    function frame() {
      if (dnaprif2c2topp == 66) {

        clearInterval(imgdnac2prifc22);
        // setTimeout(c2dnaext, 5000);

      } else {

        dnaprif2c2topp++;
        dnac2prif2.style.top = dnaprif2c2topp + '%';

      }
    }

    var dnac2prir2 = document.getElementById("dnaprimerbc2r2");
    // dnac2sep.style.top = 30 + '%';



    var dnaprir2c2topp = 55; //initial  position
    clearInterval(imgdnac2prirc22);
    imgdnac2prirc22 = setInterval(frame1, 50); // frame is 30 denotes the speed of the movement
    function frame1() {
      if (dnaprir2c2topp == 50) {

        clearInterval(imgdnac2prirc22);


      } else {

        dnaprir2c2topp--;
        dnac2prir2.style.top = dnaprir2c2topp + '%';

      }
    }


  }


  function c2dnaext() {
    document.getElementById("thermometer").style.display = "none";
    document.getElementById("thermometer1").style.display = "none";
    document.getElementById("thermometer2").style.display = "block";
    increasec2temp72();
    document.getElementById("pcrstp3").style.display = "block";
    document.getElementById("ann2min").style.display = "none";
    // document.getElementById("stepsheadc23").style.display = "block";
    document.getElementById("ext1min").style.display = "block";
    //document.getElementById("stepshead").style.display = "none";
    document.getElementById("cyclenum").innerHTML = "Cycle 2";
    document.getElementById("taqpolyc21").style.display = "block";
    document.getElementById("taqpolyc21r").style.display = "block";
    document.getElementById("taqpolyc22").style.display = "block";
    document.getElementById("taqpolyc22r").style.display = "block";

    setTimeout(cycle3, 3000);

  }
  function cycle3() {
    document.getElementById("pcrstp1").style.display = "block";
    document.getElementById("pcrstp2").style.display = "block";
    document.getElementById("pcrstp3").style.display = "block";
    //document.getElementById("stepsheadc23").style.display = "none";
    //document.getElementById("pcrsteps").style.display = "block";
    document.getElementById("cyclenum").innerHTML = "Cycle 2";
    document.getElementById("ext1min").style.display = "none";

    document.getElementById("dnastrandsac31").style.display = "block";
    document.getElementById("dnastrandsbc31").style.display = "block";
    document.getElementById("dnastrandsac32").style.display = "block";
    document.getElementById("dnastrandsbc32").style.display = "block";
    document.getElementById("dnastrandsac31t").style.display = "block";
    document.getElementById("dnastrandsbc31b").style.display = "block";
    document.getElementById("dnastrandsac32t").style.display = "block";
    document.getElementById("dnastrandsbc32b").style.display = "block";



    document.getElementById("dnaprimerc2f2").style.display = "none";
    document.getElementById("dnaprimerbc2r2").style.display = "none";
    document.getElementById("dnaprimerc2f1").style.display = "none";
    document.getElementById("dnaprimerbc2r1").style.display = "none";
    document.getElementById("taqpolyc21").style.display = "none";
    document.getElementById("taqpolyc21r").style.display = "none";
    document.getElementById("taqpolyc22").style.display = "none";
    document.getElementById("taqpolyc22r").style.display = "none";
    document.getElementById("dnastrandsac21").style.display = "none";
    document.getElementById("dnastrandsbc21").style.display = "none";
    document.getElementById("dnastrandsac22").style.display = "none";
    document.getElementById("dnastrandsbc22").style.display = "none";
    document.getElementById('message').innerHTML="Sample is ready for agarose gel electrophoresis.";

   /*  const canvas = document.getElementById('message');


// Get the 2D drawing context
const ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Set font properties
ctx.font = 'bold 13px Arial'; // You can adjust the font weight, size and family

// Set text properties
ctx.fillStyle = 'black'; // Text color
ctx.textAlign = 'center'; // Text alignment (centered horizontally)
ctx.textBaseline = 'middle'; // Text baseline (centered vertically)

// Define the text to be displayed
const text = "Sample is ready for agarose gel electrophoresis.";


// Get the position to place the text (in this case, centered on the canvas)
const x = canvas.width / 2;
const y = canvas.height / 2;

// Draw the text on the canvas
ctx.fillText(text, x, y); */

  }

}


function increasetemp94() {
  canvas = document.getElementById("thermometer");
  ctx = canvas.getContext("2d");
  var posY = 150;
  var speed = 3;

  function drawLine() {

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 600;
    ctx.beginPath();
    ctx.moveTo(0, posY); /*  0-130*/
    ctx.lineTo(0, 180);
    ctx.stroke();
  }

  function moveLine() {
    posY += speed;

    if (posY < 0 || posY > canvas.height) {
      speed = speed * -1;
    }
  }

  function loop() {
    // clear old frame;
    //ctx.clearRect(0,0,canvas.width, 57);

    moveLine();
    drawLine();
    cancelani = requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);


}


function decreasetemp57() {
  canvas = document.getElementById("thermometer");
  ctx = canvas.getContext("2d");
  var posY = 0;
  var speed = 3;

  function drawLine() {
    ctx.clearRect(0, 0, canvas.width, 57);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 600;
    ctx.beginPath();
    //ctx.moveTo(0, 57); /*  0-130*/
    ctx.lineTo(0, 180);
    ctx.stroke();
  }

  function moveLine() {
    posY += speed;

    if (posY > 0 || posY < canvas.height) {
      speed = speed * -1;
    }
  }

  function loop() {
    // clear old frame;
    //ctx.clearRect(0,0,canvas.width, 57);

    moveLine();
    drawLine();
    cancelani = requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

}

function increasetemp72() {
  canvas = document.getElementById("thermometer");
  ctx = canvas.getContext("2d");
  var posY = 30;
  //var speed=3;

  function drawLine() {

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 600;
    ctx.beginPath();
    ctx.moveTo(0, posY); /*  0-130*/
    ctx.lineTo(0, 180);
    ctx.stroke();
  }

  /* function moveLine () {
  posY += speed;
  
  if (posY < 0 || posY > 40) {
    speed = speed * -1;
  }
  }*/

  function loop() {
    // clear old frame;
    //ctx.clearRect(0,0,canvas.width, 57);

    //moveLine();
    drawLine();
    cancelani = requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

}

function increasec2temp94() {
  canvas = document.getElementById("thermometer");
  ctx = canvas.getContext("2d");
  var posY = 0;
  //var speed=3;

  function drawLine() {

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 600;
    ctx.beginPath();
    ctx.moveTo(0, posY); /*  0-130*/
    ctx.lineTo(0, 180);
    ctx.stroke();
  }

  /* function moveLine () {
  posY += speed;
  
  if (posY < 0 || posY > 40) {
    speed = speed * -1;
  }
  }*/

  function loop() {
    // clear old frame;
    //ctx.clearRect(0,0,canvas.width, 57);

    //moveLine();
    drawLine();
    cancelani = requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

}

function decreasec2temp57() {

  var canvas = document.getElementById("thermometer1");
  var ctx = canvas.getContext("2d");
  var posY = 57;
  //var speed = 3;

  function drawLine() {
    ctx.clearRect(0, 0, canvas.width, 57);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 600;
    ctx.beginPath();
     ctx.moveTo(0, posY); /*  0-130*/
    ctx.lineTo(0, 180);
    ctx.stroke();
  }

  /* function moveLine() {
    posY += speed;

    if (posY > 0 || posY < canvas.height) {
      speed = speed * -1;
    }
  }
 */
  function loop() {
    // clear old frame;
    //ctx.clearRect(0,0,canvas.width, 57);

    //  moveLine();
    drawLine();
    cancelani = requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

}

function increasec2temp72() {
  var canvas = document.getElementById("thermometer2");
  var ctx = canvas.getContext("2d");
  var posY = 30;
  //var speed=3;

  function drawLine() {

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 600;
    ctx.beginPath();
    ctx.moveTo(0, posY); /*  0-130*/
    ctx.lineTo(0, 180);
    ctx.stroke();
  }

  /* function moveLine () {
  posY += speed;
  
  if (posY < 0 || posY > 40) {
    speed = speed * -1;
  }
  }*/

  function loop() {
    // clear old frame;
    //ctx.clearRect(0,0,canvas.width, 57);

    //moveLine();
    drawLine();
    cancelani = requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);


}


/* function cleartemp() {
  canvas = document.getElementById("thermometer");
  ctx = canvas.getContext("2d");
  var posY = 30;
  var speed = 3;

  function drawLine() {
    ctx.clearRect(0, 0, canvas.width, 180);
    ctx.strokeStyle = '';
    ctx.lineWidth = 600;
    ctx.beginPath();
    //ctx.moveTo(0, 57); 
    ctx.lineTo(0, 180);
    ctx.stroke();
  }

  function moveLine() {
    posY += speed;

    if (posY > 0 || posY < canvas.height) {
      speed = speed * -1;
    }
  }

  function loop() {
    // clear old frame;
    //ctx.clearRect(0,0,canvas.width, 57);

    moveLine();
    drawLine();
    cancelani = requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop); 

}*/