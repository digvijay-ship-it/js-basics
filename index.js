/*let fatchBtn = document.getElementById("fatchBtn");

fatchBtn.addEventListener('click', buttonClickHandler)
*/
document.getElementById("prBtn").disabled = true;

var counter = 0;
var viewdata;

function displayData(counter) {
  //console.log(viewdata["examdata"][counter])
}
function datafiller(counter) {
  // let opCounter = 0;
  let question = document.getElementById("QueFill")
  let optionTag = document.getElementById("opFill")
  // let op = optionTag.getElementById(1);
  question.innerHTML = viewdata["examdata"][counter]["question"]["question"]
  // question.innerHTML = viewdata["examdata"][counter]["optionsList"][3]["question"]

  for (let i = 0; i < viewdata["examdata"][counter]["optionsList"].length; i++) {
    document.getElementById(i.toString()).innerHTML = `
      <label for="${viewdata["examdata"][counter]["optionsList"][i]["option"]}">${viewdata["examdata"][counter]["optionsList"][i]["option"]}</label>
      <input type="radio" for="${viewdata["examdata"][counter]["result"]["Users_Answer"]} name="${viewdata["examdata"][counter]["question"]["id"]}" value="${viewdata["examdata"][counter]["optionsList"]["Id"]}">
    `
    console.log(counter)
    // con
    // console.log(viewdata["examdata"][counter]["optionsList"][i]["option"])

  }

  // viewdata["examdata"][counter]["optionsList"].forEach(element => {
  //   optionTag.innerHTML = `
  // <input for="${element.result.Users_Answer} type="radio" name="${element.QuestionId}" value="${element.Id}">
  // 						<label for="${element.option}">${element.option}</label>
  // `
  // console.log(element.option)
  // console.log(element)
  // });
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
      // console.log("display json", viewdata);
      // console.log(this.responseText);

      // console.log(this.responseText);
      displayData(0)
      datafiller(0)

      // console.log(viewdata["examdata"][0]["question"]["id"])
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