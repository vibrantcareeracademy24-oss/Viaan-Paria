// ================================
// Balvatika Oral Worksheet
// Audio / Text to Speech
// ================================

function speak(text) {

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "gu-IN";
  speech.rate = 0.75;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}


function speakHindi(text) {

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "hi-IN";
  speech.rate = 0.75;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}


function speakEnglish(text) {

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";
  speech.rate = 0.75;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}


// ================================
// Oral Questions
// ================================

const questions = [

  {
    q: "વજન ઊંચકી શકે તેવું શિંગડાવાળું પ્રાણી કયું છે?",
    a: "બળદ"
  },

  {
    q: "કયા ફળમાં બીજ વધારે હોય છે?",
    a: "સીતાફળ અને પપૈયું"
  },

  {
    q: "કયા તહેવારમાં ગરબા ગવાય છે?",
    a: "નવરાત્રિ"
  },

  {
    q: "આપણા રાષ્ટ્રધ્વજ વચ્ચે શું આવેલું છે?",
    a: "અશોકચક્ર"
  },

  {
    q: "ચોમાસામાં આકાશમાં શું શું જોવા મળે છે?",
    a: "કાળા વાદળ, વીજળી અને મેઘધનુષ"
  },

  {
    q: "હાથીના બચ્ચાને શું કહેવાય?",
    a: "મદનિયું"
  },

  {
    q: "ઊન આપણને કોણ આપે છે?",
    a: "ઘેટું"
  },

  {
    q: "ગુરુવાર પછી કયો વાર આવે છે?",
    a: "શુક્રવાર"
  },

  {
    q: "આપણા મુખ્યમંત્રીનું નામ શું છે?",
    a: "શ્રી ભુપેન્દ્રભાઈ પટેલ"
  },

  {
    q: "ધોબી શું કામ કરે છે?",
    a: "કપડાં ધુએ છે"
  },

  {
    q: "દેશની રક્ષા કોણ કરે છે?",
    a: "સૈનિક"
  },

  {
    q: "તમારી સ્કૂલનું નામ શું છે?",
    a: "વિનય વિદ્યા મંદિર"
  },

  {
    q: "દ્વારકામાં કયું મંદિર આવેલું છે?",
    a: "દ્વારકાધીશ મંદિર"
  },

  {
    q: "તમે કયા વર્ગમાં ભણો છો?",
    a: "બાલવાટિકા"
  },

  {
    q: "એમ્બ્યુલન્સને બોલાવવા માટે કયો નંબર ડાયલ કરવો પડે?",
    a: "૧૦૮"
  },

  {
    q: "હિન્દુઓ પૂજા કરવા ક્યાં જાય છે?",
    a: "મંદિરમાં"
  },

  {
    q: "તમારા વતન અથવા ગામનું નામ શું છે?",
    a: "મારું ગામ રોહિશાળા છે."
  },

  {
    q: "તમારા ક્લાસ ટીચરનું નામ શું છે?",
    a: "સોનલબેન અને મનિષાબેન"
  },

  {
    q: "ઘાસ ખાતાં હોય તેવા પ્રાણીઓના બે નામ બોલો.",
    a: "ગાય અને ભેંસ"
  },

  {
    q: "તમારો મોબાઈલ નંબર કયો છે?",
    a: "મારો મોબાઈલ નંબર ૯૯૦૯૦૧૦૩૦૭ છે."
  }

];


// ================================
// Display Questions
// ================================

const questionBox = document.getElementById("questions");

questions.forEach(function(item, index) {

  const div = document.createElement("div");

  div.className = "question";

  div.innerHTML = `

    <div class="question-number">
      ${index + 1}. ${item.q}
    </div>

    <button onclick="speak('${item.q}')">
      🔊 પ્રશ્ન સાંભળો
    </button>

    <div class="answer">
      <strong>જવાબ:</strong> ${item.a}
    </div>

    <button onclick="speak('${item.a}')">
      🔊 જવાબ સાંભળો
    </button>

  `;

  questionBox.appendChild(div);

});
