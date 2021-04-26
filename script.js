var introMsg = `You are a busy person, and Ben is too. That's why he created me, Benni, a bot that is able to answer job interview questions! Ask a few questions. If my answers are to your liking, consider giving the real Ben an interview.`
var mainContainer = document.getElementById('main-container');
var _currentQuery = '';
var _intel = {};
var _notSure = ["I'm a mere bot, and I did not understand the question. Can you ask it another way?", "If you ask that another way, perhaps I can understand it.", "I'm a little confused about the question. Try to ask one more time in a slightly different way, please."];
var _notSureElevated = ["Sorry, but I still don't understand. Ask me a new question.", "I'm still confused. This would be a great question to ask Ben directly.", "Ah, the life of a bot. I have failed my only task. I still don't understand your question. Ask me something else."];
var _notSureLevel = _notSure;
var _postCount = 0;
var _respCount = 0;

function onLoad(){
    var introP = genElement('p', 'intro-text', '', introMsg)
    document.getElementById('intro-box').appendChild(introP);

    initBenniSys();
}

function initBenniSys() {
    var sendForm = createSendForm();
    var textOut = createAnsDiv();
    appendChildren(mainContainer, [textOut, sendForm])
    resizeBox();
}

function createSendForm() {
    var form = genElement('form', 'send-form');
    var qInput = createQInput();
    var qSend = createQSend();
    appendChildren(form, [qInput, qSend])
    qSend.addEventListener('click', (event) => {
      console.log(event)
      event.preventDefault();
      _currentQuery = qInput.value;
      getQueryArray(_currentQuery);
      qInput.value = '';
    })
    qSend.addEventListener('submit', (event) => {
      event.preventDefault();
      _currentQuery = qInput.value;
      getQueryArray(_currentQuery);
      qInput.value = '';
    })
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

  function resizeBox() {
     var mainHeight = $('#main-container').height();
     if (document.getElementById('text-out')) {
     $('#text-out').height(mainHeight-100)
     }
  }

  $(window).resize(function() {
    resizeBox();
  });

  function getQueryArray(queryStr) {
    if (queryStr == '') return false;
    getTextMsg(queryStr, 'post');
    var array = queryStr.toLowerCase().split(' ');
    for (let i = 0; i < array.length; i++) {
      var word = array[i];
      var str = '';
      if (word[word.length-1] == '.' || word[word.length-1] == '?' || word[word.length-1] == '!') {
        str = word.slice(0, word.length - 1);
        array[i] = str;
        console.log(str)
      }
    }
    console.log(array)
    buildIntel(array)
  }

  function buildIntel(array) {
    _intel = {};
    var expArr = [];
    array.forEach(word => {
      console.log(word)
      for (phrase in _phraseList) {
        if (!_intel[phrase]) {
          _intel[phrase] = {
            foundTags: [],
            count: 0
          };
      }
        _phraseList[phrase].tags.forEach(tag => {
          if (word == tag) {
            _intel[phrase].foundTags.push(word);
            _intel[phrase].count++;
            if (phrase == 'experience') {
              _phraseList[phrase].responses.forEach(resp => {
                if (word == resp) {
                  expArr.push(word)
                }
              })
            }
          }
        })
      }
    })
    // console.log(_intel)
    var sorted = Object.keys(_intel).sort(function(a, b){
      console.log(_intel[a].count,_intel[b].count)
        return _intel[b].count - _intel[a].count;
    })
    buildResponse(sorted, expArr);
  }

  function buildResponse(arr, expArr) {
    var sentence = '';
    var targetPhrase = _intel[arr[0]];
    if (targetPhrase.count >= 2) {
      _notSureLevel = _notSure;
      if (arr[0] != 'experience') {
        sentence = _phraseList[arr[0]].responses[0];
      } else {
        for (let i = 0; i < expArr.length; i++) {
          if (expArr.length > 2 && i < expArr.length-2 && i > 0) {
            sentence += ', ' + expArr[i] + ''
            continue;
          }
          if (i == 0) sentence += ' ' + expArr[i] + ' ';
          if (i > 0 && i == expArr.length-1) sentence += 'and ' + expArr[i] + '.'
        }
        sentence != ''? sentence = 'Yes, I know ' + sentence : sentence = "I don't think I've studied that skill much yet, but I am a quick study."
      }
    } else {
      if (targetPhrase.count == 1 && (arr[0] == 'greeting' || arr[0] == 'contact' || arr[0] == 'schedule' || arr[0] == 'education' || arr[0] == 'salary' || arr[0] == 'relocate' || arr[0] == 'located' || arr[0] == 'start' || arr[0] == 'salary' || arr[0] == 'remote' || arr[0] == 'projects' || arr[0] == 'resume' || arr[0] == 'goals' || arr[0] == 'presenting')) {
        sentence = _phraseList[arr[0]].responses[0];
      } else {
        sentence = _notSureLevel[Math.floor(Math.random() * 3)];
        _notSureLevel != _notSureElevated? _notSureLevel = _notSureElevated : _notSureLevel = _notSure;
      }
    }
    getTextMsg(sentence, 'response');
  }

  function getTextMsg(sentence, type) {
    count = 0;
    var msg = '...'
    if (type != 'response') msg = sentence;
    type == 'response'? count = _respCount : count = _postCount;
    var container = genElement('div', 'text-' + type + count, 'text-container-' + type, msg)
    type == 'response'? _respCount++ : _postCount++;
    var textOut = document.getElementById('text-out');
    console.log(type)
    if (type == 'response') {
      setTimeout(function(){
        textOut.appendChild(container);
        scrollDown();
      }, 500)
      setTimeout(function(){
        container.innerHTML = sentence;
        scrollDown();
      }, 2000)
    } else {
      textOut.appendChild(container);
    }
    scrollDown();
  }

  function scrollDown() {
    document.getElementById("text-out").scrollTop = document.getElementById('text-out').scrollHeight;
  }