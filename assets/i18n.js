/* UI localisation for Jain Aradhana.
 *
 * This translates the *interface chrome* (headings, buttons, placeholders,
 * footer, PWA banners) — NOT the devotional verse text, which is handled
 * per-item by its own language tabs in item.js.
 *
 * Default UI language is English ("en"); the user can switch to Hindi ("hi")
 * or Gujarati ("gu"). The choice is persisted in localStorage so it survives
 * reloads, and works fully client-side for the static GitHub Pages host.
 *
 * Usage:
 *   - Mark static markup with data-i18n="key" (sets textContent),
 *     data-i18n-placeholder="key", data-i18n-aria="key", or
 *     data-i18n-html="key" (sets innerHTML, for strings with markup).
 *   - Read a string at runtime with window.I18n.t("key").
 *   - React to language changes via window.I18n.onChange(fn) — fn runs once
 *     immediately and again on every switch.
 *
 * This script must load before home.js / item.js / pwa.js.
 */
(function () {
  "use strict";

  var STORE_KEY = "jain-aradhana:ui-lang";
  var DEFAULT_LANG = "en";

  // Languages offered in the UI switcher, in display order. English first so
  // it reads as the default.
  var LANGS = [
    { key: "en", label: "English" },
    { key: "hi", label: "हिन्दी" },
    { key: "gu", label: "ગુજરાતી" },
  ];

  // UI string dictionary. Every key must exist for every language; missing
  // keys fall back to English, then to the key itself.
  var STRINGS = {
    en: {
      "app.name": "Jain Aradhana",
      "app.tagline": "Aarti, Stavan, Stuti, Chalisa, Bhajan, Stotra & more",
      "home.title": "Jain Aradhana — Aarti, Stavan, Stuti & more",
      "home.description":
        "A collection of Jain aartis, stavans, stutis, chalisas, bhajans, stotras and more.",
      "home.searchPlaceholder": "Search by name…",
      "home.searchAria": "Search aartis and stavans",
      "home.filterAll": "All",
      "home.empty": "No matching items found.",
      "item.back": "← Back to all",
      "item.meaningTab": "Meaning",
      "item.smaller": "Smaller text",
      "item.larger": "Larger text",
      "item.notFoundTitle": "Not found",
      "item.notFoundBody":
        "Sorry, that item could not be found. Go back to the list.",
      "footer.addContent": "✉️ Contact us to add content",
      "footer.github": "★ GitHub repo — add content yourself",
      "footer.blessing": "Micchami Dukkadam · Shared with devotion 🙏",
      "footer.credit": "Created by Karan Shah · Built using Kiro",
      "pwa.offline": "You’re offline — showing saved content.",
      "pwa.install": "⬇︎ Install app",
      "pwa.iosHint":
        "Install this app: tap the Share button " +
        '<span class="ios-share-glyph" aria-hidden="true">&#x2191;</span>' +
        ", then <strong>Add to Home Screen</strong>.",
      "pwa.iosDismiss": "Dismiss",
      "lang.label": "Language",
      "lang.switcherAria": "Choose interface language",
      "theme.toggleToDark": "Switch to dark theme",
      "theme.toggleToLight": "Switch to light theme",
      "home.filterFavorites": "★ Favorites",
      "home.emptyFavorites": "No favorites yet. Tap the star on any item to save it here.",
      "fav.add": "Add to favorites",
      "fav.remove": "Remove from favorites",
      "share.label": "Share",
      "share.title": "Share this",
      "share.copied": "Link copied",
      "share.failed": "Couldn’t share — link copied instead",
      "help.button": "Help",
      "help.open": "Open help and FAQs",
      "help.title": "Help & FAQs",
      "help.intro":
        "Common questions about using Jain Aradhana. Tap a question to see the answer.",
      "help.close": "Close help",
      "help.contactLead": "Still need help?",
      "help.contactLink": "✉️ Contact us",
      "help.q.install": "How do I install the app on my phone?",
      "help.a.install":
        "<strong>On Android (Chrome):</strong> tap the <strong>⬇︎ Install app</strong> button, or open the browser menu (⋮) and choose <strong>Install app</strong> / <strong>Add to Home screen</strong>.<br><br>" +
        "<strong>On iPhone/iPad (Safari):</strong> tap the Share button " +
        '<span class="ios-share-glyph" aria-hidden="true">&#x2191;</span>' +
        " at the bottom of the screen, then choose <strong>Add to Home Screen</strong>.<br><br>" +
        "<strong>On iPhone/iPad (Chrome):</strong> tap the Share button " +
        '<span class="ios-share-glyph" aria-hidden="true">&#x2191;</span>' +
        " in the top-right, then choose <strong>Add to Home Screen</strong>.<br><br>" +
        "Once installed, the app opens from your home screen like any other app — no browser needed.",
      "help.q.offline": "Does the app work without internet (offline)?",
      "help.a.offline":
        "Yes. After you open the app once with an internet connection, it saves the content on your device. You can then read everything even when you are offline. New items added later will appear the next time you open the app while online.",
      "help.q.newContent": "How can I get new content added?",
      "help.a.newContent":
        "We’d love to add more. Use the <strong>Contact us to add content</strong> link at the bottom of any page and tell us the name, type (aarti, stavan, etc.), language, and the text or a link. If you are comfortable with GitHub, you can also contribute directly through the repository link in the footer.",
      "help.q.privacy": "Does the app store my personal data?",
      "help.a.privacy":
        "No. The app does not collect your name, phone number, or any personal information. Your choices — like language, theme, favorites, and text size — are saved only on your own device, never sent to us. Anonymous usage statistics are collected only if you agree to them, and you can change that anytime from <strong>Analytics preferences</strong> in the footer.",
      "help.q.free": "Is the app free to use?",
      "help.a.free":
        "Yes, completely free. There are no charges, no ads, and no account or sign-up needed. Just open it and start reading.",
      "help.q.language": "How do I change the language?",
      "help.a.language":
        "Use the <strong>language buttons</strong> at the top-right (English / हिन्दी / ગુજરાતી) to change the app’s menus and labels. Inside each aarti or stavan, use the language tabs above the text to read the verse in a different script.",
      "help.q.textSize": "How do I make the text bigger or smaller?",
      "help.a.textSize":
        "Open any aarti or stavan and use the <strong>A−</strong> and <strong>A+</strong> buttons above the text to shrink or enlarge it. Your choice is remembered for next time.",
      "help.q.favorites": "How do I save my favorites?",
      "help.a.favorites":
        "Tap the <strong>star (☆)</strong> on any item to save it. Your saved items appear under the <strong>★ Favorites</strong> filter on the home page, so you can find them quickly.",
      "help.q.darkMode": "How do I switch to dark mode?",
      "help.a.darkMode":
        "Tap the <strong>moon/sun icon</strong> next to the language buttons at the top-right to switch between light and dark themes. The app also follows your phone’s setting by default.",
      "cat.aarti": "Aarti",
      "cat.stavan": "Stavan",
      "cat.stuti": "Stuti",
      "cat.chalisa": "Chalisa",
      "cat.bhajan": "Bhajan",
      "cat.stotra": "Stotra",
      "cat.bhavna": "Bhavna",
      "cat.paath": "Paath",
      "cat.pratikraman": "Pratikraman",
    },
    hi: {
      "app.name": "जैन आराधना",
      "app.tagline": "आरती, स्तवन, स्तुति, चालीसा, भजन, स्तोत्र और अधिक",
      "home.title": "जैन आराधना — आरती, स्तवन, स्तुति और अधिक",
      "home.description":
        "जैन आरती, स्तवन, स्तुति, चालीसा, भजन, स्तोत्र और अधिक का संग्रह।",
      "home.searchPlaceholder": "नाम से खोजें…",
      "home.searchAria": "आरती और स्तवन खोजें",
      "home.filterAll": "सभी",
      "home.empty": "कोई मिलान वाली आराधना नहीं मिली।",
      "item.back": "← सभी पर वापस",
      "item.meaningTab": "अर्थ",
      "item.smaller": "छोटा अक्षर",
      "item.larger": "बड़ा अक्षर",
      "item.notFoundTitle": "नहीं मिला",
      "item.notFoundBody":
        "क्षमा करें, वह आराधना नहीं मिली। सूची पर वापस जाएँ।",
      "footer.addContent": "✉️ आराधना जोड़ने के लिए संपर्क करें",
      "footer.github": "★ GitHub रिपॉज़िटरी — स्वयं आराधना जोड़ें",
      "footer.blessing": "मिच्छामि दुक्कडम् · श्रद्धा सहित साझा 🙏",
      "footer.credit": "करण शाह द्वारा निर्मित · Kiro से बनाया गया",
      "pwa.offline": "आप ऑफ़लाइन हैं — सहेजी गई आराधना दिखा रहे हैं।",
      "pwa.install": "⬇︎ ऐप इंस्टॉल करें",
      "pwa.iosHint":
        "यह ऐप इंस्टॉल करें: शेयर बटन दबाएँ " +
        '<span class="ios-share-glyph" aria-hidden="true">&#x2191;</span>' +
        ", फिर <strong>Add to Home Screen</strong> चुनें।",
      "pwa.iosDismiss": "बंद करें",
      "lang.label": "भाषा",
      "lang.switcherAria": "इंटरफ़ेस की भाषा चुनें",
      "theme.toggleToDark": "गहरा थीम चुनें",
      "theme.toggleToLight": "हल्का थीम चुनें",
      "home.filterFavorites": "★ पसंदीदा",
      "home.emptyFavorites": "अभी कोई पसंदीदा नहीं। किसी भी आराधना पर तारा दबाकर यहाँ सहेजें।",
      "fav.add": "पसंदीदा में जोड़ें",
      "fav.remove": "पसंदीदा से हटाएँ",
      "share.label": "साझा करें",
      "share.title": "इसे साझा करें",
      "share.copied": "लिंक कॉपी हो गया",
      "share.failed": "साझा नहीं हो सका — लिंक कॉपी कर दिया",
      "help.button": "सहायता",
      "help.open": "सहायता और सामान्य प्रश्न खोलें",
      "help.title": "सहायता और सामान्य प्रश्न",
      "help.intro":
        "जैन आराधना के उपयोग से जुड़े सामान्य प्रश्न। उत्तर देखने के लिए प्रश्न पर टैप करें।",
      "help.close": "सहायता बंद करें",
      "help.contactLead": "अभी भी मदद चाहिए?",
      "help.contactLink": "✉️ हमसे संपर्क करें",
      "help.q.install": "मैं अपने फ़ोन में ऐप कैसे इंस्टॉल करूँ?",
      "help.a.install":
        "<strong>Android (Chrome) पर:</strong> <strong>⬇︎ ऐप इंस्टॉल करें</strong> बटन दबाएँ, या ब्राउज़र मेन्यू (⋮) खोलकर <strong>Install app</strong> / <strong>Add to Home screen</strong> चुनें।<br><br>" +
        "<strong>iPhone/iPad (Safari) पर:</strong> स्क्रीन के नीचे शेयर बटन " +
        '<span class="ios-share-glyph" aria-hidden="true">&#x2191;</span>' +
        " दबाएँ, फिर <strong>Add to Home Screen</strong> चुनें।<br><br>" +
        "<strong>iPhone/iPad (Chrome) पर:</strong> ऊपर-दाईं ओर शेयर बटन " +
        '<span class="ios-share-glyph" aria-hidden="true">&#x2191;</span>' +
        " दबाएँ, फिर <strong>Add to Home Screen</strong> चुनें।<br><br>" +
        "इंस्टॉल होने के बाद ऐप आपके होम स्क्रीन से किसी भी अन्य ऐप की तरह खुलेगा — ब्राउज़र की ज़रूरत नहीं।",
      "help.q.offline": "क्या ऐप बिना इंटरनेट (ऑफ़लाइन) चलता है?",
      "help.a.offline":
        "हाँ। एक बार इंटरनेट के साथ ऐप खोलने पर, यह आराधना आपके डिवाइस में सहेज लेता है। इसके बाद आप बिना इंटरनेट के भी सब कुछ पढ़ सकते हैं। बाद में जोड़ी गई नई आराधना अगली बार ऑनलाइन रहते हुए ऐप खोलने पर दिखेगी।",
      "help.q.newContent": "नई आराधना कैसे जुड़वाऊँ?",
      "help.a.newContent":
        "हमें और आराधना जोड़ने में खुशी होगी। किसी भी पेज के नीचे दिए <strong>आराधना जोड़ने के लिए संपर्क करें</strong> लिंक का उपयोग करें और नाम, प्रकार (आरती, स्तवन आदि), भाषा और टेक्स्ट या लिंक बताएँ। यदि आप GitHub से परिचित हैं, तो फ़ुटर में दिए रिपॉज़िटरी लिंक से भी सीधे योगदान कर सकते हैं।",
      "help.q.privacy": "क्या ऐप मेरा निजी डेटा संग्रहित करता है?",
      "help.a.privacy":
        "नहीं। ऐप आपका नाम, फ़ोन नंबर या कोई निजी जानकारी एकत्र नहीं करता। आपकी पसंद — जैसे भाषा, थीम, पसंदीदा और अक्षर का आकार — केवल आपके डिवाइस पर सहेजी जाती है, हमें कभी नहीं भेजी जाती। गुमनाम उपयोग आँकड़े केवल तभी एकत्र होते हैं जब आप सहमति दें, और आप इसे फ़ुटर में <strong>Analytics preferences</strong> से कभी भी बदल सकते हैं।",
      "help.q.free": "क्या ऐप का उपयोग मुफ़्त है?",
      "help.a.free":
        "हाँ, पूरी तरह मुफ़्त। कोई शुल्क नहीं, कोई विज्ञापन नहीं, और न ही कोई खाता या साइन-अप ज़रूरी है। बस खोलें और पढ़ना शुरू करें।",
      "help.q.language": "मैं भाषा कैसे बदलूँ?",
      "help.a.language":
        "ऐप के मेन्यू और लेबल बदलने के लिए ऊपर-दाईं ओर दिए <strong>भाषा बटन</strong> (English / हिन्दी / ગુજરાતી) का उपयोग करें। किसी आरती या स्तवन के अंदर, टेक्स्ट के ऊपर दिए भाषा टैब से आराधना को दूसरी लिपि में पढ़ें।",
      "help.q.textSize": "अक्षर बड़े या छोटे कैसे करूँ?",
      "help.a.textSize":
        "कोई भी आरती या स्तवन खोलें और टेक्स्ट के ऊपर दिए <strong>A−</strong> और <strong>A+</strong> बटन से उसे छोटा या बड़ा करें। आपकी पसंद अगली बार के लिए याद रखी जाती है।",
      "help.q.favorites": "पसंदीदा कैसे सहेजूँ?",
      "help.a.favorites":
        "किसी भी आराधना पर <strong>तारा (☆)</strong> दबाकर उसे सहेजें। सहेजी गई आराधना होम पेज पर <strong>★ पसंदीदा</strong> फ़िल्टर में दिखती हैं, जिससे उन्हें जल्दी ढूँढ सकें।",
      "help.q.darkMode": "डार्क मोड कैसे चालू करूँ?",
      "help.a.darkMode":
        "ऊपर-दाईं ओर भाषा बटन के पास दिए <strong>चाँद/सूरज आइकन</strong> को दबाकर हल्की और गहरी थीम के बीच बदलें। ऐप डिफ़ॉल्ट रूप से आपके फ़ोन की सेटिंग का भी पालन करता है।",
      "cat.aarti": "आरती",
      "cat.stavan": "स्तवन",
      "cat.stuti": "स्तुति",
      "cat.chalisa": "चालीसा",
      "cat.bhajan": "भजन",
      "cat.stotra": "स्तोत्र",
      "cat.bhavna": "भावना",
      "cat.paath": "पाठ",
      "cat.pratikraman": "प्रतिक्रमण",
    },
    gu: {
      "app.name": "જૈન આરાધના",
      "app.tagline": "આરતી, સ્તવન, સ્તુતિ, ચાલીસા, ભજન, સ્તોત્ર અને વધુ",
      "home.title": "જૈન આરાધના — આરતી, સ્તવન, સ્તુતિ અને વધુ",
      "home.description":
        "જૈન આરતી, સ્તવન, સ્તુતિ, ચાલીસા, ભજન, સ્તોત્ર અને વધુનો સંગ્રહ.",
      "home.searchPlaceholder": "નામથી શોધો…",
      "home.searchAria": "આરતી અને સ્તવન શોધો",
      "home.filterAll": "બધું",
      "home.empty": "કોઈ મેળ ખાતી આરાધના મળી નથી.",
      "item.back": "← બધા પર પાછા",
      "item.meaningTab": "અર્થ",
      "item.smaller": "નાનું અક્ષર",
      "item.larger": "મોટું અક્ષર",
      "item.notFoundTitle": "મળ્યું નથી",
      "item.notFoundBody":
        "માફ કરશો, તે આરાધના મળી શકી નથી. યાદી પર પાછા જાઓ.",
      "footer.addContent": "✉️ આરાધના ઉમેરવા સંપર્ક કરો",
      "footer.github": "★ GitHub રિપોઝિટરી — જાતે આરાધના ઉમેરો",
      "footer.blessing": "મિચ્છામિ દુક્કડમ્ · શ્રદ્ધા સહિત વહેંચ્યું 🙏",
      "footer.credit": "કરણ શાહ દ્વારા બનાવેલ · Kiro થી બનાવ્યું",
      "pwa.offline": "તમે ઑફલાઇન છો — સાચવેલી આરાધના બતાવીએ છીએ.",
      "pwa.install": "⬇︎ ઍપ ઇન્સ્ટૉલ કરો",
      "pwa.iosHint":
        "આ ઍપ ઇન્સ્ટૉલ કરો: શેર બટન દબાવો " +
        '<span class="ios-share-glyph" aria-hidden="true">&#x2191;</span>' +
        ", પછી <strong>Add to Home Screen</strong> પસંદ કરો.",
      "pwa.iosDismiss": "બંધ કરો",
      "lang.label": "ભાષા",
      "lang.switcherAria": "ઇન્ટરફેસની ભાષા પસંદ કરો",
      "theme.toggleToDark": "ડાર્ક થીમ પસંદ કરો",
      "theme.toggleToLight": "લાઇટ થીમ પસંદ કરો",
      "home.filterFavorites": "★ મનપસંદ",
      "home.emptyFavorites": "હજી કોઈ મનપસંદ નથી. કોઈપણ આરાધના પરનો તારો દબાવીને અહીં સાચવો.",
      "fav.add": "મનપસંદમાં ઉમેરો",
      "fav.remove": "મનપસંદમાંથી દૂર કરો",
      "share.label": "શેર કરો",
      "share.title": "આ શેર કરો",
      "share.copied": "લિંક કૉપિ થઈ",
      "share.failed": "શેર ન થઈ શક્યું — લિંક કૉપિ કરી",
      "help.button": "મદદ",
      "help.open": "મદદ અને સામાન્ય પ્રશ્નો ખોલો",
      "help.title": "મદદ અને સામાન્ય પ્રશ્નો",
      "help.intro":
        "જૈન આરાધના વાપરવા અંગેના સામાન્ય પ્રશ્નો. જવાબ જોવા માટે પ્રશ્ન પર ટૅપ કરો.",
      "help.close": "મદદ બંધ કરો",
      "help.contactLead": "હજી પણ મદદ જોઈએ છે?",
      "help.contactLink": "✉️ અમારો સંપર્ક કરો",
      "help.q.install": "હું મારા ફોનમાં ઍપ કેવી રીતે ઇન્સ્ટૉલ કરું?",
      "help.a.install":
        "<strong>Android (Chrome) પર:</strong> <strong>⬇︎ ઍપ ઇન્સ્ટૉલ કરો</strong> બટન દબાવો, અથવા બ્રાઉઝર મેનૂ (⋮) ખોલીને <strong>Install app</strong> / <strong>Add to Home screen</strong> પસંદ કરો.<br><br>" +
        "<strong>iPhone/iPad (Safari) પર:</strong> સ્ક્રીનની નીચે શેર બટન " +
        '<span class="ios-share-glyph" aria-hidden="true">&#x2191;</span>' +
        " દબાવો, પછી <strong>Add to Home Screen</strong> પસંદ કરો.<br><br>" +
        "<strong>iPhone/iPad (Chrome) પર:</strong> ઉપર-જમણી બાજુ શેર બટન " +
        '<span class="ios-share-glyph" aria-hidden="true">&#x2191;</span>' +
        " દબાવો, પછી <strong>Add to Home Screen</strong> પસંદ કરો.<br><br>" +
        "ઇન્સ્ટૉલ થયા પછી ઍપ તમારી હોમ સ્ક્રીનથી કોઈપણ અન્ય ઍપની જેમ ખૂલશે — બ્રાઉઝરની જરૂર નથી.",
      "help.q.offline": "શું ઍપ ઇન્ટરનેટ વગર (ઑફલાઇન) ચાલે છે?",
      "help.a.offline":
        "હા. એક વાર ઇન્ટરનેટ સાથે ઍપ ખોલ્યા પછી, તે આરાધના તમારા ડિવાઇસમાં સાચવી લે છે. પછી તમે ઇન્ટરનેટ વગર પણ બધું વાંચી શકો છો. પછીથી ઉમેરાયેલી નવી આરાધના આગલી વાર ઑનલાઇન રહીને ઍપ ખોલશો ત્યારે દેખાશે.",
      "help.q.newContent": "નવી આરાધના કેવી રીતે ઉમેરાવું?",
      "help.a.newContent":
        "અમને વધુ આરાધના ઉમેરવામાં આનંદ થશે. કોઈપણ પેજની નીચે આપેલી <strong>આરાધના ઉમેરવા સંપર્ક કરો</strong> લિંક વાપરો અને નામ, પ્રકાર (આરતી, સ્તવન વગેરે), ભાષા અને ટેક્સ્ટ કે લિંક જણાવો. જો તમે GitHub થી પરિચિત હો, તો ફૂટરમાં આપેલી રિપોઝિટરી લિંક દ્વારા સીધું યોગદાન પણ કરી શકો છો.",
      "help.q.privacy": "શું ઍપ મારો વ્યક્તિગત ડેટા સંગ્રહે છે?",
      "help.a.privacy":
        "ના. ઍપ તમારું નામ, ફોન નંબર કે કોઈ વ્યક્તિગત માહિતી એકત્ર કરતી નથી. તમારી પસંદગીઓ — જેમ કે ભાષા, થીમ, મનપસંદ અને અક્ષરનું કદ — ફક્ત તમારા ડિવાઇસ પર સચવાય છે, અમને ક્યારેય મોકલાતી નથી. અનામ વપરાશ આંકડા ફક્ત ત્યારે જ એકત્ર થાય છે જ્યારે તમે સંમતિ આપો, અને તમે તેને ફૂટરમાં <strong>Analytics preferences</strong> થી ગમે ત્યારે બદલી શકો છો.",
      "help.q.free": "શું ઍપ વાપરવી મફત છે?",
      "help.a.free":
        "હા, સંપૂર્ણ મફત. કોઈ ચાર્જ નથી, કોઈ જાહેરાત નથી, અને કોઈ ખાતું કે સાઇન-અપ જરૂરી નથી. ફક્ત ખોલો અને વાંચવાનું શરૂ કરો.",
      "help.q.language": "હું ભાષા કેવી રીતે બદલું?",
      "help.a.language":
        "ઍપના મેનૂ અને લેબલ બદલવા માટે ઉપર-જમણી બાજુ આપેલા <strong>ભાષા બટન</strong> (English / હિન્દી / ગુજરાતી) વાપરો. કોઈ આરતી કે સ્તવનની અંદર, ટેક્સ્ટની ઉપર આપેલા ભાષા ટૅબથી આરાધનાને બીજી લિપિમાં વાંચો.",
      "help.q.textSize": "અક્ષર મોટા કે નાના કેવી રીતે કરું?",
      "help.a.textSize":
        "કોઈપણ આરતી કે સ્તવન ખોલો અને ટેક્સ્ટની ઉપર આપેલા <strong>A−</strong> અને <strong>A+</strong> બટનથી તેને નાનું કે મોટું કરો. તમારી પસંદગી આગલી વાર માટે યાદ રખાય છે.",
      "help.q.favorites": "મનપસંદ કેવી રીતે સાચવું?",
      "help.a.favorites":
        "કોઈપણ આરાધના પરનો <strong>તારો (☆)</strong> દબાવીને તેને સાચવો. સાચવેલી આરાધના હોમ પેજ પર <strong>★ મનપસંદ</strong> ફિલ્ટરમાં દેખાય છે, જેથી તેમને ઝડપથી શોધી શકાય.",
      "help.q.darkMode": "ડાર્ક મોડ કેવી રીતે ચાલુ કરું?",
      "help.a.darkMode":
        "ઉપર-જમણી બાજુ ભાષા બટન પાસે આપેલા <strong>ચંદ્ર/સૂરજ આઇકન</strong> દબાવીને લાઇટ અને ડાર્ક થીમ વચ્ચે બદલો. ઍપ ડિફૉલ્ટ રૂપે તમારા ફોનની સેટિંગને પણ અનુસરે છે.",
      "cat.aarti": "આરતી",
      "cat.stavan": "સ્તવન",
      "cat.stuti": "સ્તુતિ",
      "cat.chalisa": "ચાલીસા",
      "cat.bhajan": "ભજન",
      "cat.stotra": "સ્તોત્ર",
      "cat.bhavna": "ભાવના",
      "cat.paath": "પાઠ",
      "cat.pratikraman": "પ્રતિક્રમણ",
    },
  };

  function isSupported(lang) {
    return !!STRINGS[lang];
  }

  function loadLang() {
    try {
      var saved = localStorage.getItem(STORE_KEY);
      if (saved && isSupported(saved)) return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  var current = loadLang();
  var listeners = [];

  // Translate a key for the current language, with graceful fallbacks.
  function t(key) {
    var table = STRINGS[current] || STRINGS[DEFAULT_LANG];
    if (table && table[key] != null) return table[key];
    if (STRINGS[DEFAULT_LANG][key] != null) return STRINGS[DEFAULT_LANG][key];
    return key;
  }

  // Apply translations to any element carrying a data-i18n* attribute within
  // the given root (defaults to the whole document).
  function apply(root) {
    root = root || document;

    each(root.querySelectorAll("[data-i18n]"), function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    each(root.querySelectorAll("[data-i18n-html]"), function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    each(root.querySelectorAll("[data-i18n-placeholder]"), function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    each(root.querySelectorAll("[data-i18n-aria]"), function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    each(root.querySelectorAll("[data-i18n-title]"), function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });

    // Keep the document language in sync for a11y / screen readers.
    document.documentElement.setAttribute("lang", current);
  }

  function each(nodeList, fn) {
    Array.prototype.forEach.call(nodeList, fn);
  }

  function notify() {
    listeners.forEach(function (fn) {
      try {
        fn(current);
      } catch (e) {}
    });
  }

  function setLang(lang) {
    if (!isSupported(lang) || lang === current) return;
    current = lang;
    try {
      localStorage.setItem(STORE_KEY, lang);
    } catch (e) {}
    apply(document);
    syncSwitcher();
    notify();
  }

  // Register a callback that runs immediately and on every language change.
  // Consumers (home.js, item.js, pwa.js) use this to re-render dynamic text.
  function onChange(fn) {
    if (typeof fn !== "function") return;
    listeners.push(fn);
    try {
      fn(current);
    } catch (e) {}
  }

  // --- Floating language switcher -----------------------------------------
  var switcherEl = null;

  function buildSwitcher() {
    if (switcherEl || !document.body) return;

    var wrap = document.createElement("div");
    wrap.className = "lang-switcher";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", t("lang.switcherAria"));

    LANGS.forEach(function (l) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lang-btn";
      btn.setAttribute("data-lang", l.key);
      btn.setAttribute("lang", l.key);
      btn.textContent = l.label;
      btn.addEventListener("click", function () {
        setLang(l.key);
      });
      wrap.appendChild(btn);
    });

    document.body.appendChild(wrap);
    switcherEl = wrap;
    syncSwitcher();
  }

  function syncSwitcher() {
    if (!switcherEl) return;
    switcherEl.setAttribute("aria-label", t("lang.switcherAria"));
    each(switcherEl.querySelectorAll(".lang-btn"), function (btn) {
      var active = btn.getAttribute("data-lang") === current;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  // Localised label for a content category (e.g. "aarti" → "Aarti" / "आरती" /
  // "આરતી"). Resolution order: the "cat.<type>" string for the current
  // language, then the English CATEGORIES map from content.js (so a category
  // added there without a translation still shows a sensible label), then the
  // raw type key.
  function category(type) {
    if (!type) return "";
    var key = "cat." + type;
    var table = STRINGS[current] || STRINGS[DEFAULT_LANG];
    if (table && table[key] != null) return table[key];
    var cats = window.CATEGORIES || {};
    if (cats[type] != null) return cats[type];
    if (STRINGS[DEFAULT_LANG][key] != null) return STRINGS[DEFAULT_LANG][key];
    return type;
  }

  function init() {
    apply(document);
    buildSwitcher();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.I18n = {
    t: t,
    category: category,
    apply: apply,
    setLang: setLang,
    getLang: function () {
      return current;
    },
    onChange: onChange,
    langs: LANGS.slice(),
  };
})();
