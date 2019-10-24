let element3 = document.querySelector("#element-3");
let element4 = document.querySelector("#element-4");
let element5 = document.querySelector("#element-5");
let element6 = document.querySelector("#element-6");
let element7 = document.querySelector("#element-7");
let element8 = document.querySelector("#element-8");
let element9 = document.querySelector("#element-9");
let element10 = document.querySelector("#element-10");
let element11 = document.querySelector("#element-11");
let element12 = document.querySelector("#element-12");
let element13 = document.querySelector("#element-13");
let element14 = document.querySelector("#element-14");
let element15 = document.querySelector("#element-15");
let element16 = document.querySelector("#element-16");
let element17 = document.querySelector("#element-17");
let background = document.querySelector("back-color")

function GrowAndGo() {
   var element = document.getElementById("element-2");
    element.classList.toggle("grow-and-go");
  }


element3.addEventListener("click", function() {
  element3.animate(
    [
      {
        opacity: 0,
        marginLeft: "-1525px",
        fontSize: "100px",
        borderWidth: getComputedStyle(this).borderWidth
      },
      {
        opacity: 0.4,
        marginLeft: "1525px",
        fontSize: "24px",
        borderWidth: "10px"
      }
    ],
    {
      duration: 100,
      iterations: 5,
      fill: "forwards"
    }
  );
});


element13.addEventListener("click", function() {
  element13.animate(
    [
      {
        opacity: 0,
        width: "160px",
        fontSize: "58px",
        borderRadius: "25px",
        borderWidth: getComputedStyle(this).borderWidth
      },
      {
        opacity: 1,
        width: "160px",
        fontSize: "0px",
        borderRadius: "0px",
        borderWidth: "80px"
      }
    ],
    {
      duration: 600,
      iterations: 1,
      fill: "forwards"
    }
  );
});



element4.addEventListener("click", function() {
  (this).classList.add("gradient-background");
});

element5.addEventListener("click", function() {
  this.nextElementSibling.classList.toggle("circle");
});

function MakeEverythingShrink() {
   var element = document.getElementById("element-1");
    element.classList.toggle("shrink");
   var element = document.getElementById("element-2");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-3");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-4");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-5");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-6");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-7");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-8");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-9");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-10");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-11");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-12");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-13");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-14");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-15");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-16");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-17");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-18");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-19");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-20");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-21");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-22");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-23");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-24");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-25");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-26");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-27");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-28");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-29");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-30");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-31");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-32");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-33");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-34");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-35");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-36");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-37");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-38");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-39");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-40");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-41");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-42");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-43");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-44");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-45");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-46");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-47");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-48");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-49");
   element.classList.toggle("shrink");
   var element = document.getElementById("element-50");
   element.classList.toggle("shrink");
}

function myFunction() {
   var element = document.getElementById("element-1");
    element.classList.toggle("red");
   var element = document.getElementById("element-2");
   element.classList.toggle("orange");
   var element = document.getElementById("element-3");
   element.classList.toggle("yellow");
   var element = document.getElementById("element-4");
   element.classList.toggle("green");
   var element = document.getElementById("element-5");
   element.classList.toggle("yellow");
   var element = document.getElementById("element-6");
   element.classList.toggle("orange");
   var element = document.getElementById("element-7");
    element.classList.toggle("red");
   var element = document.getElementById("element-8");
   element.classList.toggle("orange");
    var element = document.getElementById("element-9");
   element.classList.toggle("yellow");
     var element = document.getElementById("element-10");
   element.classList.toggle("green");
   var element = document.getElementById("element-11");
   element.classList.toggle("yellow");
   var element = document.getElementById("element-12");
   element.classList.toggle("orange");
   var element = document.getElementById("element-13");
    element.classList.toggle("red");
     var element = document.getElementById("element-14");
   element.classList.toggle("orange");
    var element = document.getElementById("element-15");
   element.classList.toggle("yellow");
     var element = document.getElementById("element-16");
   element.classList.toggle("green");
   var element = document.getElementById("element-17");
   element.classList.toggle("yellow");
   var element = document.getElementById("element-18");
   element.classList.toggle("orange");
   var element = document.getElementById("element-19");
    element.classList.toggle("red");
     var element = document.getElementById("element-20");
   element.classList.toggle("orange");
    var element = document.getElementById("element-21");
   element.classList.toggle("yellow");
     var element = document.getElementById("element-22");
   element.classList.toggle("green");
   var element = document.getElementById("element-23");
   element.classList.toggle("yellow");
   var element = document.getElementById("element-24");
   element.classList.toggle("orange");
   var element = document.getElementById("element-25");
    element.classList.toggle("red");
     var element = document.getElementById("element-26");
   element.classList.toggle("orange");
    var element = document.getElementById("element-27");
   element.classList.toggle("yellow");
     var element = document.getElementById("element-28");
   element.classList.toggle("green");
   var element = document.getElementById("element-29");
   element.classList.toggle("yellow");
   var element = document.getElementById("element-30");
   element.classList.toggle("orange");
   var element = document.getElementById("element-31");
    element.classList.toggle("red");
     var element = document.getElementById("element-32");
   element.classList.toggle("orange");
    var element = document.getElementById("element-33");
   element.classList.toggle("yellow");
     var element = document.getElementById("element-34");
   element.classList.toggle("green");
   var element = document.getElementById("element-35");
   element.classList.toggle("yellow");
   var element = document.getElementById("element-36");
   element.classList.toggle("orange");
   var element = document.getElementById("element-37");
    element.classList.toggle("red");
     var element = document.getElementById("element-38");
   element.classList.toggle("orange");
    var element = document.getElementById("element-39");
   element.classList.toggle("yellow");
     var element = document.getElementById("element-40");
   element.classList.toggle("green");
   var element = document.getElementById("element-41");
   element.classList.toggle("yellow");
   var element = document.getElementById("element-42");
   element.classList.toggle("orange");
   var element = document.getElementById("element-43");
    element.classList.toggle("red");
     var element = document.getElementById("element-44");
   element.classList.toggle("orange");
    var element = document.getElementById("element-45");
   element.classList.toggle("yellow");
     var element = document.getElementById("element-46");
   element.classList.toggle("green");
   var element = document.getElementById("element-47");
   element.classList.toggle("yellow");
   var element = document.getElementById("element-48");
   element.classList.toggle("orange");
   var element = document.getElementById("element-49");
    element.classList.toggle("red");
    var element = document.getElementById("element-50");
   element.classList.toggle("orange");
}


function ChangeBackgroundColor() {
   var element = document.getElementById("back");
    element.classList.toggle("black");
  
}

function BackgroundColor() {
   var element = document.getElementById("back");
    element.classList.toggle("back-color");
  
}

function VideoAppear() {
   var element = document.getElementById("video");
    element.classList.toggle("appear");
  
}

function LogoAppear() {
   var element = document.getElementById("logo");
    element.classList.toggle("appear");
  
}

function Orbit() {
   var element = document.getElementById("element-16");
    element.classList.toggle("orbit");
  
}

function RunPikachu() {
   var element = document.getElementById("pikachu");
    element.classList.toggle("run");
  
}

function SlideIn() {
   var element = document.getElementById("website");
    element.classList.toggle("slide");
}

function BorderImage() {
   var element = document.getElementById("element-29");
    element.classList.toggle("border-image");
}


function ColorChange() {
   var element = document.getElementById("element-21");
    element.classList.toggle("color-change");
}

function BackgroundChange() {
   var element = document.getElementById("back-color");
    element.classList.toggle("appear");
}

function BlackSquare() {
   var element = document.getElementById("square");
    element.classList.toggle("drop");
}

function DropElement() {
   var element = document.getElementById("element-27");
    element.classList.toggle("run");
}

function SlideFromTop() {
   var element = document.getElementById("rain");
    element.classList.toggle("slidefromtop");
}

function TextShadow() {
   var element = document.getElementById("element-33");
    element.classList.toggle("textshadow");
}


function ChangeBorderColor() {
   var element = document.getElementById("element-1");
    element.classList.toggle("border");
   var element = document.getElementById("element-2");
   element.classList.toggle("border");
   var element = document.getElementById("element-3");
   element.classList.toggle("border");
   var element = document.getElementById("element-4");
   element.classList.toggle("border");
   var element = document.getElementById("element-5");
   element.classList.toggle("border");
   var element = document.getElementById("element-6");
   element.classList.toggle("border");
   var element = document.getElementById("element-7");
   element.classList.toggle("border");
   var element = document.getElementById("element-8");
   element.classList.toggle("border");
   var element = document.getElementById("element-9");
   element.classList.toggle("border");
  var element = document.getElementById("element-10");
   element.classList.toggle("border");
   var element = document.getElementById("element-11");
   element.classList.toggle("border");
   var element = document.getElementById("element-12");
   element.classList.toggle("border");
   var element = document.getElementById("element-13");
   element.classList.toggle("border");
   var element = document.getElementById("element-14");
   element.classList.toggle("border");
   var element = document.getElementById("element-15");
   element.classList.toggle("border");
   var element = document.getElementById("element-16");
   element.classList.toggle("border");
   var element = document.getElementById("element-17");
   element.classList.toggle("border");
   var element = document.getElementById("element-18");
   element.classList.toggle("border");
   var element = document.getElementById("element-19");
   element.classList.toggle("border");
   var element = document.getElementById("element-20");
   element.classList.toggle("border");
   var element = document.getElementById("element-21");
   element.classList.toggle("border");
   var element = document.getElementById("element-22");
   element.classList.toggle("border");
   var element = document.getElementById("element-23");
   element.classList.toggle("border");
   var element = document.getElementById("element-24");
   element.classList.toggle("border");
   var element = document.getElementById("element-25");
   element.classList.toggle("border");
   var element = document.getElementById("element-26");
   element.classList.toggle("border");
   var element = document.getElementById("element-27");
   element.classList.toggle("border");
   var element = document.getElementById("element-28");
   element.classList.toggle("border");
   var element = document.getElementById("element-29");
   element.classList.toggle("border");
   var element = document.getElementById("element-30");
   element.classList.toggle("border");
   var element = document.getElementById("element-31");
   element.classList.toggle("border");
   var element = document.getElementById("element-32");
   element.classList.toggle("border");
   var element = document.getElementById("element-33");
   element.classList.toggle("border");
   var element = document.getElementById("element-34");
   element.classList.toggle("border");
   var element = document.getElementById("element-35");
   element.classList.toggle("border");
   var element = document.getElementById("element-36");
   element.classList.toggle("border");
   var element = document.getElementById("element-37");
   element.classList.toggle("border");
   var element = document.getElementById("element-38");
   element.classList.toggle("border");
   var element = document.getElementById("element-39");
   element.classList.toggle("border");
   var element = document.getElementById("element-40");
   element.classList.toggle("border");
   var element = document.getElementById("element-41");
   element.classList.toggle("border");
   var element = document.getElementById("element-42");
   element.classList.toggle("border");
   var element = document.getElementById("element-43");
   element.classList.toggle("border");
   var element = document.getElementById("element-44");
   element.classList.toggle("border");
   var element = document.getElementById("element-45");
   element.classList.toggle("border");
   var element = document.getElementById("element-46");
   element.classList.toggle("border");
   var element = document.getElementById("element-47");
   element.classList.toggle("border");
   var element = document.getElementById("element-48");
   element.classList.toggle("border");
   var element = document.getElementById("element-49");
   element.classList.toggle("border");
   var element = document.getElementById("element-50");
   element.classList.toggle("border");
}

function ChangeBorderImage() {
   var element = document.getElementById("element-1");
    element.classList.toggle("border-image");
   var element = document.getElementById("element-2");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-3");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-4");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-5");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-6");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-7");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-8");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-9");
   element.classList.toggle("border-image");
  var element = document.getElementById("element-10");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-11");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-12");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-13");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-14");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-15");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-16");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-17");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-18");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-19");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-20");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-21");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-22");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-23");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-24");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-25");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-26");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-27");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-28");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-29");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-30");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-31");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-32");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-33");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-34");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-35");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-36");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-37");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-38");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-39");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-40");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-41");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-42");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-43");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-44");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-45");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-46");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-47");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-48");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-49");
   element.classList.toggle("border-image");
   var element = document.getElementById("element-50");
   element.classList.toggle("border-image");
}

function MakeEverythingFlyAround() {
   var element = document.getElementById("element-1");
    element.classList.toggle("drone");
   var element = document.getElementById("element-2");
   element.classList.toggle("drone");
   var element = document.getElementById("element-3");
   element.classList.toggle("drone");
   var element = document.getElementById("element-4");
   element.classList.toggle("drone");
   var element = document.getElementById("element-5");
   element.classList.toggle("drone");
   var element = document.getElementById("element-6");
   element.classList.toggle("drone");
   var element = document.getElementById("element-7");
   element.classList.toggle("drone");
   var element = document.getElementById("element-8");
   element.classList.toggle("drone");
   var element = document.getElementById("element-9");
   element.classList.toggle("drone");
  var element = document.getElementById("element-10");
   element.classList.toggle("drone");
   var element = document.getElementById("element-11");
   element.classList.toggle("drone");
   var element = document.getElementById("element-12");
   element.classList.toggle("drone");
   var element = document.getElementById("element-13");
   element.classList.toggle("drone");
   var element = document.getElementById("element-14");
   element.classList.toggle("drone");
   var element = document.getElementById("element-15");
   element.classList.toggle("drone");
   var element = document.getElementById("element-16");
   element.classList.toggle("drone");
   var element = document.getElementById("element-17");
   element.classList.toggle("drone");
   var element = document.getElementById("element-18");
   element.classList.toggle("drone");
   var element = document.getElementById("element-19");
   element.classList.toggle("drone");
   var element = document.getElementById("element-20");
   element.classList.toggle("drone");
   var element = document.getElementById("element-21");
   element.classList.toggle("drone");
   var element = document.getElementById("element-22");
   element.classList.toggle("drone");
   var element = document.getElementById("element-23");
   element.classList.toggle("drone");
   var element = document.getElementById("element-24");
   element.classList.toggle("drone");
   var element = document.getElementById("element-25");
   element.classList.toggle("drone");
   var element = document.getElementById("element-26");
   element.classList.toggle("drone");
   var element = document.getElementById("element-27");
   element.classList.toggle("drone");
   var element = document.getElementById("element-28");
   element.classList.toggle("drone");
   var element = document.getElementById("element-29");
   element.classList.toggle("drone");
   var element = document.getElementById("element-30");
   element.classList.toggle("drone");
   var element = document.getElementById("element-31");
   element.classList.toggle("drone");
   var element = document.getElementById("element-32");
   element.classList.toggle("drone");
   var element = document.getElementById("element-33");
   element.classList.toggle("drone");
   var element = document.getElementById("element-34");
   element.classList.toggle("drone");
   var element = document.getElementById("element-35");
   element.classList.toggle("drone");
   var element = document.getElementById("element-36");
   element.classList.toggle("drone");
   var element = document.getElementById("element-37");
   element.classList.toggle("drone");
   var element = document.getElementById("element-38");
   element.classList.toggle("drone");
   var element = document.getElementById("element-39");
   element.classList.toggle("drone");
   var element = document.getElementById("element-40");
   element.classList.toggle("drone");
   var element = document.getElementById("element-41");
   element.classList.toggle("drone");
   var element = document.getElementById("element-42");
   element.classList.toggle("drone");
   var element = document.getElementById("element-43");
   element.classList.toggle("drone");
   var element = document.getElementById("element-44");
   element.classList.toggle("drone");
   var element = document.getElementById("element-45");
   element.classList.toggle("drone");
   var element = document.getElementById("element-46");
   element.classList.toggle("drone");
   var element = document.getElementById("element-47");
   element.classList.toggle("drone");
   var element = document.getElementById("element-48");
   element.classList.toggle("drone");
   var element = document.getElementById("element-49");
   element.classList.toggle("drone");
   var element = document.getElementById("element-50");
   element.classList.toggle("drone");
}


function changeDivImage()
    {
        var imgPath = new String();
        imgPath = document.getElementById("div1").style.backgroundImage;

        if(imgPath == "url(Yourcopy52.jpg)" || imgPath == "")
        {
            document.getElementById("div1").style.backgroundImage = "url(colin_phil_collins_SAGARPA.jpg)";
            document.getElementById("div1").style.opacity = "1";
            document.getElementById("div1").style.width = "1400px";
            document.getElementById("div1").style.height = "8740px";


        }
    }

function MakeEverythingPink() {
   var element = document.getElementById("element-1");
    element.classList.toggle("pink");
   var element = document.getElementById("element-2");
   element.classList.toggle("pink");
   var element = document.getElementById("element-3");
   element.classList.toggle("pink");
   var element = document.getElementById("element-4");
   element.classList.toggle("pink");
   var element = document.getElementById("element-5");
   element.classList.toggle("pink");
   var element = document.getElementById("element-6");
   element.classList.toggle("pink");
   var element = document.getElementById("element-7");
   element.classList.toggle("pink");
   var element = document.getElementById("element-8");
   element.classList.toggle("pink");
   var element = document.getElementById("element-9");
   element.classList.toggle("pink");
  var element = document.getElementById("element-10");
   element.classList.toggle("pink");
   var element = document.getElementById("element-11");
   element.classList.toggle("pink");
      var element = document.getElementById("element-12");
   element.classList.toggle("pink");
   var element = document.getElementById("element-13");
   element.classList.toggle("pink");
   var element = document.getElementById("element-14");
   element.classList.toggle("pink");
   var element = document.getElementById("element-15");
   element.classList.toggle("pink");
   var element = document.getElementById("element-16");
   element.classList.toggle("pink");
   var element = document.getElementById("element-17");
   element.classList.toggle("pink");
   var element = document.getElementById("element-18");
   element.classList.toggle("pink");
   var element = document.getElementById("element-19");
   element.classList.toggle("pink");
   var element = document.getElementById("element-20");
   element.classList.toggle("pink");
   var element = document.getElementById("element-21");
   element.classList.toggle("pink");
   var element = document.getElementById("element-22");
   element.classList.toggle("pink");
   var element = document.getElementById("element-23");
   element.classList.toggle("pink");
   var element = document.getElementById("element-24");
   element.classList.toggle("pink");
   var element = document.getElementById("element-25");
   element.classList.toggle("pink");
   var element = document.getElementById("element-26");
   element.classList.toggle("pink");
   var element = document.getElementById("element-27");
   element.classList.toggle("pink");
   var element = document.getElementById("element-28");
   element.classList.toggle("pink");
   var element = document.getElementById("element-29");
   element.classList.toggle("pink");
   var element = document.getElementById("element-30");
   element.classList.toggle("pink");
   var element = document.getElementById("element-31");
   element.classList.toggle("pink");
   var element = document.getElementById("element-32");
   element.classList.toggle("pink");
   var element = document.getElementById("element-33");
   element.classList.toggle("pink");
   var element = document.getElementById("element-34");
   element.classList.toggle("pink");
   var element = document.getElementById("element-35");
   element.classList.toggle("pink");
   var element = document.getElementById("element-36");
   element.classList.toggle("pink");
   var element = document.getElementById("element-37");
   element.classList.toggle("pink");
   var element = document.getElementById("element-38");
   element.classList.toggle("pink");
   var element = document.getElementById("element-39");
   element.classList.toggle("pink");
   var element = document.getElementById("element-40");
   element.classList.toggle("pink");
   var element = document.getElementById("element-41");
   element.classList.toggle("pink");
   var element = document.getElementById("element-42");
   element.classList.toggle("pink");
   var element = document.getElementById("element-43");
   element.classList.toggle("pink");
   var element = document.getElementById("element-44");
   element.classList.toggle("pink");
   var element = document.getElementById("element-45");
   element.classList.toggle("pink");
   var element = document.getElementById("element-46");
   element.classList.toggle("pink");
   var element = document.getElementById("element-47");
   element.classList.toggle("pink");
   var element = document.getElementById("element-48");
   element.classList.toggle("pink");
   var element = document.getElementById("element-49");
   element.classList.toggle("pink");
   var element = document.getElementById("element-50");
   element.classList.toggle("pink");
}



function ChangeTypeface() {
   var element = document.getElementById("element-1");
    element.classList.toggle("different-type");
   var element = document.getElementById("element-2");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-3");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-4");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-5");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-6");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-7");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-8");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-9");
   element.classList.toggle("different-type");
  var element = document.getElementById("element-10");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-11");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-12");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-13");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-14");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-15");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-16");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-17");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-18");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-19");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-20");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-21");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-22");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-23");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-24");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-25");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-26");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-27");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-28");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-29");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-30");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-31");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-32");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-33");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-34");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-35");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-36");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-37");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-38");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-39");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-40");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-41");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-42");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-43");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-44");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-45");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-46");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-47");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-48");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-49");
   element.classList.toggle("different-type");
   var element = document.getElementById("element-50");
   element.classList.toggle("different-type");
}
 
function MakeItSlide() {
   var element = document.getElementById("element-1");
    element.classList.toggle("run");
   var element = document.getElementById("element-2");
   element.classList.toggle("run");
   var element = document.getElementById("element-3");
   element.classList.toggle("run");
   var element = document.getElementById("element-4");
   element.classList.toggle("run");
   var element = document.getElementById("element-5");
   element.classList.toggle("run");
   var element = document.getElementById("element-6");
   element.classList.toggle("run");
   var element = document.getElementById("element-7");
   element.classList.toggle("run");
   var element = document.getElementById("element-8");
   element.classList.toggle("run");
   var element = document.getElementById("element-9");
   element.classList.toggle("run");
  var element = document.getElementById("element-10");
   element.classList.toggle("run");
   var element = document.getElementById("element-11");
   element.classList.toggle("run");
   var element = document.getElementById("element-12");
   element.classList.toggle("run");
   var element = document.getElementById("element-13");
   element.classList.toggle("run");
   var element = document.getElementById("element-14");
   element.classList.toggle("run");
   var element = document.getElementById("element-15");
   element.classList.toggle("run");
   var element = document.getElementById("element-16");
   element.classList.toggle("run");
   var element = document.getElementById("element-17");
   element.classList.toggle("run");
   var element = document.getElementById("element-18");
   element.classList.toggle("run");
   var element = document.getElementById("element-19");
   element.classList.toggle("run");
   var element = document.getElementById("element-20");
   element.classList.toggle("run");
   var element = document.getElementById("element-21");
   element.classList.toggle("run");
   var element = document.getElementById("element-22");
   element.classList.toggle("run");
   var element = document.getElementById("element-23");
   element.classList.toggle("run");
   var element = document.getElementById("element-24");
   element.classList.toggle("run");
   var element = document.getElementById("element-25");
   element.classList.toggle("run");
   var element = document.getElementById("element-26");
   element.classList.toggle("run");
   var element = document.getElementById("element-27");
   element.classList.toggle("run");
   var element = document.getElementById("element-28");
   element.classList.toggle("run");
   var element = document.getElementById("element-29");
   element.classList.toggle("run");
   var element = document.getElementById("element-30");
   element.classList.toggle("run");
   var element = document.getElementById("element-32");
   element.classList.toggle("run");
   var element = document.getElementById("element-33");
   element.classList.toggle("run");
   var element = document.getElementById("element-34");
   element.classList.toggle("run");
   var element = document.getElementById("element-35");
   element.classList.toggle("run");
   var element = document.getElementById("element-36");
   element.classList.toggle("run");
   var element = document.getElementById("element-37");
   element.classList.toggle("run");
   var element = document.getElementById("element-38");
   element.classList.toggle("run");
   var element = document.getElementById("element-39");
   element.classList.toggle("run");
   var element = document.getElementById("element-40");
   element.classList.toggle("run");
   var element = document.getElementById("element-41");
   element.classList.toggle("run");
   var element = document.getElementById("element-42");
   element.classList.toggle("run");
   var element = document.getElementById("element-43");
   element.classList.toggle("run");
   var element = document.getElementById("element-44");
   element.classList.toggle("run");
   var element = document.getElementById("element-45");
   element.classList.toggle("run");
   var element = document.getElementById("element-46");
   element.classList.toggle("run");
   var element = document.getElementById("element-47");
   element.classList.toggle("run");
   var element = document.getElementById("element-48");
   element.classList.toggle("run");
   var element = document.getElementById("element-49");
   element.classList.toggle("run");
   var element = document.getElementById("element-50");
   element.classList.toggle("run");
}


function TextShadowExtreme() {
   var element = document.getElementById("element-1");
    element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-2");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-3");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-4");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-5");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-6");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-7");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-8");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-9");
   element.classList.toggle("textshadowextreme");
  var element = document.getElementById("element-10");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-11");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-12");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-13");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-14");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-15");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-16");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-17");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-18");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-19");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-20");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-21");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-22");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-23");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-24");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-25");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-26");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-27");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-28");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-29");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-30");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-31");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-32");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-33");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-34");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-35");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-36");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-37");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-38");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-39");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-40");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-41");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-42");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-43");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-44");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-45");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-46");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-47");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-48");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-49");
   element.classList.toggle("textshadowextreme");
   var element = document.getElementById("element-50");
   element.classList.toggle("textshadowextreme");
}

function EverythingRains() {
   var element = document.getElementById("element-1");
    element.classList.toggle("color-change");
   var element = document.getElementById("element-2");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-3");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-4");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-5");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-6");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-7");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-8");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-9");
   element.classList.toggle("color-change");
  var element = document.getElementById("element-10");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-11");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-12");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-13");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-14");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-15");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-16");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-17");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-18");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-19");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-20");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-21");
   element.classList.toggle("scolor-change");
   var element = document.getElementById("element-22");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-23");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-24");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-25");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-26");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-27");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-28");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-29");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-30");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-31");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-32");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-33");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-34");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-35");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-36");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-37");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-38");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-39");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-40");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-41");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-42");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-43");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-44");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-45");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-46");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-47");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-48");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-49");
   element.classList.toggle("color-change");
   var element = document.getElementById("element-50");
   element.classList.toggle("color-change");
}


function BoxShadow() {
   var element = document.getElementById("element-1");
    element.classList.toggle("box-shadow");
   var element = document.getElementById("element-2");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-3");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-4");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-5");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-6");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-7");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-8");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-9");
   element.classList.toggle("box-shadow");
  var element = document.getElementById("element-10");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-11");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-12");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-13");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-14");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-15");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-16");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-17");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-18");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-19");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-20");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-21");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-22");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-23");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-24");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-25");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-26");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-27");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-28");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-29");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-30");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-31");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-32");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-33");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-34");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-35");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-36");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-37");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-38");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-39");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-40");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-41");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-42");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-43");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-44");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-45");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-46");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-47");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-48");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-49");
   element.classList.toggle("box-shadow");
   var element = document.getElementById("element-50");
   element.classList.toggle("box-shadow");
}


function WhiteText() {
   var element = document.getElementById("element-1");
    element.classList.toggle("white");
   var element = document.getElementById("element-2");
   element.classList.toggle("white");
   var element = document.getElementById("element-3");
   element.classList.toggle("white");
   var element = document.getElementById("element-4");
   element.classList.toggle("white");
   var element = document.getElementById("element-5");
   element.classList.toggle("white");
   var element = document.getElementById("element-6");
   element.classList.toggle("white");
   var element = document.getElementById("element-7");
   element.classList.toggle("white");
   var element = document.getElementById("element-8");
   element.classList.toggle("white");
   var element = document.getElementById("element-9");
   element.classList.toggle("white");
  var element = document.getElementById("element-10");
   element.classList.toggle("white");
   var element = document.getElementById("element-11");
   element.classList.toggle("white");
   var element = document.getElementById("element-12");
   element.classList.toggle("white");
   var element = document.getElementById("element-13");
   element.classList.toggle("white");
   var element = document.getElementById("element-14");
   element.classList.toggle("white");
   var element = document.getElementById("element-15");
   element.classList.toggle("white");
   var element = document.getElementById("element-16");
   element.classList.toggle("white");
   var element = document.getElementById("element-17");
   element.classList.toggle("white");
   var element = document.getElementById("element-18");
   element.classList.toggle("white");
   var element = document.getElementById("element-19");
   element.classList.toggle("white");
   var element = document.getElementById("element-20");
   element.classList.toggle("white");
   var element = document.getElementById("element-21");
   element.classList.toggle("white");
   var element = document.getElementById("element-22");
   element.classList.toggle("white");
   var element = document.getElementById("element-23");
   element.classList.toggle("white");
   var element = document.getElementById("element-24");
   element.classList.toggle("white");
   var element = document.getElementById("element-25");
   element.classList.toggle("white");
   var element = document.getElementById("element-26");
   element.classList.toggle("white");
   var element = document.getElementById("element-27");
   element.classList.toggle("white");
   var element = document.getElementById("element-28");
   element.classList.toggle("white");
   var element = document.getElementById("element-29");
   element.classList.toggle("white");
   var element = document.getElementById("element-30");
   element.classList.toggle("white");
   var element = document.getElementById("element-31");
   element.classList.toggle("white");
   var element = document.getElementById("element-32");
   element.classList.toggle("white");
   var element = document.getElementById("element-33");
   element.classList.toggle("white");
   var element = document.getElementById("element-34");
   element.classList.toggle("white");
   var element = document.getElementById("element-35");
   element.classList.toggle("white");
   var element = document.getElementById("element-36");
   element.classList.toggle("white");
   var element = document.getElementById("element-37");
   element.classList.toggle("white");
   var element = document.getElementById("element-38");
   element.classList.toggle("white");
   var element = document.getElementById("element-39");
   element.classList.toggle("white");
   var element = document.getElementById("element-40");
   element.classList.toggle("white");
   var element = document.getElementById("element-41");
   element.classList.toggle("white");
   var element = document.getElementById("element-42");
   element.classList.toggle("white");
   var element = document.getElementById("element-43");
   element.classList.toggle("white");
   var element = document.getElementById("element-44");
   element.classList.toggle("white");
   var element = document.getElementById("element-45");
   element.classList.toggle("white");
   var element = document.getElementById("element-46");
   element.classList.toggle("white");
   var element = document.getElementById("element-47");
   element.classList.toggle("white");
   var element = document.getElementById("element-48");
   element.classList.toggle("white");
   var element = document.getElementById("element-49");
   element.classList.toggle("white");
   var element = document.getElementById("element-50");
   element.classList.toggle("white");
}

function MakeTransparent() {
   var element = document.getElementById("element-39");
    element.classList.toggle("transparent");
}

function DropBottom() {
   var element = document.getElementById("element-1");
    element.classList.toggle("dropbottom");
   var element = document.getElementById("element-2");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-3");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-4");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-5");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-6");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-7");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-8");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-9");
   element.classList.toggle("dropbottom");
  var element = document.getElementById("element-10");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-11");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-12");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-13");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-14");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-15");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-16");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-17");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-18");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-19");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-20");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-21");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-22");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-23");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-24");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-25");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-26");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-27");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-28");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-29");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-30");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-31");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-32");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-33");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-34");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-35");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-36");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-37");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-38");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-39");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-40");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-41");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-42");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-43");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-44");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-45");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-46");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-47");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-48");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-49");
   element.classList.toggle("dropbottom");
   var element = document.getElementById("element-50");
   element.classList.toggle("dropbottom");
}

function MakeTall() {
   var element = document.getElementById("element-41");
    element.classList.toggle("height");
}


function MakePulse() {
   var element = document.getElementById("element-42");
    element.classList.toggle("pulse");
}

function MakeAllPulse() {
   var element = document.getElementById("element-1");
    element.classList.toggle("pulse");
   var element = document.getElementById("element-2");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-3");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-4");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-5");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-6");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-7");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-8");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-9");
   element.classList.toggle("pulse");
  var element = document.getElementById("element-10");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-11");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-12");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-13");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-14");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-15");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-16");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-17");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-18");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-19");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-20");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-21");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-22");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-23");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-24");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-25");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-26");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-27");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-28");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-29");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-30");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-31");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-32");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-33");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-34");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-35");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-36");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-37");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-38");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-39");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-40");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-41");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-42");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-43");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-44");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-45");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-46");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-47");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-48");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-49");
   element.classList.toggle("pulse");
   var element = document.getElementById("element-50");
   element.classList.toggle("pulse");
}

function MakeFloat() {
   var element = document.getElementById("element-44");
    element.classList.toggle("float");
}

function MakeAllFloat() {
   var element = document.getElementById("element-1");
    element.classList.toggle("float");
   var element = document.getElementById("element-2");
   element.classList.toggle("float");
   var element = document.getElementById("element-3");
   element.classList.toggle("float");
   var element = document.getElementById("element-4");
   element.classList.toggle("float");
   var element = document.getElementById("element-5");
   element.classList.toggle("float");
   var element = document.getElementById("element-6");
   element.classList.toggle("float");
   var element = document.getElementById("element-7");
   element.classList.toggle("float");
   var element = document.getElementById("element-8");
   element.classList.toggle("float");
   var element = document.getElementById("element-9");
   element.classList.toggle("float");
  var element = document.getElementById("element-10");
   element.classList.toggle("float");
   var element = document.getElementById("element-11");
   element.classList.toggle("float");
   var element = document.getElementById("element-12");
   element.classList.toggle("float");
   var element = document.getElementById("element-13");
   element.classList.toggle("float");
   var element = document.getElementById("element-14");
   element.classList.toggle("float");
   var element = document.getElementById("element-15");
   element.classList.toggle("float");
   var element = document.getElementById("element-16");
   element.classList.toggle("float");
   var element = document.getElementById("element-17");
   element.classList.toggle("float");
   var element = document.getElementById("element-18");
   element.classList.toggle("float");
   var element = document.getElementById("element-19");
   element.classList.toggle("float");
   var element = document.getElementById("element-20");
   element.classList.toggle("float");
   var element = document.getElementById("element-21");
   element.classList.toggle("float");
   var element = document.getElementById("element-22");
   element.classList.toggle("float");
   var element = document.getElementById("element-23");
   element.classList.toggle("float");
   var element = document.getElementById("element-24");
   element.classList.toggle("float");
   var element = document.getElementById("element-25");
   element.classList.toggle("float");
   var element = document.getElementById("element-26");
   element.classList.toggle("float");
   var element = document.getElementById("element-27");
   element.classList.toggle("float");
   var element = document.getElementById("element-28");
   element.classList.toggle("float");
   var element = document.getElementById("element-29");
   element.classList.toggle("float");
   var element = document.getElementById("element-30");
   element.classList.toggle("float");
   var element = document.getElementById("element-31");
   element.classList.toggle("float");
   var element = document.getElementById("element-32");
   element.classList.toggle("float");
   var element = document.getElementById("element-33");
   element.classList.toggle("float");
   var element = document.getElementById("element-34");
   element.classList.toggle("float");
   var element = document.getElementById("element-35");
   element.classList.toggle("float");
   var element = document.getElementById("element-36");
   element.classList.toggle("float");
   var element = document.getElementById("element-37");
   element.classList.toggle("float");
   var element = document.getElementById("element-38");
   element.classList.toggle("float");
   var element = document.getElementById("element-39");
   element.classList.toggle("float");
   var element = document.getElementById("element-40");
   element.classList.toggle("float");
   var element = document.getElementById("element-41");
   element.classList.toggle("float");
   var element = document.getElementById("element-42");
   element.classList.toggle("float");
   var element = document.getElementById("element-43");
   element.classList.toggle("float");
   var element = document.getElementById("element-44");
   element.classList.toggle("float");
   var element = document.getElementById("element-45");
   element.classList.toggle("float");
   var element = document.getElementById("element-46");
   element.classList.toggle("float");
   var element = document.getElementById("element-47");
   element.classList.toggle("float");
   var element = document.getElementById("element-48");
   element.classList.toggle("float");
   var element = document.getElementById("element-49");
   element.classList.toggle("float");
   var element = document.getElementById("element-50");
   element.classList.toggle("float");
}

function Yellow () {
   var element = document.getElementById("element-46");
    element.classList.toggle("yellow");
}
function Blue() {
   var element = document.getElementById("element-47");
    element.classList.toggle("blue");
}
function Red() {
   var element = document.getElementById("element-48");
    element.classList.toggle("red");
}
function Black() {
   var element = document.getElementById("element-49");
    element.classList.toggle("black");
}
function Purple() {
   var element = document.getElementById("element-50");
    element.classList.toggle("purple");
}