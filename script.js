const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(input) {
  input = input.toLowerCase();

//Basic questions

  if (input.includes("hello") || input.includes("hi")) 
  return "Hey there! 👋";
  
  if (input.includes("how are you")) 
  return "I'm fine , Thanks for asking";
  
  if (input.includes("billing")) 
  return "For billing issues, please visit your account page.";
  
  if (input.includes("contact")) 
  return "You can reach our support team at support@example.com or dial +91 12345 67890";
  
  if (input.includes("working hours")) 
  return "Our working hours are 9 a.m. to 8 p.m. from Monday to Friday";
  
  if (input.includes("bye")) 
  return "Goodbye! 👋";

  if (input.toLowerCase().startsWith("my name is") || input.toLowerCase().startsWith("i am")) 
    {
        const name = input.replace(/(my name is|i am)/i, "").trim();
        return "Hi " + name + "!";
    }

  
  if (input.includes("help")) 
  return "You can ask about \n billing,  \n contact, \n & working hours!";

// How to grow crops ?
  
  if (input.includes("how do i grow a banana") || input.includes("how to grow a banana") || input.includes("banana")) 
  return "Bananas grow best in warm, humid conditions with rich, well-drained soil and consistent watering. Regular fertilization, mulching, and supporting the bunches help ensure healthy growth and higher yield.";
  
  if (input.includes("how to grow rice") || input.includes("how do i grow rice") || input.includes("rice"))
  return "Rice needs warm temperatures and standing water during its growth period. Proper field leveling, puddling, and consistent irrigation ensure high yields.";

  if (input.includes("how to grow ragi") || input.includes("how do i grow ragi") || input.includes("ragi"))
  return "Ragi grows well in warm, dry regions with red or loamy soil. It requires moderate rainfall and thrives under well-drained conditions.";

  if (input.includes("how to grow jowar") || input.includes("how do i grow jowar") || input.includes("jowar"))
  return "Jowar grows best in dry and warm climates with moderate rainfall. It prefers well-drained loamy soil and needs less water than rice or wheat.";

  if (input.includes("how to grow wheat") || input.includes("how do i grow wheat") || input.includes("wheat"))
  return "Wheat needs a cool, dry climate and well-drained loamy or clay soil. Regular irrigation during tillering and grain filling helps improve yield.";

  if (input.includes("how to grow red gram") || input.includes("how do i grow red gram") || input.includes("red gram"))
  return "Red gram (tur/arhar) grows well in semi-arid regions with moderate rainfall. It prefers deep loamy soil and needs good drainage.";

  if (input.includes("how to grow green gram") || input.includes("how do i grow green gram") || input.includes("green gram"))
  return "Green gram (moong) grows well in warm climates with light soils. It needs moderate rainfall and plenty of sunlight for better pod formation.";

  if (input.includes("how to grow groundnut") || input.includes("how do i grow groundnut") || input.includes("groundnut"))
  return "Groundnut grows best in sandy loam soil with good drainage. Warm weather and moderate rainfall are essential for healthy pods.";

  if (input.includes("how to grow sunflower") || input.includes("how do i grow sunflower") || input.includes("sunflower"))
  return "Sunflower thrives in sunny, warm areas with loamy soil. Adequate spacing and light irrigation help in producing large, healthy seeds.";

  if (input.includes("how to grow sesame") || input.includes("how do i grow sesame") || input.includes("sesame"))
  return "Sesame grows well in warm, dry climates with well-drained sandy soil. It’s drought-tolerant and needs minimal irrigation after flowering.";

  if (input.includes("how to grow castor") || input.includes("how do i grow castor") || input.includes("castor"))
  return "Castor grows in tropical climates with moderate rainfall. It prefers well-drained sandy loam soil and plenty of sunlight.";

  if (input.includes("how to grow sugarcane") || input.includes("how do i grow sugarcane") || input.includes("sugarcane"))
  return "Sugarcane grows best in tropical regions with rich, moist soil. It needs regular irrigation, sunlight, and proper weed control.";

  if (input.includes("how to grow cotton") || input.includes("how do i grow cotton") || input.includes("cotton"))
  return "Cotton thrives in warm climates with black or loamy soil. Regular irrigation during flowering and pest control ensure better fiber yield.";

  if (input.includes("how to grow coffee") || input.includes("how do i grow coffee") || input.includes("coffee"))
  return "Coffee grows well in cool, shaded highlands with rich, well-drained soil. Regular rainfall and protection from direct sunlight are essential.";

  if (input.includes("how to grow arecanut") || input.includes("how do i grow arecanut") || input.includes("arecanut"))
  return "Arecanut prefers warm, humid climates with deep loamy soil. It needs regular irrigation and shade during early growth stages.";

  if (input.includes("how to grow mango") || input.includes("how do i grow mango") || input.includes("mango"))
  return "Mango trees thrive in tropical climates with well-drained soil. Adequate sunlight and pruning help in producing healthy fruits.";

  if (input.includes("how to grow pepper") || input.includes("how do i grow pepper") || input.includes("pepper"))
  return "Pepper grows well in hot, humid climates with partial shade. It’s usually grown on support trees with regular watering and mulching.";

  if (input.includes("how to grow cardamom") || input.includes("how do i grow cardamom") || input.includes("cardamom"))
  return "Cardamom thrives in shady, humid forest areas with rich soil. It needs consistent moisture and good drainage for healthy pods.";

  if (input.includes("how to grow maize") || input.includes("how do i grow maize") || input.includes("maize"))
  return "Maize needs warm weather and fertile, well-drained soil. Proper spacing, sunlight, and timely irrigation boost grain yield.";

  if (input.includes("how to grow urad dal") || input.includes("how do i grow urad dal") || input.includes("urad dal"))
  return "Urad dal grows best in warm climates with loamy soil. It requires moderate rainfall and does well under rainfed conditions.";

  if (input.includes("how to grow huruli") || input.includes("how do i grow huruli") || input.includes("huruli"))
  return "Huruli (horse gram) grows well in dry regions with poor or rocky soil. It’s drought-tolerant and needs very little irrigation.";

  if (input.includes("how to grow bengal gram") || input.includes("how do i grow bengal gram") || input.includes("bengal gram"))
  return "Bengal gram (chickpea) prefers cool, dry climates with loamy soil. It requires minimal irrigation and is best grown in post-rainy seasons.";

  if (input.includes("how to grow tobacco") || input.includes("how do i grow tobacco") || input.includes("tobacco"))
  return "Tobacco grows well in warm climates with sandy loam soil. Proper curing and pest control are key for quality leaf production.";

  if (input.includes("how to grow a crop") || input.includes("how do i grow a crop") || input.includes("crop"))
  return "Which crop would you like to know about ? We have rice, ragi, jowar, wheat, red gram, green gram, groundnut, sunflower, sesame, castor, sugracane, cotton, coffee, arecanut, mango, pepper, cardamom, maize, urad dal, huruli, bengal gram, tobacco & banana."

// Which fertilizer to use ?

if (input.includes("which fertilizer to use for banana") || input.includes("what fertilizer do i use for banana") || input.includes("banana"))
  return "For banana, use FYM, Urea, and MOP. Regular manuring and balanced fertilization improve bunch size and yield.";

if (input.includes("which fertilizer to use for rice") || input.includes("what fertilizer do i use for rice") || input.includes("rice"))
  return "For rice, use Urea, DAP, and MOP. Apply nitrogen in split doses and keep the field flooded for better absorption.";

if (input.includes("which fertilizer to use for ragi") || input.includes("what fertilizer do i use for ragi") || input.includes("ragi"))
  return "For ragi, apply FYM, Urea, SSP, and MOP. Balanced nitrogen and phosphorus help in better grain formation.";

if (input.includes("which fertilizer to use for jowar") || input.includes("what fertilizer do i use for jowar") || input.includes("jowar"))
  return "For jowar, use Urea and SSP. Nitrogen boosts growth while phosphorus supports root strength.";

if (input.includes("which fertilizer to use for wheat") || input.includes("what fertilizer do i use for wheat") || input.includes("wheat"))
  return "For wheat, use Urea, DAP, and MOP. Apply nitrogen in two splits—half at sowing and half at tillering stage.";

if (input.includes("which fertilizer to use for red gram") || input.includes("what fertilizer do i use for red gram") || input.includes("red gram"))
  return "For red gram, use SSP and a small dose of Urea. Being a legume, it fixes its own nitrogen.";

if (input.includes("which fertilizer to use for green gram") || input.includes("what fertilizer do i use for green gram") || input.includes("green gram"))
  return "For green gram, apply SSP and limited Urea. Too much nitrogen reduces pod yield.";

if (input.includes("which fertilizer to use for groundnut") || input.includes("what fertilizer do i use for groundnut") || input.includes("groundnut"))
  return "For groundnut, use Gypsum, SSP, and MOP. Calcium and sulfur improve pod filling and oil quality.";

if (input.includes("which fertilizer to use for sunflower") || input.includes("what fertilizer do i use for sunflower") || input.includes("sunflower"))
  return "For sunflower, apply Urea, SSP, and MOP. Boron and zinc sprays help in better seed filling.";

if (input.includes("which fertilizer to use for sesame") || input.includes("what fertilizer do i use for sesame") || input.includes("sesame"))
  return "For sesame, use SSP and a small dose of Urea. Avoid excess nitrogen to prevent lodging.";

if (input.includes("which fertilizer to use for castor") || input.includes("what fertilizer do i use for castor") || input.includes("castor"))
  return "For castor, apply FYM, Urea, and SSP. Nitrogen promotes vegetative growth, phosphorus supports oil yield.";

if (input.includes("which fertilizer to use for sugarcane") || input.includes("what fertilizer do i use for sugarcane") || input.includes("sugarcane"))
  return "For sugarcane, use Urea, DAP, and MOP. Apply organic manure before planting for higher cane weight.";

if (input.includes("which fertilizer to use for cotton") || input.includes("what fertilizer do i use for cotton") || input.includes("cotton"))
  return "For cotton, apply FYM, Urea, and DAP. Balanced NPK and micronutrients improve boll size and fiber quality.";

if (input.includes("which fertilizer to use for coffee") || input.includes("what fertilizer do i use for coffee") || input.includes("coffee"))
  return "For coffee, use NPK in a 15:15:15 ratio along with organic compost. Apply fertilizer twice a year for better cherries.";

if (input.includes("which fertilizer to use for arecanut") || input.includes("what fertilizer do i use for arecanut") || input.includes("arecanut"))
  return "For arecanut, use Urea, SSP, and MOP. Apply in three splits per year with regular irrigation.";

if (input.includes("which fertilizer to use for mango") || input.includes("what fertilizer do i use for mango") || input.includes("mango"))
  return "For mango, apply FYM, Urea, and SSP annually. Potassium helps improve fruit sweetness and size.";

if (input.includes("which fertilizer to use for pepper") || input.includes("what fertilizer do i use for pepper") || input.includes("pepper"))
  return "For pepper, apply organic compost, Urea, and MOP. Adding neem cake improves soil health and pest resistance.";

if (input.includes("which fertilizer to use for cardamom") || input.includes("what fertilizer do i use for cardamom") || input.includes("cardamom"))
  return "For cardamom, use NPK in a 75:75:150 ratio. Organic manure and shade help sustain high yields.";

if (input.includes("which fertilizer to use for maize") || input.includes("what fertilizer do i use for maize") || input.includes("maize"))
  return "For maize, use Urea, DAP, and MOP. Apply nitrogen in three splits to ensure steady growth.";

if (input.includes("which fertilizer to use for urad dal") || input.includes("what fertilizer do i use for urad dal") || input.includes("urad dal"))
  return "For urad dal, apply SSP and a small dose of Urea. Phosphorus enhances root growth and flowering.";

if (input.includes("which fertilizer to use for huruli") || input.includes("what fertilizer do i use for huruli") || input.includes("huruli"))
  return "For huruli (horse gram), use minimal fertilizer—mainly SSP. It grows well even in low-nutrient soils.";

if (input.includes("which fertilizer to use for bengal gram") || input.includes("what fertilizer do i use for bengal gram") || input.includes("bengal gram"))
  return "For bengal gram, apply SSP and limited Urea. Being a legume, it needs very little nitrogen fertilizer.";

if (input.includes("which fertilizer to use for tobacco") || input.includes("what fertilizer do i use for tobacco") || input.includes("tobacco"))
  return "For tobacco, use NPK in a balanced ratio and add FYM. Avoid excess nitrogen—it affects leaf texture and quality.";
 
//Default Statement

  return "Hmm, I’m not sure what you mean. Try asking something else!";
}

function handleSend() {
  const text = userInput.value.trim();
  if (!text) return;
  addMessage("user", text);
  userInput.value = "";
  const reply = getBotReply(text);
  setTimeout(() => addMessage("bot", reply), 500);
}

sendBtn.addEventListener("click", handleSend);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSend();
});
