/*let fatchBtn = document.getElementById("fatchBtn");

fatchBtn.addEventListener('click', buttonClickHandler)
*/
document.getElementById("prBtn").disabled = true;

var counter = 0;
var viewdata;

function displayData(counter) {
  console.log(viewdata["examdata"][counter])
}
function datafiller(counter) {
  let question = document.getElementById("QueFill")
  question.innerHTML = viewdata["examdata"][counter]["question"]["question"]
}
function nextButtonClicked() {
  counter++
  displayData(counter)
  datafiller(counter)
  console.log(counter + "nextfun")
  if (counter > 0) {
    buttonEnabler("prBtn")
  }
  if (counter < 4) {
    buttonEnabler("neBtn")
  }
  else {
    buttonDisabler("neBtn")
    console.log("nextenabler hit")
  }
}
function prewButtonClicked() {
  counter--
  displayData(counter)
  datafiller(counter)
  console.log(counter + "prewfun")
  if (counter < 4) {
    buttonEnabler("neBtn")
  }
  if (counter == 0) {
    buttonDisabler("prBtn")
  }
  else {
    console.log("enabler hit")
    buttonEnabler("prBtn")
  }
}
function buttonDisabler(btnname) {
  //make prew button disabled
  document.getElementById(btnname).disabled = true;
}
function buttonEnabler(btnname) {
  //make prew button disabled
  document.getElementById(btnname).disabled = false;
}


function buttonClickHandler() {
  const xhr = new XMLHttpRequest();
  document.getElementById("fatchBtn").hidden = true
  /*    //
    xhr.onprogress = function () {
        console.log('On progress');
    }
  */

  xhr.onload = function () {
    if (this.status === 200) {
      viewdata = JSON.parse(this.responseText);
      // viewdata = jsonData;
      console.log("display json", viewdata);
      // console.log(this.responseText);

      // console.log(this.responseText);
      displayData(0)
      datafiller(0)

      console.log(viewdata["examdata"][0]["question"]["id"])
    }
    else {
      console.log("some error acuured")
    }
  }




  //open the obj
  xhr.open('GET', `Gan.txt`, false);
  // Send the Request
  xhr.send();
}