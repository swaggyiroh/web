function updateDateTime() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  const currentDate = now.toLocaleDateString();
  document.querySelector('#time').textContent = currentTime;
  document.querySelector('#date').textContent = currentDate;
}
setInterval(updateDateTime, 1000);

const clickAndHold = (btnEL) => {
  let timerId;
  const DURATION = 200;
  const onMouseDown = () => {
    timerId = setInterval(() => {
      btnEL && btnEL.click();
    }, DURATION);
  };
  const clearTimer = () => { timerId && clearInterval(timerId); };

  btnEL.addEventListener("mousedown", onMouseDown);
  btnEL.addEventListener("mouseup", clearTimer);
  btnEL.addEventListener("mouseout", clearTimer);

  return () => {
    btnEL.removeEventListener("mousedown", onMouseDown);
    btnEL.removeEventListener("mouseup", clearTimer);
    btnEL.removeEventListener("mouseout", clearTimer);
  };
};

document.onmousedown = function (event) {
  let target = event.target;

  if (!target.classList.contains('draggable')) {
    return;
  }

  let shiftX = event.clientX - target.getBoundingClientRect().left;
  let shiftY = event.clientY - target.getBoundingClientRect().top;

  target.style.position = 'absolute';
  target.style.zIndex = 1000;
  document.body.append(target);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    target.style.left = pageX - shiftX + 'px';
    target.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  target.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    target.onmouseup = null;
  };

};

document.ondragstart = function () {
  return false;
};


function hide(el) {
  var element = el;
  if (!(element.style.visibility === 'hidden')) {
    element.style.visibility = 'hidden';
  } else {
    element.style.visibility = 'visible';
  }
}



document.addEventListener('DOMContentLoaded', function () {
  const commandInput = document.getElementById('commandInput');
  const output = document.getElementById('output');

  commandInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      const command = commandInput.value.trim();
      executeCommand(command);
      commandInput.value = '';
      scrollToBottom(terminal)
    }
  });

  let TerminalStart = 
    " ______   _           ______  \n "
  + " | ___ \ (_)          |  _  \ \n "
  + " | |_/ /  _    __ _   | | | | \n "
  + " | ___ \ | |  / _` |  | | | | \n "
  + " | |_/ / | | | (_| |  | |/ /  \n "
  + " \____/  |_|  \__, |  |___/   \n "
  + "               __/ |          \n "
  + "              |___/           \n ";


var count = 0;
  function executeCommand(command) {
    // outputs
    const ls = [];
    ls.push("discord ","steam ","twitter ","github ","pornhub ");
    

    // command line: path
   console.log("Terminal Input:", command);
    const prompt = '<span style="color: green;">guest@dom-pc</span>:<span style="color: blue;">~</span>$ ';
    
    //comands
    if (!(command == 'clear' || command == 'exit'))
      output.innerHTML += `<div>${prompt}${command}</div>`;
    const reg = /[]*/g;
    switch (command) {
      case 'ls': ls.forEach((element) => output.innerHTML += `<span>${element}</span>`);
        break;
      case 'ls -a': output.innerHTML += `<div><span style="color:blue">discord</span><span style="color:white"> discord-server</span><span style="color:blue"> steam<span style="color:white"> instagram</span><span style="color:blue"> twitter</span></div>`;
        break;
      case 'ls -la':
         output.innerHTML += `<div>swaggyiroh</div>`;
         output.innerHTML += `<div>swaggyiroh</div>`;
         output.innerHTML += `<div>swaggyiroh</div>`;
        break;

      case 'clear': output.innerHTML = '';
        break;

      case 'cat discord': output.innerHTML += `<div>${prompt}${'swaggyiroh'}</div>`;
        break;

      case 'cat discord-server': output.innerHTML += `<div><a href="https://discord.gg/dTrXDXQdGr" target="_blank">OhJunge</a></div>`;
        break;

      case 'cat instagram': output.innerHTML += `<div><a href="https://www.instagram.com/dxmsch02/" target="_blank">dxmsch02</a></div>`;
        break;

      case 'cat twitter': output.innerHTML += `<div>${prompt}${'<a href="https://twitter.com/swaggyiroh" target="_blank">swaggyiroh</a>'}</div>`;
        break;

      case 'cat steam': output.innerHTML += `<div>${prompt}${'<a href="https://steamcommunity.com/id/dodom2002/" target="_blank">dodom2002</a>'}</div>`;

        break;

      case 'cat': output.innerHTML += `<div>cat [file]</div>`;
        break;

      case 'rm -rf': errorpage();
        break;

      case 'exit': hide(terminal);
        output.innerHTML = ''
        break;

      case 'cat X': output.innerHTML += `<div><a href="https://twitter.com/swaggyiroh" target="_blank">swaggyiroh</a></div>`;
        break;

      default:
        //if(command.match(reg)){break};
        count += 1;
        if (count == 5) {
          output.innerHTML += `<div>try using "ls"</div>`;
          count = 0;
        } else { 
          output.innerHTML += `<div>${prompt}${command + ': command not found!'}</div>`
        }
        break;
      }
      //output.innerHTML += `<br>`;

  }


  function scrollToBottom() {
    var terminalBody = document.getElementById("terminal-body");
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

document.getElementById("commandInput").addEventListener("input", scrollToBottom);



});
function errorpage() {
  window.location.href = 'error.html';
}



// the followig code is generated by ChatGPT 3.5!
function createPostIt() {
  // Create the main div
  var postItDiv = document.createElement("div");
  postItDiv.className = "post draggable";

  // Create the close div with an onclick attribute
  var closeDiv = document.createElement("div");
  closeDiv.textContent = "X";
  closeDiv.className = "close";
  closeDiv.setAttribute("onclick", "deletePostIt(this)");
  postItDiv.appendChild(closeDiv);

  // Create the h1 element
  var h1Element = document.createElement("h1");
  h1Element.className = "title";
  h1Element.textContent = "TODO:";
  postItDiv.appendChild(h1Element);

  // Create the textarea
  var textareaElement = document.createElement("textarea");
  textareaElement.className = "textarea";
  textareaElement.setAttribute("placaeholder", "");
  postItDiv.appendChild(textareaElement);

  // Append the postItDiv to the body (or any other existing element)
  document.body.appendChild(postItDiv);
}

function deletePostIt(element) {
  // Traverse up the DOM to find the closest post-it element and remove it
  var postItElement = element.closest('.post');

  if (postItElement) {
    postItElement.remove();
  }
}

var terminalBody = document.getElementById("terminal-body");

// Funktion zum automatischen Scrollen nach unten
function scrollToBottom() {
  terminalBody.scrollTop = terminalBody.scrollHeight;
  //updatePadding(); // Aktualisiere das Padding
}

// Funktion zum Aktualisieren des Paddings
function updatePadding() {
  var scrollbarHeight = terminalBody.offsetHeight - terminalBody.clientHeight;
  terminalBody.style.paddingBottom = scrollbarHeight + "px";
}

// Funktion wird aufgerufen, wenn etwas in das Textfeld eingegeben wird
document.getElementById("commandInput").addEventListener("input", scrollToBottom);

// Initialisiere das Padding
//updatePadding();




