window.onload = main;

const appState = {

  contentId: "contentbox",
  startId: "startVal",
  endId: "endVal",
  fizzId: "fizzVal",
  buzzId: "buzzVal",
  submitId: "button1",
  clearId: "clearContent",
  ogContent: '<div id="mytext">FizzBuzz</div>' ,
  rootEl: {},
  args: {
      start: 1,
      end: 100,
      fizz: 3,
      buzz: 5
  },
  timeoutId: 0,
  handleSubmit: function (ev) {
      console.log("Handling Submit");
      let start = document.getElementById("startVal").value;
      let end = document.getElementById("endVal").value;
      let fizz = document.getElementById("fizzVal").value;
      let buzz = document.getElementById("buzzVal").value
      console.log('Start value is' + start);
      appState.handleClear();
      fizzBuzz(start, end,fizz, buzz);
       //console.log("Old endVal is" + appState.endVal);


      //TODO create new element (div or p) with innerText of  document.getElementById(appState.endId).value
  },
  handleClear: (ev) => {
      console.log("Handling Clear");
      // console.log("Old endVal is" + appState.endVal);
      //TODO remove ALL elements under contentbox
      document.getElementById("myFizz").innerHTML = "";

  },
  handleChange: (ev) => {
      console.log("Current value is: " + ev.target.value);
      //document.getElementById(appState.fizzVal).innerText = `My value is ${document.getElementById(appState.endId).value}`;
  },
  handleMouseUp: (ev) => {
      console.log("Value on MouseUp is: " + parseInt(document.getElementById(appState.endId).value));
  },
  initializeState: function () {
      console.log("Initialize State");
      this.rootEl = document.getElementById(this.contentId);
      document.getElementById("button1").onclick = this.handleSubmit;
      document.getElementById("button2").onclick = this.handleClear;
      document.getElementById("startVal").oninput = this.handleChange;
      document.getElementById("endVal").oninput = this.handleChange;
      document.getElementById("fizzVal").oninput = this.handleChange;
      document.getElementById("buzzVal").oninput = this.handleChange;
      fizzBuzz(10,20);
      
      //document.getElementById(this.endId).oninput = this.handleChange;
      //document.getElementById(this.endId).onmouseup = this.handleMouseUp;
  },
}
 
function fizzBuzz(start,end, fizz, buzz) {
    console.log ("creating elements", start,end,fizz,buzz);
    for (let id = start; id <=end; id++) {
        if ( (id % fizz == 0) && (id % buzz == 0) ) {
        console.log("FizzBuzz");
        //let id = document.getElementById("mytext").textContent;
        createDiv("FizzBuzz", document.getElementById("myFizz"),"pacman4",);
      }
      if ( id % fizz == 0 ) {
        console.log("Fizz");
        //let id = document.getElementById("mytext2").textContent;
        createDiv("Fizz", document.getElementById("myFizz"),"pacman3");
      }
      if ( id % 5 == 0 ) {
        console.log("Buzz");
        //let id = document.getElementById("mytext3").textContent;
        createDiv("Buzz", document.getElementById("myFizz"),"pacman2");
      }
      if ( (id % fizz != 0) && (id % buzz != 0) ) {
        console.log("4,7 etc");
        createDiv(id, document.getElementById("myFizz"),"pacman1");
      }
    }
  }

  function createDiv (content, parent,myclass){
    let mydiv=document.createElement("div");
    mydiv.innerText=content;
    mydiv.className=myclass;
    parent.appendChild(mydiv);
  }


function main() {
  appState.initializeState();
}; 
  
  function updateRangeInput(elem) {
    $(elem).next().val($(elem).val());
}

//function  handleChange(ev)  {
  //console.log("Current value is: " + ev.target.value);
  //document.getElementById(appState.fizzVal).innerText = `My value is ${document.getElementById(appState.endId).value}`;
//}

