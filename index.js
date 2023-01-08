/*let fatchBtn = document.getElementById("fatchBtn");

fatchBtn.addEventListener('click', buttonClickHandler)
*/

var counter = 0;
let viewdata;

function nextButtonClicked() {
  counter++
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
document.getElementById("prBtn").disabled = true;
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
  /*    //
    xhr.onprogress = function () {
        console.log('On progress');
    }
  */

  xhr.onload = function () {
    if (this.status === 200) {
      let jsonData = JSON.parse(this.responseText);
      viewdata = jsonData;
      console.log("display json", jsonData);
      console.log(jsonData[0])
      // console.log(this.responseText);

      // console.log(this.responseText);
      console.log(jsonData["examdata"][0]["question"]["id"])
    }
    else {
      console.log("some error acuured")
    }
  }

  //open the obj
  xhr.open('GET', `Gan.txt`, true);
  // Send the Request
  xhr.send();
}