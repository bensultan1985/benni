var introMsg = `You are a busy person, and Ben is too. That's why he created me, Benni, a bot that is able to answer job interview questions! Ask a few questions. If my answers are to your liking, consider giving the real Ben an interview.`
var mainContainer = document.getElementById('main-container');

function onLoad(){
    var introP = genElement('p', 'intro-text', '', introMsg)
    document.getElementById('intro-box').appendChild(introP);

    initBenniSys();
}

function initBenniSys() {
    var sendForm = createSendForm();
    var textOut = createAnsDiv();
    appendChildren(mainContainer, [textOut, sendForm])
}

function createSendForm() {
    var form = genElement('form', 'send-form');
    var qInput = createQInput();
    var qSend = createQSend();
    appendChildren(form, [qInput, qSend])
    return form;
}

function createQSend() {
    return genElement('button', 'q-send', '', 'send')
}

function createQInput() {
    return genElement('input', 'q-input')
}

function createAnsDiv() {
    return genElement('div', 'text-out')
}


//utils
function genElement(type, id, className, innerHTML, value, nameAttr, otherAttr) {
    var newElement = document.createElement(type);
    if (Valid(innerHTML)) newElement.innerHTML = innerHTML;
    if (Valid(value)) newElement.setAttribute("value", value);
    if (Valid(id)) newElement.id = id;
    if (Valid(className)) newElement.className = className;
    if (Valid(nameAttr)) newElement.setAttribute("name", nameAttr);
    if (Valid(otherAttr)) {
      for (key in otherAttr) {
        newElement.setAttribute(key, otherAttr[key]);
      };
    };
    return newElement;
  };

  function appendChildren(div, children) {
    children.forEach(element => {
      div.appendChild(element)
    });
  };

  function Valid(arg) {
    if (arg == "undefined" || typeof(arg) == "undefined") return false;
    if (typeof(arg) == "object" && arg == null) return false;
    if (typeof(arg) == "string" && arg == '') return false;
    if (typeof(arg) == "number" && arg == -1) return false;
    return true;
  };

  $(window).resize(function() {
    ResizeBox();
  });