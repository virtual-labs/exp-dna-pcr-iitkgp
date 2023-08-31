 var tubeimg;
function start(){
  document.getElementById("step1").disabled=false;
}

function thaw(){
    //document.getElementById("writeaction").innerHTML="Thawing the PCR reaction components on ice";
    document.getElementById("step2").disabled=false;
    document.getElementById("step1").disabled=true;
}

function prepmix(){
    //document.getElementById("writeaction").innerHTML="Preparation of the PCR reaction mix";
    document.getElementById("tube").style.display="block";
    tubeimg = document.getElementById('tube');
    document.getElementById("step3").disabled=false;
    document.getElementById("step2").disabled=true;
    tubeimg.removeEventListener('click', tubeinsert);
  }



function PCRincub(){
   // document.getElementById("writeaction").innerHTML="Incubation of the PCR reaction mixture in a thermal cycler";
    document.getElementById("opentc").style.display="block";
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

 var imgodtb=null;
 var imgtbdown=null;
 function tubeinsert(){
var tubeinst=document.getElementById("tube");
     var tubetopp=17;
     var tubeleftp=40; //initial  position
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


function openthermalcycle(){
  var btntext = document.getElementById("opentc");
  if (btntext.innerHTML === "Open") {
    btntext.innerHTML = "Close";
    tubeimg.addEventListener('click', tubeinsert);
  } else {
    btntext.innerHTML = "Open";
    document.getElementById("run").style.display="block";
  }
}


var imgdnaa=null;
var imgdnab=null;
var imgdnapria=null;
var imgdnaprib=null;
var imgdnaexta=null;
var imgdnaextb=null;
function runpcr(){
  document.getElementById("dnastrandsa").style.display="block";
  document.getElementById("dnastrandsb").style.display="block";
  document.getElementById("stepshead").innerHTML="1. Denaturation";
  document.getElementById("den3min").style.background="#ADFFF5 ";
  document.getElementById("den3min").style.opacity="50%";
  setTimeout(separatedna,2000);
  setTimeout(separatednb,2000);

  function separatedna(){

    
    var dnaa=document.getElementById("dnastrandsa");
  
     var dnatopp=35; //initial  position
    clearInterval(imgdnaa);
    imgdnaa = setInterval(frame, 30); // frame is 30 denotes the speed of the movement
    function frame() {
        if (dnatopp == 20) {  //1
           
          clearInterval(imgdnaa); 
          setTimeout(primerdna,2000);
        } else {
            
          dnatopp--; 
          dnaa.style.top = dnatopp + '%'; 
         
        }
      } 
  }

  function separatednb(){

    
    var dnab=document.getElementById("dnastrandsb");

     var dnabtopp=35; //initial  position
    clearInterval(imgdnab);
    imgdnab = setInterval(frame, 30); // frame is 30 denotes the speed of the movement
    function frame() {
        if (dnabtopp == 50) {  //1
           
          clearInterval(imgdnab); 
          setTimeout(primerdnab,2000);
        } else {
            
          dnabtopp++; 
          dnab.style.top = dnabtopp + '%'; 
         
        }
      } 
  }


  function primerdna(){
    
    document.getElementById("den3min").style.opacity="0%";
    document.getElementById("ann2min").style.background="#ADFFF5 ";
  document.getElementById("ann2min").style.opacity="50%";
    document.getElementById("stepshead").innerHTML="2. Annealing";
    document.getElementById("dnaprimer").style.display="block";
    var dnapria=document.getElementById("dnaprimer");
   
       var dnapritopp=40; //initial  position
      clearInterval(imgdnapria);
      imgdnapria = setInterval(frame, 30); // frame is 30 denotes the speed of the movement
      function frame() {
          if (dnapritopp == 46) {  //1
             
            clearInterval(imgdnab); 
            setTimeout(primerextdnaa,1000);
          } else {
              
            dnapritopp++; 
            dnapria.style.top = dnapritopp + '%'; 
           
          }
        } 
  }

  function primerdnab(){
    document.getElementById("den3min").style.opacity="0%";
    document.getElementById("ann2min").style.background="#ADFFF5 ";
  document.getElementById("ann2min").style.opacity="50%";
    document.getElementById("stepshead").innerHTML="2. Annealing";
    document.getElementById("dnaprimerb").style.display="block";
    var dnaprib=document.getElementById("dnaprimerb");
 
     var dnapribtopp=35; //initial  position
    clearInterval(imgdnaprib);
    imgdnaprib = setInterval(frame, 30); // frame is 30 denotes the speed of the movement
    function frame() {
        if (dnapribtopp == 24) {  //1
           
          clearInterval(imgdnaprib); 
          setTimeout(primerextdnab,1000);
        } else {
            
          dnapribtopp--; 
          dnaprib.style.top = dnapribtopp + '%'; 
         
        }
      } 
  }

  function primerextdnaa(){
    document.getElementById("ann2min").style.opacity="0%";
    document.getElementById("ext1min").style.background="#ADFFF5 ";
  document.getElementById("ext1min").style.opacity="50%";
    document.getElementById("stepshead").innerHTML="3. Extension";
    document.getElementById("dnastrandsa").style.display="none";
    document.getElementById("dnaprimer").style.display="none";
    document.getElementById("dnaprimerext").style.display="block";
   /*  var dnapriext=document.getElementById("dnaprimerext");
 
     var dnapriexttopp=35; //initial  position
    clearInterval(imgdnaexta);
    imgdnaexta = setInterval(frame, 30); // frame is 30 denotes the speed of the movement
    function frame() {
        if (dnapriexttopp == 47) {  
           
          clearInterval(imgdnaexta); 
         
        } else {
            
          dnapriexttopp++; 
          dnapriext.style.top = dnapriexttopp + '%'; 
         
        }
      }  */
  }



  function primerextdnab(){
    document.getElementById("ann2min").style.opacity="0%";
    document.getElementById("ext1min").style.background="#ADFFF5 ";
  document.getElementById("ext1min").style.opacity="50%";
    document.getElementById("stepshead").innerHTML="3. Extension";
 
    document.getElementById("dnastrandsb").style.display="none";
    document.getElementById("dnaprimerb").style.display="none";
    document.getElementById("dnaprimerextb").style.display="block";
    /* var dnapriextb=document.getElementById("dnaprimerextb");
 
     var dnapriextbtopp=35; //initial  position
    clearInterval(imgdnaexta);
    imgdnaextb = setInterval(frame, 30); // frame is 30 denotes the speed of the movement
    function frame() {
        if (dnapriextbtopp == 23) {  
           
          clearInterval(imgdnaextb); 
         
        } else {
            
          dnapriextbtopp--; 
          dnapriextb.style.top = dnapriextbtopp + '%'; 
         
        }
      }  */
  }
}