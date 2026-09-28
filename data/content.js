// Jain devotional content — aarti, stavan, stuti, chalisa, bhajan, stotra,
// bhavna, paath, pratikraman.
//
// To add a new item: copy an object below, give it a unique "id",
// set "type" to one of the keys in CATEGORIES, and fill the text for each
// language. Any language left as "" will not show a tab for that language.
//
// Use real line breaks inside the backticks. A blank line separates stanzas.
//
// Optional: add a "meaning" field to any item to show a "Meaning" tab with its
// explanation. Omit it to hide the tab. It can be either:
//   - a plain string (rendered as-is), or
//   - an array of { term, gloss } pairs for a line-by-line breakdown
//     (rendered as a clean list; best for mantras/verses).
//
// Content transcribed from "JAIN POOJAS.pdf". Text is in Hindi (Devanagari);
// Gujarati/Sanskrit/English are left blank for now except where the source
// provided them (e.g. Mahaveerashtak Stotra includes Sanskrit).

// Category metadata: controls the filter chips (in this order) and the badge
// label shown on each item. Add a new category here and it appears everywhere.
const CATEGORIES = {
  aarti: "Aarti",
  stavan: "Stavan",
  stuti: "Stuti",
  chalisa: "Chalisa",
  bhajan: "Bhajan",
  stotra: "Stotra",
  bhavna: "Bhavna",
  paath: "Paath",
  pratikraman: "Pratikraman",
};

const CONTENT = [
  {
    id: "namokar-mantra",
    type: "stuti",
    title: {
      gu: "ણમોકાર મંત્ર",
      hi: "णमोकार मंत्र",
      sa: "",
      en: "Namokar Mantra",
    },
    text: {
      gu: `ણમો અરિહંતાણં
ણમો સિદ્ધાણં
ણમો આયરિયાણં
ણમો ઉવજ્ઝાયાણં
ણમો લોએ સવ્વ સાહૂણં

એસોપંચણમોક્કારો, સવ્વપાવપ્પણાસણો
મંગલા ણં ચ સવ્વેસિં, પડમમ હવઈ મંગલં`,
      hi: `णमो अरिहंताणं
णमो सिद्धाणं
णमो आयरियाणं
णमो उवज्झायाणं
णमो लोए सव्व साहूणं

एसोपंचणमोक्कारो, सव्वपावप्पणासणो
मंगला णं च सव्वेसिं, पडमम हवई मंगलं`,
      sa: "",
      en: `Namo Arihantanam
Namo Siddhanam
Namo Ayariyanam
Namo Uvajjhayanam
Namo Loye Savva Sahunam

Eso Panch Namokaro
Savva Pavappanasano
Mangalanam Cha Savvesim
Padhamam Havai Mangalam`,
    },
    meaning: [
      {
        term: "Namo Arihantanam",
        gloss:
          "I bow in reverence to the Arihants (souls who have conquered inner enemies like anger and greed).",
      },
      {
        term: "Namo Siddhanam",
        gloss:
          "I bow in reverence to the Siddhas (fully liberated and perfect souls).",
      },
      {
        term: "Namo Ayariyanam",
        gloss:
          "I bow in reverence to the Acharyas (supreme leaders of the monastic order).",
      },
      {
        term: "Namo Uvajjhayanam",
        gloss:
          "I bow in reverence to the Upadhyayas (spiritual teachers and preceptors).",
      },
      {
        term: "Namo Loye Savva Sahunam",
        gloss:
          "I bow in reverence to all Sadhus and Sadhvis (monks and nuns) in the universe.",
      },
      { term: "Eso Panch Namoyaro", gloss: "This five-fold salutation." },
      {
        term: "Savva Pavappanasano",
        gloss: "Destroys all sins and negative karma.",
      },
      {
        term: "Mangalanam Cha Savvesim",
        gloss: "And amongst all auspicious and blessed things.",
      },
      {
        term: "Padhamam Havai Mangalam",
        gloss: "Is the first and foremost auspicious one.",
      },
    ],
  },
  {
    id: "prabhu-patit-pavan-stuti",
    type: "stuti",
    title: {
      gu: "પ્રભુ પતિત પાવન-સ્તુતિ",
      hi: "प्रभु पतित पावन-स्तुति",
      sa: "",
      en: "Prabhu Patit Pavan Stuti",
    },
    text: {
      gu: `પ્રભુ પતિત-પાવન મૈં અપાવન, ચરણ આયો સરન જી।
યો વિરદ આપ નિહાર સ્વામી, મેટો જામન મરન જી ॥૧॥

તુમ ના પિછાન્યા આન માન્યા, દેવ વિવિધ પ્રકાર જી।
યા બુદ્ધિ સેતી નિજ ન જાન્યો, ભ્રમ ગિન્યા હિતકાર જી ॥૨॥

ભવ-વિકટ-વન મેં કર્મ-વૈરી, જ્ઞાનધન મેરો હર્યો।
સબ ઇષ્ટ ભૂલ્યો ભ્રષ્ટ હોય, અનિષ્ટ-ગતિ ધરતો ફિર્યો ॥૩॥

ધન ઘડી યો ધન દિવસ યો હી, ધન જનમ મેરો ભયો।
અબ ભાગ મેરો ઉદય આયો, દરશ પ્રભુ કો લખ લયો

છવિ વીતરાગી નગ્ન મુદ્રા, દૃષ્ટિ નાસા પે ધરે।
વસુ પ્રાતિહાર્ય અનંત ગુણજુત, કોટિ રવિ છવિ કો હરેં ॥૫॥

મિટ ગયો તિમિર મિથ્યાત્વ મેરો, ઉદય રવિ આતમ ભયો।
મો ઉર હરષ ઐસો ભયો, મનુ રંક ચિંતામણિ લહ્યો ॥૬॥

મૈં હાથ જોડ નવાય મસ્તક, વીનઊઁ તુવ ચરન જી।
સર્વોત્કૃષ્ટ ત્રિલોકપતિ જિન, સુનહુ તારણ તરણ જી ॥૭॥

જાચૂઁ નહીં સુર-વાસ પુનિ, નર-રાજ પરિજન સાથ જી।
'બુધ' જાચહૂઁ તુવ ભક્તિ ભવ ભવ, દીજિએ શિવનાથજી ॥૮॥`,
      hi: `प्रभु पतित-पावन मैं अपावन, चरण आयो सरन जी।
यो विरद आप निहार स्वामी, मेटो जामन मरन जी ॥१॥

तुम ना पिछान्या आन मान्या, देव विविध प्रकार जी।
या बुद्धि सेती निज न जान्यो, भ्रम गिन्या हितकार जी ॥२॥

भव-विकट-वन में कर्म-वैरी, ज्ञानधन मेरो हर्यो।
सब इष्ट भूल्यो भ्रष्ट होय, अनिष्ट-गति धरतो फिर्यो ॥३॥

धन घड़ी यो धन दिवस यो ही, धन जनम मेरो भयो।
अब भाग मेरो उदय आयो, दरश प्रभु को लख लयो

छवि वीतरागी नग्न मुद्रा, दृष्टि नासा पे धरे।
वसु प्रातिहार्य अनंत गुणजुत, कोटि रवि छवि को हरें ॥५॥

मिट गयो तिमिर मिथ्यात्व मेरो, उदय रवि आतम भयो।
मो उर हरष ऐसो भयो, मनु रंक चिंतामणि लह्यो ॥६॥

मैं हाथ जोड़ नवाय मस्तक, वीनऊँ तुव चरन जी।
सर्वोत्कृष्ट त्रिलोकपति जिन, सुनहु तारण तरण जी ॥७॥

जाचूँ नहीं सुर-वास पुनि, नर-राज परिजन साथ जी।
'बुध' जाचहूँ तुव भक्ति भव भव, दीजिए शिवनाथजी ॥८॥`,
      sa: "",
      en: `Prabhu patit-paavan main apaavan, charan aayo saran ji.
Yo virad aap nihaar swaami, meto jaaman maran ji ||1||

Tum na pichhaanya aan maanya, dev vividh prakaar ji.
Ya buddhi seti nij na jaanyo, bhram ginya hitkaar ji ||2||

Bhav-vikat-van mein karm-vairi, gyaandhan mero haryo.
Sab isht bhoolyo bhrasht hoy, anisht-gati dharto phiryo ||3||

Dhan ghadi yo dhan divas yo hi, dhan janam mero bhayo.
Ab bhaag mero uday aayo, darash prabhu ko lakh layo

Chhavi veetraagi nagn mudra, drishti naasa pe dhare.
Vasu praatihaary anant gunjut, koti ravi chhavi ko haren ||5||

Mit gayo timir mithyaatv mero, uday ravi aatam bhayo.
Mo ur harash aiso bhayo, manu rank chintaamani lahyo ||6||

Main haath jod navaay mastak, veenaun tuv charan ji.
Sarvotkrisht trilokpati jin, sunahu taaran taran ji ||7||

Jaachun nahin sur-vaas puni, nar-raaj parijan saath ji.
'Budh' jaachahun tuv bhakti bhav bhav, deejiye shivnaath ji ||8||`,
    },
  },
  {
    id: "meri-bhavna",
    type: "bhavna",
    title: {
      gu: "મેરી ભાવના",
      hi: "मेरी भावना",
      sa: "",
      en: "Meri Bhavna",
    },
    text: {
      gu: `જિસને રાગ દ્વેષ કામાદિક જીતે સબ જગ જાન લિયા
સબ જીવોંકો મોક્ષમાર્ગ કા નિસ્પૃહ હો ઉપદેશ દિયા
બુદ્ધ, વીર, જિન, હરિ, હર, બ્રમ્હા, યા ઉસકો સ્વાધીન કહો
ભક્તિ-ભાવ સે પ્રેરિત હો યહ ચિત્ત ઉસી મેં લીન રહો ॥1॥

વિષયોં કી આશા નહિં જિનકે સામ્ય ભાવ ધન રખતે હૈં
નિજ પરકે હિત-સાધન મેં જો નિશ દિન તત્પર રહતે હૈં
સ્વાર્થ ત્યાગ કી કઠિન તપસ્યા બિના ખેદ જો કરતે હૈં
ઐસે જ્ઞાની સાધૂ જગત કે દુઃખ સમૂહ કો હરતે હૈં ॥2॥

રહે સદા સત્સંગ ઉન્હી કા ધ્યાન ઉન્હી કા નિત્ય રહે હૈં
ઉન્હી જૈસી ચર્યા મેં યહ ચિત્ત સદા અનુરક્ત રહે હૈં
નહીં સતાઊ કિસી જીવ કો ઝૂઠ કભી નહીં કહા કરૂ
પરધન વનિતા પર ન લુભાઊ, સંતોષામૃત પીયા કરૂ ॥3॥

અહંકાર કા ભાવ ન રખુ નહીં કિસી પર ક્રોધ કરૂ
દેખ દુસરો કી બઢતી કો કભી ન ઇષ્યા ભાવ ધરુ
રહે ભાવના ઐસી મેરી, સરલ સત્ય વ્યવ્હાર કરૂ
બને જહા તક ઇસ જીવન મેં, ઔરો કા ઉપકાર કરૂ ॥4॥

મૈત્રી ભાવ જગત મેં મેરા સબ જીવો સે નિત્ય રહે
દીંન દુખી જીવો પર મેરે ઉર સે કરુના – સ્રોત બહે
દુર્જન ક્રૂર કુમાર્ગ રતો પર ક્ષોભ નહીં મુઝકો આવે
સામ્યભાવ રખુ મેં ઉન પર, ઐસી પરિણતિ હો જાવે ॥5॥

ગુની જનોં કો દેખ હૃદય મેં મેરે પ્રેમ ઉમડ આવે
બને જહાઁ તક ઉનકી સેવા કરકે યહ મન સુખ પાવે
હોઊ નહીં કૃતઘ્ન કભી મેં દ્રોહ ન મેરે ઉર આવે
ગુણ ગ્રહણ કા ભાવ રહે નિત દૃષ્ટી ન દોષોં પર જાવે ॥6॥

કોઈ બુરા કહો યા અચ્છા લક્ષ્મી આવે યા જાવે
લાખોં વર્ષોં તક જીઉ યા મૃત્યુ આજ હી આ જાવે
અથવા કોઈ કૈસા હી ભય યા લાલચ દેને આવે
તો ભી ન્યાય માર્ગ સે મેરા કભી ન પદ ડિગને પાવે ॥7॥

હોકર સુખ મેં મગ્ન ન ફૂલે દુઃખ મેં કભી ન ઘબરાવે
પર્વત નદી શ્મશાન ભયાનક અટવી સે નહીં ભય ખાવે
રહે અડોલ અકંપ નિરંતર યહ મન દ્રિન્તર બન જાવે
ઇસ્ટ વિયોગ અનિસ્ઠ યોગ મેં સહન- શીલતા દિખલાવે ॥8॥

સુખી રહે સબ જીવ જગત કે કોઈ કભી ન ઘબરાવે
બૈર પાપ અભિમાન છોડ જગ નિત્ય નએ મંગલ ગાવે
ઘર ઘર ચર્ચા રહે ધર્મ કી દુષ્કૃત દુષ્કર હો જાવે
જ્ઞાન ચરિત ઉન્નત કર અપના મનુજ જન્મ ફલ સબ પાવે ॥9॥

ઇતિ ભીતી વ્યાપે નહીં જગ મેં વૃષ્ટી સમય પર હુઆ કરે
ધર્મનિસ્ટ હોકર રાજા ભી ન્યાય પ્રજા કા કિયા કરે
રોગ મરી દુર્ભિક્ષ ન ફૈલે પ્રજા શાંતિ સે જિયા કરે
પરમ અહિંસા ધર્મ જગત મેં ફૈલ સર્વ હિત કિયા કરે ॥10॥

ફૈલે પ્રેમ પરસ્પર જગત મેં મોહ દૂર હો રાહ કરે
અપ્રિય કટુક કઠોર શબ્દ નહીં કોઈ મુખ સે કહા કરે
બનકર સબ "યુગવીર" હૃદય સે દેશોંનતી રત રહા કરેં
વસ્તુ સ્વરુપ વિચાર ખુશી સે સબ સંકટ સહા કરે ॥11॥

રહે ભાવના ઐસી મેરી ....`,
      hi: `जिसने राग द्वेष कामादिक जीते सब जग जान लिया
सब जीवोंको मोक्षमार्ग का निस्पृह हो उपदेश दिया
बुद्ध, वीर, जिन, हरि, हर, ब्रम्हा, या उसको स्वाधीन कहो
भक्ति-भाव से प्रेरित हो यह चित्त उसी में लीन रहो ॥1॥

विषयों की आशा नहिं जिनके साम्य भाव धन रखते हैं
निज परके हित-साधन में जो निश दिन तत्पर रहते हैं
स्वार्थ त्याग की कठिन तपस्या बिना खेद जो करते हैं
ऐसे ज्ञानी साधू जगत के दुःख समूह को हरते हैं ॥2॥

रहे सदा सत्संग उन्ही का ध्यान उन्ही का नित्य रहे हैं
उन्ही जैसी चर्या में यह चित्त सदा अनुरक्त रहे हैं
नहीं सताऊ किसी जीव को झूठ कभी नहीं कहा करू
परधन वनिता पर न लुभाऊ, संतोषामृत पीया करू ॥3॥

अहंकार का भाव न रखु नहीं किसी पर क्रोध करू
देख दुसरो की बढती को कभी न इष्या भाव धरु
रहे भावना ऐसी मेरी, सरल सत्य व्यव्हार करू
बने जहा तक इस जीवन में, औरो का उपकार करू ॥4॥

मैत्री भाव जगत में मेरा सब जीवो से नित्य रहे
दींन दुखी जीवो पर मेरे उर से करुना – स्रोत बहे
दुर्जन क्रूर कुमार्ग रतो पर क्षोभ नहीं मुझको आवे
साम्यभाव रखु में उन पर, ऐसी परिणति हो जावे ॥5॥

गुनी जनों को देख हृदय में मेरे प्रेम उमड़ आवे
बने जहाँ तक उनकी सेवा करके यह मन सुख पावे
होऊ नहीं कृतघ्न कभी में द्रोह न मेरे उर आवे
गुण ग्रहण का भाव रहे नित दृष्टी न दोषों पर जावे ॥6॥

कोई बुरा कहो या अच्छा लक्ष्मी आवे या जावे
लाखों वर्षों तक जीउ या मृत्यु आज ही आ जावे
अथवा कोई कैसा ही भय या लालच देने आवे
तो भी न्याय मार्ग से मेरा कभी न पद डिगने पावे ॥7॥

होकर सुख में मग्न न फूले दुःख में कभी न घबरावे
पर्वत नदी श्मशान भयानक अटवी से नहीं भय खावे
रहे अडोल अकंप निरंतर यह मन द्रिन्तर बन जावे
इस्ट वियोग अनिस्ठ योग में सहन- शीलता दिखलावे ॥8॥

सुखी रहे सब जीव जगत के कोई कभी न घबरावे
बैर पाप अभिमान छोड़ जग नित्य नए मंगल गावे
घर घर चर्चा रहे धर्म की दुष्कृत दुष्कर हो जावे
ज्ञान चरित उन्नत कर अपना मनुज जन्म फल सब पावे ॥9॥

इति भीती व्यापे नहीं जग में वृष्टी समय पर हुआ करे
धर्मनिस्ट होकर राजा भी न्याय प्रजा का किया करे
रोग मरी दुर्भिक्ष न फैले प्रजा शांति से जिया करे
परम अहिंसा धर्म जगत में फ़ैल सर्व हित किया करे ॥10॥

फैले प्रेम परस्पर जगत में मोह दूर हो राह करे
अप्रिय कटुक कठोर शब्द नहीं कोई मुख से कहा करे
बनकर सब "युगवीर" हृदय से देशोंनती रत रहा करें
वस्तु स्वरुप विचार खुशी से सब संकट सहा करे ॥11॥

रहे भावना ऐसी मेरी ....`,
      sa: "",
      en: `Jisne raag dvesh kaamaadik jeete sab jag jaan liya
Sab jeevon ko mokshamaarg ka nisprih ho updesh diya
Buddh, Veer, Jin, Hari, Har, Brahma, ya usko swaadheen kaho
Bhakti-bhaav se prerit ho yah chitt usi mein leen raho ||1||

Vishayon ki aasha nahin jinke saamya bhaav dhan rakhte hain
Nij par ke hit-saadhan mein jo nish din tatpar rahte hain
Swaarth tyaag ki kathin tapasya bina khed jo karte hain
Aise gyaani saadhu jagat ke dukh samooh ko harte hain ||2||

Rahe sada satsang unhi ka dhyaan unhi ka nitya rahe hain
Unhi jaisi charya mein yah chitt sada anurakt rahe hain
Nahin sataaun kisi jeev ko jhooth kabhi nahin kaha karun
Pardhan vanita par na lubhaaun, santoshaamrit peeya karun ||3||

Ahankaar ka bhaav na rakhun nahin kisi par krodh karun
Dekh dusro ki badhti ko kabhi na ishya bhaav dharun
Rahe bhaavna aisi meri, saral satya vyavhaar karun
Bane jaha tak is jeevan mein, auro ka upkaar karun ||4||

Maitri bhaav jagat mein mera sab jeevo se nitya rahe
Deen dukhi jeevo par mere ur se karuna – srot bahe
Durjan kroor kumaarg rato par kshobh nahin mujhko aave
Saamyabhaav rakhun mein un par, aisi parinati ho jaave ||5||

Guni janon ko dekh hriday mein mere prem umad aave
Bane jahaan tak unki seva karke yah man sukh paave
Hoaun nahin kritaghn kabhi mein droh na mere ur aave
Gun grahan ka bhaav rahe nit drishti na doshon par jaave ||6||

Koi bura kaho ya achchha Lakshmi aave ya jaave
Laakhon varshon tak jeeun ya mrityu aaj hi aa jaave
Athva koi kaisa hi bhay ya laalach dene aave
To bhi nyaay maarg se mera kabhi na pad digne paave ||7||

Hokar sukh mein magn na phoole dukh mein kabhi na ghabraave
Parvat nadi shmashaan bhayaanak atavi se nahin bhay khaave
Rahe adol akamp nirantar yah man drintar ban jaave
Isht viyog anisht yog mein sahan- sheelta dikhlaave ||8||

Sukhi rahe sab jeev jagat ke koi kabhi na ghabraave
Bair paap abhimaan chhod jag nitya nae mangal gaave
Ghar ghar charcha rahe dharm ki dushkrit dushkar ho jaave
Gyaan charit unnat kar apna manuj janm phal sab paave ||9||

Iti bheeti vyaape nahin jag mein vrishti samay par hua kare
Dharmnisht hokar raaja bhi nyaay praja ka kiya kare
Rog mari durbhiksh na phaile praja shaanti se jiya kare
Param ahinsa dharm jagat mein phail sarv hit kiya kare ||10||

Phaile prem paraspar jagat mein moh door ho raah kare
Apriya katuk kathor shabd nahin koi mukh se kaha kare
Bankar sab "Yugveer" hriday se deshonnati rat raha karen
Vastu swaroop vichaar khushi se sab sankat saha kare ||11||

Rahe bhaavna aisi meri ....`,
    },
  },
  {
    id: "nirvan-kand-bhasha",
    type: "paath",
    title: {
      gu: "નિર્વાણ કાંડ ભાષા - સામાયિક પાઠ",
      hi: "निर्वाण कांड भाषा - सामायिक पाठ",
      sa: "",
      en: "Nirvan Kand Bhasha",
    },
    text: {
      gu: `॥દોહા॥
વીતરાગ વંદૌં સદા, ભાવસહિત સિરનાય।
કહું કાંડ નિર્વાણ કી ભાષા સુગમ બનાય॥

અષ્ટાપદ આદીશ્વર સ્વામી, બાસુ પૂજ્ય ચંપાપુરનામી।
નેમિનાથસ્વામી ગિરનાર વંદો, ભાવ ભગતિ ઉરધાર ॥1॥

ચરમ તીર્થંકર ચરમ શરીર, પાવાપુરી સ્વામી મહાવીર।
શિખર સમ્મેદ જિનેસુર બીસ, ભાવ સહિત વંદૌં નિશદીસ ॥2॥

વરદતરાય રૂઇંદ મુનિંદ, સાયરદત્ત આદિગુણવૃંદ।
નગરતારવર મુનિ ઉઠકોડિ, વંદૌં ભાવ સહિત કરજોડિ ॥3॥

શ્રી ગિરનાર શિખર વિખ્યાત, કોડિ બહત્તર અરૂ સૌ સાત।
સંબુ પ્રદુમ્ન કુમાર દ્વૈ ભાય, અનિરુદ્ધ આદિ નમૂં તસુ પાય ॥4॥

રામચંદ્ર કે સુત દ્વૈ વીર, લાડનરિંદ આદિ ગુણ ધીર।
પાંચકોડિ મુનિ મુક્તિ મંઝાર, પાવાગિરિ બંદૌ નિરધાર ॥5॥

પાંડવ તીન દ્રવિડ રાજાન આઠકોડિ મુનિ મુક્તિપયાન।
શ્રી શત્રુંજય ગિરિ કે સીસ, ભાવ સહિત વંદૌ નિશદીસ ॥6॥

જે બલભદ્ર મુક્તિ મેં ગએ, આઠકોડિ મુનિ ઔરહુ ભયે।
શ્રી ગજપંથ શિખર સુવિશાલ, તિનકે ચરણ નમૂં તિહૂં કાલ ॥7॥

રામ હણૂ સુગ્રીવ સુડીલ, ગવગવાખ્ય નીલમહાનીલ।
કોડિ નિણ્યાન્વે મુક્તિ પયાન, તુંગીગિરી વંદૌ ધરિધ્યાન ॥8॥

નંગ અનંગ કુમાર સુજાન, પાંચ કોડિ અરૂ અર્ધ પ્રમાન।
મુક્તિ ગએ સોનાગિરિ શીશ, તે વંદૌ ત્રિભુવનપતિ ઇસ ॥9॥

રાવણ કે સુત આદિકુમાર, મુક્તિ ગએ રેવાતટ સાર।
કોડિ પંચ અરૂ લાખ પચાસ તે વંદૌ ધરિ પરમ હુલાસ। ।10॥

રેવા નદી સિદ્ધવરકૂટ, પશ્ચિમ દિશા દેહ જહાં છૂટ।
દ્વૈ ચક્રી દશ કામકુમાર, ઉઠકોડિ વંદૌં ભવપાર। ।11॥

બડવાની બડનયર સુચંગ, દક્ષિણ દિશિ ગિરિચૂલ ઉતંગ।
ઇંદ્રજીત અરૂ કુંભ જુ કર્ણ, તે વંદૌ ભવસાગર તર્ણ। ।12॥

સુવરણ ભદ્ર આદિ મુનિ ચાર, પાવાગિરિવર શિખર મંઝાર।
ચેલના નદી તીર કે પાસ, મુક્તિ ગયૈં બંદૌં નિત તાસ। ॥13॥

ફલહોડી બડગ્રામ અનૂપ, પશ્ચિમ દિશા દ્રોણગિરિ રૂપ।
ગુરુ દત્તાદિ મુનિસર જહાં, મુક્તિ ગએ બંદૌં નિત તહાં। ।14॥

બાલી મહાબાલી મુનિ દોય, નાગકુમાર મિલે ત્રય હોય।
શ્રી અષ્ટાપદ મુક્તિ મંઝાર, તે બંદૌં નિતસુરત સંભાર। ।15॥

અચલાપુર કી દશા ઈસાન, જહાં મેંઢગિરિ નામ પ્રધાન।
સાડે તીન કોડિ મુનિરાય, તિનકે ચરણ નમૂં ચિતલાય। ।16॥

વંશસ્થલ વન કે ઢિગ હોય, પશ્ચિમ દિશા કુન્થુગિરિ સોય।
કુલભૂષણ દિશિભૂષણ નામ, તિનકે ચરણનિ કરૂં પ્રણામ। ।17॥

જશરથરાજા કે સુત કહે, દેશ કલિંગ પાંચ સો લહે।
કોટિશિલા મુનિકોટિ પ્રમાન, વંદન કરૂં જૌર જુગપાન। ।18॥

સમવસરણ શ્રી પાર્શ્વજિનેંદ્ર, રેસિંદીગિરિ નયનાનંદ।
વરદત્તાદિ પંચ ઋષિરાજ, તે વંદૌ નિત ધરમ જિહાજ। ।19॥

સેઠ સુદર્શન પટના જાન, મથુરા સે જમ્બૂ નિર્વાણ।
ચરમ કેવલિ પંચમકાલ, તે વંદૌં નિત દીનદયાલ। ॥20॥

તીન લોક કે તીરથ જહાં, નિત પ્રતિ વંદન કીજે તહાં।
મનવચકાય સહિત સિરનાય, વંદન કરહિં ભવિક ગુણગાય। ॥21॥

સંવત્ સતરહસો ઇકતાલ, આશ્વિન સુદી દશમી સુવિશાલ।
ભૈયા વંદન કરહિં ત્રિકાલ, જય નિર્વાણ કાંડ ગુણમાલ। ॥22॥`,
      hi: `॥दोहा॥
वीतराग वंदौं सदा, भावसहित सिरनाय।
कहुं कांड निर्वाण की भाषा सुगम बनाय॥

अष्टापद आदीश्वर स्वामी, बासु पूज्य चंपापुरनामी।
नेमिनाथस्वामी गिरनार वंदो, भाव भगति उरधार ॥1॥

चरम तीर्थंकर चरम शरीर, पावापुरी स्वामी महावीर।
शिखर सम्मेद जिनेसुर बीस, भाव सहित वंदौं निशदीस ॥2॥

वरदतराय रूइंद मुनिंद, सायरदत्त आदिगुणवृंद।
नगरतारवर मुनि उठकोडि, वंदौं भाव सहित करजोड़ि ॥3॥

श्री गिरनार शिखर विख्यात, कोड़ि बहत्तर अरू सौ सात।
संबु प्रदुम्न कुमार द्वै भाय, अनिरुद्ध आदि नमूं तसु पाय ॥4॥

रामचंद्र के सुत द्वै वीर, लाडनरिंद आदि गुण धीर।
पांचकोड़ि मुनि मुक्ति मंझार, पावागिरि बंदौ निरधार ॥5॥

पांडव तीन द्रविड़ राजान आठकोड़ि मुनि मुक्तिपयान।
श्री शत्रुंजय गिरि के सीस, भाव सहित वंदौ निशदीस ॥6॥

जे बलभद्र मुक्ति में गए, आठकोड़ि मुनि औरहु भये।
श्री गजपंथ शिखर सुविशाल, तिनके चरण नमूं तिहूं काल ॥7॥

राम हणू सुग्रीव सुडील, गवगवाख्य नीलमहानील।
कोड़ि निण्यान्वे मुक्ति पयान, तुंगीगिरी वंदौ धरिध्यान ॥8॥

नंग अनंग कुमार सुजान, पांच कोड़ि अरू अर्ध प्रमान।
मुक्ति गए सोनागिरि शीश, ते वंदौ त्रिभुवनपति इस ॥9॥

रावण के सुत आदिकुमार, मुक्ति गए रेवातट सार।
कोड़ि पंच अरू लाख पचास ते वंदौ धरि परम हुलास। ।10॥

रेवा नदी सिद्धवरकूट, पश्चिम दिशा देह जहां छूट।
द्वै चक्री दश कामकुमार, उठकोड़ि वंदौं भवपार। ।11॥

बड़वानी बड़नयर सुचंग, दक्षिण दिशि गिरिचूल उतंग।
इंद्रजीत अरू कुंभ जु कर्ण, ते वंदौ भवसागर तर्ण। ।12॥

सुवरण भद्र आदि मुनि चार, पावागिरिवर शिखर मंझार।
चेलना नदी तीर के पास, मुक्ति गयैं बंदौं नित तास। ॥13॥

फलहोड़ी बड़ग्राम अनूप, पश्चिम दिशा द्रोणगिरि रूप।
गुरु दत्तादि मुनिसर जहां, मुक्ति गए बंदौं नित तहां। ।14॥

बाली महाबाली मुनि दोय, नागकुमार मिले त्रय होय।
श्री अष्टापद मुक्ति मंझार, ते बंदौं नितसुरत संभार। ।15॥

अचलापुर की दशा ईसान, जहां मेंढ़गिरि नाम प्रधान।
साड़े तीन कोड़ि मुनिराय, तिनके चरण नमूं चितलाय। ।16॥

वंशस्थल वन के ढिग होय, पश्चिम दिशा कुन्थुगिरि सोय।
कुलभूषण दिशिभूषण नाम, तिनके चरणनि करूं प्रणाम। ।17॥

जशरथराजा के सुत कहे, देश कलिंग पांच सो लहे।
कोटिशिला मुनिकोटि प्रमान, वंदन करूं जौर जुगपान। ।18॥

समवसरण श्री पार्श्वजिनेंद्र, रेसिंदीगिरि नयनानंद।
वरदत्तादि पंच ऋषिराज, ते वंदौ नित धरम जिहाज। ।19॥

सेठ सुदर्शन पटना जान, मथुरा से जम्बू निर्वाण।
चरम केवलि पंचमकाल, ते वंदौं नित दीनदयाल। ॥20॥

तीन लोक के तीरथ जहां, नित प्रति वंदन कीजे तहां।
मनवचकाय सहित सिरनाय, वंदन करहिं भविक गुणगाय। ॥21॥

संवत् सतरहसो इकताल, आश्विन सुदी दशमी सुविशाल।
भैया वंदन करहिं त्रिकाल, जय निर्वाण कांड गुणमाल। ॥22॥`,
      sa: "",
      en: `||Doha||
Veetraag vandaun sada, bhaavsahit sirnaay.
Kahun kaand nirvaan ki bhaasha sugam banaay||

Ashtaapad Aadeeshwar Swaami, Baasu Poojya Champaapur naami.
Neminaath Swaami Girnaar vando, bhaav bhagati urdhaar ||1||

Charam Teerthankar charam shareer, Paavaapuri Swaami Mahaaveer.
Shikhar Sammed Jinesur bees, bhaav sahit vandaun nishdees ||2||

Vardataraay rooind munind, Saayardatt aadigunvrind.
Nagartaarvar muni uthkodi, vandaun bhaav sahit karjodi ||3||

Shri Girnaar shikhar vikhyaat, kodi bahattar aru sau saat.
Sambu Pradumn Kumaar dvai bhaay, Aniruddh aadi namoon tasu paay ||4||

Raamchandra ke sut dvai veer, Laadnarind aadi gun dheer.
Paanch kodi muni mukti manjhaar, Paavaagiri bandau nirdhaar ||5||

Paandav teen Dravid raajaan aath kodi muni mukti payaan.
Shri Shatrunjay giri ke sees, bhaav sahit vandau nishdees ||6||

Je Balabhadra mukti mein gae, aath kodi muni aurahu bhaye.
Shri Gajpanth shikhar suvishaal, tinke charan namoon tihoon kaal ||7||

Raam Hanu Sugreev sudeel, Gavgavaakhya Neel Mahaaneel.
Kodi ninyaanve mukti payaan, Tungeegiri vandau dhari dhyaan ||8||

Nang Anang Kumaar sujaan, paanch kodi aru ardh pramaan.
Mukti gae Sonaagiri sheesh, te vandau tribhuvanpati is ||9||

Raavan ke sut Aadikumaar, mukti gae Revaatat saar.
Kodi panch aru laakh pachaas te vandau dhari param hulaas. ||10||

Reva nadi Siddhavarkoot, pashchim disha deh jahaan chhoot.
Dvai chakri dash Kaamkumaar, uthkodi vandaun bhavpaar. ||11||

Badvaani badnayar suchang, dakshin dishi girichool utang.
Indrajeet aru Kumbh ju Karn, te vandau bhavsaagar tarn. ||12||

Suvaran Bhadra aadi muni chaar, Paavaagirivar shikhar manjhaar.
Chelna nadi teer ke paas, mukti gayain bandaun nit taas. ||13||

Phalhodi Badgraam anoop, pashchim disha Dronagiri roop.
Guru Dattaadi munisar jahaan, mukti gae bandaun nit tahaan. ||14||

Baali Mahaabaali muni doy, Naagkumaar mile tray hoy.
Shri Ashtaapad mukti manjhaar, te bandaun nit surat sanbhaar. ||15||

Achalaapur ki dasha eesaan, jahaan Mendhgiri naam pradhaan.
Saade teen kodi muniraay, tinke charan namoon chitlaay. ||16||

Vanshasthal van ke dhig hoy, pashchim disha Kunthugiri soy.
Kulbhooshan Dishibhooshan naam, tinke charanani karoon pranaam. ||17||

Jasharath raaja ke sut kahe, desh Kaling paanch so lahe.
Kotishila muni koti pramaan, vandan karoon jaur jugpaan. ||18||

Samavasaran Shri Paarshvajinendra, Resindeegiri nayanaanand.
Vardattaadi panch rishiraaj, te vandau nit dharam jihaaj. ||19||

Seth Sudarshan Patna jaan, Mathura se Jamboo nirvaan.
Charam kevali panchamkaal, te vandaun nit deendayaal. ||20||

Teen lok ke teerath jahaan, nit prati vandan keeje tahaan.
Man-vachan-kaay sahit sirnaay, vandan karahin bhavik gungaay. ||21||

Sanvat satrah sau iktaal, Aashvin sudi dashami suvishaal.
Bhaiya vandan karahin trikaal, jay Nirvaan Kaand gunmaal. ||22||`,
    },
  },
  {
    id: "barah-bhavna",
    type: "bhavna",
    title: {
      gu: "બારહ ભાવના (રાજા રાણા છત્રપતિ)",
      hi: "बारह भावना (राजा राणा छत्रपति)",
      sa: "",
      en: "Barah Bhavna",
    },
    text: {
      gu: `રાજા રાણા છત્રપતિ, હાથિન કે અસવાર।
મરના સબકો એક દિન, અપની-અપની બાર॥

દલ બલ દેવી દેવતા, માત-પિતા પરિવાર।
મરતી બિરિયાઁ જીવ કો, કોઊ ન રાખન હાર॥

દામ બિના નિર્ધન દુખી, તૃષ્ણા વશધનવાન।
કહૂઁ ન સુખ સંસાર મેં, સબ જગ દેખ્યો છાન॥

આપ અકેલા અવતરે, મરૈઅકેલા હોય।
યો કબહૂઁ ઇસ જીવ કો, સાથી સગા ન કોય॥

જહાઁ દેહ અપની નહીં, તહાઁ ન અપના કોય।
ઘર સમ્પત્તિ પર પ્રગટ યે, પર હૈં પરિજન લોય॥

દિપૈ ચામ-ચાદરમઢી, હાડ પીંજરા દેહ।
ભીતર યા સમ જગત મેં, ઔર નહીં ઘિન ગેહ॥

મોહ નીંદકે જોર, જગવાસી ઘૂમૈં સદા।
કર્મ ચોર ચહુઁ ઓર, સરવસ લૂટૈં સુધ નહીં॥

સત્ગુરુ દેય જગાય, મોહ નીંદ જબ ઉપશમૈં।
તબ કછુ બનહિં ઉપાય, કર્મ ચોર આવત રુકૈં॥

જ્ઞાન-દીપ તપ-તેલ ભર, ઘર શોધૈ ભ્રમ છોર।
યા વિધિ બિન નિકસૈં નહીં, પૈઠે પૂરબચોર॥

પંચ મહાવ્રત સંચરણ, સમિતિ પંચ પરકાર।
પ્રબલ પંચ ઇન્દ્રિય વિજય, ધારનિર્જરા સાર॥

ચૌદહ રાજુ ઉતંગ નભ, લોક પુરુષ સંઠાન।
તામેં જીવ અનાદિતૈં, ભરમત હૈં બિન જ્ઞાન॥

ધન કન કંચન રાજસુખ, સબહિ સુલભકર જાન।
દુર્લભ હૈ સંસાર મેં, એક જથારથ જ્ઞાન॥

જાઁચે સુર-તરુ દેય સુખ, ચિન્તત ચિન્તા રૈન।
બિન જાઁચે બિન ચિન્તયે, ધર્મ સકલ સુખ દૈન॥`,
      hi: `राजा राणा छत्रपति, हाथिन के असवार।
मरना सबको एक दिन, अपनी-अपनी बार॥

दल बल देवी देवता, मात-पिता परिवार।
मरती बिरियाँ जीव को, कोऊ न राखन हार॥

दाम बिना निर्धन दुखी, तृष्णा वशधनवान।
कहूँ न सुख संसार में, सब जग देख्यो छान॥

आप अकेला अवतरे, मरैअकेला होय।
यो कबहूँ इस जीव को, साथी सगा न कोय॥

जहाँ देह अपनी नहीं, तहाँ न अपना कोय।
घर सम्पत्ति पर प्रगट ये, पर हैं परिजन लोय॥

दिपै चाम-चादरमढ़ी, हाड़ पींजरा देह।
भीतर या सम जगत में, और नहीं घिन गेह॥

मोह नींदके जोर, जगवासी घूमैं सदा।
कर्म चोर चहुँ ओर, सरवस लूटैं सुध नहीं॥

सत्गुरु देय जगाय, मोह नींद जब उपशमैं।
तब कछु बनहिं उपाय, कर्म चोर आवत रुकैं॥

ज्ञान-दीप तप-तेल भर, घर शोधै भ्रम छोर।
या विधि बिन निकसैं नहीं, पैठे पूरबचोर॥

पंच महाव्रत संचरण, समिति पंच परकार।
प्रबल पंच इन्द्रिय विजय, धारनिर्जरा सार॥

चौदह राजु उतंग नभ, लोक पुरुष संठान।
तामें जीव अनादितैं, भरमत हैं बिन ज्ञान॥

धन कन कंचन राजसुख, सबहि सुलभकर जान।
दुर्लभ है संसार में, एक जथारथ ज्ञान॥

जाँचे सुर-तरु देय सुख, चिन्तत चिन्ता रैन।
बिन जाँचे बिन चिन्तये, धर्म सकल सुख दैन॥`,
      sa: "",
      en: `Raaja raana chhatrapati, haathin ke asvaar.
Marna sabko ek din, apni-apni baar||

Dal bal devi devta, maat-pita parivaar.
Marti biriyaan jeev ko, kou na raakhan haar||

Daam bina nirdhan dukhi, trishna vash dhanvaan.
Kahun na sukh sansaar mein, sab jag dekhyo chhaan||

Aap akela avtare, marai akela hoy.
Yo kabahun is jeev ko, saathi saga na koy||

Jahaan deh apni nahin, tahaan na apna koy.
Ghar sampatti par pragat ye, par hain parijan loy||

Dipai chaam-chaadar madhi, haad peenjra deh.
Bheetar ya sam jagat mein, aur nahin ghin geh||

Moh neend ke jor, jagvaasi ghoomain sada.
Karm chor chahun or, sarvas lootain sudh nahin||

Satguru dey jagaay, moh neend jab upshamain.
Tab kachhu banahin upaay, karm chor aavat rukain||

Gyaan-deep tap-tel bhar, ghar shodhai bhram chhor.
Ya vidhi bin niksain nahin, paithe poorab chor||

Panch mahaavrat sancharan, samiti panch parkaar.
Prabal panch indriya vijay, dhaar nirjara saar||

Chaudah raaju utang nabh, lok purush santhaan.
Taamein jeev anaadi tain, bharmat hain bin gyaan||

Dhan kan kanchan raajsukh, sabahi sulabh kar jaan.
Durlabh hai sansaar mein, ek jathaarath gyaan||

Jaanche sur-taru dey sukh, chintat chinta rain.
Bin jaanche bin chintaye, dharm sakal sukh dain||`,
    },
  },
  {
    id: "parshwanath-chalisa",
    type: "chalisa",
    title: {
      gu: "શ્રી પાર્શ્વનાથ ચાલીસા",
      hi: "श्री पार्श्वनाथ चालीसा",
      sa: "",
      en: "Shri Parshwanath Chalisa",
    },
    text: {
      gu: `શીશ નવા અરિહંત કો, સિદ્ધન કરૂઁ પ્રણામ।
ઉપાધ્યાય આચાર્ય કા લે સુખકારી નામ॥
સર્વ સાધુ ઔર સરસ્વતી, જિન મંદિર સુખકાર।
અહિચ્છત્ર ઔર પાર્શ્વ કો, મન મંદિર મેં ધાર॥

પારસનાથ જગત હિતકારી, હો સ્વામી તુમ વ્રત કે ધારી।
સુર નર અસુર કરેં તુમ સેવા, તુમ હી સબ દેવન કે દેવા॥

તુમસે કરમ શત્રુ ભી હારા, તુમ કીના જગ કા નિસ્તારા।
અશ્વસેન કે રાજદુલારે, વામા કી આઁખોં કે તારે।

કાશી જી કે સ્વામિ કહાયે, સારી પરજા મૌજ ઉડાયે।
ઇક દિન સબ મિત્રોં કો લેકે, સૈર કરન કો વન મેં પહુઁચે।

હાથી પર કસકર અમ્બારી, ઇક જંગલ મેં ગઈ સવારી।

એક તપસ્વી દેખ વહાઁ પર, ઉસસે બોલે વચન સુનાકર।
તપસી! તુમ ક્યોં પાપ કમાતે, ઇસ લક્કડ મેં જીવ જલાતે।

તપસી તભી કુદાલ ઉઠાયા, ઉસ લક્કડ કો ચીર ગિરાયા।
નિકલે નાગ-નાગની કારે, મરને કે થે નિકટ બિચારે।

રહમ પ્રભૂ કે દિલ મેં આયા, તભી મંત્ર નવકાર સુનાયા।
મરકર વો પાતાલ સિધાયે, પદ્માવતિ ધરણેન્દ્ર કહાયે।

તપસી મરકર દેવ કહાયા, નામ કમઠ ગ્રંથોં મેં ગાયા।
એક સમય શ્રી પારસ સ્વામી, રાજ છોડકર વન કી ઠાની।

તપ કરતે થે ધ્યાન લગાએ, ઇક દિન કમઠ વહાઁ પર આયે।
ફૌરન હી પ્રભુ કો પહિચાના, બદલા લેના દિલ મેં ઠાના।

બહુત અધિક બારિશ બરસાઈ, બાદલ ગરજે બિજલી ગિરાઈ।
બહુત અધિક પત્થર બરસાયે, સ્વામી તન કો નહીં હિલાયે।

પદ્માવતિ ધરણેન્દ્ર ભી આયે, પ્રભુ કી સેવા મેં ચિત લાયે।
પદ્માવતિ ને ફન ફૈલાયા, ઉસ પર સ્વામી કો બૈઠાયા।

ધરણેન્દ્ર ને ફન ફૈલાયા, પ્રભુ કે સર પર છત્ર બનાયા।
કર્મનાશ પ્રભુ જ્ઞાન ઉપાયા, સમોશરણ દેવેન્દ્ર રચાયા।

યહી જગહ અહિચ્છત્ર કહાયે, પાત્રકેશરી જહાઁ પર આયે।
શિષ્ય પાઁચ સૌ સંગ વિદ્વાના, જિનકો જાને સકલ જહાના।

પાર્શ્વનાથ કા દર્શન પાયા, સબને જૈન ધરમ અપનાયા।
અહિચ્છત્ર શ્રી સુન્દર નગરી, જહાઁ સુખી થી પરજા સગરી।

રાજા શ્રી વસુપાલ કહાયે, વો ઇક દિન જિનમંદિર બનવાયે।
પ્રતિમા પર પાલિશ કરવાયા, ફૌરન ઇક મિસ્ત્રી બુલવાયા।

વહ મિસ્તરી માંસ ખાતા થા, ઇસસે પાલિશ ગિર જાતા થા।
મુનિ ને ઉસે ઉપાય બતાયા, પારસ દર્શન વ્રત દિલવાયા।

મિસ્ત્રી ને વ્રત પાલન કીના, ફૌરન હી રંગ ચઢા નવીના।
ગદર સતાવન કા કિસ્સા હૈ, ઇક માલી કો યોં લિક્ખા હૈ।

માલી ઇક પ્રતિમા કો લેકર, ઝટ છુપ ગયા કુએ કે અંદર।
ઉસ પાની કા અતિશય ભારી, દૂર હોય સારી બીમારી।

જો અહિચ્છત્ર હૃદય સે ધ્યાવે, સો નર ઉત્તમ પદવી પાવે।
પુત્ર સંપદા કી બઢતી હો, પાપોં કી ઇક દમ ઘટતી હો।

હૈ તહસીલ આંવલા ભારી, સ્ટેશન પર મિલે સવારી।
રામનગર એક ગ્રામ બરાબર, જિસકો જાને સબ નારી નર।
ચાલીસે કો 'ચન્દ્ર' બનાયે, હાથ જોડકર શીશ નવાયે।`,
      hi: `शीश नवा अरिहंत को, सिद्धन करूँ प्रणाम।
उपाध्याय आचार्य का ले सुखकारी नाम॥
सर्व साधु और सरस्वती, जिन मंदिर सुखकार।
अहिच्छत्र और पार्श्व को, मन मंदिर में धार॥

पारसनाथ जगत हितकारी, हो स्वामी तुम व्रत के धारी।
सुर नर असुर करें तुम सेवा, तुम ही सब देवन के देवा॥

तुमसे करम शत्रु भी हारा, तुम कीना जग का निस्तारा।
अश्वसेन के राजदुलारे, वामा की आँखों के तारे।

काशी जी के स्वामि कहाये, सारी परजा मौज उड़ाये।
इक दिन सब मित्रों को लेके, सैर करन को वन में पहुँचे।

हाथी पर कसकर अम्बारी, इक जंगल में गई सवारी।

एक तपस्वी देख वहाँ पर, उससे बोले वचन सुनाकर।
तपसी! तुम क्यों पाप कमाते, इस लक्कड़ में जीव जलाते।

तपसी तभी कुदाल उठाया, उस लक्कड़ को चीर गिराया।
निकले नाग-नागनी कारे, मरने के थे निकट बिचारे।

रहम प्रभू के दिल में आया, तभी मंत्र नवकार सुनाया।
मरकर वो पाताल सिधाये, पद्मावति धरणेन्द्र कहाये।

तपसी मरकर देव कहाया, नाम कमठ ग्रंथों में गाया।
एक समय श्री पारस स्वामी, राज छोड़कर वन की ठानी।

तप करते थे ध्यान लगाए, इक दिन कमठ वहाँ पर आये।
फौरन ही प्रभु को पहिचाना, बदला लेना दिल में ठाना।

बहुत अधिक बारिश बरसाई, बादल गरजे बिजली गिराई।
बहुत अधिक पत्थर बरसाये, स्वामी तन को नहीं हिलाये।

पद्मावति धरणेन्द्र भी आये, प्रभु की सेवा में चित लाये।
पद्मावति ने फन फैलाया, उस पर स्वामी को बैठाया।

धरणेन्द्र ने फन फैलाया, प्रभु के सर पर छत्र बनाया।
कर्मनाश प्रभु ज्ञान उपाया, समोशरण देवेन्द्र रचाया।

यही जगह अहिच्छत्र कहाये, पात्रकेशरी जहाँ पर आये।
शिष्य पाँच सौ संग विद्वाना, जिनको जाने सकल जहाना।

पार्श्वनाथ का दर्शन पाया, सबने जैन धरम अपनाया।
अहिच्छत्र श्री सुन्दर नगरी, जहाँ सुखी थी परजा सगरी।

राजा श्री वसुपाल कहाये, वो इक दिन जिनमंदिर बनवाये।
प्रतिमा पर पालिश करवाया, फौरन इक मिस्त्री बुलवाया।

वह मिस्तरी मांस खाता था, इससे पालिश गिर जाता था।
मुनि ने उसे उपाय बताया, पारस दर्शन व्रत दिलवाया।

मिस्त्री ने व्रत पालन कीना, फौरन ही रंग चढ़ा नवीना।
गदर सतावन का किस्सा है, इक माली को यों लिक्खा है।

माली इक प्रतिमा को लेकर, झट छुप गया कुए के अंदर।
उस पानी का अतिशय भारी, दूर होय सारी बीमारी।

जो अहिच्छत्र हृदय से ध्यावे, सो नर उत्तम पदवी पावे।
पुत्र संपदा की बढ़ती हो, पापों की इक दम घटती हो।

है तहसील आंवला भारी, स्टेशन पर मिले सवारी।
रामनगर एक ग्राम बराबर, जिसको जाने सब नारी नर।
चालीसे को 'चन्द्र' बनाये, हाथ जोड़कर शीश नवाये।`,
      sa: "",
      en: `Sheesh nava Arihant ko, Siddhan karun pranaam.
Upaadhyaay Aachaarya ka le sukhkaari naam||
Sarv saadhu aur Saraswati, jin mandir sukhkaar.
Ahichchhatra aur Paarshva ko, man mandir mein dhaar||

Paarasnaath jagat hitkaari, ho swaami tum vrat ke dhaari.
Sur nar asur karen tum seva, tum hi sab devan ke deva||

Tumse karam shatru bhi haara, tum keena jag ka nistaara.
Ashvasen ke raajdulaare, Vaama ki aankhon ke taare.

Kaashi ji ke swaami kahaaye, saari parja mauj udaaye.
Ik din sab mitron ko leke, sair karan ko van mein pahunche.

Haathi par kaskar ambaari, ik jangal mein gai savaari.

Ek tapasvi dekh vahaan par, usse bole vachan sunaakar.
Tapsi! tum kyon paap kamaate, is lakkad mein jeev jalaate.

Tapsi tabhi kudaal uthaaya, us lakkad ko cheer giraaya.
Nikle naag-naagni kaare, marne ke the nikat bichaare.

Rahm prabhu ke dil mein aaya, tabhi mantra Navkaar sunaaya.
Markar vo paataal sidhaaye, Padmaavati Dharnendra kahaaye.

Tapsi markar dev kahaaya, naam Kamath granthon mein gaaya.
Ek samay Shri Paaras Swaami, raaj chhodkar van ki thaani.

Tap karte the dhyaan lagaaye, ik din Kamath vahaan par aaye.
Fauran hi prabhu ko pahichaana, badla lena dil mein thaana.

Bahut adhik baarish barsaai, baadal garje bijli giraai.
Bahut adhik patthar barsaaye, swaami tan ko nahin hilaaye.

Padmaavati Dharnendra bhi aaye, prabhu ki seva mein chit laaye.
Padmaavati ne fan failaaya, us par swaami ko baithaaya.

Dharnendra ne fan failaaya, prabhu ke sar par chhatra banaaya.
Karmnaash prabhu gyaan upaaya, samoshran devendra rachaaya.

Yahi jagah Ahichchhatra kahaaye, Paatrakeshri jahaan par aaye.
Shishya paanch sau sang vidvaana, jinko jaane sakal jahaana.

Paarshvanaath ka darshan paaya, sabne Jain dharam apnaaya.
Ahichchhatra Shri sundar nagri, jahaan sukhi thi parja sagri.

Raaja Shri Vasupaal kahaaye, vo ik din jinmandir banvaaye.
Pratima par paalish karvaaya, fauran ik mistri bulvaaya.

Vah mistri maans khaata tha, isse paalish gir jaata tha.
Muni ne use upaay bataaya, Paaras darshan vrat dilvaaya.

Mistri ne vrat paalan keena, fauran hi rang chadha naveena.
Gadar sattaavan ka kissa hai, ik maali ko yon likkha hai.

Maali ik pratima ko lekar, jhat chhup gaya kue ke andar.
Us paani ka atishay bhaari, door hoy saari beemaari.

Jo Ahichchhatra hriday se dhyaave, so nar uttam padvi paave.
Putra sampada ki badhti ho, paapon ki ik dam ghatti ho.

Hai tehsil Aanvla bhaari, station par mile savaari.
Raamnagar ek graam baraabar, jisko jaane sab naari nar.
Chaalise ko 'Chandra' banaaye, haath jodkar sheesh navaaye.`,
    },
  },
  {
    id: "shantinath-chalisa",
    type: "chalisa",
    title: {
      gu: "શ્રી શાન્તિનાથ ચાલીસા",
      hi: "श्री शान्तिनाथ चालीसा",
      sa: "",
      en: "Shri Shantinath Chalisa",
    },
    text: {
      gu: `શાન્તિનાથ ભગવાન કા, ચાલીસા સુખકાર॥
મોક્ષ પ્રાપ્તિ કે લિય, કહૂઁ સુનો ચિતધાર॥
ચાલીસા ચાલીસ દિન તક, કહ ચાલીસ બાર॥
બઢે જગત સમ્પન, સુમત અનુપમ શુદ્ધ વિચાર॥

શાન્તિનાથ તુમ શાન્તિનાયક, પણ્ચમ ચક્રી જગ સુખદાયક॥
તુમ હી સોલહવે હો તીર્થંકર, પૂજેં દેવ ભૂપ સુર ગણધર॥
પન્ચાચાર ગુણોંકે ધારી, કર્મ રહિત આઠોં ગુણકારી॥
તુમને મોક્ષ માર્ગ દર્શાયા, નિજ ગુણ જ્ઞાન ભાનુ પ્રકટાયા॥

સ્યાદ્વાદ વિજ્ઞાન ઉચારા, આપ તિરે ઔરન કો તારા॥
ઐસે જિન કો નમસ્કાર કર, ચઢૂઁ સુમત શાન્તિ નૌકા પર॥
સૂક્ષ્મ સી કુછ ગાથા ગાતા, હસ્તિનાપુર જગ વિખ્યાતા॥
વિશ્વ સેન પિતુ, ઐરા માતા, સુર તિહું કાલ રત્ન વર્ષાતા॥

સાઢે દસ કરોડ નિત ગિરતે, ઐરા માઁ કે આંગન ભરતે॥
પન્દ્રહ માહ તક હુઈ લુટાઈ, લે જા ભર ભર લોગ લુગાઈ॥
ભાદોં બદી સપ્તમી ગર્ભાતે, ઉતમ સોલહ સ્વપ્ન આતે॥
સુર ચારોં કાયોં કે આયે, નાટક ગાયન નૃત્ય દિખાયે॥

સેવા મેં જો રહી દેવિયાઁ, રખતી ખુશ માઁ કો દિન રતિયાં॥
જન્મ સેઠ બદી ચૌદશ કે દિન, ઘન્ટે અનહદ બજે ગગન ઘન॥
તીનોં જ્ઞાન લોક સુખદાતા, મંગલ સકલ હર્ષ ગુણ લાતા॥
ઇન્દ્ર દેવ સુર સેવા કરતે, વિદ્યા કલા જ્ઞાન ગુણ બઢતે॥

અંગ-અંગ સુન્દર મનમોહન, રત્ન જડિત તન વસ્ત્રાભૂષણ॥
બલ વિક્રમ યશ વૈભવ કાજા, જીતે છહોં ખણ્ડ કે રાજા॥
ન્યાયવાન દાની ઉપચારી, પ્રજા હર્ષિત નિર્ભય સારી॥
દીન અનાથ દુખી નહી કોઈ, હોતી ઉતમ વસ્તુ વોઈ॥

ઊઁચે આપ આઠ સૌ ગજ થે, વદન સ્વર્ણ અરૂ ચિન્હ હિરણ થે॥
શક્તિ ઐસી થી જિસ્માની, વરી હજાર છાનવેં રાની॥
લખ ચૌરાસી હાથી રથ થે, ઘોડે કરોડ અઠારહ શુભ થે॥
સહસ પચાસ ભૂપ કે રાજન, અરબો સેવા મેં સેવક જન॥

તીન કરોડ થી સુંદર ગઈયાં, ઇચ્છા પૂર્ણ કરેં નૌ નિધિયાં॥
ચૌદહ રતન વ ચક્ર સુદર્શન, ઉતમ ભોગ વસ્તુએં અનગિન॥
થી અડતાલીસ કોડ ધ્વજાયેં, કુંડલ ચંદ્ર સૂર્ય સમ છાયે॥
અમૃત ગર્ભ નામ કા ભોજન, લાજવાબ ઊંચા સિંહાસન॥

લાખો મંદિર ભવન સુસજ્જિત, નાર સહિત તુમ જિસમેં શોભિત॥
જિતના સુખ થા શાંતિનાથ કો, અનુભવ હોતા જ્ઞાનવાન કો॥
ચલેં જિવ જો ત્યાગ ધર્મ પર, મિલે ઠાઠ ઉનકો યે સુખકર॥
પચીસ સહસ્રવર્ષ સુખ પાકર, ઉમડા ત્યાગ હિતંકર તુમપર॥

વૈભવ સબ સપને સમ માના, જગ તુમને ક્ષણભંગુર જાના॥
જ્ઞાનોદય જો હુઆ તુમ્હારા, પાયે શિવપુર ભી સંસારા॥
કામી મનુજ કામ કો ત્યાગેં, પાપી પાપ કર્મ સે ભાગે॥
સુત નારાયણ તખ્ત બિઠાયા, તિલક ચઢા અભિષેક કરાયા॥

નાથ આપકો બિઠા પાલકી, દેવ ચલે લે રાહ ગગન કી॥
ઇત ઉત ઇન્દર ચઁવર ઢુરવેં, મંગલ ગાતે વન પહુઁચાવેં॥
ભેષ દિગમ્બર અપના કીના, કેશ લોચ પન મુષ્ઠી કીના॥
પૂર્ણ હુઆ ઉપવાસ છટા જબ, શુદ્ધાહાર ચલે લેને તબ॥

કર તીનોં વૈરાગ ચિન્તવન, ચારોં જ્ઞાન કિયે સમ્પાદન॥
ચાર હાથ મગ ચલતેં ચલતે, ષટ્ કાયિક કી રક્ષા કરતે॥
મનહર મીઠે વચન ઉચરતે, પ્રાણિમાત્ર કા દુખડા હરતે॥
નાશવાન કાયા યહ પ્યારી, ઇસસે હી યહ રિશ્તેદારી॥

ઇસસે માત પિતા સુત નારી, ઇસકે કારણ ફિરો દુખારી॥
ગર યહ તન પ્યારા સગતા, તરહ તરહ કા રહેગા મિલતા॥
તજ નેહા કાયા માયા કા, હો ભરતાર મોક્ષ દારા કા॥
વિષય ભોગ સબ દુખ કા કારણ, ત્યાગ ધર્મ હી શિવ કે સાધન॥

નિધિ લક્ષ્મી જો કોઈ ત્યાગે, ઉસકે પીછે પીછે ભાગે॥
પ્રેમ રૂપ જો ઇસે બુલાવે, ઉસકે પાસ કભી નહી આવે॥
કરને કો જગ કા નિસ્તારા, છહોં ખણ્ડ કા રાજ વિસારા॥
દેવી દેવ સુરા સર આયે, ઉત્તમ તપ કલ્યાણ મનાયે॥

પૂજન નૃત્ય કરેં નત મસ્તક, ગાઈ મહિમા પ્રેમ પૂર્વક॥
કરતે તુમ આહાર જહાઁ પર, દેવ રતન વર્ષાતે ઉસ ઘર॥
જિસ ઘર દાન પાત્ર કો મિલતા, ઘર વહ નિત્ય ફૂલતા-ફલતા॥
આઠોં ગુણ સિદ્ધોં કે ધ્યાકર, દશોં ધર્મ ચિત કાય તપાકર॥

કેવલ જ્ઞાન આપને પાયા, લાખોં પ્રાણી પાર લગાયા॥
સમવશરણ મેં ધંવનિ ખિરાઈ, પ્રાણી માત્ર સમઝ મેં આઈ॥
સમવશરણ પ્રભુ કા જહાઁ જાતા, કોસ ચાર સૌ તક સુખ પાતા॥
ફૂલ ફલાદિક મેવા આતી, હરી ભરી ખેતી લહરાતી॥

સેવા મેં છતિસ થે ગણધાર, મહિમા મુઝસે ક્યા હો વર્ણન॥
નકુલ સર્પ મૃગ હરી સે પ્રાણી, પ્રેમ સહિત મિલ પીતે પાની॥
આપ ચતુર્મુખ વિરાજમાન થે, મોક્ષ માર્ગ કો દિવ્યવાન થે॥
કરતે આપ વિહાર ગગન મેં અન્તરિક્ષ થે સમવશરણ મેં॥

તીનો જગત આનન્દિત કિને, હિત ઉપદેશ હજારો દીને॥
પૌને લાખ વર્ષ હિત કીના, ઉમ્ર રહી જબ એક મહીના॥
શ્રી સમ્મેદ શિખર પર આયે, અજર અમર પદ તુમને પાયે॥
નિષ્પૃહ કર ઉદ્ધાર જગત કે, ગયે મોક્ષ તુમ લાખ વર્ષ કે॥

આંક સકેં ક્યા છવી જ્ઞાન કી, જોત સુર્ય સમ અટલ આપકી॥
બહે સિન્ધુ સમ ગુણ કી ધારા, રહે સુમત ચિત નામ તુમ્હારા॥

નિત ચાલીસ હી બાર પાઠ કરેં ચાલીસ દિન।
ખેયે સુગન્ધ અપાર, શાંતિનાથ કે સામને॥
હોવે ચિત પ્રસન્ન, ભય ચિંતા શંકા મિટે।
પાપ હોય સબ હન્ન, બલ વિદ્યા વૈભવ બઢે॥`,
      hi: `शान्तिनाथ भगवान का, चालीसा सुखकार॥
मोक्ष प्राप्ति के लिय, कहूँ सुनो चितधार॥
चालीसा चालीस दिन तक, कह चालीस बार॥
बढ़े जगत सम्पन, सुमत अनुपम शुद्ध विचार॥

शान्तिनाथ तुम शान्तिनायक, पण्चम चक्री जग सुखदायक॥
तुम ही सोलहवे हो तीर्थंकर, पूजें देव भूप सुर गणधर॥
पन्चाचार गुणोंके धारी, कर्म रहित आठों गुणकारी॥
तुमने मोक्ष मार्ग दर्शाया, निज गुण ज्ञान भानु प्रकटाया॥

स्याद्वाद विज्ञान उचारा, आप तिरे औरन को तारा॥
ऐसे जिन को नमस्कार कर, चढूँ सुमत शान्ति नौका पर॥
सूक्ष्म सी कुछ गाथा गाता, हस्तिनापुर जग विख्याता॥
विश्व सेन पितु, ऐरा माता, सुर तिहुं काल रत्न वर्षाता॥

साढे दस करोड़ नित गिरते, ऐरा माँ के आंगन भरते॥
पन्द्रह माह तक हुई लुटाई, ले जा भर भर लोग लुगाई॥
भादों बदी सप्तमी गर्भाते, उतम सोलह स्वप्न आते॥
सुर चारों कायों के आये, नाटक गायन नृत्य दिखाये॥

सेवा में जो रही देवियाँ, रखती खुश माँ को दिन रतियां॥
जन्म सेठ बदी चौदश के दिन, घन्टे अनहद बजे गगन घन॥
तीनों ज्ञान लोक सुखदाता, मंगल सकल हर्ष गुण लाता॥
इन्द्र देव सुर सेवा करते, विद्या कला ज्ञान गुण बढ़ते॥

अंग-अंग सुन्दर मनमोहन, रत्न जड़ित तन वस्त्राभूषण॥
बल विक्रम यश वैभव काजा, जीते छहों खण्ड के राजा॥
न्यायवान दानी उपचारी, प्रजा हर्षित निर्भय सारी॥
दीन अनाथ दुखी नही कोई, होती उतम वस्तु वोई॥

ऊँचे आप आठ सौ गज थे, वदन स्वर्ण अरू चिन्ह हिरण थे॥
शक्ति ऐसी थी जिस्मानी, वरी हजार छानवें रानी॥
लख चौरासी हाथी रथ थे, घोड़े करोड अठारह शुभ थे॥
सहस पचास भूप के राजन, अरबो सेवा में सेवक जन॥

तीन करोड़ थी सुंदर गईयां, इच्छा पूर्ण करें नौ निधियां॥
चौदह रतन व चक्र सुदर्शन, उतम भोग वस्तुएं अनगिन॥
थी अड़तालीस कोड ध्वजायें, कुंडल चंद्र सूर्य सम छाये॥
अमृत गर्भ नाम का भोजन, लाजवाब ऊंचा सिंहासन॥

लाखो मंदिर भवन सुसज्जित, नार सहित तुम जिसमें शोभित॥
जितना सुख था शांतिनाथ को, अनुभव होता ज्ञानवान को॥
चलें जिव जो त्याग धर्म पर, मिले ठाठ उनको ये सुखकर॥
पचीस सहस्रवर्ष सुख पाकर, उमड़ा त्याग हितंकर तुमपर॥

वैभव सब सपने सम माना, जग तुमने क्षणभंगुर जाना॥
ज्ञानोदय जो हुआ तुम्हारा, पाये शिवपुर भी संसारा॥
कामी मनुज काम को त्यागें, पापी पाप कर्म से भागे॥
सुत नारायण तख्त बिठाया, तिलक चढ़ा अभिषेक कराया॥

नाथ आपको बिठा पालकी, देव चले ले राह गगन की॥
इत उत इन्दर चँवर ढुरवें, मंगल गाते वन पहुँचावें॥
भेष दिगम्बर अपना कीना, केश लोच पन मुष्ठी कीना॥
पूर्ण हुआ उपवास छटा जब, शुद्धाहार चले लेने तब॥

कर तीनों वैराग चिन्तवन, चारों ज्ञान किये सम्पादन॥
चार हाथ मग चलतें चलते, षट् कायिक की रक्षा करते॥
मनहर मीठे वचन उचरते, प्राणिमात्र का दुखड़ा हरते॥
नाशवान काया यह प्यारी, इससे ही यह रिश्तेदारी॥

इससे मात पिता सुत नारी, इसके कारण फिरो दुखारी॥
गर यह तन प्यारा सगता, तरह तरह का रहेगा मिलता॥
तज नेहा काया माया का, हो भरतार मोक्ष दारा का॥
विषय भोग सब दुख का कारण, त्याग धर्म ही शिव के साधन॥

निधि लक्ष्मी जो कोई त्यागे, उसके पीछे पीछे भागे॥
प्रेम रूप जो इसे बुलावे, उसके पास कभी नही आवे॥
करने को जग का निस्तारा, छहों खण्ड का राज विसारा॥
देवी देव सुरा सर आये, उत्तम तप कल्याण मनाये॥

पूजन नृत्य करें नत मस्तक, गाई महिमा प्रेम पूर्वक॥
करते तुम आहार जहाँ पर, देव रतन वर्षाते उस घर॥
जिस घर दान पात्र को मिलता, घर वह नित्य फूलता-फलता॥
आठों गुण सिद्धों के ध्याकर, दशों धर्म चित काय तपाकर॥

केवल ज्ञान आपने पाया, लाखों प्राणी पार लगाया॥
समवशरण में धंवनि खिराई, प्राणी मात्र समझ में आई॥
समवशरण प्रभु का जहाँ जाता, कोस चार सौ तक सुख पाता॥
फूल फलादिक मेवा आती, हरी भरी खेती लहराती॥

सेवा में छतिस थे गणधार, महिमा मुझसे क्या हो वर्णन॥
नकुल सर्प मृग हरी से प्राणी, प्रेम सहित मिल पीते पानी॥
आप चतुर्मुख विराजमान थे, मोक्ष मार्ग को दिव्यवान थे॥
करते आप विहार गगन में अन्तरिक्ष थे समवशरण में॥

तीनो जगत आनन्दित किने, हित उपदेश हजारो दीने॥
पौने लाख वर्ष हित कीना, उम्र रही जब एक महीना॥
श्री सम्मेद शिखर पर आये, अजर अमर पद तुमने पाये॥
निष्पृह कर उद्धार जगत के, गये मोक्ष तुम लाख वर्ष के॥

आंक सकें क्या छवी ज्ञान की, जोत सुर्य सम अटल आपकी॥
बहे सिन्धु सम गुण की धारा, रहे सुमत चित नाम तुम्हारा॥

नित चालीस ही बार पाठ करें चालीस दिन।
खेये सुगन्ध अपार, शांतिनाथ के सामने॥
होवे चित प्रसन्न, भय चिंता शंका मिटे।
पाप होय सब हन्न, बल विद्या वैभव बढ़े॥`,
      sa: "",
      en: `Shaantinaath Bhagwaan ka, chaalisa sukhkaar||
Moksh praapti ke liye, kahun suno chit dhaar||
Chaalisa chaalis din tak, kah chaalis baar||
Badhe jagat sampan, sumat anupam shuddh vichaar||

Shaantinaath tum shaantinaayak, pancham chakri jag sukhdaayak||
Tum hi solahve ho Teerthankar, poojen dev bhoop sur gandhar||
Panchaachaar gunon ke dhaari, karm rahit aathon gunkaari||
Tumne moksh maarg darshaaya, nij gun gyaan bhaanu prakataaya||

Syaadvaad vigyaan uchaara, aap tire auran ko taara||
Aise Jin ko namaskaar kar, chadhun sumat Shaanti nauka par||
Sookshm si kuchh gaatha gaata, Hastinaapur jag vikhyaata||
Vishwa Sen pitu, Aira maata, sur tihun kaal ratna varshaata||

Saadhe das karod nit girte, Aira maa ke aangan bharte||
Pandrah maah tak hui lutaai, le ja bhar bhar log lugaai||
Bhaadon badi saptami garbhaate, uttam solah swapn aate||
Sur chaaron kaayon ke aaye, naatak gaayan nritya dikhaaye||

Seva mein jo rahi deviyaan, rakhti khush maa ko din ratiyaan||
Janm seth badi chaudash ke din, ghante anhad baje gagan ghan||
Teenon gyaan lok sukhdaata, mangal sakal harsh gun laata||
Indra dev sur seva karte, vidya kala gyaan gun badhte||

Ang-ang sundar manmohan, ratna jadit tan vastraabhooshan||
Bal vikram yash vaibhav kaaja, jeete chhahon khand ke raaja||
Nyaayvaan daani upchaari, praja harshit nirbhay saari||
Deen anaath dukhi nahin koi, hoti uttam vastu voi||

Oonche aap aath sau gaj the, vadan swarn aru chinh hiran the||
Shakti aisi thi jismaani, vari hazaar chhaanve raani||
Lakh chauraasi haathi rath the, ghode karod athaarah shubh the||
Sahas pachaas bhoop ke raajan, arbo seva mein sevak jan||

Teen karod thi sundar gaiyaan, ichchha poorna karen nau nidhiyaan||
Chaudah ratna va chakra sudarshan, uttam bhog vastuen angin||
Thi adtaalis kod dhvajaayen, kundal chandra soorya sam chhaaye||
Amrit garbh naam ka bhojan, laajavaab ooncha sinhaasan||

Laakho mandir bhavan susajjit, naar sahit tum jismein shobhit||
Jitna sukh tha Shaantinaath ko, anubhav hota gyaanvaan ko||
Chalen jiv jo tyaag dharm par, mile thaath unko ye sukhkar||
Pachees sahasra varsh sukh paakar, umda tyaag hitankar tumpar||

Vaibhav sab sapne sam maana, jag tumne kshanbhangur jaana||
Gyaanoday jo hua tumhaara, paaye Shivpur bhi sansaara||
Kaami manuj kaam ko tyaagen, paapi paap karm se bhaage||
Sut Naaraayan takht bithaaya, tilak chadha abhishek karaaya||

Naath aapko bitha paalki, dev chale le raah gagan ki||
It ut Indar chanvar dhurven, mangal gaate van pahunchaaven||
Bhesh Digambar apna keena, kesh loch pan mushthi keena||
Poorn hua upvaas chhata jab, shuddhaahaar chale lene tab||

Kar teenon vairaag chintvan, chaaron gyaan kiye sampaadan||
Chaar haath mag chalte chalte, shat kaayik ki raksha karte||
Manhar meethe vachan uchrate, praanimaatra ka dukhda harte||
Naashvaan kaaya yah pyaari, isse hi yah rishtedaari||

Isse maat pita sut naari, iske kaaran phiro dukhaari||
Gar yah tan pyaara sagta, tarah tarah ka rahega milta||
Taj neha kaaya maaya ka, ho bhartaar moksh daara ka||
Vishay bhog sab dukh ka kaaran, tyaag dharm hi shiv ke saadhan||

Nidhi Lakshmi jo koi tyaage, uske peechhe peechhe bhaage||
Prem roop jo ise bulaave, uske paas kabhi nahin aave||
Karne ko jag ka nistaara, chhahon khand ka raaj visaara||
Devi dev suraasar aaye, uttam tap kalyaan manaaye||

Poojan nritya karen nat mastak, gaai mahima prem poorvak||
Karte tum aahaar jahaan par, dev ratna varshaate us ghar||
Jis ghar daan paatra ko milta, ghar vah nitya phoolta-phalta||
Aathon gun siddhon ke dhyaakar, dashon dharm chit kaay tapaakar||

Keval gyaan aapne paaya, laakhon praani paar lagaaya||
Samavashran mein dhvani khiraai, praani maatra samajh mein aai||
Samavashran prabhu ka jahaan jaata, kos chaar sau tak sukh paata||
Phool phalaadik meva aati, hari bhari kheti lahraati||

Seva mein chhatis the gandhaar, mahima mujhse kya ho varnan||
Nakul sarp mrig hari se praani, prem sahit mil peete paani||
Aap chaturmukh viraajmaan the, moksh maarg ko divyavaan the||
Karte aap vihaar gagan mein antariksh the samavashran mein||

Teeno jagat aanandit kine, hit updesh hazaaro deene||
Paune laakh varsh hit keena, umr rahi jab ek maheena||
Shri Sammed Shikhar par aaye, ajar amar pad tumne paaye||
Nishprih kar uddhaar jagat ke, gaye moksh tum laakh varsh ke||

Aank saken kya chhavi gyaan ki, jot soorya sam atal aapki||
Bahe sindhu sam gun ki dhaara, rahe sumat chit naam tumhaara||

Nit chaalis hi baar paath karen chaalis din.
Kheye sugandh apaar, Shaantinaath ke saamne||
Hove chit prasann, bhay chinta shanka mite.
Paap hoy sab hann, bal vidya vaibhav badhe||`,
    },
  },
  {
    id: "sheetalnath-chalisa",
    type: "chalisa",
    title: {
      gu: "શ્રી શીતલનાથ ચાલીસા",
      hi: "श्री शीतलनाथ चालीसा",
      sa: "",
      en: "Shri Sheetalnath Chalisa",
    },
    text: {
      gu: `શીતલ હૈં શીતલ વચન, ચન્દન સે અધિકાય।
કલ્પ વૃક્ષ સમ પ્રભુ ચરણ, હૈં સબકો સુખકાય॥

જય શ્રી શીતલનાથ ગુણાકર, મહિમા મંડિત કરુણાસાગર।
ભાદ્દિલપુર કે દૃઢરથ રાય, ભૂપ પ્રજાવત્સલ કહલાયે॥

રમણી રત્ન સુનન્દા રાની, ગર્ભ આયે શ્રી જિનવર જ્ઞાની।
દ્વાદશી માઘ બદી કો જન્મે, હર્ષ લહર ઉઠી ત્રિભુવન મેં॥

ઉત્સવ કરતે દેવ અનેક, મેરુ પર કરતે અભિષેક।
નામ દિયા શિશુ જિન કો શીતલ, ભીષ્મ જ્વાલ અધ્ હોતી શીતલ॥

એક લક્ષ પુર્વાયુ પ્રભુ કી, નબ્બે ધનુષ અવગાહના વપુ કી।
વર્ણ સ્વર્ણ સમ ઉજ્જવલપીત, દયા ધર્મ થા ઉનકા મીત॥

નિરાસક્ત થે વિષય ભોગો મેં, રત રહતે થે આત્મ યોગ મેં।
એક દિન ગએ ભ્રમણ કો વન મેં, કરે પ્રકૃતિ દર્શન ઉપવન મેં॥

લગે ઓસકણ મોતી જૈસે, લુપ્ત હુએ સબ સૂર્યોદય સે।
દેખ હૃદય મેં હુઆ વૈરાગ્ય, આત્મ રાગ મેં છોડા રાગ॥

તપ કરને કા નિશ્ચય કરતે, બ્રહ્મર્ષિ અનુમોદન કરતે।
વિરાજે શુક્ર પ્રભા શિવિકા મેં, ગએ સહેતુક વન મેં જિનવર॥

સંધ્યા સમય લી દીક્ષા અશ્રુણ, ચાર જ્ઞાન ધારી હુએ તત્ક્ષણ।
દો દિન કા વ્રત કરકે ઇષ્ટ, પ્રથામાહાર હુઆ નગર અરિષ્ટ॥

દિયા આહાર પુનર્વસુ નૃપ ને, પંચાશ્ચાર્ય કિયે દેવોં ને।
કિયા તીન વર્ષ તપ ઘોર, શીતલતા ફૈલી ચહુ ઔર॥

કૃષ્ણ ચતુર્દશી પૌષવિખ્યતા, કેવલજ્ઞાની હુએ જગાત્ગ્યતા।
રચના હુઈ તબ સમોશરણ કી, દિવ્યદેશના ખિરી પ્રભુ કી॥

આતમ હિત કા માર્ગ બતાયા, શંકિત ચિત્ત સમાધાન કરાયા।
તીન પ્રકાર આત્મા જાનો, બહિરાતમ અન્તરાતમ માનો॥

નિશ્ચય કરકે નિજ આતમ કા, ચિંતન કર લો પરમાતમ કા।
મોહ મહામદ સે મોહિત જો, પરમાતમ કો નહીં માને વો॥

વે હી ભવ ભવ મેં ભટકાતે, વે હી બહિરાતમ કહલાતે।
પર પદાર્થ સે મમતા તજ કે, પરમાતમ મેં શ્રદ્ધા કર કે॥

જો નિત આતમ ધ્યાન લગાતે, વે અંતર આતમ કહલાતે।
ગુણ અનંત કે ધારી હે જો, કર્મો કે પરિહારી હૈ જો॥

લોક શિખર કે વાસી હૈ વે, પરમાતમ અવિનાશી હૈ વે।
જિનવાણી પર શ્રદ્ધા ધર કે, પાર ઉતારતે ભવિજન ભવ સે॥

શ્રી જિન કે ઇક્યાસી ગણધર, એક લક્ષ થે પૂજ્ય મુનિવર।
અંત સમય મેં ગએ સમ્મ્મેદાચલ, યોગ ધાર કર હો ગએ નિશ્ચલ॥

અશ્વિન શુક્લ અષ્ટમી આઈ, મુક્તિમહલ પહુચે જિનરાઈ।
લક્ષણ પ્રભુ કા કલ્પવૃક્ષ થા, ત્યાગ સકલ સુખ વરા મોક્ષ થા॥

શીતલ ચરણ શરણ મેં આઓ, કૂટ વિદ્યુતવર શીશ ઝુકાઓ।
શીતલ જિન શીતલ કરેં, સબકે ભવ આતપ।
અરુણા કે મન મેં બસે, હરે સકલ સંતાપ॥`,
      hi: `शीतल हैं शीतल वचन, चन्दन से अधिकाय।
कल्प वृक्ष सम प्रभु चरण, हैं सबको सुखकाय॥

जय श्री शीतलनाथ गुणाकर, महिमा मंडित करुणासागर।
भाद्दिलपुर के दृढरथ राय, भूप प्रजावत्सल कहलाये॥

रमणी रत्न सुनन्दा रानी, गर्भ आये श्री जिनवर ज्ञानी।
द्वादशी माघ बदी को जन्मे, हर्ष लहर उठी त्रिभुवन में॥

उत्सव करते देव अनेक, मेरु पर करते अभिषेक।
नाम दिया शिशु जिन को शीतल, भीष्म ज्वाल अध् होती शीतल॥

एक लक्ष पुर्वायु प्रभु की, नब्बे धनुष अवगाहना वपु की।
वर्ण स्वर्ण सम उज्जवलपीत, दया धर्म था उनका मीत॥

निरासक्त थे विषय भोगो में, रत रहते थे आत्म योग में।
एक दिन गए भ्रमण को वन में, करे प्रकृति दर्शन उपवन में॥

लगे ओसकण मोती जैसे, लुप्त हुए सब सूर्योदय से।
देख हृदय में हुआ वैराग्य, आत्म राग में छोड़ा राग॥

तप करने का निश्चय करते, ब्रह्मर्षि अनुमोदन करते।
विराजे शुक्र प्रभा शिविका में, गए सहेतुक वन में जिनवर॥

संध्या समय ली दीक्षा अश्रुण, चार ज्ञान धारी हुए तत्क्षण।
दो दिन का व्रत करके इष्ट, प्रथामाहार हुआ नगर अरिष्ट॥

दिया आहार पुनर्वसु नृप ने, पंचाश्चार्य किये देवों ने।
किया तीन वर्ष तप घोर, शीतलता फैली चहु और॥

कृष्ण चतुर्दशी पौषविख्यता, केवलज्ञानी हुए जगात्ग्यता।
रचना हुई तब समोशरण की, दिव्यदेशना खिरी प्रभु की॥

आतम हित का मार्ग बताया, शंकित चित्त समाधान कराया।
तीन प्रकार आत्मा जानो, बहिरातम अन्तरातम मानो॥

निश्चय करके निज आतम का, चिंतन कर लो परमातम का।
मोह महामद से मोहित जो, परमातम को नहीं माने वो॥

वे ही भव भव में भटकाते, वे ही बहिरातम कहलाते।
पर पदार्थ से ममता तज के, परमातम में श्रद्धा कर के॥

जो नित आतम ध्यान लगाते, वे अंतर आतम कहलाते।
गुण अनंत के धारी हे जो, कर्मो के परिहारी है जो॥

लोक शिखर के वासी है वे, परमातम अविनाशी है वे।
जिनवाणी पर श्रद्धा धर के, पार उतारते भविजन भव से॥

श्री जिन के इक्यासी गणधर, एक लक्ष थे पूज्य मुनिवर।
अंत समय में गए सम्म्मेदाचल, योग धार कर हो गए निश्चल॥

अश्विन शुक्ल अष्टमी आई, मुक्तिमहल पहुचे जिनराई।
लक्षण प्रभु का कल्पवृक्ष था, त्याग सकल सुख वरा मोक्ष था॥

शीतल चरण शरण में आओ, कूट विद्युतवर शीश झुकाओ।
शीतल जिन शीतल करें, सबके भव आतप।
अरुणा के मन में बसे, हरे सकल संताप॥`,
      sa: "",
      en: `Sheetal hain sheetal vachan, chandan se adhikaay.
Kalp vriksh sam prabhu charan, hain sabko sukhkaay||

Jay Shri Sheetalnaath gunaakar, mahima mandit karunaasaagar.
Bhaddilpur ke Dridhrath raay, bhoop prajaavatsal kahlaaye||

Ramni ratna Sunanda raani, garbh aaye Shri Jinvar gyaani.
Dwaadashi Maagh badi ko janme, harsh lahar uthi tribhuvan mein||

Utsav karte dev anek, Meru par karte abhishek.
Naam diya shishu Jin ko Sheetal, bheeshm jvaal adh hoti sheetal||

Ek laksh purvaayu prabhu ki, nabbe dhanush avgaahna vapu ki.
Varn swarn sam ujjval peet, daya dharm tha unka meet||

Niraasakt the vishay bhogo mein, rat rahte the aatm yog mein.
Ek din gae bhraman ko van mein, kare prakriti darshan upvan mein||

Lage oskan moti jaise, lupt hue sab sooryoday se.
Dekh hriday mein hua vairaagya, aatm raag mein chhoda raag||

Tap karne ka nishchay karte, brahmarshi anumodan karte.
Viraaje shukra prabha shivika mein, gae sahetuk van mein Jinvar||

Sandhya samay li deeksha ashrun, chaar gyaan dhaari hue tatkshan.
Do din ka vrat karke isht, prathamaahaar hua nagar arisht||

Diya aahaar Punarvasu nrip ne, panchaashchaary kiye devon ne.
Kiya teen varsh tap ghor, sheetalta phaili chahu or||

Krishna chaturdashi Paush vikhyata, kevalgyaani hue jagatgyata.
Rachna hui tab samoshran ki, divyadeshna khiri prabhu ki||

Aatam hit ka maarg bataaya, shankit chitt samaadhaan karaaya.
Teen prakaar aatma jaano, bahiraatam antaraatam maano||

Nishchay karke nij aatam ka, chintan kar lo parmaatam ka.
Moh mahaamad se mohit jo, parmaatam ko nahin maane vo||

Ve hi bhav bhav mein bhatkaate, ve hi bahiraatam kahlaate.
Par padaarth se mamta taj ke, parmaatam mein shraddha kar ke||

Jo nit aatam dhyaan lagaate, ve antar aatam kahlaate.
Gun anant ke dhaari he jo, karmo ke parihaari hai jo||

Lok shikhar ke vaasi hai ve, parmaatam avinaashi hai ve.
Jinvaani par shraddha dhar ke, paar utaarte bhavijan bhav se||

Shri Jin ke ikyaasi gandhar, ek laksh the poojya munivar.
Ant samay mein gae Sammedaachal, yog dhaar kar ho gae nishchal||

Ashvin shukla ashtami aai, muktimahal pahunche jinraai.
Lakshan prabhu ka kalpvriksh tha, tyaag sakal sukh vara moksh tha||

Sheetal charan sharan mein aao, koot vidyutvar sheesh jhukaao.
Sheetal Jin sheetal karen, sabke bhav aatap.
Aruna ke man mein base, hare sakal santaap||`,
    },
  },
  {
    id: "panch-parmeshthi-aarti",
    type: "aarti",
    title: {
      gu: "આરતી - પંચ પરમેષ્ઠી",
      hi: "आरती - पंच परमेष्ठी",
      sa: "",
      en: "Panch Parmeshthi Aarti",
    },
    text: {
      gu: `એહ વિધિ મંગલ આરતી કીજે, પંચ પરમપદ ભજ સુખ લીજે।
પહલી આરતી શ્રી જિન રાજા, ભવ - દધી પાર ઉતાર જિહાજા॥

એહ વિધિ મંગલ આરતી કીજે, પંચ પરમપદ ભજ સુખ લીજે।
દૂસરી આરતી સિદ્દન કેરી, સુમરણ કરત મિટે ભવ – ફેરી॥

એહ વિધિ મંગલ આરતી કીજે, પંચ પરમપદ ભજ સુખ લીજે।
તીજી આરતી સૂર મુનિંદા, જનમ - મરણ દુઃખ દૂર કરિન્દા॥

એહ વિધિ મંગલ આરતી કીજે, પંચ પરમપદ ભજ સુખ લીજે।
ચોથી આરતી શ્રી ઉવાઝાયા, દર્શન દેખત પાપ પલાયા॥

એહ વિધિ મંગલ આરતી કીજે, પંચ પરમપદ ભજ સુખ લીજે।
પાંચવી આરતી સાધૂ -તિહારી, કુમતિ - વિનાશન શિવ અધિકારી॥

એહ વિધિ મંગલ આરતી કીજે, પંચ પરમપદ ભજ સુખ લીજે।
છટ્ઠી ગ્યારહ પ્રતિમા - ધારી, શ્રાવક વંદો આનંદ કારી॥

એહ વિધિ મંગલ આરતી કીજે, પંચ પરમપદ ભજ સુખ લીજે।
સાતમી આરતી શ્રી – જિનવાણી, ધ્યાનત સુરગ મુકતિ સુખ - દાની॥

એહ વિધિ મંગલ આરતી કીજે, પંચ પરમપદ ભજ સુખ લીજે।
જો યહ આરતી કરે કરાવે, સૌ નર-નારી અમર પદ પાવેં।

યહ વિધિ મંગલ આરતી કીજે, પંચ પરમ પદ ભજ સુખ લીજે
સોને કા દીપ કપૂર કી બાતી, જગમગ જ્યોતિ જલે સારી રાતી।

યહ વિધિ મંગલ આરતી કીજે, પંચ પરમ પદ ભજ સુખ લીજે
સંધ્યા કાલે આરતી કીજે, અપનોં જનમ સફલ કર લીજે।

યહ વિધિ મંગલ આરતી કીજે, પંચ પરમ પદ ભજ સુખ લીજે`,
      hi: `एह विधि मंगल आरती कीजे, पंच परमपद भज सुख लीजे।
पहली आरती श्री जिन राजा, भव - दधी पार उतार जिहाजा॥

एह विधि मंगल आरती कीजे, पंच परमपद भज सुख लीजे।
दूसरी आरती सिद्दन केरी, सुमरण करत मिटे भव – फेरी॥

एह विधि मंगल आरती कीजे, पंच परमपद भज सुख लीजे।
तीजी आरती सूर मुनिंदा, जनम - मरण दुःख दूर करिन्दा॥

एह विधि मंगल आरती कीजे, पंच परमपद भज सुख लीजे।
चोथी आरती श्री उवाझाया, दर्शन देखत पाप पलाया॥

एह विधि मंगल आरती कीजे, पंच परमपद भज सुख लीजे।
पांचवी आरती साधू -तिहारी, कुमति - विनाशन शिव अधिकारी॥

एह विधि मंगल आरती कीजे, पंच परमपद भज सुख लीजे।
छट्ठी ग्यारह प्रतिमा - धारी, श्रावक वंदो आनंद कारी॥

एह विधि मंगल आरती कीजे, पंच परमपद भज सुख लीजे।
सातमी आरती श्री – जिनवाणी, ध्यानत सुरग मुकति सुख - दानी॥

एह विधि मंगल आरती कीजे, पंच परमपद भज सुख लीजे।
जो यह आरती करे करावे, सौ नर-नारी अमर पद पावें।

यह विधि मंगल आरती कीजे, पंच परम पद भज सुख लीजे
सोने का दीप कपूर की बाती, जगमग ज्योति जले सारी राती।

यह विधि मंगल आरती कीजे, पंच परम पद भज सुख लीजे
संध्या काले आरती कीजे, अपनों जनम सफल कर लीजे।

यह विधि मंगल आरती कीजे, पंच परम पद भज सुख लीजे`,
      sa: "",
      en: `Eh vidhi mangal aarti keeje, panch parampad bhaj sukh leeje.
Pehli aarti Shri Jin Raaja, bhav - dadhi paar utaar jihaaja||

Eh vidhi mangal aarti keeje, panch parampad bhaj sukh leeje.
Doosri aarti Siddhan keri, sumaran karat mite bhav – pheri||

Eh vidhi mangal aarti keeje, panch parampad bhaj sukh leeje.
Teeji aarti Soor Muninda, janam - maran dukh door karinda||

Eh vidhi mangal aarti keeje, panch parampad bhaj sukh leeje.
Chothi aarti Shri Uvaajhaaya, darshan dekhat paap palaaya||

Eh vidhi mangal aarti keeje, panch parampad bhaj sukh leeje.
Paanchvi aarti Saadhu -tihaari, kumati - vinaashan shiv adhikaari||

Eh vidhi mangal aarti keeje, panch parampad bhaj sukh leeje.
Chhatthi gyaarah pratima - dhaari, shraavak vando aanand kaari||

Eh vidhi mangal aarti keeje, panch parampad bhaj sukh leeje.
Saatmi aarti Shri – Jinvaani, dhyaanat surag mukati sukh - daani||

Eh vidhi mangal aarti keeje, panch parampad bhaj sukh leeje.
Jo yah aarti kare karaave, sau nar-naari amar pad paaven.

Yah vidhi mangal aarti keeje, panch param pad bhaj sukh leeje
Sone ka deep kapoor ki baati, jagmag jyoti jale saari raati.

Yah vidhi mangal aarti keeje, panch param pad bhaj sukh leeje
Sandhya kaale aarti keeje, apnon janam safal kar leeje.

Yah vidhi mangal aarti keeje, panch param pad bhaj sukh leeje`,
    },
  },
  {
    id: "bhagwan-mahavir-aarti",
    type: "aarti",
    title: {
      gu: "ભગવાન મહાવીર કી આરતી",
      hi: "भगवान महावीर की आरती",
      sa: "",
      en: "Bhagwan Mahavir ki Aarti",
    },
    text: {
      gu: `જય મહાવીર પ્રભો, સ્વામી જય મહાવીર પ્રભો।
કુંડલપુર અવતારી, ત્રિશલાનંદ વિભો॥ ॥ ૐ જય.....॥

સિદ્ધારથ ઘર જન્મે, વૈભવ થા ભારી, સ્વામી વૈભવ થા ભારી।
બાલ બ્રહ્મચારી વ્રત પાલ્યૌ તપધારી ॥ ૐ જય.....॥

આતમ જ્ઞાન વિરાગી, સમ દૃષ્ટિ ધારી।
માયા મોહ વિનાશક, જ્ઞાન જ્યોતિ જારી ॥ ૐ જય.....॥

જગ મેં પાઠ અહિંસા, આપહિ વિસ્તાર્યો।
હિંસા પાપ મિટાકર, સુધર્મ પરિચાર્યો ॥ ૐ જય.....॥

ઇહ વિધિ ચાંદનપુર મેં અતિશય દરશાયૌ।
ગ્વાલ મનોરથ પૂર્યો દૂધ ગાય પાયૌ ॥ ૐ જય.....॥

પ્રાણદાન મન્ત્રી કો તુમને પ્રભુ દીના।
મન્દિર તીન શિખર કા, નિર્મિત હૈ કીના ॥ ૐ જય.....॥

જયપુર નૃપ ભી તેરે, અતિશય કે સેવી।
એક ગ્રામ તિન દીનોં, સેવા હિત યહ ભી ॥ ૐ જય.....॥

જો કોઈ તેરે દર પર, ઇચ્છા કર આવૈ।
હોય મનોરથ પૂરણ, સંકટ મિટ જાવૈ ॥ ૐ જય.....॥

નિશિ દિન પ્રભુ મન્દિર મેં, જગમગ જ્યોતિ જરૈ।
હરિ પ્રસાદ ચરણોં મેં, આનન્દ મોદ ભરૈ ॥ ૐ જય.....॥`,
      hi: `जय महावीर प्रभो, स्वामी जय महावीर प्रभो।
कुंडलपुर अवतारी, त्रिशलानंद विभो॥ ॥ ॐ जय.....॥

सिद्धारथ घर जन्मे, वैभव था भारी, स्वामी वैभव था भारी।
बाल ब्रह्मचारी व्रत पाल्यौ तपधारी ॥ ॐ जय.....॥

आतम ज्ञान विरागी, सम दृष्टि धारी।
माया मोह विनाशक, ज्ञान ज्योति जारी ॥ ॐ जय.....॥

जग में पाठ अहिंसा, आपहि विस्तार्यो।
हिंसा पाप मिटाकर, सुधर्म परिचार्यो ॥ ॐ जय.....॥

इह विधि चांदनपुर में अतिशय दरशायौ।
ग्वाल मनोरथ पूर्यो दूध गाय पायौ ॥ ॐ जय.....॥

प्राणदान मन्त्री को तुमने प्रभु दीना।
मन्दिर तीन शिखर का, निर्मित है कीना ॥ ॐ जय.....॥

जयपुर नृप भी तेरे, अतिशय के सेवी।
एक ग्राम तिन दीनों, सेवा हित यह भी ॥ ॐ जय.....॥

जो कोई तेरे दर पर, इच्छा कर आवै।
होय मनोरथ पूरण, संकट मिट जावै ॥ ॐ जय.....॥

निशि दिन प्रभु मन्दिर में, जगमग ज्योति जरै।
हरि प्रसाद चरणों में, आनन्द मोद भरै ॥ ॐ जय.....॥`,
      sa: "",
      en: `Jay Mahaaveer prabho, Swaami jay Mahaaveer prabho.
Kundalpur avtaari, Trishlaanand vibho|| || Om jay.....||

Siddhaarath ghar janme, vaibhav tha bhaari, Swaami vaibhav tha bhaari.
Baal brahmchaari vrat paalyau tapdhaari || Om jay.....||

Aatam gyaan viraagi, sam drishti dhaari.
Maaya moh vinaashak, gyaan jyoti jaari || Om jay.....||

Jag mein paath ahinsa, aaphi vistaaryo.
Hinsa paap mitaakar, sudharm parichaaryo || Om jay.....||

Ih vidhi Chaandanpur mein atishay darshaayau.
Gwaal manorath pooryo doodh gaay paayau || Om jay.....||

Praandaan mantri ko tumne prabhu deena.
Mandir teen shikhar ka, nirmit hai keena || Om jay.....||

Jaipur nrip bhi tere, atishay ke sevi.
Ek graam tin deenon, seva hit yah bhi || Om jay.....||

Jo koi tere dar par, ichchha kar aavai.
Hoy manorath pooran, sankat mit jaavai || Om jay.....||

Nishi din prabhu mandir mein, jagmag jyoti jarai.
Hari prasaad charnon mein, aanand mod bharai || Om jay.....||`,
    },
  },
  {
    id: "padmavati-mata-aarti",
    type: "aarti",
    title: {
      gu: "પદ્માવતી માતા કી આરતી",
      hi: "पद्मावती माता की आरती",
      sa: "",
      en: "Padmavati Mata ki Aarti",
    },
    text: {
      gu: `પદ્માવતી માતા, દર્શન કી બલિહારિયાં॥ ટેક૦॥

પાર્શ્વનાથ મહારાજ વિરાજે મસ્તક ઊપર થારે,
માતા મસ્તક ઊપર થારે।

ઇન્દ્ર, ફણેન્દ્ર, નરેન્દ્ર સભી મિલ, ખડે રહેં નિત દ્વારે।
હે પદ્માવતી માતા, દર્શન કી બલિહારિયાં॥ દો બાર॥
જો જીવ થારો શરણો લીનો, સબ સંકટ હર લીનો,
માતા સબ સંકટ હર લીનો।

પુત્ર, પૌત્ર, ધન, ધાન્ય, સમ્પદા, મંગલમય કર દીનો।
હે પદ્માવતી માતા, દર્શન કી બલિહારિયાં॥ દો બાર॥
ડાકિનિ, શાકિનિ, ભૂત, ભવાની, નામ લેત ભગ જાયેં,
માતા નામ લેત ભગ જાયેં।

વાત, પિત્ત, કફ, કુષ્ટ મિટે અરૂ તન સુખમય હો જાવે।
હે પદ્માવતી માતા, દર્શન કી બલિહારિયાં॥ દો બાર॥
દીપ, ધૂપ, અરુ પુષ્પ આરતી, લે આરતિ કો આયો,
માતા લે દર્શન કો આયો।
દર્શન કરકે માત તિહારો, મનવાંછિત ફલ પાયો।
હે પદ્માવતી માતા, દર્શન કી બલિહારિયાં ॥ દો બાર॥
જબ ભક્તોં પર પીર પડી હૈ રક્ષા તુમને કીની,
માતા રક્ષા તુમને કીની।
વૈરિયોં કા અભિમાન ચૂરકર ઇજ્જત દૂની દીની।

હે પદ્માવતી માતા, દર્શન કી બલિહારિયાં॥
હે પદ્માવતી માતા, આરતિ કી બલિહારિયાં॥`,
      hi: `पद्मावती माता, दर्शन की बलिहारियां॥ टेक०॥

पार्श्वनाथ महाराज विराजे मस्तक ऊपर थारे,
माता मस्तक ऊपर थारे।

इन्द्र, फणेन्द्र, नरेन्द्र सभी मिल, खड़े रहें नित द्वारे।
हे पद्मावती माता, दर्शन की बलिहारियां॥ दो बार॥
जो जीव थारो शरणो लीनो, सब संकट हर लीनो,
माता सब संकट हर लीनो।

पुत्र, पौत्र, धन, धान्य, सम्पदा, मंगलमय कर दीनो।
हे पद्मावती माता, दर्शन की बलिहारियां॥ दो बार॥
डाकिनि, शाकिनि, भूत, भवानी, नाम लेत भग जायें,
माता नाम लेत भग जायें।

वात, पित्त, कफ, कुष्ट मिटे अरू तन सुखमय हो जावे।
हे पद्मावती माता, दर्शन की बलिहारियां॥ दो बार॥
दीप, धूप, अरु पुष्प आरती, ले आरति को आयो,
माता ले दर्शन को आयो।
दर्शन करके मात तिहारो, मनवांछित फल पायो।
हे पद्मावती माता, दर्शन की बलिहारियां ॥ दो बार॥
जब भक्तों पर पीर पड़ी है रक्षा तुमने कीनी,
माता रक्षा तुमने कीनी।
वैरियों का अभिमान चूरकर इज्जत दूनी दीनी।

हे पद्मावती माता, दर्शन की बलिहारियां॥
हे पद्मावती माता, आरति की बलिहारियां॥`,
      sa: "",
      en: `Padmaavati Maata, darshan ki balihaariyaan|| Tek||

Paarshvanaath Mahaaraaj viraaje mastak oopar thaare,
Maata mastak oopar thaare.

Indra, Phanendra, Narendra sabhi mil, khade rahen nit dvaare.
He Padmaavati Maata, darshan ki balihaariyaan|| do baar||
Jo jeev thaaro sharno leeno, sab sankat har leeno,
Maata sab sankat har leeno.

Putra, pautra, dhan, dhaanya, sampada, mangalmay kar deeno.
He Padmaavati Maata, darshan ki balihaariyaan|| do baar||
Daakini, shaakini, bhoot, bhavaani, naam let bhag jaayen,
Maata naam let bhag jaayen.

Vaat, pitt, kaf, kusht mite aru tan sukhmay ho jaave.
He Padmaavati Maata, darshan ki balihaariyaan|| do baar||
Deep, dhoop, aru pushp aarti, le aarti ko aayo,
Maata le darshan ko aayo.
Darshan karke maat tihaaro, manvaanchhit phal paayo.
He Padmaavati Maata, darshan ki balihaariyaan || do baar||
Jab bhakton par peer padi hai raksha tumne keeni,
Maata raksha tumne keeni.
Vairiyon ka abhimaan choorkar izzat dooni deeni.

He Padmaavati Maata, darshan ki balihaariyaan||
He Padmaavati Maata, aarti ki balihaariyaan||`,
    },
  },
  {
    id: "dash-dharma-aarti",
    type: "aarti",
    title: {
      gu: "દશધર્મોં કી આરતિ",
      hi: "दशधर्मों की आरति",
      sa: "",
      en: "Dash Dharma ki Aarti",
    },
    text: {
      gu: `દશધર્મોં કી આરતિ કરકે, હોગા બેડા પાર।
ધર્મ કે બિના ઇસ જગ મેં, કૌન કરેગા ઉદ્ધાર॥ટેક॥

આત્મા કો દુખ સે નિકાલકર, જો સુખ મેં પહુઁચાતા।
હર પ્રાણી કે લિએ વહી તો, સચ્ચા ધર્મ કહલાતા।
ઉસી ધર્મ કો ધારણ કરકે, હોગા બેડા પાર।
ધર્મ કે બિના ઇસ જગ મેં, કૌન કરેગા ઉદ્ધાર॥૧॥

ઉત્તમ ક્ષમા માર્દવ આર્જવ, ધર્મ કહે આત્મા કો।
ઇનસે મિલે વિનય સરલતા, પ્રાપ્ત હોં આત્મા મેં॥
ઉત્તમ સત્ય વ શૌચ ધર્મ સે, હોગા બેડા પાર।
ધર્મ કે બિના ઇસ જગ મેં, કૌન કરેગા ઉદ્ધાર॥૨॥

ઉત્તમ સંયમ તપ વ ત્યાગ, મુક્તિ કા માર્ગ બતાતા।
ઇનકો પાલન કરકે મુનિજન, મુક્તિપથિક કહલાતા।
હમ ભી ઇનકા પાલન કરકે, લહેં મુક્તિ કા દ્વાર।
ધર્મ કે બિના ઇસ જગ મેં, કૌન કરેગા ઉદ્ધાર॥૩॥

ઉત્તમ આકિંચન્ય ધર્મ, પરિગ્રહ કા ત્યાગ કરાતા।
શ્રાવક કો પરિગ્રહ પ્રમાણ કા, સરલ માર્ગ સમઝાતા॥
ઉત્તમ બ્રહ્મચર્ય તિહુઁ જગ મેં, હૈ સબ ધર્મોં કા સાર।
ધર્મ કે બિના ઇસ જગ મેં, કૌન કરેગા ઉદ્ધાર॥૪॥

પર્વ અનાદી દશલક્ષણ મેં, દશ ધર્મોં કો વન્દના।
ઇનકી આરતી સે હી ચન્દ્રનામતિ કટેં ભવ બંધના॥
ઇસીલિએ દશ ધર્મ હૃદય મેં, લિએ હૈં હમને ધારા।
ધર્મ કે બિના ઇસ જગ મેં, કૌન કરેગા ઉદ્ધાર॥૫॥`,
      hi: `दशधर्मों की आरति करके, होगा बेड़ा पार।
धर्म के बिना इस जग में, कौन करेगा उद्धार॥टेक॥

आत्मा को दुख से निकालकर, जो सुख में पहुँचाता।
हर प्राणी के लिए वही तो, सच्चा धर्म कहलाता।
उसी धर्म को धारण करके, होगा बेड़ा पार।
धर्म के बिना इस जग में, कौन करेगा उद्धार॥१॥

उत्तम क्षमा मार्दव आर्जव, धर्म कहे आत्मा को।
इनसे मिले विनय सरलता, प्राप्त हों आत्मा में॥
उत्तम सत्य व शौच धर्म से, होगा बेड़ा पार।
धर्म के बिना इस जग में, कौन करेगा उद्धार॥२॥

उत्तम संयम तप व त्याग, मुक्ति का मार्ग बताता।
इनको पालन करके मुनिजन, मुक्तिपथिक कहलाता।
हम भी इनका पालन करके, लहें मुक्ति का द्वार।
धर्म के बिना इस जग में, कौन करेगा उद्धार॥३॥

उत्तम आकिंचन्य धर्म, परिग्रह का त्याग कराता।
श्रावक को परिग्रह प्रमाण का, सरल मार्ग समझाता॥
उत्तम ब्रह्मचर्य तिहुँ जग में, है सब धर्मों का सार।
धर्म के बिना इस जग में, कौन करेगा उद्धार॥४॥

पर्व अनादी दशलक्षण में, दश धर्मों को वन्दना।
इनकी आरती से ही चन्द्रनामति कटें भव बंधना॥
इसीलिए दश धर्म हृदय में, लिए हैं हमने धारा।
धर्म के बिना इस जग में, कौन करेगा उद्धार॥५॥`,
      sa: "",
      en: `Dashdharmon ki aarti karke, hoga beda paar.
Dharm ke bina is jag mein, kaun karega uddhaar|| Tek||

Aatma ko dukh se nikaalkar, jo sukh mein pahunchaata.
Har praani ke liye vahi to, sachcha dharm kahlaata.
Usi dharm ko dhaaran karke, hoga beda paar.
Dharm ke bina is jag mein, kaun karega uddhaar||1||

Uttam kshama maardav aarjav, dharm kahe aatma ko.
Inse mile vinay saralta, praapt hon aatma mein||
Uttam satya va shauch dharm se, hoga beda paar.
Dharm ke bina is jag mein, kaun karega uddhaar||2||

Uttam sanyam tap va tyaag, mukti ka maarg bataata.
Inko paalan karke munijan, muktipathik kahlaata.
Ham bhi inka paalan karke, lahen mukti ka dvaar.
Dharm ke bina is jag mein, kaun karega uddhaar||3||

Uttam aakinchanya dharm, parigrah ka tyaag karaata.
Shraavak ko parigrah pramaan ka, saral maarg samjhaata||
Uttam brahmcharya tihun jag mein, hai sab dharmon ka saar.
Dharm ke bina is jag mein, kaun karega uddhaar||4||

Parv anaadi dashlakshan mein, dash dharmon ko vandna.
Inki aarti se hi Chandranaamati katen bhav bandhna||
Isiliye dash dharm hriday mein, liye hain hamne dhaara.
Dharm ke bina is jag mein, kaun karega uddhaar||5||`,
    },
  },
  {
    id: "jain-dharm-ke-heere-moti",
    type: "bhajan",
    title: {
      gu: "જૈન ધર્મ કે હીરે મોતી",
      hi: "जैन धर्म के हीरे मोती",
      sa: "",
      en: "Jain Dharm Ke Heere Moti",
    },
    text: {
      gu: `જૈન ધર્મ કે હીરે મોતી, મૈં બિખરાઊં ગલી ગલી।
લે લો રે કોઈ પ્રભુ કા પ્યારા, શોર મચાઊં ગલી ગલી॥

દૌલત કે દીવાનોં સુન લો એક દિન ઐસા આએગા, એક દિન ઐસા આએગા
ધન યોવન ઔર માલ ખજાના યહી ધરા રહ જાએગા, યહી ધરા રહ જાએગા।
સુન્દર કાયા માટી હોગી, ચર્ચા હોગી ગલી ગલી,
જૈન ધર્મ કે હીરે મોતી ...

ક્યૂઁ કરતા હૈ તેરી મેરી તજ દે અભિમાન કો, તજ દે તૂ અભિમાન કો
ઝૂઠે ઝગડે છોડ કે સારે ભજ લે તૂ ભગવાન્ કો, ભજ લે તૂ ભગવાન્ કો।
જગત કા મેલા દો દિન કા હૈ, આખિર હોગી ચલા ચલી
જૈન ધર્મ કે હીરે મોતી ...

જિસ જિસ ને યહ મોતી લુટે વો તો મલા માલા હુએ, વો તો મલા માલા હુએ
દૌલત કે જો બને પુજારી આખિર વો કંગાલ હુએ, આખિર વો કંગાલ હુએ।
સોને ચાંદી વાલો સુન લો, બાત કહૂઁ મૈં ભલી ભલી,
જૈન ધર્મ કે હીરે મોતી ...

જીવન મેં દુઃખ હૈ તબ તક હી જબ તક સમ્યક જ્ઞાન નહીં, જબ તક સમ્યક જ્ઞાન નહીં
ઈશ્વર કો જો ભૂલ ગયા હૈ વો સચ્ચા ઇંસાન નહી, વો સચ્ચા ઇંસાન નહી।
દો દિન કા યહ ચમન ખિલા હૈ, ફિર મુરઝાયે કલી કલી
જૈન ધર્મ કે હીરે મોતી ...`,
      hi: `जैन धर्म के हीरे मोती, मैं बिखराऊं गली गली।
ले लो रे कोई प्रभु का प्यारा, शोर मचाऊं गली गली॥

दौलत के दीवानों सुन लो एक दिन ऐसा आएगा, एक दिन ऐसा आएगा
धन योवन और माल खजाना यही धरा रह जाएगा, यही धरा रह जाएगा।
सुन्दर काया माटी होगी, चर्चा होगी गली गली,
जैन धर्म के हीरे मोती ...

क्यूँ करता है तेरी मेरी तज दे अभिमान को, तज दे तू अभिमान को
झूठे झगडे छोड़ के सारे भज ले तू भगवान् को, भज ले तू भगवान् को।
जगत का मेला दो दिन का है, आखिर होगी चला चली
जैन धर्म के हीरे मोती ...

जिस जिस ने यह मोती लुटे वो तो मला माला हुए, वो तो मला माला हुए
दौलत के जो बने पुजारी आखिर वो कंगाल हुए, आखिर वो कंगाल हुए।
सोने चांदी वालो सुन लो, बात कहूँ मैं भली भली,
जैन धर्म के हीरे मोती ...

जीवन में दुःख है तब तक ही जब तक सम्यक ज्ञान नहीं, जब तक सम्यक ज्ञान नहीं
ईश्वर को जो भूल गया है वो सच्चा इंसान नही, वो सच्चा इंसान नही।
दो दिन का यह चमन खिला है, फिर मुरझाये कली कली
जैन धर्म के हीरे मोती ...`,
      sa: "",
      en: `Jain dharm ke heere moti, main bikhraaun gali gali.
Le lo re koi prabhu ka pyaara, shor machaaun gali gali||

Daulat ke deewaanon sun lo ek din aisa aayega, ek din aisa aayega
Dhan yovan aur maal khazaana yahi dhara rah jaayega, yahi dhara rah jaayega.
Sundar kaaya maati hogi, charcha hogi gali gali,
Jain dharm ke heere moti ...

Kyun karta hai teri meri taj de abhimaan ko, taj de tu abhimaan ko
Jhoothe jhagde chhod ke saare bhaj le tu Bhagwaan ko, bhaj le tu Bhagwaan ko.
Jagat ka mela do din ka hai, aakhir hogi chala chali
Jain dharm ke heere moti ...

Jis jis ne yah moti lute vo to maalamaala hue, vo to maalamaala hue
Daulat ke jo bane pujaari aakhir vo kangaal hue, aakhir vo kangaal hue.
Sone chaandi vaalo sun lo, baat kahun main bhali bhali,
Jain dharm ke heere moti ...

Jeevan mein dukh hai tab tak hi jab tak samyak gyaan nahin, jab tak samyak gyaan nahin
Ishwar ko jo bhool gaya hai vo sachcha insaan nahi, vo sachcha insaan nahi.
Do din ka yah chaman khila hai, phir murjhaaye kali kali
Jain dharm ke heere moti ...`,
    },
  },
  {
    id: "rangma-rangma-re",
    type: "bhajan",
    title: {
      gu: "રંગ મા રંગ મા",
      hi: "रंग मा रंग मा",
      sa: "",
      en: "Rangma Rangma Re",
    },
    text: {
      gu: `રંગ મા રંગ મા રંગ મા રે,
પ્રભુ થારા હી રંગ મા રંગ ગયો રે।

આયા મંગલ દિન મંગલ અવસર,
ભક્તિ મા થારી હૂં નાચ રહ્યો રે॥ પ્રભુ થારા. (1)

ગાવો રે ગાના આતમ રામ કા,
આતમ દેવ બુલાય રહયો રે॥ પ્રભુ થારા. (2)

આતમ દેવ કો અંતર મેં દેખા,
સુખ સરોવર ઉછલ રહયો રે॥ પ્રભુ થારા. (3)

ભાવ ભરી હમ ભાવના યે ભાયે,
આપ સમાન બનાય લિયો રે॥ પ્રભુ થારા. (4)

સમયસાર મેં કુન્દકુન્દ દેવ,
ભગવાન કહ કે બુલાય રહયો રે॥ પ્રભુ થારા. (5)

આજ હમરો ઉપયોગ પલટયો,
ચૈતન્ય ચૈતન્ય ભાસિ રહયો રે। પ્રભુ થારા.(6)`,
      hi: `रंग मा रंग मा रंग मा रे,
प्रभु थारा ही रंग मा रंग गयो रे।

आया मंगल दिन मंगल अवसर,
भक्ति मा थारी हूं नाच रह्यो रे॥ प्रभु थारा. (1)

गावो रे गाना आतम राम का,
आतम देव बुलाय रहयो रे॥ प्रभु थारा. (2)

आतम देव को अंतर में देखा,
सुख सरोवर उछल रहयो रे॥ प्रभु थारा. (3)

भाव भरी हम भावना ये भाये,
आप समान बनाय लियो रे॥ प्रभु थारा. (4)

समयसार में कुन्दकुन्द देव,
भगवान कह के बुलाय रहयो रे॥ प्रभु थारा. (5)

आज हमरो उपयोग पलटयो,
चैतन्य चैतन्य भासि रहयो रे। प्रभु थारा.(6)`,
      sa: "",
      en: `Rang ma rang ma rang ma re,
Prabhu thaara hi rang ma rang gayo re.

Aaya mangal din mangal avsar,
Bhakti ma thaari hoon naach rahyo re|| Prabhu thaara. (1)

Gaavo re gaana aatam raam ka,
Aatam dev bulaay rahyo re|| Prabhu thaara. (2)

Aatam dev ko antar mein dekha,
Sukh sarovar uchhal rahyo re|| Prabhu thaara. (3)

Bhaav bhari ham bhaavna ye bhaaye,
Aap samaan banaay liyo re|| Prabhu thaara. (4)

Samaysaar mein Kundkund dev,
Bhagwaan kah ke bulaay rahyo re|| Prabhu thaara. (5)

Aaj hamro upyog paltayo,
Chaitanya chaitanya bhaasi rahyo re. Prabhu thaara.(6)`,
    },
  },
  {
    id: "moh-jaal-mein",
    type: "bhajan",
    title: {
      gu: "મોહ જાલ મેં ફંસે હુએ હૈં, કર્મોં ને આ ઘેરા",
      hi: "मोह जाल में फंसे हुए हैं, कर्मों ने आ घेरा",
      sa: "",
      en: "Moh Jaal Mein Phanse Hue Hain",
    },
    text: {
      gu: `મોહ જાલ મેં ફઁસે હુયે હૈં કર્મોં ને આ ઘેરા,
કૈસે તિરેંગે ભવ-સાગર સે, તુમ બિન કૌન હૈ મેરા।
ભૂલ હુઈ ક્યા હમસે ભગવન ક્યા હૈ દોષ હમારા,
લિખા વિધાતા ને કિન ઘડિયોં ઐસા લેખ હમારા॥
લેખ લિખા થા શુભ ઘડિયોં મેં, શુભ ઘડિયાં હૈં આઈ।
આત્મજ્ઞાન કી જ્યોતિ જગા દો ભવ સે પાર ઉતરતા હૈ॥
મોહ જાલ મેં...

પહલે ઋષભનાથ જિન બંદોં, દૂસરે અજિતનાથ દેવજી।
તીસરે સંભવનાથ જિન બંદોં, ચૌથે અભિનંદ દેવજી॥
પાચવેં સુમતીનાથ જિન બંદોં, છઠવેં પદ્મપ્રભુ દેવજી।
સાતવેં સુપાર્શ્વનાથ જિન બંદોં, આઠવેં ચંદ્રદેવજી ॥
મોહ જાલ મેં...

નવવેં પુષ્પદંત જિન બંદોં, દસવેં શીતલનાથ દેવજી।
ગ્યારવેં શ્રેયાંસનાથ જિન બંદોં, બારહવેં વાસુપૂજ્ય દેવજી॥
તેરહવેં વિમલનાથ જિન બંદોં, ચૌદહવેં અનંતનાથ દેવજી।
પંદ્રહવેં ધર્મનાથ જિન બંદોં, સોલહવેં શાંતિનાથ દેવજી॥
મોહ જાલ મેં...`,
      hi: `मोह जाल में फँसे हुये हैं कर्मों ने आ घेरा,
कैसे तिरेंगे भव-सागर से, तुम बिन कौन है मेरा।
भूल हुई क्या हमसे भगवन क्या है दोष हमारा,
लिखा विधाता ने किन घड़ियों ऐसा लेख हमारा॥
लेख लिखा था शुभ घड़ियों में, शुभ घड़ियां हैं आई।
आत्मज्ञान की ज्योति जगा दो भव से पार उतरता है॥
मोह जाल में...

पहले ऋषभनाथ जिन बंदों, दूसरे अजितनाथ देवजी।
तीसरे संभवनाथ जिन बंदों, चौथे अभिनंद देवजी॥
पाचवें सुमतीनाथ जिन बंदों, छठवें पद्मप्रभु देवजी।
सातवें सुपार्श्वनाथ जिन बंदों, आठवें चंद्रदेवजी ॥
मोह जाल में...

नववें पुष्पदंत जिन बंदों, दसवें शीतलनाथ देवजी।
ग्यारवें श्रेयांसनाथ जिन बंदों, बारहवें वासुपूज्य देवजी॥
तेरहवें विमलनाथ जिन बंदों, चौदहवें अनंतनाथ देवजी।
पंद्रहवें धर्मनाथ जिन बंदों, सोलहवें शांतिनाथ देवजी॥
मोह जाल में...`,
      sa: "",
      en: `Moh jaal mein phanse hue hain karmon ne aa ghera,
Kaise tirenge bhav-saagar se, tum bin kaun hai mera.
Bhool hui kya humse Bhagwan kya hai dosh hamaara,
Likha vidhaata ne kin ghadiyon aisa lekh hamaara||
Lekh likha tha shubh ghadiyon mein, shubh ghadiyaan hain aai.
Aatmagyaan ki jyoti jaga do bhav se paar utarta hai||
Moh jaal mein...

Pehle Rishabhnaath Jin bandon, doosre Ajitnaath Devji.
Teesre Sambhavnaath Jin bandon, chauthe Abhinand Devji||
Paanchve Sumatinaath Jin bandon, chhathve Padmaprabhu Devji.
Saatve Supaarshvanaath Jin bandon, aathve Chandra Devji ||
Moh jaal mein...

Navve Pushpadant Jin bandon, dasve Sheetalnaath Devji.
Gyaarve Shreyaansnaath Jin bandon, baarahve Vaasupoojya Devji||
Terahve Vimalnaath Jin bandon, chaudahve Anantnaath Devji.
Pandrahve Dharmnaath Jin bandon, solahve Shaantinaath Devji||
Moh jaal mein...`,
    },
  },
  {
    id: "tune-khub-diya-bhagwan",
    type: "bhajan",
    title: {
      gu: "તૂને ખૂબ દિયા ભગવાન",
      hi: "तूने खूब दिया भगवान",
      sa: "",
      en: "Tune Khub Diya Bhagwan",
    },
    text: {
      gu: `માંગતે હી રહતે તુઝસે, સાંઝ સવેરે,
હાથ યે ફૈલે રહતે, સામને તેરે,
તુને ખુબ દિયા ભગવાન,
તેરા બહોત બડા એહસાન,
તેરા બહોત બડા એહસાન, તુને ખુબ દિયા ભગવાન..

યાદ હૈં મુઝે વો દિન, ખાલી જેબ થી મેરી,
દર દર ભટકતા થા મૈં, દર દર ભટકતા,
ગૈરો કી ક્યા કહૂં, અપનો કી આંખોં મેં,
રહ રહ ખટકતા થા મૈં, રહ રહ ખટકતા,
તરફ થે મેરે, ગમ કે અંધેરે,
આખિર મેં આયા દાદા કામ તુ મેરે,
તુને ખુબ દિયા ભગવાન, તેરા બહોત બડા એહસાન,
તેરા બહોત બડા એહસાન, તુને ખુબ દિયા ભગવાન..

માંગના મૈં છોડ દુ, હો નહીં સકતા પ્રભુ,
આદત ના મેરી, આદત ના જાએ,
ઔર તુઝસે લેને મેં મુઝકો કભી,
લાજ ના આએ દાદા, લાજ ના આએ,
દબા જા રહા હૂં મૈં તો, કર્જ મેં તેરે,
એહસાન કિતને દાદા, મુઝપે હૈં તેરે,
તુને ખુબ દિયા ભગવાન,
તેરા બહોત બડા એહસાન,
તેરા બહોત બડા એહસાન, તુને ખુબ દિયા ભગવાન..

લાયક નહીં થા મૈં,
ઇતને કે લિએ પ્રભુ, જિતના દિયા હૈં તુને,
જિતના દિયા હૈં, સુને સે જીવન મે, તુને ખુશનસીબી કા,
રંગ ભર દિયા હૈં દાદા,
રંગ ભર દિયા હૈં, ખાલી મુઝે દર સે,
તુ કભી ના લૌટાના, ઇતના હંસાયા તુને,
અબ ના રુલાના, તુને ખુબ દિયા ભગવાન,
તેરા બહોત બડા એહસાન, તેરા બહોત બડા એહસાન,
તુને ખુબ દિયા ભગવાન..`,
      hi: `मांगते ही रहते तुझसे, सांझ सवेरे,
हाथ ये फैले रहते, सामने तेरे,
तुने खुब दिया भगवान,
तेरा बहोत बड़ा एहसान,
तेरा बहोत बड़ा एहसान, तुने खुब दिया भगवान..

याद हैं मुझे वो दिन, खाली जेब थी मेरी,
दर दर भटकता था मैं, दर दर भटकता,
गैरो की क्या कहूं, अपनो की आंखों में,
रह रह खटकता था मैं, रह रह खटकता,
तरफ थे मेरे, गम के अंधेरे,
आखिर में आया दादा काम तु मेरे,
तुने खुब दिया भगवान, तेरा बहोत बड़ा एहसान,
तेरा बहोत बड़ा एहसान, तुने खुब दिया भगवान..

मांगना मैं छोड़ दु, हो नहीं सकता प्रभु,
आदत ना मेरी, आदत ना जाए,
और तुझसे लेने में मुझको कभी,
लाज ना आए दादा, लाज ना आए,
दबा जा रहा हूं मैं तो, कर्ज में तेरे,
एहसान कितने दादा, मुझपे हैं तेरे,
तुने खुब दिया भगवान,
तेरा बहोत बड़ा एहसान,
तेरा बहोत बड़ा एहसान, तुने खुब दिया भगवान..

लायक नहीं था मैं,
इतने के लिए प्रभु, जितना दिया हैं तुने,
जितना दिया हैं, सुने से जीवन मे, तुने खुशनसीबी का,
रंग भर दिया हैं दादा,
रंग भर दिया हैं, खाली मुझे दर से,
तु कभी ना लौटाना, इतना हंसाया तुने,
अब ना रुलाना, तुने खुब दिया भगवान,
तेरा बहोत बड़ा एहसान, तेरा बहोत बड़ा एहसान,
तुने खुब दिया भगवान..`,
      sa: "",
      en: `Maangte hi rahte tujhse, saanjh savere,
Haath ye phaile rahte, saamne tere,
Tune khub diya Bhagwaan,
Tera bahot bada ehsaan,
Tera bahot bada ehsaan, tune khub diya Bhagwaan..

Yaad hain mujhe vo din, khaali jeb thi meri,
Dar dar bhatakta tha main, dar dar bhatakta,
Gairo ki kya kahun, apno ki aankhon mein,
Rah rah khatakta tha main, rah rah khatakta,
Taraf the mere, gam ke andhere,
Aakhir mein aaya daada kaam tu mere,
Tune khub diya Bhagwaan, tera bahot bada ehsaan,
Tera bahot bada ehsaan, tune khub diya Bhagwaan..

Maangna main chhod du, ho nahin sakta prabhu,
Aadat na meri, aadat na jaaye,
Aur tujhse lene mein mujhko kabhi,
Laaj na aaye daada, laaj na aaye,
Daba ja raha hoon main to, karz mein tere,
Ehsaan kitne daada, mujhpe hain tere,
Tune khub diya Bhagwaan,
Tera bahot bada ehsaan,
Tera bahot bada ehsaan, tune khub diya Bhagwaan..

Laayak nahin tha main,
Itne ke liye prabhu, jitna diya hain tune,
Jitna diya hain, sune se jeevan me, tune khushnaseebi ka,
Rang bhar diya hain daada,
Rang bhar diya hain, khaali mujhe dar se,
Tu kabhi na lautaana, itna hansaaya tune,
Ab na rulaana, tune khub diya Bhagwaan,
Tera bahot bada ehsaan, tera bahot bada ehsaan,
Tune khub diya Bhagwaan..`,
    },
  },
  {
    id: "tumse-laagi-lagan",
    type: "bhajan",
    title: {
      gu: "તુમસે લાગી લગન - જૈન ભજન",
      hi: "तुमसे लागी लगन - जैन भजन",
      sa: "",
      en: "Tumse Laagi Lagan",
    },
    text: {
      gu: `તુમ સે લાગી લગન,
લે લો અપની શરણ, પારસ પ્યારા,
મેટો મેટો જી સંકટ હમારા॥

નિશદિન તુમકો જપૂઁ,
પર સે નેહ તજૂઁ, જીવન સારા,
તેરે ચરણોં મેં બીત હમારા॥ટેક॥

અશ્વસેન કે રાજદુલારે,
વામા દેવી કે સુત પ્રાણ પ્યારે॥
સબસે નેહ તોડા,
જગ સે મુઁહ કો મોડા,
સંયમ ધારા॥
મેટો મેટો જી સંકટ હમારા॥

ઇંદ્ર ઔર ધરણેન્દ્ર ભી આએ,
દેવી પદ્માવતી મંગલ ગાએ॥
આશા પૂરો સદા,
દુઃખ નહીં પાવે કદા,
સેવક થારા॥
મેટો મેટો જી સંકટ હમારા॥

જગ કે દુઃખ કી તો પરવાહ નહીં હૈ,
સ્વર્ગ સુખ કી ભી ચાહ નહીં હૈ॥
મેટો જામન મરણ,
હોવે ઐસા યતન,
પારસ પ્યારા॥
મેટો મેટો જી સંકટ હમારા॥

લાખોં બાર તુમ્હેં શીશ નવાઊઁ,
જગ કે નાથ તુમ્હેં કૈસે પાઊઁ॥
પંકજ વ્યાકુલ ભયા,
દર્શન બિન યે જિયા લાગે ખારા॥
મેટો મેટો જી સંકટ હમારા॥

તુમ સે લાગી લગન,
લે લો અપની શરણ, પારસ પ્યારા,
મેટો મેટો જી સંકટ હમારા॥`,
      hi: `तुम से लागी लगन,
ले लो अपनी शरण, पारस प्यारा,
मेटो मेटो जी संकट हमारा॥

निशदिन तुमको जपूँ,
पर से नेह तजूँ, जीवन सारा,
तेरे चरणों में बीत हमारा॥टेक॥

अश्वसेन के राजदुलारे,
वामा देवी के सुत प्राण प्यारे॥
सबसे नेह तोड़ा,
जग से मुँह को मोड़ा,
संयम धारा॥
मेटो मेटो जी संकट हमारा॥

इंद्र और धरणेन्द्र भी आए,
देवी पद्मावती मंगल गाए॥
आशा पूरो सदा,
दुःख नहीं पावे कदा,
सेवक थारा॥
मेटो मेटो जी संकट हमारा॥

जग के दुःख की तो परवाह नहीं है,
स्वर्ग सुख की भी चाह नहीं है॥
मेटो जामन मरण,
होवे ऐसा यतन,
पारस प्यारा॥
मेटो मेटो जी संकट हमारा॥

लाखों बार तुम्हें शीश नवाऊँ,
जग के नाथ तुम्हें कैसे पाऊँ॥
पंकज व्याकुल भया,
दर्शन बिन ये जिया लागे खारा॥
मेटो मेटो जी संकट हमारा॥

तुम से लागी लगन,
ले लो अपनी शरण, पारस प्यारा,
मेटो मेटो जी संकट हमारा॥`,
      sa: "",
      en: `Tum se laagi lagan,
Le lo apni sharan, Paaras pyaara,
Meto meto ji sankat hamaara||

Nishdin tumko japun,
Par se neh tajun, jeevan saara,
Tere charnon mein beet hamaara|| Tek||

Ashvasen ke raajdulaare,
Vaama Devi ke sut praan pyaare||
Sabse neh toda,
Jag se munh ko moda,
Sanyam dhaara||
Meto meto ji sankat hamaara||

Indra aur Dharnendra bhi aaye,
Devi Padmaavati mangal gaaye||
Aasha pooro sada,
Dukh nahin paave kada,
Sevak thaara||
Meto meto ji sankat hamaara||

Jag ke dukh ki to parvaah nahin hai,
Swarg sukh ki bhi chaah nahin hai||
Meto jaaman maran,
Hove aisa yatan,
Paaras pyaara||
Meto meto ji sankat hamaara||

Laakhon baar tumhen sheesh navaaun,
Jag ke naath tumhen kaise paaun||
Pankaj vyaakul bhaya,
Darshan bin ye jiya laage khaara||
Meto meto ji sankat hamaara||

Tum se laagi lagan,
Le lo apni sharan, Paaras pyaara,
Meto meto ji sankat hamaara||`,
    },
  },
  {
    id: "rom-rom-se-nikle-guruvar",
    type: "bhajan",
    title: {
      gu: "રોમ-રોમ સે નિકલે ગુરુવર, નામ તુમ્હારા",
      hi: "रोम-रोम से निकले गुरुवर, नाम तुम्हारा",
      sa: "",
      en: "Rom-Rom Se Nikle Guruvar",
    },
    text: {
      gu: `રોમ-રોમ સે નિકલે ગુરુવર, નામ તુમ્હારા-2
ઐસા દો વરદાન કી ફિર ના પાઊં જનમ દુબારા, રોમ...

પ્રેમ કિયા જબ જગ સે, જગ ને હી ઠુકરાયા,
તેરા પ્રેમ ન જાના, દુઃખ કો ગલે લગાયા

હમ કો લગતા હૈ, ઇસ યુગ મેં, તૂ હી એક સહારા, રોમ...
માતા-પિતા તુમ મેરે, સચ્ચે મિત્ર સહારે,

સારી દુનિયા છોડી, આયે તેરે દ્વારે,
ભટક રહે હૈ, ભવ સાગર મેં, પાયા નહીં કિનારા, રોમ.....

દિલ સે નિશ દિન ગુરુજી, જ્યોતિ જલાઊઁ તેરી,
કબ તક પૂરી હોગી, મન કી આશા મેરી,

ઇન નૈનોં સે તેરી જ્યોતિ કા, દેખેં અજબ નજારા, રોમ.....
છોડ ન પાઊઁ પ્રભુ જી, પાંચ ઠગો કા ડેરા

કિસ વિધ પાઊઁ આખિર, પ્રભુ જી દર્શન તેરા,
ભટક ન જાયે યે બાલક, પ્રભુ જી દેના આપ સહારા, રોમ-રોમ.....`,
      hi: `रोम-रोम से निकले गुरुवर, नाम तुम्हारा-2
ऐसा दो वरदान की फिर ना पाऊं जनम दुबारा, रोम...

प्रेम किया जब जग से, जग ने ही ठुकराया,
तेरा प्रेम न जाना, दुःख को गले लगाया

हम को लगता है, इस युग में, तू ही एक सहारा, रोम...
माता-पिता तुम मेरे, सच्चे मित्र सहारे,

सारी दुनिया छोड़ी, आये तेरे द्वारे,
भटक रहे है, भव सागर में, पाया नहीं किनारा, रोम.....

दिल से निश दिन गुरुजी, ज्योति जलाऊँ तेरी,
कब तक पूरी होगी, मन की आशा मेरी,

इन नैनों से तेरी ज्योति का, देखें अजब नजारा, रोम.....
छोड़ न पाऊँ प्रभु जी, पांच ठगो का डेरा

किस विध पाऊँ आखिर, प्रभु जी दर्शन तेरा,
भटक न जाये ये बालक, प्रभु जी देना आप सहारा, रोम-रोम.....`,
      sa: "",
      en: `Rom-rom se nikle guruvar, naam tumhaara-2
Aisa do vardaan ki phir na paaun janam dubaara, rom...

Prem kiya jab jag se, jag ne hi thukraaya,
Tera prem na jaana, dukh ko gale lagaaya

Ham ko lagta hai, is yug mein, tu hi ek sahaara, rom...
Maata-pita tum mere, sachche mitra sahaare,

Saari duniya chhodi, aaye tere dvaare,
Bhatak rahe hai, bhav saagar mein, paaya nahin kinaara, rom.....

Dil se nish din guruji, jyoti jalaaun teri,
Kab tak poori hogi, man ki aasha meri,

In nainon se teri jyoti ka, dekhen ajab nazaara, rom.....
Chhod na paaun prabhu ji, paanch thago ka dera

Kis vidh paaun aakhir, prabhu ji darshan tera,
Bhatak na jaaye ye baalak, prabhu ji dena aap sahaara, rom-rom.....`,
    },
  },
  {
    id: "kabhi-veer-banke-mahaveer-banke",
    type: "bhajan",
    title: {
      gu: "કભી વીર બનકે મહાવીર બનકે",
      hi: "कभी वीर बनके महावीर बनके",
      sa: "",
      en: "Kabhi Veer Banke Mahaveer Banke",
    },
    text: {
      gu: `કભી વીર બનકે મહાવીર બનકે, ચલે આના, દરસ હમેં દે જાના

તુમ ઋષભ રૂપ મેં આના, તુમ અજિત રૂપ મેં આના।
સંભવનાથ બનકે, અભિનંદન બનકે ચલે આના ॥ દરસ...

તુમ સુમતિ રૂપ મેં આના, તુમ પદમરૂપ મેં આના।
સુપાર્શ્વનાથ બનકે ચંદાપ્રભુ બનકે ચલે આના ॥ દરસ...

તુમ પુષ્પ રૂપ મેં આના, શીતલનાથ રૂપ મેં આના।
શ્રેયાંસનાથ બનકે વાસુપૂજ્ય બનકે ચલે આના ॥ દરસ...

તુમ વિમલ રૂપ મેં આના, તુમ અનંત રૂપ મેં આના।
ધર્મનાથ બનકે શાંતિનાથ બનકે ચલે આના ॥ દરસ...

તુમ કુંથુ રૂપ મેં આના, અરહનાથ રૂપ મેં આના।
મલ્લિનાથ બનકે મુનિસુવ્રત બનકે ચલે આના ॥ દરસ...

નમિનાથ રૂપ મેં આના, નેમિનાથ રૂપ મેં આના॥
પાર્શ્વનાથ બનકે વર્દ્ધમાન બનકે ચલે આના ॥ દરસ...`,
      hi: `कभी वीर बनके महावीर बनके, चले आना, दरस हमें दे जाना

तुम ऋषभ रूप में आना, तुम अजित रूप में आना।
संभवनाथ बनके, अभिनंदन बनके चले आना ॥ दरस...

तुम सुमति रूप में आना, तुम पदमरूप में आना।
सुपार्श्वनाथ बनके चंदाप्रभु बनके चले आना ॥ दरस...

तुम पुष्प रूप में आना, शीतलनाथ रूप में आना।
श्रेयांसनाथ बनके वासुपूज्य बनके चले आना ॥ दरस...

तुम विमल रूप में आना, तुम अनंत रूप में आना।
धर्मनाथ बनके शांतिनाथ बनके चले आना ॥ दरस...

तुम कुंथु रूप में आना, अरहनाथ रूप में आना।
मल्लिनाथ बनके मुनिसुव्रत बनके चले आना ॥ दरस...

नमिनाथ रूप में आना, नेमिनाथ रूप में आना॥
पार्श्वनाथ बनके वर्द्धमान बनके चले आना ॥ दरस...`,
      sa: "",
      en: `Kabhi Veer banke Mahaaveer banke, chale aana, daras hamen de jaana

Tum Rishabh roop mein aana, tum Ajit roop mein aana.
Sambhavnaath banke, Abhinandan banke chale aana || daras...

Tum Sumati roop mein aana, tum Padam roop mein aana.
Supaarshvanaath banke Chandaaprabhu banke chale aana || daras...

Tum Pushp roop mein aana, Sheetalnaath roop mein aana.
Shreyaansnaath banke Vaasupoojya banke chale aana || daras...

Tum Vimal roop mein aana, tum Anant roop mein aana.
Dharmnaath banke Shaantinaath banke chale aana || daras...

Tum Kunthu roop mein aana, Arahnaath roop mein aana.
Mallinaath banke Munisuvrat banke chale aana || daras...

Naminaath roop mein aana, Neminaath roop mein aana||
Paarshvanaath banke Varddhamaan banke chale aana || daras...`,
    },
  },
  {
    id: "mahaveerashtak-stotra",
    type: "stotra",
    title: {
      gu: "મહાવીરાષ્ટક સ્તોત્ર",
      hi: "महावीराष्टक स्तोत्र",
      sa: "महावीराष्टक स्तोत्रम्",
      en: "Mahaveerashtak Stotra",
    },
    text: {
      gu: `જિનકે ચેતન મેં દર્પણવત સભી ચેતનાચેતન ભાવ
યુગપદ ઝલકૈં અંતરહિત હો ધ્રુવ-ઉત્પાદ-વ્યયાત્મક ભાવ
જગત્સાક્ષી શિવમાર્ગ પ્રકાશક જો હૈં માનો સૂર્ય-સમાન
વે તીર્થંકર મહાવીર પ્રભુ મમ હિય આવેં નયનદ્વાર ॥૧॥

જિનકે લોચનકમલ લાલિમા રહિત ઔર ચંચલતાહીન
સમઝાતે હૈં ભવ્યજનોં કો બાહ્યાભ્યન્તર ક્રોધ-વિહીન
જિનકી પ્રતિમા પ્રકટ શાન્તિમય ઔર અહો હૈ વિમલ અપાર
વે તીર્થંકર મહાવીર પ્રભુ મમ હિય આવેં નયનદ્વાર ॥૨॥

નમતે દેવોં કી પંક્તિ કી મુકુટમણિ કા પ્રભાસમૂહ
જિનકે દોનોં ચરણકમલ પર ઝલકે દેખો જીવસમૂહ
સાંસારિક જ્વાલા કો હરને જિનકા સ્મરણ બને જલધાર
વે તીર્થંકર મહાવીર પ્રભુ મમ હિય આવેં નયનદ્વાર ॥૩॥

જિનકે અર્ચન કે વિચાર મેં મેંઢક ભી જબ હર્ષિતવાન
ક્ષણ ભર મેં બન ગયા દેવતા ગુણસમૂહ ઔર સુક્ખ નિધાન
તબ અચરજ ક્યા યદિ પાતે હૈં સચ્ચે ભક્ત મોક્ષ કા દ્વાર ?
વે તીર્થંકર મહાવીર પ્રભુ મમ હિય આવેં નયનદ્વાર ॥૪॥

તપ્તસ્વર્ણ-સા તન હૈ ફિર ભી તનવિરહિત જો જ્ઞાનશરીર
એક રહેં હોકર વિચિત્ર ભી, સિદ્ધારથ રાજા કે વીર
હોકર ભી જો જન્મરહિત હૈં, શ્રીમન ફિર ભી ન રાગવિકાર
વે તીર્થંકર મહાવીર પ્રભુ મમ હિય આવેં નયનદ્વાર ॥૫॥

જિનકી વાણીરૂપી ગંગા નયલહરોં સે હીનવિકાર
વિપુલ જ્ઞાનજલ સે જનતા કા કરતી હૈ જગ મેં સ્નાન
અહો ! આજ ભી ઇસસે પરિચિત જ્ઞાની રૂપી હંસ અપાર
વે તીર્થંકર મહાવીર પ્રભુ મમ હિય આવેં નયનદ્વાર ॥૬॥

તીવ્રવેગ ત્રિભુવન કા જેતા કામયોદ્ધા બડા પ્રબલ
વયકુમાર મેં જિનને જીતા ઉસકો કેવલ નિજ કે બલ
શાશ્વત સુખ-શાન્તિ કે રાજા બનકર જો હો ગયે મહાન
વે તીર્થંકર મહાવીર પ્રભુ મમ હિય આવેં નયનદ્વાર ॥૭॥

મહામોહ આતંક શમન કો જો હૈં આકસ્મિક ઉપચાર
નિરાપેક્ષ બન્ધુ હૈં, જગ મેં જિનકી મહિમા મંગલકાર
ભવભવ સે ડરતે સન્તોં કો શરણ તથા વર ગુણ ભંડાર
વે તીર્થંકર મહાવીર પ્રભુ, મમ હિય આવેં નયનદ્વાર ॥૮॥

મહાવીરાષ્ટક સ્તોત્ર કો, 'ભાગ' ભક્તિ સે કીન
જો પઢ લે અથવા સુને, પરમગતિ વહ લીન`,
      hi: `जिनके चेतन में दर्पणवत सभी चेतनाचेतन भाव
युगपद झलकैं अंतरहित हो ध्रुव-उत्पाद-व्ययात्मक भाव
जगत्साक्षी शिवमार्ग प्रकाशक जो हैं मानो सूर्य-समान
वे तीर्थंकर महावीर प्रभु मम हिय आवें नयनद्वार ॥१॥

जिनके लोचनकमल लालिमा रहित और चंचलताहीन
समझाते हैं भव्यजनों को बाह्याभ्यन्तर क्रोध-विहीन
जिनकी प्रतिमा प्रकट शान्तिमय और अहो है विमल अपार
वे तीर्थंकर महावीर प्रभु मम हिय आवें नयनद्वार ॥२॥

नमते देवों की पंक्ति की मुकुटमणि का प्रभासमूह
जिनके दोनों चरणकमल पर झलके देखो जीवसमूह
सांसारिक ज्वाला को हरने जिनका स्मरण बने जलधार
वे तीर्थंकर महावीर प्रभु मम हिय आवें नयनद्वार ॥३॥

जिनके अर्चन के विचार में मेंढक भी जब हर्षितवान
क्षण भर में बन गया देवता गुणसमूह और सुक्ख निधान
तब अचरज क्या यदि पाते हैं सच्चे भक्त मोक्ष का द्वार ?
वे तीर्थंकर महावीर प्रभु मम हिय आवें नयनद्वार ॥४॥

तप्तस्वर्ण-सा तन है फिर भी तनविरहित जो ज्ञानशरीर
एक रहें होकर विचित्र भी, सिद्धारथ राजा के वीर
होकर भी जो जन्मरहित हैं, श्रीमन फिर भी न रागविकार
वे तीर्थंकर महावीर प्रभु मम हिय आवें नयनद्वार ॥५॥

जिनकी वाणीरूपी गंगा नयलहरों से हीनविकार
विपुल ज्ञानजल से जनता का करती है जग में स्नान
अहो ! आज भी इससे परिचित ज्ञानी रूपी हंस अपार
वे तीर्थंकर महावीर प्रभु मम हिय आवें नयनद्वार ॥६॥

तीव्रवेग त्रिभुवन का जेता कामयोद्धा बड़ा प्रबल
वयकुमार में जिनने जीता उसको केवल निज के बल
शाश्वत सुख-शान्ति के राजा बनकर जो हो गये महान
वे तीर्थंकर महावीर प्रभु मम हिय आवें नयनद्वार ॥७॥

महामोह आतंक शमन को जो हैं आकस्मिक उपचार
निरापेक्ष बन्धु हैं, जग में जिनकी महिमा मंगलकार
भवभव से डरते सन्तों को शरण तथा वर गुण भंडार
वे तीर्थंकर महावीर प्रभु, मम हिय आवें नयनद्वार ॥८॥

महावीराष्टक स्तोत्र को, 'भाग' भक्ति से कीन
जो पढ़ ले अथवा सुने, परमगति वह लीन`,
      sa: `यदीये चैतन्ये मुकुर इव भावाश्चिदचित:।
समं भान्ति ध्रौव्य-व्ययजनि-लसंतोऽन्तरहिता: ॥
जगत्साक्षी मार्ग-प्रकटनपरो भानुरिव यो।
महावीर-स्वामी नयन-पथ-गामी भवतु मे ॥१॥

अताम्रं यच्चक्षु: कमलयुगलं स्पन्दरहितं।
जनान्कोपापायं प्रकटयति वाभ्यन्तरमपि ॥
स्फुटं मूर्तिर्यस्य प्रशमितमयी वाति विमला।
महावीर-स्वामी नयन-पथ-गामी भवतु मे ॥२॥

नमन्नाकेन्द्राली-मुकुट-मणि-भाजालजटिलं।
लसत्पादाम्भोज-द्वयमिह यदीयं तनुभृतां ॥
भवज्वाला-शान्त्यै प्रभवति जलं वा स्मृतमपि।
महावीर-स्वामी नयन-पथ-गामी भवतु मे ॥३॥

यदर्चाभावेन प्रमुदितमना दर्दुर इह।
क्षणादासीत्स्वर्गी गुणगणसमृद्ध: सुखनिधि: ॥
लभंते सद्भक्ता: शिवसुखसमाजं किमु तदा।
महावीरस्वामी नयन-पथ-गामी भवतु मे ॥४॥

कनत्स्वर्णाभासोऽप्यपगत तनुर्ज्ञान-निवहो,
विचित्रात्माप्येको नृपति-वर सिद्दार्थ-तनय:।
अजन्मापि श्रीमान् विगतभवरागोद्भुत-गति:,
महावीर-स्वामी नयन-पथ-गामी भवतु मे ॥५॥

यदीया वाग्गङ्गा विविध-नय कल्लोल-विमला,
वृहज्ज्ञानांभोभिर्जगति जनतां या स्नपयति।
इदानीमप्येषा बुध-जनमरालै: परिचिता,
महावीर-स्वामी नयन-पथ-गामी भवतु मे ॥६॥

अनिर्वारोद्रेकस्त्रिभुवनजयी काम-सुभट:,
कुमारावस्थायामपि निजबलाद्येन विजित:।
स्फुरन्नित्यानन्द-प्रशम-पद-राज्याय स जिन:,
महावीर-स्वामी नयन-पथ-गामी भवतु मे ॥७॥

महामोहातङक-प्रशमनपरा-कस्मिकभिषङ,
निरापेक्षो बन्धुर्विदित-महिमा मङगलकर: ॥
शरण्य: साधूनां भवभयभृतामुत्तमगुणो।
महावीर-स्वामी नयन-पथ-गामी भवतु मे ॥८॥

(अनुष्टुप् छंद)
महावीराष्टकं स्तोत्रं, भक्त्या भागेन्दुना कृतम्।
य: पठेच्छृणुयाच्चापि, स याति परमां गतिम् ॥९॥`,
      en: `Jinke chetan mein darpanvat sabhi chetnaachetan bhaav
Yugpad jhalkain antarhit ho dhruv-utpaad-vyayaatmak bhaav
Jagatsaakshi shivmaarg prakaashak jo hain maano soorya-samaan
Ve Teerthankar Mahaaveer prabhu mam hiy aaven nayandvaar ||1||

Jinke lochankamal laalima rahit aur chanchaltaaheen
Samjhaate hain bhavyajanon ko baahyaabhyantar krodh-viheen
Jinki pratima prakat shaantimay aur aho hai vimal apaar
Ve Teerthankar Mahaaveer prabhu mam hiy aaven nayandvaar ||2||

Namte devon ki pankti ki mukutmani ka prabhaasamooh
Jinke donon charankamal par jhalke dekho jeevsamooh
Saansaarik jvaala ko harne jinka smaran bane jaldhaar
Ve Teerthankar Mahaaveer prabhu mam hiy aaven nayandvaar ||3||

Jinke archan ke vichaar mein mendhak bhi jab harshitvaan
Kshan bhar mein ban gaya devta gunsamooh aur sukkh nidhaan
Tab acharaj kya yadi paate hain sachche bhakt moksh ka dvaar ?
Ve Teerthankar Mahaaveer prabhu mam hiy aaven nayandvaar ||4||

Taptaswarn-sa tan hai phir bhi tanvirahit jo gyaanshareer
Ek rahen hokar vichitra bhi, Siddhaarath raaja ke veer
Hokar bhi jo janmrahit hain, shreeman phir bhi na raagvikaar
Ve Teerthankar Mahaaveer prabhu mam hiy aaven nayandvaar ||5||

Jinki vaaniroopi Ganga naylahron se heenvikaar
Vipul gyaanjal se janta ka karti hai jag mein snaan
Aho ! aaj bhi isse parichit gyaani roopi hans apaar
Ve Teerthankar Mahaaveer prabhu mam hiy aaven nayandvaar ||6||

Teevraveg tribhuvan ka jeta kaamyoddha bada prabal
Vaykumaar mein jinne jeeta usko keval nij ke bal
Shaashvat sukh-shaanti ke raaja bankar jo ho gaye mahaan
Ve Teerthankar Mahaaveer prabhu mam hiy aaven nayandvaar ||7||

Mahaamoh aatank shaman ko jo hain aakasmik upchaar
Niraapeksh bandhu hain, jag mein jinki mahima mangalkaar
Bhavbhav se darte santon ko sharan tatha var gun bhandaar
Ve Teerthankar Mahaaveer prabhu, mam hiy aaven nayandvaar ||8||

Mahaaveeraashtak stotra ko, 'Bhaag' bhakti se keen
Jo padh le athva sune, paramgati vah leen`,
    },
  },
  {
    id: "pratikraman",
    type: "pratikraman",
    title: {
      gu: "પ્રતિક્રમણ",
      hi: "प्रतिक्रमण",
      sa: "",
      en: "Pratikraman",
    },
    text: {
      gu: `ૐ નમઃ સિદ્ધેભ્યઃ। ૐ નમઃ સિદ્ધેભ્યઃ। ૐ નમઃ સિદ્ધેભ્યઃ।
ચિદાનંદૈક રૂપાય જિનાય પરમાત્મને।
પરમાત્મપ્રકાશાય નિત્યં સિદ્ધાત્મને નમઃ॥

પઞ્ચ મિથ્યાત્વ, બારહ અવ્રત, પન્દ્રહ યોગ, પચ્ચીસ કષાય
ઇન સત્તાવન અશુભોં કે પાપ લગે હોં, મેરે વે સબ પાપ મિથ્યા હોં।

નિત્ય-નિગોદ સાત લાખ, ઇતર-નિગોદ સાત લાખ, પૃથ્વીકાય સાત લાખ, જલકાય સાત લાખ,
અગ્નિકાય સાત લાખ, વાયુકાય સાત લાખ, વનસ્પતિકાય દસ લાખ, દ્વી-ઇન્દ્રિય દો લાખ, તીના-
ઇન્દ્રિય દો લાખ, ચૌર-ઇન્દ્રિય દો લાખ, નરકગતિ ચાર લાખ, તિર્યંચગતિ ચાર લાખ, દેવગતિ ચાર લાખ,
મનુષ્યગતિ ચૌદહ લાખ- ઐસી માતા-પક્ષ મેં ચૌરાસી લાખ યોનિયાઁ, એવં પિતાપક્ષ મેં એક સૌ સાઢે
નિન્યાનવે લાખ કુલ-કોટિ, સૂક્ષ્મ-બાદર, પર્યાપ્ત-અપર્યાપ્ત ભેદરૂપ અનેકોં જીવોં કી વિરાધના કી હો,
મેરે વે સબ પાપ મિથ્યા હોં।

તીન દંડ, તીન શલ્ય, તીન ગારવ, તીન મૂઢતા, ચાર આર્તધ્યાન, ચાર રૌદ્રધ્યાન, ચાર વિકથા- ઇન સબ પાપ
મિથ્યા હોં।

વ્રત મેં, ઉપવાસ મેં અતિક્રમ, વ્યતિક્રમ, અતિચાર, અનાચાર કે પાપ લગે હોં, મેરે વે સબ પાપ મિથ્યા હોં।

પાઁચ મિથ્યાત્વ, પાઁચ સ્થાવર-ઘાત, છહ ત્રસ-ઘાત, સપ્ત-વ્યસન, સપ્ત-ભય, આઠ મદ, આઠ મૂલગુણ, દસ
પ્રકાર કે બહિરંગ-પરિગ્રહ, ચૌદહ પ્રકાર કે અંતરંગ-પરિગ્રહ સમ્બન્ધી પાપ કિયે હોં, મેરે યે સબ પાપ મિથ્યા
હોં। પન્દ્રહ પ્રમાદ, સમ્યક્ત્વહીન પરિણતિ કે પાપ કિયે હોં, મેરે યે સબ પાપ મિથ્યા હોં। હસ્ય-વિનોદાદિ
કે દુષ્પરિણામોં કે, દુરાચાર, કુચેષ્ટા કે પાપ કિયે હોં, મેરે યે સબ પાપ મિથ્યા હોં।

હિલાતે, ડોલાતે, દૌડાતે-ચલાતે, સોતે-બૈઠાતે, દેખે, બિના દેખે, જાને-અનજાને, સૂક્ષ્મ વ બાદર જીવોં કો
દબાયા હો, ડરાયા હો, છેદા હો, ભેદા હો, દુઃખી કિયા હો, મન-વચન-કાય કૃત મેરે વે સબ પાપ મિથ્યા હોવેં।

મુનિ, આર્યિકા, શ્રાવક, શ્રાવિકા-રૂપ ચતુર્વિધ-સંઘ કી, સચ્ચે દેવ-શાસ્ત્ર-ગુરુ કી નિંદા કરના અવિનય કે
પાપ કિયે હોં, મેરે વે સબ પાપ મિથ્યા હોવેં। નિર્માલ્ય-દ્રવ્ય કા પાપ લગા હો, મેરા વહ સબ પાપ મિથ્યા
હોવે। મન કે દસ, વચન કે દસ, કાય કે બારહ- ઐસે બત્તીસ પ્રકાર કે દોષ સામાયિક મેં દોષ લગે હોં, મેરે વે
સબ પાપ મિથ્યા હોવેં। પંચ ઇન્દ્રિયોં વ છહ મન સે જાને-અનજાને જો પાપ લગે હોં, મેરે વે સબ પાપ મિથ્યા
હોવેં। મેરા કિસી કે સાથ વૈર-વિરોધ, રાગ-દ્વેષ, માન, માયા, લોભ, નિદ્રા નહીં; સમસ્ત જીવોં કે પ્રતિ મેરે
ઉત્તમ-ક્ષમા હૈ।

યે કર્મોં કા ક્ષય હો, મુઝે સમાધિમરણ પ્રાપ્ત હો, મુઝે ચારોં ગતિયોં કે દુઃખોં સે મુક્તિ મિલે।

ૐ! શાંતિ! શાંતિ! શાંતિ!`,
      hi: `ॐ नमः सिद्धेभ्यः। ॐ नमः सिद्धेभ्यः। ॐ नमः सिद्धेभ्यः।
चिदानंदैक रूपाय जिनाय परमात्मने।
परमात्मप्रकाशाय नित्यं सिद्धात्मने नमः॥

पञ्च मिथ्यात्व, बारह अव्रत, पन्द्रह योग, पच्चीस कषाय
इन सत्तावन अशुभों के पाप लगे हों, मेरे वे सब पाप मिथ्या हों।

नित्य-निगोद सात लाख, इतर-निगोद सात लाख, पृथ्वीकाय सात लाख, जलकाय सात लाख,
अग्निकाय सात लाख, वायुकाय सात लाख, वनस्पतिकाय दस लाख, द्वी-इन्द्रिय दो लाख, तीना-
इन्द्रिय दो लाख, चौर-इन्द्रिय दो लाख, नरकगति चार लाख, तिर्यंचगति चार लाख, देवगति चार लाख,
मनुष्यगति चौदह लाख- ऐसी माता-पक्ष में चौरासी लाख योनियाँ, एवं पितापक्ष में एक सौ साढ़े
निन्यानवे लाख कुल-कोटि, सूक्ष्म-बादर, पर्याप्त-अपर्याप्त भेदरूप अनेकों जीवों की विराधना की हो,
मेरे वे सब पाप मिथ्या हों।

तीन दंड, तीन शल्य, तीन गारव, तीन मूढ़ता, चार आर्तध्यान, चार रौद्रध्यान, चार विकथा- इन सब पाप
मिथ्या हों।

व्रत में, उपवास में अतिक्रम, व्यतिक्रम, अतिचार, अनाचार के पाप लगे हों, मेरे वे सब पाप मिथ्या हों।

पाँच मिथ्यात्व, पाँच स्थावर-घात, छह त्रस-घात, सप्त-व्यसन, सप्त-भय, आठ मद, आठ मूलगुण, दस
प्रकार के बहिरंग-परिग्रह, चौदह प्रकार के अंतरंग-परिग्रह सम्बन्धी पाप किये हों, मेरे ये सब पाप मिथ्या
हों। पन्द्रह प्रमाद, सम्यक्त्वहीन परिणति के पाप किये हों, मेरे ये सब पाप मिथ्या हों। हस्य-विनोदादि
के दुष्परिणामों के, दुराचार, कुचेष्टा के पाप किये हों, मेरे ये सब पाप मिथ्या हों।

हिलाते, डोलाते, दौड़ाते-चलाते, सोते-बैठाते, देखे, बिना देखे, जाने-अनजाने, सूक्ष्म व बादर जीवों को
दबाया हो, डराया हो, छेदा हो, भेदा हो, दुःखी किया हो, मन-वचन-काय कृत मेरे वे सब पाप मिथ्या होवें।

मुनि, आर्यिका, श्रावक, श्राविका-रूप चतुर्विध-संघ की, सच्चे देव-शास्त्र-गुरु की निंदा करना अविनय के
पाप किये हों, मेरे वे सब पाप मिथ्या होवें। निर्माल्य-द्रव्य का पाप लगा हो, मेरा वह सब पाप मिथ्या
होवे। मन के दस, वचन के दस, काय के बारह- ऐसे बत्तीस प्रकार के दोष सामायिक में दोष लगे हों, मेरे वे
सब पाप मिथ्या होवें। पंच इन्द्रियों व छह मन से जाने-अनजाने जो पाप लगे हों, मेरे वे सब पाप मिथ्या
होवें। मेरा किसी के साथ वैर-विरोध, राग-द्वेष, मान, माया, लोभ, निद्रा नहीं; समस्त जीवों के प्रति मेरे
उत्तम-क्षमा है।

ये कर्मों का क्षय हो, मुझे समाधिमरण प्राप्त हो, मुझे चारों गतियों के दुःखों से मुक्ति मिले।

ॐ! शांति! शांति! शांति!`,
      sa: "",
      en: `Om namah Siddhebhyah. Om namah Siddhebhyah. Om namah Siddhebhyah.
Chidaanandaik roopaay Jinaay Parmaatmane.
Parmaatmaprakaashaay nityam Siddhaatmane namah||

Panch mithyaatv, baarah avrat, pandrah yog, pachchees kashaay
in sattaavan ashubhon ke paap lage hon, mere ve sab paap mithya hon.

Nitya-nigod saat laakh, itar-nigod saat laakh, prithvikaay saat laakh, jalkaay saat laakh,
agnikaay saat laakh, vaayukaay saat laakh, vanaspatikaay das laakh, dvi-indriya do laakh, teena-
indriya do laakh, chaur-indriya do laakh, narakgati chaar laakh, tiryanchgati chaar laakh, devgati chaar laakh,
manushyagati chaudah laakh- aisi maata-paksh mein chauraasi laakh yoniyaan, evam pitaapaksh mein ek sau saadhe
ninyaanve laakh kul-koti, sookshm-baadar, paryaapt-aparyaapt bhedroop anekon jeevon ki viraadhna ki ho,
mere ve sab paap mithya hon.

Teen dand, teen shalya, teen gaarav, teen moodhta, chaar aartdhyaan, chaar raudradhyaan, chaar vikatha- in sab paap
mithya hon.

Vrat mein, upvaas mein atikram, vyatikram, atichaar, anaachaar ke paap lage hon, mere ve sab paap mithya hon.

Paanch mithyaatv, paanch sthaavar-ghaat, chhah tras-ghaat, sapt-vyasan, sapt-bhay, aath mad, aath moolgun, das
prakaar ke bahirang-parigrah, chaudah prakaar ke antarang-parigrah sambandhi paap kiye hon, mere ye sab paap mithya
hon. Pandrah pramaad, samyaktvaheen parinati ke paap kiye hon, mere ye sab paap mithya hon. Hasya-vinodaadi
ke dushparinaamon ke, duraachaar, kucheshta ke paap kiye hon, mere ye sab paap mithya hon.

Hilaate, dolaate, daudaate-chalaate, sote-baithaate, dekhe, bina dekhe, jaane-anjaane, sookshm va baadar jeevon ko
dabaaya ho, daraaya ho, chheda ho, bheda ho, dukhi kiya ho, man-vachan-kaay krit mere ve sab paap mithya hoven.

Muni, aaryika, shraavak, shraavika-roop chaturvidh-sangh ki, sachche dev-shaastra-guru ki ninda karna avinay ke
paap kiye hon, mere ve sab paap mithya hoven. Nirmaalya-dravya ka paap laga ho, mera vah sab paap mithya
hove. Man ke das, vachan ke das, kaay ke baarah- aise battees prakaar ke dosh saamaayik mein dosh lage hon, mere ve
sab paap mithya hoven. Panch indriyon va chhah man se jaane-anjaane jo paap lage hon, mere ve sab paap mithya
hoven. Mera kisi ke saath vair-virodh, raag-dvesh, maan, maaya, lobh, nidra nahin; samast jeevon ke prati mere
uttam-kshama hai.

Ye karmon ka kshay ho, mujhe samaadhimaran praapt ho, mujhe chaaron gatiyon ke dukhon se mukti mile.

Om! Shaanti! Shaanti! Shaanti!`,
    },
  },
  {
    id: "shri-anant-jin-shu-karu-saheldiya",
    type: "bhajan",
    title: {
      gu: "શ્રી અનંતજિન શું કરો સાહેલડીયાં",
      hi: "श्री अनंतजिन शुं करो साहेलडीयां",
      sa: "",
      en: "Shri Anant Jin Shu Karu Saheldiya",
    },
    text: {
      gu: `શ્રી અનંતજિન શું કરો સાહેલડીયાં,
ચોલ મજીઠનો રંગ રે ગુણવેલડીયાં;
સાચો રંગ તે ધર્મનો, સા…. બીજો રંગ પતંગ રે. ગુરુ ॥੧॥
ધરમ રંગ જીરણ નહિ, સા૦… દેહ તે જીરણ થાય રે; ગુ૦
સોનું તે વિણસે નહિ, સા…. ઘાટ ઘડામણ જાય રે. ગુ૦||૨||
ત્રાંબું જે રસ વેધીયું, સા૦……… તે હોય જ્યું હેમ રે; ગુ૦
ફરી ત્રાંબું તે નવિ હોવે, સ૦.. એહવો જગગુરુ પ્રેમ રે. ગુ૦ ।।૩।।
ઉત્તમ ગુણ અનુરાગથી સા૦… લહિએ ઉત્તમ ઠામ રે; ગુ૦
ઉત્તમ નિજ મહિમા વધે, સા૦… દીપે ઉત્તમ ધામ રે. ગુ૦ ॥४॥
ઉદક બિન્દુ સાયર ભળ્યો, સા૦… જિમ હોય અક્ષય અભંગ રે;
ગુ૦ જસ કહે પ્રભુ ગુણે સા૦… તિમ મુજ પ્રેમ પ્રસંગરે. ગુ૦ ||૫ ॥`,
      hi: `श्री अनंतजिन शुं करो साहेलडीयां,
चोल मजीठनो रंग रे गुणवेलडीयां;
साचो रंग ते धर्मनो, सा…. बीजो रंग पतंग रे. गुरु ॥੧॥
धरम रंग जीरण नहि, सा०… देह ते जीरण थाय रे; गु०
सोनुं ते विणसे नहि, सा…. घाट घडामण जाय रे. गु०||२||
त्रांबुं जे रस वेधीयुं, सा०……… ते होय ज्युं हेम रे; गु०
फरी त्रांबुं ते नवि होवे, स०.. एहवो जगगुरु प्रेम रे. गु० ।।३।।
उत्तम गुण अनुरागथी सा०… लहिए उत्तम ठाम रे; गु०
उत्तम निज महिमा वधे, सा०… दीपे उत्तम धाम रे. गु० ॥४॥
उदक बिन्दु सायर भळ्यो, सा०… जिम होय अक्षय अभंग रे;
गु० जस कहे प्रभु गुणे सा०… तिम मुज प्रेम प्रसंगरे. गु० ||५ ॥`,
      sa: "",
      en: `Shree anantajina shun karo saaheladeeyaan,
Chola majeethano ranga re gunaveladeeyaan;
Saacho ranga te dharmano, saa…. beejo ranga patanga re. guru ||1||
Dharama ranga jeerana nahi, saa0… deha te jeerana thaaya re; gu0
Sonun te vinase nahi, saa…. ghaata ghadaamana jaaya re. gu0||2||
Traanbun je rasa vedheeyun, saa0……… te hoya jyun hema re; gu0
Pharee traanbun te navi hove, sa0.. ehavo jagaguru prema re. gu0 ||3||
Uttama guna anuraagathee saa0… lahie uttama thaama re; gu0
Uttama nija mahimaa vadhe, saa0… deepe uttama dhaama re. gu0 ||4||
Udaka bindu saayara bhalyo, saa0… jima hoya akshaya abhanga re;
Gu0 jasa kahe prabhu gune saa0… tima muja prema prasangare. gu0 ||5 ||`,
    },
  },
  {
    id: "abolda-shana-lidha-che",
    type: "bhajan",
    title: {
      gu: "અબોલડાં શાના લીધાં છે રાજ, જીવજીવન પ્રભુ માહરા",
      hi: "अबोलडां शाना लीधां छे राज, जीवजीवन प्रभु माहरा",
      sa: "",
      en: "Abolda Shana Lidha Che",
    },
    text: {
      gu: `અબોલડાં શાના લીધાં છે રાજ, જીવજીવન પ્રભુ માહરા;
તમે અમારા અમે તમારા, વાસ નિગોદમાં રહેતાં.||૧||
કાલ અનંતના સ્નેહી પ્યારા, કદીય ન અંતર કરતા;
બાદર સ્થાવરમાં બેહુ આપણ, કાલ અસંખ્ય નિગમતાં.||૨||
વિકલેન્દ્રિયમાં કાલ સંખ્યાતા, વિસર્યા નવિ વિસરતા;
નરકસ્થાને રહ્યા બેહુ સાથે, તિહાં પણ બહુ દુઃખ સહતા.||૩||
પરમાધામી સન્મુખ આપણ, ટગ મગ નજરે જોતાં;
દેવના ભવમાં એક વિમાને, દેવનાં સુખ અનુભવતા.||૪||
એકણ પાસે દેવશય્યામાં, થેઈ થેઈ નાટક સુણતાં;
અને અમે બેઉ સાથે, જિન જન્મ મહોત્સવ કરતા.॥૫॥
તિર્યંચગતિમાં સુખદુઃખ અનુભવતા, તિહાં પણ સંગ ચલંતા;
એક દિન સમવસરણમાં આપણ, જિનગુણ અમૃત પીતા.||૬||
એક દિન તમે અને અમે બેઉં સાથે, વેલડી વળગીને ફરતા;
એક દિન બાળપણામાં આપણે, ગેડી દડે નિત્ય રમતાં.||૭||
તમે અને અમે બેઉ સિદ્ધ સ્વરુપી, એવી કથા નિત્ય કરતા;
એક કુલ એક ગોત્ર ઠેકાણે, એક જ થાળીમાં જમતા.||૮||
એક દિન હું ઠાકોર તમે ચાકર, સેવા માહરી કરતા;
આજ તો આપ થયા જગ ઠાકોર, સિદ્ધિવધૂના પનોતા.||૯||
કાલ અનંતનો સ્નેહ વિસારી, કામ કીધાં મનગમતાં;
હવે અંતર કેમ કીધું પ્રભુજી, ચૌદ રાજ જઈ પહોંતા.||૧૦||
“દીપવિજય’ કવિરાજ પ્રભુજી, જગતારણ જગનેતા;
નિજ સેવકને યશપદ દીજે, અનંત ગુણે ગુણવંતા.||૧૧||`,
      hi: `अबोलडां शाना लीधां छे राज, जीवजीवन प्रभु माहरा;
तमे अमारा अमे तमारा, वास निगोदमां रहेतां.||१||
काल अनंतना स्नेही प्यारा, कदीय न अंतर करता;
बादर स्थावरमां बेहु आपण, काल असंख्य निगमतां.||२||
विकलेन्द्रियमां काल संख्याता, विसर्या नवि विसरता;
नरकस्थाने रह्या बेहु साथे, तिहां पण बहु दुःख सहता.||३||
परमाधामी सन्मुख आपण, टग मग नजरे जोतां;
देवना भवमां एक विमाने, देवनां सुख अनुभवता.||४||
एकण पासे देवशय्यामां, थेई थेई नाटक सुणतां;
अने अमे बेउ साथे, जिन जन्म महोत्सव करता.॥५॥
तिर्यंचगतिमां सुखदुःख अनुभवता, तिहां पण संग चलंता;
एक दिन समवसरणमां आपण, जिनगुण अमृत पीता.||६||
एक दिन तमे अने अमे बेउं साथे, वेलडी वळगीने फरता;
एक दिन बाळपणामां आपणे, गेडी दडे नित्य रमतां.||७||
तमे अने अमे बेउ सिद्ध स्वरुपी, एवी कथा नित्य करता;
एक कुल एक गोत्र ठेकाणे, एक ज थाळीमां जमता.||८||
एक दिन हुं ठाकोर तमे चाकर, सेवा माहरी करता;
आज तो आप थया जग ठाकोर, सिद्धिवधूना पनोता.||९||
काल अनंतनो स्नेह विसारी, काम कीधां मनगमतां;
हवे अंतर केम कीधुं प्रभुजी, चौद राज जई पहोंता.||१०||
“दीपविजय’ कविराज प्रभुजी, जगतारण जगनेता;
निज सेवकने यशपद दीजे, अनंत गुणे गुणवंता.||११||`,
      sa: "",
      en: `Aboladaan shaanaa leedhaan chhe raaja, jeevajeevana prabhu maaharaa;
Tame amaaraa ame tamaaraa, vaasa nigodamaan rahetaan.||1||
Kaala anantanaa snehee pyaaraa, kadeeya na antara karataa;
Baadara sthaavaramaan behu aapana, kaala asankhya nigamataan.||2||
Vikalendriyamaan kaala sankhyaataa, visaryaa navi visarataa;
Narakasthaane rahyaa behu saathe, tihaan pana bahu dukha sahataa.||3||
Paramaadhaamee sanmukha aapana, taga maga najare jotaan;
Devanaa bhavamaan eka vimaane, devanaan sukha anubhavataa.||4||
Ekana paase devashayyaamaan, theee theee naataka sunataan;
Ane ame beu saathe, jina janma mahotsava karataa.||5||
Tiryanchagatimaan sukhadukha anubhavataa, tihaan pana sanga chalantaa;
Eka dina samavasaranamaan aapana, jinaguna amruta peetaa.||6||
Eka dina tame ane ame beun saathe, veladee valageene pharataa;
Eka dina baalapanaamaan aapane, gedee dade nitya ramataan.||7||
Tame ane ame beu siddha svarupee, evee kathaa nitya karataa;
Eka kula eka gotra thekaane, eka ja thaaleemaan jamataa.||8||
Eka dina hun thaakora tame chaakara, sevaa maaharee karataa;
Aaja to aapa thayaa jaga thaakora, siddhivadhoonaa panotaa.||9||
Kaala anantano sneha visaaree, kaama keedhaan managamataan;
Have antara kema keedhun prabhujee, chauda raaja jaee pahontaa.||10||
“deepavijaya’ kaviraaja prabhujee, jagataarana jaganetaa;
Nija sevakane yashapada deeje, ananta gune gunavantaa.||11||`,
    },
  },
  {
    id: "aa-kal-ma-sadhu-thanara-mahan",
    type: "bhajan",
    title: {
      gu: "આ કાળમાં સાધુ થનારા મહાન",
      hi: "आ काळमां साधु थनारा महान",
      sa: "",
      en: "Aa Kal Ma Sadhu Thanara Mahan",
    },
    text: {
      gu: `આ કાળમાં સાધુ થનારા મહાન
યૌવન વયમાં સુખ છોડનારા મહાન ,
આ કાળમાં સાધુ થનારા મહાન(૨)…
યૌવનનું પતન કરાવે એવો છે આ સમય,
વિષયોનું વ્યસન કરાવે એવો છે આ સમય,
આવા સમયમાં સઘળી વાસનાઓ જીતીને ,
મનને વિરાગમાં વાળનારા મહાન …આ કાળમાં સાધુ….
સાધુ થનારા મહાન(૨)…
નમસ્કાર અણગારને, જિનશાસન શણગારને
જેણે ગુરુ કનેથી તત્વો ગ્રહણ કર્યાં,
શાસ્ત્રોમાંહી રહેલા સત્યો શ્રવણ કર્યાં ,
ભવમાં ભમાડનારા કર્મોથી છૂટવા ,
સંયમ ભણી કદમ માંડનારા મહાન…આ કાળમાં સાધુ….
નમસ્કાર અણગારને, જિનશાસન શણગારને`,
      hi: `आ काळमां साधु थनारा महान
यौवन वयमां सुख छोडनारा महान ,
आ काळमां साधु थनारा महान(२)…
यौवननुं पतन करावे एवो छे आ समय,
विषयोनुं व्यसन करावे एवो छे आ समय,
आवा समयमां सघळी वासनाओ जीतीने ,
मनने विरागमां वाळनारा महान …आ काळमां साधु….
साधु थनारा महान(२)…
नमस्कार अणगारने, जिनशासन शणगारने
जेणे गुरु कनेथी तत्वो ग्रहण कर्यां,
शास्त्रोमांही रहेला सत्यो श्रवण कर्यां ,
भवमां भमाडनारा कर्मोथी छूटवा ,
संयम भणी कदम मांडनारा महान…आ काळमां साधु….
नमस्कार अणगारने, जिनशासन शणगारने`,
      sa: "",
      en: `Aa kaalamaan saadhu thanaaraa mahaana
Yauvana vayamaan sukha chhodanaaraa mahaana ,
Aa kaalamaan saadhu thanaaraa mahaana(2)…
Yauvananun patana karaave evo chhe aa samaya,
Vishayonun vyasana karaave evo chhe aa samaya,
Aavaa samayamaan saghalee vaasanaao jeeteene ,
Manane viraagamaan vaalanaaraa mahaana …aa kaalamaan saadhu….
Saadhu thanaaraa mahaana(2)…
Namaskaara anagaarane, jinashaasana shanagaarane
Jene guru kanethee tatvo grahana karyaan,
Shaastromaanhee rahelaa satyo shravana karyaan ,
Bhavamaan bhamaadanaaraa karmothee chhootavaa ,
Sanyama bhanee kadama maandanaaraa mahaana…aa kaalamaan saadhu….
Namaskaara anagaarane, jinashaasana shanagaarane`,
    },
  },
  {
    id: "aai-baso-bhagwan",
    type: "bhajan",
    title: {
      gu: "આઈ બસો ભગવાન, મેરે મન! આઈ બસો ભગવાન",
      hi: "आई बसो भगवान, मेरे मन! आई बसो भगवान",
      sa: "",
      en: "Aai Baso Bhagwan",
    },
    text: {
      gu: `આઈ બસો ભગવાન, મેરે મન! આઈ બસો ભગવાન;
મૈં નિર્ગુણી ઈતના માંગત હું, થાયે મેરા કલ્યાણ.||૧||
મેરે મનકી તુમ સબ જાનો, ક્યા કરું આપસે બ્યાન;
વિશ્વ હિતૈષી દીનદયાલુ, રખીયે મુજ પર ધ્યાન.||૨||
ભોગાધીન હોવત મન મેલું, બિસરી તુમ ગુણ ગાન;
વહાં સે છુડાવો હૃદયે આઈ, અરિભંજક ભગવાન.||૩||
આપ કૃપા સે તર ગયે કેઈ, રહ ગયા મેં દર્દવાન;
નિગાહ રખકે નિર્મલ કિજીયે, ધનવંતરી ભગવાન.||૪||
શ્રી શંખેશ્વર પાર્શ્વ જિનેશ્વર, દીજિયે તુમ ગુણ ગાન;
ઈનહી સહારે “ચિદ્ઘન’ દેવા, બનુંગા આપ સમાન.||૫||`,
      hi: `आई बसो भगवान, मेरे मन! आई बसो भगवान;
मैं निर्गुणी ईतना मांगत हुं, थाये मेरा कल्याण.||१||
मेरे मनकी तुम सब जानो, क्या करुं आपसे ब्यान;
विश्व हितैषी दीनदयालु, रखीये मुज पर ध्यान.||२||
भोगाधीन होवत मन मेलुं, बिसरी तुम गुण गान;
वहां से छुडावो हृदये आई, अरिभंजक भगवान.||३||
आप कृपा से तर गये केई, रह गया में दर्दवान;
निगाह रखके निर्मल किजीये, धनवंतरी भगवान.||४||
श्री शंखेश्वर पार्श्व जिनेश्वर, दीजिये तुम गुण गान;
ईनही सहारे “चिद्घन’ देवा, बनुंगा आप समान.||५||`,
      sa: "",
      en: `Aaee baso bhagavaana, mere mana! aaee baso bhagavaana;
Main nirgunee eetanaa maangata hun, thaaye meraa kalyaana.||1||
Mere manakee tuma saba jaano, kyaa karun aapase byaana;
Vishva hitaishee deenadayaalu, rakheeye muja para dhyaana.||2||
Bhogaadheena hovata mana melun, bisaree tuma guna gaana;
Vahaan se chhudaavo hrudaye aaee, aribhanjaka bhagavaana.||3||
Aapa krupaa se tara gaye keee, raha gayaa men dardavaana;
Nigaaha rakhake nirmala kijeeye, dhanavantaree bhagavaana.||4||
Shree shankheshvara paarshva jineshvara, deejiye tuma guna gaana;
Eenahee sahaare “chidghana’ devaa, banungaa aapa samaana.||5||`,
    },
  },
  {
    id: "aaj-dev-arihant-namu",
    type: "bhajan",
    title: {
      gu: "આજ દેવ અરિહંત નમું, સમરું તારું નામ",
      hi: "आज देव अरिहंत नमुं, समरुं तारुं नाम",
      sa: "",
      en: "Aaj Dev Arihant Namu",
    },
    text: {
      gu: `આજ દેવ અરિહંત નમું, સમરું તારું નામ;
જ્યાં જ્યાં પ્રતિમા જિન તણી, ત્યાં ત્યાં કરું પ્રણામ.||૧||
શત્રુંજય શ્રી આદિદેવ, નેમ નમું ગિરનાર;
તારંગે શ્રી અજિતનાથ, આબુ જુહાર.||૨||
અષ્ટાપદ ગિરિ ઉપરે, જિન ચોવીશે જોય;
મણીમય મૂરતિ માનશું, ભરતે ભરાવી સોય.||૩||
સમ્મેતશિખર તીરથ વડું એ, જિહાં વીશે જિનપાય;
વૈભાર ગિરિવર ઉપરે, શ્રી વીર જિનેસર રાય.||૪||
માંડવગઢનો રાજિયો, નામે દેવ સુપાસ;
“ઋષભ’ કહે જિન સમરતાં, પહોંચે મનની આશ.||૫||`,
      hi: `आज देव अरिहंत नमुं, समरुं तारुं नाम;
ज्यां ज्यां प्रतिमा जिन तणी, त्यां त्यां करुं प्रणाम.||१||
शत्रुंजय श्री आदिदेव, नेम नमुं गिरनार;
तारंगे श्री अजितनाथ, आबु जुहार.||२||
अष्टापद गिरि उपरे, जिन चोवीशे जोय;
मणीमय मूरति मानशुं, भरते भरावी सोय.||३||
सम्मेतशिखर तीरथ वडुं ए, जिहां वीशे जिनपाय;
वैभार गिरिवर उपरे, श्री वीर जिनेसर राय.||४||
मांडवगढनो राजियो, नामे देव सुपास;
“ऋषभ’ कहे जिन समरतां, पहोंचे मननी आश.||५||`,
      sa: "",
      en: `Aaja deva arihanta namun, samarun taarun naama;
Jyaan jyaan pratimaa jina tanee, tyaan tyaan karun pranaama.||1||
Shatrunjaya shree aadideva, nema namun giranaara;
Taarange shree ajitanaatha, aabu juhaara.||2||
Ashtaapada giri upare, jina choveeshe joya;
Maneemaya moorati maanashun, bharate bharaavee soya.||3||
Sammetashikhara teeratha vadun e, jihaan veeshe jinapaaya;
Vaibhaara girivara upare, shree veera jinesara raaya.||4||
Maandavagadhano raajiyo, naame deva supaasa;
“rushabha’ kahe jina samarataan, pahonche mananee aasha.||5||`,
    },
  },
  {
    id: "aaj-jinaraj-muj-kaj",
    type: "bhajan",
    title: {
      gu: "આજ જિનરાજ! મુજ કાજ સિધ્યાં સવે",
      hi: "आज जिनराज! मुज काज सिध्यां सवे",
      sa: "",
      en: "Aaj Jinaraj Muj Kaj",
    },
    text: {
      gu: `આજ જિનરાજ! મુજ કાજ સિધ્યાં સવે,
વિનંતિ માહરી ચિત્ત ધારી;
માર્ગ જે મેં લહ્યો તુજ કૃપારસ થકી,
તો હુઈ સમ્પદા પ્રગટ સારી.||૧||
વેગલો મત હુજે દેવ! મુજ મન થકી,
કમલના વન થકી જિમ પરાગો;
ચમક પાષાણ જિમ લોહને ખેંચશે,
મુક્તિને સહજ તુજ ભક્તિ રાગો.||૨||
તું વસે જો પ્રભુ! હર્ષભર હિયડલે,
તો સકલ પાપના બંધ તૂટે;
ઉગતે ગગન સૂર્ય તણે મણ્ડલે,
દશ દિશિ જિમ તિમિર પડલ ફૂટ.||૩||
સીંચજે તું સદા વિપુલ કરુણારસે,
મુજ મને શુદ્ધ મતિ કલ્પવેલી;
નાણ દંસણ કુસુમ ચરણ વર મંજરી,
મુક્તિ ફલ આપશે તે અકેલી.||૪||
લોકસંજ્ઞા થકી લોક બહુ વાઉલો,
રાઉલો દાસ તે સવિ ઉવેખે;
એક તુજ આણસું જેહ રાતા રહે,
તેહને એહ નિજ મિત્ર દેખે.||૫||
આણ જિનભાણ! તુજ એક હું શિર ધરું,
અવરની વાણી નવિ કાને સુણીએ;
સર્વ દર્શન તણું મૂલ તુજ શાશન,
તેણે તે એક સુવિવેક થુણીએ.||૬||
તુજ વચન રાગ સુખસાગરે હું ગણું,
સકલ સુર મનુજ સુખ એક બિંદુ;
સાર કરજો સદા દેવ! સેવક તણી,
સુમતિ કમલિની વન દિણિંદુ.||૭||
જ્ઞાનયોગે ધરી તૃપ્તિ નવિ લાજિયે,
ગાજિયે એક તુજ વચનરાગે;
શક્તિ ઉલ્લાસ અધિકો હોંશે તુજ થકી,
તું સદા સાયાલ સુખ હેટ જાગે.||૮||`,
      hi: `आज जिनराज! मुज काज सिध्यां सवे,
विनंति माहरी चित्त धारी;
मार्ग जे में लह्यो तुज कृपारस थकी,
तो हुई सम्पदा प्रगट सारी.||१||
वेगलो मत हुजे देव! मुज मन थकी,
कमलना वन थकी जिम परागो;
चमक पाषाण जिम लोहने खेंचशे,
मुक्तिने सहज तुज भक्ति रागो.||२||
तुं वसे जो प्रभु! हर्षभर हियडले,
तो सकल पापना बंध तूटे;
उगते गगन सूर्य तणे मण्डले,
दश दिशि जिम तिमिर पडल फूट.||३||
सींचजे तुं सदा विपुल करुणारसे,
मुज मने शुद्ध मति कल्पवेली;
नाण दंसण कुसुम चरण वर मंजरी,
मुक्ति फल आपशे ते अकेली.||४||
लोकसंज्ञा थकी लोक बहु वाउलो,
राउलो दास ते सवि उवेखे;
एक तुज आणसुं जेह राता रहे,
तेहने एह निज मित्र देखे.||५||
आण जिनभाण! तुज एक हुं शिर धरुं,
अवरनी वाणी नवि काने सुणीए;
सर्व दर्शन तणुं मूल तुज शाशन,
तेणे ते एक सुविवेक थुणीए.||६||
तुज वचन राग सुखसागरे हुं गणुं,
सकल सुर मनुज सुख एक बिंदु;
सार करजो सदा देव! सेवक तणी,
सुमति कमलिनी वन दिणिंदु.||७||
ज्ञानयोगे धरी तृप्ति नवि लाजिये,
गाजिये एक तुज वचनरागे;
शक्ति उल्लास अधिको होंशे तुज थकी,
तुं सदा सायाल सुख हेट जागे.||८||`,
      sa: "",
      en: `Aaja jinaraaja! muja kaaja sidhyaan save,
Vinanti maaharee chitta dhaaree;
Maarga je men lahyo tuja krupaarasa thakee,
To huee sampadaa pragata saaree.||1||
Vegalo mata huje deva! muja mana thakee,
Kamalanaa vana thakee jima paraago;
Chamaka paashaana jima lohane khenchashe,
Muktine sahaja tuja bhakti raago.||2||
Tun vase jo prabhu! harshabhara hiyadale,
To sakala paapanaa bandha toote;
Ugate gagana soorya tane mandale,
Dasha dishi jima timira padala phoota.||3||
Seenchaje tun sadaa vipula karunaarase,
Muja mane shuddha mati kalpavelee;
Naana dansana kusuma charana vara manjaree,
Mukti phala aapashe te akelee.||4||
Lokasanjnyaa thakee loka bahu vaaulo,
Raaulo daasa te savi uvekhe;
Eka tuja aanasun jeha raataa rahe,
Tehane eha nija mitra dekhe.||5||
Aana jinabhaana! tuja eka hun shira dharun,
Avaranee vaanee navi kaane suneee;
Sarva darshana tanun moola tuja shaashana,
Tene te eka suviveka thuneee.||6||
Tuja vachana raaga sukhasaagare hun ganun,
Sakala sura manuja sukha eka bindu;
Saara karajo sadaa deva! sevaka tanee,
Sumati kamalinee vana dinindu.||7||
Jnyaanayoge dharee trupti navi laajiye,
Gaajiye eka tuja vachanaraage;
Shakti ullaasa adhiko honshe tuja thakee,
Tun sadaa saayaala sukha heta jaage.||8||`,
    },
  },
  {
    id: "aaj-jinraj-muj-kaj",
    type: "bhajan",
    title: {
      gu: "આજ જિનરાજ! મુજ કાજ સિધ્યાં સવે",
      hi: "आज जिनराज! मुज काज सिध्यां सवे",
      sa: "",
      en: "Aaj Jinraj Muj Kaj",
    },
    text: {
      gu: `આજ જિનરાજ! મુજ કાજ સિધ્યાં સવે,
તું કૃપાકુંભ જો મુજ તૂઠો;
કલ્પતરુ કામઘટ કામધેનુ મળ્યો,
આંગણે અમીયરસ મેહ વૂઠો.||૧||
વીર તું કુંડપુર નયર ભૂષણ હુઓ,
રાય સિદ્ધાર્થ ત્રિશલા તનુજ જો;
સિંહ લંછન કનક વર્ણ કર સપ્ત તનુ,
તુજ સમો જગતમાં કોઈ ન દૂજો.||૨||
સિંહ પરે એકલો ધીર સંયમ ગ્રહી;
, આયુ બહોંતેર વરસ પૂર્ણ પાળી;
પુરી અપાપાએ નિષ્પાપ શિવવહૂ વર્યો,
તિહાં થકી પર્વ પ્રગટી દિવાળી.||૩||
તુજ ચઉદ મુનિવર મહાસંયમી,
સાહૂણી સહસ છત્રીસ રાજે;
યક્ષ માતંગ સિદ્ધાયિકા વર સૂરી,
સકલ તુજ ભવિકની ભીતિ ભાંજે.||૪||
. તુજ વચનરાગ સુખસાગરે ઝીલતો,
પીલતો મોહ મિથ્યાત્વ વેલી;
આવિયો ભાવિયો ધર્મપથ હું હવે,
દીજિયે પરમપદ હોઈ બેલી.||૫||
સિંહ નિશદીહ જો હૃદયગિરિ મુજ રમે
તું સુગુણ લીહ અવિચલ નિરીહો;
તો કુમત રંગ માતંગના જૂથથ
મુજ નહિ કોઈ લવલેશ બીહો.||૬||
ચરણ તુજ શરણ મેં ચરણગુણનિધિ ગ્રહ્યાં,
ભવ કરણ દમ શર્મ દાખો; હાથ જોડી કહે
“જશવિજય” બુધ ઈશ્યું,
દેવ! નિજ ભવનમાં દાસ રાખો.||૭||`,
      hi: `आज जिनराज! मुज काज सिध्यां सवे,
तुं कृपाकुंभ जो मुज तूठो;
कल्पतरु कामघट कामधेनु मळ्यो,
आंगणे अमीयरस मेह वूठो.||१||
वीर तुं कुंडपुर नयर भूषण हुओ,
राय सिद्धार्थ त्रिशला तनुज जो;
सिंह लंछन कनक वर्ण कर सप्त तनु,
तुज समो जगतमां कोई न दूजो.||२||
सिंह परे एकलो धीर संयम ग्रही;
, आयु बहोंतेर वरस पूर्ण पाळी;
पुरी अपापाए निष्पाप शिववहू वर्यो,
तिहां थकी पर्व प्रगटी दिवाळी.||३||
तुज चउद मुनिवर महासंयमी,
साहूणी सहस छत्रीस राजे;
यक्ष मातंग सिद्धायिका वर सूरी,
सकल तुज भविकनी भीति भांजे.||४||
. तुज वचनराग सुखसागरे झीलतो,
पीलतो मोह मिथ्यात्व वेली;
आवियो भावियो धर्मपथ हुं हवे,
दीजिये परमपद होई बेली.||५||
सिंह निशदीह जो हृदयगिरि मुज रमे
तुं सुगुण लीह अविचल निरीहो;
तो कुमत रंग मातंगना जूथथ
मुज नहि कोई लवलेश बीहो.||६||
चरण तुज शरण में चरणगुणनिधि ग्रह्यां,
भव करण दम शर्म दाखो; हाथ जोडी कहे
“जशविजय” बुध ईश्युं,
देव! निज भवनमां दास राखो.||७||`,
      sa: "",
      en: `Aaja jinaraaja! muja kaaja sidhyaan save,
Tun krupaakunbha jo muja tootho;
Kalpataru kaamaghata kaamadhenu malyo,
Aangane ameeyarasa meha vootho.||1||
Veera tun kundapura nayara bhooshana huo,
Raaya siddhaartha trishalaa tanuja jo;
Sinha lanchhana kanaka varna kara sapta tanu,
Tuja samo jagatamaan koee na doojo.||2||
Sinha pare ekalo dheera sanyama grahee;
, aayu bahontera varasa poorna paalee;
Puree apaapaae nishpaapa shivavahoo varyo,
Tihaan thakee parva pragatee divaalee.||3||
Tuja chauda munivara mahaasanyamee,
Saahoonee sahasa chhatreesa raaje;
Yaksha maatanga siddhaayikaa vara sooree,
Sakala tuja bhavikanee bheeti bhaanje.||4||
. tuja vachanaraaga sukhasaagare jheelato,
Peelato moha mithyaatva velee;
Aaviyo bhaaviyo dharmapatha hun have,
Deejiye paramapada hoee belee.||5||
Sinha nishadeeha jo hrudayagiri muja rame
Tun suguna leeha avichala nireeho;
To kumata ranga maatanganaa joothatha
Muja nahi koee lavalesha beeho.||6||
Charana tuja sharana men charanagunanidhi grahyaan,
Bhava karana dama sharma daakho; haatha jodee kahe
“jashavijaya” budha eeshyun,
Deva! nija bhavanamaan daasa raakho.||7||`,
    },
  },
  {
    id: "aaj-manorath-maro-bhamiyo",
    type: "bhajan",
    title: {
      gu: "આજ માહરો ફળિયો, પાસ જિનેસર મળિયો રે",
      hi: "आज माहरो फळियो, पास जिनेसर मळियो रे",
      sa: "",
      en: "Aaj Manorath Maro Bhamiyo",
    },
    text: {
      gu: `આજ માહરો ફળિયો, પાસ જિનેસર મળિયો રે;
દુર્ગતિનો ભય દૂરે ટળિયો, પાયો પુણ્ય પોટલિયો રે.||૧||
મોહ મહાભટ જે છે બળિયો, સયલ લોક જેણે છળિયો રે;
માયા માંહે જગ સહું ડુળિયો, તે તુજ તેજે ગળિયો રે.||૨||
તુજ વિણ ભવ બહું રુલિયો, કુગુરુ કુદેવે છળિયો રે;
ઝાઝા દુઃખમાંહી હાંફળિયો, ગતિ ચારે આફળિયો રે.||૩||
કુમતિ કદાગ્રહ હેજે દળિયો, જબ જિનવર સાંભળીયો રે;
પ્રભુ દીઠે આનંદ ઉછળિયો, મગમાંહે ઘી ઢળિયો રે.||૪||
અવર દેવશું નેહ વિચલિયો, જિનજીશું ચિત્ત ભળિયો રે;
પામી સરસ સુધારસ ફળિયો, કુણ લે જલ ભાંભળિયો રે.||૫||
જન મન વાંછિત પૂરણ ફળિયો, ચિંતામણિ ઝળહળિયો રે;
“મેઘ” કહે ગુણમણિ માદલિયો, ઘો દોલત દાદલિયો રે.||૬||`,
      hi: `आज माहरो फळियो, पास जिनेसर मळियो रे;
दुर्गतिनो भय दूरे टळियो, पायो पुण्य पोटलियो रे.||१||
मोह महाभट जे छे बळियो, सयल लोक जेणे छळियो रे;
माया मांहे जग सहुं डुळियो, ते तुज तेजे गळियो रे.||२||
तुज विण भव बहुं रुलियो, कुगुरु कुदेवे छळियो रे;
झाझा दुःखमांही हांफळियो, गति चारे आफळियो रे.||३||
कुमति कदाग्रह हेजे दळियो, जब जिनवर सांभळीयो रे;
प्रभु दीठे आनंद उछळियो, मगमांहे घी ढळियो रे.||४||
अवर देवशुं नेह विचलियो, जिनजीशुं चित्त भळियो रे;
पामी सरस सुधारस फळियो, कुण ले जल भांभळियो रे.||५||
जन मन वांछित पूरण फळियो, चिंतामणि झळहळियो रे;
“मेघ” कहे गुणमणि मादलियो, घो दोलत दादलियो रे.||६||`,
      sa: "",
      en: `Aaja maaharo phaliyo, paasa jinesara maliyo re;
Durgatino bhaya doore taliyo, paayo punya potaliyo re.||1||
Moha mahaabhata je chhe baliyo, sayala loka jene chhaliyo re;
Maayaa maanhe jaga sahun duliyo, te tuja teje galiyo re.||2||
Tuja vina bhava bahun ruliyo, kuguru kudeve chhaliyo re;
Jhaajhaa dukhamaanhee haanphaliyo, gati chaare aaphaliyo re.||3||
Kumati kadaagraha heje daliyo, jaba jinavara saanbhaleeyo re;
Prabhu deethe aananda uchhaliyo, magamaanhe ghee dhaliyo re.||4||
Avara devashun neha vichaliyo, jinajeeshun chitta bhaliyo re;
Paamee sarasa sudhaarasa phaliyo, kuna le jala bhaanbhaliyo re.||5||
Jana mana vaanchhita poorana phaliyo, chintaamani jhalahaliyo re;
“megha” kahe gunamani maadaliyo, gho dolata daadaliyo re.||6||`,
    },
  },
  {
    id: "aaj-mara-prabhuji-samu-juone",
    type: "bhajan",
    title: {
      gu: "આજ મારા પ્રભુજી સામું જુઓને, સેવક કહીને બોલાવો રે",
      hi: "आज मारा प्रभुजी सामुं जुओने, सेवक कहीने बोलावो रे",
      sa: "",
      en: "Aaj Mara Prabhuji Samu Juone",
    },
    text: {
      gu: `આજ મારા પ્રભુજી સામું જુઓને, સેવક કહીને બોલાવો રે;
એટલે હું મનગમતું પામ્યો, રુઠડાં બાળ મનાવો, મોરા સાંઈરે. ।। ૧ ||
પતિત પાવન શરણાગત વત્સલ, એ જશ જગમાં ચાવો રે;
મન રે મનાવ્યા વિણ નહિ મુકું, એહિ જ મારો દાવો.||2||
કબજે આવ્યા તે નહિ મુકું, જિહાં લગે તુમ સમ થાવું રે;
જો તુમ ધ્યાન વિના શિવ લહીએ, તો તે દાવ બતાવો.||3||
મહાગોપ ને મહાનિર્યામક, એવા-એવા બિરુદ ધરાવો રે;
તો શું આશ્રિતને ઉદ્ધરતાં, બહુ બહુ શું કહાવો.||4||
‘જ્ઞાનવિમલ’ ગુરુનો નિધિ મહિમા, મંગલ એહિ વધાવો રે;
અચલ અભેદપણે અવલંબી, અહોનિશ એહિ દિલ ધ્યાવો. ॥૫॥`,
      hi: `आज मारा प्रभुजी सामुं जुओने, सेवक कहीने बोलावो रे;
एटले हुं मनगमतुं पाम्यो, रुठडां बाळ मनावो, मोरा सांईरे. ।। १ ||
पतित पावन शरणागत वत्सल, ए जश जगमां चावो रे;
मन रे मनाव्या विण नहि मुकुं, एहि ज मारो दावो.||2||
कबजे आव्या ते नहि मुकुं, जिहां लगे तुम सम थावुं रे;
जो तुम ध्यान विना शिव लहीए, तो ते दाव बतावो.||3||
महागोप ने महानिर्यामक, एवा-एवा बिरुद धरावो रे;
तो शुं आश्रितने उद्धरतां, बहु बहु शुं कहावो.||4||
‘ज्ञानविमल’ गुरुनो निधि महिमा, मंगल एहि वधावो रे;
अचल अभेदपणे अवलंबी, अहोनिश एहि दिल ध्यावो. ॥५॥`,
      sa: "",
      en: `Aaja maaraa prabhujee saamun juone, sevaka kaheene bolaavo re;
Etale hun managamatun paamyo, ruthadaan baala manaavo, moraa saaneere. || 1 ||
Patita paavana sharanaagata vatsala, e jasha jagamaan chaavo re;
Mana re manaavyaa vina nahi mukun, ehi ja maaro daavo.||2||
Kabaje aavyaa te nahi mukun, jihaan lage tuma sama thaavun re;
Jo tuma dhyaana vinaa shiva laheee, to te daava bataavo.||3||
Mahaagopa ne mahaaniryaamaka, evaa-evaa biruda dharaavo re;
To shun aashritane uddharataan, bahu bahu shun kahaavo.||4||
‘jnyaanavimala’ guruno nidhi mahimaa, mangala ehi vadhaavo re;
Achala abhedapane avalanbee, ahonisha ehi dila dhyaavo. ||5||`,
    },
  },
  {
    id: "aaj-safal-din-muj-tano",
    type: "bhajan",
    title: {
      gu: "આજ સફલ દિન મુજ તણો, મુનિસુવ્રત દીઠાં",
      hi: "आज सफल दिन मुज तणो, मुनिसुव्रत दीठां",
      sa: "",
      en: "Aaj Safal Din Muj Tano",
    },
    text: {
      gu: `આજ સફલ દિન મુજ તણો, મુનિસુવ્રત દીઠાં;
ભાંગી તે ભાવઠ ભવતણી, દિવસ દૂરિતના નીઠાં.||૧||
આંગણે કલ્પવેલી ફળી, ઘન અમીયના વૂઠાં;
આપ માંગ્યા પાસા ઢલ્યા, સુર સમકિતી તુઠાં.||૨||
નિયતિ હિત દાન સનમુખ હુઈ, સ્વપુણ્યોદય સાથે;
“જસ” કહે સાહિબે મુગતિનું, કર્યું તિલક નિજ હાથે.||૩||`,
      hi: `आज सफल दिन मुज तणो, मुनिसुव्रत दीठां;
भांगी ते भावठ भवतणी, दिवस दूरितना नीठां.||१||
आंगणे कल्पवेली फळी, घन अमीयना वूठां;
आप मांग्या पासा ढल्या, सुर समकिती तुठां.||२||
नियति हित दान सनमुख हुई, स्वपुण्योदय साथे;
“जस” कहे साहिबे मुगतिनुं, कर्युं तिलक निज हाथे.||३||`,
      sa: "",
      en: `Aaja saphala dina muja tano, munisuvrata deethaan;
Bhaangee te bhaavatha bhavatanee, divasa dooritanaa neethaan.||1||
Aangane kalpavelee phalee, ghana ameeyanaa voothaan;
Aapa maangyaa paasaa dhalyaa, sura samakitee tuthaan.||2||
Niyati hita daana sanamukha huee, svapunyodaya saathe;
“jasa” kahe saahibe mugatinun, karyun tilaka nija haathe.||3||`,
    },
  },
  {
    id: "aanand-ki-ghadi-aayi",
    type: "bhajan",
    title: {
      gu: "આનંદ કી ઘડી આઈ, સખીરી આજ! આનંદ કી ઘડી આઈ…",
      hi: "आनंद की घडी आई, सखीरी आज! आनंद की घडी आई…",
      sa: "",
      en: "Aanand Ki Ghadi Aayi",
    },
    text: {
      gu: `આનંદ કી ઘડી આઈ, સખીરી આજ! આનંદ કી ઘડી આઈ…
કરકે કૃપા પ્રભુ દરિશન દિનો, ભવકી પીડ મિટાઈ;
મોહ નિદ્રા સે જાગ્રત કરકે, સત્ય કી બાત સુણાઈ,
તન મન હર્ષ ન માઈ. સખીરી૦ ।। ૧ ।।
નિત્યાનિત્ય કા ભેદ બતાકર, મિથ્યાદૃષ્ટિ હરાઈ;
સમ્યજ્ઞાન કી દિવ્ય પ્રભા કો, અંતર મેં પ્રગટાઈ,
સાધ્ય સાધન દિખલાઈ.  સખીરી. ।। ૨ ।।
ત્યાગ વૈરાગ્ય સંયમ કે યોગ સે, નિઃસ્પૃહ ભાવ જગાઈ;
સર્વ સંગ પરિત્યાગ કરાકર, અલખ ધૂન મચાઈ,
અપગત દુઃખ કહલાઈ.  સખીરી૦ ||૩॥
અપૂર્વકરણ ગુણસ્થાનક સુખકર, શ્રેણી ક્ષપક મંડવાઈ;
વેદ તીનો કા છેદ કરાકર, ક્ષીણ મોહી બનવાઈ,
જીવન મુક્તિ દિલાઈ.
સખીરી૦ ॥૪॥
ભક્ત વત્સલ પ્રભુ કરુણાસાગર, ચરણ શરણ સુખદાઈ;
‘જશ’ કહે ધ્યાન પ્રભુ કા ધ્યાવત, અજર અમર પદ પાઈ;
દ્વંદ્વ સકલ મિટ જાઈ. સખીરી. ||૫ ।।`,
      hi: `आनंद की घडी आई, सखीरी आज! आनंद की घडी आई…
करके कृपा प्रभु दरिशन दिनो, भवकी पीड मिटाई;
मोह निद्रा से जाग्रत करके, सत्य की बात सुणाई,
तन मन हर्ष न माई. सखीरी० ।। १ ।।
नित्यानित्य का भेद बताकर, मिथ्यादृष्टि हराई;
सम्यज्ञान की दिव्य प्रभा को, अंतर में प्रगटाई,
साध्य साधन दिखलाई.  सखीरी. ।। २ ।।
त्याग वैराग्य संयम के योग से, निःस्पृह भाव जगाई;
सर्व संग परित्याग कराकर, अलख धून मचाई,
अपगत दुःख कहलाई.  सखीरी० ||३॥
अपूर्वकरण गुणस्थानक सुखकर, श्रेणी क्षपक मंडवाई;
वेद तीनो का छेद कराकर, क्षीण मोही बनवाई,
जीवन मुक्ति दिलाई.
सखीरी० ॥४॥
भक्त वत्सल प्रभु करुणासागर, चरण शरण सुखदाई;
‘जश’ कहे ध्यान प्रभु का ध्यावत, अजर अमर पद पाई;
द्वंद्व सकल मिट जाई. सखीरी. ||५ ।।`,
      sa: "",
      en: `Aananda kee ghadee aaee, sakheeree aaja! aananda kee ghadee aaee…
Karake krupaa prabhu darishana dino, bhavakee peeda mitaaee;
Moha nidraa se jaagrata karake, satya kee baata sunaaee,
Tana mana harsha na maaee. sakheeree0 || 1 ||
Nityaanitya kaa bheda bataakara, mithyaadrushti haraaee;
Samyajnyaana kee divya prabhaa ko, antara men pragataaee,
Saadhya saadhana dikhalaaee. sakheeree. || 2 ||
Tyaaga vairaagya sanyama ke yoga se, nispruha bhaava jagaaee;
Sarva sanga parityaaga karaakara, alakha dhoona machaaee,
Apagata dukha kahalaaee. sakheeree0 ||3||
Apoorvakarana gunasthaanaka sukhakara, shrenee kshapaka mandavaaee;
Veda teeno kaa chheda karaakara, ksheena mohee banavaaee,
Jeevana mukti dilaaee.
Sakheeree0 ||4||
Bhakta vatsala prabhu karunaasaagara, charana sharana sukhadaaee;
‘jasha’ kahe dhyaana prabhu kaa dhyaavata, ajara amara pada paaee;
Dvandva sakala mita jaaee. sakheeree. ||5 ||`,
    },
  },
  {
    id: "aav-aav-re-mara-manda-mahe",
    type: "bhajan",
    title: {
      gu: "આવ આવ રે માહરા મનડા માંહે, તું છે પ્યારો રે",
      hi: "आव आव रे माहरा मनडा मांहे, तुं छे प्यारो रे",
      sa: "",
      en: "Aav Aav Re Mara Manda Mahe",
    },
    text: {
      gu: `આવ આવ રે માહરા મનડા માંહે, તું છે પ્યારો રે;
હરીહરાદિક દેવ અનેરા, તું છે ન્યારો રે.||૧||
અહો મહાવીર ગંભીર તું તો, નાથ માહરો રે;
હું નમું તુંને ગમે મુને, સાથ તાહરો રે.||૨||
ગ્રહી સાંઈ રે મીઠડા હાથ માહરા, વૈરી વારો રે;
દ્યો દ્યો દર્શનદેવ મુને, દ્યો ને લારો રે.||૩||
તું વિના ત્રિલોકમેં કેહનો, નથી સહારો રે;
સંસાર પારાવારનો સ્વામી, આપને આરો રે.||૪||
“ઉદયરત્ન’ પ્રભુ જગમેં જોતા, તું છે સાચો તારો રે;
તાર તાર રે મુને તાર તું, સંસાર અસારો રે.||૫||`,
      hi: `आव आव रे माहरा मनडा मांहे, तुं छे प्यारो रे;
हरीहरादिक देव अनेरा, तुं छे न्यारो रे.||१||
अहो महावीर गंभीर तुं तो, नाथ माहरो रे;
हुं नमुं तुंने गमे मुने, साथ ताहरो रे.||२||
ग्रही सांई रे मीठडा हाथ माहरा, वैरी वारो रे;
द्यो द्यो दर्शनदेव मुने, द्यो ने लारो रे.||३||
तुं विना त्रिलोकमें केहनो, नथी सहारो रे;
संसार पारावारनो स्वामी, आपने आरो रे.||४||
“उदयरत्न’ प्रभु जगमें जोता, तुं छे साचो तारो रे;
तार तार रे मुने तार तुं, संसार असारो रे.||५||`,
      sa: "",
      en: `Aava aava re maaharaa manadaa maanhe, tun chhe pyaaro re;
Hareeharaadika deva aneraa, tun chhe nyaaro re.||1||
Aho mahaaveera ganbheera tun to, naatha maaharo re;
Hun namun tunne game mune, saatha taaharo re.||2||
Grahee saanee re meethadaa haatha maaharaa, vairee vaaro re;
Dyo dyo darshanadeva mune, dyo ne laaro re.||3||
Tun vinaa trilokamen kehano, nathee sahaaro re;
Sansaara paaraavaarano svaamee, aapane aaro re.||4||
“udayaratna’ prabhu jagamen jotaa, tun chhe saacho taaro re;
Taara taara re mune taara tun, sansaara asaaro re.||5||`,
    },
  },
  {
    id: "ab-me-sacho-sahib-payo",
    type: "bhajan",
    title: {
      gu: "અબ મેં સાચો સાહિબ પાયો, અબ મેં સાચો સાહિબ પાયો",
      hi: "अब में साचो साहिब पायो, अब में साचो साहिब पायो",
      sa: "",
      en: "Ab Me Sacho Sahib Payo",
    },
    text: {
      gu: `અબ મેં સાચો સાહિબ પાયો, અબ મેં સાચો સાહિબ પાયો;
યાકિ સેવ કરત હું યાકું, મુજ મન પ્રેમ સુહાયો. ||1||
કુર ઓર ન હોવે અપનો, જો દીજે ઘર માયો;
સંપત્તિ અપની ખિનુ મેં દેવે, વેં તો દિલ મેં ધ્યાયો. ||2||
ઓરનકી જન કરત ચાકરી, દૂર દેશ પાય ઘાસે;
અંતરયામી ધ્યાને દીસે વેં તો અપને પાસે ||3||
ઓર કબહું કોઉં કારન કોપ્યો, બહોત ઉપાય ન તૂસે;
ચિદાનંદ મેં મગન રહતું હે, વેં તો કબહું ન રુસે. ||4||
ચિંતા ચિતિ ન મિટે, સબ દિન ધંધે જાવે
થિરતા ગુન પૂરન સુખ ખેલે, વેં તો અપને ભાવે. ||5||
પરાધીન હે ભોગ ઓરકો, તા તેં હોત વિયોગી;
સદા સિદ્ધ સમ શુદ્ધ વિલાસી, વેં તો નિજ ગુન ભોગી. ||6||
જ્યૌં જાનો ત્યૌં જગ જન જાનો, મેં તો સેવક ઉનકો;
પક્ષપાત તો પરશું હોવે, રાગ ધરત હું ગુનકો. ||7||
ભાવ એક હે સબ જ્ઞાની કો, મૂરખ ભેદ ન ભાવે;
અપનો સાહિબ જો પહિચાને, સો “જસ” લીલા પાવે. ||8||`,
      hi: `अब में साचो साहिब पायो, अब में साचो साहिब पायो;
याकि सेव करत हुं याकुं, मुज मन प्रेम सुहायो. ||1||
कुर ओर न होवे अपनो, जो दीजे घर मायो;
संपत्ति अपनी खिनु में देवे, वें तो दिल में ध्यायो. ||2||
ओरनकी जन करत चाकरी, दूर देश पाय घासे;
अंतरयामी ध्याने दीसे वें तो अपने पासे ||3||
ओर कबहुं कोउं कारन कोप्यो, बहोत उपाय न तूसे;
चिदानंद में मगन रहतुं हे, वें तो कबहुं न रुसे. ||4||
चिंता चिति न मिटे, सब दिन धंधे जावे
थिरता गुन पूरन सुख खेले, वें तो अपने भावे. ||5||
पराधीन हे भोग ओरको, ता तें होत वियोगी;
सदा सिद्ध सम शुद्ध विलासी, वें तो निज गुन भोगी. ||6||
ज्यौं जानो त्यौं जग जन जानो, में तो सेवक उनको;
पक्षपात तो परशुं होवे, राग धरत हुं गुनको. ||7||
भाव एक हे सब ज्ञानी को, मूरख भेद न भावे;
अपनो साहिब जो पहिचाने, सो “जस” लीला पावे. ||8||`,
      sa: "",
      en: `Aba men saacho saahiba paayo, aba men saacho saahiba paayo;
Yaaki seva karata hun yaakun, muja mana prema suhaayo. ||1||
Kura ora na hove apano, jo deeje ghara maayo;
Sanpatti apanee khinu men deve, ven to dila men dhyaayo. ||2||
Oranakee jana karata chaakaree, doora desha paaya ghaase;
Antarayaamee dhyaane deese ven to apane paase ||3||
Ora kabahun koun kaarana kopyo, bahota upaaya na toose;
Chidaananda men magana rahatun he, ven to kabahun na ruse. ||4||
Chintaa chiti na mite, saba dina dhandhe jaave
Thirataa guna poorana sukha khele, ven to apane bhaave. ||5||
Paraadheena he bhoga orako, taa ten hota viyogee;
Sadaa siddha sama shuddha vilaasee, ven to nija guna bhogee. ||6||
Jyaun jaano tyaun jaga jana jaano, men to sevaka unako;
Pakshapaata to parashun hove, raaga dharata hun gunako. ||7||
Bhaava eka he saba jnyaanee ko, moorakha bheda na bhaave;
Apano saahiba jo pahichaane, so “jasa” leelaa paave. ||8||`,
    },
  },
  {
    id: "ab-me-sacho-sahib-payo-2",
    type: "bhajan",
    title: {
      gu: "અબ મેં સાચો સાહિબ પાયો, અબ મેં સાચો સાહિબ પાયો",
      hi: "अब में साचो साहिब पायो, अब में साचो साहिब पायो",
      sa: "",
      en: "Ab Me Sacho Sahib Payo",
    },
    text: {
      gu: `અબ મેં સાચો સાહિબ પાયો, અબ મેં સાચો સાહિબ પાયો;
યાકિ સેવ કરત હું યાકું, મુજ મન પ્રેમ સુહાયો.||૧||
ઠાકુર ઓર ન હોવે અપનો, જો દીજે ઘર માયો;
સંપત્તિ અપની ખિનુ મેં દેવે, વેં તો દિલ મેં ધ્યાયો.||૨||
ઓરનકી જન કરત ચાકરી, દૂર દેશ પાય ઘાસે;
અંતરયામી ધ્યાને દીસે, વેં તો અપને પાસે.||૩||
ઓર કબહું કોઉં કારન કોપ્યો, બહોત ઉપાય ન તૂસે;
ચિદાનંદ મેં મગન રહતું હે, વેં તો કબહું ને રુસે.||૪||
ઓરનકી ચિંતા ચિતિ ન મિટે, સબ દિન ધંધે જાવે;
ગુન પૂરન સુખ ખેલે, વેં તો અપને ભાવે.||૫||
પરાધીન હેભોગ ઓરકો, તા તેં હોત વિયોગી;
સદા સિદ્ધ સમ શુદ્ધ વિલાસી, વેં તો નિજ ગુન ભોગી.||૬||
જ્યૌં જાનો ત્યૌં જગ જન જાનો, મેં તો સેવક ઉનકો
પક્ષપાત તો પર ૂ હોવે, રાગ ધરત હું ગુનકો.||૭||
ભાવ એક હે સબ જ્ઞાની કો, મૂરખ ભેદ ન ભાવે;
અપનો સાહિબ જો પહિચાને, સો “જસ” લીલા પાવે.||૮||`,
      hi: `अब में साचो साहिब पायो, अब में साचो साहिब पायो;
याकि सेव करत हुं याकुं, मुज मन प्रेम सुहायो.||१||
ठाकुर ओर न होवे अपनो, जो दीजे घर मायो;
संपत्ति अपनी खिनु में देवे, वें तो दिल में ध्यायो.||२||
ओरनकी जन करत चाकरी, दूर देश पाय घासे;
अंतरयामी ध्याने दीसे, वें तो अपने पासे.||३||
ओर कबहुं कोउं कारन कोप्यो, बहोत उपाय न तूसे;
चिदानंद में मगन रहतुं हे, वें तो कबहुं ने रुसे.||४||
ओरनकी चिंता चिति न मिटे, सब दिन धंधे जावे;
गुन पूरन सुख खेले, वें तो अपने भावे.||५||
पराधीन हेभोग ओरको, ता तें होत वियोगी;
सदा सिद्ध सम शुद्ध विलासी, वें तो निज गुन भोगी.||६||
ज्यौं जानो त्यौं जग जन जानो, में तो सेवक उनको
पक्षपात तो पर ू होवे, राग धरत हुं गुनको.||७||
भाव एक हे सब ज्ञानी को, मूरख भेद न भावे;
अपनो साहिब जो पहिचाने, सो “जस” लीला पावे.||८||`,
      sa: "",
      en: `Aba men saacho saahiba paayo, aba men saacho saahiba paayo;
Yaaki seva karata hun yaakun, muja mana prema suhaayo.||1||
Thaakura ora na hove apano, jo deeje ghara maayo;
Sanpatti apanee khinu men deve, ven to dila men dhyaayo.||2||
Oranakee jana karata chaakaree, doora desha paaya ghaase;
Antarayaamee dhyaane deese, ven to apane paase.||3||
Ora kabahun koun kaarana kopyo, bahota upaaya na toose;
Chidaananda men magana rahatun he, ven to kabahun ne ruse.||4||
Oranakee chintaa chiti na mite, saba dina dhandhe jaave;
Guna poorana sukha khele, ven to apane bhaave.||5||
Paraadheena hebhoga orako, taa ten hota viyogee;
Sadaa siddha sama shuddha vilaasee, ven to nija guna bhogee.||6||
Jyaun jaano tyaun jaga jana jaano, men to sevaka unako
Pakshapaata to para ૂ hove, raaga dharata hun gunako.||7||
Bhaava eka he saba jnyaanee ko, moorakha bheda na bhaave;
Apano saahiba jo pahichaane, so “jasa” leelaa paave.||8||`,
    },
  },
  {
    id: "ab-mohe-aise-aay-bani",
    type: "bhajan",
    title: {
      gu: "અબ મોહે! ઐસી આય બની, (૨)",
      hi: "अब मोहे! ऐसी आय बनी, (२)",
      sa: "",
      en: "Ab Mohe Aise Aay Bani",
    },
    text: {
      gu: `અબ મોહે! ઐસી આય બની, (૨)
શ્રી શંખેશ્વર પાર્શ્વ જિનેશ્વર, મેરે તું એક ઘણી.અબ૦।।૧।।
તુમ બિન કોઉ ચિત્ત ન સુહાવે, આવે કોડી ગુણી;
મેરો મન તુજ ઉપર રસિયો, અલિ જિમ કમલ ભણી.||૨||
તુમ નામે સવિ સંકટ ચૂરે, નાગરાજ ધરણી;
નામ જપું નિશિ વાસર તેરો, એ મુજ શુભ કરણી.અબ૦ ||૩ ॥
કોપાનલ ઉપજાવત દુર્જન, મથન વચન અરણી;
નામ જપું જલધાર તિહાં તુજ, ધારું દુઃખ હરણી. અ ।। ૪ ।|
મિથ્યામતિ બહુ જન હૈ જગ મેં, પદ ન ધરત ધરણી;
ઉનસે અબ તુજ ભક્તિ પ્રભાવે, ભય નહિ એક કણી.||૫||
અબ.।।૫।। સજ્જન નયન સુધારસ અંજન, દુર્જન રવિ ભરણી;
તુજ મૂરતિ નીરખે સો પાવે, સુખ “જસ’ લીલ ઘણી. અબ૦।।૬।।`,
      hi: `अब मोहे! ऐसी आय बनी, (२)
श्री शंखेश्वर पार्श्व जिनेश्वर, मेरे तुं एक घणी.अब०।।१।।
तुम बिन कोउ चित्त न सुहावे, आवे कोडी गुणी;
मेरो मन तुज उपर रसियो, अलि जिम कमल भणी.||२||
तुम नामे सवि संकट चूरे, नागराज धरणी;
नाम जपुं निशि वासर तेरो, ए मुज शुभ करणी.अब० ||३ ॥
कोपानल उपजावत दुर्जन, मथन वचन अरणी;
नाम जपुं जलधार तिहां तुज, धारुं दुःख हरणी. अ ।। ४ ।|
मिथ्यामति बहु जन है जग में, पद न धरत धरणी;
उनसे अब तुज भक्ति प्रभावे, भय नहि एक कणी.||५||
अब.।।५।। सज्जन नयन सुधारस अंजन, दुर्जन रवि भरणी;
तुज मूरति नीरखे सो पावे, सुख “जस’ लील घणी. अब०।।६।।`,
      sa: "",
      en: `Aba mohe! aisee aaya banee, (2)
Shree shankheshvara paarshva jineshvara, mere tun eka ghanee.aba0||1||
Tuma bina kou chitta na suhaave, aave kodee gunee;
Mero mana tuja upara rasiyo, ali jima kamala bhanee.||2||
Tuma naame savi sankata choore, naagaraaja dharanee;
Naama japun nishi vaasara tero, e muja shubha karanee.aba0 ||3 ||
Kopaanala upajaavata durjana, mathana vachana aranee;
Naama japun jaladhaara tihaan tuja, dhaarun dukha haranee. a || 4 ||
Mithyaamati bahu jana hai jaga men, pada na dharata dharanee;
Unase aba tuja bhakti prabhaave, bhaya nahi eka kanee.||5||
Aba.||5|| sajjana nayana sudhaarasa anjana, durjana ravi bharanee;
Tuja moorati neerakhe so paave, sukha “jasa’ leela ghanee. aba0||6||`,
    },
  },
  {
    id: "abhinandan-jin-darishan-tarasiye",
    type: "bhajan",
    title: {
      gu: "અભિનંદન જિન દરિસણ તરસીએ, દરિસણ દુર્લભ દેવ",
      hi: "अभिनंदन जिन दरिसण तरसीए, दरिसण दुर्लभ देव",
      sa: "",
      en: "Abhinandan Jin Darishan Tarasiye",
    },
    text: {
      gu: `અભિનંદન જિન દરિસણ તરસીએ, દરિસણ દુર્લભ દેવ;
મત મત ભેદે રે જો જઈ પૂછીયે, સહુ થાપે અહમેવ.||૧||
સામાન્યે કરી દરિસણ દોહિલું, નિર્ણય સકલ વિશેષ;
મદ મેં ઘેર્યો રે અંધો કિમ કરે, રવિ શશિ રુપ વિલેખ.||૨||
હેતુ વિવાદે હો ચિત્ત ધરી જોઈએ, અતિ દુર્ગમ નયવાદ;
આગમવાદે હો ગુરુગમ કો નહીં, એ સબલો વિખવાદ.||૩||
ઘાતી ડુંગર આડા અતિ ઘણા, તુજ દરિસણ જગનાથ;
ધીઠાઈ કરી મારગ સંચરું, સેંગું કોઈ ન સાથ.||૪||
દરિસણ રટતો જો ફિરું, તો રણ રોઝ જેહને;
પિપાસા હો અમૃત પાનની, કિમ ભાંજે વિષપાન.||૫||
તરસ ન આવે હો મરણ જીવન તણો, સીઝે જો દરિસણ કાજ;
દરિસણ દુર્લભ સુલભ કૃપા થકી, ‘આનંદઘન’ મહારાજ.||૬||`,
      hi: `अभिनंदन जिन दरिसण तरसीए, दरिसण दुर्लभ देव;
मत मत भेदे रे जो जई पूछीये, सहु थापे अहमेव.||१||
सामान्ये करी दरिसण दोहिलुं, निर्णय सकल विशेष;
मद में घेर्यो रे अंधो किम करे, रवि शशि रुप विलेख.||२||
हेतु विवादे हो चित्त धरी जोईए, अति दुर्गम नयवाद;
आगमवादे हो गुरुगम को नहीं, ए सबलो विखवाद.||३||
घाती डुंगर आडा अति घणा, तुज दरिसण जगनाथ;
धीठाई करी मारग संचरुं, सेंगुं कोई न साथ.||४||
दरिसण रटतो जो फिरुं, तो रण रोझ जेहने;
पिपासा हो अमृत पाननी, किम भांजे विषपान.||५||
तरस न आवे हो मरण जीवन तणो, सीझे जो दरिसण काज;
दरिसण दुर्लभ सुलभ कृपा थकी, ‘आनंदघन’ महाराज.||६||`,
      sa: "",
      en: `Abhinandana jina darisana taraseee, darisana durlabha deva;
Mata mata bhede re jo jaee poochheeye, sahu thaape ahameva.||1||
Saamaanye karee darisana dohilun, nirnaya sakala vishesha;
Mada men gheryo re andho kima kare, ravi shashi rupa vilekha.||2||
Hetu vivaade ho chitta dharee joeee, ati durgama nayavaada;
Aagamavaade ho gurugama ko naheen, e sabalo vikhavaada.||3||
Ghaatee dungara aadaa ati ghanaa, tuja darisana jaganaatha;
Dheethaaee karee maaraga sancharun, sengun koee na saatha.||4||
Darisana ratato jo phirun, to rana rojha jehane;
Pipaasaa ho amruta paananee, kima bhaanje vishapaana.||5||
Tarasa na aave ho marana jeevana tano, seejhe jo darisana kaaja;
Darisana durlabha sulabha krupaa thakee, ‘aanandaghana’ mahaaraaja.||6||`,
    },
  },
  {
    id: "abhinandan-swami-hamara",
    type: "bhajan",
    title: {
      gu: "અભિનંદન સ્વામી હમારા, પ્રભુ ભવદુઃખ ભંજનહારા",
      hi: "अभिनंदन स्वामी हमारा, प्रभु भवदुःख भंजनहारा",
      sa: "",
      en: "Abhinandan Swami Hamara",
    },
    text: {
      gu: `અભિનંદન સ્વામી હમારા, પ્રભુ ભવદુઃખ ભંજનહારા;
યે દુનિયા દુઃખ કી ધારા, પ્રભુ ઈનસે કરો નિસ્તારા. ॥੧॥
હું કુમતિ કુટિલ ભરમાયો, દૂર નીતિ કરી દુઃખ પાયો;
અબ શરણ લિયો હૈ થારો, મુજે ભવજલ પાર ઉતારો. ॥२॥
પ્રભુ શીખ હૈયે નહિ ધારી, દુર્ગતિમાં દુઃખ લીયો ભારી;
ઈન કર્મો કી ગતિ ન્યારી, કરે બેર બેર ખુવારી.||૩||
તુમે કરુણાવંત કહાવો, જગતારક બિરુદ ધરાવો;
મેરી અરજીનો એક દાવો, ઈણ દુઃખ સે કક્યું ન છુડાવો?||૪||
મેં વિરથા જન્મ ગુમાવ્યો, નહીં તન ધન સ્નેહ નિવાર્યો;
અબ પારસ પરસંગ પામી, નહીં ‘વીરવિજય’ કું ખામી.||૫||`,
      hi: `अभिनंदन स्वामी हमारा, प्रभु भवदुःख भंजनहारा;
ये दुनिया दुःख की धारा, प्रभु ईनसे करो निस्तारा. ॥੧॥
हुं कुमति कुटिल भरमायो, दूर नीति करी दुःख पायो;
अब शरण लियो है थारो, मुजे भवजल पार उतारो. ॥२॥
प्रभु शीख हैये नहि धारी, दुर्गतिमां दुःख लीयो भारी;
ईन कर्मो की गति न्यारी, करे बेर बेर खुवारी.||३||
तुमे करुणावंत कहावो, जगतारक बिरुद धरावो;
मेरी अरजीनो एक दावो, ईण दुःख से कक्युं न छुडावो?||४||
में विरथा जन्म गुमाव्यो, नहीं तन धन स्नेह निवार्यो;
अब पारस परसंग पामी, नहीं ‘वीरविजय’ कुं खामी.||५||`,
      sa: "",
      en: `Abhinandana svaamee hamaaraa, prabhu bhavadukha bhanjanahaaraa;
Ye duniyaa dukha kee dhaaraa, prabhu eenase karo nistaaraa. ||1||
Hun kumati kutila bharamaayo, doora neeti karee dukha paayo;
Aba sharana liyo hai thaaro, muje bhavajala paara utaaro. ||2||
Prabhu sheekha haiye nahi dhaaree, durgatimaan dukha leeyo bhaaree;
Eena karmo kee gati nyaaree, kare bera bera khuvaaree.||3||
Tume karunaavanta kahaavo, jagataaraka biruda dharaavo;
Meree arajeeno eka daavo, eena dukha se kakyun na chhudaavo?||4||
Men virathaa janma gumaavyo, naheen tana dhana sneha nivaaryo;
Aba paarasa parasanga paamee, naheen ‘veeravijaya’ kun khaamee.||5||`,
    },
  },
  {
    id: "abolda-shana-lidha-chhe-raaj",
    type: "bhajan",
    title: {
      gu: "અબોલડાં શાના લીધાં છે રાજ, જીવજીવન પ્રભુ માહરા",
      hi: "अबोलडां शाना लीधां छे राज, जीवजीवन प्रभु माहरा",
      sa: "",
      en: "Abolda Shana Lidha Chhe Raaj",
    },
    text: {
      gu: `અબોલડાં શાના લીધાં છે રાજ, જીવજીવન પ્રભુ માહરા;
તમે અમારા અમે તમારા, વાસ નિગોદમાં રહેતાં. ||1||
કાલ અનંતના સ્નેહી પ્યારા, કદીય ન અંતર કરતા;
બાદર સ્થાવરમાં બેહુ આપણ, કાલ અસંખ્ય નિગમતાં||2||
વિકલેન્દ્રિયમાં કાલ સંખ્યાતા,વિસર્યા નવિ વિસરતા;
નરકસ્થાને રહ્યા બેહુ સાથે, તિહાં પણ બહુ દુઃખ સહતા. ||3||
પરમાધામી સન્મુખ આપણ, ટગ મગ નજરે જોતાં
દેવના ભવમાં એક વિમાને, દેવનાં સુખ અનુભવતા.||4||
એકણ પાસે  દેવશય્યામાં, થેઈ થેઈ નાટક સુણતાં;
તિહાં પણ તમે અને અમે બેઉ સાથે, જિનજન્મ મહોત્સવ કરતા. ||5||
તિર્યંચગતિમાં સુખદુઃખ અનુભવતા, તિહાં પણ સંગ ચલંતા;
એક દિન સમવસરણમાં આપણ, જિનગુણ અમૃત પીતા. ॥६॥
એક દિન તમે અને અમે બેઉં સાથે, વેલડી વળગીને ફરતા;
એક દિન બાળપણામાં આપણે, ગેડી દડે નિત્ય રમતાં.॥७॥
તમે અને અમે બેઉ સ્વરુપી, એવી કથા નિત્ય કરતા;
એક કુલ એક ગોત્ર એકઠેકાણે, એક જ થાળીમાં જમતા. ॥8॥
એક દિન હું ઠાકોર તમે ચાકર, સેવા માહરી કરતા;
આજ તો આપ થયા જગ ઠાકોર, સિદ્ધિવધૂના પનોતા. ॥9॥
કાલ અનંતનો સ્નેહ વિસારી, કામ કીધાં મનગમતાં
હવે અંતર કેમ કીધું પ્રભુજી, ચૌદ રાજ જઈ પહોંતા. ॥10॥
“દીપવિજય’ કવિરાજ પ્રભુજી, જગનેતા;
નિજ સેવકને યશપદ દીજે, અનંત ગુણે ગુણવંત. ॥11॥`,
      hi: `अबोलडां शाना लीधां छे राज, जीवजीवन प्रभु माहरा;
तमे अमारा अमे तमारा, वास निगोदमां रहेतां. ||1||
काल अनंतना स्नेही प्यारा, कदीय न अंतर करता;
बादर स्थावरमां बेहु आपण, काल असंख्य निगमतां||2||
विकलेन्द्रियमां काल संख्याता,विसर्या नवि विसरता;
नरकस्थाने रह्या बेहु साथे, तिहां पण बहु दुःख सहता. ||3||
परमाधामी सन्मुख आपण, टग मग नजरे जोतां
देवना भवमां एक विमाने, देवनां सुख अनुभवता.||4||
एकण पासे  देवशय्यामां, थेई थेई नाटक सुणतां;
तिहां पण तमे अने अमे बेउ साथे, जिनजन्म महोत्सव करता. ||5||
तिर्यंचगतिमां सुखदुःख अनुभवता, तिहां पण संग चलंता;
एक दिन समवसरणमां आपण, जिनगुण अमृत पीता. ॥६॥
एक दिन तमे अने अमे बेउं साथे, वेलडी वळगीने फरता;
एक दिन बाळपणामां आपणे, गेडी दडे नित्य रमतां.॥७॥
तमे अने अमे बेउ स्वरुपी, एवी कथा नित्य करता;
एक कुल एक गोत्र एकठेकाणे, एक ज थाळीमां जमता. ॥8॥
एक दिन हुं ठाकोर तमे चाकर, सेवा माहरी करता;
आज तो आप थया जग ठाकोर, सिद्धिवधूना पनोता. ॥9॥
काल अनंतनो स्नेह विसारी, काम कीधां मनगमतां
हवे अंतर केम कीधुं प्रभुजी, चौद राज जई पहोंता. ॥10॥
“दीपविजय’ कविराज प्रभुजी, जगनेता;
निज सेवकने यशपद दीजे, अनंत गुणे गुणवंत. ॥11॥`,
      sa: "",
      en: `Aboladaan shaanaa leedhaan chhe raaja, jeevajeevana prabhu maaharaa;
Tame amaaraa ame tamaaraa, vaasa nigodamaan rahetaan. ||1||
Kaala anantanaa snehee pyaaraa, kadeeya na antara karataa;
Baadara sthaavaramaan behu aapana, kaala asankhya nigamataan||2||
Vikalendriyamaan kaala sankhyaataa,visaryaa navi visarataa;
Narakasthaane rahyaa behu saathe, tihaan pana bahu dukha sahataa. ||3||
Paramaadhaamee sanmukha aapana, taga maga najare jotaan
Devanaa bhavamaan eka vimaane, devanaan sukha anubhavataa.||4||
Ekana paase devashayyaamaan, theee theee naataka sunataan;
Tihaan pana tame ane ame beu saathe, jinajanma mahotsava karataa. ||5||
Tiryanchagatimaan sukhadukha anubhavataa, tihaan pana sanga chalantaa;
Eka dina samavasaranamaan aapana, jinaguna amruta peetaa. ||6||
Eka dina tame ane ame beun saathe, veladee valageene pharataa;
Eka dina baalapanaamaan aapane, gedee dade nitya ramataan.||7||
Tame ane ame beu svarupee, evee kathaa nitya karataa;
Eka kula eka gotra ekathekaane, eka ja thaaleemaan jamataa. ||8||
Eka dina hun thaakora tame chaakara, sevaa maaharee karataa;
Aaja to aapa thayaa jaga thaakora, siddhivadhoonaa panotaa. ||9||
Kaala anantano sneha visaaree, kaama keedhaan managamataan
Have antara kema keedhun prabhujee, chauda raaja jaee pahontaa. ||10||
“deepavijaya’ kaviraaja prabhujee, jaganetaa;
Nija sevakane yashapada deeje, ananta gune gunavanta. ||11||`,
    },
  },
  {
    id: "aha-kevu-bhagya-jagyu",
    type: "bhajan",
    title: {
      gu: "અહા કેવું ભાગ્ય જાગ્યું! વીરના ચરણો મલ્યા!",
      hi: "अहा केवुं भाग्य जाग्युं! वीरना चरणो मल्या!",
      sa: "",
      en: "Aha Kevu Bhagya Jagyu",
    },
    text: {
      gu: `અહા કેવું ભાગ્ય જાગ્યું! વીરના ચરણો મલ્યા!;
રોગ શોક દારિદ્રય સઘળાં, જેહથી દૂરે ટળ્યા.અહા૦ ।।૧।।
ફેરો ફર્યો છે દુર્ગતિનો, શુભ ગતિ તરફેણમાં;
અલ્પકાળે મોક્ષ પામી, વિચરશું આનંદમાં.અહા૦ ||૨||
કામધેનુ કામકુંભ,ચિંતામણિ સવિ તું મળ્યો;
આજ મારે આંગણે, શ્રી વીર કલ્પતરુ ફળ્યો. અહા૦ ||૩||
જેમના તપનો ન મહિમા, કરી શકે શક્રેશ ભી;
તેમને હું સ્તવું શું બાલક, શક્તિનો જ્યાં લેશ નહીં.||૪||
‘લબ્ધિ’ના ભંડાર વ્હાલા, વીર વીર જપતાં થયા;
ગૌતમશ્રી મોક્ષગામી,એ પ્રભુની ખરી દયા.||૫||`,
      hi: `अहा केवुं भाग्य जाग्युं! वीरना चरणो मल्या!;
रोग शोक दारिद्रय सघळां, जेहथी दूरे टळ्या.अहा० ।।१।।
फेरो फर्यो छे दुर्गतिनो, शुभ गति तरफेणमां;
अल्पकाळे मोक्ष पामी, विचरशुं आनंदमां.अहा० ||२||
कामधेनु कामकुंभ,चिंतामणि सवि तुं मळ्यो;
आज मारे आंगणे, श्री वीर कल्पतरु फळ्यो. अहा० ||३||
जेमना तपनो न महिमा, करी शके शक्रेश भी;
तेमने हुं स्तवुं शुं बालक, शक्तिनो ज्यां लेश नहीं.||४||
‘लब्धि’ना भंडार व्हाला, वीर वीर जपतां थया;
गौतमश्री मोक्षगामी,ए प्रभुनी खरी दया.||५||`,
      sa: "",
      en: `Ahaa kevun bhaagya jaagyun! veeranaa charano malyaa!;
Roga shoka daaridraya saghalaan, jehathee doore talyaa.ahaa0 ||1||
Phero pharyo chhe durgatino, shubha gati taraphenamaan;
Alpakaale moksha paamee, vicharashun aanandamaan.ahaa0 ||2||
Kaamadhenu kaamakunbha,chintaamani savi tun malyo;
Aaja maare aangane, shree veera kalpataru phalyo. ahaa0 ||3||
Jemanaa tapano na mahimaa, karee shake shakresha bhee;
Temane hun stavun shun baalaka, shaktino jyaan lesha naheen.||4||
‘labdhi’naa bhandaara vhaalaa, veera veera japataan thayaa;
Gautamashree mokshagaamee,e prabhunee kharee dayaa.||5||`,
    },
  },
  {
    id: "aho-shree-sumti-jin",
    type: "bhajan",
    title: {
      gu: "અહીં શ્રી સુમતિ જિન શુદ્ધતા તાહરી",
      hi: "अहीं श्री सुमति जिन शुद्धता ताहरी",
      sa: "",
      en: "Aho Shree Sumti Jin",
    },
    text: {
      gu: `અહીં શ્રી સુમતિ જિન શુદ્ધતા તાહરી,
સ્વગુણ પર્યાય પરિણામી રામી;
નિત્યતા એકતા અસ્તિતા ઈતર યુત,
ભોગ્ય ભોગી થકો પ્રભુ અકામી.||૧||
ઊપજે વ્યય લહે તહવિ તેહવો રહે,
ગુણ પ્રમુખ બહુલતા તહવિ પિંડી;
આત્મભાવે રહે અપરતા નવિ ગ્રહે,
લોક પ્રદેશ મિત પણ અખંડી.||૨||
કાર્ય કારણપણે પરિણમે તહવિ ધ્રુવ,
કાર્ય ભેદે કરે પણ અભેદી;
કર્તૃતા પરિણમે નવ્યતા નવિ રમે,
સકલવેત્તા થકો પણ અવેદી.||૩||
શુદ્ધતા બુદ્ધતા દેવ પરમાત્મતા,
સહજ નિજભાવ ભોગી અયોગી;
સ્વ પર ઉપયોગી તાદાત્મય સત્તારસી,
શક્તિ પ્રયુંજતો ન પ્રયોગી.||૪||
વસ્તુ નિજ પરિણતે સર્વ પરિણામિકી,
એટલે કોઈ પ્રભુતા ન પામે;
કરે જાણે રમે અનુભવે તે પ્રભુ,
તત્ત્વ સ્વામિત્વ શુચિ તત્ત્વ ધામે.||૫||
જીવ નવિ પુગ્ગલી નૈવ પુગ્ગલ કદા,
પુગ્ગલાધાર નહિ તાસ રંગી;
પર તણો ઈશ નહિ અપર ઐશ્વર્યતા,
વસ્તુ ધર્મે કદા ન પરસંગી.||૬||
સંગ્રહે નહીં આપે નહીં પરભણી,
નવિ કરે આદરે ન પર રાખે;
શુદ્ધ સ્યાદ્વાદ નિજભાવ ભોગી જિકે,
તેહ પરભાવને કેમ ચાખે.||૭||
તાહરી ભાસ આશ્ચર્યથી,
ઉપજે રુચિ તેણે તત્વ ઇહે;
તત્ત્વરંગી દોષથી ઉભગ્યો,
દોષ ત્યાગે ઢલે તત્ત્વ લીહે.||૮||
શુદ્ધ માર્ગે વધ્યો સાધ્ય સાધન સધ્યો,
સ્વામી પ્રતિછંદ સત્તા આરાધે;
આત્મ નિષ્પત્તિ તિમ સાધના નવિ ટકે,
વસ્તુ ઉત્સર્ગ આતમ સમાધે.||૯||
માહરી શુદ્ધ સત્તા તણી પૂર્ણતા,
તેહનો હેતુ પ્રભુ તુંહિ સાચો;
“દેવચંદ્રે’ સ્તવ્યો મુનિગણે અનુભવ્યો,
તત્વ ભક્તે ભવિક સકળ રાચો`,
      hi: `अहीं श्री सुमति जिन शुद्धता ताहरी,
स्वगुण पर्याय परिणामी रामी;
नित्यता एकता अस्तिता ईतर युत,
भोग्य भोगी थको प्रभु अकामी.||१||
ऊपजे व्यय लहे तहवि तेहवो रहे,
गुण प्रमुख बहुलता तहवि पिंडी;
आत्मभावे रहे अपरता नवि ग्रहे,
लोक प्रदेश मित पण अखंडी.||२||
कार्य कारणपणे परिणमे तहवि ध्रुव,
कार्य भेदे करे पण अभेदी;
कर्तृता परिणमे नव्यता नवि रमे,
सकलवेत्ता थको पण अवेदी.||३||
शुद्धता बुद्धता देव परमात्मता,
सहज निजभाव भोगी अयोगी;
स्व पर उपयोगी तादात्मय सत्तारसी,
शक्ति प्रयुंजतो न प्रयोगी.||४||
वस्तु निज परिणते सर्व परिणामिकी,
एटले कोई प्रभुता न पामे;
करे जाणे रमे अनुभवे ते प्रभु,
तत्त्व स्वामित्व शुचि तत्त्व धामे.||५||
जीव नवि पुग्गली नैव पुग्गल कदा,
पुग्गलाधार नहि तास रंगी;
पर तणो ईश नहि अपर ऐश्वर्यता,
वस्तु धर्मे कदा न परसंगी.||६||
संग्रहे नहीं आपे नहीं परभणी,
नवि करे आदरे न पर राखे;
शुद्ध स्याद्वाद निजभाव भोगी जिके,
तेह परभावने केम चाखे.||७||
ताहरी भास आश्चर्यथी,
उपजे रुचि तेणे तत्व इहे;
तत्त्वरंगी दोषथी उभग्यो,
दोष त्यागे ढले तत्त्व लीहे.||८||
शुद्ध मार्गे वध्यो साध्य साधन सध्यो,
स्वामी प्रतिछंद सत्ता आराधे;
आत्म निष्पत्ति तिम साधना नवि टके,
वस्तु उत्सर्ग आतम समाधे.||९||
माहरी शुद्ध सत्ता तणी पूर्णता,
तेहनो हेतु प्रभु तुंहि साचो;
“देवचंद्रे’ स्तव्यो मुनिगणे अनुभव्यो,
तत्व भक्ते भविक सकळ राचो`,
      sa: "",
      en: `Aheen shree sumati jina shuddhataa taaharee,
Svaguna paryaaya parinaamee raamee;
Nityataa ekataa astitaa eetara yuta,
Bhogya bhogee thako prabhu akaamee.||1||
Oopaje vyaya lahe tahavi tehavo rahe,
Guna pramukha bahulataa tahavi pindee;
Aatmabhaave rahe aparataa navi grahe,
Loka pradesha mita pana akhandee.||2||
Kaarya kaaranapane pariname tahavi dhruva,
Kaarya bhede kare pana abhedee;
Kartrutaa pariname navyataa navi rame,
Sakalavettaa thako pana avedee.||3||
Shuddhataa buddhataa deva paramaatmataa,
Sahaja nijabhaava bhogee ayogee;
Sva para upayogee taadaatmaya sattaarasee,
Shakti prayunjato na prayogee.||4||
Vastu nija parinate sarva parinaamikee,
Etale koee prabhutaa na paame;
Kare jaane rame anubhave te prabhu,
Tattva svaamitva shuchi tattva dhaame.||5||
Jeeva navi puggalee naiva puggala kadaa,
Puggalaadhaara nahi taasa rangee;
Para tano eesha nahi apara aishvaryataa,
Vastu dharme kadaa na parasangee.||6||
Sangrahe naheen aape naheen parabhanee,
Navi kare aadare na para raakhe;
Shuddha syaadvaada nijabhaava bhogee jike,
Teha parabhaavane kema chaakhe.||7||
Taaharee bhaasa aashcharyathee,
Upaje ruchi tene tatva ihe;
Tattvarangee doshathee ubhagyo,
Dosha tyaage dhale tattva leehe.||8||
Shuddha maarge vadhyo saadhya saadhana sadhyo,
Svaamee pratichhanda sattaa aaraadhe;
Aatma nishpatti tima saadhanaa navi take,
Vastu utsarga aatama samaadhe.||9||
Maaharee shuddha sattaa tanee poornataa,
Tehano hetu prabhu tunhi saacho;
“devachandre’ stavyo munigane anubhavyo,
Tatva bhakte bhavika sakala raacho`,
    },
  },
  {
    id: "aho-aho-pasji-muj-madiya",
    type: "bhajan",
    title: {
      gu: "અહો! અહો! પાસજી! મુજ મળિયા રે",
      hi: "अहो! अहो! पासजी! मुज मळिया रे",
      sa: "",
      en: "Aho Aho Pasji Muj Madiya",
    },
    text: {
      gu: `અહો! અહો! પાસજી! મુજ મળિયા રે,
મારા મનના મનોરથ ફળિયા…
તારી મૂિિત મોહનગારી રે, સહુ સંઘને લાગે છે પ્યારી રે;
તમને મોહી રહ્યાં સુર નર નારી.અહો૦।।૧।।
અલબેલી મૂરત પ્રભુ તારી રે, તારા મુખડા ઉપર જાઉં વારી રે;
નાગ-નાગણીની જોડ ઉગારી.||૨||
ધન્ય ધન્ય દેવાધિદેવા રે, સુરલોક કરે તારી સેવા રે;
અમને ને શિવપુર મેવા.||૩||
તમે શિવરમણીના રસિયા રે, જઈ મુક્તિપુરીમાં વિસયા રે;
મારા હૃદયકમલમાં વસિયા. અહો૦।।૪।|
જેકોઈ પાર્શ્વતણા ગુણ ગાશે રે, ભવોભવનાં પાતિક જાશે રે;
તેના સમકિત નિર્મલ થાશે. અહો૦ ।।૫।।
પ્રભુ ત્રેવીસમાં જિનરાયા રે, માતા વામાદેવીના જાયા રે;
અમને દરિશણ દ્યોને દયાલા. અહો૦||૬||
હ તો લળી લળી લાગું છું પાય રે, મારા ઉરમાં તે હરખ ન માય રે;
“માણેકવિજય’ ગુણ ગાય. અહો૦ ।।૭।।`,
      hi: `अहो! अहो! पासजी! मुज मळिया रे,
मारा मनना मनोरथ फळिया…
तारी मूिित मोहनगारी रे, सहु संघने लागे छे प्यारी रे;
तमने मोही रह्यां सुर नर नारी.अहो०।।१।।
अलबेली मूरत प्रभु तारी रे, तारा मुखडा उपर जाउं वारी रे;
नाग-नागणीनी जोड उगारी.||२||
धन्य धन्य देवाधिदेवा रे, सुरलोक करे तारी सेवा रे;
अमने ने शिवपुर मेवा.||३||
तमे शिवरमणीना रसिया रे, जई मुक्तिपुरीमां विसया रे;
मारा हृदयकमलमां वसिया. अहो०।।४।|
जेकोई पार्श्वतणा गुण गाशे रे, भवोभवनां पातिक जाशे रे;
तेना समकित निर्मल थाशे. अहो० ।।५।।
प्रभु त्रेवीसमां जिनराया रे, माता वामादेवीना जाया रे;
अमने दरिशण द्योने दयाला. अहो०||६||
ह तो लळी लळी लागुं छुं पाय रे, मारा उरमां ते हरख न माय रे;
“माणेकविजय’ गुण गाय. अहो० ।।७।।`,
      sa: "",
      en: `Aho! aho! paasajee! muja maliyaa re,
Maaraa mananaa manoratha phaliyaa…
Taaree mooિિta mohanagaaree re, sahu sanghane laage chhe pyaaree re;
Tamane mohee rahyaan sura nara naaree.aho0||1||
Alabelee moorata prabhu taaree re, taaraa mukhadaa upara jaaun vaaree re;
Naaga-naaganeenee joda ugaaree.||2||
Dhanya dhanya devaadhidevaa re, suraloka kare taaree sevaa re;
Amane ne shivapura mevaa.||3||
Tame shivaramaneenaa rasiyaa re, jaee muktipureemaan visayaa re;
Maaraa hrudayakamalamaan vasiyaa. aho0||4||
Jekoee paarshvatanaa guna gaashe re, bhavobhavanaan paatika jaashe re;
Tenaa samakita nirmala thaashe. aho0 ||5||
Prabhu treveesamaan jinaraayaa re, maataa vaamaadeveenaa jaayaa re;
Amane darishana dyone dayaalaa. aho0||6||
Ha to lalee lalee laagun chhun paaya re, maaraa uramaan te harakha na maaya re;
“maanekavijaya’ guna gaaya. aho0 ||7||`,
    },
  },
  {
    id: "ajab-bani-re-mere-ajab-bani",
    type: "bhajan",
    title: {
      gu: "અજબ બનીરે મેરે અજબ બની રે, પ્રભુ સાથે પ્રીતિ અજબ બની રે",
      hi: "अजब बनीरे मेरे अजब बनी रे, प्रभु साथे प्रीति अजब बनी रे",
      sa: "",
      en: "Ajab Bani Re Mere Ajab Bani",
    },
    text: {
      gu: `અજબ બનીરે મેરે અજબ બની રે, પ્રભુ સાથે પ્રીતિ અજબ બની રે;
જર બનીરે મેરે જોર બની, પ્રભુ સાથે પ્રીતિ જોર બની. ॥੧॥
અજબ બની પ્રભુ સાથે પ્રીતિ, તો મુજ દુર્ગતિની શી ભીતિ;
પ્રભુની મોટી રીતિ, પામી પૂરણ રીતિ પ્રતીતિ..॥२॥
જે દુનિયામેં દુર્લભ નેહ, તે મેં પામી પ્રભુની ભેટ;
આળસુને ઘેર આવી ગંગ, પામ્યો પંથી સખર તુરંગ.||૩||
તિરસે પાયો માનસ નીર, વાદ કરતાં વાધી ભીર;
ચિત્ત ચોર્યો સાજનનો સંગ, અણચિંત્યે મિલ્યો ચડતે રંગ.||૪||
જિમ જિમ નિરખું પ્રભુ મુખ નૂર, તિમ તિમ પાઉં આનંદપૂર;
સુણતાં જનમુખ પ્રભુની વાત, હરખે માહરી સાતે ધાત. ॥५॥
પદ્મપ્રભ જિનના ગુણગાન ગાતા, લહીએ શિવપદવી અસમાન;
વિમલવિજય વાચકનો શિશ, “રામે” પાયો પરમ જગીશ. ॥६॥`,
      hi: `अजब बनीरे मेरे अजब बनी रे, प्रभु साथे प्रीति अजब बनी रे;
जर बनीरे मेरे जोर बनी, प्रभु साथे प्रीति जोर बनी. ॥੧॥
अजब बनी प्रभु साथे प्रीति, तो मुज दुर्गतिनी शी भीति;
प्रभुनी मोटी रीति, पामी पूरण रीति प्रतीति..॥२॥
जे दुनियामें दुर्लभ नेह, ते में पामी प्रभुनी भेट;
आळसुने घेर आवी गंग, पाम्यो पंथी सखर तुरंग.||३||
तिरसे पायो मानस नीर, वाद करतां वाधी भीर;
चित्त चोर्यो साजननो संग, अणचिंत्ये मिल्यो चडते रंग.||४||
जिम जिम निरखुं प्रभु मुख नूर, तिम तिम पाउं आनंदपूर;
सुणतां जनमुख प्रभुनी वात, हरखे माहरी साते धात. ॥५॥
पद्मप्रभ जिनना गुणगान गाता, लहीए शिवपदवी असमान;
विमलविजय वाचकनो शिश, “रामे” पायो परम जगीश. ॥६॥`,
      sa: "",
      en: `Ajaba baneere mere ajaba banee re, prabhu saathe preeti ajaba banee re;
Jara baneere mere jora banee, prabhu saathe preeti jora banee. ||1||
Ajaba banee prabhu saathe preeti, to muja durgatinee shee bheeti;
Prabhunee motee reeti, paamee poorana reeti prateeti..||2||
Je duniyaamen durlabha neha, te men paamee prabhunee bheta;
Aalasune ghera aavee ganga, paamyo panthee sakhara turanga.||3||
Tirase paayo maanasa neera, vaada karataan vaadhee bheera;
Chitta choryo saajanano sanga, anachintye milyo chadate ranga.||4||
Jima jima nirakhun prabhu mukha noora, tima tima paaun aanandapoora;
Sunataan janamukha prabhunee vaata, harakhe maaharee saate dhaata. ||5||
Padmaprabha jinanaa gunagaana gaataa, laheee shivapadavee asamaana;
Vimalavijaya vaachakano shisha, “raame” paayo parama jageesha. ||6||`,
    },
  },
  {
    id: "ajit-jinand-daya-karo",
    type: "bhajan",
    title: {
      gu: "અજિત જિણંદ દયા કરો રે, આણી અધિક પ્રમોદ",
      hi: "अजित जिणंद दया करो रे, आणी अधिक प्रमोद",
      sa: "",
      en: "Ajit Jinand Daya Karo",
    },
    text: {
      gu: `અજિત જિણંદ દયા કરો રે, આણી અધિક પ્રમોદ;
જાણી સેવક આપણો રે, સુણીયે વચન વિનોદ રે,
જિનજી સેવના, ભવ ભવ તાહરી હોજો રે, એ મનકામના.॥૧॥
કર્મશત્રુ તુમે જીતીયા રે, તિમ મુજને જિતાડ;
અજિત થાઉં દુશ્મન થકી રે, એ મુજ પૂરો હાડ રે. ॥२॥
જિતશત્રુ નૃપનંદનો રે, જીતે વયરી જેહ;
અચરિજ ઈહાં કણે કો નહિ રે, અવધારો ગુણ ગેહ રે.||૩||
સકલ પદારથ પામીએ રે, દીઠે તુમ દેદાર;
સોભાગી મહિમા નીલો રે, વિજયામાત મલ્હાર રે.||૪||
“જ્ઞાનવિમલ’સુપ્રકાશથી રે, ભાસિત લોકાલોક;
શિવસુંદરીના વાલહા રે, પ્રણમે ભવિજન થોક રે.||૫||`,
      hi: `अजित जिणंद दया करो रे, आणी अधिक प्रमोद;
जाणी सेवक आपणो रे, सुणीये वचन विनोद रे,
जिनजी सेवना, भव भव ताहरी होजो रे, ए मनकामना.॥१॥
कर्मशत्रु तुमे जीतीया रे, तिम मुजने जिताड;
अजित थाउं दुश्मन थकी रे, ए मुज पूरो हाड रे. ॥२॥
जितशत्रु नृपनंदनो रे, जीते वयरी जेह;
अचरिज ईहां कणे को नहि रे, अवधारो गुण गेह रे.||३||
सकल पदारथ पामीए रे, दीठे तुम देदार;
सोभागी महिमा नीलो रे, विजयामात मल्हार रे.||४||
“ज्ञानविमल’सुप्रकाशथी रे, भासित लोकालोक;
शिवसुंदरीना वालहा रे, प्रणमे भविजन थोक रे.||५||`,
      sa: "",
      en: `Ajita jinanda dayaa karo re, aanee adhika pramoda;
Jaanee sevaka aapano re, suneeye vachana vinoda re,
Jinajee sevanaa, bhava bhava taaharee hojo re, e manakaamanaa.||1||
Karmashatru tume jeeteeyaa re, tima mujane jitaada;
Ajita thaaun dushmana thakee re, e muja pooro haada re. ||2||
Jitashatru nrupanandano re, jeete vayaree jeha;
Acharija eehaan kane ko nahi re, avadhaaro guna geha re.||3||
Sakala padaaratha paameee re, deethe tuma dedaara;
Sobhaagee mahimaa neelo re, vijayaamaata malhaara re.||4||
“jnyaanavimala’suprakaashathee re, bhaasita lokaaloka;
Shivasundareenaa vaalahaa re, praname bhavijana thoka re.||5||`,
    },
  },
  {
    id: "ajit-jinanda-ajit-jinanda",
    type: "bhajan",
    title: {
      gu: "અજિત જિણંદા! અજિત જિણંદા!",
      hi: "अजित जिणंदा! अजित जिणंदा!",
      sa: "",
      en: "Ajit Jinanda Ajit Jinanda",
    },
    text: {
      gu: `અજિત જિણંદા! અજિત જિણંદા!,
તું મેરા સાહિબ મેં તેરા બંદા. ।।૧ ।।
જીતશત્રુ નૃપ વિજયાદે નંદા,
લંછન ચરણ સોહે ગયંદા. ॥२॥
સકલ કરમ જીતી અજિત કહાયા,
આપ બળે થયા સિદ્ધ સહાયા. ॥૩||
મોહ નૃપતિ જેહ અટલ અટારો,
તુમ આગે ન રહ્યો તસ ચારો. ॥૪॥
વિષયકષાયજે જગનેનડિયા,
તુમધ્યાનાનલેશલભજ્યુંપડિયા. ॥૫॥
દુશ્મન દાવ ન કોઈ ફાવે,
તિણથી અજિત તુમ નામ સુહાવે. ||૬।।
અજિત થાઉં હું તુમચે નામ,
બહોત વધારો પ્રભુ જગમાંહી મામ. ।।૭।॥
સફળ સરાસર પ્રણમે પાયા,
‘ન્યાયસાગરે’ પ્રભુના ગણ ગાયા. ।।૮।।`,
      hi: `अजित जिणंदा! अजित जिणंदा!,
तुं मेरा साहिब में तेरा बंदा. ।।१ ।।
जीतशत्रु नृप विजयादे नंदा,
लंछन चरण सोहे गयंदा. ॥२॥
सकल करम जीती अजित कहाया,
आप बळे थया सिद्ध सहाया. ॥३||
मोह नृपति जेह अटल अटारो,
तुम आगे न रह्यो तस चारो. ॥४॥
विषयकषायजे जगनेनडिया,
तुमध्यानानलेशलभज्युंपडिया. ॥५॥
दुश्मन दाव न कोई फावे,
तिणथी अजित तुम नाम सुहावे. ||६।।
अजित थाउं हुं तुमचे नाम,
बहोत वधारो प्रभु जगमांही माम. ।।७।॥
सफळ सरासर प्रणमे पाया,
‘न्यायसागरे’ प्रभुना गण गाया. ।।८।।`,
      sa: "",
      en: `Ajita jinandaa! ajita jinandaa!,
Tun meraa saahiba men teraa bandaa. ||1 ||
Jeetashatru nrupa vijayaade nandaa,
Lanchhana charana sohe gayandaa. ||2||
Sakala karama jeetee ajita kahaayaa,
Aapa bale thayaa siddha sahaayaa. ||3||
Moha nrupati jeha atala ataaro,
Tuma aage na rahyo tasa chaaro. ||4||
Vishayakashaayaje jaganenadiyaa,
Tumadhyaanaanaleshalabhajyunpadiyaa. ||5||
Dushmana daava na koee phaave,
Tinathee ajita tuma naama suhaave. ||6||
Ajita thaaun hun tumache naama,
Bahota vadhaaro prabhu jagamaanhee maama. ||7|||
Saphala saraasara praname paayaa,
‘nyaayasaagare’ prabhunaa gana gaayaa. ||8||`,
    },
  },
  {
    id: "ajit-jinandasu-pritadi",
    type: "bhajan",
    title: {
      gu: "અજિત પ્રીતડી, મુજ ન ગમે હો બીજાનો સંગ કે",
      hi: "अजित प्रीतडी, मुज न गमे हो बीजानो संग के",
      sa: "",
      en: "Ajit Jinandasu Pritadi",
    },
    text: {
      gu: `અજિત પ્રીતડી, મુજ ન ગમે હો બીજાનો સંગ કે;
માલતી ફુલે મોહિયો, કિમ બેસે હો બાવળ તરુ ભૂંગ કે.||૧||
ગંગા જલમાં જે રમ્યા, કિમ છિલ્લર હો રતિ પામે મરાલ કે;
સરોવર જલધર જલ વિના,
નવિ ચાહે હો જગ ચાતક બાલ કે.||૨||
૧૨ ।। કોકિલ કલ કુજિત કરે, પામી મંજરી હો પંજરી સહકાર કે;
ઓછાં તરુવર નવિ ગમે, ગિરુઆશું હો હોયે ગુણનો પ્યાર કે. ।।૩।।
કમલિની દિનકર કર ગ્રહે, વળી કુમુદિની હો ઘરે ચંદશું પ્રીત કે;
ગૌરી ગિરીશ ગિરિધર વિના,
નવિ ચાહે હો કમલા નિજ ચિત્ત કે.||૪||
॥૪॥ તિમ પ્રભુશું મુજ મન રમ્યું, બીજાશું હો નવિ આવે દાય કે;
શ્રી નયવિજય સુગુરુ તણો,
વાચક “જસ’ હો નિત નિત ગુણ ગાયકે.॥૫॥`,
      hi: `अजित प्रीतडी, मुज न गमे हो बीजानो संग के;
मालती फुले मोहियो, किम बेसे हो बावळ तरु भूंग के.||१||
गंगा जलमां जे रम्या, किम छिल्लर हो रति पामे मराल के;
सरोवर जलधर जल विना,
नवि चाहे हो जग चातक बाल के.||२||
१२ ।। कोकिल कल कुजित करे, पामी मंजरी हो पंजरी सहकार के;
ओछां तरुवर नवि गमे, गिरुआशुं हो होये गुणनो प्यार के. ।।३।।
कमलिनी दिनकर कर ग्रहे, वळी कुमुदिनी हो घरे चंदशुं प्रीत के;
गौरी गिरीश गिरिधर विना,
नवि चाहे हो कमला निज चित्त के.||४||
॥४॥ तिम प्रभुशुं मुज मन रम्युं, बीजाशुं हो नवि आवे दाय के;
श्री नयविजय सुगुरु तणो,
वाचक “जस’ हो नित नित गुण गायके.॥५॥`,
      sa: "",
      en: `Ajita preetadee, muja na game ho beejaano sanga ke;
Maalatee phule mohiyo, kima bese ho baavala taru bhoonga ke.||1||
Gangaa jalamaan je ramyaa, kima chhillara ho rati paame maraala ke;
Sarovara jaladhara jala vinaa,
Navi chaahe ho jaga chaataka baala ke.||2||
12 || kokila kala kujita kare, paamee manjaree ho panjaree sahakaara ke;
Ochhaan taruvara navi game, giruaashun ho hoye gunano pyaara ke. ||3||
Kamalinee dinakara kara grahe, valee kumudinee ho ghare chandashun preeta ke;
Gauree gireesha giridhara vinaa,
Navi chaahe ho kamalaa nija chitta ke.||4||
||4|| tima prabhushun muja mana ramyun, beejaashun ho navi aave daaya ke;
Shree nayavijaya suguru tano,
Vaachaka “jasa’ ho nita nita guna gaayake.||5||`,
    },
  },
  {
    id: "ajit-jinesar",
    type: "bhajan",
    title: {
      gu: "અજિત જિણેસર! ચરણની સેવા, હેવાયે હું હળિયો",
      hi: "अजित जिणेसर! चरणनी सेवा, हेवाये हुं हळियो",
      sa: "",
      en: "Ajit Jinesar",
    },
    text: {
      gu: `અજિત જિણેસર! ચરણની સેવા, હેવાયે હું હળિયો;
કદીએ અણચાખ્યો પણ અનુભવ, રસનો ટાણો મળિયો;
પ્રભુજી! મહેર કરીને આજ,  કાજ હમારા સારો.||૧||
મુકાવ્યો પણ હું નવિ મુકું, ચુકું નવિ એ ટાણો;
ભક્તિ ભાવ ઊઠ્યો જે અંતરમાં, તે કિમ રહે શરમાણો.||૨||
લોચન શાંત સુધારસ સુભગા, મુખ મટકાળું સુપ્રસન્ન;
યોગ મુદ્રાનો લટકો ચટકો, અતિશય તો અતિ ધન્ન.||૩||
પિંડ પદસ્થ રુપસ્થે લીનો, ચરણકમળ તુજ ગ્રહિયાં
ભ્રમર પરે રસસ્વાદ ચખાવો, વિરસો કાં કરે મહિયાં.||૪||
બાલ્યકાળમાં વાર અનંતી, સામગ્રીએ નવિ જાગ્યો;
યૌવનકાળે તે રસ ચાખ્યો, તું સમરથ પ્રભુ માંગ્યો.||૫||
તું અનુભવ રસદેવા સમરથ, હું પણ અર્થી તેહનો;
ચિત્ત વિત્તને પાત્ર સંબંધે, અજર રહ્યો હવે કેહનો.||૬||
પ્રભુની મહેરે તે રસ ચાખ્યો, અંતરંગ સુખ પામ્યો;
“માનવિજય” વાચક ઈમ જંપે, હુઓ મુજ મન કામ્યો.||૭||`,
      hi: `अजित जिणेसर! चरणनी सेवा, हेवाये हुं हळियो;
कदीए अणचाख्यो पण अनुभव, रसनो टाणो मळियो;
प्रभुजी! महेर करीने आज,  काज हमारा सारो.||१||
मुकाव्यो पण हुं नवि मुकुं, चुकुं नवि ए टाणो;
भक्ति भाव ऊठ्यो जे अंतरमां, ते किम रहे शरमाणो.||२||
लोचन शांत सुधारस सुभगा, मुख मटकाळुं सुप्रसन्न;
योग मुद्रानो लटको चटको, अतिशय तो अति धन्न.||३||
पिंड पदस्थ रुपस्थे लीनो, चरणकमळ तुज ग्रहियां
भ्रमर परे रसस्वाद चखावो, विरसो कां करे महियां.||४||
बाल्यकाळमां वार अनंती, सामग्रीए नवि जाग्यो;
यौवनकाळे ते रस चाख्यो, तुं समरथ प्रभु मांग्यो.||५||
तुं अनुभव रसदेवा समरथ, हुं पण अर्थी तेहनो;
चित्त वित्तने पात्र संबंधे, अजर रह्यो हवे केहनो.||६||
प्रभुनी महेरे ते रस चाख्यो, अंतरंग सुख पाम्यो;
“मानविजय” वाचक ईम जंपे, हुओ मुज मन काम्यो.||७||`,
      sa: "",
      en: `Ajita jinesara! charananee sevaa, hevaaye hun haliyo;
Kadeee anachaakhyo pana anubhava, rasano taano maliyo;
Prabhujee! mahera kareene aaja, kaaja hamaaraa saaro.||1||
Mukaavyo pana hun navi mukun, chukun navi e taano;
Bhakti bhaava oothyo je antaramaan, te kima rahe sharamaano.||2||
Lochana shaanta sudhaarasa subhagaa, mukha matakaalun suprasanna;
Yoga mudraano latako chatako, atishaya to ati dhanna.||3||
Pinda padastha rupasthe leeno, charanakamala tuja grahiyaan
Bhramara pare rasasvaada chakhaavo, viraso kaan kare mahiyaan.||4||
Baalyakaalamaan vaara anantee, saamagreee navi jaagyo;
Yauvanakaale te rasa chaakhyo, tun samaratha prabhu maangyo.||5||
Tun anubhava rasadevaa samaratha, hun pana arthee tehano;
Chitta vittane paatra sanbandhe, ajara rahyo have kehano.||6||
Prabhunee mahere te rasa chaakhyo, antaranga sukha paamyo;
“maanavijaya” vaachaka eema janpe, huo muja mana kaamyo.||7||`,
    },
  },
  {
    id: "ajit-jineshwar-sambhado-re",
    type: "bhajan",
    title: {
      gu: "અજિત જિનેશ્વર સાંભળો રે, એક સેવકની અરદાસ",
      hi: "अजित जिनेश्वर सांभळो रे, एक सेवकनी अरदास",
      sa: "",
      en: "Ajit Jineshwar Sambhado Re",
    },
    text: {
      gu: `અજિત જિનેશ્વર સાંભળો રે, એક સેવકની અરદાસ,
ભવભયથી હું ઉભગ્યો રે, કર નિજ ચરણનો દાસ;
ભવિયાં ભાવે ભજો જિનચંદ, સેવે ચોસઠ ઇંદ.||૧||
મુજ સરીખા તુજને ઘણા રે, માહરે તો તું એક;
કદીએ ન છોડું તુજ છેડલો રે, એ મુજ મોટી ટેક.||૨||
નિર્ગુણી જાણી ઉવેખશો રે, આદિ ગુણી કોણ હોય;
ગુણીજનને જો તારશો તો, અધિકતા કિહાં તુજ જોય.||૩||
ભવભય ભંજની તાહરી રે, મૂર્તિ શોભે મહારાય;
જે તુજ ધ્યાને સદા રમે, ધ્યેયપણું તસ થાય.||૪||
મન મંદિરિયે પધારિયે રે, કૃપા કરી જિનરાય;
“કમલવિજય’ પદ સેવતાં રે, મોહનના વાંછિત થાય.||૫||`,
      hi: `अजित जिनेश्वर सांभळो रे, एक सेवकनी अरदास,
भवभयथी हुं उभग्यो रे, कर निज चरणनो दास;
भवियां भावे भजो जिनचंद, सेवे चोसठ इंद.||१||
मुज सरीखा तुजने घणा रे, माहरे तो तुं एक;
कदीए न छोडुं तुज छेडलो रे, ए मुज मोटी टेक.||२||
निर्गुणी जाणी उवेखशो रे, आदि गुणी कोण होय;
गुणीजनने जो तारशो तो, अधिकता किहां तुज जोय.||३||
भवभय भंजनी ताहरी रे, मूर्ति शोभे महाराय;
जे तुज ध्याने सदा रमे, ध्येयपणुं तस थाय.||४||
मन मंदिरिये पधारिये रे, कृपा करी जिनराय;
“कमलविजय’ पद सेवतां रे, मोहनना वांछित थाय.||५||`,
      sa: "",
      en: `Ajita jineshvara saanbhalo re, eka sevakanee aradaasa,
Bhavabhayathee hun ubhagyo re, kara nija charanano daasa;
Bhaviyaan bhaave bhajo jinachanda, seve chosatha inda.||1||
Muja sareekhaa tujane ghanaa re, maahare to tun eka;
Kadeee na chhodun tuja chhedalo re, e muja motee teka.||2||
Nirgunee jaanee uvekhasho re, aadi gunee kona hoya;
Guneejanane jo taarasho to, adhikataa kihaan tuja joya.||3||
Bhavabhaya bhanjanee taaharee re, moorti shobhe mahaaraaya;
Je tuja dhyaane sadaa rame, dhyeyapanun tasa thaaya.||4||
Mana mandiriye padhaariye re, krupaa karee jinaraaya;
“kamalavijaya’ pada sevataan re, mohananaa vaanchhita thaaya.||5||`,
    },
  },
  {
    id: "akhiya-darishan-ki-hai-pyasi",
    type: "bhajan",
    title: {
      gu: "અખિયાં દરિશન કી હૈ પ્યાસી… પાર્શ્વ તુમારી, સુરનર જનતા દાસી",
      hi: "अखियां दरिशन की है प्यासी… पार्श्व तुमारी, सुरनर जनता दासी",
      sa: "",
      en: "Akhiya Darishan Ki Hai Pyasi",
    },
    text: {
      gu: `અખિયાં દરિશન કી હૈ પ્યાસી… પાર્શ્વ તુમારી, સુરનર જનતા દાસી;
પુરિષાદાની આશા પૂરણ તું અવિનતલ, સુરતરુને સંકાસી. ॥१॥
નિરાગી શું રાગ કરંતા, હોવત જગમાં હાંસી;
એક પખો જે નેહ ચલાવે, દિયો તેહને શાબાશી.॥२॥
અજર અમર અકલંક અનંત ગુણ, આપ ભયે અવિનાશી;
કારજ કરી સુખ પાયો, અબ ક્યું હોત ઉદાસી.||૩||
તું પુરુષોત્તમ પરમપુરુષ હૈ, તું જગ મેં જિતકાસી;
જગથી દૂર રહ્યો પણ મુજ ચિત્ત, અંતર ક્યું કર જાસી? ॥४॥
વામાનંદન વંદન તુમચા, કરત હૈ શુભ મતિ વાસી;
‘જ્ઞાનવિમલ’ પ્રભુ ચરણ પસાયે, સમકિત લીલ વિલાસી.||૫||`,
      hi: `अखियां दरिशन की है प्यासी… पार्श्व तुमारी, सुरनर जनता दासी;
पुरिषादानी आशा पूरण तुं अविनतल, सुरतरुने संकासी. ॥१॥
निरागी शुं राग करंता, होवत जगमां हांसी;
एक पखो जे नेह चलावे, दियो तेहने शाबाशी.॥२॥
अजर अमर अकलंक अनंत गुण, आप भये अविनाशी;
कारज करी सुख पायो, अब क्युं होत उदासी.||३||
तुं पुरुषोत्तम परमपुरुष है, तुं जग में जितकासी;
जगथी दूर रह्यो पण मुज चित्त, अंतर क्युं कर जासी? ॥४॥
वामानंदन वंदन तुमचा, करत है शुभ मति वासी;
‘ज्ञानविमल’ प्रभु चरण पसाये, समकित लील विलासी.||५||`,
      sa: "",
      en: `Akhiyaan darishana kee hai pyaasee… paarshva tumaaree, suranara janataa daasee;
Purishaadaanee aashaa poorana tun avinatala, suratarune sankaasee. ||1||
Niraagee shun raaga karantaa, hovata jagamaan haansee;
Eka pakho je neha chalaave, diyo tehane shaabaashee.||2||
Ajara amara akalanka ananta guna, aapa bhaye avinaashee;
Kaaraja karee sukha paayo, aba kyun hota udaasee.||3||
Tun purushottama paramapurusha hai, tun jaga men jitakaasee;
Jagathee doora rahyo pana muja chitta, antara kyun kara jaasee? ||4||
Vaamaanandana vandana tumachaa, karata hai shubha mati vaasee;
‘jnyaanavimala’ prabhu charana pasaaye, samakita leela vilaasee.||5||`,
    },
  },
  {
    id: "akhiya-harakhan-lagi",
    type: "bhajan",
    title: {
      gu: "અખિયાં હરખણ લાગી, હમારી અખિયાં હરખણ લાગી…",
      hi: "अखियां हरखण लागी, हमारी अखियां हरखण लागी…",
      sa: "",
      en: "Akhiya Harakhan Lagi",
    },
    text: {
      gu: `અખિયાં હરખણ લાગી, હમારી અખિયાં હરખણ લાગી…
દરિશણ દેખત પાર્શ્વ જિણંદ કો, ભાગ્ય દશા અબ જાગી. ॥१॥
અકલ અરુપી ઔર અવિનાશી,
જગમેં તું હી નિરાગી. ॥२॥
સૂરત સુંદર અચરિજ એહી,
જગ જનને કરે રાગી. ॥3॥
શરણાગત પ્રભુ! તુજ પદ પંકજ,
સેવના મુજ મતિ જાગી. ॥४॥
લીલા લહેરે દે નિજ પદવી,
તુમ સમ કો નહીં ત્યાગી. ॥५॥
વામાનંદન ચંદનની પરે,
શીતલ તું હી સૌભાગી. ॥६॥
“જ્ઞાનવિમલ’ પ્રભુ ધ્યાન ધરંતા,
ભવ ભય ભાવઠ ભાંગી. ॥७॥`,
      hi: `अखियां हरखण लागी, हमारी अखियां हरखण लागी…
दरिशण देखत पार्श्व जिणंद को, भाग्य दशा अब जागी. ॥१॥
अकल अरुपी और अविनाशी,
जगमें तुं ही निरागी. ॥२॥
सूरत सुंदर अचरिज एही,
जग जनने करे रागी. ॥3॥
शरणागत प्रभु! तुज पद पंकज,
सेवना मुज मति जागी. ॥४॥
लीला लहेरे दे निज पदवी,
तुम सम को नहीं त्यागी. ॥५॥
वामानंदन चंदननी परे,
शीतल तुं ही सौभागी. ॥६॥
“ज्ञानविमल’ प्रभु ध्यान धरंता,
भव भय भावठ भांगी. ॥७॥`,
      sa: "",
      en: `Akhiyaan harakhana laagee, hamaaree akhiyaan harakhana laagee…
Darishana dekhata paarshva jinanda ko, bhaagya dashaa aba jaagee. ||1||
Akala arupee aura avinaashee,
Jagamen tun hee niraagee. ||2||
Soorata sundara acharija ehee,
Jaga janane kare raagee. ||3||
Sharanaagata prabhu! tuja pada pankaja,
Sevanaa muja mati jaagee. ||4||
Leelaa lahere de nija padavee,
Tuma sama ko naheen tyaagee. ||5||
Vaamaanandana chandananee pare,
Sheetala tun hee saubhaagee. ||6||
“jnyaanavimala’ prabhu dhyaana dharantaa,
Bhava bhaya bhaavatha bhaangee. ||7||`,
    },
  },
  {
    id: "anant-jinrajna-charnani-seva",
    type: "bhajan",
    title: {
      gu: "અનંત જિનરાજના ચરણની સેવના",
      hi: "अनंत जिनराजना चरणनी सेवना",
      sa: "",
      en: "Anant Jinrajna Charnani Seva",
    },
    text: {
      gu: `અનંત જિનરાજના ચરણની સેવના,
પાવના ભાવના ચિત્ત સુહાવે;
જુગતિ શ્યું જગત મેં જતનથી જોવતાં,
અવર ઉપમા ન કહો કુણ આવે.||૧||
. સંત નવિ અંત તુજ ગુણ તણો કો લહે,
નહિ વહે એહવો ગર્વ કોઈ;
સકલરુપે કરી વચનગોચર થકી,
યદ્યપિ મોહનો અંત હોઈ.||૨||
વસ્તુ ઉપમાન સવિ રુપથી ભાખીયે,
તું અરુપી કહો કિમ મવીજે;
ધ્યાન સાપેક્ષ આલંબને ધ્યાઈએ,
તું નિરાલંબ નિરપેક્ષ કહીજે.||૩||
વિધિતણી સેવના અવિધિ અણસેવના,
એહ તુજ આણ નિર્ધાર લહીયે;
જે નિરાશંસ આશંસ સમમિચ્છિએ,
મોક્ષ સંસારનો હેતુ કહીએ.||૪||
સિંહસેનાંગ જો શ્યેન લંછન ધરો,
માત સુયશાતણો તું મલ્હારો;
‘જ્ઞાનવિમલાદિ’ ગુણ ઉદય અવિચલપણે,
તો હવે જો દિલે દાસ ધારો.||૫||`,
      hi: `अनंत जिनराजना चरणनी सेवना,
पावना भावना चित्त सुहावे;
जुगति श्युं जगत में जतनथी जोवतां,
अवर उपमा न कहो कुण आवे.||१||
. संत नवि अंत तुज गुण तणो को लहे,
नहि वहे एहवो गर्व कोई;
सकलरुपे करी वचनगोचर थकी,
यद्यपि मोहनो अंत होई.||२||
वस्तु उपमान सवि रुपथी भाखीये,
तुं अरुपी कहो किम मवीजे;
ध्यान सापेक्ष आलंबने ध्याईए,
तुं निरालंब निरपेक्ष कहीजे.||३||
विधितणी सेवना अविधि अणसेवना,
एह तुज आण निर्धार लहीये;
जे निराशंस आशंस सममिच्छिए,
मोक्ष संसारनो हेतु कहीए.||४||
सिंहसेनांग जो श्येन लंछन धरो,
मात सुयशातणो तुं मल्हारो;
‘ज्ञानविमलादि’ गुण उदय अविचलपणे,
तो हवे जो दिले दास धारो.||५||`,
      sa: "",
      en: `Ananta jinaraajanaa charananee sevanaa,
Paavanaa bhaavanaa chitta suhaave;
Jugati shyun jagata men jatanathee jovataan,
Avara upamaa na kaho kuna aave.||1||
. santa navi anta tuja guna tano ko lahe,
Nahi vahe ehavo garva koee;
Sakalarupe karee vachanagochara thakee,
Yadyapi mohano anta hoee.||2||
Vastu upamaana savi rupathee bhaakheeye,
Tun arupee kaho kima maveeje;
Dhyaana saapeksha aalanbane dhyaaeee,
Tun niraalanba nirapeksha kaheeje.||3||
Vidhitanee sevanaa avidhi anasevanaa,
Eha tuja aana nirdhaara laheeye;
Je niraashansa aashansa samamichchhie,
Moksha sansaarano hetu kaheee.||4||
Sinhasenaanga jo shyena lanchhana dharo,
Maata suyashaatano tun malhaaro;
‘jnyaanavimalaadi’ guna udaya avichalapane,
To have jo dile daasa dhaaro.||5||`,
    },
  },
  {
    id: "anant-prabhu-ke-aash-ki",
    type: "bhajan",
    title: {
      gu: "અનંત પ્રભુ કે આશ કી, આઈ બની હૈ ઐસી",
      hi: "अनंत प्रभु के आश की, आई बनी है ऐसी",
      sa: "",
      en: "Anant Prabhu Ke Aash Ki",
    },
    text: {
      gu: `અનંત પ્રભુ કે આશ કી, આઈ બની હૈ ઐસી;
ધન શિખી ચંદ ચકોર જ્યું, જલ ને મીન જેસી.||૧||
ઔરશું રતિ સબ વિસારી, પ્રભુ કી લગે પ્યારી;
જનમ જનમ અબ ચાહતે હૈં, ઈનહી શું યારી.||૨||
નૈન ન ચાહે ઔર કું, લગન જોર લગી હૈ;
જહાં ઔર જપે નહીં, ભ્રાન્ત દૂર ભગી હૈ.||૩||
પંચ વિષય સુખ પાસે સે, દુનિયા કા દિલાસા;
જીવ અબ જાને ઝહેરશાં, નહિ ઔર કી આશા.||૪||
આખર આપ સમા કરે, સેવક કો સ
‘ઉદય’ વદે સબ છોડ કે, મિલું ઉપસે ધાઈ.`,
      hi: `अनंत प्रभु के आश की, आई बनी है ऐसी;
धन शिखी चंद चकोर ज्युं, जल ने मीन जेसी.||१||
औरशुं रति सब विसारी, प्रभु की लगे प्यारी;
जनम जनम अब चाहते हैं, ईनही शुं यारी.||२||
नैन न चाहे और कुं, लगन जोर लगी है;
जहां और जपे नहीं, भ्रान्त दूर भगी है.||३||
पंच विषय सुख पासे से, दुनिया का दिलासा;
जीव अब जाने झहेरशां, नहि और की आशा.||४||
आखर आप समा करे, सेवक को स
‘उदय’ वदे सब छोड के, मिलुं उपसे धाई.`,
      sa: "",
      en: `Ananta prabhu ke aasha kee, aaee banee hai aisee;
Dhana shikhee chanda chakora jyun, jala ne meena jesee.||1||
Aurashun rati saba visaaree, prabhu kee lage pyaaree;
Janama janama aba chaahate hain, eenahee shun yaaree.||2||
Naina na chaahe aura kun, lagana jora lagee hai;
Jahaan aura jape naheen, bhraanta doora bhagee hai.||3||
Pancha vishaya sukha paase se, duniyaa kaa dilaasaa;
Jeeva aba jaane jhaherashaan, nahi aura kee aashaa.||4||
Aakhara aapa samaa kare, sevaka ko sa
‘udaya’ vade saba chhoda ke, milun upase dhaaee.`,
    },
  },
  {
    id: "anantvirj-arihant",
    type: "bhajan",
    title: {
      gu: "અનંતવિરજ અરિહંત! સુણો મુજ વિનતિ",
      hi: "अनंतविरज अरिहंत! सुणो मुज विनति",
      sa: "",
      en: "Anantvirj Arihant",
    },
    text: {
      gu: `અનંતવિરજ અરિહંત! સુણો મુજ વિનતિ,
અવસર પામી આજ કહું જે દિલ છતી;
આતમસત્તા હારી સંસારે હું ભમ્યો,
મિથ્યા અવિરતિ રંગ કષાયે બહુ દમ્યો.||૧||
ક્રોધ દાવાનલ દગ્ધ માનવિષધર ડસ્યો,
માયાજાલે બદ્ધ લોભ અજગર ગ્રસ્યો;
મન વચન કાયાના યોગ ચપળ થયા પરવશા,
પુદ્ગલ પરિચય પાપતણી અહિનિશ દશા.||૨||
કામરાગે અણનાથ્યા સાંઢ પરે ધસ્યો,
સ્નેહરાગની રાચે ભવપિંજર વસ્યો;||૩||
દૃષ્ટિરાગ રુચિ કાચપાચ સમકિત ગણું,
આગમ રીતે નાથ! ન નિરખું નિજપણું.||૪||
ધર્મ દેખાડું માંડ, ભાંડ પરે અતિ લવું,
“અચરે અચરે રામ” શુક પરે જપું;
કપટપટું નટુવા પરે મુનિમુદ્રા ધરું, સુખપોષ ભરું.||૫||
એક દિનમાં નવ વાર ‘કરેમિ ભંતે’ કરું,
ત્રિવિધ ત્રિવિધ પચ્ચક્ખાણ ક્ષણ એક ન વિસરું;
મા-સાહસ ખગ રીતિ નીતિ ઘણી કહું,
ઉત્તમ કુલવટ વાટ ન તે પણ નિરવહું||૬||
દીનદયાળ! કૃપાળ! પ્રભુ! મહારાજ! છો,
જાણ આગળ શું કહેવું? ગરીબનિવાજ છો;
પૂરવ ધાતકી ખંડ નલિની વિજયાવતી,
નયરી અયોધ્યા નાયક, લાયક યતિપતિ.||૭||
મેઘમહીપ મંગલાવતી સુત વિજયાવતી,
આ નંદન ગજલંછન જગ જન તારતિ;
“ક્ષમાવિજય’ જિનરાજ! અપાય નિવારજો,
વિહરમાન ભગવાન! સુનજરે તારજો.||૮||`,
      hi: `अनंतविरज अरिहंत! सुणो मुज विनति,
अवसर पामी आज कहुं जे दिल छती;
आतमसत्ता हारी संसारे हुं भम्यो,
मिथ्या अविरति रंग कषाये बहु दम्यो.||१||
क्रोध दावानल दग्ध मानविषधर डस्यो,
मायाजाले बद्ध लोभ अजगर ग्रस्यो;
मन वचन कायाना योग चपळ थया परवशा,
पुद्गल परिचय पापतणी अहिनिश दशा.||२||
कामरागे अणनाथ्या सांढ परे धस्यो,
स्नेहरागनी राचे भवपिंजर वस्यो;||३||
दृष्टिराग रुचि काचपाच समकित गणुं,
आगम रीते नाथ! न निरखुं निजपणुं.||४||
धर्म देखाडुं मांड, भांड परे अति लवुं,
“अचरे अचरे राम” शुक परे जपुं;
कपटपटुं नटुवा परे मुनिमुद्रा धरुं, सुखपोष भरुं.||५||
एक दिनमां नव वार ‘करेमि भंते’ करुं,
त्रिविध त्रिविध पच्चक्खाण क्षण एक न विसरुं;
मा-साहस खग रीति नीति घणी कहुं,
उत्तम कुलवट वाट न ते पण निरवहुं||६||
दीनदयाळ! कृपाळ! प्रभु! महाराज! छो,
जाण आगळ शुं कहेवुं? गरीबनिवाज छो;
पूरव धातकी खंड नलिनी विजयावती,
नयरी अयोध्या नायक, लायक यतिपति.||७||
मेघमहीप मंगलावती सुत विजयावती,
आ नंदन गजलंछन जग जन तारति;
“क्षमाविजय’ जिनराज! अपाय निवारजो,
विहरमान भगवान! सुनजरे तारजो.||८||`,
      sa: "",
      en: `Anantaviraja arihanta! suno muja vinati,
Avasara paamee aaja kahun je dila chhatee;
Aatamasattaa haaree sansaare hun bhamyo,
Mithyaa avirati ranga kashaaye bahu damyo.||1||
Krodha daavaanala dagdha maanavishadhara dasyo,
Maayaajaale baddha lobha ajagara grasyo;
Mana vachana kaayaanaa yoga chapala thayaa paravashaa,
Pudgala parichaya paapatanee ahinisha dashaa.||2||
Kaamaraage ananaathyaa saandha pare dhasyo,
Sneharaaganee raache bhavapinjara vasyo;||3||
Drushtiraaga ruchi kaachapaacha samakita ganun,
Aagama reete naatha! na nirakhun nijapanun.||4||
Dharma dekhaadun maanda, bhaanda pare ati lavun,
“achare achare raama” shuka pare japun;
Kapatapatun natuvaa pare munimudraa dharun, sukhaposha bharun.||5||
Eka dinamaan nava vaara ‘karemi bhante’ karun,
Trividha trividha pachchakkhaana kshana eka na visarun;
Maa-saahasa khaga reeti neeti ghanee kahun,
Uttama kulavata vaata na te pana niravahun||6||
Deenadayaala! krupaala! prabhu! mahaaraaja! chho,
Jaana aagala shun kahevun? gareebanivaaja chho;
Poorava dhaatakee khanda nalinee vijayaavatee,
Nayaree ayodhyaa naayaka, laayaka yatipati.||7||
Meghamaheepa mangalaavatee suta vijayaavatee,
Aa nandana gajalanchhana jaga jana taarati;
“kshamaavijaya’ jinaraaja! apaaya nivaarajo,
Viharamaana bhagavaana! sunajare taarajo.||8||`,
    },
  },
  {
    id: "antar-viraj-arihant",
    type: "bhajan",
    title: {
      gu: "અનંતવિરજ અરિહંત! સુણો મુજ વિનતિ",
      hi: "अनंतविरज अरिहंत! सुणो मुज विनति",
      sa: "",
      en: "Antar Viraj Arihant",
    },
    text: {
      gu: `અનંતવિરજ અરિહંત! સુણો મુજ વિનતિ,
અવસર પામી આજ કહું જે દિલ છતી;
આતમસત્તા હારી સંસારે હું ભમ્યો,
મિથ્યા અવિરતિ રંગ કષાયે બહુ દમ્યો.||1||
ક્રોધ દાવાનલ દગ્ધ માનવિષધર ડસ્યો,
માયાજાલે બદ્ધ લોભ અજગર ગ્રસ્યો;
મન વચન કાયાના યોગ ચપળ થયા પરવશા,
પુદ્રલ પરિચય પાપતણી અહિનશિ દશા.||2||
કામરાગે અણનાથ્યા સાંઢ પરે ધસ્યો,
સ્નેહરાગની રાચે ભવપિંજર વસ્યો;
દૃષ્ટિરાગ રુચિ કાચપાચ સમકિત ગણું,
આગમ રીતે નાથ! ન નિરખું નિજપણું. ||3||
ધર્મ દેખાડું માંડ, ભાંડ પરે અતિ લવું,
અચરે અચરે રામ’ શુક પરે જપું;
કપટપટું નટુવા પરે મુનિમુદ્રા ધરું,
પંચવિષય સુખપોષ સદોષવૃત્તિ ભરું.||૪||
એક દિનમાં નવ વાર કરેમિ ભંતે” કરું,
ત્રિવિધ ત્રિવિધ પચ્ચક્ખાણ ક્ષણ એક ન વિસરું;
મા-સાહસ ખગ રીતિ નીતિ ઘણી કહું,
ઉત્તમ કુલવટ વાટ ન તે પણ નિરવહું.||૫||
દીનદયાળ! કૃપાળ! પ્રભુ! મહારાજ! છો,
જાણ આગળ શું કહેવું? ગરીબનિવાજ છો;
ધાતકી ખંડ નલિની વિજયાવતી,
નયરી અયોધ્યા નાયક, લાયક યતિપતિ.||૬||
મેઘમહીપ મંગલાવતી સુત વિજયાવતી,
આ નંદન ગજલંછન જગ જન તારતિ;
“ક્ષમાવિજય’ જિનરાજ! અપાય નિવારજો,
વિહરમાન ભગવાન! સુનજરે તારજો.||૭||`,
      hi: `अनंतविरज अरिहंत! सुणो मुज विनति,
अवसर पामी आज कहुं जे दिल छती;
आतमसत्ता हारी संसारे हुं भम्यो,
मिथ्या अविरति रंग कषाये बहु दम्यो.||1||
क्रोध दावानल दग्ध मानविषधर डस्यो,
मायाजाले बद्ध लोभ अजगर ग्रस्यो;
मन वचन कायाना योग चपळ थया परवशा,
पुद्रल परिचय पापतणी अहिनशि दशा.||2||
कामरागे अणनाथ्या सांढ परे धस्यो,
स्नेहरागनी राचे भवपिंजर वस्यो;
दृष्टिराग रुचि काचपाच समकित गणुं,
आगम रीते नाथ! न निरखुं निजपणुं. ||3||
धर्म देखाडुं मांड, भांड परे अति लवुं,
अचरे अचरे राम’ शुक परे जपुं;
कपटपटुं नटुवा परे मुनिमुद्रा धरुं,
पंचविषय सुखपोष सदोषवृत्ति भरुं.||४||
एक दिनमां नव वार करेमि भंते” करुं,
त्रिविध त्रिविध पच्चक्खाण क्षण एक न विसरुं;
मा-साहस खग रीति नीति घणी कहुं,
उत्तम कुलवट वाट न ते पण निरवहुं.||५||
दीनदयाळ! कृपाळ! प्रभु! महाराज! छो,
जाण आगळ शुं कहेवुं? गरीबनिवाज छो;
धातकी खंड नलिनी विजयावती,
नयरी अयोध्या नायक, लायक यतिपति.||६||
मेघमहीप मंगलावती सुत विजयावती,
आ नंदन गजलंछन जग जन तारति;
“क्षमाविजय’ जिनराज! अपाय निवारजो,
विहरमान भगवान! सुनजरे तारजो.||७||`,
      sa: "",
      en: `Anantaviraja arihanta! suno muja vinati,
Avasara paamee aaja kahun je dila chhatee;
Aatamasattaa haaree sansaare hun bhamyo,
Mithyaa avirati ranga kashaaye bahu damyo.||1||
Krodha daavaanala dagdha maanavishadhara dasyo,
Maayaajaale baddha lobha ajagara grasyo;
Mana vachana kaayaanaa yoga chapala thayaa paravashaa,
Pudrala parichaya paapatanee ahinashi dashaa.||2||
Kaamaraage ananaathyaa saandha pare dhasyo,
Sneharaaganee raache bhavapinjara vasyo;
Drushtiraaga ruchi kaachapaacha samakita ganun,
Aagama reete naatha! na nirakhun nijapanun. ||3||
Dharma dekhaadun maanda, bhaanda pare ati lavun,
Achare achare raama’ shuka pare japun;
Kapatapatun natuvaa pare munimudraa dharun,
Panchavishaya sukhaposha sadoshavrutti bharun.||4||
Eka dinamaan nava vaara karemi bhante” karun,
Trividha trividha pachchakkhaana kshana eka na visarun;
Maa-saahasa khaga reeti neeti ghanee kahun,
Uttama kulavata vaata na te pana niravahun.||5||
Deenadayaala! krupaala! prabhu! mahaaraaja! chho,
Jaana aagala shun kahevun? gareebanivaaja chho;
Dhaatakee khanda nalinee vijayaavatee,
Nayaree ayodhyaa naayaka, laayaka yatipati.||6||
Meghamaheepa mangalaavatee suta vijayaavatee,
Aa nandana gajalanchhana jaga jana taarati;
“kshamaavijaya’ jinaraaja! apaaya nivaarajo,
Viharamaana bhagavaana! sunajare taarajo.||7||`,
    },
  },
  {
    id: "antarjami-sun-alvesar",
    type: "bhajan",
    title: {
      gu: "અંતરજામી સુણ અલવેસર, મહિમા ત્રિજગ તુમારો રે",
      hi: "अंतरजामी सुण अलवेसर, महिमा त्रिजग तुमारो रे",
      sa: "",
      en: "Antarjami Sun Alvesar",
    },
    text: {
      gu: `અંતરજામી સુણ અલવેસર, મહિમા ત્રિજગ તુમારો રે,
સાંભળીને આવ્યો હું તીરે, જન્મ મરણ દુઃખ વારો;
સેવક અરજ કરે છે રાજ, અમને શિવસુખ આપો,
આપો આપોને મહારાજ, અમને મોક્ષ સુખ આપો.||૧||
સહુકોનાં મનવાંછિત પૂરો, ચિંતા સહુની ચૂરો રે;
એહવું બિરુદ છે રાજ તુમારું, કેમ રાખો છો દૂરે.||૨||
સેવકને વલવલતો દેખી, મનમાં મહેર ન ધરશો રે;
કરુણાસાગર કેમ કહેવાશો, જો ઉપકાર ન કરશો.||૩|
લટપટનું હવે કામ નહીં છે, પ્રત્યક્ષ દરિસણ દીજે રે;
ધુમાડે નહીં સાહિબ, પેટ પડ્યાં પતીજે.||૪||
શ્રી શંખેશ્વર મંડન સાહિબ, વિનતડી અવધારો રે;
કહે ‘જિનહર્ષ’ મયા કરી મુજને, ભવસાગરથી તારો.||૫||`,
      hi: `अंतरजामी सुण अलवेसर, महिमा त्रिजग तुमारो रे,
सांभळीने आव्यो हुं तीरे, जन्म मरण दुःख वारो;
सेवक अरज करे छे राज, अमने शिवसुख आपो,
आपो आपोने महाराज, अमने मोक्ष सुख आपो.||१||
सहुकोनां मनवांछित पूरो, चिंता सहुनी चूरो रे;
एहवुं बिरुद छे राज तुमारुं, केम राखो छो दूरे.||२||
सेवकने वलवलतो देखी, मनमां महेर न धरशो रे;
करुणासागर केम कहेवाशो, जो उपकार न करशो.||३|
लटपटनुं हवे काम नहीं छे, प्रत्यक्ष दरिसण दीजे रे;
धुमाडे नहीं साहिब, पेट पड्यां पतीजे.||४||
श्री शंखेश्वर मंडन साहिब, विनतडी अवधारो रे;
कहे ‘जिनहर्ष’ मया करी मुजने, भवसागरथी तारो.||५||`,
      sa: "",
      en: `Antarajaamee suna alavesara, mahimaa trijaga tumaaro re,
Saanbhaleene aavyo hun teere, janma marana dukha vaaro;
Sevaka araja kare chhe raaja, amane shivasukha aapo,
Aapo aapone mahaaraaja, amane moksha sukha aapo.||1||
Sahukonaan manavaanchhita pooro, chintaa sahunee chooro re;
Ehavun biruda chhe raaja tumaarun, kema raakho chho doore.||2||
Sevakane valavalato dekhee, manamaan mahera na dharasho re;
Karunaasaagara kema kahevaasho, jo upakaara na karasho.||3|
Latapatanun have kaama naheen chhe, pratyaksha darisana deeje re;
Dhumaade naheen saahiba, peta padyaan pateeje.||4||
Shree shankheshvara mandana saahiba, vinatadee avadhaaro re;
Kahe ‘jinaharsha’ mayaa karee mujane, bhavasaagarathee taaro.||5||`,
    },
  },
  {
    id: "araj-suno-ho-nem-nagina",
    type: "bhajan",
    title: {
      gu: "અરજ સુણો હો નેમ નગીના, રાજુલના ભરથાર",
      hi: "अरज सुणो हो नेम नगीना, राजुलना भरथार",
      sa: "",
      en: "Araj Suno Ho Nem Nagina",
    },
    text: {
      gu: `અરજ સુણો હો નેમ નગીના, રાજુલના ભરથાર;
ભજ લો ભજ લો હો જગના પ્રાણી, ભજો સદા કિરતાર.||૧||
જાન લઈને આવ્યા ત્યારે, હર્ષ તણો નહિ પાર;
પશુ તણો પોકાર સુણીને, પાછા વળ્યા તત્કાલ. ॥૨॥
રાજલ ગોખે રાહ નિરખતી, રડતી આંસુ ધાર;
પિયુજી મારા કેમ રિસાયા, મુજ હૈયાના હાર.||૩||
નેમ બન્યા તીર્થંકર સ્વામી, બાવીસમા જિનરાજ;
માયા છોડી મનડું સાધ્યું, નમો નમો શિરતાજ.||૪||
નેમિ નિરંજન નાથ હમારા, અમ નયનોના તારા;
બાળક તુમ ભક્તિને માટે, રડતો આંસુ ધારા. ॥५॥
પરદુઃખભંજન નાથ નિરંજન, જગપાલક કિરતાર;
‘જ્ઞાનવિમલ’ કહે ભવ સિન્ધુથી, મુજને પાર ઉતાર. ॥६॥`,
      hi: `अरज सुणो हो नेम नगीना, राजुलना भरथार;
भज लो भज लो हो जगना प्राणी, भजो सदा किरतार.||१||
जान लईने आव्या त्यारे, हर्ष तणो नहि पार;
पशु तणो पोकार सुणीने, पाछा वळ्या तत्काल. ॥२॥
राजल गोखे राह निरखती, रडती आंसु धार;
पियुजी मारा केम रिसाया, मुज हैयाना हार.||३||
नेम बन्या तीर्थंकर स्वामी, बावीसमा जिनराज;
माया छोडी मनडुं साध्युं, नमो नमो शिरताज.||४||
नेमि निरंजन नाथ हमारा, अम नयनोना तारा;
बाळक तुम भक्तिने माटे, रडतो आंसु धारा. ॥५॥
परदुःखभंजन नाथ निरंजन, जगपालक किरतार;
‘ज्ञानविमल’ कहे भव सिन्धुथी, मुजने पार उतार. ॥६॥`,
      sa: "",
      en: `Araja suno ho nema nageenaa, raajulanaa bharathaara;
Bhaja lo bhaja lo ho jaganaa praanee, bhajo sadaa kirataara.||1||
Jaana laeene aavyaa tyaare, harsha tano nahi paara;
Pashu tano pokaara suneene, paachhaa valyaa tatkaala. ||2||
Raajala gokhe raaha nirakhatee, radatee aansu dhaara;
Piyujee maaraa kema risaayaa, muja haiyaanaa haara.||3||
Nema banyaa teerthankara svaamee, baaveesamaa jinaraaja;
Maayaa chhodee manadun saadhyun, namo namo shirataaja.||4||
Nemi niranjana naatha hamaaraa, ama nayanonaa taaraa;
Baalaka tuma bhaktine maate, radato aansu dhaaraa. ||5||
Paradukhabhanjana naatha niranjana, jagapaalaka kirataara;
‘jnyaanavimala’ kahe bhava sindhuthee, mujane paara utaara. ||6||`,
    },
  },
  {
    id: "arnathaku-sada-mori-vandana",
    type: "bhajan",
    title: {
      gu: "વંદના વંદના વંદના રે, અરનાથકું સદા મોરી વંદના રે..!",
      hi: "वंदना वंदना वंदना रे, अरनाथकुं सदा मोरी वंदना रे..!",
      sa: "",
      en: "Arnathaku Sada Mori Vandana",
    },
    text: {
      gu: `વંદના વંદના વંદના રે, અરનાથકું સદા મોરી વંદના રે..!
વંદના તે પાપનિકંદના રે, જગનાથકું સદા મોરી વંદના રે. ॥੧॥
જગ ઉપકારી ધન જ્યોં વરસે,
વાણી શીતલ ચંદના રે. ॥२॥
રુપે રંભા રાણી શ્રીદેવી,
ભૂપ સુદર્શન નંદના રે.॥3॥
ભાવભગતિશું અહનિશ સેવે,
દુરિત હરે ભવફંદના રે. ॥૪॥
છ ખંડ સાધી ભીતી દ્વિધા કીધી,
દુર્જય શત્રુ નિકંદના રે. ॥૫॥
“ન્યાયસાગર’ પ્રભુ સેવા મેવા,
માગે પરમાનંદના રે.||૬||`,
      hi: `वंदना वंदना वंदना रे, अरनाथकुं सदा मोरी वंदना रे..!
वंदना ते पापनिकंदना रे, जगनाथकुं सदा मोरी वंदना रे. ॥੧॥
जग उपकारी धन ज्यों वरसे,
वाणी शीतल चंदना रे. ॥२॥
रुपे रंभा राणी श्रीदेवी,
भूप सुदर्शन नंदना रे.॥3॥
भावभगतिशुं अहनिश सेवे,
दुरित हरे भवफंदना रे. ॥४॥
छ खंड साधी भीती द्विधा कीधी,
दुर्जय शत्रु निकंदना रे. ॥५॥
“न्यायसागर’ प्रभु सेवा मेवा,
मागे परमानंदना रे.||६||`,
      sa: "",
      en: `Vandanaa vandanaa vandanaa re, aranaathakun sadaa moree vandanaa re..!
Vandanaa te paapanikandanaa re, jaganaathakun sadaa moree vandanaa re. ||1||
Jaga upakaaree dhana jyon varase,
Vaanee sheetala chandanaa re. ||2||
Rupe ranbhaa raanee shreedevee,
Bhoopa sudarshana nandanaa re.||3||
Bhaavabhagatishun ahanisha seve,
Durita hare bhavaphandanaa re. ||4||
Chha khanda saadhee bheetee dvidhaa keedhee,
Durjaya shatru nikandanaa re. ||5||
“nyaayasaagara’ prabhu sevaa mevaa,
Maage paramaanandanaa re.||6||`,
    },
  },
  {
    id: "astha-bhavantar-vahalo-re",
    type: "bhajan",
    title: {
      gu: "અષ્ટ ભવાંતર વાલહો રે…",
      hi: "अष्ट भवांतर वालहो रे…",
      sa: "",
      en: "Astha Bhavantar Vahalo Re",
    },
    text: {
      gu: `અષ્ટ ભવાંતર વાલહો રે…
મુગતિ નારીશું આપણે રે, સગપણ કોઈ ન કામ.
ઘર આવો હો વાલમ ઘર આવો, મારી આશાના વિસરામ;
રથ ફેરો હો સાજન રથ ફેરો, સાજન માહરા મનોરથ સાથ.||૧||
નારી પખે શો નેહલો રે, સાચ કહે જગનાથ;
ઈશ્વર અરધાંગે ધરી રે, તું મુજ ઝાલે ન હાથ.||૨||
પશુજનની કરુણા કરી રે, આણી હૃદય મોઝાર
માણસની કરુણા નહિ રે, એ કુણ ઘર આચાર.||૩||
પ્રેમ કલ્પતરુ છેદિયો રે, ધરીયો યોગ ધતૂર;
ચતુરાઇરો કુણ કહે રે, ગુરુ મિલિઓ જગશૂર.||૪||
માહરું તો એમાં કશું નહિ રે, આપ વિચારો રાજ;
રાજસભામાં  બેસતાં રે, કીસકી વધસે લાજ.||૫||
પ્રેમ કરે જગ જન સહુ રે, નિરવાહે તે ઓર;
પ્રીત કરીને છાંડી દેરે, તેહ શું ચાલે ન જોર.||૬||
જે મનમાં એહવું હતું રે, નિસપતિ કરત ન જાણ;
નિસપતિ કરીને છાંડતા રે, માણસ હુવે નુકસાન.||૭||
દાન સંવત્સરી રે, સહુ લહે વાંછિત પોષ;
સેવક વાંછિત નવિ લહે રે, તે સેવકનો દોષ.||૮||
સખી કહે એ ‘શામળો’ રે, હું કહું લક્ષણ શ્વેત;
ઈણી લક્ષણ સાચી સખી રે, આપ વિચારો હેત.||૯||
રાગીશું રાગ સહુ કરે, વૈરાગીથી શો રાગ;
રાગ વિના કિમ દાખવો રે, મુગતિ સુંદરી માગ. ॥१०॥
એક ગુહ્ય ઘટતું નહિ રે, સઘલોય જાણે લોગ;
અનેકાંતિક ભોગવોરે, બ્રહ્મચારી ગત શોગ.||૧૧||
જિણ જોણે તુજને જોઉં રે, તિણ જોણે જુવો રાજ;
એક વાર મુજને જુવો રે, તો સીઝે મુજ કાજ. ॥१૨॥
મોહ દશા ધરી ભાવતાં રે, ચિત લહે તત્ત્વ વિચાર;
વીતરાગતા આદરી રે, પ્રાણનાથ નિરધાર. ॥१३॥
સેવક પણ તે આદરે રે, તો રહે સેવક મામ;
આશય સાથે ચાલીયેરે, એહ જ રુડું કામ. ॥१४॥
ત્રિવિધ યોગ ધરી આદર્યો રે, નેમનાથ ભરથાર;
ધારણ પોષણ તારણો રે, નવસર મુગતાહાર.||૧૫||
કારણરુપી પ્રભુ ભજ્યો રે, ગણ્યો ન કાજ અકાજ;
કપા કરી પ્રભુ દીજીયે રે, ‘આનંદઘન’ પદ રાજ ॥१६॥`,
      hi: `अष्ट भवांतर वालहो रे…
मुगति नारीशुं आपणे रे, सगपण कोई न काम.
घर आवो हो वालम घर आवो, मारी आशाना विसराम;
रथ फेरो हो साजन रथ फेरो, साजन माहरा मनोरथ साथ.||१||
नारी पखे शो नेहलो रे, साच कहे जगनाथ;
ईश्वर अरधांगे धरी रे, तुं मुज झाले न हाथ.||२||
पशुजननी करुणा करी रे, आणी हृदय मोझार
माणसनी करुणा नहि रे, ए कुण घर आचार.||३||
प्रेम कल्पतरु छेदियो रे, धरीयो योग धतूर;
चतुराइरो कुण कहे रे, गुरु मिलिओ जगशूर.||४||
माहरुं तो एमां कशुं नहि रे, आप विचारो राज;
राजसभामां  बेसतां रे, कीसकी वधसे लाज.||५||
प्रेम करे जग जन सहु रे, निरवाहे ते ओर;
प्रीत करीने छांडी देरे, तेह शुं चाले न जोर.||६||
जे मनमां एहवुं हतुं रे, निसपति करत न जाण;
निसपति करीने छांडता रे, माणस हुवे नुकसान.||७||
दान संवत्सरी रे, सहु लहे वांछित पोष;
सेवक वांछित नवि लहे रे, ते सेवकनो दोष.||८||
सखी कहे ए ‘शामळो’ रे, हुं कहुं लक्षण श्वेत;
ईणी लक्षण साची सखी रे, आप विचारो हेत.||९||
रागीशुं राग सहु करे, वैरागीथी शो राग;
राग विना किम दाखवो रे, मुगति सुंदरी माग. ॥१०॥
एक गुह्य घटतुं नहि रे, सघलोय जाणे लोग;
अनेकांतिक भोगवोरे, ब्रह्मचारी गत शोग.||११||
जिण जोणे तुजने जोउं रे, तिण जोणे जुवो राज;
एक वार मुजने जुवो रे, तो सीझे मुज काज. ॥१२॥
मोह दशा धरी भावतां रे, चित लहे तत्त्व विचार;
वीतरागता आदरी रे, प्राणनाथ निरधार. ॥१३॥
सेवक पण ते आदरे रे, तो रहे सेवक माम;
आशय साथे चालीयेरे, एह ज रुडुं काम. ॥१४॥
त्रिविध योग धरी आदर्यो रे, नेमनाथ भरथार;
धारण पोषण तारणो रे, नवसर मुगताहार.||१५||
कारणरुपी प्रभु भज्यो रे, गण्यो न काज अकाज;
कपा करी प्रभु दीजीये रे, ‘आनंदघन’ पद राज ॥१६॥`,
      sa: "",
      en: `Ashta bhavaantara vaalaho re…
Mugati naareeshun aapane re, sagapana koee na kaama.
Ghara aavo ho vaalama ghara aavo, maaree aashaanaa visaraama;
Ratha phero ho saajana ratha phero, saajana maaharaa manoratha saatha.||1||
Naaree pakhe sho nehalo re, saacha kahe jaganaatha;
Eeshvara aradhaange dharee re, tun muja jhaale na haatha.||2||
Pashujananee karunaa karee re, aanee hrudaya mojhaara
Maanasanee karunaa nahi re, e kuna ghara aachaara.||3||
Prema kalpataru chhediyo re, dhareeyo yoga dhatoora;
Chaturaairo kuna kahe re, guru milio jagashoora.||4||
Maaharun to emaan kashun nahi re, aapa vichaaro raaja;
Raajasabhaamaan besataan re, keesakee vadhase laaja.||5||
Prema kare jaga jana sahu re, niravaahe te ora;
Preeta kareene chhaandee dere, teha shun chaale na jora.||6||
Je manamaan ehavun hatun re, nisapati karata na jaana;
Nisapati kareene chhaandataa re, maanasa huve nukasaana.||7||
Daana sanvatsaree re, sahu lahe vaanchhita posha;
Sevaka vaanchhita navi lahe re, te sevakano dosha.||8||
Sakhee kahe e ‘shaamalo’ re, hun kahun lakshana shveta;
Eenee lakshana saachee sakhee re, aapa vichaaro heta.||9||
Raageeshun raaga sahu kare, vairaageethee sho raaga;
Raaga vinaa kima daakhavo re, mugati sundaree maaga. ||10||
Eka guhya ghatatun nahi re, saghaloya jaane loga;
Anekaantika bhogavore, brahmachaaree gata shoga.||11||
Jina jone tujane joun re, tina jone juvo raaja;
Eka vaara mujane juvo re, to seejhe muja kaaja. ||12||
Moha dashaa dharee bhaavataan re, chita lahe tattva vichaara;
Veetaraagataa aadaree re, praananaatha niradhaara. ||13||
Sevaka pana te aadare re, to rahe sevaka maama;
Aashaya saathe chaaleeyere, eha ja rudun kaama. ||14||
Trividha yoga dharee aadaryo re, nemanaatha bharathaara;
Dhaarana poshana taarano re, navasara mugataahaara.||15||
Kaaranarupee prabhu bhajyo re, ganyo na kaaja akaaja;
Kapaa karee prabhu deejeeye re, ‘aanandaghana’ pada raaja ||16||`,
    },
  },
  {
    id: "badpade-aapn",
    type: "bhajan",
    title: {
      gu: "બાળપણે આપણ સસનેહી, રમતા નવ નવ વેષે",
      hi: "बाळपणे आपण ससनेही, रमता नव नव वेषे",
      sa: "",
      en: "Badpade Aapn",
    },
    text: {
      gu: `બાળપણે આપણ સસનેહી, રમતા નવ નવ વેષે;
આજ તુમે પામ્યા પ્રભુતાઈ, અમે તો સંસાર નિવેશે,
હો પ્રભુજી! ઓલંભડે મત ખીજો, તુમે કાંઈ કરીને રીઝો.||૧||
જો તુમ ધ્યાતાં શિવસુખ લહીએ, તો તુમને કેઈ ધ્યાવે;
પણ ભવસ્થિતિ પરિપાક થયા વિણ, કોઈ ન મુગતિ જાવે.||૨|
સિદ્ધ નિવાસ લહે ભવસિદ્ધિ, તેહમાં શો પા’ડ તુમારો;
તો ઉપગાર તુમારો વહિયે, અભવ્યસિદ્ધને તારો.||૩||
નાણ રયણ પામી એકાંતે, થઈ બેઠા મેવાસી;
તે માંહેલો એક અંશ જો આપો, તે વાતે શાબાશી.||૪||
અક્ષયપદ દેતાં ભવિજનને, સંકીર્ણતા નવિ થાય;
શિવપદ દેવા જો સમરથ છો, તો જશ લેતા શું જાય?||૫||
સેવા ગુણ રંજ્યો ભવિજનને, જો તુમે કરો વડભાગી;
તો તુમે સ્વામી કિમ કહાવો, નિર્મમ ને નિરાગી.||૬||
નાભિનંદન જગવંદન પ્યારો, જગગુરુ જગ હિતકારી;
રુપવિબુધનો “મોહન” પભણે, વૃષભ લંછન બલિહારી. ॥७॥`,
      hi: `बाळपणे आपण ससनेही, रमता नव नव वेषे;
आज तुमे पाम्या प्रभुताई, अमे तो संसार निवेशे,
हो प्रभुजी! ओलंभडे मत खीजो, तुमे कांई करीने रीझो.||१||
जो तुम ध्यातां शिवसुख लहीए, तो तुमने केई ध्यावे;
पण भवस्थिति परिपाक थया विण, कोई न मुगति जावे.||२|
सिद्ध निवास लहे भवसिद्धि, तेहमां शो पा’ड तुमारो;
तो उपगार तुमारो वहिये, अभव्यसिद्धने तारो.||३||
नाण रयण पामी एकांते, थई बेठा मेवासी;
ते मांहेलो एक अंश जो आपो, ते वाते शाबाशी.||४||
अक्षयपद देतां भविजनने, संकीर्णता नवि थाय;
शिवपद देवा जो समरथ छो, तो जश लेता शुं जाय?||५||
सेवा गुण रंज्यो भविजनने, जो तुमे करो वडभागी;
तो तुमे स्वामी किम कहावो, निर्मम ने निरागी.||६||
नाभिनंदन जगवंदन प्यारो, जगगुरु जग हितकारी;
रुपविबुधनो “मोहन” पभणे, वृषभ लंछन बलिहारी. ॥७॥`,
      sa: "",
      en: `Baalapane aapana sasanehee, ramataa nava nava veshe;
Aaja tume paamyaa prabhutaaee, ame to sansaara niveshe,
Ho prabhujee! olanbhade mata kheejo, tume kaanee kareene reejho.||1||
Jo tuma dhyaataan shivasukha laheee, to tumane keee dhyaave;
Pana bhavasthiti paripaaka thayaa vina, koee na mugati jaave.||2|
Siddha nivaasa lahe bhavasiddhi, tehamaan sho paa’da tumaaro;
To upagaara tumaaro vahiye, abhavyasiddhane taaro.||3||
Naana rayana paamee ekaante, thaee bethaa mevaasee;
Te maanhelo eka ansha jo aapo, te vaate shaabaashee.||4||
Akshayapada detaan bhavijanane, sankeernataa navi thaaya;
Shivapada devaa jo samaratha chho, to jasha letaa shun jaaya?||5||
Sevaa guna ranjyo bhavijanane, jo tume karo vadabhaagee;
To tume svaamee kima kahaavo, nirmama ne niraagee.||6||
Naabhinandana jagavandana pyaaro, jagaguru jaga hitakaaree;
Rupavibudhano “mohana” pabhane, vrushabha lanchhana balihaaree. ||7||`,
    },
  },
  {
    id: "baludo",
    type: "bhajan",
    title: {
      gu: "બાલુડો નિઃસ્નેહી થઈ ગયો રે, છોડ્યું વિનીતાનું રાજ (૨)",
      hi: "बालुडो निःस्नेही थई गयो रे, छोड्युं विनीतानुं राज (२)",
      sa: "",
      en: "Baludo",
    },
    text: {
      gu: `બાલુડો નિઃસ્નેહી થઈ ગયો રે, છોડ્યું વિનીતાનું રાજ (૨),
સંયમ રમણી આરાધવા, લેવા મુક્તિનું રાજ (૨);
મેરે દિલ વસી ગયો વાલમો, મેરે મન વસી ગયો વાલમો..॥੧॥
માતાને મેલ્યા એકલા રે, જાયે દિન નવિ રાત (ર);
રત્ન સિંહાસન બેસવા, ચાલે અડવાણે પાય (૨).||૨||
વ્હાલાનું નામ નવિ વીસરે રે, ઝરે આંસુડાની ધાર (૨);
આંખલડી છાયા વળી, ગયા વર્ષ હજાર (૨).||૩||
કેવલ રત્ન કરી રે, પૂરી માતાની આશ (૨);
સમોવસરણ લીલા જોઈને, સાધ્યા આતમ કાજ (૨). ॥४॥
ભગવંતને રે, નમે નિર્મળ કાય (૨);
આદિ જિણંદ આરાધતાં, ‘મહિમા’ શિવસુખ થાય (૨). ॥५॥`,
      hi: `बालुडो निःस्नेही थई गयो रे, छोड्युं विनीतानुं राज (२),
संयम रमणी आराधवा, लेवा मुक्तिनुं राज (२);
मेरे दिल वसी गयो वालमो, मेरे मन वसी गयो वालमो..॥੧॥
माताने मेल्या एकला रे, जाये दिन नवि रात (र);
रत्न सिंहासन बेसवा, चाले अडवाणे पाय (२).||२||
व्हालानुं नाम नवि वीसरे रे, झरे आंसुडानी धार (२);
आंखलडी छाया वळी, गया वर्ष हजार (२).||३||
केवल रत्न करी रे, पूरी मातानी आश (२);
समोवसरण लीला जोईने, साध्या आतम काज (२). ॥४॥
भगवंतने रे, नमे निर्मळ काय (२);
आदि जिणंद आराधतां, ‘महिमा’ शिवसुख थाय (२). ॥५॥`,
      sa: "",
      en: `Baaludo nisnehee thaee gayo re, chhodyun vineetaanun raaja (2),
Sanyama ramanee aaraadhavaa, levaa muktinun raaja (2);
Mere dila vasee gayo vaalamo, mere mana vasee gayo vaalamo..||1||
Maataane melyaa ekalaa re, jaaye dina navi raata (ra);
Ratna sinhaasana besavaa, chaale adavaane paaya (2).||2||
Vhaalaanun naama navi veesare re, jhare aansudaanee dhaara (2);
Aankhaladee chhaayaa valee, gayaa varsha hajaara (2).||3||
Kevala ratna karee re, pooree maataanee aasha (2);
Samovasarana leelaa joeene, saadhyaa aatama kaaja (2). ||4||
Bhagavantane re, name nirmala kaaya (2);
Aadi jinanda aaraadhataan, ‘mahimaa’ shivasukha thaaya (2). ||5||`,
    },
  },
  {
    id: "bavian-vando-bhavsu-re",
    type: "bhajan",
    title: {
      gu: "ભવિયણ વંદો ભાવશું રે, સાહિબ નેમિજિણંદ રે",
      hi: "भवियण वंदो भावशुं रे, साहिब नेमिजिणंद रे",
      sa: "",
      en: "Bavian Vando Bhavsu Re",
    },
    text: {
      gu: `ભવિયણ વંદો ભાવશું રે, સાહિબ નેમિજિણંદ રે;
ભાવશું નિત્ય વંદતા રે, લહીયે પરમાનંદ રે.||૧||
બ્રહ્મચારી ચુડામણિ રે, સાચો એ વડવીર રે;
મદન મતંગજ કેસરી રે, મેરુ મહીધર ધીર રે.||૨||
રૂપ અનંત જીંતનું રે, સોહે સહજ સાતુર રે;
હરખે નયણે રે, પ્રસરે પ્રેમ પંડૂર રે.||૩||
ગુણ અનંતા પ્રભુ તણાં રે, કહેતા ન આવે પાર રે;
નિરુપમ ગુણગણ મણિ તણો રે, માનું એ ભંડાર રે.||૪||
વદન અનોપમ જિન તણું રે, એ મુજ નયન ચકોર રે;
એ નિરખી હરખી ચિત્તમાં રે, ઉમટ્યો આનંદ જોર રે.||૫||
રુઅનંત જિનતણું રે, સોહે સહજ સત્તૂર રે;
અતુલિત બલ અરિહંતજી રે,
ભય ભંજન ભગવંત રે; કામિત પૂરણ સુરતરુરે,
કેવલ કમલાકંત રે.||૬||
રાજીમતિ મન યાદવકુલ શણગાર રે;
નયવિજય પ્રભુ વંદતા રે, નિતુ-નિતુ જય જયકાર રે.||૭||`,
      hi: `भवियण वंदो भावशुं रे, साहिब नेमिजिणंद रे;
भावशुं नित्य वंदता रे, लहीये परमानंद रे.||१||
ब्रह्मचारी चुडामणि रे, साचो ए वडवीर रे;
मदन मतंगज केसरी रे, मेरु महीधर धीर रे.||२||
रूप अनंत जींतनुं रे, सोहे सहज सातुर रे;
हरखे नयणे रे, प्रसरे प्रेम पंडूर रे.||३||
गुण अनंता प्रभु तणां रे, कहेता न आवे पार रे;
निरुपम गुणगण मणि तणो रे, मानुं ए भंडार रे.||४||
वदन अनोपम जिन तणुं रे, ए मुज नयन चकोर रे;
ए निरखी हरखी चित्तमां रे, उमट्यो आनंद जोर रे.||५||
रुअनंत जिनतणुं रे, सोहे सहज सत्तूर रे;
अतुलित बल अरिहंतजी रे,
भय भंजन भगवंत रे; कामित पूरण सुरतरुरे,
केवल कमलाकंत रे.||६||
राजीमति मन यादवकुल शणगार रे;
नयविजय प्रभु वंदता रे, नितु-नितु जय जयकार रे.||७||`,
      sa: "",
      en: `Bhaviyana vando bhaavashun re, saahiba nemijinanda re;
Bhaavashun nitya vandataa re, laheeye paramaananda re.||1||
Brahmachaaree chudaamani re, saacho e vadaveera re;
Madana matangaja kesaree re, meru maheedhara dheera re.||2||
Roopa ananta jeentanun re, sohe sahaja saatura re;
Harakhe nayane re, prasare prema pandoora re.||3||
Guna anantaa prabhu tanaan re, kahetaa na aave paara re;
Nirupama gunagana mani tano re, maanun e bhandaara re.||4||
Vadana anopama jina tanun re, e muja nayana chakora re;
E nirakhee harakhee chittamaan re, umatyo aananda jora re.||5||
Ruananta jinatanun re, sohe sahaja sattoora re;
Atulita bala arihantajee re,
Bhaya bhanjana bhagavanta re; kaamita poorana suratarure,
Kevala kamalaakanta re.||6||
Raajeemati mana yaadavakula shanagaara re;
Nayavijaya prabhu vandataa re, nitu-nitu jaya jayakaara re.||7||`,
    },
  },
  {
    id: "ber-ber-nahi-aave-avasar",
    type: "bhajan",
    title: {
      gu: "બેર બેર નહિ આવે, અવસર બેર બેર નહિ આવે.",
      hi: "बेर बेर नहि आवे, अवसर बेर बेर नहि आवे.",
      sa: "",
      en: "Ber Ber Nahi Aave Avasar",
    },
    text: {
      gu: `બેર બેર નહિ આવે, અવસર બેર બેર નહિ આવે.
જયું જાણે ત્યું કરલે ભલાઈ, જનમ જનમ સુખ પાવે. અવ૦ ।।૧ ॥
તન ધન જોબન સબહી જૂઠો, પ્રાણ પલક મેં જાવે .અવ૦ ||૨||
તન  છૂટે ધન કૌન કામ કો, કાહેકું કૃપણ કહાવે. अव०॥३॥
જાકે દિલ મેં સાચ બસત હૈ, તાકું જૂઠ ન ભાવે.અવ૦ ।।૪।।
“આનંદઘન’ પ્રભુ ચલત પંથ મેં, સમર સમર ગુણ ગાવે. અવ૦।।૫।।`,
      hi: `बेर बेर नहि आवे, अवसर बेर बेर नहि आवे.
जयुं जाणे त्युं करले भलाई, जनम जनम सुख पावे. अव० ।।१ ॥
तन धन जोबन सबही जूठो, प्राण पलक में जावे .अव० ||२||
तन  छूटे धन कौन काम को, काहेकुं कृपण कहावे. अव०॥३॥
जाके दिल में साच बसत है, ताकुं जूठ न भावे.अव० ।।४।।
“आनंदघन’ प्रभु चलत पंथ में, समर समर गुण गावे. अव०।।५।।`,
      sa: "",
      en: `Bera bera nahi aave, avasara bera bera nahi aave.
Jayun jaane tyun karale bhalaaee, janama janama sukha paave. ava0 ||1 ||
Tana dhana jobana sabahee jootho, praana palaka men jaave .ava0 ||2||
Tana chhoote dhana kauna kaama ko, kaahekun krupana kahaave. अव0||3||
Jaake dila men saacha basata hai, taakun jootha na bhaave.ava0 ||4||
“aanandaghana’ prabhu chalata pantha men, samara samara guna gaave. ava0||5||`,
    },
  },
  {
    id: "bhakti-sada-sukhdai",
    type: "bhajan",
    title: {
      gu: "ભક્તિ સદા સુખદાઈ… પ્રભુજી તોરી… ભક્તિ સદા સુખદાઈ",
      hi: "भक्ति सदा सुखदाई… प्रभुजी तोरी… भक्ति सदा सुखदाई",
      sa: "",
      en: "Bhakti Sada Sukhdai",
    },
    text: {
      gu: `ભક્તિ સદા સુખદાઈ… પ્રભુજી તોરી… ભક્તિ સદા સુખદાઈ;
અવિધિ આશાતના દૂર કરીને, જે કરે મન નિરમાઈ.||1||
ઘર આંગણ પર સ્વર્ગ તણાં સુખ, નરસુખ બહુત સવાઈ;
સૌભાગ્યાદિક સહજ સુભગતા, સહચરી પરે ચતુરાઈ.
દૂસ્તર ભવજલનિ ધિ સુખે તરવા, દૂરે અરતિ પલાઈ;||2||
કરી ભવોભવ ચાહું, એહિ જ સુકૃત કમાઈ. ।।૩।।
‘જ્ઞાનવિમલ’ગુણ પ્રભુતા પામી, શિવસુંદરી મિલી આઈ;
સમકિતગુણ  જિન ગુણપદ સંભવ, એ ગુણ કરણ વડાઈ. ॥४॥`,
      hi: `भक्ति सदा सुखदाई… प्रभुजी तोरी… भक्ति सदा सुखदाई;
अविधि आशातना दूर करीने, जे करे मन निरमाई.||1||
घर आंगण पर स्वर्ग तणां सुख, नरसुख बहुत सवाई;
सौभाग्यादिक सहज सुभगता, सहचरी परे चतुराई.
दूस्तर भवजलनि धि सुखे तरवा, दूरे अरति पलाई;||2||
करी भवोभव चाहुं, एहि ज सुकृत कमाई. ।।३।।
‘ज्ञानविमल’गुण प्रभुता पामी, शिवसुंदरी मिली आई;
समकितगुण  जिन गुणपद संभव, ए गुण करण वडाई. ॥४॥`,
      sa: "",
      en: `Bhakti sadaa sukhadaaee… prabhujee toree… bhakti sadaa sukhadaaee;
Avidhi aashaatanaa doora kareene, je kare mana niramaaee.||1||
Ghara aangana para svarga tanaan sukha, narasukha bahuta savaaee;
Saubhaagyaadika sahaja subhagataa, sahacharee pare chaturaaee.
Doostara bhavajalani dhi sukhe taravaa, doore arati palaaee;||2||
Karee bhavobhava chaahun, ehi ja sukruta kamaaee. ||3||
‘jnyaanavimala’guna prabhutaa paamee, shivasundaree milee aaee;
Samakitaguna jina gunapada sanbhava, e guna karana vadaaee. ||4||`,
    },
  },
  {
    id: "bhaktvastal-prabhu-sambhade-re",
    type: "bhajan",
    title: {
      gu: "ભક્તવત્સલ પ્રભુ સાંભળો રે, ઓલંભે અરદાસ, હો જિનરાજ",
      hi: "भक्तवत्सल प्रभु सांभळो रे, ओलंभे अरदास, हो जिनराज",
      sa: "",
      en: "Bhaktvastal Prabhu Sambhade Re",
    },
    text: {
      gu: `ભક્તવત્સલ પ્રભુ સાંભળો રે, ઓલંભે અરદાસ, હો જિનરાજ;
છાંડતા કેમ છૂટશો,
અરે કાંઈ કરશો નહીં નિરાશ, હો જિનરાજ. ।।૧ ।।
તુમ સરીખા સાહેબ તણી રે, જો સેવા નિષ્ફળ જાય, હો જિન૦;
લાજ કહો પ્રભુ કેહની રે, હવે સેવકનું શું થાય, હો મહા૦ ||૩||
ગુણ દેખાડીને હેળવ્યો રે, તે કેમ છેડો છોડે, હો જિન૦;
જિહાંજલધર તિહાંબપૈયારે, પિયુપિયુકરીમુખમાંડે, હોમહા૦ ।।૩।।
લાખ ચોરાસી હું ભમ્યો રે, ભમિયો કાલ અનાદિ અનંત, હો જિન૦;
મૂર્તિ દીઠી પ્રભુતાહરી રે, ભાંગી છે ભવોભવ ભ્રાંત, હો મહા૦ ।।૪ ।।
અવગુણ ગણતાં માહરા રે, નહિ આવે પ્રભુ પાર, હો જિન૦;
પણ જીવ પ્રવહણની પેરે રે, તુમે છો તારણહાર, હો મહા૦ ||૫||
જો રે પોતાનો દાખવો રે, તો હવે કરો ન વિચાર, હો જિન૦;
સો વાતે એક વાતડી રે, ભવોભવ પ્રીત નિવાર, હો મહા૦ ॥६॥
તુમ સરીખા કોઈ દાખવો રે, કિજીએ તેહની સેવ, હો જિન૦;
“આનંદઘન’ પ્રભુઋષભજી રે, મરુદેવી નંદન દેવ, હો મહા૦ ।।૭ ।।`,
      hi: `भक्तवत्सल प्रभु सांभळो रे, ओलंभे अरदास, हो जिनराज;
छांडता केम छूटशो,
अरे कांई करशो नहीं निराश, हो जिनराज. ।।१ ।।
तुम सरीखा साहेब तणी रे, जो सेवा निष्फळ जाय, हो जिन०;
लाज कहो प्रभु केहनी रे, हवे सेवकनुं शुं थाय, हो महा० ||३||
गुण देखाडीने हेळव्यो रे, ते केम छेडो छोडे, हो जिन०;
जिहांजलधर तिहांबपैयारे, पियुपियुकरीमुखमांडे, होमहा० ।।३।।
लाख चोरासी हुं भम्यो रे, भमियो काल अनादि अनंत, हो जिन०;
मूर्ति दीठी प्रभुताहरी रे, भांगी छे भवोभव भ्रांत, हो महा० ।।४ ।।
अवगुण गणतां माहरा रे, नहि आवे प्रभु पार, हो जिन०;
पण जीव प्रवहणनी पेरे रे, तुमे छो तारणहार, हो महा० ||५||
जो रे पोतानो दाखवो रे, तो हवे करो न विचार, हो जिन०;
सो वाते एक वातडी रे, भवोभव प्रीत निवार, हो महा० ॥६॥
तुम सरीखा कोई दाखवो रे, किजीए तेहनी सेव, हो जिन०;
“आनंदघन’ प्रभुऋषभजी रे, मरुदेवी नंदन देव, हो महा० ।।७ ।।`,
      sa: "",
      en: `Bhaktavatsala prabhu saanbhalo re, olanbhe aradaasa, ho jinaraaja;
Chhaandataa kema chhootasho,
Are kaanee karasho naheen niraasha, ho jinaraaja. ||1 ||
Tuma sareekhaa saaheba tanee re, jo sevaa nishphala jaaya, ho jina0;
Laaja kaho prabhu kehanee re, have sevakanun shun thaaya, ho mahaa0 ||3||
Guna dekhaadeene helavyo re, te kema chhedo chhode, ho jina0;
Jihaanjaladhara tihaanbapaiyaare, piyupiyukareemukhamaande, homahaa0 ||3||
Laakha choraasee hun bhamyo re, bhamiyo kaala anaadi ananta, ho jina0;
Moorti deethee prabhutaaharee re, bhaangee chhe bhavobhava bhraanta, ho mahaa0 ||4 ||
Avaguna ganataan maaharaa re, nahi aave prabhu paara, ho jina0;
Pana jeeva pravahananee pere re, tume chho taaranahaara, ho mahaa0 ||5||
Jo re potaano daakhavo re, to have karo na vichaara, ho jina0;
So vaate eka vaatadee re, bhavobhava preeta nivaara, ho mahaa0 ||6||
Tuma sareekhaa koee daakhavo re, kijeee tehanee seva, ho jina0;
“aanandaghana’ prabhurushabhajee re, marudevee nandana deva, ho mahaa0 ||7 ||`,
    },
  },
  {
    id: "bhiladipur-radiyamana",
    type: "bhajan",
    title: {
      gu: "ભાલડાપુર રખાવામણા ર લાલ",
      hi: "भालडापुर रखावामणा र लाल",
      sa: "",
      en: "Bhiladipur Radiyamana",
    },
    text: {
      gu: `ભાલડાપુર રખાવામણા ર લાલ,
તીરથ અતિ મનોહાર રે સોભાગીલાલ;
યાત્રાળુ આવે ઘણા રે લાલ
, ઉતરવા ભવપાર રે સોભાગીલાલ;
ભીલડીપુર રળિયામણું રે લાલ.||૧||
વામાદેવી નંદનો રે લાલ,
અશ્વસેન કુલ ભાણ રે સોભાગીલાલ;
સ્વર્ગ–મૃત્યુ પાતાલમાં રે લાલ,
જયવંત જસ આણરે સોભાગીલાલ.||૨||
શંખેશ્વર પંચાસરો રે લાલ,
ફલવર્ધિ પ્રભુ પાસ રે સોભાગીલાલ;
વરકાણો જીરાઉલો રે લાલ,
નાકોડા જગનાથ રે સોભાગીલાલ.||૩||
અજાહરા અમીઝરા રે લાલ,
શેરીસા ભગવાનરે સોભાગીલાલ;
સહસ્ત્રફણાને શ્યામળા રે લાલ,
શ્યામ રતન સમવાન રે સોભાગીલાલ.||૪||
જગવલ્લભ ચિંતામણિ રે લાલ,
અંતરીક્ષ પ્રભુ નામ રે સોભાગીલાલ;
ત્રિકરણયોગે સેવતા રે લાલ,
પૂરે ઈચ્છિત કામ રે સોભાગીલાલ.||૫||
કોકા ને ભાભા પ્રભુ રે લાલ,
સુરજમંડણ દેવરે સોભાગીલાલ;
ગોડીયા જિનવર તણી રે લાલ,
દેવ કરે નિત્ય સેવ રે સોભાગીલાલ.||૬||
પ્રહ્લાદન સ્તંભના પ્રભુ રે લાલ,
નવખંડ જિનરાય રે સોભાગીલાલ;
ભીલડીયા જિન નામથી રે લાલ,
જય જયકાર ગવાય રે સોભાગીલાલ.||૭||
એમ અનેક અભિધા ધરે રે લાલ,
વામાનંદન દેવ રે સોભાગીલાલ;
સુગતિને મુક્તિ દીયે રે લાલ,
પાસ પ્રભુની સેવરે સોભાગીલાલ.||૮||`,
      hi: `भालडापुर रखावामणा र लाल,
तीरथ अति मनोहार रे सोभागीलाल;
यात्राळु आवे घणा रे लाल
, उतरवा भवपार रे सोभागीलाल;
भीलडीपुर रळियामणुं रे लाल.||१||
वामादेवी नंदनो रे लाल,
अश्वसेन कुल भाण रे सोभागीलाल;
स्वर्ग–मृत्यु पातालमां रे लाल,
जयवंत जस आणरे सोभागीलाल.||२||
शंखेश्वर पंचासरो रे लाल,
फलवर्धि प्रभु पास रे सोभागीलाल;
वरकाणो जीराउलो रे लाल,
नाकोडा जगनाथ रे सोभागीलाल.||३||
अजाहरा अमीझरा रे लाल,
शेरीसा भगवानरे सोभागीलाल;
सहस्त्रफणाने श्यामळा रे लाल,
श्याम रतन समवान रे सोभागीलाल.||४||
जगवल्लभ चिंतामणि रे लाल,
अंतरीक्ष प्रभु नाम रे सोभागीलाल;
त्रिकरणयोगे सेवता रे लाल,
पूरे ईच्छित काम रे सोभागीलाल.||५||
कोका ने भाभा प्रभु रे लाल,
सुरजमंडण देवरे सोभागीलाल;
गोडीया जिनवर तणी रे लाल,
देव करे नित्य सेव रे सोभागीलाल.||६||
प्रह्लादन स्तंभना प्रभु रे लाल,
नवखंड जिनराय रे सोभागीलाल;
भीलडीया जिन नामथी रे लाल,
जय जयकार गवाय रे सोभागीलाल.||७||
एम अनेक अभिधा धरे रे लाल,
वामानंदन देव रे सोभागीलाल;
सुगतिने मुक्ति दीये रे लाल,
पास प्रभुनी सेवरे सोभागीलाल.||८||`,
      sa: "",
      en: `Bhaaladaapura rakhaavaamanaa ra laala,
Teeratha ati manohaara re sobhaageelaala;
Yaatraalu aave ghanaa re laala
, utaravaa bhavapaara re sobhaageelaala;
Bheeladeepura raliyaamanun re laala.||1||
Vaamaadevee nandano re laala,
Ashvasena kula bhaana re sobhaageelaala;
Svarga–mrutyu paataalamaan re laala,
Jayavanta jasa aanare sobhaageelaala.||2||
Shankheshvara panchaasaro re laala,
Phalavardhi prabhu paasa re sobhaageelaala;
Varakaano jeeraaulo re laala,
Naakodaa jaganaatha re sobhaageelaala.||3||
Ajaaharaa ameejharaa re laala,
Shereesaa bhagavaanare sobhaageelaala;
Sahastraphanaane shyaamalaa re laala,
Shyaama ratana samavaana re sobhaageelaala.||4||
Jagavallabha chintaamani re laala,
Antareeksha prabhu naama re sobhaageelaala;
Trikaranayoge sevataa re laala,
Poore eechchhita kaama re sobhaageelaala.||5||
Kokaa ne bhaabhaa prabhu re laala,
Surajamandana devare sobhaageelaala;
Godeeyaa jinavara tanee re laala,
Deva kare nitya seva re sobhaageelaala.||6||
Prahlaadana stanbhanaa prabhu re laala,
Navakhanda jinaraaya re sobhaageelaala;
Bheeladeeyaa jina naamathee re laala,
Jaya jayakaara gavaaya re sobhaageelaala.||7||
Ema aneka abhidhaa dhare re laala,
Vaamaanandana deva re sobhaageelaala;
Sugatine mukti deeye re laala,
Paasa prabhunee sevare sobhaageelaala.||8||`,
    },
  },
  {
    id: "bhavajal-par-utar",
    type: "bhajan",
    title: {
      gu: "ભવજલ પાર ઉતાર (૨), શ્રી શંખેશ્વર પાર્શ્વ જિનેશ્વર",
      hi: "भवजल पार उतार (२), श्री शंखेश्वर पार्श्व जिनेश्वर",
      sa: "",
      en: "Bhavajal Par Utar",
    },
    text: {
      gu: `ભવજલ પાર ઉતાર (૨), શ્રી શંખેશ્વર પાર્શ્વ જિનેશ્વર;
મારો તું એક આધાર… મારો તું એક આધાર…||૧||
કાલ અનંતો ભવમાં ભમતાં, ક્યાંય ન આવ્યો આરો;
ધન્ય ઘડી તે મારી આજે, દીઠો તુમ દેદાર, (૩)||૨||
તું વીતરાગી, તું અવિનાશી, તું નિર્બંધી દેવ;
હું રાગી છું પાપી જીવડો, ભમતો ભવ અપાર, (૩)||૩||
આ દુનિયામાં તારા જેવો, કોઈ ન તારણહાર;
વામાનંદન ચંદનની પરે, શીતલ જેની છાય, (૩)||૪||
ભવોભવ તુમ ચરણ સેવા, માંગુ છું દીનદયાલા;
“રંગવિજય” કહે પ્રેમશું રે, વિનંતી એ અવધાર, (૩) શ્રી શં૦।।૫।।`,
      hi: `भवजल पार उतार (२), श्री शंखेश्वर पार्श्व जिनेश्वर;
मारो तुं एक आधार… मारो तुं एक आधार…||१||
काल अनंतो भवमां भमतां, क्यांय न आव्यो आरो;
धन्य घडी ते मारी आजे, दीठो तुम देदार, (३)||२||
तुं वीतरागी, तुं अविनाशी, तुं निर्बंधी देव;
हुं रागी छुं पापी जीवडो, भमतो भव अपार, (३)||३||
आ दुनियामां तारा जेवो, कोई न तारणहार;
वामानंदन चंदननी परे, शीतल जेनी छाय, (३)||४||
भवोभव तुम चरण सेवा, मांगु छुं दीनदयाला;
“रंगविजय” कहे प्रेमशुं रे, विनंती ए अवधार, (३) श्री शं०।।५।।`,
      sa: "",
      en: `Bhavajala paara utaara (2), shree shankheshvara paarshva jineshvara;
Maaro tun eka aadhaara… maaro tun eka aadhaara…||1||
Kaala ananto bhavamaan bhamataan, kyaanya na aavyo aaro;
Dhanya ghadee te maaree aaje, deetho tuma dedaara, (3)||2||
Tun veetaraagee, tun avinaashee, tun nirbandhee deva;
Hun raagee chhun paapee jeevado, bhamato bhava apaara, (3)||3||
Aa duniyaamaan taaraa jevo, koee na taaranahaara;
Vaamaanandana chandananee pare, sheetala jenee chhaaya, (3)||4||
Bhavobhava tuma charana sevaa, maangu chhun deenadayaalaa;
“rangavijaya” kahe premashun re, vinantee e avadhaara, (3) shree shan0||5||`,
    },
  },
  {
    id: "bhetiye-bhetiye-bhetiye-re",
    type: "bhajan",
    title: {
      gu: "ભેટીએ ભેટીએ ભેટીએ રે, મનમોહન જિનવર ભેટીએ રે",
      hi: "भेटीए भेटीए भेटीए रे, मनमोहन जिनवर भेटीए रे",
      sa: "",
      en: "Bhetiye Bhetiye Bhetiye Re",
    },
    text: {
      gu: `ભેટીએ ભેટીએ ભેટીએ રે, મનમોહન જિનવર ભેટીએ રે,
મેટીએ મેટીએ મેટીએ રે, ભેટતા ભવદુઃખ મેટીએ રે.મન૦ ।। ૧ ।।
શ્રી શંખેશ્વર પાર્શ્વ જિનેશ્વર,
પૂજી પાતિક મેટીએ રે.મન૦ || ૨ ||
જાદવની જરા જાસ ન્હવણથી,
નાઠી એક ચપેટીએ રે.મન૦ ||૩||
આશ ધરીને હું પણ આવ્યો,
નિજ કર પીઠ થપેટીએ રે.મન૦ ।। ૪ ।।
ત્રણ રતન આપો જ્યું રાખું,
નિજ આતમની પેટીએ રે.મન૦ ||૫ ।।
સાહિબ સુરતરુ સરીખો પામી,
ઔર કુણ આગે લેટીએરે. મન૦।।૬।।
“પદ્મવિજય’ કહે તુમરે ચરણસે,
ક્ષણ એક ન રહું છેટીએરે. મન૦ ।।૭।।`,
      hi: `भेटीए भेटीए भेटीए रे, मनमोहन जिनवर भेटीए रे,
मेटीए मेटीए मेटीए रे, भेटता भवदुःख मेटीए रे.मन० ।। १ ।।
श्री शंखेश्वर पार्श्व जिनेश्वर,
पूजी पातिक मेटीए रे.मन० || २ ||
जादवनी जरा जास न्हवणथी,
नाठी एक चपेटीए रे.मन० ||३||
आश धरीने हुं पण आव्यो,
निज कर पीठ थपेटीए रे.मन० ।। ४ ।।
त्रण रतन आपो ज्युं राखुं,
निज आतमनी पेटीए रे.मन० ||५ ।।
साहिब सुरतरु सरीखो पामी,
और कुण आगे लेटीएरे. मन०।।६।।
“पद्मविजय’ कहे तुमरे चरणसे,
क्षण एक न रहुं छेटीएरे. मन० ।।७।।`,
      sa: "",
      en: `Bheteee bheteee bheteee re, manamohana jinavara bheteee re,
Meteee meteee meteee re, bhetataa bhavadukha meteee re.mana0 || 1 ||
Shree shankheshvara paarshva jineshvara,
Poojee paatika meteee re.mana0 || 2 ||
Jaadavanee jaraa jaasa nhavanathee,
Naathee eka chapeteee re.mana0 ||3||
Aasha dhareene hun pana aavyo,
Nija kara peetha thapeteee re.mana0 || 4 ||
Trana ratana aapo jyun raakhun,
Nija aatamanee peteee re.mana0 ||5 ||
Saahiba surataru sareekho paamee,
Aura kuna aage leteeere. mana0||6||
“padmavijaya’ kahe tumare charanase,
Kshana eka na rahun chheteeere. mana0 ||7||`,
    },
  },
  {
    id: "bhildipur-radiyamanu-re",
    type: "bhajan",
    title: {
      gu: "ભીલડીપુર રળીયામણું રે, રુડો ડીસાવળ દેશ",
      hi: "भीलडीपुर रळीयामणुं रे, रुडो डीसावळ देश",
      sa: "",
      en: "Bhildipur Radiyamanu Re",
    },
    text: {
      gu: `ભીલડીપુર રળીયામણું રે, રુડો ડીસાવળ દેશ;
શ્રાવકવૃંદ સુખીયા ઘણા રે, નહિ દુઃખનો લવલેશ.
સૌભાગી જીવ વંદો શ્રી જિનરાય વાંદતા નવનિધિ થાય;
સૌભાગી જીવવંદો શ્રી જિનરાય
પૂજતા પાપ પલાય. સૌભાગી૦।।૧ ।।
પંચમ કાલે જાગતા રે, ભીલડીયા પ્રભુ પાસ;
દર્શન કરે જે ભાવથી રે,વિઘ્ન કરે તસ નાશ. સૌભાગી. ।। ૨||
ભીલડી મંડન પાસનું રે, મંદિર અતિ મનોહાર;
જગતી સાવ નજીકમાં રે, વરતાણો જયજયકાર. સૌભાગી૦।।૩।।
પશ્ચિમ દિશામાંહી ભલું રે, રોડ નજીકનું સ્થાન;
ભૂમિથી પ્રકટ થયા રે, ચિંતામણી ભગવાન. સૌભાગી. ।।૪।।
હજારને તેરમાં રે (૨૦૧૩), અષાઢ રુડો માસ;
ત્રીજ અંધારી શોભતી રે, વાર ભલો શુદ્ધ ભાસ. સૌભાગી૦।।૫।।
પ્રતિમા ખુબ રળીયામણી રે, ચિંતા ચૂર કપાય,
દર્શન કરવા ઉપજે રે, ચિત્તમાં ખુબ ઉલ્લાસ. સૌભાગી. ।।૬।।
મૂર્તિ મન આકર્ષણી રે, દીઠે દુરિત પલાય;
પૂજન ચિંતન ધ્યાનથી રે, મનવાંછિત ફલ થાય. સૌભાગી૦।।૭।।
વિજયભદ્રસૂરીશ્વરુ રે, સુંદર ગુરુ સુપસાય;
“ચરણવિજય’ ભાવેસ્તવ્યારે, પાસચિંતામણી પાય. સૌભાગી૦ ।।૮।।`,
      hi: `भीलडीपुर रळीयामणुं रे, रुडो डीसावळ देश;
श्रावकवृंद सुखीया घणा रे, नहि दुःखनो लवलेश.
सौभागी जीव वंदो श्री जिनराय वांदता नवनिधि थाय;
सौभागी जीववंदो श्री जिनराय
पूजता पाप पलाय. सौभागी०।।१ ।।
पंचम काले जागता रे, भीलडीया प्रभु पास;
दर्शन करे जे भावथी रे,विघ्न करे तस नाश. सौभागी. ।। २||
भीलडी मंडन पासनुं रे, मंदिर अति मनोहार;
जगती साव नजीकमां रे, वरताणो जयजयकार. सौभागी०।।३।।
पश्चिम दिशामांही भलुं रे, रोड नजीकनुं स्थान;
भूमिथी प्रकट थया रे, चिंतामणी भगवान. सौभागी. ।।४।।
हजारने तेरमां रे (२०१३), अषाढ रुडो मास;
त्रीज अंधारी शोभती रे, वार भलो शुद्ध भास. सौभागी०।।५।।
प्रतिमा खुब रळीयामणी रे, चिंता चूर कपाय,
दर्शन करवा उपजे रे, चित्तमां खुब उल्लास. सौभागी. ।।६।।
मूर्ति मन आकर्षणी रे, दीठे दुरित पलाय;
पूजन चिंतन ध्यानथी रे, मनवांछित फल थाय. सौभागी०।।७।।
विजयभद्रसूरीश्वरु रे, सुंदर गुरु सुपसाय;
“चरणविजय’ भावेस्तव्यारे, पासचिंतामणी पाय. सौभागी० ।।८।।`,
      sa: "",
      en: `Bheeladeepura raleeyaamanun re, rudo deesaavala desha;
Shraavakavrunda sukheeyaa ghanaa re, nahi dukhano lavalesha.
Saubhaagee jeeva vando shree jinaraaya vaandataa navanidhi thaaya;
Saubhaagee jeevavando shree jinaraaya
Poojataa paapa palaaya. saubhaagee0||1 ||
Panchama kaale jaagataa re, bheeladeeyaa prabhu paasa;
Darshana kare je bhaavathee re,vighna kare tasa naasha. saubhaagee. || 2||
Bheeladee mandana paasanun re, mandira ati manohaara;
Jagatee saava najeekamaan re, varataano jayajayakaara. saubhaagee0||3||
Pashchima dishaamaanhee bhalun re, roda najeekanun sthaana;
Bhoomithee prakata thayaa re, chintaamanee bhagavaana. saubhaagee. ||4||
Hajaarane teramaan re (2013), ashaadha rudo maasa;
Treeja andhaaree shobhatee re, vaara bhalo shuddha bhaasa. saubhaagee0||5||
Pratimaa khuba raleeyaamanee re, chintaa choora kapaaya,
Darshana karavaa upaje re, chittamaan khuba ullaasa. saubhaagee. ||6||
Moorti mana aakarshanee re, deethe durita palaaya;
Poojana chintana dhyaanathee re, manavaanchhita phala thaaya. saubhaagee0||7||
Vijayabhadrasooreeshvaru re, sundara guru supasaaya;
“charanavijaya’ bhaavestavyaare, paasachintaamanee paaya. saubhaagee0 ||8||`,
    },
  },
  {
    id: "chandapraph-chi-ma-varsya",
    type: "bhajan",
    title: {
      gu: "ચંદ્રપ્રભ ચિત્તમાં વસ્યા, જીવન પ્રાણ આધાર રે",
      hi: "चंद्रप्रभ चित्तमां वस्या, जीवन प्राण आधार रे",
      sa: "",
      en: "Chandapraph Chi Ma Varsya",
    },
    text: {
      gu: `ચંદ્રપ્રભ ચિત્તમાં વસ્યા, જીવન પ્રાણ આધાર રે;
તુમ વિણ કો દીસે નહીં, ભવિજનને હિતકાર રે.||૧||
નિશદિન સૂતાં જાગતાં, ચિત્ત ધરું તાહરું ધ્યાન રે;
રાતદિવસ તલસે બહુ, રસના તુમ ગુણગાન રે..॥२॥
માહરે તુમ સમ કો નહિ, મુજ સરીખા તુજ લાખ રે;
તોહિ નિજ સેવક ગણી, કાંઈક કરુણા દાખ રે. ॥3॥
અંતરજામી તું ખરો, ન ગમે બીજું નામ રે;
સેવક અવસરે આવીયો, રાખો એહની લાજ રે.||૪||
કરુણાવંત કૃપા કરીને, આપો નિજપદ વાસ રે;
“ઉદયરત્ન” એમ ઉચ્ચરે, દીજે તત્ત્વ સુવાસ રે.||૫||`,
      hi: `चंद्रप्रभ चित्तमां वस्या, जीवन प्राण आधार रे;
तुम विण को दीसे नहीं, भविजनने हितकार रे.||१||
निशदिन सूतां जागतां, चित्त धरुं ताहरुं ध्यान रे;
रातदिवस तलसे बहु, रसना तुम गुणगान रे..॥२॥
माहरे तुम सम को नहि, मुज सरीखा तुज लाख रे;
तोहि निज सेवक गणी, कांईक करुणा दाख रे. ॥3॥
अंतरजामी तुं खरो, न गमे बीजुं नाम रे;
सेवक अवसरे आवीयो, राखो एहनी लाज रे.||४||
करुणावंत कृपा करीने, आपो निजपद वास रे;
“उदयरत्न” एम उच्चरे, दीजे तत्त्व सुवास रे.||५||`,
      sa: "",
      en: `Chandraprabha chittamaan vasyaa, jeevana praana aadhaara re;
Tuma vina ko deese naheen, bhavijanane hitakaara re.||1||
Nishadina sootaan jaagataan, chitta dharun taaharun dhyaana re;
Raatadivasa talase bahu, rasanaa tuma gunagaana re..||2||
Maahare tuma sama ko nahi, muja sareekhaa tuja laakha re;
Tohi nija sevaka ganee, kaaneeka karunaa daakha re. ||3||
Antarajaamee tun kharo, na game beejun naama re;
Sevaka avasare aaveeyo, raakho ehanee laaja re.||4||
Karunaavanta krupaa kareene, aapo nijapada vaasa re;
“udayaratna” ema uchchare, deeje tattva suvaasa re.||5||`,
    },
  },
  {
    id: "chandraprabhni-chakri-nitya-kariye-re",
    type: "bhajan",
    title: {
      gu: "ચંદ્રપ્રભની ચાકરી નિત્ય કરીએ રે, નિત્ય કરીએ રે નિત્ય કરીએ",
      hi: "चंद्रप्रभनी चाकरी नित्य करीए रे, नित्य करीए रे नित्य करीए",
      sa: "",
      en: "Chandraprabhni Chakri Nitya Kariye Re",
    },
    text: {
      gu: `ચંદ્રપ્રભની ચાકરી નિત્ય કરીએ રે, નિત્ય કરીએ રે નિત્ય કરીએ;
કરીએ તો ભવજલ તરીએ, હાંરે ચઢતે પરિણામ. ચં૦ ।।૧ ।।
લક્ષ્મણા માતા જનમિયા જિનરાય, જિન ઊડુપતિ લંછન પાય;
એ તો ચંદ્રપુરીના રાયા, હાં રે નિત્ય લીજે નામ. ચં૦ગા૨.||૨||
મહસેન પિતા જેહના પ્રભુ બળીયા, મને જિનજી એકાંતે મળીયા;
મારા મનના મનોરથ ફળીયા, હાંરે દીઠે દુઃખ જાય. यं०॥३॥
દોઢસો ધનુષની દેહડી જિન દીપે, તેજે કરી દિનકર ઝીપે;
સુર ઊભા સમીપે, હાં રે નિત્ય કરતાં સેવ. २०॥४॥
દશ લાખ પૂર્વનું આઉખું જિન પાળી, નિજ આતમને અજવાળી;
દુષ્ટ કર્મના મર્મને ટાળી, હાં રે લહ્યું કેવલજ્ઞાન. ચં૦ ||૫||
સમ્મેતશિખર ગિરિ આવીયા પ્રભુ રંગે, મુનિ કોટિ સહસ પ્રસંગે;
પાળી અણસણ ઊલટ અંગે, હાં રે પામ્યા પરમાનંદ. ચં૦।|૬।।
શ્રી જિન ઉત્તમ રુપને જે ધ્યાવે, તે કીર્તિ કમલા પાવે;
“મોહનવિજય’ ગુણ ગાવે, હાંરે આપો અવિચલ રાજ. ચં૦।।૭।।`,
      hi: `चंद्रप्रभनी चाकरी नित्य करीए रे, नित्य करीए रे नित्य करीए;
करीए तो भवजल तरीए, हांरे चढते परिणाम. चं० ।।१ ।।
लक्ष्मणा माता जनमिया जिनराय, जिन ऊडुपति लंछन पाय;
ए तो चंद्रपुरीना राया, हां रे नित्य लीजे नाम. चं०गा२.||२||
महसेन पिता जेहना प्रभु बळीया, मने जिनजी एकांते मळीया;
मारा मनना मनोरथ फळीया, हांरे दीठे दुःख जाय. यं०॥३॥
दोढसो धनुषनी देहडी जिन दीपे, तेजे करी दिनकर झीपे;
सुर ऊभा समीपे, हां रे नित्य करतां सेव. २०॥४॥
दश लाख पूर्वनुं आउखुं जिन पाळी, निज आतमने अजवाळी;
दुष्ट कर्मना मर्मने टाळी, हां रे लह्युं केवलज्ञान. चं० ||५||
सम्मेतशिखर गिरि आवीया प्रभु रंगे, मुनि कोटि सहस प्रसंगे;
पाळी अणसण ऊलट अंगे, हां रे पाम्या परमानंद. चं०।|६।।
श्री जिन उत्तम रुपने जे ध्यावे, ते कीर्ति कमला पावे;
“मोहनविजय’ गुण गावे, हांरे आपो अविचल राज. चं०।।७।।`,
      sa: "",
      en: `Chandraprabhanee chaakaree nitya kareee re, nitya kareee re nitya kareee;
Kareee to bhavajala tareee, haanre chadhate parinaama. chan0 ||1 ||
Lakshmanaa maataa janamiyaa jinaraaya, jina oodupati lanchhana paaya;
E to chandrapureenaa raayaa, haan re nitya leeje naama. chan0gaa2.||2||
Mahasena pitaa jehanaa prabhu baleeyaa, mane jinajee ekaante maleeyaa;
Maaraa mananaa manoratha phaleeyaa, haanre deethe dukha jaaya. यं0||3||
Dodhaso dhanushanee dehadee jina deepe, teje karee dinakara jheepe;
Sura oobhaa sameepe, haan re nitya karataan seva. 20||4||
Dasha laakha poorvanun aaukhun jina paalee, nija aatamane ajavaalee;
Dushta karmanaa marmane taalee, haan re lahyun kevalajnyaana. chan0 ||5||
Sammetashikhara giri aaveeyaa prabhu range, muni koti sahasa prasange;
Paalee anasana oolata ange, haan re paamyaa paramaananda. chan0||6||
Shree jina uttama rupane je dhyaave, te keerti kamalaa paave;
“mohanavijaya’ guna gaave, haanre aapo avichala raaja. chan0||7||`,
    },
  },
  {
    id: "chandrapraph-jin-sahiba-re",
    type: "bhajan",
    title: {
      gu: "ચંદ્રપ્રભ જિન! સાહિબા રે, તુમે છો ચતુર સુજાણ! મનના માન્યા",
      hi: "चंद्रप्रभ जिन! साहिबा रे, तुमे छो चतुर सुजाण! मनना मान्या",
      sa: "",
      en: "Chandrapraph Jin Sahiba Re",
    },
    text: {
      gu: `ચંદ્રપ્રભ જિન! સાહિબા રે, તુમે છો ચતુર સુજાણ! મનના માન્યા;
સેવા જાણો દાસની રે, દેશો ફલ નિર્વાણ. મનના માન્યા
આવો આવો રે ચતુર! સુખ ભોગી, કીજે વાત એકાંત અભોગી;
ગુણ ગોઠે પ્રગટે પ્રેમ મનના માન્યા.||૧||
ઓછું અધિકું પણ કહે રે, આસંગાયત જેહ; મનના૦
આપે ફલ જે અણકહ્યા રે, ગિરુઓ સાહિબ તેહ. મનના૦ ॥२॥
દીન કહ્યા વિણ દાનથી રે, દાતાની વાધે મામ;.મનના૦
જલ દીયેં ચાતક ખીજવી રે, મેઘ હુઓ તેણે શ્યામ. મનના૦ ।।૩ ।।
પિઉં પિઉં કરી તુમને જપું રે, હું ચાતક તુમે મેહ! મનના૦
એક લહેરમાં દુઃખ હરો વાધે બમણો નેહ. મનના||૫||
મોડું વહેલું આપવું રે, તો શી ઢીલ કરાય?; મનના૦
વાચક ‘જશ’ કહે જગ ધણી રે, તુમ તુઠે સુખ થાય. મનના૦ ||૬।।`,
      hi: `चंद्रप्रभ जिन! साहिबा रे, तुमे छो चतुर सुजाण! मनना मान्या;
सेवा जाणो दासनी रे, देशो फल निर्वाण. मनना मान्या
आवो आवो रे चतुर! सुख भोगी, कीजे वात एकांत अभोगी;
गुण गोठे प्रगटे प्रेम मनना मान्या.||१||
ओछुं अधिकुं पण कहे रे, आसंगायत जेह; मनना०
आपे फल जे अणकह्या रे, गिरुओ साहिब तेह. मनना० ॥२॥
दीन कह्या विण दानथी रे, दातानी वाधे माम;.मनना०
जल दीयें चातक खीजवी रे, मेघ हुओ तेणे श्याम. मनना० ।।३ ।।
पिउं पिउं करी तुमने जपुं रे, हुं चातक तुमे मेह! मनना०
एक लहेरमां दुःख हरो वाधे बमणो नेह. मनना||५||
मोडुं वहेलुं आपवुं रे, तो शी ढील कराय?; मनना०
वाचक ‘जश’ कहे जग धणी रे, तुम तुठे सुख थाय. मनना० ||६।।`,
      sa: "",
      en: `Chandraprabha jina! saahibaa re, tume chho chatura sujaana! mananaa maanyaa;
Sevaa jaano daasanee re, desho phala nirvaana. mananaa maanyaa
Aavo aavo re chatura! sukha bhogee, keeje vaata ekaanta abhogee;
Guna gothe pragate prema mananaa maanyaa.||1||
Ochhun adhikun pana kahe re, aasangaayata jeha; mananaa0
Aape phala je anakahyaa re, giruo saahiba teha. mananaa0 ||2||
Deena kahyaa vina daanathee re, daataanee vaadhe maama;.mananaa0
Jala deeyen chaataka kheejavee re, megha huo tene shyaama. mananaa0 ||3 ||
Piun piun karee tumane japun re, hun chaataka tume meha! mananaa0
Eka laheramaan dukha haro vaadhe bamano neha. mananaa||5||
Modun vahelun aapavun re, to shee dheela karaaya?; mananaa0
Vaachaka ‘jasha’ kahe jaga dhanee re, tuma tuthe sukha thaaya. mananaa0 ||6||`,
    },
  },
  {
    id: "chello-bodh-aapi",
    type: "bhajan",
    title: {
      gu: "છેલ્લો બોધ આપી, સહુ કર્મ કાપી",
      hi: "छेल्लो बोध आपी, सहु कर्म कापी",
      sa: "",
      en: "Chello Bodh Aapi",
    },
    text: {
      gu: `છેલ્લો બોધ આપી, સહુ કર્મ કાપી,
વીર મારા, ગયા મોક્ષતણી મોઝાર;
અઢાર દેશના રાજાઓ આવે પૌષધ લઈને ભાવના ભાવે;
સુણીને શાસ્ત્રનું જ્ઞાન, મૂકીને અભિમાન. वी२०॥१॥
વિલાપ કરે છે ગૌતમસ્વામી, ક્યાં ગયા મારા અંતરયામી;
મુજને મૂકી ગયા, મને મેલી ગયા. वी२०॥२॥
ચોસઠ ઈન્દ્રો આવી નમે છે, મહામહોત્સવને ઊજવે છે;
ગુણ વીરના ગવાય, ગુણ મહાવીરના ગવાય. वी२०॥३॥
આસો માસની પર્વ દિવાળી, રુડી રાત દિસે રઢિયાળી;
વીર પામ્યા નિર્વાણ, નામે શ્રી વર્ધમાન. वी२०॥४॥
વીર નામની સાચી દિવાળી, જાપ જપે શીયળ વ્રતધારી;
“વિનયવિજય’ ગુણ ગાય, ભવોભવનાં દુઃખ જાય. વીર૦ ||૫ ।।`,
      hi: `छेल्लो बोध आपी, सहु कर्म कापी,
वीर मारा, गया मोक्षतणी मोझार;
अढार देशना राजाओ आवे पौषध लईने भावना भावे;
सुणीने शास्त्रनुं ज्ञान, मूकीने अभिमान. वी२०॥१॥
विलाप करे छे गौतमस्वामी, क्यां गया मारा अंतरयामी;
मुजने मूकी गया, मने मेली गया. वी२०॥२॥
चोसठ ईन्द्रो आवी नमे छे, महामहोत्सवने ऊजवे छे;
गुण वीरना गवाय, गुण महावीरना गवाय. वी२०॥३॥
आसो मासनी पर्व दिवाळी, रुडी रात दिसे रढियाळी;
वीर पाम्या निर्वाण, नामे श्री वर्धमान. वी२०॥४॥
वीर नामनी साची दिवाळी, जाप जपे शीयळ व्रतधारी;
“विनयविजय’ गुण गाय, भवोभवनां दुःख जाय. वीर० ||५ ।।`,
      sa: "",
      en: `Chhello bodha aapee, sahu karma kaapee,
Veera maaraa, gayaa mokshatanee mojhaara;
Adhaara deshanaa raajaao aave paushadha laeene bhaavanaa bhaave;
Suneene shaastranun jnyaana, mookeene abhimaana. वी20||1||
Vilaapa kare chhe gautamasvaamee, kyaan gayaa maaraa antarayaamee;
Mujane mookee gayaa, mane melee gayaa. वी20||2||
Chosatha eendro aavee name chhe, mahaamahotsavane oojave chhe;
Guna veeranaa gavaaya, guna mahaaveeranaa gavaaya. वी20||3||
Aaso maasanee parva divaalee, rudee raata dise radhiyaalee;
Veera paamyaa nirvaana, naame shree vardhamaana. वी20||4||
Veera naamanee saachee divaalee, jaapa jape sheeyala vratadhaaree;
“vinayavijaya’ guna gaaya, bhavobhavanaan dukha jaaya. veera0 ||5 ||`,
    },
  },
  {
    id: "chit-samari-sarda-may-re",
    type: "bhajan",
    title: {
      gu: "ચિત્ત સમરી શારદા માય રે, વળી પ્રણમું નિજ ગુરુ પાય રે",
      hi: "चित्त समरी शारदा माय रे, वळी प्रणमुं निज गुरु पाय रे",
      sa: "",
      en: "Chit Samari Sarda May Re",
    },
    text: {
      gu: `ચિત્ત સમરી શારદા માય રે, વળી પ્રણમું નિજ ગુરુ પાય રે,
ગાઉં ત્રેવીસમાં જિનરાય, વ્હાલાજીનું જન્મકલ્યાણક ગાઉં રે,
સોનારુપાને ફૂલડે વધાવુંરે, થાળ ભરી ભરી મોતીડે વધાવું.||૧||
કાશી દેશ વારાણસી રાજેરે, અશ્વસેન છત્રપતિ છાજે રે,
રાણી વામા ગૃહિણી સુરાજે.||૨||
ચૈત્ર વદિ ચોથે તે ચવિયા રે, માતા વામા કૂખે અવતરિયા રે,
અજુવાળ્યા એહનાં પરિયાં.||૩||
પોષ વદિ દસમી જગભાણ રે, હોવે પ્રભુજીનું જન્મકલ્યાણ રે,
વીશસ્થાનક સુકૃત પ્રમાણ.||૪||
નારકી નરકે સુખ પાવે રે, અંતર્મુહૂર્ત દુઃખ જાવે રે,
એ તો જન્મકલ્યાણક કહાવે.||૫||
પ્રભુ ત્રણ ભુવન શિરતાજ રે, તુમે તારણ તરણ જહાજ રે,
કહે “દીપવિજય” કવિરાજ. વ્હાલા. ।।૬।।`,
      hi: `चित्त समरी शारदा माय रे, वळी प्रणमुं निज गुरु पाय रे,
गाउं त्रेवीसमां जिनराय, व्हालाजीनुं जन्मकल्याणक गाउं रे,
सोनारुपाने फूलडे वधावुंरे, थाळ भरी भरी मोतीडे वधावुं.||१||
काशी देश वाराणसी राजेरे, अश्वसेन छत्रपति छाजे रे,
राणी वामा गृहिणी सुराजे.||२||
चैत्र वदि चोथे ते चविया रे, माता वामा कूखे अवतरिया रे,
अजुवाळ्या एहनां परियां.||३||
पोष वदि दसमी जगभाण रे, होवे प्रभुजीनुं जन्मकल्याण रे,
वीशस्थानक सुकृत प्रमाण.||४||
नारकी नरके सुख पावे रे, अंतर्मुहूर्त दुःख जावे रे,
ए तो जन्मकल्याणक कहावे.||५||
प्रभु त्रण भुवन शिरताज रे, तुमे तारण तरण जहाज रे,
कहे “दीपविजय” कविराज. व्हाला. ।।६।।`,
      sa: "",
      en: `Chitta samaree shaaradaa maaya re, valee pranamun nija guru paaya re,
Gaaun treveesamaan jinaraaya, vhaalaajeenun janmakalyaanaka gaaun re,
Sonaarupaane phoolade vadhaavunre, thaala bharee bharee moteede vadhaavun.||1||
Kaashee desha vaaraanasee raajere, ashvasena chhatrapati chhaaje re,
Raanee vaamaa gruhinee suraaje.||2||
Chaitra vadi chothe te chaviyaa re, maataa vaamaa kookhe avatariyaa re,
Ajuvaalyaa ehanaan pariyaan.||3||
Posha vadi dasamee jagabhaana re, hove prabhujeenun janmakalyaana re,
Veeshasthaanaka sukruta pramaana.||4||
Naarakee narake sukha paave re, antarmuhoorta dukha jaave re,
E to janmakalyaanaka kahaave.||5||
Prabhu trana bhuvana shirataaja re, tume taarana tarana jahaaja re,
Kahe “deepavijaya” kaviraaja. vhaalaa. ||6||`,
    },
  },
  {
    id: "dada-aadeshwarji",
    type: "bhajan",
    title: {
      gu: "દાદા આદીશ્વરજી… દૂરથી આવ્યો દાદા દરિશન દ્યો..!",
      hi: "दादा आदीश्वरजी… दूरथी आव्यो दादा दरिशन द्यो..!",
      sa: "",
      en: "Dada Aadeshwarji",
    },
    text: {
      gu: `દાદા આદીશ્વરજી… દૂરથી આવ્યો દાદા દરિશન દ્યો..!
કોઈ આવે હાથી ઘોડે, કોઈ આવે ચઢે પલાણે;
કોઈ આવે પગ પાળે, દાદાને દરબાર; હા હા દાદાને દરબાર. ।।૧ ।|
શેઠ આવે હાથી ઘોડે, રાજા આવે ચડે પલાણે;
હું આવું પગ પાળે, દાદાને દરબાર; હા હા દાદાને દરબાર. ।। ૨ ।।
કોઈ મૂકે સોના રુપા, કોઈ મૂકે મહોર;
કોઈ મૂકે ચપટી ચોખા, દાદાને દરબાર; હા હાદાદાને દરબાર. ||૩।।
શેઠ મૂકે સોના રૂપા, રાજા મૂકે મહોર;
હું મુકું ચપટી ચોખા, દાદાને દરબાર; હા હા દાદાને દરબાર. ।।૪।।
કોઈ માંગે કંચન કાયા, કોઈ માંગે આંખ;
કોઈમાંગેચરણોની સેવા, દાદાનેદરબાર;હાહાદાદાનેદરબાર. ॥૫॥
પાંગળો માંગે કંચન કાયા, આંધળો માંગે આંખ;
હું માંગું ચરણોની સેવા, દાદાને દરબાર; હાહા દાદાને દરબાર. ।।૬।।
હીરવિજય ગુરુ હીરલો ને, ‘વીરવિજય’ ગુણ ગાય;
શત્રુંજયનાં દર્શન કરતાં, આનંદ અપાર; હા હા આનંદ અપાર. ।।૭।।`,
      hi: `दादा आदीश्वरजी… दूरथी आव्यो दादा दरिशन द्यो..!
कोई आवे हाथी घोडे, कोई आवे चढे पलाणे;
कोई आवे पग पाळे, दादाने दरबार; हा हा दादाने दरबार. ।।१ ।|
शेठ आवे हाथी घोडे, राजा आवे चडे पलाणे;
हुं आवुं पग पाळे, दादाने दरबार; हा हा दादाने दरबार. ।। २ ।।
कोई मूके सोना रुपा, कोई मूके महोर;
कोई मूके चपटी चोखा, दादाने दरबार; हा हादादाने दरबार. ||३।।
शेठ मूके सोना रूपा, राजा मूके महोर;
हुं मुकुं चपटी चोखा, दादाने दरबार; हा हा दादाने दरबार. ।।४।।
कोई मांगे कंचन काया, कोई मांगे आंख;
कोईमांगेचरणोनी सेवा, दादानेदरबार;हाहादादानेदरबार. ॥५॥
पांगळो मांगे कंचन काया, आंधळो मांगे आंख;
हुं मांगुं चरणोनी सेवा, दादाने दरबार; हाहा दादाने दरबार. ।।६।।
हीरविजय गुरु हीरलो ने, ‘वीरविजय’ गुण गाय;
शत्रुंजयनां दर्शन करतां, आनंद अपार; हा हा आनंद अपार. ।।७।।`,
      sa: "",
      en: `Daadaa aadeeshvarajee… doorathee aavyo daadaa darishana dyo..!
Koee aave haathee ghode, koee aave chadhe palaane;
Koee aave paga paale, daadaane darabaara; haa haa daadaane darabaara. ||1 ||
Shetha aave haathee ghode, raajaa aave chade palaane;
Hun aavun paga paale, daadaane darabaara; haa haa daadaane darabaara. || 2 ||
Koee mooke sonaa rupaa, koee mooke mahora;
Koee mooke chapatee chokhaa, daadaane darabaara; haa haadaadaane darabaara. ||3||
Shetha mooke sonaa roopaa, raajaa mooke mahora;
Hun mukun chapatee chokhaa, daadaane darabaara; haa haa daadaane darabaara. ||4||
Koee maange kanchana kaayaa, koee maange aankha;
Koeemaangecharanonee sevaa, daadaanedarabaara;haahaadaadaanedarabaara. ||5||
Paangalo maange kanchana kaayaa, aandhalo maange aankha;
Hun maangun charanonee sevaa, daadaane darabaara; haahaa daadaane darabaara. ||6||
Heeravijaya guru heeralo ne, ‘veeravijaya’ guna gaaya;
Shatrunjayanaan darshana karataan, aananda apaara; haa haa aananda apaara. ||7||`,
    },
  },
  {
    id: "darapurino-nem-rajiyo",
    type: "bhajan",
    title: {
      gu: "દ્વારાપુરીનો નેમ રાજિયો, તજી છે જેણે રાજુલ જેવી નાર રે",
      hi: "द्वारापुरीनो नेम राजियो, तजी छे जेणे राजुल जेवी नार रे",
      sa: "",
      en: "Darapurino Nem Rajiyo",
    },
    text: {
      gu: `દ્વારાપુરીનો નેમ રાજિયો, તજી છે જેણે રાજુલ જેવી નાર રે;
ગિરનારી નેમ! સંયમ લીધો છે બાલાવેશમાં… ॥१॥
મંડપ રચ્યો છે મધ્ય ચોકમાં,
જોવા મળ્યું છે દ્વારાપુરીનું લોક રે. ગિ૦।। ૨ ।।
ભાભીએ મેણાં મારિયાં,
પરણે વ્હાલો શ્રીકૃષ્ણનો વીર રે. ગિ૦||૩||
ગોખે બેસીને જોઈ રહ્યાં,
ક્યારે આવે જાદવકુલનો દીપરે. ગિ૦।।૪ ।।
નેમજી તે તોરણ આવિયા,
સુણી કાંઈ પશુનો પોકાર રે. शि०॥५॥
સાસુએ નેમજીને પોંખિયાં,
વ્હાલો મારો તોરણ ચઢવા જાય રે. ગિ૦।।૬।।
નેમજીએ સાળાને બોલાવીયા,
શાને કરે છે પશુડાં પોકાર રે. ગિ૦ ।।૭।।
રાતે રાજુલ બેની પરણશે,
સવારે દેશું ગોરવના ભોજન રે. ગિ૦।।૮।।
નેમજીએ રથ પાછો વાળીયો,
જઈ ચઢ્યા ગઢ ગિરનાર રે. ગિ૦।।૯।
રાજુલ બેની રુવે ધ્રુસકે,
રૂવે રુવે કાંઈ દ્વારાપુરીનાં લોક રે. ગિ૦।।૧૦।।
વીરાએબેનીનેસમજાવિયા,
અવરદેશુંનેમસરીખોભરથારરે. ગિ૦।।૧૧।।
પિયુ તે નેમ એક ધારિયા,
અવર દેખું ભાઈને બીજા બાપરે. ગિ૦।।૧૨।।
જમણી આંખે શ્રાવણ સરવરે,
ડાબી આંખે ભાદરવો ભરપૂર રે. ગિ૦ ।।૧૩।।
ચીર ભીંજાય રાજુલ નારનાં,
વાગે છે કાંઈ કંટક અપાર રે. ગિ૦।।૧૪ ।।
હીરવિજય ગુરુ હીરલો,
‘લબ્ધિવિજય” કહે કરજોડ રે. ગિ૦।।૧૫।।
નેમિ તીર્થંકર બાવીસમાં,
સખીઓ કહે ના મળે એની જોડરે. ગિ૦।।૧૬॥`,
      hi: `द्वारापुरीनो नेम राजियो, तजी छे जेणे राजुल जेवी नार रे;
गिरनारी नेम! संयम लीधो छे बालावेशमां… ॥१॥
मंडप रच्यो छे मध्य चोकमां,
जोवा मळ्युं छे द्वारापुरीनुं लोक रे. गि०।। २ ।।
भाभीए मेणां मारियां,
परणे व्हालो श्रीकृष्णनो वीर रे. गि०||३||
गोखे बेसीने जोई रह्यां,
क्यारे आवे जादवकुलनो दीपरे. गि०।।४ ।।
नेमजी ते तोरण आविया,
सुणी कांई पशुनो पोकार रे. शि०॥५॥
सासुए नेमजीने पोंखियां,
व्हालो मारो तोरण चढवा जाय रे. गि०।।६।।
नेमजीए साळाने बोलावीया,
शाने करे छे पशुडां पोकार रे. गि० ।।७।।
राते राजुल बेनी परणशे,
सवारे देशुं गोरवना भोजन रे. गि०।।८।।
नेमजीए रथ पाछो वाळीयो,
जई चढ्या गढ गिरनार रे. गि०।।९।
राजुल बेनी रुवे ध्रुसके,
रूवे रुवे कांई द्वारापुरीनां लोक रे. गि०।।१०।।
वीराएबेनीनेसमजाविया,
अवरदेशुंनेमसरीखोभरथाररे. गि०।।११।।
पियु ते नेम एक धारिया,
अवर देखुं भाईने बीजा बापरे. गि०।।१२।।
जमणी आंखे श्रावण सरवरे,
डाबी आंखे भादरवो भरपूर रे. गि० ।।१३।।
चीर भींजाय राजुल नारनां,
वागे छे कांई कंटक अपार रे. गि०।।१४ ।।
हीरविजय गुरु हीरलो,
‘लब्धिविजय” कहे करजोड रे. गि०।।१५।।
नेमि तीर्थंकर बावीसमां,
सखीओ कहे ना मळे एनी जोडरे. गि०।।१६॥`,
      sa: "",
      en: `Dvaaraapureeno nema raajiyo, tajee chhe jene raajula jevee naara re;
Giranaaree nema! sanyama leedho chhe baalaaveshamaan… ||1||
Mandapa rachyo chhe madhya chokamaan,
Jovaa malyun chhe dvaaraapureenun loka re. gi0|| 2 ||
Bhaabheee menaan maariyaan,
Parane vhaalo shreekrushnano veera re. gi0||3||
Gokhe beseene joee rahyaan,
Kyaare aave jaadavakulano deepare. gi0||4 ||
Nemajee te torana aaviyaa,
Sunee kaanee pashuno pokaara re. शि0||5||
Saasue nemajeene ponkhiyaan,
Vhaalo maaro torana chadhavaa jaaya re. gi0||6||
Nemajeee saalaane bolaaveeyaa,
Shaane kare chhe pashudaan pokaara re. gi0 ||7||
Raate raajula benee paranashe,
Savaare deshun goravanaa bhojana re. gi0||8||
Nemajeee ratha paachho vaaleeyo,
Jaee chadhyaa gadha giranaara re. gi0||9|
Raajula benee ruve dhrusake,
Roove ruve kaanee dvaaraapureenaan loka re. gi0||10||
Veeraaebeneenesamajaaviyaa,
Avaradeshunnemasareekhobharathaarare. gi0||11||
Piyu te nema eka dhaariyaa,
Avara dekhun bhaaeene beejaa baapare. gi0||12||
Jamanee aankhe shraavana saravare,
Daabee aankhe bhaadaravo bharapoora re. gi0 ||13||
Cheera bheenjaaya raajula naaranaan,
Vaage chhe kaanee kantaka apaara re. gi0||14 ||
Heeravijaya guru heeralo,
‘labdhivijaya” kahe karajoda re. gi0||15||
Nemi teerthankara baaveesamaan,
Sakheeo kahe naa male enee jodare. gi0||16||`,
    },
  },
  {
    id: "dekhan-de-re-sakhi",
    type: "bhajan",
    title: {
      gu: "દેખણ દેરે સખી! મુને દેખણ દે, ચંદ્રપ્રભ મુખચંદ; સખી૦",
      hi: "देखण देरे सखी! मुने देखण दे, चंद्रप्रभ मुखचंद; सखी०",
      sa: "",
      en: "Dekhan De Re Sakhi",
    },
    text: {
      gu: `દેખણ દેરે સખી! મુને દેખણ દે, ચંદ્રપ્રભ મુખચંદ; સખી૦
ઉપશમ રસનો કંદ સખી૦, ગત કલિમલ દુઃખદંદ. સખી૦ ॥१॥
સૂક્ષ્મ નિોદે નદેખીયો સખી૦, બાદર અતિહી વિશેષ; સખી૦
પુઢવી આઉ ન લેખીયો સખી૦, તેઉ-વાઉ ન લેશ. સખી૦ ॥२॥
વનસ્પતિ અતિ ઘણ દીહા સખી૦, દીઠો નહિ દીદાર; સખી૦
બિતિ ચઉરિંદિ જળલિહા સખી૦,
ગતસન્ની પણ ધાર. સખી૦ ।। ૩ ||
સુરતિરિ નિરય નિવાસમાં સખી૦, મનુજ અનારજ સાથ; સખી૦
અપજ્જત્તા પ્રતિભાસમાં સખી૦,
ચતુર ન ચઢિઓ હાથ. સખી૦ ||૪ ।।
ઈમ અનેક થલ જાણીએ સખી૦, દરિસણ વિણ જિનદેવ; સખી૦
આગમથી મતિ આણીયે સખી૦,કીજે નિર્મલ સેવ. સખી૦||૫||
નિર્મલ સાધુ ભગતિ લહી સખી૦, યોગ અવંચક હોય; સખી૦,
કિરિયા તિમ સહી સખી૦, ફળ અવંચક જોય. સખી૦ ।।૬।।
પ્રેરક અવસર જિનવરુ સખી૦, મોહનીય ક્ષય થાય; સખી૦
કામિત પૂરણ સુરતરુ સખી૦,“આનંદઘન’ પ્રભુ પાય. સખી૦ ।।૭ ।।`,
      hi: `देखण देरे सखी! मुने देखण दे, चंद्रप्रभ मुखचंद; सखी०
उपशम रसनो कंद सखी०, गत कलिमल दुःखदंद. सखी० ॥१॥
सूक्ष्म निोदे नदेखीयो सखी०, बादर अतिही विशेष; सखी०
पुढवी आउ न लेखीयो सखी०, तेउ-वाउ न लेश. सखी० ॥२॥
वनस्पति अति घण दीहा सखी०, दीठो नहि दीदार; सखी०
बिति चउरिंदि जळलिहा सखी०,
गतसन्नी पण धार. सखी० ।। ३ ||
सुरतिरि निरय निवासमां सखी०, मनुज अनारज साथ; सखी०
अपज्जत्ता प्रतिभासमां सखी०,
चतुर न चढिओ हाथ. सखी० ||४ ।।
ईम अनेक थल जाणीए सखी०, दरिसण विण जिनदेव; सखी०
आगमथी मति आणीये सखी०,कीजे निर्मल सेव. सखी०||५||
निर्मल साधु भगति लही सखी०, योग अवंचक होय; सखी०,
किरिया तिम सही सखी०, फळ अवंचक जोय. सखी० ।।६।।
प्रेरक अवसर जिनवरु सखी०, मोहनीय क्षय थाय; सखी०
कामित पूरण सुरतरु सखी०,“आनंदघन’ प्रभु पाय. सखी० ।।७ ।।`,
      sa: "",
      en: `Dekhana dere sakhee! mune dekhana de, chandraprabha mukhachanda; sakhee0
Upashama rasano kanda sakhee0, gata kalimala dukhadanda. sakhee0 ||1||
Sookshma niોde nadekheeyo sakhee0, baadara atihee vishesha; sakhee0
Pudhavee aau na lekheeyo sakhee0, teu-vaau na lesha. sakhee0 ||2||
Vanaspati ati ghana deehaa sakhee0, deetho nahi deedaara; sakhee0
Biti chaurindi jalalihaa sakhee0,
Gatasannee pana dhaara. sakhee0 || 3 ||
Suratiri niraya nivaasamaan sakhee0, manuja anaaraja saatha; sakhee0
Apajjattaa pratibhaasamaan sakhee0,
Chatura na chadhio haatha. sakhee0 ||4 ||
Eema aneka thala jaaneee sakhee0, darisana vina jinadeva; sakhee0
Aagamathee mati aaneeye sakhee0,keeje nirmala seva. sakhee0||5||
Nirmala saadhu bhagati lahee sakhee0, yoga avanchaka hoya; sakhee0,
Kiriyaa tima sahee sakhee0, phala avanchaka joya. sakhee0 ||6||
Preraka avasara jinavaru sakhee0, mohaneeya kshaya thaaya; sakhee0
Kaamita poorana surataru sakhee0,“aanandaghana’ prabhu paaya. sakhee0 ||7 ||`,
    },
  },
  {
    id: "dekho-mahi-ajabrup-jinaji-ko",
    type: "bhajan",
    title: {
      gu: "દેખો માઈ! અજબરુપ જિનજી કો,દેખો માઈ! અજબ",
      hi: "देखो माई! अजबरुप जिनजी को,देखो माई! अजब",
      sa: "",
      en: "Dekho Mahi Ajabrup Jinaji Ko",
    },
    text: {
      gu: `દેખો માઈ! અજબરુપ જિનજી કો,દેખો માઈ! અજબ
ઉનકે આગે ઓર સબહું કો, રુપ લાગે મોહે ફીકો…॥१॥
લોચન કરુણા અમૃત કચોલે, મુખ સોહે અતિ નીકો… ॥२॥
કવ “જશવિજય” કહે યોં સાહિબ, નેમજી ત્રિભુવન ટીકો… ।।૩।।`,
      hi: `देखो माई! अजबरुप जिनजी को,देखो माई! अजब
उनके आगे ओर सबहुं को, रुप लागे मोहे फीको…॥१॥
लोचन करुणा अमृत कचोले, मुख सोहे अति नीको… ॥२॥
कव “जशविजय” कहे यों साहिब, नेमजी त्रिभुवन टीको… ।।३।।`,
      sa: "",
      en: `Dekho maaee! ajabarupa jinajee ko,dekho maaee! ajaba
Unake aage ora sabahun ko, rupa laage mohe pheeko…||1||
Lochana karunaa amruta kachole, mukha sohe ati neeko… ||2||
Kava “jashavijaya” kahe yon saahiba, nemajee tribhuvana teeko… ||3||`,
    },
  },
  {
    id: "dekht-hi-chit-chor-liyo-re",
    type: "bhajan",
    title: {
      gu: "દેખત હી ચોર હે, દેખત હી લિયો",
      hi: "देखत ही चोर हे, देखत ही लियो",
      sa: "",
      en: "Dekht Hi Chit Chor Liyo Re",
    },
    text: {
      gu: `દેખત હી ચોર હે, દેખત હી લિયો;
શામકો નામ રુચત મોહિ અહનિશી,
શામ બિના કહાં કાજ જિયો. ।।૧ ।।
સિદ્ધિ વધૂકે લિયે મુજ છોડી, પશુઅનકો શિર દોષ દિયો;
પરકી પીડ જો જાનત તાસો, વૈર વસાયો ન નેહ કિયો.॥२॥
પ્રાણ ધરત મેં પ્રાણપ્રિય બિન, વજ્રસે ભી મોહિ કઠિન હિયો;
“જસ’ પ્રભુ નેમિ મિલે દુઃખ ડાર્યો,
રાજુલ શિવ સુખ રસ પિયો. ।।૩।।`,
      hi: `देखत ही चोर हे, देखत ही लियो;
शामको नाम रुचत मोहि अहनिशी,
शाम बिना कहां काज जियो. ।।१ ।।
सिद्धि वधूके लिये मुज छोडी, पशुअनको शिर दोष दियो;
परकी पीड जो जानत तासो, वैर वसायो न नेह कियो.॥२॥
प्राण धरत में प्राणप्रिय बिन, वज्रसे भी मोहि कठिन हियो;
“जस’ प्रभु नेमि मिले दुःख डार्यो,
राजुल शिव सुख रस पियो. ।।३।।`,
      sa: "",
      en: `Dekhata hee chora he, dekhata hee liyo;
Shaamako naama ruchata mohi ahanishee,
Shaama binaa kahaan kaaja jiyo. ||1 ||
Siddhi vadhooke liye muja chhodee, pashuanako shira dosha diyo;
Parakee peeda jo jaanata taaso, vaira vasaayo na neha kiyo.||2||
Praana dharata men praanapriya bina, vajrase bhee mohi kathina hiyo;
“jasa’ prabhu nemi mile dukha daaryo,
Raajula shiva sukha rasa piyo. ||3||`,
    },
  },
  {
    id: "dhan-din-veda-dhan-ghadi-teha",
    type: "bhajan",
    title: {
      gu: "ધન દિન વેળા, ધન ઘડી તેહ, અચિરારો નંદન, જિન જદિ ભેટશું જી",
      hi: "धन दिन वेळा, धन घडी तेह, अचिरारो नंदन, जिन जदि भेटशुं जी",
      sa: "",
      en: "Dhan Din Veda Dhan Ghadi Teha",
    },
    text: {
      gu: `ધન દિન વેળા, ધન ઘડી તેહ, અચિરારો નંદન, જિન જદિ ભેટશું જી;
લહીશુંરેસુખ, દેખીમુખચંદ, વિરહવ્યથાનાં,દુઃખસવિમેટશુંજી. ।।૧ ।।
જાણ્યો રે જેણે, તુજ ગુણ લેશ, બીજા રે રસ,તેહને મન નવિ ગમેજી;
ચાખ્યોરે જેણે, અમી લવલેશ, બાકસબુકસ, તસનરુચે કિમેજી. ॥૨॥
તુજ સમકિત, રસ સ્વાદનો જાણ, પાપ કુભક્તે, બહુ દિન સેવિયુંજી;
સેવેજો, કર્મને યોગે તોહિ,
વાંછે તે સમકિત, અમૃત ધુરે લિખ્યુંજી. |।૩।।
તાહરું ધ્યાન, તે સમકિત રુપ, તેહી જ જ્ઞાન, ને ચારિત્ર તેહ છે જી;
તેહથીરેજાયે, સઘળાંહો પાપ, ધ્યાતારે ધ્યેય, સ્વરુપહોયેપછેજી. ॥૪॥
દેખી રે અદ્ભુત, તાહરું રુપ, અચરિજ ભવિક, અરુપી પદ વરેજી;
તાહરી ગત, તું જાણે હોદેવ,
સમરણ ભજન, તે “વાચક યશ’ કરેજી ||૫॥`,
      hi: `धन दिन वेळा, धन घडी तेह, अचिरारो नंदन, जिन जदि भेटशुं जी;
लहीशुंरेसुख, देखीमुखचंद, विरहव्यथानां,दुःखसविमेटशुंजी. ।।१ ।।
जाण्यो रे जेणे, तुज गुण लेश, बीजा रे रस,तेहने मन नवि गमेजी;
चाख्योरे जेणे, अमी लवलेश, बाकसबुकस, तसनरुचे किमेजी. ॥२॥
तुज समकित, रस स्वादनो जाण, पाप कुभक्ते, बहु दिन सेवियुंजी;
सेवेजो, कर्मने योगे तोहि,
वांछे ते समकित, अमृत धुरे लिख्युंजी. |।३।।
ताहरुं ध्यान, ते समकित रुप, तेही ज ज्ञान, ने चारित्र तेह छे जी;
तेहथीरेजाये, सघळांहो पाप, ध्यातारे ध्येय, स्वरुपहोयेपछेजी. ॥४॥
देखी रे अद्भुत, ताहरुं रुप, अचरिज भविक, अरुपी पद वरेजी;
ताहरी गत, तुं जाणे होदेव,
समरण भजन, ते “वाचक यश’ करेजी ||५॥`,
      sa: "",
      en: `Dhana dina velaa, dhana ghadee teha, achiraaro nandana, jina jadi bhetashun jee;
Laheeshunresukha, dekheemukhachanda, virahavyathaanaan,dukhasavimetashunjee. ||1 ||
Jaanyo re jene, tuja guna lesha, beejaa re rasa,tehane mana navi gamejee;
Chaakhyore jene, amee lavalesha, baakasabukasa, tasanaruche kimejee. ||2||
Tuja samakita, rasa svaadano jaana, paapa kubhakte, bahu dina seviyunjee;
Sevejo, karmane yoge tohi,
Vaanchhe te samakita, amruta dhure likhyunjee. ||3||
Taaharun dhyaana, te samakita rupa, tehee ja jnyaana, ne chaaritra teha chhe jee;
Tehatheerejaaye, saghalaanho paapa, dhyaataare dhyeya, svarupahoyepachhejee. ||4||
Dekhee re adbhuta, taaharun rupa, acharija bhavika, arupee pada varejee;
Taaharee gata, tun jaane hodeva,
Samarana bhajana, te “vaachaka yasha’ karejee ||5||`,
    },
  },
  {
    id: "dhanya-dhanya-shetra-mahavidehaji",
    type: "bhajan",
    title: {
      gu: "ધન્ય ધન્ય ક્ષેત્ર મહાવિદેહજી, ધન્ય પુંડરીગિણી ગામ",
      hi: "धन्य धन्य क्षेत्र महाविदेहजी, धन्य पुंडरीगिणी गाम",
      sa: "",
      en: "Dhanya Dhanya Shetra Mahavidehaji",
    },
    text: {
      gu: `ધન્ય ધન્ય ક્ષેત્ર મહાવિદેહજી, ધન્ય પુંડરીગિણી ગામ,
ધન્ય તિહાંના માનવીજી, નિત્ય ઉઠી કરે રે પ્રણામ;
સીમંધરસ્વામી! કહીએ રે હું મહાવિદેહ આવીશ?||૧||
જયવંતા જિનવર! કહીએ રે હું તમને વાંદીશ.?
ચાંદલીયા! સંદેશડોજી, કહેજો સીમંધરસ્વામી;
ભરતક્ષેત્રનાં માનવીજી, નિત્ય ઉઠી કરે રે પ્રણામ.||૨||
સમવસરણ દેવે રચ્યું તિહાં, ચોસઠ ઇંદ્ર નરેશ;
સોનાતણે સિંહાસન બેઠા, ચામર છત્ર ધરેશ.||૩||
ઈંદ્રાણી કાઢે ગહુંલીજી, મોતીના ચોક પૂરેશ;
લળી લળી લિયે લૂંછણાજી, જિનવર દિયે ઉપદેશ.||૪||
એહવે સમે મેં સાંભળ્યુંજી, હવે કરવા પચ્ચક્ખાણ;
ઠવણી તિહાં કણેજી, અમૃત વાણી વખાણ.||૫||
રાયને વહાલા ઘોડલાજી, વેપારીને વહાલાં છે દામ;
અમને વહાલા સીમંધર સ્વામી, જેમ સીતાને શ્રીરામ. સીમંધર૦||૬||
નહિ માંગુ પ્રભુ રાજઋદ્ધિજી, નહી માંગુ અરથ ભંડાર;
હું માંગુ પ્રભુ એટલું જી, તુમ પાસે અવતાર.||૭||
દૈવે ન દીધી પાંખડીજી, કેમ કરી આવું હજુર?
મુજરો મારો માનજોજી, પ્રહ ઉગમતે સૂર.||૮||
“સમયસુંદર’ની વિનતિજી, માનજો વારંવાર;
બે કર જોડી વિનવુંજી, વિનતડી અવધાર.||૮||`,
      hi: `धन्य धन्य क्षेत्र महाविदेहजी, धन्य पुंडरीगिणी गाम,
धन्य तिहांना मानवीजी, नित्य उठी करे रे प्रणाम;
सीमंधरस्वामी! कहीए रे हुं महाविदेह आवीश?||१||
जयवंता जिनवर! कहीए रे हुं तमने वांदीश.?
चांदलीया! संदेशडोजी, कहेजो सीमंधरस्वामी;
भरतक्षेत्रनां मानवीजी, नित्य उठी करे रे प्रणाम.||२||
समवसरण देवे रच्युं तिहां, चोसठ इंद्र नरेश;
सोनातणे सिंहासन बेठा, चामर छत्र धरेश.||३||
ईंद्राणी काढे गहुंलीजी, मोतीना चोक पूरेश;
लळी लळी लिये लूंछणाजी, जिनवर दिये उपदेश.||४||
एहवे समे में सांभळ्युंजी, हवे करवा पच्चक्खाण;
ठवणी तिहां कणेजी, अमृत वाणी वखाण.||५||
रायने वहाला घोडलाजी, वेपारीने वहालां छे दाम;
अमने वहाला सीमंधर स्वामी, जेम सीताने श्रीराम. सीमंधर०||६||
नहि मांगु प्रभु राजऋद्धिजी, नही मांगु अरथ भंडार;
हुं मांगु प्रभु एटलुं जी, तुम पासे अवतार.||७||
दैवे न दीधी पांखडीजी, केम करी आवुं हजुर?
मुजरो मारो मानजोजी, प्रह उगमते सूर.||८||
“समयसुंदर’नी विनतिजी, मानजो वारंवार;
बे कर जोडी विनवुंजी, विनतडी अवधार.||८||`,
      sa: "",
      en: `Dhanya dhanya kshetra mahaavidehajee, dhanya pundareeginee gaama,
Dhanya tihaannaa maanaveejee, nitya uthee kare re pranaama;
Seemandharasvaamee! kaheee re hun mahaavideha aaveesha?||1||
Jayavantaa jinavara! kaheee re hun tamane vaandeesha.?
Chaandaleeyaa! sandeshadojee, kahejo seemandharasvaamee;
Bharatakshetranaan maanaveejee, nitya uthee kare re pranaama.||2||
Samavasarana deve rachyun tihaan, chosatha indra naresha;
Sonaatane sinhaasana bethaa, chaamara chhatra dharesha.||3||
Eendraanee kaadhe gahunleejee, moteenaa choka pooresha;
Lalee lalee liye loonchhanaajee, jinavara diye upadesha.||4||
Ehave same men saanbhalyunjee, have karavaa pachchakkhaana;
Thavanee tihaan kanejee, amruta vaanee vakhaana.||5||
Raayane vahaalaa ghodalaajee, vepaareene vahaalaan chhe daama;
Amane vahaalaa seemandhara svaamee, jema seetaane shreeraama. seemandhara0||6||
Nahi maangu prabhu raajaruddhijee, nahee maangu aratha bhandaara;
Hun maangu prabhu etalun jee, tuma paase avataara.||7||
Daive na deedhee paankhadeejee, kema karee aavun hajura?
Mujaro maaro maanajojee, praha ugamate soora.||8||
“samayasundara’nee vinatijee, maanajo vaaranvaara;
Be kara jodee vinavunjee, vinatadee avadhaara.||8||`,
    },
  },
  {
    id: "dhar-talwarni-sohali-doheli",
    type: "bhajan",
    title: {
      gu: "ધાર તલવારની સોહિલી દોહિલી",
      hi: "धार तलवारनी सोहिली दोहिली",
      sa: "",
      en: "Dhar Talwarni Sohali Doheli",
    },
    text: {
      gu: `ધાર તલવારની સોહિલી દોહિલી,
ચૌદમા જિન તણી ચરણસેવા;
ધાર પર નાચતાં દેખ બાજીગરા,
સેવના ધાર પર રહે ન દેવા.||૧||
એક કહે સેવિયે વિવિધ કિરિયા કરી,
ફલ અનેકાંત લોચન ન દેખે;
ફલ અનેકાંત કિરિયા કરી બાપડા,
રડવડે ચાર ગતિમાંહે લેખે.||૨||
ગચ્છના ભેદ બહુ નયણ નિહાળતાં,
તત્ત્વની વાત કરતાં ન લાજે!
ઉદરભરણાદિ નિજ કાજ કરતાં થકા,
મોહ નડિયા કલિકાલ રાજે.||૩||
વચન નિરપેક્ષ વ્યવહાર જૂઠો કહ્યો,
સાપેક્ષ વ્યવહાર સાચો;
વચન નિરપેક્ષ વ્યવહાર સંસાર ફળ,
સાંભળી આદરી કાંઈ રાચો?||૪||
દેવ ગુરુ ધર્મની શુદ્ધિ કહો કિમ રહે?
કિમ રહે શુદ્ધ શ્રદ્ધાન આણો
! શુદ્ધ શ્રદ્ધાન વિણ સર્વ કિરિયા કરી,
છાર પર લીંપણું તેહ જાણો.||૫||
પાપ નહિ કોઈ ઉત્સૂત્ર ભાષણ જિસ્યો,
ધર્મ નહીં કોઈ જગ સૂત્ર સરીખો;
સૂત્ર અનુસાર જે ભવિક કિરિયા કરે,
તેહનું શુદ્ધ ચારિત્ર પરીખો.||૬||
એહ ઉપદેશનો સાર સંક્ષેપથી,
જે નરા ચિત્તમાં નિત્ય ધ્યાવે,
તે નરા દિવ્ય બહુકાલ સુખ અનુભવી,
નિયત “આનંદઘન’ રાજ પાવે.||૭||`,
      hi: `धार तलवारनी सोहिली दोहिली,
चौदमा जिन तणी चरणसेवा;
धार पर नाचतां देख बाजीगरा,
सेवना धार पर रहे न देवा.||१||
एक कहे सेविये विविध किरिया करी,
फल अनेकांत लोचन न देखे;
फल अनेकांत किरिया करी बापडा,
रडवडे चार गतिमांहे लेखे.||२||
गच्छना भेद बहु नयण निहाळतां,
तत्त्वनी वात करतां न लाजे!
उदरभरणादि निज काज करतां थका,
मोह नडिया कलिकाल राजे.||३||
वचन निरपेक्ष व्यवहार जूठो कह्यो,
सापेक्ष व्यवहार साचो;
वचन निरपेक्ष व्यवहार संसार फळ,
सांभळी आदरी कांई राचो?||४||
देव गुरु धर्मनी शुद्धि कहो किम रहे?
किम रहे शुद्ध श्रद्धान आणो
! शुद्ध श्रद्धान विण सर्व किरिया करी,
छार पर लींपणुं तेह जाणो.||५||
पाप नहि कोई उत्सूत्र भाषण जिस्यो,
धर्म नहीं कोई जग सूत्र सरीखो;
सूत्र अनुसार जे भविक किरिया करे,
तेहनुं शुद्ध चारित्र परीखो.||६||
एह उपदेशनो सार संक्षेपथी,
जे नरा चित्तमां नित्य ध्यावे,
ते नरा दिव्य बहुकाल सुख अनुभवी,
नियत “आनंदघन’ राज पावे.||७||`,
      sa: "",
      en: `Dhaara talavaaranee sohilee dohilee,
Chaudamaa jina tanee charanasevaa;
Dhaara para naachataan dekha baajeegaraa,
Sevanaa dhaara para rahe na devaa.||1||
Eka kahe seviye vividha kiriyaa karee,
Phala anekaanta lochana na dekhe;
Phala anekaanta kiriyaa karee baapadaa,
Radavade chaara gatimaanhe lekhe.||2||
Gachchhanaa bheda bahu nayana nihaalataan,
Tattvanee vaata karataan na laaje!
Udarabharanaadi nija kaaja karataan thakaa,
Moha nadiyaa kalikaala raaje.||3||
Vachana nirapeksha vyavahaara jootho kahyo,
Saapeksha vyavahaara saacho;
Vachana nirapeksha vyavahaara sansaara phala,
Saanbhalee aadaree kaanee raacho?||4||
Deva guru dharmanee shuddhi kaho kima rahe?
Kima rahe shuddha shraddhaana aano
! shuddha shraddhaana vina sarva kiriyaa karee,
Chhaara para leenpanun teha jaano.||5||
Paapa nahi koee utsootra bhaashana jisyo,
Dharma naheen koee jaga sootra sareekho;
Sootra anusaara je bhavika kiriyaa kare,
Tehanun shuddha chaaritra pareekho.||6||
Eha upadeshano saara sankshepathee,
Je naraa chittamaan nitya dhyaave,
Te naraa divya bahukaala sukha anubhavee,
Niyata “aanandaghana’ raaja paave.||7||`,
    },
  },
  {
    id: "dharam-param-arnathno",
    type: "bhajan",
    title: {
      gu: "ધરમ પરમ અરનાથનો, કિમ જાણું ભગવંત રે",
      hi: "धरम परम अरनाथनो, किम जाणुं भगवंत रे",
      sa: "",
      en: "Dharam Param Arnathno",
    },
    text: {
      gu: `ધરમ પરમ અરનાથનો, કિમ જાણું ભગવંત રે;
પરણી છાંયડી જિહાં પડે, તે પર સમય નિવાસ રે.ધરમ૦ ||૧ ।।
તારા નક્ષત્ર ગ્રહ ચંદ્રની, જ્યોતિ દિનેશ મોઝાર રે;
સ્વ-પર સમય સમજાવીયેં, મહિમાવંત મહંત રે.ઘરમ૦||૨||
શુદ્ધાતમ અનુભવ સદા, સ્વસમય એહ વિલાસ રે;
દર્શન જ્ઞાન ચરણ થકી, શક્તિ નિજાતમ ધાર રે.||૩||
ભારી પીળો ચીકણો, કનક અનેક તરંગ રે;
પર્યાય દૃષ્ટિ ન દીજીયે, એક જ કનક અભંગ રે.||૪||
દર્શન જ્ઞાન ચરણ થકી, અલખ સરુપ અનેક રે;
નિર્વિકલ્પ રસ પીજીયે, શુદ્ધ નિરંજન એક રે.||૫||
પરમારથ પંથ જે કહે, તે રંજે એક તંત રે;
વ્યવહારે લખ જે રહે, તેહના ભેદ અનંત રે.||૬||
વ્યવહારે લખવો દોહીલો, કાંઈ ન આવે હાથ રે;
શુદ્ધ નય થાપના સેવતાં, નવિ રહે દુવિધા સાથ રે.||૭||
એક પખી લખ પ્રીતની, તુમ સાથે જગનાથ રે;
કૃપા કરીને રાખજો, ચરણ તલે ગ્રહી હાથ રે.||૮||
ચક્રી ધરમ તીરથ તણો, તીરથફળ તતસાર રે;
તીરથ સેવે તે લહેં, “આનંદઘન” નિરધાર રે.||૯||`,
      hi: `धरम परम अरनाथनो, किम जाणुं भगवंत रे;
परणी छांयडी जिहां पडे, ते पर समय निवास रे.धरम० ||१ ।।
तारा नक्षत्र ग्रह चंद्रनी, ज्योति दिनेश मोझार रे;
स्व-पर समय समजावीयें, महिमावंत महंत रे.घरम०||२||
शुद्धातम अनुभव सदा, स्वसमय एह विलास रे;
दर्शन ज्ञान चरण थकी, शक्ति निजातम धार रे.||३||
भारी पीळो चीकणो, कनक अनेक तरंग रे;
पर्याय दृष्टि न दीजीये, एक ज कनक अभंग रे.||४||
दर्शन ज्ञान चरण थकी, अलख सरुप अनेक रे;
निर्विकल्प रस पीजीये, शुद्ध निरंजन एक रे.||५||
परमारथ पंथ जे कहे, ते रंजे एक तंत रे;
व्यवहारे लख जे रहे, तेहना भेद अनंत रे.||६||
व्यवहारे लखवो दोहीलो, कांई न आवे हाथ रे;
शुद्ध नय थापना सेवतां, नवि रहे दुविधा साथ रे.||७||
एक पखी लख प्रीतनी, तुम साथे जगनाथ रे;
कृपा करीने राखजो, चरण तले ग्रही हाथ रे.||८||
चक्री धरम तीरथ तणो, तीरथफळ ततसार रे;
तीरथ सेवे ते लहें, “आनंदघन” निरधार रे.||९||`,
      sa: "",
      en: `Dharama parama aranaathano, kima jaanun bhagavanta re;
Paranee chhaanyadee jihaan pade, te para samaya nivaasa re.dharama0 ||1 ||
Taaraa nakshatra graha chandranee, jyoti dinesha mojhaara re;
Sva-para samaya samajaaveeyen, mahimaavanta mahanta re.gharama0||2||
Shuddhaatama anubhava sadaa, svasamaya eha vilaasa re;
Darshana jnyaana charana thakee, shakti nijaatama dhaara re.||3||
Bhaaree peelo cheekano, kanaka aneka taranga re;
Paryaaya drushti na deejeeye, eka ja kanaka abhanga re.||4||
Darshana jnyaana charana thakee, alakha sarupa aneka re;
Nirvikalpa rasa peejeeye, shuddha niranjana eka re.||5||
Paramaaratha pantha je kahe, te ranje eka tanta re;
Vyavahaare lakha je rahe, tehanaa bheda ananta re.||6||
Vyavahaare lakhavo doheelo, kaanee na aave haatha re;
Shuddha naya thaapanaa sevataan, navi rahe duvidhaa saatha re.||7||
Eka pakhee lakha preetanee, tuma saathe jaganaatha re;
Krupaa kareene raakhajo, charana tale grahee haatha re.||8||
Chakree dharama teeratha tano, teerathaphala tatasaara re;
Teeratha seve te lahen, “aanandaghana” niradhaara re.||9||`,
    },
  },
  {
    id: "dharma-jineshwar-dharmadhurandhar",
    type: "bhajan",
    title: {
      gu: "ધર્મ જિનેશ્વર ધર્મધુરંધર, પૂરણ પુણ્યે મળિયો",
      hi: "धर्म जिनेश्वर धर्मधुरंधर, पूरण पुण्ये मळियो",
      sa: "",
      en: "Dharma Jineshwar Dharmadhurandhar",
    },
    text: {
      gu: `ધર્મ જિનેશ્વર ધર્મધુરંધર, પૂરણ પુણ્યે મળિયો;
મન મરુથલ મેં સુરતરુ ફળિયો, આજ થકી દિન વળિયો.
પ્રભુજી! મહેર કરી મહારાજ, કાજ હવે મુજ સારો;
સાહિબ! ગુણનિધિ ગરીબ નિવાજ, ભવજલ પાર ઉતારો. ॥੧॥
બહુ ગુણવંતા જેહ તેં તાર્યા, તે નહિ પાડ તુમારો;
મુજ સરીખો પત્થર જો તારો, તો તુમચી બલિહારો. પ્રભુજી૦||૨ ।।
હું નિર્ગુણ પણ તાહરી સંગે, ગુણ લહું તેહ ઘટમાન;
નિંબાદિક પણ ચંદન સંગે, ચંદન સમ લહે તાન. પ્રભુજી૦||૩||
નિર્ગુણ જાણી છેહ મદેશો, જુઓ આપ વિચારી;
ચંદ્ર કલંકિત પણ નિજ શિરથી, ન તજે ગંગાધારી. પ્રભુજી૦।।૪।।
સુવ્રતાનંદન સુવ્રતદાયક, ધારક જિનપદવીનો;
પાયક જાસ સુરાસુર કિન્નર, ઘાયક મોહ રિપુનો. પ્રભુજી૦॥૫॥
તારક તુમ સમ અવર ન દીઠો, લાયક નાથ હમારો;
શ્રી ગુરુ ‘ક્ષમાવિજય’ પય સેવી,
કહે જિન ભવજલ તારો. પ્રભુજી૦।।૬।।`,
      hi: `धर्म जिनेश्वर धर्मधुरंधर, पूरण पुण्ये मळियो;
मन मरुथल में सुरतरु फळियो, आज थकी दिन वळियो.
प्रभुजी! महेर करी महाराज, काज हवे मुज सारो;
साहिब! गुणनिधि गरीब निवाज, भवजल पार उतारो. ॥੧॥
बहु गुणवंता जेह तें तार्या, ते नहि पाड तुमारो;
मुज सरीखो पत्थर जो तारो, तो तुमची बलिहारो. प्रभुजी०||२ ।।
हुं निर्गुण पण ताहरी संगे, गुण लहुं तेह घटमान;
निंबादिक पण चंदन संगे, चंदन सम लहे तान. प्रभुजी०||३||
निर्गुण जाणी छेह मदेशो, जुओ आप विचारी;
चंद्र कलंकित पण निज शिरथी, न तजे गंगाधारी. प्रभुजी०।।४।।
सुव्रतानंदन सुव्रतदायक, धारक जिनपदवीनो;
पायक जास सुरासुर किन्नर, घायक मोह रिपुनो. प्रभुजी०॥५॥
तारक तुम सम अवर न दीठो, लायक नाथ हमारो;
श्री गुरु ‘क्षमाविजय’ पय सेवी,
कहे जिन भवजल तारो. प्रभुजी०।।६।।`,
      sa: "",
      en: `Dharma jineshvara dharmadhurandhara, poorana punye maliyo;
Mana maruthala men surataru phaliyo, aaja thakee dina valiyo.
Prabhujee! mahera karee mahaaraaja, kaaja have muja saaro;
Saahiba! gunanidhi gareeba nivaaja, bhavajala paara utaaro. ||1||
Bahu gunavantaa jeha ten taaryaa, te nahi paada tumaaro;
Muja sareekho patthara jo taaro, to tumachee balihaaro. prabhujee0||2 ||
Hun nirguna pana taaharee sange, guna lahun teha ghatamaana;
Ninbaadika pana chandana sange, chandana sama lahe taana. prabhujee0||3||
Nirguna jaanee chheha madesho, juo aapa vichaaree;
Chandra kalankita pana nija shirathee, na taje gangaadhaaree. prabhujee0||4||
Suvrataanandana suvratadaayaka, dhaaraka jinapadaveeno;
Paayaka jaasa suraasura kinnara, ghaayaka moha ripuno. prabhujee0||5||
Taaraka tuma sama avara na deetho, laayaka naatha hamaaro;
Shree guru ‘kshamaavijaya’ paya sevee,
Kahe jina bhavajala taaro. prabhujee0||6||`,
    },
  },
  {
    id: "dharma-jineshwar-gau-rangasu",
    type: "bhajan",
    title: {
      gu: "ધર્મ જિનેશ્વર ગાઉં રંગશું",
      hi: "धर्म जिनेश्वर गाउं रंगशुं",
      sa: "",
      en: "Dharma Jineshwar Gau Rangasu",
    },
    text: {
      gu: `ધર્મ જિનેશ્વર ગાઉં રંગશું,
ભંગ મ પડશો હો પ્રીત;
બીજો મનમંદિર આણું નહીં,
એ અમ કુલવટ રીત. જિને૦ ||૧||
ધરમ ધરમ કરતો જગ સહુ ફિરે,
ધર્મ ન જાણે હો મર્મ; જિને૦
ધર્મ જિનેશ્વર ચરણ ગ્રહ્યા પછી,
કોઈ ન બાંધે હો કર્મ. જિને૦ ||૨||
પ્રવચન અંજન જો સદ્ગુરુ કરે,
દેખે પરમનિધાન;જિને૦
હૃદય નયણ નિહાળે જગધણી,
મહિમા મેરુ સમાન. જિને૦||૩||
દોડત દોડત દોડત દોડીઓ,
જેતી મનની રે દોડ; જિને૦
પ્રેમ પ્રતીત વિચારો ટૂંકડી,
ગુરુ-ગમ લેજો રે જોડ. જિને૦||૪||
એક પખી કેમ પ્રીતિ પરવડે?
ઉભય મિલ્યા હોય સંઘ; જિને૦
હું રાગી હું મોહે ફંદિયો,
તું નિરાગી નિરબંધ. જિને૦||૫||
પરમ નિધાન પ્રગટ મુખ આગળે,
જગત ઉલ્લંઘી હો જાય; જિને૦
જ્યોતિ વિના જુઓ જગદીશની,
અંધોઅંધ પુલાય.જિને૦||૬||
નિર્મલ ગુણમણિ રોહણ ભૂધરા,
મુનિજન માનસ હંસ; જિને૦
ધન્ય તે નગરી ધન્ય વેલા ઘડી,
માતપિતા કુલ વંશ. જિને૦||૭||
મન મધુકર વર કરજોડી કહે,
પદકજ નિકટ નિવાસ; જિને૦
ઘનનામી “આનંદઘન’ સાંભળો,
એ સેવક અરદાસ. જિને૦||૮||`,
      hi: `धर्म जिनेश्वर गाउं रंगशुं,
भंग म पडशो हो प्रीत;
बीजो मनमंदिर आणुं नहीं,
ए अम कुलवट रीत. जिने० ||१||
धरम धरम करतो जग सहु फिरे,
धर्म न जाणे हो मर्म; जिने०
धर्म जिनेश्वर चरण ग्रह्या पछी,
कोई न बांधे हो कर्म. जिने० ||२||
प्रवचन अंजन जो सद्गुरु करे,
देखे परमनिधान;जिने०
हृदय नयण निहाळे जगधणी,
महिमा मेरु समान. जिने०||३||
दोडत दोडत दोडत दोडीओ,
जेती मननी रे दोड; जिने०
प्रेम प्रतीत विचारो टूंकडी,
गुरु-गम लेजो रे जोड. जिने०||४||
एक पखी केम प्रीति परवडे?
उभय मिल्या होय संघ; जिने०
हुं रागी हुं मोहे फंदियो,
तुं निरागी निरबंध. जिने०||५||
परम निधान प्रगट मुख आगळे,
जगत उल्लंघी हो जाय; जिने०
ज्योति विना जुओ जगदीशनी,
अंधोअंध पुलाय.जिने०||६||
निर्मल गुणमणि रोहण भूधरा,
मुनिजन मानस हंस; जिने०
धन्य ते नगरी धन्य वेला घडी,
मातपिता कुल वंश. जिने०||७||
मन मधुकर वर करजोडी कहे,
पदकज निकट निवास; जिने०
घननामी “आनंदघन’ सांभळो,
ए सेवक अरदास. जिने०||८||`,
      sa: "",
      en: `Dharma jineshvara gaaun rangashun,
Bhanga ma padasho ho preeta;
Beejo manamandira aanun naheen,
E ama kulavata reeta. jine0 ||1||
Dharama dharama karato jaga sahu phire,
Dharma na jaane ho marma; jine0
Dharma jineshvara charana grahyaa pachhee,
Koee na baandhe ho karma. jine0 ||2||
Pravachana anjana jo sadguru kare,
Dekhe paramanidhaana;jine0
Hrudaya nayana nihaale jagadhanee,
Mahimaa meru samaana. jine0||3||
Dodata dodata dodata dodeeo,
Jetee mananee re doda; jine0
Prema prateeta vichaaro toonkadee,
Guru-gama lejo re joda. jine0||4||
Eka pakhee kema preeti paravade?
Ubhaya milyaa hoya sangha; jine0
Hun raagee hun mohe phandiyo,
Tun niraagee nirabandha. jine0||5||
Parama nidhaana pragata mukha aagale,
Jagata ullanghee ho jaaya; jine0
Jyoti vinaa juo jagadeeshanee,
Andhoandha pulaaya.jine0||6||
Nirmala gunamani rohana bhoodharaa,
Munijana maanasa hansa; jine0
Dhanya te nagaree dhanya velaa ghadee,
Maatapitaa kula vansha. jine0||7||
Mana madhukara vara karajodee kahe,
Padakaja nikata nivaasa; jine0
Ghananaamee “aanandaghana’ saanbhalo,
E sevaka aradaasa. jine0||8||`,
    },
  },
  {
    id: "dharma-jineshwar-sun-parmesar",
    type: "bhajan",
    title: {
      gu: "ધર્મ જિનેસર સુણ પરમેસર, તુજ ગુણ કેમ કહાયજી",
      hi: "धर्म जिनेसर सुण परमेसर, तुज गुण केम कहायजी",
      sa: "",
      en: "Dharma Jineshwar Sun Parmesar",
    },
    text: {
      gu: `ધર્મ જિનેસર સુણ પરમેસર, તુજ ગુણ કેમ કહાયજી;
તુજ વચને તુજ રૂપ જણાયે, અવર ન કોઈ ઉપાયજી.॥੧॥
તાહરે મિત્ર અને શત્રુ સમ, અરિહંત તું હી ગવાયજી;
રુપ સ્વરુપ અનુપમ તું જિન, તો હી અરુપી કહાયજી. ॥२॥
લોભ નહિ તુજમાંહિ તો પણ, સઘળા ગુણ તેં લીધજી;
તું નિરાગી પણ તેં રાગી, ભક્ત તણા મન કીધજી. ॥३॥
નહિ માયા તુજમાં જિનરાયા, પણ તુજ વશ જગ થાયજી;
હી સકલ તુજ અકલ કલે કુણ? જ્ઞાન વિના જિનરાયજી. ।। ૪ ।।
સુગુણ સનેહી મહેર કરો મુજ, સુપ્રસન્ન હોઈ જિણંદજી;
પભણે “કેસર’ ધર્મ તુજ નામે આણંદજી. ॥५॥`,
      hi: `धर्म जिनेसर सुण परमेसर, तुज गुण केम कहायजी;
तुज वचने तुज रूप जणाये, अवर न कोई उपायजी.॥੧॥
ताहरे मित्र अने शत्रु सम, अरिहंत तुं ही गवायजी;
रुप स्वरुप अनुपम तुं जिन, तो ही अरुपी कहायजी. ॥२॥
लोभ नहि तुजमांहि तो पण, सघळा गुण तें लीधजी;
तुं निरागी पण तें रागी, भक्त तणा मन कीधजी. ॥३॥
नहि माया तुजमां जिनराया, पण तुज वश जग थायजी;
ही सकल तुज अकल कले कुण? ज्ञान विना जिनरायजी. ।। ४ ।।
सुगुण सनेही महेर करो मुज, सुप्रसन्न होई जिणंदजी;
पभणे “केसर’ धर्म तुज नामे आणंदजी. ॥५॥`,
      sa: "",
      en: `Dharma jinesara suna paramesara, tuja guna kema kahaayajee;
Tuja vachane tuja roopa janaaye, avara na koee upaayajee.||1||
Taahare mitra ane shatru sama, arihanta tun hee gavaayajee;
Rupa svarupa anupama tun jina, to hee arupee kahaayajee. ||2||
Lobha nahi tujamaanhi to pana, saghalaa guna ten leedhajee;
Tun niraagee pana ten raagee, bhakta tanaa mana keedhajee. ||3||
Nahi maayaa tujamaan jinaraayaa, pana tuja vasha jaga thaayajee;
Hee sakala tuja akala kale kuna? jnyaana vinaa jinaraayajee. || 4 ||
Suguna sanehee mahera karo muja, suprasanna hoee jinandajee;
Pabhane “kesara’ dharma tuja naame aanandajee. ||5||`,
    },
  },
  {
    id: "dhruvapad-rami-ho-swami-mahara",
    type: "bhajan",
    title: {
      gu: "ધ્રુવપદ રામી! હો સ્વામી! માહરા, નિસકામી! ગુણરાય સુજ્ઞાની",
      hi: "ध्रुवपद रामी! हो स्वामी! माहरा, निसकामी! गुणराय सुज्ञानी",
      sa: "",
      en: "Dhruvapad Rami Ho Swami Mahara",
    },
    text: {
      gu: `ધ્રુવપદ રામી! હો સ્વામી! માહરા, નિસકામી! ગુણરાય સુજ્ઞાની,
નિજગુણ કામી! હો પામી તું ધણી, ધ્રુવ આરામી! હો થાય સુજ્ઞાની||૧||
. સર્વવ્યાપી કહે સર્વ જાણગપણે, પર પરિણમન સ્વરુપ સુજ્ઞાની
; પર રુપે કરી તત્ત્વપણું નહીં, સ્વ-સત્તા ચિદ્રુપ સુજ્ઞાની.||૨||
જ્ઞેય અનેકે હો જ્ઞાન અનેકતા, જલ ભાજન રવિ જેમ સુજ્ઞાની;
દ્રવ્ય એકત્વપણે ગુણએકતા, નિજપદ રમતા હો ખેમ સુજ્ઞાની.||૩||
પરક્ષેત્રે ગત જ્ઞેયને જાણવે, પર ક્ષેત્રે જ્ઞાન સુજ્ઞાની;
અસ્તિપણું નિજ ક્ષેત્રે તુમે કહ્યું, નિર્મળતા ગુણ માન સુજ્ઞાની.||૪||
જ્ઞેય વિનાશે હો જ્ઞાન વિનશ્વરું, કાલ પ્રમાણે રે થાય સુજ્ઞાની;
સ્વકાલે કરી સ્વસત્તા સદા, તે પર રીતે ન જાય સુજ્ઞાની.||૫||
પરભાવે કરી પરતા પામતાં, સ્વસત્તા થિર ઠાણ સુજ્ઞાની;
આત્મ પરમાં નહિ, કિમ સહુનો રે જાણ સુજ્ઞાની.||૬||
અગુરુલઘુ નિજ ગુણને દેખતાં, દ્રવ્ય સકલ દેખંત સુજ્ઞાની
સાધારણ ગુણની સાધર્મ્સતા, દર્પણ જલને દૃષ્ટાંત સુજ્ઞાની.||૭||
શ્રી પારસ જિન પારસ રસ સમો, પણ ઈહાં પારસ નાંહિ સુજ્ઞાની;
પૂરણ રસિયો હો નિજગુણ પરસન્નો, “આનંદઘન’ મુજમાંહિ સુજ્ઞાની.||૮||`,
      hi: `ध्रुवपद रामी! हो स्वामी! माहरा, निसकामी! गुणराय सुज्ञानी,
निजगुण कामी! हो पामी तुं धणी, ध्रुव आरामी! हो थाय सुज्ञानी||१||
. सर्वव्यापी कहे सर्व जाणगपणे, पर परिणमन स्वरुप सुज्ञानी
; पर रुपे करी तत्त्वपणुं नहीं, स्व-सत्ता चिद्रुप सुज्ञानी.||२||
ज्ञेय अनेके हो ज्ञान अनेकता, जल भाजन रवि जेम सुज्ञानी;
द्रव्य एकत्वपणे गुणएकता, निजपद रमता हो खेम सुज्ञानी.||३||
परक्षेत्रे गत ज्ञेयने जाणवे, पर क्षेत्रे ज्ञान सुज्ञानी;
अस्तिपणुं निज क्षेत्रे तुमे कह्युं, निर्मळता गुण मान सुज्ञानी.||४||
ज्ञेय विनाशे हो ज्ञान विनश्वरुं, काल प्रमाणे रे थाय सुज्ञानी;
स्वकाले करी स्वसत्ता सदा, ते पर रीते न जाय सुज्ञानी.||५||
परभावे करी परता पामतां, स्वसत्ता थिर ठाण सुज्ञानी;
आत्म परमां नहि, किम सहुनो रे जाण सुज्ञानी.||६||
अगुरुलघु निज गुणने देखतां, द्रव्य सकल देखंत सुज्ञानी
साधारण गुणनी साधर्म्सता, दर्पण जलने दृष्टांत सुज्ञानी.||७||
श्री पारस जिन पारस रस समो, पण ईहां पारस नांहि सुज्ञानी;
पूरण रसियो हो निजगुण परसन्नो, “आनंदघन’ मुजमांहि सुज्ञानी.||८||`,
      sa: "",
      en: `Dhruvapada raamee! ho svaamee! maaharaa, nisakaamee! gunaraaya sujnyaanee,
Nijaguna kaamee! ho paamee tun dhanee, dhruva aaraamee! ho thaaya sujnyaanee||1||
. sarvavyaapee kahe sarva jaanagapane, para parinamana svarupa sujnyaanee
; para rupe karee tattvapanun naheen, sva-sattaa chidrupa sujnyaanee.||2||
Jnyeya aneke ho jnyaana anekataa, jala bhaajana ravi jema sujnyaanee;
Dravya ekatvapane gunaekataa, nijapada ramataa ho khema sujnyaanee.||3||
Parakshetre gata jnyeyane jaanave, para kshetre jnyaana sujnyaanee;
Astipanun nija kshetre tume kahyun, nirmalataa guna maana sujnyaanee.||4||
Jnyeya vinaashe ho jnyaana vinashvarun, kaala pramaane re thaaya sujnyaanee;
Svakaale karee svasattaa sadaa, te para reete na jaaya sujnyaanee.||5||
Parabhaave karee parataa paamataan, svasattaa thira thaana sujnyaanee;
Aatma paramaan nahi, kima sahuno re jaana sujnyaanee.||6||
Agurulaghu nija gunane dekhataan, dravya sakala dekhanta sujnyaanee
Saadhaarana gunanee saadharmsataa, darpana jalane drushtaanta sujnyaanee.||7||
Shree paarasa jina paarasa rasa samo, pana eehaan paarasa naanhi sujnyaanee;
Poorana rasiyo ho nijaguna parasanno, “aanandaghana’ mujamaanhi sujnyaanee.||8||`,
    },
  },
  {
    id: "dil-bhari-darishan-pau-ke",
    type: "bhajan",
    title: {
      gu: "દિલ ભરી દરિશન પાઉં કે, પ્રભુકો રૂપ બન્યો છે",
      hi: "दिल भरी दरिशन पाउं के, प्रभुको रूप बन्यो छे",
      sa: "",
      en: "Dil Bhari Darishan Pau Ke",
    },
    text: {
      gu: `દિલ ભરી દરિશન પાઉં કે, પ્રભુકો રૂપ બન્યો છે;
પદ્માનંદન હરિકૃત વંદન, ચરણ કમલ બલિ જાઉં. ॥१॥
નીલકમલ દલ કોમલ વાને,
સેવન મેં ચિત્ત લાઉં.||૨||
ચૂની ચૂની કલિયા ચંપક કી રે,
હાથ સે માલ બનાવું. ॥३॥
શ્રી મુનિસુવ્રત સુવ્રત સેવી,
નાથ સમાન કહાઉં. ॥४॥
“ન્યાયસાગર’ પ્રભુ સુવ્રત સેવા,
નિયત ફલે દિલ ભાઉં.||૫||`,
      hi: `दिल भरी दरिशन पाउं के, प्रभुको रूप बन्यो छे;
पद्मानंदन हरिकृत वंदन, चरण कमल बलि जाउं. ॥१॥
नीलकमल दल कोमल वाने,
सेवन में चित्त लाउं.||२||
चूनी चूनी कलिया चंपक की रे,
हाथ से माल बनावुं. ॥३॥
श्री मुनिसुव्रत सुव्रत सेवी,
नाथ समान कहाउं. ॥४॥
“न्यायसागर’ प्रभु सुव्रत सेवा,
नियत फले दिल भाउं.||५||`,
      sa: "",
      en: `Dila bharee darishana paaun ke, prabhuko roopa banyo chhe;
Padmaanandana harikruta vandana, charana kamala bali jaaun. ||1||
Neelakamala dala komala vaane,
Sevana men chitta laaun.||2||
Choonee choonee kaliyaa chanpaka kee re,
Haatha se maala banaavun. ||3||
Shree munisuvrata suvrata sevee,
Naatha samaana kahaaun. ||4||
“nyaayasaagara’ prabhu suvrata sevaa,
Niyata phale dila bhaaun.||5||`,
    },
  },
  {
    id: "dilbhar-darshan-pau-re",
    type: "bhajan",
    title: {
      gu: "દિલભર દરશન પાઉં રે…",
      hi: "दिलभर दरशन पाउं रे…",
      sa: "",
      en: "Dilbhar Darshan Pau Re",
    },
    text: {
      gu: `દિલભર દરશન પાઉં રે…
પ્રભુજી કી જ્યોત બની હૈ અનુપમ, નિરખત હર્ષિત થાઉં. પ્રજ।। ૧ ।।
શ્રી નમનાથ વદનકી શોભા,
આભા કિણ મેં ન પાઉં. ५०॥२॥
શીતલવાણી અંગ શીતલ હૈ,
શીતલ દરિશણ ચાહું.५०॥३||
પ્રભુ મુખ નિરખત રોહિણી વલ્લભ,
શીતલ ચંદ ઠરાઉં.||૪||
ધરંતે શીતલ પંકજ,
દ્રવ્ય સે ભાવ બનાઉં રે. ५०॥૫॥
સમકિત સુંદર મંદિર ઘટ મેં,
પ્રભુ ગુણ ઘંટ બજાઉં રે. ५०॥૬॥
શ્રી “શુભવીર’ કહે સુણસુંદરી!
કેવલ ભાવ જગાઉં રે. ५०॥७॥`,
      hi: `दिलभर दरशन पाउं रे…
प्रभुजी की ज्योत बनी है अनुपम, निरखत हर्षित थाउं. प्रज।। १ ।।
श्री नमनाथ वदनकी शोभा,
आभा किण में न पाउं. ५०॥२॥
शीतलवाणी अंग शीतल है,
शीतल दरिशण चाहुं.५०॥३||
प्रभु मुख निरखत रोहिणी वल्लभ,
शीतल चंद ठराउं.||४||
धरंते शीतल पंकज,
द्रव्य से भाव बनाउं रे. ५०॥५॥
समकित सुंदर मंदिर घट में,
प्रभु गुण घंट बजाउं रे. ५०॥६॥
श्री “शुभवीर’ कहे सुणसुंदरी!
केवल भाव जगाउं रे. ५०॥७॥`,
      sa: "",
      en: `Dilabhara darashana paaun re…
Prabhujee kee jyota banee hai anupama, nirakhata harshita thaaun. praja|| 1 ||
Shree namanaatha vadanakee shobhaa,
Aabhaa kina men na paaun. 50||2||
Sheetalavaanee anga sheetala hai,
Sheetala darishana chaahun.50||3||
Prabhu mukha nirakhata rohinee vallabha,
Sheetala chanda tharaaun.||4||
Dharante sheetala pankaja,
Dravya se bhaava banaaun re. 50||5||
Samakita sundara mandira ghata men,
Prabhu guna ghanta bajaaun re. 50||6||
Shree “shubhaveera’ kahe sunasundaree!
Kevala bhaava jagaaun re. 50||7||`,
    },
  },
  {
    id: "dilranjan-jinrajji-re",
    type: "bhajan",
    title: {
      gu: "દિલરંજન જિનરાજજી રે, સુમતિનાથ જગ સ્વામી સલુણા",
      hi: "दिलरंजन जिनराजजी रे, सुमतिनाथ जग स्वामी सलुणा",
      sa: "",
      en: "Dilranjan Jinrajji Re",
    },
    text: {
      gu: `દિલરંજન જિનરાજજી રે, સુમતિનાથ જગ સ્વામી સલુણા;
જગતારક જગહિતકરું રે, ભવિજન મન વિશ્રામી સલુણા.||૧||
મુજ ચિત્ત લાગ્યું તુમ થકી રે, કિમ રહો ન્યારા દેવ સલુણા;
સમરથ જાણી સાહિબા રે, કીજે પદકજ સેવ સલુણા.||૨||
દાયક નામ ધરાવીને રે, વળી ધરો કૃપણતા દોષ સલુણા;
ન વધે જગ જસ ઈમ કર્યા રે, તિણે પ્રભુ દીજે સંતોષ સલુણા. ॥૩॥
કરુણાસાગર દીજીએ રે, રત્નત્રયી અભિરામ સલુણા;
લલચાવીને આપતાં રે, જલદ હુઓ જુઓ શ્યામ સલુણા.||૪||
તુમે કેઈ જીવને રે, અપરાધી સુખી કીધ સલુણા;
તાર્યા શિવસુખ આપ્યું ભક્તને રે, તેણે મને શું દીધ સલુણા.||૫||
એક થકી દૂર રહોરે, એકને દિયો સુખ કાજ સલુણા;
ઈમ કરતાં તારકપણું રે, ન રહે ગરીબ નિવાજ સલુણા.||૬||
સો વાતે એક વાતડી રે, સુણજો ત્રિભુવનનાથ સલુણા;
અમૃત પદ દેઈ ‘રંગ’ ને, તારજો ઝાલી હાથ સલુણા.||૭||`,
      hi: `दिलरंजन जिनराजजी रे, सुमतिनाथ जग स्वामी सलुणा;
जगतारक जगहितकरुं रे, भविजन मन विश्रामी सलुणा.||१||
मुज चित्त लाग्युं तुम थकी रे, किम रहो न्यारा देव सलुणा;
समरथ जाणी साहिबा रे, कीजे पदकज सेव सलुणा.||२||
दायक नाम धरावीने रे, वळी धरो कृपणता दोष सलुणा;
न वधे जग जस ईम कर्या रे, तिणे प्रभु दीजे संतोष सलुणा. ॥३॥
करुणासागर दीजीए रे, रत्नत्रयी अभिराम सलुणा;
ललचावीने आपतां रे, जलद हुओ जुओ श्याम सलुणा.||४||
तुमे केई जीवने रे, अपराधी सुखी कीध सलुणा;
तार्या शिवसुख आप्युं भक्तने रे, तेणे मने शुं दीध सलुणा.||५||
एक थकी दूर रहोरे, एकने दियो सुख काज सलुणा;
ईम करतां तारकपणुं रे, न रहे गरीब निवाज सलुणा.||६||
सो वाते एक वातडी रे, सुणजो त्रिभुवननाथ सलुणा;
अमृत पद देई ‘रंग’ ने, तारजो झाली हाथ सलुणा.||७||`,
      sa: "",
      en: `Dilaranjana jinaraajajee re, sumatinaatha jaga svaamee salunaa;
Jagataaraka jagahitakarun re, bhavijana mana vishraamee salunaa.||1||
Muja chitta laagyun tuma thakee re, kima raho nyaaraa deva salunaa;
Samaratha jaanee saahibaa re, keeje padakaja seva salunaa.||2||
Daayaka naama dharaaveene re, valee dharo krupanataa dosha salunaa;
Na vadhe jaga jasa eema karyaa re, tine prabhu deeje santosha salunaa. ||3||
Karunaasaagara deejeee re, ratnatrayee abhiraama salunaa;
Lalachaaveene aapataan re, jalada huo juo shyaama salunaa.||4||
Tume keee jeevane re, aparaadhee sukhee keedha salunaa;
Taaryaa shivasukha aapyun bhaktane re, tene mane shun deedha salunaa.||5||
Eka thakee doora rahore, ekane diyo sukha kaaja salunaa;
Eema karataan taarakapanun re, na rahe gareeba nivaaja salunaa.||6||
So vaate eka vaatadee re, sunajo tribhuvananaatha salunaa;
Amruta pada deee ‘ranga’ ne, taarajo jhaalee haatha salunaa.||7||`,
    },
  },
  {
    id: "din-dukhiyano-tu-che-beli",
    type: "bhajan",
    title: {
      gu: "દીન દુખિયાનો તું છે બેલી, તું છે તારણહાર",
      hi: "दीन दुखियानो तुं छे बेली, तुं छे तारणहार",
      sa: "",
      en: "Din Dukhiyano Tu Che Beli",
    },
    text: {
      gu: `દીન દુખિયાનો તું છે બેલી, તું છે તારણહાર,
તારા મહિમાનો નહીં પાર;
રાજપાટને વૈભવ છોડી, છોડી દીધો સંસાર.તારા૦ ||૧ ।।
ચંડકૌશિયો ડશિયો જ્યારે, દૂધની ધારા પગથી નીકળે;
વિષને બદલે દૂધ જોઈને, ચંડકૌશિયો આવ્યો શરણે;
ચંડકૌશિયાને તેં તારી, કીધો ઘણો ઉપકાર.||૨||
કાનમાં ખીલા ઠોક્યા જ્યારે, થઈ વેદના પ્રભુને ભારે;
તોએ પ્રભુજી શાંત વિચારે, ગોવાળનો નહીં વાંક લગારે;
ક્ષમા તે જીવોનો, તારી દીધો સંસાર. તારા૦ ||૩||
મહાવીર મહાવીર ગૌતમ પુકારે, આંખેથી આંસુની ધારા વહાવે;
ક્યાં ગયા એકલા છોડી મુજને, હવે નથી કોઈ જગમાં મારે;
પશ્ચાત્તાપ કરતાં કરતાં, ઊપન્યું કેવલજ્ઞાન. ता२८०॥४॥
‘જ્ઞાનવિમલ’ ગુરુ વયણે આજે, ગુણ તમારા ભાવે ગાવે;
થઈ સુકાની તું પ્રભુ આવે, ભવજલ નૈયા પાર ઉતારે;
અરજ અમારી દિલમાં કરીએ વંદન વારંવાર. તારા૦ ।।૫`,
      hi: `दीन दुखियानो तुं छे बेली, तुं छे तारणहार,
तारा महिमानो नहीं पार;
राजपाटने वैभव छोडी, छोडी दीधो संसार.तारा० ||१ ।।
चंडकौशियो डशियो ज्यारे, दूधनी धारा पगथी नीकळे;
विषने बदले दूध जोईने, चंडकौशियो आव्यो शरणे;
चंडकौशियाने तें तारी, कीधो घणो उपकार.||२||
कानमां खीला ठोक्या ज्यारे, थई वेदना प्रभुने भारे;
तोए प्रभुजी शांत विचारे, गोवाळनो नहीं वांक लगारे;
क्षमा ते जीवोनो, तारी दीधो संसार. तारा० ||३||
महावीर महावीर गौतम पुकारे, आंखेथी आंसुनी धारा वहावे;
क्यां गया एकला छोडी मुजने, हवे नथी कोई जगमां मारे;
पश्चात्ताप करतां करतां, ऊपन्युं केवलज्ञान. ता२८०॥४॥
‘ज्ञानविमल’ गुरु वयणे आजे, गुण तमारा भावे गावे;
थई सुकानी तुं प्रभु आवे, भवजल नैया पार उतारे;
अरज अमारी दिलमां करीए वंदन वारंवार. तारा० ।।५`,
      sa: "",
      en: `Deena dukhiyaano tun chhe belee, tun chhe taaranahaara,
Taaraa mahimaano naheen paara;
Raajapaatane vaibhava chhodee, chhodee deedho sansaara.taaraa0 ||1 ||
Chandakaushiyo dashiyo jyaare, doodhanee dhaaraa pagathee neekale;
Vishane badale doodha joeene, chandakaushiyo aavyo sharane;
Chandakaushiyaane ten taaree, keedho ghano upakaara.||2||
Kaanamaan kheelaa thokyaa jyaare, thaee vedanaa prabhune bhaare;
Toe prabhujee shaanta vichaare, govaalano naheen vaanka lagaare;
Kshamaa te jeevono, taaree deedho sansaara. taaraa0 ||3||
Mahaaveera mahaaveera gautama pukaare, aankhethee aansunee dhaaraa vahaave;
Kyaan gayaa ekalaa chhodee mujane, have nathee koee jagamaan maare;
Pashchaattaapa karataan karataan, oopanyun kevalajnyaana. ता280||4||
‘jnyaanavimala’ guru vayane aaje, guna tamaaraa bhaave gaave;
Thaee sukaanee tun prabhu aave, bhavajala naiyaa paara utaare;
Araja amaaree dilamaan kareee vandana vaaranvaara. taaraa0 ||5`,
    },
  },
  {
    id: "ditho-suvidhi-jinand",
    type: "bhajan",
    title: {
      gu: "દીઠો સુવિધિ જિણંદ, સમાધિ રસે ભર્યો, હો લાલ",
      hi: "दीठो सुविधि जिणंद, समाधि रसे भर्यो, हो लाल",
      sa: "",
      en: "Ditho Suvidhi Jinand",
    },
    text: {
      gu: `દીઠો સુવિધિ જિણંદ, સમાધિ રસે ભર્યો, હો લાલ
ભાસ્યો આત્મસ્વરુપ, અનાદિનો વિસર્યો; હો લાલ
સકળ વિભાવ ઉપાધિ, થકી મને ઓસર્યો, હો લાલ
સત્તા સાધન માર્ગ ભણી એ સંચર્યો. હો લાલ||૧||
તુમ પ્રભુ જાણંગ રીતિ, સર્વ જગ દેખતાં, હો લાલ
નિજ સત્તાએ શુદ્ધ, સહુને લેખતાં; હો લાલ
પર પરિણતિ અદ્વેષપણે, ઉવેખતાં, હો લાલ
ભોગ્યપણે નિજ શક્તિ, અનંત ગવેષતા. હો લાલ ||૨||
દાનાદિક નિજ ભાવ, હતા જે પરવશા, હો લાલ
તે નિજ સન્મુખ ભાવ, ગ્રહે લહી તુજ દશા; હો લાલ
પ્રભુનો અદ્ભૂત યોગ, સ્વરુપ તણી રસા, હો લાલ
ભાસે વાસે તાસ, જાસ ગુણ તુજ જિસા. હો લાલ||૩||
મોહાદિકની ઘૂમી, અનાદિની ઊતરે, હો લાલ
અમલ અખંડ અલિપ્ત, સ્વભાવ જ સાંભરે; હો લાલ
તત્ત્વરમણ શુચિ ધ્યાન, ભણી જે આદરે, હો લાલ
તે સમતારસ ધામ, સ્વામી મુદ્રા વરે. હો લાલ.||૪||
પ્રભુ! છો ત્રિભુવન નાથ, દાસ હું છું તાહરો, હો લાલ
કરુણાનિધિ અભિલાષ, અછે મુજ એ ખરો; હો લાલ
આતમ વસ્તુ સ્વભાવ, સદા મુજ સાંભરો, હો લાલ
ભાસન વાસન એહ, ચરણ ધ્યાને ધરો. હો લાલ||૫||
પ્રભુ મુદ્રાને યોગ, પ્રભુ! પ્રભુતા લખે, હો લાલ
દ્રવ્ય તણે સાધર્મ્સ, સ્વસંપત્તિ ઓળખે; હો લાલ
ઓળખતા બહુમાન, સહિત રુચિ પણ વધે, હો લાલ
રુચિ અનુયાયી વીર્ય, ચરણ ધારા સધે. હો લાલ||૬||
ક્ષાયોપશમિક ગુણ સર્વ, થયા તુજ ગુણ રસી, હો લાલ
સત્તા સાધન શક્તિ, વ્યક્તતા ઉલ્લસી; હો લાલ
હવે સંપૂરણ સિદ્ધિ તણી શી વાર છે, હો લાલ
‘દેવચંદ્ર’ જિનરાજ, જગત આધાર છે. હો લાલ||૭||`,
      hi: `दीठो सुविधि जिणंद, समाधि रसे भर्यो, हो लाल
भास्यो आत्मस्वरुप, अनादिनो विसर्यो; हो लाल
सकळ विभाव उपाधि, थकी मने ओसर्यो, हो लाल
सत्ता साधन मार्ग भणी ए संचर्यो. हो लाल||१||
तुम प्रभु जाणंग रीति, सर्व जग देखतां, हो लाल
निज सत्ताए शुद्ध, सहुने लेखतां; हो लाल
पर परिणति अद्वेषपणे, उवेखतां, हो लाल
भोग्यपणे निज शक्ति, अनंत गवेषता. हो लाल ||२||
दानादिक निज भाव, हता जे परवशा, हो लाल
ते निज सन्मुख भाव, ग्रहे लही तुज दशा; हो लाल
प्रभुनो अद्भूत योग, स्वरुप तणी रसा, हो लाल
भासे वासे तास, जास गुण तुज जिसा. हो लाल||३||
मोहादिकनी घूमी, अनादिनी ऊतरे, हो लाल
अमल अखंड अलिप्त, स्वभाव ज सांभरे; हो लाल
तत्त्वरमण शुचि ध्यान, भणी जे आदरे, हो लाल
ते समतारस धाम, स्वामी मुद्रा वरे. हो लाल.||४||
प्रभु! छो त्रिभुवन नाथ, दास हुं छुं ताहरो, हो लाल
करुणानिधि अभिलाष, अछे मुज ए खरो; हो लाल
आतम वस्तु स्वभाव, सदा मुज सांभरो, हो लाल
भासन वासन एह, चरण ध्याने धरो. हो लाल||५||
प्रभु मुद्राने योग, प्रभु! प्रभुता लखे, हो लाल
द्रव्य तणे साधर्म्स, स्वसंपत्ति ओळखे; हो लाल
ओळखता बहुमान, सहित रुचि पण वधे, हो लाल
रुचि अनुयायी वीर्य, चरण धारा सधे. हो लाल||६||
क्षायोपशमिक गुण सर्व, थया तुज गुण रसी, हो लाल
सत्ता साधन शक्ति, व्यक्तता उल्लसी; हो लाल
हवे संपूरण सिद्धि तणी शी वार छे, हो लाल
‘देवचंद्र’ जिनराज, जगत आधार छे. हो लाल||७||`,
      sa: "",
      en: `Deetho suvidhi jinanda, samaadhi rase bharyo, ho laala
Bhaasyo aatmasvarupa, anaadino visaryo; ho laala
Sakala vibhaava upaadhi, thakee mane osaryo, ho laala
Sattaa saadhana maarga bhanee e sancharyo. ho laala||1||
Tuma prabhu jaananga reeti, sarva jaga dekhataan, ho laala
Nija sattaae shuddha, sahune lekhataan; ho laala
Para parinati adveshapane, uvekhataan, ho laala
Bhogyapane nija shakti, ananta gaveshataa. ho laala ||2||
Daanaadika nija bhaava, hataa je paravashaa, ho laala
Te nija sanmukha bhaava, grahe lahee tuja dashaa; ho laala
Prabhuno adbhoota yoga, svarupa tanee rasaa, ho laala
Bhaase vaase taasa, jaasa guna tuja jisaa. ho laala||3||
Mohaadikanee ghoomee, anaadinee ootare, ho laala
Amala akhanda alipta, svabhaava ja saanbhare; ho laala
Tattvaramana shuchi dhyaana, bhanee je aadare, ho laala
Te samataarasa dhaama, svaamee mudraa vare. ho laala.||4||
Prabhu! chho tribhuvana naatha, daasa hun chhun taaharo, ho laala
Karunaanidhi abhilaasha, achhe muja e kharo; ho laala
Aatama vastu svabhaava, sadaa muja saanbharo, ho laala
Bhaasana vaasana eha, charana dhyaane dharo. ho laala||5||
Prabhu mudraane yoga, prabhu! prabhutaa lakhe, ho laala
Dravya tane saadharmsa, svasanpatti olakhe; ho laala
Olakhataa bahumaana, sahita ruchi pana vadhe, ho laala
Ruchi anuyaayee veerya, charana dhaaraa sadhe. ho laala||6||
Kshaayopashamika guna sarva, thayaa tuja guna rasee, ho laala
Sattaa saadhana shakti, vyaktataa ullasee; ho laala
Have sanpoorana siddhi tanee shee vaara chhe, ho laala
‘devachandra’ jinaraaja, jagata aadhaara chhe. ho laala||7||`,
    },
  },
  {
    id: "diti-hi-prabhu-diti-jagaguru",
    type: "bhajan",
    title: {
      gu: "દીઠી હો પ્રભુ દીઠી જગગુરુ તુજ રે",
      hi: "दीठी हो प्रभु दीठी जगगुरु तुज रे",
      sa: "",
      en: "Diti Hi Prabhu Diti Jagaguru",
    },
    text: {
      gu: `દીઠી હો પ્રભુ દીઠી જગગુરુ તુજ રે,
મૂરતિ હો પ્રભુ મૂરતિ મોહનવેલડી જી;
મીઠી હો પ્રભુ મીઠી તાહરી વાણ રે,
હો પ્રભુ લાગે જૈસી શેલડીજી.||૧||
જાણું હો પ્રભુ જાણું જન્મ કયત્થ રે,
જો હું હો પ્રભુ જો હું તુમ સાથે મિલ્યોજી;
સુરમણિ હો પ્રભુ સુરમણિ પામ્યો હત્થ રે,
આંગણ હો પ્રભુ આંગણ મુજ સુરતરુ ફલ્યોજી.||૨||
જાગ્યા હો પ્રભુ જાગ્યા પુણ્ય અંકુર રે,
માંગ્યા હો પ્રભુ મુહ માંગ્યા પાસા ઢલ્યાજી;
વૂઠા હો પ્રભુ વૂઠા અમીરસ મેહ રે,
નાઠા હો પ્રભુ નાઠા અશુભ શુભ દિન વલ્યાજી.||૩||
ભૂખ્યાં હો પ્રભુ ભૂખ્યાં મળ્યાં ધૃતપૂર રે,
તરસ્યા હો પ્રભુ તરસ્યા દિવ્ય ઉદક મિલ્યાંજી;
થાક્યા હો પ્રભુ થાક્યા મળ્યા સુખપાલ રે;
ચાહતા હો પ્રભુ ચાહતા સજ્જન હેજે હલ્યાજી.||૪||
દીવો હો પ્રભુ દીવો, નિશા વન ગેહ રે;
શાખી હો પ્રભુ શાખી થળે, જળે નૌ મિલીજી,
કલિયુગે હો પ્રભુ કલિયુગે દુલહો તુજ રે;
દરિસણ હો પ્રભુ દરિસણ લહ્યું આશા ફળીજી.||૫||
વાચક હો પ્રભુ વાચક ‘યશ’ તુમ દાસ રે;
વિનવે હો પ્રભુ વિનવે અભિનંદન સુણોજી,
કદીયે હો પ્રભુ કદીયે મદેશો છેહ;
દેજો હો પ્રભુ દેજો સુખ દરિસન તણોજી.||૬||`,
      hi: `दीठी हो प्रभु दीठी जगगुरु तुज रे,
मूरति हो प्रभु मूरति मोहनवेलडी जी;
मीठी हो प्रभु मीठी ताहरी वाण रे,
हो प्रभु लागे जैसी शेलडीजी.||१||
जाणुं हो प्रभु जाणुं जन्म कयत्थ रे,
जो हुं हो प्रभु जो हुं तुम साथे मिल्योजी;
सुरमणि हो प्रभु सुरमणि पाम्यो हत्थ रे,
आंगण हो प्रभु आंगण मुज सुरतरु फल्योजी.||२||
जाग्या हो प्रभु जाग्या पुण्य अंकुर रे,
मांग्या हो प्रभु मुह मांग्या पासा ढल्याजी;
वूठा हो प्रभु वूठा अमीरस मेह रे,
नाठा हो प्रभु नाठा अशुभ शुभ दिन वल्याजी.||३||
भूख्यां हो प्रभु भूख्यां मळ्यां धृतपूर रे,
तरस्या हो प्रभु तरस्या दिव्य उदक मिल्यांजी;
थाक्या हो प्रभु थाक्या मळ्या सुखपाल रे;
चाहता हो प्रभु चाहता सज्जन हेजे हल्याजी.||४||
दीवो हो प्रभु दीवो, निशा वन गेह रे;
शाखी हो प्रभु शाखी थळे, जळे नौ मिलीजी,
कलियुगे हो प्रभु कलियुगे दुलहो तुज रे;
दरिसण हो प्रभु दरिसण लह्युं आशा फळीजी.||५||
वाचक हो प्रभु वाचक ‘यश’ तुम दास रे;
विनवे हो प्रभु विनवे अभिनंदन सुणोजी,
कदीये हो प्रभु कदीये मदेशो छेह;
देजो हो प्रभु देजो सुख दरिसन तणोजी.||६||`,
      sa: "",
      en: `Deethee ho prabhu deethee jagaguru tuja re,
Moorati ho prabhu moorati mohanaveladee jee;
Meethee ho prabhu meethee taaharee vaana re,
Ho prabhu laage jaisee sheladeejee.||1||
Jaanun ho prabhu jaanun janma kayattha re,
Jo hun ho prabhu jo hun tuma saathe milyojee;
Suramani ho prabhu suramani paamyo hattha re,
Aangana ho prabhu aangana muja surataru phalyojee.||2||
Jaagyaa ho prabhu jaagyaa punya ankura re,
Maangyaa ho prabhu muha maangyaa paasaa dhalyaajee;
Voothaa ho prabhu voothaa ameerasa meha re,
Naathaa ho prabhu naathaa ashubha shubha dina valyaajee.||3||
Bhookhyaan ho prabhu bhookhyaan malyaan dhrutapoora re,
Tarasyaa ho prabhu tarasyaa divya udaka milyaanjee;
Thaakyaa ho prabhu thaakyaa malyaa sukhapaala re;
Chaahataa ho prabhu chaahataa sajjana heje halyaajee.||4||
Deevo ho prabhu deevo, nishaa vana geha re;
Shaakhee ho prabhu shaakhee thale, jale nau mileejee,
Kaliyuge ho prabhu kaliyuge dulaho tuja re;
Darisana ho prabhu darisana lahyun aashaa phaleejee.||5||
Vaachaka ho prabhu vaachaka ‘yasha’ tuma daasa re;
Vinave ho prabhu vinave abhinandana sunojee,
Kadeeye ho prabhu kadeeye madesho chheha;
Dejo ho prabhu dejo sukha darisana tanojee.||6||`,
    },
  },
  {
    id: "dukh-dohag-dure-tadya-re",
    type: "bhajan",
    title: {
      gu: "દુઃખ દોહગ દૂરે ટળ્યાં રે, સુખ સંપદશું ભેટ",
      hi: "दुःख दोहग दूरे टळ्यां रे, सुख संपदशुं भेट",
      sa: "",
      en: "Dukh Dohag Dure Tadya Re",
    },
    text: {
      gu: `દુઃખ દોહગ દૂરે ટળ્યાં રે, સુખ સંપદશું ભેટ;
ધીંગ ધણી માથે કિયો રે, કુણ ગંજે નર ખેટ?
વિમલજિન! દીઠાં લોયણ આજ,‌મારા સિધ્યાં વાંછિત કાજ. ।।૧ ।।
ચરણ કમલ કમલા વસે રે,.નિર્મલ થિર પદ દેખ;
સમલ અથિર પદ પરિહરી રે, પંકજ પામર પેખ.||૨||
મુજ મન તુજ પદ પંકજે રે, લીનો ગુણ મકરંદ;
રંક ગણે મંદર ધરા રે,‌‌ ઇંદ ચંદ નાગિંદ.||૩||
સાહિબ સમરથ તું ધણી રે, પામ્યો પરમ ઉદાર;
મન વિસરામી વાલહોરે, આતમચો આધાર.||૪||
દરિસણ દીઠે જિનતણું રે, સંશય ન રહેવેધ;
દિનકર કરભર પ્રસરતા રે, અંધકાર પ્રતિષેધ.||૫||
અમીય ભરી મૂરતિ રચી રે, ઉપમા ન ઘટે કોય;
શાંત સુધારસ ઝીલતી રે, નીરખત તૃપ્તિ ન હોય. ||૬||
એક સેવક તણી રે, અવધારો જિનદેવ;
કૃપા કરી મુજ દીજિયે રે, “આનંદઘન’ પદ.||૭||`,
      hi: `दुःख दोहग दूरे टळ्यां रे, सुख संपदशुं भेट;
धींग धणी माथे कियो रे, कुण गंजे नर खेट?
विमलजिन! दीठां लोयण आज,‌मारा सिध्यां वांछित काज. ।।१ ।।
चरण कमल कमला वसे रे,.निर्मल थिर पद देख;
समल अथिर पद परिहरी रे, पंकज पामर पेख.||२||
मुज मन तुज पद पंकजे रे, लीनो गुण मकरंद;
रंक गणे मंदर धरा रे,‌‌ इंद चंद नागिंद.||३||
साहिब समरथ तुं धणी रे, पाम्यो परम उदार;
मन विसरामी वालहोरे, आतमचो आधार.||४||
दरिसण दीठे जिनतणुं रे, संशय न रहेवेध;
दिनकर करभर प्रसरता रे, अंधकार प्रतिषेध.||५||
अमीय भरी मूरति रची रे, उपमा न घटे कोय;
शांत सुधारस झीलती रे, नीरखत तृप्ति न होय. ||६||
एक सेवक तणी रे, अवधारो जिनदेव;
कृपा करी मुज दीजिये रे, “आनंदघन’ पद.||७||`,
      sa: "",
      en: `Dukha dohaga doore talyaan re, sukha sanpadashun bheta;
Dheenga dhanee maathe kiyo re, kuna ganje nara kheta?
Vimalajina! deethaan loyana aaja,‌maaraa sidhyaan vaanchhita kaaja. ||1 ||
Charana kamala kamalaa vase re,.nirmala thira pada dekha;
Samala athira pada pariharee re, pankaja paamara pekha.||2||
Muja mana tuja pada pankaje re, leeno guna makaranda;
Ranka gane mandara dharaa re,‌‌ inda chanda naaginda.||3||
Saahiba samaratha tun dhanee re, paamyo parama udaara;
Mana visaraamee vaalahore, aatamacho aadhaara.||4||
Darisana deethe jinatanun re, sanshaya na rahevedha;
Dinakara karabhara prasarataa re, andhakaara pratishedha.||5||
Ameeya bharee moorati rachee re, upamaa na ghate koya;
Shaanta sudhaarasa jheelatee re, neerakhata trupti na hoya. ||6||
Eka sevaka tanee re, avadhaaro jinadeva;
Krupaa karee muja deejiye re, “aanandaghana’ pada.||7||`,
    },
  },
  {
    id: "ek-var-bolo-mara-nath",
    type: "bhajan",
    title: {
      gu: "એકવાર બોલો મારાં અબોલડાં શાનાં લીધાં છે રાજ…",
      hi: "एकवार बोलो मारां अबोलडां शानां लीधां छे राज…",
      sa: "",
      en: "Ek Var Bolo Mara Nath",
    },
    text: {
      gu: `એકવાર બોલો મારાં અબોલડાં શાનાં લીધાં છે રાજ…
શાના લીધાં છે (૨) હૈયામાં રહી ગઈ હામ.॥१॥
સમુદ્રવિજય કુલદીપક,
પ્રભુજી શિવાદેવી કેરા નંદ. ॥२॥
આઠ ભવોની પ્રીત ગયા ચૂકી,
નવમેં વિસાર્યા કા નેમ. ॥३॥
જન જોડીને પ્રભુ જગતે આવ્યા,
સાથે મોરારિ ને લાવ્યા. ॥४॥
રાજુલ ત્યાગી ગયા ગિરનાર,
પશુડાંનાં સુણી પોકાર. ॥५॥
સયમ લઈ પ્રભુ મોક્ષે સિધાવ્યાં,
આવાગમન નિવાર. ||६॥
રાજુલ રાણી પ્રીત પુરાની,
મળ્યા જઈ મોક્ષને દ્વાર. ॥७॥
“માનવિજય” કહે વંદના હમારી,
આ ભવ પાર ઉતાર.॥८॥`,
      hi: `एकवार बोलो मारां अबोलडां शानां लीधां छे राज…
शाना लीधां छे (२) हैयामां रही गई हाम.॥१॥
समुद्रविजय कुलदीपक,
प्रभुजी शिवादेवी केरा नंद. ॥२॥
आठ भवोनी प्रीत गया चूकी,
नवमें विसार्या का नेम. ॥३॥
जन जोडीने प्रभु जगते आव्या,
साथे मोरारि ने लाव्या. ॥४॥
राजुल त्यागी गया गिरनार,
पशुडांनां सुणी पोकार. ॥५॥
सयम लई प्रभु मोक्षे सिधाव्यां,
आवागमन निवार. ||६॥
राजुल राणी प्रीत पुरानी,
मळ्या जई मोक्षने द्वार. ॥७॥
“मानविजय” कहे वंदना हमारी,
आ भव पार उतार.॥८॥`,
      sa: "",
      en: `Ekavaara bolo maaraan aboladaan shaanaan leedhaan chhe raaja…
Shaanaa leedhaan chhe (2) haiyaamaan rahee gaee haama.||1||
Samudravijaya kuladeepaka,
Prabhujee shivaadevee keraa nanda. ||2||
Aatha bhavonee preeta gayaa chookee,
Navamen visaaryaa kaa nema. ||3||
Jana jodeene prabhu jagate aavyaa,
Saathe moraari ne laavyaa. ||4||
Raajula tyaagee gayaa giranaara,
Pashudaannaan sunee pokaara. ||5||
Sayama laee prabhu mokshe sidhaavyaan,
Aavaagamana nivaara. ||6||
Raajula raanee preeta puraanee,
Malyaa jaee mokshane dvaara. ||7||
“maanavijaya” kahe vandanaa hamaaree,
Aa bhava paara utaara.||8||`,
    },
  },
  {
    id: "ekvisma-jin-aaglegi",
    type: "bhajan",
    title: {
      gu: "એકવીસમા જિન આગલેજી, અરજ કરું કરજોડ",
      hi: "एकवीसमा जिन आगलेजी, अरज करुं करजोड",
      sa: "",
      en: "Ekvisma Jin Aaglegi",
    },
    text: {
      gu: `એકવીસમા જિન આગલેજી, અરજ કરું કરજોડ;
આઠ અરિએ મુજ બાંધિયોજી, તે ભવ બંધન તોડ; પ્રભુજી!
પ્રેમ ધરીને આજ, અવધારો અરદાસ.||૧||
એ અરિથી અળગા રહ્યાજી, અવર ન દીસે દેવ;
તો કિમ તેહને યાચીએજી, કિમ કરું તેહની સેવ.||૨||
વિલાસ વિનોદમાંજી, લીન રહે સુર જેહ;
આપે અરિંગણ વશ પડ્યાજી, અવર ઉગારે કિમ તેહ.||૩||
છત હોય તિહાં યાચીએજી, અછતે કિમ સરે કાજ?
યોગ્યતા વિણ જાંચતાંજી, પોતે ગુમાવે લાજ.||૪||
નિશ્ચય છે મન માહરેજી, તુજથી પામીશ પાર;
પણ ભૂખ્યો ભોજન સમેજી, ભાણે ન ટકે લગાર.||૫||
તે માટે કહું તુમ ભણીજી, વેગે કીજે સાર;
આખર તુમહિ જ આપશોજી, તો શી કરો હવે વાર.||૬||
મોટાના મનમાં નહીંજી, અર્થી ઉતાવળો થાય;
શ્રી ખિમાવિજય ગુરુનામથીજી, જગ ‘જશ’ વાંછિત થાય.||૭||`,
      hi: `एकवीसमा जिन आगलेजी, अरज करुं करजोड;
आठ अरिए मुज बांधियोजी, ते भव बंधन तोड; प्रभुजी!
प्रेम धरीने आज, अवधारो अरदास.||१||
ए अरिथी अळगा रह्याजी, अवर न दीसे देव;
तो किम तेहने याचीएजी, किम करुं तेहनी सेव.||२||
विलास विनोदमांजी, लीन रहे सुर जेह;
आपे अरिंगण वश पड्याजी, अवर उगारे किम तेह.||३||
छत होय तिहां याचीएजी, अछते किम सरे काज?
योग्यता विण जांचतांजी, पोते गुमावे लाज.||४||
निश्चय छे मन माहरेजी, तुजथी पामीश पार;
पण भूख्यो भोजन समेजी, भाणे न टके लगार.||५||
ते माटे कहुं तुम भणीजी, वेगे कीजे सार;
आखर तुमहि ज आपशोजी, तो शी करो हवे वार.||६||
मोटाना मनमां नहींजी, अर्थी उतावळो थाय;
श्री खिमाविजय गुरुनामथीजी, जग ‘जश’ वांछित थाय.||७||`,
      sa: "",
      en: `Ekaveesamaa jina aagalejee, araja karun karajoda;
Aatha arie muja baandhiyojee, te bhava bandhana toda; prabhujee!
Prema dhareene aaja, avadhaaro aradaasa.||1||
E arithee alagaa rahyaajee, avara na deese deva;
To kima tehane yaacheeejee, kima karun tehanee seva.||2||
Vilaasa vinodamaanjee, leena rahe sura jeha;
Aape aringana vasha padyaajee, avara ugaare kima teha.||3||
Chhata hoya tihaan yaacheeejee, achhate kima sare kaaja?
Yogyataa vina jaanchataanjee, pote gumaave laaja.||4||
Nishchaya chhe mana maaharejee, tujathee paameesha paara;
Pana bhookhyo bhojana samejee, bhaane na take lagaara.||5||
Te maate kahun tuma bhaneejee, vege keeje saara;
Aakhara tumahi ja aapashojee, to shee karo have vaara.||6||
Motaanaa manamaan naheenjee, arthee utaavalo thaaya;
Shree khimaavijaya gurunaamatheejee, jaga ‘jasha’ vaanchhita thaaya.||7||`,
    },
  },
  {
    id: "gad-girnare-rahi-jaya-re",
    type: "bhajan",
    title: {
      gu: "ગઢ ગિરનારે જઈ રહ્યા રે, યાદવ નેમકુમાર",
      hi: "गढ गिरनारे जई रह्या रे, यादव नेमकुमार",
      sa: "",
      en: "Gad Girnare Rahi Jaya Re",
    },
    text: {
      gu: `ગઢ ગિરનારે જઈ રહ્યા રે, યાદવ નેમકુમાર;
વિરહ વચન ઈશ્યા, રાજીમતી તવ નાર;
સુણજો સૈયરો રે વહાલા… મુજ હૈયાના હાર.||૧||
પગલા પિયુના પંખી જડી જડી, લાગી રે નયણા;
તીખા તીર જટ પટ, લાગી રે મહાણા.||૨||
તોરણ આવ્યા નેમજી રે, પાછા વળ્યા કેમ;
કપટ કર્યું પરણ્યાતણું રે, બાજીગર પરે જેમ.||૩||
કરુણા કીધી પંખિયા તણી રે, નવ કીધી મુજ સાર;
તો પણ સાચી પતિવ્રતા રે, તેહીજ તારી નાર.||૪||
અષ્ટ ભવાંતર નેહલો રે, નવમે ભવે દીધો છેહ;
કેડ ન છોડું તાહરો રે, જેમ છાયાને દેહ.||૫||
એમ કહેતી પહોતિ પિયા રે, પિયું પાસે લિયે દીક્ષા;
રહનેમી પણ બુઝવ્યા રે, દેઈ હિતની શિક્ષા.||૬||
યાદવ કુલ ચૂડામણિ રે, ધન ધન રાજુલ નેમ;
‘જ્ઞાનવિમલ” કહે એહનો રે, સાચો પૂરણ પ્રેમ.||૭||`,
      hi: `गढ गिरनारे जई रह्या रे, यादव नेमकुमार;
विरह वचन ईश्या, राजीमती तव नार;
सुणजो सैयरो रे वहाला… मुज हैयाना हार.||१||
पगला पियुना पंखी जडी जडी, लागी रे नयणा;
तीखा तीर जट पट, लागी रे महाणा.||२||
तोरण आव्या नेमजी रे, पाछा वळ्या केम;
कपट कर्युं परण्यातणुं रे, बाजीगर परे जेम.||३||
करुणा कीधी पंखिया तणी रे, नव कीधी मुज सार;
तो पण साची पतिव्रता रे, तेहीज तारी नार.||४||
अष्ट भवांतर नेहलो रे, नवमे भवे दीधो छेह;
केड न छोडुं ताहरो रे, जेम छायाने देह.||५||
एम कहेती पहोति पिया रे, पियुं पासे लिये दीक्षा;
रहनेमी पण बुझव्या रे, देई हितनी शिक्षा.||६||
यादव कुल चूडामणि रे, धन धन राजुल नेम;
‘ज्ञानविमल” कहे एहनो रे, साचो पूरण प्रेम.||७||`,
      sa: "",
      en: `Gadha giranaare jaee rahyaa re, yaadava nemakumaara;
Viraha vachana eeshyaa, raajeematee tava naara;
Sunajo saiyaro re vahaalaa… muja haiyaanaa haara.||1||
Pagalaa piyunaa pankhee jadee jadee, laagee re nayanaa;
Teekhaa teera jata pata, laagee re mahaanaa.||2||
Torana aavyaa nemajee re, paachhaa valyaa kema;
Kapata karyun paranyaatanun re, baajeegara pare jema.||3||
Karunaa keedhee pankhiyaa tanee re, nava keedhee muja saara;
To pana saachee pativrataa re, teheeja taaree naara.||4||
Ashta bhavaantara nehalo re, navame bhave deedho chheha;
Keda na chhodun taaharo re, jema chhaayaane deha.||5||
Ema kahetee pahoti piyaa re, piyun paase liye deekshaa;
Rahanemee pana bujhavyaa re, deee hitanee shikshaa.||6||
Yaadava kula choodaamani re, dhana dhana raajula nema;
‘jnyaanavimala” kahe ehano re, saacho poorana prema.||7||`,
    },
  },
  {
    id: "giruva-re-gun-tum-tana",
    type: "bhajan",
    title: {
      gu: "ગિરુઆ રે ગુણ તુમ તણા, શ્રી વર્ધમાન જિનરાયા રે",
      hi: "गिरुआ रे गुण तुम तणा, श्री वर्धमान जिनराया रे",
      sa: "",
      en: "Giruva Re Gun Tum Tana",
    },
    text: {
      gu: `ગિરુઆ રે ગુણ તુમ તણા, શ્રી વર્ધમાન જિનરાયા રે;
સુણતાં શ્રવણે અમી ઝરે, મારી નિર્મલ થાયે કાયા રે.||૧||
તુમ ગુણગણ ગંગાજળે, હું ઝીલીને નિર્મલ થાઉં રે;
અવર ન ધંધો આદરું, નિશદિન તોરા ગુણ ગાઉં રે.||૨||
ઝીલ્યા જે ગંગાજળે, તે છિલ્લર જળ નવિ પેસે રે;
જે માલતી ફૂલે મોહિયા, તે બાવળ જઈ નવિ બેસે રે.||૩||
એમ અમે તુમ ગુણ ગોઠશું, રંગે રાચ્યા ને વળી માચ્યા રે;
તે કેમ પરસુર આદરે? જે પરનારી વશ રાચ્યા રે.||૪||
તું ગતિ તું મતિ આશરો, તું આલંબન મુજ પ્યારો રે;
‘વાચક યશ’ કહે માહરે, તું જીવ જીવન આધારો રે.||૫||`,
      hi: `गिरुआ रे गुण तुम तणा, श्री वर्धमान जिनराया रे;
सुणतां श्रवणे अमी झरे, मारी निर्मल थाये काया रे.||१||
तुम गुणगण गंगाजळे, हुं झीलीने निर्मल थाउं रे;
अवर न धंधो आदरुं, निशदिन तोरा गुण गाउं रे.||२||
झील्या जे गंगाजळे, ते छिल्लर जळ नवि पेसे रे;
जे मालती फूले मोहिया, ते बावळ जई नवि बेसे रे.||३||
एम अमे तुम गुण गोठशुं, रंगे राच्या ने वळी माच्या रे;
ते केम परसुर आदरे? जे परनारी वश राच्या रे.||४||
तुं गति तुं मति आशरो, तुं आलंबन मुज प्यारो रे;
‘वाचक यश’ कहे माहरे, तुं जीव जीवन आधारो रे.||५||`,
      sa: "",
      en: `Giruaa re guna tuma tanaa, shree vardhamaana jinaraayaa re;
Sunataan shravane amee jhare, maaree nirmala thaaye kaayaa re.||1||
Tuma gunagana gangaajale, hun jheeleene nirmala thaaun re;
Avara na dhandho aadarun, nishadina toraa guna gaaun re.||2||
Jheelyaa je gangaajale, te chhillara jala navi pese re;
Je maalatee phoole mohiyaa, te baavala jaee navi bese re.||3||
Ema ame tuma guna gothashun, range raachyaa ne valee maachyaa re;
Te kema parasura aadare? je paranaaree vasha raachyaa re.||4||
Tun gati tun mati aasharo, tun aalanbana muja pyaaro re;
‘vaachaka yasha’ kahe maahare, tun jeeva jeevana aadhaaro re.||5||`,
    },
  },
  {
    id: "goyam-kahe-suno-veerji-re",
    type: "bhajan",
    title: {
      gu: "ગોયમ કહે સુણો વીરજી રે, વાલેશ્વર ગુણગેહ",
      hi: "गोयम कहे सुणो वीरजी रे, वालेश्वर गुणगेह",
      sa: "",
      en: "Goyam Kahe Suno Veerji Re",
    },
    text: {
      gu: `ગોયમ કહે સુણો વીરજી રે, વાલેશ્વર ગુણગેહ;
વિશ્વાસ મુજને એટલો રે, ઈમ કિમ તોડશો નેહ,
હો વીરજી! શું કીધું તેહ, છટકીને દીધો છેહ.||૧||
કામ ભળાવી તેં પ્રભુજી, મુજને મૂક્યો દૂર;
અંત સમય રાખ્યો નહીં, સેવક ચરણે નૂર.||૨||
કેડ લાગીશું તુમ કને રે, માંગત કેવળ ભાગ?
ઈમ બહાના દેઈ ગયા રે, શું ન હતી મુક્તિમાં જગ.||૩||
મોહ તોડી મૂકી જશો રે, પહેલા જો જાણત એહ;
તો તુમ સાથે એવડો રે, શાને કરત હું સ્નેહ.||૪||
ગોયમ ગોયમ કહીને રે, બોલાવતા કેઈવાર;
ઈણવેળા તે કિંહા ગયો રે, તુમ મન કેરો પ્યાર.||૫||
તેં પણ છળ જ્યાં એમ રે, તો શું અવરની વાત;
ઈમ છળ કરતાં તુજને રે, ન આવી શરમ તિલમાત્ર.||૬||
ઈમ ઓલંભા દેઈ કરી રે, જીત્યો મોહ વિકાર;
કેવળસિરિ વર્યા રે, “કનકવિજય’ જયકાર.||૭||`,
      hi: `गोयम कहे सुणो वीरजी रे, वालेश्वर गुणगेह;
विश्वास मुजने एटलो रे, ईम किम तोडशो नेह,
हो वीरजी! शुं कीधुं तेह, छटकीने दीधो छेह.||१||
काम भळावी तें प्रभुजी, मुजने मूक्यो दूर;
अंत समय राख्यो नहीं, सेवक चरणे नूर.||२||
केड लागीशुं तुम कने रे, मांगत केवळ भाग?
ईम बहाना देई गया रे, शुं न हती मुक्तिमां जग.||३||
मोह तोडी मूकी जशो रे, पहेला जो जाणत एह;
तो तुम साथे एवडो रे, शाने करत हुं स्नेह.||४||
गोयम गोयम कहीने रे, बोलावता केईवार;
ईणवेळा ते किंहा गयो रे, तुम मन केरो प्यार.||५||
तें पण छळ ज्यां एम रे, तो शुं अवरनी वात;
ईम छळ करतां तुजने रे, न आवी शरम तिलमात्र.||६||
ईम ओलंभा देई करी रे, जीत्यो मोह विकार;
केवळसिरि वर्या रे, “कनकविजय’ जयकार.||७||`,
      sa: "",
      en: `Goyama kahe suno veerajee re, vaaleshvara gunageha;
Vishvaasa mujane etalo re, eema kima todasho neha,
Ho veerajee! shun keedhun teha, chhatakeene deedho chheha.||1||
Kaama bhalaavee ten prabhujee, mujane mookyo doora;
Anta samaya raakhyo naheen, sevaka charane noora.||2||
Keda laageeshun tuma kane re, maangata kevala bhaaga?
Eema bahaanaa deee gayaa re, shun na hatee muktimaan jaga.||3||
Moha todee mookee jasho re, pahelaa jo jaanata eha;
To tuma saathe evado re, shaane karata hun sneha.||4||
Goyama goyama kaheene re, bolaavataa keeevaara;
Eenavelaa te kinhaa gayo re, tuma mana kero pyaara.||5||
Ten pana chhala jyaan ema re, to shun avaranee vaata;
Eema chhala karataan tujane re, na aavee sharama tilamaatra.||6||
Eema olanbhaa deee karee re, jeetyo moha vikaara;
Kevalasiri varyaa re, “kanakavijaya’ jayakaara.||7||`,
    },
  },
  {
    id: "gyan-anatu-tahre-re",
    type: "bhajan",
    title: {
      gu: "જ્ઞાન અનંતુ તાહરે રે, દરિશન તાહરે અનંત",
      hi: "ज्ञान अनंतु ताहरे रे, दरिशन ताहरे अनंत",
      sa: "",
      en: "Gyan Anatu Tahre Re",
    },
    text: {
      gu: `જ્ઞાન અનંતુ તાહરે રે, દરિશન તાહરે અનંત;
સુખ અનંતમય સાહિબા રે, વીર્ય પણ ઉલસ્યું અનંત.
અનંત જિન! આપજો રે, મુજ એહ અનંતા ચાર;
મુજને નહિ અવરશ્યું પ્યાર, તુજને આપતાં શી વાર.
એહ છે તુજ યશનો ઠાર…||૧||
આપ ખજાનો ન ખોલવો રે, પણ નહિ મિલવાની ચિંતા;
માહરે પોતે છે સવે રે, પણ વિચે આવરણની ભીંત. અનંત૦।|૨।।
તપ જપ કિરિયા મોગરે રે, ભાંજી પણ ભાંગી ન જાય;
એક તુજ આણા લહે થકે રે, હેલામાં પરહી થાય.અનંત૦ ।।૩।।
નિજ માતા મરુદેવીને રે, ઋષભે ક્ષણમાં દીધ;
આપ પરાયું વિચારતાં રે, ઈમ કિમ વીતરાગતા સિદ્ધ. અનંત૦ ॥૪॥
માટે તસ અરથિયા રે, પ્રાર્થે જે કોઈ લોક;
તેહને આપો આંફણી રે, તિહાં ન ઘટે કરાવવી ટોક. અનંત૦ ।।૫।।
તેહને તેહનું આપવું રે, તિહાં શો ઊપજે છે ખેદ;
પ્રાર્થના કરતે તાહરે રે, પ્રભુતાઈનો પણ નહિ છેદ. અનંત૦ા|૬॥
પામે પામશે રે, જ્ઞાનાદિક જેહ અનંત;
તે તુજ આણાથી સવેરે. કહે ‘માનવિજય’ ઉલ્લસંત. અનંત૦ ||૭||`,
      hi: `ज्ञान अनंतु ताहरे रे, दरिशन ताहरे अनंत;
सुख अनंतमय साहिबा रे, वीर्य पण उलस्युं अनंत.
अनंत जिन! आपजो रे, मुज एह अनंता चार;
मुजने नहि अवरश्युं प्यार, तुजने आपतां शी वार.
एह छे तुज यशनो ठार…||१||
आप खजानो न खोलवो रे, पण नहि मिलवानी चिंता;
माहरे पोते छे सवे रे, पण विचे आवरणनी भींत. अनंत०।|२।।
तप जप किरिया मोगरे रे, भांजी पण भांगी न जाय;
एक तुज आणा लहे थके रे, हेलामां परही थाय.अनंत० ।।३।।
निज माता मरुदेवीने रे, ऋषभे क्षणमां दीध;
आप परायुं विचारतां रे, ईम किम वीतरागता सिद्ध. अनंत० ॥४॥
माटे तस अरथिया रे, प्रार्थे जे कोई लोक;
तेहने आपो आंफणी रे, तिहां न घटे कराववी टोक. अनंत० ।।५।।
तेहने तेहनुं आपवुं रे, तिहां शो ऊपजे छे खेद;
प्रार्थना करते ताहरे रे, प्रभुताईनो पण नहि छेद. अनंत०ा|६॥
पामे पामशे रे, ज्ञानादिक जेह अनंत;
ते तुज आणाथी सवेरे. कहे ‘मानविजय’ उल्लसंत. अनंत० ||७||`,
      sa: "",
      en: `Jnyaana anantu taahare re, darishana taahare ananta;
Sukha anantamaya saahibaa re, veerya pana ulasyun ananta.
Ananta jina! aapajo re, muja eha anantaa chaara;
Mujane nahi avarashyun pyaara, tujane aapataan shee vaara.
Eha chhe tuja yashano thaara…||1||
Aapa khajaano na kholavo re, pana nahi milavaanee chintaa;
Maahare pote chhe save re, pana viche aavarananee bheenta. ananta0||2||
Tapa japa kiriyaa mogare re, bhaanjee pana bhaangee na jaaya;
Eka tuja aanaa lahe thake re, helaamaan parahee thaaya.ananta0 ||3||
Nija maataa marudeveene re, rushabhe kshanamaan deedha;
Aapa paraayun vichaarataan re, eema kima veetaraagataa siddha. ananta0 ||4||
Maate tasa arathiyaa re, praarthe je koee loka;
Tehane aapo aanphanee re, tihaan na ghate karaavavee toka. ananta0 ||5||
Tehane tehanun aapavun re, tihaan sho oopaje chhe kheda;
Praarthanaa karate taahare re, prabhutaaeeno pana nahi chheda. ananta0ા|6||
Paame paamashe re, jnyaanaadika jeha ananta;
Te tuja aanaathee savere. kahe ‘maanavijaya’ ullasanta. ananta0 ||7||`,
    },
  },
  {
    id: "gyanadik-gun-sampada-re",
    type: "bhajan",
    title: {
      gu: "જ્ઞાનાદિક ગુણ સંપદા રે, તુજ અનંત અપાર",
      hi: "ज्ञानादिक गुण संपदा रे, तुज अनंत अपार",
      sa: "",
      en: "Gyanadik Gun Sampada Re",
    },
    text: {
      gu: `જ્ઞાનાદિક ગુણ સંપદા રે, તુજ અનંત અપાર;
તે સાંભળતાં ઉપની રે, રૂચી તેણે પાર ઉતાર,
અજિત જિન તારજો રે, તારજો દીનદયાળ.||૧||
જે જે કારણ જેહનું રે, સામગ્રી સંયોગ;
મળતાં કારજ નિપજે રે, કર્તા તણે પ્રયોગ.||૨||
કાર્યસિદ્ધિ કર્તા વસુ રે, લહિ કારણ સંયોગ;
નિજપદ કારક, પ્રભુ મિલ્યા રે, હોય નિમિત્ત ભોગ.||૩||
અજકુલ ગત કેસરી નિજપદ સિંહ નિહાળ;
તિમ પ્રભુ ભક્તે ભવિ લહે રે, આતમ શક્તિ સંભાળ.||૪||
કારણ પદ કર્તા પણે રે, કરી આરોપ અભેદ;
નિજ પદ અર્થી પ્રભુ થકી રે, કરે અનેક ઉમેદ.||૫||
એહવા પરમાતમ પ્રભુ રે, પરમાનંદ સ્વરુપ;
સ્યાદ્વાદ સત્તા રસી રે, અમલ અખંડ અનૂપ.||૬||
આરોપિત સુખ ભ્રમ ટલ્યો રે, ભાસ્યો અવ્યાબાધ;
સમર્યું અભિલાષીપણું રે, કર્તા સાધન સાધ્ય.||૭||
ગ્રાહકતા સ્વામિત્વતા રે, વ્યાપક ભોક્તા ભાવ;
કારનતા કારજદસા રે, સકલ ગ્રહુ નિજ ભાવ;||૮||
શ્રદ્ધા ભાસન રમણતા રે, દાનાદિક પરિણામ;
સકલ થયા સત્તારસી રે, જિનવર દરિસણ પામ.||૯||
તિણે નિર્યામક માહણો રે, વૈદ્ય ગોપ આધાર;
“દેવચંદ્ર’સુખ સાગરું રે, ભાવ ધરમ દાતાર.||૧૦||`,
      hi: `ज्ञानादिक गुण संपदा रे, तुज अनंत अपार;
ते सांभळतां उपनी रे, रूची तेणे पार उतार,
अजित जिन तारजो रे, तारजो दीनदयाळ.||१||
जे जे कारण जेहनुं रे, सामग्री संयोग;
मळतां कारज निपजे रे, कर्ता तणे प्रयोग.||२||
कार्यसिद्धि कर्ता वसु रे, लहि कारण संयोग;
निजपद कारक, प्रभु मिल्या रे, होय निमित्त भोग.||३||
अजकुल गत केसरी निजपद सिंह निहाळ;
तिम प्रभु भक्ते भवि लहे रे, आतम शक्ति संभाळ.||४||
कारण पद कर्ता पणे रे, करी आरोप अभेद;
निज पद अर्थी प्रभु थकी रे, करे अनेक उमेद.||५||
एहवा परमातम प्रभु रे, परमानंद स्वरुप;
स्याद्वाद सत्ता रसी रे, अमल अखंड अनूप.||६||
आरोपित सुख भ्रम टल्यो रे, भास्यो अव्याबाध;
समर्युं अभिलाषीपणुं रे, कर्ता साधन साध्य.||७||
ग्राहकता स्वामित्वता रे, व्यापक भोक्ता भाव;
कारनता कारजदसा रे, सकल ग्रहु निज भाव;||८||
श्रद्धा भासन रमणता रे, दानादिक परिणाम;
सकल थया सत्तारसी रे, जिनवर दरिसण पाम.||९||
तिणे निर्यामक माहणो रे, वैद्य गोप आधार;
“देवचंद्र’सुख सागरुं रे, भाव धरम दातार.||१०||`,
      sa: "",
      en: `Jnyaanaadika guna sanpadaa re, tuja ananta apaara;
Te saanbhalataan upanee re, roochee tene paara utaara,
Ajita jina taarajo re, taarajo deenadayaala.||1||
Je je kaarana jehanun re, saamagree sanyoga;
Malataan kaaraja nipaje re, kartaa tane prayoga.||2||
Kaaryasiddhi kartaa vasu re, lahi kaarana sanyoga;
Nijapada kaaraka, prabhu milyaa re, hoya nimitta bhoga.||3||
Ajakula gata kesaree nijapada sinha nihaala;
Tima prabhu bhakte bhavi lahe re, aatama shakti sanbhaala.||4||
Kaarana pada kartaa pane re, karee aaropa abheda;
Nija pada arthee prabhu thakee re, kare aneka umeda.||5||
Ehavaa paramaatama prabhu re, paramaananda svarupa;
Syaadvaada sattaa rasee re, amala akhanda anoopa.||6||
Aaropita sukha bhrama talyo re, bhaasyo avyaabaadha;
Samaryun abhilaasheepanun re, kartaa saadhana saadhya.||7||
Graahakataa svaamitvataa re, vyaapaka bhoktaa bhaava;
Kaaranataa kaarajadasaa re, sakala grahu nija bhaava;||8||
Shraddhaa bhaasana ramanataa re, daanaadika parinaama;
Sakala thayaa sattaarasee re, jinavara darisana paama.||9||
Tine niryaamaka maahano re, vaidya gopa aadhaara;
“devachandra’sukha saagarun re, bhaava dharama daataara.||10||`,
    },
  },
  {
    id: "gyani-vin-kin-aagad-kahiye",
    type: "bhajan",
    title: {
      gu: "જ્ઞાની વિણ કિણ આગળ કહીએ",
      hi: "ज्ञानी विण किण आगळ कहीए",
      sa: "",
      en: "Gyani Vin Kin Aagad Kahiye",
    },
    text: {
      gu: `જ્ઞાની વિણ કિણ આગળ કહીએ,
મનકી મન મેં જાણી રહીએ. ।।૧।।
ભૂંડી લાગે જણ-જણ આગે,
કહેતાં કાંઈ ન વેદન ભાગે હો. ।। ૨ ।।
અપનો ભરમ ગમાવે સાજન,
પરજન કામ ન આવે હો.||૩||
દુર્જન હોઈ સુપરે કરે હાસા,
જાણી પડ્યા મુંહ-માંગ્યા પાસા હો. ॥૪॥
તાથે મૌન ભલું મન આણી,
ધરી મન ધીર રહે નિજ પાણી હો.||૫||
કહે “જનહર્ષ’ કહેજો પ્રાણી,
કુંથુ જિણંદ આગે કહેવાણી હો. ।।૬।।`,
      hi: `ज्ञानी विण किण आगळ कहीए,
मनकी मन में जाणी रहीए. ।।१।।
भूंडी लागे जण-जण आगे,
कहेतां कांई न वेदन भागे हो. ।। २ ।।
अपनो भरम गमावे साजन,
परजन काम न आवे हो.||३||
दुर्जन होई सुपरे करे हासा,
जाणी पड्या मुंह-मांग्या पासा हो. ॥४॥
ताथे मौन भलुं मन आणी,
धरी मन धीर रहे निज पाणी हो.||५||
कहे “जनहर्ष’ कहेजो प्राणी,
कुंथु जिणंद आगे कहेवाणी हो. ।।६।।`,
      sa: "",
      en: `Jnyaanee vina kina aagala kaheee,
Manakee mana men jaanee raheee. ||1||
Bhoondee laage jana-jana aage,
Kahetaan kaanee na vedana bhaage ho. || 2 ||
Apano bharama gamaave saajana,
Parajana kaama na aave ho.||3||
Durjana hoee supare kare haasaa,
Jaanee padyaa munha-maangyaa paasaa ho. ||4||
Taathe mauna bhalun mana aanee,
Dharee mana dheera rahe nija paanee ho.||5||
Kahe “janaharsha’ kahejo praanee,
Kunthu jinanda aage kahevaanee ho. ||6||`,
    },
  },
  {
    id: "ham-magan-bhaye-prabhu-dhyan-me",
    type: "bhajan",
    title: {
      gu: "હમ મગન ભયે પ્રભુ ધ્યાન મેં…",
      hi: "हम मगन भये प्रभु ध्यान में…",
      sa: "",
      en: "Ham Magan Bhaye Prabhu Dhyan Me",
    },
    text: {
      gu: `હમ મગન ભયે પ્રભુ ધ્યાન મેં…
બિસર ગઈ દુવિધા તન મન કી, અચિરાસુત ગુણગાન મેં;||૧||
હરિહર બ્રહ્મા પુરંદર કી ઋદ્ધિ, આવત નહિ કોઉ માન મેં;
ચિદાનંદ કી મોજ મચી હૈ, સમતારસ કે પાન મેં.||૨||
ઈતને દિન તુમ નાહિ પિછાન્યો, મેરો જન્મ ગયો અજાન મેં;
અબ તો અધિકારી હોઈ બેઠે, પ્રભુ ગુણ અખય ખજાન મેં. ॥३॥
ગઈ દીનતા સબહી હમારી, પ્રભુ તુજ સમકિત દાન મેં;
પ્રભુ અનુભવ રસકે આગે, આવત નહિ કોઉ માન મેં.||૪||
જિનહિ પાયા તિનહિ છિપાયા, ન કહે કોઉ કે કાન મેં;
તારી લાગી જબ અનુભવકી, તબ સમજે સહું સાન મેં.||૫||
પ્રભ ગુણ અનુભવ ચંદ્રહાસ જ્યું, સો તો ન રહે મ્યાન મેં
“વાચક યશ” કહે મોહ મહા અરિ, જીત લીયો હૈ મૈદાન મેં. ।।૬|।`,
      hi: `हम मगन भये प्रभु ध्यान में…
बिसर गई दुविधा तन मन की, अचिरासुत गुणगान में;||१||
हरिहर ब्रह्मा पुरंदर की ऋद्धि, आवत नहि कोउ मान में;
चिदानंद की मोज मची है, समतारस के पान में.||२||
ईतने दिन तुम नाहि पिछान्यो, मेरो जन्म गयो अजान में;
अब तो अधिकारी होई बेठे, प्रभु गुण अखय खजान में. ॥३॥
गई दीनता सबही हमारी, प्रभु तुज समकित दान में;
प्रभु अनुभव रसके आगे, आवत नहि कोउ मान में.||४||
जिनहि पाया तिनहि छिपाया, न कहे कोउ के कान में;
तारी लागी जब अनुभवकी, तब समजे सहुं सान में.||५||
प्रभ गुण अनुभव चंद्रहास ज्युं, सो तो न रहे म्यान में
“वाचक यश” कहे मोह महा अरि, जीत लीयो है मैदान में. ।।६|।`,
      sa: "",
      en: `Hama magana bhaye prabhu dhyaana men…
Bisara gaee duvidhaa tana mana kee, achiraasuta gunagaana men;||1||
Harihara brahmaa purandara kee ruddhi, aavata nahi kou maana men;
Chidaananda kee moja machee hai, samataarasa ke paana men.||2||
Eetane dina tuma naahi pichhaanyo, mero janma gayo ajaana men;
Aba to adhikaaree hoee bethe, prabhu guna akhaya khajaana men. ||3||
Gaee deenataa sabahee hamaaree, prabhu tuja samakita daana men;
Prabhu anubhava rasake aage, aavata nahi kou maana men.||4||
Jinahi paayaa tinahi chhipaayaa, na kahe kou ke kaana men;
Taaree laagee jaba anubhavakee, taba samaje sahun saana men.||5||
Prabha guna anubhava chandrahaasa jyun, so to na rahe myaana men
“vaachaka yasha” kahe moha mahaa ari, jeeta leeyo hai maidaana men. ||6||`,
    },
  },
  {
    id: "he-prabhu-parshwa-chintamani-mero",
    type: "bhajan",
    title: {
      gu: "હે પ્રભુ! પાર્શ્વ ચિંતામણિ મેરો…",
      hi: "हे प्रभु! पार्श्व चिंतामणि मेरो…",
      sa: "",
      en: "He Prabhu Parshwa Chintamani Mero",
    },
    text: {
      gu: `હે પ્રભુ! પાર્શ્વ ચિંતામણિ મેરો…
મિલ ગયો હીરો, મિટ ગયો ફેરો, નામ જપું નિત્ય તેરો…॥੧॥
પ્રીત બની અબ પ્રભુજી શું પ્યારી,
જૈસે ચંદ ચકોરો…॥२॥
આનંદઘન પ્રભુ ચરણ શરણ હૈ,
દિયો મોહે મુક્તિ કો ડેરો. ।।૩।।`,
      hi: `हे प्रभु! पार्श्व चिंतामणि मेरो…
मिल गयो हीरो, मिट गयो फेरो, नाम जपुं नित्य तेरो…॥੧॥
प्रीत बनी अब प्रभुजी शुं प्यारी,
जैसे चंद चकोरो…॥२॥
आनंदघन प्रभु चरण शरण है,
दियो मोहे मुक्ति को डेरो. ।।३।।`,
      sa: "",
      en: `He prabhu! paarshva chintaamani mero…
Mila gayo heero, mita gayo phero, naama japun nitya tero…||1||
Preeta banee aba prabhujee shun pyaaree,
Jaise chanda chakoro…||2||
Aanandaghana prabhu charana sharana hai,
Diyo mohe mukti ko dero. ||3||`,
    },
  },
  {
    id: "ho-avinashi-nath-niranjan",
    type: "bhajan",
    title: {
      gu: "હો અવિનાશી! નાથ નિરંજન! સાહિબ મારો સાહિબ સાચો…",
      hi: "हो अविनाशी! नाथ निरंजन! साहिब मारो साहिब साचो…",
      sa: "",
      en: "Ho Avinashi Nath Niranjan",
    },
    text: {
      gu: `હો અવિનાશી! નાથ નિરંજન! સાહિબ મારો સાહિબ સાચો…
હો શિવવાસી! તત્ત્વપ્રકાશી! સાહિબ મારો સાહિબ સાચો ॥੧॥
ભવસમુદ્ર રહ્યો મહાભારી, કેમ કરી તરું હો અવિકારી,
બાંહ્ય ગ્રહીને કરો ભવપારી. સાહિબ. ।। ૨ ।।
વામાનંદન નયણે નિરખ્યા, આનંદના પુર હૈયે ઉમટ્યા,
કામીત પુરણ કલ્પતરુ ફળિયા. સાહિબ. ॥૩॥
મહિમા તારો છે જગભારી, પાર્શ્વ શંખેશ્વર તું જયકારી,
સેવકને દ્યો કેમ વિસારી. સાહિબŌ ।।૪।|
મારે તો પ્રભુ તું હી એક દેવા, ન ગમે કરવી બીજાની સેવા,
અરજ સુણો પ્રભુ દેવાધિદેવા. સાહિબ।।૫ ।।
સાતરાજ અલગા જઈ બેઠા,પણ ભક્તે અમ મનમાંહે પેઠા,
વાચક ‘યશ’ કહે નયણે દીઠા. સાહિબ. ।।૬।।`,
      hi: `हो अविनाशी! नाथ निरंजन! साहिब मारो साहिब साचो…
हो शिववासी! तत्त्वप्रकाशी! साहिब मारो साहिब साचो ॥੧॥
भवसमुद्र रह्यो महाभारी, केम करी तरुं हो अविकारी,
बांह्य ग्रहीने करो भवपारी. साहिब. ।। २ ।।
वामानंदन नयणे निरख्या, आनंदना पुर हैये उमट्या,
कामीत पुरण कल्पतरु फळिया. साहिब. ॥३॥
महिमा तारो छे जगभारी, पार्श्व शंखेश्वर तुं जयकारी,
सेवकने द्यो केम विसारी. साहिबŌ ।।४।|
मारे तो प्रभु तुं ही एक देवा, न गमे करवी बीजानी सेवा,
अरज सुणो प्रभु देवाधिदेवा. साहिब।।५ ।।
सातराज अलगा जई बेठा,पण भक्ते अम मनमांहे पेठा,
वाचक ‘यश’ कहे नयणे दीठा. साहिब. ।।६।।`,
      sa: "",
      en: `Ho avinaashee! naatha niranjana! saahiba maaro saahiba saacho…
Ho shivavaasee! tattvaprakaashee! saahiba maaro saahiba saacho ||1||
Bhavasamudra rahyo mahaabhaaree, kema karee tarun ho avikaaree,
Baanhya graheene karo bhavapaaree. saahiba. || 2 ||
Vaamaanandana nayane nirakhyaa, aanandanaa pura haiye umatyaa,
Kaameeta purana kalpataru phaliyaa. saahiba. ||3||
Mahimaa taaro chhe jagabhaaree, paarshva shankheshvara tun jayakaaree,
Sevakane dyo kema visaaree. saahibaŌ ||4||
Maare to prabhu tun hee eka devaa, na game karavee beejaanee sevaa,
Araja suno prabhu devaadhidevaa. saahiba||5 ||
Saataraaja alagaa jaee bethaa,pana bhakte ama manamaanhe pethaa,
Vaachaka ‘yasha’ kahe nayane deethaa. saahiba. ||6||`,
    },
  },
  {
    id: "ho-jinvarji-ab-meri-bani-aai",
    type: "bhajan",
    title: {
      gu: "હો જિનવરજી! અબ મેરે બની આઈ",
      hi: "हो जिनवरजी! अब मेरे बनी आई",
      sa: "",
      en: "Ho Jinvarji Ab Meri Bani Aai",
    },
    text: {
      gu: `હો જિનવરજી! અબ મેરે બની આઈ;
ઓર સકલ સુર કી સેવા તજી, એકશું લય લાઈ. હો.||૧||
વાસુપૂજ્ય જિનવર વિષ્ણુ ચિત્ત મેં, ધારું ઓર ન કાંઈ;
પરમ પ્રમોદ ભયો અબ મેરે, જો તુમ સેવા પાઈ. હો.||૨||
ત્રિભુવનનાથ ધર્યો શિર ઉપર, જાકી બહુત વડાઈ;
કહે અવર ન માગું, દ્યો ભવપાશ છુડાઈ. હો.||૩||`,
      hi: `हो जिनवरजी! अब मेरे बनी आई;
ओर सकल सुर की सेवा तजी, एकशुं लय लाई. हो.||१||
वासुपूज्य जिनवर विष्णु चित्त में, धारुं ओर न कांई;
परम प्रमोद भयो अब मेरे, जो तुम सेवा पाई. हो.||२||
त्रिभुवननाथ धर्यो शिर उपर, जाकी बहुत वडाई;
कहे अवर न मागुं, द्यो भवपाश छुडाई. हो.||३||`,
      sa: "",
      en: `Ho jinavarajee! aba mere banee aaee;
Ora sakala sura kee sevaa tajee, ekashun laya laaee. ho.||1||
Vaasupoojya jinavara vishnu chitta men, dhaarun ora na kaanee;
Parama pramoda bhayo aba mere, jo tuma sevaa paaee. ho.||2||
Tribhuvananaatha dharyo shira upara, jaakee bahuta vadaaee;
Kahe avara na maagun, dyo bhavapaasha chhudaaee. ho.||3||`,
    },
  },
  {
    id: "ho-man-te-to-kyu",
    type: "bhajan",
    title: {
      gu: "હો મન! તેં તો ક્યું જિન ભક્તિ વિસારી… હો મન! તેં તો!",
      hi: "हो मन! तें तो क्युं जिन भक्ति विसारी… हो मन! तें तो!",
      sa: "",
      en: "Ho Man Te To Kyu",
    },
    text: {
      gu: `હો મન! તેં તો ક્યું જિન ભક્તિ વિસારી… હો મન! તેં તો!
સુમતિ સરુપ પ્રભુ વાણી, સુણી સુણી મોહ ગુમાવી. હો૦ ।।૧ ।।
ભૂલ્યો ચાર ગતિમેં ભટકે,
ઘર ઘર જેમ ભિખારી.||૨||
ઉપશમ રસશું ક્યું ન બુઝાવે,
એ છીપી ચિનગારી.||૩||
ઇંદ્ર ચંદ્ર નાગેન્દ્ર વિદ્યાધર,
તાકું હો સેવા પ્યારી.||૪||
રુપ વિબુધનો ‘મોહન’ પભણે,
અપગત કો ગત ન્યારી. હો૦।।૫।।`,
      hi: `हो मन! तें तो क्युं जिन भक्ति विसारी… हो मन! तें तो!
सुमति सरुप प्रभु वाणी, सुणी सुणी मोह गुमावी. हो० ।।१ ।।
भूल्यो चार गतिमें भटके,
घर घर जेम भिखारी.||२||
उपशम रसशुं क्युं न बुझावे,
ए छीपी चिनगारी.||३||
इंद्र चंद्र नागेन्द्र विद्याधर,
ताकुं हो सेवा प्यारी.||४||
रुप विबुधनो ‘मोहन’ पभणे,
अपगत को गत न्यारी. हो०।।५।।`,
      sa: "",
      en: `Ho mana! ten to kyun jina bhakti visaaree… ho mana! ten to!
Sumati sarupa prabhu vaanee, sunee sunee moha gumaavee. ho0 ||1 ||
Bhoolyo chaara gatimen bhatake,
Ghara ghara jema bhikhaaree.||2||
Upashama rasashun kyun na bujhaave,
E chheepee chinagaaree.||3||
Indra chandra naagendra vidyaadhara,
Taakun ho sevaa pyaaree.||4||
Rupa vibudhano ‘mohana’ pabhane,
Apagata ko gata nyaaree. ho0||5||`,
    },
  },
  {
    id: "hu-to-pamyo-prabhuna",
    type: "bhajan",
    title: {
      gu: "હું તો પામ્યો પ્રભુના પાય રે,આણ ન લોપું રે",
      hi: "हुं तो पाम्यो प्रभुना पाय रे,आण न लोपुं रे",
      sa: "",
      en: "Hu To Pamyo Prabhuna",
    },
    text: {
      gu: `હું તો પામ્યો પ્રભુના પાય રે,આણ ન લોપું રે;
હું તો સાંભળી પ્રભુજીનાં વેણ રે, કાનમાં રોપું રે.||૧||
જનમ-મરણના ફેરા ફરતાં, મેં તો ધ્યાયા ન દેવાધિદેવા રે;
કુગુરુ કુશાસ્ત્ર તણા ઉપદેશે, પામી નહીં પ્રભુ સેવા રે.||૨||
કનક કથીરનો ભેદ ન જાણ્યો, કાચ મણિ સમ તોલ્યાં રે;
વિવેકતણી મેં વાત ન જાણી, વિષ અમૃત કરી ઘોલ્યાં રે.||૩||
સમકિતનો લવલેશ ન સમજ્યો, હું તો મિથ્યાત્વમાં ખૂંચ્યો રે;
પાપ તણા પંથે પરિવરિયો, વિષયે કરી વિલુદ્ધો રે.||૪||
કોઈક પૂરવ પુણ્ય સંયોગે, આરજ કુળે અવતરિયો રે;
આદીશ્વર સાહિબ મુજ મલિયો, તારક ભવજલ તરિયો રે.||૫||
આટલા દિન મેં વાત ન જાણી, તુજથી રહ્યો હું અળગો રે;
“ઉદયરત્ન’ કહે આજ થકી હું, તારે પાયે વળગો રે.||૬||`,
      hi: `हुं तो पाम्यो प्रभुना पाय रे,आण न लोपुं रे;
हुं तो सांभळी प्रभुजीनां वेण रे, कानमां रोपुं रे.||१||
जनम-मरणना फेरा फरतां, में तो ध्याया न देवाधिदेवा रे;
कुगुरु कुशास्त्र तणा उपदेशे, पामी नहीं प्रभु सेवा रे.||२||
कनक कथीरनो भेद न जाण्यो, काच मणि सम तोल्यां रे;
विवेकतणी में वात न जाणी, विष अमृत करी घोल्यां रे.||३||
समकितनो लवलेश न समज्यो, हुं तो मिथ्यात्वमां खूंच्यो रे;
पाप तणा पंथे परिवरियो, विषये करी विलुद्धो रे.||४||
कोईक पूरव पुण्य संयोगे, आरज कुळे अवतरियो रे;
आदीश्वर साहिब मुज मलियो, तारक भवजल तरियो रे.||५||
आटला दिन में वात न जाणी, तुजथी रह्यो हुं अळगो रे;
“उदयरत्न’ कहे आज थकी हुं, तारे पाये वळगो रे.||६||`,
      sa: "",
      en: `Hun to paamyo prabhunaa paaya re,aana na lopun re;
Hun to saanbhalee prabhujeenaan vena re, kaanamaan ropun re.||1||
Janama-marananaa pheraa pharataan, men to dhyaayaa na devaadhidevaa re;
Kuguru kushaastra tanaa upadeshe, paamee naheen prabhu sevaa re.||2||
Kanaka katheerano bheda na jaanyo, kaacha mani sama tolyaan re;
Vivekatanee men vaata na jaanee, visha amruta karee gholyaan re.||3||
Samakitano lavalesha na samajyo, hun to mithyaatvamaan khoonchyo re;
Paapa tanaa panthe parivariyo, vishaye karee viluddho re.||4||
Koeeka poorava punya sanyoge, aaraja kule avatariyo re;
Aadeeshvara saahiba muja maliyo, taaraka bhavajala tariyo re.||5||
Aatalaa dina men vaata na jaanee, tujathee rahyo hun alago re;
“udayaratna’ kahe aaja thakee hun, taare paaye valago re.||6||`,
    },
  },
  {
    id: "hu-to-shatrunjay-nadi-na-pase",
    type: "bhajan",
    title: {
      gu: "હું તો શત્રુંજય નદીની પાસે, જાઉં જળ ભરવા",
      hi: "हुं तो शत्रुंजय नदीनी पासे, जाउं जळ भरवा",
      sa: "",
      en: "Hu To Shatrunjay Nadi Na Pase",
    },
    text: {
      gu: `હું તો શત્રુંજય નદીની પાસે, જાઉં જળ ભરવા,
મારા હૈયે હરખ ન માય, જાઉં જળ ભરવા,
શીર ઉપર ઈંઢોણી બેડલું, જાઉ જળ ભરવા રે..જાઉં જળ ભરવા…
હું તો શત્રુંજય નદીની પાસે..           હું તો૦॥૧॥
મનડું નાચે, તનર્ડું નાચે,
પહેરી પટોળું અંગ – અંગ નાચે, નાચે-નાચે મનડું નાચે..
મારું હૈયું કરે કલશોર, જાઉં જળ ભરવા..
અભિષેક કરવા,દાદાને ભેટવા,         હું તો૦॥ર॥
આદિ જિણંદા, પ્યારા મુણીદા,
એના અભિષેક કરવા ચાલી, કરવા ચાલી, આદિ જિણંદા..
મારા ઝાંઝર કરે ઝણકાર, જાઉં જળ ભરવા..
અભિષેક કરવા, દાદાને ભેટવા…     હું તો૦॥૩॥`,
      hi: `हुं तो शत्रुंजय नदीनी पासे, जाउं जळ भरवा,
मारा हैये हरख न माय, जाउं जळ भरवा,
शीर उपर ईंढोणी बेडलुं, जाउ जळ भरवा रे..जाउं जळ भरवा…
हुं तो शत्रुंजय नदीनी पासे..           हुं तो०॥१॥
मनडुं नाचे, तनर्डुं नाचे,
पहेरी पटोळुं अंग – अंग नाचे, नाचे-नाचे मनडुं नाचे..
मारुं हैयुं करे कलशोर, जाउं जळ भरवा..
अभिषेक करवा,दादाने भेटवा,         हुं तो०॥र॥
आदि जिणंदा, प्यारा मुणीदा,
एना अभिषेक करवा चाली, करवा चाली, आदि जिणंदा..
मारा झांझर करे झणकार, जाउं जळ भरवा..
अभिषेक करवा, दादाने भेटवा…     हुं तो०॥३॥`,
      sa: "",
      en: `Hun to shatrunjaya nadeenee paase, jaaun jala bharavaa,
Maaraa haiye harakha na maaya, jaaun jala bharavaa,
Sheera upara eendhonee bedalun, jaau jala bharavaa re..jaaun jala bharavaa…
Hun to shatrunjaya nadeenee paase.. hun to0||1||
Manadun naache, tanardun naache,
Paheree patolun anga – anga naache, naache-naache manadun naache..
Maarun haiyun kare kalashora, jaaun jala bharavaa..
Abhisheka karavaa,daadaane bhetavaa, hun to0||ra||
Aadi jinandaa, pyaaraa muneedaa,
Enaa abhisheka karavaa chaalee, karavaa chaalee, aadi jinandaa..
Maaraa jhaanjhara kare jhanakaara, jaaun jala bharavaa..
Abhisheka karavaa, daadaane bhetavaa… hun to0||3||`,
    },
  },
  {
    id: "jag-janman-range-re",
    type: "bhajan",
    title: {
      gu: "જગ જનમન રંજે રે, મન્મથ બલ ભંજે રે",
      hi: "जग जनमन रंजे रे, मन्मथ बल भंजे रे",
      sa: "",
      en: "Jag Janman Range Re",
    },
    text: {
      gu: `જગ જનમન રંજે રે, મન્મથ બલ ભંજે રે;
નવિ રાગ નવિ દોષ, તું અંજે ચિત્તશ્યું રે.||૧||
શિર છત્ર બિરાજે રે, દેવદુંદુભિ બાજે રે;
ઠકુરાઈ ઈમ છાજે રે, તો ભી અકિંચનો રે.||૨||
થિરતા ધૃતિ સારી રે, વરી સમતા નારી રે;
બ્રહ્મચારી શિરોમણિ રે, તો પણ તું સુણ્યો રે.||૩||
ન ધરે ભવ રંગો રે, નવિ દોષ આસંગો રે;
મૃગલંછન ચંગો રે, તો પણ તું સહી રે.||૪||
તુજ ગુણ કુણ આખે રે, જગ કેવલી પાખે રે;
સેવક “જશ’ ભાખે રે, અચિરાસુત તું જયો રે.||૫||`,
      hi: `जग जनमन रंजे रे, मन्मथ बल भंजे रे;
नवि राग नवि दोष, तुं अंजे चित्तश्युं रे.||१||
शिर छत्र बिराजे रे, देवदुंदुभि बाजे रे;
ठकुराई ईम छाजे रे, तो भी अकिंचनो रे.||२||
थिरता धृति सारी रे, वरी समता नारी रे;
ब्रह्मचारी शिरोमणि रे, तो पण तुं सुण्यो रे.||३||
न धरे भव रंगो रे, नवि दोष आसंगो रे;
मृगलंछन चंगो रे, तो पण तुं सही रे.||४||
तुज गुण कुण आखे रे, जग केवली पाखे रे;
सेवक “जश’ भाखे रे, अचिरासुत तुं जयो रे.||५||`,
      sa: "",
      en: `Jaga janamana ranje re, manmatha bala bhanje re;
Navi raaga navi dosha, tun anje chittashyun re.||1||
Shira chhatra biraaje re, devadundubhi baaje re;
Thakuraaee eema chhaaje re, to bhee akinchano re.||2||
Thirataa dhruti saaree re, varee samataa naaree re;
Brahmachaaree shiromani re, to pana tun sunyo re.||3||
Na dhare bhava rango re, navi dosha aasango re;
Mrugalanchhana chango re, to pana tun sahee re.||4||
Tuja guna kuna aakhe re, jaga kevalee paakhe re;
Sevaka “jasha’ bhaakhe re, achiraasuta tun jayo re.||5||`,
    },
  },
  {
    id: "jagat-divakar-jag-krupanidhi",
    type: "bhajan",
    title: {
      gu: "જગત દિવાકર જગત કૃપાનિધિ, વાહલા મારા! સમવસરણમાં બેઠાંરે",
      hi: "जगत दिवाकर जगत कृपानिधि, वाहला मारा! समवसरणमां बेठांरे",
      sa: "",
      en: "Jagat Divakar Jag Krupanidhi",
    },
    text: {
      gu: `જગત દિવાકર જગત કૃપાનિધિ, વાહલા મારા! સમવસરણમાં બેઠાંરે;
ચૌમુખ ચઉવિહ ધર્મ પ્રકાશે, તે મેં નયણે દીઠા રે.
ભવિક જન હરખો રે, નિરખી શાંતિ જિણંદ;
ઉપશમ રસનો કંદ, નહિ ઈણ સરખો રે. ॥੧॥
પ્રાતિહાર્ય અતિશય શોભા, વા૦મા૦ તે તો કહિય ન જાવે રે;
ઘૂક બાલથી રવિ કર ભરનું, વર્ણન કિણુ પર થાવે રે. ५०॥२॥
વાણી ગુણ પાંત્રીશ અનોપમ, વા૦મા૦ અવિસંવાદ સરુપે રે;
ભવદુઃખ વારણ શિવસુખ કારણ, શુદ્ધ ધર્મ પ્રરુપે રે. ભ૦||૩||
દક્ષિણ પશ્ચિમ ઉત્તર દિશિમુખ, વા૦મા૦ ઠવણા જિન ઉપગારી રે;
તસુ આલંબન લહિય અનેકે, તિહાં થયા સમકિત ધારી રે. ભ૦||૪॥
ષટ નય કારજ રુપે ઠવણા, વા૦મા૦ સગ નય કારણ ઠાણી રે;
નિમિત્ત સમાન થાપના જિનજી, એ આગમની વાણી રે. ભ૦િ।।૫।।
સાધક તીન નિક્ષેપા મુખ્ય, વા૦મા૦ જે વિણુભાવ ન લહિયે રે;
ઉપગારી દુગ ભાષ્યે ભાખ્યા, ભાવ વંદકનો ગ્રહીયે રે. ભ૦।।૬।।
ઠવણા સમવસરણ જિન સેંતી, વા૦મા૦ જો અભેદતા વાધી રે;
એ આત્માના સ્વ સ્વભાવ ગુણ, વ્યક્ત યોગ્યતા સાધી રે. ભ૦।।૭।।
ભલું થયું મેં પ્રભુ ગુણ ગાયા, વા૦મા૦ રસનાનો રસ લીધો રે
“દેવચંદ્ર’ કહે માહરા મનનો, સકળ મનોરથ સિધો રે. ભ૦।।૮।|`,
      hi: `जगत दिवाकर जगत कृपानिधि, वाहला मारा! समवसरणमां बेठांरे;
चौमुख चउविह धर्म प्रकाशे, ते में नयणे दीठा रे.
भविक जन हरखो रे, निरखी शांति जिणंद;
उपशम रसनो कंद, नहि ईण सरखो रे. ॥੧॥
प्रातिहार्य अतिशय शोभा, वा०मा० ते तो कहिय न जावे रे;
घूक बालथी रवि कर भरनुं, वर्णन किणु पर थावे रे. ५०॥२॥
वाणी गुण पांत्रीश अनोपम, वा०मा० अविसंवाद सरुपे रे;
भवदुःख वारण शिवसुख कारण, शुद्ध धर्म प्ररुपे रे. भ०||३||
दक्षिण पश्चिम उत्तर दिशिमुख, वा०मा० ठवणा जिन उपगारी रे;
तसु आलंबन लहिय अनेके, तिहां थया समकित धारी रे. भ०||४॥
षट नय कारज रुपे ठवणा, वा०मा० सग नय कारण ठाणी रे;
निमित्त समान थापना जिनजी, ए आगमनी वाणी रे. भ०ि।।५।।
साधक तीन निक्षेपा मुख्य, वा०मा० जे विणुभाव न लहिये रे;
उपगारी दुग भाष्ये भाख्या, भाव वंदकनो ग्रहीये रे. भ०।।६।।
ठवणा समवसरण जिन सेंती, वा०मा० जो अभेदता वाधी रे;
ए आत्माना स्व स्वभाव गुण, व्यक्त योग्यता साधी रे. भ०।।७।।
भलुं थयुं में प्रभु गुण गाया, वा०मा० रसनानो रस लीधो रे
“देवचंद्र’ कहे माहरा मननो, सकळ मनोरथ सिधो रे. भ०।।८।|`,
      sa: "",
      en: `Jagata divaakara jagata krupaanidhi, vaahalaa maaraa! samavasaranamaan bethaanre;
Chaumukha chauviha dharma prakaashe, te men nayane deethaa re.
Bhavika jana harakho re, nirakhee shaanti jinanda;
Upashama rasano kanda, nahi eena sarakho re. ||1||
Praatihaarya atishaya shobhaa, vaa0maa0 te to kahiya na jaave re;
Ghooka baalathee ravi kara bharanun, varnana kinu para thaave re. 50||2||
Vaanee guna paantreesha anopama, vaa0maa0 avisanvaada sarupe re;
Bhavadukha vaarana shivasukha kaarana, shuddha dharma prarupe re. bha0||3||
Dakshina pashchima uttara dishimukha, vaa0maa0 thavanaa jina upagaaree re;
Tasu aalanbana lahiya aneke, tihaan thayaa samakita dhaaree re. bha0||4||
Shata naya kaaraja rupe thavanaa, vaa0maa0 saga naya kaarana thaanee re;
Nimitta samaana thaapanaa jinajee, e aagamanee vaanee re. bha0િ||5||
Saadhaka teena nikshepaa mukhya, vaa0maa0 je vinubhaava na lahiye re;
Upagaaree duga bhaashye bhaakhyaa, bhaava vandakano graheeye re. bha0||6||
Thavanaa samavasarana jina sentee, vaa0maa0 jo abhedataa vaadhee re;
E aatmaanaa sva svabhaava guna, vyakta yogyataa saadhee re. bha0||7||
Bhalun thayun men prabhu guna gaayaa, vaa0maa0 rasanaano rasa leedho re
“devachandra’ kahe maaharaa manano, sakala manoratha sidho re. bha0||8||`,
    },
  },
  {
    id: "jagchintamani-jagaguru",
    type: "bhajan",
    title: {
      gu: "જગચિંતામણિ જગગુરુ, જગત શરણ આધાર લાલ રે",
      hi: "जगचिंतामणि जगगुरु, जगत शरण आधार लाल रे",
      sa: "",
      en: "Jagchintamani Jagaguru",
    },
    text: {
      gu: `જગચિંતામણિ જગગુરુ, જગત શરણ આધાર લાલ રે;
અઢાર કોડાકોડી સાગરે, ધરમ ચલાવણહાર લાલ રે. જગ૦ ।।૧ ।।
અષાઢ વદિ ચોથે પ્રભુજી, સ્વર્ગથી લીયે અવતાર લાલ રે;
ચૈતર વદિ આઠમ દિને, જનમ્યા જગદાધાર લાલ રે.||૨||
પાંચસે ધનુષની દેહડી, સોવન વરણ શરીર લાલ રે;
ચૈતર વદિ આઠમ લીયે, સંજમ મહાવડવીર લાલ રે.||૩||
ફાગુણ વદિ ઈગ્યારસેં, પામ્યા પંચમ નાણ લાલ રે;
મહા વદિ તેરસે શિવવર્યા,
જોગ નિરોધ કરી જાણ લાલ રે. જગ૦ ।।૪।।
ચોરાસી લાખપૂર્વનું, જિનવર ઉત્તમ આય લાલ રે;
“પદ્મવિજય” કહે પ્રણમતાં,
વહેલું શિવસુખ થાય લાલ રે.જગ||૫||`,
      hi: `जगचिंतामणि जगगुरु, जगत शरण आधार लाल रे;
अढार कोडाकोडी सागरे, धरम चलावणहार लाल रे. जग० ।।१ ।।
अषाढ वदि चोथे प्रभुजी, स्वर्गथी लीये अवतार लाल रे;
चैतर वदि आठम दिने, जनम्या जगदाधार लाल रे.||२||
पांचसे धनुषनी देहडी, सोवन वरण शरीर लाल रे;
चैतर वदि आठम लीये, संजम महावडवीर लाल रे.||३||
फागुण वदि ईग्यारसें, पाम्या पंचम नाण लाल रे;
महा वदि तेरसे शिववर्या,
जोग निरोध करी जाण लाल रे. जग० ।।४।।
चोरासी लाखपूर्वनुं, जिनवर उत्तम आय लाल रे;
“पद्मविजय” कहे प्रणमतां,
वहेलुं शिवसुख थाय लाल रे.जग||५||`,
      sa: "",
      en: `Jagachintaamani jagaguru, jagata sharana aadhaara laala re;
Adhaara kodaakodee saagare, dharama chalaavanahaara laala re. jaga0 ||1 ||
Ashaadha vadi chothe prabhujee, svargathee leeye avataara laala re;
Chaitara vadi aathama dine, janamyaa jagadaadhaara laala re.||2||
Paanchase dhanushanee dehadee, sovana varana shareera laala re;
Chaitara vadi aathama leeye, sanjama mahaavadaveera laala re.||3||
Phaaguna vadi eegyaarasen, paamyaa panchama naana laala re;
Mahaa vadi terase shivavaryaa,
Joga nirodha karee jaana laala re. jaga0 ||4||
Choraasee laakhapoorvanun, jinavara uttama aaya laala re;
“padmavijaya” kahe pranamataan,
Vahelun shivasukha thaaya laala re.jaga||5||`,
    },
  },
  {
    id: "jagjivan-jagvahalo",
    type: "bhajan",
    title: {
      gu: "જગજીવન જગવાલહો, મરુદેવીનો નંદ લાલ રે",
      hi: "जगजीवन जगवालहो, मरुदेवीनो नंद लाल रे",
      sa: "",
      en: "Jagjivan Jagvahalo",
    },
    text: {
      gu: `જગજીવન જગવાલહો, મરુદેવીનો નંદ લાલ રે,
દીઠે સુખ ઊપજે, દરિશન અતિહિ આનંદ લાલ રે. ॥੧॥
મુખ આંખડી અમ્બુજ પાંખડી, અષ્ટમી શશિ સમ ભાલ લાલ રે;
વદન તે ચંદલો, વાણી અતિહિ રસાલ લાલ રે. ॥२॥
લક્ષણ અંગે વિરાજતાં, અડહિય સહસ ઉદાર લાલ રે;
રેખા કર ચરણાદિકે, અભ્યંતર નહિ પાર લાલ રે.||૩||
ઇન્દ્ર ચન્દ્ર રવિ ગિરિ તણાં, ગુણ લહી ઘડીયું અંગ લાલ રે;
ભાગ્ય કિહાં થકી આવીયું, અચરિજ એહ ઉત્તુંગ લાલ રે. ॥४॥
ગુણ સઘળા અંગી કર્યા, દૂર કર્યા સવિ દોષ લાલ રે;
વાચક “જશવિજયે” થુણ્યો, દેજો સુખનો પોષ લાલ રે. ॥५॥`,
      hi: `जगजीवन जगवालहो, मरुदेवीनो नंद लाल रे,
दीठे सुख ऊपजे, दरिशन अतिहि आनंद लाल रे. ॥੧॥
मुख आंखडी अम्बुज पांखडी, अष्टमी शशि सम भाल लाल रे;
वदन ते चंदलो, वाणी अतिहि रसाल लाल रे. ॥२॥
लक्षण अंगे विराजतां, अडहिय सहस उदार लाल रे;
रेखा कर चरणादिके, अभ्यंतर नहि पार लाल रे.||३||
इन्द्र चन्द्र रवि गिरि तणां, गुण लही घडीयुं अंग लाल रे;
भाग्य किहां थकी आवीयुं, अचरिज एह उत्तुंग लाल रे. ॥४॥
गुण सघळा अंगी कर्या, दूर कर्या सवि दोष लाल रे;
वाचक “जशविजये” थुण्यो, देजो सुखनो पोष लाल रे. ॥५॥`,
      sa: "",
      en: `Jagajeevana jagavaalaho, marudeveeno nanda laala re,
Deethe sukha oopaje, darishana atihi aananda laala re. ||1||
Mukha aankhadee ambuja paankhadee, ashtamee shashi sama bhaala laala re;
Vadana te chandalo, vaanee atihi rasaala laala re. ||2||
Lakshana ange viraajataan, adahiya sahasa udaara laala re;
Rekhaa kara charanaadike, abhyantara nahi paara laala re.||3||
Indra chandra ravi giri tanaan, guna lahee ghadeeyun anga laala re;
Bhaagya kihaan thakee aaveeyun, acharija eha uttunga laala re. ||4||
Guna saghalaa angee karyaa, doora karyaa savi dosha laala re;
Vaachaka “jashavijaye” thunyo, dejo sukhano posha laala re. ||5||`,
    },
  },
  {
    id: "jagpati-tu-to-devadhideva",
    type: "bhajan",
    title: {
      gu: "જગપતિ તું તો દેવાધિદેવ! દાસનો દાસ હું તાહરો",
      hi: "जगपति तुं तो देवाधिदेव! दासनो दास हुं ताहरो",
      sa: "",
      en: "Jagpati Tu To Devadhideva",
    },
    text: {
      gu: `જગપતિ તું તો દેવાધિદેવ! દાસનો દાસ હું તાહરો;
જગપતિ તારક તું કિરતાર, મનમોહન પ્રભુ! માહરો.||૧||
જગપતિ તાહરે ભક્ત અનેક, માહરે એક જ તું ઘણી;
જગપતિ વીરમાં તું મહાવીર, મૂરતિ તાહરી સોહામણી.||૨||
જગપતિ ત્રિશલારાણીનો તું તનુ, ગંધાર બંદરે ગાજીઓ;
જગપતિ સિદ્ધારથ કુલ શણગાર, રાજરાજેશ્વર રાજિયો.||૩||
જગપતિ ભક્તોની ભાંગે તું ભીડ, પીડ પરાઈ પ્રભુ પારખે;
જગપતિ તુંહિ અગમ અપાર,
સમજ્યો ન જાએ મુજ સારિખે. ||૪ ||
ખંભાત જંબુસર સંઘ, ભગવંત ચોવીસમો ભેટિઓ;
જગપતિ “ઉદય’ નમે કર જોડ, સત્તર નેવું સમે કીઓ.||૫||`,
      hi: `जगपति तुं तो देवाधिदेव! दासनो दास हुं ताहरो;
जगपति तारक तुं किरतार, मनमोहन प्रभु! माहरो.||१||
जगपति ताहरे भक्त अनेक, माहरे एक ज तुं घणी;
जगपति वीरमां तुं महावीर, मूरति ताहरी सोहामणी.||२||
जगपति त्रिशलाराणीनो तुं तनु, गंधार बंदरे गाजीओ;
जगपति सिद्धारथ कुल शणगार, राजराजेश्वर राजियो.||३||
जगपति भक्तोनी भांगे तुं भीड, पीड पराई प्रभु पारखे;
जगपति तुंहि अगम अपार,
समज्यो न जाए मुज सारिखे. ||४ ||
खंभात जंबुसर संघ, भगवंत चोवीसमो भेटिओ;
जगपति “उदय’ नमे कर जोड, सत्तर नेवुं समे कीओ.||५||`,
      sa: "",
      en: `Jagapati tun to devaadhideva! daasano daasa hun taaharo;
Jagapati taaraka tun kirataara, manamohana prabhu! maaharo.||1||
Jagapati taahare bhakta aneka, maahare eka ja tun ghanee;
Jagapati veeramaan tun mahaaveera, moorati taaharee sohaamanee.||2||
Jagapati trishalaaraaneeno tun tanu, gandhaara bandare gaajeeo;
Jagapati siddhaaratha kula shanagaara, raajaraajeshvara raajiyo.||3||
Jagapati bhaktonee bhaange tun bheeda, peeda paraaee prabhu paarakhe;
Jagapati tunhi agama apaara,
Samajyo na jaae muja saarikhe. ||4 ||
Khanbhaata janbusara sangha, bhagavanta choveesamo bhetio;
Jagapati “udaya’ name kara joda, sattara nevun same keeo.||5||`,
    },
  },
  {
    id: "jaine-rehejo-mara-vahalaji-re",
    type: "bhajan",
    title: {
      gu: "જઈને રહેજો મારા વાલાજી રે, શ્રી ગિરનારની ગોખમાં",
      hi: "जईने रहेजो मारा वालाजी रे, श्री गिरनारनी गोखमां",
      sa: "",
      en: "Jaine Rehejo Mara Vahalaji Re",
    },
    text: {
      gu: `જઈને રહેજો મારા વાલાજી રે, શ્રી ગિરનારની ગોખમાં;
જઈને૦ અમે પણ તિહાં આવશું મારા વાલાજી રે,
જિહાંરે પામીશું જોગ. ।।૧।।
જાન લઈ જૂનાગઢે, મારા૦ આવ્યા તોરણ આપ; જઈને૦
પશુડા પેખી પાછા વળ્યા, મારા૦ જાતા ન દીધો જવાબ. ॥२॥
સુંદર આપણે સાહિબા, મારા૦ જોતા નહિ મલે જોડ; જઈને૦
બોલ્યાઅણબોલ્યા કરે, મારા૦ શી વાતે તમને ખોડ.॥३॥
હું રાગી તું વૈરાગી, મારા૦ જગમાં જાણે સહુ કોઈ; જઈને૦
રાગી તો લાગી રહે, મારા૦ વૈરાગી રાગી ન હોય.||૪||
વર બીજો હું નવિ વરું, મારા૦ સઘળા મેલી સંવાદ;
જઈને૦ મોહનિયાને જઈ મલું, મારા૦ મોટા સાથે શો વાદ.||૫||
ગઢ તો એક ગિરનાર છે, મારા૦ નાથ એક શ્રી નેમ;
જઈને૦ રમણી એક રાજીમતી, મારા૦ પૂરો પાડ્યો જેણે પ્રેમ. ॥६॥
વાચક “ઉદય’ને વંદના, મારા૦ માની લેજો મહારાજ;
જઈને૦ નેમ રાજુલ મુક્તિ વર્યા, મારા૦ સાર્યા આતમ કાજ. ॥७॥`,
      hi: `जईने रहेजो मारा वालाजी रे, श्री गिरनारनी गोखमां;
जईने० अमे पण तिहां आवशुं मारा वालाजी रे,
जिहांरे पामीशुं जोग. ।।१।।
जान लई जूनागढे, मारा० आव्या तोरण आप; जईने०
पशुडा पेखी पाछा वळ्या, मारा० जाता न दीधो जवाब. ॥२॥
सुंदर आपणे साहिबा, मारा० जोता नहि मले जोड; जईने०
बोल्याअणबोल्या करे, मारा० शी वाते तमने खोड.॥३॥
हुं रागी तुं वैरागी, मारा० जगमां जाणे सहु कोई; जईने०
रागी तो लागी रहे, मारा० वैरागी रागी न होय.||४||
वर बीजो हुं नवि वरुं, मारा० सघळा मेली संवाद;
जईने० मोहनियाने जई मलुं, मारा० मोटा साथे शो वाद.||५||
गढ तो एक गिरनार छे, मारा० नाथ एक श्री नेम;
जईने० रमणी एक राजीमती, मारा० पूरो पाड्यो जेणे प्रेम. ॥६॥
वाचक “उदय’ने वंदना, मारा० मानी लेजो महाराज;
जईने० नेम राजुल मुक्ति वर्या, मारा० सार्या आतम काज. ॥७॥`,
      sa: "",
      en: `Jaeene rahejo maaraa vaalaajee re, shree giranaaranee gokhamaan;
Jaeene0 ame pana tihaan aavashun maaraa vaalaajee re,
Jihaanre paameeshun joga. ||1||
Jaana laee joonaagadhe, maaraa0 aavyaa torana aapa; jaeene0
Pashudaa pekhee paachhaa valyaa, maaraa0 jaataa na deedho javaaba. ||2||
Sundara aapane saahibaa, maaraa0 jotaa nahi male joda; jaeene0
Bolyaaanabolyaa kare, maaraa0 shee vaate tamane khoda.||3||
Hun raagee tun vairaagee, maaraa0 jagamaan jaane sahu koee; jaeene0
Raagee to laagee rahe, maaraa0 vairaagee raagee na hoya.||4||
Vara beejo hun navi varun, maaraa0 saghalaa melee sanvaada;
Jaeene0 mohaniyaane jaee malun, maaraa0 motaa saathe sho vaada.||5||
Gadha to eka giranaara chhe, maaraa0 naatha eka shree nema;
Jaeene0 ramanee eka raajeematee, maaraa0 pooro paadyo jene prema. ||6||
Vaachaka “udaya’ne vandanaa, maaraa0 maanee lejo mahaaraaja;
Jaeene0 nema raajula mukti varyaa, maaraa0 saaryaa aatama kaaja. ||7||`,
    },
  },
  {
    id: "jay-jay-jay-jay-pas-jinanda",
    type: "bhajan",
    title: {
      gu: "જય! જય! જય! પાસ જિણંદા…",
      hi: "जय! जय! जय! पास जिणंदा…",
      sa: "",
      en: "Jay Jay Jay Jay Pas Jinanda",
    },
    text: {
      gu: `જય! જય! જય! પાસ જિણંદા…
અંતરીક્ષ ત્રિભુવન તારક, ભવિક કમલ-ઉલ્લાસ દિણંદા. ।।૧ ।।
તેરે ચરણ શરણ મેં કીનો, તુમ બિન કુન તોડે ભવફંદા;
પરમ પુરુષ પરમારથદર્શી, તું દિયે ભવિકકું પરમાનંદા. ॥२॥
તું નાયક તું શિવસુખદાયક, તું હિતચિંતક, તું સુખકંદા;
તું જનરંજન, તું ભવભંજન, તું કેવલ કમલા-ગોવિંદા. ॥3॥
કોડી દેવ મિલકે કર ન શકે, એક અંગૂઠ રૂપ પ્રતિછંદા;
ઐસો અદ્ભુત રુપ તિહારો, વરસત માનું અમૃત કે બુંદા. ॥४॥
મન મધુકર કે મોહન, તુમ હો વિમલ સદલ અરવિંદા;
નયન ચકોર વિલાસ કરત હૈ, દેખત તુમ મુખ પૂનમચંદા. ॥੫॥
દૂર જાવે પ્રભુ! તુમ દરિશન સે, દુઃખ દોહગ દારિદ્ર અઘદંદા;
‘યશ” કહે સહજ ફલત હૈ, જે બોલે તુમ ગુણ કે વૃંદા. ।।૬।।`,
      hi: `जय! जय! जय! पास जिणंदा…
अंतरीक्ष त्रिभुवन तारक, भविक कमल-उल्लास दिणंदा. ।।१ ।।
तेरे चरण शरण में कीनो, तुम बिन कुन तोडे भवफंदा;
परम पुरुष परमारथदर्शी, तुं दिये भविककुं परमानंदा. ॥२॥
तुं नायक तुं शिवसुखदायक, तुं हितचिंतक, तुं सुखकंदा;
तुं जनरंजन, तुं भवभंजन, तुं केवल कमला-गोविंदा. ॥3॥
कोडी देव मिलके कर न शके, एक अंगूठ रूप प्रतिछंदा;
ऐसो अद्भुत रुप तिहारो, वरसत मानुं अमृत के बुंदा. ॥४॥
मन मधुकर के मोहन, तुम हो विमल सदल अरविंदा;
नयन चकोर विलास करत है, देखत तुम मुख पूनमचंदा. ॥੫॥
दूर जावे प्रभु! तुम दरिशन से, दुःख दोहग दारिद्र अघदंदा;
‘यश” कहे सहज फलत है, जे बोले तुम गुण के वृंदा. ।।६।।`,
      sa: "",
      en: `Jaya! jaya! jaya! paasa jinandaa…
Antareeksha tribhuvana taaraka, bhavika kamala-ullaasa dinandaa. ||1 ||
Tere charana sharana men keeno, tuma bina kuna tode bhavaphandaa;
Parama purusha paramaarathadarshee, tun diye bhavikakun paramaanandaa. ||2||
Tun naayaka tun shivasukhadaayaka, tun hitachintaka, tun sukhakandaa;
Tun janaranjana, tun bhavabhanjana, tun kevala kamalaa-govindaa. ||3||
Kodee deva milake kara na shake, eka angootha roopa pratichhandaa;
Aiso adbhuta rupa tihaaro, varasata maanun amruta ke bundaa. ||4||
Mana madhukara ke mohana, tuma ho vimala sadala aravindaa;
Nayana chakora vilaasa karata hai, dekhata tuma mukha poonamachandaa. ||5||
Doora jaave prabhu! tuma darishana se, dukha dohaga daaridra aghadandaa;
‘yasha” kahe sahaja phalata hai, je bole tuma guna ke vrundaa. ||6||`,
    },
  },
  {
    id: "jinaji-trevismo-jin-paas",
    type: "bhajan",
    title: {
      gu: "જિનજી ત્રેવીશમો જિન પાસ કે",
      hi: "जिनजी त्रेवीशमो जिन पास के",
      sa: "",
      en: "Jinaji Trevismo Jin Paas",
    },
    text: {
      gu: `જિનજી ત્રેવીશમો જિન પાસ કે,
આશ મુજ પૂરવેરે લો, માહરા નાથજી રે લો૦
જિનજી ઈહભવ પરભવ દુઃખ, દોહગ સવિ ચૂરવે રે લો;મા૦
જિ૦ આઠ પ્રાતિહાર્યશું, તું જયો રે લો, મા૦
જિ૦ તાહરા વૃક્ષ અશોકથી, શોક દૂરે ગયો રે લો, મા૦. ॥१॥
જિ૦ જાનુ પ્રમાણ ગીર્વાણ, કુસુમ વૃષ્ટિ કરે રે લો,
મા૦ જિ૦ દિવ્યધ્વનિ સુર પુરે કે, વાંસલીયે સ્વરે રે લો;
મા૦ જિ૦ ચામર કેરી હાર ચલંતી, એમ કહે રે લો,
મા૦ જિ૦ જે નમે અમ પરે તે ભવી, ઉર્ધ્વગતિ લહે રે લો, મા૦. ।।૧||
જિ૦ પાદપીઠ સિંહાસન, વ્યંતર વિરચીયે રે લો,
મા૦ જિ૦ તિહાં બેસી જિનરાજ, ભવિક દેશના દીયે રે લો,
મા૦ જિ૦ ભામંડલ શિર પૂંઠે, સૂર્ય પરે તપે રે લો,
મા૦ જિ૦ નિરખી હરખે જેહ, તેહના પાતક ખપે રે લો, મા૦.||૩||
જિ0 દેવદુંદિભિનો નાદ, ગંભીર ગાજે ઘણો રે લો,
મા૦ જિ૦ ત્રણ છત્ર કહે તુજ કે, ત્રિભુવન પતિપણો રે લો;
મા૦ જિ૦ એ ઠકુરાઈ તુજ કે, બીજે નવિ ઘટે રે લો,
મા૦ જિ૦ રાગી દ્વેષી દેવ કે, તે ભવમાં અટે રે લો, મા૦. ॥४॥
જિ૦ પૂજક નિંદક દોય કે, તાહરે સમપણે રે લો,
મા૦ જિ૦ કમઠ ધરણપતિ ઉપર, સમચિત્ત તું ગણે રે લો;
મા૦ જિ. પણ ઉત્તમ તુજ પાદ, ‘પદ્મ’ સેવા કરે રે લો,
મા૦ જિ૦ તેહ સ્વભાવે ભવ્ય કે, ભવસાગર તરે રે લો, મા૦.||૫||`,
      hi: `जिनजी त्रेवीशमो जिन पास के,
आश मुज पूरवेरे लो, माहरा नाथजी रे लो०
जिनजी ईहभव परभव दुःख, दोहग सवि चूरवे रे लो;मा०
जि० आठ प्रातिहार्यशुं, तुं जयो रे लो, मा०
जि० ताहरा वृक्ष अशोकथी, शोक दूरे गयो रे लो, मा०. ॥१॥
जि० जानु प्रमाण गीर्वाण, कुसुम वृष्टि करे रे लो,
मा० जि० दिव्यध्वनि सुर पुरे के, वांसलीये स्वरे रे लो;
मा० जि० चामर केरी हार चलंती, एम कहे रे लो,
मा० जि० जे नमे अम परे ते भवी, उर्ध्वगति लहे रे लो, मा०. ।।१||
जि० पादपीठ सिंहासन, व्यंतर विरचीये रे लो,
मा० जि० तिहां बेसी जिनराज, भविक देशना दीये रे लो,
मा० जि० भामंडल शिर पूंठे, सूर्य परे तपे रे लो,
मा० जि० निरखी हरखे जेह, तेहना पातक खपे रे लो, मा०.||३||
जि0 देवदुंदिभिनो नाद, गंभीर गाजे घणो रे लो,
मा० जि० त्रण छत्र कहे तुज के, त्रिभुवन पतिपणो रे लो;
मा० जि० ए ठकुराई तुज के, बीजे नवि घटे रे लो,
मा० जि० रागी द्वेषी देव के, ते भवमां अटे रे लो, मा०. ॥४॥
जि० पूजक निंदक दोय के, ताहरे समपणे रे लो,
मा० जि० कमठ धरणपति उपर, समचित्त तुं गणे रे लो;
मा० जि. पण उत्तम तुज पाद, ‘पद्म’ सेवा करे रे लो,
मा० जि० तेह स्वभावे भव्य के, भवसागर तरे रे लो, मा०.||५||`,
      sa: "",
      en: `Jinajee treveeshamo jina paasa ke,
Aasha muja pooravere lo, maaharaa naathajee re lo0
Jinajee eehabhava parabhava dukha, dohaga savi choorave re lo;maa0
Ji0 aatha praatihaaryashun, tun jayo re lo, maa0
Ji0 taaharaa vruksha ashokathee, shoka doore gayo re lo, maa0. ||1||
Ji0 jaanu pramaana geervaana, kusuma vrushti kare re lo,
Maa0 ji0 divyadhvani sura pure ke, vaansaleeye svare re lo;
Maa0 ji0 chaamara keree haara chalantee, ema kahe re lo,
Maa0 ji0 je name ama pare te bhavee, urdhvagati lahe re lo, maa0. ||1||
Ji0 paadapeetha sinhaasana, vyantara viracheeye re lo,
Maa0 ji0 tihaan besee jinaraaja, bhavika deshanaa deeye re lo,
Maa0 ji0 bhaamandala shira poonthe, soorya pare tape re lo,
Maa0 ji0 nirakhee harakhe jeha, tehanaa paataka khape re lo, maa0.||3||
Ji0 devadundibhino naada, ganbheera gaaje ghano re lo,
Maa0 ji0 trana chhatra kahe tuja ke, tribhuvana patipano re lo;
Maa0 ji0 e thakuraaee tuja ke, beeje navi ghate re lo,
Maa0 ji0 raagee dveshee deva ke, te bhavamaan ate re lo, maa0. ||4||
Ji0 poojaka nindaka doya ke, taahare samapane re lo,
Maa0 ji0 kamatha dharanapati upara, samachitta tun gane re lo;
Maa0 ji. pana uttama tuja paada, ‘padma’ sevaa kare re lo,
Maa0 ji0 teha svabhaave bhavya ke, bhavasaagara tare re lo, maa0.||5||`,
    },
  },
  {
    id: "jinand-ve-din-kayu-sambhare",
    type: "bhajan",
    title: {
      gu: "વે દિન ક્યું ન સંભારે… સાહિબ તુમ અમ સમય અનંતો",
      hi: "वे दिन क्युं न संभारे… साहिब तुम अम समय अनंतो",
      sa: "",
      en: "Jinand Ve Din Kayu Sambhare",
    },
    text: {
      gu: `વે દિન ક્યું ન સંભારે… સાહિબ તુમ અમ સમય અનંતો,
ઈકઠા ઈણ સંસારે. જિણંદા૦ ।। ૧ ।।
આપ અજર અમર હોઈ બેઠે,સેવક કરીએ કિનારે;
મોટા જેહ કરે તે છાજે, તિહાં કુણ તુમને વારે?.જિણંદા૦ ।। ૨ ।।
ત્રિભુવન ઠકુરાઈ અબ પાઈ, કહો તુમ કુણ સહારે;
આપ ઉદાસીન ભાવ મેં આયે, દાસકુક્યુંન સુધારે?. જિણંદા૦।।૩।।
તુંહિ તુંહિ તુંહિ તુંહિ, તુંહિ જે ચિત્ત ધારે; યાહિ હેતુ જે આપ સ્વભાવે,
ભવજલ પાર ઉતારે. જિણંદા૦।।૪ ।।
‘જ્ઞાનવિમલ’ ગુણ પરમાનંદે, સકલ સમીહિત સારે;
બાહ્ય અભ્યંતર ઇતિ ઉપદ્રવ, અરિયણ દૂર નિવારે. જિણંદા૦ ।।૫।।`,
      hi: `वे दिन क्युं न संभारे… साहिब तुम अम समय अनंतो,
ईकठा ईण संसारे. जिणंदा० ।। १ ।।
आप अजर अमर होई बेठे,सेवक करीए किनारे;
मोटा जेह करे ते छाजे, तिहां कुण तुमने वारे?.जिणंदा० ।। २ ।।
त्रिभुवन ठकुराई अब पाई, कहो तुम कुण सहारे;
आप उदासीन भाव में आये, दासकुक्युंन सुधारे?. जिणंदा०।।३।।
तुंहि तुंहि तुंहि तुंहि, तुंहि जे चित्त धारे; याहि हेतु जे आप स्वभावे,
भवजल पार उतारे. जिणंदा०।।४ ।।
‘ज्ञानविमल’ गुण परमानंदे, सकल समीहित सारे;
बाह्य अभ्यंतर इति उपद्रव, अरियण दूर निवारे. जिणंदा० ।।५।।`,
      sa: "",
      en: `Ve dina kyun na sanbhaare… saahiba tuma ama samaya ananto,
Eekathaa eena sansaare. jinandaa0 || 1 ||
Aapa ajara amara hoee bethe,sevaka kareee kinaare;
Motaa jeha kare te chhaaje, tihaan kuna tumane vaare?.jinandaa0 || 2 ||
Tribhuvana thakuraaee aba paaee, kaho tuma kuna sahaare;
Aapa udaaseena bhaava men aaye, daasakukyunna sudhaare?. jinandaa0||3||
Tunhi tunhi tunhi tunhi, tunhi je chitta dhaare; yaahi hetu je aapa svabhaave,
Bhavajala paara utaare. jinandaa0||4 ||
‘jnyaanavimala’ guna paramaanande, sakala sameehita saare;
Baahya abhyantara iti upadrava, ariyana doora nivaare. jinandaa0 ||5||`,
    },
  },
  {
    id: "jin-tere-charan-ki-sharan-grahu",
    type: "bhajan",
    title: {
      gu: "જિન! તેરે ચરણ કી શરણ ગ્રહું…",
      hi: "जिन! तेरे चरण की शरण ग्रहुं…",
      sa: "",
      en: "Jin Tere Charan Ki Sharan Grahu",
    },
    text: {
      gu: `જિન! તેરે ચરણ કી શરણ ગ્રહું…
હૃદયકમલ મેં ધ્યાન ધરત હું, શિર તુજ આણ વહું. જિન૦ ।।૧ ।।
તુમ સમ ખોળ્યો દેવ ખલક મેં, પેખ્યો નહીં કબહું. જિન૦ ।। ૨ ।।
તેરે ગુણ કી જપું જપમાલા, અહર્નિશ પાપ દહું. જિન૦ ।।૩।।
મેરે મન કી તુમ સબ જાનો, ક્યાં મુખ બહોત કહું. જિન૦।।૪ ।।
કહે ‘જસવિજય’ કરોત્યું સાહિબ, જ્યું ભવદુઃખન લહું.જિન૦ ||૫||`,
      hi: `जिन! तेरे चरण की शरण ग्रहुं…
हृदयकमल में ध्यान धरत हुं, शिर तुज आण वहुं. जिन० ।।१ ।।
तुम सम खोळ्यो देव खलक में, पेख्यो नहीं कबहुं. जिन० ।। २ ।।
तेरे गुण की जपुं जपमाला, अहर्निश पाप दहुं. जिन० ।।३।।
मेरे मन की तुम सब जानो, क्यां मुख बहोत कहुं. जिन०।।४ ।।
कहे ‘जसविजय’ करोत्युं साहिब, ज्युं भवदुःखन लहुं.जिन० ||५||`,
      sa: "",
      en: `Jina! tere charana kee sharana grahun…
Hrudayakamala men dhyaana dharata hun, shira tuja aana vahun. jina0 ||1 ||
Tuma sama kholyo deva khalaka men, pekhyo naheen kabahun. jina0 || 2 ||
Tere guna kee japun japamaalaa, aharnisha paapa dahun. jina0 ||3||
Mere mana kee tuma saba jaano, kyaan mukha bahota kahun. jina0||4 ||
Kahe ‘jasavijaya’ karotyun saahiba, jyun bhavadukhana lahun.jina0 ||5||`,
    },
  },
  {
    id: "karunasagar-jivjivan-prabhu",
    type: "bhajan",
    title: {
      gu: "કરુણાસાગર જીવજીવન પ્રભુ વીરજી",
      hi: "करुणासागर जीवजीवन प्रभु वीरजी",
      sa: "",
      en: "Karunasagar Jivjivan Prabhu",
    },
    text: {
      gu: `કરુણાસાગર જીવજીવન પ્રભુ વીરજી,
અનંતગુણના ધારક પ્રાણ આધાર જો;
મુજને મૂકી ભવ અટવીમાં એકલો,
આપ સિધાવ્યા મુક્તિપુરીમાં નાથ જો.||૧||
સિદ્ધ બુદ્ધ અવિનાશી પદના ભોગી છે,
હું છું પામર મોહજાળમાં મગ્ન જ;
નાથ નિહાળી આવ્યો શરણે આપના,
તાર તાર હો તારક દેવ દયાળ જો.||૨||
સમવસરણમાં બેસી અમીરસ વાણીથી,
જ્યારે કરતાં પ્રભુજી ભવિ ઉપકાર જો;
તે વેળા હું ભાગ્ય વિહુણો કઈ ગતિ,
ન પામ્યો ભવસાગરનો અંત જો.||૩||
જ્ઞાન અનંતું સુખ અનંતું તાહરું,
ક્ષાયિક ભાવે વર્તે છે તુજ ગુણ જો;
પણ હું પાપી રમણ કરું પરભાવમાં,
તો કેમ પામું સ્વરુપ રમણનું સુખ જે.||૪||
સિદ્ધારથ કુલ ચરમ પ્રભુ મહાવીરજી,
ત્રિશલા નંદન ત્રિજગવંદન નાથ જો;
મનમંદિરમાં આવો પ્યારા વીરજી,
વિણ સૂનો છે આ દરબાર જો.||૫||
અનેક જીવને તાર્યા તેં કરુણાનિધિ,
તો શું મુજને મૂકી જશો ભગવાન જો;
મનોહર મુદ્રા જોવા તલસે તાહરી,
“ઉદયરત્ન’ કહે ઘો દરિશણ મહારાજ જે.||૬||`,
      hi: `करुणासागर जीवजीवन प्रभु वीरजी,
अनंतगुणना धारक प्राण आधार जो;
मुजने मूकी भव अटवीमां एकलो,
आप सिधाव्या मुक्तिपुरीमां नाथ जो.||१||
सिद्ध बुद्ध अविनाशी पदना भोगी छे,
हुं छुं पामर मोहजाळमां मग्न ज;
नाथ निहाळी आव्यो शरणे आपना,
तार तार हो तारक देव दयाळ जो.||२||
समवसरणमां बेसी अमीरस वाणीथी,
ज्यारे करतां प्रभुजी भवि उपकार जो;
ते वेळा हुं भाग्य विहुणो कई गति,
न पाम्यो भवसागरनो अंत जो.||३||
ज्ञान अनंतुं सुख अनंतुं ताहरुं,
क्षायिक भावे वर्ते छे तुज गुण जो;
पण हुं पापी रमण करुं परभावमां,
तो केम पामुं स्वरुप रमणनुं सुख जे.||४||
सिद्धारथ कुल चरम प्रभु महावीरजी,
त्रिशला नंदन त्रिजगवंदन नाथ जो;
मनमंदिरमां आवो प्यारा वीरजी,
विण सूनो छे आ दरबार जो.||५||
अनेक जीवने तार्या तें करुणानिधि,
तो शुं मुजने मूकी जशो भगवान जो;
मनोहर मुद्रा जोवा तलसे ताहरी,
“उदयरत्न’ कहे घो दरिशण महाराज जे.||६||`,
      sa: "",
      en: `Karunaasaagara jeevajeevana prabhu veerajee,
Anantagunanaa dhaaraka praana aadhaara jo;
Mujane mookee bhava ataveemaan ekalo,
Aapa sidhaavyaa muktipureemaan naatha jo.||1||
Siddha buddha avinaashee padanaa bhogee chhe,
Hun chhun paamara mohajaalamaan magna ja;
Naatha nihaalee aavyo sharane aapanaa,
Taara taara ho taaraka deva dayaala jo.||2||
Samavasaranamaan besee ameerasa vaaneethee,
Jyaare karataan prabhujee bhavi upakaara jo;
Te velaa hun bhaagya vihuno kaee gati,
Na paamyo bhavasaagarano anta jo.||3||
Jnyaana anantun sukha anantun taaharun,
Kshaayika bhaave varte chhe tuja guna jo;
Pana hun paapee ramana karun parabhaavamaan,
To kema paamun svarupa ramananun sukha je.||4||
Siddhaaratha kula charama prabhu mahaaveerajee,
Trishalaa nandana trijagavandana naatha jo;
Manamandiramaan aavo pyaaraa veerajee,
Vina soono chhe aa darabaara jo.||5||
Aneka jeevane taaryaa ten karunaanidhi,
To shun mujane mookee jasho bhagavaana jo;
Manohara mudraa jovaa talase taaharee,
“udayaratna’ kahe gho darishana mahaaraaja je.||6||`,
    },
  },
  {
    id: "karunayar-prabhu-vinavu-re",
    type: "bhajan",
    title: {
      gu: "કરુણાયર પ્રભુ વિનવું રે, વિનતડી અવધાર",
      hi: "करुणायर प्रभु विनवुं रे, विनतडी अवधार",
      sa: "",
      en: "Karunayar Prabhu Vinavu Re",
    },
    text: {
      gu: `કરુણાયર પ્રભુ વિનવું રે, વિનતડી અવધાર;
તુજ દર્શન વિણ હું ભમ્યો રે, કાલ અનંત અપાર;
જિણંદરાય! હવે મુજ પાર ઉતાર…||૧||
સૂક્ષ્મ નિગોદમાં હું ભમ્યો રે, પુદ્રલ પરિવર્ત અનંત;
અવ્યવહાર રાશિ વસ્યો રે, ભવ ક્ષુલ્લક અતિ જંત.||૨||
સૂક્ષ્મ થાવરપણું પામિયો રે, અનુક્રમે બાદર ભાવ;
જન્મમરણ પ્રભુ બહુ કર્યા રે, જિહાં સુખનો અટકાવ.||૩||
વિકલપણું પામ્યા પછી રે, તિરિ પંચેન્દ્રિય જાણ;
શુદ્ધ તત્ત્વ જાણ્યા વિના રે, ભમિયો નવનવ ઠાણ.||૪||
ઈમ કોઈ પૂરવ પુણ્યથી રે, મનુષ્ય જન્મ સુજાણ;
શુદ્ધ સામગ્રી સંયોગથી રે, દીઠો તું ત્રિભુવન ભાણ.||૫||
અનંતનાથ જિનેશ્વરુ રે, તારક તું જગદેવ;
“મોહન” કહે તુજ નામથી રે, ટળશે અનાદિ કુટેવ.||૭||`,
      hi: `करुणायर प्रभु विनवुं रे, विनतडी अवधार;
तुज दर्शन विण हुं भम्यो रे, काल अनंत अपार;
जिणंदराय! हवे मुज पार उतार…||१||
सूक्ष्म निगोदमां हुं भम्यो रे, पुद्रल परिवर्त अनंत;
अव्यवहार राशि वस्यो रे, भव क्षुल्लक अति जंत.||२||
सूक्ष्म थावरपणुं पामियो रे, अनुक्रमे बादर भाव;
जन्ममरण प्रभु बहु कर्या रे, जिहां सुखनो अटकाव.||३||
विकलपणुं पाम्या पछी रे, तिरि पंचेन्द्रिय जाण;
शुद्ध तत्त्व जाण्या विना रे, भमियो नवनव ठाण.||४||
ईम कोई पूरव पुण्यथी रे, मनुष्य जन्म सुजाण;
शुद्ध सामग्री संयोगथी रे, दीठो तुं त्रिभुवन भाण.||५||
अनंतनाथ जिनेश्वरु रे, तारक तुं जगदेव;
“मोहन” कहे तुज नामथी रे, टळशे अनादि कुटेव.||७||`,
      sa: "",
      en: `Karunaayara prabhu vinavun re, vinatadee avadhaara;
Tuja darshana vina hun bhamyo re, kaala ananta apaara;
Jinandaraaya! have muja paara utaara…||1||
Sookshma nigodamaan hun bhamyo re, pudrala parivarta ananta;
Avyavahaara raashi vasyo re, bhava kshullaka ati janta.||2||
Sookshma thaavarapanun paamiyo re, anukrame baadara bhaava;
Janmamarana prabhu bahu karyaa re, jihaan sukhano atakaava.||3||
Vikalapanun paamyaa pachhee re, tiri panchendriya jaana;
Shuddha tattva jaanyaa vinaa re, bhamiyo navanava thaana.||4||
Eema koee poorava punyathee re, manushya janma sujaana;
Shuddha saamagree sanyogathee re, deetho tun tribhuvana bhaana.||5||
Anantanaatha jineshvaru re, taaraka tun jagadeva;
“mohana” kahe tuja naamathee re, talashe anaadi kuteva.||7||`,
    },
  },
  {
    id: "kayu-janu-kayu-bani-aavshe",
    type: "bhajan",
    title: {
      gu: "કયું જાણું કયું બની આવશે, અભિનંદન રસ રીત હો મિત્ત",
      hi: "कयुं जाणुं कयुं बनी आवशे, अभिनंदन रस रीत हो मित्त",
      sa: "",
      en: "Kayu Janu Kayu Bani Aavshe",
    },
    text: {
      gu: `કયું જાણું કયું બની આવશે, અભિનંદન રસ રીત હો મિત્ત;
પુદ્ગલ અનુભવ ત્યાગથી, કરવી જસુ પરતીત હો મિત્ત. કયું૦ ।।૧ ॥
શુદ્ધ સ્વરુપ સનાતનો, નિર્મલ જે નિઃસંગ હો મિત્ત;
આત્મવિભૂતે પરિણમ્યો, ન કરે તે પરસંગ હો મિત્ત. કયું૦।।૨।।
પરમાતમ પરમેશ્વરું, વસ્તુગતે તે અલિપ્ત હો મિત્ત;
દ્રવ્યે દ્રવ્ય મિલે નહિં, ભાવે તે અન્ય અવ્યાપ્ત હો મિત્ત.કયું૦।।૩।।
પણ જાણું આગમ બળે, મિલવું તુમ પ્રભુ સાથ હો મિત્ત;
પ્રભુ તો સ્વસંપત્તિમયી, શુદ્ધ સ્વરુપનો નાથ હો મિત્ત. કયું૦॥૪॥
પર પરિણામિકતા અછે, જે તુજ પુદ્રલ યોગ હો મિત્ત;
જડ ચલ જગની એંઠનો, ન ઘટે તુજને ભોગ હો મિત્ત. કયું૦।।૫।।
શુદ્ધ નિમિત્ત પ્રભુ ગ્રહ્યો, કરી અશુદ્ધ પર હેય હો મિત્ત;
આત્માલંબી ગુણાલયી, સહુ સાધકનો ધ્યેય હો મિત્ત. કયું૦।।૬।।
જિમ જિનવર આલંબને, વધે સધે એક તાન હો મિત્ત;
તિમ તિમ આત્માલંબની, ગ્રહે સ્વરુપ નિદાન હો મિત્ત. કયું૦।।૭।।
સ્વસ્વરુપ એકત્વતા, સાધે પૂર્ણાનંદ હો મિત્ત;
રમે ભોગવે આતમા, રત્નત્રયી ગુણવૃંદ હો મિત્ત. કયું૦।।૮।।
અભિનંદન અવલંબને, પરમાનંદ વિલાસ હો મિત્ત;
‘દેવચંદ્ર’ પ્રભુ સેવના, કરી અનુભવ અભ્યાસ હો મિત્ત. કયું૦।।૯।।`,
      hi: `कयुं जाणुं कयुं बनी आवशे, अभिनंदन रस रीत हो मित्त;
पुद्गल अनुभव त्यागथी, करवी जसु परतीत हो मित्त. कयुं० ।।१ ॥
शुद्ध स्वरुप सनातनो, निर्मल जे निःसंग हो मित्त;
आत्मविभूते परिणम्यो, न करे ते परसंग हो मित्त. कयुं०।।२।।
परमातम परमेश्वरुं, वस्तुगते ते अलिप्त हो मित्त;
द्रव्ये द्रव्य मिले नहिं, भावे ते अन्य अव्याप्त हो मित्त.कयुं०।।३।।
पण जाणुं आगम बळे, मिलवुं तुम प्रभु साथ हो मित्त;
प्रभु तो स्वसंपत्तिमयी, शुद्ध स्वरुपनो नाथ हो मित्त. कयुं०॥४॥
पर परिणामिकता अछे, जे तुज पुद्रल योग हो मित्त;
जड चल जगनी एंठनो, न घटे तुजने भोग हो मित्त. कयुं०।।५।।
शुद्ध निमित्त प्रभु ग्रह्यो, करी अशुद्ध पर हेय हो मित्त;
आत्मालंबी गुणालयी, सहु साधकनो ध्येय हो मित्त. कयुं०।।६।।
जिम जिनवर आलंबने, वधे सधे एक तान हो मित्त;
तिम तिम आत्मालंबनी, ग्रहे स्वरुप निदान हो मित्त. कयुं०।।७।।
स्वस्वरुप एकत्वता, साधे पूर्णानंद हो मित्त;
रमे भोगवे आतमा, रत्नत्रयी गुणवृंद हो मित्त. कयुं०।।८।।
अभिनंदन अवलंबने, परमानंद विलास हो मित्त;
‘देवचंद्र’ प्रभु सेवना, करी अनुभव अभ्यास हो मित्त. कयुं०।।९।।`,
      sa: "",
      en: `Kayun jaanun kayun banee aavashe, abhinandana rasa reeta ho mitta;
Pudgala anubhava tyaagathee, karavee jasu parateeta ho mitta. kayun0 ||1 ||
Shuddha svarupa sanaatano, nirmala je nisanga ho mitta;
Aatmavibhoote parinamyo, na kare te parasanga ho mitta. kayun0||2||
Paramaatama parameshvarun, vastugate te alipta ho mitta;
Dravye dravya mile nahin, bhaave te anya avyaapta ho mitta.kayun0||3||
Pana jaanun aagama bale, milavun tuma prabhu saatha ho mitta;
Prabhu to svasanpattimayee, shuddha svarupano naatha ho mitta. kayun0||4||
Para parinaamikataa achhe, je tuja pudrala yoga ho mitta;
Jada chala jaganee enthano, na ghate tujane bhoga ho mitta. kayun0||5||
Shuddha nimitta prabhu grahyo, karee ashuddha para heya ho mitta;
Aatmaalanbee gunaalayee, sahu saadhakano dhyeya ho mitta. kayun0||6||
Jima jinavara aalanbane, vadhe sadhe eka taana ho mitta;
Tima tima aatmaalanbanee, grahe svarupa nidaana ho mitta. kayun0||7||
Svasvarupa ekatvataa, saadhe poornaananda ho mitta;
Rame bhogave aatamaa, ratnatrayee gunavrunda ho mitta. kayun0||8||
Abhinandana avalanbane, paramaananda vilaasa ho mitta;
‘devachandra’ prabhu sevanaa, karee anubhava abhyaasa ho mitta. kayun0||9||`,
    },
  },
  {
    id: "kayu-kar-bhakti-karu",
    type: "bhajan",
    title: {
      gu: "કયું કર ભક્તિ કરું, પ્રભુ તેરી…",
      hi: "कयुं कर भक्ति करुं, प्रभु तेरी…",
      sa: "",
      en: "Kayu Kar Bhakti Karu",
    },
    text: {
      gu: `કયું કર ભક્તિ કરું, પ્રભુ તેરી…
ક્રોધ લોભ મદ માન વિષયરસ, છાંડત ગેલ ન મેરી. ॥१॥
કર્મ નચાવે તિમહિ નાચત, માયા વશ નટ ચેરી.||૨||
દૃષ્ટિરાગ દૃઢ બંધન બાંધ્યો, નિકસન ન લહું શેરી.||૩||
કરત પ્રશંસા સબ મિલ અપની, પરનિંદા અધિકેરી.||૪||
કહત ‘માન’ જિન ભાવ ભગતિ બિન, શિવગતિ હોત ન મેરી. ।।૫।।`,
      hi: `कयुं कर भक्ति करुं, प्रभु तेरी…
क्रोध लोभ मद मान विषयरस, छांडत गेल न मेरी. ॥१॥
कर्म नचावे तिमहि नाचत, माया वश नट चेरी.||२||
दृष्टिराग दृढ बंधन बांध्यो, निकसन न लहुं शेरी.||३||
करत प्रशंसा सब मिल अपनी, परनिंदा अधिकेरी.||४||
कहत ‘मान’ जिन भाव भगति बिन, शिवगति होत न मेरी. ।।५।।`,
      sa: "",
      en: `Kayun kara bhakti karun, prabhu teree…
Krodha lobha mada maana vishayarasa, chhaandata gela na meree. ||1||
Karma nachaave timahi naachata, maayaa vasha nata cheree.||2||
Drushtiraaga drudha bandhana baandhyo, nikasana na lahun sheree.||3||
Karata prashansaa saba mila apanee, paranindaa adhikeree.||4||
Kahata ‘maana’ jina bhaava bhagati bina, shivagati hota na meree. ||5||`,
    },
  },
  {
    id: "kayu-na-hoi-sunaye-swami",
    type: "bhajan",
    title: {
      gu: "કયું ન હો સુનાઈ સ્વામી, ઐસા ગુન્હા ક્યા કિયા?",
      hi: "कयुं न हो सुनाई स्वामी, ऐसा गुन्हा क्या किया?",
      sa: "",
      en: "Kayu Na Hoi Sunaye Swami",
    },
    text: {
      gu: `કયું ન હો સુનાઈ સ્વામી, ઐસા ગુન્હા ક્યા કિયા?
ઔરોં કી સુનાઈ જાવે, મેરી બારી નહીં આવે;
તુમ બિન કૌન મેરા, મુઝે કયું ભૂલા દિયા?||૧||
રાય રંક એક જાનો, મેરા તેરા નહીં માનો;
તરણતારણ ઐસા, બિરુદ ક્યું ધાર લિયા?||૨||
ગુન્હા મેરા બક્ષ દીજે, મોં પે અતિ રહેમ કીજે;
પક્કા હી ભરોસા તેરા, દિલોં મેં જમા લિયા.||૩||
ભક્તજનોં કો તાર દિયા, તારને કા કામ કિયા;
બિન ભક્તિવાલા મોં પે, પક્ષપાત કયું કિયા?||૪||
તું હી અંતરયામી, સુણો શ્રી સુપાર્શ્વ સ્વામી;
અબ તો આશા પૂરો મેરી, કહના થા સો કહ દિયા.||૫||
શહેર અંબાલે ભેટી, પ્રભુજી કા મુખ દેખી;
મનુષ્ય જનમ કા લ્હાવા, લેના થા સો લે લિયા,||૬||
ઉન્નીસો છાસઠ છબીલા, દીપમાલા દિન રંગીલા;
“વીરવિજય’ પ્રભુ, ભક્તિ મેં જમા લિયા.||૭||`,
      hi: `कयुं न हो सुनाई स्वामी, ऐसा गुन्हा क्या किया?
औरों की सुनाई जावे, मेरी बारी नहीं आवे;
तुम बिन कौन मेरा, मुझे कयुं भूला दिया?||१||
राय रंक एक जानो, मेरा तेरा नहीं मानो;
तरणतारण ऐसा, बिरुद क्युं धार लिया?||२||
गुन्हा मेरा बक्ष दीजे, मों पे अति रहेम कीजे;
पक्का ही भरोसा तेरा, दिलों में जमा लिया.||३||
भक्तजनों को तार दिया, तारने का काम किया;
बिन भक्तिवाला मों पे, पक्षपात कयुं किया?||४||
तुं ही अंतरयामी, सुणो श्री सुपार्श्व स्वामी;
अब तो आशा पूरो मेरी, कहना था सो कह दिया.||५||
शहेर अंबाले भेटी, प्रभुजी का मुख देखी;
मनुष्य जनम का ल्हावा, लेना था सो ले लिया,||६||
उन्नीसो छासठ छबीला, दीपमाला दिन रंगीला;
“वीरविजय’ प्रभु, भक्ति में जमा लिया.||७||`,
      sa: "",
      en: `Kayun na ho sunaaee svaamee, aisaa gunhaa kyaa kiyaa?
Auron kee sunaaee jaave, meree baaree naheen aave;
Tuma bina kauna meraa, mujhe kayun bhoolaa diyaa?||1||
Raaya ranka eka jaano, meraa teraa naheen maano;
Taranataarana aisaa, biruda kyun dhaara liyaa?||2||
Gunhaa meraa baksha deeje, mon pe ati rahema keeje;
Pakkaa hee bharosaa teraa, dilon men jamaa liyaa.||3||
Bhaktajanon ko taara diyaa, taarane kaa kaama kiyaa;
Bina bhaktivaalaa mon pe, pakshapaata kayun kiyaa?||4||
Tun hee antarayaamee, suno shree supaarshva svaamee;
Aba to aashaa pooro meree, kahanaa thaa so kaha diyaa.||5||
Shahera anbaale bhetee, prabhujee kaa mukha dekhee;
Manushya janama kaa lhaavaa, lenaa thaa so le liyaa,||6||
Unneeso chhaasatha chhabeelaa, deepamaalaa dina rangeelaa;
“veeravijaya’ prabhu, bhakti men jamaa liyaa.||7||`,
    },
  },
  {
    id: "koyal-tahuki-rahi-madhuvan-me",
    type: "bhajan",
    title: {
      gu: "કોયલ ટહુંકી રહી મધુવન મેં, પાર્શ્વ શામળિયા બસો મેરે મન મેં…",
      hi: "कोयल टहुंकी रही मधुवन में, पार्श्व शामळिया बसो मेरे मन में…",
      sa: "",
      en: "Koyal Tahuki Rahi Madhuvan Me",
    },
    text: {
      gu: `કોયલ ટહુંકી રહી મધુવન મેં, પાર્શ્વ શામળિયા બસો મેરે મન મેં…
કાશી દેશ વારાણસી જન્મ લિયો પ્રભુ ક્ષત્રિય કુલ મેં.||૧||
બાળપણામાં પ્રભુ અદ્ભુત જ્ઞાની,
કમઠ કો માન હર્યો એક પલ મેં ॥२॥
નાગ નિકાલા કાષ્ઠ ચિરાકર,
નાગ કો સુરપતિ કિયો એક છીન મેં.||૩||
સંયમ લઈ પ્રભુ વિચરવા લાગ્યા,
સંયમે ભીંજ ગયો એક રંગ મેં.॥૪॥
સમ્મેતશિખર પ્રભુ મોક્ષે સિધાવ્યા,
પાર્શ્વજી કો મહિમા તીન ભુવન મેં.||૫||
“ઉદયરત્ન’ કી એહી અરજ હૈ,
દિલ અટકો તોરા ચરણકમલ મેં.||૬||`,
      hi: `कोयल टहुंकी रही मधुवन में, पार्श्व शामळिया बसो मेरे मन में…
काशी देश वाराणसी जन्म लियो प्रभु क्षत्रिय कुल में.||१||
बाळपणामां प्रभु अद्भुत ज्ञानी,
कमठ को मान हर्यो एक पल में ॥२॥
नाग निकाला काष्ठ चिराकर,
नाग को सुरपति कियो एक छीन में.||३||
संयम लई प्रभु विचरवा लाग्या,
संयमे भींज गयो एक रंग में.॥४॥
सम्मेतशिखर प्रभु मोक्षे सिधाव्या,
पार्श्वजी को महिमा तीन भुवन में.||५||
“उदयरत्न’ की एही अरज है,
दिल अटको तोरा चरणकमल में.||६||`,
      sa: "",
      en: `Koyala tahunkee rahee madhuvana men, paarshva shaamaliyaa baso mere mana men…
Kaashee desha vaaraanasee janma liyo prabhu kshatriya kula men.||1||
Baalapanaamaan prabhu adbhuta jnyaanee,
Kamatha ko maana haryo eka pala men ||2||
Naaga nikaalaa kaashtha chiraakara,
Naaga ko surapati kiyo eka chheena men.||3||
Sanyama laee prabhu vicharavaa laagyaa,
Sanyame bheenja gayo eka ranga men.||4||
Sammetashikhara prabhu mokshe sidhaavyaa,
Paarshvajee ko mahimaa teena bhuvana men.||5||
“udayaratna’ kee ehee araja hai,
Dila atako toraa charanakamala men.||6||`,
    },
  },
  {
    id: "kunthu-jineshwar-janajo-re-lal",
    type: "bhajan",
    title: {
      gu: "કુંથુ જિનેશ્વર જાણજો રે લાલ, મુજ મનનો અભિપ્રાય રે; જિનેશ્વર",
      hi: "कुंथु जिनेश्वर जाणजो रे लाल, मुज मननो अभिप्राय रे; जिनेश्वर",
      sa: "",
      en: "Kunthu Jineshwar Janajo Re Lal",
    },
    text: {
      gu: `કુંથુ જિનેશ્વર જાણજો રે લાલ, મુજ મનનો અભિપ્રાય રે; જિનેશ્વર
મોરા તું આતમ અલવેસરુ રે લાલ, રખે તુજ વિરહો થાય રે; જિ૦
તુજ વિરહો કેમ વેઠીયે રે,
તુજ વિરહો દુઃખદાય રે જિ૦, તુજ વિરહો ન ખમાય રે;
ખિણ વરસા સો થાય રે જિ૦,
વિરહો તે મોટી બલાય રે. જિ૦ ।। ૧ ।।
તાહરી પાસે આવવું રે લાલ, પહેલા ન આવે તું દાય; જિ0
આવ્યા પછી તો જાયવુંરે લાલ,
તુજ ગુણ વશે ન સુહાયરે. જિ૦||૨||
ન મળ્યાનો ધોખો નહીં રે લાલ, જસ ગુણનું નહિં નાણ રે; જિ૦
મિલિયા ગુણ કલીયા પછી રે લાલ,
બિછુરત જાયે પ્રાણ રે. જિ।।૩||
જાતિ અંધને દુઃખ નહીં રે લાલ, ન લહે નયનનો સ્વાદ રે; જિ૦
સ્વાદ લહી કરી રે લાલ, હાર્યાને વિખવાદ રે. જિ૦ ॥४॥
બીજે પણ કીહાં નવિ ગમે રે લાલ, જિણે તુમ વિરહે બચાય રે; જિ૦
માલતી કુસુમે માલીયો રે લાલ, મધુપ કરીરે ન જાય રે.||૫||
જિ૦ |॥ ૫ ॥ વન દવ દાધાં રુખડાં રે લાલ, પલ્લવે વળી વરસાદ રે;
જિ૦ તુજ વિરહાનલનો બળ્યાંરે લાલ, કાલ અનંત ગમાત રે.||૬||
જિ૦ ।।૬।। ટાઢક રહે તુજ સંગમેં રે લાલ, આકુળતા મીટી જાય રે;
જિ૦ તુજ સંગે સુખીયો સદારે લાલ,
“માનવિજય” ઉવજ્ઝાયરે જિ૦।।૭।।`,
      hi: `कुंथु जिनेश्वर जाणजो रे लाल, मुज मननो अभिप्राय रे; जिनेश्वर
मोरा तुं आतम अलवेसरु रे लाल, रखे तुज विरहो थाय रे; जि०
तुज विरहो केम वेठीये रे,
तुज विरहो दुःखदाय रे जि०, तुज विरहो न खमाय रे;
खिण वरसा सो थाय रे जि०,
विरहो ते मोटी बलाय रे. जि० ।। १ ।।
ताहरी पासे आववुं रे लाल, पहेला न आवे तुं दाय; जि0
आव्या पछी तो जायवुंरे लाल,
तुज गुण वशे न सुहायरे. जि०||२||
न मळ्यानो धोखो नहीं रे लाल, जस गुणनुं नहिं नाण रे; जि०
मिलिया गुण कलीया पछी रे लाल,
बिछुरत जाये प्राण रे. जि।।३||
जाति अंधने दुःख नहीं रे लाल, न लहे नयननो स्वाद रे; जि०
स्वाद लही करी रे लाल, हार्याने विखवाद रे. जि० ॥४॥
बीजे पण कीहां नवि गमे रे लाल, जिणे तुम विरहे बचाय रे; जि०
मालती कुसुमे मालीयो रे लाल, मधुप करीरे न जाय रे.||५||
जि० |॥ ५ ॥ वन दव दाधां रुखडां रे लाल, पल्लवे वळी वरसाद रे;
जि० तुज विरहानलनो बळ्यांरे लाल, काल अनंत गमात रे.||६||
जि० ।।६।। टाढक रहे तुज संगमें रे लाल, आकुळता मीटी जाय रे;
जि० तुज संगे सुखीयो सदारे लाल,
“मानविजय” उवज्झायरे जि०।।७।।`,
      sa: "",
      en: `Kunthu jineshvara jaanajo re laala, muja manano abhipraaya re; jineshvara
Moraa tun aatama alavesaru re laala, rakhe tuja viraho thaaya re; ji0
Tuja viraho kema vetheeye re,
Tuja viraho dukhadaaya re ji0, tuja viraho na khamaaya re;
Khina varasaa so thaaya re ji0,
Viraho te motee balaaya re. ji0 || 1 ||
Taaharee paase aavavun re laala, pahelaa na aave tun daaya; ji0
Aavyaa pachhee to jaayavunre laala,
Tuja guna vashe na suhaayare. ji0||2||
Na malyaano dhokho naheen re laala, jasa gunanun nahin naana re; ji0
Miliyaa guna kaleeyaa pachhee re laala,
Bichhurata jaaye praana re. ji||3||
Jaati andhane dukha naheen re laala, na lahe nayanano svaada re; ji0
Svaada lahee karee re laala, haaryaane vikhavaada re. ji0 ||4||
Beeje pana keehaan navi game re laala, jine tuma virahe bachaaya re; ji0
Maalatee kusume maaleeyo re laala, madhupa kareere na jaaya re.||5||
Ji0 ||| 5 || vana dava daadhaan rukhadaan re laala, pallave valee varasaada re;
Ji0 tuja virahaanalano balyaanre laala, kaala ananta gamaata re.||6||
Ji0 ||6|| taadhaka rahe tuja sangamen re laala, aakulataa meetee jaaya re;
Ji0 tuja sange sukheeyo sadaare laala,
“maanavijaya” uvajjhaayare ji0||7||`,
    },
  },
  {
    id: "kunthu-jineshwar-sacho-dev",
    type: "bhajan",
    title: {
      gu: "કુંથુ જિનેશ્વર સાચો દેવ, ચોસઠ ઈન્દ્ર કરે જસ સેવ",
      hi: "कुंथु जिनेश्वर साचो देव, चोसठ ईन्द्र करे जस सेव",
      sa: "",
      en: "Kunthu Jineshwar Sacho Dev",
    },
    text: {
      gu: `કુંથુ જિનેશ્વર સાચો દેવ, ચોસઠ ઈન્દ્ર કરે જસ સેવ;
તું સાહિબ જગનો આધાર, ભવ ભમતાં મુજ નાવ્યો પાર;
સાહિબ સાંભળો! (૨) કહું છું મુજ મનની વાત.॥੧॥
પ્રશંસા ઉપર મુજ રીઝ, નિંદા કરે તે ઉપર ખીજ;
એ બે તુમને છે સમભાવ, તે માંગુ છું પામી દાવ. ॥२॥
પુદ્ગલ પામી રાચુ રે હું, તે નવિ ઇચ્છે પ્રભુજી તું;
એ ગુણ મોટો છે તુમ પાસ, તે દેતાં સુખીયો હોય દાસ. ॥३॥
વયરી સંતાપે જોર, કામે વાહ્યો ફરું જિમ ઢોર;
વળી દુઃખ દીયે ચાર ચોર, તુમ વિના કુણ આગે કરું શોર.||૪||
તુમથી ભાગ્યા લાગ્યા મુજ કેડ, ચિહુંગતિની કરાવે ખેડ;
જાણી તુમારો દે મુજ ને માર, તો કિમ ન કરો પ્રભુજી સાર ॥५॥
સેવક સન્મુખ જુઓ એકવાર, તો તે ન રહે લગાર;
મોટાની મીટે કામ થાય, તરણિ તેજે તિમિર પલાય.||૬||
કરુણાવંત અનંતબળ ધણી, વાર ન લાગે તને તારવા ભણી;
શ્રી ગુરુ ખીમાવિજયનો સીસ, ‘જશ’ પ્રેમે પ્રણમે નિશદિશ. ।।૭।।`,
      hi: `कुंथु जिनेश्वर साचो देव, चोसठ ईन्द्र करे जस सेव;
तुं साहिब जगनो आधार, भव भमतां मुज नाव्यो पार;
साहिब सांभळो! (२) कहुं छुं मुज मननी वात.॥੧॥
प्रशंसा उपर मुज रीझ, निंदा करे ते उपर खीज;
ए बे तुमने छे समभाव, ते मांगु छुं पामी दाव. ॥२॥
पुद्गल पामी राचु रे हुं, ते नवि इच्छे प्रभुजी तुं;
ए गुण मोटो छे तुम पास, ते देतां सुखीयो होय दास. ॥३॥
वयरी संतापे जोर, कामे वाह्यो फरुं जिम ढोर;
वळी दुःख दीये चार चोर, तुम विना कुण आगे करुं शोर.||४||
तुमथी भाग्या लाग्या मुज केड, चिहुंगतिनी करावे खेड;
जाणी तुमारो दे मुज ने मार, तो किम न करो प्रभुजी सार ॥५॥
सेवक सन्मुख जुओ एकवार, तो ते न रहे लगार;
मोटानी मीटे काम थाय, तरणि तेजे तिमिर पलाय.||६||
करुणावंत अनंतबळ धणी, वार न लागे तने तारवा भणी;
श्री गुरु खीमाविजयनो सीस, ‘जश’ प्रेमे प्रणमे निशदिश. ।।७।।`,
      sa: "",
      en: `Kunthu jineshvara saacho deva, chosatha eendra kare jasa seva;
Tun saahiba jagano aadhaara, bhava bhamataan muja naavyo paara;
Saahiba saanbhalo! (2) kahun chhun muja mananee vaata.||1||
Prashansaa upara muja reejha, nindaa kare te upara kheeja;
E be tumane chhe samabhaava, te maangu chhun paamee daava. ||2||
Pudgala paamee raachu re hun, te navi ichchhe prabhujee tun;
E guna moto chhe tuma paasa, te detaan sukheeyo hoya daasa. ||3||
Vayaree santaape jora, kaame vaahyo pharun jima dhora;
Valee dukha deeye chaara chora, tuma vinaa kuna aage karun shora.||4||
Tumathee bhaagyaa laagyaa muja keda, chihungatinee karaave kheda;
Jaanee tumaaro de muja ne maara, to kima na karo prabhujee saara ||5||
Sevaka sanmukha juo ekavaara, to te na rahe lagaara;
Motaanee meete kaama thaaya, tarani teje timira palaaya.||6||
Karunaavanta anantabala dhanee, vaara na laage tane taaravaa bhanee;
Shree guru kheemaavijayano seesa, ‘jasha’ preme praname nishadisha. ||7||`,
    },
  },
  {
    id: "kunthu-jineshwar-sahib-vinanti-re",
    type: "bhajan",
    title: {
      gu: "કુંથુ જિનેશ્વર સાહિબ વિનંતી રે, અવધારો અરિહંત",
      hi: "कुंथु जिनेश्वर साहिब विनंती रे, अवधारो अरिहंत",
      sa: "",
      en: "Kunthu Jineshwar Sahib Vinanti Re",
    },
    text: {
      gu: `કુંથુ જિનેશ્વર સાહિબ વિનંતી રે, અવધારો અરિહંત;
પ્રભુશું પ્રીતિ અછે મુજને ઘણી રે, તે નિરવહીયે સંત.||૧||
મહીમંડલમાં દેવ અછે ઘણાં રે, હું ન કરું તસ સેવ;
તુજ વિણ અવર ન કદીયે ઓલગું રે, તું મુજ એક જ દેવ.||૨||
અવર ન સેવું કંઈયે દેવતા રે, તુમ વિણ દીનદયાળ;
જલધર જલ વિણ અવર ન આદરે રે, જિમ જગે ચાતક બાલ.||૩||
અંગીકૃત જો નિરવાહો પ્રભુ રે, તો પૂરો મનની આશ;
દાસ તણી એ આશા પૂરતાં રે, સાહિબને શાબાશ.||૪||
નિશદિન ભાવે સાહિબ સેવતાં રે, જો નહિ પૂરો આશ;
તો એ જગમાં પ્રભુજી તુમ તણો રે, કુણ કરશે વિશ્વાસ.||૫||
મોટા નિશ્ચય આશા પૂરવે રે, જો સેવે ધરી નેહ;
જુઓ એ જગમાં ચાતક રે, પૂરે આશા મેહ.||૬||
ઈમ જાણી સાહિબ પૂરવી રે, નિજ સેવકની આશ;
“નયવિજય” કહે તુમ ચરણાંબુજે રે, દેજો અવિચલ વાસ.||૭||>`,
      hi: `कुंथु जिनेश्वर साहिब विनंती रे, अवधारो अरिहंत;
प्रभुशुं प्रीति अछे मुजने घणी रे, ते निरवहीये संत.||१||
महीमंडलमां देव अछे घणां रे, हुं न करुं तस सेव;
तुज विण अवर न कदीये ओलगुं रे, तुं मुज एक ज देव.||२||
अवर न सेवुं कंईये देवता रे, तुम विण दीनदयाळ;
जलधर जल विण अवर न आदरे रे, जिम जगे चातक बाल.||३||
अंगीकृत जो निरवाहो प्रभु रे, तो पूरो मननी आश;
दास तणी ए आशा पूरतां रे, साहिबने शाबाश.||४||
निशदिन भावे साहिब सेवतां रे, जो नहि पूरो आश;
तो ए जगमां प्रभुजी तुम तणो रे, कुण करशे विश्वास.||५||
मोटा निश्चय आशा पूरवे रे, जो सेवे धरी नेह;
जुओ ए जगमां चातक रे, पूरे आशा मेह.||६||
ईम जाणी साहिब पूरवी रे, निज सेवकनी आश;
“नयविजय” कहे तुम चरणांबुजे रे, देजो अविचल वास.||७||>`,
      sa: "",
      en: `Kunthu jineshvara saahiba vinantee re, avadhaaro arihanta;
Prabhushun preeti achhe mujane ghanee re, te niravaheeye santa.||1||
Maheemandalamaan deva achhe ghanaan re, hun na karun tasa seva;
Tuja vina avara na kadeeye olagun re, tun muja eka ja deva.||2||
Avara na sevun kaneeye devataa re, tuma vina deenadayaala;
Jaladhara jala vina avara na aadare re, jima jage chaataka baala.||3||
Angeekruta jo niravaaho prabhu re, to pooro mananee aasha;
Daasa tanee e aashaa poorataan re, saahibane shaabaasha.||4||
Nishadina bhaave saahiba sevataan re, jo nahi pooro aasha;
To e jagamaan prabhujee tuma tano re, kuna karashe vishvaasa.||5||
Motaa nishchaya aashaa poorave re, jo seve dharee neha;
Juo e jagamaan chaataka re, poore aashaa meha.||6||
Eema jaanee saahiba pooravee re, nija sevakanee aasha;
“nayavijaya” kahe tuma charanaanbuje re, dejo avichala vaasa.||7||>`,
    },
  },
  {
    id: "ladhu-pan-hu-tum-man-navi-maavu-re",
    type: "bhajan",
    title: {
      gu: "લઘુ પણ હું તુમ મન નવિ માવું રે",
      hi: "लघु पण हुं तुम मन नवि मावुं रे",
      sa: "",
      en: "Ladhu Pan Hu Tum Man Navi Maavu Re",
    },
    text: {
      gu: `લઘુ પણ હું તુમ મન નવિ માવું રે,
જગગુરુ! તુમને દિલમાં લાવું રે;
કુણને દીજે એ શાબાશી રે,
કહો શ્રી સુવિધિ જિણંદ! વિમાસી રે.||૧||
મુજ મન અણુ માંહે ભગતિ છે ઝાઝી રે,
તેહ દરીનો તું છે માઝી રે;
યોગી પણ જે વાત ન જાણે રે,
એ અચરિજ કુણથી હુઓ ટાણે રે.||૨||
અથવા થિરમાંહે અથિર ન માવે રે,
મોટો ગજ દર્પણમાં આવે રે;
જેહને તેજે બુદ્ધિપ્રકાશી રે,
તેહને દીજે એ શાબાશી રે,||૩||
ઊર્ધ્વ મૂલ તરુવર અધ શાખા રે,
છંદ પુરાણે એહવી છે ભાષા રે;
અચરિજવાળે અચરિજ કીધું રે,
ભગતે સેવક કરજ સીધું રે.||૪||
લાડ કરી જે બાળક બોલે રે,
માતપિતા મન અમીયને તોલે રે;
શ્રી નયવિજય વિબુધનો શીશો રે,
“જશ” કહે એમ જાણો જગીશો રે.||૫||`,
      hi: `लघु पण हुं तुम मन नवि मावुं रे,
जगगुरु! तुमने दिलमां लावुं रे;
कुणने दीजे ए शाबाशी रे,
कहो श्री सुविधि जिणंद! विमासी रे.||१||
मुज मन अणु मांहे भगति छे झाझी रे,
तेह दरीनो तुं छे माझी रे;
योगी पण जे वात न जाणे रे,
ए अचरिज कुणथी हुओ टाणे रे.||२||
अथवा थिरमांहे अथिर न मावे रे,
मोटो गज दर्पणमां आवे रे;
जेहने तेजे बुद्धिप्रकाशी रे,
तेहने दीजे ए शाबाशी रे,||३||
ऊर्ध्व मूल तरुवर अध शाखा रे,
छंद पुराणे एहवी छे भाषा रे;
अचरिजवाळे अचरिज कीधुं रे,
भगते सेवक करज सीधुं रे.||४||
लाड करी जे बाळक बोले रे,
मातपिता मन अमीयने तोले रे;
श्री नयविजय विबुधनो शीशो रे,
“जश” कहे एम जाणो जगीशो रे.||५||`,
      sa: "",
      en: `Laghu pana hun tuma mana navi maavun re,
Jagaguru! tumane dilamaan laavun re;
Kunane deeje e shaabaashee re,
Kaho shree suvidhi jinanda! vimaasee re.||1||
Muja mana anu maanhe bhagati chhe jhaajhee re,
Teha dareeno tun chhe maajhee re;
Yogee pana je vaata na jaane re,
E acharija kunathee huo taane re.||2||
Athavaa thiramaanhe athira na maave re,
Moto gaja darpanamaan aave re;
Jehane teje buddhiprakaashee re,
Tehane deeje e shaabaashee re,||3||
Oordhva moola taruvara adha shaakhaa re,
Chhanda puraane ehavee chhe bhaashaa re;
Acharijavaale acharija keedhun re,
Bhagate sevaka karaja seedhun re.||4||
Laada karee je baalaka bole re,
Maatapitaa mana ameeyane tole re;
Shree nayavijaya vibudhano sheesho re,
“jasha” kahe ema jaano jageesho re.||5||`,
    },
  },
  {
    id: "lagi-re-mane-dharma-jinandasu-prit",
    type: "bhajan",
    title: {
      gu: "લાગી રે મુને!… ધર્મ જિણંદશું પ્રીત (૨) લાગી રે મુને!",
      hi: "लागी रे मुने!… धर्म जिणंदशुं प्रीत (२) लागी रे मुने!",
      sa: "",
      en: "Lagi Re Mane Dharma Jinandasu Prit",
    },
    text: {
      gu: `લાગી રે મુને!… ધર્મ જિણંદશું પ્રીત (૨) લાગી રે મુને!
પ્રીત પુરાની ન તોડો જિનજી (૨) એ સજ્જન કી ન રીત.॥१॥
દાન શિયળ તપ ભાવના ચઉવિધ (૨)
ધર્મ કી થાપના કીધ.||૨||
દશ દ્વાદશ વિધ સાધુ શ્રાદ્ધ કે (૨)
દેશના ધર્મકી દીધ.||૩||
જગજંતુ ઉદ્ધારણ કારણ (૨)
મારગ કીયો રે પ્રસિદ્ધ. ||૪||
ધર્મનાથ જિન ધર્મ પ્રકાશી (૨)
જગ મેં બહુ જશ લીધ.॥૫॥
“વીરવિજય’ આતમપદ લેવા (૨)
ધર્મ સુણ્યાની રે પ્રીત. ॥६॥`,
      hi: `लागी रे मुने!… धर्म जिणंदशुं प्रीत (२) लागी रे मुने!
प्रीत पुरानी न तोडो जिनजी (२) ए सज्जन की न रीत.॥१॥
दान शियळ तप भावना चउविध (२)
धर्म की थापना कीध.||२||
दश द्वादश विध साधु श्राद्ध के (२)
देशना धर्मकी दीध.||३||
जगजंतु उद्धारण कारण (२)
मारग कीयो रे प्रसिद्ध. ||४||
धर्मनाथ जिन धर्म प्रकाशी (२)
जग में बहु जश लीध.॥५॥
“वीरविजय’ आतमपद लेवा (२)
धर्म सुण्यानी रे प्रीत. ॥६॥`,
      sa: "",
      en: `Laagee re mune!… dharma jinandashun preeta (2) laagee re mune!
Preeta puraanee na todo jinajee (2) e sajjana kee na reeta.||1||
Daana shiyala tapa bhaavanaa chauvidha (2)
Dharma kee thaapanaa keedha.||2||
Dasha dvaadasha vidha saadhu shraaddha ke (2)
Deshanaa dharmakee deedha.||3||
Jagajantu uddhaarana kaarana (2)
Maaraga keeyo re prasiddha. ||4||
Dharmanaatha jina dharma prakaashee (2)
Jaga men bahu jasha leedha.||5||
“veeravijaya’ aatamapada levaa (2)
Dharma sunyaanee re preeta. ||6||`,
    },
  },
  {
    id: "mahaveer-swami-re-vinanti-sambhado",
    type: "bhajan",
    title: {
      gu: "મહાવીરસ્વામી રે વિનંતી સાંભળો, હું છું દુખિયો અપાર",
      hi: "महावीरस्वामी रे विनंती सांभळो, हुं छुं दुखियो अपार",
      sa: "",
      en: "Mahaveer Swami Re Vinanti Sambhado",
    },
    text: {
      gu: `મહાવીરસ્વામી રે વિનંતી સાંભળો, હું છું દુખિયો અપાર;
ભવોભવ ભટક્યો રે વેદના બહુ સહી, ચઉગતિમાં બહુ વાર. ।।૧।।
જન્મમરણનુંરે દુઃખ નિવારવા, આવ્યો આપ હજૂર;
સમ્યગ્દર્શન જો મુજને દિયો, તો લહુ સુખ ભરપૂર.||૨||
રખડી રઝળી રે હું અહીં આવિયો, સાચો જાણી તું એક;
મુજ પાપીને રે પ્રભુજી તારજો, તાર્યા જેમ અનેક.||૩||
ના નહીં કહેજો રે મુજને સાહિબા, હું છું પામર રાંક;
આપ કૃપાળુ રે ખાસ દયા કરી, માફ કરજો મુજ વાંક.||૪||
ભૂલ અનંતી રે વાર આવી હશે, માફ કરજો મહાવીર
‘ઉદયરત્ન’ રે લળી લળી વીનવે, બાંહ્ય ગ્રહી રાખોને લાજ. ॥૫॥`,
      hi: `महावीरस्वामी रे विनंती सांभळो, हुं छुं दुखियो अपार;
भवोभव भटक्यो रे वेदना बहु सही, चउगतिमां बहु वार. ।।१।।
जन्ममरणनुंरे दुःख निवारवा, आव्यो आप हजूर;
सम्यग्दर्शन जो मुजने दियो, तो लहु सुख भरपूर.||२||
रखडी रझळी रे हुं अहीं आवियो, साचो जाणी तुं एक;
मुज पापीने रे प्रभुजी तारजो, तार्या जेम अनेक.||३||
ना नहीं कहेजो रे मुजने साहिबा, हुं छुं पामर रांक;
आप कृपाळु रे खास दया करी, माफ करजो मुज वांक.||४||
भूल अनंती रे वार आवी हशे, माफ करजो महावीर
‘उदयरत्न’ रे लळी लळी वीनवे, बांह्य ग्रही राखोने लाज. ॥५॥`,
      sa: "",
      en: `Mahaaveerasvaamee re vinantee saanbhalo, hun chhun dukhiyo apaara;
Bhavobhava bhatakyo re vedanaa bahu sahee, chaugatimaan bahu vaara. ||1||
Janmamarananunre dukha nivaaravaa, aavyo aapa hajoora;
Samyagdarshana jo mujane diyo, to lahu sukha bharapoora.||2||
Rakhadee rajhalee re hun aheen aaviyo, saacho jaanee tun eka;
Muja paapeene re prabhujee taarajo, taaryaa jema aneka.||3||
Naa naheen kahejo re mujane saahibaa, hun chhun paamara raanka;
Aapa krupaalu re khaasa dayaa karee, maapha karajo muja vaanka.||4||
Bhoola anantee re vaara aavee hashe, maapha karajo mahaaveera
‘udayaratna’ re lalee lalee veenave, baanhya grahee raakhone laaja. ||5||`,
    },
  },
  {
    id: "malli-jinand-sada-namiye",
    type: "bhajan",
    title: {
      gu: "મલ્લિ જિણંદ… સદા નમીયે, મલ્લિજિણંદ… સદા ભજીયે.!!",
      hi: "मल्लि जिणंद… सदा नमीये, मल्लिजिणंद… सदा भजीये.!!",
      sa: "",
      en: "Malli Jinand Sada Namiye",
    },
    text: {
      gu: `મલ્લિ જિણંદ… સદા નમીયે, મલ્લિજિણંદ… સદા ભજીયે.!!
પ્રભુ કે ચરણ કમલ રસ લીને, મધુકર જ્યું હુઈ કે રમીયે. ॥੧॥
નિરખી વદન શશી શ્રી જિનવરકો,
નિશી વાસર સુખમેં ગમીયે. ||ર॥
ઉજ્જવલ ગુણ સમરણ ચિત્ત ધરીએ,
કબહું ન ભવસાયર ભમીયે. ॥૩॥
રસ મેં જ્યોં ઝીલીજે,
ત્યોં રાગ દ્વેષ કો ઉપશમીયે.||૪||
કહે ‘જિનહર્ષ’મુગતિ સુખ લહીયે,
કઠિન કર્મ નિજ અપક્રમીયે. ॥૫॥`,
      hi: `मल्लि जिणंद… सदा नमीये, मल्लिजिणंद… सदा भजीये.!!
प्रभु के चरण कमल रस लीने, मधुकर ज्युं हुई के रमीये. ॥੧॥
निरखी वदन शशी श्री जिनवरको,
निशी वासर सुखमें गमीये. ||र॥
उज्जवल गुण समरण चित्त धरीए,
कबहुं न भवसायर भमीये. ॥३॥
रस में ज्यों झीलीजे,
त्यों राग द्वेष को उपशमीये.||४||
कहे ‘जिनहर्ष’मुगति सुख लहीये,
कठिन कर्म निज अपक्रमीये. ॥५॥`,
      sa: "",
      en: `Malli jinanda… sadaa nameeye, mallijinanda… sadaa bhajeeye.!!
Prabhu ke charana kamala rasa leene, madhukara jyun huee ke rameeye. ||1||
Nirakhee vadana shashee shree jinavarako,
Nishee vaasara sukhamen gameeye. ||ra||
Ujjavala guna samarana chitta dhareee,
Kabahun na bhavasaayara bhameeye. ||3||
Rasa men jyon jheeleeje,
Tyon raaga dvesha ko upashameeye.||4||
Kahe ‘jinaharsha’mugati sukha laheeye,
Kathina karma nija apakrameeye. ||5||`,
    },
  },
  {
    id: "malli-jineshwar-mujne-tum-milya",
    type: "bhajan",
    title: {
      gu: "મલ્લિ જિણેસર મુજને તુમ મિલ્યા, જેહ માંહિ સુખકંદ વહાલેસર",
      hi: "मल्लि जिणेसर मुजने तुम मिल्या, जेह मांहि सुखकंद वहालेसर",
      sa: "",
      en: "Malli Jineshwar Mujne Tum Milya",
    },
    text: {
      gu: `મલ્લિ જિણેસર મુજને તુમ મિલ્યા, જેહ માંહિ સુખકંદ વહાલેસર;
તે કળિયુગ અમે ગિરુઓ લેખવું, નવિ બીજા યુગ વૃંદ. વ૦।।૧ ।।
આરો સારો રે મુજ પાંચમો, જિહાં તુમ દરિશણ દીઠ;
મરુભૂમિ પણ થિતિ સુરતરુ તણી, મેરુ થકી હુઈ ઈઠ. વ૦।।૨ ।।
પંચમ આરે રે તુમ મેલાવડે, રુડો રાખ્યો રે રંગ;
40 ચોથો આરેરે ફિરી આવ્યો ગણું,
“વાચક જસ’ કહે ચંગ. વ૦||૩||`,
      hi: `मल्लि जिणेसर मुजने तुम मिल्या, जेह मांहि सुखकंद वहालेसर;
ते कळियुग अमे गिरुओ लेखवुं, नवि बीजा युग वृंद. व०।।१ ।।
आरो सारो रे मुज पांचमो, जिहां तुम दरिशण दीठ;
मरुभूमि पण थिति सुरतरु तणी, मेरु थकी हुई ईठ. व०।।२ ।।
पंचम आरे रे तुम मेलावडे, रुडो राख्यो रे रंग;
40 चोथो आरेरे फिरी आव्यो गणुं,
“वाचक जस’ कहे चंग. व०||३||`,
      sa: "",
      en: `Malli jinesara mujane tuma milyaa, jeha maanhi sukhakanda vahaalesara;
Te kaliyuga ame giruo lekhavun, navi beejaa yuga vrunda. va0||1 ||
Aaro saaro re muja paanchamo, jihaan tuma darishana deetha;
Marubhoomi pana thiti surataru tanee, meru thakee huee eetha. va0||2 ||
Panchama aare re tuma melaavade, rudo raakhyo re ranga;
40 chotho aarere phiree aavyo ganun,
“vaachaka jasa’ kahe changa. va0||3||`,
    },
  },
  {
    id: "mallinath-jaganath-charanyug-dhyaiye",
    type: "bhajan",
    title: {
      gu: "મલ્લિનાથ જગનાથ ચરણયુગ ધ્યાઈયે રે",
      hi: "मल्लिनाथ जगनाथ चरणयुग ध्याईये रे",
      sa: "",
      en: "Mallinath Jaganath Charanyug Dhyaiye",
    },
    text: {
      gu: `મલ્લિનાથ જગનાથ ચરણયુગ ધ્યાઈયે રે,
શુદ્ધાતમ પ્રાગભાવ પરમપદ પાઈયે રે;
સાધક કારક ષટ્ક કરે ગુણ સાધના રે,
તેહિ જ શુદ્ધ સરુપ થાયે નિરાબાધના રે.||૧||
કર્તા આતમદ્રવ્ય કાર્ય નિજ સિદ્ધતા રે,
ઉપાદાન પરિણામ પ્રયુક્ત તે કારણતા રે;
સંપદ દાન તેહ સંપ્રદાનતા રે,
દાતા પાત્રને દેય ત્રિભાવ અભેદતા રે.||૨||
સ્વ પર વિવેચન કરણ તેહ અપાદાનથી રે,
સકળ પર્યાય આધાર સંબંધ આસ્થાનથી રે;
બાધક કારક ભાવ અનાદિ નિવારવો રે,
સાધકતા અવલંબી તેહ સમારવો રે.||૩||
શુદ્ધ પણે પર્યાય પ્રવર્તન કાર્યમેં રે,
કર્તાદિક પરિણામ તે આતમ ધર્મમેં રે;
ચેતન ચૈતન્ય ભાવ કરે સમ વેતમેં રે,
સાદિ અનંતો કાળ રહે નિજ ખેતમેં રે.||૪||
પર કતૃત્ત્વ સ્વભાવ કરે ત્યાં લગી રે,
શુદ્ધ કાર્ય રુચિ ભાસ થયે નવિ આદરે રે;
શુદ્ધાતમ નિજ કાર્ય રુચિ કારક ફિરે રે,
તેહિ જ મૂળ સ્વભાવ ગ્રહે નિજ પદ વરે રે.||૫||
કારણ કારજ રૂપ અછે કારકદશા રે,
વસ્તુ પ્રગટ પર્યાય એહ મનમેં વસ્યા રે;
પણ શુદ્ધ સરુપ ધ્યાન ચેતનતા ગ્રહે રે,
તબ નિજ સાધક ભાવ સકળ કારક લહેરે.||૬||
માહરું પૂર્ણાનંદ પ્રગટ કરવા ભણી રે,
પુષ્ટાલંબન રુપ સેવ પ્રભુજી તણી રે;
“દેવચંદ્ર’ જિનચંદ્ર ભગતિ મનમેં ધરો રે,
અવ્યાબાધ અનંત અક્ષયપદ આદરો રે.||૭||`,
      hi: `मल्लिनाथ जगनाथ चरणयुग ध्याईये रे,
शुद्धातम प्रागभाव परमपद पाईये रे;
साधक कारक षट्क करे गुण साधना रे,
तेहि ज शुद्ध सरुप थाये निराबाधना रे.||१||
कर्ता आतमद्रव्य कार्य निज सिद्धता रे,
उपादान परिणाम प्रयुक्त ते कारणता रे;
संपद दान तेह संप्रदानता रे,
दाता पात्रने देय त्रिभाव अभेदता रे.||२||
स्व पर विवेचन करण तेह अपादानथी रे,
सकळ पर्याय आधार संबंध आस्थानथी रे;
बाधक कारक भाव अनादि निवारवो रे,
साधकता अवलंबी तेह समारवो रे.||३||
शुद्ध पणे पर्याय प्रवर्तन कार्यमें रे,
कर्तादिक परिणाम ते आतम धर्ममें रे;
चेतन चैतन्य भाव करे सम वेतमें रे,
सादि अनंतो काळ रहे निज खेतमें रे.||४||
पर कतृत्त्व स्वभाव करे त्यां लगी रे,
शुद्ध कार्य रुचि भास थये नवि आदरे रे;
शुद्धातम निज कार्य रुचि कारक फिरे रे,
तेहि ज मूळ स्वभाव ग्रहे निज पद वरे रे.||५||
कारण कारज रूप अछे कारकदशा रे,
वस्तु प्रगट पर्याय एह मनमें वस्या रे;
पण शुद्ध सरुप ध्यान चेतनता ग्रहे रे,
तब निज साधक भाव सकळ कारक लहेरे.||६||
माहरुं पूर्णानंद प्रगट करवा भणी रे,
पुष्टालंबन रुप सेव प्रभुजी तणी रे;
“देवचंद्र’ जिनचंद्र भगति मनमें धरो रे,
अव्याबाध अनंत अक्षयपद आदरो रे.||७||`,
      sa: "",
      en: `Mallinaatha jaganaatha charanayuga dhyaaeeye re,
Shuddhaatama praagabhaava paramapada paaeeye re;
Saadhaka kaaraka shatka kare guna saadhanaa re,
Tehi ja shuddha sarupa thaaye niraabaadhanaa re.||1||
Kartaa aatamadravya kaarya nija siddhataa re,
Upaadaana parinaama prayukta te kaaranataa re;
Sanpada daana teha sanpradaanataa re,
Daataa paatrane deya tribhaava abhedataa re.||2||
Sva para vivechana karana teha apaadaanathee re,
Sakala paryaaya aadhaara sanbandha aasthaanathee re;
Baadhaka kaaraka bhaava anaadi nivaaravo re,
Saadhakataa avalanbee teha samaaravo re.||3||
Shuddha pane paryaaya pravartana kaaryamen re,
Kartaadika parinaama te aatama dharmamen re;
Chetana chaitanya bhaava kare sama vetamen re,
Saadi ananto kaala rahe nija khetamen re.||4||
Para katruttva svabhaava kare tyaan lagee re,
Shuddha kaarya ruchi bhaasa thaye navi aadare re;
Shuddhaatama nija kaarya ruchi kaaraka phire re,
Tehi ja moola svabhaava grahe nija pada vare re.||5||
Kaarana kaaraja roopa achhe kaarakadashaa re,
Vastu pragata paryaaya eha manamen vasyaa re;
Pana shuddha sarupa dhyaana chetanataa grahe re,
Taba nija saadhaka bhaava sakala kaaraka lahere.||6||
Maaharun poornaananda pragata karavaa bhanee re,
Pushtaalanbana rupa seva prabhujee tanee re;
“devachandra’ jinachandra bhagati manamen dharo re,
Avyaabaadha ananta akshayapada aadaro re.||7||`,
    },
  },
  {
    id: "man-mohyu-prabhu-gun-ganma",
    type: "bhajan",
    title: {
      gu: "મન મોહ્યું પ્રભુ ગુણ ગાનમાં…",
      hi: "मन मोह्युं प्रभु गुण गानमां…",
      sa: "",
      en: "Man Mohyu Prabhu Gun Ganma",
    },
    text: {
      gu: `મન મોહ્યું પ્રભુ ગુણ ગાનમાં…
કાલ અનંત ન જાણ્યો જોતાં, મોહ સુરાકે પાનમાં. ॥१॥
એકેન્દ્રિ-બિ-તિ-ચઉરિન્દ્રિયમાં, કાળ ગયો અજ્ઞાનમાં;
હવે કોઈક પુણ્યોદય પ્રગટ્યો, આવી મલ્યો પ્રભુ ધ્યાનમાં. ॥२॥
અંતર ભરમ ગયો સવિ દૂરે, તત્ત્વ સુધારસ પાનમાં;
પ્રભુ તુમ દૃષ્ટિ ભઈ મોહે ઉપર, અંતર આતમ શાનમાં. ॥3||
દરસ સરસ દેખ્યો જિનજી કો, લગન લાગી તોરા જ્ઞાનમાં;
કેવ કમલા કંત કૃપાનિધિ, ઔર ન દેખ્યો જહાનમાં.
અશરણ શરણ જગત ઉપકારી, પરમાતમ શુચિ વાનમાં;
‘રામ’ કહે તુજ આણ ભવોભવ, ધારી નય પરમાણમાં. ॥५॥`,
      hi: `मन मोह्युं प्रभु गुण गानमां…
काल अनंत न जाण्यो जोतां, मोह सुराके पानमां. ॥१॥
एकेन्द्रि-बि-ति-चउरिन्द्रियमां, काळ गयो अज्ञानमां;
हवे कोईक पुण्योदय प्रगट्यो, आवी मल्यो प्रभु ध्यानमां. ॥२॥
अंतर भरम गयो सवि दूरे, तत्त्व सुधारस पानमां;
प्रभु तुम दृष्टि भई मोहे उपर, अंतर आतम शानमां. ॥3||
दरस सरस देख्यो जिनजी को, लगन लागी तोरा ज्ञानमां;
केव कमला कंत कृपानिधि, और न देख्यो जहानमां.
अशरण शरण जगत उपकारी, परमातम शुचि वानमां;
‘राम’ कहे तुज आण भवोभव, धारी नय परमाणमां. ॥५॥`,
      sa: "",
      en: `Mana mohyun prabhu guna gaanamaan…
Kaala ananta na jaanyo jotaan, moha suraake paanamaan. ||1||
Ekendri-bi-ti-chaurindriyamaan, kaala gayo ajnyaanamaan;
Have koeeka punyodaya pragatyo, aavee malyo prabhu dhyaanamaan. ||2||
Antara bharama gayo savi doore, tattva sudhaarasa paanamaan;
Prabhu tuma drushti bhaee mohe upara, antara aatama shaanamaan. ||3||
Darasa sarasa dekhyo jinajee ko, lagana laagee toraa jnyaanamaan;
Keva kamalaa kanta krupaanidhi, aura na dekhyo jahaanamaan.
Asharana sharana jagata upakaaree, paramaatama shuchi vaanamaan;
‘raama’ kahe tuja aana bhavobhava, dhaaree naya paramaanamaan. ||5||`,
    },
  },
  {
    id: "manadu-kim-hi-na-baje-ho-kunthujin",
    type: "bhajan",
    title: {
      gu: "મનડું કિમહિ ન બાજે હો કુંથુજિન! મનડું કિમહિ ન બાજે",
      hi: "मनडुं किमहि न बाजे हो कुंथुजिन! मनडुं किमहि न बाजे",
      sa: "",
      en: "Manadu Kim Hi Na Baje Ho Kunthujin",
    },
    text: {
      gu: `મનડું કિમહિ ન બાજે હો કુંથુજિન! મનડું કિમહિ ન બાજે;
જિમ જિમ જતન કરીને રાખું, તિમ તિમ અળગું ભાંજે. હો૦ ।। ૧ ।।
રજની વાસર વસતિ ઉજ્જડ, ગયણ પાયાલે જાય;
સાપ ખાય ને મુખડું થોથું, એહ ઉખાણો ન્યાય.||૨||
મુગતિ તણા અભિલાષી તપિયા, જ્ઞાન ને ધ્યાન અભ્યાસે;
વૈરિડું કાંઈ એહવું ચિંતે, નાંખે અવળે પાસે.||૩||
આગમ આગમધરને હાથે, નાવે કિણવિધ આંકુ;
કિહાં કને જો હઠ કરી અટકું, તો વ્યાલતણી પરે વાંકું.||૪||
જો ઠગ કહું તો ઠગતો ન દેખું, શાહુકાર પણ નાહિ;
સર્વમાંહેને સહુથી અળગું, એ અચરિજ મનમાંહિ.||૫||
જે જે કહું તે કાન ન ધારે, આપ મતે રહે કાલો;
સુર નર પંડિત જન સમજાવે, સમજે ન માહરો સાલો. હો૦।।૬।।
મેં જાણ્યું એ લિંગ નપુંસક, સકળ મરદને ઠેલે;
બીજી વાતે સમરથ છે નર, એહને કોઈ ન ઝેલે. હો૦।|૭।|
મન સાધ્યું તેણે સઘળું સાધ્યું, એહ વાત નહિ ખોટી;
એમ કહે સાધ્યું તે નવિ માનું, એક હી વાત છે મોટી.||૮||
મનડું દુરારાધ્ય તે વશ આણ્યું, તે આગમથી મતિ આણું;
‘આનંદઘન’ પ્રભુ માહરું આણું, તો સાચું કરી જાણું. હો૦।।૯।|`,
      hi: `मनडुं किमहि न बाजे हो कुंथुजिन! मनडुं किमहि न बाजे;
जिम जिम जतन करीने राखुं, तिम तिम अळगुं भांजे. हो० ।। १ ।।
रजनी वासर वसति उज्जड, गयण पायाले जाय;
साप खाय ने मुखडुं थोथुं, एह उखाणो न्याय.||२||
मुगति तणा अभिलाषी तपिया, ज्ञान ने ध्यान अभ्यासे;
वैरिडुं कांई एहवुं चिंते, नांखे अवळे पासे.||३||
आगम आगमधरने हाथे, नावे किणविध आंकु;
किहां कने जो हठ करी अटकुं, तो व्यालतणी परे वांकुं.||४||
जो ठग कहुं तो ठगतो न देखुं, शाहुकार पण नाहि;
सर्वमांहेने सहुथी अळगुं, ए अचरिज मनमांहि.||५||
जे जे कहुं ते कान न धारे, आप मते रहे कालो;
सुर नर पंडित जन समजावे, समजे न माहरो सालो. हो०।।६।।
में जाण्युं ए लिंग नपुंसक, सकळ मरदने ठेले;
बीजी वाते समरथ छे नर, एहने कोई न झेले. हो०।|७।|
मन साध्युं तेणे सघळुं साध्युं, एह वात नहि खोटी;
एम कहे साध्युं ते नवि मानुं, एक ही वात छे मोटी.||८||
मनडुं दुराराध्य ते वश आण्युं, ते आगमथी मति आणुं;
‘आनंदघन’ प्रभु माहरुं आणुं, तो साचुं करी जाणुं. हो०।।९।|`,
      sa: "",
      en: `Manadun kimahi na baaje ho kunthujina! manadun kimahi na baaje;
Jima jima jatana kareene raakhun, tima tima alagun bhaanje. ho0 || 1 ||
Rajanee vaasara vasati ujjada, gayana paayaale jaaya;
Saapa khaaya ne mukhadun thothun, eha ukhaano nyaaya.||2||
Mugati tanaa abhilaashee tapiyaa, jnyaana ne dhyaana abhyaase;
Vairidun kaanee ehavun chinte, naankhe avale paase.||3||
Aagama aagamadharane haathe, naave kinavidha aanku;
Kihaan kane jo hatha karee atakun, to vyaalatanee pare vaankun.||4||
Jo thaga kahun to thagato na dekhun, shaahukaara pana naahi;
Sarvamaanhene sahuthee alagun, e acharija manamaanhi.||5||
Je je kahun te kaana na dhaare, aapa mate rahe kaalo;
Sura nara pandita jana samajaave, samaje na maaharo saalo. ho0||6||
Men jaanyun e linga napunsaka, sakala maradane thele;
Beejee vaate samaratha chhe nara, ehane koee na jhele. ho0||7||
Mana saadhyun tene saghalun saadhyun, eha vaata nahi khotee;
Ema kahe saadhyun te navi maanun, eka hee vaata chhe motee.||8||
Manadun duraaraadhya te vasha aanyun, te aagamathee mati aanun;
‘aanandaghana’ prabhu maaharun aanun, to saachun karee jaanun. ho0||9||`,
    },
  },
  {
    id: "manmandir-mohan-aaviye",
    type: "bhajan",
    title: {
      gu: "મનમંદિર મોહન આવીયે…મનમંદિર મોહન આવીયે………!",
      hi: "मनमंदिर मोहन आवीये…मनमंदिर मोहन आवीये………!",
      sa: "",
      en: "Manmandir Mohan Aaviye",
    },
    text: {
      gu: `મનમંદિર મોહન આવીયે…મનમંદિર મોહન આવીયે………!
રાગ વિના તું રીઝવે, રીઝ વિના અરિહંત હો;
ભોગ વિના સુખ ભોગવે, નવિ કામ ધરે ભગવંત હો.||૧||
દામ નહિ જિન તાહરે પણ, ઠકુરાઈ નવિ પાર હો;
સંબંધ કોઈશું ન તાહરે પણ, બંધવ પરે અધિકાર હો.||૨||
માન વિના હિત ચિંતવે, કારણ ઉપગાર હો;
દાન છે સુરતરુ સારિખો, તિહાં કંચનનો નવિ પાર હો.||૩||
રાગ ભર્યો દિલ માહરો પ્રભુ, તે તિહાં કીધો પ્રકાશ હો;
જગરંજન તે નવિ આદર્યો, તિહાં રાગ નહિ લવલેશ હો.||૪||
અકલ પંથ એક તાહરો, તું તારે સહું સંસાર હો;
અળગો પણ રહે સંસારથી, પંકજ પરે જગદાધાર હો.||૫||
હું છું શાયર તુમે ચન્દ્રમાં, પ્રભુ અમ મોરા તુમે મેહ હો;
તમે તરુવર અમે પંખીયા, મુજને તુમશું અવિહડનેહ હો.||૬||
બાળક પરે જાણી કરી, કરો કરુણાદ્રષ્ટિ રસાળ હો;
પ્રભુ રાજનગરના રાજીયા, જિન વીર જિણંદ દયાળ હો.||૭||
શ્રી વિજયદેવ ગુરુ પાટવી, શ્રી વિજય સિંહ સૂરીંદ હો;
તસ શિષ્ય ‘ઉદય’ વાચક ભણે ધરી હૈડે આનંદ હી આનંદ હો.||૮||`,
      hi: `मनमंदिर मोहन आवीये…मनमंदिर मोहन आवीये………!
राग विना तुं रीझवे, रीझ विना अरिहंत हो;
भोग विना सुख भोगवे, नवि काम धरे भगवंत हो.||१||
दाम नहि जिन ताहरे पण, ठकुराई नवि पार हो;
संबंध कोईशुं न ताहरे पण, बंधव परे अधिकार हो.||२||
मान विना हित चिंतवे, कारण उपगार हो;
दान छे सुरतरु सारिखो, तिहां कंचननो नवि पार हो.||३||
राग भर्यो दिल माहरो प्रभु, ते तिहां कीधो प्रकाश हो;
जगरंजन ते नवि आदर्यो, तिहां राग नहि लवलेश हो.||४||
अकल पंथ एक ताहरो, तुं तारे सहुं संसार हो;
अळगो पण रहे संसारथी, पंकज परे जगदाधार हो.||५||
हुं छुं शायर तुमे चन्द्रमां, प्रभु अम मोरा तुमे मेह हो;
तमे तरुवर अमे पंखीया, मुजने तुमशुं अविहडनेह हो.||६||
बाळक परे जाणी करी, करो करुणाद्रष्टि रसाळ हो;
प्रभु राजनगरना राजीया, जिन वीर जिणंद दयाळ हो.||७||
श्री विजयदेव गुरु पाटवी, श्री विजय सिंह सूरींद हो;
तस शिष्य ‘उदय’ वाचक भणे धरी हैडे आनंद ही आनंद हो.||८||`,
      sa: "",
      en: `Manamandira mohana aaveeye…manamandira mohana aaveeye………!
Raaga vinaa tun reejhave, reejha vinaa arihanta ho;
Bhoga vinaa sukha bhogave, navi kaama dhare bhagavanta ho.||1||
Daama nahi jina taahare pana, thakuraaee navi paara ho;
Sanbandha koeeshun na taahare pana, bandhava pare adhikaara ho.||2||
Maana vinaa hita chintave, kaarana upagaara ho;
Daana chhe surataru saarikho, tihaan kanchanano navi paara ho.||3||
Raaga bharyo dila maaharo prabhu, te tihaan keedho prakaasha ho;
Jagaranjana te navi aadaryo, tihaan raaga nahi lavalesha ho.||4||
Akala pantha eka taaharo, tun taare sahun sansaara ho;
Alago pana rahe sansaarathee, pankaja pare jagadaadhaara ho.||5||
Hun chhun shaayara tume chandramaan, prabhu ama moraa tume meha ho;
Tame taruvara ame pankheeyaa, mujane tumashun avihadaneha ho.||6||
Baalaka pare jaanee karee, karo karunaadrashti rasaala ho;
Prabhu raajanagaranaa raajeeyaa, jina veera jinanda dayaala ho.||7||
Shree vijayadeva guru paatavee, shree vijaya sinha sooreenda ho;
Tasa shishya ‘udaya’ vaachaka bhane dharee haide aananda hee aananda ho.||8||`,
    },
  },
  {
    id: "manmohan-prabhu-pasji",
    type: "bhajan",
    title: {
      gu: "મનમોહન પ્રભુ પાસજી, સુણો જગત આધારજી",
      hi: "मनमोहन प्रभु पासजी, सुणो जगत आधारजी",
      sa: "",
      en: "Manmohan Prabhu Pasji",
    },
    text: {
      gu: `મનમોહન પ્રભુ પાસજી, સુણો જગત આધારજી;
શરણે આવ્યો રે પ્રભુ તાહરે, મુજ દુરિત નિવારજી. મન૦ ।।૧ ।।
વિષય કષાયના પાશમાં, ભમીયો કાળ અનંતજી;
રાગ દ્વેષ મહા ચોરટા, લૂંટ્યો ધર્મનો પંથજી.મન૦ || ૨ ||
પણ કાંઈ પૂરવ પુણ્યથી, મળિયા શ્રી જિનરાજજી;
ભવસમુદ્રમાં ડૂબતાં, આલંબન જિમ જહાજજી.મન૦||૩||
કમઠે નિજ અજ્ઞાનથી, ઉપસર્ગ કીધાં બહુ જાતજી;
ધ્યાનાનલ પ્રગટાવીને, કીધો કર્મનો ઘાતજી.||૪||
કેવળજ્ઞાનથી દેખિયું, લોકાલોક સ્વરુપજી;
વિજય મુક્તિપદ જઈ વર્યું, સાદિ અનંત ચિદ્રુપજી. મન૦ ।।૫ ।।
તે પદ પામવા ચાહતો, “મોહન” કમલનો દાસજી;
મનમોહન પ્રભુ માહરી, પૂરજો મનની આશજી. મન૦।।૬।।`,
      hi: `मनमोहन प्रभु पासजी, सुणो जगत आधारजी;
शरणे आव्यो रे प्रभु ताहरे, मुज दुरित निवारजी. मन० ।।१ ।।
विषय कषायना पाशमां, भमीयो काळ अनंतजी;
राग द्वेष महा चोरटा, लूंट्यो धर्मनो पंथजी.मन० || २ ||
पण कांई पूरव पुण्यथी, मळिया श्री जिनराजजी;
भवसमुद्रमां डूबतां, आलंबन जिम जहाजजी.मन०||३||
कमठे निज अज्ञानथी, उपसर्ग कीधां बहु जातजी;
ध्यानानल प्रगटावीने, कीधो कर्मनो घातजी.||४||
केवळज्ञानथी देखियुं, लोकालोक स्वरुपजी;
विजय मुक्तिपद जई वर्युं, सादि अनंत चिद्रुपजी. मन० ।।५ ।।
ते पद पामवा चाहतो, “मोहन” कमलनो दासजी;
मनमोहन प्रभु माहरी, पूरजो मननी आशजी. मन०।।६।।`,
      sa: "",
      en: `Manamohana prabhu paasajee, suno jagata aadhaarajee;
Sharane aavyo re prabhu taahare, muja durita nivaarajee. mana0 ||1 ||
Vishaya kashaayanaa paashamaan, bhameeyo kaala anantajee;
Raaga dvesha mahaa chorataa, loontyo dharmano panthajee.mana0 || 2 ||
Pana kaanee poorava punyathee, maliyaa shree jinaraajajee;
Bhavasamudramaan doobataan, aalanbana jima jahaajajee.mana0||3||
Kamathe nija ajnyaanathee, upasarga keedhaan bahu jaatajee;
Dhyaanaanala pragataaveene, keedho karmano ghaatajee.||4||
Kevalajnyaanathee dekhiyun, lokaaloka svarupajee;
Vijaya muktipada jaee varyun, saadi ananta chidrupajee. mana0 ||5 ||
Te pada paamavaa chaahato, “mohana” kamalano daasajee;
Manamohana prabhu maaharee, poorajo mananee aashajee. mana0||6||`,
    },
  },
  {
    id: "mara-sahib-shri-arnath",
    type: "bhajan",
    title: {
      gu: "મારા સાહિબ! શ્રી અરનાથ!, અરજ સુણો એક મોરી રે",
      hi: "मारा साहिब! श्री अरनाथ!, अरज सुणो एक मोरी रे",
      sa: "",
      en: "Mara Sahib Shri Arnath",
    },
    text: {
      gu: `મારા સાહિબ! શ્રી અરનાથ!, અરજ સુણો એક મોરી રે;
મારા પ્રભુજી પરમ કૃપાલ, ચાકરી ચાહું તોરી રે,
ચાકરી પ્રભુ ગુણ ગાઉં, સુખ અનંતા પાઉં રે. ॥१॥
જિન ભગતે જે હોવે રાતા, પામે પરભવ તે સુખશાતા રે;
પ્રભુ પૂજાએ આળસુ થાતા, તે દુખિયા પરભવ જતા રે.||૨||
પ્રભુ હાયથી પાતિક ધ્રૂજે, સારી શુભમતિ સૂઝે રે;
તે દેખી ભવિયણ પ્રતિબૂઝે, વળી કર્મરોગ સવિ રુઝે રે.||૩||
સામાન્ય નરની સેવા કરતાં, તો પણ પ્રાપ્તિ થાય રે;
તો ત્રિભુવન નાયકની સેવા, નિશ્ચે નિષ્ફળ ન જાય રે.||૪||
સાચી સેવા જાણી પ્રાણી, જે જિનવર આરાધે રે;
ખિમાવિજય પય પામી પુણ્યે, જશ સુખ લહે નિરાબાધે રે. ॥૫॥`,
      hi: `मारा साहिब! श्री अरनाथ!, अरज सुणो एक मोरी रे;
मारा प्रभुजी परम कृपाल, चाकरी चाहुं तोरी रे,
चाकरी प्रभु गुण गाउं, सुख अनंता पाउं रे. ॥१॥
जिन भगते जे होवे राता, पामे परभव ते सुखशाता रे;
प्रभु पूजाए आळसु थाता, ते दुखिया परभव जता रे.||२||
प्रभु हायथी पातिक ध्रूजे, सारी शुभमति सूझे रे;
ते देखी भवियण प्रतिबूझे, वळी कर्मरोग सवि रुझे रे.||३||
सामान्य नरनी सेवा करतां, तो पण प्राप्ति थाय रे;
तो त्रिभुवन नायकनी सेवा, निश्चे निष्फळ न जाय रे.||४||
साची सेवा जाणी प्राणी, जे जिनवर आराधे रे;
खिमाविजय पय पामी पुण्ये, जश सुख लहे निराबाधे रे. ॥५॥`,
      sa: "",
      en: `Maaraa saahiba! shree aranaatha!, araja suno eka moree re;
Maaraa prabhujee parama krupaala, chaakaree chaahun toree re,
Chaakaree prabhu guna gaaun, sukha anantaa paaun re. ||1||
Jina bhagate je hove raataa, paame parabhava te sukhashaataa re;
Prabhu poojaae aalasu thaataa, te dukhiyaa parabhava jataa re.||2||
Prabhu haayathee paatika dhrooje, saaree shubhamati soojhe re;
Te dekhee bhaviyana pratiboojhe, valee karmaroga savi rujhe re.||3||
Saamaanya naranee sevaa karataan, to pana praapti thaaya re;
To tribhuvana naayakanee sevaa, nishche nishphala na jaaya re.||4||
Saachee sevaa jaanee praanee, je jinavara aaraadhe re;
Khimaavijaya paya paamee punye, jasha sukha lahe niraabaadhe re. ||5||`,
    },
  },
  {
    id: "maro-muj-lyone-raj",
    type: "bhajan",
    title: {
      gu: "મારો મુજરો લ્યોને રાજ! સાહિબ! શાંતિ! સલૂણા!",
      hi: "मारो मुजरो ल्योने राज! साहिब! शांति! सलूणा!",
      sa: "",
      en: "Maro Muj Lyone Raj",
    },
    text: {
      gu: `મારો મુજરો લ્યોને રાજ! સાહિબ! શાંતિ! સલૂણા!
અચિરાજીના નંદન તોરે, દરિશણ હેતે આવ્યો;
સમકિત રીઝ કરોને સ્વામી, ભક્તિ ભેટણું લાવ્યો.||૧||
દુઃખભંજન છે બિરુદ અમને આશા તુમારી;
તુમે નિરાગી થઈને છૂટો, શી ગતિ હોશે અમારી? ॥૨॥
કહેશે લોક ન તાણી કહેવું, એવડું સ્વામી આગે;
પણ બાળક જો બોલી ન જાણે, તો કિમ વ્હાલો લાગે?||૩||
મારે તો તું સમરથ સાહિબ, તો કિમ ઓછું માનું?
ચિંતામણિ જેણે ગાંઠે બાંધ્યું, તેહને કામ કિશ્યાનું?||૪||
અધ્યાતમ રવિ ઊગ્યો મુજ ઘટ, મોહ તિમિર હર્યું જુગતે;
વિમલવિજય વાચકનો સેવક, ‘રામ’ કહે શુભ ભગતે.||૫||`,
      hi: `मारो मुजरो ल्योने राज! साहिब! शांति! सलूणा!
अचिराजीना नंदन तोरे, दरिशण हेते आव्यो;
समकित रीझ करोने स्वामी, भक्ति भेटणुं लाव्यो.||१||
दुःखभंजन छे बिरुद अमने आशा तुमारी;
तुमे निरागी थईने छूटो, शी गति होशे अमारी? ॥२॥
कहेशे लोक न ताणी कहेवुं, एवडुं स्वामी आगे;
पण बाळक जो बोली न जाणे, तो किम व्हालो लागे?||३||
मारे तो तुं समरथ साहिब, तो किम ओछुं मानुं?
चिंतामणि जेणे गांठे बांध्युं, तेहने काम किश्यानुं?||४||
अध्यातम रवि ऊग्यो मुज घट, मोह तिमिर हर्युं जुगते;
विमलविजय वाचकनो सेवक, ‘राम’ कहे शुभ भगते.||५||`,
      sa: "",
      en: `Maaro mujaro lyone raaja! saahiba! shaanti! saloonaa!
Achiraajeenaa nandana tore, darishana hete aavyo;
Samakita reejha karone svaamee, bhakti bhetanun laavyo.||1||
Dukhabhanjana chhe biruda amane aashaa tumaaree;
Tume niraagee thaeene chhooto, shee gati hoshe amaaree? ||2||
Kaheshe loka na taanee kahevun, evadun svaamee aage;
Pana baalaka jo bolee na jaane, to kima vhaalo laage?||3||
Maare to tun samaratha saahiba, to kima ochhun maanun?
Chintaamani jene gaanthe baandhyun, tehane kaama kishyaanun?||4||
Adhyaatama ravi oogyo muja ghata, moha timira haryun jugate;
Vimalavijaya vaachakano sevaka, ‘raama’ kahe shubha bhagate.||5||`,
    },
  },
  {
    id: "mata-marudevina-nand",
    type: "bhajan",
    title: {
      gu: "માતા મરુદેવીના નંદ!, દેખી તાહરી મૂરતિ મારું મન લોભાણું જી",
      hi: "माता मरुदेवीना नंद!, देखी ताहरी मूरति मारुं मन लोभाणुं जी",
      sa: "",
      en: "Mata Marudevina Nand",
    },
    text: {
      gu: `માતા મરુદેવીના નંદ!, દેખી તાહરી મૂરતિ મારું મન લોભાણું જી;
મારું દિલ લોભાણું જી, દેખી તાહરી મૂરતિ મારું ચિત્ત ચોરાણું જી.
કરુણાસાગર, કાયા કંચનવાન;
ધોરી લંછન પાઉલે કાંઈ, ધનુષ પાંચસે માન.||૧||
ત્રિગડે બેસી ધર્મ કહંતા, સુણે પર્ષદા બાર;
જોજન ગામિની વાણી મીઠી, વરસંતી જલધાર.||૨||
ઉર્વશી રુડી અપચ્છરા ને રામા છે મનરંગ;
પાયે નેઉર રણઝણે કાંઈ, કરતી નાટારંભ.||૩||
તું હી બ્રહ્મા તું હી વિધાતા, તું જગ તારણહાર;
તુજ સરીખો નહિ દેવ જગતમાં, અડવડિયા આધાર.||૪||
તું હી ભ્રાતા તું ત્રાતા, તું હી જગતનો દેવ;
સુર નર કિન્નર વાસુદેવા, કરતાં તુજ પદ સેવ.||૫||
શ્રી સિદ્ધાચલ તીરથ કેરો, રાજા ઋષભ જિણંદ;
કીર્તિ કરે “માણેકમુનિ’ તાહરી, ટાળો ભવભય ફંદ. ॥६॥`,
      hi: `माता मरुदेवीना नंद!, देखी ताहरी मूरति मारुं मन लोभाणुं जी;
मारुं दिल लोभाणुं जी, देखी ताहरी मूरति मारुं चित्त चोराणुं जी.
करुणासागर, काया कंचनवान;
धोरी लंछन पाउले कांई, धनुष पांचसे मान.||१||
त्रिगडे बेसी धर्म कहंता, सुणे पर्षदा बार;
जोजन गामिनी वाणी मीठी, वरसंती जलधार.||२||
उर्वशी रुडी अपच्छरा ने रामा छे मनरंग;
पाये नेउर रणझणे कांई, करती नाटारंभ.||३||
तुं ही ब्रह्मा तुं ही विधाता, तुं जग तारणहार;
तुज सरीखो नहि देव जगतमां, अडवडिया आधार.||४||
तुं ही भ्राता तुं त्राता, तुं ही जगतनो देव;
सुर नर किन्नर वासुदेवा, करतां तुज पद सेव.||५||
श्री सिद्धाचल तीरथ केरो, राजा ऋषभ जिणंद;
कीर्ति करे “माणेकमुनि’ ताहरी, टाळो भवभय फंद. ॥६॥`,
      sa: "",
      en: `Maataa marudeveenaa nanda!, dekhee taaharee moorati maarun mana lobhaanun jee;
Maarun dila lobhaanun jee, dekhee taaharee moorati maarun chitta choraanun jee.
Karunaasaagara, kaayaa kanchanavaana;
Dhoree lanchhana paaule kaanee, dhanusha paanchase maana.||1||
Trigade besee dharma kahantaa, sune parshadaa baara;
Jojana gaaminee vaanee meethee, varasantee jaladhaara.||2||
Urvashee rudee apachchharaa ne raamaa chhe manaranga;
Paaye neura ranajhane kaanee, karatee naataaranbha.||3||
Tun hee brahmaa tun hee vidhaataa, tun jaga taaranahaara;
Tuja sareekho nahi deva jagatamaan, adavadiyaa aadhaara.||4||
Tun hee bhraataa tun traataa, tun hee jagatano deva;
Sura nara kinnara vaasudevaa, karataan tuja pada seva.||5||
Shree siddhaachala teeratha kero, raajaa rushabha jinanda;
Keerti kare “maanekamuni’ taaharee, taalo bhavabhaya phanda. ||6||`,
    },
  },
  {
    id: "mata-trishala-nand-kumar",
    type: "bhajan",
    title: {
      gu: "માતા ત્રિશલાનંદ કુમાર, જગતનો દીવો રે",
      hi: "माता त्रिशलानंद कुमार, जगतनो दीवो रे",
      sa: "",
      en: "Mata Trishala Nand Kumar",
    },
    text: {
      gu: `માતા ત્રિશલાનંદ કુમાર, જગતનો દીવો રે,
મારા પ્રાણતણો આધાર, વીર ઘણું જીવો રે;
આમલકી ક્રીડાએ રમતાં, હાર્યો સુર પ્રભુ પામી રે,
સુણજોને સ્વામી અંતરજામી, વાત કહું શિર નામી રે. માતા૦ ।। ૧ ।।
સુધર્મા સુરલોકે રહેતાં, અમો મિથ્યાત્વે ભરાણા રે;
નાગદેવની પૂજા કરતાં, શિર ન ધરી પ્રભુ આણા રે.||૨||
એક દિન ઈન્દ્ર સભામાં બેઠા, સોહમપતિ એમ બોલે રે;
ધીરજ બળ ત્રિભુવનનું નાવે, ત્રિશલા બાળક તોલે રે. માતા૦।।૩।।
સાચું સાચું સહુ સુર બોલ્યા, પણ મેં વાત ન માની રે;
ફણિધરને લઘુ બાળક રૂપે, રમત રમિયો છાની રે.માતા૦ ।।૪।।
વર્ધમાન તુમ ધીરજ મોટું, બાલપણામાં નહિ કાચું રે;
ગિરઆના ગુણ ગિરુઆ ગાવે,
હવે મેં જાણ્યું સાચું રે. માતા૦ ||૫ ||
એક જ મુષ્ટિ પ્રહારે મારું, મિથ્યાત્વ ભાગ્યું જાય રે;
કેવલ પ્રગટે મોહરાયને, રહેવાનું નહિ થાય રે. માતા૦।।૬।।
આજ થકી તું સાહિબ માહરો, હું છું સેવક તાહરો રે;
ક્ષણ એક સ્વામી ગુણ ન વિસારું,
પ્રાણ થકી તું પ્યારો રે. માતા૦।।૭।।
મોહ હરાવે સમકિત પાવે, તે સુર સ્વર્ગ સિધાવે રે;
મહાવીર પ્રભુનું નામ ઈન્દ્રસભા ગુણ ગાવે રે. માતા૦।।૮।।
પ્રભુ મલકંતા નિજ ઘર આવે, સરખા મિત્ર સોહાવે રે;
શ્રી શુભવીર’નું મુખડું જોતાં, માતાજી આનંદ પાવેરે. માતા૦ ।।૯।।`,
      hi: `माता त्रिशलानंद कुमार, जगतनो दीवो रे,
मारा प्राणतणो आधार, वीर घणुं जीवो रे;
आमलकी क्रीडाए रमतां, हार्यो सुर प्रभु पामी रे,
सुणजोने स्वामी अंतरजामी, वात कहुं शिर नामी रे. माता० ।। १ ।।
सुधर्मा सुरलोके रहेतां, अमो मिथ्यात्वे भराणा रे;
नागदेवनी पूजा करतां, शिर न धरी प्रभु आणा रे.||२||
एक दिन ईन्द्र सभामां बेठा, सोहमपति एम बोले रे;
धीरज बळ त्रिभुवननुं नावे, त्रिशला बाळक तोले रे. माता०।।३।।
साचुं साचुं सहु सुर बोल्या, पण में वात न मानी रे;
फणिधरने लघु बाळक रूपे, रमत रमियो छानी रे.माता० ।।४।।
वर्धमान तुम धीरज मोटुं, बालपणामां नहि काचुं रे;
गिरआना गुण गिरुआ गावे,
हवे में जाण्युं साचुं रे. माता० ||५ ||
एक ज मुष्टि प्रहारे मारुं, मिथ्यात्व भाग्युं जाय रे;
केवल प्रगटे मोहरायने, रहेवानुं नहि थाय रे. माता०।।६।।
आज थकी तुं साहिब माहरो, हुं छुं सेवक ताहरो रे;
क्षण एक स्वामी गुण न विसारुं,
प्राण थकी तुं प्यारो रे. माता०।।७।।
मोह हरावे समकित पावे, ते सुर स्वर्ग सिधावे रे;
महावीर प्रभुनुं नाम ईन्द्रसभा गुण गावे रे. माता०।।८।।
प्रभु मलकंता निज घर आवे, सरखा मित्र सोहावे रे;
श्री शुभवीर’नुं मुखडुं जोतां, माताजी आनंद पावेरे. माता० ।।९।।`,
      sa: "",
      en: `Maataa trishalaananda kumaara, jagatano deevo re,
Maaraa praanatano aadhaara, veera ghanun jeevo re;
Aamalakee kreedaae ramataan, haaryo sura prabhu paamee re,
Sunajone svaamee antarajaamee, vaata kahun shira naamee re. maataa0 || 1 ||
Sudharmaa suraloke rahetaan, amo mithyaatve bharaanaa re;
Naagadevanee poojaa karataan, shira na dharee prabhu aanaa re.||2||
Eka dina eendra sabhaamaan bethaa, sohamapati ema bole re;
Dheeraja bala tribhuvananun naave, trishalaa baalaka tole re. maataa0||3||
Saachun saachun sahu sura bolyaa, pana men vaata na maanee re;
Phanidharane laghu baalaka roope, ramata ramiyo chhaanee re.maataa0 ||4||
Vardhamaana tuma dheeraja motun, baalapanaamaan nahi kaachun re;
Giraaanaa guna giruaa gaave,
Have men jaanyun saachun re. maataa0 ||5 ||
Eka ja mushti prahaare maarun, mithyaatva bhaagyun jaaya re;
Kevala pragate moharaayane, rahevaanun nahi thaaya re. maataa0||6||
Aaja thakee tun saahiba maaharo, hun chhun sevaka taaharo re;
Kshana eka svaamee guna na visaarun,
Praana thakee tun pyaaro re. maataa0||7||
Moha haraave samakita paave, te sura svarga sidhaave re;
Mahaaveera prabhunun naama eendrasabhaa guna gaave re. maataa0||8||
Prabhu malakantaa nija ghara aave, sarakhaa mitra sohaave re;
Shree shubhaveera’nun mukhadun jotaan, maataajee aananda paavere. maataa0 ||9||`,
    },
  },
  {
    id: "me-aaj-darishan-paya-re",
    type: "bhajan",
    title: {
      gu: "મૈં આજ દરિસણ પાયા, શ્રી નેમિનાથ જિનરાયા",
      hi: "मैं आज दरिसण पाया, श्री नेमिनाथ जिनराया",
      sa: "",
      en: "Me Aaj Darishan Paya Re",
    },
    text: {
      gu: `મૈં આજ દરિસણ પાયા, શ્રી નેમિનાથ જિનરાયા,
પ્રભુ શિવાદેવીના જાયા, પ્રભુ સમુદ્રવિજય કુળ આયા;
કર્મો કે ફંદ છોડાયા, બ્રહ્મચારી નામ ધરાયા,
જિણે તોડી જગત કી માયા રે.||૧||
રૈવતગિરિ મંડન રાયા, કલ્યાણક તીન સોહાયા;
કેવલ શિવ રાયા, જગતારક બિરુદ ધરાયા;
તુમ બેઠે ધ્યાન લગાયા રે.मैं०॥२॥
અબ સુણો ત્રિભુવન રાયા, મેં કર્મો કે વશ આયા;
હું ચતુર્ગતિ ભટકાયા, મેં દુઃખ અનંતા પાયા;
તે ગિનતી નાહી ગિનાયા રે.||૩||
મૈં ગર્ભાવાસ મેં આયા, ઊંધે મસ્તક લટકાયા;
આહાર વિરસ ભુક્તાયા,
એમ અશુભ કરમ ફલ પાયા;
ઈણ દુઃખ સે નાહીં મુકાયા રે. मैं० ॥૪॥
નરભવ ચિંતામણિ પાયા, તબ ચાર ચોર મિલ આયા;
મુજે ચૌટે મેં લૂંટ ખાયા, અબ સાર કરો જિનરાયા;
કિસ કારણ દેર લગાયા રે. मैं० ॥५॥
જિણે અંતરગત મેં લાયા, પ્રભુ નેમિ નિરંજન ધ્યાયા;
દુઃખ સંકટ વિઘન હટાયા, તે પરમાનંદ પદ પાયા;
ફિર સંસારે નહીં આયા રે. मैं०॥६॥
મૈં દૂર દેશ સે આયા, પ્રભુ ચરણે શીશ નમાયા;
મેં અરજ કરી સુખદાયા, તુમે અવધારો મહારાયા;
એમ ‘વીરવિજય” ગુણ ગાયા રે.||૭||`,
      hi: `मैं आज दरिसण पाया, श्री नेमिनाथ जिनराया,
प्रभु शिवादेवीना जाया, प्रभु समुद्रविजय कुळ आया;
कर्मो के फंद छोडाया, ब्रह्मचारी नाम धराया,
जिणे तोडी जगत की माया रे.||१||
रैवतगिरि मंडन राया, कल्याणक तीन सोहाया;
केवल शिव राया, जगतारक बिरुद धराया;
तुम बेठे ध्यान लगाया रे.मैं०॥२॥
अब सुणो त्रिभुवन राया, में कर्मो के वश आया;
हुं चतुर्गति भटकाया, में दुःख अनंता पाया;
ते गिनती नाही गिनाया रे.||३||
मैं गर्भावास में आया, ऊंधे मस्तक लटकाया;
आहार विरस भुक्ताया,
एम अशुभ करम फल पाया;
ईण दुःख से नाहीं मुकाया रे. मैं० ॥४॥
नरभव चिंतामणि पाया, तब चार चोर मिल आया;
मुजे चौटे में लूंट खाया, अब सार करो जिनराया;
किस कारण देर लगाया रे. मैं० ॥५॥
जिणे अंतरगत में लाया, प्रभु नेमि निरंजन ध्याया;
दुःख संकट विघन हटाया, ते परमानंद पद पाया;
फिर संसारे नहीं आया रे. मैं०॥६॥
मैं दूर देश से आया, प्रभु चरणे शीश नमाया;
में अरज करी सुखदाया, तुमे अवधारो महाराया;
एम ‘वीरविजय” गुण गाया रे.||७||`,
      sa: "",
      en: `Main aaja darisana paayaa, shree neminaatha jinaraayaa,
Prabhu shivaadeveenaa jaayaa, prabhu samudravijaya kula aayaa;
Karmo ke phanda chhodaayaa, brahmachaaree naama dharaayaa,
Jine todee jagata kee maayaa re.||1||
Raivatagiri mandana raayaa, kalyaanaka teena sohaayaa;
Kevala shiva raayaa, jagataaraka biruda dharaayaa;
Tuma bethe dhyaana lagaayaa re.मैं0||2||
Aba suno tribhuvana raayaa, men karmo ke vasha aayaa;
Hun chaturgati bhatakaayaa, men dukha anantaa paayaa;
Te ginatee naahee ginaayaa re.||3||
Main garbhaavaasa men aayaa, oondhe mastaka latakaayaa;
Aahaara virasa bhuktaayaa,
Ema ashubha karama phala paayaa;
Eena dukha se naaheen mukaayaa re. मैं0 ||4||
Narabhava chintaamani paayaa, taba chaara chora mila aayaa;
Muje chaute men loonta khaayaa, aba saara karo jinaraayaa;
Kisa kaarana dera lagaayaa re. मैं0 ||5||
Jine antaragata men laayaa, prabhu nemi niranjana dhyaayaa;
Dukha sankata vighana hataayaa, te paramaananda pada paayaa;
Phira sansaare naheen aayaa re. मैं0||6||
Main doora desha se aayaa, prabhu charane sheesha namaayaa;
Men araja karee sukhadaayaa, tume avadhaaro mahaaraayaa;
Ema ‘veeravijaya” guna gaayaa re.||7||`,
    },
  },
  {
    id: "me-kino-nahi-tum-bin",
    type: "bhajan",
    title: {
      gu: "મેં કીનો નહીં તુમ બિન ઔર શું રાગ… (૨)",
      hi: "में कीनो नहीं तुम बिन और शुं राग… (२)",
      sa: "",
      en: "Me Kino Nahi Tum Bin",
    },
    text: {
      gu: `મેં કીનો નહીં તુમ બિન ઔર શું રાગ… (૨)
દિન દિન વાન ચઢત ગુણ તેરો, જ્યું કંચન પર ભાગ;
ઔરન મેં હૈ કષાય કી કાલિમા, સો ક્યું સેવા લાગ.||૧||
રાજહંસ તું માન સરોવર, ઔર અશુચિ રુચિ કાગ;
વિષય ભુજંગમ ગરુડ તે કહીએ, ઔર વિષય વિષ નાગ.||૨||
જલ છિલ્લર સરીખે, તું તો સમુદ્ર અથાગ;
તું સુરતરુ જગ વાંછિત પૂરણ, ઔર તો સૂકે સાગ.||૩||
તું પુરુષોત્તમ, તું હીં નિરંજન, તું શંકર વડભાગ;
તું બ્રહ્મા, તું બુદ્ધ મહાબલ, તું હીં જ દેવ વીતરાગ.||૪||
સુવિધિનાથ તુમ ગુણ ફુલન કો, મેરો દિલ હૈ બાગ;
“જસ” કહે ભ્રમર રસિક હોઈ તામેં, લીજે ભક્તિ પરાગ.||૫||`,
      hi: `में कीनो नहीं तुम बिन और शुं राग… (२)
दिन दिन वान चढत गुण तेरो, ज्युं कंचन पर भाग;
औरन में है कषाय की कालिमा, सो क्युं सेवा लाग.||१||
राजहंस तुं मान सरोवर, और अशुचि रुचि काग;
विषय भुजंगम गरुड ते कहीए, और विषय विष नाग.||२||
जल छिल्लर सरीखे, तुं तो समुद्र अथाग;
तुं सुरतरु जग वांछित पूरण, और तो सूके साग.||३||
तुं पुरुषोत्तम, तुं हीं निरंजन, तुं शंकर वडभाग;
तुं ब्रह्मा, तुं बुद्ध महाबल, तुं हीं ज देव वीतराग.||४||
सुविधिनाथ तुम गुण फुलन को, मेरो दिल है बाग;
“जस” कहे भ्रमर रसिक होई तामें, लीजे भक्ति पराग.||५||`,
      sa: "",
      en: `Men keeno naheen tuma bina aura shun raaga… (2)
Dina dina vaana chadhata guna tero, jyun kanchana para bhaaga;
Aurana men hai kashaaya kee kaalimaa, so kyun sevaa laaga.||1||
Raajahansa tun maana sarovara, aura ashuchi ruchi kaaga;
Vishaya bhujangama garuda te kaheee, aura vishaya visha naaga.||2||
Jala chhillara sareekhe, tun to samudra athaaga;
Tun surataru jaga vaanchhita poorana, aura to sooke saaga.||3||
Tun purushottama, tun heen niranjana, tun shankara vadabhaaga;
Tun brahmaa, tun buddha mahaabala, tun heen ja deva veetaraaga.||4||
Suvidhinaatha tuma guna phulana ko, mero dila hai baaga;
“jasa” kahe bhramara rasika hoee taamen, leeje bhakti paraaga.||5||`,
    },
  },
  {
    id: "mere-prabhu-paras-antaryami-y",
    type: "bhajan",
    title: {
      gu: "મેરો પ્રભુ પારસ અંતરયામી…",
      hi: "मेरो प्रभु पारस अंतरयामी…",
      sa: "",
      en: "Mere Prabhu Paras Antaryami Y",
    },
    text: {
      gu: `મેરો પ્રભુ પારસ અંતરયામી…
ઔર સુરાસુર દેખી ન રીઝું, પ્રભુ સેવા મેં પાઉં.॥१॥
રંક કી કુણ આણ ધરે શિર,
તજી ત્રિભુવનનો સ્વામી. ॥२॥
દુઃખ છીન માંહિ નવાજે,
શિવસુખ દો શિવગામી. ॥३॥
ક્યાં કહીયે તુમસે કિરપાનિધિ;
ખમજો મારી ખામી.॥४॥
કહે ‘જિનહર્ષ’ પરમ પદ પાવું,
અરજ કરું શિરનામી.||૫||`,
      hi: `मेरो प्रभु पारस अंतरयामी…
और सुरासुर देखी न रीझुं, प्रभु सेवा में पाउं.॥१॥
रंक की कुण आण धरे शिर,
तजी त्रिभुवननो स्वामी. ॥२॥
दुःख छीन मांहि नवाजे,
शिवसुख दो शिवगामी. ॥३॥
क्यां कहीये तुमसे किरपानिधि;
खमजो मारी खामी.॥४॥
कहे ‘जिनहर्ष’ परम पद पावुं,
अरज करुं शिरनामी.||५||`,
      sa: "",
      en: `Mero prabhu paarasa antarayaamee…
Aura suraasura dekhee na reejhun, prabhu sevaa men paaun.||1||
Ranka kee kuna aana dhare shira,
Tajee tribhuvanano svaamee. ||2||
Dukha chheena maanhi navaaje,
Shivasukha do shivagaamee. ||3||
Kyaan kaheeye tumase kirapaanidhi;
Khamajo maaree khaamee.||4||
Kahe ‘jinaharsha’ parama pada paavun,
Araja karun shiranaamee.||5||`,
    },
  },
  {
    id: "mere-sahib-tum-hi-ho",
    type: "bhajan",
    title: {
      gu: "મેરે સાહિબ તુમ હિ હો, પ્રભુ પાસ જિણંદા",
      hi: "मेरे साहिब तुम हि हो, प्रभु पास जिणंदा",
      sa: "",
      en: "Mere Sahib Tum Hi Ho",
    },
    text: {
      gu: `મેરે સાહિબ તુમ હિ હો, પ્રભુ પાસ જિણંદા;
ખિજમતગાર ગરીબ મેં તેરા બંદા.||૧||
મૈં ચકોર કરું ચાકરી, જબ તુમ હિ ચંદા;
ચક્રવાક મૈં હુઈ રહું, જબ તુમ હિ દિણંદા.||૨||
મધુકર પરે મેં રણઝણું, જબ તુમ અરવિંદા;
તુમ સાયર જબ મેં તદા, સુરસરિતા અમંદા.||૩||
દૂર કરો દાદા પાસજી! ભવ દુઃખકા ફંદા;
વાચક ‘જશ’ કહે દાસકું, દિયો પરમાનંદા. भेरे०॥૪॥
ભક્તિ કરું ખગપતિ પરે, જબ તુમ ગોવિંદા.
જબ તુમ ગર્જિત ઘન ભયે, તબ મેં શિખિનંદા; મેરે. ।।૫।।`,
      hi: `मेरे साहिब तुम हि हो, प्रभु पास जिणंदा;
खिजमतगार गरीब में तेरा बंदा.||१||
मैं चकोर करुं चाकरी, जब तुम हि चंदा;
चक्रवाक मैं हुई रहुं, जब तुम हि दिणंदा.||२||
मधुकर परे में रणझणुं, जब तुम अरविंदा;
तुम सायर जब में तदा, सुरसरिता अमंदा.||३||
दूर करो दादा पासजी! भव दुःखका फंदा;
वाचक ‘जश’ कहे दासकुं, दियो परमानंदा. भेरे०॥४॥
भक्ति करुं खगपति परे, जब तुम गोविंदा.
जब तुम गर्जित घन भये, तब में शिखिनंदा; मेरे. ।।५।।`,
      sa: "",
      en: `Mere saahiba tuma hi ho, prabhu paasa jinandaa;
Khijamatagaara gareeba men teraa bandaa.||1||
Main chakora karun chaakaree, jaba tuma hi chandaa;
Chakravaaka main huee rahun, jaba tuma hi dinandaa.||2||
Madhukara pare men ranajhanun, jaba tuma aravindaa;
Tuma saayara jaba men tadaa, surasaritaa amandaa.||3||
Doora karo daadaa paasajee! bhava dukhakaa phandaa;
Vaachaka ‘jasha’ kahe daasakun, diyo paramaanandaa. भेरे0||4||
Bhakti karun khagapati pare, jaba tuma govindaa.
Jaba tuma garjita ghana bhaye, taba men shikhinandaa; mere. ||5||`,
    },
  },
  {
    id: "mero-man-kitahi-na-lage",
    type: "bhajan",
    title: {
      gu: "મેરો મન! કિતહી ન લાગે… શ્રેયાંસ જિણંદા!",
      hi: "मेरो मन! कितही न लागे… श्रेयांस जिणंदा!",
      sa: "",
      en: "Mero Man Kitahi Na Lage",
    },
    text: {
      gu: `મેરો મન! કિતહી ન લાગે… શ્રેયાંસ જિણંદા!
સુખકર શ્રી શ્રેયાંસ જિણંદ સો, પ્રેમ વધ્યો ગુણરાગે. ||૧\`|
સમતાભરી તુજ સૂરત નીકી,
દેખત હી હિત જાગે.||૨||
લગન લગી અટક્યો રહે અહનિશિ,
અલિ જ્યું કમલ પરાગે.||૩||
એતી નિવાજસ કરન મેં રાજી,
તુમ ગુણ એક વિભાગે.||૪||
કહે “અમૃત” ઈતનો હી દીજે,
કછુઅન ચાહું આગે.||૫||`,
      hi: `मेरो मन! कितही न लागे… श्रेयांस जिणंदा!
सुखकर श्री श्रेयांस जिणंद सो, प्रेम वध्यो गुणरागे. ||१\`|
समताभरी तुज सूरत नीकी,
देखत ही हित जागे.||२||
लगन लगी अटक्यो रहे अहनिशि,
अलि ज्युं कमल परागे.||३||
एती निवाजस करन में राजी,
तुम गुण एक विभागे.||४||
कहे “अमृत” ईतनो ही दीजे,
कछुअन चाहुं आगे.||५||`,
      sa: "",
      en: `Mero mana! kitahee na laage… shreyaansa jinandaa!
Sukhakara shree shreyaansa jinanda so, prema vadhyo gunaraage. ||1\`|
Samataabharee tuja soorata neekee,
Dekhata hee hita jaage.||2||
Lagana lagee atakyo rahe ahanishi,
Ali jyun kamala paraage.||3||
Etee nivaajasa karana men raajee,
Tuma guna eka vibhaage.||4||
Kahe “amruta” eetano hee deeje,
Kachhuana chaahun aage.||5||`,
    },
  },
  {
    id: "muj-ghat-aavjo-re-nath",
    type: "bhajan",
    title: {
      gu: "મુજ ઘટ આવજો રે નાથ",
      hi: "मुज घट आवजो रे नाथ",
      sa: "",
      en: "Muj Ghat Aavjo Re Nath",
    },
    text: {
      gu: `મુજ ઘટ આવજો રે નાથ,
કરુણા કટાક્ષે જોઈને, દાસને કરજે સનાથ.||૧||
ચંદ્રપ્રભ જિન રાજિયા, તુજ વાસ વિષમો દૂર;
મળવા મન અળજો ઘણો, કિમ આવીએ હજૂર. ||૨||
વિરહ વેદના આકરી, લખી પાઠવું કુણ સાથ;
પંથી તો આવે નહિ, તે મારગે જગનાથ.||૩||
તું તો નિરાગી છે પ્રભુ!, પણ વાલહો મુજ જોર;
એક પખી એ પ્રીતડી, જિમ ચંદ્રમા ને ચકોર. ||૪||
તુજ સાથે જે પ્રીતડી રે, અતિવિષમ ખાંડાધાર;
પણ તેહના આદર થકી, તસ ફળ તણો નહિ પાર.||૫||
અમે ભક્તિયોગે આણશું, મનમંદિરે તુમ આજ;
વિમલના ‘રામ’શું, ઘણું રીઝશો મહારાજ.||૬||`,
      hi: `मुज घट आवजो रे नाथ,
करुणा कटाक्षे जोईने, दासने करजे सनाथ.||१||
चंद्रप्रभ जिन राजिया, तुज वास विषमो दूर;
मळवा मन अळजो घणो, किम आवीए हजूर. ||२||
विरह वेदना आकरी, लखी पाठवुं कुण साथ;
पंथी तो आवे नहि, ते मारगे जगनाथ.||३||
तुं तो निरागी छे प्रभु!, पण वालहो मुज जोर;
एक पखी ए प्रीतडी, जिम चंद्रमा ने चकोर. ||४||
तुज साथे जे प्रीतडी रे, अतिविषम खांडाधार;
पण तेहना आदर थकी, तस फळ तणो नहि पार.||५||
अमे भक्तियोगे आणशुं, मनमंदिरे तुम आज;
विमलना ‘राम’शुं, घणुं रीझशो महाराज.||६||`,
      sa: "",
      en: `Muja ghata aavajo re naatha,
Karunaa kataakshe joeene, daasane karaje sanaatha.||1||
Chandraprabha jina raajiyaa, tuja vaasa vishamo doora;
Malavaa mana alajo ghano, kima aaveee hajoora. ||2||
Viraha vedanaa aakaree, lakhee paathavun kuna saatha;
Panthee to aave nahi, te maarage jaganaatha.||3||
Tun to niraagee chhe prabhu!, pana vaalaho muja jora;
Eka pakhee e preetadee, jima chandramaa ne chakora. ||4||
Tuja saathe je preetadee re, ativishama khaandaadhaara;
Pana tehanaa aadara thakee, tasa phala tano nahi paara.||5||
Ame bhaktiyoge aanashun, manamandire tuma aaja;
Vimalanaa ‘raama’shun, ghanun reejhasho mahaaraaja.||6||`,
    },
  },
  {
    id: "muj-khol-jara",
    type: "bhajan",
    title: {
      gu: "મુખ ખોલ જરા, યહ ખરા, તું ઓર નહીં મૈ ઓર નહીં",
      hi: "मुख खोल जरा, यह खरा, तुं ओर नहीं मै ओर नहीं",
      sa: "",
      en: "Muj Khol Jara",
    },
    text: {
      gu: `મુખ ખોલ જરા, યહ ખરા, તું ઓર નહીં મૈ ઓર નહીં,
તું હૈ નાથ મેરા; મૈ હું જાન તેરી, મુઝે ક્યું વિસરાઈ જાન તેરી,
જબ કરમ કટે, ઔર ભરમ ફટે. तु०॥१॥
તું હૈ ઈશ ખરા, મૈ હું દાસ તેરા, મુઝે ક્યું ન કરો, અબ નાથ ખરા;
જબ કુમતિ ટરે, ઔર સુમતિ વરે.तु०॥२॥
તું હૈ પાસ જરા, મૈ હું પાશ પરા, મુઝે ક્યું ન છોડાવો પાસ ટરા,
જબ રાગ કટે, ઔર દ્વેષ મીટે. तु०॥३॥
તું હૈ અચલવરા, મૈ હું ચલનચરા, મુઝે ક્યું ન બનાવો આપ સરા;
જબ હોંસ જરે, ઔર સંગ ટરે.||૪||
તું હૈ ભૂપવરા, શંખેશ ખરા, મૈ તો “આતમરામ’ આનંદ ભરા;
તુમ દરસ કરી, સબ ભ્રાંતિ હરી. तु०॥५॥`,
      hi: `मुख खोल जरा, यह खरा, तुं ओर नहीं मै ओर नहीं,
तुं है नाथ मेरा; मै हुं जान तेरी, मुझे क्युं विसराई जान तेरी,
जब करम कटे, और भरम फटे. तु०॥१॥
तुं है ईश खरा, मै हुं दास तेरा, मुझे क्युं न करो, अब नाथ खरा;
जब कुमति टरे, और सुमति वरे.तु०॥२॥
तुं है पास जरा, मै हुं पाश परा, मुझे क्युं न छोडावो पास टरा,
जब राग कटे, और द्वेष मीटे. तु०॥३॥
तुं है अचलवरा, मै हुं चलनचरा, मुझे क्युं न बनावो आप सरा;
जब होंस जरे, और संग टरे.||४||
तुं है भूपवरा, शंखेश खरा, मै तो “आतमराम’ आनंद भरा;
तुम दरस करी, सब भ्रांति हरी. तु०॥५॥`,
      sa: "",
      en: `Mukha khola jaraa, yaha kharaa, tun ora naheen mai ora naheen,
Tun hai naatha meraa; mai hun jaana teree, mujhe kyun visaraaee jaana teree,
Jaba karama kate, aura bharama phate. तु0||1||
Tun hai eesha kharaa, mai hun daasa teraa, mujhe kyun na karo, aba naatha kharaa;
Jaba kumati tare, aura sumati vare.तु0||2||
Tun hai paasa jaraa, mai hun paasha paraa, mujhe kyun na chhodaavo paasa taraa,
Jaba raaga kate, aura dvesha meete. तु0||3||
Tun hai achalavaraa, mai hun chalanacharaa, mujhe kyun na banaavo aapa saraa;
Jaba honsa jare, aura sanga tare.||4||
Tun hai bhoopavaraa, shankhesha kharaa, mai to “aatamaraama’ aananda bharaa;
Tuma darasa karee, saba bhraanti haree. तु0||5||`,
    },
  },
  {
    id: "muj-man-bhamro",
    type: "bhajan",
    title: {
      gu: "મુજ મન ભમરો પ્રભુ ગુણ ફૂલડે, રમણ કરે દિનરાત",
      hi: "मुज मन भमरो प्रभु गुण फूलडे, रमण करे दिनरात",
      sa: "",
      en: "Muj Man Bhamro",
    },
    text: {
      gu: `મુજ મન ભમરો પ્રભુ ગુણ ફૂલડે, રમણ કરે દિનરાત;
સુણજો સ્વામી સુપાર્શ્વ સોહામણા રે,
કરજોડી કહું વાત. મુજ૦।।૧ ।।
મનડું ચાહે છે પ્રભુ મળવા ભણી રે, પણ દીસે છે અંતરાય;
જીવ પ્રમાદી કર્મ તણે વશ રે, તો કિમ મળવું થાય. भु४०॥२॥
લાખ ચોરાશી જીવયોનિમાં રે, ભવ અટવી ગતિ ચાર;
કાળ અનાદિ અનંત ભમતાં થકારે, કિમહી ન આવે પાર. મુજ૦।।૩॥
માર્ગ બતાવો સાહેબ માહરા રે, જિમ આવું તુમ પાસ;
લાજ વધારો સેવક તણી રે, ઘો દરિસણ મહારાજ.||૪||
મૂરતિ તાહરી રૂપે રુડી રે, અનુભવ પદ દાતાર;
નિત્ય લાભ પ્રભુશું રે, તુમથી બહુ મુજ૦॥૫॥`,
      hi: `मुज मन भमरो प्रभु गुण फूलडे, रमण करे दिनरात;
सुणजो स्वामी सुपार्श्व सोहामणा रे,
करजोडी कहुं वात. मुज०।।१ ।।
मनडुं चाहे छे प्रभु मळवा भणी रे, पण दीसे छे अंतराय;
जीव प्रमादी कर्म तणे वश रे, तो किम मळवुं थाय. भु४०॥२॥
लाख चोराशी जीवयोनिमां रे, भव अटवी गति चार;
काळ अनादि अनंत भमतां थकारे, किमही न आवे पार. मुज०।।३॥
मार्ग बतावो साहेब माहरा रे, जिम आवुं तुम पास;
लाज वधारो सेवक तणी रे, घो दरिसण महाराज.||४||
मूरति ताहरी रूपे रुडी रे, अनुभव पद दातार;
नित्य लाभ प्रभुशुं रे, तुमथी बहु मुज०॥५॥`,
      sa: "",
      en: `Muja mana bhamaro prabhu guna phoolade, ramana kare dinaraata;
Sunajo svaamee supaarshva sohaamanaa re,
Karajodee kahun vaata. muja0||1 ||
Manadun chaahe chhe prabhu malavaa bhanee re, pana deese chhe antaraaya;
Jeeva pramaadee karma tane vasha re, to kima malavun thaaya. भु40||2||
Laakha choraashee jeevayonimaan re, bhava atavee gati chaara;
Kaala anaadi ananta bhamataan thakaare, kimahee na aave paara. muja0||3||
Maarga bataavo saaheba maaharaa re, jima aavun tuma paasa;
Laaja vadhaaro sevaka tanee re, gho darisana mahaaraaja.||4||
Moorati taaharee roope rudee re, anubhava pada daataara;
Nitya laabha prabhushun re, tumathee bahu muja0||5||`,
    },
  },
  {
    id: "muj-man-pankaj-bhamarlo",
    type: "bhajan",
    title: {
      gu: "મુજ મન પંકજ ભમરલો, શ્રી નમિજિન જગદીશો રે",
      hi: "मुज मन पंकज भमरलो, श्री नमिजिन जगदीशो रे",
      sa: "",
      en: "Muj Man Pankaj Bhamarlo",
    },
    text: {
      gu: `મુજ મન પંકજ ભમરલો, શ્રી નમિજિન જગદીશો રે;
ધ્યાન ધરું નિત્ય તુમ તણું, નામ જપું નિશદિશો રે.||૧||
ચિત્ત થકી કદીયે ન વીસરે, દેખિયે આગળ ધ્યાને રે;
અંતર તાપથી જાણીએ, દૂર રહ્યા અનુમાને રે.||૨||
તું ગતિ તું મતિ આશરો, તુંહિ જ બાંધવ મોટો રે;
વાચક ‘જસ” કહે તુજ વિના, અવર પ્રપંચ તે ખોટો રે. ॥૩॥`,
      hi: `मुज मन पंकज भमरलो, श्री नमिजिन जगदीशो रे;
ध्यान धरुं नित्य तुम तणुं, नाम जपुं निशदिशो रे.||१||
चित्त थकी कदीये न वीसरे, देखिये आगळ ध्याने रे;
अंतर तापथी जाणीए, दूर रह्या अनुमाने रे.||२||
तुं गति तुं मति आशरो, तुंहि ज बांधव मोटो रे;
वाचक ‘जस” कहे तुज विना, अवर प्रपंच ते खोटो रे. ॥३॥`,
      sa: "",
      en: `Muja mana pankaja bhamaralo, shree namijina jagadeesho re;
Dhyaana dharun nitya tuma tanun, naama japun nishadisho re.||1||
Chitta thakee kadeeye na veesare, dekhiye aagala dhyaane re;
Antara taapathee jaaneee, doora rahyaa anumaane re.||2||
Tun gati tun mati aasharo, tunhi ja baandhava moto re;
Vaachaka ‘jasa” kahe tuja vinaa, avara prapancha te khoto re. ||3||`,
    },
  },
  {
    id: "muj-mandama-tu-varasyo-re",
    type: "bhajan",
    title: {
      gu: "મુજ મનડામાં તું વસ્યો રે, જજ્યું કુસુમમાં વાસ",
      hi: "मुज मनडामां तुं वस्यो रे, जज्युं कुसुममां वास",
      sa: "",
      en: "Muj Mandama Tu Varasyo Re",
    },
    text: {
      gu: `મુજ મનડામાં તું વસ્યો રે, જજ્યું કુસુમમાં વાસ;
અળગો ન રહે એક ઘડીરે, સાંભરે શ્વાસોશ્વાસ.||૧||
તુજશું રંગ લાગ્યો, રંગ લાગ્યો સાતે ધાત;
શ્રી જિનરાજ તુજશું રંગ લાગ્યો ત્રિભુવનનાથ.||૨||
શીતલ સ્વામી જે દિને રે, દીઠો તુમ દેદાર;
તે દિનથી મન માહરું રે, લાગ્યું તાહરી લાર.||૩||
મધુકર ચાહે માલતી રે, ચાહે ચન્દ્ર ચકોર;
તિમ મુજને પ્રભુ તાહરી રે, લાગી લગન અતિ જોર.||૪||
ભર્યા સરોવર ઊમટે રે, નદીયાં નીર ન માય;
તો પણ યાચે મેઘકું રે, જિમ ચાતક જગમાંય.||૫||
ઈમ જગમાં પ્રભુ તુમ વિના રે, મુજ મન નાવે રે કોય;
‘ઉદય’ વદે પદ સેવના રે, દીજે સન્મુખ જોય.||૬||`,
      hi: `मुज मनडामां तुं वस्यो रे, जज्युं कुसुममां वास;
अळगो न रहे एक घडीरे, सांभरे श्वासोश्वास.||१||
तुजशुं रंग लाग्यो, रंग लाग्यो साते धात;
श्री जिनराज तुजशुं रंग लाग्यो त्रिभुवननाथ.||२||
शीतल स्वामी जे दिने रे, दीठो तुम देदार;
ते दिनथी मन माहरुं रे, लाग्युं ताहरी लार.||३||
मधुकर चाहे मालती रे, चाहे चन्द्र चकोर;
तिम मुजने प्रभु ताहरी रे, लागी लगन अति जोर.||४||
भर्या सरोवर ऊमटे रे, नदीयां नीर न माय;
तो पण याचे मेघकुं रे, जिम चातक जगमांय.||५||
ईम जगमां प्रभु तुम विना रे, मुज मन नावे रे कोय;
‘उदय’ वदे पद सेवना रे, दीजे सन्मुख जोय.||६||`,
      sa: "",
      en: `Muja manadaamaan tun vasyo re, jajyun kusumamaan vaasa;
Alago na rahe eka ghadeere, saanbhare shvaasoshvaasa.||1||
Tujashun ranga laagyo, ranga laagyo saate dhaata;
Shree jinaraaja tujashun ranga laagyo tribhuvananaatha.||2||
Sheetala svaamee je dine re, deetho tuma dedaara;
Te dinathee mana maaharun re, laagyun taaharee laara.||3||
Madhukara chaahe maalatee re, chaahe chandra chakora;
Tima mujane prabhu taaharee re, laagee lagana ati jora.||4||
Bharyaa sarovara oomate re, nadeeyaan neera na maaya;
To pana yaache meghakun re, jima chaataka jagamaanya.||5||
Eema jagamaan prabhu tuma vinaa re, muja mana naave re koya;
‘udaya’ vade pada sevanaa re, deeje sanmukha joya.||6||`,
    },
  },
  {
    id: "muj-rolyone-mahro-sahib",
    type: "bhajan",
    title: {
      gu: "મુજરો લ્યોને માહરો સાહિબા,ગિરુઆ ગરીબ-નિવાજ",
      hi: "मुजरो ल्योने माहरो साहिबा,गिरुआ गरीब-निवाज",
      sa: "",
      en: "Muj Rolyone Mahro Sahib",
    },
    text: {
      gu: `મુજરો લ્યોને માહરો સાહિબા,ગિરુઆ ગરીબ-નિવાજ;
અવસર પામીજી એહવો, અરજ ન કરશોજી આજ.||૧||
તરુ આપે ફળ-ફૂલડાં, જળ આપે જળધાર;
સ્વારથ કો નહીં, કેવળ પર ઉપકાર.||૨||
તિમ પ્રભુ જગ જન તારવા, તું પામ્યો અવતાર;
માહરી વેળાજી એવડો, એ છે કવણ વિચાર.||૩||
ખિજમતગાર હું તાહરો, ખામી ન કરુંજી કોઈ;
બિરુદ સંભાળી આપણો, હિતની નજરે જોઈ.||૪||
સંભવ સાહિબ માહરા, તું મુજ મળિયોજી ઈશ;
વાચક વિમલવિજય તણો, ‘રામ’ કહે શુભ શીશ.||૫||`,
      hi: `मुजरो ल्योने माहरो साहिबा,गिरुआ गरीब-निवाज;
अवसर पामीजी एहवो, अरज न करशोजी आज.||१||
तरु आपे फळ-फूलडां, जळ आपे जळधार;
स्वारथ को नहीं, केवळ पर उपकार.||२||
तिम प्रभु जग जन तारवा, तुं पाम्यो अवतार;
माहरी वेळाजी एवडो, ए छे कवण विचार.||३||
खिजमतगार हुं ताहरो, खामी न करुंजी कोई;
बिरुद संभाळी आपणो, हितनी नजरे जोई.||४||
संभव साहिब माहरा, तुं मुज मळियोजी ईश;
वाचक विमलविजय तणो, ‘राम’ कहे शुभ शीश.||५||`,
      sa: "",
      en: `Mujaro lyone maaharo saahibaa,giruaa gareeba-nivaaja;
Avasara paameejee ehavo, araja na karashojee aaja.||1||
Taru aape phala-phooladaan, jala aape jaladhaara;
Svaaratha ko naheen, kevala para upakaara.||2||
Tima prabhu jaga jana taaravaa, tun paamyo avataara;
Maaharee velaajee evado, e chhe kavana vichaara.||3||
Khijamatagaara hun taaharo, khaamee na karunjee koee;
Biruda sanbhaalee aapano, hitanee najare joee.||4||
Sanbhava saahiba maaharaa, tun muja maliyojee eesha;
Vaachaka vimalavijaya tano, ‘raama’ kahe shubha sheesha.||5||`,
    },
  },
  {
    id: "muj-sarikha-mevasine",
    type: "bhajan",
    title: {
      gu: "મુજ સરીખા મેવાસીને, પ્રભુ જો તું તારે",
      hi: "मुज सरीखा मेवासीने, प्रभु जो तुं तारे",
      sa: "",
      en: "Muj Sarikha Mevasine",
    },
    text: {
      gu: `મુજ સરીખા મેવાસીને, પ્રભુ જો તું તારે;
તારક તો જાણું ખરો, જૂઠું બિરુદ શું ધારે? भु४०॥१॥
સેવા સલામી નવિ ભરું, સીધી આણ ન માનું;
માહરી રીતિ પ્રીછો તમે, શું રાખીએ છાનું? भु४०॥२॥
મોહ મિથ્યાત્વ મેવાસમાં, વળી વાસ મેં કીધો;
નિર્ગુણી ગુન્હી અકહ્યાગરો, નવિ ચાલું સીધો. भु४०॥३॥
જે તેં વરજ્યા વેગળા, તે મેં આઘા લીધા;
તુજશું બાંધી બાકરી, અન્યાયોં મેં કીધા. भु४०॥४॥
દ્વેષ ધરી તુજ ઉપરે, બીજાશું મળીયો;
તુજ શાસન ઉત્થાપીને, પાખંડે વળીયો.भु४०॥५॥
છલ કરીને છ કાયની, તુજ વાડી વિણાશી;
હું છું અનાડી અનાદિનો, હું તો મોટો મેવાસી. भु४०॥६॥
મેવાસીપણું મેલીને, આવ્યો તુજ ચરણે;
જો તારે તો તારજે, એહવે આચરણે. भु४०॥७॥
વામાનંદન વંદતા, ભવનું દુઃખ ભાંગું;
“ઉદયરત્ન’ કહે લળી લળી, પ્રભુ પાયે લાગું. भु४०॥८॥`,
      hi: `मुज सरीखा मेवासीने, प्रभु जो तुं तारे;
तारक तो जाणुं खरो, जूठुं बिरुद शुं धारे? भु४०॥१॥
सेवा सलामी नवि भरुं, सीधी आण न मानुं;
माहरी रीति प्रीछो तमे, शुं राखीए छानुं? भु४०॥२॥
मोह मिथ्यात्व मेवासमां, वळी वास में कीधो;
निर्गुणी गुन्ही अकह्यागरो, नवि चालुं सीधो. भु४०॥३॥
जे तें वरज्या वेगळा, ते में आघा लीधा;
तुजशुं बांधी बाकरी, अन्यायों में कीधा. भु४०॥४॥
द्वेष धरी तुज उपरे, बीजाशुं मळीयो;
तुज शासन उत्थापीने, पाखंडे वळीयो.भु४०॥५॥
छल करीने छ कायनी, तुज वाडी विणाशी;
हुं छुं अनाडी अनादिनो, हुं तो मोटो मेवासी. भु४०॥६॥
मेवासीपणुं मेलीने, आव्यो तुज चरणे;
जो तारे तो तारजे, एहवे आचरणे. भु४०॥७॥
वामानंदन वंदता, भवनुं दुःख भांगुं;
“उदयरत्न’ कहे लळी लळी, प्रभु पाये लागुं. भु४०॥८॥`,
      sa: "",
      en: `Muja sareekhaa mevaaseene, prabhu jo tun taare;
Taaraka to jaanun kharo, joothun biruda shun dhaare? भु40||1||
Sevaa salaamee navi bharun, seedhee aana na maanun;
Maaharee reeti preechho tame, shun raakheee chhaanun? भु40||2||
Moha mithyaatva mevaasamaan, valee vaasa men keedho;
Nirgunee gunhee akahyaagaro, navi chaalun seedho. भु40||3||
Je ten varajyaa vegalaa, te men aaghaa leedhaa;
Tujashun baandhee baakaree, anyaayon men keedhaa. भु40||4||
Dvesha dharee tuja upare, beejaashun maleeyo;
Tuja shaasana utthaapeene, paakhande valeeyo.भु40||5||
Chhala kareene chha kaayanee, tuja vaadee vinaashee;
Hun chhun anaadee anaadino, hun to moto mevaasee. भु40||6||
Mevaaseepanun meleene, aavyo tuja charane;
Jo taare to taaraje, ehave aacharane. भु40||7||
Vaamaanandana vandataa, bhavanun dukha bhaangun;
“udayaratna’ kahe lalee lalee, prabhu paaye laagun. भु40||8||`,
    },
  },
  {
    id: "munisurat-jin-vandata",
    type: "bhajan",
    title: {
      gu: "મુનિસુવ્રત ાજન વદતા, આત ઉલ્લાસત તેને મન થાય છે",
      hi: "मुनिसुव्रत ाजन वदता, आत उल्लासत तेने मन थाय छे",
      sa: "",
      en: "Munisurat Jin Vandata",
    },
    text: {
      gu: `મુનિસુવ્રત ાજન વદતા, આત ઉલ્લાસત તેને મન થાય છે;
વદન અનુપમ નીરખતાં, મારા ભવભવનાં દુઃખ જાય રે;
જગતગુરુ! જાગતો સુખકંદ રે..
સુખકંદ અમંદ આનંદ, પરમગુરુ! દીપતો સુખકંદ રે.॥१॥
નિશદિન સૂતા જાગતા, હિયડાથી ન રહે દૂર રે;
જબ ઉપકાર સંભારીએ, તબ ઊપજે આનંદ પૂર રે.||૨||
પ્રભુ ઉપકાર ગુણે ભર્યા, મન અવગુણ એક ન માય રે;
ગુણ ગણ અનુબંધી હુઆ, તે તો અક્ષય ભાવ કહાય રે.||૩||
અક્ષય પદ દિયે પ્રેમથી જે, પ્રભુનું તે અનુભવ રૂપ રે;
અક્ષર સ્વર ગોચર નહિ, એ તો અકલ અમાપ અરુપ રે.||૪||
અક્ષર થોડા ગુણ ઘણા, સજ્જનના તે ન લખાય રે;.
“વાચકજશ’ કહે પ્રેમથી, પણ મનમાંહે પરખાય રે.||૫||`,
      hi: `मुनिसुव्रत ाजन वदता, आत उल्लासत तेने मन थाय छे;
वदन अनुपम नीरखतां, मारा भवभवनां दुःख जाय रे;
जगतगुरु! जागतो सुखकंद रे..
सुखकंद अमंद आनंद, परमगुरु! दीपतो सुखकंद रे.॥१॥
निशदिन सूता जागता, हियडाथी न रहे दूर रे;
जब उपकार संभारीए, तब ऊपजे आनंद पूर रे.||२||
प्रभु उपकार गुणे भर्या, मन अवगुण एक न माय रे;
गुण गण अनुबंधी हुआ, ते तो अक्षय भाव कहाय रे.||३||
अक्षय पद दिये प्रेमथी जे, प्रभुनुं ते अनुभव रूप रे;
अक्षर स्वर गोचर नहि, ए तो अकल अमाप अरुप रे.||४||
अक्षर थोडा गुण घणा, सज्जनना ते न लखाय रे;.
“वाचकजश’ कहे प्रेमथी, पण मनमांहे परखाय रे.||५||`,
      sa: "",
      en: `Munisuvrata ાjana vadataa, aata ullaasata tene mana thaaya chhe;
Vadana anupama neerakhataan, maaraa bhavabhavanaan dukha jaaya re;
Jagataguru! jaagato sukhakanda re..
Sukhakanda amanda aananda, paramaguru! deepato sukhakanda re.||1||
Nishadina sootaa jaagataa, hiyadaathee na rahe doora re;
Jaba upakaara sanbhaareee, taba oopaje aananda poora re.||2||
Prabhu upakaara gune bharyaa, mana avaguna eka na maaya re;
Guna gana anubandhee huaa, te to akshaya bhaava kahaaya re.||3||
Akshaya pada diye premathee je, prabhunun te anubhava roopa re;
Akshara svara gochara nahi, e to akala amaapa arupa re.||4||
Akshara thodaa guna ghanaa, sajjananaa te na lakhaaya re;.
“vaachakajasha’ kahe premathee, pana manamaanhe parakhaaya re.||5||`,
    },
  },
  {
    id: "munisurat-jinray",
    type: "bhajan",
    title: {
      gu: "મુનિસુવ્રત જિનરાય, એક મુજ વિનંતી નિસુણો",
      hi: "मुनिसुव्रत जिनराय, एक मुज विनंती निसुणो",
      sa: "",
      en: "Munisurat Jinray",
    },
    text: {
      gu: `મુનિસુવ્રત જિનરાય, એક મુજ વિનંતી નિસુણો;
આતમતત્ત્વ ક્યું જાણું જગતગુરુ, એહ વિચાર મુજ કહિયો;
આતમતત્ત્વ જાણ્યા વિણ નિરમલ, ચિત્તસમાધિ નવિ લહિયો. ।।૧ ।।
કેઈ અબંધ આતમતત્ત્વ માને, કિરિયા કરતો દિસે;
ક્રિયાતણું ફળ કહો કુણ ભોગવે? ઈમ પૂછ્યું ચિત્ત રીસે. મુ૦।। ૨ ।।
જડ ચેતન એ આતમ એક જ, સ્થાવર જંગમ સરીખો;
સુખ દુઃખ સંકર દૂષણ આવે, ચિત્ત વિચારી જો પરીખો. મુ૦||૩||
એક કહે નિત્ય જ આતમતત્ત્વ, આતમ દરિસણ લીણો;
કૃત વિનાશ અકૃતાગમ નવિ દેખે મતિ હીણો. મુ૦।।૪ ।।
સૌગત મતરાગી કહે વાદી, ક્ષણિક એ આતમ જાણો;
બંધ મોક્ષ સુખ દુઃખ નવિ ઘટે, એહ વિચાર મન આણો. મુ૦।।૫।।
ભૂત ચતુષ્કવર્જિત આતમતત્ત્વ, સત્તા અળગી ન ઘટે;
અંધ શકટ જો નજરે ન દેખે, તો શ્યું કીજે શકટે.||૬||
ઈમ અનેક વાદી મતિ વિભ્રમ, સંકટ પડિયો ન લહે;
ચિત્ત સમાધિ તે માટે પૂછું, તુમ વિણ તત્ત્વ કોઈ ન કહે.||૭||
વલતું જગગુરુ ઈણિ પરે ભાખે, પક્ષપાત સબ છંડી;
રાગદ્વેષ મોહ પખ વર્જિત, આતમશું રઢ મંડી.||૮||
આતમ ધ્યાન કરે જ કોઉ, સો ફિર ઈણ મેં નાવે;
બીજું સહુ જાણે, એહ તત્ત્વ ચિત્ત ચાવે.||૯||
જિણે વિવેક ધરી એ પખ ગ્રહિયો, તે તત્ત્વજ્ઞાની કહીએ;
શ્રી મુનિસુવ્રત કૃપા કરો તો, “આનંદઘન’ પદ લહીએ. મુ૦।।૧૦।।`,
      hi: `मुनिसुव्रत जिनराय, एक मुज विनंती निसुणो;
आतमतत्त्व क्युं जाणुं जगतगुरु, एह विचार मुज कहियो;
आतमतत्त्व जाण्या विण निरमल, चित्तसमाधि नवि लहियो. ।।१ ।।
केई अबंध आतमतत्त्व माने, किरिया करतो दिसे;
क्रियातणुं फळ कहो कुण भोगवे? ईम पूछ्युं चित्त रीसे. मु०।। २ ।।
जड चेतन ए आतम एक ज, स्थावर जंगम सरीखो;
सुख दुःख संकर दूषण आवे, चित्त विचारी जो परीखो. मु०||३||
एक कहे नित्य ज आतमतत्त्व, आतम दरिसण लीणो;
कृत विनाश अकृतागम नवि देखे मति हीणो. मु०।।४ ।।
सौगत मतरागी कहे वादी, क्षणिक ए आतम जाणो;
बंध मोक्ष सुख दुःख नवि घटे, एह विचार मन आणो. मु०।।५।।
भूत चतुष्कवर्जित आतमतत्त्व, सत्ता अळगी न घटे;
अंध शकट जो नजरे न देखे, तो श्युं कीजे शकटे.||६||
ईम अनेक वादी मति विभ्रम, संकट पडियो न लहे;
चित्त समाधि ते माटे पूछुं, तुम विण तत्त्व कोई न कहे.||७||
वलतुं जगगुरु ईणि परे भाखे, पक्षपात सब छंडी;
रागद्वेष मोह पख वर्जित, आतमशुं रढ मंडी.||८||
आतम ध्यान करे ज कोउ, सो फिर ईण में नावे;
बीजुं सहु जाणे, एह तत्त्व चित्त चावे.||९||
जिणे विवेक धरी ए पख ग्रहियो, ते तत्त्वज्ञानी कहीए;
श्री मुनिसुव्रत कृपा करो तो, “आनंदघन’ पद लहीए. मु०।।१०।।`,
      sa: "",
      en: `Munisuvrata jinaraaya, eka muja vinantee nisuno;
Aatamatattva kyun jaanun jagataguru, eha vichaara muja kahiyo;
Aatamatattva jaanyaa vina niramala, chittasamaadhi navi lahiyo. ||1 ||
Keee abandha aatamatattva maane, kiriyaa karato dise;
Kriyaatanun phala kaho kuna bhogave? eema poochhyun chitta reese. mu0|| 2 ||
Jada chetana e aatama eka ja, sthaavara jangama sareekho;
Sukha dukha sankara dooshana aave, chitta vichaaree jo pareekho. mu0||3||
Eka kahe nitya ja aatamatattva, aatama darisana leeno;
Kruta vinaasha akrutaagama navi dekhe mati heeno. mu0||4 ||
Saugata mataraagee kahe vaadee, kshanika e aatama jaano;
Bandha moksha sukha dukha navi ghate, eha vichaara mana aano. mu0||5||
Bhoota chatushkavarjita aatamatattva, sattaa alagee na ghate;
Andha shakata jo najare na dekhe, to shyun keeje shakate.||6||
Eema aneka vaadee mati vibhrama, sankata padiyo na lahe;
Chitta samaadhi te maate poochhun, tuma vina tattva koee na kahe.||7||
Valatun jagaguru eeni pare bhaakhe, pakshapaata saba chhandee;
Raagadvesha moha pakha varjita, aatamashun radha mandee.||8||
Aatama dhyaana kare ja kou, so phira eena men naave;
Beejun sahu jaane, eha tattva chitta chaave.||9||
Jine viveka dharee e pakha grahiyo, te tattvajnyaanee kaheee;
Shree munisuvrata krupaa karo to, “aanandaghana’ pada laheee. mu0||10||`,
    },
  },
  {
    id: "munisurat-man-mohyu-maru",
    type: "bhajan",
    title: {
      gu: "મુનિસુવ્રત મન મોહ્યું મારું, શરણ ગ્રહ્યું છે તમારું",
      hi: "मुनिसुव्रत मन मोह्युं मारुं, शरण ग्रह्युं छे तमारुं",
      sa: "",
      en: "Munisurat Man Mohyu Maru",
    },
    text: {
      gu: `મુનિસુવ્રત મન મોહ્યું મારું, શરણ ગ્રહ્યું છે તમારું;
પ્રાતઃ સમય જ્યારે હું જાગું, સ્મરણ કરું છું તમારું;
હો જિનજી! તુજ મૂરતિ મનહરણી,
ભવ સાયર જલ તરણી.||૧||
આપ ભરોસો આ જગમાં છે, તારો તો ઘણું સારું;
જન્મ જરા મરણો કરી થાક્યો, આશરો લીધો મેં તારો.||૨||
ચું ચું ચું ચું ચિડીયાં બોલે, ભજન કરે છે તમારું;
મૂર્ખ મનુષ્ય પ્રમાદે પડ્યો રહે, નામ જપે નહિ તારું.||૩||
ભોર થતાં બહુ શોર સુણું હું, કોઈ હસે કોઈ રુવે ન્યારું;
સુખિયો સૂર્વે ને દુખિયો રુવે, અકલ ગતિએ વિચારું.||૪||
ખેલ ખલકનો બંધ નાટકનો, કુટુંબ કબીલો હું ધારું;
જ્યાં સુધી સ્વાર્થ ત્યાં સુધી સર્વે, અંત સમયે સહુ ન્યારું.||૫||
માયા જાળ તણી જોઈ જાણી, જગત લાગે છે ખારું;
“ઉદયરત્ન’ એમ જાણી પ્રભુ તારું, શરણ ગ્રહ્યું છે મેં સારું. ।।૬।।`,
      hi: `मुनिसुव्रत मन मोह्युं मारुं, शरण ग्रह्युं छे तमारुं;
प्रातः समय ज्यारे हुं जागुं, स्मरण करुं छुं तमारुं;
हो जिनजी! तुज मूरति मनहरणी,
भव सायर जल तरणी.||१||
आप भरोसो आ जगमां छे, तारो तो घणुं सारुं;
जन्म जरा मरणो करी थाक्यो, आशरो लीधो में तारो.||२||
चुं चुं चुं चुं चिडीयां बोले, भजन करे छे तमारुं;
मूर्ख मनुष्य प्रमादे पड्यो रहे, नाम जपे नहि तारुं.||३||
भोर थतां बहु शोर सुणुं हुं, कोई हसे कोई रुवे न्यारुं;
सुखियो सूर्वे ने दुखियो रुवे, अकल गतिए विचारुं.||४||
खेल खलकनो बंध नाटकनो, कुटुंब कबीलो हुं धारुं;
ज्यां सुधी स्वार्थ त्यां सुधी सर्वे, अंत समये सहु न्यारुं.||५||
माया जाळ तणी जोई जाणी, जगत लागे छे खारुं;
“उदयरत्न’ एम जाणी प्रभु तारुं, शरण ग्रह्युं छे में सारुं. ।।६।।`,
      sa: "",
      en: `Munisuvrata mana mohyun maarun, sharana grahyun chhe tamaarun;
Praata samaya jyaare hun jaagun, smarana karun chhun tamaarun;
Ho jinajee! tuja moorati manaharanee,
Bhava saayara jala taranee.||1||
Aapa bharoso aa jagamaan chhe, taaro to ghanun saarun;
Janma jaraa marano karee thaakyo, aasharo leedho men taaro.||2||
Chun chun chun chun chideeyaan bole, bhajana kare chhe tamaarun;
Moorkha manushya pramaade padyo rahe, naama jape nahi taarun.||3||
Bhora thataan bahu shora sunun hun, koee hase koee ruve nyaarun;
Sukhiyo soorve ne dukhiyo ruve, akala gatie vichaarun.||4||
Khela khalakano bandha naatakano, kutunba kabeelo hun dhaarun;
Jyaan sudhee svaartha tyaan sudhee sarve, anta samaye sahu nyaarun.||5||
Maayaa jaala tanee joee jaanee, jagata laage chhe khaarun;
“udayaratna’ ema jaanee prabhu taarun, sharana grahyun chhe men saarun. ||6||`,
    },
  },
  {
    id: "na-re-prabhu-nahi-manu",
    type: "bhajan",
    title: {
      gu: "ના રે પ્રભુ નહિ માનું, નહિ માનું અવરની આણ",
      hi: "ना रे प्रभु नहि मानुं, नहि मानुं अवरनी आण",
      sa: "",
      en: "Na Re Prabhu Nahi Manu",
    },
    text: {
      gu: `ના રે પ્રભુ નહિ માનું, નહિ માનું અવરની આણ,
માહરે તાહરું વચન પ્રમાણ…
હરિહરાદિક દેવ અનેરા, તે દીઠા જગ માંય રે;
ભામિની ભ્રમર ભૂકૂટિએ ભૂલ્યા, તે મુજને ન સુહાય. ના રે૦ ।। ૧ ।।
કેઈક રાગીને કેઈક દ્વેષી, કેઈક લોભી દેવ રે;
કેઈક મદ માયાના ભરિયા, કેમ કરીએ તસ સેવ?||૨||
મુદ્રા પણ તેહમાં નવિ દીસે, તુજ માંહેલી તિલમાત્ર રે;
જે દેખી દિલડું નવિ રીઝે, શી કરવી તસ વાત રે. ||૩||
તું ગતિ, તું મતિ, તું મુજ પ્રીતમ, જીવ જીવન આધાર;
રાત-દિવસ સ્વપનાંતર માંહી, તુંહી મારે નિરધાર. ||૪||
અવગુણ સહુ ઉવેખીને પ્રભુ, સેવક કરીને નિહાલ રે;
જગબંધવ એ વિનંતી મારી, મારાં જન્મમરણ દુઃખ ટાળ. નારે૦।।૫।।
ચોવીસમાં પ્રભુ ત્રિભુવન સ્વામી, સિદ્ધારથના નંદ રે;
ત્રિશલાજીના નાનડિયા પ્રભુ, તુમ દીઠે અતિહી આનંદ.||૬||
સુમતિવિજય કવિરાયનો રે, “રામવિજય’ કરજોડ રે;
ઉપકારી અરિહંતજી માહરા, ભવભવનાં બંધન છોડ. ના રે૦।।૭।॥`,
      hi: `ना रे प्रभु नहि मानुं, नहि मानुं अवरनी आण,
माहरे ताहरुं वचन प्रमाण…
हरिहरादिक देव अनेरा, ते दीठा जग मांय रे;
भामिनी भ्रमर भूकूटिए भूल्या, ते मुजने न सुहाय. ना रे० ।। १ ।।
केईक रागीने केईक द्वेषी, केईक लोभी देव रे;
केईक मद मायाना भरिया, केम करीए तस सेव?||२||
मुद्रा पण तेहमां नवि दीसे, तुज मांहेली तिलमात्र रे;
जे देखी दिलडुं नवि रीझे, शी करवी तस वात रे. ||३||
तुं गति, तुं मति, तुं मुज प्रीतम, जीव जीवन आधार;
रात-दिवस स्वपनांतर मांही, तुंही मारे निरधार. ||४||
अवगुण सहु उवेखीने प्रभु, सेवक करीने निहाल रे;
जगबंधव ए विनंती मारी, मारां जन्ममरण दुःख टाळ. नारे०।।५।।
चोवीसमां प्रभु त्रिभुवन स्वामी, सिद्धारथना नंद रे;
त्रिशलाजीना नानडिया प्रभु, तुम दीठे अतिही आनंद.||६||
सुमतिविजय कविरायनो रे, “रामविजय’ करजोड रे;
उपकारी अरिहंतजी माहरा, भवभवनां बंधन छोड. ना रे०।।७।॥`,
      sa: "",
      en: `Naa re prabhu nahi maanun, nahi maanun avaranee aana,
Maahare taaharun vachana pramaana…
Hariharaadika deva aneraa, te deethaa jaga maanya re;
Bhaaminee bhramara bhookootie bhoolyaa, te mujane na suhaaya. naa re0 || 1 ||
Keeeka raageene keeeka dveshee, keeeka lobhee deva re;
Keeeka mada maayaanaa bhariyaa, kema kareee tasa seva?||2||
Mudraa pana tehamaan navi deese, tuja maanhelee tilamaatra re;
Je dekhee diladun navi reejhe, shee karavee tasa vaata re. ||3||
Tun gati, tun mati, tun muja preetama, jeeva jeevana aadhaara;
Raata-divasa svapanaantara maanhee, tunhee maare niradhaara. ||4||
Avaguna sahu uvekheene prabhu, sevaka kareene nihaala re;
Jagabandhava e vinantee maaree, maaraan janmamarana dukha taala. naare0||5||
Choveesamaan prabhu tribhuvana svaamee, siddhaarathanaa nanda re;
Trishalaajeenaa naanadiyaa prabhu, tuma deethe atihee aananda.||6||
Sumativijaya kaviraayano re, “raamavijaya’ karajoda re;
Upakaaree arihantajee maaharaa, bhavabhavanaan bandhana chhoda. naa re0||7|||`,
    },
  },
  {
    id: "naabhiraya-vanshe-varu",
    type: "bhajan",
    title: {
      gu: "નાભિરાયા વંશે વારું ઉદયો દિણંદ",
      hi: "नाभिराया वंशे वारुं उदयो दिणंद",
      sa: "",
      en: "Naabhiraya Vanshe Varu",
    },
    text: {
      gu: `નાભિરાયા વંશે વારું ઉદયો દિણંદ,
દેવનો મેં દેવ દીઠો આદિ જિણંદ;
આદિ જિણંદ મરુદેવાનો
નંદ દેવનો મેં દેવ દીઠો આદિ જિણંદ.||૧||
મીઠું લાગે મહારાજ રુપ તારું આજ,
મુજરો લીયોને મારા સારોને કાજ;
દિવસ ઘણે દીઠો નાથ! મુને નેહ,
ઉપન્યો આનંદ તેનો કોણ લહે છેહ.||૨||
તા તા થૈ થૈ તાલ બાજે ધીન ધીન ધ્રોમ્,
મૃદંગ દેવદુંદુભિ બાજે ધ્રોમ્ કોમ્;
ૐ શંખ બાજે બાજે એક સાદ,
ધપમપ ધપમપ ધમકે બાદલ રસાદ.||૩||
કીટ ધીન કીટ થૈ થૈ થાય,
પધની ધપ મપ થઈ અતિ વાય;
ઘમ ઘમ ઘૂઘરા ઘમકે રે પાય,
ભણ ભણ ભણકારા ભેરીના થાય.||૪||
નાચી કૂદી પાય વંદી ભવિજન ભાવે,
ભક્તિથી ભગવંતને શીશ નમાવે;
મુક્તિની મોજ માંગું બે કરજોડ,
‘ઉદયરત્ન’ કહે પ્રભુ ભવદુઃખ છોડ. ॥५॥`,
      hi: `नाभिराया वंशे वारुं उदयो दिणंद,
देवनो में देव दीठो आदि जिणंद;
आदि जिणंद मरुदेवानो
नंद देवनो में देव दीठो आदि जिणंद.||१||
मीठुं लागे महाराज रुप तारुं आज,
मुजरो लीयोने मारा सारोने काज;
दिवस घणे दीठो नाथ! मुने नेह,
उपन्यो आनंद तेनो कोण लहे छेह.||२||
ता ता थै थै ताल बाजे धीन धीन ध्रोम्,
मृदंग देवदुंदुभि बाजे ध्रोम् कोम्;
ॐ शंख बाजे बाजे एक साद,
धपमप धपमप धमके बादल रसाद.||३||
कीट धीन कीट थै थै थाय,
पधनी धप मप थई अति वाय;
घम घम घूघरा घमके रे पाय,
भण भण भणकारा भेरीना थाय.||४||
नाची कूदी पाय वंदी भविजन भावे,
भक्तिथी भगवंतने शीश नमावे;
मुक्तिनी मोज मांगुं बे करजोड,
‘उदयरत्न’ कहे प्रभु भवदुःख छोड. ॥५॥`,
      sa: "",
      en: `Naabhiraayaa vanshe vaarun udayo dinanda,
Devano men deva deetho aadi jinanda;
Aadi jinanda marudevaano
Nanda devano men deva deetho aadi jinanda.||1||
Meethun laage mahaaraaja rupa taarun aaja,
Mujaro leeyone maaraa saarone kaaja;
Divasa ghane deetho naatha! mune neha,
Upanyo aananda teno kona lahe chheha.||2||
Taa taa thai thai taala baaje dheena dheena dhrom,
Mrudanga devadundubhi baaje dhrom kom;
Om shankha baaje baaje eka saada,
Dhapamapa dhapamapa dhamake baadala rasaada.||3||
Keeta dheena keeta thai thai thaaya,
Padhanee dhapa mapa thaee ati vaaya;
Ghama ghama ghoogharaa ghamake re paaya,
Bhana bhana bhanakaaraa bhereenaa thaaya.||4||
Naachee koodee paaya vandee bhavijana bhaave,
Bhaktithee bhagavantane sheesha namaave;
Muktinee moja maangun be karajoda,
‘udayaratna’ kahe prabhu bhavadukha chhoda. ||5||`,
    },
  },
  {
    id: "nemi-jineshwar-nij-karaj-karyo",
    type: "bhajan",
    title: {
      gu: "નેમિ જિનેશ્વર નિજ કારજ કર્યો, સર્વ વિભાવોજી",
      hi: "नेमि जिनेश्वर निज कारज कर्यो, सर्व विभावोजी",
      sa: "",
      en: "Nemi Jineshwar Nij Karaj Karyo",
    },
    text: {
      gu: `નેમિ જિનેશ્વર નિજ કારજ કર્યો, સર્વ વિભાવોજી;
આતમ શક્તિ સકલ પ્રગટ કરી, આસ્વાદ્યો નિજ ભાવોજી. ।।૧।|
રાજુલ નારી રે સારી મતિ ધરી, અવલંબ્યા અરિહંતોજી;
ઉત્તમ સંગેરે ઉત્તમતા વધે, સધે આનંદ અનંતોજી. ॥२||
ધર્મ અધર્મ આકાશ અચેતના, તે વિજાતી અગ્રાહ્યોજી;
પુદ્રલ ગ્રહવે રે કર્મ કલંકતા, વાધે બાધક બાહ્યોજી.||૩||
રાગી સંગે રે રાગ દશા વધે, થાએ તિણે સંસારોજી;
નિરાગીથી રે રાગનું જોડવું, લહીએ ભવનો પારોજી.||૪||
અપ્રશસ્તતા રે ટાળી પ્રશસ્તતા, કરતાં આશ્રવ નાસેજી;
સંવર વાધે રે સાધે નિર્જરા, આતમ ભાવ પ્રકાશેજી. ॥५॥
નેમિ પ્રભુ ધ્યાને એકત્વતા, નિજ તત્વે ઈકતાનોજી;
શુકલ ધ્યાને રે સાધી સુસિદ્ધતા, લહિએ મુક્તિ નિદાનોજી.।।૬।।
અગમ અરુપી રે અલખ અગોચરુ, પરમાતમ પરમીશોજી;
“દેવચંદ્ર’ જિનવરની સેવના, કરતાં વાધે જગીશોજી. ॥७॥`,
      hi: `नेमि जिनेश्वर निज कारज कर्यो, सर्व विभावोजी;
आतम शक्ति सकल प्रगट करी, आस्वाद्यो निज भावोजी. ।।१।|
राजुल नारी रे सारी मति धरी, अवलंब्या अरिहंतोजी;
उत्तम संगेरे उत्तमता वधे, सधे आनंद अनंतोजी. ॥२||
धर्म अधर्म आकाश अचेतना, ते विजाती अग्राह्योजी;
पुद्रल ग्रहवे रे कर्म कलंकता, वाधे बाधक बाह्योजी.||३||
रागी संगे रे राग दशा वधे, थाए तिणे संसारोजी;
निरागीथी रे रागनुं जोडवुं, लहीए भवनो पारोजी.||४||
अप्रशस्तता रे टाळी प्रशस्तता, करतां आश्रव नासेजी;
संवर वाधे रे साधे निर्जरा, आतम भाव प्रकाशेजी. ॥५॥
नेमि प्रभु ध्याने एकत्वता, निज तत्वे ईकतानोजी;
शुकल ध्याने रे साधी सुसिद्धता, लहिए मुक्ति निदानोजी.।।६।।
अगम अरुपी रे अलख अगोचरु, परमातम परमीशोजी;
“देवचंद्र’ जिनवरनी सेवना, करतां वाधे जगीशोजी. ॥७॥`,
      sa: "",
      en: `Nemi jineshvara nija kaaraja karyo, sarva vibhaavojee;
Aatama shakti sakala pragata karee, aasvaadyo nija bhaavojee. ||1||
Raajula naaree re saaree mati dharee, avalanbyaa arihantojee;
Uttama sangere uttamataa vadhe, sadhe aananda anantojee. ||2||
Dharma adharma aakaasha achetanaa, te vijaatee agraahyojee;
Pudrala grahave re karma kalankataa, vaadhe baadhaka baahyojee.||3||
Raagee sange re raaga dashaa vadhe, thaae tine sansaarojee;
Niraageethee re raaganun jodavun, laheee bhavano paarojee.||4||
Aprashastataa re taalee prashastataa, karataan aashrava naasejee;
Sanvara vaadhe re saadhe nirjaraa, aatama bhaava prakaashejee. ||5||
Nemi prabhu dhyaane ekatvataa, nija tatve eekataanojee;
Shukala dhyaane re saadhee susiddhataa, lahie mukti nidaanojee.||6||
Agama arupee re alakha agocharu, paramaatama parameeshojee;
“devachandra’ jinavaranee sevanaa, karataan vaadhe jageeshojee. ||7||`,
    },
  },
  {
    id: "nemi-niranjan-nath-hamaro",
    type: "bhajan",
    title: {
      gu: "નેમિ નિરંજન નાથ હમારો, અંજન વર્ણ શરીર",
      hi: "नेमि निरंजन नाथ हमारो, अंजन वर्ण शरीर",
      sa: "",
      en: "Nemi Niranjan Nath Hamaro",
    },
    text: {
      gu: `નેમિ નિરંજન નાથ હમારો, અંજન વર્ણ શરીર,
પણ અજ્ઞાન તિમિરને ટાળે, જીત્યો મન્મથ વીર;
પ્રમ! પ્રેમ ધરીને પાય, પામો પરમાનંદા,
યદુકુલ ચંદારાય, માતા શિવાદેવી નંદા.||૧||
રાજીમતી શું પૂરવ ભવની, પ્રીત ભલી પરે પાળી;
પાણિગ્રહણ સંકેતે આવી, તોરણથી રથ વાળી.||૨||
અબલા સાથે નેહ ન જોડયો, તે પણ ધન્ય કહાણી;
એક રસે બેઉ પ્રીત થઈ તો, કીર્તિ ક્રોડ ગવાણી.||૩||
ચંદન પરિમલ જિમ ખીર ઘૃત, એક રુપ નવિ અળગા;
ઈમ જે પ્રીત નિવારે અહોનિશ, તે ધન ગુણશું વળગા. પ્રણમો૦।।૪ ।।
ઈમ એકાંગી જે નર કરશે, તે ભવસાગર તરશે;
“જ્ઞનવિમલ’ લીલાતે લહેશે, શિવસુંદરી તસવરસે. ||૫||`,
      hi: `नेमि निरंजन नाथ हमारो, अंजन वर्ण शरीर,
पण अज्ञान तिमिरने टाळे, जीत्यो मन्मथ वीर;
प्रम! प्रेम धरीने पाय, पामो परमानंदा,
यदुकुल चंदाराय, माता शिवादेवी नंदा.||१||
राजीमती शुं पूरव भवनी, प्रीत भली परे पाळी;
पाणिग्रहण संकेते आवी, तोरणथी रथ वाळी.||२||
अबला साथे नेह न जोडयो, ते पण धन्य कहाणी;
एक रसे बेउ प्रीत थई तो, कीर्ति क्रोड गवाणी.||३||
चंदन परिमल जिम खीर घृत, एक रुप नवि अळगा;
ईम जे प्रीत निवारे अहोनिश, ते धन गुणशुं वळगा. प्रणमो०।।४ ।।
ईम एकांगी जे नर करशे, ते भवसागर तरशे;
“ज्ञनविमल’ लीलाते लहेशे, शिवसुंदरी तसवरसे. ||५||`,
      sa: "",
      en: `Nemi niranjana naatha hamaaro, anjana varna shareera,
Pana ajnyaana timirane taale, jeetyo manmatha veera;
Prama! prema dhareene paaya, paamo paramaanandaa,
Yadukula chandaaraaya, maataa shivaadevee nandaa.||1||
Raajeematee shun poorava bhavanee, preeta bhalee pare paalee;
Paanigrahana sankete aavee, toranathee ratha vaalee.||2||
Abalaa saathe neha na jodayo, te pana dhanya kahaanee;
Eka rase beu preeta thaee to, keerti kroda gavaanee.||3||
Chandana parimala jima kheera ghruta, eka rupa navi alagaa;
Eema je preeta nivaare ahonisha, te dhana gunashun valagaa. pranamo0||4 ||
Eema ekaangee je nara karashe, te bhavasaagara tarashe;
“jnyanavimala’ leelaate laheshe, shivasundaree tasavarase. ||5||`,
    },
  },
  {
    id: "nemji-re-torane-aavi",
    type: "bhajan",
    title: {
      gu: "નેમજી રે….. તોરણે આવી આમ પાછા ન જવાય",
      hi: "नेमजी रे….. तोरणे आवी आम पाछा न जवाय",
      sa: "",
      en: "Nemji Re Torane Aavi",
    },
    text: {
      gu: `નેમજી રે….. તોરણે આવી આમ પાછા ન જવાય;
કુંવારી કન્યા રાણી રાજુલ કહેવાય (૨)
પ્રભુ ગુણ ગાય, સામે જ જવાય…||૧ ||
આઠ ભવોની પ્રીતલડી, નવમે ભવે ના છોડાય (૨);
બાળબ્રહ્મચારી રાજુલ બાળા, વીનવે નેમજીને પાય (૨);
નેમજી રે… પાછા વળીને આજ ગ્રહો મારો હાથ.॥२॥
પશુઓનો પોકાર સુણીને, રથને પાછો વાળ્યો (૨);
ધ્રુસકે રુવે રાજુલ રાણી, ધરતી પટે ઢળાણી (૨);
નેમજી રે… પાછા વળીને તિહાં દીધું વરસીદાન.||૩||
પંચાવન મેં દિન પ્રભુજી, પામ્યા કેવળજ્ઞાન (૨);
વધામણી રાજુલબાળા, નેમજીને શરણે જાય (૨);
નેમજી રે… દીક્ષા આપી કર્મ ખપાવી ભવોભવ તારી કહેવાય. ।।૪।।
કેવળ કલ્યાણક જે કોઈ ગાશે, લેશે મુક્તિના રાજ (૨);
નેમજી પહેલાં, પહોંચ્યા રાજુલ, મુક્તિના માર્ગે જાય (૨);
નેમજી રે હીરવિજય ગુરુ હીરલો ને “વીરવિજય’ ગુણગાય. ।।૫।।`,
      hi: `नेमजी रे….. तोरणे आवी आम पाछा न जवाय;
कुंवारी कन्या राणी राजुल कहेवाय (२)
प्रभु गुण गाय, सामे ज जवाय…||१ ||
आठ भवोनी प्रीतलडी, नवमे भवे ना छोडाय (२);
बाळब्रह्मचारी राजुल बाळा, वीनवे नेमजीने पाय (२);
नेमजी रे… पाछा वळीने आज ग्रहो मारो हाथ.॥२॥
पशुओनो पोकार सुणीने, रथने पाछो वाळ्यो (२);
ध्रुसके रुवे राजुल राणी, धरती पटे ढळाणी (२);
नेमजी रे… पाछा वळीने तिहां दीधुं वरसीदान.||३||
पंचावन में दिन प्रभुजी, पाम्या केवळज्ञान (२);
वधामणी राजुलबाळा, नेमजीने शरणे जाय (२);
नेमजी रे… दीक्षा आपी कर्म खपावी भवोभव तारी कहेवाय. ।।४।।
केवळ कल्याणक जे कोई गाशे, लेशे मुक्तिना राज (२);
नेमजी पहेलां, पहोंच्या राजुल, मुक्तिना मार्गे जाय (२);
नेमजी रे हीरविजय गुरु हीरलो ने “वीरविजय’ गुणगाय. ।।५।।`,
      sa: "",
      en: `Nemajee re….. torane aavee aama paachhaa na javaaya;
Kunvaaree kanyaa raanee raajula kahevaaya (2)
Prabhu guna gaaya, saame ja javaaya…||1 ||
Aatha bhavonee preetaladee, navame bhave naa chhodaaya (2);
Baalabrahmachaaree raajula baalaa, veenave nemajeene paaya (2);
Nemajee re… paachhaa valeene aaja graho maaro haatha.||2||
Pashuono pokaara suneene, rathane paachho vaalyo (2);
Dhrusake ruve raajula raanee, dharatee pate dhalaanee (2);
Nemajee re… paachhaa valeene tihaan deedhun varaseedaana.||3||
Panchaavana men dina prabhujee, paamyaa kevalajnyaana (2);
Vadhaamanee raajulabaalaa, nemajeene sharane jaaya (2);
Nemajee re… deekshaa aapee karma khapaavee bhavobhava taaree kahevaaya. ||4||
Kevala kalyaanaka je koee gaashe, leshe muktinaa raaja (2);
Nemajee pahelaan, pahonchyaa raajula, muktinaa maarge jaaya (2);
Nemajee re heeravijaya guru heeralo ne “veeravijaya’ gunagaaya. ||5||`,
    },
  },
  {
    id: "niranjan-nath-mohe-kaise-milenge",
    type: "bhajan",
    title: {
      gu: "નિરંજન નાથ મોહે કૈસે મિલેંગે, (૨)",
      hi: "निरंजन नाथ मोहे कैसे मिलेंगे, (२)",
      sa: "",
      en: "Niranjan Nath Mohe Kaise Milenge",
    },
    text: {
      gu: `નિરંજન નાથ મોહે કૈસે મિલેંગે, (૨)
દૂર દેખું મેં દરિયા ડુંગર, ઉપર બાદલ નીચે જમિયું તલે રે. ॥੧॥
ધરતી મેં ઢુંઢું તિહાં ન પિછાનું, અગ્નિ સહું તો મેરી દેહી જલેરે. ॥૨॥
આનંદઘન કહે જશ સુનો બાતા, વો હી મિલેતો મેરો ફેરો ટલેરે. ॥૩॥`,
      hi: `निरंजन नाथ मोहे कैसे मिलेंगे, (२)
दूर देखुं में दरिया डुंगर, उपर बादल नीचे जमियुं तले रे. ॥੧॥
धरती में ढुंढुं तिहां न पिछानुं, अग्नि सहुं तो मेरी देही जलेरे. ॥२॥
आनंदघन कहे जश सुनो बाता, वो ही मिलेतो मेरो फेरो टलेरे. ॥३॥`,
      sa: "",
      en: `Niranjana naatha mohe kaise milenge, (2)
Doora dekhun men dariyaa dungara, upara baadala neeche jamiyun tale re. ||1||
Dharatee men dhundhun tihaan na pichhaanun, agni sahun to meree dehee jalere. ||2||
Aanandaghana kahe jasha suno baataa, vo hee mileto mero phero talere. ||3||`,
    },
  },
  {
    id: "nirkhi-nirkhi-tuj-bimane",
    type: "bhajan",
    title: {
      gu: "નિરખી નિરખી તુજ બિંબને, હરખિત હુયેં મુજ મન",
      hi: "निरखी निरखी तुज बिंबने, हरखित हुयें मुज मन",
      sa: "",
      en: "Nirkhi Nirkhi Tuj Bimane",
    },
    text: {
      gu: `નિરખી નિરખી તુજ બિંબને, હરખિત હુયેં મુજ મન;
નિર્વિકારતા રે, મુખડું સદા સુપ્રસન્ન,
શ્રીસુપાસ સોહામણા..॥१॥
ભાવ અવસ્થા સાંભરે રે, પ્રતિહારજની શોભ;
કોડી ગમે દેવા સેવા રે, કરતાં મૂકી લોભ.||૨||
લોકાલોકના સવિ ભાવો રે, પ્રતિભાસે પ્રત્યક્ષ;
તોહે ન રાચે નવિ રુપે રે, નવિ અવિરતિનો પક્ષ..॥3॥
હાસ્ય રતિ અરતિ નહિં રે, નહિં ભય શોક દુર્ગછ;
નહિં કંદર્પ કદર્થના રે, નહિં અંતરાયનો સંચ.||૪||
મોહ મિથ્યાત્વ નિદ્રા ગઈ રે, નાઠા દોષ અઢાર;
ચોત્રીસ અતિશય રાજતો રે, મૂલાતિશય ચાર.||૫||
પાંત્રીસ વાણી ગુણે કરી રે, દેતા ભવિ ઉપદેશ;
ઈમ તુજ બિંબે તાહરા રે, ભેદનો નહીં લવલેશ.||૬||
રુપથી પ્રભુ ગુણ સાંભરે રે, ધ્યાન રુપસ્થ વિચાર;
“માનવિજય’ વાચક વદે રે, જિન પ્રતિમા જયકાર.||૭||`,
      hi: `निरखी निरखी तुज बिंबने, हरखित हुयें मुज मन;
निर्विकारता रे, मुखडुं सदा सुप्रसन्न,
श्रीसुपास सोहामणा..॥१॥
भाव अवस्था सांभरे रे, प्रतिहारजनी शोभ;
कोडी गमे देवा सेवा रे, करतां मूकी लोभ.||२||
लोकालोकना सवि भावो रे, प्रतिभासे प्रत्यक्ष;
तोहे न राचे नवि रुपे रे, नवि अविरतिनो पक्ष..॥3॥
हास्य रति अरति नहिं रे, नहिं भय शोक दुर्गछ;
नहिं कंदर्प कदर्थना रे, नहिं अंतरायनो संच.||४||
मोह मिथ्यात्व निद्रा गई रे, नाठा दोष अढार;
चोत्रीस अतिशय राजतो रे, मूलातिशय चार.||५||
पांत्रीस वाणी गुणे करी रे, देता भवि उपदेश;
ईम तुज बिंबे ताहरा रे, भेदनो नहीं लवलेश.||६||
रुपथी प्रभु गुण सांभरे रे, ध्यान रुपस्थ विचार;
“मानविजय’ वाचक वदे रे, जिन प्रतिमा जयकार.||७||`,
      sa: "",
      en: `Nirakhee nirakhee tuja binbane, harakhita huyen muja mana;
Nirvikaarataa re, mukhadun sadaa suprasanna,
Shreesupaasa sohaamanaa..||1||
Bhaava avasthaa saanbhare re, pratihaarajanee shobha;
Kodee game devaa sevaa re, karataan mookee lobha.||2||
Lokaalokanaa savi bhaavo re, pratibhaase pratyaksha;
Tohe na raache navi rupe re, navi aviratino paksha..||3||
Haasya rati arati nahin re, nahin bhaya shoka durgachha;
Nahin kandarpa kadarthanaa re, nahin antaraayano sancha.||4||
Moha mithyaatva nidraa gaee re, naathaa dosha adhaara;
Chotreesa atishaya raajato re, moolaatishaya chaara.||5||
Paantreesa vaanee gune karee re, detaa bhavi upadesha;
Eema tuja binbe taaharaa re, bhedano naheen lavalesha.||6||
Rupathee prabhu guna saanbhare re, dhyaana rupastha vichaara;
“maanavijaya’ vaachaka vade re, jina pratimaa jayakaara.||7||`,
    },
  },
  {
    id: "nirkhyo-nemi-jinandane",
    type: "bhajan",
    title: {
      gu: "નિરખ્યો નેમિ જિણંદને, અરિ૦, રાજીમતી કર્યો ત્યાગ, ભગ૦",
      hi: "निरख्यो नेमि जिणंदने, अरि०, राजीमती कर्यो त्याग, भग०",
      sa: "",
      en: "Nirkhyo Nemi Jinandane",
    },
    text: {
      gu: `નિરખ્યો નેમિ જિણંદને, અરિ૦, રાજીમતી કર્યો ત્યાગ, ભગ૦,
બ્રહ્મચારી સંયમ ગ્રહ્યો, અરિ૦, અનુક્રમે થયા વીતરાગ. ભગ૦ ।।૧।।
ચામર ચક્ર સિંહાસન, અરિ૦, પાદ પીઠ સંયુત, ભગ૦,
છત્ર ચાલે આકાશમાં, અરિ૦, દેવદુંદુભિ વર યુત્ત. ભગ૦ ॥२॥
સહસ જોયણ ધ્વજ સોહતો, અરિ૦, પ્રભુ આગળ ચાલંત, ભગ૦,
કનક કમલ નવ ઉપરે, અરિ૦, વિચરે પાય ઠવંત. ભગ૦ ॥३॥
ચાર મુખે દિયે દેશના, અરિ૦, ત્રણ ગઢ ઝાકઝમાળ, ભગ૦,
કેશ રોમ શ્મશ્રુ નખા, અરિ૦, વાધે નહિ કોઈ કાલ. ભગ૦ ।।૪ ।।
કાંટા પણ ઊંધા હોયે, અરિ૦, પંચ વિષય અનુકૂલ, ભગ૦,
ષટ્ ઋતુ સમકાળે ફળે, અરિ૦, વાયુ નહિ પ્રતિકૂળ. ભગ૦ ।।૫।।
પાણી સુગંધ સુર કુસુમની, અરિ૦, વૃષ્ટિ હોય સુરસાલ, ભગ૦,
પંખી દિયે સુપ્રદક્ષિણા, અરિ૦, વૃક્ષ નમે અસરાલ. ભગ૦ ॥६॥
જિન ઉત્તમ પદ ‘પદ્મ’ની, અરિ૦, સેવા કરે સુરકોડી, ભગ૦,
ચાર નિકાયના જઘન્યથી, અરિ૦, ચૈત્યવૃક્ષ તેમ જોડી. ભગ૦ ।।૭।।`,
      hi: `निरख्यो नेमि जिणंदने, अरि०, राजीमती कर्यो त्याग, भग०,
ब्रह्मचारी संयम ग्रह्यो, अरि०, अनुक्रमे थया वीतराग. भग० ।।१।।
चामर चक्र सिंहासन, अरि०, पाद पीठ संयुत, भग०,
छत्र चाले आकाशमां, अरि०, देवदुंदुभि वर युत्त. भग० ॥२॥
सहस जोयण ध्वज सोहतो, अरि०, प्रभु आगळ चालंत, भग०,
कनक कमल नव उपरे, अरि०, विचरे पाय ठवंत. भग० ॥३॥
चार मुखे दिये देशना, अरि०, त्रण गढ झाकझमाळ, भग०,
केश रोम श्मश्रु नखा, अरि०, वाधे नहि कोई काल. भग० ।।४ ।।
कांटा पण ऊंधा होये, अरि०, पंच विषय अनुकूल, भग०,
षट् ऋतु समकाळे फळे, अरि०, वायु नहि प्रतिकूळ. भग० ।।५।।
पाणी सुगंध सुर कुसुमनी, अरि०, वृष्टि होय सुरसाल, भग०,
पंखी दिये सुप्रदक्षिणा, अरि०, वृक्ष नमे असराल. भग० ॥६॥
जिन उत्तम पद ‘पद्म’नी, अरि०, सेवा करे सुरकोडी, भग०,
चार निकायना जघन्यथी, अरि०, चैत्यवृक्ष तेम जोडी. भग० ।।७।।`,
      sa: "",
      en: `Nirakhyo nemi jinandane, ari0, raajeematee karyo tyaaga, bhaga0,
Brahmachaaree sanyama grahyo, ari0, anukrame thayaa veetaraaga. bhaga0 ||1||
Chaamara chakra sinhaasana, ari0, paada peetha sanyuta, bhaga0,
Chhatra chaale aakaashamaan, ari0, devadundubhi vara yutta. bhaga0 ||2||
Sahasa joyana dhvaja sohato, ari0, prabhu aagala chaalanta, bhaga0,
Kanaka kamala nava upare, ari0, vichare paaya thavanta. bhaga0 ||3||
Chaara mukhe diye deshanaa, ari0, trana gadha jhaakajhamaala, bhaga0,
Kesha roma shmashru nakhaa, ari0, vaadhe nahi koee kaala. bhaga0 ||4 ||
Kaantaa pana oondhaa hoye, ari0, pancha vishaya anukoola, bhaga0,
Shat rutu samakaale phale, ari0, vaayu nahi pratikoola. bhaga0 ||5||
Paanee sugandha sura kusumanee, ari0, vrushti hoya surasaala, bhaga0,
Pankhee diye supradakshinaa, ari0, vruksha name asaraala. bhaga0 ||6||
Jina uttama pada ‘padma’nee, ari0, sevaa kare surakodee, bhaga0,
Chaara nikaayanaa jaghanyathee, ari0, chaityavruksha tema jodee. bhaga0 ||7||`,
    },
  },
  {
    id: "nitya-samru-sahib-sayana",
    type: "bhajan",
    title: {
      gu: "નિત્ય સમરું સાહિબ સયણા, નામ સુણતાં શીતલ શ્રવણા",
      hi: "नित्य समरुं साहिब सयणा, नाम सुणतां शीतल श्रवणा",
      sa: "",
      en: "Nitya Samru Sahib Sayana",
    },
    text: {
      gu: `નિત્ય સમરું સાહિબ સયણા, નામ સુણતાં શીતલ શ્રવણા,
જિન દરિસણે વિકસે નયણા, ગુણ ગાતાં ઉલ્લસે વયણા રે;
શંખેશ્વર સાહિબ સાચો….. બીજાનો આશરો કાચો રે.||૧||
દ્રવ્યથી દેવ દાનવ પૂજે, ગુણ શાંત રુચિપણું લીજે;
અરિહા પદ પજ્જવ છાજે, મુદ્રા પદ્માસન રાજે રે.||૨||
સંવેગે તજી ઘરવાસો, પ્રભુ પાર્શ્વના ગણધર થાશો;
તવ મુક્તિપુરીમાં જાશો, ગુણીલોકમાં વયણે ગવાથાશ રે.||૩||
એમ દામોદર જિનવાણી, અષાઢી શ્રાવકે જાણી;
જિન વંદી નિજ ઘર આવે, પ્રભુ પાર્શ્વની પ્રતિમા ભરાવે રે.||૪||
ત્રણ કાલ તે ધૂપ ઉખેવે, ઉપકારી શ્રી જિન સેવે;
પછી તેહ વૈમાનિક થાવે, તે પ્રતિમા પણ તિહાં લાવે રે.||૫||
ઘણાં કાલ પૂજી બહુમાને, વળી સૂરજ ચંદ્ર વિમાને;
નાગલોકના કષ્ટ નિવાર્યા, જ્યારે પાર્શ્વ પ્રભુજી પધાર્યા રે.||૬||
યદુસૈન્ય રહ્યો રણ ઘેરી, જીત્યા નવિ જાયે વેરી;
જરાસંઘે જરા તવ મેલી, હરિ બલ વિના સઘળે ફેલી રે.||૭||
નેમીશ્વર ચોકી વિશાલી, અટ્ઠમ કરે વનમાલી;
તૂઠી પદ્માવતી બાલી, આપે પ્રતિમા ઝાકઝમાલી રે.||૮||
પ્રભુ પાર્શ્વની પ્રતિમા પૂજી, બળવંત જરા તવ ધ્રુજી;
છંટકાવ ન્હવણ જલ જોતી, જાદવની જરા જાય રોતી રે.||૯||
શંખ પૂરી સહુને જગાવે, શંખેશ્વર ગામ વસાવે;
મંદિરમાં પ્રભુ પધરાવે, શંખેશ્વર નામ ધરાવે રે.||૧૦||
રહે જે જિનરાજ હજુરે, સેવક મનવાંછિત પૂરે;
એ પ્રભુજીને ભેટણ કાજે, શેઠ મોતીભાઈને રાજે રે.||૧૧||
નાનો માણેક કેરા નંદ, સંઘવી પ્રેમચંદ વીરચંદ;
રાજનગરથી સંઘ ચલાવે, ગામે ગામના સંઘ મિલાવે રે.||૧૨||
અઢાર અટ્ટોત્તેર વરસે, ફાગણ વદિ તેરસ દિવસે;
જિન વંદી આનંદ પાવે, વચન રસ ગાવે રે. ॥१३॥`,
      hi: `नित्य समरुं साहिब सयणा, नाम सुणतां शीतल श्रवणा,
जिन दरिसणे विकसे नयणा, गुण गातां उल्लसे वयणा रे;
शंखेश्वर साहिब साचो….. बीजानो आशरो काचो रे.||१||
द्रव्यथी देव दानव पूजे, गुण शांत रुचिपणुं लीजे;
अरिहा पद पज्जव छाजे, मुद्रा पद्मासन राजे रे.||२||
संवेगे तजी घरवासो, प्रभु पार्श्वना गणधर थाशो;
तव मुक्तिपुरीमां जाशो, गुणीलोकमां वयणे गवाथाश रे.||३||
एम दामोदर जिनवाणी, अषाढी श्रावके जाणी;
जिन वंदी निज घर आवे, प्रभु पार्श्वनी प्रतिमा भरावे रे.||४||
त्रण काल ते धूप उखेवे, उपकारी श्री जिन सेवे;
पछी तेह वैमानिक थावे, ते प्रतिमा पण तिहां लावे रे.||५||
घणां काल पूजी बहुमाने, वळी सूरज चंद्र विमाने;
नागलोकना कष्ट निवार्या, ज्यारे पार्श्व प्रभुजी पधार्या रे.||६||
यदुसैन्य रह्यो रण घेरी, जीत्या नवि जाये वेरी;
जरासंघे जरा तव मेली, हरि बल विना सघळे फेली रे.||७||
नेमीश्वर चोकी विशाली, अट्ठम करे वनमाली;
तूठी पद्मावती बाली, आपे प्रतिमा झाकझमाली रे.||८||
प्रभु पार्श्वनी प्रतिमा पूजी, बळवंत जरा तव ध्रुजी;
छंटकाव न्हवण जल जोती, जादवनी जरा जाय रोती रे.||९||
शंख पूरी सहुने जगावे, शंखेश्वर गाम वसावे;
मंदिरमां प्रभु पधरावे, शंखेश्वर नाम धरावे रे.||१०||
रहे जे जिनराज हजुरे, सेवक मनवांछित पूरे;
ए प्रभुजीने भेटण काजे, शेठ मोतीभाईने राजे रे.||११||
नानो माणेक केरा नंद, संघवी प्रेमचंद वीरचंद;
राजनगरथी संघ चलावे, गामे गामना संघ मिलावे रे.||१२||
अढार अट्टोत्तेर वरसे, फागण वदि तेरस दिवसे;
जिन वंदी आनंद पावे, वचन रस गावे रे. ॥१३॥`,
      sa: "",
      en: `Nitya samarun saahiba sayanaa, naama sunataan sheetala shravanaa,
Jina darisane vikase nayanaa, guna gaataan ullase vayanaa re;
Shankheshvara saahiba saacho….. beejaano aasharo kaacho re.||1||
Dravyathee deva daanava pooje, guna shaanta ruchipanun leeje;
Arihaa pada pajjava chhaaje, mudraa padmaasana raaje re.||2||
Sanvege tajee gharavaaso, prabhu paarshvanaa ganadhara thaasho;
Tava muktipureemaan jaasho, guneelokamaan vayane gavaathaasha re.||3||
Ema daamodara jinavaanee, ashaadhee shraavake jaanee;
Jina vandee nija ghara aave, prabhu paarshvanee pratimaa bharaave re.||4||
Trana kaala te dhoopa ukheve, upakaaree shree jina seve;
Pachhee teha vaimaanika thaave, te pratimaa pana tihaan laave re.||5||
Ghanaan kaala poojee bahumaane, valee sooraja chandra vimaane;
Naagalokanaa kashta nivaaryaa, jyaare paarshva prabhujee padhaaryaa re.||6||
Yadusainya rahyo rana gheree, jeetyaa navi jaaye veree;
Jaraasanghe jaraa tava melee, hari bala vinaa saghale phelee re.||7||
Nemeeshvara chokee vishaalee, atthama kare vanamaalee;
Toothee padmaavatee baalee, aape pratimaa jhaakajhamaalee re.||8||
Prabhu paarshvanee pratimaa poojee, balavanta jaraa tava dhrujee;
Chhantakaava nhavana jala jotee, jaadavanee jaraa jaaya rotee re.||9||
Shankha pooree sahune jagaave, shankheshvara gaama vasaave;
Mandiramaan prabhu padharaave, shankheshvara naama dharaave re.||10||
Rahe je jinaraaja hajure, sevaka manavaanchhita poore;
E prabhujeene bhetana kaaje, shetha moteebhaaeene raaje re.||11||
Naano maaneka keraa nanda, sanghavee premachanda veerachanda;
Raajanagarathee sangha chalaave, gaame gaamanaa sangha milaave re.||12||
Adhaara attottera varase, phaagana vadi terasa divase;
Jina vandee aananda paave, vachana rasa gaave re. ||13||`,
    },
  },
  {
    id: "olagdi-avdharo",
    type: "bhajan",
    title: {
      gu: "ઓલગડી અવધારો, આશ ધરી હું આવ્યો",
      hi: "ओलगडी अवधारो, आश धरी हुं आव्यो",
      sa: "",
      en: "Olagdi Avdharo",
    },
    text: {
      gu: `ઓલગડી અવધારો, આશ ધરી હું આવ્યો;
શ્રી શંખેશ્વર અલવેસર તારી, આશ ધરી હું આવ્યો;
સેવક પાર કરીને સાહિબ! ચિંતામણિ મેં પાયો.||૧||
દેવ ઘણા મેં સેવ્યા પહેલાં, જિહાં લગે તું નવિ મળિયો;
હવે ભવાંતરમાં પણ તેહથી, કિમ હિ ન જાઉં છળિયો.||૨||
જ્ઞાનાદિક ગુણ તારા, દીસે છે પ્રભુ જેહવા;
સૂરજ આગળ ગ્રહગણ દીપે, હરિહર દીપે તેહવા.||૩||
કલિકાલે પ્રગટ તુમ પરચો, દેખું વિશ્વ મોઝાર;
પુરિષાદાણી પાર્શ્વ જિનેશ્વર, બાહ્ય ગ્રહીને તારો.||૪||
પુષ્કરાવર્ત ઘનાઘન પામી, ઔર છિલ્લર નવિ યાચું;
કામકુંભ સાચો પામીને, ચિત્ત કરે કોણ કાચું?||૫||
જરા નિવારી જાદવ કેરી, સુરનરવર સહુ પૂજ્યાં;
પાસજી પ્રત્યક્ષ દેખત દરિશન, પાપ મેવાસી ધ્રૂજ્યાં.||૫||
સો વાતે વાતડી જાણો, ભવજલ પાર ઉતારો;
પંડિત ઉત્તમવિજયનો સેવક, “રત્નવિજય” જયકારો.||૬||`,
      hi: `ओलगडी अवधारो, आश धरी हुं आव्यो;
श्री शंखेश्वर अलवेसर तारी, आश धरी हुं आव्यो;
सेवक पार करीने साहिब! चिंतामणि में पायो.||१||
देव घणा में सेव्या पहेलां, जिहां लगे तुं नवि मळियो;
हवे भवांतरमां पण तेहथी, किम हि न जाउं छळियो.||२||
ज्ञानादिक गुण तारा, दीसे छे प्रभु जेहवा;
सूरज आगळ ग्रहगण दीपे, हरिहर दीपे तेहवा.||३||
कलिकाले प्रगट तुम परचो, देखुं विश्व मोझार;
पुरिषादाणी पार्श्व जिनेश्वर, बाह्य ग्रहीने तारो.||४||
पुष्करावर्त घनाघन पामी, और छिल्लर नवि याचुं;
कामकुंभ साचो पामीने, चित्त करे कोण काचुं?||५||
जरा निवारी जादव केरी, सुरनरवर सहु पूज्यां;
पासजी प्रत्यक्ष देखत दरिशन, पाप मेवासी ध्रूज्यां.||५||
सो वाते वातडी जाणो, भवजल पार उतारो;
पंडित उत्तमविजयनो सेवक, “रत्नविजय” जयकारो.||६||`,
      sa: "",
      en: `Olagadee avadhaaro, aasha dharee hun aavyo;
Shree shankheshvara alavesara taaree, aasha dharee hun aavyo;
Sevaka paara kareene saahiba! chintaamani men paayo.||1||
Deva ghanaa men sevyaa pahelaan, jihaan lage tun navi maliyo;
Have bhavaantaramaan pana tehathee, kima hi na jaaun chhaliyo.||2||
Jnyaanaadika guna taaraa, deese chhe prabhu jehavaa;
Sooraja aagala grahagana deepe, harihara deepe tehavaa.||3||
Kalikaale pragata tuma paracho, dekhun vishva mojhaara;
Purishaadaanee paarshva jineshvara, baahya graheene taaro.||4||
Pushkaraavarta ghanaaghana paamee, aura chhillara navi yaachun;
Kaamakunbha saacho paameene, chitta kare kona kaachun?||5||
Jaraa nivaaree jaadava keree, suranaravara sahu poojyaan;
Paasajee pratyaksha dekhata darishana, paapa mevaasee dhroojyaan.||5||
So vaate vaatadee jaano, bhavajala paara utaaro;
Pandita uttamavijayano sevaka, “ratnavijaya” jayakaaro.||6||`,
    },
  },
  {
    id: "olaggadi-to-kije",
    type: "bhajan",
    title: {
      gu: "ઓલગડી (૨) તો કીજે શ્રીમુનિસુવ્રતસ્વામીની રે",
      hi: "ओलगडी (२) तो कीजे श्रीमुनिसुव्रतस्वामीनी रे",
      sa: "",
      en: "Olaggadi To Kije",
    },
    text: {
      gu: `ઓલગડી (૨) તો કીજે શ્રીમુનિસુવ્રતસ્વામીની રે,
જેહથી નિજપદ સિદ્ધ;
કેવલજ્ઞાનાદિક ગુણ ઉસે રે, લહીયે સહજ સમૃદ્ધિ. ॥੧॥
ઉપાદાન (૨) નિજ પરિણતિ વસ્તુની રે, પણ કારણ નિમિત્ત આધીન;
પુષ્ટ અપુષ્ટ દુવિધ તે ઉપદિશ્યો રે, ગ્રાહક વિધિ આધીન.||૨||
સાધ્ય સાધ્ય ધર્મ જે માંહે હુવે રે, તે નિમિત્ત અતિ પુષ્ટ;
પુષ્પમાંહિ તિલ વાસક વાસના રે, તે નહિ પ્રધ્વંસક દુષ્ટ. ॥३||
(૨) નિમિત્ત અપુષ્ટ ઘડા તણો રે, નવિ ઘટતા તસુ માંહિ;
સાધક સાધક પ્રધ્વંસકતા અછે રે, તિણે નહિ નિયત પ્રવાહ. ।।૪।।
ષટ્કારક ષટ્કારક તે કારણ કાર્યનો રે, જે કારણ સ્વાધીન;
તે કર્તા તે કર્તા સહુ કારક તે વસુ રે, કર્મ તે કારણ પીન.||૫||
કાર્ય કાર્ય સંકલ્પે કારણદશા રે, છતી સત્તા સદ્ધાવ;
અથવા તુલ્ય ધર્મને જોઈયે રે, સાધ્યારોપણ દાવ. ॥६॥
અતિશય અતિશય કારણ કારક કરણતે રે, નિમિત્ત અને ઉપાદાન;
સંપ્રદાન (૨) કારણ પદ ભવનથી રે, કારણ વ્યય અપાદાન. ॥૭॥
ભવન (૨) વ્યય વિણ કારજ નવિ હુવે રે, જિમ દૃષદે ન ઘટત્વ;
શુદ્ધાધાર (૨) સ્વગુણનો દ્રવ્ય છે રે, સત્તાધાર સુતત્વ.||૮||
આતમ (૨) કર્તા કાર્ય સિદ્ધતા રે, તસુ સાધન જિનરાજ;
પ્રભુ દીઠે (૨) કારજ રુચિ ઉપજે રે, પ્રગટે આત્મ સમાજ.||૯||
વંદન (૨) નમન સેવન વળી પૂજના રે, સ્મરણ સ્તવન વળી ધ્યાન;
“દેવચંદ્ર”(૨) કીજે જગદીશનું રે, પ્રગટે પૂર્ણ નિધાન. ॥१०॥`,
      hi: `ओलगडी (२) तो कीजे श्रीमुनिसुव्रतस्वामीनी रे,
जेहथी निजपद सिद्ध;
केवलज्ञानादिक गुण उसे रे, लहीये सहज समृद्धि. ॥੧॥
उपादान (२) निज परिणति वस्तुनी रे, पण कारण निमित्त आधीन;
पुष्ट अपुष्ट दुविध ते उपदिश्यो रे, ग्राहक विधि आधीन.||२||
साध्य साध्य धर्म जे मांहे हुवे रे, ते निमित्त अति पुष्ट;
पुष्पमांहि तिल वासक वासना रे, ते नहि प्रध्वंसक दुष्ट. ॥३||
(२) निमित्त अपुष्ट घडा तणो रे, नवि घटता तसु मांहि;
साधक साधक प्रध्वंसकता अछे रे, तिणे नहि नियत प्रवाह. ।।४।।
षट्कारक षट्कारक ते कारण कार्यनो रे, जे कारण स्वाधीन;
ते कर्ता ते कर्ता सहु कारक ते वसु रे, कर्म ते कारण पीन.||५||
कार्य कार्य संकल्पे कारणदशा रे, छती सत्ता सद्धाव;
अथवा तुल्य धर्मने जोईये रे, साध्यारोपण दाव. ॥६॥
अतिशय अतिशय कारण कारक करणते रे, निमित्त अने उपादान;
संप्रदान (२) कारण पद भवनथी रे, कारण व्यय अपादान. ॥७॥
भवन (२) व्यय विण कारज नवि हुवे रे, जिम दृषदे न घटत्व;
शुद्धाधार (२) स्वगुणनो द्रव्य छे रे, सत्ताधार सुतत्व.||८||
आतम (२) कर्ता कार्य सिद्धता रे, तसु साधन जिनराज;
प्रभु दीठे (२) कारज रुचि उपजे रे, प्रगटे आत्म समाज.||९||
वंदन (२) नमन सेवन वळी पूजना रे, स्मरण स्तवन वळी ध्यान;
“देवचंद्र”(२) कीजे जगदीशनुं रे, प्रगटे पूर्ण निधान. ॥१०॥`,
      sa: "",
      en: `Olagadee (2) to keeje shreemunisuvratasvaameenee re,
Jehathee nijapada siddha;
Kevalajnyaanaadika guna use re, laheeye sahaja samruddhi. ||1||
Upaadaana (2) nija parinati vastunee re, pana kaarana nimitta aadheena;
Pushta apushta duvidha te upadishyo re, graahaka vidhi aadheena.||2||
Saadhya saadhya dharma je maanhe huve re, te nimitta ati pushta;
Pushpamaanhi tila vaasaka vaasanaa re, te nahi pradhvansaka dushta. ||3||
(2) nimitta apushta ghadaa tano re, navi ghatataa tasu maanhi;
Saadhaka saadhaka pradhvansakataa achhe re, tine nahi niyata pravaaha. ||4||
Shatkaaraka shatkaaraka te kaarana kaaryano re, je kaarana svaadheena;
Te kartaa te kartaa sahu kaaraka te vasu re, karma te kaarana peena.||5||
Kaarya kaarya sankalpe kaaranadashaa re, chhatee sattaa saddhaava;
Athavaa tulya dharmane joeeye re, saadhyaaropana daava. ||6||
Atishaya atishaya kaarana kaaraka karanate re, nimitta ane upaadaana;
Sanpradaana (2) kaarana pada bhavanathee re, kaarana vyaya apaadaana. ||7||
Bhavana (2) vyaya vina kaaraja navi huve re, jima drushade na ghatatva;
Shuddhaadhaara (2) svagunano dravya chhe re, sattaadhaara sutatva.||8||
Aatama (2) kartaa kaarya siddhataa re, tasu saadhana jinaraaja;
Prabhu deethe (2) kaaraja ruchi upaje re, pragate aatma samaaja.||9||
Vandana (2) namana sevana valee poojanaa re, smarana stavana valee dhyaana;
“devachandra”(2) keeje jagadeeshanun re, pragate poorna nidhaana. ||10||`,
    },
  },
  {
    id: "padmaprabh-jin-gunidhi",
    type: "bhajan",
    title: {
      gu: "પદ્મપ્રભ જિન ગુણનિધિ રે લાલ, જગતારક જગદીશ રે; વાલેસર",
      hi: "पद्मप्रभ जिन गुणनिधि रे लाल, जगतारक जगदीश रे; वालेसर",
      sa: "",
      en: "Padmaprabh Jin Gunidhi",
    },
    text: {
      gu: `પદ્મપ્રભ જિન ગુણનિધિ રે લાલ, જગતારક જગદીશ રે; વાલેસર
જિન ઉપગાર થકી લહે રે લાલ,
ભવિ જન સિદ્ધિ જગીશ રે. વા૦ ।। ૧ ।।
તુજ દરિસણ મુજ વાલહો રે લાલ, દરિસણ શુદ્ધ પવિત્ત રે; વા૦
દરિસણ શબ્દ નયે કરે રે લાલ, સંગ્રહ એવંભૂત રે. वा०॥२॥
બીજે વૃક્ષ અનંતતા રે લાલ, પ્રસરે ભૂજલ યોગ રે;વા૦
તિમ મુજ આતમ સંપદારે લાલ, પ્રગટે પ્રભુ સંયોગ રે..વા૦।।૩।।
જગત જંતુ કારજ રુચિ રે લાલ, સાધે ઉદયે ભાણ રે; વા૦
ચિદાનંદ સુવિલાસતા રે લાલ, વાધે જિનવર ઝાણ રે..वा०।।४।।
લબ્ધિ સિદ્ધિ મંત્રાક્ષરે રે લાલ, ઉપજે સાધક સંગ રે; વા૦
સહજ અધ્યાતમ તત્ત્વતા રે લાલ, પ્રગટે તત્ત્વી રંગ રે. વા૦ ।।૫ ||
લોહ ધાતુ કંચન હુવે રે લાલ, પારસ ફરસન પામી રે; વા૦
પ્રગટે અધ્યાતમ દશા રે લાલ, વ્યક્ત ગુણી ગુણગ્રામ રે.||૬||
આત્મસિદ્ધિ કારજ ભણી રે લાલ, સહજ નિયામક હેતુ રે; વા૦
નામાદિક જિનરાજના રે લાલ, ભવસાગર મહા સેતુ રે.||૭||
રક્ત વર્ણ ગુણ રાય રે; “દેવચંદ્ર’ વૃંદે સ્તવ્યો રે લાલ, વા૦
દેવચંદ વૃંદે સ્તત્વ્યો રે લાલ, આપ અવર્ણ અકાય રે.વા૦ ।।૮।।`,
      hi: `पद्मप्रभ जिन गुणनिधि रे लाल, जगतारक जगदीश रे; वालेसर
जिन उपगार थकी लहे रे लाल,
भवि जन सिद्धि जगीश रे. वा० ।। १ ।।
तुज दरिसण मुज वालहो रे लाल, दरिसण शुद्ध पवित्त रे; वा०
दरिसण शब्द नये करे रे लाल, संग्रह एवंभूत रे. वा०॥२॥
बीजे वृक्ष अनंतता रे लाल, प्रसरे भूजल योग रे;वा०
तिम मुज आतम संपदारे लाल, प्रगटे प्रभु संयोग रे..वा०।।३।।
जगत जंतु कारज रुचि रे लाल, साधे उदये भाण रे; वा०
चिदानंद सुविलासता रे लाल, वाधे जिनवर झाण रे..वा०।।४।।
लब्धि सिद्धि मंत्राक्षरे रे लाल, उपजे साधक संग रे; वा०
सहज अध्यातम तत्त्वता रे लाल, प्रगटे तत्त्वी रंग रे. वा० ।।५ ||
लोह धातु कंचन हुवे रे लाल, पारस फरसन पामी रे; वा०
प्रगटे अध्यातम दशा रे लाल, व्यक्त गुणी गुणग्राम रे.||६||
आत्मसिद्धि कारज भणी रे लाल, सहज नियामक हेतु रे; वा०
नामादिक जिनराजना रे लाल, भवसागर महा सेतु रे.||७||
रक्त वर्ण गुण राय रे; “देवचंद्र’ वृंदे स्तव्यो रे लाल, वा०
देवचंद वृंदे स्तत्व्यो रे लाल, आप अवर्ण अकाय रे.वा० ।।८।।`,
      sa: "",
      en: `Padmaprabha jina gunanidhi re laala, jagataaraka jagadeesha re; vaalesara
Jina upagaara thakee lahe re laala,
Bhavi jana siddhi jageesha re. vaa0 || 1 ||
Tuja darisana muja vaalaho re laala, darisana shuddha pavitta re; vaa0
Darisana shabda naye kare re laala, sangraha evanbhoota re. वा0||2||
Beeje vruksha anantataa re laala, prasare bhoojala yoga re;vaa0
Tima muja aatama sanpadaare laala, pragate prabhu sanyoga re..vaa0||3||
Jagata jantu kaaraja ruchi re laala, saadhe udaye bhaana re; vaa0
Chidaananda suvilaasataa re laala, vaadhe jinavara jhaana re..वा0||4||
Labdhi siddhi mantraakshare re laala, upaje saadhaka sanga re; vaa0
Sahaja adhyaatama tattvataa re laala, pragate tattvee ranga re. vaa0 ||5 ||
Loha dhaatu kanchana huve re laala, paarasa pharasana paamee re; vaa0
Pragate adhyaatama dashaa re laala, vyakta gunee gunagraama re.||6||
Aatmasiddhi kaaraja bhanee re laala, sahaja niyaamaka hetu re; vaa0
Naamaadika jinaraajanaa re laala, bhavasaagara mahaa setu re.||7||
Rakta varna guna raaya re; “devachandra’ vrunde stavyo re laala, vaa0
Devachanda vrunde statvyo re laala, aapa avarna akaaya re.vaa0 ||8||`,
    },
  },
  {
    id: "padmaprabh-jin-jai-alga-rahya",
    type: "bhajan",
    title: {
      gu: "પદ્મપ્રભ જિન જઈ અલગા રહ્યા, જિહાંથી નાવે લેખોજી",
      hi: "पद्मप्रभ जिन जई अलगा रह्या, जिहांथी नावे लेखोजी",
      sa: "",
      en: "Padmaprabh Jin Jai Alga Rahya",
    },
    text: {
      gu: `પદ્મપ્રભ જિન જઈ અલગા રહ્યા, જિહાંથી નાવે લેખોજી;
કાગળને મસી તિહાં નવિ સંપજે, ન ચલે વાટ વિશેષોજી,
સુગુણ સનેહા રે કદીય ન વિસરે.॥੧॥
તિહાં જઈ કોઈ આવે નહિ, જેહ કહે સંદેશોજી;
જેહનું મિલવું રે દોહિલું તેહશું, નેહ તે આપ કિલેશોજી.||૨||
વીતરાગશું રે રાગ તે એક પખો, કીજે કવણ પ્રકારોજી;
ઘોડો દોડેરે સાહિબ વાજમાં, મન નાણે અસવારોજી.||૩||
સાચી રે ભાવન રસ કહ્યો, રસ હોય તિહાં દોય રીઝેજી;
હોડાહોડેરે બીહું રસરીઝથી, મનના મનોરથ સીઝેજી.||૪||
પણ ગુણવંતા રે ગોઠે ગાજીએ, મોટા તે વિશ્રામજી;
‘વાચક જશ’ કહે એહ આશરે, સુખ લહું ઠામોઠામજી. ॥५॥`,
      hi: `पद्मप्रभ जिन जई अलगा रह्या, जिहांथी नावे लेखोजी;
कागळने मसी तिहां नवि संपजे, न चले वाट विशेषोजी,
सुगुण सनेहा रे कदीय न विसरे.॥੧॥
तिहां जई कोई आवे नहि, जेह कहे संदेशोजी;
जेहनुं मिलवुं रे दोहिलुं तेहशुं, नेह ते आप किलेशोजी.||२||
वीतरागशुं रे राग ते एक पखो, कीजे कवण प्रकारोजी;
घोडो दोडेरे साहिब वाजमां, मन नाणे असवारोजी.||३||
साची रे भावन रस कह्यो, रस होय तिहां दोय रीझेजी;
होडाहोडेरे बीहुं रसरीझथी, मनना मनोरथ सीझेजी.||४||
पण गुणवंता रे गोठे गाजीए, मोटा ते विश्रामजी;
‘वाचक जश’ कहे एह आशरे, सुख लहुं ठामोठामजी. ॥५॥`,
      sa: "",
      en: `Padmaprabha jina jaee alagaa rahyaa, jihaanthee naave lekhojee;
Kaagalane masee tihaan navi sanpaje, na chale vaata visheshojee,
Suguna sanehaa re kadeeya na visare.||1||
Tihaan jaee koee aave nahi, jeha kahe sandeshojee;
Jehanun milavun re dohilun tehashun, neha te aapa kileshojee.||2||
Veetaraagashun re raaga te eka pakho, keeje kavana prakaarojee;
Ghodo dodere saahiba vaajamaan, mana naane asavaarojee.||3||
Saachee re bhaavana rasa kahyo, rasa hoya tihaan doya reejhejee;
Hodaahodere beehun rasareejhathee, mananaa manoratha seejhejee.||4||
Pana gunavantaa re gothe gaajeee, motaa te vishraamajee;
‘vaachaka jasha’ kahe eha aashare, sukha lahun thaamothaamajee. ||5||`,
    },
  },
  {
    id: "padmaprabh-jin-tuj-muj-aantaru-re",
    type: "bhajan",
    title: {
      gu: "પદ્મપ્રભ જિન! તુજ મુજ આંતરું રે, કિમ ભાંજે ભગવંત",
      hi: "पद्मप्रभ जिन! तुज मुज आंतरुं रे, किम भांजे भगवंत",
      sa: "",
      en: "Padmaprabh Jin Tuj Muj Aantaru Re",
    },
    text: {
      gu: `પદ્મપ્રભ જિન! તુજ મુજ આંતરું રે, કિમ ભાંજે ભગવંત;
કર્મ વિપાકે હો કારણ જોઈને રે, કોઈ કહે મતિમંત.||૧||
પયઈ ઠિઈ અણુભાગ પ્રદેશથી રે, મૂલ ઉત્તર બિહું ભેદ;
ઘાતી અઘાતી હો બંધોદય ઉદીરણા રે, સત્તા કર્મ વિછેદ.||૨||
કનકોપલવત્ પયડી પુરુષ તણી રે, જોડી અનાદિ સ્વભાવ;
અન્ય સંયોગી જિહાં લગે આતમા રે, સંસારી કહેવાય.||૩||
કારણ યોગે હો બાંધે બંધને રે, કારણ મુગતિ મુકાય;
આશ્રવ સંવર નામ અનુક્રમે રે, હેય ઉપાદેય સુણાય.||૪||
યુંજનકરણે હો અંતર તુજ પડ્યો રે, ગુણકરણે કરી ભંગ;
ગ્રંથ ઉક્તે કરી પંડિત જન કહ્યો રે, અંતર ભંગ સુઅંગ.||૫||
તુજ મુજ અંતર અંતર ભાંજશે રે, વાજશે મંગલ તૂર;
જીવ સરોવર અતિશય વાધશે રે, “આનંદઘન’ રસપૂર.`,
      hi: `पद्मप्रभ जिन! तुज मुज आंतरुं रे, किम भांजे भगवंत;
कर्म विपाके हो कारण जोईने रे, कोई कहे मतिमंत.||१||
पयई ठिई अणुभाग प्रदेशथी रे, मूल उत्तर बिहुं भेद;
घाती अघाती हो बंधोदय उदीरणा रे, सत्ता कर्म विछेद.||२||
कनकोपलवत् पयडी पुरुष तणी रे, जोडी अनादि स्वभाव;
अन्य संयोगी जिहां लगे आतमा रे, संसारी कहेवाय.||३||
कारण योगे हो बांधे बंधने रे, कारण मुगति मुकाय;
आश्रव संवर नाम अनुक्रमे रे, हेय उपादेय सुणाय.||४||
युंजनकरणे हो अंतर तुज पड्यो रे, गुणकरणे करी भंग;
ग्रंथ उक्ते करी पंडित जन कह्यो रे, अंतर भंग सुअंग.||५||
तुज मुज अंतर अंतर भांजशे रे, वाजशे मंगल तूर;
जीव सरोवर अतिशय वाधशे रे, “आनंदघन’ रसपूर.`,
      sa: "",
      en: `Padmaprabha jina! tuja muja aantarun re, kima bhaanje bhagavanta;
Karma vipaake ho kaarana joeene re, koee kahe matimanta.||1||
Payaee thiee anubhaaga pradeshathee re, moola uttara bihun bheda;
Ghaatee aghaatee ho bandhodaya udeeranaa re, sattaa karma vichheda.||2||
Kanakopalavat payadee purusha tanee re, jodee anaadi svabhaava;
Anya sanyogee jihaan lage aatamaa re, sansaaree kahevaaya.||3||
Kaarana yoge ho baandhe bandhane re, kaarana mugati mukaaya;
Aashrava sanvara naama anukrame re, heya upaadeya sunaaya.||4||
Yunjanakarane ho antara tuja padyo re, gunakarane karee bhanga;
Grantha ukte karee pandita jana kahyo re, antara bhanga suanga.||5||
Tuja muja antara antara bhaanjashe re, vaajashe mangala toora;
Jeeva sarovara atishaya vaadhashe re, “aanandaghana’ rasapoora.`,
    },
  },
  {
    id: "padmaprabh-pran-se-pyara",
    type: "bhajan",
    title: {
      gu: "પદ્મપ્રભ પ્રાણ સે પ્યારા, છુડાવો કર્મ કી ધારા",
      hi: "पद्मप्रभ प्राण से प्यारा, छुडावो कर्म की धारा",
      sa: "",
      en: "Padmaprabh Pran Se Pyara",
    },
    text: {
      gu: `પદ્મપ્રભ પ્રાણ સે પ્યારા, છુડાવો કર્મ કી ધારા;
કરમ ફંદ તોડવા ધોરી, પ્રભુજી સે અર્જ હૈ મોરી.||૧||
લઘુવય એક થેં જીયા, મુક્તિ મેં વાસ તુમ કીયા;
ન જાની પીડ તેં મોરી, પ્રભુ અબ ખીંચ લે દોરી.||૨||
વિષયસુખ માની મોં મન મેં, ગયો સબ કાલ ગફલત મેં;
નરક દુઃખ વેદના ભારી, નીકળવા ના રહી બારી.||૩||
પરવશ દીનતા કીની, પાપ કી પોટ શિર લીની;
ન જાણી ભક્તિ તુમ કેરી, રહ્યો નિશદિન દુઃખ ઘેરી.||૪||
ઈસ વિધ વિનતિ મોરી, કરું મેં દોય કર જોડી;
આતમ આનંદ મુજ દીજો, “વીરનું કાજ સબ કીજો.||૫||`,
      hi: `पद्मप्रभ प्राण से प्यारा, छुडावो कर्म की धारा;
करम फंद तोडवा धोरी, प्रभुजी से अर्ज है मोरी.||१||
लघुवय एक थें जीया, मुक्ति में वास तुम कीया;
न जानी पीड तें मोरी, प्रभु अब खींच ले दोरी.||२||
विषयसुख मानी मों मन में, गयो सब काल गफलत में;
नरक दुःख वेदना भारी, नीकळवा ना रही बारी.||३||
परवश दीनता कीनी, पाप की पोट शिर लीनी;
न जाणी भक्ति तुम केरी, रह्यो निशदिन दुःख घेरी.||४||
ईस विध विनति मोरी, करुं में दोय कर जोडी;
आतम आनंद मुज दीजो, “वीरनुं काज सब कीजो.||५||`,
      sa: "",
      en: `Padmaprabha praana se pyaaraa, chhudaavo karma kee dhaaraa;
Karama phanda todavaa dhoree, prabhujee se arja hai moree.||1||
Laghuvaya eka then jeeyaa, mukti men vaasa tuma keeyaa;
Na jaanee peeda ten moree, prabhu aba kheencha le doree.||2||
Vishayasukha maanee mon mana men, gayo saba kaala gaphalata men;
Naraka dukha vedanaa bhaaree, neekalavaa naa rahee baaree.||3||
Paravasha deenataa keenee, paapa kee pota shira leenee;
Na jaanee bhakti tuma keree, rahyo nishadina dukha gheree.||4||
Eesa vidha vinati moree, karun men doya kara jodee;
Aatama aananda muja deejo, “veeranun kaaja saba keejo.||5||`,
    },
  },
  {
    id: "padmaprabhu-ne-vasupujya",
    type: "bhajan",
    title: {
      gu: "પદ્મપ્રભુ ને વાસુપૂજ્ય,દોય રાતા કહીએ",
      hi: "पद्मप्रभु ने वासुपूज्य,दोय राता कहीए",
      sa: "",
      en: "Padmaprabhu Ne Vasupujya",
    },
    text: {
      gu: `પદ્મપ્રભુ ને વાસુપૂજ્ય,દોય રાતા કહીએ;
ચંદ્રપ્રભ ને સુવિધિનાથ, દો ઉજ્જવલ લહીએ.||૧||
મલ્લિનાથ ને પાર્શ્વનાથ, દો નીલા નિરખ્યા;
મુનિસુવ્રત ને નેમિનાથ, દો અંજન સરીખા. ||૨||
સોળે જિન કંચન સમા એ, એવા જિન ચોવીશ;
ધીરવિમલ પંડિતતણો, ‘જ્ઞાનવિમલ’ કહે શીશ.||૩||`,
      hi: `पद्मप्रभु ने वासुपूज्य,दोय राता कहीए;
चंद्रप्रभ ने सुविधिनाथ, दो उज्जवल लहीए.||१||
मल्लिनाथ ने पार्श्वनाथ, दो नीला निरख्या;
मुनिसुव्रत ने नेमिनाथ, दो अंजन सरीखा. ||२||
सोळे जिन कंचन समा ए, एवा जिन चोवीश;
धीरविमल पंडिततणो, ‘ज्ञानविमल’ कहे शीश.||३||`,
      sa: "",
      en: `Padmaprabhu ne vaasupoojya,doya raataa kaheee;
Chandraprabha ne suvidhinaatha, do ujjavala laheee.||1||
Mallinaatha ne paarshvanaatha, do neelaa nirakhyaa;
Munisuvrata ne neminaatha, do anjana sareekhaa. ||2||
Sole jina kanchana samaa e, evaa jina choveesha;
Dheeravimala panditatano, ‘jnyaanavimala’ kahe sheesha.||3||`,
    },
  },
  {
    id: "pancham-surlokna-vaasi-re",
    type: "bhajan",
    title: {
      gu: "પંચમ સુરલોકના વાસી રે, નવ લોકાંતિક સુવિલાસી રે",
      hi: "पंचम सुरलोकना वासी रे, नव लोकांतिक सुविलासी रे",
      sa: "",
      en: "Pancham Surlokna Vaasi Re",
    },
    text: {
      gu: `પંચમ સુરલોકના વાસી રે, નવ લોકાંતિક સુવિલાસી રે;
કરે વિનંતી ગુણની રાશિ.
મલ્લિજિન! નાથજી વ્રત લીજે રે, ભવિજીવને શિવસુખ દીજે. ।।૧ ।।
તુમે કરુણારસ ભંડાર રે, પામ્યા છો ભવજલ પાર રે;
સેવકનો કરો રે ઉદ્ધાર.||૨||
પ્રભુ દાન સંવત્સરી આપે રે, જગનાં દારિદ્ર દુઃખ કાપે રે;
ભવ્યત્વપણે તસ થાપે. મલ્લિજિન૦॥૩॥
સુપતિ સઘળા મળી આવે રે, મણિ રયણ સોવન વરસાવે રે;
પ્રભુ ચરણે શીશ નમાવે. મલ્લિજિન. ।।૪||
તીર્થોદક કુંભા લાવે રે, પ્રભુને સિંહાસન ઠાવે રે;
સુરપતિ ભક્તે નવરાવે.||૫||
વસ્ત્રાભરણે શણગારે રે, ફૂલ માલા હૃદય પર ધારે રે;
દુઃખડાં ઈન્દ્રાણી ઉવારે.||૬||
મળ્યા સુર નર કોડાકોડી રે, પ્રભુ આગે રહ્યા કર જોડી રે;
કરે ભક્તિ યુક્તિ મદમોડી. મલ્લજિન૦ ।।૭।।
મૃગશિર સુદિની અજુઆલી રે, એકાદશી ગુણની આલી રે;
વર્યા સંયમ વધુ લટકાલી. મલ્લિજિન૦ ।।૮।।
દીક્ષા કલ્યાણક એહ રે, ગાતાં દુઃખ ન રહે રેહ રે;
લહે “રૂપવિજય” જશ નેહ.||૯||`,
      hi: `पंचम सुरलोकना वासी रे, नव लोकांतिक सुविलासी रे;
करे विनंती गुणनी राशि.
मल्लिजिन! नाथजी व्रत लीजे रे, भविजीवने शिवसुख दीजे. ।।१ ।।
तुमे करुणारस भंडार रे, पाम्या छो भवजल पार रे;
सेवकनो करो रे उद्धार.||२||
प्रभु दान संवत्सरी आपे रे, जगनां दारिद्र दुःख कापे रे;
भव्यत्वपणे तस थापे. मल्लिजिन०॥३॥
सुपति सघळा मळी आवे रे, मणि रयण सोवन वरसावे रे;
प्रभु चरणे शीश नमावे. मल्लिजिन. ।।४||
तीर्थोदक कुंभा लावे रे, प्रभुने सिंहासन ठावे रे;
सुरपति भक्ते नवरावे.||५||
वस्त्राभरणे शणगारे रे, फूल माला हृदय पर धारे रे;
दुःखडां ईन्द्राणी उवारे.||६||
मळ्या सुर नर कोडाकोडी रे, प्रभु आगे रह्या कर जोडी रे;
करे भक्ति युक्ति मदमोडी. मल्लजिन० ।।७।।
मृगशिर सुदिनी अजुआली रे, एकादशी गुणनी आली रे;
वर्या संयम वधु लटकाली. मल्लिजिन० ।।८।।
दीक्षा कल्याणक एह रे, गातां दुःख न रहे रेह रे;
लहे “रूपविजय” जश नेह.||९||`,
      sa: "",
      en: `Panchama suralokanaa vaasee re, nava lokaantika suvilaasee re;
Kare vinantee gunanee raashi.
Mallijina! naathajee vrata leeje re, bhavijeevane shivasukha deeje. ||1 ||
Tume karunaarasa bhandaara re, paamyaa chho bhavajala paara re;
Sevakano karo re uddhaara.||2||
Prabhu daana sanvatsaree aape re, jaganaan daaridra dukha kaape re;
Bhavyatvapane tasa thaape. mallijina0||3||
Supati saghalaa malee aave re, mani rayana sovana varasaave re;
Prabhu charane sheesha namaave. mallijina. ||4||
Teerthodaka kunbhaa laave re, prabhune sinhaasana thaave re;
Surapati bhakte navaraave.||5||
Vastraabharane shanagaare re, phoola maalaa hrudaya para dhaare re;
Dukhadaan eendraanee uvaare.||6||
Malyaa sura nara kodaakodee re, prabhu aage rahyaa kara jodee re;
Kare bhakti yukti madamodee. mallajina0 ||7||
Mrugashira sudinee ajuaalee re, ekaadashee gunanee aalee re;
Varyaa sanyama vadhu latakaalee. mallijina0 ||8||
Deekshaa kalyaanaka eha re, gaataan dukha na rahe reha re;
Lahe “roopavijaya” jasha neha.||9||`,
    },
  },
  {
    id: "panthado-nihadu-re",
    type: "bhajan",
    title: {
      gu: "પંથડો નિહાળું રે બીજા જિન તણો રે, અજિત અજિત ગુણધામ",
      hi: "पंथडो निहाळुं रे बीजा जिन तणो रे, अजित अजित गुणधाम",
      sa: "",
      en: "Panthado Nihadu Re",
    },
    text: {
      gu: `પંથડો નિહાળું રે બીજા જિન તણો રે, અજિત અજિત ગુણધામ;
જેણે તેં જીત્યા રે તેણે હું જીતીયો રે, પુરુષ મુજ નામ. ।।૧।।
ચરમ નયને કરી મારગ જોવતાં રે, ભૂલ્યો સયલ સંસાર;
જેણે નયને કરી મારગ જોઈએ રે, નયન તે દિવ્ય વિચાર. ॥२॥
પુરુષ પરંપર અનુભવ જોવતાં રે, અંધોઅંધ પુલાય;
વસ્તુ વિચારે રે આગમે કરી રે, ચરણ ધરણ નહિ ઠાય.||૩||
તર્ક વિચારે રે વાદ પરંપરા રે, પાર ન પહુંચે કોય;
અભિમત વસ્તુ વસ્તુગતે કહે રે, તે વિરલા જગ જોય. ॥४॥
વસ્તુ વિચારે રે દિવ્ય નયણ તણો રે, વિરહ પડ્યો નિરધાર;
તરતમ જોગે રે તરતમ વાસના રે, વાસિત બોધ આધાર.||૫||
કાળ લધ લહી પંથ નિહાળશું રે, એ આશા અવલંબ;
એ જન જીવે રે જિનજી જાણજોરે, “આનંદઘન’ મત અંબ. ।।૬।|`,
      hi: `पंथडो निहाळुं रे बीजा जिन तणो रे, अजित अजित गुणधाम;
जेणे तें जीत्या रे तेणे हुं जीतीयो रे, पुरुष मुज नाम. ।।१।।
चरम नयने करी मारग जोवतां रे, भूल्यो सयल संसार;
जेणे नयने करी मारग जोईए रे, नयन ते दिव्य विचार. ॥२॥
पुरुष परंपर अनुभव जोवतां रे, अंधोअंध पुलाय;
वस्तु विचारे रे आगमे करी रे, चरण धरण नहि ठाय.||३||
तर्क विचारे रे वाद परंपरा रे, पार न पहुंचे कोय;
अभिमत वस्तु वस्तुगते कहे रे, ते विरला जग जोय. ॥४॥
वस्तु विचारे रे दिव्य नयण तणो रे, विरह पड्यो निरधार;
तरतम जोगे रे तरतम वासना रे, वासित बोध आधार.||५||
काळ लध लही पंथ निहाळशुं रे, ए आशा अवलंब;
ए जन जीवे रे जिनजी जाणजोरे, “आनंदघन’ मत अंब. ।।६।|`,
      sa: "",
      en: `Panthado nihaalun re beejaa jina tano re, ajita ajita gunadhaama;
Jene ten jeetyaa re tene hun jeeteeyo re, purusha muja naama. ||1||
Charama nayane karee maaraga jovataan re, bhoolyo sayala sansaara;
Jene nayane karee maaraga joeee re, nayana te divya vichaara. ||2||
Purusha paranpara anubhava jovataan re, andhoandha pulaaya;
Vastu vichaare re aagame karee re, charana dharana nahi thaaya.||3||
Tarka vichaare re vaada paranparaa re, paara na pahunche koya;
Abhimata vastu vastugate kahe re, te viralaa jaga joya. ||4||
Vastu vichaare re divya nayana tano re, viraha padyo niradhaara;
Taratama joge re taratama vaasanaa re, vaasita bodha aadhaara.||5||
Kaala ladha lahee pantha nihaalashun re, e aashaa avalanba;
E jana jeeve re jinajee jaanajore, “aanandaghana’ mata anba. ||6||`,
    },
  },
  {
    id: "parasnath-aadhare",
    type: "bhajan",
    title: {
      gu: "પારસનાથ આધાર, મેરો પ્રભુ",
      hi: "पारसनाथ आधार, मेरो प्रभु",
      sa: "",
      en: "Parasnath Aadhare",
    },
    text: {
      gu: `પારસનાથ આધાર, મેરો પ્રભુ,
પારસનાથ આધાર… મેરો૦।।૧।।
ઈહભવ પરભવ વાંછિત પૂરણ,
શિવપદ કો દાતાર… મેરો૦ ||૨ ।।
વામાજી કો નંદન નિરખ્યો,
તે પામ્યો ભવ પાર… મેરો૦॥૩॥
‘શામળ’ દેવ આશા પૂરો મન કી,
સેવક કી કરો સહાય… મેરો૦॥૪॥`,
      hi: `पारसनाथ आधार, मेरो प्रभु,
पारसनाथ आधार… मेरो०।।१।।
ईहभव परभव वांछित पूरण,
शिवपद को दातार… मेरो० ||२ ।।
वामाजी को नंदन निरख्यो,
ते पाम्यो भव पार… मेरो०॥३॥
‘शामळ’ देव आशा पूरो मन की,
सेवक की करो सहाय… मेरो०॥४॥`,
      sa: "",
      en: `Paarasanaatha aadhaara, mero prabhu,
Paarasanaatha aadhaara… mero0||1||
Eehabhava parabhava vaanchhita poorana,
Shivapada ko daataara… mero0 ||2 ||
Vaamaajee ko nandana nirakhyo,
Te paamyo bhava paara… mero0||3||
‘shaamala’ deva aashaa pooro mana kee,
Sevaka kee karo sahaaya… mero0||4||`,
    },
  },
  {
    id: "parmanand-vilasi",
    type: "bhajan",
    title: {
      gu: "પરમાનંદ વિલાસી જિનેશ્વર, પરમાનંદ વિલાસી",
      hi: "परमानंद विलासी जिनेश्वर, परमानंद विलासी",
      sa: "",
      en: "Parmanand Vilasi",
    },
    text: {
      gu: `પરમાનંદ વિલાસી જિનેશ્વર, પરમાનંદ વિલાસી;
કેવલજ્ઞાન ને કેવલદર્શન, અવ્યાબાધ ઉદાસી. ॥੧॥
અજર અમર અકલંક અરુપી, અરસ અગંધ અફાસી;
અગુરુલઘુ અનંત અનુપમ, આતમલીલા વાસી.॥२॥
અકોહી અમાની અમાયી અલોભી,અવિરતિ રહિત અલેશી;
અરાગી અદ્વેષી અયોગી અભોગી, અણાહારી અક્લેશી. ॥३॥
અતીન્દ્રિય અનુપાધિ અદેહી, સ્વક્ષેત્ર સ્વભાવ નિવાસી;
નિજ ગુણ સત્તા રંગી અસંગી, અખંડ અસંખ્ય પ્રદેશી.॥४॥`,
      hi: `परमानंद विलासी जिनेश्वर, परमानंद विलासी;
केवलज्ञान ने केवलदर्शन, अव्याबाध उदासी. ॥੧॥
अजर अमर अकलंक अरुपी, अरस अगंध अफासी;
अगुरुलघु अनंत अनुपम, आतमलीला वासी.॥२॥
अकोही अमानी अमायी अलोभी,अविरति रहित अलेशी;
अरागी अद्वेषी अयोगी अभोगी, अणाहारी अक्लेशी. ॥३॥
अतीन्द्रिय अनुपाधि अदेही, स्वक्षेत्र स्वभाव निवासी;
निज गुण सत्ता रंगी असंगी, अखंड असंख्य प्रदेशी.॥४॥`,
      sa: "",
      en: `Paramaananda vilaasee jineshvara, paramaananda vilaasee;
Kevalajnyaana ne kevaladarshana, avyaabaadha udaasee. ||1||
Ajara amara akalanka arupee, arasa agandha aphaasee;
Agurulaghu ananta anupama, aatamaleelaa vaasee.||2||
Akohee amaanee amaayee alobhee,avirati rahita aleshee;
Araagee adveshee ayogee abhogee, anaahaaree akleshee. ||3||
Ateendriya anupaadhi adehee, svakshetra svabhaava nivaasee;
Nija guna sattaa rangee asangee, akhanda asankhya pradeshee.||4||`,
    },
  },
  {
    id: "parmatam-purankala",
    type: "bhajan",
    title: {
      gu: "પરમાતમ પૂરણકલા, પૂરણ ગુણ હો પૂરણ જન આશ",
      hi: "परमातम पूरणकला, पूरण गुण हो पूरण जन आश",
      sa: "",
      en: "Parmatam Purankala",
    },
    text: {
      gu: `પરમાતમ પૂરણકલા, પૂરણ ગુણ હો પૂરણ જન આશ;
પૂરણ દૃષ્ટિ નિહાળીએ, ચિત્ત ધરીએ હો અમચી અરદાસ.||૧||
સર્વ દેશઘાતી સહું, અઘાતી હો કરી ઘાત દયાળ;
વાસ કિયો શિવમંદિરે, મોહે વીસરી હો ભમતો જગજાળ.||૨||
જગતારક પદવી લહી, તાર્યા સહી હો અપરાધી અપાર;
તાત કહો મોહે તારતાં, કિમ કિની હો ઈણ અવસર વાર.||૩||
મોહ મહામદ છાકથી, હું છકીઓ હો નહિ શુદ્ધિ લગાર;
ઉચિત સહિ ઈણે અવસરે, સેવકની હો કરવી સંભા.||૪||
મોહ જો તારશો, તિણ વેળા હો કિહાં તુમ ઉપગાર;
સુખ વેળા સજ્જન ઘણા, દુઃખ વેળા હો વિરલા સંસાર.||૫||
પણ તુમ દરિશન જોગથી, થયો હૃદયે હો અનુભવ પ્રકાશ;
ભવ અભ્યાસી કરે, દુઃખદાયી હો સહુ કર્મ વિનાશ.||૬||
કર્મ કલંક નિવારીને, નિજ રુપે હો રમે રમતારામ;
લહત અપૂરવ ભાવથી, ઈણ રીતે હો તુમ પદ વિશરામ.||૭||
ત્રિકરણ જોગે વિનવું, સુખદાયી હો શિવાદેવીના નંદ;
“ચિદાનંદ’ મનમેં સદા, તુમે આવો હો પ્રભુ નાણદિણંદ.||૮||`,
      hi: `परमातम पूरणकला, पूरण गुण हो पूरण जन आश;
पूरण दृष्टि निहाळीए, चित्त धरीए हो अमची अरदास.||१||
सर्व देशघाती सहुं, अघाती हो करी घात दयाळ;
वास कियो शिवमंदिरे, मोहे वीसरी हो भमतो जगजाळ.||२||
जगतारक पदवी लही, तार्या सही हो अपराधी अपार;
तात कहो मोहे तारतां, किम किनी हो ईण अवसर वार.||३||
मोह महामद छाकथी, हुं छकीओ हो नहि शुद्धि लगार;
उचित सहि ईणे अवसरे, सेवकनी हो करवी संभा.||४||
मोह जो तारशो, तिण वेळा हो किहां तुम उपगार;
सुख वेळा सज्जन घणा, दुःख वेळा हो विरला संसार.||५||
पण तुम दरिशन जोगथी, थयो हृदये हो अनुभव प्रकाश;
भव अभ्यासी करे, दुःखदायी हो सहु कर्म विनाश.||६||
कर्म कलंक निवारीने, निज रुपे हो रमे रमताराम;
लहत अपूरव भावथी, ईण रीते हो तुम पद विशराम.||७||
त्रिकरण जोगे विनवुं, सुखदायी हो शिवादेवीना नंद;
“चिदानंद’ मनमें सदा, तुमे आवो हो प्रभु नाणदिणंद.||८||`,
      sa: "",
      en: `Paramaatama pooranakalaa, poorana guna ho poorana jana aasha;
Poorana drushti nihaaleee, chitta dhareee ho amachee aradaasa.||1||
Sarva deshaghaatee sahun, aghaatee ho karee ghaata dayaala;
Vaasa kiyo shivamandire, mohe veesaree ho bhamato jagajaala.||2||
Jagataaraka padavee lahee, taaryaa sahee ho aparaadhee apaara;
Taata kaho mohe taarataan, kima kinee ho eena avasara vaara.||3||
Moha mahaamada chhaakathee, hun chhakeeo ho nahi shuddhi lagaara;
Uchita sahi eene avasare, sevakanee ho karavee sanbhaa.||4||
Moha jo taarasho, tina velaa ho kihaan tuma upagaara;
Sukha velaa sajjana ghanaa, dukha velaa ho viralaa sansaara.||5||
Pana tuma darishana jogathee, thayo hrudaye ho anubhava prakaasha;
Bhava abhyaasee kare, dukhadaayee ho sahu karma vinaasha.||6||
Karma kalanka nivaareene, nija rupe ho rame ramataaraama;
Lahata apoorava bhaavathee, eena reete ho tuma pada visharaama.||7||
Trikarana joge vinavun, sukhadaayee ho shivaadeveenaa nanda;
“chidaananda’ manamen sadaa, tume aavo ho prabhu naanadinanda.||8||`,
    },
  },
  {
    id: "parmeshwar-parmatma",
    type: "bhajan",
    title: {
      gu: "પરમેશ્વર પરમાતમા, પાવન પરમિટ્ટુ",
      hi: "परमेश्वर परमातमा, पावन परमिट्टु",
      sa: "",
      en: "Parmeshwar Parmatma",
    },
    text: {
      gu: `પરમેશ્વર પરમાતમા, પાવન પરમિટ્ટુ;
જય જગગુરુ દેવાધિદેવ, નયણે મેં દિટ્ટુ.||૧||
અચલ અકલ અવિકાર સાર, કરુણારસ સિંધુ;
જગતિ જન આધાર એક, નિષ્કારણ બંધુ.||૨||
ગુણ અનંત પ્રભુ તાહરા એ, કિમહિ કહ્યાં ન જાય;
“રામ” પ્રભુ જિન ધ્યાનથી, ચિદાનંદ સુખ થાય.||૩||`,
      hi: `परमेश्वर परमातमा, पावन परमिट्टु;
जय जगगुरु देवाधिदेव, नयणे में दिट्टु.||१||
अचल अकल अविकार सार, करुणारस सिंधु;
जगति जन आधार एक, निष्कारण बंधु.||२||
गुण अनंत प्रभु ताहरा ए, किमहि कह्यां न जाय;
“राम” प्रभु जिन ध्यानथी, चिदानंद सुख थाय.||३||`,
      sa: "",
      en: `Parameshvara paramaatamaa, paavana paramittu;
Jaya jagaguru devaadhideva, nayane men dittu.||1||
Achala akala avikaara saara, karunaarasa sindhu;
Jagati jana aadhaara eka, nishkaarana bandhu.||2||
Guna ananta prabhu taaharaa e, kimahi kahyaan na jaaya;
“raama” prabhu jina dhyaanathee, chidaananda sukha thaaya.||3||`,
    },
  },
  {
    id: "parshwa-jin-tahara-rupnu",
    type: "bhajan",
    title: {
      gu: "પાર્શ્વ જિન! તાહરા રુપનું, મુજ પ્રતિભાસ કેમ હોય રે",
      hi: "पार्श्व जिन! ताहरा रुपनुं, मुज प्रतिभास केम होय रे",
      sa: "",
      en: "Parshwa Jin Tahara Rupnu",
    },
    text: {
      gu: `પાર્શ્વ જિન! તાહરા રુપનું, મુજ પ્રતિભાસ કેમ હોય રે;
તુજ મુજ સત્તા એકતા, અચલ વિમલ અકલ જોય રે;||૧||
તુજ પ્રવચન પ્રત્યક્ષ, નિશ્ચયે ભેદ નહિ કોય રે;
વ્યવહારે લળી દેખીએ, ભેદ પ્રતિભેદ બહુ જોય રે;||૨||
બંધ નહિ મોક્ષ નહિ નિશ્ચયે, વ્યવહારે ભજ હોય રે;
અબાધિત સોય કદા, નિત્ય અબાધિત સોય રે.||૩||
અન્વય-હેતુ વ્યતિરેકથી, અંતરો તુજ મુજ રૂપ રે;
અંતરો મેટવા કારણે, આતમસ્વરુપ અનૂપ રે.||૪||
આતમ પરમાત્મા, શુદ્ધ નય ભેદ નહિ એક રે;
અવર આરોપિત ધર્મ છે, તેહના ભેદ અનેક રે.||૫||
ધરમી ધરમથી એકતા, તે મુજ રૂપ અભેદ રે;
એક સત્તા લખ એકતા, કહે તે ગૂઢમતિ ખેદ રે.||૬||
આતમ ધરમ અનુસરી, રમે જે આતમરામ રે;
‘આનંદઘન’ પદવી લહે, પરમ આતમ તસ નામ રે.||૭||`,
      hi: `पार्श्व जिन! ताहरा रुपनुं, मुज प्रतिभास केम होय रे;
तुज मुज सत्ता एकता, अचल विमल अकल जोय रे;||१||
तुज प्रवचन प्रत्यक्ष, निश्चये भेद नहि कोय रे;
व्यवहारे लळी देखीए, भेद प्रतिभेद बहु जोय रे;||२||
बंध नहि मोक्ष नहि निश्चये, व्यवहारे भज होय रे;
अबाधित सोय कदा, नित्य अबाधित सोय रे.||३||
अन्वय-हेतु व्यतिरेकथी, अंतरो तुज मुज रूप रे;
अंतरो मेटवा कारणे, आतमस्वरुप अनूप रे.||४||
आतम परमात्मा, शुद्ध नय भेद नहि एक रे;
अवर आरोपित धर्म छे, तेहना भेद अनेक रे.||५||
धरमी धरमथी एकता, ते मुज रूप अभेद रे;
एक सत्ता लख एकता, कहे ते गूढमति खेद रे.||६||
आतम धरम अनुसरी, रमे जे आतमराम रे;
‘आनंदघन’ पदवी लहे, परम आतम तस नाम रे.||७||`,
      sa: "",
      en: `Paarshva jina! taaharaa rupanun, muja pratibhaasa kema hoya re;
Tuja muja sattaa ekataa, achala vimala akala joya re;||1||
Tuja pravachana pratyaksha, nishchaye bheda nahi koya re;
Vyavahaare lalee dekheee, bheda pratibheda bahu joya re;||2||
Bandha nahi moksha nahi nishchaye, vyavahaare bhaja hoya re;
Abaadhita soya kadaa, nitya abaadhita soya re.||3||
Anvaya-hetu vyatirekathee, antaro tuja muja roopa re;
Antaro metavaa kaarane, aatamasvarupa anoopa re.||4||
Aatama paramaatmaa, shuddha naya bheda nahi eka re;
Avara aaropita dharma chhe, tehanaa bheda aneka re.||5||
Dharamee dharamathee ekataa, te muja roopa abheda re;
Eka sattaa lakha ekataa, kahe te goodhamati kheda re.||6||
Aatama dharama anusaree, rame je aatamaraama re;
‘aanandaghana’ padavee lahe, parama aatama tasa naama re.||7||`,
    },
  },
  {
    id: "parshwa-jinanda-vamaji-ke-nanada",
    type: "bhajan",
    title: {
      gu: "પાર્શ્વ જિણંદા વામાજી કે નંદા, તુમ પર વારી જાઉં બોલ બોલ રે",
      hi: "पार्श्व जिणंदा वामाजी के नंदा, तुम पर वारी जाउं बोल बोल रे",
      sa: "",
      en: "Parshwa Jinanda Vamaji Ke Nanada",
    },
    text: {
      gu: `પાર્શ્વ જિણંદા વામાજી કે નંદા, તુમ પર વારી જાઉં બોલ બોલ રે,
હાંરે! દરવાજા તેરા ખોલ ખોલ રે.॥੧॥
દૂર દૂર સે લંબી સફર સે,
હમ દરિશન આયે દોડ દોડ રે.॥२॥
પૂજા કરુંગા ધૂપ ધરુંગા,
ફૂલ ચઢાઉંગા મોલ મોલ રે. ॥३॥
તું મેરા ઠાકર મેં તેરા ચાકર,
એક બાર મુજ સે બોલ બોલ રે. ॥૪॥
શ્રી શંખેશ્વર મંડન સુંદર મૂરત,
મુખડું તે ઝાકમ ઝોલ ઝોલ રે. ॥૫॥
રુપ વિબુધનો “મોહન” પભણે,
રંગ લાગ્યો ચિત્ત ચોલ ચોલ રે. ।।૬।।`,
      hi: `पार्श्व जिणंदा वामाजी के नंदा, तुम पर वारी जाउं बोल बोल रे,
हांरे! दरवाजा तेरा खोल खोल रे.॥੧॥
दूर दूर से लंबी सफर से,
हम दरिशन आये दोड दोड रे.॥२॥
पूजा करुंगा धूप धरुंगा,
फूल चढाउंगा मोल मोल रे. ॥३॥
तुं मेरा ठाकर में तेरा चाकर,
एक बार मुज से बोल बोल रे. ॥४॥
श्री शंखेश्वर मंडन सुंदर मूरत,
मुखडुं ते झाकम झोल झोल रे. ॥५॥
रुप विबुधनो “मोहन” पभणे,
रंग लाग्यो चित्त चोल चोल रे. ।।६।।`,
      sa: "",
      en: `Paarshva jinandaa vaamaajee ke nandaa, tuma para vaaree jaaun bola bola re,
Haanre! daravaajaa teraa khola khola re.||1||
Doora doora se lanbee saphara se,
Hama darishana aaye doda doda re.||2||
Poojaa karungaa dhoopa dharungaa,
Phoola chadhaaungaa mola mola re. ||3||
Tun meraa thaakara men teraa chaakara,
Eka baara muja se bola bola re. ||4||
Shree shankheshvara mandana sundara moorata,
Mukhadun te jhaakama jhola jhola re. ||5||
Rupa vibudhano “mohana” pabhane,
Ranga laagyo chitta chola chola re. ||6||`,
    },
  },
  {
    id: "pas-shankeshwara-sar-kar-sevaka",
    type: "bhajan",
    title: {
      gu: "પાસ શંખેશ્વરા સાર કર સેવકા, દેવ! કાં એવડી વાર લાગે",
      hi: "पास शंखेश्वरा सार कर सेवका, देव! कां एवडी वार लागे",
      sa: "",
      en: "Pas Shankeshwara Sar Kar Sevaka",
    },
    text: {
      gu: `પાસ શંખેશ્વરા સાર કર સેવકા, દેવ! કાં એવડી વાર લાગે;
કોડી કર જોડી દરબાર આગે ખડા, ઠાકુરા ચાકુરા માન માંગે. ।।૧ ।।
પ્રગટ થા પાસજી મેલી પડદો પર, મોડ અસુરાણને આપ છોડો;
મુજ મહીરાણ મંજૂષમાં પેસીને, ખલકના નાથજી બંધ ખોલો. ।। ૨ ।।
જગતમાં દેવ! જગદીશ તું જાગતો, એમ શું આજ જિનરાજ! ઊંઘે?
મોટા દાનેશ્વરી તેહને દાખીએ, દાનદે જેહ જગકાલ મોંઘે. ॥૩॥
ભીડ પડી જાદવા જોર લાગી જરા, તત્ક્ષણ ત્રિકમે તુજ સંભાર્યો;
પ્રગટ પાતાલથી પલકમાં તે પ્રભુ,ભક્તજન તેહનો ભય નિવાર્યો. ।૪।।
આદિ અનાદિ અરિહંત તું એક છે, દીનદયાળ છે કોણ દૂજો?
‘ઉદયરત્ન’ કહે પ્રગટ પ્રભુ પાસજી,
પામી ભયભંજનો એહ પૂજ. ॥૫॥`,
      hi: `पास शंखेश्वरा सार कर सेवका, देव! कां एवडी वार लागे;
कोडी कर जोडी दरबार आगे खडा, ठाकुरा चाकुरा मान मांगे. ।।१ ।।
प्रगट था पासजी मेली पडदो पर, मोड असुराणने आप छोडो;
मुज महीराण मंजूषमां पेसीने, खलकना नाथजी बंध खोलो. ।। २ ।।
जगतमां देव! जगदीश तुं जागतो, एम शुं आज जिनराज! ऊंघे?
मोटा दानेश्वरी तेहने दाखीए, दानदे जेह जगकाल मोंघे. ॥३॥
भीड पडी जादवा जोर लागी जरा, तत्क्षण त्रिकमे तुज संभार्यो;
प्रगट पातालथी पलकमां ते प्रभु,भक्तजन तेहनो भय निवार्यो. ।४।।
आदि अनादि अरिहंत तुं एक छे, दीनदयाळ छे कोण दूजो?
‘उदयरत्न’ कहे प्रगट प्रभु पासजी,
पामी भयभंजनो एह पूज. ॥५॥`,
      sa: "",
      en: `Paasa shankheshvaraa saara kara sevakaa, deva! kaan evadee vaara laage;
Kodee kara jodee darabaara aage khadaa, thaakuraa chaakuraa maana maange. ||1 ||
Pragata thaa paasajee melee padado para, moda asuraanane aapa chhodo;
Muja maheeraana manjooshamaan peseene, khalakanaa naathajee bandha kholo. || 2 ||
Jagatamaan deva! jagadeesha tun jaagato, ema shun aaja jinaraaja! oonghe?
Motaa daaneshvaree tehane daakheee, daanade jeha jagakaala monghe. ||3||
Bheeda padee jaadavaa jora laagee jaraa, tatkshana trikame tuja sanbhaaryo;
Pragata paataalathee palakamaan te prabhu,bhaktajana tehano bhaya nivaaryo. |4||
Aadi anaadi arihanta tun eka chhe, deenadayaala chhe kona doojo?
‘udayaratna’ kahe pragata prabhu paasajee,
Paamee bhayabhanjano eha pooja. ||5||`,
    },
  },
  {
    id: "payoji-mene-tero-darshan",
    type: "bhajan",
    title: {
      gu: "પાયોજી! મૈંને તેરો દરિશન પાયો… પાયોજી! મેંને… ॥१॥",
      hi: "पायोजी! मैंने तेरो दरिशन पायो… पायोजी! मेंने… ॥१॥",
      sa: "",
      en: "Payoji Mene Tero Darshan",
    },
    text: {
      gu: `પાયોજી! મૈંને તેરો દરિશન પાયો… પાયોજી! મેંને… ॥१॥
દરિશન કરકે દિલડું હરખ્યું, સુખ સાગર ઉલસાયો. ॥२॥
ભાગ ઉદય હુઓ આજ સે મેરો, રત્નચિંતામણિ પાયો.॥३॥
હાથ જોડી કરું સાહિબ મેરો, લાખ ચોરાસી મિટાયો. ॥४॥
આપ તરે ઓરન કો તારો, ‘આનંદઘન’ પદ પાયો. ||૫||`,
      hi: `पायोजी! मैंने तेरो दरिशन पायो… पायोजी! मेंने… ॥१॥
दरिशन करके दिलडुं हरख्युं, सुख सागर उलसायो. ॥२॥
भाग उदय हुओ आज से मेरो, रत्नचिंतामणि पायो.॥३॥
हाथ जोडी करुं साहिब मेरो, लाख चोरासी मिटायो. ॥४॥
आप तरे ओरन को तारो, ‘आनंदघन’ पद पायो. ||५||`,
      sa: "",
      en: `Paayojee! mainne tero darishana paayo… paayojee! menne… ||1||
Darishana karake diladun harakhyun, sukha saagara ulasaayo. ||2||
Bhaaga udaya huo aaja se mero, ratnachintaamani paayo.||3||
Haatha jodee karun saahiba mero, laakha choraasee mitaayo. ||4||
Aapa tare orana ko taaro, ‘aanandaghana’ pada paayo. ||5||`,
    },
  },
  {
    id: "prabhate-uthi-karu-vandana-re",
    type: "bhajan",
    title: {
      gu: "પ્રભાતે ઊઠી કરું વંદના રે, પ્રભાતે ઊઠી કરું વંદના રે",
      hi: "प्रभाते ऊठी करुं वंदना रे, प्रभाते ऊठी करुं वंदना रे",
      sa: "",
      en: "Prabhate Uthi Karu Vandana Re",
    },
    text: {
      gu: `પ્રભાતે ઊઠી કરું વંદના રે, પ્રભાતે ઊઠી કરું વંદના રે;
બે કર જોડીને વિનવું રે, મારી વિનતડી અવધાર રે;
તમે મહાવિદેહમાં વસ્યા રે, અમને છે તુમ આધાર રે.||૧||
ભરતક્ષેત્રમાં અવતર્યો રે, કેમ કરી આવું હજૂર રે;
તુમ દર્શન નવિ પામિયો રે, રહ્યો મજૂરનો મજૂર રે.||૨||
તુમ પાસે દેવ ઘણા વસે રે, એક મોકલજો મહારાજ રે;
મનનો સંદેહ પ્રભુ! પૂછીને રે, કરું સફળ દિન આજ રે.||૩||
કેવલજ્ઞાનીના વિરહથી રે, મનુષ્ય જન્મ એળે જાય રે;
શુભભાવ આવે નહીં રે, શી ગતિ માહરી થાય રે.||૪||
કર્મને મોહે ખૂબ કશ્યો રે, હજુ ન થયો ખુલાશ રે;
જેમ તેમ કરી પ્રભુ તારજો રે, હું તો ઘરું તમારી આશ રે.||૫||
સીમંધરસ્વામીના નામથી રે, થાય સફલ અવતાર રે;
“ઉદયરતન’ એમ વિનવે રે, પ્રભુ નામે જય જયકાર રે.||૬||`,
      hi: `प्रभाते ऊठी करुं वंदना रे, प्रभाते ऊठी करुं वंदना रे;
बे कर जोडीने विनवुं रे, मारी विनतडी अवधार रे;
तमे महाविदेहमां वस्या रे, अमने छे तुम आधार रे.||१||
भरतक्षेत्रमां अवतर्यो रे, केम करी आवुं हजूर रे;
तुम दर्शन नवि पामियो रे, रह्यो मजूरनो मजूर रे.||२||
तुम पासे देव घणा वसे रे, एक मोकलजो महाराज रे;
मननो संदेह प्रभु! पूछीने रे, करुं सफळ दिन आज रे.||३||
केवलज्ञानीना विरहथी रे, मनुष्य जन्म एळे जाय रे;
शुभभाव आवे नहीं रे, शी गति माहरी थाय रे.||४||
कर्मने मोहे खूब कश्यो रे, हजु न थयो खुलाश रे;
जेम तेम करी प्रभु तारजो रे, हुं तो घरुं तमारी आश रे.||५||
सीमंधरस्वामीना नामथी रे, थाय सफल अवतार रे;
“उदयरतन’ एम विनवे रे, प्रभु नामे जय जयकार रे.||६||`,
      sa: "",
      en: `Prabhaate oothee karun vandanaa re, prabhaate oothee karun vandanaa re;
Be kara jodeene vinavun re, maaree vinatadee avadhaara re;
Tame mahaavidehamaan vasyaa re, amane chhe tuma aadhaara re.||1||
Bharatakshetramaan avataryo re, kema karee aavun hajoora re;
Tuma darshana navi paamiyo re, rahyo majoorano majoora re.||2||
Tuma paase deva ghanaa vase re, eka mokalajo mahaaraaja re;
Manano sandeha prabhu! poochheene re, karun saphala dina aaja re.||3||
Kevalajnyaaneenaa virahathee re, manushya janma ele jaaya re;
Shubhabhaava aave naheen re, shee gati maaharee thaaya re.||4||
Karmane mohe khooba kashyo re, haju na thayo khulaasha re;
Jema tema karee prabhu taarajo re, hun to gharun tamaaree aasha re.||5||
Seemandharasvaameenaa naamathee re, thaaya saphala avataara re;
“udayaratana’ ema vinave re, prabhu naame jaya jayakaara re.||6||`,
    },
  },
  {
    id: "prabhu-jagjivan-jagbandhu-re-gujarti",
    type: "bhajan",
    title: {
      gu: "પ્રભુ જગજીવન જગબંધુ રે, સાંઈ સયાણો રે…!",
      hi: "प्रभु जगजीवन जगबंधु रे, सांई सयाणो रे…!",
      sa: "",
      en: "Prabhu Jagjivan Jagbandhu Re Gujarti",
    },
    text: {
      gu: `પ્રભુ જગજીવન જગબંધુ રે, સાંઈ સયાણો રે…!
તારી મુદ્રાએ મન મોહ્યું રે, જૂઠ ન જાણો…! રે..!||૧||
તું પરમાતમ! તું પુરુષોત્તમ! વાલા મારા તું પરબ્રહ્મ સ્વરુપી રે;
સિદ્ધિ સાધક સિદ્ધાંત સનાતન, તું ત્રિહું ભાવ પ્રરુપી રે.||૨||
તાહરી પ્રભુતા ત્રિહું જગ પણ મુજ પ્રભુતા મોટી રે;
તુજ સરીખો માહરે મહારાજા, માહરે કાંઈ નહીં ખોટ રે.||૩||
તું નિરદ્રવ્ય પરમપદ વાસી, વા૦ હું તો દ્રવ્યનો ભોગી રે;
તું નિર્ગુણ હું તો ગુણધારી, કર્મી તું અભોગી રે.||૪||
તું તો અરુપી ને હું રુપી, વા૦ હું રાગી તું નિરાગી રે;
તું નિરવિષ હું તો વિષધારી, હું સંગ્રહી તું ત્યાગી રે.||૫||
તાહરે રાજ નથી કોઇ એકે, વા૦ ચૌદરાજ છે માહરે રે;
માહરી લીલા આગળ જોતાં, અધિકું શું છે તાહરે?||૬||
પણ તું મોટો ને હું છોટો, વા૦ ફોગટ ફૂલ્યે શું થાય રે;
ખમજો એ અપરાધ અમારો, ભક્તિ વશે કહેવાય રે.||૭||
વામાનંદન, વા૦ ઉભાં ઓલગ કીજે;
રૂપ વિબુધનો “મોહન” પભણે, ચરણોની સેવા દીજે રે.||૮||`,
      hi: `प्रभु जगजीवन जगबंधु रे, सांई सयाणो रे…!
तारी मुद्राए मन मोह्युं रे, जूठ न जाणो…! रे..!||१||
तुं परमातम! तुं पुरुषोत्तम! वाला मारा तुं परब्रह्म स्वरुपी रे;
सिद्धि साधक सिद्धांत सनातन, तुं त्रिहुं भाव प्ररुपी रे.||२||
ताहरी प्रभुता त्रिहुं जग पण मुज प्रभुता मोटी रे;
तुज सरीखो माहरे महाराजा, माहरे कांई नहीं खोट रे.||३||
तुं निरद्रव्य परमपद वासी, वा० हुं तो द्रव्यनो भोगी रे;
तुं निर्गुण हुं तो गुणधारी, कर्मी तुं अभोगी रे.||४||
तुं तो अरुपी ने हुं रुपी, वा० हुं रागी तुं निरागी रे;
तुं निरविष हुं तो विषधारी, हुं संग्रही तुं त्यागी रे.||५||
ताहरे राज नथी कोइ एके, वा० चौदराज छे माहरे रे;
माहरी लीला आगळ जोतां, अधिकुं शुं छे ताहरे?||६||
पण तुं मोटो ने हुं छोटो, वा० फोगट फूल्ये शुं थाय रे;
खमजो ए अपराध अमारो, भक्ति वशे कहेवाय रे.||७||
वामानंदन, वा० उभां ओलग कीजे;
रूप विबुधनो “मोहन” पभणे, चरणोनी सेवा दीजे रे.||८||`,
      sa: "",
      en: `Prabhu jagajeevana jagabandhu re, saanee sayaano re…!
Taaree mudraae mana mohyun re, jootha na jaano…! re..!||1||
Tun paramaatama! tun purushottama! vaalaa maaraa tun parabrahma svarupee re;
Siddhi saadhaka siddhaanta sanaatana, tun trihun bhaava prarupee re.||2||
Taaharee prabhutaa trihun jaga pana muja prabhutaa motee re;
Tuja sareekho maahare mahaaraajaa, maahare kaanee naheen khota re.||3||
Tun niradravya paramapada vaasee, vaa0 hun to dravyano bhogee re;
Tun nirguna hun to gunadhaaree, karmee tun abhogee re.||4||
Tun to arupee ne hun rupee, vaa0 hun raagee tun niraagee re;
Tun niravisha hun to vishadhaaree, hun sangrahee tun tyaagee re.||5||
Taahare raaja nathee koi eke, vaa0 chaudaraaja chhe maahare re;
Maaharee leelaa aagala jotaan, adhikun shun chhe taahare?||6||
Pana tun moto ne hun chhoto, vaa0 phogata phoolye shun thaaya re;
Khamajo e aparaadha amaaro, bhakti vashe kahevaaya re.||7||
Vaamaanandana, vaa0 ubhaan olaga keeje;
Roopa vibudhano “mohana” pabhane, charanonee sevaa deeje re.||8||`,
    },
  },
  {
    id: "prabhu-malli-jinand-shanti-aapjo",
    type: "bhajan",
    title: {
      gu: "પ્રભુ મલ્લિ જિણંદ શાંતિ આપજો, કાપજો મારા ભવોદધિના પાપ રે",
      hi: "प्रभु मल्लि जिणंद शांति आपजो, कापजो मारा भवोदधिना पाप रे",
      sa: "",
      en: "Prabhu Malli Jinand Shanti Aapjo",
    },
    text: {
      gu: `પ્રભુ મલ્લિ જિણંદ શાંતિ આપજો, કાપજો મારા ભવોદધિના પાપ રે;
દયાળુ દેવા! મલ્લિ જિણંદ શાંતિ આપજો…||૧||
વીતરાગ દેવને વંદું સદા,
બાળ બ્રહ્મચારી જગ વિખ્યાત રે.||૨||
અચલ અમલ ને અકલ તું,
કષાય મોહ નથી લવ લેશ રે.||૩||
સર્પ ડસ્યો છે મને ક્રોધનો,
રગે રગે વ્યાપ્યું તેનું વિષ રે.||૪||
માન પત્થર સ્તંભ સારીખો,
મને કીધો તેણે જડવાન રે. ॥૫॥
માયા ડાકણ વળગી મને,
આપ વિના કોણ છોડાવનહાર રે. ।।૬।|
લોભ સાગરમાં હું પડ્યો,
ઊભગ્યો છું ભવદુઃખ અપાર રે. ॥७॥
આપ શરણે હવે આવીયો,
રક્ષણ કરો મુજ જગનાથ રે.||૮||
અરજ સ્વીકારી આ દાસની,
‘જ્ઞાનવિમલ”લેજો બાળ હાથરે. ॥૯॥`,
      hi: `प्रभु मल्लि जिणंद शांति आपजो, कापजो मारा भवोदधिना पाप रे;
दयाळु देवा! मल्लि जिणंद शांति आपजो…||१||
वीतराग देवने वंदुं सदा,
बाळ ब्रह्मचारी जग विख्यात रे.||२||
अचल अमल ने अकल तुं,
कषाय मोह नथी लव लेश रे.||३||
सर्प डस्यो छे मने क्रोधनो,
रगे रगे व्याप्युं तेनुं विष रे.||४||
मान पत्थर स्तंभ सारीखो,
मने कीधो तेणे जडवान रे. ॥५॥
माया डाकण वळगी मने,
आप विना कोण छोडावनहार रे. ।।६।|
लोभ सागरमां हुं पड्यो,
ऊभग्यो छुं भवदुःख अपार रे. ॥७॥
आप शरणे हवे आवीयो,
रक्षण करो मुज जगनाथ रे.||८||
अरज स्वीकारी आ दासनी,
‘ज्ञानविमल”लेजो बाळ हाथरे. ॥९॥`,
      sa: "",
      en: `Prabhu malli jinanda shaanti aapajo, kaapajo maaraa bhavodadhinaa paapa re;
Dayaalu devaa! malli jinanda shaanti aapajo…||1||
Veetaraaga devane vandun sadaa,
Baala brahmachaaree jaga vikhyaata re.||2||
Achala amala ne akala tun,
Kashaaya moha nathee lava lesha re.||3||
Sarpa dasyo chhe mane krodhano,
Rage rage vyaapyun tenun visha re.||4||
Maana patthara stanbha saareekho,
Mane keedho tene jadavaana re. ||5||
Maayaa daakana valagee mane,
Aapa vinaa kona chhodaavanahaara re. ||6||
Lobha saagaramaan hun padyo,
Oobhagyo chhun bhavadukha apaara re. ||7||
Aapa sharane have aaveeyo,
Rakshana karo muja jaganaatha re.||8||
Araja sveekaaree aa daasanee,
‘jnyaanavimala”lejo baala haathare. ||9||`,
    },
  },
  {
    id: "prabhu-mere-aisi-aay-bani",
    type: "bhajan",
    title: {
      gu: "પ્રભુ મેરે ઐસી આય બની",
      hi: "प्रभु मेरे ऐसी आय बनी",
      sa: "",
      en: "Prabhu Mere Aisi Aay Bani",
    },
    text: {
      gu: `પ્રભુ મેરે ઐસી આય બની;
મનકી વ્યથા કુનપે કહિયે, જાનો આપ ધણી.  પ્રભુ0।। ૧ ।।
જનમ મરણ જરા જીઉ ગઈ લહઈ,વિલગી વિપત્તિ ઘણી;
તન મન નયન લહે દુઃખ દેખત, સુખ નવિ એક કણ.  પ્રભુ0|| 2।।
ચિત્ત દુભઈ દુરજનકે બકના, જૈસે અરિ અગની;
સજ્જન હૈ કોઈ નહિ જાકે આગે, બાત કહું અપની. પ્રભુ0||3||
ચઉ ગઈ ગમન ભ્રમણ દુઃખ વારો, બિનતી યેહી સુણી;
અવિચલ સંપદ ‘જસકું’ દીજે, અપનો દાસ ભણી.  પ્રભુ૦િ।।૪ ।।`,
      hi: `प्रभु मेरे ऐसी आय बनी;
मनकी व्यथा कुनपे कहिये, जानो आप धणी.  प्रभु0।। १ ।।
जनम मरण जरा जीउ गई लहई,विलगी विपत्ति घणी;
तन मन नयन लहे दुःख देखत, सुख नवि एक कण.  प्रभु0|| 2।।
चित्त दुभई दुरजनके बकना, जैसे अरि अगनी;
सज्जन है कोई नहि जाके आगे, बात कहुं अपनी. प्रभु0||3||
चउ गई गमन भ्रमण दुःख वारो, बिनती येही सुणी;
अविचल संपद ‘जसकुं’ दीजे, अपनो दास भणी.  प्रभु०ि।।४ ।।`,
      sa: "",
      en: `Prabhu mere aisee aaya banee;
Manakee vyathaa kunape kahiye, jaano aapa dhanee. prabhu0|| 1 ||
Janama marana jaraa jeeu gaee lahaee,vilagee vipatti ghanee;
Tana mana nayana lahe dukha dekhata, sukha navi eka kana. prabhu0|| 2||
Chitta dubhaee durajanake bakanaa, jaise ari aganee;
Sajjana hai koee nahi jaake aage, baata kahun apanee. prabhu0||3||
Chau gaee gamana bhramana dukha vaaro, binatee yehee sunee;
Avichala sanpada ‘jasakun’ deeje, apano daasa bhanee. prabhu0િ||4 ||`,
    },
  },
  {
    id: "prabhu-parshwa-jinand-sada-namiye",
    type: "bhajan",
    title: {
      gu: "પ્રભુ પાર્શ્વ જિણંદ સદા નમીએ (૨)",
      hi: "प्रभु पार्श्व जिणंद सदा नमीए (२)",
      sa: "",
      en: "Prabhu Parshwa Jinand Sada Namiye",
    },
    text: {
      gu: `પ્રભુ પાર્શ્વ જિણંદ સદા નમીએ (૨),
પ્રભુકે ચરણ કમલ રસ લીને, મધુકર જ્યું હુઈકે રમીએ. ॥१॥
નિરખી વદન શશી જિનવર કો,
નિશી વાસર સુખ મેં ગમીએ. ॥૨॥
ઉજ્જવળ ગુણસ્મરણ ચિત્ત લહીએ,
કબહું ન ભવસાગર ભમીએ. ।|૩।|
સમતા રસ મેં ઝીલીજે,
રાગ દ્વેષ કો ઉપશમીએ. ॥४॥
કહે જિનહર્ષ મુગતિ સુખ લહીએ,
કઠીન કરમ નિજ અપક્રમીએ. ॥૫॥`,
      hi: `प्रभु पार्श्व जिणंद सदा नमीए (२),
प्रभुके चरण कमल रस लीने, मधुकर ज्युं हुईके रमीए. ॥१॥
निरखी वदन शशी जिनवर को,
निशी वासर सुख में गमीए. ॥२॥
उज्जवळ गुणस्मरण चित्त लहीए,
कबहुं न भवसागर भमीए. ।|३।|
समता रस में झीलीजे,
राग द्वेष को उपशमीए. ॥४॥
कहे जिनहर्ष मुगति सुख लहीए,
कठीन करम निज अपक्रमीए. ॥५॥`,
      sa: "",
      en: `Prabhu paarshva jinanda sadaa nameee (2),
Prabhuke charana kamala rasa leene, madhukara jyun hueeke rameee. ||1||
Nirakhee vadana shashee jinavara ko,
Nishee vaasara sukha men gameee. ||2||
Ujjavala gunasmarana chitta laheee,
Kabahun na bhavasaagara bhameee. ||3||
Samataa rasa men jheeleeje,
Raaga dvesha ko upashameee. ||4||
Kahe jinaharsha mugati sukha laheee,
Katheena karama nija apakrameee. ||5||`,
    },
  },
  {
    id: "prabhu-taro-tyag-na-pamiye",
    type: "bhajan",
    title: {
      gu: "પ્રભુ! તાહરો તાગ ન પામીએ, ગુણ-દરિયો ઊંડો અગાધ હો",
      hi: "प्रभु! ताहरो ताग न पामीए, गुण-दरियो ऊंडो अगाध हो",
      sa: "",
      en: "Prabhu Taro Tyag Na Pamiye",
    },
    text: {
      gu: `પ્રભુ! તાહરો તાગ ન પામીએ, ગુણ-દરિયો ઊંડો અગાધ હો;
ક્યાંયે દિલનો દિલાસો ના મળે, કોઈ બક્ષે નહિ અપરાધ હો. ।।૧।।
મુજ મનનો માનીતો તું પ્રભુ, નિસનેહી ઘણું નિરલેપ હો;
પ્રીતિ તો કિમ હી ન પાલટે, જો કીજે ક્રોડ આક્ષેપ હો. ||૨||
જે ભજતાં ભાવ ધરે નહિ, કિમ ભજીએ તેહ ઉલ્લાસ હો;
ન્યારાશું પ્યાર કીજે કિશ્યો, પણ મેલે નહિ મન આશહો.||૩||
જાણ આગે જણાવીએ, અમ વિનતડી વીતરાગ હો;
શું ઘણું આપ વખાણીએ,
એક તુજશું મુજ મન રાગ હો. પ્રભુ૦ ।।૪ ।।
તારી મહેર નજર વિના, મુજ સેવા સફળ ન હોય હો;
જો સહેજે તમે સામું જુઓ તો, મુજને ગંજે ન કોય હો. પ્રભુ૦।।૫।|
ત્રિભુવનમાં તુજ વિણ સહી, શિર કેહને ન નમું સ્વામી હો;
ઓલગડી શ્રી અરનાથની, અવસરે આવશે કામ હો.||૬||
જાણું છું વીશવાવીશ સહી, મુજ આશા ફળશે નેટ હો;
પ્રભુ૦ા૬।। ‘ઉદયરત્ન’ વદે,
તુજ ચરણની ભવોભવ ભેટ હો. પ્રભુ૦।।૭।।`,
      hi: `प्रभु! ताहरो ताग न पामीए, गुण-दरियो ऊंडो अगाध हो;
क्यांये दिलनो दिलासो ना मळे, कोई बक्षे नहि अपराध हो. ।।१।।
मुज मननो मानीतो तुं प्रभु, निसनेही घणुं निरलेप हो;
प्रीति तो किम ही न पालटे, जो कीजे क्रोड आक्षेप हो. ||२||
जे भजतां भाव धरे नहि, किम भजीए तेह उल्लास हो;
न्याराशुं प्यार कीजे किश्यो, पण मेले नहि मन आशहो.||३||
जाण आगे जणावीए, अम विनतडी वीतराग हो;
शुं घणुं आप वखाणीए,
एक तुजशुं मुज मन राग हो. प्रभु० ।।४ ।।
तारी महेर नजर विना, मुज सेवा सफळ न होय हो;
जो सहेजे तमे सामुं जुओ तो, मुजने गंजे न कोय हो. प्रभु०।।५।|
त्रिभुवनमां तुज विण सही, शिर केहने न नमुं स्वामी हो;
ओलगडी श्री अरनाथनी, अवसरे आवशे काम हो.||६||
जाणुं छुं वीशवावीश सही, मुज आशा फळशे नेट हो;
प्रभु०ा६।। ‘उदयरत्न’ वदे,
तुज चरणनी भवोभव भेट हो. प्रभु०।।७।।`,
      sa: "",
      en: `Prabhu! taaharo taaga na paameee, guna-dariyo oondo agaadha ho;
Kyaanye dilano dilaaso naa male, koee bakshe nahi aparaadha ho. ||1||
Muja manano maaneeto tun prabhu, nisanehee ghanun niralepa ho;
Preeti to kima hee na paalate, jo keeje kroda aakshepa ho. ||2||
Je bhajataan bhaava dhare nahi, kima bhajeee teha ullaasa ho;
Nyaaraashun pyaara keeje kishyo, pana mele nahi mana aashaho.||3||
Jaana aage janaaveee, ama vinatadee veetaraaga ho;
Shun ghanun aapa vakhaaneee,
Eka tujashun muja mana raaga ho. prabhu0 ||4 ||
Taaree mahera najara vinaa, muja sevaa saphala na hoya ho;
Jo saheje tame saamun juo to, mujane ganje na koya ho. prabhu0||5||
Tribhuvanamaan tuja vina sahee, shira kehane na namun svaamee ho;
Olagadee shree aranaathanee, avasare aavashe kaama ho.||6||
Jaanun chhun veeshavaaveesha sahee, muja aashaa phalashe neta ho;
Prabhu0ા6|| ‘udayaratna’ vade,
Tuja charananee bhavobhava bheta ho. prabhu0||7||`,
    },
  },
  {
    id: "prabhu-tere-nayan-ki-balihari",
    type: "bhajan",
    title: {
      gu: "પ્રભુ! તેરે નયન કી બલિહારી…..!!",
      hi: "प्रभु! तेरे नयन की बलिहारी…..!!",
      sa: "",
      en: "Prabhu Tere Nayan Ki Balihari",
    },
    text: {
      gu: `પ્રભુ! તેરે નયન કી બલિહારી…..!!
યાકી શોભા વિજીત તપસા, કમલ કરતું હૈ જલધારી;
વિધુકે શરણ ગયો મુખ અરિકે, વનર્થે ગગન હરિણ હારી.||૧||
સહજ હિ અંજન મંજુલ નિરખત, ખંજન ગર્વ દિયો દારી;
છિન લહી હૈ ચકોર કી શોભા, અગ્નિ ભખે સો દુઃખ ભારી. ।।૨।
ચંચલતા ગુણ લીયો મીનકો, અલિ જ્યું તારી હે કારી;
કહુ સુભગતા કેતિ ઈનક, મોહી સબ હી અમર નારી. ॥३॥
ઘુમત હૈ સમતા રસ માતે, જૈસે ગજવર મદવારી;
તીન ભુવન મેં નહીં કોઈ નીકો, અભિનંદન જિન અનુકારી. ।।૪।।
મેરે મન તો તું હી રુચક હૈ, પરે કોણ પર કી લારી;
તેરે નયનકી મેરે નયન મેં, “જશ’ કહે દીઓ છબી અવતારી. ॥૫॥`,
      hi: `प्रभु! तेरे नयन की बलिहारी…..!!
याकी शोभा विजीत तपसा, कमल करतुं है जलधारी;
विधुके शरण गयो मुख अरिके, वनर्थे गगन हरिण हारी.||१||
सहज हि अंजन मंजुल निरखत, खंजन गर्व दियो दारी;
छिन लही है चकोर की शोभा, अग्नि भखे सो दुःख भारी. ।।२।
चंचलता गुण लीयो मीनको, अलि ज्युं तारी हे कारी;
कहु सुभगता केति ईनक, मोही सब ही अमर नारी. ॥३॥
घुमत है समता रस माते, जैसे गजवर मदवारी;
तीन भुवन में नहीं कोई नीको, अभिनंदन जिन अनुकारी. ।।४।।
मेरे मन तो तुं ही रुचक है, परे कोण पर की लारी;
तेरे नयनकी मेरे नयन में, “जश’ कहे दीओ छबी अवतारी. ॥५॥`,
      sa: "",
      en: `Prabhu! tere nayana kee balihaaree…..!!
Yaakee shobhaa vijeeta tapasaa, kamala karatun hai jaladhaaree;
Vidhuke sharana gayo mukha arike, vanarthe gagana harina haaree.||1||
Sahaja hi anjana manjula nirakhata, khanjana garva diyo daaree;
Chhina lahee hai chakora kee shobhaa, agni bhakhe so dukha bhaaree. ||2|
Chanchalataa guna leeyo meenako, ali jyun taaree he kaaree;
Kahu subhagataa keti eenaka, mohee saba hee amara naaree. ||3||
Ghumata hai samataa rasa maate, jaise gajavara madavaaree;
Teena bhuvana men naheen koee neeko, abhinandana jina anukaaree. ||4||
Mere mana to tun hee ruchaka hai, pare kona para kee laaree;
Tere nayanakee mere nayana men, “jasha’ kahe deeo chhabee avataaree. ||5||`,
    },
  },
  {
    id: "prabhu-teri-murti-mohangarir",
    type: "bhajan",
    title: {
      gu: "પ્રભુ તેરી મૂરતિ મોહનગારી……… પ્રભુ તેરી…",
      hi: "प्रभु तेरी मूरति मोहनगारी……… प्रभु तेरी…",
      sa: "",
      en: "Prabhu Teri Murti Mohangarir",
    },
    text: {
      gu: `પ્રભુ તેરી મૂરતિ મોહનગારી……… પ્રભુ તેરી…
પદ્મપ્રભ જિન તેરે હી આગે, ઔર દેવ કી છબી હારી.||૧||
સમતા શીતલ ભરી દોય અખિયાં, કમલ પંખરીયા વારી;
આનન તે રાકા ચંદ સો રાજે, વાણી સુધારસ સારી.||૨||
લક્ષણ અંગભર્યો તન તેરો, સહસ્ત્ર અઠ્યોતર ધારી;
ભીતર ગુણ કો પાર ન આવે, જો કોઉ કહત બિચારી.||૩||
શશિ રવિ ગિરિ હરિ કો ગુણ લેઈ, નિરમિત ગાત્ર સંચારી;
વચન બુલંદ કહા સે આયો, એ અચરિજ મુજ ભારી.||૪||
યો ગુણ અનંત ભરી છબી પ્યારી, પરમ ધરમ હિતકારી;
કવિ ‘અમૃત’ કહે ચિત્ત અવધારી, બિસરત નહિ બિસારી.||૫||`,
      hi: `प्रभु तेरी मूरति मोहनगारी……… प्रभु तेरी…
पद्मप्रभ जिन तेरे ही आगे, और देव की छबी हारी.||१||
समता शीतल भरी दोय अखियां, कमल पंखरीया वारी;
आनन ते राका चंद सो राजे, वाणी सुधारस सारी.||२||
लक्षण अंगभर्यो तन तेरो, सहस्त्र अठ्योतर धारी;
भीतर गुण को पार न आवे, जो कोउ कहत बिचारी.||३||
शशि रवि गिरि हरि को गुण लेई, निरमित गात्र संचारी;
वचन बुलंद कहा से आयो, ए अचरिज मुज भारी.||४||
यो गुण अनंत भरी छबी प्यारी, परम धरम हितकारी;
कवि ‘अमृत’ कहे चित्त अवधारी, बिसरत नहि बिसारी.||५||`,
      sa: "",
      en: `Prabhu teree moorati mohanagaaree……… prabhu teree…
Padmaprabha jina tere hee aage, aura deva kee chhabee haaree.||1||
Samataa sheetala bharee doya akhiyaan, kamala pankhareeyaa vaaree;
Aanana te raakaa chanda so raaje, vaanee sudhaarasa saaree.||2||
Lakshana angabharyo tana tero, sahastra athyotara dhaaree;
Bheetara guna ko paara na aave, jo kou kahata bichaaree.||3||
Shashi ravi giri hari ko guna leee, niramita gaatra sanchaaree;
Vachana bulanda kahaa se aayo, e acharija muja bhaaree.||4||
Yo guna ananta bharee chhabee pyaaree, parama dharama hitakaaree;
Kavi ‘amruta’ kahe chitta avadhaaree, bisarata nahi bisaaree.||5||`,
    },
  },
  {
    id: "prabhu-tuj-darishan-madyo-alve",
    type: "bhajan",
    title: {
      gu: "પ્રભુ તુજ દરિશન મળીયો અલવે, મન થયું હવે મારું હળવે હળવે",
      hi: "प्रभु तुज दरिशन मळीयो अलवे, मन थयुं हवे मारुं हळवे हळवे",
      sa: "",
      en: "Prabhu Tuj Darishan Madyo Alve",
    },
    text: {
      gu: `પ્રભુ તુજ દરિશન મળીયો અલવે, મન થયું હવે મારું હળવે હળવે,
પુણ્યોદય એ મોટો મારો, અણચિંત્યો થયો દર્શન તારો;
સાહિબા અભિનંદન દેવા, મોહના અભિનંદન દેવા.||૧||
દેખત ખેવ હરી મન લીધું, કામણગારે કામણ કીધું;
મનડું જાય નહીં કોઈ પાસે, રાત-દિવસ રહે તાહરી પાસે.||૨||
પહેલા તો જાણ્યું હતું સોહિલું, પણ મોટાશું મળવું દોહિલું
સોહિલું મનડું વળગું, થાય નહિ હવે કીધું અળગું.||૩||
રુપ દેખાડી હોવે અરુપી, ગ્રહવાએ અકલ અરુપી;
તાહરી વાત જાણી ન જાયે, કહો મનડાની શી ગતિ થાયે.||૪||
પહેલા જાણી પછી કરે કિરિયા, તે પરમારથ સુખના દરિયા;
વસ્તુ અજાણે મન દોડાવે, તે તો મૂરખ બહુ પસ્તાવે.||૫||
તે માટે તું રુપી અરુપી, તું શુદ્ધ બુદ્ધને સિદ્ધ સ્વરુપી;
એહ સ્વરુપ ગ્રહ્યું જબ તારું, તવ ભ્રમ રહિત થયું મન મારું.||૬||
તુજ ગુણ જ્ઞાન ધ્યાનમાં રહીયે, ઈમ હળવું પણ સુલભ જ કહીએ;
“માનવિજય’ વાચક પ્રભુધ્યાને,અનુભવરસમળીયોએકતાને.||૭||`,
      hi: `प्रभु तुज दरिशन मळीयो अलवे, मन थयुं हवे मारुं हळवे हळवे,
पुण्योदय ए मोटो मारो, अणचिंत्यो थयो दर्शन तारो;
साहिबा अभिनंदन देवा, मोहना अभिनंदन देवा.||१||
देखत खेव हरी मन लीधुं, कामणगारे कामण कीधुं;
मनडुं जाय नहीं कोई पासे, रात-दिवस रहे ताहरी पासे.||२||
पहेला तो जाण्युं हतुं सोहिलुं, पण मोटाशुं मळवुं दोहिलुं
सोहिलुं मनडुं वळगुं, थाय नहि हवे कीधुं अळगुं.||३||
रुप देखाडी होवे अरुपी, ग्रहवाए अकल अरुपी;
ताहरी वात जाणी न जाये, कहो मनडानी शी गति थाये.||४||
पहेला जाणी पछी करे किरिया, ते परमारथ सुखना दरिया;
वस्तु अजाणे मन दोडावे, ते तो मूरख बहु पस्तावे.||५||
ते माटे तुं रुपी अरुपी, तुं शुद्ध बुद्धने सिद्ध स्वरुपी;
एह स्वरुप ग्रह्युं जब तारुं, तव भ्रम रहित थयुं मन मारुं.||६||
तुज गुण ज्ञान ध्यानमां रहीये, ईम हळवुं पण सुलभ ज कहीए;
“मानविजय’ वाचक प्रभुध्याने,अनुभवरसमळीयोएकताने.||७||`,
      sa: "",
      en: `Prabhu tuja darishana maleeyo alave, mana thayun have maarun halave halave,
Punyodaya e moto maaro, anachintyo thayo darshana taaro;
Saahibaa abhinandana devaa, mohanaa abhinandana devaa.||1||
Dekhata kheva haree mana leedhun, kaamanagaare kaamana keedhun;
Manadun jaaya naheen koee paase, raata-divasa rahe taaharee paase.||2||
Pahelaa to jaanyun hatun sohilun, pana motaashun malavun dohilun
Sohilun manadun valagun, thaaya nahi have keedhun alagun.||3||
Rupa dekhaadee hove arupee, grahavaae akala arupee;
Taaharee vaata jaanee na jaaye, kaho manadaanee shee gati thaaye.||4||
Pahelaa jaanee pachhee kare kiriyaa, te paramaaratha sukhanaa dariyaa;
Vastu ajaane mana dodaave, te to moorakha bahu pastaave.||5||
Te maate tun rupee arupee, tun shuddha buddhane siddha svarupee;
Eha svarupa grahyun jaba taarun, tava bhrama rahita thayun mana maarun.||6||
Tuja guna jnyaana dhyaanamaan raheeye, eema halavun pana sulabha ja kaheee;
“maanavijaya’ vaachaka prabhudhyaane,anubhavarasamaleeyoekataane.||7||`,
    },
  },
  {
    id: "prabhu-tuj-naam-che-anant",
    type: "bhajan",
    title: {
      gu: "પ્રભુ તુજ નામ છે નાથ અનંત, તુમ ગુણ પણ છે અકલ અનંત",
      hi: "प्रभु तुज नाम छे नाथ अनंत, तुम गुण पण छे अकल अनंत",
      sa: "",
      en: "Prabhu Tuj Naam Che Anant",
    },
    text: {
      gu: `પ્રભુ તુજ નામ છે નાથ અનંત, તુમ ગુણ પણ છે અકલ અનંત;
છે અનંત સુખનો તુજ ભોગ, દુઃખ અનંતનો કર્યો વિયોગ.||૧||
વીર્ય અનંત તુજ પાસે વસે, જ્ઞાન અનંતે તું ઉલ્લસે
તિમ અનંત દરિસન શ્રીકાર, આપ અનંત થયા અવિકાર.||૨||
તું અનંત કરુણાજલ કૂપ, તાહરી જ્યોતિ અનંત સ્વરુપ;
તુજ અનંત વાણી વિસ્તરે, તેહથી ભવિક અનંત તરે.||૩||
દ્રવ્ય અનંત તુજને પ્રત્યક્ષ, તિમ અનંત પર્યાયનું લક્ષ્ય;
તું અનંત લક્ષણનો ગેહ, બળ અનંત પૂરણ તુજ દેહ.||૪||
તે માટે સુણ દેવ! અનંત!, તાહરી છે પ્રભુ શક્તિ અનંત;
મુજને પણ સુખ દેહિ અનંત, ‘દાન’ કહે ધરી હરખ અનંત. ॥૫॥`,
      hi: `प्रभु तुज नाम छे नाथ अनंत, तुम गुण पण छे अकल अनंत;
छे अनंत सुखनो तुज भोग, दुःख अनंतनो कर्यो वियोग.||१||
वीर्य अनंत तुज पासे वसे, ज्ञान अनंते तुं उल्लसे
तिम अनंत दरिसन श्रीकार, आप अनंत थया अविकार.||२||
तुं अनंत करुणाजल कूप, ताहरी ज्योति अनंत स्वरुप;
तुज अनंत वाणी विस्तरे, तेहथी भविक अनंत तरे.||३||
द्रव्य अनंत तुजने प्रत्यक्ष, तिम अनंत पर्यायनुं लक्ष्य;
तुं अनंत लक्षणनो गेह, बळ अनंत पूरण तुज देह.||४||
ते माटे सुण देव! अनंत!, ताहरी छे प्रभु शक्ति अनंत;
मुजने पण सुख देहि अनंत, ‘दान’ कहे धरी हरख अनंत. ॥५॥`,
      sa: "",
      en: `Prabhu tuja naama chhe naatha ananta, tuma guna pana chhe akala ananta;
Chhe ananta sukhano tuja bhoga, dukha anantano karyo viyoga.||1||
Veerya ananta tuja paase vase, jnyaana anante tun ullase
Tima ananta darisana shreekaara, aapa ananta thayaa avikaara.||2||
Tun ananta karunaajala koopa, taaharee jyoti ananta svarupa;
Tuja ananta vaanee vistare, tehathee bhavika ananta tare.||3||
Dravya ananta tujane pratyaksha, tima ananta paryaayanun lakshya;
Tun ananta lakshanano geha, bala ananta poorana tuja deha.||4||
Te maate suna deva! ananta!, taaharee chhe prabhu shakti ananta;
Mujane pana sukha dehi ananta, ‘daana’ kahe dharee harakha ananta. ||5||`,
    },
  },
  {
    id: "prabhuji-muj-avgun-mat-dekho",
    type: "bhajan",
    title: {
      gu: "પ્રભુજી! મુજ અવગુણ મત દેખો…",
      hi: "प्रभुजी! मुज अवगुण मत देखो…",
      sa: "",
      en: "Prabhuji Muj Avgun Mat Dekho",
    },
    text: {
      gu: `પ્રભુજી! મુજ અવગુણ મત દેખો…
રાગ દશાથી તું રહે ન્યારો,હું મન રાગે વાળું;
દ્વેષરહિત તું સમતા ભીનો, દ્વેષ મારગ હું ચાલું.||૧||
મોહ લેશ ફરસ્યો નહીં તુજને, મોહ લગ્ન મુજ પ્યારી;
તું અકલંકી કલંકિત હું તો, એ પણ રહેણી ન્યારી.||૨||
તું હી નિરાશી ભાવપદ સાધે, હું આશા સંગ વિલુદ્ધો;
તું નિશ્ચલ હું તું સુદ્ધો, હું આચરણે ઊંધો.||૩||
તુજ સ્વભાવથી અવળાં માહરાં, ચરિત્ર સકળ જગે જાણ્યા;
એહવા અવગુણ મુજ અતિભારી, ન ઘટે તુજ મુખ આણ્યાં.||૪||
પ્રેમ નવલ જો હોયે સવાઈ, વિમલનાથ મુખ આગે;
‘કાંતિ’ ભવરાન ઊતરતાં, તો વેળા નવિ લાગે.||૫||`,
      hi: `प्रभुजी! मुज अवगुण मत देखो…
राग दशाथी तुं रहे न्यारो,हुं मन रागे वाळुं;
द्वेषरहित तुं समता भीनो, द्वेष मारग हुं चालुं.||१||
मोह लेश फरस्यो नहीं तुजने, मोह लग्न मुज प्यारी;
तुं अकलंकी कलंकित हुं तो, ए पण रहेणी न्यारी.||२||
तुं ही निराशी भावपद साधे, हुं आशा संग विलुद्धो;
तुं निश्चल हुं तुं सुद्धो, हुं आचरणे ऊंधो.||३||
तुज स्वभावथी अवळां माहरां, चरित्र सकळ जगे जाण्या;
एहवा अवगुण मुज अतिभारी, न घटे तुज मुख आण्यां.||४||
प्रेम नवल जो होये सवाई, विमलनाथ मुख आगे;
‘कांति’ भवरान ऊतरतां, तो वेळा नवि लागे.||५||`,
      sa: "",
      en: `Prabhujee! muja avaguna mata dekho…
Raaga dashaathee tun rahe nyaaro,hun mana raage vaalun;
Dvesharahita tun samataa bheeno, dvesha maaraga hun chaalun.||1||
Moha lesha pharasyo naheen tujane, moha lagna muja pyaaree;
Tun akalankee kalankita hun to, e pana rahenee nyaaree.||2||
Tun hee niraashee bhaavapada saadhe, hun aashaa sanga viluddho;
Tun nishchala hun tun suddho, hun aacharane oondho.||3||
Tuja svabhaavathee avalaan maaharaan, charitra sakala jage jaanyaa;
Ehavaa avaguna muja atibhaaree, na ghate tuja mukha aanyaan.||4||
Prema navala jo hoye savaaee, vimalanaatha mukha aage;
‘kaanti’ bhavaraana ootarataan, to velaa navi laage.||5||`,
    },
  },
  {
    id: "prabhuji-tum-dithe-sab-ditho",
    type: "bhajan",
    title: {
      gu: "પ્રભુજી! તુમ દીઠે સબ દીઠો… પ્રભુજી! તુમ દીઠે. ॥੧॥",
      hi: "प्रभुजी! तुम दीठे सब दीठो… प्रभुजी! तुम दीठे. ॥੧॥",
      sa: "",
      en: "Prabhuji Tum Dithe Sab Ditho",
    },
    text: {
      gu: `પ્રભુજી! તુમ દીઠે સબ દીઠો… પ્રભુજી! તુમ દીઠે. ॥੧॥
ઓર કોઈ ભાવે નહિ જગ મેં, તુંહી સબ સે મીઠો. ॥२॥
સકલ પદારથ સાર હૈ તુંહી, તુંહી અગમ અદીઠો ॥3॥
દરિશન દીઠો અમૃત વૂઠો, નીઠો સકલ અનીઠો. ॥४॥
સબ દેવન કો દેવ હૈ તુંહી, તુંહી જગ મેં જેઠ. ॥५॥
‘વાચક જશ’ કહે સાહિબ મેર, હસી હસી હિયડે પેઠો.॥6॥`,
      hi: `प्रभुजी! तुम दीठे सब दीठो… प्रभुजी! तुम दीठे. ॥੧॥
ओर कोई भावे नहि जग में, तुंही सब से मीठो. ॥२॥
सकल पदारथ सार है तुंही, तुंही अगम अदीठो ॥3॥
दरिशन दीठो अमृत वूठो, नीठो सकल अनीठो. ॥४॥
सब देवन को देव है तुंही, तुंही जग में जेठ. ॥५॥
‘वाचक जश’ कहे साहिब मेर, हसी हसी हियडे पेठो.॥6॥`,
      sa: "",
      en: `Prabhujee! tuma deethe saba deetho… prabhujee! tuma deethe. ||1||
Ora koee bhaave nahi jaga men, tunhee saba se meetho. ||2||
Sakala padaaratha saara hai tunhee, tunhee agama adeetho ||3||
Darishana deetho amruta vootho, neetho sakala aneetho. ||4||
Saba devana ko deva hai tunhee, tunhee jaga men jetha. ||5||
‘vaachaka jasha’ kahe saahiba mera, hasee hasee hiyade petho.||6||`,
    },
  },
  {
    id: "pranamo-shri-arnath",
    type: "bhajan",
    title: {
      gu: "પ્રણમો શ્રી અરનાથ, શિવપુર સાથ ખરોરી",
      hi: "प्रणमो श्री अरनाथ, शिवपुर साथ खरोरी",
      sa: "",
      en: "Pranamo Shri Arnath",
    },
    text: {
      gu: `પ્રણમો શ્રી અરનાથ, શિવપુર સાથ ખરોરી;
ત્રિભુવન જન આધાર, ભવનિસ્તાર કરોરી.||૧||
કર્તા કારણ યોગ, કાર્યસિદ્ધિ લહે
કારણ ચાર અનૂપ, કાર્યથી તેહ ગ્રહેરી.||૨||
જે કારણ તે કાર્ય, થાયે પૂર્ણ પદેરી
ઉપાદાન તે હેતુ, માટી ઘટ તે વદેરી.||૩||
ઉપાદાનથી ભિન્ન, જે વિષ્ણુ કાર્ય ન થાયે;
ન હુવે કાર્ય રુપ, કર્તાને વ્યવસાયે.||૪||
કારણ તેહ નિમિત્ત, ચક્રાદિક ઘટ ભાવે;
કારજ સમવાય, કારણ નિયતને દાવે.||૫||
વસ્તુ અભેદ સરુપ, કાર્યપણું ન ગ્રહેરી;
તે અસાધારણ હેતુ,કુંભેથાસ લહેરી.||૬||
જેહનો નવિ વ્યાપાર, ભિન્ન નિયત બહુ ભાવી;
ભૂમિ કાળ આકાશ, ઘટ કારણ સદ્ધાવી.||૭||
એહ હેતુ, આગમમાંહી કહ્યોરી;
કારણ પદ ઉત્પન્ન, કાર્ય થયે ન લહ્યોરી.||૮||
આતમ દ્રવ્ય, કાર્ય સિદ્ધિ પણોરી;
નિજ સત્તાગત ધર્મ, તે ઉપાદાન ગણોરી.||૯||
યોગ સમાધિ વિધાન, અસાધારણ તેહ વદેરી;
વિધિ આચરણા ભક્તિ, જિણે નિજ કાર્ય સધેરી.||૧૦||
નરગતિ પઢમ સંઘયણ, તેહ અપેક્ષા જાણો;
નિમિત્તાશ્રિત ઉપાદાન, તેહની લેખે આણો.||૧૧||
નિમિત્ત હેતુ જિનરાજ, સમતા અમૃત ખાણી;
પ્રભુ અવલંબન સિદ્ધિ, નિયમાં એહ વખાણી.||૧૨||
પુષ્ટ હેતુ અરનાથ, તેહના ગુણથી હલીયે;
રીઝ ભક્તિ બહુમાન, ભોગ ધ્યાનથી મીલીયે.||૧૩||
મોટા ને ઉત્સંગ, બેઠા ને શી ચિંતા;
તિમ પ્રભુ ચરણ પસાય, સેવક થયા નિચિંતા.||૧૪||
અર પ્રભુ પ્રભુતા રંગ, અંતર શક્તિ વિકાસી;
“દેવચંદ્ર’ને આણંદ, અક્ષયભોગ વિલાસી.||૧૫||`,
      hi: `प्रणमो श्री अरनाथ, शिवपुर साथ खरोरी;
त्रिभुवन जन आधार, भवनिस्तार करोरी.||१||
कर्ता कारण योग, कार्यसिद्धि लहे
कारण चार अनूप, कार्यथी तेह ग्रहेरी.||२||
जे कारण ते कार्य, थाये पूर्ण पदेरी
उपादान ते हेतु, माटी घट ते वदेरी.||३||
उपादानथी भिन्न, जे विष्णु कार्य न थाये;
न हुवे कार्य रुप, कर्ताने व्यवसाये.||४||
कारण तेह निमित्त, चक्रादिक घट भावे;
कारज समवाय, कारण नियतने दावे.||५||
वस्तु अभेद सरुप, कार्यपणुं न ग्रहेरी;
ते असाधारण हेतु,कुंभेथास लहेरी.||६||
जेहनो नवि व्यापार, भिन्न नियत बहु भावी;
भूमि काळ आकाश, घट कारण सद्धावी.||७||
एह हेतु, आगममांही कह्योरी;
कारण पद उत्पन्न, कार्य थये न लह्योरी.||८||
आतम द्रव्य, कार्य सिद्धि पणोरी;
निज सत्तागत धर्म, ते उपादान गणोरी.||९||
योग समाधि विधान, असाधारण तेह वदेरी;
विधि आचरणा भक्ति, जिणे निज कार्य सधेरी.||१०||
नरगति पढम संघयण, तेह अपेक्षा जाणो;
निमित्ताश्रित उपादान, तेहनी लेखे आणो.||११||
निमित्त हेतु जिनराज, समता अमृत खाणी;
प्रभु अवलंबन सिद्धि, नियमां एह वखाणी.||१२||
पुष्ट हेतु अरनाथ, तेहना गुणथी हलीये;
रीझ भक्ति बहुमान, भोग ध्यानथी मीलीये.||१३||
मोटा ने उत्संग, बेठा ने शी चिंता;
तिम प्रभु चरण पसाय, सेवक थया निचिंता.||१४||
अर प्रभु प्रभुता रंग, अंतर शक्ति विकासी;
“देवचंद्र’ने आणंद, अक्षयभोग विलासी.||१५||`,
      sa: "",
      en: `Pranamo shree aranaatha, shivapura saatha kharoree;
Tribhuvana jana aadhaara, bhavanistaara karoree.||1||
Kartaa kaarana yoga, kaaryasiddhi lahe
Kaarana chaara anoopa, kaaryathee teha graheree.||2||
Je kaarana te kaarya, thaaye poorna paderee
Upaadaana te hetu, maatee ghata te vaderee.||3||
Upaadaanathee bhinna, je vishnu kaarya na thaaye;
Na huve kaarya rupa, kartaane vyavasaaye.||4||
Kaarana teha nimitta, chakraadika ghata bhaave;
Kaaraja samavaaya, kaarana niyatane daave.||5||
Vastu abheda sarupa, kaaryapanun na graheree;
Te asaadhaarana hetu,kunbhethaasa laheree.||6||
Jehano navi vyaapaara, bhinna niyata bahu bhaavee;
Bhoomi kaala aakaasha, ghata kaarana saddhaavee.||7||
Eha hetu, aagamamaanhee kahyoree;
Kaarana pada utpanna, kaarya thaye na lahyoree.||8||
Aatama dravya, kaarya siddhi panoree;
Nija sattaagata dharma, te upaadaana ganoree.||9||
Yoga samaadhi vidhaana, asaadhaarana teha vaderee;
Vidhi aacharanaa bhakti, jine nija kaarya sadheree.||10||
Naragati padhama sanghayana, teha apekshaa jaano;
Nimittaashrita upaadaana, tehanee lekhe aano.||11||
Nimitta hetu jinaraaja, samataa amruta khaanee;
Prabhu avalanbana siddhi, niyamaan eha vakhaanee.||12||
Pushta hetu aranaatha, tehanaa gunathee haleeye;
Reejha bhakti bahumaana, bhoga dhyaanathee meeleeye.||13||
Motaa ne utsanga, bethaa ne shee chintaa;
Tima prabhu charana pasaaya, sevaka thayaa nichintaa.||14||
Ara prabhu prabhutaa ranga, antara shakti vikaasee;
“devachandra’ne aananda, akshayabhoga vilaasee.||15||`,
    },
  },
  {
    id: "pranamu-pad-pankaj-pasna",
    type: "bhajan",
    title: {
      gu: "પ્રણમું પદ પંકજ પાસના, જસ વાસના અગમ અનુપ રે",
      hi: "प्रणमुं पद पंकज पासना, जस वासना अगम अनुप रे",
      sa: "",
      en: "Pranamu Pad Pankaj Pasna",
    },
    text: {
      gu: `પ્રણમું પદ પંકજ પાસના, જસ વાસના અગમ અનુપ રે;
મોહ્યો મન મધુકર જેહથી, પામે તસ શુદ્ધ સ્વરુપ રે||૧||
પંક કલંક શંકા નહિ, નહિ ખેદાદિક દુઃખ દોષ રે;
અવંચક યોગથી લહે, અધ્યાતમ રસ પોષ રે.||૨||
દુર્દશા દૂરે કરી, ભજે મુદિતા મૈત્રી ભાવ રે;
વર્તે નિજ ચિત્ત મધ્યસ્થતા, કરુણામય શુદ્ધ સ્વભાવ રે.||૩||
નિજ સ્વરુપ થીર કરી ઘટે, ન કરે પુદ્ગલની ખંચ રે;
સાખી થઈ વરતે સદા, ન કદા પરભાવ પ્રપંચ રે.||૪||
સહજ દશા નિશ્ચય જગે, એ ઉત્તમ અનુભવ રસ સંગ રે;
રાચે નહિ પરભાવમાં, નિજ ભાવમાં રંગ અભંગ રે.||૫||
ગુણ સબ હી નિજમાં લખે, ન ચખે પરગુણની રેખ રે;
ખીર નીર વિવરો કરે, એ અનુભવ હંસશું પેખ રે.||૬||
નિર્વિકલ્પ ધ્યેય જે અનુભવે, અનુભવે અનુભવની રીત રે;
ઓર ન કબહુ લખી શકે, પ્રીત પ્રતીત રે.||૭||`,
      hi: `प्रणमुं पद पंकज पासना, जस वासना अगम अनुप रे;
मोह्यो मन मधुकर जेहथी, पामे तस शुद्ध स्वरुप रे||१||
पंक कलंक शंका नहि, नहि खेदादिक दुःख दोष रे;
अवंचक योगथी लहे, अध्यातम रस पोष रे.||२||
दुर्दशा दूरे करी, भजे मुदिता मैत्री भाव रे;
वर्ते निज चित्त मध्यस्थता, करुणामय शुद्ध स्वभाव रे.||३||
निज स्वरुप थीर करी घटे, न करे पुद्गलनी खंच रे;
साखी थई वरते सदा, न कदा परभाव प्रपंच रे.||४||
सहज दशा निश्चय जगे, ए उत्तम अनुभव रस संग रे;
राचे नहि परभावमां, निज भावमां रंग अभंग रे.||५||
गुण सब ही निजमां लखे, न चखे परगुणनी रेख रे;
खीर नीर विवरो करे, ए अनुभव हंसशुं पेख रे.||६||
निर्विकल्प ध्येय जे अनुभवे, अनुभवे अनुभवनी रीत रे;
ओर न कबहु लखी शके, प्रीत प्रतीत रे.||७||`,
      sa: "",
      en: `Pranamun pada pankaja paasanaa, jasa vaasanaa agama anupa re;
Mohyo mana madhukara jehathee, paame tasa shuddha svarupa re||1||
Panka kalanka shankaa nahi, nahi khedaadika dukha dosha re;
Avanchaka yogathee lahe, adhyaatama rasa posha re.||2||
Durdashaa doore karee, bhaje muditaa maitree bhaava re;
Varte nija chitta madhyasthataa, karunaamaya shuddha svabhaava re.||3||
Nija svarupa theera karee ghate, na kare pudgalanee khancha re;
Saakhee thaee varate sadaa, na kadaa parabhaava prapancha re.||4||
Sahaja dashaa nishchaya jage, e uttama anubhava rasa sanga re;
Raache nahi parabhaavamaan, nija bhaavamaan ranga abhanga re.||5||
Guna saba hee nijamaan lakhe, na chakhe paragunanee rekha re;
Kheera neera vivaro kare, e anubhava hansashun pekha re.||6||
Nirvikalpa dhyeya je anubhave, anubhave anubhavanee reeta re;
Ora na kabahu lakhee shake, preeta prateeta re.||7||`,
    },
  },
  {
    id: "pratham-jineshwar-pranamiye",
    type: "bhajan",
    title: {
      gu: "પ્રથમ જિનેશ્વર પ્રણમીએ, જાસ સુગંધી રે કાય",
      hi: "प्रथम जिनेश्वर प्रणमीए, जास सुगंधी रे काय",
      sa: "",
      en: "Pratham Jineshwar Pranamiye",
    },
    text: {
      gu: `પ્રથમ જિનેશ્વર પ્રણમીએ, જાસ સુગંધી રે કાય;
કલ્પવૃક્ષ પરે તાસ, ઈન્દ્રાણી નયન જે, ભૂંગ પરે લપટાય. ||૧||
રોગ ઉરગ તુજ નવિ નડે, અમૃત જેહ આસ્વાદ;
તેહથી પ્રતિહત તેહ, માનું કોઈ નવિ કરે,
જગમાં તુમશુંરે વાદ. પ્ર૦ ।। ૨ ।।
વગર ધોઈ તુજ નિર્મળી, કાયા કંચનવાન;
નહીં પ્રસ્વેદ લગાર, તારે તું તેહને, જે ધરે તાહરું ધ્યાન.॥३॥
રાગ ગયો તુજ મન થકી, તેહમાં ચિત્ર ન કોય;
રુધિર આમિષથી, રાગ ગયો તુજ જન્મથી,
દૂધ સહોદર હોય. પ્ર૦।।૪।।
શ્વાસોશ્વાસ કમલ સમો, તુજ લોકોત્તર વાત;
આહાર નિહાર, ચરમ ચક્ષુ ધણી, એહવા તુજ અવદાત.॥५॥
ચાર અતિશય મૂળથી, ઓગણીશ દેવના કીધ;
કર્મ ખપ્યાથી અગિયાર, ચોત્રીશ એમ અતિશયા,
સમવાયાંગે પ્રસિદ્ધ.५० ॥६||
જિન ઉત્તમ ગુણ ગાવતાં, ગુણ આવે નિજ અંગ;
“પદ્મવિજય” કહે એહ, સમય પ્રભુ! પાળજો,
જિમ થાઉં અક્ષય અભંગ.||૭||`,
      hi: `प्रथम जिनेश्वर प्रणमीए, जास सुगंधी रे काय;
कल्पवृक्ष परे तास, ईन्द्राणी नयन जे, भूंग परे लपटाय. ||१||
रोग उरग तुज नवि नडे, अमृत जेह आस्वाद;
तेहथी प्रतिहत तेह, मानुं कोई नवि करे,
जगमां तुमशुंरे वाद. प्र० ।। २ ।।
वगर धोई तुज निर्मळी, काया कंचनवान;
नहीं प्रस्वेद लगार, तारे तुं तेहने, जे धरे ताहरुं ध्यान.॥३॥
राग गयो तुज मन थकी, तेहमां चित्र न कोय;
रुधिर आमिषथी, राग गयो तुज जन्मथी,
दूध सहोदर होय. प्र०।।४।।
श्वासोश्वास कमल समो, तुज लोकोत्तर वात;
आहार निहार, चरम चक्षु धणी, एहवा तुज अवदात.॥५॥
चार अतिशय मूळथी, ओगणीश देवना कीध;
कर्म खप्याथी अगियार, चोत्रीश एम अतिशया,
समवायांगे प्रसिद्ध.५० ॥६||
जिन उत्तम गुण गावतां, गुण आवे निज अंग;
“पद्मविजय” कहे एह, समय प्रभु! पाळजो,
जिम थाउं अक्षय अभंग.||७||`,
      sa: "",
      en: `Prathama jineshvara pranameee, jaasa sugandhee re kaaya;
Kalpavruksha pare taasa, eendraanee nayana je, bhoonga pare lapataaya. ||1||
Roga uraga tuja navi nade, amruta jeha aasvaada;
Tehathee pratihata teha, maanun koee navi kare,
Jagamaan tumashunre vaada. pra0 || 2 ||
Vagara dhoee tuja nirmalee, kaayaa kanchanavaana;
Naheen prasveda lagaara, taare tun tehane, je dhare taaharun dhyaana.||3||
Raaga gayo tuja mana thakee, tehamaan chitra na koya;
Rudhira aamishathee, raaga gayo tuja janmathee,
Doodha sahodara hoya. pra0||4||
Shvaasoshvaasa kamala samo, tuja lokottara vaata;
Aahaara nihaara, charama chakshu dhanee, ehavaa tuja avadaata.||5||
Chaara atishaya moolathee, oganeesha devanaa keedha;
Karma khapyaathee agiyaara, chotreesha ema atishayaa,
Samavaayaange prasiddha.50 ||6||
Jina uttama guna gaavataan, guna aave nija anga;
“padmavijaya” kahe eha, samaya prabhu! paalajo,
Jima thaaun akshaya abhanga.||7||`,
    },
  },
  {
    id: "pritaldi-bandhani-re",
    type: "bhajan",
    title: {
      gu: "પ્રીતલડી બંધાણી રે અજિત જિણંદશું",
      hi: "प्रीतलडी बंधाणी रे अजित जिणंदशुं",
      sa: "",
      en: "Pritaldi Bandhani Re",
    },
    text: {
      gu: `પ્રીતલડી બંધાણી રે અજિત જિણંદશું,
પ્રભુ પાખે ક્ષણ એક મને ન સુહાય જો;
ધ્યાનની તારી રે લાગી નેહ શું,
જલદ ઘટા જિમ શિવ સુત વાહન દાય જો.પ્રીત૦ ।।૧ ।।
નહ ઘેલું મન મારું રે પ્રભુ અલજે રહે,
તન મન ધન તે કારણથી પ્રભુ મુજ જો;
માહરે તો આધાર રે સાહિબ રાવળો,
અંતરગતની પ્રભુ આગળ કહું ગુંજ જો. प्रीत०॥२॥
સાહેબ તે સાચોરે જગમાં જાણીએ,
સેવકના જે સહેજે સુધારે કાજ જો;
એહવે રે આચરણે કેમ કરી રહું,
બિરુદ તમારું તારણ તરણ જહાજ જો.||૩||
તારકતા તુજ માંહે રે શ્રવણે સાંભળી,
તે ભણી હું આવ્યો છું દીનદયાળ જ;
તુજ કરુણાની લહેરે મુજ કારજ સરે,
શું ઘણું કહીએ આગળ કૃપાળ જો.||૪||
કરુણાદ્રષ્ટિ કીધી રે સેવક ઉપરે,
ભવ ભય ભાવઠ ભાંગી ભક્તિ પ્રસંગ જે;
મનવાંછિત ફળિયા રે તુજ આલંબને,
કરજોડીને “મોહન” કહે મનરંગ જો.||૫||`,
      hi: `प्रीतलडी बंधाणी रे अजित जिणंदशुं,
प्रभु पाखे क्षण एक मने न सुहाय जो;
ध्याननी तारी रे लागी नेह शुं,
जलद घटा जिम शिव सुत वाहन दाय जो.प्रीत० ।।१ ।।
नह घेलुं मन मारुं रे प्रभु अलजे रहे,
तन मन धन ते कारणथी प्रभु मुज जो;
माहरे तो आधार रे साहिब रावळो,
अंतरगतनी प्रभु आगळ कहुं गुंज जो. प्रीत०॥२॥
साहेब ते साचोरे जगमां जाणीए,
सेवकना जे सहेजे सुधारे काज जो;
एहवे रे आचरणे केम करी रहुं,
बिरुद तमारुं तारण तरण जहाज जो.||३||
तारकता तुज मांहे रे श्रवणे सांभळी,
ते भणी हुं आव्यो छुं दीनदयाळ ज;
तुज करुणानी लहेरे मुज कारज सरे,
शुं घणुं कहीए आगळ कृपाळ जो.||४||
करुणाद्रष्टि कीधी रे सेवक उपरे,
भव भय भावठ भांगी भक्ति प्रसंग जे;
मनवांछित फळिया रे तुज आलंबने,
करजोडीने “मोहन” कहे मनरंग जो.||५||`,
      sa: "",
      en: `Preetaladee bandhaanee re ajita jinandashun,
Prabhu paakhe kshana eka mane na suhaaya jo;
Dhyaananee taaree re laagee neha shun,
Jalada ghataa jima shiva suta vaahana daaya jo.preeta0 ||1 ||
Naha ghelun mana maarun re prabhu alaje rahe,
Tana mana dhana te kaaranathee prabhu muja jo;
Maahare to aadhaara re saahiba raavalo,
Antaragatanee prabhu aagala kahun gunja jo. प्रीत0||2||
Saaheba te saachore jagamaan jaaneee,
Sevakanaa je saheje sudhaare kaaja jo;
Ehave re aacharane kema karee rahun,
Biruda tamaarun taarana tarana jahaaja jo.||3||
Taarakataa tuja maanhe re shravane saanbhalee,
Te bhanee hun aavyo chhun deenadayaala ja;
Tuja karunaanee lahere muja kaaraja sare,
Shun ghanun kaheee aagala krupaala jo.||4||
Karunaadrashti keedhee re sevaka upare,
Bhava bhaya bhaavatha bhaangee bhakti prasanga je;
Manavaanchhita phaliyaa re tuja aalanbane,
Karajodeene “mohana” kahe manaranga jo.||5||`,
    },
  },
  {
    id: "pukhalvai-vijay-jayo-re",
    type: "bhajan",
    title: {
      gu: "પુક્ખલવઈ વિજયે જયો રે, નયરી પુંડરીગિણી સાર",
      hi: "पुक्खलवई विजये जयो रे, नयरी पुंडरीगिणी सार",
      sa: "",
      en: "Pukhalvai Vijay Jayo Re",
    },
    text: {
      gu: `પુક્ખલવઈ વિજયે જયો રે, નયરી પુંડરીગિણી સાર;
શ્રી સીમંધર સાહિબા રે, રાય શ્રેયાંસકુમાર;
જિણંદરાય! ધરજો ધર્મ સનેહ…||૧||
મોટા નાનાનું આંતરું રે, ગિરુઆ નવિ દાખંત;
શશી-દરિસણ સાયર વધે રે, કૈરવ વન વિકસંત.||૨||
ઠામ કુઠામ નવિ લેખવે રે, જગ વરસંત જલધાર;
કર દોય કુસુમે વાસિયે રે, છાયા સવિ આધાર.||૩||
રાય ને રંક સરીખા ગણે રે, ઉદ્યોતે શશી સૂર;
ગંગાજળ તે બિહું તણાં રે, તાપ કરે સવિ દૂર.||૪||
સરીખા સહુને તારવા રે, તિમ તુમે છો મહાર
મુજશું અંતર કેમ કરો રે, બાંહ્ય ગ્રહ્યાની લાજ.||૫||
મુખ દેખી ટીલું કરે રે, તે નવિ હોય પ્રમાણ;
મુજરો માને સવિ તણો રે, સાહિબ તેહ સુજાણ. ||૬||
વૃષભ લંછન માતા સત્યકી રે, નંદન રુક્મણી કંત;
‘વાચક યશ’ ઈમ વિનવે રે, ભયભંજન ભગવંત||૭||`,
      hi: `पुक्खलवई विजये जयो रे, नयरी पुंडरीगिणी सार;
श्री सीमंधर साहिबा रे, राय श्रेयांसकुमार;
जिणंदराय! धरजो धर्म सनेह…||१||
मोटा नानानुं आंतरुं रे, गिरुआ नवि दाखंत;
शशी-दरिसण सायर वधे रे, कैरव वन विकसंत.||२||
ठाम कुठाम नवि लेखवे रे, जग वरसंत जलधार;
कर दोय कुसुमे वासिये रे, छाया सवि आधार.||३||
राय ने रंक सरीखा गणे रे, उद्योते शशी सूर;
गंगाजळ ते बिहुं तणां रे, ताप करे सवि दूर.||४||
सरीखा सहुने तारवा रे, तिम तुमे छो महार
मुजशुं अंतर केम करो रे, बांह्य ग्रह्यानी लाज.||५||
मुख देखी टीलुं करे रे, ते नवि होय प्रमाण;
मुजरो माने सवि तणो रे, साहिब तेह सुजाण. ||६||
वृषभ लंछन माता सत्यकी रे, नंदन रुक्मणी कंत;
‘वाचक यश’ ईम विनवे रे, भयभंजन भगवंत||७||`,
      sa: "",
      en: `Pukkhalavaee vijaye jayo re, nayaree pundareeginee saara;
Shree seemandhara saahibaa re, raaya shreyaansakumaara;
Jinandaraaya! dharajo dharma saneha…||1||
Motaa naanaanun aantarun re, giruaa navi daakhanta;
Shashee-darisana saayara vadhe re, kairava vana vikasanta.||2||
Thaama kuthaama navi lekhave re, jaga varasanta jaladhaara;
Kara doya kusume vaasiye re, chhaayaa savi aadhaara.||3||
Raaya ne ranka sareekhaa gane re, udyote shashee soora;
Gangaajala te bihun tanaan re, taapa kare savi doora.||4||
Sareekhaa sahune taaravaa re, tima tume chho mahaara
Mujashun antara kema karo re, baanhya grahyaanee laaja.||5||
Mukha dekhee teelun kare re, te navi hoya pramaana;
Mujaro maane savi tano re, saahiba teha sujaana. ||6||
Vrushabha lanchhana maataa satyakee re, nandana rukmanee kanta;
‘vaachaka yasha’ eema vinave re, bhayabhanjana bhagavanta||7||`,
    },
  },
  {
    id: "punjana-to-kije-re-barma-jintani-re",
    type: "bhajan",
    title: {
      gu: "પૂજના તો કીજે રે બારમા જિનતણી રે, જસુ પ્રગટ્યો પૂજ્ય સ્વભાવ",
      hi: "पूजना तो कीजे रे बारमा जिनतणी रे, जसु प्रगट्यो पूज्य स्वभाव",
      sa: "",
      en: "Punjana To Kije Re Barma Jintani Re",
    },
    text: {
      gu: `પૂજના તો કીજે રે બારમા જિનતણી રે, જસુ પ્રગટ્યો પૂજ્ય સ્વભાવ;
પર કૃત પૂજા રે જે ઇચ્છે નહિ રે, સાધક કારજ દાવ. ॥੧||
દ્રવ્યથી પૂજારે કારણ ભાવનું રે, ભાવ પ્રશસ્ત ને શુદ્ધ;
પરમ ઈષ્ટ વલ્લભ ત્રિભુવન ધણી રે, વાસુપૂજ્ય સ્વયંબુદ્ધ. ॥२॥
અતિશય મહિમા રે અતિ ઉપગારતા રે,‌ નિરમલ પ્રભુ ગુણરાગ;
સુરમણિ સુરઘટ સુરતરુ તુચ્છ તે રે,‌‌ જિનરાગી મહાભાગ. ॥३॥
દર્શન જ્ઞાનાદિક ગુણ આત્મના રે, પ્રભુ પ્રભુતા લયલીન;
શુદ્ધ સ્વરુપી રુપે તન્મયી રે, તસુ આસ્વાદન પીન. ॥४॥
શુદ્ધ રસરંગી ચેતના રે, પામે આત્મ સ્વભાવ;
આત્માલંબી નિજ ગુણ રે, પ્રગટે પૂજ્ય સ્વભાવ. ॥५॥
આપ અકર્તા સેવાથી હુવે રે, સેવક પૂરણ સિદ્ધિ;
નિજ ધન ન દીયે પણ આશ્રિત લહેરે, અક્ષય અક્ષર રિદ્ધિ. ।।૬।।
જિનવર પૂજા રે તે નિજ પૂજના રે, પ્રગટે અન્વય શક્તિ;
પરમાનંદ વિલાસી અનુભવે રે, “દેવચંદ્ર’પદ વ્યક્તિ. ॥७॥`,
      hi: `पूजना तो कीजे रे बारमा जिनतणी रे, जसु प्रगट्यो पूज्य स्वभाव;
पर कृत पूजा रे जे इच्छे नहि रे, साधक कारज दाव. ॥੧||
द्रव्यथी पूजारे कारण भावनुं रे, भाव प्रशस्त ने शुद्ध;
परम ईष्ट वल्लभ त्रिभुवन धणी रे, वासुपूज्य स्वयंबुद्ध. ॥२॥
अतिशय महिमा रे अति उपगारता रे,‌ निरमल प्रभु गुणराग;
सुरमणि सुरघट सुरतरु तुच्छ ते रे,‌‌ जिनरागी महाभाग. ॥३॥
दर्शन ज्ञानादिक गुण आत्मना रे, प्रभु प्रभुता लयलीन;
शुद्ध स्वरुपी रुपे तन्मयी रे, तसु आस्वादन पीन. ॥४॥
शुद्ध रसरंगी चेतना रे, पामे आत्म स्वभाव;
आत्मालंबी निज गुण रे, प्रगटे पूज्य स्वभाव. ॥५॥
आप अकर्ता सेवाथी हुवे रे, सेवक पूरण सिद्धि;
निज धन न दीये पण आश्रित लहेरे, अक्षय अक्षर रिद्धि. ।।६।।
जिनवर पूजा रे ते निज पूजना रे, प्रगटे अन्वय शक्ति;
परमानंद विलासी अनुभवे रे, “देवचंद्र’पद व्यक्ति. ॥७॥`,
      sa: "",
      en: `Poojanaa to keeje re baaramaa jinatanee re, jasu pragatyo poojya svabhaava;
Para kruta poojaa re je ichchhe nahi re, saadhaka kaaraja daava. ||1||
Dravyathee poojaare kaarana bhaavanun re, bhaava prashasta ne shuddha;
Parama eeshta vallabha tribhuvana dhanee re, vaasupoojya svayanbuddha. ||2||
Atishaya mahimaa re ati upagaarataa re,‌ niramala prabhu gunaraaga;
Suramani suraghata surataru tuchchha te re,‌‌ jinaraagee mahaabhaaga. ||3||
Darshana jnyaanaadika guna aatmanaa re, prabhu prabhutaa layaleena;
Shuddha svarupee rupe tanmayee re, tasu aasvaadana peena. ||4||
Shuddha rasarangee chetanaa re, paame aatma svabhaava;
Aatmaalanbee nija guna re, pragate poojya svabhaava. ||5||
Aapa akartaa sevaathee huve re, sevaka poorana siddhi;
Nija dhana na deeye pana aashrita lahere, akshaya akshara riddhi. ||6||
Jinavara poojaa re te nija poojanaa re, pragate anvaya shakti;
Paramaananda vilaasee anubhave re, “devachandra’pada vyakti. ||7||`,
    },
  },
  {
    id: "pyara-simandar-swami",
    type: "bhajan",
    title: {
      gu: "પ્યારા સીમંધર સ્વામી, તમે મુક્તિના ગામી",
      hi: "प्यारा सीमंधर स्वामी, तमे मुक्तिना गामी",
      sa: "",
      en: "Pyara Simandar Swami",
    },
    text: {
      gu: `પ્યારા સીમંધર સ્વામી, તમે મુક્તિના ગામી,
વિદેહવાસી વિહરમાનને વંદના હમારી; તને મલવા તલશું,
મને પ્રીતિ તુમશું, વિદેહવાસી વિહરમાનને વંદના હમારી.||૧||
ચાલે મનમાં તારો એક જાપ, તોયે પજવે છે ત્રિવિધ તાપ;
આધિ વ્યાધિ વારો, ઉપાધિથી તાર.||૨||
મને સમવસરણમાં બોલાવો, મીઠી મધુરી વાણી સુણાવો;
મોહ તિમિર ટાળો, મિથ્યાત્વને બાળો.||૩||
થાયે દર્શન તમારા પવિત્ર, તમે જગના ગુરુ જગમિત્ર;
તમે જગના બંધુ, તને ભાવે વંદું.||૪||
તમે શ્રેયાંસરાય કુલચંદા, સતી સત્યકી માતાના નંદા;
તમે જન મનરંજન, આંજો જ્ઞાન અંજ.||૫||
મહાવિદેહના વાસી વ્હાલા, હું તો અંતરથી કરું કાલાવાલા;
‘જ્ઞાનવિમલ’ ગુણગાય, ભવજલ પાર કરાય. વિદેહવાસી૦।।૬।।`,
      hi: `प्यारा सीमंधर स्वामी, तमे मुक्तिना गामी,
विदेहवासी विहरमानने वंदना हमारी; तने मलवा तलशुं,
मने प्रीति तुमशुं, विदेहवासी विहरमानने वंदना हमारी.||१||
चाले मनमां तारो एक जाप, तोये पजवे छे त्रिविध ताप;
आधि व्याधि वारो, उपाधिथी तार.||२||
मने समवसरणमां बोलावो, मीठी मधुरी वाणी सुणावो;
मोह तिमिर टाळो, मिथ्यात्वने बाळो.||३||
थाये दर्शन तमारा पवित्र, तमे जगना गुरु जगमित्र;
तमे जगना बंधु, तने भावे वंदुं.||४||
तमे श्रेयांसराय कुलचंदा, सती सत्यकी माताना नंदा;
तमे जन मनरंजन, आंजो ज्ञान अंज.||५||
महाविदेहना वासी व्हाला, हुं तो अंतरथी करुं कालावाला;
‘ज्ञानविमल’ गुणगाय, भवजल पार कराय. विदेहवासी०।।६।।`,
      sa: "",
      en: `Pyaaraa seemandhara svaamee, tame muktinaa gaamee,
Videhavaasee viharamaanane vandanaa hamaaree; tane malavaa talashun,
Mane preeti tumashun, videhavaasee viharamaanane vandanaa hamaaree.||1||
Chaale manamaan taaro eka jaapa, toye pajave chhe trividha taapa;
Aadhi vyaadhi vaaro, upaadhithee taara.||2||
Mane samavasaranamaan bolaavo, meethee madhuree vaanee sunaavo;
Moha timira taalo, mithyaatvane baalo.||3||
Thaaye darshana tamaaraa pavitra, tame jaganaa guru jagamitra;
Tame jaganaa bandhu, tane bhaave vandun.||4||
Tame shreyaansaraaya kulachandaa, satee satyakee maataanaa nandaa;
Tame jana manaranjana, aanjo jnyaana anja.||5||
Mahaavidehanaa vaasee vhaalaa, hun to antarathee karun kaalaavaalaa;
‘jnyaanavimala’ gunagaaya, bhavajala paara karaaya. videhavaasee0||6||`,
    },
  },
  {
    id: "radha-jeva-fulda-ne",
    type: "bhajan",
    title: {
      gu: "રાધા જેવા ફૂલડાં ને, શામલ જેવો રંગ",
      hi: "राधा जेवा फूलडां ने, शामल जेवो रंग",
      sa: "",
      en: "Radha Jeva Fulda Ne",
    },
    text: {
      gu: `રાધા જેવા ફૂલડાં ને, શામલ જેવો રંગ;
આજ તારી આંગીનો કાંઈ, રુડો બન્યો છે રંગ;
પ્યારા પાસજી હો લાલ! દીનદયાળ મુજને નયણે નિહાળ.||૧||
જોગીવાડે જાગતો ને, માતો ધિંગડમલ્લ;
શામલો સોહામણો કાંઈ, જીત્યા આઠે મલ્લ.||૨||
તું છે મારો સાહિબો ને, હું છું તારો દાસ;
આશા પૂરો દાસની કાંઈ, સાંભળી અરદાસ.||૩||
દેવ સઘળા દીઠાં તેમાં, એક તું અવ્વલ;
લાખેણું છે લટકું તારું, દેખી રીઝે દિલ.||૪||
કોઈ પીરને ને કોઈ નમે રામ
‘ઉદયરત્ન’ કહે પ્રભુજી! મારે તુમશું કામ.||૫||`,
      hi: `राधा जेवा फूलडां ने, शामल जेवो रंग;
आज तारी आंगीनो कांई, रुडो बन्यो छे रंग;
प्यारा पासजी हो लाल! दीनदयाळ मुजने नयणे निहाळ.||१||
जोगीवाडे जागतो ने, मातो धिंगडमल्ल;
शामलो सोहामणो कांई, जीत्या आठे मल्ल.||२||
तुं छे मारो साहिबो ने, हुं छुं तारो दास;
आशा पूरो दासनी कांई, सांभळी अरदास.||३||
देव सघळा दीठां तेमां, एक तुं अव्वल;
लाखेणुं छे लटकुं तारुं, देखी रीझे दिल.||४||
कोई पीरने ने कोई नमे राम
‘उदयरत्न’ कहे प्रभुजी! मारे तुमशुं काम.||५||`,
      sa: "",
      en: `Raadhaa jevaa phooladaan ne, shaamala jevo ranga;
Aaja taaree aangeeno kaanee, rudo banyo chhe ranga;
Pyaaraa paasajee ho laala! deenadayaala mujane nayane nihaala.||1||
Jogeevaade jaagato ne, maato dhingadamalla;
Shaamalo sohaamano kaanee, jeetyaa aathe malla.||2||
Tun chhe maaro saahibo ne, hun chhun taaro daasa;
Aashaa pooro daasanee kaanee, saanbhalee aradaasa.||3||
Deva saghalaa deethaan temaan, eka tun avvala;
Laakhenun chhe latakun taarun, dekhee reejhe dila.||4||
Koee peerane ne koee name raama
‘udayaratna’ kahe prabhujee! maare tumashun kaama.||5||`,
    },
  },
  {
    id: "rudhi-ne-radhiyadi-re",
    type: "bhajan",
    title: {
      gu: "રુડી ને રઢિયાળી રે, વીર તારી દેશના રે…",
      hi: "रुडी ने रढियाळी रे, वीर तारी देशना रे…",
      sa: "",
      en: "Rudhi Ne Radhiyadi Re",
    },
    text: {
      gu: `રુડી ને રઢિયાળી રે, વીર તારી દેશના રે…
એ તો ભલી રે યોજનમાં સંભળાય;
સમકિત બીજ આરોપણ થાય.||૧||
ષટ્ મહિનાનીરે ભૂખ તરસ શમે રે,
સાકર દ્રાક્ષ તે હારી જાય;
કુમતિ જનના મદ મોડાય.||૨||
ચાર નિક્ષેપેરે સાત નયે કરી રે,
માંહે ભલી સપ્તભંગી વિખ્યાત;
નિજ નિજ ભાષાએ સમજાય.||૩||
પ્રભુજીને ધ્યાતાં રે શિવપદવી લહેરે,
આતમ ઋદ્ધિનો ભોક્તા થાય;
જ્ઞાનમાં લોકાલોક સમાય.||૪||
પ્રભુજી સરીખા દેશક કો નહિ રે,
એમ સહુ જિન ઉત્તમ ગુણ ગાય;
પ્રભુ પદ “પદ્મને’ નિત્ય નિત્ય ધ્યાય.||૫||`,
      hi: `रुडी ने रढियाळी रे, वीर तारी देशना रे…
ए तो भली रे योजनमां संभळाय;
समकित बीज आरोपण थाय.||१||
षट् महिनानीरे भूख तरस शमे रे,
साकर द्राक्ष ते हारी जाय;
कुमति जनना मद मोडाय.||२||
चार निक्षेपेरे सात नये करी रे,
मांहे भली सप्तभंगी विख्यात;
निज निज भाषाए समजाय.||३||
प्रभुजीने ध्यातां रे शिवपदवी लहेरे,
आतम ऋद्धिनो भोक्ता थाय;
ज्ञानमां लोकालोक समाय.||४||
प्रभुजी सरीखा देशक को नहि रे,
एम सहु जिन उत्तम गुण गाय;
प्रभु पद “पद्मने’ नित्य नित्य ध्याय.||५||`,
      sa: "",
      en: `Rudee ne radhiyaalee re, veera taaree deshanaa re…
E to bhalee re yojanamaan sanbhalaaya;
Samakita beeja aaropana thaaya.||1||
Shat mahinaaneere bhookha tarasa shame re,
Saakara draaksha te haaree jaaya;
Kumati jananaa mada modaaya.||2||
Chaara nikshepere saata naye karee re,
Maanhe bhalee saptabhangee vikhyaata;
Nija nija bhaashaae samajaaya.||3||
Prabhujeene dhyaataan re shivapadavee lahere,
Aatama ruddhino bhoktaa thaaya;
Jnyaanamaan lokaaloka samaaya.||4||
Prabhujee sareekhaa deshaka ko nahi re,
Ema sahu jina uttama guna gaaya;
Prabhu pada “padmane’ nitya nitya dhyaaya.||5||`,
    },
  },
  {
    id: "rushabh-jinand-dayal",
    type: "bhajan",
    title: {
      gu: "લાગી રે લાગી રે લાગી રે, મોહે તુમસે લગન લાગી… હો…",
      hi: "लागी रे लागी रे लागी रे, मोहे तुमसे लगन लागी… हो…",
      sa: "",
      en: "Rushabh Jinand Dayal",
    },
    text: {
      gu: `લાગી રે લાગી રે લાગી રે, મોહે તુમસે લગન લાગી… હો…
ૠષભ જિણંદ દયાલ રે, મોહે લાગી લગનવા…
લાગી લગનવા છોડી ન છૂટે, જબ લગ ઘટ મેં હો પ્રાણ રે.||૧||
વિમલાચલ મંડણ દુઃખખંડણ,
મંડણ ધર્મ વિશાલ રે.॥२॥
વિષધર મોર ચોર કામીજન,
દર્શન કર નિહાલ રે.॥3॥
હું અનાથ તું ત્રિભુવન નાથ,
કર મોરી સંભાલ રે.॥४॥
“આતમ’ આનંદ કંદ કે દાતા,
ત્રાતા પરમ કૃપાલ રે.||૫||`,
      hi: `लागी रे लागी रे लागी रे, मोहे तुमसे लगन लागी… हो…
ॠषभ जिणंद दयाल रे, मोहे लागी लगनवा…
लागी लगनवा छोडी न छूटे, जब लग घट में हो प्राण रे.||१||
विमलाचल मंडण दुःखखंडण,
मंडण धर्म विशाल रे.॥२॥
विषधर मोर चोर कामीजन,
दर्शन कर निहाल रे.॥3॥
हुं अनाथ तुं त्रिभुवन नाथ,
कर मोरी संभाल रे.॥४॥
“आतम’ आनंद कंद के दाता,
त्राता परम कृपाल रे.||५||`,
      sa: "",
      en: `Laagee re laagee re laagee re, mohe tumase lagana laagee… ho…
ૠshabha jinanda dayaala re, mohe laagee laganavaa…
Laagee laganavaa chhodee na chhoote, jaba laga ghata men ho praana re.||1||
Vimalaachala mandana dukhakhandana,
Mandana dharma vishaala re.||2||
Vishadhara mora chora kaameejana,
Darshana kara nihaala re.||3||
Hun anaatha tun tribhuvana naatha,
Kara moree sanbhaala re.||4||
“aatama’ aananda kanda ke daataa,
Traataa parama krupaala re.||5||`,
    },
  },
  {
    id: "rushabh-jinanda-rushabh-jinanda",
    type: "bhajan",
    title: {
      gu: "ઋષભ જિણંદા ઋષભ જિણંદા, તુમ દરિસન હુએ પરમાનંદા",
      hi: "ऋषभ जिणंदा ऋषभ जिणंदा, तुम दरिसन हुए परमानंदा",
      sa: "",
      en: "Rushabh Jinanda Rushabh Jinanda",
    },
    text: {
      gu: `ઋષભ જિણંદા ઋષભ જિણંદા, તુમ દરિસન હુએ પરમાનંદા;
અહર્નિશ ધ્યાઉં તુમ દેદારા, મહેર કરીને કરજો પ્યારા.||૧||
આપણને પૂંઠે જે વળગા, કિમ સરે તેહને કરતા અળગા;
અળગા કીધા પણ રહે વળગા,
મોરપીંછ પરે ન હુએ ઊભગા. ।। ૨ ।।
તુમ પણ અળગે થયે કિમ સરશે, ભક્તિ ભલી આકર્ષી લેશે;
ગગને ઊડે જિમ દૂરે પડાઈ, દોરી બળે હાથે રહે આઈ. ॥३॥
મુજ મનડું છે ચપલ સ્વભાવે, તોયે અંતર્મુહૂર્ત પ્રસ્તાવે;
તું તો સમય બદલાયે, ઈમ કિમ પ્રીતિ નિર્વાહો થાયે. ।।૪।।
તે માટે તું સાહિબ માહરી, હું છું સેવક ભવોભવ તાહરો;
એહ સંબંધે મા હોજો ખામી, ‘વાચક માન” કહે શિરનામી. ॥૫॥`,
      hi: `ऋषभ जिणंदा ऋषभ जिणंदा, तुम दरिसन हुए परमानंदा;
अहर्निश ध्याउं तुम देदारा, महेर करीने करजो प्यारा.||१||
आपणने पूंठे जे वळगा, किम सरे तेहने करता अळगा;
अळगा कीधा पण रहे वळगा,
मोरपींछ परे न हुए ऊभगा. ।। २ ।।
तुम पण अळगे थये किम सरशे, भक्ति भली आकर्षी लेशे;
गगने ऊडे जिम दूरे पडाई, दोरी बळे हाथे रहे आई. ॥३॥
मुज मनडुं छे चपल स्वभावे, तोये अंतर्मुहूर्त प्रस्तावे;
तुं तो समय बदलाये, ईम किम प्रीति निर्वाहो थाये. ।।४।।
ते माटे तुं साहिब माहरी, हुं छुं सेवक भवोभव ताहरो;
एह संबंधे मा होजो खामी, ‘वाचक मान” कहे शिरनामी. ॥५॥`,
      sa: "",
      en: `Rushabha jinandaa rushabha jinandaa, tuma darisana hue paramaanandaa;
Aharnisha dhyaaun tuma dedaaraa, mahera kareene karajo pyaaraa.||1||
Aapanane poonthe je valagaa, kima sare tehane karataa alagaa;
Alagaa keedhaa pana rahe valagaa,
Morapeenchha pare na hue oobhagaa. || 2 ||
Tuma pana alage thaye kima sarashe, bhakti bhalee aakarshee leshe;
Gagane oode jima doore padaaee, doree bale haathe rahe aaee. ||3||
Muja manadun chhe chapala svabhaave, toye antarmuhoorta prastaave;
Tun to samaya badalaaye, eema kima preeti nirvaaho thaaye. ||4||
Te maate tun saahiba maaharee, hun chhun sevaka bhavobhava taaharo;
Eha sanbandhe maa hojo khaamee, ‘vaachaka maana” kahe shiranaamee. ||5||`,
    },
  },
  {
    id: "rushabh-jinandashu-pritadi",
    type: "bhajan",
    title: {
      gu: "ઋષભ જિણંદશું પ્રીતડી, કીમ કીજે હો કહો ચતુર વિચાર",
      hi: "ऋषभ जिणंदशुं प्रीतडी, कीम कीजे हो कहो चतुर विचार",
      sa: "",
      en: "Rushabh Jinandashu Pritadi",
    },
    text: {
      gu: `ઋષભ જિણંદશું પ્રીતડી, કીમ કીજે હો કહો ચતુર વિચાર;
પ્રભુજી જઈ અલગા વસ્યા,
તિહાં કિણે નવિ હો કોઈ વચન ઉચ્ચાર. ।।૧ ।।
કાગળ પણ પહોંચે નહિ, નવિ પહોંચે હો તિહાં કો પરધાન;
જે પહોંચે તે તુમ સમો, નવિ ભાખે હો કોઈનું વ્યવધાન. ॥२॥
પ્રીતિ કરે તે રાગીયા, જિનવરજી હો તુમે તો વીતરાગ;
પ્રીતડી જેહ અરાગીથી, ભેળવવી હો તે લોકોત્તર માર્ગ. ॥3॥
પ્રીતિ અનાદિની વિષ ભરી, તે રીતે હો કરવા મુજ ભાવ;
કરવી નિર્વિષ પ્રીતડી, કિણ ભાંતે હો કહો બને બનાવ.॥४॥
પ્રીતિ અનંતી પર થકી, જે તોડે હો તે જોડે એહ;
પરમપુરુષથી રાગતા, એકત્વતા હો દાખી ગુણ ગેહ.॥५॥
પ્રભુજીને અવલંબતાં, નિજ પ્રભુતા હો પ્રગટે ગુણ રાશ;
“દેવચંદ્રની સેવના, આપે હો મુજ અવિચલ સુખ વાસ.||૬||`,
      hi: `ऋषभ जिणंदशुं प्रीतडी, कीम कीजे हो कहो चतुर विचार;
प्रभुजी जई अलगा वस्या,
तिहां किणे नवि हो कोई वचन उच्चार. ।।१ ।।
कागळ पण पहोंचे नहि, नवि पहोंचे हो तिहां को परधान;
जे पहोंचे ते तुम समो, नवि भाखे हो कोईनुं व्यवधान. ॥२॥
प्रीति करे ते रागीया, जिनवरजी हो तुमे तो वीतराग;
प्रीतडी जेह अरागीथी, भेळववी हो ते लोकोत्तर मार्ग. ॥3॥
प्रीति अनादिनी विष भरी, ते रीते हो करवा मुज भाव;
करवी निर्विष प्रीतडी, किण भांते हो कहो बने बनाव.॥४॥
प्रीति अनंती पर थकी, जे तोडे हो ते जोडे एह;
परमपुरुषथी रागता, एकत्वता हो दाखी गुण गेह.॥५॥
प्रभुजीने अवलंबतां, निज प्रभुता हो प्रगटे गुण राश;
“देवचंद्रनी सेवना, आपे हो मुज अविचल सुख वास.||६||`,
      sa: "",
      en: `Rushabha jinandashun preetadee, keema keeje ho kaho chatura vichaara;
Prabhujee jaee alagaa vasyaa,
Tihaan kine navi ho koee vachana uchchaara. ||1 ||
Kaagala pana pahonche nahi, navi pahonche ho tihaan ko paradhaana;
Je pahonche te tuma samo, navi bhaakhe ho koeenun vyavadhaana. ||2||
Preeti kare te raageeyaa, jinavarajee ho tume to veetaraaga;
Preetadee jeha araageethee, bhelavavee ho te lokottara maarga. ||3||
Preeti anaadinee visha bharee, te reete ho karavaa muja bhaava;
Karavee nirvisha preetadee, kina bhaante ho kaho bane banaava.||4||
Preeti anantee para thakee, je tode ho te jode eha;
Paramapurushathee raagataa, ekatvataa ho daakhee guna geha.||5||
Prabhujeene avalanbataan, nija prabhutaa ho pragate guna raasha;
“devachandranee sevanaa, aape ho muja avichala sukha vaasa.||6||`,
    },
  },
  {
    id: "rushabh-jineshwar-pritam-mahro",
    type: "bhajan",
    title: {
      gu: "જિનેશ્વર પ્રીતમ માહરો રે, ઓર ન ચાહું રે કંત",
      hi: "जिनेश्वर प्रीतम माहरो रे, ओर न चाहुं रे कंत",
      sa: "",
      en: "Rushabh Jineshwar Pritam Mahro",
    },
    text: {
      gu: `જિનેશ્વર પ્રીતમ માહરો રે, ઓર ન ચાહું રે કંત;
રીઝ્યો સાહિબ સંગ ન પરિહરે રે, ભાંગે સાદિ અનંત.||૧||
પ્રીત સગાઈરે જગમાં સહુ કરે રે, પ્રીત સગાઈ ન કોય;
પ્રીત સગાઈરે નિરુપાધિક કહી રે, સોપાધિક ધન ખોય.||૨||
કોઈ કંત કારણ કાષ્ઠ ભક્ષણ કરે રે, મિલશું કંતને ધાય;
એ મેળો નવિ કદીયે સંભવે રે, મેળો ઠામ ન ઠાય.||૩||
કોઈ પતિરંજન અતિ ઘણું તપ કરે રે, પતિરંજન તન તાપ;
એ પતિરંજન મેં નવિ ચિત્ત ધર્યું રે, રંજન ધાતુ મિલાપ.||૪||
કોઈ કહે લીલા રે અલખ અલખ તણી રે, લખ પૂરે મન આશ;
દોષ રહિતને લીલા નવિ ઘટે રે, લીલા દોષ વિલાસ. ||૫||
ચિત્ત પ્રસન્ને રે પૂજન ફલ કહ્યું રે, પૂજા અખંડિત એહ;
કપટ રહિત થઈ આતમ અરપણા રે, આનંદધન પડ રહે. ||૬||`,
      hi: `जिनेश्वर प्रीतम माहरो रे, ओर न चाहुं रे कंत;
रीझ्यो साहिब संग न परिहरे रे, भांगे सादि अनंत.||१||
प्रीत सगाईरे जगमां सहु करे रे, प्रीत सगाई न कोय;
प्रीत सगाईरे निरुपाधिक कही रे, सोपाधिक धन खोय.||२||
कोई कंत कारण काष्ठ भक्षण करे रे, मिलशुं कंतने धाय;
ए मेळो नवि कदीये संभवे रे, मेळो ठाम न ठाय.||३||
कोई पतिरंजन अति घणुं तप करे रे, पतिरंजन तन ताप;
ए पतिरंजन में नवि चित्त धर्युं रे, रंजन धातु मिलाप.||४||
कोई कहे लीला रे अलख अलख तणी रे, लख पूरे मन आश;
दोष रहितने लीला नवि घटे रे, लीला दोष विलास. ||५||
चित्त प्रसन्ने रे पूजन फल कह्युं रे, पूजा अखंडित एह;
कपट रहित थई आतम अरपणा रे, आनंदधन पड रहे. ||६||`,
      sa: "",
      en: `Jineshvara preetama maaharo re, ora na chaahun re kanta;
Reejhyo saahiba sanga na parihare re, bhaange saadi ananta.||1||
Preeta sagaaeere jagamaan sahu kare re, preeta sagaaee na koya;
Preeta sagaaeere nirupaadhika kahee re, sopaadhika dhana khoya.||2||
Koee kanta kaarana kaashtha bhakshana kare re, milashun kantane dhaaya;
E melo navi kadeeye sanbhave re, melo thaama na thaaya.||3||
Koee patiranjana ati ghanun tapa kare re, patiranjana tana taapa;
E patiranjana men navi chitta dharyun re, ranjana dhaatu milaapa.||4||
Koee kahe leelaa re alakha alakha tanee re, lakha poore mana aasha;
Dosha rahitane leelaa navi ghate re, leelaa dosha vilaasa. ||5||
Chitta prasanne re poojana phala kahyun re, poojaa akhandita eha;
Kapata rahita thaee aatama arapanaa re, aanandadhana pada rahe. ||6||`,
    },
  },
  {
    id: "rushabh-jinraj",
    type: "bhajan",
    title: {
      gu: "ઋષભ જિનરાજ મુજ આજ દિન અતિ ભલો",
      hi: "ऋषभ जिनराज मुज आज दिन अति भलो",
      sa: "",
      en: "Rushabh Jinraj",
    },
    text: {
      gu: `ઋષભ જિનરાજ મુજ આજ દિન અતિ ભલો,
ગુણનીલો જેણે તુજ નયણે દીઠો;
દુઃખ ટળ્યાં સુખ મળ્યાં સ્વામી! તુજ નિરખતાં,
સુકૃત સંચય હુવો પાપ નીઠો.||૧||
કલ્પશાખી ફળ્યો કામઘટ મુજ મલ્યો,
આંગણે અમીયનો મેહ વુઠો;
મુજ મહરાણ મહિભાણ તુજ દર્શને,
ક્ષય ગયો કુમતિ અંધાર જૂઠો.||૨||
કવણ નર કનકમણિ છંડી તૃણ સંગ્રહે?
કવણ કુંજર તજી કરહ લેવે?
કવણ બેસે તજી કલ્પતરુ બાઉલે?
તુજ તજી અવર સુર કોણ સેવે?||૩||
એક મુજ ટેક સુવિવેક સાહિબ સદા,
તુજ વિના દેવ દુજો ન ઇહું;
તુજ વચન-રાગ સુખસાગરે ઝીલતો,
કર્મભર ભ્રમ થકી હું ન.||૪||
કોડી છે દાસ વિભુ! તાહરે ભલભલા,
માહરે દેવ તું એક પ્યારો;
પતિત પાવન સમો જગત ઉદ્ધાર કર,
મહેર કરી મોહે ભવજલધિ તારો.||૫||
અધિક તુજ ભક્તિ મુજ મન વસી,
સબળ પ્રતિબંધ લાગો;
ચમક પાષણ જિમ લોહને ખેંચશે,
મુક્તિને સહજ તુજ ભક્તિરાગો.||૬||
ધન્ય! તે કાય, જેણે પાય, તુજ પ્રણમીયા,
તુજ થુણે જેહ ધન્ય ધન્ય! જિહા;
ધન્ય! તે હૃદય જિણે તુજ સદા સમરીયાં,
ધન્ય! તે રાતને ધન્ય! દિહા.||૭||
ગુણ અનંતા સદા તુજ ખજાને ભર્યા,
એક ગુણ દેત મુજ શું વિમાસો?
રયણ એક દેત શી હાણ રયણાયરે,
લોકની આપદા જેણે નાસો.||૮||
ગંગ સમ રંગ તુજ કીર્તિ કલ્લોલિની,
રવિ થકી અધિક તપતેજ તાજો;
નયવિજય વિબુધ સેવક હું આપનો,
“જશ” કહે અબ મોહે ભવ નિવાજો.||૯||`,
      hi: `ऋषभ जिनराज मुज आज दिन अति भलो,
गुणनीलो जेणे तुज नयणे दीठो;
दुःख टळ्यां सुख मळ्यां स्वामी! तुज निरखतां,
सुकृत संचय हुवो पाप नीठो.||१||
कल्पशाखी फळ्यो कामघट मुज मल्यो,
आंगणे अमीयनो मेह वुठो;
मुज महराण महिभाण तुज दर्शने,
क्षय गयो कुमति अंधार जूठो.||२||
कवण नर कनकमणि छंडी तृण संग्रहे?
कवण कुंजर तजी करह लेवे?
कवण बेसे तजी कल्पतरु बाउले?
तुज तजी अवर सुर कोण सेवे?||३||
एक मुज टेक सुविवेक साहिब सदा,
तुज विना देव दुजो न इहुं;
तुज वचन-राग सुखसागरे झीलतो,
कर्मभर भ्रम थकी हुं न.||४||
कोडी छे दास विभु! ताहरे भलभला,
माहरे देव तुं एक प्यारो;
पतित पावन समो जगत उद्धार कर,
महेर करी मोहे भवजलधि तारो.||५||
अधिक तुज भक्ति मुज मन वसी,
सबळ प्रतिबंध लागो;
चमक पाषण जिम लोहने खेंचशे,
मुक्तिने सहज तुज भक्तिरागो.||६||
धन्य! ते काय, जेणे पाय, तुज प्रणमीया,
तुज थुणे जेह धन्य धन्य! जिहा;
धन्य! ते हृदय जिणे तुज सदा समरीयां,
धन्य! ते रातने धन्य! दिहा.||७||
गुण अनंता सदा तुज खजाने भर्या,
एक गुण देत मुज शुं विमासो?
रयण एक देत शी हाण रयणायरे,
लोकनी आपदा जेणे नासो.||८||
गंग सम रंग तुज कीर्ति कल्लोलिनी,
रवि थकी अधिक तपतेज ताजो;
नयविजय विबुध सेवक हुं आपनो,
“जश” कहे अब मोहे भव निवाजो.||९||`,
      sa: "",
      en: `Rushabha jinaraaja muja aaja dina ati bhalo,
Gunaneelo jene tuja nayane deetho;
Dukha talyaan sukha malyaan svaamee! tuja nirakhataan,
Sukruta sanchaya huvo paapa neetho.||1||
Kalpashaakhee phalyo kaamaghata muja malyo,
Aangane ameeyano meha vutho;
Muja maharaana mahibhaana tuja darshane,
Kshaya gayo kumati andhaara jootho.||2||
Kavana nara kanakamani chhandee truna sangrahe?
Kavana kunjara tajee karaha leve?
Kavana bese tajee kalpataru baaule?
Tuja tajee avara sura kona seve?||3||
Eka muja teka suviveka saahiba sadaa,
Tuja vinaa deva dujo na ihun;
Tuja vachana-raaga sukhasaagare jheelato,
Karmabhara bhrama thakee hun na.||4||
Kodee chhe daasa vibhu! taahare bhalabhalaa,
Maahare deva tun eka pyaaro;
Patita paavana samo jagata uddhaara kara,
Mahera karee mohe bhavajaladhi taaro.||5||
Adhika tuja bhakti muja mana vasee,
Sabala pratibandha laago;
Chamaka paashana jima lohane khenchashe,
Muktine sahaja tuja bhaktiraago.||6||
Dhanya! te kaaya, jene paaya, tuja pranameeyaa,
Tuja thune jeha dhanya dhanya! jihaa;
Dhanya! te hrudaya jine tuja sadaa samareeyaan,
Dhanya! te raatane dhanya! dihaa.||7||
Guna anantaa sadaa tuja khajaane bharyaa,
Eka guna deta muja shun vimaaso?
Rayana eka deta shee haana rayanaayare,
Lokanee aapadaa jene naaso.||8||
Ganga sama ranga tuja keerti kallolinee,
Ravi thakee adhika tapateja taajo;
Nayavijaya vibudha sevaka hun aapano,
“jasha” kahe aba mohe bhava nivaajo.||9||`,
    },
  },
  {
    id: "rushabhdev-hitkari",
    type: "bhajan",
    title: {
      gu: "ઋષભદેવ હિતકારી.. જગતગુરુ! ઋષભદેવ હિતકારી",
      hi: "ऋषभदेव हितकारी.. जगतगुरु! ऋषभदेव हितकारी",
      sa: "",
      en: "Rushabhdev Hitkari",
    },
    text: {
      gu: `ઋષભદેવ હિતકારી.. જગતગુરુ! ઋષભદેવ હિતકારી;
પ્રથમ તીર્થંકર પ્રથમ નરેસર, પ્રથમ યતિ વ્રતધારી. ॥੧॥
વરસીદાન દેઈ તુમ જગ મેં, ઈલતિ ઈતિ નિવારી;
તૈસી કાહી કરત નાહિ કરુણા, સાહિબ બેર હમારી.॥२॥
માંગત નહીં હમ હાથી ઘોડે, ધન કન કંચન નારી;
દીયો મોહે ચરણકમલ કી સેવા, યાહિ લાગત મોહે પ્યારી.।।૩।।
ભવ લીલા વાસિત સુર ડારે, તુમ પર સબ હી ઉવારી;
મેં મેરો મન નિશ્ચલ કીનો, તુમ આણા શિર ધારી. ॥४॥
ઐસો સાહિબ નહિ કોઉં જગ મેં, યાશું હોય દિલદારી;
દિલ હી દલાલ પ્રેમ કે બીચે, તિહાં હઠ ખેંચે ગમારી. ॥५॥
તુમ હો સાહિબ મેં હું બંદા, યા મત દીયો વિસારી;
શ્રી નગવિજય વિબંધ સેવડ કે, તય હો પરમ ઉપકારી. ॥६॥`,
      hi: `ऋषभदेव हितकारी.. जगतगुरु! ऋषभदेव हितकारी;
प्रथम तीर्थंकर प्रथम नरेसर, प्रथम यति व्रतधारी. ॥੧॥
वरसीदान देई तुम जग में, ईलति ईति निवारी;
तैसी काही करत नाहि करुणा, साहिब बेर हमारी.॥२॥
मांगत नहीं हम हाथी घोडे, धन कन कंचन नारी;
दीयो मोहे चरणकमल की सेवा, याहि लागत मोहे प्यारी.।।३।।
भव लीला वासित सुर डारे, तुम पर सब ही उवारी;
में मेरो मन निश्चल कीनो, तुम आणा शिर धारी. ॥४॥
ऐसो साहिब नहि कोउं जग में, याशुं होय दिलदारी;
दिल ही दलाल प्रेम के बीचे, तिहां हठ खेंचे गमारी. ॥५॥
तुम हो साहिब में हुं बंदा, या मत दीयो विसारी;
श्री नगविजय विबंध सेवड के, तय हो परम उपकारी. ॥६॥`,
      sa: "",
      en: `Rushabhadeva hitakaaree.. jagataguru! rushabhadeva hitakaaree;
Prathama teerthankara prathama naresara, prathama yati vratadhaaree. ||1||
Varaseedaana deee tuma jaga men, eelati eeti nivaaree;
Taisee kaahee karata naahi karunaa, saahiba bera hamaaree.||2||
Maangata naheen hama haathee ghode, dhana kana kanchana naaree;
Deeyo mohe charanakamala kee sevaa, yaahi laagata mohe pyaaree.||3||
Bhava leelaa vaasita sura daare, tuma para saba hee uvaaree;
Men mero mana nishchala keeno, tuma aanaa shira dhaaree. ||4||
Aiso saahiba nahi koun jaga men, yaashun hoya diladaaree;
Dila hee dalaala prema ke beeche, tihaan hatha khenche gamaaree. ||5||
Tuma ho saahiba men hun bandaa, yaa mata deeyo visaaree;
Shree nagavijaya vibandha sevada ke, taya ho parama upakaaree. ||6||`,
    },
  },
  {
    id: "sahaj-gun-aagro-swami",
    type: "bhajan",
    title: {
      gu: "સહજ ગુણ આગરો સ્વામી સુખ સાગરો",
      hi: "सहज गुण आगरो स्वामी सुख सागरो",
      sa: "",
      en: "Sahaj Gun Aagro Swami",
    },
    text: {
      gu: `સહજ ગુણ આગરો સ્વામી સુખ સાગરો,
જ્ઞાન વયરાગરો પ્રભુ સવાયો;
શુદ્ધતા એકતા તીક્ષ્ણતા ભાવથી,
મોહરિપુ જીતી જય પડહ વાયો.||૧||
વસ્તુ નિજ ભાવ અવિભાસ નિઃકલંકતા,
પરિણતિ વૃત્તિતા કરી અભેદે;
ભાવ તાદાત્મ્યતા શક્તિ ઉલ્લાસથી,
સંતતિ યોગને તું ઉછેદે.||૨||
દોષ ગુણ વસ્તુની લખીય યથાર્થતા,
લહી ઉદાસીનતા અપર ભાવે;
ધ્વંશી તજ્જન્યતા ભાવ કર્તાપણુ;
પરમ પ્રભુ તું રમ્યો નિજ સ્વભાવે.||૩||
શુભ અશુભ અવિભાસ તહકીકતા,
શુભ અશુભ ભાવ તિહાં પ્રભુ ન કીધો;
શુદ્ધ પરિણામતા વીર્ય કર્તા થઈ,
પરમ અક્રિયતા અમૃત પીધો.||૪||
શુદ્ધતા પ્રભુતણી આત્મભાવે રમે,
પરમાત્મતા તાસ થાયે;
મિશ્ર ભાવે અછે ત્રિગુણની ભિન્નતા,
એકત્વ તુજ ચરણ આયે.||૫||
રસભરી સર્વ જન શંકરી,
મૂર્તિ જિનરાજની આજ ભેટી;
કારણે કાર્ય નિષ્પત્તિ શ્રદ્ધાન છે,
તિણે ભવ ભ્રમણની ભીડ મેટી.||૬||
નયર ખંભાયતે પાર્શ્વ પ્રભુ દરશને,
વિકસતે હર્ષ ઉત્સાહ વાધ્યો;
હેતુ એકત્વતા રમણ પરિણામથી,
સિદ્ધિ સાધકપણો આજ સાધ્યો.||૭||
આજ કૃત પુણ્ય ધન દીહ માહરો થયો,
આજ નર જન્મ મેં સફલ ભાવ્યો;
“દેવચંદ્ર’ સ્વામી ત્રેવીશમો વંદીયો,
ભક્તિભર ચિત્ત તુજ ગુણ રમાવ્.||૮||`,
      hi: `सहज गुण आगरो स्वामी सुख सागरो,
ज्ञान वयरागरो प्रभु सवायो;
शुद्धता एकता तीक्ष्णता भावथी,
मोहरिपु जीती जय पडह वायो.||१||
वस्तु निज भाव अविभास निःकलंकता,
परिणति वृत्तिता करी अभेदे;
भाव तादात्म्यता शक्ति उल्लासथी,
संतति योगने तुं उछेदे.||२||
दोष गुण वस्तुनी लखीय यथार्थता,
लही उदासीनता अपर भावे;
ध्वंशी तज्जन्यता भाव कर्तापणु;
परम प्रभु तुं रम्यो निज स्वभावे.||३||
शुभ अशुभ अविभास तहकीकता,
शुभ अशुभ भाव तिहां प्रभु न कीधो;
शुद्ध परिणामता वीर्य कर्ता थई,
परम अक्रियता अमृत पीधो.||४||
शुद्धता प्रभुतणी आत्मभावे रमे,
परमात्मता तास थाये;
मिश्र भावे अछे त्रिगुणनी भिन्नता,
एकत्व तुज चरण आये.||५||
रसभरी सर्व जन शंकरी,
मूर्ति जिनराजनी आज भेटी;
कारणे कार्य निष्पत्ति श्रद्धान छे,
तिणे भव भ्रमणनी भीड मेटी.||६||
नयर खंभायते पार्श्व प्रभु दरशने,
विकसते हर्ष उत्साह वाध्यो;
हेतु एकत्वता रमण परिणामथी,
सिद्धि साधकपणो आज साध्यो.||७||
आज कृत पुण्य धन दीह माहरो थयो,
आज नर जन्म में सफल भाव्यो;
“देवचंद्र’ स्वामी त्रेवीशमो वंदीयो,
भक्तिभर चित्त तुज गुण रमाव्.||८||`,
      sa: "",
      en: `Sahaja guna aagaro svaamee sukha saagaro,
Jnyaana vayaraagaro prabhu savaayo;
Shuddhataa ekataa teekshnataa bhaavathee,
Moharipu jeetee jaya padaha vaayo.||1||
Vastu nija bhaava avibhaasa nikalankataa,
Parinati vruttitaa karee abhede;
Bhaava taadaatmyataa shakti ullaasathee,
Santati yogane tun uchhede.||2||
Dosha guna vastunee lakheeya yathaarthataa,
Lahee udaaseenataa apara bhaave;
Dhvanshee tajjanyataa bhaava kartaapanu;
Parama prabhu tun ramyo nija svabhaave.||3||
Shubha ashubha avibhaasa tahakeekataa,
Shubha ashubha bhaava tihaan prabhu na keedho;
Shuddha parinaamataa veerya kartaa thaee,
Parama akriyataa amruta peedho.||4||
Shuddhataa prabhutanee aatmabhaave rame,
Paramaatmataa taasa thaaye;
Mishra bhaave achhe trigunanee bhinnataa,
Ekatva tuja charana aaye.||5||
Rasabharee sarva jana shankaree,
Moorti jinaraajanee aaja bhetee;
Kaarane kaarya nishpatti shraddhaana chhe,
Tine bhava bhramananee bheeda metee.||6||
Nayara khanbhaayate paarshva prabhu darashane,
Vikasate harsha utsaaha vaadhyo;
Hetu ekatvataa ramana parinaamathee,
Siddhi saadhakapano aaja saadhyo.||7||
Aaja kruta punya dhana deeha maaharo thayo,
Aaja nara janma men saphala bhaavyo;
“devachandra’ svaamee treveeshamo vandeeyo,
Bhaktibhara chitta tuja guna ramaav.||8||`,
    },
  },
  {
    id: "saahela-hai-kunthu-jineshwar-dev",
    type: "bhajan",
    title: {
      gu: "સાહેલાં હે કુંથુ જિનેશ્વર! દેવ, રત્નદીપક અતિ દીપતો હો લાલ",
      hi: "साहेलां हे कुंथु जिनेश्वर! देव, रत्नदीपक अति दीपतो हो लाल",
      sa: "",
      en: "Saahela Hai Kunthu Jineshwar Dev",
    },
    text: {
      gu: `સાહેલાં હે કુંથુ જિનેશ્વર! દેવ, રત્નદીપક અતિ દીપતો હો લાલ;
સાહેલાં હે મુજ મનમાંહે, આવે જે અરિબલ જીપતો હો લાલ.||૧||
સાહેલાં હે મીટે તો મોહ અંધકાર, અનુભવ તેજે ઝળહળે હો લાલ;
સાહેલાં હે ધૂમ કષાય ન રખે,
ચરણ ચિત્રામણ નવિ ચલે હો લાલ.||૨||
સાહેલાં હે પાત્ર કરે નહિ હેઠ, સૂરજ તેજે નવિ છીપે હો લાલ;
સાહેલાં હે સર્વ તેજનું તેજ, પહેલાંથી વાધે પછે હો લાલ.||૩||
સાહેલાં હે જેહ ન સમીરને ગમ્ય, ચંચલતા જે નવિ લહે હો લાલ;
સાહેલાં હે જે સદા છે રમ્ય, પુષ્ટ ગુણે નવિ કૃશ રહે હો લાલ.||૪||
સાહેલાં હે પુદ્રલ તેલ ન ખેપ, જેહ ન શુદ્ધ દશા દહે રે લાલ;
સાહેલાં હે શ્રી નયવિજય સુશિષ્ય,
“વાચક યશ” એણી પેરે કહે રે લાલ.||૫||`,
      hi: `साहेलां हे कुंथु जिनेश्वर! देव, रत्नदीपक अति दीपतो हो लाल;
साहेलां हे मुज मनमांहे, आवे जे अरिबल जीपतो हो लाल.||१||
साहेलां हे मीटे तो मोह अंधकार, अनुभव तेजे झळहळे हो लाल;
साहेलां हे धूम कषाय न रखे,
चरण चित्रामण नवि चले हो लाल.||२||
साहेलां हे पात्र करे नहि हेठ, सूरज तेजे नवि छीपे हो लाल;
साहेलां हे सर्व तेजनुं तेज, पहेलांथी वाधे पछे हो लाल.||३||
साहेलां हे जेह न समीरने गम्य, चंचलता जे नवि लहे हो लाल;
साहेलां हे जे सदा छे रम्य, पुष्ट गुणे नवि कृश रहे हो लाल.||४||
साहेलां हे पुद्रल तेल न खेप, जेह न शुद्ध दशा दहे रे लाल;
साहेलां हे श्री नयविजय सुशिष्य,
“वाचक यश” एणी पेरे कहे रे लाल.||५||`,
      sa: "",
      en: `Saahelaan he kunthu jineshvara! deva, ratnadeepaka ati deepato ho laala;
Saahelaan he muja manamaanhe, aave je aribala jeepato ho laala.||1||
Saahelaan he meete to moha andhakaara, anubhava teje jhalahale ho laala;
Saahelaan he dhooma kashaaya na rakhe,
Charana chitraamana navi chale ho laala.||2||
Saahelaan he paatra kare nahi hetha, sooraja teje navi chheepe ho laala;
Saahelaan he sarva tejanun teja, pahelaanthee vaadhe pachhe ho laala.||3||
Saahelaan he jeha na sameerane gamya, chanchalataa je navi lahe ho laala;
Saahelaan he je sadaa chhe ramya, pushta gune navi krusha rahe ho laala.||4||
Saahelaan he pudrala tela na khepa, jeha na shuddha dashaa dahe re laala;
Saahelaan he shree nayavijaya sushishya,
“vaachaka yasha” enee pere kahe re laala.||5||`,
    },
  },
  {
    id: "samarath-sahib-samta-dariyo",
    type: "bhajan",
    title: {
      gu: "સમતા દરિયો, ગિરુઓ જિનપતિ ગુણમણિ ભરિયો",
      hi: "समता दरियो, गिरुओ जिनपति गुणमणि भरियो",
      sa: "",
      en: "Samarath Sahib Samta Dariyo",
    },
    text: {
      gu: `સમતા દરિયો, ગિરુઓ જિનપતિ ગુણમણિ ભરિયો;
નાભિ નરેસર નંદન દીઠો, માહરે નયણે અમીય પઈઠો. ॥१॥
ઘર આંગણે સુરતરુ ફળીયો, કરે ચિંતામણિ આવી મળીયો;
આંગણે અમીયના મેહ વૂઠા, સમકિત દૃષ્ટિ સુર સવિ તૂઠા. ॥२॥
મુજ મંદિર સુરધેનુ બંધાણી, પ્રભુશું વાધી પ્રીતિ પુરાની;
કામ કલશ પણ સામો આયો, પ્રભુ દેખી મેં બહુ સુખ પાયો. ॥૩॥
અષ્ટમહાસિદ્ધિ આવે હોડી, નવનિધિ તો મુજ પાસ ન છોડી;
પ્રભુ ધ્યાને નવિ કાંઈ અધૂરું, જિહાં જોઈ તિહાં દીસે પૂરું. ॥४॥
પૂરવ પુણ્ય અંકુરા જાગ્યા, આજ ઢળિયા મુજ પાસા માંગ્યા;
શંખ દક્ષિણાવર્ત તે લહિયો, પ્રભુ દેખી હું અતિ ગહગહિયો. ।।૫।।
ગુરુ આશિષ ફળી મુજ સારી, ભવની ભાવઠ દૂર નિવારી;
નયન મિલાવે મિલીયો સ્વામી, તો મેં સહેજે મુગતિ જ પામી. ।।૬।।
ધન્ય દિવસને ધન્ય એ વેલા, જિહાં હુઆ તુજ દરિશન ભેલા;
ચકોરા મેહા મોરા, તિમ અમે ચાહું દરિશન તોરા. ॥७॥
ભવભય ભગતિ ગુણાદર પૂરો, દર્શન દેઈ પાતક ચૂરો;
જો જાણો તો અધિકું દેયો, પણ એહમાં ઓછું મ કરેયો.॥८॥
શ્રી નયવિજય વિબુધને સીસે, વાચક “જસવિજયે સુજગીશે;
રીસહેસરના ગણ ગાયા તેહથી નિજ મનવાંછિત પાયા ||૯||`,
      hi: `समता दरियो, गिरुओ जिनपति गुणमणि भरियो;
नाभि नरेसर नंदन दीठो, माहरे नयणे अमीय पईठो. ॥१॥
घर आंगणे सुरतरु फळीयो, करे चिंतामणि आवी मळीयो;
आंगणे अमीयना मेह वूठा, समकित दृष्टि सुर सवि तूठा. ॥२॥
मुज मंदिर सुरधेनु बंधाणी, प्रभुशुं वाधी प्रीति पुरानी;
काम कलश पण सामो आयो, प्रभु देखी में बहु सुख पायो. ॥३॥
अष्टमहासिद्धि आवे होडी, नवनिधि तो मुज पास न छोडी;
प्रभु ध्याने नवि कांई अधूरुं, जिहां जोई तिहां दीसे पूरुं. ॥४॥
पूरव पुण्य अंकुरा जाग्या, आज ढळिया मुज पासा मांग्या;
शंख दक्षिणावर्त ते लहियो, प्रभु देखी हुं अति गहगहियो. ।।५।।
गुरु आशिष फळी मुज सारी, भवनी भावठ दूर निवारी;
नयन मिलावे मिलीयो स्वामी, तो में सहेजे मुगति ज पामी. ।।६।।
धन्य दिवसने धन्य ए वेला, जिहां हुआ तुज दरिशन भेला;
चकोरा मेहा मोरा, तिम अमे चाहुं दरिशन तोरा. ॥७॥
भवभय भगति गुणादर पूरो, दर्शन देई पातक चूरो;
जो जाणो तो अधिकुं देयो, पण एहमां ओछुं म करेयो.॥८॥
श्री नयविजय विबुधने सीसे, वाचक “जसविजये सुजगीशे;
रीसहेसरना गण गाया तेहथी निज मनवांछित पाया ||९||`,
      sa: "",
      en: `Samataa dariyo, giruo jinapati gunamani bhariyo;
Naabhi naresara nandana deetho, maahare nayane ameeya paeetho. ||1||
Ghara aangane surataru phaleeyo, kare chintaamani aavee maleeyo;
Aangane ameeyanaa meha voothaa, samakita drushti sura savi toothaa. ||2||
Muja mandira suradhenu bandhaanee, prabhushun vaadhee preeti puraanee;
Kaama kalasha pana saamo aayo, prabhu dekhee men bahu sukha paayo. ||3||
Ashtamahaasiddhi aave hodee, navanidhi to muja paasa na chhodee;
Prabhu dhyaane navi kaanee adhoorun, jihaan joee tihaan deese poorun. ||4||
Poorava punya ankuraa jaagyaa, aaja dhaliyaa muja paasaa maangyaa;
Shankha dakshinaavarta te lahiyo, prabhu dekhee hun ati gahagahiyo. ||5||
Guru aashisha phalee muja saaree, bhavanee bhaavatha doora nivaaree;
Nayana milaave mileeyo svaamee, to men saheje mugati ja paamee. ||6||
Dhanya divasane dhanya e velaa, jihaan huaa tuja darishana bhelaa;
Chakoraa mehaa moraa, tima ame chaahun darishana toraa. ||7||
Bhavabhaya bhagati gunaadara pooro, darshana deee paataka chooro;
Jo jaano to adhikun deyo, pana ehamaan ochhun ma kareyo.||8||
Shree nayavijaya vibudhane seese, vaachaka “jasavijaye sujageeshe;
Reesahesaranaa gana gaayaa tehathee nija manavaanchhita paayaa ||9||`,
    },
  },
  {
    id: "samavasaran-besi-kari-re",
    type: "bhajan",
    title: {
      gu: "સમવસરણ બેસી કરી રે, બારહ પરષદામાંહિ, સ્વરુપ પ્રકાશતા રે",
      hi: "समवसरण बेसी करी रे, बारह परषदामांहि, स्वरुप प्रकाशता रे",
      sa: "",
      en: "Samavasaran Besi Kari Re",
    },
    text: {
      gu: `સમવસરણ બેસી કરી રે, બારહ પરષદામાંહિ, સ્વરુપ પ્રકાશતા રે,
કરુણાકર જગનાહો રે; નિર્મલ તુજ મુખવાણી રે, જે શ્રવણે સુણે,
તેહિ જ ગુણમણિ ખાણી રે, કુંથું જિનેસરું રે.||૧||
ગુણપર્યાય અનંતતા રે, વળી સ્વભાવ અગાહ;
નયગમ ભંગ નિક્ષેપના રે,હેય અદેય પ્રવાહો રે.||૨||
કુંથુનાથ પ્રભુ દેશના રે, સાધન સાધક સિદ્ધ;
ગૌણ મુખ્યતા વચનમાં રે, જ્ઞાન તે સકલ સમૃદ્ધો રે.||૩||
વસ્તુ અનંત સ્વભાવ છે રે, અનંત કથક તસુ નામ;
ગ્રાહક અવસર બોધથી રે, કહવે અર્પિત કામો રે.||૪||
શેષ અનર્પિત ધર્મને રે, સાપેક્ષ શ્રદ્ધા બોધ;
ઉભય રહિત ભાસન હોવે રે, પ્રગટે કેવલ બોધો રે.||૫||
છતી પરિણતિ ગુણ વર્તના રે, ભાસન ભોગ આનંદ;
સમ કાળે પ્રભુ તાહરેરે, રમ્ય રમણ ગુણવૃંદો રે.||૬||
નિજ ભાવે સિય રે, પર નાસ્તિત્વ સ્વભાવ;
અસ્તિપણે તે નાસ્તિતા રે, સિય તે ઉભય સ્વભાવો રે.||૭||
અસ્તિ સ્વભાવ જે આપણો રે, રુચિ વૈરાગ્ય સમેત;
પ્રભુ સન્મુખ વંદન કરી રે, માંગીશ આતમ હેતો રે.||૮||
અસ્તિ સ્વભાવ જે રુચિ થઈ રે, ધ્યાતો અસ્તિ સ્વભાવ;
“દેવચંદ્ર’ પદ તે લહેરે, પરમાનંદ જમાવો રે.||૯||`,
      hi: `समवसरण बेसी करी रे, बारह परषदामांहि, स्वरुप प्रकाशता रे,
करुणाकर जगनाहो रे; निर्मल तुज मुखवाणी रे, जे श्रवणे सुणे,
तेहि ज गुणमणि खाणी रे, कुंथुं जिनेसरुं रे.||१||
गुणपर्याय अनंतता रे, वळी स्वभाव अगाह;
नयगम भंग निक्षेपना रे,हेय अदेय प्रवाहो रे.||२||
कुंथुनाथ प्रभु देशना रे, साधन साधक सिद्ध;
गौण मुख्यता वचनमां रे, ज्ञान ते सकल समृद्धो रे.||३||
वस्तु अनंत स्वभाव छे रे, अनंत कथक तसु नाम;
ग्राहक अवसर बोधथी रे, कहवे अर्पित कामो रे.||४||
शेष अनर्पित धर्मने रे, सापेक्ष श्रद्धा बोध;
उभय रहित भासन होवे रे, प्रगटे केवल बोधो रे.||५||
छती परिणति गुण वर्तना रे, भासन भोग आनंद;
सम काळे प्रभु ताहरेरे, रम्य रमण गुणवृंदो रे.||६||
निज भावे सिय रे, पर नास्तित्व स्वभाव;
अस्तिपणे ते नास्तिता रे, सिय ते उभय स्वभावो रे.||७||
अस्ति स्वभाव जे आपणो रे, रुचि वैराग्य समेत;
प्रभु सन्मुख वंदन करी रे, मांगीश आतम हेतो रे.||८||
अस्ति स्वभाव जे रुचि थई रे, ध्यातो अस्ति स्वभाव;
“देवचंद्र’ पद ते लहेरे, परमानंद जमावो रे.||९||`,
      sa: "",
      en: `Samavasarana besee karee re, baaraha parashadaamaanhi, svarupa prakaashataa re,
Karunaakara jaganaaho re; nirmala tuja mukhavaanee re, je shravane sune,
Tehi ja gunamani khaanee re, kunthun jinesarun re.||1||
Gunaparyaaya anantataa re, valee svabhaava agaaha;
Nayagama bhanga nikshepanaa re,heya adeya pravaaho re.||2||
Kunthunaatha prabhu deshanaa re, saadhana saadhaka siddha;
Gauna mukhyataa vachanamaan re, jnyaana te sakala samruddho re.||3||
Vastu ananta svabhaava chhe re, ananta kathaka tasu naama;
Graahaka avasara bodhathee re, kahave arpita kaamo re.||4||
Shesha anarpita dharmane re, saapeksha shraddhaa bodha;
Ubhaya rahita bhaasana hove re, pragate kevala bodho re.||5||
Chhatee parinati guna vartanaa re, bhaasana bhoga aananda;
Sama kaale prabhu taaharere, ramya ramana gunavrundo re.||6||
Nija bhaave siya re, para naastitva svabhaava;
Astipane te naastitaa re, siya te ubhaya svabhaavo re.||7||
Asti svabhaava je aapano re, ruchi vairaagya sameta;
Prabhu sanmukha vandana karee re, maangeesha aatama heto re.||8||
Asti svabhaava je ruchi thaee re, dhyaato asti svabhaava;
“devachandra’ pada te lahere, paramaananda jamaavo re.||9||`,
    },
  },
  {
    id: "samay-samay-so-var-sambharu",
    type: "bhajan",
    title: {
      gu: "સમય સમય સો વાર સંભારું, તુજશું લગની જોર રે",
      hi: "समय समय सो वार संभारुं, तुजशुं लगनी जोर रे",
      sa: "",
      en: "Samay Samay So Var Sambharu",
    },
    text: {
      gu: `સમય સમય સો વાર સંભારું, તુજશું લગની જોર રે;
મોહન મુજરો માની લેજો, જ્યું જલધર પ્રીતિ મોર રે.॥੧॥
માહરે તન ધન જીવન તું હી, એહમાં જૂઠ ન જાણો રે;
અંતરજામી જગજન નેતા, તું કિહાં નથી છાનો રે.॥२॥
જેણે તુજને હિયડે નવિ ધ્યાયો, તાસ જનમ કુણ લેખે રે?
કાચે રાચે તે નર મૂરખ, રતનને દૂર ઉવેખે રે.॥३॥
સુરતરુ છાયા મૂકી ગહરી, બાવળ તળે કુણ બેસે રે?
તાહરી ઓલગ લાગે મીઠી, કિમ છોડાય વિશેષે રે.॥४॥
વામાનંદન પાર્શ્વ પ્રભુજી, અરજી ચિત્તમાં આણો રે;
રૂપ વિબુધનો “મોહન” પભણે, નિજ સેવક કરી જાણો રે. ॥५॥`,
      hi: `समय समय सो वार संभारुं, तुजशुं लगनी जोर रे;
मोहन मुजरो मानी लेजो, ज्युं जलधर प्रीति मोर रे.॥੧॥
माहरे तन धन जीवन तुं ही, एहमां जूठ न जाणो रे;
अंतरजामी जगजन नेता, तुं किहां नथी छानो रे.॥२॥
जेणे तुजने हियडे नवि ध्यायो, तास जनम कुण लेखे रे?
काचे राचे ते नर मूरख, रतनने दूर उवेखे रे.॥३॥
सुरतरु छाया मूकी गहरी, बावळ तळे कुण बेसे रे?
ताहरी ओलग लागे मीठी, किम छोडाय विशेषे रे.॥४॥
वामानंदन पार्श्व प्रभुजी, अरजी चित्तमां आणो रे;
रूप विबुधनो “मोहन” पभणे, निज सेवक करी जाणो रे. ॥५॥`,
      sa: "",
      en: `Samaya samaya so vaara sanbhaarun, tujashun laganee jora re;
Mohana mujaro maanee lejo, jyun jaladhara preeti mora re.||1||
Maahare tana dhana jeevana tun hee, ehamaan jootha na jaano re;
Antarajaamee jagajana netaa, tun kihaan nathee chhaano re.||2||
Jene tujane hiyade navi dhyaayo, taasa janama kuna lekhe re?
Kaache raache te nara moorakha, ratanane doora uvekhe re.||3||
Surataru chhaayaa mookee gaharee, baavala tale kuna bese re?
Taaharee olaga laage meethee, kima chhodaaya visheshe re.||4||
Vaamaanandana paarshva prabhujee, arajee chittamaan aano re;
Roopa vibudhano “mohana” pabhane, nija sevaka karee jaano re. ||5||`,
    },
  },
  {
    id: "sambhav-jin-jab",
    type: "bhajan",
    title: {
      gu: "સંભવ જિન જબ નયન મિલ્યો હો",
      hi: "संभव जिन जब नयन मिल्यो हो",
      sa: "",
      en: "Sambhav Jin Jab",
    },
    text: {
      gu: `સંભવ જિન જબ નયન મિલ્યો હો,
સંભવ જિન જબ નયન મિલ્યો હો,
પ્રગટે પૂરવ પુણ્ય કે અંકુર,
તબ થેં દિન મોહી સફલ વળ્યો હો;
અબ થેં વિષય પંક કલન મેં,
બેહર નવિ જાઉં કલ્યો હો.||૧||
અંગન મેં અમિયે મેહ વૂઠે,
જન્મ તાપ કો વ્યાપ ગલ્યો હો;
બોધિ બીજ પ્રગટ્યો તિહું જગ મેં,
તપ સંયમ કો ખેત ફલ્યો હો.||૨||
જેસી ભક્તિ તૈસી પ્રભુ કરુણા,
શ્વેત શંખ મેં દૂધ ભળ્યો હો;
દરશન થેં નવિનિધ મેં પાઈ,
દુખ દોહગ સવિ દૂર ટળ્યો હો.||૩||
ડરત ફિરત હે દૂર હી દિલ થેં,
મોહમલ્લ જિણે જગત્રણ છળ્યો હો;
સમકિત રતન લહું દરિસણ ર્થે,
અબ નવિ જાઉં ફુગતિ રુલ્યો હો.||૪||
નેહ નજર ભર નિરખત હી,
મુજ પ્રભુશું હિયડો હેજે હલ્યો હો;
શ્રી નયવિજય વિબુધ સેવક કું,
સાહિબ સુરતરુ હોઈ ફલ્યો હો.||૫||`,
      hi: `संभव जिन जब नयन मिल्यो हो,
संभव जिन जब नयन मिल्यो हो,
प्रगटे पूरव पुण्य के अंकुर,
तब थें दिन मोही सफल वळ्यो हो;
अब थें विषय पंक कलन में,
बेहर नवि जाउं कल्यो हो.||१||
अंगन में अमिये मेह वूठे,
जन्म ताप को व्याप गल्यो हो;
बोधि बीज प्रगट्यो तिहुं जग में,
तप संयम को खेत फल्यो हो.||२||
जेसी भक्ति तैसी प्रभु करुणा,
श्वेत शंख में दूध भळ्यो हो;
दरशन थें नविनिध में पाई,
दुख दोहग सवि दूर टळ्यो हो.||३||
डरत फिरत हे दूर ही दिल थें,
मोहमल्ल जिणे जगत्रण छळ्यो हो;
समकित रतन लहुं दरिसण र्थे,
अब नवि जाउं फुगति रुल्यो हो.||४||
नेह नजर भर निरखत ही,
मुज प्रभुशुं हियडो हेजे हल्यो हो;
श्री नयविजय विबुध सेवक कुं,
साहिब सुरतरु होई फल्यो हो.||५||`,
      sa: "",
      en: `Sanbhava jina jaba nayana milyo ho,
Sanbhava jina jaba nayana milyo ho,
Pragate poorava punya ke ankura,
Taba then dina mohee saphala valyo ho;
Aba then vishaya panka kalana men,
Behara navi jaaun kalyo ho.||1||
Angana men amiye meha voothe,
Janma taapa ko vyaapa galyo ho;
Bodhi beeja pragatyo tihun jaga men,
Tapa sanyama ko kheta phalyo ho.||2||
Jesee bhakti taisee prabhu karunaa,
Shveta shankha men doodha bhalyo ho;
Darashana then navinidha men paaee,
Dukha dohaga savi doora talyo ho.||3||
Darata phirata he doora hee dila then,
Mohamalla jine jagatrana chhalyo ho;
Samakita ratana lahun darisana rthe,
Aba navi jaaun phugati rulyo ho.||4||
Neha najara bhara nirakhata hee,
Muja prabhushun hiyado heje halyo ho;
Shree nayavijaya vibudha sevaka kun,
Saahiba surataru hoee phalyo ho.||5||`,
    },
  },
  {
    id: "sambhav-jinvar-vinanti",
    type: "bhajan",
    title: {
      gu: "સંભવ જિનવર વિનંતી, અવધારો ગુણ જ્ઞાતા રે",
      hi: "संभव जिनवर विनंती, अवधारो गुण ज्ञाता रे",
      sa: "",
      en: "Sambhav Jinvar Vinanti",
    },
    text: {
      gu: `સંભવ જિનવર વિનંતી, અવધારો ગુણ જ્ઞાતા રે;
ખામી નહિ મુજ ખિજમતે, કદીયે હોશો ફલ દાતા રે.||૧||
કરજોડી ઊભો રહું, રાત-દિવસ તુમ ધ્યાને રે;
જો મનમાં આણો નહીં, તો શું કહીએ થાને રે.||૨||
ખોટ ખજાને કો નહીં, દીજિયે વાંછિત દાનો રે;
કરુણા નજર પ્રભુજી તણી, વાધે સેવક વાનો રે.||૩||
કાળ મુજ મતિ ગણો, ભાવ લબ્ધિ તુમ હાથે રે;
લડથડતું પણ ગજબચ્ચું, ગાજે ગયવર સાથે રે.||૪||
દેશો તો તુમ હી ભલા, બીજા તો નવિ યાચું રે;
વાચક “યશ” કહે સાંઈશું, ફલશે એ મુજ સાચું રે.||૫||`,
      hi: `संभव जिनवर विनंती, अवधारो गुण ज्ञाता रे;
खामी नहि मुज खिजमते, कदीये होशो फल दाता रे.||१||
करजोडी ऊभो रहुं, रात-दिवस तुम ध्याने रे;
जो मनमां आणो नहीं, तो शुं कहीए थाने रे.||२||
खोट खजाने को नहीं, दीजिये वांछित दानो रे;
करुणा नजर प्रभुजी तणी, वाधे सेवक वानो रे.||३||
काळ मुज मति गणो, भाव लब्धि तुम हाथे रे;
लडथडतुं पण गजबच्चुं, गाजे गयवर साथे रे.||४||
देशो तो तुम ही भला, बीजा तो नवि याचुं रे;
वाचक “यश” कहे सांईशुं, फलशे ए मुज साचुं रे.||५||`,
      sa: "",
      en: `Sanbhava jinavara vinantee, avadhaaro guna jnyaataa re;
Khaamee nahi muja khijamate, kadeeye hosho phala daataa re.||1||
Karajodee oobho rahun, raata-divasa tuma dhyaane re;
Jo manamaan aano naheen, to shun kaheee thaane re.||2||
Khota khajaane ko naheen, deejiye vaanchhita daano re;
Karunaa najara prabhujee tanee, vaadhe sevaka vaano re.||3||
Kaala muja mati gano, bhaava labdhi tuma haathe re;
Ladathadatun pana gajabachchun, gaaje gayavara saathe re.||4||
Desho to tuma hee bhalaa, beejaa to navi yaachun re;
Vaachaka “yasha” kahe saaneeshun, phalashe e muja saachun re.||5||`,
    },
  },
  {
    id: "sambhavdev-te-ghur-savo-save-re",
    type: "bhajan",
    title: {
      gu: "સંભવદેવ તે ધુર સેવો સવે રે, લહિ પ્રભુ સેવન ભેદ",
      hi: "संभवदेव ते धुर सेवो सवे रे, लहि प्रभु सेवन भेद",
      sa: "",
      en: "Sambhavdev Te Ghur Savo Save Re",
    },
    text: {
      gu: `સંભવદેવ તે ધુર સેવો સવે રે, લહિ પ્રભુ સેવન ભેદ;
સેવન કારણ પહેલી ભૂમિકા રે, અભય અદ્વેષ અખેદ, સં૦।। ૧ ।।
ચંચલતા હો જે પરિણામની રે, દ્વેષ અરોચક ભાવ;
ખેદ પ્રવૃત્તિ હો કરતાં થાકીએ રે, દોષ અબોધ લખાવ.||૨||
ચરામાવર્ત હો ચરમ કરણ તથા રે, ભવપરિણતિ પરિપાક;
સં૦ગારા દોષ ટળે વળી દૃષ્ટિ ખુલે ભલી રે,
પ્રાપ્તિ પ્રવચન વાક. સં૦ ||૩ ।।
પરિચય પાતિક ઘાતક સાધુ શું રે, અકુશલ અપચય ચેત;
ગ્રંથ અધ્યાતમ શ્રવણ મનન કરી રે, પરિશીલન નય હેત. સં૦ ॥૪ ॥
કારણ જોગે હો કારજ નીપજે રે, એમાં કોઈ ન વાદ;
પણ કારણ વિણ કારજ સાધીયે રે, એ નિજ મત ઉન્માદ.||૫||
મુગ્ધ સુગમ કરી સેવન આદરે રે,સેવન અગમ અનુપ
દેજો કદાચિત સેવક યાચના રે, આંનંધન રસ રુપ. ||૬||`,
      hi: `संभवदेव ते धुर सेवो सवे रे, लहि प्रभु सेवन भेद;
सेवन कारण पहेली भूमिका रे, अभय अद्वेष अखेद, सं०।। १ ।।
चंचलता हो जे परिणामनी रे, द्वेष अरोचक भाव;
खेद प्रवृत्ति हो करतां थाकीए रे, दोष अबोध लखाव.||२||
चरामावर्त हो चरम करण तथा रे, भवपरिणति परिपाक;
सं०गारा दोष टळे वळी दृष्टि खुले भली रे,
प्राप्ति प्रवचन वाक. सं० ||३ ।।
परिचय पातिक घातक साधु शुं रे, अकुशल अपचय चेत;
ग्रंथ अध्यातम श्रवण मनन करी रे, परिशीलन नय हेत. सं० ॥४ ॥
कारण जोगे हो कारज नीपजे रे, एमां कोई न वाद;
पण कारण विण कारज साधीये रे, ए निज मत उन्माद.||५||
मुग्ध सुगम करी सेवन आदरे रे,सेवन अगम अनुप
देजो कदाचित सेवक याचना रे, आंनंधन रस रुप. ||६||`,
      sa: "",
      en: `Sanbhavadeva te dhura sevo save re, lahi prabhu sevana bheda;
Sevana kaarana pahelee bhoomikaa re, abhaya advesha akheda, san0|| 1 ||
Chanchalataa ho je parinaamanee re, dvesha arochaka bhaava;
Kheda pravrutti ho karataan thaakeee re, dosha abodha lakhaava.||2||
Charaamaavarta ho charama karana tathaa re, bhavaparinati paripaaka;
San0gaaraa dosha tale valee drushti khule bhalee re,
Praapti pravachana vaaka. san0 ||3 ||
Parichaya paatika ghaataka saadhu shun re, akushala apachaya cheta;
Grantha adhyaatama shravana manana karee re, parisheelana naya heta. san0 ||4 ||
Kaarana joge ho kaaraja neepaje re, emaan koee na vaada;
Pana kaarana vina kaaraja saadheeye re, e nija mata unmaada.||5||
Mugdha sugama karee sevana aadare re,sevana agama anupa
Dejo kadaachita sevaka yaachanaa re, aannandhana rasa rupa. ||6||`,
    },
  },
  {
    id: "samkit-data-samkit-aapo",
    type: "bhajan",
    title: {
      gu: "સમકિત દાતા સમકિત આપો, મન માંગે થઈ મીઠું",
      hi: "समकित दाता समकित आपो, मन मांगे थई मीठुं",
      sa: "",
      en: "Samkit Data Samkit Aapo",
    },
    text: {
      gu: `સમકિત દાતા સમકિત આપો, મન માંગે થઈ મીઠું;
છતી વસ્તુ દેતાં શું સોચો? મીઠું જે સહુએ દીઠું;
પ્યારા પ્રાણ થકી છો રાજ! સંભવ જિનજી! મુજને.||૧||
ઈમ મત જાણો જે આપે લહીએ, તે લાધું શું લેવું?
પણ પરમાથ પ્રીછી આપે, તેહી જ કહીએ દેવું.||૨||
“અર્થી હું, તું અર્થ સમર્પક”, ઈમ મત કરજ્યો હાંસું;
પ્રગટ હતું તુજને પણ પહેલાં, એ હાંસાનું પાસું.||૩||
પરમપુરુષ તુમે પ્રથમ ભજીને, પામ્યા ઈમ પ્રભુતાઈ;
તેણે રુપે તુમને અમે ભજીએ, તિણે તુમ હાથ વડાઈ.||૪||
તુમે સ્વામી હું સેવા કામી, મુજરો સ્વામી નિવાજે;
નહિ તો હઠ માંડી માંગતાં, કિણવિધ સેવક લાજે.||૫||
જ્યોતે જ્યોતિ મિલે મત પ્રીછો, કુણ લહેશે કુણ ભજશે?
સાચી ભક્તિ જે હંસ તણી પરે, ખીર-નીર નય કરશે.||૬||
ઓલગ કીધી જે લેખે લાગી, ચરણ ભેટ પ્રભુ દીધી;
રૂપ વિબુધનો “મોહન” પભણે, રસના પાવન કીધી.||૭||`,
      hi: `समकित दाता समकित आपो, मन मांगे थई मीठुं;
छती वस्तु देतां शुं सोचो? मीठुं जे सहुए दीठुं;
प्यारा प्राण थकी छो राज! संभव जिनजी! मुजने.||१||
ईम मत जाणो जे आपे लहीए, ते लाधुं शुं लेवुं?
पण परमाथ प्रीछी आपे, तेही ज कहीए देवुं.||२||
“अर्थी हुं, तुं अर्थ समर्पक”, ईम मत करज्यो हांसुं;
प्रगट हतुं तुजने पण पहेलां, ए हांसानुं पासुं.||३||
परमपुरुष तुमे प्रथम भजीने, पाम्या ईम प्रभुताई;
तेणे रुपे तुमने अमे भजीए, तिणे तुम हाथ वडाई.||४||
तुमे स्वामी हुं सेवा कामी, मुजरो स्वामी निवाजे;
नहि तो हठ मांडी मांगतां, किणविध सेवक लाजे.||५||
ज्योते ज्योति मिले मत प्रीछो, कुण लहेशे कुण भजशे?
साची भक्ति जे हंस तणी परे, खीर-नीर नय करशे.||६||
ओलग कीधी जे लेखे लागी, चरण भेट प्रभु दीधी;
रूप विबुधनो “मोहन” पभणे, रसना पावन कीधी.||७||`,
      sa: "",
      en: `Samakita daataa samakita aapo, mana maange thaee meethun;
Chhatee vastu detaan shun socho? meethun je sahue deethun;
Pyaaraa praana thakee chho raaja! sanbhava jinajee! mujane.||1||
Eema mata jaano je aape laheee, te laadhun shun levun?
Pana paramaatha preechhee aape, tehee ja kaheee devun.||2||
“arthee hun, tun artha samarpaka”, eema mata karajyo haansun;
Pragata hatun tujane pana pahelaan, e haansaanun paasun.||3||
Paramapurusha tume prathama bhajeene, paamyaa eema prabhutaaee;
Tene rupe tumane ame bhajeee, tine tuma haatha vadaaee.||4||
Tume svaamee hun sevaa kaamee, mujaro svaamee nivaaje;
Nahi to hatha maandee maangataan, kinavidha sevaka laaje.||5||
Jyote jyoti mile mata preechho, kuna laheshe kuna bhajashe?
Saachee bhakti je hansa tanee pare, kheera-neera naya karashe.||6||
Olaga keedhee je lekhe laagee, charana bheta prabhu deedhee;
Roopa vibudhano “mohana” pabhane, rasanaa paavana keedhee.||7||`,
    },
  },
  {
    id: "sani-jineshwar-sacho-shahib",
    type: "bhajan",
    title: {
      gu: "શાંતિ જિનેશ્વર સાચો સાહિબ",
      hi: "शांति जिनेश्वर साचो साहिब",
      sa: "",
      en: "Sani Jineshwar Sacho Shahib",
    },
    text: {
      gu: `શાંતિ જિનેશ્વર સાચો સાહિબ,
શાંતિકરણ ઈન કલિમેં હો જિનજી. ૧
તું મેરા મનમેં તું મેરા દિલમેં,
ધ્યાન ધરું પલ પલ મેં સાહિબજી. તું મેરા મનમેં… ૨
ભવમાં ભમતા મેં દરિશન પાયો,
આશા પૂરો એક પલ મેં હો જિનજી. તું મેરા મનમેં… ૩
નિર્મળ જ્યોત વદન પર સોહે,
નિકસ્યો જ્યું ચંદ બાદલ મેં હો જિનજી. તું મેરા મનમેં… ૪
મેરો મન તુમ સાથે લીનો,
મીન વસે જ્યું જલ મેં હો જિનજી. તું મેરા મનમેં… ૫
જિનરંગ કહે પ્રભુ શાંતિ જિનેશ્વર,
દીઠોજી દેવ સકલ મેં હો જિનજી. તું મેરા મનમેં… ૬`,
      hi: `शांति जिनेश्वर साचो साहिब,
शांतिकरण ईन कलिमें हो जिनजी. १
तुं मेरा मनमें तुं मेरा दिलमें,
ध्यान धरुं पल पल में साहिबजी. तुं मेरा मनमें… २
भवमां भमता में दरिशन पायो,
आशा पूरो एक पल में हो जिनजी. तुं मेरा मनमें… ३
निर्मळ ज्योत वदन पर सोहे,
निकस्यो ज्युं चंद बादल में हो जिनजी. तुं मेरा मनमें… ४
मेरो मन तुम साथे लीनो,
मीन वसे ज्युं जल में हो जिनजी. तुं मेरा मनमें… ५
जिनरंग कहे प्रभु शांति जिनेश्वर,
दीठोजी देव सकल में हो जिनजी. तुं मेरा मनमें… ६`,
      sa: "",
      en: `Shaanti jineshvara saacho saahiba,
Shaantikarana eena kalimen ho jinajee. 1
Tun meraa manamen tun meraa dilamen,
Dhyaana dharun pala pala men saahibajee. tun meraa manamen… 2
Bhavamaan bhamataa men darishana paayo,
Aashaa pooro eka pala men ho jinajee. tun meraa manamen… 3
Nirmala jyota vadana para sohe,
Nikasyo jyun chanda baadala men ho jinajee. tun meraa manamen… 4
Mero mana tuma saathe leeno,
Meena vase jyun jala men ho jinajee. tun meraa manamen… 5
Jinaranga kahe prabhu shaanti jineshvara,
Deethojee deva sakala men ho jinajee. tun meraa manamen… 6`,
    },
  },
  {
    id: "sar-kar-sar-kar-swami-sankheswara",
    type: "bhajan",
    title: {
      gu: "સાર કર સાર કર સ્વામી શંખેશ્વરા",
      hi: "सार कर सार कर स्वामी शंखेश्वरा",
      sa: "",
      en: "Sar Kar Sar Kar Swami Sankheswara",
    },
    text: {
      gu: `સાર કર સાર કર સ્વામી શંખેશ્વરા,
વિશ્વ વિખ્યાત એકાંત આવો;
જગતના નાથ મુઝ હાથ ઝાલી કરી,
આજ કિમ કાજમાં વાર લાવો.||૧||
હૃદય મુજ રંજણો શત્રુ દુઃખ ભંજણો,
ઈષ્ટ પરમિષ્ટ મોહે તુહિં સાચો;
ખલક ખિજમત કરે વિપતી સમે ખિણ ભરે,
નવિ રહે તાસ અભિલાષ કાચો.||૨||
યાદવા રણજણે રામ કેશવ રણે,
જામ લાગી જરા નિંદ સોતી,
સ્વામી શંખેશ્વરા ચરણજલ પામીને;
યાદવોની જરા જાય રોતી.||૩||
આજ જિનરાજ! ઉંઘે કિસ્યું? આ સમે,
જાગ મહારાજ! સેવક પનોતા;
સુબુદ્ધિ મધે? ટળે ઘૂતે દોલત હરે,
વીર હાકે રિપુવૃંદ રોતા.||૪||
દાસ છું જન્મના પુરીયે કામના,
ધ્યાનથી માસ દશ દોય વીત્યા;
વિકટ સંકટ હરો નિકટ નયણા કરો
, તો અમે શત્રુ નૃપતિકું જીત્યા.||૫||
કાલ મુખે અશન શીતકાલે વસન,
શ્રમ સુખાસન રણે ઉદક દાઈ;
સુગુણનર સાંભરે વિસરે નહિ કદા,
પાસજી તું સદા છે સખાઈ.||૬||
માત તું તાત તું ભ્રાત તું દેવ તું,
દેવ દુનિયામાં દૂજો ન વહાલો;
શ્રી “શુભવીર’ જગ જીત ડંકો કરે,
નાથજી નેક નયણે નિહાલો.||૭||`,
      hi: `सार कर सार कर स्वामी शंखेश्वरा,
विश्व विख्यात एकांत आवो;
जगतना नाथ मुझ हाथ झाली करी,
आज किम काजमां वार लावो.||१||
हृदय मुज रंजणो शत्रु दुःख भंजणो,
ईष्ट परमिष्ट मोहे तुहिं साचो;
खलक खिजमत करे विपती समे खिण भरे,
नवि रहे तास अभिलाष काचो.||२||
यादवा रणजणे राम केशव रणे,
जाम लागी जरा निंद सोती,
स्वामी शंखेश्वरा चरणजल पामीने;
यादवोनी जरा जाय रोती.||३||
आज जिनराज! उंघे किस्युं? आ समे,
जाग महाराज! सेवक पनोता;
सुबुद्धि मधे? टळे घूते दोलत हरे,
वीर हाके रिपुवृंद रोता.||४||
दास छुं जन्मना पुरीये कामना,
ध्यानथी मास दश दोय वीत्या;
विकट संकट हरो निकट नयणा करो
, तो अमे शत्रु नृपतिकुं जीत्या.||५||
काल मुखे अशन शीतकाले वसन,
श्रम सुखासन रणे उदक दाई;
सुगुणनर सांभरे विसरे नहि कदा,
पासजी तुं सदा छे सखाई.||६||
मात तुं तात तुं भ्रात तुं देव तुं,
देव दुनियामां दूजो न वहालो;
श्री “शुभवीर’ जग जीत डंको करे,
नाथजी नेक नयणे निहालो.||७||`,
      sa: "",
      en: `Saara kara saara kara svaamee shankheshvaraa,
Vishva vikhyaata ekaanta aavo;
Jagatanaa naatha mujha haatha jhaalee karee,
Aaja kima kaajamaan vaara laavo.||1||
Hrudaya muja ranjano shatru dukha bhanjano,
Eeshta paramishta mohe tuhin saacho;
Khalaka khijamata kare vipatee same khina bhare,
Navi rahe taasa abhilaasha kaacho.||2||
Yaadavaa ranajane raama keshava rane,
Jaama laagee jaraa ninda sotee,
Svaamee shankheshvaraa charanajala paameene;
Yaadavonee jaraa jaaya rotee.||3||
Aaja jinaraaja! unghe kisyun? aa same,
Jaaga mahaaraaja! sevaka panotaa;
Subuddhi madhe? tale ghoote dolata hare,
Veera haake ripuvrunda rotaa.||4||
Daasa chhun janmanaa pureeye kaamanaa,
Dhyaanathee maasa dasha doya veetyaa;
Vikata sankata haro nikata nayanaa karo
, to ame shatru nrupatikun jeetyaa.||5||
Kaala mukhe ashana sheetakaale vasana,
Shrama sukhaasana rane udaka daaee;
Sugunanara saanbhare visare nahi kadaa,
Paasajee tun sadaa chhe sakhaaee.||6||
Maata tun taata tun bhraata tun deva tun,
Deva duniyaamaan doojo na vahaalo;
Shree “shubhaveera’ jaga jeeta danko kare,
Naathajee neka nayane nihaalo.||7||`,
    },
  },
  {
    id: "saraswati-swami-ne-paye-lagu",
    type: "bhajan",
    title: {
      gu: "સરસ્વતી સ્વામીને પાયે લાગું, પ્રણમી સદ્ગુરુ પાયા રે",
      hi: "सरस्वती स्वामीने पाये लागुं, प्रणमी सद्गुरु पाया रे",
      sa: "",
      en: "Saraswati Swami Ne Paye Lagu",
    },
    text: {
      gu: `સરસ્વતી સ્વામીને પાયે લાગું, પ્રણમી સદ્ગુરુ પાયા રે;
ગાઈશું હૈડે હર્ષ ધરીને, શ્રી વર્ધમાન જિનરાયા રે…
મોરા સ્વામી! હો તોરા ચરણ ગ્રહીજે, નરભવ લાહો લીજે રે;
સૌભાગી જિનના ચરણ ગ્રહીજે, વૈરાગી જિનના ચરણ ગ્રહીજે,
ચરણ ગ્રહીજે શરણે રહીજે, નરભવ લ્હાવો લીજે રે.॥੧॥
ભારે કર્મી પણ તેં તાર્યા, પાતિકથી ઉગાર્યા રે;
મુજ સરીખા શેં નવિ સંભાર્યા?,
શું ચિત્તથી ઉતાર્યા રે. મોરા૦|| ૨ ||
પત્થર પણ કોઈ તીર્થ પ્રભાવે, જલમાં દીસે તરતા રે;
તે અમે તરશું તુમ પાય વળગ્યા, કેમ રાખો છો અળગા રે.||૩||
મોરા૦ ।।૩।। મુજ કરણી સામું મત જોજો, નામ સામું તુમે જોજો રે;
સાહિબ સેવકના દુઃખ હરજો, તુમને મંગલ હોજો રે. મોરા૦॥૪॥
તરણતારણ તુમે નામ ધરાવો, હું છું ખિજમતગારો રે;
બીજા કોણ આગળ જઈ યાચું?, મોટો નામ તુમારો રે. મોરા૦ ॥૫॥
એહ વિનંતીએ સાહિબ તૂક્યા, શ્રી વર્ધમાન જિનરાયા રે;
આપ ખજાના માંહેથી આપો, સમકિત રત્ન સવાયા રે. મોરા૦।।૬।।
શ્રીનયવિજય વિબુધ પય સેવક, ‘વાચક યશ’ એમ બોલે રે;
શાસનનાયક શિવસુખ દાયક,
નહીં કોઈ વીરજીની તોલેરે. મોરા૦।।૭।।`,
      hi: `सरस्वती स्वामीने पाये लागुं, प्रणमी सद्गुरु पाया रे;
गाईशुं हैडे हर्ष धरीने, श्री वर्धमान जिनराया रे…
मोरा स्वामी! हो तोरा चरण ग्रहीजे, नरभव लाहो लीजे रे;
सौभागी जिनना चरण ग्रहीजे, वैरागी जिनना चरण ग्रहीजे,
चरण ग्रहीजे शरणे रहीजे, नरभव ल्हावो लीजे रे.॥੧॥
भारे कर्मी पण तें तार्या, पातिकथी उगार्या रे;
मुज सरीखा शें नवि संभार्या?,
शुं चित्तथी उतार्या रे. मोरा०|| २ ||
पत्थर पण कोई तीर्थ प्रभावे, जलमां दीसे तरता रे;
ते अमे तरशुं तुम पाय वळग्या, केम राखो छो अळगा रे.||३||
मोरा० ।।३।। मुज करणी सामुं मत जोजो, नाम सामुं तुमे जोजो रे;
साहिब सेवकना दुःख हरजो, तुमने मंगल होजो रे. मोरा०॥४॥
तरणतारण तुमे नाम धरावो, हुं छुं खिजमतगारो रे;
बीजा कोण आगळ जई याचुं?, मोटो नाम तुमारो रे. मोरा० ॥५॥
एह विनंतीए साहिब तूक्या, श्री वर्धमान जिनराया रे;
आप खजाना मांहेथी आपो, समकित रत्न सवाया रे. मोरा०।।६।।
श्रीनयविजय विबुध पय सेवक, ‘वाचक यश’ एम बोले रे;
शासननायक शिवसुख दायक,
नहीं कोई वीरजीनी तोलेरे. मोरा०।।७।।`,
      sa: "",
      en: `Sarasvatee svaameene paaye laagun, pranamee sadguru paayaa re;
Gaaeeshun haide harsha dhareene, shree vardhamaana jinaraayaa re…
Moraa svaamee! ho toraa charana graheeje, narabhava laaho leeje re;
Saubhaagee jinanaa charana graheeje, vairaagee jinanaa charana graheeje,
Charana graheeje sharane raheeje, narabhava lhaavo leeje re.||1||
Bhaare karmee pana ten taaryaa, paatikathee ugaaryaa re;
Muja sareekhaa shen navi sanbhaaryaa?,
Shun chittathee utaaryaa re. moraa0|| 2 ||
Patthara pana koee teertha prabhaave, jalamaan deese tarataa re;
Te ame tarashun tuma paaya valagyaa, kema raakho chho alagaa re.||3||
Moraa0 ||3|| muja karanee saamun mata jojo, naama saamun tume jojo re;
Saahiba sevakanaa dukha harajo, tumane mangala hojo re. moraa0||4||
Taranataarana tume naama dharaavo, hun chhun khijamatagaaro re;
Beejaa kona aagala jaee yaachun?, moto naama tumaaro re. moraa0 ||5||
Eha vinanteee saahiba tookyaa, shree vardhamaana jinaraayaa re;
Aapa khajaanaa maanhethee aapo, samakita ratna savaayaa re. moraa0||6||
Shreenayavijaya vibudha paya sevaka, ‘vaachaka yasha’ ema bole re;
Shaasananaayaka shivasukha daayaka,
Naheen koee veerajeenee tolere. moraa0||7||`,
    },
  },
  {
    id: "sevak-kim-avganiye-ho",
    type: "bhajan",
    title: {
      gu: "સેવક કિમ અવગણીએ? હો, મલ્લિ જિન! એહ અબ શોભા સારી",
      hi: "सेवक किम अवगणीए? हो, मल्लि जिन! एह अब शोभा सारी",
      sa: "",
      en: "Sevak Kim Avganiye Ho",
    },
    text: {
      gu: `સેવક કિમ અવગણીએ? હો, મલ્લિ જિન! એહ અબ શોભા સારી;
અવર જેહને આદર અતિ દિયે,
તેહને મૂલથી નિવારી. હો મલ્લિ૦ ।। ૧ ।।
જ્ઞાન સ્વરુપ અનાદિ તમારું, તે લીધું તમે તાણી;
જુઓ અજ્ઞાન દશા રિસાણી, જાતા કાણ ન આણી?||૨||
નિદ્રા સુપન જાગર ઉજાગરતા, તુરિય અવસ્થા આવી;
નિદ્રા સુપન દશા રિસાણી, જાણી ન નાથ મનાવી.||૩||
હો મલ્લિ૦।।૩।। સમકિત સાથે સગાઈ કીધી, સપરિવાર શું ગાઢી;
મિથ્યામતિ અપરાધણ જાણી, ઘરથી બાહિર કાઢી. હો મલ્લિ૦।।૪।।
હાસ્ય અરતિ રતિ શોક દુર્ગછા, ભય પામર કરસાલી;
નો કષાય શ્રેણી ગજ ચડતાં, શ્વાન તણી ગતિ ઝાલી.||૫||
રગ દ્વેષ અવિરતિની પરિણતિ, એ ચરણ મોહના યોધા;
વીતરાગ પરિણતિ પરિણમતાં, ઊઠી નાઠા બોધા. હો મલ્લિ૦।।૬।।
વેદોદય કામા પરિણામા, કામ્ય કરમ સહુ ત્યાગી;
નિકામી કરુણારસ સાગર, અનંત ચતુષ્ક પદ પાગી. હોમલ્લિ૦।।૭।।
દાન વિઘન વારી સહુ જનને, અભય દાનપદ દાતા;
લાભવિઘનજગવિઘનનિવારી, પરમલાભરસ માતા.||૮||
હોમલ્લિ૦।।૮। વીર્ય વિઘન પંડિતવીર્યે હણી, પૂરણ પદવી યોગી;
ભોગોપભોગ દોય વિઘન નિવારી,
પૂરણ ભોગ સુભોગી. હોમલ્લિ૦।।૯।।
અઢાર દૂષણ વર્જિત તનુ, મુનિજન વૃંદે ગાયા;
અવિરતિ રુપક દોષ નિરુપણ, નિર્દૂષણ મનભાયા. હોમલ્લિ૦।।૧૦।।
ઈણવિધ પરખી મન વિસરામી, જિનવર ગુણ જે ગાવે;
દીનબંધુની મહેર નજરથી, “આનંદઘન’ પદ પાવે. હોમલ્લિ૦।।૧૧।।`,
      hi: `सेवक किम अवगणीए? हो, मल्लि जिन! एह अब शोभा सारी;
अवर जेहने आदर अति दिये,
तेहने मूलथी निवारी. हो मल्लि० ।। १ ।।
ज्ञान स्वरुप अनादि तमारुं, ते लीधुं तमे ताणी;
जुओ अज्ञान दशा रिसाणी, जाता काण न आणी?||२||
निद्रा सुपन जागर उजागरता, तुरिय अवस्था आवी;
निद्रा सुपन दशा रिसाणी, जाणी न नाथ मनावी.||३||
हो मल्लि०।।३।। समकित साथे सगाई कीधी, सपरिवार शुं गाढी;
मिथ्यामति अपराधण जाणी, घरथी बाहिर काढी. हो मल्लि०।।४।।
हास्य अरति रति शोक दुर्गछा, भय पामर करसाली;
नो कषाय श्रेणी गज चडतां, श्वान तणी गति झाली.||५||
रग द्वेष अविरतिनी परिणति, ए चरण मोहना योधा;
वीतराग परिणति परिणमतां, ऊठी नाठा बोधा. हो मल्लि०।।६।।
वेदोदय कामा परिणामा, काम्य करम सहु त्यागी;
निकामी करुणारस सागर, अनंत चतुष्क पद पागी. होमल्लि०।।७।।
दान विघन वारी सहु जनने, अभय दानपद दाता;
लाभविघनजगविघननिवारी, परमलाभरस माता.||८||
होमल्लि०।।८। वीर्य विघन पंडितवीर्ये हणी, पूरण पदवी योगी;
भोगोपभोग दोय विघन निवारी,
पूरण भोग सुभोगी. होमल्लि०।।९।।
अढार दूषण वर्जित तनु, मुनिजन वृंदे गाया;
अविरति रुपक दोष निरुपण, निर्दूषण मनभाया. होमल्लि०।।१०।।
ईणविध परखी मन विसरामी, जिनवर गुण जे गावे;
दीनबंधुनी महेर नजरथी, “आनंदघन’ पद पावे. होमल्लि०।।११।।`,
      sa: "",
      en: `Sevaka kima avaganeee? ho, malli jina! eha aba shobhaa saaree;
Avara jehane aadara ati diye,
Tehane moolathee nivaaree. ho malli0 || 1 ||
Jnyaana svarupa anaadi tamaarun, te leedhun tame taanee;
Juo ajnyaana dashaa risaanee, jaataa kaana na aanee?||2||
Nidraa supana jaagara ujaagarataa, turiya avasthaa aavee;
Nidraa supana dashaa risaanee, jaanee na naatha manaavee.||3||
Ho malli0||3|| samakita saathe sagaaee keedhee, saparivaara shun gaadhee;
Mithyaamati aparaadhana jaanee, gharathee baahira kaadhee. ho malli0||4||
Haasya arati rati shoka durgachhaa, bhaya paamara karasaalee;
No kashaaya shrenee gaja chadataan, shvaana tanee gati jhaalee.||5||
Raga dvesha aviratinee parinati, e charana mohanaa yodhaa;
Veetaraaga parinati parinamataan, oothee naathaa bodhaa. ho malli0||6||
Vedodaya kaamaa parinaamaa, kaamya karama sahu tyaagee;
Nikaamee karunaarasa saagara, ananta chatushka pada paagee. homalli0||7||
Daana vighana vaaree sahu janane, abhaya daanapada daataa;
Laabhavighanajagavighananivaaree, paramalaabharasa maataa.||8||
Homalli0||8| veerya vighana panditaveerye hanee, poorana padavee yogee;
Bhogopabhoga doya vighana nivaaree,
Poorana bhoga subhogee. homalli0||9||
Adhaara dooshana varjita tanu, munijana vrunde gaayaa;
Avirati rupaka dosha nirupana, nirdooshana manabhaayaa. homalli0||10||
Eenavidha parakhee mana visaraamee, jinavara guna je gaave;
Deenabandhunee mahera najarathee, “aanandaghana’ pada paave. homalli0||11||`,
    },
  },
  {
    id: "sevo-bhaviya-vimal-jineshwar",
    type: "bhajan",
    title: {
      gu: "સેવો ભવિયાં વિમલ જિણેસર, દુલ્લહા સજ્જન સંગાજી",
      hi: "सेवो भवियां विमल जिणेसर, दुल्लहा सज्जन संगाजी",
      sa: "",
      en: "Sevo Bhaviya Vimal Jineshwar",
    },
    text: {
      gu: `સેવો ભવિયાં વિમલ જિણેસર, દુલ્લહા સજ્જન સંગાજી;
એહવા પ્રભુનું દરિશન લેવું, તે આળસ માંહે ગંગાજી. ॥੧॥
અવસર પામી આળસ કરશે, તે મૂરખમાં પહેલોજી;
જેમ ઘેબર દેતાં, હાથ ન માંડે ઘેલોજી.॥२॥
ભવ અનંતમાં દર્શન દીઠું,પ્રભુ એહવા દેખાડેજી;
ગ્રંથિ જે પોળ પોળિયો, કર્મ વિવર ઉઘાડેજી. ॥३॥
તત્ત્વ પ્રીતિકર પાણી પાએ, વિમલા લોકે આંજીજી;
ગુરુ પરમાન્ન દિયે તવ, ભ્રમ નાંખે સવિ ભાંજીજી. ॥४॥
ભ્રમ ભાંગ્યો તવ પ્રભુશું પ્રેમે, વાત કરું મન ખોલીજી;
સરલતણે જે હઈડે આવે, તેહ જણાવે બોલીજી.‌॥५॥
શ્રી નયવિજય વિબુધ પય સેવક, વાચક ‘યશ’ કહે સાચુંજી;
કોડિ કપટ જો કોઈ દિખાવે, તોયે પ્રભુ વિણ નવિ રાચુંજી.‌॥६॥`,
      hi: `सेवो भवियां विमल जिणेसर, दुल्लहा सज्जन संगाजी;
एहवा प्रभुनुं दरिशन लेवुं, ते आळस मांहे गंगाजी. ॥੧॥
अवसर पामी आळस करशे, ते मूरखमां पहेलोजी;
जेम घेबर देतां, हाथ न मांडे घेलोजी.॥२॥
भव अनंतमां दर्शन दीठुं,प्रभु एहवा देखाडेजी;
ग्रंथि जे पोळ पोळियो, कर्म विवर उघाडेजी. ॥३॥
तत्त्व प्रीतिकर पाणी पाए, विमला लोके आंजीजी;
गुरु परमान्न दिये तव, भ्रम नांखे सवि भांजीजी. ॥४॥
भ्रम भांग्यो तव प्रभुशुं प्रेमे, वात करुं मन खोलीजी;
सरलतणे जे हईडे आवे, तेह जणावे बोलीजी.‌॥५॥
श्री नयविजय विबुध पय सेवक, वाचक ‘यश’ कहे साचुंजी;
कोडि कपट जो कोई दिखावे, तोये प्रभु विण नवि राचुंजी.‌॥६॥`,
      sa: "",
      en: `Sevo bhaviyaan vimala jinesara, dullahaa sajjana sangaajee;
Ehavaa prabhunun darishana levun, te aalasa maanhe gangaajee. ||1||
Avasara paamee aalasa karashe, te moorakhamaan pahelojee;
Jema ghebara detaan, haatha na maande ghelojee.||2||
Bhava anantamaan darshana deethun,prabhu ehavaa dekhaadejee;
Granthi je pola poliyo, karma vivara ughaadejee. ||3||
Tattva preetikara paanee paae, vimalaa loke aanjeejee;
Guru paramaanna diye tava, bhrama naankhe savi bhaanjeejee. ||4||
Bhrama bhaangyo tava prabhushun preme, vaata karun mana kholeejee;
Saralatane je haeede aave, teha janaave boleejee.‌||5||
Shree nayavijaya vibudha paya sevaka, vaachaka ‘yasha’ kahe saachunjee;
Kodi kapata jo koee dikhaave, toye prabhu vina navi raachunjee.‌||6||`,
    },
  },
  {
    id: "sha-mate-sahib-samu-n-juo",
    type: "bhajan",
    title: {
      gu: "શા માટે સાહિબ સામું ન જુઓ, હું થયો છું તુમ ગુણ રાગી",
      hi: "शा माटे साहिब सामुं न जुओ, हुं थयो छुं तुम गुण रागी",
      sa: "",
      en: "Sha Mate Sahib Samu N Juo",
    },
    text: {
      gu: `શા માટે સાહિબ સામું ન જુઓ, હું થયો છું તુમ ગુણ રાગી;
બોલ બીજા સાથે નવિ બોલું,
ન ગમે વાત અનેરી. પ્રભુજી મારા. ।।૧ ।।
જો રે પોતાનો કરીને જાણો, તો મુજ સમકિત વાસો;
પ્રભુજી૦ ભલો ભુંડો પણ ભક્ત તુમારો,
દેઈ દિલાસો ખાસો. પ્રભુજી૦।। ૨ ।।
છેલછબીલો દેવ છોગાળો, અલવેસર અવિનાશી;
પ્રભુજી૦ હૃદયનોવાસી પ્રભુમુજને મળીયો,
નમું હું નિત્યશિર નામી. પ્રભુજી૦।।૩।।
હજુએ હૃદયમાં હોંશ ઘણી છે, રાખી છે તુમ ગુણ રાગી;
પ્રભુજી૦ ભીડભંજનપ્રભુભક્તિનાજોરે,
જાલીમવાસનાભાગી. પ્રભુજી૦।।૪।।
આપ સ્વરૂપ દેખાડો આછો, પડદો ખોલીને પાછો;
પ્રભુજી૦ પ્રેમ’ઉદય’ પદ પગથિયે ચઢતાં,
નરહે લાભનો લાછો. પ્રભુજી૦ ।।૫।।`,
      hi: `शा माटे साहिब सामुं न जुओ, हुं थयो छुं तुम गुण रागी;
बोल बीजा साथे नवि बोलुं,
न गमे वात अनेरी. प्रभुजी मारा. ।।१ ।।
जो रे पोतानो करीने जाणो, तो मुज समकित वासो;
प्रभुजी० भलो भुंडो पण भक्त तुमारो,
देई दिलासो खासो. प्रभुजी०।। २ ।।
छेलछबीलो देव छोगाळो, अलवेसर अविनाशी;
प्रभुजी० हृदयनोवासी प्रभुमुजने मळीयो,
नमुं हुं नित्यशिर नामी. प्रभुजी०।।३।।
हजुए हृदयमां होंश घणी छे, राखी छे तुम गुण रागी;
प्रभुजी० भीडभंजनप्रभुभक्तिनाजोरे,
जालीमवासनाभागी. प्रभुजी०।।४।।
आप स्वरूप देखाडो आछो, पडदो खोलीने पाछो;
प्रभुजी० प्रेम’उदय’ पद पगथिये चढतां,
नरहे लाभनो लाछो. प्रभुजी० ।।५।।`,
      sa: "",
      en: `Shaa maate saahiba saamun na juo, hun thayo chhun tuma guna raagee;
Bola beejaa saathe navi bolun,
Na game vaata aneree. prabhujee maaraa. ||1 ||
Jo re potaano kareene jaano, to muja samakita vaaso;
Prabhujee0 bhalo bhundo pana bhakta tumaaro,
Deee dilaaso khaaso. prabhujee0|| 2 ||
Chhelachhabeelo deva chhogaalo, alavesara avinaashee;
Prabhujee0 hrudayanovaasee prabhumujane maleeyo,
Namun hun nityashira naamee. prabhujee0||3||
Hajue hrudayamaan honsha ghanee chhe, raakhee chhe tuma guna raagee;
Prabhujee0 bheedabhanjanaprabhubhaktinaajore,
Jaaleemavaasanaabhaagee. prabhujee0||4||
Aapa svaroopa dekhaado aachho, padado kholeene paachho;
Prabhujee0 prema’udaya’ pada pagathiye chadhataan,
Narahe laabhano laachho. prabhujee0 ||5||`,
    },
  },
  {
    id: "shamniyo-tyagine",
    type: "bhajan",
    title: {
      gu: "શામળીયો ત્યાગીને હું તો રાગી",
      hi: "शामळीयो त्यागीने हुं तो रागी",
      sa: "",
      en: "Shamniyo Tyagine",
    },
    text: {
      gu: `શામળીયો ત્યાગીને હું તો રાગી,
સંયમશું રઢ મને લાગી લાગી;
વ્હાલા રે મારા નેમ નગીનાની રાગી,
વ્હાલા મારા સુંદર શ્યામ સૌભાગી; હારે,
મારા સંયમ લિયે બડભાગી. (૨) સંયમશું૦ ।।૧ ।।
વ્હાલા રે મારા ગઢ ગિરનારની ઘાટે,
મારા મોહન મને મળશે હવે વાટે; હારે,
જઈ હું તો હાથ મેલાવીશ માથે. (૨) સંયમશું૦।। ૨ ।।
જઈ હવે રાજુલ નેમની પાસે,
લીયે હવે સંયમ અતિ ઉલ્લાસે;
હારે, નેમનાથ પહેલા શિવ જાશે. (૨) સંયમશું૦।।૩।।
વ્હાલા રે મારા દંપતી શિવસુખ મળીયો,
વ્હાલા મારા વિરહ દાવાનળ ટળીયો; હારે,
અગુરુલઘુ ગુણે ભરિયો. (૨) સંયમશું૦।।૪।।
‘દીપ’સુણો એક અરજ અમારી,
તુમે તો રાજુલનારી; હારે,
મહેરબાન કરી મોહ વારી. (૨) સંયમશું૦।।૫।।`,
      hi: `शामळीयो त्यागीने हुं तो रागी,
संयमशुं रढ मने लागी लागी;
व्हाला रे मारा नेम नगीनानी रागी,
व्हाला मारा सुंदर श्याम सौभागी; हारे,
मारा संयम लिये बडभागी. (२) संयमशुं० ।।१ ।।
व्हाला रे मारा गढ गिरनारनी घाटे,
मारा मोहन मने मळशे हवे वाटे; हारे,
जई हुं तो हाथ मेलावीश माथे. (२) संयमशुं०।। २ ।।
जई हवे राजुल नेमनी पासे,
लीये हवे संयम अति उल्लासे;
हारे, नेमनाथ पहेला शिव जाशे. (२) संयमशुं०।।३।।
व्हाला रे मारा दंपती शिवसुख मळीयो,
व्हाला मारा विरह दावानळ टळीयो; हारे,
अगुरुलघु गुणे भरियो. (२) संयमशुं०।।४।।
‘दीप’सुणो एक अरज अमारी,
तुमे तो राजुलनारी; हारे,
महेरबान करी मोह वारी. (२) संयमशुं०।।५।।`,
      sa: "",
      en: `Shaamaleeyo tyaageene hun to raagee,
Sanyamashun radha mane laagee laagee;
Vhaalaa re maaraa nema nageenaanee raagee,
Vhaalaa maaraa sundara shyaama saubhaagee; haare,
Maaraa sanyama liye badabhaagee. (2) sanyamashun0 ||1 ||
Vhaalaa re maaraa gadha giranaaranee ghaate,
Maaraa mohana mane malashe have vaate; haare,
Jaee hun to haatha melaaveesha maathe. (2) sanyamashun0|| 2 ||
Jaee have raajula nemanee paase,
Leeye have sanyama ati ullaase;
Haare, nemanaatha pahelaa shiva jaashe. (2) sanyamashun0||3||
Vhaalaa re maaraa danpatee shivasukha maleeyo,
Vhaalaa maaraa viraha daavaanala taleeyo; haare,
Agurulaghu gune bhariyo. (2) sanyamashun0||4||
‘deepa’suno eka araja amaaree,
Tume to raajulanaaree; haare,
Maherabaana karee moha vaaree. (2) sanyamashun0||5||`,
    },
  },
  {
    id: "shan-shan-sambharo-shanti-salona",
    type: "bhajan",
    title: {
      gu: "ક્ષણ ક્ષણ સાંભરો શાંતિ સલૂણા! ધ્યાન ભુવન જિનરાજ પરુણા",
      hi: "क्षण क्षण सांभरो शांति सलूणा! ध्यान भुवन जिनराज परुणा",
      sa: "",
      en: "Shan Shan Sambharo Shanti Salona",
    },
    text: {
      gu: `ક્ષણ ક્ષણ સાંભરો શાંતિ સલૂણા! ધ્યાન ભુવન જિનરાજ પરુણા;
શાંતિ જિણંદકો નામ અમીસેં, ઉલ્લસિત હોત હમ રોમ વપુના.
ભવચોગાનમેં ફિરતે પાયે, છોરત મેં નહિ ચરણ પ્રભુનાં.||૧||
છિલ્લરમેં રતિ કબહુ ન પાવે, જે ઝીલે જલ ગંગ-યમુના;
તુમ સમ હમ શિર નાથ ન થાશે, કર્મ અધુના દૂના ધુના.||૨||
મોહ લડાઈમેં તેરી સહાઈ, તો ક્ષણમેં છિન્ન છિન્ન કટુના;
નહિ ઘટે પ્રભુ આના કૂના, અચિરાસુત પતિ મોક્ષ વધૂના.||૩||
ઓરકી પાસે મેં આશ ન કરતે, ચાર અનંત પસાય કરુના;
ક્યું કર માંગત પાસ ધતૂરે, યુગલિક યાચક કલ્પતરુના.||૪||
ધ્યાન ખડ્ગવર તેરે આસંગે, મોહ ડરે સારી ભીક ભરુના;
તો સાઈ અરુપી, ભક્તે ધ્યાવત તાના તુના.||૫||
અનુભવ રંગ વધ્યો ઉપયોગે, ધ્યાન સુપનમેં કાથા ચુના;
ચિદાનંદ ઝકઝોલ ઘટાસેં, શ્રી શુભવીર વિજય પડિપુન્ના.||૬||`,
      hi: `क्षण क्षण सांभरो शांति सलूणा! ध्यान भुवन जिनराज परुणा;
शांति जिणंदको नाम अमीसें, उल्लसित होत हम रोम वपुना.
भवचोगानमें फिरते पाये, छोरत में नहि चरण प्रभुनां.||१||
छिल्लरमें रति कबहु न पावे, जे झीले जल गंग-यमुना;
तुम सम हम शिर नाथ न थाशे, कर्म अधुना दूना धुना.||२||
मोह लडाईमें तेरी सहाई, तो क्षणमें छिन्न छिन्न कटुना;
नहि घटे प्रभु आना कूना, अचिरासुत पति मोक्ष वधूना.||३||
ओरकी पासे में आश न करते, चार अनंत पसाय करुना;
क्युं कर मांगत पास धतूरे, युगलिक याचक कल्पतरुना.||४||
ध्यान खड्गवर तेरे आसंगे, मोह डरे सारी भीक भरुना;
तो साई अरुपी, भक्ते ध्यावत ताना तुना.||५||
अनुभव रंग वध्यो उपयोगे, ध्यान सुपनमें काथा चुना;
चिदानंद झकझोल घटासें, श्री शुभवीर विजय पडिपुन्ना.||६||`,
      sa: "",
      en: `Kshana kshana saanbharo shaanti saloonaa! dhyaana bhuvana jinaraaja parunaa;
Shaanti jinandako naama ameesen, ullasita hota hama roma vapunaa.
Bhavachogaanamen phirate paaye, chhorata men nahi charana prabhunaan.||1||
Chhillaramen rati kabahu na paave, je jheele jala ganga-yamunaa;
Tuma sama hama shira naatha na thaashe, karma adhunaa doonaa dhunaa.||2||
Moha ladaaeemen teree sahaaee, to kshanamen chhinna chhinna katunaa;
Nahi ghate prabhu aanaa koonaa, achiraasuta pati moksha vadhoonaa.||3||
Orakee paase men aasha na karate, chaara ananta pasaaya karunaa;
Kyun kara maangata paasa dhatoore, yugalika yaachaka kalpatarunaa.||4||
Dhyaana khadgavara tere aasange, moha dare saaree bheeka bharunaa;
To saaee arupee, bhakte dhyaavata taanaa tunaa.||5||
Anubhava ranga vadhyo upayoge, dhyaana supanamen kaathaa chunaa;
Chidaananda jhakajhola ghataasen, shree shubhaveera vijaya padipunnaa.||6||`,
    },
  },
  {
    id: "shanti-jin-ek-muj-vinanti",
    type: "bhajan",
    title: {
      gu: "શાંતિ જિન એક મુજ વિનતી, સુણો ત્રિભુવનરાય રે",
      hi: "शांति जिन एक मुज विनती, सुणो त्रिभुवनराय रे",
      sa: "",
      en: "Shanti Jin Ek Muj Vinanti",
    },
    text: {
      gu: `શાંતિ જિન એક મુજ વિનતી, સુણો ત્રિભુવનરાય રે;
શાંતિ સરુપ કિમ જાણીયે, કહો મન કિમ પરખાય રે.||૧||
ધન્ય તું આતમ જેહને, એહવો પ્રશ્ન અવકાશ રે;
ધીરજ મન ધરી સાંભળો, કહું શાંતિ પ્રતિભાસરે.||૨||
ભાવ અવિશુદ્ધ સવિશુદ્ધ જે, કહ્યા જિનવર દેવ રે;
તે તિમ અવિતથ સદ્દહે, પ્રથમ એ શાંતિ પદ સેવ રે.||૩||
આગમધર ગુરુ સમકિતી, ક્રિયા સંવર સાર રે;
સંપ્રદાયી અવંચક સદા, સૂચિ અનુભવ ધાર રે.||૪||
શુદ્ધ અવલંબન આદરે, તજી અવર જંજાળ રે;
તામસી વૃત્તિ સવિ પરિહરી, ભજે સાત્ત્વિકી સાલ રે.||૫||
ફળ વિસંવાદ જેહમાં નહીં, શબ્દ તે અર્થ સંબંધિ રે;
સકળ નયવાદ વ્યાપી રહ્યો, તે શિવ સાધન સંધિ રે.||૬||
વિધિ પ્રતિષેધ કરી આતમા, પદારથ અવિરોધ રે;
ગ્રહણવિધિ મહાજને પરિગ્રહ્યો, ઈશ્યો આગમ બોધ રે.||૭||
દુષ્ટ જન સંગતિ પરિહરી, ભજે સુગુરુ સંતાન રે;
જોગ સામથ્ર્ય ચિત્ત ભાવ જે, ધરે મુગતિ નિદાન રે.||૮||
માન અપમાન ચિત્ત સમ ગણે, સમ ગણે કનક પાષાણ રે;
વંદક નિંદક સમ ગણે, ઈસો હોય તું જાણ રે.||૯||
સર્વ જગ જંતુને સમ ગણે, સમ ગણે તૃણમણિ ભાવ રે;
મુગતિ સંસાર બિહુ સમ ગણે, મુણે ભવ જલનિધિ નાવ રે.||૧૦||
આપણો આતમ ભાવ જે, એક ચેતનાધાર રે;
અવર સવિ સાથ સંયોગથી, એહ નિજ પરિકર સાર રે.||૧૧||
પ્રભુ મુખથી ઈમ સાંભળી, કહે આતમરામ રે;
તાહરે દરિશણે નિસ્તર્યો, મુજ સિધ્યાં સવિ કામ રે.||૧૨||
અહો અહો હું મુજને કહું, નમો મુજ નમો મુજ રે;
અમિતફળ દાન દાતારની, જેહને ભેટ થઈ તુજ રે.||૧૩||
શાંતિ સરુપ સંક્ષેપથી, કહ્યો નિજ પર રુપ રે;
આગમમાંહિ વિસ્તર ઘણો, કહ્યો શાંતિ જિન ભૂપ રે.||૧૪||
શાંતિ સરુપ ઈમ ભાવશે, ધરી શુદ્ધ પ્રણિધાન રે;
“આનંદઘન’ પદ પામશે, તે લહિશે બહુમાન રે.||૧૫||`,
      hi: `शांति जिन एक मुज विनती, सुणो त्रिभुवनराय रे;
शांति सरुप किम जाणीये, कहो मन किम परखाय रे.||१||
धन्य तुं आतम जेहने, एहवो प्रश्न अवकाश रे;
धीरज मन धरी सांभळो, कहुं शांति प्रतिभासरे.||२||
भाव अविशुद्ध सविशुद्ध जे, कह्या जिनवर देव रे;
ते तिम अवितथ सद्दहे, प्रथम ए शांति पद सेव रे.||३||
आगमधर गुरु समकिती, क्रिया संवर सार रे;
संप्रदायी अवंचक सदा, सूचि अनुभव धार रे.||४||
शुद्ध अवलंबन आदरे, तजी अवर जंजाळ रे;
तामसी वृत्ति सवि परिहरी, भजे सात्त्विकी साल रे.||५||
फळ विसंवाद जेहमां नहीं, शब्द ते अर्थ संबंधि रे;
सकळ नयवाद व्यापी रह्यो, ते शिव साधन संधि रे.||६||
विधि प्रतिषेध करी आतमा, पदारथ अविरोध रे;
ग्रहणविधि महाजने परिग्रह्यो, ईश्यो आगम बोध रे.||७||
दुष्ट जन संगति परिहरी, भजे सुगुरु संतान रे;
जोग सामथ्र्य चित्त भाव जे, धरे मुगति निदान रे.||८||
मान अपमान चित्त सम गणे, सम गणे कनक पाषाण रे;
वंदक निंदक सम गणे, ईसो होय तुं जाण रे.||९||
सर्व जग जंतुने सम गणे, सम गणे तृणमणि भाव रे;
मुगति संसार बिहु सम गणे, मुणे भव जलनिधि नाव रे.||१०||
आपणो आतम भाव जे, एक चेतनाधार रे;
अवर सवि साथ संयोगथी, एह निज परिकर सार रे.||११||
प्रभु मुखथी ईम सांभळी, कहे आतमराम रे;
ताहरे दरिशणे निस्तर्यो, मुज सिध्यां सवि काम रे.||१२||
अहो अहो हुं मुजने कहुं, नमो मुज नमो मुज रे;
अमितफळ दान दातारनी, जेहने भेट थई तुज रे.||१३||
शांति सरुप संक्षेपथी, कह्यो निज पर रुप रे;
आगममांहि विस्तर घणो, कह्यो शांति जिन भूप रे.||१४||
शांति सरुप ईम भावशे, धरी शुद्ध प्रणिधान रे;
“आनंदघन’ पद पामशे, ते लहिशे बहुमान रे.||१५||`,
      sa: "",
      en: `Shaanti jina eka muja vinatee, suno tribhuvanaraaya re;
Shaanti sarupa kima jaaneeye, kaho mana kima parakhaaya re.||1||
Dhanya tun aatama jehane, ehavo prashna avakaasha re;
Dheeraja mana dharee saanbhalo, kahun shaanti pratibhaasare.||2||
Bhaava avishuddha savishuddha je, kahyaa jinavara deva re;
Te tima avitatha saddahe, prathama e shaanti pada seva re.||3||
Aagamadhara guru samakitee, kriyaa sanvara saara re;
Sanpradaayee avanchaka sadaa, soochi anubhava dhaara re.||4||
Shuddha avalanbana aadare, tajee avara janjaala re;
Taamasee vrutti savi pariharee, bhaje saattvikee saala re.||5||
Phala visanvaada jehamaan naheen, shabda te artha sanbandhi re;
Sakala nayavaada vyaapee rahyo, te shiva saadhana sandhi re.||6||
Vidhi pratishedha karee aatamaa, padaaratha avirodha re;
Grahanavidhi mahaajane parigrahyo, eeshyo aagama bodha re.||7||
Dushta jana sangati pariharee, bhaje suguru santaana re;
Joga saamathrya chitta bhaava je, dhare mugati nidaana re.||8||
Maana apamaana chitta sama gane, sama gane kanaka paashaana re;
Vandaka nindaka sama gane, eeso hoya tun jaana re.||9||
Sarva jaga jantune sama gane, sama gane trunamani bhaava re;
Mugati sansaara bihu sama gane, mune bhava jalanidhi naava re.||10||
Aapano aatama bhaava je, eka chetanaadhaara re;
Avara savi saatha sanyogathee, eha nija parikara saara re.||11||
Prabhu mukhathee eema saanbhalee, kahe aatamaraama re;
Taahare darishane nistaryo, muja sidhyaan savi kaama re.||12||
Aho aho hun mujane kahun, namo muja namo muja re;
Amitaphala daana daataaranee, jehane bheta thaee tuja re.||13||
Shaanti sarupa sankshepathee, kahyo nija para rupa re;
Aagamamaanhi vistara ghano, kahyo shaanti jina bhoopa re.||14||
Shaanti sarupa eema bhaavashe, dharee shuddha pranidhaana re;
“aanandaghana’ pada paamashe, te lahishe bahumaana re.||15||`,
    },
  },
  {
    id: "shanti-jineshwar-sacho-shahib",
    type: "bhajan",
    title: {
      gu: "શાંતિ જિનેશ્વર સાચો સાહિબ, શાંતિકરણ ઈણ કલિ મેં હો જિનજી!",
      hi: "शांति जिनेश्वर साचो साहिब, शांतिकरण ईण कलि में हो जिनजी!",
      sa: "",
      en: "Shanti Jineshwar Sacho Shahib",
    },
    text: {
      gu: `શાંતિ જિનેશ્વર સાચો સાહિબ, શાંતિકરણ ઈણ કલિ મેં હો જિનજી!
તું મેરા મન મેં તું મેરા દિલ મેં, ધ્યાન ધરું પલપલ મેં. ॥१ ॥
ભવમાં ભમતાં મેં દરિશન પાયો,
આશા પૂરો એક પલ મેં. ॥२॥
નિર્મલ જ્યોત વદન પર સોહે,
નિકસ્યો જ્યું ચંદ બાદલ મેં. ।।૩।।
મેરો મન તુમ સાથે લીનો,
મીન વસે જ્યું જલ મેં. ॥४॥
“જિનરંગ’ કહે પ્રભુ શાંતિ જિનેશ્વર
દીઠોજી દેવ સકલ મેં. ॥५॥`,
      hi: `शांति जिनेश्वर साचो साहिब, शांतिकरण ईण कलि में हो जिनजी!
तुं मेरा मन में तुं मेरा दिल में, ध्यान धरुं पलपल में. ॥१ ॥
भवमां भमतां में दरिशन पायो,
आशा पूरो एक पल में. ॥२॥
निर्मल ज्योत वदन पर सोहे,
निकस्यो ज्युं चंद बादल में. ।।३।।
मेरो मन तुम साथे लीनो,
मीन वसे ज्युं जल में. ॥४॥
“जिनरंग’ कहे प्रभु शांति जिनेश्वर
दीठोजी देव सकल में. ॥५॥`,
      sa: "",
      en: `Shaanti jineshvara saacho saahiba, shaantikarana eena kali men ho jinajee!
Tun meraa mana men tun meraa dila men, dhyaana dharun palapala men. ||1 ||
Bhavamaan bhamataan men darishana paayo,
Aashaa pooro eka pala men. ||2||
Nirmala jyota vadana para sohe,
Nikasyo jyun chanda baadala men. ||3||
Mero mana tuma saathe leeno,
Meena vase jyun jala men. ||4||
“jinaranga’ kahe prabhu shaanti jineshvara
Deethojee deva sakala men. ||5||`,
    },
  },
  {
    id: "shanti-jineshwar-sahiba-re",
    type: "bhajan",
    title: {
      gu: "શાંતિ જિનેશ્વર સાહિબા રે, શાંતિ તણા દાતાર",
      hi: "शांति जिनेश्वर साहिबा रे, शांति तणा दातार",
      sa: "",
      en: "Shanti Jineshwar Sahiba Re",
    },
    text: {
      gu: `શાંતિ જિનેશ્વર સાહિબા રે, શાંતિ તણા દાતાર;
અંતરજામી છો માહરારે, આતમના આધાર. શાંતિ૦ ।।૧।।
ચિત્ત ચાહે પ્રભુ ચાકરી રે, મન ચાહે મળવાને કાજ;
નયન ચાહે પ્રભુ નિરખવારે, દ્યો દરિશન મહારાજ. શાંતિ૦ ।। ૨ ।।
પલક ન વિસરો મન થકી રે, જિમ મોરા મન મેહ;
એક પખો કેમ રાખીયે રે, રાજ કપટનો નેહ. શાંતિ૦॥૩॥
નેહ નજર નિહાળતો રે, વાધે બમણો વાન;
અખૂટ ખજાનો પ્રભુ તાહરો રે, દીજીએ વાંછિત દાન.શાંતિ૦॥૪॥
આશ કરે જે કોઈ આપણી રે, નવિ મૂકીએ નિરાશ;
સેક જાણીને આપણો રે, દીજીએ તાસ દિલાસ. શાંતિ૦।।૫।|
દાયકને દેતાં થકાં રે, ક્ષણ નવિ લાગે વાર;
કાજ સરે નિજ દાસનાં રે, એ મોટો ઉપકાર. શાંતિ૦॥૬॥
એવું જાણીને જગધણી રે, દિલમાં હિ ઘરજો પ્યાર;
“રૂપવિજય” કવિરાયનો રે, મોહન જયજયકાર. શાંતિ૦ ।।૭ ।।`,
      hi: `शांति जिनेश्वर साहिबा रे, शांति तणा दातार;
अंतरजामी छो माहरारे, आतमना आधार. शांति० ।।१।।
चित्त चाहे प्रभु चाकरी रे, मन चाहे मळवाने काज;
नयन चाहे प्रभु निरखवारे, द्यो दरिशन महाराज. शांति० ।। २ ।।
पलक न विसरो मन थकी रे, जिम मोरा मन मेह;
एक पखो केम राखीये रे, राज कपटनो नेह. शांति०॥३॥
नेह नजर निहाळतो रे, वाधे बमणो वान;
अखूट खजानो प्रभु ताहरो रे, दीजीए वांछित दान.शांति०॥४॥
आश करे जे कोई आपणी रे, नवि मूकीए निराश;
सेक जाणीने आपणो रे, दीजीए तास दिलास. शांति०।।५।|
दायकने देतां थकां रे, क्षण नवि लागे वार;
काज सरे निज दासनां रे, ए मोटो उपकार. शांति०॥६॥
एवुं जाणीने जगधणी रे, दिलमां हि घरजो प्यार;
“रूपविजय” कविरायनो रे, मोहन जयजयकार. शांति० ।।७ ।।`,
      sa: "",
      en: `Shaanti jineshvara saahibaa re, shaanti tanaa daataara;
Antarajaamee chho maaharaare, aatamanaa aadhaara. shaanti0 ||1||
Chitta chaahe prabhu chaakaree re, mana chaahe malavaane kaaja;
Nayana chaahe prabhu nirakhavaare, dyo darishana mahaaraaja. shaanti0 || 2 ||
Palaka na visaro mana thakee re, jima moraa mana meha;
Eka pakho kema raakheeye re, raaja kapatano neha. shaanti0||3||
Neha najara nihaalato re, vaadhe bamano vaana;
Akhoota khajaano prabhu taaharo re, deejeee vaanchhita daana.shaanti0||4||
Aasha kare je koee aapanee re, navi mookeee niraasha;
Seka jaaneene aapano re, deejeee taasa dilaasa. shaanti0||5||
Daayakane detaan thakaan re, kshana navi laage vaara;
Kaaja sare nija daasanaan re, e moto upakaara. shaanti0||6||
Evun jaaneene jagadhanee re, dilamaan hi gharajo pyaara;
“roopavijaya” kaviraayano re, mohana jayajayakaara. shaanti0 ||7 ||`,
    },
  },
  {
    id: "shanti-tere-lochan-hai-aniyare",
    type: "bhajan",
    title: {
      gu: "શાંતિ! તેરે લોચન હૈ અણિયારે. શાંતિ! તેરે લોચન..",
      hi: "शांति! तेरे लोचन है अणियारे. शांति! तेरे लोचन..",
      sa: "",
      en: "Shanti Tere Lochan Hai Aniyare",
    },
    text: {
      gu: `શાંતિ! તેરે લોચન હૈ અણિયારે. શાંતિ! તેરે લોચન..
કમલ જ્યું સુંદર મીન જ્યું ચંચલ, મધુકર સે અતિકારે.
જાકી મનોહરતા જિત વન મેં, ફિરતે હરિણ બિચારે.॥3॥
ચતુર ચકોર પરાભવ નિરખત, બહુરે ચુગત અંગારે.
ઉપશમ રસ કે અજબ કટોરે, માનું વિરંચિ સંભારે.
કીર્તિવિજય વાચક ‘વિનયી’, કહે મુજકો અતિ પ્યારે.`,
      hi: `शांति! तेरे लोचन है अणियारे. शांति! तेरे लोचन..
कमल ज्युं सुंदर मीन ज्युं चंचल, मधुकर से अतिकारे.
जाकी मनोहरता जित वन में, फिरते हरिण बिचारे.॥3॥
चतुर चकोर पराभव निरखत, बहुरे चुगत अंगारे.
उपशम रस के अजब कटोरे, मानुं विरंचि संभारे.
कीर्तिविजय वाचक ‘विनयी’, कहे मुजको अति प्यारे.`,
      sa: "",
      en: `Shaanti! tere lochana hai aniyaare. shaanti! tere lochana..
Kamala jyun sundara meena jyun chanchala, madhukara se atikaare.
Jaakee manoharataa jita vana men, phirate harina bichaare.||3||
Chatura chakora paraabhava nirakhata, bahure chugata angaare.
Upashama rasa ke ajaba katore, maanun viranchi sanbhaare.
Keertivijaya vaachaka ‘vinayee’, kahe mujako ati pyaare.`,
    },
  },
  {
    id: "sharane-tumare-aayo-jinandray",
    type: "bhajan",
    title: {
      gu: "શરણ તુમારે આયો જિણંદરાય!, શરણ તુમારે આયો ",
      hi: "शरण तुमारे आयो जिणंदराय!, शरण तुमारे आयो ",
      sa: "",
      en: "Sharane Tumare Aayo Jinandray",
    },
    text: {
      gu: `શરણ તુમારે આયો જિણંદરાય!, શરણ તુમારે આયો ;
પકડી જકડી મોહ મહારાયે, ચિહું ગતિ ચોક ફિરાયો.||૧||
નરક નિગોદને બંદીખાને, કાળ અનંત રઝળાયો;
પાયા અતિ મહામદના પ્યાલા, બહુ વિપરીત ભમાયો.||૨||
મોહતણી રાણી મહામૂઢતા, તેણે હું ધંધે લગાયો;
છાઈ રહ્યાં મુજ આંતર લોચન, આપકું આપ ભૂલાયો.||૩||
મહા મંત્રીશ્વર મોહરાય કો, મિથ્યાદર્શ કહાયો;
કુદેવ કુગુરુ કુધર્મની સંગે, સૂધ બુધ સઘલી હરાયો.||૪||
નાના વેશ ભેખ પાખંડે, મર્કટ નાચ નચાયો;
વિપર્યાસ આસન પર મંડપ, ચિત્ત વિક્ષેપ રચાયો.||૫||
સુણો અરદાસ સમર્થ પાર્શ્વ પ્રભુ, પંચાસર સુખદાયો;
અંતરંગ રિપુ ભય સવિ નાઠો, જો “વિનયે’ પ્રભુ ધ્યાયો.||૬||`,
      hi: `शरण तुमारे आयो जिणंदराय!, शरण तुमारे आयो ;
पकडी जकडी मोह महाराये, चिहुं गति चोक फिरायो.||१||
नरक निगोदने बंदीखाने, काळ अनंत रझळायो;
पाया अति महामदना प्याला, बहु विपरीत भमायो.||२||
मोहतणी राणी महामूढता, तेणे हुं धंधे लगायो;
छाई रह्यां मुज आंतर लोचन, आपकुं आप भूलायो.||३||
महा मंत्रीश्वर मोहराय को, मिथ्यादर्श कहायो;
कुदेव कुगुरु कुधर्मनी संगे, सूध बुध सघली हरायो.||४||
नाना वेश भेख पाखंडे, मर्कट नाच नचायो;
विपर्यास आसन पर मंडप, चित्त विक्षेप रचायो.||५||
सुणो अरदास समर्थ पार्श्व प्रभु, पंचासर सुखदायो;
अंतरंग रिपु भय सवि नाठो, जो “विनये’ प्रभु ध्यायो.||६||`,
      sa: "",
      en: `Sharana tumaare aayo jinandaraaya!, sharana tumaare aayo ;
Pakadee jakadee moha mahaaraaye, chihun gati choka phiraayo.||1||
Naraka nigodane bandeekhaane, kaala ananta rajhalaayo;
Paayaa ati mahaamadanaa pyaalaa, bahu vipareeta bhamaayo.||2||
Mohatanee raanee mahaamoodhataa, tene hun dhandhe lagaayo;
Chhaaee rahyaan muja aantara lochana, aapakun aapa bhoolaayo.||3||
Mahaa mantreeshvara moharaaya ko, mithyaadarsha kahaayo;
Kudeva kuguru kudharmanee sange, soodha budha saghalee haraayo.||4||
Naanaa vesha bhekha paakhande, markata naacha nachaayo;
Viparyaasa aasana para mandapa, chitta vikshepa rachaayo.||5||
Suno aradaasa samartha paarshva prabhu, panchaasara sukhadaayo;
Antaranga ripu bhaya savi naatho, jo “vinaye’ prabhu dhyaayo.||6||`,
    },
  },
  {
    id: "shashan-nayak-shivasukh-dayak",
    type: "bhajan",
    title: {
      gu: "શાસન નાયક, શિવસુખ દાયક જિનપતિ, મારા લાલ",
      hi: "शासन नायक, शिवसुख दायक जिनपति, मारा लाल",
      sa: "",
      en: "Shashan Nayak Shivasukh Dayak",
    },
    text: {
      gu: `શાસન નાયક, શિવસુખ દાયક જિનપતિ, મારા લાલ,
પાયક જાસ સુરાસુર, ચરણે નરપતિ; મારા લાલ,
ક્ષાયક કંદર્પ કેરા, જેણે નવિ ચિત્ત ધર્યા, મારા લાલ,
ઢાયક પાતક વૃંદ, ચરણ અંગીકર્યા. મારા લાલ.||૧||
ક્ષાયકભાવે કેવલ, જ્ઞાનદર્શન ધરે, મારા લાલ,
જ્ઞાયક લોકાલોકના, ભાવશું વિસ્તરે; મારા લાલ,
ઘાયક ઘાતિકર્મ, મર્મની આપદા, મારા લાલ,
લાયક અતિશય, પ્રાતિહાર્યની સંપદા.||૨||
મારા લાલ. કારક ષટ્ક થયાં તુજ, આતમ તત્ત્વમાં, મારા લાલ,
ધારક ગુણ સમુદાય, સયલ એકત્વમાં; મારા લાલ,
નારક નર તિરિ દેવ, ભ્રમણથી હું થયો, મારા લાલ,
કારક જેહ વિભાવ, તેણે વિપરીત ભયો. મારા લાલ.||૩||
તારક તું ભવિ જીવને, સમરથ મેં લહ્યો, મારા લાલ,
ઠારક કરુણારસથી, ક્રોધાનલ દહ્યો; મારા લાલ,
વારક જેહ ઉપાધિ, અનાદિની સહચરી, મારા લાલ,
કારક નિજ ગુણ ઋદ્ધિ, સેવકને બરાબરી.||૪||
મારા લાલ. વાણી એહવી સાંભળી, જિન આગમ તણી, મારા લાલ,
જાણી ઉત્તમ આશ, ધરી મનમાં ધણી; મારા લાલ,
ખાણી ગુણની તુજ પદ, ‘પદ્મ’ની ચાકરી, મારા લાલ,
આણી હિયડે હેજ, કરું નિજ પદ કરી.મારા લાલ.||૫||`,
      hi: `शासन नायक, शिवसुख दायक जिनपति, मारा लाल,
पायक जास सुरासुर, चरणे नरपति; मारा लाल,
क्षायक कंदर्प केरा, जेणे नवि चित्त धर्या, मारा लाल,
ढायक पातक वृंद, चरण अंगीकर्या. मारा लाल.||१||
क्षायकभावे केवल, ज्ञानदर्शन धरे, मारा लाल,
ज्ञायक लोकालोकना, भावशुं विस्तरे; मारा लाल,
घायक घातिकर्म, मर्मनी आपदा, मारा लाल,
लायक अतिशय, प्रातिहार्यनी संपदा.||२||
मारा लाल. कारक षट्क थयां तुज, आतम तत्त्वमां, मारा लाल,
धारक गुण समुदाय, सयल एकत्वमां; मारा लाल,
नारक नर तिरि देव, भ्रमणथी हुं थयो, मारा लाल,
कारक जेह विभाव, तेणे विपरीत भयो. मारा लाल.||३||
तारक तुं भवि जीवने, समरथ में लह्यो, मारा लाल,
ठारक करुणारसथी, क्रोधानल दह्यो; मारा लाल,
वारक जेह उपाधि, अनादिनी सहचरी, मारा लाल,
कारक निज गुण ऋद्धि, सेवकने बराबरी.||४||
मारा लाल. वाणी एहवी सांभळी, जिन आगम तणी, मारा लाल,
जाणी उत्तम आश, धरी मनमां धणी; मारा लाल,
खाणी गुणनी तुज पद, ‘पद्म’नी चाकरी, मारा लाल,
आणी हियडे हेज, करुं निज पद करी.मारा लाल.||५||`,
      sa: "",
      en: `Shaasana naayaka, shivasukha daayaka jinapati, maaraa laala,
Paayaka jaasa suraasura, charane narapati; maaraa laala,
Kshaayaka kandarpa keraa, jene navi chitta dharyaa, maaraa laala,
Dhaayaka paataka vrunda, charana angeekaryaa. maaraa laala.||1||
Kshaayakabhaave kevala, jnyaanadarshana dhare, maaraa laala,
Jnyaayaka lokaalokanaa, bhaavashun vistare; maaraa laala,
Ghaayaka ghaatikarma, marmanee aapadaa, maaraa laala,
Laayaka atishaya, praatihaaryanee sanpadaa.||2||
Maaraa laala. kaaraka shatka thayaan tuja, aatama tattvamaan, maaraa laala,
Dhaaraka guna samudaaya, sayala ekatvamaan; maaraa laala,
Naaraka nara tiri deva, bhramanathee hun thayo, maaraa laala,
Kaaraka jeha vibhaava, tene vipareeta bhayo. maaraa laala.||3||
Taaraka tun bhavi jeevane, samaratha men lahyo, maaraa laala,
Thaaraka karunaarasathee, krodhaanala dahyo; maaraa laala,
Vaaraka jeha upaadhi, anaadinee sahacharee, maaraa laala,
Kaaraka nija guna ruddhi, sevakane baraabaree.||4||
Maaraa laala. vaanee ehavee saanbhalee, jina aagama tanee, maaraa laala,
Jaanee uttama aasha, dharee manamaan dhanee; maaraa laala,
Khaanee gunanee tuja pada, ‘padma’nee chaakaree, maaraa laala,
Aanee hiyade heja, karun nija pada karee.maaraa laala.||5||`,
    },
  },
  {
    id: "shatdarshan-jin-ang-bhanije",
    type: "bhajan",
    title: {
      gu: "ષટ્ટરશણ જિન અંગ ભણીજે, ન્યાસ ષડંગ જો સાધે રે",
      hi: "षट्टरशण जिन अंग भणीजे, न्यास षडंग जो साधे रे",
      sa: "",
      en: "Shatdarshan Jin Ang Bhanije",
    },
    text: {
      gu: `ષટ્ટરશણ જિન અંગ ભણીજે, ન્યાસ ષડંગ જો સાધે રે;
નમિ જિનવરના ચરણ ઉપાસક, ષટ્કરશણ આરાધે રે.||૧||
જિન સુર પાદપ પાય વખાણું, સાંખ્ય યોગ દોય ભેદે રે;
આતમ સત્તા વિવરણ કરતાં, લહો દુગ અંગ અખેદે રે.||૨||
ભેદ અભેદ સુગત મીમાંસક, જિનવર દોય કર ભારી રે;
લોકાલોક અવલંબન ભજીએ, ગુરુગમથી અવધારી રે.||૩||
લોકાયતિક કૂખ જિનવરની, અંશ વિચાર જો કીજે રે;
તત્ત્વવિચાર સુધારસ ધારા, ગુરુગમ વિણ કિમ પીજે રે.||૪||
જૈન જિનેશ્વર વર ઉત્તમ અંગ, અંતરંગ બહિરંગે રે;
અક્ષર ન્યાસ ધરા આરાધક, આરાધે ધરી સંગે રે.||૫||
સઘળા દરિશણ છે, દર્શન જિનવર ભજના રે;
સાગરમાં સઘળી તટીની સહી, તટીની સાગર ભજના રે.||૬||
જિન સરુપ થઈ જિન આરાધે, તે સહિ જિનવર હોવે રે;
ભૂંગી ઈલિકાને અટકાવે, તે ભૂંગી જગ જુવે રે.||૭||
ચૂર્ણી ભાષ્ય સૂત્ર નિર્યુક્તિ, વૃત્તિ પરંપર અનુભવ રે;
સમય પુરુષના અંગ કહ્યા એ, જે છેદે તે દૂર ભવી રે.||૮||
મુદ્રા બીજ ધારણા અક્ષર, ન્યાસ અરથ વિનિયોગે રે;
જે ધ્યાવે તે નવિ વંચીજે, ક્રિયાં અવંચક ભોગે રે.||૯||
શ્રુત અનુસાર વિચારી બોલું, સુગુરુ તથાવિધ ન મિલે રે;
ક્રિયા કરી નવિ સાધી શકીએ, વિખવાદ ચિત્ત સઘળે રે.||૧૦||
તે માટે ઊભા કર જોડી, જિનવર આગળ કહીએ રે;
સમય ચરણ સેવા શુચિ દેજો, જિમ ‘આનંદઘન’ લહીએ રે. ।।૧૧ ।।`,
      hi: `षट्टरशण जिन अंग भणीजे, न्यास षडंग जो साधे रे;
नमि जिनवरना चरण उपासक, षट्करशण आराधे रे.||१||
जिन सुर पादप पाय वखाणुं, सांख्य योग दोय भेदे रे;
आतम सत्ता विवरण करतां, लहो दुग अंग अखेदे रे.||२||
भेद अभेद सुगत मीमांसक, जिनवर दोय कर भारी रे;
लोकालोक अवलंबन भजीए, गुरुगमथी अवधारी रे.||३||
लोकायतिक कूख जिनवरनी, अंश विचार जो कीजे रे;
तत्त्वविचार सुधारस धारा, गुरुगम विण किम पीजे रे.||४||
जैन जिनेश्वर वर उत्तम अंग, अंतरंग बहिरंगे रे;
अक्षर न्यास धरा आराधक, आराधे धरी संगे रे.||५||
सघळा दरिशण छे, दर्शन जिनवर भजना रे;
सागरमां सघळी तटीनी सही, तटीनी सागर भजना रे.||६||
जिन सरुप थई जिन आराधे, ते सहि जिनवर होवे रे;
भूंगी ईलिकाने अटकावे, ते भूंगी जग जुवे रे.||७||
चूर्णी भाष्य सूत्र निर्युक्ति, वृत्ति परंपर अनुभव रे;
समय पुरुषना अंग कह्या ए, जे छेदे ते दूर भवी रे.||८||
मुद्रा बीज धारणा अक्षर, न्यास अरथ विनियोगे रे;
जे ध्यावे ते नवि वंचीजे, क्रियां अवंचक भोगे रे.||९||
श्रुत अनुसार विचारी बोलुं, सुगुरु तथाविध न मिले रे;
क्रिया करी नवि साधी शकीए, विखवाद चित्त सघळे रे.||१०||
ते माटे ऊभा कर जोडी, जिनवर आगळ कहीए रे;
समय चरण सेवा शुचि देजो, जिम ‘आनंदघन’ लहीए रे. ।।११ ।।`,
      sa: "",
      en: `Shattarashana jina anga bhaneeje, nyaasa shadanga jo saadhe re;
Nami jinavaranaa charana upaasaka, shatkarashana aaraadhe re.||1||
Jina sura paadapa paaya vakhaanun, saankhya yoga doya bhede re;
Aatama sattaa vivarana karataan, laho duga anga akhede re.||2||
Bheda abheda sugata meemaansaka, jinavara doya kara bhaaree re;
Lokaaloka avalanbana bhajeee, gurugamathee avadhaaree re.||3||
Lokaayatika kookha jinavaranee, ansha vichaara jo keeje re;
Tattvavichaara sudhaarasa dhaaraa, gurugama vina kima peeje re.||4||
Jaina jineshvara vara uttama anga, antaranga bahirange re;
Akshara nyaasa dharaa aaraadhaka, aaraadhe dharee sange re.||5||
Saghalaa darishana chhe, darshana jinavara bhajanaa re;
Saagaramaan saghalee tateenee sahee, tateenee saagara bhajanaa re.||6||
Jina sarupa thaee jina aaraadhe, te sahi jinavara hove re;
Bhoongee eelikaane atakaave, te bhoongee jaga juve re.||7||
Choornee bhaashya sootra niryukti, vrutti paranpara anubhava re;
Samaya purushanaa anga kahyaa e, je chhede te doora bhavee re.||8||
Mudraa beeja dhaaranaa akshara, nyaasa aratha viniyoge re;
Je dhyaave te navi vancheeje, kriyaan avanchaka bhoge re.||9||
Shruta anusaara vichaaree bolun, suguru tathaavidha na mile re;
Kriyaa karee navi saadhee shakeee, vikhavaada chitta saghale re.||10||
Te maate oobhaa kara jodee, jinavara aagala kaheee re;
Samaya charana sevaa shuchi dejo, jima ‘aanandaghana’ laheee re. ||11 ||`,
    },
  },
  {
    id: "sheetal-jin-mohe-pyara",
    type: "bhajan",
    title: {
      gu: "શીતલ જિન મોહે પ્યારા, સાહિબા! શીતલ જિન મોહે પ્યારા",
      hi: "शीतल जिन मोहे प्यारा, साहिबा! शीतल जिन मोहे प्यारा",
      sa: "",
      en: "Sheetal Jin Mohe Pyara",
    },
    text: {
      gu: `શીતલ જિન મોહે પ્યારા, સાહિબા! શીતલ જિન મોહે પ્યારા;
ભુવન વિરોચન પંકજ લોચન, જિઉ કે જિઉ હમારા.||૧||
જ્યોતશું જ્યોત મિલત જબ ધ્યાવત, હોવત નહિ તબ ન્યારા
બાંધી મૂઠી ખૂલે ભવ માયા, મિટે મહાભ્રમ ભારા.||૨||
તુમ ન્યારે તબ સબહિ ન્યારા, અંતર કુટુંબ ઉદારા;
તુમ હી નજીક નજીક હૈ સબહિ, ઋદ્ધિ અનંત અપારા.||૩||
વિષય લગન કી અગન બુઝાવત, તુમ ગુણ અનુભવ ધારા;
ભઈ મગનતા તુમ ગુણ રસ કી, કુણ કંચન?કુણ દારા?||૪||
શીતલતા ગુણ હોડ કરત તુમ, ચંદન કાહું બિચારા?
નામ હિ તુમચા તાપ હરત હૈ, વાંકુ ઘસત ઘસારા.||૫||
કરહું કષ્ટ જન બહુત હમારે, નામ તિહારો આધારા;
‘જશ’ કહે જનમ મરણ ભય ભાંગો, તુમ નામે ભવપારા.||૬||`,
      hi: `शीतल जिन मोहे प्यारा, साहिबा! शीतल जिन मोहे प्यारा;
भुवन विरोचन पंकज लोचन, जिउ के जिउ हमारा.||१||
ज्योतशुं ज्योत मिलत जब ध्यावत, होवत नहि तब न्यारा
बांधी मूठी खूले भव माया, मिटे महाभ्रम भारा.||२||
तुम न्यारे तब सबहि न्यारा, अंतर कुटुंब उदारा;
तुम ही नजीक नजीक है सबहि, ऋद्धि अनंत अपारा.||३||
विषय लगन की अगन बुझावत, तुम गुण अनुभव धारा;
भई मगनता तुम गुण रस की, कुण कंचन?कुण दारा?||४||
शीतलता गुण होड करत तुम, चंदन काहुं बिचारा?
नाम हि तुमचा ताप हरत है, वांकु घसत घसारा.||५||
करहुं कष्ट जन बहुत हमारे, नाम तिहारो आधारा;
‘जश’ कहे जनम मरण भय भांगो, तुम नामे भवपारा.||६||`,
      sa: "",
      en: `Sheetala jina mohe pyaaraa, saahibaa! sheetala jina mohe pyaaraa;
Bhuvana virochana pankaja lochana, jiu ke jiu hamaaraa.||1||
Jyotashun jyota milata jaba dhyaavata, hovata nahi taba nyaaraa
Baandhee moothee khoole bhava maayaa, mite mahaabhrama bhaaraa.||2||
Tuma nyaare taba sabahi nyaaraa, antara kutunba udaaraa;
Tuma hee najeeka najeeka hai sabahi, ruddhi ananta apaaraa.||3||
Vishaya lagana kee agana bujhaavata, tuma guna anubhava dhaaraa;
Bhaee maganataa tuma guna rasa kee, kuna kanchana?kuna daaraa?||4||
Sheetalataa guna hoda karata tuma, chandana kaahun bichaaraa?
Naama hi tumachaa taapa harata hai, vaanku ghasata ghasaaraa.||5||
Karahun kashta jana bahuta hamaare, naama tihaaro aadhaaraa;
‘jasha’ kahe janama marana bhaya bhaango, tuma naame bhavapaaraa.||6||`,
    },
  },
  {
    id: "sheetal-jinapati-prabhuta-prabhuni",
    type: "bhajan",
    title: {
      gu: "શીતલ જિનપતિ પ્રભુતા પ્રભુની, મુજથી કહિ ન જાયજી",
      hi: "शीतल जिनपति प्रभुता प्रभुनी, मुजथी कहि न जायजी",
      sa: "",
      en: "Sheetal Jinapati Prabhuta Prabhuni",
    },
    text: {
      gu: `શીતલ જિનપતિ પ્રભુતા પ્રભુની, મુજથી કહિ ન જાયજી
અનંતતા નિર્મલતા પૂર્ણતા, જ્ઞાન વિના ન જણાયજી.||૧||
ચરમ જલધિ જલ મિને અંજલિ, ગતિ જીપે અતિ વાયજી
સર્વ આકાશ ઉલ્લંઘે ચરણે, પણ પ્રભુતા ન ગણાયજી.||૨||
સર્વ દ્રવ્ય પ્રદેશ અનંતા, તેહથી ગુણ પર્યાયજી;
તાસ વર્ગથી અનંતગુણું પ્રભુ! કેવલજ્ઞાન કહાયજી.||૩||
કેવલ દરિશણ એમ અનંતું, ગ્રહે સામાન્ય સ્વભાવજી;
સ્વ-પર અનંતથી ચરણ અનંતું, સમરણ સંવર ભાવજી.||૪||
દ્રવ્ય ક્ષેત્રને કાળ ભાવ ગુણ, રાજનીતિ એ ચારજી;
ત્રસ વિના જડ ચેતન પ્રભુની, કોઈ ન લોપે કારજી.||૫||
શુદ્ધાશય થિર પ્રભુ ઉપયોગે, જે સમરે પ્રભુ નામજી;
અવ્યાબાધ અનંતું પામે, પરમ અમૃત સુખધામજી.||૬||
આણા ઇશ્વરતા નિર્ભયતા, નિર્વાછકતા રુપજી;
ભાવ સ્વાધીન તે અવ્યય રીતે, ઈમ અનંતગુણ ભૂપજી.||૭||
અવ્યાબાધ સુખ નિર્મલ તે તો, કરણ જ્ઞાને ન જણાયજી;
તેહ જ એહનો જાણંગ ભોક્તા, જે તુમ સમ ગુણરાયજી.||૮||
ઈમ અનંત દાનાદિક નિજ ગુણ, વચનાતીત પંડૂરજી;
વાસન ભાસન ભાવે દુર્લભ, પ્રાપ્તિ તો અતિ દૂરજી.||૯||`,
      hi: `शीतल जिनपति प्रभुता प्रभुनी, मुजथी कहि न जायजी
अनंतता निर्मलता पूर्णता, ज्ञान विना न जणायजी.||१||
चरम जलधि जल मिने अंजलि, गति जीपे अति वायजी
सर्व आकाश उल्लंघे चरणे, पण प्रभुता न गणायजी.||२||
सर्व द्रव्य प्रदेश अनंता, तेहथी गुण पर्यायजी;
तास वर्गथी अनंतगुणुं प्रभु! केवलज्ञान कहायजी.||३||
केवल दरिशण एम अनंतुं, ग्रहे सामान्य स्वभावजी;
स्व-पर अनंतथी चरण अनंतुं, समरण संवर भावजी.||४||
द्रव्य क्षेत्रने काळ भाव गुण, राजनीति ए चारजी;
त्रस विना जड चेतन प्रभुनी, कोई न लोपे कारजी.||५||
शुद्धाशय थिर प्रभु उपयोगे, जे समरे प्रभु नामजी;
अव्याबाध अनंतुं पामे, परम अमृत सुखधामजी.||६||
आणा इश्वरता निर्भयता, निर्वाछकता रुपजी;
भाव स्वाधीन ते अव्यय रीते, ईम अनंतगुण भूपजी.||७||
अव्याबाध सुख निर्मल ते तो, करण ज्ञाने न जणायजी;
तेह ज एहनो जाणंग भोक्ता, जे तुम सम गुणरायजी.||८||
ईम अनंत दानादिक निज गुण, वचनातीत पंडूरजी;
वासन भासन भावे दुर्लभ, प्राप्ति तो अति दूरजी.||९||`,
      sa: "",
      en: `Sheetala jinapati prabhutaa prabhunee, mujathee kahi na jaayajee
Anantataa nirmalataa poornataa, jnyaana vinaa na janaayajee.||1||
Charama jaladhi jala mine anjali, gati jeepe ati vaayajee
Sarva aakaasha ullanghe charane, pana prabhutaa na ganaayajee.||2||
Sarva dravya pradesha anantaa, tehathee guna paryaayajee;
Taasa vargathee anantagunun prabhu! kevalajnyaana kahaayajee.||3||
Kevala darishana ema anantun, grahe saamaanya svabhaavajee;
Sva-para anantathee charana anantun, samarana sanvara bhaavajee.||4||
Dravya kshetrane kaala bhaava guna, raajaneeti e chaarajee;
Trasa vinaa jada chetana prabhunee, koee na lope kaarajee.||5||
Shuddhaashaya thira prabhu upayoge, je samare prabhu naamajee;
Avyaabaadha anantun paame, parama amruta sukhadhaamajee.||6||
Aanaa ishvarataa nirbhayataa, nirvaachhakataa rupajee;
Bhaava svaadheena te avyaya reete, eema anantaguna bhoopajee.||7||
Avyaabaadha sukha nirmala te to, karana jnyaane na janaayajee;
Teha ja ehano jaananga bhoktaa, je tuma sama gunaraayajee.||8||
Eema ananta daanaadika nija guna, vachanaateeta pandoorajee;
Vaasana bhaasana bhaave durlabha, praapti to ati doorajee.||9||`,
    },
  },
  {
    id: "sheetal-jinpati-lalit-tribhangi",
    type: "bhajan",
    title: {
      gu: "શીતલ જિનપતિ લલિત ત્રિભંગી, વિવિધ ભંગી મન મોહે રે?",
      hi: "शीतल जिनपति ललित त्रिभंगी, विविध भंगी मन मोहे रे?",
      sa: "",
      en: "Sheetal Jinpati Lalit Tribhangi",
    },
    text: {
      gu: `શીતલ જિનપતિ લલિત ત્રિભંગી, વિવિધ ભંગી મન મોહે રે?
કરુણા કોમલતા તીક્ષણતા, ઉદાસીનતા સોહે રે.||૧||
સર્વજંતુ હિતકરણી કરુણા, કર્મ વિદારણ તીક્ષણ રે;
હાન દાન રહિત પરિણામી, ઉદાસીનતા વીક્ષણ રે.||૨||
પરદુઃખ છેદન ઈચ્છા કરુણા, તીક્ષણ પરદુઃખ રીઝે રે;
ઉદાસીનતા ઉભય વિલક્ષણ, એક ઠામેં કેમ સીઝે રે.||૩||
અભયદાન તે કરુણા, મળક્ષય તિક્ષણતા ગુણ ભાવે રે;
પ્રેરક વિણકૃતિ ઉદાસીનતા, ઈમ વિરોધ મતિ નાવે રે.||૪||
શક્તિ વ્યક્તિ ત્રિભુવન પ્રભુતા, નિગ્રંથતા સંયોગે રે;
યોગી ભોગી વક્તા મૌની, અનુપયોગી ઉપયોગી રે.||૫||
. ઈત્યાદિક બહુ ભંગ ત્રિભંગી, ચમત્કાર ચિત્તે દેતી રે;
અચરિજકારી ચિત્ર વિચિત્રતા, ‘આનંદઘન’ પદ લેતીરે.||૬||`,
      hi: `शीतल जिनपति ललित त्रिभंगी, विविध भंगी मन मोहे रे?
करुणा कोमलता तीक्षणता, उदासीनता सोहे रे.||१||
सर्वजंतु हितकरणी करुणा, कर्म विदारण तीक्षण रे;
हान दान रहित परिणामी, उदासीनता वीक्षण रे.||२||
परदुःख छेदन ईच्छा करुणा, तीक्षण परदुःख रीझे रे;
उदासीनता उभय विलक्षण, एक ठामें केम सीझे रे.||३||
अभयदान ते करुणा, मळक्षय तिक्षणता गुण भावे रे;
प्रेरक विणकृति उदासीनता, ईम विरोध मति नावे रे.||४||
शक्ति व्यक्ति त्रिभुवन प्रभुता, निग्रंथता संयोगे रे;
योगी भोगी वक्ता मौनी, अनुपयोगी उपयोगी रे.||५||
. ईत्यादिक बहु भंग त्रिभंगी, चमत्कार चित्ते देती रे;
अचरिजकारी चित्र विचित्रता, ‘आनंदघन’ पद लेतीरे.||६||`,
      sa: "",
      en: `Sheetala jinapati lalita tribhangee, vividha bhangee mana mohe re?
Karunaa komalataa teekshanataa, udaaseenataa sohe re.||1||
Sarvajantu hitakaranee karunaa, karma vidaarana teekshana re;
Haana daana rahita parinaamee, udaaseenataa veekshana re.||2||
Paradukha chhedana eechchhaa karunaa, teekshana paradukha reejhe re;
Udaaseenataa ubhaya vilakshana, eka thaamen kema seejhe re.||3||
Abhayadaana te karunaa, malakshaya tikshanataa guna bhaave re;
Preraka vinakruti udaaseenataa, eema virodha mati naave re.||4||
Shakti vyakti tribhuvana prabhutaa, nigranthataa sanyoge re;
Yogee bhogee vaktaa maunee, anupayogee upayogee re.||5||
. eetyaadika bahu bhanga tribhangee, chamatkaara chitte detee re;
Acharijakaaree chitra vichitrataa, ‘aanandaghana’ pada leteere.||6||`,
    },
  },
  {
    id: "shidharathna-re-nanadan-vinavu",
    type: "bhajan",
    title: {
      gu: "સિદ્ધારથના રે નંદન વિનવું, વિનતડી અવધાર",
      hi: "सिद्धारथना रे नंदन विनवुं, विनतडी अवधार",
      sa: "",
      en: "Shidharathna Re Nanadan Vinavu",
    },
    text: {
      gu: `સિદ્ધારથના રે નંદન વિનવું, વિનતડી અવધાર;
ભવમંડપમાં રે નાટક નાચિયો, હવે મુજ દાનદેવરાવ…
હવે મુજ પાર ઉતાર…||૧||
ત્રણ રતન મુજ આપો તાતજી, જેમ નાવે રે સંતાપ;
દાન દિયંતા રે પ્રભુ કોસર કિસી, આપો પદવીરે આપ.||૨||
ચરણ અંગૂઠે રે મેરુ કંપાવિયો, મોડ્યા સુરના રે માન;
અષ્ટ કરમના રે ઝઘડા જીતવા, દીધાં વરસી રે દાન.||૩||
શાસનનાયક શિવસુખદાયક, ત્રિશલા કૂખે રતન;
સિદ્ધારથનો વંશ દીપાવિયો, પ્રભુજી તુમે ધન્ય ધન્ય. ||૪||
વાચકશેખર કીર્તિવિજય ગુરુ, પામી તાસ પસાય;
ધર્મ તણા એ જિન ચોવીસમાં, “વિનયવિજય” ગુણ ગાય.||૫||`,
      hi: `सिद्धारथना रे नंदन विनवुं, विनतडी अवधार;
भवमंडपमां रे नाटक नाचियो, हवे मुज दानदेवराव…
हवे मुज पार उतार…||१||
त्रण रतन मुज आपो तातजी, जेम नावे रे संताप;
दान दियंता रे प्रभु कोसर किसी, आपो पदवीरे आप.||२||
चरण अंगूठे रे मेरु कंपावियो, मोड्या सुरना रे मान;
अष्ट करमना रे झघडा जीतवा, दीधां वरसी रे दान.||३||
शासननायक शिवसुखदायक, त्रिशला कूखे रतन;
सिद्धारथनो वंश दीपावियो, प्रभुजी तुमे धन्य धन्य. ||४||
वाचकशेखर कीर्तिविजय गुरु, पामी तास पसाय;
धर्म तणा ए जिन चोवीसमां, “विनयविजय” गुण गाय.||५||`,
      sa: "",
      en: `Siddhaarathanaa re nandana vinavun, vinatadee avadhaara;
Bhavamandapamaan re naataka naachiyo, have muja daanadevaraava…
Have muja paara utaara…||1||
Trana ratana muja aapo taatajee, jema naave re santaapa;
Daana diyantaa re prabhu kosara kisee, aapo padaveere aapa.||2||
Charana angoothe re meru kanpaaviyo, modyaa suranaa re maana;
Ashta karamanaa re jhaghadaa jeetavaa, deedhaan varasee re daana.||3||
Shaasananaayaka shivasukhadaayaka, trishalaa kookhe ratana;
Siddhaarathano vansha deepaaviyo, prabhujee tume dhanya dhanya. ||4||
Vaachakashekhara keertivijaya guru, paamee taasa pasaaya;
Dharma tanaa e jina choveesamaan, “vinayavijaya” guna gaaya.||5||`,
    },
  },
  {
    id: "shree-chandrapraph-jinpad-seva",
    type: "bhajan",
    title: {
      gu: "શ્રી ચંદ્રપ્રભ જિનપદ સેવા, હેવાએ જે હળિયાજી",
      hi: "श्री चंद्रप्रभ जिनपद सेवा, हेवाए जे हळियाजी",
      sa: "",
      en: "Shree Chandrapraph Jinpad Seva",
    },
    text: {
      gu: `શ્રી ચંદ્રપ્રભ જિનપદ સેવા, હેવાએ જે હળિયાજી;
આતમ ગુણ અનુભવથી મલિયા, તે ભવભયથી ટલિયાજી.||૧||
દ્રવ્ય સેવ વંદન નમનાદિક, અર્ચન વલી ગુણગ્રામોજી;
ભાવ અભેદ થવાની ઈહા, પરભાવે નિઃકામોજી. ॥२॥
ભાવ સેવ અપવાદે નૈગમ, પ્રભુ ગુણને સંકલ્પેજી;
સંગ્રહ સત્તા તુલ્યારોપે, ભેદાભેદ વિકલ્પેજી. ॥3॥
વ્યવહારે બહુમાન જ્ઞાન નિજ, ચરણે જિન ગુણ રમણાજી;
પ્રભુ ગુણ આલંબી પરિણામે, ઋજુપદ ધ્યાન સ્મરણાજી.||૪||
શબ્દે શુકલ ધ્યાનારોહણ, સમભિરુઢ ગુણ દશમેજી;
બીઅ શુકલ અવિકલ્પ એકત્વે, એવંભૂત તે અમમેજી.||૫||
ઉત્સર્ગે સમકિત ગુણ પ્રગટ, નૈગમ પ્રભુતા અંશેજી;
સંગ્રહ આતમ સત્તાલંબી, મુનિ પદ ભાવ પ્રશંસેજી.||૬||
ૠજુસૂત્રે જે શ્રેણી પદસ્થે, આત્મશક્તિ પ્રકાશેજી;
યથાખ્યાત પદ શબ્દ શુદ્ધ ધર્મ ઉલ્લાસેજી.||૭||
સયોગી અયોગી શૈલેશે, અંતિમ દુગ નય જાણોજી;
સાધનતાએ નિજ ગુણ વ્યક્તિ, તેહ સેવના વખાણોજી.||૮||
કારણ ભાવ તેહ અપવાદે, કાર્યરુપ ઉત્સર્ગેજી;
આત્મભાવ તે ભાવ દ્રવ્યપદ, બાહ્ય પ્રવૃત્તિ નિસર્ગેજી.||૯||
કારણભાવ પરંપર સેવન, પ્રગટે કારજ ભાવોજી;
કાર્ય સિદ્ધે કારણતા વ્યય, શુચિ પારિણામિક ભાવોજી.||૧૦||
પરમ ગુણી સેવન તન્મયતા, નિશ્ચય ધ્યાને ધ્યાવેજી;
શુદ્ધાતમ અનુભવે આસ્વાદી, દેવચંદ્ર’ પદ પાવેજી.||૧૧||`,
      hi: `श्री चंद्रप्रभ जिनपद सेवा, हेवाए जे हळियाजी;
आतम गुण अनुभवथी मलिया, ते भवभयथी टलियाजी.||१||
द्रव्य सेव वंदन नमनादिक, अर्चन वली गुणग्रामोजी;
भाव अभेद थवानी ईहा, परभावे निःकामोजी. ॥२॥
भाव सेव अपवादे नैगम, प्रभु गुणने संकल्पेजी;
संग्रह सत्ता तुल्यारोपे, भेदाभेद विकल्पेजी. ॥3॥
व्यवहारे बहुमान ज्ञान निज, चरणे जिन गुण रमणाजी;
प्रभु गुण आलंबी परिणामे, ऋजुपद ध्यान स्मरणाजी.||४||
शब्दे शुकल ध्यानारोहण, समभिरुढ गुण दशमेजी;
बीअ शुकल अविकल्प एकत्वे, एवंभूत ते अममेजी.||५||
उत्सर्गे समकित गुण प्रगट, नैगम प्रभुता अंशेजी;
संग्रह आतम सत्तालंबी, मुनि पद भाव प्रशंसेजी.||६||
ॠजुसूत्रे जे श्रेणी पदस्थे, आत्मशक्ति प्रकाशेजी;
यथाख्यात पद शब्द शुद्ध धर्म उल्लासेजी.||७||
सयोगी अयोगी शैलेशे, अंतिम दुग नय जाणोजी;
साधनताए निज गुण व्यक्ति, तेह सेवना वखाणोजी.||८||
कारण भाव तेह अपवादे, कार्यरुप उत्सर्गेजी;
आत्मभाव ते भाव द्रव्यपद, बाह्य प्रवृत्ति निसर्गेजी.||९||
कारणभाव परंपर सेवन, प्रगटे कारज भावोजी;
कार्य सिद्धे कारणता व्यय, शुचि पारिणामिक भावोजी.||१०||
परम गुणी सेवन तन्मयता, निश्चय ध्याने ध्यावेजी;
शुद्धातम अनुभवे आस्वादी, देवचंद्र’ पद पावेजी.||११||`,
      sa: "",
      en: `Shree chandraprabha jinapada sevaa, hevaae je haliyaajee;
Aatama guna anubhavathee maliyaa, te bhavabhayathee taliyaajee.||1||
Dravya seva vandana namanaadika, archana valee gunagraamojee;
Bhaava abheda thavaanee eehaa, parabhaave nikaamojee. ||2||
Bhaava seva apavaade naigama, prabhu gunane sankalpejee;
Sangraha sattaa tulyaarope, bhedaabheda vikalpejee. ||3||
Vyavahaare bahumaana jnyaana nija, charane jina guna ramanaajee;
Prabhu guna aalanbee parinaame, rujupada dhyaana smaranaajee.||4||
Shabde shukala dhyaanaarohana, samabhirudha guna dashamejee;
Beea shukala avikalpa ekatve, evanbhoota te amamejee.||5||
Utsarge samakita guna pragata, naigama prabhutaa anshejee;
Sangraha aatama sattaalanbee, muni pada bhaava prashansejee.||6||
ૠjusootre je shrenee padasthe, aatmashakti prakaashejee;
Yathaakhyaata pada shabda shuddha dharma ullaasejee.||7||
Sayogee ayogee shaileshe, antima duga naya jaanojee;
Saadhanataae nija guna vyakti, teha sevanaa vakhaanojee.||8||
Kaarana bhaava teha apavaade, kaaryarupa utsargejee;
Aatmabhaava te bhaava dravyapada, baahya pravrutti nisargejee.||9||
Kaaranabhaava paranpara sevana, pragate kaaraja bhaavojee;
Kaarya siddhe kaaranataa vyaya, shuchi paarinaamika bhaavojee.||10||
Parama gunee sevana tanmayataa, nishchaya dhyaane dhyaavejee;
Shuddhaatama anubhave aasvaadee, devachandra’ pada paavejee.||11||`,
    },
  },
  {
    id: "shree-jagatnath-jagaguru",
    type: "bhajan",
    title: {
      gu: "શ્રી જગનાથ જગગુરુ દેવ રે, આદીશ્વર જિનરાય રે",
      hi: "श्री जगनाथ जगगुरु देव रे, आदीश्वर जिनराय रे",
      sa: "",
      en: "Shree Jagatnath Jagaguru",
    },
    text: {
      gu: `શ્રી જગનાથ જગગુરુ દેવ રે, આદીશ્વર જિનરાય રે,
તુજ મુખ દેખી સાહિબા રે, આનંદ અંગ ન માય રે;
ૠષભ જિન તું મોટો મહારાજ, તુજ દરિસણ દીઠું આજ રે. ।।૧ ।।
આંખડી કમલની પાંખડી રે, જિલ્લા અમીરસ કંદ રે;
મુખ અનુપમ દીપતું રે, નયન ચકોરો ચંદ રે.||૨||
મૂર્તિ જન મન મોહિની રે, જાણે મોહન વેલ રે;
મનના મનોરથ પૂરતી રે, જિમ સુરતરુ રંગરેલ રે.||૩||
એકણ જીભે તાહરા રે, ગુણ કેટલા કહેવાય રે;
ગંગા વાલુકા કણ તણી રે, કીણી પરે સંખ્યા થાય રે. ઋષભ૦।।૪ ॥
શત્રુંજય ગિરિ રાજવી રે, નાભિરાયા કુલચંદ રે;
“કેસરવિમલ’ એમ વિનવે રે, ઘો દરિશન સુખકંદ રે.||૫||`,
      hi: `श्री जगनाथ जगगुरु देव रे, आदीश्वर जिनराय रे,
तुज मुख देखी साहिबा रे, आनंद अंग न माय रे;
ॠषभ जिन तुं मोटो महाराज, तुज दरिसण दीठुं आज रे. ।।१ ।।
आंखडी कमलनी पांखडी रे, जिल्ला अमीरस कंद रे;
मुख अनुपम दीपतुं रे, नयन चकोरो चंद रे.||२||
मूर्ति जन मन मोहिनी रे, जाणे मोहन वेल रे;
मनना मनोरथ पूरती रे, जिम सुरतरु रंगरेल रे.||३||
एकण जीभे ताहरा रे, गुण केटला कहेवाय रे;
गंगा वालुका कण तणी रे, कीणी परे संख्या थाय रे. ऋषभ०।।४ ॥
शत्रुंजय गिरि राजवी रे, नाभिराया कुलचंद रे;
“केसरविमल’ एम विनवे रे, घो दरिशन सुखकंद रे.||५||`,
      sa: "",
      en: `Shree jaganaatha jagaguru deva re, aadeeshvara jinaraaya re,
Tuja mukha dekhee saahibaa re, aananda anga na maaya re;
ૠshabha jina tun moto mahaaraaja, tuja darisana deethun aaja re. ||1 ||
Aankhadee kamalanee paankhadee re, jillaa ameerasa kanda re;
Mukha anupama deepatun re, nayana chakoro chanda re.||2||
Moorti jana mana mohinee re, jaane mohana vela re;
Mananaa manoratha pooratee re, jima surataru rangarela re.||3||
Ekana jeebhe taaharaa re, guna ketalaa kahevaaya re;
Gangaa vaalukaa kana tanee re, keenee pare sankhyaa thaaya re. rushabha0||4 ||
Shatrunjaya giri raajavee re, naabhiraayaa kulachanda re;
“kesaravimala’ ema vinave re, gho darishana sukhakanda re.||5||`,
    },
  },
  {
    id: "shree-padmaprabhna-naamne-re",
    type: "bhajan",
    title: {
      gu: "શ્રી પદ્મપ્રભના નામને રે, જાઉં હું બલિહાર",
      hi: "श्री पद्मप्रभना नामने रे, जाउं हुं बलिहार",
      sa: "",
      en: "Shree Padmaprabhna Naamne Re",
    },
    text: {
      gu: `શ્રી પદ્મપ્રભના નામને રે, જાઉં હું બલિહાર;
નામ જપંતા દિહાં ગમું રે, ભવભય ભંજણહાર રે.
મિલે મન ભીતર ભગવાન, મિલે મન ભીતર ભગવાન.||૧||
નામ સુણંતા મન ઉલ્લસે રે, લોચન વિકસિત હોય;
રોમાંચિત હુએ દેહડી રે, જાણે મિલીયો સોય રે.||૨||
પંચમ કાલે પામવો રે, દુર્લભ તુજ દેદાર;
તો પણ તારા નામનો રે, છે મોટો આધાર રે.||૩||
નામ ગ્રહે આવી મિલે રે, મન ભીતર ભગવાન;
મંત્ર બળે જિમ દેવતા રે, વાહલો કીધો આહ્વાન રે.||૪||
ધ્યાન પદસ્થ પ્રભાવથી રે, ચાખ્યો અનુભવ સ્વાદ;
“માનવિજય’ વાચક કહેરે, મુકો બીજો વાદ રે.||૫||`,
      hi: `श्री पद्मप्रभना नामने रे, जाउं हुं बलिहार;
नाम जपंता दिहां गमुं रे, भवभय भंजणहार रे.
मिले मन भीतर भगवान, मिले मन भीतर भगवान.||१||
नाम सुणंता मन उल्लसे रे, लोचन विकसित होय;
रोमांचित हुए देहडी रे, जाणे मिलीयो सोय रे.||२||
पंचम काले पामवो रे, दुर्लभ तुज देदार;
तो पण तारा नामनो रे, छे मोटो आधार रे.||३||
नाम ग्रहे आवी मिले रे, मन भीतर भगवान;
मंत्र बळे जिम देवता रे, वाहलो कीधो आह्वान रे.||४||
ध्यान पदस्थ प्रभावथी रे, चाख्यो अनुभव स्वाद;
“मानविजय’ वाचक कहेरे, मुको बीजो वाद रे.||५||`,
      sa: "",
      en: `Shree padmaprabhanaa naamane re, jaaun hun balihaara;
Naama japantaa dihaan gamun re, bhavabhaya bhanjanahaara re.
Mile mana bheetara bhagavaana, mile mana bheetara bhagavaana.||1||
Naama sunantaa mana ullase re, lochana vikasita hoya;
Romaanchita hue dehadee re, jaane mileeyo soya re.||2||
Panchama kaale paamavo re, durlabha tuja dedaara;
To pana taaraa naamano re, chhe moto aadhaara re.||3||
Naama grahe aavee mile re, mana bheetara bhagavaana;
Mantra bale jima devataa re, vaahalo keedho aahvaana re.||4||
Dhyaana padastha prabhaavathee re, chaakhyo anubhava svaada;
“maanavijaya’ vaachaka kahere, muko beejo vaada re.||5||`,
    },
  },
  {
    id: "shree-sambhavjin-sathe-me-to",
    type: "bhajan",
    title: {
      gu: "શ્રી સંભવજિન સાથે મેં તો, અવિહડ પ્રીતિ બાંધી રે",
      hi: "श्री संभवजिन साथे में तो, अविहड प्रीति बांधी रे",
      sa: "",
      en: "Shree Sambhavjin Sathe Me To",
    },
    text: {
      gu: `શ્રી સંભવજિન સાથે મેં તો, અવિહડ પ્રીતિ બાંધી રે;
છોડાવી છૂટે નહિ એ તો, કોઈ જો આવે પણ આંધી રે;
સાચું માનો સંભવજિનવર, આપનો સેવક જાણી રે. ||૧||
રાત-દિવસ હું તુજને ધ્યાવું, તું તો અળગો બેઠો રે;
સાત રાજનું અંતર છે પણ, ધ્યાને મુજ મન પેઠો રે.||૨||
જેમ રવિ મંડલ રહે ગગનમાં, કમળ રહે જલમાંહી રે;
દૂર થકી પણ વિકસિત થાવે, પ્રીતમ છો દિલ માંહી રે.||૩||
તું પુરુષોત્તમ પરમપુરુષ હૈ, જેતા નેતા દેવા રે;
પરમાનંદ વિલાસી તું હી, આપો શિવસુખ મેવા રે.||૪||
ખોટ નથી ખજાને તારે, રત્નત્રયી મુજ આપો રે;
લળી લળી હું વિનવું પ્રભુજી, કર્મની કાસલ કાપો રે.||૫||
પુણ્યે આજ હું દરિશન પાયો, દુઃખડાં સઘળા નાઠાં રે;
રંગવિજયનો “અમૃત” બોલે, શ્રી સંભવજિન તુઠાં રે.||૬||`,
      hi: `श्री संभवजिन साथे में तो, अविहड प्रीति बांधी रे;
छोडावी छूटे नहि ए तो, कोई जो आवे पण आंधी रे;
साचुं मानो संभवजिनवर, आपनो सेवक जाणी रे. ||१||
रात-दिवस हुं तुजने ध्यावुं, तुं तो अळगो बेठो रे;
सात राजनुं अंतर छे पण, ध्याने मुज मन पेठो रे.||२||
जेम रवि मंडल रहे गगनमां, कमळ रहे जलमांही रे;
दूर थकी पण विकसित थावे, प्रीतम छो दिल मांही रे.||३||
तुं पुरुषोत्तम परमपुरुष है, जेता नेता देवा रे;
परमानंद विलासी तुं ही, आपो शिवसुख मेवा रे.||४||
खोट नथी खजाने तारे, रत्नत्रयी मुज आपो रे;
लळी लळी हुं विनवुं प्रभुजी, कर्मनी कासल कापो रे.||५||
पुण्ये आज हुं दरिशन पायो, दुःखडां सघळा नाठां रे;
रंगविजयनो “अमृत” बोले, श्री संभवजिन तुठां रे.||६||`,
      sa: "",
      en: `Shree sanbhavajina saathe men to, avihada preeti baandhee re;
Chhodaavee chhoote nahi e to, koee jo aave pana aandhee re;
Saachun maano sanbhavajinavara, aapano sevaka jaanee re. ||1||
Raata-divasa hun tujane dhyaavun, tun to alago betho re;
Saata raajanun antara chhe pana, dhyaane muja mana petho re.||2||
Jema ravi mandala rahe gaganamaan, kamala rahe jalamaanhee re;
Doora thakee pana vikasita thaave, preetama chho dila maanhee re.||3||
Tun purushottama paramapurusha hai, jetaa netaa devaa re;
Paramaananda vilaasee tun hee, aapo shivasukha mevaa re.||4||
Khota nathee khajaane taare, ratnatrayee muja aapo re;
Lalee lalee hun vinavun prabhujee, karmanee kaasala kaapo re.||5||
Punye aaja hun darishana paayo, dukhadaan saghalaa naathaan re;
Rangavijayano “amruta” bole, shree sanbhavajina tuthaan re.||6||`,
    },
  },
  {
    id: "shree-sambhavjinrajji-re",
    type: "bhajan",
    title: {
      gu: "શ્રી સંભવ જિનરાજજી રે, તાહરું અકલ સ્વરુપ; જિનવર પૂજો",
      hi: "श्री संभव जिनराजजी रे, ताहरुं अकल स्वरुप; जिनवर पूजो",
      sa: "",
      en: "Shree Sambhavjinrajji Re",
    },
    text: {
      gu: `શ્રી સંભવ જિનરાજજી રે, તાહરું અકલ સ્વરુપ; જિનવર પૂજો,
પર પ્રકાશક દિનમણિ રે, સમતારસનો ભૂપ. જિનવર પૂજો.
પૂજો પૂજો રે ભવિક જન પૂજો, પ્રભુ પૂજ્યા પરમાનંદ. જિ૦।૧।।
અવિસંવાદ નિમિત્તે છો રે, જગત જંતુ સુખકાજ;४ि०
હેતુ સત્ય બહુમાનથી રે, જિન સેવ્યાં શિવરાજ. ४ि०॥२॥
ઉપાદાન આતમ સહી રે, પુષ્ટાલંબન દેવ; ४ि०
ઉપાદાન કારણપણે રે, પ્રગટ કરે પ્રભુ સેવ. ४ि०॥३॥
કાર્યગુણ કારણપણે રે, કારણ કાર્ય અનૂપ; ४ि०
સકલ તાહરીરે, માહરે સાધનરુપ. ४ि०||૪||
એક વાર પ્રભુ વંદના રે, આગમ રીતે થાય; ४ि०
કારણ સત્યે કાર્યની રે, સિદ્ધિ પ્રતીત કરાય. ४ि०||૫||
પ્રભુપણે પ્રભુ ઓળખી રે,અમલ ગુણ ગેહ; ४ि०
સાધ્યદષિટી સાદકપને રે, વંદે ધન્ય નર તેહ.||૬||
જન્મ કૃતારથ તેહનો રે, દિવસ સફલ પણ તાસ ४ि०
જગત શરણ જીન ચરણને રે, વંદે ધારીએ ઉલ્લાસ.||૭||
નિજ સતા નિજ ભાવતી રે, ગુંણ અનંતનુ ઠાંણ; ४ि‌०
દેવચંદ જીનરાજ્જી રે, શુદ્ધ સિદ્ધિ શુક ખાન.||૮||`,
      hi: `श्री संभव जिनराजजी रे, ताहरुं अकल स्वरुप; जिनवर पूजो,
पर प्रकाशक दिनमणि रे, समतारसनो भूप. जिनवर पूजो.
पूजो पूजो रे भविक जन पूजो, प्रभु पूज्या परमानंद. जि०।१।।
अविसंवाद निमित्ते छो रे, जगत जंतु सुखकाज;४ि०
हेतु सत्य बहुमानथी रे, जिन सेव्यां शिवराज. ४ि०॥२॥
उपादान आतम सही रे, पुष्टालंबन देव; ४ि०
उपादान कारणपणे रे, प्रगट करे प्रभु सेव. ४ि०॥३॥
कार्यगुण कारणपणे रे, कारण कार्य अनूप; ४ि०
सकल ताहरीरे, माहरे साधनरुप. ४ि०||४||
एक वार प्रभु वंदना रे, आगम रीते थाय; ४ि०
कारण सत्ये कार्यनी रे, सिद्धि प्रतीत कराय. ४ि०||५||
प्रभुपणे प्रभु ओळखी रे,अमल गुण गेह; ४ि०
साध्यदषिटी सादकपने रे, वंदे धन्य नर तेह.||६||
जन्म कृतारथ तेहनो रे, दिवस सफल पण तास ४ि०
जगत शरण जीन चरणने रे, वंदे धारीए उल्लास.||७||
निज सता निज भावती रे, गुंण अनंतनु ठांण; ४ि‌०
देवचंद जीनराज्जी रे, शुद्ध सिद्धि शुक खान.||८||`,
      sa: "",
      en: `Shree sanbhava jinaraajajee re, taaharun akala svarupa; jinavara poojo,
Para prakaashaka dinamani re, samataarasano bhoopa. jinavara poojo.
Poojo poojo re bhavika jana poojo, prabhu poojyaa paramaananda. ji0|1||
Avisanvaada nimitte chho re, jagata jantu sukhakaaja;4ि0
Hetu satya bahumaanathee re, jina sevyaan shivaraaja. 4ि0||2||
Upaadaana aatama sahee re, pushtaalanbana deva; 4ि0
Upaadaana kaaranapane re, pragata kare prabhu seva. 4ि0||3||
Kaaryaguna kaaranapane re, kaarana kaarya anoopa; 4ि0
Sakala taahareere, maahare saadhanarupa. 4ि0||4||
Eka vaara prabhu vandanaa re, aagama reete thaaya; 4ि0
Kaarana satye kaaryanee re, siddhi prateeta karaaya. 4ि0||5||
Prabhupane prabhu olakhee re,amala guna geha; 4ि0
Saadhyadashitee saadakapane re, vande dhanya nara teha.||6||
Janma krutaaratha tehano re, divasa saphala pana taasa 4ि0
Jagata sharana jeena charanane re, vande dhaareee ullaasa.||7||
Nija sataa nija bhaavatee re, gunna anantanu thaanna; 4ि‌0
Devachanda jeenaraajjee re, shuddha siddhi shuka khaana.||8||`,
    },
  },
  {
    id: "shree-shankar-chandrapraph-re-lo",
    type: "bhajan",
    title: {
      gu: "શ્રી શંકર ચંદ્રપ્રભ રે લો, તું ધ્યાતા જગનો વિભુ રે લો",
      hi: "श्री शंकर चंद्रप्रभ रे लो, तुं ध्याता जगनो विभु रे लो",
      sa: "",
      en: "Shree Shankar Chandrapraph Re Lo",
    },
    text: {
      gu: `શ્રી શંકર ચંદ્રપ્રભ રે લો, તું ધ્યાતા જગનો વિભુ રે લો;
તિણે હું ઓલગે આવીઓ રે લો, તુમે પણ રે લો.||૧||
દીધી ચરણની ચાકરી રે લો, હું હરખે કરી રે લો;
સાહિબ સામું નિહાળજો રે લો, ભવસમુદ્રથી તારજો રે લો.||૨||
અગણિત ગુણ ગણવા તણી રે લો, મુજ મન હોંશ ધરે ઘણી રે લો;
જિમ નભને પામ્યા પંખી રે લો,
દાખે બાળક કરથી લખી રે લો.||૩||
જો જિન તું છે પાંસરો રે લો, કરમ તણો શ્યો આશરો રે લો;
જો તુમે રાખશો ગોદમાં રે લો, તો જાશું નિગોદમાં રે લો. ||૪||
જબ તાહરી કરુણા થઈ રે લો, કુમતિ કુગતિ દૂરે ગઈ રે લો;
અધ્યાતમ રવિ ઉગિયો રે લો, પાપ તિમિર કહાં પુગિયો રે લો.||૫||
તુજ મૂરતિની માયા જીસી રે લો, ઉર્વશી થઈ ઉરે વસી રે લો;
રખે પ્રભુ ટાળો એક ઘડી રે લો, નજર વાદળની છાંહડી રે લો.||૬||
તાહરી ભક્તિ ભલી બની રે લો, જિમ ઔષધી સંજીવની રે લો;
તવ મન આનંદ ઉપન્યો રે લો, કહે મોહન કવિ રુપનો રે લો.||૭||`,
      hi: `श्री शंकर चंद्रप्रभ रे लो, तुं ध्याता जगनो विभु रे लो;
तिणे हुं ओलगे आवीओ रे लो, तुमे पण रे लो.||१||
दीधी चरणनी चाकरी रे लो, हुं हरखे करी रे लो;
साहिब सामुं निहाळजो रे लो, भवसमुद्रथी तारजो रे लो.||२||
अगणित गुण गणवा तणी रे लो, मुज मन होंश धरे घणी रे लो;
जिम नभने पाम्या पंखी रे लो,
दाखे बाळक करथी लखी रे लो.||३||
जो जिन तुं छे पांसरो रे लो, करम तणो श्यो आशरो रे लो;
जो तुमे राखशो गोदमां रे लो, तो जाशुं निगोदमां रे लो. ||४||
जब ताहरी करुणा थई रे लो, कुमति कुगति दूरे गई रे लो;
अध्यातम रवि उगियो रे लो, पाप तिमिर कहां पुगियो रे लो.||५||
तुज मूरतिनी माया जीसी रे लो, उर्वशी थई उरे वसी रे लो;
रखे प्रभु टाळो एक घडी रे लो, नजर वादळनी छांहडी रे लो.||६||
ताहरी भक्ति भली बनी रे लो, जिम औषधी संजीवनी रे लो;
तव मन आनंद उपन्यो रे लो, कहे मोहन कवि रुपनो रे लो.||७||`,
      sa: "",
      en: `Shree shankara chandraprabha re lo, tun dhyaataa jagano vibhu re lo;
Tine hun olage aaveeo re lo, tume pana re lo.||1||
Deedhee charananee chaakaree re lo, hun harakhe karee re lo;
Saahiba saamun nihaalajo re lo, bhavasamudrathee taarajo re lo.||2||
Aganita guna ganavaa tanee re lo, muja mana honsha dhare ghanee re lo;
Jima nabhane paamyaa pankhee re lo,
Daakhe baalaka karathee lakhee re lo.||3||
Jo jina tun chhe paansaro re lo, karama tano shyo aasharo re lo;
Jo tume raakhasho godamaan re lo, to jaashun nigodamaan re lo. ||4||
Jaba taaharee karunaa thaee re lo, kumati kugati doore gaee re lo;
Adhyaatama ravi ugiyo re lo, paapa timira kahaan pugiyo re lo.||5||
Tuja mooratinee maayaa jeesee re lo, urvashee thaee ure vasee re lo;
Rakhe prabhu taalo eka ghadee re lo, najara vaadalanee chhaanhadee re lo.||6||
Taaharee bhakti bhalee banee re lo, jima aushadhee sanjeevanee re lo;
Tava mana aananda upanyo re lo, kahe mohana kavi rupano re lo.||7||`,
    },
  },
  {
    id: "shree-suparshav-aanad-me",
    type: "bhajan",
    title: {
      gu: "શ્રી સુપાસ આનદમ, ગુણ અનંતનો કદ હો",
      hi: "श्री सुपास आनदम, गुण अनंतनो कद हो",
      sa: "",
      en: "Shree Suparshav Aanad Me",
    },
    text: {
      gu: `શ્રી સુપાસ આનદમ, ગુણ અનંતનો કદ હો;
જિનજી જ્ઞાનાનંદે પૂરણો, પવિત્ર ચારિત્રાનંદ હો.||૧||
જિનજી સંરક્ષણ વિણ નાથ છો, દ્રવ્ય વિના ધનવંત હો;
જિનજી કર્તાપદ કિરિયા વિના, સંત અજેય અનંત હો.||૨||
જિનજી અગમ અગોચર અમર તું, અન્વય ઋદ્ધિ સમૂહ હો;
જિનજી વર્ણગંધ રસ ફરસ વિણુ, નિજ ભોક્તા ગુણ વ્યૂહ હો.||૩||
જિનજી અક્ષયદાન અચિંતના, લાભ અયત્ને ભોગ હો;
જિનજી વીર્ય શક્તિ અપ્રયાસતા, શુદ્ધ સ્વગુણ ઉપભોગ હો.||૪||
જિનજી એકાંતિક આત્યંતિકો, સહજ અકૃત સ્વાધીન હો;
જિનજી નિરુપચરિત નિદ્વંદ્વ સુખ, અન્ય અહેતુક પીન હો. ||૬||
જિનજી એક પ્રદેશે તાહરે, અવ્યાબાધ સમાય હો;
જિનજી તસુ પર્યાય અવિભાગતા, સર્વાકાશ ન માય હો.||૭||
જિનજી ઇમ અનંત ગુણનો ધણી, ગુણગણનો આનંદ હો;
જિનજી ભોગ રમણ આસ્વાદ યુત, પ્રભુ! તું પરમાનંદ હો.||૮||
જિનજી અવ્યાબાધ રુચિ થઈ, સાધે અવ્યાબાધ હો;
જિનજી “દેવચંદ્ર’ પદ તે લહે, પરમાનંદ સમાધ હો.||૯||`,
      hi: `श्री सुपास आनदम, गुण अनंतनो कद हो;
जिनजी ज्ञानानंदे पूरणो, पवित्र चारित्रानंद हो.||१||
जिनजी संरक्षण विण नाथ छो, द्रव्य विना धनवंत हो;
जिनजी कर्तापद किरिया विना, संत अजेय अनंत हो.||२||
जिनजी अगम अगोचर अमर तुं, अन्वय ऋद्धि समूह हो;
जिनजी वर्णगंध रस फरस विणु, निज भोक्ता गुण व्यूह हो.||३||
जिनजी अक्षयदान अचिंतना, लाभ अयत्ने भोग हो;
जिनजी वीर्य शक्ति अप्रयासता, शुद्ध स्वगुण उपभोग हो.||४||
जिनजी एकांतिक आत्यंतिको, सहज अकृत स्वाधीन हो;
जिनजी निरुपचरित निद्वंद्व सुख, अन्य अहेतुक पीन हो. ||६||
जिनजी एक प्रदेशे ताहरे, अव्याबाध समाय हो;
जिनजी तसु पर्याय अविभागता, सर्वाकाश न माय हो.||७||
जिनजी इम अनंत गुणनो धणी, गुणगणनो आनंद हो;
जिनजी भोग रमण आस्वाद युत, प्रभु! तुं परमानंद हो.||८||
जिनजी अव्याबाध रुचि थई, साधे अव्याबाध हो;
जिनजी “देवचंद्र’ पद ते लहे, परमानंद समाध हो.||९||`,
      sa: "",
      en: `Shree supaasa aanadama, guna anantano kada ho;
Jinajee jnyaanaanande poorano, pavitra chaaritraananda ho.||1||
Jinajee sanrakshana vina naatha chho, dravya vinaa dhanavanta ho;
Jinajee kartaapada kiriyaa vinaa, santa ajeya ananta ho.||2||
Jinajee agama agochara amara tun, anvaya ruddhi samooha ho;
Jinajee varnagandha rasa pharasa vinu, nija bhoktaa guna vyooha ho.||3||
Jinajee akshayadaana achintanaa, laabha ayatne bhoga ho;
Jinajee veerya shakti aprayaasataa, shuddha svaguna upabhoga ho.||4||
Jinajee ekaantika aatyantiko, sahaja akruta svaadheena ho;
Jinajee nirupacharita nidvandva sukha, anya ahetuka peena ho. ||6||
Jinajee eka pradeshe taahare, avyaabaadha samaaya ho;
Jinajee tasu paryaaya avibhaagataa, sarvaakaasha na maaya ho.||7||
Jinajee ima ananta gunano dhanee, gunaganano aananda ho;
Jinajee bhoga ramana aasvaada yuta, prabhu! tun paramaananda ho.||8||
Jinajee avyaabaadha ruchi thaee, saadhe avyaabaadha ho;
Jinajee “devachandra’ pada te lahe, paramaananda samaadha ho.||9||`,
    },
  },
  {
    id: "shree-supas-jin-vandiye",
    type: "bhajan",
    title: {
      gu: "શ્રી સુપાસ જિન વંદીએ, સુખસંપત્તિનો હેતુ લલના",
      hi: "श्री सुपास जिन वंदीए, सुखसंपत्तिनो हेतु ललना",
      sa: "",
      en: "Shree Supas Jin Vandiye",
    },
    text: {
      gu: `શ્રી સુપાસ જિન વંદીએ, સુખસંપત્તિનો હેતુ લલના;
શાંતસુધારસ જલિનધિ, ભવસાગરમાં સેતુ લલના.||૧||
સાત મહાભય ટાળતો, સપ્તમ જિનવર દેવ લલના;
સાવધાન મનસા કરી, ધારો જિનપદ સેવ લલના.||૨||
શિવ શંકર જગદીશ્વરુ, ચિદાનંદ ભગવાન લલના;
જિન અરિહા તીર્થકરુ, જ્યોતિ સ્વરુપ અસમાન લલના.||૩||
અલખ નિરંજન વચ્છલુ, સકલજંતુ વિસરામ લલના;
અભયદાન દાતા સદા, પૂરણ આતમરામ લલના.||૪||
વીતરાગ મદ કલ્પના, રતિ અરતિ ભય શોગ લલના;
નિદ્રા તંદ્રા દુર્દશા, રહિત અબાધિત યોગ લલના.||૫||
પરમપુરુષ પરમાતમા, પરમેશ્વર પરધાન લલના;
પરમ પદારથ પરમેષ્ઠી, પરમદેવ પરમાન લલના.||૬||
વિધિ વિરંચિ વિશ્વંભરુ, ઋષિકેશ જગનાથ લલના;
અઘહર અઘમોચન ધણી, મુક્ત પરમપદ સાથ લલના.||૭||
ઈ૫ અનેક અભિધા ઘરે. અનભવગય વિચાર લલના;
જેહે જાણે તેહને કરે, આનંધન અવતાર લલના.||૮||`,
      hi: `श्री सुपास जिन वंदीए, सुखसंपत्तिनो हेतु ललना;
शांतसुधारस जलिनधि, भवसागरमां सेतु ललना.||१||
सात महाभय टाळतो, सप्तम जिनवर देव ललना;
सावधान मनसा करी, धारो जिनपद सेव ललना.||२||
शिव शंकर जगदीश्वरु, चिदानंद भगवान ललना;
जिन अरिहा तीर्थकरु, ज्योति स्वरुप असमान ललना.||३||
अलख निरंजन वच्छलु, सकलजंतु विसराम ललना;
अभयदान दाता सदा, पूरण आतमराम ललना.||४||
वीतराग मद कल्पना, रति अरति भय शोग ललना;
निद्रा तंद्रा दुर्दशा, रहित अबाधित योग ललना.||५||
परमपुरुष परमातमा, परमेश्वर परधान ललना;
परम पदारथ परमेष्ठी, परमदेव परमान ललना.||६||
विधि विरंचि विश्वंभरु, ऋषिकेश जगनाथ ललना;
अघहर अघमोचन धणी, मुक्त परमपद साथ ललना.||७||
ई५ अनेक अभिधा घरे. अनभवगय विचार ललना;
जेहे जाणे तेहने करे, आनंधन अवतार ललना.||८||`,
      sa: "",
      en: `Shree supaasa jina vandeee, sukhasanpattino hetu lalanaa;
Shaantasudhaarasa jalinadhi, bhavasaagaramaan setu lalanaa.||1||
Saata mahaabhaya taalato, saptama jinavara deva lalanaa;
Saavadhaana manasaa karee, dhaaro jinapada seva lalanaa.||2||
Shiva shankara jagadeeshvaru, chidaananda bhagavaana lalanaa;
Jina arihaa teerthakaru, jyoti svarupa asamaana lalanaa.||3||
Alakha niranjana vachchhalu, sakalajantu visaraama lalanaa;
Abhayadaana daataa sadaa, poorana aatamaraama lalanaa.||4||
Veetaraaga mada kalpanaa, rati arati bhaya shoga lalanaa;
Nidraa tandraa durdashaa, rahita abaadhita yoga lalanaa.||5||
Paramapurusha paramaatamaa, parameshvara paradhaana lalanaa;
Parama padaaratha parameshthee, paramadeva paramaana lalanaa.||6||
Vidhi viranchi vishvanbharu, rushikesha jaganaatha lalanaa;
Aghahara aghamochana dhanee, mukta paramapada saatha lalanaa.||7||
Ee5 aneka abhidhaa ghare. anabhavagaya vichaara lalanaa;
Jehe jaane tehane kare, aanandhana avataara lalanaa.||8||`,
    },
  },
  {
    id: "shree-supas-jinraj",
    type: "bhajan",
    title: {
      gu: "શ્રીસુપાસ જિનરાજ, તું ત્રિભુવન શિરતાજ",
      hi: "श्रीसुपास जिनराज, तुं त्रिभुवन शिरताज",
      sa: "",
      en: "Shree Supas Jinraj",
    },
    text: {
      gu: `શ્રીસુપાસ જિનરાજ, તું ત્રિભુવન શિરતાજ;
આજ હો! છાજે રે ઠકુરાઈ, પ્રભુ તુજ પદ તણીજી. ॥१॥
દિવ્યધ્વનિ સુર ફૂલ ચામર છત્ર અમૂલ;
આજ હો! રાજેરે ભામંડલ, ગાજે દુંદુભિજી. ॥२॥
અતિશય સહજના ચાર, કર્મ ખપ્યાથી અગ્યાર;
આજ હો! કીધારે ઓગણીસે, સુરગણ ભાસુરેજી.||૩||
વાણી ગુણ પાંત્રીશ, પ્રતિહારજ જગદીશ;
આજ હો! રાજેરે દીવાજે, છાજે આઠશુંજી.||૪||
સિંહાસન અશોક, બેઠા મોહે લોક;
આજ હો! સ્વામી રે શિવગામી, વાચક ‘જશ’ થુણ્યોજી.||૫||`,
      hi: `श्रीसुपास जिनराज, तुं त्रिभुवन शिरताज;
आज हो! छाजे रे ठकुराई, प्रभु तुज पद तणीजी. ॥१॥
दिव्यध्वनि सुर फूल चामर छत्र अमूल;
आज हो! राजेरे भामंडल, गाजे दुंदुभिजी. ॥२॥
अतिशय सहजना चार, कर्म खप्याथी अग्यार;
आज हो! कीधारे ओगणीसे, सुरगण भासुरेजी.||३||
वाणी गुण पांत्रीश, प्रतिहारज जगदीश;
आज हो! राजेरे दीवाजे, छाजे आठशुंजी.||४||
सिंहासन अशोक, बेठा मोहे लोक;
आज हो! स्वामी रे शिवगामी, वाचक ‘जश’ थुण्योजी.||५||`,
      sa: "",
      en: `Shreesupaasa jinaraaja, tun tribhuvana shirataaja;
Aaja ho! chhaaje re thakuraaee, prabhu tuja pada taneejee. ||1||
Divyadhvani sura phoola chaamara chhatra amoola;
Aaja ho! raajere bhaamandala, gaaje dundubhijee. ||2||
Atishaya sahajanaa chaara, karma khapyaathee agyaara;
Aaja ho! keedhaare oganeese, suragana bhaasurejee.||3||
Vaanee guna paantreesha, pratihaaraja jagadeesha;
Aaja ho! raajere deevaaje, chhaaje aathashunjee.||4||
Sinhaasana ashoka, bethaa mohe loka;
Aaja ho! svaamee re shivagaamee, vaachaka ‘jasha’ thunyojee.||5||`,
    },
  },
  {
    id: "shri-arjin-bhavjalno-taru",
    type: "bhajan",
    title: {
      gu: "શ્રી અરજીન ભવજલનો તારું,મુજ મન લાગે વરું રે…",
      hi: "श्री अरजीन भवजलनो तारुं,मुज मन लागे वरुं रे…",
      sa: "",
      en: "Shri Arjin Bhavjalno Taru",
    },
    text: {
      gu: `શ્રી અરજીન ભવજલનો તારું,મુજ મન લાગે વરું રે…
મનમોહન સ્વામી!
બાહ્ય ગ્રહી જે ભવિજન તારે, આણે શિવપુર આરે રે.॥੧||
તપ જપ માંહે મહા તોફાને, નાવ ન ચાલે માને રે;
પણ નવિ ભય મુજ હાથોહાથે, તારે તે છે સાથે રે.॥२॥
ભગતને સ્વર્ગ સ્વર્ગથી અધિકું, જ્ઞાનીને ફળ દેઈ રે;
કાયા કષ્ટ વિના ફળ લહીએ, મનમાં ધ્યાન ધરેઈ રે. ॥3॥
જે ઉપાય બહુવિધની રચના, યોગમાયા તે જાણો રે;
શુદ્ધ દ્રવ્ય ગુણ પર્યાયને ધ્યાને, શિવ દિયે પ્રભુ સપરાણો રે. ।।૪ ।।
પ્રભુ પદ વળગ્યા તે રહ્યા તાજા, અળગા અંગ ન સાજા રે;
વાચક ‘જસ” કહે અવર ન ધ્યાઉં, એ પ્રભુના ગુણ ગાઉં રે. ॥૫ ।।`,
      hi: `श्री अरजीन भवजलनो तारुं,मुज मन लागे वरुं रे…
मनमोहन स्वामी!
बाह्य ग्रही जे भविजन तारे, आणे शिवपुर आरे रे.॥੧||
तप जप मांहे महा तोफाने, नाव न चाले माने रे;
पण नवि भय मुज हाथोहाथे, तारे ते छे साथे रे.॥२॥
भगतने स्वर्ग स्वर्गथी अधिकुं, ज्ञानीने फळ देई रे;
काया कष्ट विना फळ लहीए, मनमां ध्यान धरेई रे. ॥3॥
जे उपाय बहुविधनी रचना, योगमाया ते जाणो रे;
शुद्ध द्रव्य गुण पर्यायने ध्याने, शिव दिये प्रभु सपराणो रे. ।।४ ।।
प्रभु पद वळग्या ते रह्या ताजा, अळगा अंग न साजा रे;
वाचक ‘जस” कहे अवर न ध्याउं, ए प्रभुना गुण गाउं रे. ॥५ ।।`,
      sa: "",
      en: `Shree arajeena bhavajalano taarun,muja mana laage varun re…
Manamohana svaamee!
Baahya grahee je bhavijana taare, aane shivapura aare re.||1||
Tapa japa maanhe mahaa tophaane, naava na chaale maane re;
Pana navi bhaya muja haathohaathe, taare te chhe saathe re.||2||
Bhagatane svarga svargathee adhikun, jnyaaneene phala deee re;
Kaayaa kashta vinaa phala laheee, manamaan dhyaana dhareee re. ||3||
Je upaaya bahuvidhanee rachanaa, yogamaayaa te jaano re;
Shuddha dravya guna paryaayane dhyaane, shiva diye prabhu saparaano re. ||4 ||
Prabhu pada valagyaa te rahyaa taajaa, alagaa anga na saajaa re;
Vaachaka ‘jasa” kahe avara na dhyaaun, e prabhunaa guna gaaun re. ||5 ||`,
    },
  },
  {
    id: "shri-chintamani-prabhu-pasji-re",
    type: "bhajan",
    title: {
      gu: "શ્રી ચિંતામણી પ્રભુ પાસજી રે! વાત સુણો એક મોરી રે",
      hi: "श्री चिंतामणी प्रभु पासजी रे! वात सुणो एक मोरी रे",
      sa: "",
      en: "Shri Chintamani Prabhu Pasji Re",
    },
    text: {
      gu: `શ્રી ચિંતામણી પ્રભુ પાસજી રે! વાત સુણો એક મોરી રે;
માહરા મનના મનોરથ પૂરજો,
હું તો ભક્તિ ન છોડું તોરી રે. શ્રી૦ ।। ૧ ।|
। માહરી ખિજમતમાં ખામી નહિ, તાહરે ખોટ ન કાંઈ ખજાને રે;
હવે દેવાની શી ઢીલ છે? શું કહેવું તે કહીએ થાને રે. શ્રી૦ ।। ૨ ।।
તેં ઉરણ સવી પૃથિવી કરી, ધન વરસી વરસીદાને રે;
માહરી વેળા શું એહવા, દીઓ વાંછિત વાળો વાનો રે.||૩||
હું તો કેડ ન છોડું તાહરી, આપ્યા વિણ શિવસુખ સ્વામી રે;
મૂરખ તે ઓછે માનશે, ચિંતામણી કરતલ પામી રે.||૪||
મત કહેશો તુજ કર્મે નથી, કર્મે છે તો તું પામ્યો રે;
સરીખા કીધા મોટકા, કહો તેણે કાંઈ તુજ થામ્યોરે. શ્રી૦ ।।૫।।
કાલ સ્વભાવ ભવિતવ્યતા, તે સઘળા તારા દાસો રે;
મુખ્ય હેતુ તું મોક્ષનો, એ મુજને સબળ વિશ્વાસો રે. श्री०॥६॥
અમે ભક્તે મુક્તિને ખેંચશું, જિમ લોહને ચમક પાષાણો રે;
તુમે હેજ દેખશો, કહસો સેવક છે સપરાણો રે. શ્રી૦ ।।૭।।
ભક્તિ આરાધ્યા ફળ દીએ, ચિંતામણી પણ પાષાણો રે;
વળી અધિકું કાંઈ કહાવશો, એ ભદ્રક ભક્તિ તે જાણો રે. શ્રી૦।।૮।
બાળક તે જિમ તિમ બોલતો, કરે લાડ તાતને આગે;
તે તેહશું વાંછિત પૂરવે, બની આવે સઘળું રાગે રે. શ્રી૦ ।।૯॥
બનનારું તે બન્યું જ છે, હું તો લોકને વાત શીખાવું રે;
વાચક ‘જશ’ કહે સાહિબા, એ ગીતે તુમ ગુણ ગાવુંરે.||૧૦||`,
      hi: `श्री चिंतामणी प्रभु पासजी रे! वात सुणो एक मोरी रे;
माहरा मनना मनोरथ पूरजो,
हुं तो भक्ति न छोडुं तोरी रे. श्री० ।। १ ।|
। माहरी खिजमतमां खामी नहि, ताहरे खोट न कांई खजाने रे;
हवे देवानी शी ढील छे? शुं कहेवुं ते कहीए थाने रे. श्री० ।। २ ।।
तें उरण सवी पृथिवी करी, धन वरसी वरसीदाने रे;
माहरी वेळा शुं एहवा, दीओ वांछित वाळो वानो रे.||३||
हुं तो केड न छोडुं ताहरी, आप्या विण शिवसुख स्वामी रे;
मूरख ते ओछे मानशे, चिंतामणी करतल पामी रे.||४||
मत कहेशो तुज कर्मे नथी, कर्मे छे तो तुं पाम्यो रे;
सरीखा कीधा मोटका, कहो तेणे कांई तुज थाम्योरे. श्री० ।।५।।
काल स्वभाव भवितव्यता, ते सघळा तारा दासो रे;
मुख्य हेतु तुं मोक्षनो, ए मुजने सबळ विश्वासो रे. श्री०॥६॥
अमे भक्ते मुक्तिने खेंचशुं, जिम लोहने चमक पाषाणो रे;
तुमे हेज देखशो, कहसो सेवक छे सपराणो रे. श्री० ।।७।।
भक्ति आराध्या फळ दीए, चिंतामणी पण पाषाणो रे;
वळी अधिकुं कांई कहावशो, ए भद्रक भक्ति ते जाणो रे. श्री०।।८।
बाळक ते जिम तिम बोलतो, करे लाड तातने आगे;
ते तेहशुं वांछित पूरवे, बनी आवे सघळुं रागे रे. श्री० ।।९॥
बननारुं ते बन्युं ज छे, हुं तो लोकने वात शीखावुं रे;
वाचक ‘जश’ कहे साहिबा, ए गीते तुम गुण गावुंरे.||१०||`,
      sa: "",
      en: `Shree chintaamanee prabhu paasajee re! vaata suno eka moree re;
Maaharaa mananaa manoratha poorajo,
Hun to bhakti na chhodun toree re. shree0 || 1 ||
| maaharee khijamatamaan khaamee nahi, taahare khota na kaanee khajaane re;
Have devaanee shee dheela chhe? shun kahevun te kaheee thaane re. shree0 || 2 ||
Ten urana savee pruthivee karee, dhana varasee varaseedaane re;
Maaharee velaa shun ehavaa, deeo vaanchhita vaalo vaano re.||3||
Hun to keda na chhodun taaharee, aapyaa vina shivasukha svaamee re;
Moorakha te ochhe maanashe, chintaamanee karatala paamee re.||4||
Mata kahesho tuja karme nathee, karme chhe to tun paamyo re;
Sareekhaa keedhaa motakaa, kaho tene kaanee tuja thaamyore. shree0 ||5||
Kaala svabhaava bhavitavyataa, te saghalaa taaraa daaso re;
Mukhya hetu tun mokshano, e mujane sabala vishvaaso re. श्री0||6||
Ame bhakte muktine khenchashun, jima lohane chamaka paashaano re;
Tume heja dekhasho, kahaso sevaka chhe saparaano re. shree0 ||7||
Bhakti aaraadhyaa phala deee, chintaamanee pana paashaano re;
Valee adhikun kaanee kahaavasho, e bhadraka bhakti te jaano re. shree0||8|
Baalaka te jima tima bolato, kare laada taatane aage;
Te tehashun vaanchhita poorave, banee aave saghalun raage re. shree0 ||9||
Bananaarun te banyun ja chhe, hun to lokane vaata sheekhaavun re;
Vaachaka ‘jasha’ kahe saahibaa, e geete tuma guna gaavunre.||10||`,
    },
  },
  {
    id: "shri-sankheshwar-nij-rangi",
    type: "bhajan",
    title: {
      gu: "શંખેશ્વર નિજ રંગી, પ્રાણ જીવન પ્રભુ પ્યારે રે",
      hi: "शंखेश्वर निज रंगी, प्राण जीवन प्रभु प्यारे रे",
      sa: "",
      en: "Shri Sankheshwar Nij Rangi",
    },
    text: {
      gu: `શંખેશ્વર નિજ રંગી, પ્રાણ જીવન પ્રભુ પ્યારે રે;
અશ્વસેન વામાજી કે નંદન, ચંદન સમ હમ સારે રે;
અણિયારી તોરી અંબુજ અંખિયા, કરુણારસભરી તારે રે.||૧||
નયન કચોલે અમૃત રોલે, ભવિ જન કાજ સુધારે રે;
ભવિ ચકોર ચિત્ત હરખે નિરખી, ચંદ્ર કિરણ સમ પ્યારે રે.||૨||
તેરા હી નામ રટત હું નિશદિન, અન્ય આલંબન છારે રે;
શરણ પડ્યે કો પાર ઉતારે, ઐસો હૈ બિરુદ તુમારે રે.||૩||
ભ્રમત ભ્રમત શંખેશ્વર સ્વામી!, પામી ભ્રમ સબ વારે રે;
જન્મ મરણ કી ભીતિ નિવારી, વેગે કરો ભવ પારે રે.||૪||
“આતમરામ’ આનંદરસ પૂરણ, તું મુજ કાજ સુધારે રે;
અનહદ નાદ બજે ઘટ અંતર, તું હી તાન ઉચ્ચારે રે.||૫||`,
      hi: `शंखेश्वर निज रंगी, प्राण जीवन प्रभु प्यारे रे;
अश्वसेन वामाजी के नंदन, चंदन सम हम सारे रे;
अणियारी तोरी अंबुज अंखिया, करुणारसभरी तारे रे.||१||
नयन कचोले अमृत रोले, भवि जन काज सुधारे रे;
भवि चकोर चित्त हरखे निरखी, चंद्र किरण सम प्यारे रे.||२||
तेरा ही नाम रटत हुं निशदिन, अन्य आलंबन छारे रे;
शरण पड्ये को पार उतारे, ऐसो है बिरुद तुमारे रे.||३||
भ्रमत भ्रमत शंखेश्वर स्वामी!, पामी भ्रम सब वारे रे;
जन्म मरण की भीति निवारी, वेगे करो भव पारे रे.||४||
“आतमराम’ आनंदरस पूरण, तुं मुज काज सुधारे रे;
अनहद नाद बजे घट अंतर, तुं ही तान उच्चारे रे.||५||`,
      sa: "",
      en: `Shankheshvara nija rangee, praana jeevana prabhu pyaare re;
Ashvasena vaamaajee ke nandana, chandana sama hama saare re;
Aniyaaree toree anbuja ankhiyaa, karunaarasabharee taare re.||1||
Nayana kachole amruta role, bhavi jana kaaja sudhaare re;
Bhavi chakora chitta harakhe nirakhee, chandra kirana sama pyaare re.||2||
Teraa hee naama ratata hun nishadina, anya aalanbana chhaare re;
Sharana padye ko paara utaare, aiso hai biruda tumaare re.||3||
Bhramata bhramata shankheshvara svaamee!, paamee bhrama saba vaare re;
Janma marana kee bheeti nivaaree, vege karo bhava paare re.||4||
“aatamaraama’ aanandarasa poorana, tun muja kaaja sudhaare re;
Anahada naada baje ghata antara, tun hee taana uchchaare re.||5||`,
    },
  },
  {
    id: "shri-munisurat-sahiba-re",
    type: "bhajan",
    title: {
      gu: "શ્રી મુનિસુવ્રત સાહિબા રે, તુજ વિના અવર હો દેવ",
      hi: "श्री मुनिसुव्रत साहिबा रे, तुज विना अवर हो देव",
      sa: "",
      en: "Shri Munisurat Sahiba Re",
    },
    text: {
      gu: `શ્રી મુનિસુવ્રત સાહિબા રે, તુજ વિના અવર હો દેવ;
નજરે દીઠા નવિ ગમે રે, કિમ કરીએ તસ સેવ; જિનેશ્વર!
મુજને તુજ આધાર, મુજને પાર ઉતાર જિનેશ્વર!
નામ તમારું સાંભરે રે, શ્વાસમાંહે સો વાર.||૧||
નીરખ્યા સુર નજરે ઘણા રે, તેહશું ન મિલે તાર;
તારો તાર મિલ્યાં પખે રે, કહો કિમ વાધે પ્યાર.||૨||
અંતર મન મિલ્યા વિના રે, ન ચઢે પ્રેમ પ્રમાણ;
પાયા વિના કેમ સ્થિર રહે રે, મોટા ઘર મંડાણ.||૩||
જોતા મૂરતિ જેહની રે, ઉલ્લસે નજર ન આપ;
તેહવા શું જે પ્રીતડી રે, તે સામો સંતાપ.||૪||
તેણે હરિહરાદિ સુર પરિહરી રે, મન ધરી તાહરી સેવ;
“દાનવિજય’ તુમ દરિશને રે, હરખ હોય નિત્યમેવ.||૫||`,
      hi: `श्री मुनिसुव्रत साहिबा रे, तुज विना अवर हो देव;
नजरे दीठा नवि गमे रे, किम करीए तस सेव; जिनेश्वर!
मुजने तुज आधार, मुजने पार उतार जिनेश्वर!
नाम तमारुं सांभरे रे, श्वासमांहे सो वार.||१||
नीरख्या सुर नजरे घणा रे, तेहशुं न मिले तार;
तारो तार मिल्यां पखे रे, कहो किम वाधे प्यार.||२||
अंतर मन मिल्या विना रे, न चढे प्रेम प्रमाण;
पाया विना केम स्थिर रहे रे, मोटा घर मंडाण.||३||
जोता मूरति जेहनी रे, उल्लसे नजर न आप;
तेहवा शुं जे प्रीतडी रे, ते सामो संताप.||४||
तेणे हरिहरादि सुर परिहरी रे, मन धरी ताहरी सेव;
“दानविजय’ तुम दरिशने रे, हरख होय नित्यमेव.||५||`,
      sa: "",
      en: `Shree munisuvrata saahibaa re, tuja vinaa avara ho deva;
Najare deethaa navi game re, kima kareee tasa seva; jineshvara!
Mujane tuja aadhaara, mujane paara utaara jineshvara!
Naama tamaarun saanbhare re, shvaasamaanhe so vaara.||1||
Neerakhyaa sura najare ghanaa re, tehashun na mile taara;
Taaro taara milyaan pakhe re, kaho kima vaadhe pyaara.||2||
Antara mana milyaa vinaa re, na chadhe prema pramaana;
Paayaa vinaa kema sthira rahe re, motaa ghara mandaana.||3||
Jotaa moorati jehanee re, ullase najara na aapa;
Tehavaa shun je preetadee re, te saamo santaapa.||4||
Tene hariharaadi sura pariharee re, mana dharee taaharee seva;
“daanavijaya’ tuma darishane re, harakha hoya nityameva.||5||`,
    },
  },
  {
    id: "shri-nami-jinvar-sev-dhanadhan",
    type: "bhajan",
    title: {
      gu: "શ્રી નમિ જિનવર સેવ ઘનાઘન ઉનમ્યો રે",
      hi: "श्री नमि जिनवर सेव घनाघन उनम्यो रे",
      sa: "",
      en: "Shri Nami Jinvar Sev Dhanadhan",
    },
    text: {
      gu: `શ્રી નમિ જિનવર સેવ ઘનાઘન ઉનમ્યો રે,
દીઠા મિથ્યારોરવે રે, ભવિક ચિત્તથી ગમ્યો રે;
શુચિ આચરણા રીતિ તે અભ્ર વધે વડા રે
આતમ પરિણતિ શુદ્ધ તે વિજ ઝબુકડા રે.||૧||
વાજે સુવાયુ તે પાવન ભાવના રે,
ઇંદ્ર ધનુષ ત્રિક યોગ તે ભક્તિ ઈક મના રે;
નિર્મળ પ્રભુ સ્તવ ઘોષ ધ્વનિ ઘનગર્જના રે.
તૃષ્ણા ગ્રીષ્મ કાળ તાપની તર્જના રે.||૨||
શુભ લેશ્યાની આલિ તે બગ પંક્તિ બની રે,
શ્રેણી સરોવર હંસ વસે શુચિ ગુણ મુનિ રે;
ચઉગતિ મારગ બંધ ભવિક નિજ ઘર રહ્યા રે,
ચેતન સમતા સંગ રંગમેં ઉમહ્યાં રે.||૩||
સમ્યદૃષ્ટિ મોર તિહાં હરખે ઘણું રે,
દેખી અદ્ભુત રૂપ પરમ જિનવર તણું રે;
પ્રભુ ગુણનો ઉપદેશ તે જલધારા વહી રે,
ધર્મ રુચિ ચિત્ત ભૂમિ માંહિ નિશ્ચય રહી રે.||૪||
ચાતક શ્રમણ સમૂહ કરે તવ પારણો રે,
અનુભવ આસ્વાદ સકળ દુઃખ વારણો રે;
અશુભાચાર નિવારણ તૃણ અંકુરતા રે,
વિરતી તણો પરિણામ તે બીજની પૂરતાં રે.||૫||
પંચ મહાવ્રત ધાન્ય તણા કરસણ વધ્યા રે,
સાય ભાવ નિજ થાપી સાધનતાએ સાધ્ય રે;
ક્ષાયિક દર્શન જ્ઞાન ચરણ ગુણ ઉપના રે,
આદિક બહુ ગુણ શસ્ય આતમ ઘર નીપના રે.||૬||
પ્રભુ દરિસણ મહા મેહ તણે પ્રવેશમેં રે,
પરમાનંદ સુભિક્ષ, થયો મુઝ દેશમેં રે;
દેવચંદ્ર જિનચંદ્ર તણો, અનુભવ કરો રે,
આદિ અનંતો કાલ, આતમ સુખ અનુસરો રે.||૭||`,
      hi: `श्री नमि जिनवर सेव घनाघन उनम्यो रे,
दीठा मिथ्यारोरवे रे, भविक चित्तथी गम्यो रे;
शुचि आचरणा रीति ते अभ्र वधे वडा रे
आतम परिणति शुद्ध ते विज झबुकडा रे.||१||
वाजे सुवायु ते पावन भावना रे,
इंद्र धनुष त्रिक योग ते भक्ति ईक मना रे;
निर्मळ प्रभु स्तव घोष ध्वनि घनगर्जना रे.
तृष्णा ग्रीष्म काळ तापनी तर्जना रे.||२||
शुभ लेश्यानी आलि ते बग पंक्ति बनी रे,
श्रेणी सरोवर हंस वसे शुचि गुण मुनि रे;
चउगति मारग बंध भविक निज घर रह्या रे,
चेतन समता संग रंगमें उमह्यां रे.||३||
सम्यदृष्टि मोर तिहां हरखे घणुं रे,
देखी अद्भुत रूप परम जिनवर तणुं रे;
प्रभु गुणनो उपदेश ते जलधारा वही रे,
धर्म रुचि चित्त भूमि मांहि निश्चय रही रे.||४||
चातक श्रमण समूह करे तव पारणो रे,
अनुभव आस्वाद सकळ दुःख वारणो रे;
अशुभाचार निवारण तृण अंकुरता रे,
विरती तणो परिणाम ते बीजनी पूरतां रे.||५||
पंच महाव्रत धान्य तणा करसण वध्या रे,
साय भाव निज थापी साधनताए साध्य रे;
क्षायिक दर्शन ज्ञान चरण गुण उपना रे,
आदिक बहु गुण शस्य आतम घर नीपना रे.||६||
प्रभु दरिसण महा मेह तणे प्रवेशमें रे,
परमानंद सुभिक्ष, थयो मुझ देशमें रे;
देवचंद्र जिनचंद्र तणो, अनुभव करो रे,
आदि अनंतो काल, आतम सुख अनुसरो रे.||७||`,
      sa: "",
      en: `Shree nami jinavara seva ghanaaghana unamyo re,
Deethaa mithyaarorave re, bhavika chittathee gamyo re;
Shuchi aacharanaa reeti te abhra vadhe vadaa re
Aatama parinati shuddha te vija jhabukadaa re.||1||
Vaaje suvaayu te paavana bhaavanaa re,
Indra dhanusha trika yoga te bhakti eeka manaa re;
Nirmala prabhu stava ghosha dhvani ghanagarjanaa re.
Trushnaa greeshma kaala taapanee tarjanaa re.||2||
Shubha leshyaanee aali te baga pankti banee re,
Shrenee sarovara hansa vase shuchi guna muni re;
Chaugati maaraga bandha bhavika nija ghara rahyaa re,
Chetana samataa sanga rangamen umahyaan re.||3||
Samyadrushti mora tihaan harakhe ghanun re,
Dekhee adbhuta roopa parama jinavara tanun re;
Prabhu gunano upadesha te jaladhaaraa vahee re,
Dharma ruchi chitta bhoomi maanhi nishchaya rahee re.||4||
Chaataka shramana samooha kare tava paarano re,
Anubhava aasvaada sakala dukha vaarano re;
Ashubhaachaara nivaarana truna ankurataa re,
Viratee tano parinaama te beejanee poorataan re.||5||
Pancha mahaavrata dhaanya tanaa karasana vadhyaa re,
Saaya bhaava nija thaapee saadhanataae saadhya re;
Kshaayika darshana jnyaana charana guna upanaa re,
Aadika bahu guna shasya aatama ghara neepanaa re.||6||
Prabhu darisana mahaa meha tane praveshamen re,
Paramaananda subhiksha, thayo mujha deshamen re;
Devachandra jinachandra tano, anubhava karo re,
Aadi ananto kaala, aatama sukha anusaro re.||7||`,
    },
  },
  {
    id: "shri-namijin-seva-karta",
    type: "bhajan",
    title: {
      gu: "શ્રી નમિજિનની સેવા કરતાં, અલિય વિઘન સવિ દૂર નાસેજી",
      hi: "श्री नमिजिननी सेवा करतां, अलिय विघन सवि दूर नासेजी",
      sa: "",
      en: "Shri Namijin Seva Karta",
    },
    text: {
      gu: `શ્રી નમિજિનની સેવા કરતાં, અલિય વિઘન સવિ દૂર નાસેજી;
અષ્ટમહાસિદ્ધિ નવનિધિ લીલા, આવે બહુ મહમુર પાસેજી. ।।૧।।
મયમત્તા ગય અંગણ ગાજે, રાજે તેજી તુખાર તે ચંગાજી;
બેટા બેટી બંધવ જોડી, લહીએ બહુ અધિકાર રંગાજી. ॥२॥
વલ્લભ સંગમ રંગ લહીજે, અણવાહલા હોય દૂર સહેજેજી;
વાંછા તણો વિલંબ ન દૂજો, કારજ સીઝે ભૂરી લહેજેજી. ॥३॥
ચંદ્રકિરણ ઉજ્જ્વલ યશ સૂરજ તૂલ્ય પ્રતાપી દીપેજી;
જે પ્રભુભક્તિ કરે નિત્ય વિનયે, અરિયણ બહુ પ્રતાપે ઝીપેજી. ॥૪॥
મંગલમાલા લચ્છી વિશાલા, બાલા બહુલે પ્રેમરંગેજી;
શ્રી “નયવિજય’ વિબુધ પય સેવક,
કહે લહીએ સુખ પ્રેમ અંગેજી. ||૫ ।।`,
      hi: `श्री नमिजिननी सेवा करतां, अलिय विघन सवि दूर नासेजी;
अष्टमहासिद्धि नवनिधि लीला, आवे बहु महमुर पासेजी. ।।१।।
मयमत्ता गय अंगण गाजे, राजे तेजी तुखार ते चंगाजी;
बेटा बेटी बंधव जोडी, लहीए बहु अधिकार रंगाजी. ॥२॥
वल्लभ संगम रंग लहीजे, अणवाहला होय दूर सहेजेजी;
वांछा तणो विलंब न दूजो, कारज सीझे भूरी लहेजेजी. ॥३॥
चंद्रकिरण उज्ज्वल यश सूरज तूल्य प्रतापी दीपेजी;
जे प्रभुभक्ति करे नित्य विनये, अरियण बहु प्रतापे झीपेजी. ॥४॥
मंगलमाला लच्छी विशाला, बाला बहुले प्रेमरंगेजी;
श्री “नयविजय’ विबुध पय सेवक,
कहे लहीए सुख प्रेम अंगेजी. ||५ ।।`,
      sa: "",
      en: `Shree namijinanee sevaa karataan, aliya vighana savi doora naasejee;
Ashtamahaasiddhi navanidhi leelaa, aave bahu mahamura paasejee. ||1||
Mayamattaa gaya angana gaaje, raaje tejee tukhaara te changaajee;
Betaa betee bandhava jodee, laheee bahu adhikaara rangaajee. ||2||
Vallabha sangama ranga laheeje, anavaahalaa hoya doora sahejejee;
Vaanchhaa tano vilanba na doojo, kaaraja seejhe bhooree lahejejee. ||3||
Chandrakirana ujjvala yasha sooraja toolya prataapee deepejee;
Je prabhubhakti kare nitya vinaye, ariyana bahu prataape jheepejee. ||4||
Mangalamaalaa lachchhee vishaalaa, baalaa bahule premarangejee;
Shree “nayavijaya’ vibudha paya sevaka,
Kahe laheee sukha prema angejee. ||5 ||`,
    },
  },
  {
    id: "shri-naminathne-charan-mamta",
    type: "bhajan",
    title: {
      gu: "શ્રી નમિનાથને ચરણે નમતાં, મનગમતાં સુખ લહિયે રે",
      hi: "श्री नमिनाथने चरणे नमतां, मनगमतां सुख लहिये रे",
      sa: "",
      en: "Shri Naminathne Charan Mamta",
    },
    text: {
      gu: `શ્રી નમિનાથને ચરણે નમતાં, મનગમતાં સુખ લહિયે રે;
ભવ જંગલમાં ભમતાં ભમતાં, કર્મ નિકાચિત દહિયે રે.||૧||
સમકિત શિવપુર માંહી પહોંચાડે, સમકિત ધરમ આધાર રે;
શ્રી જિનવરની પૂજા કરીએ, એ સમકિતનો સાર રે.||૨||
જે સમકિતથી હોય ઉપરાંઠા, તેહના સુખ જાયે નાઠાં રે;
જે કહે જિનપૂજા નવિ કીજે, તેહનું નામ ન લીજે રે.||૩||
વપ્રા રાણીનો સુત પૂજો, જિમ સંસારે ન ધ્રૂજો રે;
ભવજલ તારક કષ્ટ નિવારક, નહિ કોઈ એહવો દૂજો રે.||૪||
શ્રી ઉવજ્ઝાયનો સેવક, “વિનય’ કહે પ્રભુ સેવો રે;
ત્રણ તત્ત્વ મનમાંહી અવધારી, વંદો અરિહંત દેવો રે. ॥५॥`,
      hi: `श्री नमिनाथने चरणे नमतां, मनगमतां सुख लहिये रे;
भव जंगलमां भमतां भमतां, कर्म निकाचित दहिये रे.||१||
समकित शिवपुर मांही पहोंचाडे, समकित धरम आधार रे;
श्री जिनवरनी पूजा करीए, ए समकितनो सार रे.||२||
जे समकितथी होय उपरांठा, तेहना सुख जाये नाठां रे;
जे कहे जिनपूजा नवि कीजे, तेहनुं नाम न लीजे रे.||३||
वप्रा राणीनो सुत पूजो, जिम संसारे न ध्रूजो रे;
भवजल तारक कष्ट निवारक, नहि कोई एहवो दूजो रे.||४||
श्री उवज्झायनो सेवक, “विनय’ कहे प्रभु सेवो रे;
त्रण तत्त्व मनमांही अवधारी, वंदो अरिहंत देवो रे. ॥५॥`,
      sa: "",
      en: `Shree naminaathane charane namataan, managamataan sukha lahiye re;
Bhava jangalamaan bhamataan bhamataan, karma nikaachita dahiye re.||1||
Samakita shivapura maanhee pahonchaade, samakita dharama aadhaara re;
Shree jinavaranee poojaa kareee, e samakitano saara re.||2||
Je samakitathee hoya uparaanthaa, tehanaa sukha jaaye naathaan re;
Je kahe jinapoojaa navi keeje, tehanun naama na leeje re.||3||
Vapraa raaneeno suta poojo, jima sansaare na dhroojo re;
Bhavajala taaraka kashta nivaaraka, nahi koee ehavo doojo re.||4||
Shree uvajjhaayano sevaka, “vinaya’ kahe prabhu sevo re;
Trana tattva manamaanhee avadhaaree, vando arihanta devo re. ||5||`,
    },
  },
  {
    id: "shri-shanti-jineshwar-dito-re",
    type: "bhajan",
    title: {
      gu: "શ્રી શાંતિ જિનેશ્વર દીઠો રે, મારા મનમાં લાગ્યો મીઠો રે",
      hi: "श्री शांति जिनेश्वर दीठो रे, मारा मनमां लाग्यो मीठो रे",
      sa: "",
      en: "Shri Shanti Jineshwar Dito Re",
    },
    text: {
      gu: `શ્રી શાંતિ જિનેશ્વર દીઠો રે, મારા મનમાં લાગ્યો મીઠો રે;
આજ મુખડું એનું જોતાં રે, મારા નયન થયાં પનોતા રે.||૧||
જે નજર માંડી એને જોશે રે, તે તો ભવની ભાવઠ ખોશે રે;
એનું રુપ જોઈ જે જાણે રે, તેહને સુરનર સહુ વખાણે રે.||૨||
એ તો સાહિબ છે સયાણો રે, મને લાગે એહશું તાનો રે;
એ તો શિવસુંદરીનો રસીયો રે, મારા નયણા માંહે વસીયો રે. ॥૩॥
મેં તો સગપણ એહશું કીધું રે, હવે સઘળું કારજ સિધ્યું રે;
એ તો જીવન અંતરજામી રે, નિરંજન એ બહુ નામી રે.||૪||
ઘણું શું એહને વખાણું રે, હું તો જીવના જીવન જાણું રે;
ઘણું જે એહને મલશે રે, તે તો માણસમાંથી ટળશે રે.||૫||
મનડાં જેણે એહશું માંડ્યાં રે, તેણે ઋદ્ધિવંત ઘર છાંડયા રે;
જેણે એહ ઉપાસ્યા રે, તેણે શિવસુખ કરતલ વાસ્યા રે.||૬||
આશિક જે એહના થાયે રે, તેણે સંસારમાં ન રહેવાશે રે;
ગુણ એહના જે ઘણા ગાશે રે, તે તો આખર નિર્મળ થાશે રે. ॥૭॥
મેં તો માંડી એહશું માયા રે, મને ન ગમે બીજાની છાયા રે;
વાચક ‘ઉદયરત્ન’ એમ બોલે રે, કોઈ ન આવે એહને તોલે રે. ॥૮॥`,
      hi: `श्री शांति जिनेश्वर दीठो रे, मारा मनमां लाग्यो मीठो रे;
आज मुखडुं एनुं जोतां रे, मारा नयन थयां पनोता रे.||१||
जे नजर मांडी एने जोशे रे, ते तो भवनी भावठ खोशे रे;
एनुं रुप जोई जे जाणे रे, तेहने सुरनर सहु वखाणे रे.||२||
ए तो साहिब छे सयाणो रे, मने लागे एहशुं तानो रे;
ए तो शिवसुंदरीनो रसीयो रे, मारा नयणा मांहे वसीयो रे. ॥३॥
में तो सगपण एहशुं कीधुं रे, हवे सघळुं कारज सिध्युं रे;
ए तो जीवन अंतरजामी रे, निरंजन ए बहु नामी रे.||४||
घणुं शुं एहने वखाणुं रे, हुं तो जीवना जीवन जाणुं रे;
घणुं जे एहने मलशे रे, ते तो माणसमांथी टळशे रे.||५||
मनडां जेणे एहशुं मांड्यां रे, तेणे ऋद्धिवंत घर छांडया रे;
जेणे एह उपास्या रे, तेणे शिवसुख करतल वास्या रे.||६||
आशिक जे एहना थाये रे, तेणे संसारमां न रहेवाशे रे;
गुण एहना जे घणा गाशे रे, ते तो आखर निर्मळ थाशे रे. ॥७॥
में तो मांडी एहशुं माया रे, मने न गमे बीजानी छाया रे;
वाचक ‘उदयरत्न’ एम बोले रे, कोई न आवे एहने तोले रे. ॥८॥`,
      sa: "",
      en: `Shree shaanti jineshvara deetho re, maaraa manamaan laagyo meetho re;
Aaja mukhadun enun jotaan re, maaraa nayana thayaan panotaa re.||1||
Je najara maandee ene joshe re, te to bhavanee bhaavatha khoshe re;
Enun rupa joee je jaane re, tehane suranara sahu vakhaane re.||2||
E to saahiba chhe sayaano re, mane laage ehashun taano re;
E to shivasundareeno raseeyo re, maaraa nayanaa maanhe vaseeyo re. ||3||
Men to sagapana ehashun keedhun re, have saghalun kaaraja sidhyun re;
E to jeevana antarajaamee re, niranjana e bahu naamee re.||4||
Ghanun shun ehane vakhaanun re, hun to jeevanaa jeevana jaanun re;
Ghanun je ehane malashe re, te to maanasamaanthee talashe re.||5||
Manadaan jene ehashun maandyaan re, tene ruddhivanta ghara chhaandayaa re;
Jene eha upaasyaa re, tene shivasukha karatala vaasyaa re.||6||
Aashika je ehanaa thaaye re, tene sansaaramaan na rahevaashe re;
Guna ehanaa je ghanaa gaashe re, te to aakhara nirmala thaashe re. ||7||
Men to maandee ehashun maayaa re, mane na game beejaanee chhaayaa re;
Vaachaka ‘udayaratna’ ema bole re, koee na aave ehane tole re. ||8||`,
    },
  },
  {
    id: "shri-sheetaljin-bhetiye",
    type: "bhajan",
    title: {
      gu: "શ્રી શીતલજિન! ભેટીએ, કરી ભગતે ચોખું ચિત્ત હો",
      hi: "श्री शीतलजिन! भेटीए, करी भगते चोखुं चित्त हो",
      sa: "",
      en: "Shri Sheetaljin Bhetiye",
    },
    text: {
      gu: `શ્રી શીતલજિન! ભેટીએ, કરી ભગતે ચોખું ચિત્ત હો;
તેહશું કહો છાનું કિશ્યું?, જેહને સોંપ્યાં તન મન વિત્ત હો.||૧||
દાયક નામે છે ઘણા, પણ તું સાયર તે કૂપ હો;
તે બહુ ખજૂઆ તગતગે, તું દિનકર તેજ સ્વરુપ હો.||૨||
મોટો જાણીને આદર્યો, દારિદ્ર ભાંજો જગતાત હો;
તું કરુણાવંત શિરોમણિ, હું કરુણાપાત્ર વિખ્યાત હો.||૩||
અંતરજામી સવિ લહો, અમ મનની જે છે વાત હો;
માં આગળ મોસાળના, શા વર્ણવવા અવદાત હો.||૪||
જાણો તો તાણો કિશ્યું, સેવા ફળ દીજે દેવ હો;
“વાચકજશ’ કહે ઢીલની, એ મુજ મન નવિ ગમે ટેવ હો. ॥५॥`,
      hi: `श्री शीतलजिन! भेटीए, करी भगते चोखुं चित्त हो;
तेहशुं कहो छानुं किश्युं?, जेहने सोंप्यां तन मन वित्त हो.||१||
दायक नामे छे घणा, पण तुं सायर ते कूप हो;
ते बहु खजूआ तगतगे, तुं दिनकर तेज स्वरुप हो.||२||
मोटो जाणीने आदर्यो, दारिद्र भांजो जगतात हो;
तुं करुणावंत शिरोमणि, हुं करुणापात्र विख्यात हो.||३||
अंतरजामी सवि लहो, अम मननी जे छे वात हो;
मां आगळ मोसाळना, शा वर्णववा अवदात हो.||४||
जाणो तो ताणो किश्युं, सेवा फळ दीजे देव हो;
“वाचकजश’ कहे ढीलनी, ए मुज मन नवि गमे टेव हो. ॥५॥`,
      sa: "",
      en: `Shree sheetalajina! bheteee, karee bhagate chokhun chitta ho;
Tehashun kaho chhaanun kishyun?, jehane sonpyaan tana mana vitta ho.||1||
Daayaka naame chhe ghanaa, pana tun saayara te koopa ho;
Te bahu khajooaa tagatage, tun dinakara teja svarupa ho.||2||
Moto jaaneene aadaryo, daaridra bhaanjo jagataata ho;
Tun karunaavanta shiromani, hun karunaapaatra vikhyaata ho.||3||
Antarajaamee savi laho, ama mananee je chhe vaata ho;
Maan aagala mosaalanaa, shaa varnavavaa avadaata ho.||4||
Jaano to taano kishyun, sevaa phala deeje deva ho;
“vaachakajasha’ kahe dheelanee, e muja mana navi game teva ho. ||5||`,
    },
  },
  {
    id: "shri-shreyansh-jin-antarjami",
    type: "bhajan",
    title: {
      gu: "શ્રી શ્રેયાંસ જિન અંતરજામી, આતમરામી નામી રે",
      hi: "श्री श्रेयांस जिन अंतरजामी, आतमरामी नामी रे",
      sa: "",
      en: "Shri Shreyansh Jin Antarjami",
    },
    text: {
      gu: `શ્રી શ્રેયાંસ જિન અંતરજામી, આતમરામી નામી રે;
અધ્યાતમ મત પૂરણ પામી, સહજ મુગતિ ગતિ ગામી રે.||૧||
સયલ સંસારી ઈન્દ્રિયરામી, મુનિગણ આતમરામી રે;
મુખ્યપણે જે આતમરામી, તે કેવલ નિષ્કામી રે.||૨||
નિજ સ્વરુપ જે કિરિયા સાધે, તેહ અધ્યાતમ લહીયે રે;
જે કિરિયા કરી ચઉગતિ સાધે, તે ન અધ્યાતમ કહીયે ર.||૩||
નામ અધ્યાતમ ઠવણ અધ્યાતમ, દ્રવ્ય અધ્યાતમ છંડો રે;
ભાવ અધ્યાતમ નિજ ગુણ સાધે, તો તેહશું રઢ મંડો રે.||૪||
શબ્દ અધ્યાતમ અર્થ સુણીને, નિર્વિકલ્પ આદરજો રે;
શબ્દ અધ્યાતમ ભજના જાણી, હાન ગ્રહણ મતિ ધરજો રે.||૫||
અધ્યાતમ જે વસ્તુ વિચારી, બીજા જાણ લબાસી રે;
વસ્તુગતે જે વસ્તુ પ્રકાશે, “આનંદઘન’ મત વાસી રે.||૬||`,
      hi: `श्री श्रेयांस जिन अंतरजामी, आतमरामी नामी रे;
अध्यातम मत पूरण पामी, सहज मुगति गति गामी रे.||१||
सयल संसारी ईन्द्रियरामी, मुनिगण आतमरामी रे;
मुख्यपणे जे आतमरामी, ते केवल निष्कामी रे.||२||
निज स्वरुप जे किरिया साधे, तेह अध्यातम लहीये रे;
जे किरिया करी चउगति साधे, ते न अध्यातम कहीये र.||३||
नाम अध्यातम ठवण अध्यातम, द्रव्य अध्यातम छंडो रे;
भाव अध्यातम निज गुण साधे, तो तेहशुं रढ मंडो रे.||४||
शब्द अध्यातम अर्थ सुणीने, निर्विकल्प आदरजो रे;
शब्द अध्यातम भजना जाणी, हान ग्रहण मति धरजो रे.||५||
अध्यातम जे वस्तु विचारी, बीजा जाण लबासी रे;
वस्तुगते जे वस्तु प्रकाशे, “आनंदघन’ मत वासी रे.||६||`,
      sa: "",
      en: `Shree shreyaansa jina antarajaamee, aatamaraamee naamee re;
Adhyaatama mata poorana paamee, sahaja mugati gati gaamee re.||1||
Sayala sansaaree eendriyaraamee, munigana aatamaraamee re;
Mukhyapane je aatamaraamee, te kevala nishkaamee re.||2||
Nija svarupa je kiriyaa saadhe, teha adhyaatama laheeye re;
Je kiriyaa karee chaugati saadhe, te na adhyaatama kaheeye ra.||3||
Naama adhyaatama thavana adhyaatama, dravya adhyaatama chhando re;
Bhaava adhyaatama nija guna saadhe, to tehashun radha mando re.||4||
Shabda adhyaatama artha suneene, nirvikalpa aadarajo re;
Shabda adhyaatama bhajanaa jaanee, haana grahana mati dharajo re.||5||
Adhyaatama je vastu vichaaree, beejaa jaana labaasee re;
Vastugate je vastu prakaashe, “aanandaghana’ mata vaasee re.||6||`,
    },
  },
  {
    id: "shri-shreyansh-jin-sahiba",
    type: "bhajan",
    title: {
      gu: "શ્રી શ્રેયાંસ જિન સાહિબા! અવધારો અરદાસ",
      hi: "श्री श्रेयांस जिन साहिबा! अवधारो अरदास",
      sa: "",
      en: "Shri Shreyansh Jin Sahiba",
    },
    text: {
      gu: `શ્રી શ્રેયાંસ જિન સાહિબા! અવધારો અરદાસ;
દાસ કરી જો લેખવો, તો પૂરો મન આશ.||૧||
મોટા નાના આંતરુ,‌‌ લેખવે નહિં દાતાર;
સમ-વિષમ સ્થળ નવિ ગણે વરસંતો જલધાર. ||૨||
નાના ને મોટા મીલ્યા, સહિ તે મોટા થાય;
વાહુલીયા ગંગા મીલ્યા, ગંગ પ્રવાહ કહાય.||૩||
મોટા ને મોટા કરો, એ તો જગતની રીત;
નાના ને મોટા કરી, તો તુમ પ્રેમ પ્રતીત.||૪||
ગુણ અવગુણ નવિ લેખવે, અંગીકૃત જે અમંદ;
કુટિલ કલંકી જેમ વહ્યો, ઈશ્વર શિશે ચંદ.||૫||
અવગુણીએ પણ ઓલગ્યો, ગુણવંત તું ભગવંત;
નિજ સેવક જાણી કરી, દીજીએ સુખ અનંત.||૬||
ઘણી શી વિનંતી કીજીએ? જગજીવન જિનનાહ;
“રુપવિજય” કહે કીજીએ, અંગીકૃત નિર્વાહ.||૭||`,
      hi: `श्री श्रेयांस जिन साहिबा! अवधारो अरदास;
दास करी जो लेखवो, तो पूरो मन आश.||१||
मोटा नाना आंतरु,‌‌ लेखवे नहिं दातार;
सम-विषम स्थळ नवि गणे वरसंतो जलधार. ||२||
नाना ने मोटा मील्या, सहि ते मोटा थाय;
वाहुलीया गंगा मील्या, गंग प्रवाह कहाय.||३||
मोटा ने मोटा करो, ए तो जगतनी रीत;
नाना ने मोटा करी, तो तुम प्रेम प्रतीत.||४||
गुण अवगुण नवि लेखवे, अंगीकृत जे अमंद;
कुटिल कलंकी जेम वह्यो, ईश्वर शिशे चंद.||५||
अवगुणीए पण ओलग्यो, गुणवंत तुं भगवंत;
निज सेवक जाणी करी, दीजीए सुख अनंत.||६||
घणी शी विनंती कीजीए? जगजीवन जिननाह;
“रुपविजय” कहे कीजीए, अंगीकृत निर्वाह.||७||`,
      sa: "",
      en: `Shree shreyaansa jina saahibaa! avadhaaro aradaasa;
Daasa karee jo lekhavo, to pooro mana aasha.||1||
Motaa naanaa aantaru,‌‌ lekhave nahin daataara;
Sama-vishama sthala navi gane varasanto jaladhaara. ||2||
Naanaa ne motaa meelyaa, sahi te motaa thaaya;
Vaahuleeyaa gangaa meelyaa, ganga pravaaha kahaaya.||3||
Motaa ne motaa karo, e to jagatanee reeta;
Naanaa ne motaa karee, to tuma prema prateeta.||4||
Guna avaguna navi lekhave, angeekruta je amanda;
Kutila kalankee jema vahyo, eeshvara shishe chanda.||5||
Avaguneee pana olagyo, gunavanta tun bhagavanta;
Nija sevaka jaanee karee, deejeee sukha ananta.||6||
Ghanee shee vinantee keejeee? jagajeevana jinanaaha;
“rupavijaya” kahe keejeee, angeekruta nirvaaha.||7||`,
    },
  },
  {
    id: "shri-shreyansh-krupa-karo",
    type: "bhajan",
    title: {
      gu: "શ્રી શ્રેયાંસ કૃપા કરો, તું જગબાંધવ તાત રે",
      hi: "श्री श्रेयांस कृपा करो, तुं जगबांधव तात रे",
      sa: "",
      en: "Shri Shreyansh Krupa Karo",
    },
    text: {
      gu: `શ્રી શ્રેયાંસ કૃપા કરો, તું જગબાંધવ તાત રે;
અલખ નિરંજન તું જ્યો, તું જગ માંહે વિખ્યાત રે;||૧||
ધન્ય ધન્ય નરભવ તેહનો રે! જેને તુજ દરિસણ પાયો રે;
માનું ચિંતામણિ સુરતરુરે, તસ ઘર ચાલી આયો રે.||૨||
ધન્ય તે ગામ નગર પુરી, જસ ઘરે તું પ્રભુ આયો રે;
ભક્તિ કરી પડિલાભિયો, તેણે બહુ સુકૃત કમાયો રે.||૩||
જિહાં જિહાં ઈમ પ્રભુ તું ગયો, તિહાં તિહાં બહુ‌ પાપ પલાયો રે
તુજ મૂરતિ નિરખી ભલી,‌જિણે‌‌ તું દિલમાં ધાર્યો રે.||૪||
હવે પ્રભુ! મુજને આપીએ,‌‌ તુજ ચરણ નિવાસો રે;
રિદ્ધિ અનંતી આપીએ, “કીર્તિ” અનંતી આવાસો રે.||૫||`,
      hi: `श्री श्रेयांस कृपा करो, तुं जगबांधव तात रे;
अलख निरंजन तुं ज्यो, तुं जग मांहे विख्यात रे;||१||
धन्य धन्य नरभव तेहनो रे! जेने तुज दरिसण पायो रे;
मानुं चिंतामणि सुरतरुरे, तस घर चाली आयो रे.||२||
धन्य ते गाम नगर पुरी, जस घरे तुं प्रभु आयो रे;
भक्ति करी पडिलाभियो, तेणे बहु सुकृत कमायो रे.||३||
जिहां जिहां ईम प्रभु तुं गयो, तिहां तिहां बहु‌ पाप पलायो रे
तुज मूरति निरखी भली,‌जिणे‌‌ तुं दिलमां धार्यो रे.||४||
हवे प्रभु! मुजने आपीए,‌‌ तुज चरण निवासो रे;
रिद्धि अनंती आपीए, “कीर्ति” अनंती आवासो रे.||५||`,
      sa: "",
      en: `Shree shreyaansa krupaa karo, tun jagabaandhava taata re;
Alakha niranjana tun jyo, tun jaga maanhe vikhyaata re;||1||
Dhanya dhanya narabhava tehano re! jene tuja darisana paayo re;
Maanun chintaamani suratarure, tasa ghara chaalee aayo re.||2||
Dhanya te gaama nagara puree, jasa ghare tun prabhu aayo re;
Bhakti karee padilaabhiyo, tene bahu sukruta kamaayo re.||3||
Jihaan jihaan eema prabhu tun gayo, tihaan tihaan bahu‌ paapa palaayo re
Tuja moorati nirakhee bhalee,‌jine‌‌ tun dilamaan dhaaryo re.||4||
Have prabhu! mujane aapeee,‌‌ tuja charana nivaaso re;
Riddhi anantee aapeee, “keerti” anantee aavaaso re.||5||`,
    },
  },
  {
    id: "shri-shreyansh-prabhu-tano",
    type: "bhajan",
    title: {
      gu: "શ્રી શ્રેયાંસ પ્રભુ તણો, અતિ અદ્ભુત સહજાનંદ રે",
      hi: "श्री श्रेयांस प्रभु तणो, अति अद्भुत सहजानंद रे",
      sa: "",
      en: "Shri Shreyansh Prabhu Tano",
    },
    text: {
      gu: `શ્રી શ્રેયાંસ પ્રભુ તણો, અતિ અદ્ભુત સહજાનંદ રે;
ગુણ ઇક વિધ ત્રિક પરિણમ્યો, ઈમ અનંત ગુણનો વૃંદ રે;
મુનિચંદ! જિણંદ! અમંદ દિણંદ પરે,‌‌ નિત્ય દીપતો સુખકંદ.||૧||
નિજ જ્ઞાને કરી જ્ઞેયનો,.જ્ઞાયક જ્ઞાતા પદ ઈશ રે;
દેખે નિજ દર્શન કરી,‌‌ નિજ દૃશ્ય સામાન્ય જગીશ રે.||૨||
નિજ રમે રમણ કરો, પ્રભુ!‌‌ ચારિત્રે રમતા રામ રે;
ભોગ્ય અનંતને ભોગવો, ભોગે તેણે ભોક્તા સ્વામી રે.||૩||
દેય દાન નિત દીજતે,‌‌ અતિ દાતા પ્રભુ સ્વયમેવ રે;
પાત્ર તુમે નિજ શક્તિના,‌‌ ગ્રાહક વ્યાપકમય દેવ રે. ||૪||
પરિણામિક કારજ તણો, કર્તા ગુણ કરણે નાથ રે;
અક્રિય અક્ષય સ્થિતિમયી, નિઃકલંક અનંતી આથ રે.||૫||
પરિણામિક સત્તા તણો, આવિર્ભાવ વિલાસ નિવાસ રે;
સહજ અકૃત્રિમ અપરાશ્રયી, નિર્વિકલ્પને નિઃપ્રયાસ રે.||૬||
પ્રભુ પ્રભુતા સંભારતાં, ગાતાં કરતાં ગુણગ્રામ રે;
સેવક સાધનતા વરે, નિજ સંવર પરિણતિ પામ રે.||૭||
પ્રગટ તત્ત્વતા ધ્યાવતાં, નિજ તત્ત્વનો ધ્યાતા થાય રે;
તત્ત્વરમણ એકાગ્રતા, પૂરણ તત્ત્વે એહ સમાય રે.||૮||
પ્રભુ દીઠે મુજ સાંભરે, પરમાતમ પૂરણાનંદ રે;
“દેવચંદ્ર’ જિનરાજના, નિત વંદો પય અરવિંદ રે.||૯||`,
      hi: `श्री श्रेयांस प्रभु तणो, अति अद्भुत सहजानंद रे;
गुण इक विध त्रिक परिणम्यो, ईम अनंत गुणनो वृंद रे;
मुनिचंद! जिणंद! अमंद दिणंद परे,‌‌ नित्य दीपतो सुखकंद.||१||
निज ज्ञाने करी ज्ञेयनो,.ज्ञायक ज्ञाता पद ईश रे;
देखे निज दर्शन करी,‌‌ निज दृश्य सामान्य जगीश रे.||२||
निज रमे रमण करो, प्रभु!‌‌ चारित्रे रमता राम रे;
भोग्य अनंतने भोगवो, भोगे तेणे भोक्ता स्वामी रे.||३||
देय दान नित दीजते,‌‌ अति दाता प्रभु स्वयमेव रे;
पात्र तुमे निज शक्तिना,‌‌ ग्राहक व्यापकमय देव रे. ||४||
परिणामिक कारज तणो, कर्ता गुण करणे नाथ रे;
अक्रिय अक्षय स्थितिमयी, निःकलंक अनंती आथ रे.||५||
परिणामिक सत्ता तणो, आविर्भाव विलास निवास रे;
सहज अकृत्रिम अपराश्रयी, निर्विकल्पने निःप्रयास रे.||६||
प्रभु प्रभुता संभारतां, गातां करतां गुणग्राम रे;
सेवक साधनता वरे, निज संवर परिणति पाम रे.||७||
प्रगट तत्त्वता ध्यावतां, निज तत्त्वनो ध्याता थाय रे;
तत्त्वरमण एकाग्रता, पूरण तत्त्वे एह समाय रे.||८||
प्रभु दीठे मुज सांभरे, परमातम पूरणानंद रे;
“देवचंद्र’ जिनराजना, नित वंदो पय अरविंद रे.||९||`,
      sa: "",
      en: `Shree shreyaansa prabhu tano, ati adbhuta sahajaananda re;
Guna ika vidha trika parinamyo, eema ananta gunano vrunda re;
Munichanda! jinanda! amanda dinanda pare,‌‌ nitya deepato sukhakanda.||1||
Nija jnyaane karee jnyeyano,.jnyaayaka jnyaataa pada eesha re;
Dekhe nija darshana karee,‌‌ nija drushya saamaanya jageesha re.||2||
Nija rame ramana karo, prabhu!‌‌ chaaritre ramataa raama re;
Bhogya anantane bhogavo, bhoge tene bhoktaa svaamee re.||3||
Deya daana nita deejate,‌‌ ati daataa prabhu svayameva re;
Paatra tume nija shaktinaa,‌‌ graahaka vyaapakamaya deva re. ||4||
Parinaamika kaaraja tano, kartaa guna karane naatha re;
Akriya akshaya sthitimayee, nikalanka anantee aatha re.||5||
Parinaamika sattaa tano, aavirbhaava vilaasa nivaasa re;
Sahaja akrutrima aparaashrayee, nirvikalpane niprayaasa re.||6||
Prabhu prabhutaa sanbhaarataan, gaataan karataan gunagraama re;
Sevaka saadhanataa vare, nija sanvara parinati paama re.||7||
Pragata tattvataa dhyaavataan, nija tattvano dhyaataa thaaya re;
Tattvaramana ekaagrataa, poorana tattve eha samaaya re.||8||
Prabhu deethe muja saanbhare, paramaatama pooranaananda re;
“devachandra’ jinaraajanaa, nita vando paya aravinda re.||9||`,
    },
  },
  {
    id: "shri-simandar-jinvar-swami",
    type: "bhajan",
    title: {
      gu: "શ્રી સીમંધર જિનવર સ્વામી, વિનતડી અવધારો",
      hi: "श्री सीमंधर जिनवर स्वामी, विनतडी अवधारो",
      sa: "",
      en: "Shri Simandar Jinvar Swami",
    },
    text: {
      gu: `શ્રી સીમંધર જિનવર સ્વામી, વિનતડી અવધારો;
શુદ્ધ ધર્મ પ્રગટ્યો જે તુમચો, પ્રગટે તેહ અમારો રે,
સ્વામી વિનવીયે મનરંગે…||૧||
જે પારિણામિક ધર્મ તમારો, તેહવો હમચો ધર્મ
શ્રદ્ધા ભાસન રમણ વિયોગે, વળગ્યો વિભાવ અધર્મ.||૨||
વસ્તુ સ્વભાવ સ્વજાતિ તેહનો, મૂલ અભાવ ન થાય;
પર વિભાવ અનુગત પરિણતિથી, કર્મે તે અવરાય રે.||૩||
જે વિભાવ તે પણ નૈમિતિક, સંતતિ ભાવ અનાદિ;
પરનિમિત્ત તે વિષય સંગાદિક, તે સંયોગે સાદિ રે.||૪||
અશુદ્ધ નિમિત્તે એ સંસરતા, અત્તા કત્તા પરનો;
શુદ્ધ નિમિત્ત રમે જબ ચિદ્ઘન, કર્તા ભોક્તા ઘરનો રે.||૫||
જેહના ધર્મ અનંતા પ્રગટ્યા, જે નિજ પરિણિત વરિયો;
પરમાતમ જિનદેવ જ્ઞાનાદિક ગુણ દરીયો.||૫||
અવલંબન ઉપદેશક રીતે, શ્રી સીમંધર દેવ;
ભજીયે શુદ્ધ નિમિત્ત અનોપમ, તજીયે ભવભય ટેવ.||૬||
શુદ્ધ દેવ અવલંબન કરતા, પરિહરિયે પરભાવ;
આતમ ધર્મ રમણ અનુભવતા, પ્રગટે આતમ ભાવ.||૭||`,
      hi: `श्री सीमंधर जिनवर स्वामी, विनतडी अवधारो;
शुद्ध धर्म प्रगट्यो जे तुमचो, प्रगटे तेह अमारो रे,
स्वामी विनवीये मनरंगे…||१||
जे पारिणामिक धर्म तमारो, तेहवो हमचो धर्म
श्रद्धा भासन रमण वियोगे, वळग्यो विभाव अधर्म.||२||
वस्तु स्वभाव स्वजाति तेहनो, मूल अभाव न थाय;
पर विभाव अनुगत परिणतिथी, कर्मे ते अवराय रे.||३||
जे विभाव ते पण नैमितिक, संतति भाव अनादि;
परनिमित्त ते विषय संगादिक, ते संयोगे सादि रे.||४||
अशुद्ध निमित्ते ए संसरता, अत्ता कत्ता परनो;
शुद्ध निमित्त रमे जब चिद्घन, कर्ता भोक्ता घरनो रे.||५||
जेहना धर्म अनंता प्रगट्या, जे निज परिणित वरियो;
परमातम जिनदेव ज्ञानादिक गुण दरीयो.||५||
अवलंबन उपदेशक रीते, श्री सीमंधर देव;
भजीये शुद्ध निमित्त अनोपम, तजीये भवभय टेव.||६||
शुद्ध देव अवलंबन करता, परिहरिये परभाव;
आतम धर्म रमण अनुभवता, प्रगटे आतम भाव.||७||`,
      sa: "",
      en: `Shree seemandhara jinavara svaamee, vinatadee avadhaaro;
Shuddha dharma pragatyo je tumacho, pragate teha amaaro re,
Svaamee vinaveeye manarange…||1||
Je paarinaamika dharma tamaaro, tehavo hamacho dharma
Shraddhaa bhaasana ramana viyoge, valagyo vibhaava adharma.||2||
Vastu svabhaava svajaati tehano, moola abhaava na thaaya;
Para vibhaava anugata parinatithee, karme te avaraaya re.||3||
Je vibhaava te pana naimitika, santati bhaava anaadi;
Paranimitta te vishaya sangaadika, te sanyoge saadi re.||4||
Ashuddha nimitte e sansarataa, attaa kattaa parano;
Shuddha nimitta rame jaba chidghana, kartaa bhoktaa gharano re.||5||
Jehanaa dharma anantaa pragatyaa, je nija parinita variyo;
Paramaatama jinadeva jnyaanaadika guna dareeyo.||5||
Avalanbana upadeshaka reete, shree seemandhara deva;
Bhajeeye shuddha nimitta anopama, tajeeye bhavabhaya teva.||6||
Shuddha deva avalanbana karataa, parihariye parabhaava;
Aatama dharma ramana anubhavataa, pragate aatama bhaava.||7||`,
    },
  },
  {
    id: "shri-simandar-swami-mukti-na-dhami",
    type: "bhajan",
    title: {
      gu: "શ્રી સીમંધરસ્વામી, મુક્તિના ધામી, દીઠે પરમાનંદ, સુમતિ આપો, કુમતિ કાપો",
      hi: "श्री सीमंधरस्वामी, मुक्तिना धामी, दीठे परमानंद, सुमति आपो, कुमति कापो",
      sa: "",
      en: "Shri Simandar Swami Mukti Na Dhami",
    },
    text: {
      gu: `શ્રી સીમંધરસ્વામી, મુક્તિના ધામી, દીઠે પરમાનંદ, સુમતિ આપો, કુમતિ કાપો,
ટાળો ભવભય ફંદ; કર્મ અરિંગણ દૂર કરીને, તોડો ભવતરું કંદ. શ્રી સીમંધર૦ ।।૧।।
ચોત્રીસ અતિશય શોભતાં રે, પાંત્રીશ વાણી રસાળ; અષ્ટ પ્રતિહાર્ય દીપતા રે
બેઠી છે પર્ષદા બાર રે. શ્રી સીમંધર૦ારા મહાગોપ મહામાહણ કહીએ, નિર્યામક
સાર્થવાહ; દોષ અઢારને દૂરે કરીને, ભવજલ તારણ નાવ રે. શ્રી સીમંધર૦।।૩।।
અગણિત શંકા એ હું ભર્યો રે, કોણ કરે તસ દૂર; જ્ઞાની તુમે દૂરે વસ્યા રે,
હું પડયો ભવકૂપ રે. શ્રી સીમંધર૦।।૪।। એકવાર દર્શન દીજીએ રે,
દાસની સુણી અરદાસ; ગુણ અવગુણ નવિલેખિયેરે,ગિરુઆનો આધારરે.
શ્રી સીમંધર૦ ||૫ ।। જો હોવત મુજ પાંખડી રે, તો આવત આપ હજૂર;
એ લબ્ધિ મુજ સાંપડે તો, ન રહું તુમથી દૂર રે.
શ્રી સીમંધર૦।।૬। ધન્ય મહાવિદેહના જીવને રે, સદા રહે તુમ પાસ;
હું નિર્ભાગી ભરતે વસ્યોરે, શા કીધા મેં પાપ રે. શ્રી સીમંધર૦।।૭।।
શાસન ભક્ત જે સુરવરા રે, વિનવું શિશ નમાય; શ્રી સીમંધર સ્વામીના રે,
ચરણ કમળ ભેટાડ રે. શ્રી સીમંધર૦૦ ।।૮।। અરિહંત પદ સેવા થકી રે,
દેવપાલાદિક સિદ્ધ; હું માંગુ પ્રભુ એટલું રે, “સૌભાગ્ય’ પદ સમૃદ્ધ.
શ્રી સીમંધર૦।।૯।`,
      hi: `श्री सीमंधरस्वामी, मुक्तिना धामी, दीठे परमानंद, सुमति आपो, कुमति कापो,
टाळो भवभय फंद; कर्म अरिंगण दूर करीने, तोडो भवतरुं कंद. श्री सीमंधर० ।।१।।
चोत्रीस अतिशय शोभतां रे, पांत्रीश वाणी रसाळ; अष्ट प्रतिहार्य दीपता रे
बेठी छे पर्षदा बार रे. श्री सीमंधर०ारा महागोप महामाहण कहीए, निर्यामक
सार्थवाह; दोष अढारने दूरे करीने, भवजल तारण नाव रे. श्री सीमंधर०।।३।।
अगणित शंका ए हुं भर्यो रे, कोण करे तस दूर; ज्ञानी तुमे दूरे वस्या रे,
हुं पडयो भवकूप रे. श्री सीमंधर०।।४।। एकवार दर्शन दीजीए रे,
दासनी सुणी अरदास; गुण अवगुण नविलेखियेरे,गिरुआनो आधाररे.
श्री सीमंधर० ||५ ।। जो होवत मुज पांखडी रे, तो आवत आप हजूर;
ए लब्धि मुज सांपडे तो, न रहुं तुमथी दूर रे.
श्री सीमंधर०।।६। धन्य महाविदेहना जीवने रे, सदा रहे तुम पास;
हुं निर्भागी भरते वस्योरे, शा कीधा में पाप रे. श्री सीमंधर०।।७।।
शासन भक्त जे सुरवरा रे, विनवुं शिश नमाय; श्री सीमंधर स्वामीना रे,
चरण कमळ भेटाड रे. श्री सीमंधर०० ।।८।। अरिहंत पद सेवा थकी रे,
देवपालादिक सिद्ध; हुं मांगु प्रभु एटलुं रे, “सौभाग्य’ पद समृद्ध.
श्री सीमंधर०।।९।`,
      sa: "",
      en: `Shree seemandharasvaamee, muktinaa dhaamee, deethe paramaananda, sumati aapo, kumati kaapo,
Taalo bhavabhaya phanda; karma aringana doora kareene, todo bhavatarun kanda. shree seemandhara0 ||1||
Chotreesa atishaya shobhataan re, paantreesha vaanee rasaala; ashta pratihaarya deepataa re
Bethee chhe parshadaa baara re. shree seemandhara0ાraa mahaagopa mahaamaahana kaheee, niryaamaka
Saarthavaaha; dosha adhaarane doore kareene, bhavajala taarana naava re. shree seemandhara0||3||
Aganita shankaa e hun bharyo re, kona kare tasa doora; jnyaanee tume doore vasyaa re,
Hun padayo bhavakoopa re. shree seemandhara0||4|| ekavaara darshana deejeee re,
Daasanee sunee aradaasa; guna avaguna navilekhiyere,giruaano aadhaarare.
Shree seemandhara0 ||5 || jo hovata muja paankhadee re, to aavata aapa hajoora;
E labdhi muja saanpade to, na rahun tumathee doora re.
Shree seemandhara0||6| dhanya mahaavidehanaa jeevane re, sadaa rahe tuma paasa;
Hun nirbhaagee bharate vasyore, shaa keedhaa men paapa re. shree seemandhara0||7||
Shaasana bhakta je suravaraa re, vinavun shisha namaaya; shree seemandhara svaameenaa re,
Charana kamala bhetaada re. shree seemandhara00 ||8|| arihanta pada sevaa thakee re,
Devapaalaadika siddha; hun maangu prabhu etalun re, “saubhaagya’ pada samruddha.
Shree seemandhara0||9|`,
    },
  },
  {
    id: "shri-simandar-sahib-vinatadi-ho",
    type: "bhajan",
    title: {
      gu: "શ્રી સીમંધર સાહિબા, વિનતડી હો સુણીએ કિરતાર કે",
      hi: "श्री सीमंधर साहिबा, विनतडी हो सुणीए किरतार के",
      sa: "",
      en: "Shri Simandar Sahib Vinatadi Ho",
    },
    text: {
      gu: `શ્રી સીમંધર સાહિબા, વિનતડી હો સુણીએ કિરતાર કે;
તે દિન લેખે લાગશે, જિણ દિવસે હો લહીશું દેદાર કે. શ્રી૦ ।।૧ ।।
હેજાળું હૈયું ઉદાસે, પણ નયણે હો નિરખે સુખ થાય કે;
જે જલપાન પિપાસિયો, તસ દીઠે હો કદી તૃપ્તિ ન થાય કે. શ્રી૦ ।૨।।
જાણો છો પ્રભુ બહુ પરે, માહરા મનની હો વીતકની વાત કે;
તો શું તાણો છો ઘણું, આવી મિલો હો મુજ થઈ સાક્ષાત્ સ્કે.શ્રી૦||૩।।
હું ઉચ્છુક બહુ પરે કહું, પણ ન ગણું હો કાંઈ રીઝ અરીઝ કે;
એ લક્ષણ રાગી તણું, તિણે ભાખ્યું હો સઘળું મન ગુંજ કે. શ્રી૦ ।|૪||
‘જ્ઞાનવિમલ’ પ્રભુ આપણો, જાણીને હો કીજે ઉચ્છાહ કે;
ઉત્તમ આપ અધિક કરે, આવી મળ્યા હો ગ્રહ્યા જે બાંહ્ય કે. શ્રી૦ ૫`,
      hi: `श्री सीमंधर साहिबा, विनतडी हो सुणीए किरतार के;
ते दिन लेखे लागशे, जिण दिवसे हो लहीशुं देदार के. श्री० ।।१ ।।
हेजाळुं हैयुं उदासे, पण नयणे हो निरखे सुख थाय के;
जे जलपान पिपासियो, तस दीठे हो कदी तृप्ति न थाय के. श्री० ।२।।
जाणो छो प्रभु बहु परे, माहरा मननी हो वीतकनी वात के;
तो शुं ताणो छो घणुं, आवी मिलो हो मुज थई साक्षात् स्के.श्री०||३।।
हुं उच्छुक बहु परे कहुं, पण न गणुं हो कांई रीझ अरीझ के;
ए लक्षण रागी तणुं, तिणे भाख्युं हो सघळुं मन गुंज के. श्री० ।|४||
‘ज्ञानविमल’ प्रभु आपणो, जाणीने हो कीजे उच्छाह के;
उत्तम आप अधिक करे, आवी मळ्या हो ग्रह्या जे बांह्य के. श्री० ५`,
      sa: "",
      en: `Shree seemandhara saahibaa, vinatadee ho suneee kirataara ke;
Te dina lekhe laagashe, jina divase ho laheeshun dedaara ke. shree0 ||1 ||
Hejaalun haiyun udaase, pana nayane ho nirakhe sukha thaaya ke;
Je jalapaana pipaasiyo, tasa deethe ho kadee trupti na thaaya ke. shree0 |2||
Jaano chho prabhu bahu pare, maaharaa mananee ho veetakanee vaata ke;
To shun taano chho ghanun, aavee milo ho muja thaee saakshaat ske.shree0||3||
Hun uchchhuka bahu pare kahun, pana na ganun ho kaanee reejha areejha ke;
E lakshana raagee tanun, tine bhaakhyun ho saghalun mana gunja ke. shree0 ||4||
‘jnyaanavimala’ prabhu aapano, jaaneene ho keeje uchchhaaha ke;
Uttama aapa adhika kare, aavee malyaa ho grahyaa je baanhya ke. shree0 5`,
    },
  },
  {
    id: "shri-simandar-sahiba-hu-kem",
    type: "bhajan",
    title: {
      gu: "શ્રી સીમંધર સાહિબા, હું કેમ આવું તુમ પાસ; તુમ વચ્ચે અંતર ઘણું",
      hi: "श्री सीमंधर साहिबा, हुं केम आवुं तुम पास; तुम वच्चे अंतर घणुं",
      sa: "",
      en: "Shri Simandar Sahiba Hu Kem",
    },
    text: {
      gu: `શ્રી સીમંધર સાહિબા, હું કેમ આવું તુમ પાસ; તુમ વચ્ચે અંતર ઘણું,
મને મલવાની ઘણી હોંશ.
હું તો ભરતને છેડે… હારે.हु०॥१॥
હું તો ભરતને છેડલે કાંઈ, પ્રભુજી વિદેહ મોઝાર;
ડુંગર વચ્ચે દરિયા ઘણા કાંઈ, કોશમાં કોશ હજાર. हु०॥२॥
પ્રભુ દેતાં હશે દેશના, કાંઈ સાંભળે તિહાંના લોક;
ધન્ય તે ગામ-નગર પુરી, જિહાં વસે છે પુણ્યવંત લોક.હું૦।।૩।।
ધન્ય તે શ્રાવક શ્રાવિકા, જે નીરખે તુમ મુખચંદ;
પણ એ મનોરથ અમ તણાં, ક્યારે ફળશે ભાગ્ય અમંદ. હું૦।।૪।।
વર્તારો વર્તી જુઓ કાંઈ, જોષીએ માંડ્યા લગન;
ક્યારે સીમંધર ભેટશું, મને લાગી એહ લગન. हु०॥५॥
પણ કોઈ નહિ એહવો, જે ભાંજે મનની ભ્રાંત;
પણ અનુભવ મિત્ર કૃપા કરો, તુમ મળવો તિણ એકાંત.હું૦।।૬।।
વીતરાગ ભાવે સહી તુમે, વર્તો છે જગનાથ;
મેં જાણ્યું તુમ કહેણથી, હું થયો સ્વામી સનાથ.||૭||
પુષ્કલાવતી વિજયે વસો કાંઈ, નયરી પુંડરીગિણી નામ;
સત્યકી નંદન વંદના, અવધારો ગુણના ધામ. कुं०॥८॥
શ્રી શ્રેયાંસ નૃપ કુલચંદ ને, રુક્મિણી રાણીનો કંતઃ
વાચક રામવિજય કહે , તુમ ધ્યાને મુજ મન ચિત.||૯||`,
      hi: `श्री सीमंधर साहिबा, हुं केम आवुं तुम पास; तुम वच्चे अंतर घणुं,
मने मलवानी घणी होंश.
हुं तो भरतने छेडे… हारे.हु०॥१॥
हुं तो भरतने छेडले कांई, प्रभुजी विदेह मोझार;
डुंगर वच्चे दरिया घणा कांई, कोशमां कोश हजार. हु०॥२॥
प्रभु देतां हशे देशना, कांई सांभळे तिहांना लोक;
धन्य ते गाम-नगर पुरी, जिहां वसे छे पुण्यवंत लोक.हुं०।।३।।
धन्य ते श्रावक श्राविका, जे नीरखे तुम मुखचंद;
पण ए मनोरथ अम तणां, क्यारे फळशे भाग्य अमंद. हुं०।।४।।
वर्तारो वर्ती जुओ कांई, जोषीए मांड्या लगन;
क्यारे सीमंधर भेटशुं, मने लागी एह लगन. हु०॥५॥
पण कोई नहि एहवो, जे भांजे मननी भ्रांत;
पण अनुभव मित्र कृपा करो, तुम मळवो तिण एकांत.हुं०।।६।।
वीतराग भावे सही तुमे, वर्तो छे जगनाथ;
में जाण्युं तुम कहेणथी, हुं थयो स्वामी सनाथ.||७||
पुष्कलावती विजये वसो कांई, नयरी पुंडरीगिणी नाम;
सत्यकी नंदन वंदना, अवधारो गुणना धाम. कुं०॥८॥
श्री श्रेयांस नृप कुलचंद ने, रुक्मिणी राणीनो कंतः
वाचक रामविजय कहे , तुम ध्याने मुज मन चित.||९||`,
      sa: "",
      en: `Shree seemandhara saahibaa, hun kema aavun tuma paasa; tuma vachche antara ghanun,
Mane malavaanee ghanee honsha.
Hun to bharatane chhede… haare.हु0||1||
Hun to bharatane chhedale kaanee, prabhujee videha mojhaara;
Dungara vachche dariyaa ghanaa kaanee, koshamaan kosha hajaara. हु0||2||
Prabhu detaan hashe deshanaa, kaanee saanbhale tihaannaa loka;
Dhanya te gaama-nagara puree, jihaan vase chhe punyavanta loka.hun0||3||
Dhanya te shraavaka shraavikaa, je neerakhe tuma mukhachanda;
Pana e manoratha ama tanaan, kyaare phalashe bhaagya amanda. hun0||4||
Vartaaro vartee juo kaanee, josheee maandyaa lagana;
Kyaare seemandhara bhetashun, mane laagee eha lagana. हु0||5||
Pana koee nahi ehavo, je bhaanje mananee bhraanta;
Pana anubhava mitra krupaa karo, tuma malavo tina ekaanta.hun0||6||
Veetaraaga bhaave sahee tume, varto chhe jaganaatha;
Men jaanyun tuma kahenathee, hun thayo svaamee sanaatha.||7||
Pushkalaavatee vijaye vaso kaanee, nayaree pundareeginee naama;
Satyakee nandana vandanaa, avadhaaro gunanaa dhaama. कुं0||8||
Shree shreyaansa nrupa kulachanda ne, rukminee raaneeno kanta
Vaachaka raamavijaya kahe , tuma dhyaane muja mana chita.||9||`,
    },
  },
  {
    id: "shri-simandar-sahiba",
    type: "bhajan",
    title: {
      gu: "શ્રી સીમંધર સાહિબા, સુણો સંપ્રતિ હો ભરતક્ષેત્રની વાત કે",
      hi: "श्री सीमंधर साहिबा, सुणो संप्रति हो भरतक्षेत्रनी वात के",
      sa: "",
      en: "Shri Simandar Sahiba",
    },
    text: {
      gu: `શ્રી સીમંધર સાહિબા, સુણો સંપ્રતિ હો ભરતક્ષેત્રની વાત કે;
અરિહા કેવલી કો નહિ, કેહને કહીએ મનના અવદાત કે.||૧||
ઝાઝું કહેતાં જુગતું નહિ, તુમ સોહે હો જગ કેવલનાણ કે;
ભૂખ્યા ભોજન માંગતા, આપે ઊલટ હો અવસર ના જાણે કે. ।। ૨||
।। કહેશો તુમે જુગતા નથી, જુગતાને હો વળી તારે સાંઈ કે;
યોગ્ય જનનું કહેવું કિશ્યું, ભાવહિનને હો તારે ગ્રહી બાહ્ય કે. ।।૩।|
થોડું હી અવસરે આપીએ, ઘણાની હો પ્રભુ છે પછી વાત કે;
પગલે પગલે પાર પામીએ, પછી લહિયે હો સઘળા અવદાત કે. ॥૪॥
મોડું વહેલું તુમે આપશો, બીજાનો હું ન કરુ સંગ કે;
શ્રી ‘ધીરવિમલ’ ગુરુ શિષ્યનો,
રાખીજે હોપ્રભુઅવિચલ રંગ કે. ||૫||`,
      hi: `श्री सीमंधर साहिबा, सुणो संप्रति हो भरतक्षेत्रनी वात के;
अरिहा केवली को नहि, केहने कहीए मनना अवदात के.||१||
झाझुं कहेतां जुगतुं नहि, तुम सोहे हो जग केवलनाण के;
भूख्या भोजन मांगता, आपे ऊलट हो अवसर ना जाणे के. ।। २||
।। कहेशो तुमे जुगता नथी, जुगताने हो वळी तारे सांई के;
योग्य जननुं कहेवुं किश्युं, भावहिनने हो तारे ग्रही बाह्य के. ।।३।|
थोडुं ही अवसरे आपीए, घणानी हो प्रभु छे पछी वात के;
पगले पगले पार पामीए, पछी लहिये हो सघळा अवदात के. ॥४॥
मोडुं वहेलुं तुमे आपशो, बीजानो हुं न करु संग के;
श्री ‘धीरविमल’ गुरु शिष्यनो,
राखीजे होप्रभुअविचल रंग के. ||५||`,
      sa: "",
      en: `Shree seemandhara saahibaa, suno sanprati ho bharatakshetranee vaata ke;
Arihaa kevalee ko nahi, kehane kaheee mananaa avadaata ke.||1||
Jhaajhun kahetaan jugatun nahi, tuma sohe ho jaga kevalanaana ke;
Bhookhyaa bhojana maangataa, aape oolata ho avasara naa jaane ke. || 2||
|| kahesho tume jugataa nathee, jugataane ho valee taare saanee ke;
Yogya jananun kahevun kishyun, bhaavahinane ho taare grahee baahya ke. ||3||
Thodun hee avasare aapeee, ghanaanee ho prabhu chhe pachhee vaata ke;
Pagale pagale paara paameee, pachhee lahiye ho saghalaa avadaata ke. ||4||
Modun vahelun tume aapasho, beejaano hun na karu sanga ke;
Shree ‘dheeravimala’ guru shishyano,
Raakheeje hoprabhuavichala ranga ke. ||5||`,
    },
  },
  {
    id: "shri-simandar-vinanti",
    type: "bhajan",
    title: {
      gu: "શ્રી સીમંધર વિનંતી, સુણ સાહિબ મેરા",
      hi: "श्री सीमंधर विनंती, सुण साहिब मेरा",
      sa: "",
      en: "Shri Simandar Vinanti",
    },
    text: {
      gu: `શ્રી સીમંધર વિનંતી, સુણ સાહિબ મેરા;
અહનિશ તુમ ધ્યાને રહું, મેં ફરજન તેરા.||૧||
ભાવ ભક્તિશું વંદના, કરું ઊઠી સવેરા;
ભવદુઃખ સાગર તરીયે,જિમ હોય તુમ મેરા.||૨||
અંતર રવિ જબ પ્રગટીઆ, પ્રભુ તુમ ગુણ કેરા;
તવ હમ મન નિર્મલ ભયા, મિટ્યા મોહ અંધેરા.||૩||
તુમ વિણ અવર કો, કહો કવણ ભલેરા;
તે પ્રભુ હમકું દાખવો, કરું તાસ નિહોરા.||૪||
“નય’ નિતુ નેહે નિરખીયે, પ્રભુ અબકી વેરા;
બોધિબીજ મોહે દીજીએ, કહા કહું બહુ તેરા.||૫||`,
      hi: `श्री सीमंधर विनंती, सुण साहिब मेरा;
अहनिश तुम ध्याने रहुं, में फरजन तेरा.||१||
भाव भक्तिशुं वंदना, करुं ऊठी सवेरा;
भवदुःख सागर तरीये,जिम होय तुम मेरा.||२||
अंतर रवि जब प्रगटीआ, प्रभु तुम गुण केरा;
तव हम मन निर्मल भया, मिट्या मोह अंधेरा.||३||
तुम विण अवर को, कहो कवण भलेरा;
ते प्रभु हमकुं दाखवो, करुं तास निहोरा.||४||
“नय’ नितु नेहे निरखीये, प्रभु अबकी वेरा;
बोधिबीज मोहे दीजीए, कहा कहुं बहु तेरा.||५||`,
      sa: "",
      en: `Shree seemandhara vinantee, suna saahiba meraa;
Ahanisha tuma dhyaane rahun, men pharajana teraa.||1||
Bhaava bhaktishun vandanaa, karun oothee saveraa;
Bhavadukha saagara tareeye,jima hoya tuma meraa.||2||
Antara ravi jaba pragateeaa, prabhu tuma guna keraa;
Tava hama mana nirmala bhayaa, mityaa moha andheraa.||3||
Tuma vina avara ko, kaho kavana bhaleraa;
Te prabhu hamakun daakhavo, karun taasa nihoraa.||4||
“naya’ nitu nehe nirakheeye, prabhu abakee veraa;
Bodhibeeja mohe deejeee, kahaa kahun bahu teraa.||5||`,
    },
  },
  {
    id: "shri-vasupujiya-swami-hamara",
    type: "bhajan",
    title: {
      gu: "શ્રી વાસુપૂજ્ય સ્વામી હમારા, પ્રભુ લાગો છો તુમે પ્રેમ પ્યારા",
      hi: "श्री वासुपूज्य स्वामी हमारा, प्रभु लागो छो तुमे प्रेम प्यारा",
      sa: "",
      en: "Shri Vasupujiya Swami Hamara",
    },
    text: {
      gu: `શ્રી વાસુપૂજ્ય સ્વામી હમારા, પ્રભુ લાગો છો તુમે પ્રેમ પ્યારા;
તન-મન-ચિત્ત વળગ્યું તુમશું, હવે અંતર રાખો કહો કિમ અમશું?
સાહિબા જિનરાજ હમારા, મોહના જિનરાજ હમારા. ॥੧॥
આશા પૂરીએ પ્યારા, જો નામ ધરાવો છો જગદાધારા;
સકલ લીલા તુમ પાસે સ્વામી, હેત આણી દીજિયે અંતરયામી!.॥૨॥
એટલી વિમાસણ શી છે તુમને,.એ તો વંછિત દેતાં સ્વામી મુજને;
ખોટ ખજાને નહિ પડે તારે, પણ અક્ષય ખજાનો હોશે માહરે. ॥૩॥
ભલો ભૂંડો પણ પોતાનો જાણી,
વળી કરુણાની લહેર તે મનમાં આણી;
અમને મનોગત વાંછિત દેજો, પ્રભુ હેત ધરીને સામું જોજો. ॥४॥
વારંવાર કહું શું તુજને, સેવા ફળ દેજો સ્વામી!
અમને; પ્રેમવિબુધના’ભાણ’ની પ્રભુજી!
તુમનામેદોલતચઢતીવિભુજી! ॥૫॥`,
      hi: `श्री वासुपूज्य स्वामी हमारा, प्रभु लागो छो तुमे प्रेम प्यारा;
तन-मन-चित्त वळग्युं तुमशुं, हवे अंतर राखो कहो किम अमशुं?
साहिबा जिनराज हमारा, मोहना जिनराज हमारा. ॥੧॥
आशा पूरीए प्यारा, जो नाम धरावो छो जगदाधारा;
सकल लीला तुम पासे स्वामी, हेत आणी दीजिये अंतरयामी!.॥२॥
एटली विमासण शी छे तुमने,.ए तो वंछित देतां स्वामी मुजने;
खोट खजाने नहि पडे तारे, पण अक्षय खजानो होशे माहरे. ॥३॥
भलो भूंडो पण पोतानो जाणी,
वळी करुणानी लहेर ते मनमां आणी;
अमने मनोगत वांछित देजो, प्रभु हेत धरीने सामुं जोजो. ॥४॥
वारंवार कहुं शुं तुजने, सेवा फळ देजो स्वामी!
अमने; प्रेमविबुधना’भाण’नी प्रभुजी!
तुमनामेदोलतचढतीविभुजी! ॥५॥`,
      sa: "",
      en: `Shree vaasupoojya svaamee hamaaraa, prabhu laago chho tume prema pyaaraa;
Tana-mana-chitta valagyun tumashun, have antara raakho kaho kima amashun?
Saahibaa jinaraaja hamaaraa, mohanaa jinaraaja hamaaraa. ||1||
Aashaa pooreee pyaaraa, jo naama dharaavo chho jagadaadhaaraa;
Sakala leelaa tuma paase svaamee, heta aanee deejiye antarayaamee!.||2||
Etalee vimaasana shee chhe tumane,.e to vanchhita detaan svaamee mujane;
Khota khajaane nahi pade taare, pana akshaya khajaano hoshe maahare. ||3||
Bhalo bhoondo pana potaano jaanee,
Valee karunaanee lahera te manamaan aanee;
Amane manogata vaanchhita dejo, prabhu heta dhareene saamun jojo. ||4||
Vaaranvaara kahun shun tujane, sevaa phala dejo svaamee!
Amane; premavibudhanaa’bhaana’nee prabhujee!
Tumanaamedolatachadhateevibhujee! ||5||`,
    },
  },
  {
    id: "shubh-veda-shubh-avsar-re",
    type: "bhajan",
    title: {
      gu: "શુભ વેળા શુભ અવસરે રે, લાગ્યો પ્રભુ શું નેહ",
      hi: "शुभ वेळा शुभ अवसरे रे, लाग्यो प्रभु शुं नेह",
      sa: "",
      en: "Shubh Veda Shubh Avsar Re",
    },
    text: {
      gu: `શુભ વેળા શુભ અવસરે રે, લાગ્યો પ્રભુ શું નેહ;
વાધે મુજ મન વાલહો રે, દિન દિન બમણો નેહ,
અજિત જિન! વિનતડી અવધાર.
મન માહરું લાગી રહ્યું રે, તુજ ચરણે એક તાર.||૧||
મુજ હેજા લઉં રે, કરે ઉમાહો અપાર;
ઘડી ઘડીને અંતરે રે, ચાહે તુજ દેદાર.||૨||
મીઠો અમૃતની પરે રે, સાહિબ તાહર સંગ;
નયણે નયણ મિલાવતાં રે, શીતલ થાયે અંગ.||૩||
અવશ્યપણે એક ઘડી રે, જાયે તુજ વિણ જેહ;
વરસ સો સમ સાહિબા રે, લાગે મુજ મન તેહ.||૪||
તુજને તો મુજ ઉપરે રે, મહેર ન આવે કાંય;
તો પણ મુજ મન લાલચું રે, તુમ વિણ અલગું ન થાય.||૫||
આસંગાયત આપણો રે, જાણીને જિનરાય;
દરિશણ દીજે દીન પ્રતિ રે, ‘હંસરતન” સુખ થાય.||૬||`,
      hi: `शुभ वेळा शुभ अवसरे रे, लाग्यो प्रभु शुं नेह;
वाधे मुज मन वालहो रे, दिन दिन बमणो नेह,
अजित जिन! विनतडी अवधार.
मन माहरुं लागी रह्युं रे, तुज चरणे एक तार.||१||
मुज हेजा लउं रे, करे उमाहो अपार;
घडी घडीने अंतरे रे, चाहे तुज देदार.||२||
मीठो अमृतनी परे रे, साहिब ताहर संग;
नयणे नयण मिलावतां रे, शीतल थाये अंग.||३||
अवश्यपणे एक घडी रे, जाये तुज विण जेह;
वरस सो सम साहिबा रे, लागे मुज मन तेह.||४||
तुजने तो मुज उपरे रे, महेर न आवे कांय;
तो पण मुज मन लालचुं रे, तुम विण अलगुं न थाय.||५||
आसंगायत आपणो रे, जाणीने जिनराय;
दरिशण दीजे दीन प्रति रे, ‘हंसरतन” सुख थाय.||६||`,
      sa: "",
      en: `Shubha velaa shubha avasare re, laagyo prabhu shun neha;
Vaadhe muja mana vaalaho re, dina dina bamano neha,
Ajita jina! vinatadee avadhaara.
Mana maaharun laagee rahyun re, tuja charane eka taara.||1||
Muja hejaa laun re, kare umaaho apaara;
Ghadee ghadeene antare re, chaahe tuja dedaara.||2||
Meetho amrutanee pare re, saahiba taahara sanga;
Nayane nayana milaavataan re, sheetala thaaye anga.||3||
Avashyapane eka ghadee re, jaaye tuja vina jeha;
Varasa so sama saahibaa re, laage muja mana teha.||4||
Tujane to muja upare re, mahera na aave kaanya;
To pana muja mana laalachun re, tuma vina alagun na thaaya.||5||
Aasangaayata aapano re, jaaneene jinaraaya;
Darishana deeje deena prati re, ‘hansaratana” sukha thaaya.||6||`,
    },
  },
  {
    id: "siddhachal-maro-siddhachal-pyaro",
    type: "bhajan",
    title: {
      gu: "સિદ્ધાચલ મારો સિદ્ધાચલ પ્યારો",
      hi: "सिद्धाचल मारो सिद्धाचल प्यारो",
      sa: "",
      en: "Siddhachal Maro Siddhachal Pyaro",
    },
    text: {
      gu: `સિદ્ધાચલ મારો સિદ્ધાચલ પ્યારો,
મને સિદ્ધશિલાએ લઈ જનારો,
આદિનાથ મારો આદિનાથ પ્યારો,
સર્વ જીવોના હૈયાનો ધબકારો,
મારો રક્ષણહાર મારો તારણહાર,
મારા આતમને શુદ્ધિ દેનારો,
ગિરિરાજ, ગિરિરાજ, ગિરિરાજ, ગિરિરાજ,
ગિરિરાજ, ગિરિરાજ… જય ગિરિરાજ
આદિનાથ,આદિનાથ, આદિનાથ, આદિનાથ,
આદિનાથ, આદિનાથ.. જય આદિનાથ…. ॥૧॥
તું મારો નાથ છે, તું મારો સાથ છે,
તારા નામે વહે જીવનધારા,
તું મારો સાજ છે, તું જ સંગાથ છે,
તુજથી થાવું મારે ભવપારા…
તારી કૃપાથી ઠરે વિકાર,
તારી ભક્તિથી સઘળું સાકાર,
તુજમાં ભીંજાઉં હું અનરાધાર,
તારામાં થઈ જાઉં એકતાર..
મારા હર એક શ્વાસમાં રહે તું,
રોમે રોમે આનંદ ભરે તું,
જેવો છું એવો સ્વીકારે મને તું,
તારા સ્નેહે શણગારે મને તું..
સિદ્ધાચલ મારો સિદ્ધાચલ પ્યારો…. ॥ર॥`,
      hi: `सिद्धाचल मारो सिद्धाचल प्यारो,
मने सिद्धशिलाए लई जनारो,
आदिनाथ मारो आदिनाथ प्यारो,
सर्व जीवोना हैयानो धबकारो,
मारो रक्षणहार मारो तारणहार,
मारा आतमने शुद्धि देनारो,
गिरिराज, गिरिराज, गिरिराज, गिरिराज,
गिरिराज, गिरिराज… जय गिरिराज
आदिनाथ,आदिनाथ, आदिनाथ, आदिनाथ,
आदिनाथ, आदिनाथ.. जय आदिनाथ…. ॥१॥
तुं मारो नाथ छे, तुं मारो साथ छे,
तारा नामे वहे जीवनधारा,
तुं मारो साज छे, तुं ज संगाथ छे,
तुजथी थावुं मारे भवपारा…
तारी कृपाथी ठरे विकार,
तारी भक्तिथी सघळुं साकार,
तुजमां भींजाउं हुं अनराधार,
तारामां थई जाउं एकतार..
मारा हर एक श्वासमां रहे तुं,
रोमे रोमे आनंद भरे तुं,
जेवो छुं एवो स्वीकारे मने तुं,
तारा स्नेहे शणगारे मने तुं..
सिद्धाचल मारो सिद्धाचल प्यारो…. ॥र॥`,
      sa: "",
      en: `Siddhaachala maaro siddhaachala pyaaro,
Mane siddhashilaae laee janaaro,
Aadinaatha maaro aadinaatha pyaaro,
Sarva jeevonaa haiyaano dhabakaaro,
Maaro rakshanahaara maaro taaranahaara,
Maaraa aatamane shuddhi denaaro,
Giriraaja, giriraaja, giriraaja, giriraaja,
Giriraaja, giriraaja… jaya giriraaja
Aadinaatha,aadinaatha, aadinaatha, aadinaatha,
Aadinaatha, aadinaatha.. jaya aadinaatha…. ||1||
Tun maaro naatha chhe, tun maaro saatha chhe,
Taaraa naame vahe jeevanadhaaraa,
Tun maaro saaja chhe, tun ja sangaatha chhe,
Tujathee thaavun maare bhavapaaraa…
Taaree krupaathee thare vikaara,
Taaree bhaktithee saghalun saakaara,
Tujamaan bheenjaaun hun anaraadhaara,
Taaraamaan thaee jaaun ekataara..
Maaraa hara eka shvaasamaan rahe tun,
Rome rome aananda bhare tun,
Jevo chhun evo sveekaare mane tun,
Taaraa snehe shanagaare mane tun..
Siddhaachala maaro siddhaachala pyaaro…. ||ra||`,
    },
  },
  {
    id: "siddhachal-na-sikhrone-vandan",
    type: "bhajan",
    title: {
      gu: "તીર્થોમાં કીધું જેને મહાતીર્થ છે",
      hi: "तीर्थोमां कीधुं जेने महातीर्थ छे",
      sa: "",
      en: "Siddhachal Na Sikhrone Vandan",
    },
    text: {
      gu: `તીર્થોમાં કીધું જેને મહાતીર્થ છે,
શત્રુંજય એ મહાતીર્થનું નામ છે..
કાંકરે કાંકરે, થયા સિદ્ધ અનંત,
જાણી લો જાણી લો..
ભવિ આતમને જ, મળે છે આ તક,
માણી લો માણી લો…
પૂર્વ નવાણું વાર, જ્યાં પધાર્યા આદિનાથ,
એવો શાશ્ચત છે ગિરિરાજ…
એ ગિરીને ભેટતા, થઈ જશે ભવપાર,
એવી શ્રદ્ધા ધરું મહારાજ…
સિદ્ધાચલના શિખરોને વંદન…શત્રુંજયના શિખરોને વંદન… ।।૧।।
તળેટીથી જાત્રાની, કરું હું શુભ શરુઆત,
દોડીને રામપોળ પહોંચું, થશે દાદાનો સંગાથ,
સાત શ્વાસો લઈ, મૂર્તિ અંજન થઈ,
એવા દાદા બિરાજે છે જ્યાં…
ભાવથી જે ચડે, તેના કર્મો ખપે, ભરતક્ષેત્રનું મોક્ષ છે જ્યાં..
સિદ્ધાચલના શિખરોને વંદન…શત્રુંજયના શિખરોને વંદન… ।।૨॥।`,
      hi: `तीर्थोमां कीधुं जेने महातीर्थ छे,
शत्रुंजय ए महातीर्थनुं नाम छे..
कांकरे कांकरे, थया सिद्ध अनंत,
जाणी लो जाणी लो..
भवि आतमने ज, मळे छे आ तक,
माणी लो माणी लो…
पूर्व नवाणुं वार, ज्यां पधार्या आदिनाथ,
एवो शाश्चत छे गिरिराज…
ए गिरीने भेटता, थई जशे भवपार,
एवी श्रद्धा धरुं महाराज…
सिद्धाचलना शिखरोने वंदन…शत्रुंजयना शिखरोने वंदन… ।।१।।
तळेटीथी जात्रानी, करुं हुं शुभ शरुआत,
दोडीने रामपोळ पहोंचुं, थशे दादानो संगाथ,
सात श्वासो लई, मूर्ति अंजन थई,
एवा दादा बिराजे छे ज्यां…
भावथी जे चडे, तेना कर्मो खपे, भरतक्षेत्रनुं मोक्ष छे ज्यां..
सिद्धाचलना शिखरोने वंदन…शत्रुंजयना शिखरोने वंदन… ।।२॥।`,
      sa: "",
      en: `Teerthomaan keedhun jene mahaateertha chhe,
Shatrunjaya e mahaateerthanun naama chhe..
Kaankare kaankare, thayaa siddha ananta,
Jaanee lo jaanee lo..
Bhavi aatamane ja, male chhe aa taka,
Maanee lo maanee lo…
Poorva navaanun vaara, jyaan padhaaryaa aadinaatha,
Evo shaashchata chhe giriraaja…
E gireene bhetataa, thaee jashe bhavapaara,
Evee shraddhaa dharun mahaaraaja…
Siddhaachalanaa shikharone vandana…shatrunjayanaa shikharone vandana… ||1||
Taleteethee jaatraanee, karun hun shubha sharuaata,
Dodeene raamapola pahonchun, thashe daadaano sangaatha,
Saata shvaaso laee, moorti anjana thaee,
Evaa daadaa biraaje chhe jyaan…
Bhaavathee je chade, tenaa karmo khape, bharatakshetranun moksha chhe jyaan..
Siddhaachalanaa shikharone vandana…shatrunjayanaa shikharone vandana… ||2|||`,
    },
  },
  {
    id: "sidhgiri-mandan-pay-namije",
    type: "bhajan",
    title: {
      gu: "સિદ્ધગિરિ મંડણ પાય નમીજે, રિસહેસર જિનરાય",
      hi: "सिद्धगिरि मंडण पाय नमीजे, रिसहेसर जिनराय",
      sa: "",
      en: "Sidhgiri Mandan Pay Namije",
    },
    text: {
      gu: `સિદ્ધગિરિ મંડણ પાય નમીજે, રિસહેસર જિનરાય;
નાભિભૂપ મરુદેવા નંદન, જગત જંતુ સુખકાર રે…
હો સ્વામી રે… હો જિનજી રે… હો પ્રભુજી રે…!
તુમ દરિસન સુખકાર, ઋષભજિન! તુમ દરિસન સુખકાર રે!
તુમ દરિસનથી સમકિત પ્રગટે, નિજગુણ ઋદ્ધિ ઉદાર રે.||૧||
ભારે કર્મી પણ તેં તાર્યા, ભવજલધિથી ઉગાર્યા;
મુજ સરીખા કિમ નવિ સંભાર્યા, ચિત્તથી કેમ વિસાર્યા રે.||૨||
પાપી અધમ પણ તુમ સુપસાયે, પામ્યા ગુણ સમુદાય;
અમે પણ તરશું શરણ સ્વીકારી, મહેર કરો મહારાય રે.||૩||
તરણ તારણ જગમાંહિ કહાવો, હું છું સેવક તાહરો;
અવર આગળ જઈને કિમ યાચું, મહિમા અધિક તુમારો રે.||૪||
મુજ અવગુણ સામું મત જુઓ, બિરુદ તમારું સંભાળો;
પતિત પાવન તુમે નામ ધરાવો, મોહ વિડંબણા ટાળો રે.||૫||
પૂર્વ નવ્વાણું વાર પધારી, પવિત્ર કર્યું શુભ ધામ;
સાધુ અનંતા કર્મ ખપાવી, પહોંચ્યા અવિચલ ઠામ રે.||૬||
શ્રી નયવિજય વિબુધ પય સેવક, ‘વાચક જશ’ કહે સાચું;
વિમલાચલ ભૂષણ સ્તવનાથી, આનંદ રસભર માચું રે.||૭||`,
      hi: `सिद्धगिरि मंडण पाय नमीजे, रिसहेसर जिनराय;
नाभिभूप मरुदेवा नंदन, जगत जंतु सुखकार रे…
हो स्वामी रे… हो जिनजी रे… हो प्रभुजी रे…!
तुम दरिसन सुखकार, ऋषभजिन! तुम दरिसन सुखकार रे!
तुम दरिसनथी समकित प्रगटे, निजगुण ऋद्धि उदार रे.||१||
भारे कर्मी पण तें तार्या, भवजलधिथी उगार्या;
मुज सरीखा किम नवि संभार्या, चित्तथी केम विसार्या रे.||२||
पापी अधम पण तुम सुपसाये, पाम्या गुण समुदाय;
अमे पण तरशुं शरण स्वीकारी, महेर करो महाराय रे.||३||
तरण तारण जगमांहि कहावो, हुं छुं सेवक ताहरो;
अवर आगळ जईने किम याचुं, महिमा अधिक तुमारो रे.||४||
मुज अवगुण सामुं मत जुओ, बिरुद तमारुं संभाळो;
पतित पावन तुमे नाम धरावो, मोह विडंबणा टाळो रे.||५||
पूर्व नव्वाणुं वार पधारी, पवित्र कर्युं शुभ धाम;
साधु अनंता कर्म खपावी, पहोंच्या अविचल ठाम रे.||६||
श्री नयविजय विबुध पय सेवक, ‘वाचक जश’ कहे साचुं;
विमलाचल भूषण स्तवनाथी, आनंद रसभर माचुं रे.||७||`,
      sa: "",
      en: `Siddhagiri mandana paaya nameeje, risahesara jinaraaya;
Naabhibhoopa marudevaa nandana, jagata jantu sukhakaara re…
Ho svaamee re… ho jinajee re… ho prabhujee re…!
Tuma darisana sukhakaara, rushabhajina! tuma darisana sukhakaara re!
Tuma darisanathee samakita pragate, nijaguna ruddhi udaara re.||1||
Bhaare karmee pana ten taaryaa, bhavajaladhithee ugaaryaa;
Muja sareekhaa kima navi sanbhaaryaa, chittathee kema visaaryaa re.||2||
Paapee adhama pana tuma supasaaye, paamyaa guna samudaaya;
Ame pana tarashun sharana sveekaaree, mahera karo mahaaraaya re.||3||
Tarana taarana jagamaanhi kahaavo, hun chhun sevaka taaharo;
Avara aagala jaeene kima yaachun, mahimaa adhika tumaaro re.||4||
Muja avaguna saamun mata juo, biruda tamaarun sanbhaalo;
Patita paavana tume naama dharaavo, moha vidanbanaa taalo re.||5||
Poorva navvaanun vaara padhaaree, pavitra karyun shubha dhaama;
Saadhu anantaa karma khapaavee, pahonchyaa avichala thaama re.||6||
Shree nayavijaya vibudha paya sevaka, ‘vaachaka jasha’ kahe saachun;
Vimalaachala bhooshana stavanaathee, aananda rasabhara maachun re.||7||`,
    },
  },
  {
    id: "simandar-jin-vandiye",
    type: "bhajan",
    title: {
      gu: "સીમંધર જિન વંદીએ, સમતારસ ભંડાર રે",
      hi: "सीमंधर जिन वंदीए, समतारस भंडार रे",
      sa: "",
      en: "Simandar Jin Vandiye",
    },
    text: {
      gu: `સીમંધર જિન વંદીએ, સમતારસ ભંડાર રે;
દોષ સઘળા ક્ષય થયા, ઉપન્યા ગુણ સુખકાર રે.॥१॥
સુરઘટ સુરતરુ ઉપમા, પ્રભુને કહો કેમ છાજે રે;
આત્મિક આગળે, ચિંતામણી પણ લાજે રે. ॥२॥
લોકાલોક પ્રકાશતાં, મહિમા અપરંપાર રે;
તારક વારક ચઉગતિ, સત્ય સ્વરુપાધાર રે.॥३॥
શુદ્ધ-બુદ્ધ અવિનાશી તું, અવિચલ નયનાનંદ રે;
પામી સુરતરુ પુણ્યથી, સેવે બાઉલ કુણ મંદ રે.॥४॥
અનુપમ પ્રભુ ગુણ ધ્યાનથી, ભાસ્યું સ્વરુપ શુદ્ધ સાચું રે;
ચરણ કમલ “જિન’ સેવતાં, નિશદિન મનમાં રાચું રે.॥५॥`,
      hi: `सीमंधर जिन वंदीए, समतारस भंडार रे;
दोष सघळा क्षय थया, उपन्या गुण सुखकार रे.॥१॥
सुरघट सुरतरु उपमा, प्रभुने कहो केम छाजे रे;
आत्मिक आगळे, चिंतामणी पण लाजे रे. ॥२॥
लोकालोक प्रकाशतां, महिमा अपरंपार रे;
तारक वारक चउगति, सत्य स्वरुपाधार रे.॥३॥
शुद्ध-बुद्ध अविनाशी तुं, अविचल नयनानंद रे;
पामी सुरतरु पुण्यथी, सेवे बाउल कुण मंद रे.॥४॥
अनुपम प्रभु गुण ध्यानथी, भास्युं स्वरुप शुद्ध साचुं रे;
चरण कमल “जिन’ सेवतां, निशदिन मनमां राचुं रे.॥५॥`,
      sa: "",
      en: `Seemandhara jina vandeee, samataarasa bhandaara re;
Dosha saghalaa kshaya thayaa, upanyaa guna sukhakaara re.||1||
Suraghata surataru upamaa, prabhune kaho kema chhaaje re;
Aatmika aagale, chintaamanee pana laaje re. ||2||
Lokaaloka prakaashataan, mahimaa aparanpaara re;
Taaraka vaaraka chaugati, satya svarupaadhaara re.||3||
Shuddha-buddha avinaashee tun, avichala nayanaananda re;
Paamee surataru punyathee, seve baaula kuna manda re.||4||
Anupama prabhu guna dhyaanathee, bhaasyun svarupa shuddha saachun re;
Charana kamala “jina’ sevataan, nishadina manamaan raachun re.||5||`,
    },
  },
  {
    id: "sodama-shanti-jineshwar-dev-ke",
    type: "bhajan",
    title: {
      gu: "સોળમાં શાંતિ જિનેશ્વર દેવ કે, અચિરાના નંદ રે",
      hi: "सोळमां शांति जिनेश्वर देव के, अचिराना नंद रे",
      sa: "",
      en: "Sodama Shanti Jineshwar Dev Ke",
    },
    text: {
      gu: `સોળમાં શાંતિ જિનેશ્વર દેવ કે, અચિરાના નંદ રે;
જેહની સારે સુરપતિ સેવ કે, અચિરાના નંદ રે…!!
તિરિ નર સુર સમુદાય કે અ૦,
એક યોજન માંહે સમાય કે. અ૦||૧||
તેહને પ્રભુજીની વાણી કે અ0,
પરિણમે સમજે ભવિ પ્રાણી કે અ0;
સહુ જીવના સંશય ભાંજે કે અ0,
પ્રભુ મેઘધ્વનિ એમ ગાજે કે. અ૦||૨||
જેહને જોયણ સવાસો માન કે અ૦,
જે પૂર્વના રોગ તેણે થાન કે અ૦;
સવિ નાશ થાયે નવા નાવે કે અ0,
ષડ્માસ પ્રભુ પરભાવે કે. અ0||૩||
જિહાં જિનજી વિચરે રંગ કે અ૦,
નવિ મૂષક શલભ પતંગ કે અ૦,
નવિ કોઈને વયર વિરોધ કે અ૦,
અનાવૃષ્ટિ અનાવૃષ્ટિ રોધ કે. અ0||૪||
નિજ-પરચક્રનો ભય નાસે કે અ0,
વળી મરકી નાવે પાસે કે અ૦;
વિચરે તિહાં ન દુકાલ કે અ૦,
જાયે ઉપદ્રવ સવિ તત્કાલ કે. અ૦||૫||
જસ મસ્તક પૂંઠે રાજે કે અ0,
ભામંડલ રવિ પરે છાજે કે અ૦;
કર્મક્ષયથી અતિશય અગિયાર કે અ0,
માનું યોગ સામ્રાજ્ય પરિવાર કે. અ૦||૬||
કબ દેખું ભાવ એ ભાવે કે અ0,
હોંશ ઘણી ચિત્ત આવે કે અ0;
શ્રી જિન ઉત્તમ પરભાવે કે અ૦,
કહે “પદ્મવિજય’ બની આવે કે. અ0||૭||`,
      hi: `सोळमां शांति जिनेश्वर देव के, अचिराना नंद रे;
जेहनी सारे सुरपति सेव के, अचिराना नंद रे…!!
तिरि नर सुर समुदाय के अ०,
एक योजन मांहे समाय के. अ०||१||
तेहने प्रभुजीनी वाणी के अ0,
परिणमे समजे भवि प्राणी के अ0;
सहु जीवना संशय भांजे के अ0,
प्रभु मेघध्वनि एम गाजे के. अ०||२||
जेहने जोयण सवासो मान के अ०,
जे पूर्वना रोग तेणे थान के अ०;
सवि नाश थाये नवा नावे के अ0,
षड्मास प्रभु परभावे के. अ0||३||
जिहां जिनजी विचरे रंग के अ०,
नवि मूषक शलभ पतंग के अ०,
नवि कोईने वयर विरोध के अ०,
अनावृष्टि अनावृष्टि रोध के. अ0||४||
निज-परचक्रनो भय नासे के अ0,
वळी मरकी नावे पासे के अ०;
विचरे तिहां न दुकाल के अ०,
जाये उपद्रव सवि तत्काल के. अ०||५||
जस मस्तक पूंठे राजे के अ0,
भामंडल रवि परे छाजे के अ०;
कर्मक्षयथी अतिशय अगियार के अ0,
मानुं योग साम्राज्य परिवार के. अ०||६||
कब देखुं भाव ए भावे के अ0,
होंश घणी चित्त आवे के अ0;
श्री जिन उत्तम परभावे के अ०,
कहे “पद्मविजय’ बनी आवे के. अ0||७||`,
      sa: "",
      en: `Solamaan shaanti jineshvara deva ke, achiraanaa nanda re;
Jehanee saare surapati seva ke, achiraanaa nanda re…!!
Tiri nara sura samudaaya ke a0,
Eka yojana maanhe samaaya ke. a0||1||
Tehane prabhujeenee vaanee ke a0,
Pariname samaje bhavi praanee ke a0;
Sahu jeevanaa sanshaya bhaanje ke a0,
Prabhu meghadhvani ema gaaje ke. a0||2||
Jehane joyana savaaso maana ke a0,
Je poorvanaa roga tene thaana ke a0;
Savi naasha thaaye navaa naave ke a0,
Shadmaasa prabhu parabhaave ke. a0||3||
Jihaan jinajee vichare ranga ke a0,
Navi mooshaka shalabha patanga ke a0,
Navi koeene vayara virodha ke a0,
Anaavrushti anaavrushti rodha ke. a0||4||
Nija-parachakrano bhaya naase ke a0,
Valee marakee naave paase ke a0;
Vichare tihaan na dukaala ke a0,
Jaaye upadrava savi tatkaala ke. a0||5||
Jasa mastaka poonthe raaje ke a0,
Bhaamandala ravi pare chhaaje ke a0;
Karmakshayathee atishaya agiyaara ke a0,
Maanun yoga saamraajya parivaara ke. a0||6||
Kaba dekhun bhaava e bhaave ke a0,
Honsha ghanee chitta aave ke a0;
Shree jina uttama parabhaave ke a0,
Kahe “padmavijaya’ banee aave ke. a0||7||`,
    },
  },
  {
    id: "sparsh-che-taro-pyar",
    type: "bhajan",
    title: {
      gu: "તું પ્રભુ! જો સાથ હો, ડરવાની શું વાત હો",
      hi: "तुं प्रभु! जो साथ हो, डरवानी शुं वात हो",
      sa: "",
      en: "Sparsh Che Taro Pyar",
    },
    text: {
      gu: `તું પ્રભુ! જો સાથ હો, ડરવાની શું વાત હો
સુક્યા સહુ ભવસાગરો, તરવાની શું વાત હો
તારી આજ્ઞા પાલનમાં,
ગુરુચરણોના આંચલમાં મુજને
સ્પર્શે છે તારો પ્યાર (ર),
ઝંખુ છું તારો સથવાર.॥૧॥
તું સાંપ છે તો, કાંચળી પ્રભુ હું,
તું આભ છે, હું વાદળી પ્રભુ;
મારા હૃદયના ધબકારાઓનો,
તું માત્ર એક કારણ પ્રભુ(ર).તારી૦॥ર॥
પલ-પલમાં તો, તું જ વસે છે,
હૃદયકમળમાં, તું શ્વસે છે;
આંખોથી વહેતા, આંસુઓની ભીતર,
સ્મિત થઈને તું હસે છે (ર). તારી૦॥૨॥`,
      hi: `तुं प्रभु! जो साथ हो, डरवानी शुं वात हो
सुक्या सहु भवसागरो, तरवानी शुं वात हो
तारी आज्ञा पालनमां,
गुरुचरणोना आंचलमां मुजने
स्पर्शे छे तारो प्यार (र),
झंखु छुं तारो सथवार.॥१॥
तुं सांप छे तो, कांचळी प्रभु हुं,
तुं आभ छे, हुं वादळी प्रभु;
मारा हृदयना धबकाराओनो,
तुं मात्र एक कारण प्रभु(र).तारी०॥र॥
पल-पलमां तो, तुं ज वसे छे,
हृदयकमळमां, तुं श्वसे छे;
आंखोथी वहेता, आंसुओनी भीतर,
स्मित थईने तुं हसे छे (र). तारी०॥२॥`,
      sa: "",
      en: `Tun prabhu! jo saatha ho, daravaanee shun vaata ho
Sukyaa sahu bhavasaagaro, taravaanee shun vaata ho
Taaree aajnyaa paalanamaan,
Gurucharanonaa aanchalamaan mujane
Sparshe chhe taaro pyaara (ra),
Jhankhu chhun taaro sathavaara.||1||
Tun saanpa chhe to, kaanchalee prabhu hun,
Tun aabha chhe, hun vaadalee prabhu;
Maaraa hrudayanaa dhabakaaraaono,
Tun maatra eka kaarana prabhu(ra).taaree0||ra||
Pala-palamaan to, tun ja vase chhe,
Hrudayakamalamaan, tun shvase chhe;
Aankhothee vahetaa, aansuonee bheetara,
Smita thaeene tun hase chhe (ra). taaree0||2||`,
    },
  },
  {
    id: "sugun-sugun",
    type: "bhajan",
    title: {
      gu: "સુગુણ (૨) સોભાગી સાચો સાહિબો હોજી, મીઠડો આદિ જિણંદ",
      hi: "सुगुण (२) सोभागी साचो साहिबो होजी, मीठडो आदि जिणंद",
      sa: "",
      en: "Sugun Sugun",
    },
    text: {
      gu: `સુગુણ (૨) સોભાગી સાચો સાહિબો હોજી, મીઠડો આદિ જિણંદ;
મોહન (૨) સૂરતી રુડી દેખતાં હોજી, વાધે પરમ આણંદ. સુ૦।।૧ ।|
સુંદર (૨) જિન ચિતડે ચડ્યો હોજી, ચોક્કસ પદહ ઠરાય;
વેધક (૨) તન મનનો થયો હોજી, ઊતાર્યો કિમ જાય. सु०॥२॥
તુજ (૨) કહેવા મુજ જીભડી હોજી, રાતી રંગે રહંત;
(૨) ગતની જે વાતડી હોજી, તે મુખે આવી ચડંત. સુત્રઝ॥૩॥
કામણ (૨) ગારો પ્યારો પ્રાણથી હોજી, ભેટણ ઉજમ અંગ;
(૨) થી અતિ શીતલો હોજી, જગમાં ઉત્તમ સંગ. સુ૦િ॥૪॥
ત્રિકરણ (૨) શું તુજથી કર્યો હોજી, નવલો પ્રેમ પ્રકાશ;
દિલભરી (૨)“કાંતિવિજય’ તણા હોજી, પૂરોપ્રેમ પ્રકાશ. સુ૦।।૫।।`,
      hi: `सुगुण (२) सोभागी साचो साहिबो होजी, मीठडो आदि जिणंद;
मोहन (२) सूरती रुडी देखतां होजी, वाधे परम आणंद. सु०।।१ ।|
सुंदर (२) जिन चितडे चड्यो होजी, चोक्कस पदह ठराय;
वेधक (२) तन मननो थयो होजी, ऊतार्यो किम जाय. सु०॥२॥
तुज (२) कहेवा मुज जीभडी होजी, राती रंगे रहंत;
(२) गतनी जे वातडी होजी, ते मुखे आवी चडंत. सुत्रझ॥३॥
कामण (२) गारो प्यारो प्राणथी होजी, भेटण उजम अंग;
(२) थी अति शीतलो होजी, जगमां उत्तम संग. सु०ि॥४॥
त्रिकरण (२) शुं तुजथी कर्यो होजी, नवलो प्रेम प्रकाश;
दिलभरी (२)“कांतिविजय’ तणा होजी, पूरोप्रेम प्रकाश. सु०।।५।।`,
      sa: "",
      en: `Suguna (2) sobhaagee saacho saahibo hojee, meethado aadi jinanda;
Mohana (2) sooratee rudee dekhataan hojee, vaadhe parama aananda. su0||1 ||
Sundara (2) jina chitade chadyo hojee, chokkasa padaha tharaaya;
Vedhaka (2) tana manano thayo hojee, ootaaryo kima jaaya. सु0||2||
Tuja (2) kahevaa muja jeebhadee hojee, raatee range rahanta;
(2) gatanee je vaatadee hojee, te mukhe aavee chadanta. sutrajha||3||
Kaamana (2) gaaro pyaaro praanathee hojee, bhetana ujama anga;
(2) thee ati sheetalo hojee, jagamaan uttama sanga. su0િ||4||
Trikarana (2) shun tujathee karyo hojee, navalo prema prakaasha;
Dilabharee (2)“kaantivijaya’ tanaa hojee, pooroprema prakaasha. su0||5||`,
    },
  },
  {
    id: "sukhdai-re-sukhdai",
    type: "bhajan",
    title: {
      gu: "સુખદાઈ રે સુખદાઈ, દાદો પાસજી! સુખદાઈ…",
      hi: "सुखदाई रे सुखदाई, दादो पासजी! सुखदाई…",
      sa: "",
      en: "Sukhdai Re Sukhdai",
    },
    text: {
      gu: `સુખદાઈ રે સુખદાઈ, દાદો પાસજી! સુખદાઈ…
ઐસો સાહિબ નહિ કોઉ જગમેં, સેવા કીજે દિલ લાઈ. હો૦ ।।૧ ।|
સબ સુખદાયક એહિ જ નાયક, એહિ સહાયક સુસહાઈ;
કિંકર કું કરે શંકર સરીખો, આપે અપની ઠકુરાઈ.||૨||
મંગલ રંગ વધે પ્રભુ ધ્યાને, પાપ વેલી જાએ કરમાઈ;
શીતલતા પ્રગટે ઘટ અંતર, મીટે મોહ કી ગરમાઈ.||૩||
કહાં કરું સુરતરુ ચિંતામણિ કું, જે મેં પ્રભુ સેવા પાઈ;
“જસવિજય’ કહેદર્શનદેખ્યો, ઘર આંગણ નવનિધિઆઈ. હો૦ ।।૪।।`,
      hi: `सुखदाई रे सुखदाई, दादो पासजी! सुखदाई…
ऐसो साहिब नहि कोउ जगमें, सेवा कीजे दिल लाई. हो० ।।१ ।|
सब सुखदायक एहि ज नायक, एहि सहायक सुसहाई;
किंकर कुं करे शंकर सरीखो, आपे अपनी ठकुराई.||२||
मंगल रंग वधे प्रभु ध्याने, पाप वेली जाए करमाई;
शीतलता प्रगटे घट अंतर, मीटे मोह की गरमाई.||३||
कहां करुं सुरतरु चिंतामणि कुं, जे में प्रभु सेवा पाई;
“जसविजय’ कहेदर्शनदेख्यो, घर आंगण नवनिधिआई. हो० ।।४।।`,
      sa: "",
      en: `Sukhadaaee re sukhadaaee, daado paasajee! sukhadaaee…
Aiso saahiba nahi kou jagamen, sevaa keeje dila laaee. ho0 ||1 ||
Saba sukhadaayaka ehi ja naayaka, ehi sahaayaka susahaaee;
Kinkara kun kare shankara sareekho, aape apanee thakuraaee.||2||
Mangala ranga vadhe prabhu dhyaane, paapa velee jaae karamaaee;
Sheetalataa pragate ghata antara, meete moha kee garamaaee.||3||
Kahaan karun surataru chintaamani kun, je men prabhu sevaa paaee;
“jasavijaya’ kahedarshanadekhyo, ghara aangana navanidhiaaee. ho0 ||4||`,
    },
  },
  {
    id: "sumti-charankaj",
    type: "bhajan",
    title: {
      gu: "સુમતિ ચરણકજ આતમ અરપણા,‌‌ દરપણ જિમ અવિકાર; સુજ્ઞાની",
      hi: "सुमति चरणकज आतम अरपणा,‌‌ दरपण जिम अविकार; सुज्ञानी",
      sa: "",
      en: "Sumti Charankaj",
    },
    text: {
      gu: `સુમતિ ચરણકજ આતમ અરપણા,‌‌ દરપણ જિમ અવિકાર; સુજ્ઞાની
મતિ તરપણ બહુ સમ્મત જાણીએ,‌‌
પરિસર પણ સુવિચાર. સુ૦ ।।૧ ।।
ત્રિવિધ સકલ તનુધર ગત આતમા, બહિરાતમ ધુરિભેદ; સુ૦
બીજો અંતર આતમ તીસરો, પરમાતમ અવિચ્છેદ. સુ૦ ॥२॥
આતમ બુદ્ધે હો કાયાદિક ગ્રહ્યો, બહિરાતમ અઘરુપ; સુ૦
કાયાદિકનો હો સાખીધર કહ્યો, અંતર આતમ રુપ. સુ૦||૩||
જ્ઞાનાનંદે હો પૂરણ પાવનો, વર્જિત સકલ ઉપાધિ; સુ૦
અતીન્દ્રિય ગુણગણ મણિ આગરુ, ઈમ પરમાતમ સાધ. સુ૦ ॥૪॥
બહિરાતમ તજી આતમા, રુપ થઈ થિરભાવ; સુ૦
પરમાતમનું હો આતમ ભાવવું, આતમ અર્પણ દાવ. સુ૦ ॥५॥
આતમ અર્પણ વસ્તુ વિચારતાં, ભરમ ટલે મતિદોષ; સુ૦
પરમ પદારથ સંપત્તિ સંપજે, “આનંદઘન’ રસપોષ. સુત્ર ॥६॥`,
      hi: `सुमति चरणकज आतम अरपणा,‌‌ दरपण जिम अविकार; सुज्ञानी
मति तरपण बहु सम्मत जाणीए,‌‌
परिसर पण सुविचार. सु० ।।१ ।।
त्रिविध सकल तनुधर गत आतमा, बहिरातम धुरिभेद; सु०
बीजो अंतर आतम तीसरो, परमातम अविच्छेद. सु० ॥२॥
आतम बुद्धे हो कायादिक ग्रह्यो, बहिरातम अघरुप; सु०
कायादिकनो हो साखीधर कह्यो, अंतर आतम रुप. सु०||३||
ज्ञानानंदे हो पूरण पावनो, वर्जित सकल उपाधि; सु०
अतीन्द्रिय गुणगण मणि आगरु, ईम परमातम साध. सु० ॥४॥
बहिरातम तजी आतमा, रुप थई थिरभाव; सु०
परमातमनुं हो आतम भाववुं, आतम अर्पण दाव. सु० ॥५॥
आतम अर्पण वस्तु विचारतां, भरम टले मतिदोष; सु०
परम पदारथ संपत्ति संपजे, “आनंदघन’ रसपोष. सुत्र ॥६॥`,
      sa: "",
      en: `Sumati charanakaja aatama arapanaa,‌‌ darapana jima avikaara; sujnyaanee
Mati tarapana bahu sammata jaaneee,‌‌
Parisara pana suvichaara. su0 ||1 ||
Trividha sakala tanudhara gata aatamaa, bahiraatama dhuribheda; su0
Beejo antara aatama teesaro, paramaatama avichchheda. su0 ||2||
Aatama buddhe ho kaayaadika grahyo, bahiraatama agharupa; su0
Kaayaadikano ho saakheedhara kahyo, antara aatama rupa. su0||3||
Jnyaanaanande ho poorana paavano, varjita sakala upaadhi; su0
Ateendriya gunagana mani aagaru, eema paramaatama saadha. su0 ||4||
Bahiraatama tajee aatamaa, rupa thaee thirabhaava; su0
Paramaatamanun ho aatama bhaavavun, aatama arpana daava. su0 ||5||
Aatama arpana vastu vichaarataan, bharama tale matidosha; su0
Parama padaaratha sanpatti sanpaje, “aanandaghana’ rasaposha. sutra ||6||`,
    },
  },
  {
    id: "sumtinath-gunasu-miliji",
    type: "bhajan",
    title: {
      gu: "સુમતિનાથ ગુણશું મિલીજી, વાધે મુજ મન પ્રીતિ",
      hi: "सुमतिनाथ गुणशुं मिलीजी, वाधे मुज मन प्रीति",
      sa: "",
      en: "Sumtinath Gunasu Miliji",
    },
    text: {
      gu: `સુમતિનાથ ગુણશું મિલીજી, વાધે મુજ મન પ્રીતિ;
તેલ બિંદુ જિમ વિસ્તરેજી, જળમાંહે ભલી રીતિ,
સૌભાગી જિનશું લાગ્યો અવિહડ રંગ… વૈરાગી જિનશું… ।।૧ ।।
સજ્જન્શું જે પ્રીતડીજી, છાની તે ન રખાય;
પરિમલ કસ્તુરી તણોજી, મહી માંહે મહકાય.||૨||
આંગળીએ નવિ મેરુ ઢંકાએ, છાબડીએ રવિ તેજ;
અંજલિમાં જિમ ગંગ ન માએ, મુજ મન તિમ પ્રભુ હેજ.||૩||
હુઓ છીપે નહિ અધર અરુણ જિમ, ખાતા પાન સુરંગ;
પીવત ભરભર પ્રભુ ગુણ પ્યાલા, તિમ મુજ પ્રેમ અભંગ.||૪||
ઢાંકી ઈક્ષુ પરાળશુંજી, ન રહે લહી વિસ્તાર;
‘વાચક યશ’ કહે પ્રભુ તણોજી, તિમ મુજ પ્રેમ પ્રકાર.||૫||`,
      hi: `सुमतिनाथ गुणशुं मिलीजी, वाधे मुज मन प्रीति;
तेल बिंदु जिम विस्तरेजी, जळमांहे भली रीति,
सौभागी जिनशुं लाग्यो अविहड रंग… वैरागी जिनशुं… ।।१ ।।
सज्जन्शुं जे प्रीतडीजी, छानी ते न रखाय;
परिमल कस्तुरी तणोजी, मही मांहे महकाय.||२||
आंगळीए नवि मेरु ढंकाए, छाबडीए रवि तेज;
अंजलिमां जिम गंग न माए, मुज मन तिम प्रभु हेज.||३||
हुओ छीपे नहि अधर अरुण जिम, खाता पान सुरंग;
पीवत भरभर प्रभु गुण प्याला, तिम मुज प्रेम अभंग.||४||
ढांकी ईक्षु पराळशुंजी, न रहे लही विस्तार;
‘वाचक यश’ कहे प्रभु तणोजी, तिम मुज प्रेम प्रकार.||५||`,
      sa: "",
      en: `Sumatinaatha gunashun mileejee, vaadhe muja mana preeti;
Tela bindu jima vistarejee, jalamaanhe bhalee reeti,
Saubhaagee jinashun laagyo avihada ranga… vairaagee jinashun… ||1 ||
Sajjanshun je preetadeejee, chhaanee te na rakhaaya;
Parimala kasturee tanojee, mahee maanhe mahakaaya.||2||
Aangaleee navi meru dhankaae, chhaabadeee ravi teja;
Anjalimaan jima ganga na maae, muja mana tima prabhu heja.||3||
Huo chheepe nahi adhara aruna jima, khaataa paana suranga;
Peevata bharabhara prabhu guna pyaalaa, tima muja prema abhanga.||4||
Dhaankee eekshu paraalashunjee, na rahe lahee vistaara;
‘vaachaka yasha’ kahe prabhu tanojee, tima muja prema prakaara.||5||`,
    },
  },
  {
    id: "sun-sugun-saheni",
    type: "bhajan",
    title: {
      gu: "સુણ સુગુણ સનેહી સાહિબા!, ત્રિશલાનંદન મહાવીર! રે",
      hi: "सुण सुगुण सनेही साहिबा!, त्रिशलानंदन महावीर! रे",
      sa: "",
      en: "Sun Sugun Saheni",
    },
    text: {
      gu: `સુણ સુગુણ સનેહી સાહિબા!, ત્રિશલાનંદન મહાવીર! રે;
શાસનનાયક! જગધણી!, શિવદાયક! ગુણ ગંભીર રે.||૧||
તુમ સરીખા મુજ શિર છતે, હવે મોહ તણું નહીં જોર રે;
રવિ ઉદયે કહો કિમ રહે, અંધકાર અતિ ઘનઘોર રે.||૨||
વેષ રચી બહુ નવ નવા, હું નાચ્યો વિષમ સંસાર રે;
હવે ચરણ શરણ તુજ આવિયો, મુજ ભવની ભાવઠ વાર રે.||૩||
હું નિર્ગુણો તો પણ તાહરો, સેવક છું કરુણાનિધાન રે;
મુજ મનમંદિર આવી વસો, જિમ નાસે કર્મ નિદાન રે.||૪||
મનમાં છો કિશ્યું, મુજ મહેર કરો જિનરાજ રે;
સેવકના કષ્ટ નવિ ટળે, એ સાહિબને શિર લાજ રે.||૫||
તું અક્ષયસુખ અનુભવે, તસ અંશ દીજે મુજ એક રે;
તો ભાંજે દુઃખ ભવોભવ તણાં, વળી પામું પરમ વિવેક રે.||૬||
કહું મુજ મન વાતડી, તુમે સર્વ વિચારના જાણ રે;
“વાચક જશ’ એમ વીનવે, પ્રભુ! દેજો ક્રોડ કલ્યાણ રે.||૭||`,
      hi: `सुण सुगुण सनेही साहिबा!, त्रिशलानंदन महावीर! रे;
शासननायक! जगधणी!, शिवदायक! गुण गंभीर रे.||१||
तुम सरीखा मुज शिर छते, हवे मोह तणुं नहीं जोर रे;
रवि उदये कहो किम रहे, अंधकार अति घनघोर रे.||२||
वेष रची बहु नव नवा, हुं नाच्यो विषम संसार रे;
हवे चरण शरण तुज आवियो, मुज भवनी भावठ वार रे.||३||
हुं निर्गुणो तो पण ताहरो, सेवक छुं करुणानिधान रे;
मुज मनमंदिर आवी वसो, जिम नासे कर्म निदान रे.||४||
मनमां छो किश्युं, मुज महेर करो जिनराज रे;
सेवकना कष्ट नवि टळे, ए साहिबने शिर लाज रे.||५||
तुं अक्षयसुख अनुभवे, तस अंश दीजे मुज एक रे;
तो भांजे दुःख भवोभव तणां, वळी पामुं परम विवेक रे.||६||
कहुं मुज मन वातडी, तुमे सर्व विचारना जाण रे;
“वाचक जश’ एम वीनवे, प्रभु! देजो क्रोड कल्याण रे.||७||`,
      sa: "",
      en: `Suna suguna sanehee saahibaa!, trishalaanandana mahaaveera! re;
Shaasananaayaka! jagadhanee!, shivadaayaka! guna ganbheera re.||1||
Tuma sareekhaa muja shira chhate, have moha tanun naheen jora re;
Ravi udaye kaho kima rahe, andhakaara ati ghanaghora re.||2||
Vesha rachee bahu nava navaa, hun naachyo vishama sansaara re;
Have charana sharana tuja aaviyo, muja bhavanee bhaavatha vaara re.||3||
Hun nirguno to pana taaharo, sevaka chhun karunaanidhaana re;
Muja manamandira aavee vaso, jima naase karma nidaana re.||4||
Manamaan chho kishyun, muja mahera karo jinaraaja re;
Sevakanaa kashta navi tale, e saahibane shira laaja re.||5||
Tun akshayasukha anubhave, tasa ansha deeje muja eka re;
To bhaanje dukha bhavobhava tanaan, valee paamun parama viveka re.||6||
Kahun muja mana vaatadee, tume sarva vichaaranaa jaana re;
“vaachaka jasha’ ema veenave, prabhu! dejo kroda kalyaana re.||7||`,
    },
  },
  {
    id: "suno-chanda-ji",
    type: "bhajan",
    title: {
      gu: "સુણો ચંદાજી! સીમંધર પરમાતમ પાસે જાજે",
      hi: "सुणो चंदाजी! सीमंधर परमातम पासे जाजे",
      sa: "",
      en: "Suno Chanda Ji",
    },
    text: {
      gu: `સુણો ચંદાજી! સીમંધર પરમાતમ પાસે જાજે,
મુજ વિનતડી, પ્રેમ ધરીને, એણી પેરે તુમે સંભળાવજો;
જે ત્રણ ભુવનનો નાયક છે, જસ ચોસઠ ઈન્દ્ર પાયક છે,
જ્ઞાન દરિશણ જેહને ક્ષાયક છે.||૧||
જેની કંચનવરણી કાયા છે, જસ ધોરી લંછન પાયા છે;
પુંડરીગિણી નગરીનો રાયા છે.||૨||
બાર પર્ષદા માંહી બિરાજે છે, જસ ચોત્રીસ અતિશય છાજે છે;
ગુણ પાંત્રીસ વાણીએ ગાજે છે.||૩||
સુણો૦।।૩।। ભવિજનને જે પડિબોહે છે,
તુમ અધિક શીતલ ગુણ સોહે છે; દેખી ભવિજન મોહે છે.||૪||
તુમ સેવા કરવા રસિયો છું, પણ ભરતમાં દૂરે વસિયો છું;
મહા મોહરાય કર ફસિયો છું. સુણો૦||૫ ।।
પણ સાહિબ ચિત્તમાં ધરિયો છે, તુમ આણા ખડગ કર ગ્રહિયો છે;
તો કાંઈક મુજથી ડરિયો છે.||૬||
ઉત્તમ પૂંઠ હવે પૂરો, કહે“પદ્મવિજય’ થાઉં શૂરો;
તો વાધે મુજ મન અતિ નૂરો.||૭||`,
      hi: `सुणो चंदाजी! सीमंधर परमातम पासे जाजे,
मुज विनतडी, प्रेम धरीने, एणी पेरे तुमे संभळावजो;
जे त्रण भुवननो नायक छे, जस चोसठ ईन्द्र पायक छे,
ज्ञान दरिशण जेहने क्षायक छे.||१||
जेनी कंचनवरणी काया छे, जस धोरी लंछन पाया छे;
पुंडरीगिणी नगरीनो राया छे.||२||
बार पर्षदा मांही बिराजे छे, जस चोत्रीस अतिशय छाजे छे;
गुण पांत्रीस वाणीए गाजे छे.||३||
सुणो०।।३।। भविजनने जे पडिबोहे छे,
तुम अधिक शीतल गुण सोहे छे; देखी भविजन मोहे छे.||४||
तुम सेवा करवा रसियो छुं, पण भरतमां दूरे वसियो छुं;
महा मोहराय कर फसियो छुं. सुणो०||५ ।।
पण साहिब चित्तमां धरियो छे, तुम आणा खडग कर ग्रहियो छे;
तो कांईक मुजथी डरियो छे.||६||
उत्तम पूंठ हवे पूरो, कहे“पद्मविजय’ थाउं शूरो;
तो वाधे मुज मन अति नूरो.||७||`,
      sa: "",
      en: `Suno chandaajee! seemandhara paramaatama paase jaaje,
Muja vinatadee, prema dhareene, enee pere tume sanbhalaavajo;
Je trana bhuvanano naayaka chhe, jasa chosatha eendra paayaka chhe,
Jnyaana darishana jehane kshaayaka chhe.||1||
Jenee kanchanavaranee kaayaa chhe, jasa dhoree lanchhana paayaa chhe;
Pundareeginee nagareeno raayaa chhe.||2||
Baara parshadaa maanhee biraaje chhe, jasa chotreesa atishaya chhaaje chhe;
Guna paantreesa vaaneee gaaje chhe.||3||
Suno0||3|| bhavijanane je padibohe chhe,
Tuma adhika sheetala guna sohe chhe; dekhee bhavijana mohe chhe.||4||
Tuma sevaa karavaa rasiyo chhun, pana bharatamaan doore vasiyo chhun;
Mahaa moharaaya kara phasiyo chhun. suno0||5 ||
Pana saahiba chittamaan dhariyo chhe, tuma aanaa khadaga kara grahiyo chhe;
To kaaneeka mujathee dariyo chhe.||6||
Uttama poontha have pooro, kahe“padmavijaya’ thaaun shooro;
To vaadhe muja mana ati nooro.||7||`,
    },
  },
  {
    id: "suno-parshwa-jineshwar-swami",
    type: "bhajan",
    title: {
      gu: "પાર્શ્વ જિનેશ્વર સ્વામી, અલવેસર અંતરયામી",
      hi: "पार्श्व जिनेश्वर स्वामी, अलवेसर अंतरयामी",
      sa: "",
      en: "Suno Parshwa Jineshwar Swami",
    },
    text: {
      gu: `પાર્શ્વ જિનેશ્વર સ્વામી, અલવેસર અંતરયામી;
હું તો અરજ કરું શિરનામી, પ્રભુ સાથે અવસર પામી;
હો સ્વામી મુજને તારો, હો પ્રભુજી મુજને તારો. હો સ્વામી૦ ।। ૧ ।|
। મુજને ભવસાગરથી તારો, ચિહું ગતિના ફેરા વારો;
કરુણા કરી પાર ઉતારો, એ વિનંતી મનમાં ધારો.હો સ્વામી.||૨||
સંસારે સાર ન કાંઈ, સાચો એક તું હી સખાઈ;
તે માટે કરી થિરતાઈ, મેં તુજ ચરણે લય લાઈ. હો સ્વામી૦।।૩।।
તારક તું જગત પ્રસિદ્ધો, પહેલા પણ તેં જસ લીધો;
તુજ સેવકને શિવસુખ દીધો,
એક અંતર મુજ શું કીધો? હો સ્વામી૦।।૪।।
ઈમ અંતર તે ન કરેવો, સેવકને શિવસુખ દેવો;
અવગુણ પણ ગુણ કરી લેવો,
હેત આણી બાંહ્ય ગ્રહેવો. હોસ્વામી.।।૫।।
સેવક ચૂકે કોઈ ટાણે, પણ સાહિબ મનમાં ન આણે;
નિજ અંગીકૃત પરમાણે, પોતાનો કરી જાણે. હો સ્વામી.।।૬।।
તું ત્રિભુવનનાથ કહેવાય, ઈમ જાણીને જિનરાય;
ઘો ચરણ સેવા સુપસાય,
જિમ ‘હંસરતન’ સુખ થાય. હો સ્વામી૦ ।।૭।।`,
      hi: `पार्श्व जिनेश्वर स्वामी, अलवेसर अंतरयामी;
हुं तो अरज करुं शिरनामी, प्रभु साथे अवसर पामी;
हो स्वामी मुजने तारो, हो प्रभुजी मुजने तारो. हो स्वामी० ।। १ ।|
। मुजने भवसागरथी तारो, चिहुं गतिना फेरा वारो;
करुणा करी पार उतारो, ए विनंती मनमां धारो.हो स्वामी.||२||
संसारे सार न कांई, साचो एक तुं ही सखाई;
ते माटे करी थिरताई, में तुज चरणे लय लाई. हो स्वामी०।।३।।
तारक तुं जगत प्रसिद्धो, पहेला पण तें जस लीधो;
तुज सेवकने शिवसुख दीधो,
एक अंतर मुज शुं कीधो? हो स्वामी०।।४।।
ईम अंतर ते न करेवो, सेवकने शिवसुख देवो;
अवगुण पण गुण करी लेवो,
हेत आणी बांह्य ग्रहेवो. होस्वामी.।।५।।
सेवक चूके कोई टाणे, पण साहिब मनमां न आणे;
निज अंगीकृत परमाणे, पोतानो करी जाणे. हो स्वामी.।।६।।
तुं त्रिभुवननाथ कहेवाय, ईम जाणीने जिनराय;
घो चरण सेवा सुपसाय,
जिम ‘हंसरतन’ सुख थाय. हो स्वामी० ।।७।।`,
      sa: "",
      en: `Paarshva jineshvara svaamee, alavesara antarayaamee;
Hun to araja karun shiranaamee, prabhu saathe avasara paamee;
Ho svaamee mujane taaro, ho prabhujee mujane taaro. ho svaamee0 || 1 ||
| mujane bhavasaagarathee taaro, chihun gatinaa pheraa vaaro;
Karunaa karee paara utaaro, e vinantee manamaan dhaaro.ho svaamee.||2||
Sansaare saara na kaanee, saacho eka tun hee sakhaaee;
Te maate karee thirataaee, men tuja charane laya laaee. ho svaamee0||3||
Taaraka tun jagata prasiddho, pahelaa pana ten jasa leedho;
Tuja sevakane shivasukha deedho,
Eka antara muja shun keedho? ho svaamee0||4||
Eema antara te na karevo, sevakane shivasukha devo;
Avaguna pana guna karee levo,
Heta aanee baanhya grahevo. hosvaamee.||5||
Sevaka chooke koee taane, pana saahiba manamaan na aane;
Nija angeekruta paramaane, potaano karee jaane. ho svaamee.||6||
Tun tribhuvananaatha kahevaaya, eema jaaneene jinaraaya;
Gho charana sevaa supasaaya,
Jima ‘hansaratana’ sukha thaaya. ho svaamee0 ||7||`,
    },
  },
  {
    id: "suno-shanti-jineshwar-sahiba",
    type: "bhajan",
    title: {
      gu: "શાંતિ જિનેશ્વર સાહિબા, સુખકાર કરુણાસિંધુ રે",
      hi: "शांति जिनेश्वर साहिबा, सुखकार करुणासिंधु रे",
      sa: "",
      en: "Suno Shanti Jineshwar Sahiba",
    },
    text: {
      gu: `શાંતિ જિનેશ્વર સાહિબા, સુખકાર કરુણાસિંધુ રે;
પ્રભુ તુમ સમ કો દાતા નહિ, નિષ્કારણ ત્રિભુવન બંધુ રે.||૧||
જસ નામે અક્ષય સંપદ હોવે, વળી આધિ તણી હોયે શાંતિ;
દુઃખ દુરિત ઉપદ્રવ સવિ મીટે, ભાંજે મિથ્યામતિ ભ્રાંતિ રે.||૨||
તું રાગ રહિત પણ રીઝવે, સવિ સજ્જન કેરા ચિત્ત રે;
નિર્દ્રવ્ય અને પરમેશ્વર, વિણ નેહે તું જગમિત રે.||૩||
તું ચક્રી ભવચક્રનો રે, સંબંધ ન કોઈ કીધ રે;
તું તો ભોગી યોગી દાખીયો, સહેજે સમતારસ સિદ્ધ રે.||૪||
વિણ તેડ્યો નિત્ય સહાય છે, તુજ લોકોત્તર આચાર રે;
કહે ‘જ્ઞાનવિમલ’ ગુણ તાહરા, લહિયે ગણવે કિમ પાર રે.||૫||`,
      hi: `शांति जिनेश्वर साहिबा, सुखकार करुणासिंधु रे;
प्रभु तुम सम को दाता नहि, निष्कारण त्रिभुवन बंधु रे.||१||
जस नामे अक्षय संपद होवे, वळी आधि तणी होये शांति;
दुःख दुरित उपद्रव सवि मीटे, भांजे मिथ्यामति भ्रांति रे.||२||
तुं राग रहित पण रीझवे, सवि सज्जन केरा चित्त रे;
निर्द्रव्य अने परमेश्वर, विण नेहे तुं जगमित रे.||३||
तुं चक्री भवचक्रनो रे, संबंध न कोई कीध रे;
तुं तो भोगी योगी दाखीयो, सहेजे समतारस सिद्ध रे.||४||
विण तेड्यो नित्य सहाय छे, तुज लोकोत्तर आचार रे;
कहे ‘ज्ञानविमल’ गुण ताहरा, लहिये गणवे किम पार रे.||५||`,
      sa: "",
      en: `Shaanti jineshvara saahibaa, sukhakaara karunaasindhu re;
Prabhu tuma sama ko daataa nahi, nishkaarana tribhuvana bandhu re.||1||
Jasa naame akshaya sanpada hove, valee aadhi tanee hoye shaanti;
Dukha durita upadrava savi meete, bhaanje mithyaamati bhraanti re.||2||
Tun raaga rahita pana reejhave, savi sajjana keraa chitta re;
Nirdravya ane parameshvara, vina nehe tun jagamita re.||3||
Tun chakree bhavachakrano re, sanbandha na koee keedha re;
Tun to bhogee yogee daakheeyo, saheje samataarasa siddha re.||4||
Vina tedyo nitya sahaaya chhe, tuja lokottara aachaara re;
Kahe ‘jnyaanavimala’ guna taaharaa, lahiye ganave kima paara re.||5||`,
    },
  },
  {
    id: "suno-shanti-jineshwar-sobhagi",
    type: "bhajan",
    title: {
      gu: "સુણો શાંતિ જિણંદ! સોભાગી, હું તો થયો છું તુમ ગુણરાગી",
      hi: "सुणो शांति जिणंद! सोभागी, हुं तो थयो छुं तुम गुणरागी",
      sa: "",
      en: "Suno Shanti Jineshwar Sobhagi",
    },
    text: {
      gu: `સુણો શાંતિ જિણંદ! સોભાગી, હું તો થયો છું તુમ ગુણરાગી;
તુમે નિરાગી ભગવંત, જોતાં કિમ મળશે તંત. સુણો૦ ।। ૧ ।।
હું તો ક્રોધ કષાયનો ભરિયો, તું તો ઉપશમ રસનો દરિયો;
હું તો અજ્ઞાને આવરિયો, તું તો કેવળ-કમલા વરિયો. સુણો૦ ।। ૨ ।।
હું તો વિષયા રસનો આશી, તેં તો વિષયા કીધી નિરાશી;
હું તો કર્મના ભારે ભરીયો, તેં તો પ્રભુજી ભાર ઉતાર્યો. સુણો૦|॥૩॥
હું તો મોહ તણે વશ પડિયો, તેં તો સબળા મોહને હણિયો;
હુંતો ભવસમુદ્રમાં ખૂંચ્યો, તુંતો શિવમંદિરમાં પહોંચ્યો. સુણો૦॥૪॥
મારે જન્મમરણનો જોરો, તેં તો તોડયો તેહનો દોરો;
મારો પાસો ન મેલે રાગ, તમે પ્રભુજી થયા વીતરાગ. સુણો૦ ।।૫ ।।
મને માયા એ મૂક્યો પાશી, તું તો નિર્બંધન અવિનાશી;
હું તો સમકિતથી અધૂરો, તું તો સકલ પદારથે પૂરો. સુણો૦।।૬।।
મારે તો છે પ્રભુ તું હી એક, તારે મુજ સરીખા અનેક;
હું તો મનથી ન મુકું માન, તું તો માનરહિત ભગવાન. સુણો૦।।૭।।
મારું કીધું કશું નવિ થાય, તું તો રંકને કરે છે રાય;
એક કરે મુજ મહેરબાની, મારો મુજરો લેજો માની. સુણો૦।।૮।।
એક વાર જો નજરે નીરખો, તો કરો મુજને તુમ સરીખો;
જો સેવક તુમ સરીખો થાશે, તો ગુણ તમારા ગાશે. સુણો૦।।૯।।
સુણો૦ ॥૯॥ ભવોભવ તુમ ચરણોની સેવા, હું તો માંગુ છું દેવાધિદેવા;
સામું જુઓને સેવક જાણી,
એવી ઉદયરત્ન’ની વાણી. સુણો૦ ।|૧૦।।`,
      hi: `सुणो शांति जिणंद! सोभागी, हुं तो थयो छुं तुम गुणरागी;
तुमे निरागी भगवंत, जोतां किम मळशे तंत. सुणो० ।। १ ।।
हुं तो क्रोध कषायनो भरियो, तुं तो उपशम रसनो दरियो;
हुं तो अज्ञाने आवरियो, तुं तो केवळ-कमला वरियो. सुणो० ।। २ ।।
हुं तो विषया रसनो आशी, तें तो विषया कीधी निराशी;
हुं तो कर्मना भारे भरीयो, तें तो प्रभुजी भार उतार्यो. सुणो०|॥३॥
हुं तो मोह तणे वश पडियो, तें तो सबळा मोहने हणियो;
हुंतो भवसमुद्रमां खूंच्यो, तुंतो शिवमंदिरमां पहोंच्यो. सुणो०॥४॥
मारे जन्ममरणनो जोरो, तें तो तोडयो तेहनो दोरो;
मारो पासो न मेले राग, तमे प्रभुजी थया वीतराग. सुणो० ।।५ ।।
मने माया ए मूक्यो पाशी, तुं तो निर्बंधन अविनाशी;
हुं तो समकितथी अधूरो, तुं तो सकल पदारथे पूरो. सुणो०।।६।।
मारे तो छे प्रभु तुं ही एक, तारे मुज सरीखा अनेक;
हुं तो मनथी न मुकुं मान, तुं तो मानरहित भगवान. सुणो०।।७।।
मारुं कीधुं कशुं नवि थाय, तुं तो रंकने करे छे राय;
एक करे मुज महेरबानी, मारो मुजरो लेजो मानी. सुणो०।।८।।
एक वार जो नजरे नीरखो, तो करो मुजने तुम सरीखो;
जो सेवक तुम सरीखो थाशे, तो गुण तमारा गाशे. सुणो०।।९।।
सुणो० ॥९॥ भवोभव तुम चरणोनी सेवा, हुं तो मांगु छुं देवाधिदेवा;
सामुं जुओने सेवक जाणी,
एवी उदयरत्न’नी वाणी. सुणो० ।|१०।।`,
      sa: "",
      en: `Suno shaanti jinanda! sobhaagee, hun to thayo chhun tuma gunaraagee;
Tume niraagee bhagavanta, jotaan kima malashe tanta. suno0 || 1 ||
Hun to krodha kashaayano bhariyo, tun to upashama rasano dariyo;
Hun to ajnyaane aavariyo, tun to kevala-kamalaa variyo. suno0 || 2 ||
Hun to vishayaa rasano aashee, ten to vishayaa keedhee niraashee;
Hun to karmanaa bhaare bhareeyo, ten to prabhujee bhaara utaaryo. suno0|||3||
Hun to moha tane vasha padiyo, ten to sabalaa mohane haniyo;
Hunto bhavasamudramaan khoonchyo, tunto shivamandiramaan pahonchyo. suno0||4||
Maare janmamaranano joro, ten to todayo tehano doro;
Maaro paaso na mele raaga, tame prabhujee thayaa veetaraaga. suno0 ||5 ||
Mane maayaa e mookyo paashee, tun to nirbandhana avinaashee;
Hun to samakitathee adhooro, tun to sakala padaarathe pooro. suno0||6||
Maare to chhe prabhu tun hee eka, taare muja sareekhaa aneka;
Hun to manathee na mukun maana, tun to maanarahita bhagavaana. suno0||7||
Maarun keedhun kashun navi thaaya, tun to rankane kare chhe raaya;
Eka kare muja maherabaanee, maaro mujaro lejo maanee. suno0||8||
Eka vaara jo najare neerakho, to karo mujane tuma sareekho;
Jo sevaka tuma sareekho thaashe, to guna tamaaraa gaashe. suno0||9||
Suno0 ||9|| bhavobhava tuma charanonee sevaa, hun to maangu chhun devaadhidevaa;
Saamun juone sevaka jaanee,
Evee udayaratna’nee vaanee. suno0 ||10||`,
    },
  },
  {
    id: "suno-suvidhi-jinand-sobhagi",
    type: "bhajan",
    title: {
      gu: "સુણો સુવિધિ જિણંદ સોભાગી, મુજ તુજ ચરણે લય લાગી",
      hi: "सुणो सुविधि जिणंद सोभागी, मुज तुज चरणे लय लागी",
      sa: "",
      en: "Suno Suvidhi Jinand Sobhagi",
    },
    text: {
      gu: `સુણો સુવિધિ જિણંદ સોભાગી, મુજ તુજ ચરણે લય લાગી;
હું તો દાહે દાઝ્યો, તેં તો સુખ સંપૂર્ણ સાધ્યો.||૧||
હું તો માયા મત્સર ભરિયો, તું તો આર્જવ ગુણનો દરિયો;
હું તો ક્રોધ કષાયે બળીયો, તું તો સમતા રસમાં ભળીયો.||૨||
હું તો લોભ માંહે મુંઝાણો, તું તો સંતોષ ગુણનો રાણો;
હું તો જાતિ મદાદિકે માચ્યો, તું તો માર્દવ ગુણમાં રાચ્યો.||૩||
હું તો વિષય સુખનો તું તો વિષયાતીત નિઃસંગી;
હું તો ચિહું ગતિમાંહી રુલ્યો, તું તો શિવ સુંદરીને મલિયો. ।।૪||
પ્રભુ તું તો નિસંગી નિક્લેશી, હું પરિણામે સંશ્ર્લેષી;
તું તો જ્ઞાનાનંદે પૂરો, હું તો કર્મબંધન માંહે શૂરો.||૫||
તું તો વીતરાગ પ્રસિદ્ધ, મને રાગ દ્વેષે વશ કીધ;
તું તો કેવલજ્ઞાની અનુપ, મેં તો આવર્યું આપ સ્વરુપ.||૬||
તું તો સત્યવાદમાં લીન, હું તો અવગુણ ગ્રાહી અબીહ;
તું તો સર્વવેદી સ્યાદ્વાદી, હું તો મોહી મિથ્યાવાદી.||૭||
તું તો દેવનો દેવ દયાળ, હું તો તુજ સેવક એક બાળ;
મુજ સરીખા સેવક ઝાઝા, તું તો મારે એક જિનરાજા.||૮||
મુજ ઉપર કરો મહેરબાની, તુમ જાણો સેવક વાણી;
જો ભેદ રહિત મુજને નીરખો, તો થાય સેવક તુમ સરીખો.||૯||
હીરે હીરો વેધાય, એમ લોક કહેવત કહેવાય;
ગુણવંત થઈ ગુણી ધ્યાવે, તો ઋદ્ધિ અનંતી પાવે.||૧૦||
તુમ સહજ સ્વભાવ વિલાસી, નિજ શુદ્ધ સ્વરુપ પ્રકાશી;
ધ્યાતા ધ્યેય ધ્યાનમાં ધ્યાવે, તો ‘જિન’ ઉત્તમ પદ પાવે.||૧૧||`,
      hi: `सुणो सुविधि जिणंद सोभागी, मुज तुज चरणे लय लागी;
हुं तो दाहे दाझ्यो, तें तो सुख संपूर्ण साध्यो.||१||
हुं तो माया मत्सर भरियो, तुं तो आर्जव गुणनो दरियो;
हुं तो क्रोध कषाये बळीयो, तुं तो समता रसमां भळीयो.||२||
हुं तो लोभ मांहे मुंझाणो, तुं तो संतोष गुणनो राणो;
हुं तो जाति मदादिके माच्यो, तुं तो मार्दव गुणमां राच्यो.||३||
हुं तो विषय सुखनो तुं तो विषयातीत निःसंगी;
हुं तो चिहुं गतिमांही रुल्यो, तुं तो शिव सुंदरीने मलियो. ।।४||
प्रभु तुं तो निसंगी निक्लेशी, हुं परिणामे संश्र्लेषी;
तुं तो ज्ञानानंदे पूरो, हुं तो कर्मबंधन मांहे शूरो.||५||
तुं तो वीतराग प्रसिद्ध, मने राग द्वेषे वश कीध;
तुं तो केवलज्ञानी अनुप, में तो आवर्युं आप स्वरुप.||६||
तुं तो सत्यवादमां लीन, हुं तो अवगुण ग्राही अबीह;
तुं तो सर्ववेदी स्याद्वादी, हुं तो मोही मिथ्यावादी.||७||
तुं तो देवनो देव दयाळ, हुं तो तुज सेवक एक बाळ;
मुज सरीखा सेवक झाझा, तुं तो मारे एक जिनराजा.||८||
मुज उपर करो महेरबानी, तुम जाणो सेवक वाणी;
जो भेद रहित मुजने नीरखो, तो थाय सेवक तुम सरीखो.||९||
हीरे हीरो वेधाय, एम लोक कहेवत कहेवाय;
गुणवंत थई गुणी ध्यावे, तो ऋद्धि अनंती पावे.||१०||
तुम सहज स्वभाव विलासी, निज शुद्ध स्वरुप प्रकाशी;
ध्याता ध्येय ध्यानमां ध्यावे, तो ‘जिन’ उत्तम पद पावे.||११||`,
      sa: "",
      en: `Suno suvidhi jinanda sobhaagee, muja tuja charane laya laagee;
Hun to daahe daajhyo, ten to sukha sanpoorna saadhyo.||1||
Hun to maayaa matsara bhariyo, tun to aarjava gunano dariyo;
Hun to krodha kashaaye baleeyo, tun to samataa rasamaan bhaleeyo.||2||
Hun to lobha maanhe munjhaano, tun to santosha gunano raano;
Hun to jaati madaadike maachyo, tun to maardava gunamaan raachyo.||3||
Hun to vishaya sukhano tun to vishayaateeta nisangee;
Hun to chihun gatimaanhee rulyo, tun to shiva sundareene maliyo. ||4||
Prabhu tun to nisangee nikleshee, hun parinaame sanshrleshee;
Tun to jnyaanaanande pooro, hun to karmabandhana maanhe shooro.||5||
Tun to veetaraaga prasiddha, mane raaga dveshe vasha keedha;
Tun to kevalajnyaanee anupa, men to aavaryun aapa svarupa.||6||
Tun to satyavaadamaan leena, hun to avaguna graahee abeeha;
Tun to sarvavedee syaadvaadee, hun to mohee mithyaavaadee.||7||
Tun to devano deva dayaala, hun to tuja sevaka eka baala;
Muja sareekhaa sevaka jhaajhaa, tun to maare eka jinaraajaa.||8||
Muja upara karo maherabaanee, tuma jaano sevaka vaanee;
Jo bheda rahita mujane neerakho, to thaaya sevaka tuma sareekho.||9||
Heere heero vedhaaya, ema loka kahevata kahevaaya;
Gunavanta thaee gunee dhyaave, to ruddhi anantee paave.||10||
Tuma sahaja svabhaava vilaasee, nija shuddha svarupa prakaashee;
Dhyaataa dhyeya dhyaanamaan dhyaave, to ‘jina’ uttama pada paave.||11||`,
    },
  },
  {
    id: "surajmandan-parshwa-jinanda",
    type: "bhajan",
    title: {
      gu: "સુરજમંડન પાર્શ્વ જિણંદા, અરજ સુણો ટાળો દુઃખ દંદા",
      hi: "सुरजमंडन पार्श्व जिणंदा, अरज सुणो टाळो दुःख दंदा",
      sa: "",
      en: "Surajmandan Parshwa Jinanda",
    },
    text: {
      gu: `સુરજમંડન પાર્શ્વ જિણંદા, અરજ સુણો ટાળો દુઃખ દંદા;
તું સાહિબ હું છું તુજ બંદા, પ્રીત બની જૈસે કૈરવ ચંદા.||૧||
તુજશું નેહ નહિ મુજ કાચો, ઘણહિ ન ભાંજે હીરો જાચો;
દેતાં દાન તે કાંઈ વિમાસો, લાગે મુજ મન એહ તમાસો.||૨||
કેડ લાગ્યો તે કેડ ન છોડે, દીયો વાંછિત સેવક કર જોડે;
અખય ખજાનો તુજ નવિ ખૂટે, હાથ થકી તો શ્યું નવિ છૂટે.||૩||
જો ખિજમતમાં ખામી દાખો, તો પણ નિજ જાણી હિત રાખો;
જેણે દીધું છે તેહિ જ દેશે, સેવા કરશે તે ફળ લહેશે.||૪||
ધેનુ-કૂપ-આરામ સ્વભાવે, દેતાં દેતાં સંપત્તિ પાવે;
તિમ મુજને તુમે જો ગુણ દેશો,
તો જગમાં યશ અધિકો વહેશો. ॥૫||
॥ અધિકું ઓછું કિશ્યું રે કહાવો, જિમ તિમ સેવક ચિત્ત મનાવો;
માંગ્યા વિણ તો માય ન પીરસે, એહ ઉખાણો સાચો દિસે.||૬||
ઈમ જાણીને વિનંતી કીજે, મોહનગારા મુજરો લીજે;
વાચક ‘જશ’ કહેખમિયઆસંગો,
દીયોશિવસુખધરીઅવિહડરંગો.॥૭॥`,
      hi: `सुरजमंडन पार्श्व जिणंदा, अरज सुणो टाळो दुःख दंदा;
तुं साहिब हुं छुं तुज बंदा, प्रीत बनी जैसे कैरव चंदा.||१||
तुजशुं नेह नहि मुज काचो, घणहि न भांजे हीरो जाचो;
देतां दान ते कांई विमासो, लागे मुज मन एह तमासो.||२||
केड लाग्यो ते केड न छोडे, दीयो वांछित सेवक कर जोडे;
अखय खजानो तुज नवि खूटे, हाथ थकी तो श्युं नवि छूटे.||३||
जो खिजमतमां खामी दाखो, तो पण निज जाणी हित राखो;
जेणे दीधुं छे तेहि ज देशे, सेवा करशे ते फळ लहेशे.||४||
धेनु-कूप-आराम स्वभावे, देतां देतां संपत्ति पावे;
तिम मुजने तुमे जो गुण देशो,
तो जगमां यश अधिको वहेशो. ॥५||
॥ अधिकुं ओछुं किश्युं रे कहावो, जिम तिम सेवक चित्त मनावो;
मांग्या विण तो माय न पीरसे, एह उखाणो साचो दिसे.||६||
ईम जाणीने विनंती कीजे, मोहनगारा मुजरो लीजे;
वाचक ‘जश’ कहेखमियआसंगो,
दीयोशिवसुखधरीअविहडरंगो.॥७॥`,
      sa: "",
      en: `Surajamandana paarshva jinandaa, araja suno taalo dukha dandaa;
Tun saahiba hun chhun tuja bandaa, preeta banee jaise kairava chandaa.||1||
Tujashun neha nahi muja kaacho, ghanahi na bhaanje heero jaacho;
Detaan daana te kaanee vimaaso, laage muja mana eha tamaaso.||2||
Keda laagyo te keda na chhode, deeyo vaanchhita sevaka kara jode;
Akhaya khajaano tuja navi khoote, haatha thakee to shyun navi chhoote.||3||
Jo khijamatamaan khaamee daakho, to pana nija jaanee hita raakho;
Jene deedhun chhe tehi ja deshe, sevaa karashe te phala laheshe.||4||
Dhenu-koopa-aaraama svabhaave, detaan detaan sanpatti paave;
Tima mujane tume jo guna desho,
To jagamaan yasha adhiko vahesho. ||5||
|| adhikun ochhun kishyun re kahaavo, jima tima sevaka chitta manaavo;
Maangyaa vina to maaya na peerase, eha ukhaano saacho dise.||6||
Eema jaaneene vinantee keeje, mohanagaaraa mujaro leeje;
Vaachaka ‘jasha’ kahekhamiyaaasango,
Deeyoshivasukhadhareeavihadarango.||7||`,
    },
  },
  {
    id: "suvidhi-jinand-muj-darishan-done",
    type: "bhajan",
    title: {
      gu: "સુવિધિ જિણંદ મુજ દરિસણ દ્યોને, દિલભર દિલથી મારા સામું જુઓ.",
      hi: "सुविधि जिणंद मुज दरिसण द्योने, दिलभर दिलथी मारा सामुं जुओ.",
      sa: "",
      en: "Suvidhi Jinand Muj Darishan Done",
    },
    text: {
      gu: `સુવિધિ જિણંદ મુજ દરિસણ દ્યોને, દિલભર દિલથી મારા સામું જુઓ.
હસી તારા ચિત્તની વાત મને કહોને,
પ્રીતની રીતમાં શું તેં વહોને.||૧||
અંતર ચિત્તની વારતા રે, પ્રભુ કહું તે ચિત્તમાં ધરોને;
પ્રીત પ્રતીત જિમ ઊપજે રે, તિમ અવિહડ પ્રીત કરોને.||૨||
સુંદર તુમ મુખ મટકડે રે, પ્રભુ! લોભાવ્યા તેં અમને;
મુજ મન મળવા અતિ ઘણું રે, ચાહે ક્ષણ માંહી તુજને.||૩||
લલચાવશો દિન કેટલા રે, ઈમ મુજને દિલાસો દઈને;
હા ના ભાખીએ રે, બેસી શું રહ્યા મૌન લઈને.||૪||
હસિત વદને બોલાવીને રે, આજ મુજને રાજી કરોને;
વાંછિત દેઈ અમને રે, તુમે જગમાં સુજશ વરોને.||૫||
રોગ શોગ દુઃખ દોહગ રે, પાપ સંતાપ ને તાપ હરીને;
પંડિત પ્રેમના “ભાણ”ને રે, તુમે પ્રસન્ન હોજો હેજ ધરીને.||૬||`,
      hi: `सुविधि जिणंद मुज दरिसण द्योने, दिलभर दिलथी मारा सामुं जुओ.
हसी तारा चित्तनी वात मने कहोने,
प्रीतनी रीतमां शुं तें वहोने.||१||
अंतर चित्तनी वारता रे, प्रभु कहुं ते चित्तमां धरोने;
प्रीत प्रतीत जिम ऊपजे रे, तिम अविहड प्रीत करोने.||२||
सुंदर तुम मुख मटकडे रे, प्रभु! लोभाव्या तें अमने;
मुज मन मळवा अति घणुं रे, चाहे क्षण मांही तुजने.||३||
ललचावशो दिन केटला रे, ईम मुजने दिलासो दईने;
हा ना भाखीए रे, बेसी शुं रह्या मौन लईने.||४||
हसित वदने बोलावीने रे, आज मुजने राजी करोने;
वांछित देई अमने रे, तुमे जगमां सुजश वरोने.||५||
रोग शोग दुःख दोहग रे, पाप संताप ने ताप हरीने;
पंडित प्रेमना “भाण”ने रे, तुमे प्रसन्न होजो हेज धरीने.||६||`,
      sa: "",
      en: `Suvidhi jinanda muja darisana dyone, dilabhara dilathee maaraa saamun juo.
Hasee taaraa chittanee vaata mane kahone,
Preetanee reetamaan shun ten vahone.||1||
Antara chittanee vaarataa re, prabhu kahun te chittamaan dharone;
Preeta prateeta jima oopaje re, tima avihada preeta karone.||2||
Sundara tuma mukha matakade re, prabhu! lobhaavyaa ten amane;
Muja mana malavaa ati ghanun re, chaahe kshana maanhee tujane.||3||
Lalachaavasho dina ketalaa re, eema mujane dilaaso daeene;
Haa naa bhaakheee re, besee shun rahyaa mauna laeene.||4||
Hasita vadane bolaaveene re, aaja mujane raajee karone;
Vaanchhita deee amane re, tume jagamaan sujasha varone.||5||
Roga shoga dukha dohaga re, paapa santaapa ne taapa hareene;
Pandita premanaa “bhaana”ne re, tume prasanna hojo heja dhareene.||6||`,
    },
  },
  {
    id: "suvidhi-jinesar-pay-namine",
    type: "bhajan",
    title: {
      gu: "સુવિધિ જિણેસર પાય નમીને, શુભ કરણી ઈમ કીજે રે",
      hi: "सुविधि जिणेसर पाय नमीने, शुभ करणी ईम कीजे रे",
      sa: "",
      en: "Suvidhi Jinesar Pay Namine",
    },
    text: {
      gu: `સુવિધિ જિણેસર પાય નમીને, શુભ કરણી ઈમ કીજે રે;
અતિ ઘણો ઊલટ અંગ ધરીને, પ્રહ ઊઠી પૂજી જે રે.||૧||
દ્રવ્ય ભાવ શુચિ ભાવ ધરીને, હરખે દેહરે જઈએ રે;
દહ તિગ પણ અહિંગમ સાચવતાં, એકમના ધુરિ થઈએરે.||૨||
કુસુમ અક્ષત વર વાસ સુગંધી, ધૂપ દીપ મન સાખી રે;
અંગપૂજા પણ ભેદ સુણી ઈમ, ગુરુ મુખ આગમ ભાખીરે.||૩||
એહનું ફળ દોય ભેદ સુણીજે, અનંતર ને પરંપર રે;
આણા પાલન ચિત્તપ્રસન્ની, મુગતિ સુગતિ સુરમંદિર રે.||૪||
ફૂલ અક્ષત વર ધૂપ પઈવો, ગંધ નૈવેધ ફળ જળ ભરી રે;
અંગઅગ્રપૂજા મળી અડવિધ, ભાવે ભવિક શુભગતિવરીરે.||૫||
સત્તર ભેદ એકવીસ પ્રકારે, અષ્ટોત્તર શત ભેદે રે;
ભાવપૂજા બહુવિધ નિરધારી, દોહગ દુર્ગતિ છેદે રે.||૭||
તુરીય ભેદ પડિવત્તિ પૂજા, ઉપશમ ખીણ સયોગી રે;
ચઉહા પૂજા ઈમ ભાખી કેવળ ભોગી રે.||૮||
ઈમ પૂજા બહુ ભેદ સુણીને, સુખદાયક શુભ કરણી રે;
ભવિક જીવ કરશે તે લહેશે, “આનંદઘન’ પદ ધરણી રે. સુ૦ ।।૯||`,
      hi: `सुविधि जिणेसर पाय नमीने, शुभ करणी ईम कीजे रे;
अति घणो ऊलट अंग धरीने, प्रह ऊठी पूजी जे रे.||१||
द्रव्य भाव शुचि भाव धरीने, हरखे देहरे जईए रे;
दह तिग पण अहिंगम साचवतां, एकमना धुरि थईएरे.||२||
कुसुम अक्षत वर वास सुगंधी, धूप दीप मन साखी रे;
अंगपूजा पण भेद सुणी ईम, गुरु मुख आगम भाखीरे.||३||
एहनुं फळ दोय भेद सुणीजे, अनंतर ने परंपर रे;
आणा पालन चित्तप्रसन्नी, मुगति सुगति सुरमंदिर रे.||४||
फूल अक्षत वर धूप पईवो, गंध नैवेध फळ जळ भरी रे;
अंगअग्रपूजा मळी अडविध, भावे भविक शुभगतिवरीरे.||५||
सत्तर भेद एकवीस प्रकारे, अष्टोत्तर शत भेदे रे;
भावपूजा बहुविध निरधारी, दोहग दुर्गति छेदे रे.||७||
तुरीय भेद पडिवत्ति पूजा, उपशम खीण सयोगी रे;
चउहा पूजा ईम भाखी केवळ भोगी रे.||८||
ईम पूजा बहु भेद सुणीने, सुखदायक शुभ करणी रे;
भविक जीव करशे ते लहेशे, “आनंदघन’ पद धरणी रे. सु० ।।९||`,
      sa: "",
      en: `Suvidhi jinesara paaya nameene, shubha karanee eema keeje re;
Ati ghano oolata anga dhareene, praha oothee poojee je re.||1||
Dravya bhaava shuchi bhaava dhareene, harakhe dehare jaeee re;
Daha tiga pana ahingama saachavataan, ekamanaa dhuri thaeeere.||2||
Kusuma akshata vara vaasa sugandhee, dhoopa deepa mana saakhee re;
Angapoojaa pana bheda sunee eema, guru mukha aagama bhaakheere.||3||
Ehanun phala doya bheda suneeje, anantara ne paranpara re;
Aanaa paalana chittaprasannee, mugati sugati suramandira re.||4||
Phoola akshata vara dhoopa paeevo, gandha naivedha phala jala bharee re;
Angaagrapoojaa malee adavidha, bhaave bhavika shubhagativareere.||5||
Sattara bheda ekaveesa prakaare, ashtottara shata bhede re;
Bhaavapoojaa bahuvidha niradhaaree, dohaga durgati chhede re.||7||
Tureeya bheda padivatti poojaa, upashama kheena sayogee re;
Chauhaa poojaa eema bhaakhee kevala bhogee re.||8||
Eema poojaa bahu bheda suneene, sukhadaayaka shubha karanee re;
Bhavika jeeva karashe te laheshe, “aanandaghana’ pada dharanee re. su0 ||9||`,
    },
  },
  {
    id: "swami-tume-kai-kamna-kidhu",
    type: "bhajan",
    title: {
      gu: "સ્વામી તુમે કાંઈ કામણ કીધું",
      hi: "स्वामी तुमे कांई कामण कीधुं",
      sa: "",
      en: "Swami Tume Kai Kamna Kidhu",
    },
    text: {
      gu: `સ્વામી તુમે કાંઈ કામણ કીધું,
ચિત્તડું ચોરી લીધું;
અમે પણ તુમશું કામણ કરશું,
ભક્તે ગ્રહી મન ઘરમાં ધરશું;
સાહિબા વાસુપૂજ્ય જિણંદા,
મોહના વાસુપૂજ્ય જિણંદા.||૧||
મન ઘરમાં ધરીયા ઘર શોભા,
દેખત નિત્ય રહેશો થિર થોભા;
મન વૈકુંઠ અકુંઠિત ભગતે,
યોગી ભાખે અનુભવ યુક્તે.||૨||
ક્લેશે વાસિત મન સંસાર,
ક્લેશ રહિત મન તે ભવપાર;
જો વિશુદ્ધ મન ઘર તુમે આવ્યા,
તો અમે નવનિધિ રિદ્ધિ પાયા.||૩||
સાત રાજ અળગા જઈ બેઠા,
પણ ભગતે અમ મનમાં હી પેઠા;
અળગાને વળગ્યા જે રહેવું,
તે ભાણા ખડખડ દુઃખ સહેવું.||૪||
ધ્યાતા ધ્યેય ધ્યાન ગુણ એકે
ભેદ છેદ કરશું હવે ટેકે;
ક્ષીર નીર પરે તુમશું મિલશું,
‘વાચક યશ’ કહે હેજે હળશું.||૫||`,
      hi: `स्वामी तुमे कांई कामण कीधुं,
चित्तडुं चोरी लीधुं;
अमे पण तुमशुं कामण करशुं,
भक्ते ग्रही मन घरमां धरशुं;
साहिबा वासुपूज्य जिणंदा,
मोहना वासुपूज्य जिणंदा.||१||
मन घरमां धरीया घर शोभा,
देखत नित्य रहेशो थिर थोभा;
मन वैकुंठ अकुंठित भगते,
योगी भाखे अनुभव युक्ते.||२||
क्लेशे वासित मन संसार,
क्लेश रहित मन ते भवपार;
जो विशुद्ध मन घर तुमे आव्या,
तो अमे नवनिधि रिद्धि पाया.||३||
सात राज अळगा जई बेठा,
पण भगते अम मनमां ही पेठा;
अळगाने वळग्या जे रहेवुं,
ते भाणा खडखड दुःख सहेवुं.||४||
ध्याता ध्येय ध्यान गुण एके
भेद छेद करशुं हवे टेके;
क्षीर नीर परे तुमशुं मिलशुं,
‘वाचक यश’ कहे हेजे हळशुं.||५||`,
      sa: "",
      en: `Svaamee tume kaanee kaamana keedhun,
Chittadun choree leedhun;
Ame pana tumashun kaamana karashun,
Bhakte grahee mana gharamaan dharashun;
Saahibaa vaasupoojya jinandaa,
Mohanaa vaasupoojya jinandaa.||1||
Mana gharamaan dhareeyaa ghara shobhaa,
Dekhata nitya rahesho thira thobhaa;
Mana vaikuntha akunthita bhagate,
Yogee bhaakhe anubhava yukte.||2||
Kleshe vaasita mana sansaara,
Klesha rahita mana te bhavapaara;
Jo vishuddha mana ghara tume aavyaa,
To ame navanidhi riddhi paayaa.||3||
Saata raaja alagaa jaee bethaa,
Pana bhagate ama manamaan hee pethaa;
Alagaane valagyaa je rahevun,
Te bhaanaa khadakhada dukha sahevun.||4||
Dhyaataa dhyeya dhyaana guna eke
Bheda chheda karashun have teke;
Ksheera neera pare tumashun milashun,
‘vaachaka yasha’ kahe heje halashun.||5||`,
    },
  },
  {
    id: "taahri-ajbani-yogani-mudra-re",
    type: "bhajan",
    title: {
      gu: "તાહરી અજબશી યોગની મુદ્રા રે, લાગે મને મીઠી રે",
      hi: "ताहरी अजबशी योगनी मुद्रा रे, लागे मने मीठी रे",
      sa: "",
      en: "Taahri Ajbani Yogani Mudra Re",
    },
    text: {
      gu: `તાહરી અજબશી યોગની મુદ્રા રે, લાગે મને મીઠી રે;
એ તો ટાળે મોહની નિદ્રા રે, પ્રત્યક્ષ દીઠી રે…
લોકોત્તરશી જોગની મુદ્રા,
વ્હાલા માહરા નિરુપમ આસન સોહે રે;
સરસ રચિત શુક્લધ્યાનની ધારે,
સુરનરના મન મોહે રે.||૧||
ત્રિગડે રતન સિંહાસન બેસી,
વ્હાલા માહરા ચિહું દિશે ચામર ઢલાવે રે;
અરિહંત પદ પ્રભુતાનો ભોગી,
તો પણ જોગી કહાવે રે.||૨||
અમૃત ઝરણી મીઠી તુજ વાણી,
વ્હાલા માહરા જેમ અષાઢો ગાજે રે;
કાન મારગ થઈ હિયડે પેસી,
સંદેહ મનના ભાંજે રે.||૩||
કોડી ગમે ઊભા દરબારે,
વ્હાલા માહરા જય મંગલ સુર બોલે રે;
ત્રણ ભુવનની રિદ્ધિ તુજ આગે,
દીસે ઈમ તૃણ તોલે રે.||૪||
ભેદ લહું નહિ જોગ જુગતિનો,
વ્હાલા માહરા સુવિધિ જિણંદ! બતાવો રે;
પ્રેમશું ‘કાન્તિ’ કહે કરી કરુણા,
મુજ મન મંદિર આવો રે.||૫||`,
      hi: `ताहरी अजबशी योगनी मुद्रा रे, लागे मने मीठी रे;
ए तो टाळे मोहनी निद्रा रे, प्रत्यक्ष दीठी रे…
लोकोत्तरशी जोगनी मुद्रा,
व्हाला माहरा निरुपम आसन सोहे रे;
सरस रचित शुक्लध्याननी धारे,
सुरनरना मन मोहे रे.||१||
त्रिगडे रतन सिंहासन बेसी,
व्हाला माहरा चिहुं दिशे चामर ढलावे रे;
अरिहंत पद प्रभुतानो भोगी,
तो पण जोगी कहावे रे.||२||
अमृत झरणी मीठी तुज वाणी,
व्हाला माहरा जेम अषाढो गाजे रे;
कान मारग थई हियडे पेसी,
संदेह मनना भांजे रे.||३||
कोडी गमे ऊभा दरबारे,
व्हाला माहरा जय मंगल सुर बोले रे;
त्रण भुवननी रिद्धि तुज आगे,
दीसे ईम तृण तोले रे.||४||
भेद लहुं नहि जोग जुगतिनो,
व्हाला माहरा सुविधि जिणंद! बतावो रे;
प्रेमशुं ‘कान्ति’ कहे करी करुणा,
मुज मन मंदिर आवो रे.||५||`,
      sa: "",
      en: `Taaharee ajabashee yoganee mudraa re, laage mane meethee re;
E to taale mohanee nidraa re, pratyaksha deethee re…
Lokottarashee joganee mudraa,
Vhaalaa maaharaa nirupama aasana sohe re;
Sarasa rachita shukladhyaananee dhaare,
Suranaranaa mana mohe re.||1||
Trigade ratana sinhaasana besee,
Vhaalaa maaharaa chihun dishe chaamara dhalaave re;
Arihanta pada prabhutaano bhogee,
To pana jogee kahaave re.||2||
Amruta jharanee meethee tuja vaanee,
Vhaalaa maaharaa jema ashaadho gaaje re;
Kaana maaraga thaee hiyade pesee,
Sandeha mananaa bhaanje re.||3||
Kodee game oobhaa darabaare,
Vhaalaa maaharaa jaya mangala sura bole re;
Trana bhuvananee riddhi tuja aage,
Deese eema truna tole re.||4||
Bheda lahun nahi joga jugatino,
Vhaalaa maaharaa suvidhi jinanda! bataavo re;
Premashun ‘kaanti’ kahe karee karunaa,
Muja mana mandira aavo re.||5||`,
    },
  },
  {
    id: "tama-mahavideha-jaine-kehejo",
    type: "bhajan",
    title: {
      gu: "તમે મહાવિદેહ જઈને કહેજો ચાંદલિયા, સીમંધર તેડા મોકલે",
      hi: "तमे महाविदेह जईने कहेजो चांदलिया, सीमंधर तेडा मोकले",
      sa: "",
      en: "Tama Mahavideha Jaine Kehejo",
    },
    text: {
      gu: `તમે મહાવિદેહ જઈને કહેજો ચાંદલિયા, સીમંધર તેડા મોકલે;
તમે ભરત ક્ષેત્રનાં દુઃખ મારા, કહેજો ચાંદલિયા. સીમંત્ર ।।૧।|
અજ્ઞાનતા અહીં છવાઈ ગઈ છે, તત્ત્વની વાતો ભુલાઈ ગઈ છે;
હારે એવાં, આત્માનાં દુઃખ મારા, કહેજો ચાંદલિયા. સીમં૦।। ૨ ।।
પુદ્ગલના મોહમાં ફસાઈ ગયો છું, કર્મોની જાળમાં જકડાઈ ગયો છું;
હારે એવાં, કર્મોનાં દુઃખ મારા, કહેજો ચાંદલિયા. સીમંત્ર।।૩।।
મારું ન હતું તેને મારું કરી માન્યું, મારું હતું તેને નાહિ રે પિછાણ્યું;
હા રે એવાં, મૂર્ખતાના દુઃખ મારાં, કહેજો ચાંદલિયા. સીમં૦।।૪।।
સીમંધર સીમંધર હૃદયમાં ધરતો, પ્રત્યક્ષ દર્શનની આશા હું કરતો;
હા રે એવાં, વિયોગનાં દુઃખ મારાં, કહેજો ચાંદલિયા. સીમં૦ ||૫ ।।
સંસારનું સુખ મનેકારમુંજ લાગે, પ્રભુતુમ વિણ વાત કહું કોનીરે આગે;
હારે એવાં “વીરવિજય’નાં દુઃખ મારાં,
કહેજો ચાંદલિયા. સીમં૦િ।।૬।।`,
      hi: `तमे महाविदेह जईने कहेजो चांदलिया, सीमंधर तेडा मोकले;
तमे भरत क्षेत्रनां दुःख मारा, कहेजो चांदलिया. सीमंत्र ।।१।|
अज्ञानता अहीं छवाई गई छे, तत्त्वनी वातो भुलाई गई छे;
हारे एवां, आत्मानां दुःख मारा, कहेजो चांदलिया. सीमं०।। २ ।।
पुद्गलना मोहमां फसाई गयो छुं, कर्मोनी जाळमां जकडाई गयो छुं;
हारे एवां, कर्मोनां दुःख मारा, कहेजो चांदलिया. सीमंत्र।।३।।
मारुं न हतुं तेने मारुं करी मान्युं, मारुं हतुं तेने नाहि रे पिछाण्युं;
हा रे एवां, मूर्खताना दुःख मारां, कहेजो चांदलिया. सीमं०।।४।।
सीमंधर सीमंधर हृदयमां धरतो, प्रत्यक्ष दर्शननी आशा हुं करतो;
हा रे एवां, वियोगनां दुःख मारां, कहेजो चांदलिया. सीमं० ||५ ।।
संसारनुं सुख मनेकारमुंज लागे, प्रभुतुम विण वात कहुं कोनीरे आगे;
हारे एवां “वीरविजय’नां दुःख मारां,
कहेजो चांदलिया. सीमं०ि।।६।।`,
      sa: "",
      en: `Tame mahaavideha jaeene kahejo chaandaliyaa, seemandhara tedaa mokale;
Tame bharata kshetranaan dukha maaraa, kahejo chaandaliyaa. seemantra ||1||
Ajnyaanataa aheen chhavaaee gaee chhe, tattvanee vaato bhulaaee gaee chhe;
Haare evaan, aatmaanaan dukha maaraa, kahejo chaandaliyaa. seeman0|| 2 ||
Pudgalanaa mohamaan phasaaee gayo chhun, karmonee jaalamaan jakadaaee gayo chhun;
Haare evaan, karmonaan dukha maaraa, kahejo chaandaliyaa. seemantra||3||
Maarun na hatun tene maarun karee maanyun, maarun hatun tene naahi re pichhaanyun;
Haa re evaan, moorkhataanaa dukha maaraan, kahejo chaandaliyaa. seeman0||4||
Seemandhara seemandhara hrudayamaan dharato, pratyaksha darshananee aashaa hun karato;
Haa re evaan, viyoganaan dukha maaraan, kahejo chaandaliyaa. seeman0 ||5 ||
Sansaaranun sukha manekaaramunja laage, prabhutuma vina vaata kahun koneere aage;
Haare evaan “veeravijaya’naan dukha maaraan,
Kahejo chaandaliyaa. seeman0િ||6||`,
    },
  },
  {
    id: "tar-ho-tar-prabhu-muj-sevak-bhani",
    type: "bhajan",
    title: {
      gu: "તાર હો તાર પ્રભુ મુજ સેવક ભણી",
      hi: "तार हो तार प्रभु मुज सेवक भणी",
      sa: "",
      en: "Tar Ho Tar Prabhu Muj Sevak Bhani",
    },
    text: {
      gu: `તાર હો તાર પ્રભુ મુજ સેવક ભણી,
જગતમાં એટલું સુયશ લિજે;
દાસ અવગુણ ભર્યો જાણી પોતા તણો,
દયાનિધિ દીન પર દયા કીજે.||૧||
રાગ દ્વેષે ભર્યો મોહ વૈરી નડયો,
લોકની રીતમાં ઘણું ય રાતો;
ક્રોધ વશ ધમધમ્યો, શુદ્ધ ગુણ નવિ રમ્યો,
ભમ્યો ભવ માંહી હું વિષય માતો.||૨||
આદર્યું લોક ઉપચારથી,
શાસ્ત્ર અભ્યાસ પણ કાંઈ કીધો;
શુદ્ધ શ્રદ્ધાન વળી આત્મ અવલંબન વિણ,
તેહવો કાર્ય તિણે કો ન સીધો.||૩||
સ્વામી દરિશણ સમો નિમિત્ત લહી નિરમળો,
જો ઉપાદાન એ શુચિ ન થાશે;
દોષ કો વસ્તુનો અહવા ઉદ્યમ તણો
, સ્વામી સેવા સહી નિકટ લાશે.||૪||
ઓળખી સ્વામીને જે ભજે,
દરિશણ શુદ્ધતા તેહ પામે;
જ્ઞાન ચારિત્ર તપ વીર્ય ઉલ્લાસથી,
કર્મ ઝીપી વસે મુક્તિ ધામે.||૫||
જગત વત્સલ મહાવીર જિનવર સુણી,
ચિત્ત પ્રભુ ચરણને શરણ વાસ્યો;
તારજો બાપજી બિરુદ નિજ રાખવા,
દાસની સેવના રખે ન જોશો.||૬||
માનજો શક્તિ એ આપજો,
ભાવ સ્યાદ્વાદતા શુદ્ધ ભાસે;
સાધી સાધક દશા સિદ્ધતા અનુભવી,
‘દેવચંદ્ર’ વિમલ પ્રભુતા પ્રકાશે.||૭||`,
      hi: `तार हो तार प्रभु मुज सेवक भणी,
जगतमां एटलुं सुयश लिजे;
दास अवगुण भर्यो जाणी पोता तणो,
दयानिधि दीन पर दया कीजे.||१||
राग द्वेषे भर्यो मोह वैरी नडयो,
लोकनी रीतमां घणुं य रातो;
क्रोध वश धमधम्यो, शुद्ध गुण नवि रम्यो,
भम्यो भव मांही हुं विषय मातो.||२||
आदर्युं लोक उपचारथी,
शास्त्र अभ्यास पण कांई कीधो;
शुद्ध श्रद्धान वळी आत्म अवलंबन विण,
तेहवो कार्य तिणे को न सीधो.||३||
स्वामी दरिशण समो निमित्त लही निरमळो,
जो उपादान ए शुचि न थाशे;
दोष को वस्तुनो अहवा उद्यम तणो
, स्वामी सेवा सही निकट लाशे.||४||
ओळखी स्वामीने जे भजे,
दरिशण शुद्धता तेह पामे;
ज्ञान चारित्र तप वीर्य उल्लासथी,
कर्म झीपी वसे मुक्ति धामे.||५||
जगत वत्सल महावीर जिनवर सुणी,
चित्त प्रभु चरणने शरण वास्यो;
तारजो बापजी बिरुद निज राखवा,
दासनी सेवना रखे न जोशो.||६||
मानजो शक्ति ए आपजो,
भाव स्याद्वादता शुद्ध भासे;
साधी साधक दशा सिद्धता अनुभवी,
‘देवचंद्र’ विमल प्रभुता प्रकाशे.||७||`,
      sa: "",
      en: `Taara ho taara prabhu muja sevaka bhanee,
Jagatamaan etalun suyasha lije;
Daasa avaguna bharyo jaanee potaa tano,
Dayaanidhi deena para dayaa keeje.||1||
Raaga dveshe bharyo moha vairee nadayo,
Lokanee reetamaan ghanun ya raato;
Krodha vasha dhamadhamyo, shuddha guna navi ramyo,
Bhamyo bhava maanhee hun vishaya maato.||2||
Aadaryun loka upachaarathee,
Shaastra abhyaasa pana kaanee keedho;
Shuddha shraddhaana valee aatma avalanbana vina,
Tehavo kaarya tine ko na seedho.||3||
Svaamee darishana samo nimitta lahee niramalo,
Jo upaadaana e shuchi na thaashe;
Dosha ko vastuno ahavaa udyama tano
, svaamee sevaa sahee nikata laashe.||4||
Olakhee svaameene je bhaje,
Darishana shuddhataa teha paame;
Jnyaana chaaritra tapa veerya ullaasathee,
Karma jheepee vase mukti dhaame.||5||
Jagata vatsala mahaaveera jinavara sunee,
Chitta prabhu charanane sharana vaasyo;
Taarajo baapajee biruda nija raakhavaa,
Daasanee sevanaa rakhe na josho.||6||
Maanajo shakti e aapajo,
Bhaava syaadvaadataa shuddha bhaase;
Saadhee saadhaka dashaa siddhataa anubhavee,
‘devachandra’ vimala prabhutaa prakaashe.||7||`,
    },
  },
  {
    id: "tar-muj-tar-muj",
    type: "bhajan",
    title: {
      gu: "તાર મુજ તાર મુજ તાર ત્રિભુવન ધણી, પાર ઉતાર સંસાર સ્વામી",
      hi: "तार मुज तार मुज तार त्रिभुवन धणी, पार उतार संसार स्वामी",
      sa: "",
      en: "Tar Muj Tar Muj",
    },
    text: {
      gu: `તાર મુજ તાર મુજ તાર ત્રિભુવન ધણી, પાર ઉતાર સંસાર સ્વામી;
પ્રાણ તું ત્રાણ તું શરણ આધાર તું,
આતમારામ મુજ તુંહી સ્વામી.||૧||
તુંહી ચિંતામણિ, તુંહી મુજ સુરતરુ, કામઘટ કામધેનુ વિધાતા;
સકલ સંપત્તિ કરું, વિકટ સંકટ હરું,
પાસ શંખેશ્વરો મુક્તિદાતા.||૨||
પુણ્ય ભરપૂર અંકુર મુજ જાગિયો, મુખ નૂર વાધ્યો;
સકલ વાંછિત ફળ્યો, માહરો દિન વળ્યો,
શંખેશ્વરો દેવ લાધ્યો.||૩||
મનોહારિણી, ભવજલધિ તારિણી, નિરખત નયન આનંદ હુઓ;
પાર્શ્વ પ્રભુ ભેટિયા પાતિક લેટિયા તાહરે ચરણે જુઓ.||૪||
પાસ તું મુજ ધણી, પ્રીતિ મુજ બની ઘણી,
વિબુધવર નયવિજય ગુરુ વખાણી;
મુક્તિપદ આપજો આપ પદ થાપજો,
“જસવિજય” આપનો ભક્ત જાણી.||૫||`,
      hi: `तार मुज तार मुज तार त्रिभुवन धणी, पार उतार संसार स्वामी;
प्राण तुं त्राण तुं शरण आधार तुं,
आतमाराम मुज तुंही स्वामी.||१||
तुंही चिंतामणि, तुंही मुज सुरतरु, कामघट कामधेनु विधाता;
सकल संपत्ति करुं, विकट संकट हरुं,
पास शंखेश्वरो मुक्तिदाता.||२||
पुण्य भरपूर अंकुर मुज जागियो, मुख नूर वाध्यो;
सकल वांछित फळ्यो, माहरो दिन वळ्यो,
शंखेश्वरो देव लाध्यो.||३||
मनोहारिणी, भवजलधि तारिणी, निरखत नयन आनंद हुओ;
पार्श्व प्रभु भेटिया पातिक लेटिया ताहरे चरणे जुओ.||४||
पास तुं मुज धणी, प्रीति मुज बनी घणी,
विबुधवर नयविजय गुरु वखाणी;
मुक्तिपद आपजो आप पद थापजो,
“जसविजय” आपनो भक्त जाणी.||५||`,
      sa: "",
      en: `Taara muja taara muja taara tribhuvana dhanee, paara utaara sansaara svaamee;
Praana tun traana tun sharana aadhaara tun,
Aatamaaraama muja tunhee svaamee.||1||
Tunhee chintaamani, tunhee muja surataru, kaamaghata kaamadhenu vidhaataa;
Sakala sanpatti karun, vikata sankata harun,
Paasa shankheshvaro muktidaataa.||2||
Punya bharapoora ankura muja jaagiyo, mukha noora vaadhyo;
Sakala vaanchhita phalyo, maaharo dina valyo,
Shankheshvaro deva laadhyo.||3||
Manohaarinee, bhavajaladhi taarinee, nirakhata nayana aananda huo;
Paarshva prabhu bhetiyaa paatika letiyaa taahare charane juo.||4||
Paasa tun muja dhanee, preeti muja banee ghanee,
Vibudhavara nayavijaya guru vakhaanee;
Muktipada aapajo aapa pada thaapajo,
“jasavijaya” aapano bhakta jaanee.||5||`,
    },
  },
  {
    id: "tar-muj-tar-muj-tar-jinraj-tu",
    type: "bhajan",
    title: {
      gu: "તાર મુજ તાર મુજ તાર જિનરાજ તું",
      hi: "तार मुज तार मुज तार जिनराज तुं",
      sa: "",
      en: "Tar Muj Tar Muj Tar Jinraj Tu",
    },
    text: {
      gu: `તાર મુજ તાર મુજ તાર જિનરાજ તું,
આજ મેં તોહિ દેદાર પાયો;
સકલ સંપત્તિ મળ્યો આજ શુભદિન વળ્યો,
સુરમણિ આજ અણચિંત પાયો.||૧||
તાહરી આણ હું શેષ પરે શિર વહું,
નિરવહું ભવભવે ચિત્ત શુદ્ધે;
ભમતાં ભવકાનને સુરતરુની પરે,
તું પ્રભુ! ઓળખ્યો દેવ બુદ્ધે.||૨||
અથિર સંસારમાં સાર તુજ સેવના,
દેવના દેવ! તુજ સેવ સારે;
શત્રુ ને મિત્ર ભાવે બેહુ ગણે,
ભક્તવત્સલ સદા બિરુદ ધારે.||૩||
તાહરા ચિત્તમાં દાસ બુદ્ધે સદા,
હું વસું એહવી વાત દૂરે;
પણ મુજ ચિત્તમાં તુંહિ જો નિત વસે
તો કિશું કીજિયે મોહ શૂરે.||૪||
તું કૃપાકુંભ ભગવંત! તું,
સકલ ભવિલોકને સિદ્ધિદાતા;
ત્રાણ મુજ પ્રાણ મુજ શરણ આધાર તું,
તું સખા માત ને તાત ભ્રાતા. ||૫||
આતમરામ અભિરામ અભિધાન તુજ,
સમરતાં દાસના દુરિત જાવે;
તુજ વદન ચંદ્રમા નિશદિન પેખતાં,
નયન ચકોર આનંદ પાવે.||૬||
વિશ્વસેનકુલ કમલ દિનકર જિશ્યો,
મન વસ્યો માત અચિરા મલ્હાયો;
શાન્તિ જિનરાજ! શિરતાજ દાતારમાં,
અભયદાની શિરે જગ સવાયો.||૭||
લાજ જિનરાજ! અબ દાસની તો શિરે,
અવસરે મોહશ્યું લાજ પાવે;
પંડિતરાય કવિ ધીરવિમલ તણો,
ગુણ ‘જ્ઞાનવિમલાદિ’ ગાવે.||૮||`,
      hi: `तार मुज तार मुज तार जिनराज तुं,
आज में तोहि देदार पायो;
सकल संपत्ति मळ्यो आज शुभदिन वळ्यो,
सुरमणि आज अणचिंत पायो.||१||
ताहरी आण हुं शेष परे शिर वहुं,
निरवहुं भवभवे चित्त शुद्धे;
भमतां भवकानने सुरतरुनी परे,
तुं प्रभु! ओळख्यो देव बुद्धे.||२||
अथिर संसारमां सार तुज सेवना,
देवना देव! तुज सेव सारे;
शत्रु ने मित्र भावे बेहु गणे,
भक्तवत्सल सदा बिरुद धारे.||३||
ताहरा चित्तमां दास बुद्धे सदा,
हुं वसुं एहवी वात दूरे;
पण मुज चित्तमां तुंहि जो नित वसे
तो किशुं कीजिये मोह शूरे.||४||
तुं कृपाकुंभ भगवंत! तुं,
सकल भविलोकने सिद्धिदाता;
त्राण मुज प्राण मुज शरण आधार तुं,
तुं सखा मात ने तात भ्राता. ||५||
आतमराम अभिराम अभिधान तुज,
समरतां दासना दुरित जावे;
तुज वदन चंद्रमा निशदिन पेखतां,
नयन चकोर आनंद पावे.||६||
विश्वसेनकुल कमल दिनकर जिश्यो,
मन वस्यो मात अचिरा मल्हायो;
शान्ति जिनराज! शिरताज दातारमां,
अभयदानी शिरे जग सवायो.||७||
लाज जिनराज! अब दासनी तो शिरे,
अवसरे मोहश्युं लाज पावे;
पंडितराय कवि धीरविमल तणो,
गुण ‘ज्ञानविमलादि’ गावे.||८||`,
      sa: "",
      en: `Taara muja taara muja taara jinaraaja tun,
Aaja men tohi dedaara paayo;
Sakala sanpatti malyo aaja shubhadina valyo,
Suramani aaja anachinta paayo.||1||
Taaharee aana hun shesha pare shira vahun,
Niravahun bhavabhave chitta shuddhe;
Bhamataan bhavakaanane suratarunee pare,
Tun prabhu! olakhyo deva buddhe.||2||
Athira sansaaramaan saara tuja sevanaa,
Devanaa deva! tuja seva saare;
Shatru ne mitra bhaave behu gane,
Bhaktavatsala sadaa biruda dhaare.||3||
Taaharaa chittamaan daasa buddhe sadaa,
Hun vasun ehavee vaata doore;
Pana muja chittamaan tunhi jo nita vase
To kishun keejiye moha shoore.||4||
Tun krupaakunbha bhagavanta! tun,
Sakala bhavilokane siddhidaataa;
Traana muja praana muja sharana aadhaara tun,
Tun sakhaa maata ne taata bhraataa. ||5||
Aatamaraama abhiraama abhidhaana tuja,
Samarataan daasanaa durita jaave;
Tuja vadana chandramaa nishadina pekhataan,
Nayana chakora aananda paave.||6||
Vishvasenakula kamala dinakara jishyo,
Mana vasyo maata achiraa malhaayo;
Shaanti jinaraaja! shirataaja daataaramaan,
Abhayadaanee shire jaga savaayo.||7||
Laaja jinaraaja! aba daasanee to shire,
Avasare mohashyun laaja paave;
Panditaraaya kavi dheeravimala tano,
Guna ‘jnyaanavimalaadi’ gaave.||8||`,
    },
  },
  {
    id: "tara-nayana-re-pyala",
    type: "bhajan",
    title: {
      gu: "તારા નયના રે પ્યાલા, પ્રેમના ભર્યા છે, દયા રસના ભર્યા છે",
      hi: "तारा नयना रे प्याला, प्रेमना भर्या छे, दया रसना भर्या छे",
      sa: "",
      en: "Tara Nayana Re Pyala",
    },
    text: {
      gu: `તારા નયના રે પ્યાલા, પ્રેમના ભર્યા છે, દયા રસના ભર્યા છે,
અમી છાંટના ભર્યા છે…
તારા નયના રે પ્યાલા, પ્રેમના ભર્યા છે.||૧||
જે કોઈ તાહરી નજરે ચઢી આવે,
કારજ તેં સફળ કર્યા છે.||૨||
પ્રગટ થઈ પાતાળથી પ્રભુ તેં,
જાદવના દુઃખો દૂર કર્યા છે.||૩||
પન્નગપતિ પાવકથી ઉગાર્યો,
જન્મ-મરણ ભય તેહનાં હર્યા છે.||૪||
પતિત પાવન શરણાગત વત્સલ,
દરિશન દીઠે મારા ચિત્તડાં ઠર્યા છે.||૫||
શ્રી શંખેશ્વર પાર્શ્વ જિનેશ્વર,
તુજ પદ પંકજ આજથી ધર્યા છે.||૬||
જે કોઈ તુજને ધ્યાને ધ્યાવે,
અમૃત સુખ તેને રંગથી વર્યા છે.||૭||`,
      hi: `तारा नयना रे प्याला, प्रेमना भर्या छे, दया रसना भर्या छे,
अमी छांटना भर्या छे…
तारा नयना रे प्याला, प्रेमना भर्या छे.||१||
जे कोई ताहरी नजरे चढी आवे,
कारज तें सफळ कर्या छे.||२||
प्रगट थई पाताळथी प्रभु तें,
जादवना दुःखो दूर कर्या छे.||३||
पन्नगपति पावकथी उगार्यो,
जन्म-मरण भय तेहनां हर्या छे.||४||
पतित पावन शरणागत वत्सल,
दरिशन दीठे मारा चित्तडां ठर्या छे.||५||
श्री शंखेश्वर पार्श्व जिनेश्वर,
तुज पद पंकज आजथी धर्या छे.||६||
जे कोई तुजने ध्याने ध्यावे,
अमृत सुख तेने रंगथी वर्या छे.||७||`,
      sa: "",
      en: `Taaraa nayanaa re pyaalaa, premanaa bharyaa chhe, dayaa rasanaa bharyaa chhe,
Amee chhaantanaa bharyaa chhe…
Taaraa nayanaa re pyaalaa, premanaa bharyaa chhe.||1||
Je koee taaharee najare chadhee aave,
Kaaraja ten saphala karyaa chhe.||2||
Pragata thaee paataalathee prabhu ten,
Jaadavanaa dukho doora karyaa chhe.||3||
Pannagapati paavakathee ugaaryo,
Janma-marana bhaya tehanaan haryaa chhe.||4||
Patita paavana sharanaagata vatsala,
Darishana deethe maaraa chittadaan tharyaa chhe.||5||
Shree shankheshvara paarshva jineshvara,
Tuja pada pankaja aajathee dharyaa chhe.||6||
Je koee tujane dhyaane dhyaave,
Amruta sukha tene rangathee varyaa chhe.||7||`,
    },
  },
  {
    id: "tarak-birud-suni-kari",
    type: "bhajan",
    title: {
      gu: "તારક બિરુદ સુણી કરી, હું આવી ઊભો દરબાર",
      hi: "तारक बिरुद सुणी करी, हुं आवी ऊभो दरबार",
      sa: "",
      en: "Tarak Birud Suni Kari",
    },
    text: {
      gu: `તારક બિરુદ સુણી કરી, હું આવી ઊભો દરબાર;
પ્રભુ! ઘણી તાણ ન કીજિયે, મુજ ઉતારો પાર,
શ્રી શ્રેયાંસ સાહિબા…||૧||
કાળાદિક દૂષણ દાખતાં, દાતારપણું કિમ થાય;
જો વિણ અવલંબન તારીએ, જગ સઘળો તો જશ ગાય.||૨||
બાળકને સમજાવવા, કહેશો ભોલામણી વાત;
પણ હઠ કીધી મૂકીશ નહિ, વિણ તાર્યે ત્રિભુવન તાત.||૩||
જો મન તારણનું છે, તો ઢીલ તણું શું કામ;
ચાતક નિર્મૂક દુષણે, થઈ મેઘ ઘટા જગશ્યામ.||૪||
તુજ દરિસણથી તાહરો, હું કહેવાયો જગમાંય;
હવે મુજ કુણ લોપી શકે, બળિયાની ઝાલી બાંય.||૫||
વિષ્ણુકુમાર વાલેસરુ, પ્રભુ સિંહપુરીનો રાય;
લાખ ચોરાસી વરસનું, પ્રભુ પાળ્યું પૂરણ આય.||૬||
ધનુષ એંશી તનું શોભતું, ખડ્ગી લંછન જગદીશ;
હરખ ધરીને વિનવું, “સુમતિવિજય” કવિ શીશ.||૭||`,
      hi: `तारक बिरुद सुणी करी, हुं आवी ऊभो दरबार;
प्रभु! घणी ताण न कीजिये, मुज उतारो पार,
श्री श्रेयांस साहिबा…||१||
काळादिक दूषण दाखतां, दातारपणुं किम थाय;
जो विण अवलंबन तारीए, जग सघळो तो जश गाय.||२||
बाळकने समजाववा, कहेशो भोलामणी वात;
पण हठ कीधी मूकीश नहि, विण तार्ये त्रिभुवन तात.||३||
जो मन तारणनुं छे, तो ढील तणुं शुं काम;
चातक निर्मूक दुषणे, थई मेघ घटा जगश्याम.||४||
तुज दरिसणथी ताहरो, हुं कहेवायो जगमांय;
हवे मुज कुण लोपी शके, बळियानी झाली बांय.||५||
विष्णुकुमार वालेसरु, प्रभु सिंहपुरीनो राय;
लाख चोरासी वरसनुं, प्रभु पाळ्युं पूरण आय.||६||
धनुष एंशी तनुं शोभतुं, खड्गी लंछन जगदीश;
हरख धरीने विनवुं, “सुमतिविजय” कवि शीश.||७||`,
      sa: "",
      en: `Taaraka biruda sunee karee, hun aavee oobho darabaara;
Prabhu! ghanee taana na keejiye, muja utaaro paara,
Shree shreyaansa saahibaa…||1||
Kaalaadika dooshana daakhataan, daataarapanun kima thaaya;
Jo vina avalanbana taareee, jaga saghalo to jasha gaaya.||2||
Baalakane samajaavavaa, kahesho bholaamanee vaata;
Pana hatha keedhee mookeesha nahi, vina taarye tribhuvana taata.||3||
Jo mana taarananun chhe, to dheela tanun shun kaama;
Chaataka nirmooka dushane, thaee megha ghataa jagashyaama.||4||
Tuja darisanathee taaharo, hun kahevaayo jagamaanya;
Have muja kuna lopee shake, baliyaanee jhaalee baanya.||5||
Vishnukumaara vaalesaru, prabhu sinhapureeno raaya;
Laakha choraasee varasanun, prabhu paalyun poorana aaya.||6||
Dhanusha enshee tanun shobhatun, khadgee lanchhana jagadeesha;
Harakha dhareene vinavun, “sumativijaya” kavi sheesha.||7||`,
    },
  },
  {
    id: "tare-vachane-mandu-vidhyu-re",
    type: "bhajan",
    title: {
      gu: "તારે વયણે મનડું વીંધ્યું રે, ગિરુઆ ગુણ દરિયા",
      hi: "तारे वयणे मनडुं वींध्युं रे, गिरुआ गुण दरिया",
      sa: "",
      en: "Tare Vachane Mandu Vidhyu Re",
    },
    text: {
      gu: `તારે વયણે મનડું વીંધ્યું રે, ગિરુઆ ગુણ દરિયા;
તાહરે ચરણે ચિત્તડું ચોંટ્યું રે, મીઠડા ઠાકુરિયા.||૧||
સાકર દ્રાક્ષ થકી પણ અધિકી, મીઠી તાહરી વાણી;
સાંભળતા સંતોષ ન થાયે, અમૃત રસની ખાણી રે.||૨||
વયણ તમારું સાંભળવાને, પ્રભુ આશિક થઈને રહિયે;
મુખડાનો મટકો નીરખતાં, ફરી ફરી ભામણે જઈએ રે.||૩||
ઋદ્ધિવંતા બહુ રાજ્ય તજીને, જે તુજ વયણના રસિયા;
સઘળી વાત તણો રસ છોડી, આવી તુજ ચરણે વસિયા.||૪||
સુરનર મુનિજન જગ જન ભાવિ, ગ્રંથે જે વીરવાણી;
શ્રી વીરજિન તણી સુણી વાણી, બુઝ્યા બહુ ભવિ પ્રાણી.||૫||
ત્રણ ભુવનને પાવન કરવા, નિર્મળ છે વીર વાણી;
“ઉદયરતન’ કહે ભવજલ તરવા, સહિ તે નાવ સમાણી.||૬||`,
      hi: `तारे वयणे मनडुं वींध्युं रे, गिरुआ गुण दरिया;
ताहरे चरणे चित्तडुं चोंट्युं रे, मीठडा ठाकुरिया.||१||
साकर द्राक्ष थकी पण अधिकी, मीठी ताहरी वाणी;
सांभळता संतोष न थाये, अमृत रसनी खाणी रे.||२||
वयण तमारुं सांभळवाने, प्रभु आशिक थईने रहिये;
मुखडानो मटको नीरखतां, फरी फरी भामणे जईए रे.||३||
ऋद्धिवंता बहु राज्य तजीने, जे तुज वयणना रसिया;
सघळी वात तणो रस छोडी, आवी तुज चरणे वसिया.||४||
सुरनर मुनिजन जग जन भावि, ग्रंथे जे वीरवाणी;
श्री वीरजिन तणी सुणी वाणी, बुझ्या बहु भवि प्राणी.||५||
त्रण भुवनने पावन करवा, निर्मळ छे वीर वाणी;
“उदयरतन’ कहे भवजल तरवा, सहि ते नाव समाणी.||६||`,
      sa: "",
      en: `Taare vayane manadun veendhyun re, giruaa guna dariyaa;
Taahare charane chittadun chontyun re, meethadaa thaakuriyaa.||1||
Saakara draaksha thakee pana adhikee, meethee taaharee vaanee;
Saanbhalataa santosha na thaaye, amruta rasanee khaanee re.||2||
Vayana tamaarun saanbhalavaane, prabhu aashika thaeene rahiye;
Mukhadaano matako neerakhataan, pharee pharee bhaamane jaeee re.||3||
Ruddhivantaa bahu raajya tajeene, je tuja vayananaa rasiyaa;
Saghalee vaata tano rasa chhodee, aavee tuja charane vasiyaa.||4||
Suranara munijana jaga jana bhaavi, granthe je veeravaanee;
Shree veerajina tanee sunee vaanee, bujhyaa bahu bhavi praanee.||5||
Trana bhuvanane paavana karavaa, nirmala chhe veera vaanee;
“udayaratana’ kahe bhavajala taravaa, sahi te naava samaanee.||6||`,
    },
  },
  {
    id: "tari-murti-nu-nahi-mul-re",
    type: "bhajan",
    title: {
      gu: "તારી મૂરતિનું નહિ મૂલ રે, લાગે મને પ્યારી રે",
      hi: "तारी मूरतिनुं नहि मूल रे, लागे मने प्यारी रे",
      sa: "",
      en: "Tari Murti Nu Nahi Mul Re",
    },
    text: {
      gu: `તારી મૂરતિનું નહિ મૂલ રે, લાગે મને પ્યારી રે;
તારી આંખડીએ મન મોહ્યું રે, જાઉં બલિહારી રે.||૧||
ત્રણ ભુવનનું તત્ત્વ લહીને, નિર્મળ તુંહી નિપાયો રે;
જગ સઘળો નિરખીને જોતાં, તારી હોડે કો નહિ આયો રે.||૨||
ત્રિભુવન તિલક સમોવડ તારી, સુંદર સુરતિ દીસે રે;
કોડી કંદર્પ સમ રૂપ નિહાળી, સુર નરના મન હીંસે રે.||૩||
જ્યોતિ સ્વરુપી તું જિન દીઠો, તેને ન ગમે બીજું કાંઈ રે;
જ્યાં ત્યાં પૂરણ સઘલે, દીસે તુંહી જ તુંહી રે.||૪||
તુજ મુખ જોવાને રઢ લાગી, તેને ન ગમે ઘરનો ધંધો રે;
આળપંપાળ સવિ અળગી મૂકી, તુજશું માંડ્યો પ્રતિબંધો રે.||૫||
ભવસાગરમાં ભમતાં ભમતાં, પ્રભુ પાર્શ્વનો પામ્યો આરો રે;
કહે બાંહ્ય ગ્રહીને, સેવક પાર ઉતારો રે.||૬||`,
      hi: `तारी मूरतिनुं नहि मूल रे, लागे मने प्यारी रे;
तारी आंखडीए मन मोह्युं रे, जाउं बलिहारी रे.||१||
त्रण भुवननुं तत्त्व लहीने, निर्मळ तुंही निपायो रे;
जग सघळो निरखीने जोतां, तारी होडे को नहि आयो रे.||२||
त्रिभुवन तिलक समोवड तारी, सुंदर सुरति दीसे रे;
कोडी कंदर्प सम रूप निहाळी, सुर नरना मन हींसे रे.||३||
ज्योति स्वरुपी तुं जिन दीठो, तेने न गमे बीजुं कांई रे;
ज्यां त्यां पूरण सघले, दीसे तुंही ज तुंही रे.||४||
तुज मुख जोवाने रढ लागी, तेने न गमे घरनो धंधो रे;
आळपंपाळ सवि अळगी मूकी, तुजशुं मांड्यो प्रतिबंधो रे.||५||
भवसागरमां भमतां भमतां, प्रभु पार्श्वनो पाम्यो आरो रे;
कहे बांह्य ग्रहीने, सेवक पार उतारो रे.||६||`,
      sa: "",
      en: `Taaree mooratinun nahi moola re, laage mane pyaaree re;
Taaree aankhadeee mana mohyun re, jaaun balihaaree re.||1||
Trana bhuvananun tattva laheene, nirmala tunhee nipaayo re;
Jaga saghalo nirakheene jotaan, taaree hode ko nahi aayo re.||2||
Tribhuvana tilaka samovada taaree, sundara surati deese re;
Kodee kandarpa sama roopa nihaalee, sura naranaa mana heense re.||3||
Jyoti svarupee tun jina deetho, tene na game beejun kaanee re;
Jyaan tyaan poorana saghale, deese tunhee ja tunhee re.||4||
Tuja mukha jovaane radha laagee, tene na game gharano dhandho re;
Aalapanpaala savi alagee mookee, tujashun maandyo pratibandho re.||5||
Bhavasaagaramaan bhamataan bhamataan, prabhu paarshvano paamyo aaro re;
Kahe baanhya graheene, sevaka paara utaaro re.||6||`,
    },
  },
  {
    id: "tari-murti-ye-man-mohyu-re",
    type: "bhajan",
    title: {
      gu: "તારી મૂરતિએ મન મોહ્યું રે, મનના મોહનીયા!",
      hi: "तारी मूरतिए मन मोह्युं रे, मनना मोहनीया!",
      sa: "",
      en: "Tari Murti Ye Man Mohyu Re",
    },
    text: {
      gu: `તારી મૂરતિએ મન મોહ્યું રે, મનના મોહનીયા!
તારી સૂરતિએ જગ સોહ્યું રે, જગના જીવનીયા!
તુમ જોતાં સવિ દૂરમતિ વીસરી, દિન રાતડી નવી જાણી;
પ્રભુ ગુણગણ સાંકળશું બાંધ્યું, ચંચળ ચિત્તડું તાણી રે.||૧||
મનના૦ ।।૧ ।। પહેલાં તો એક કેવલ હરખે, હેજાળુ થઈ હળિયો;
ગુણ જાણીને રુપે મિલિયો, અભ્યંતર જઈ ભળિયો. મનના૦।। ૨ ।|
। વીતરાગ ઈમ જસ નિસુણીને, રાગી રાગ કરેહ;
આપ અરુપી રાગ નિમિત્તે, દાસ અરુપ ધરેહ રે.મનના૦ ||૩ ।।
શ્રી સીમંધર! તું જગબંધુ, સુંદર તાહરી વાણી;
મંદર ભૂધર અધિક ધીરજ ધર, વંદે તે ધન્ય પ્રાણી રે. મનના ।।૪।।
શ્રી શ્રેયાંસ નરેસર નંદન, ચંદન શીતલ વાણી;
સત્યકી માતા વૃષભ લંછન,
‘જ્ઞાનવિમલ’ ગુણખાણી રે. મનના૦ ||૫||`,
      hi: `तारी मूरतिए मन मोह्युं रे, मनना मोहनीया!
तारी सूरतिए जग सोह्युं रे, जगना जीवनीया!
तुम जोतां सवि दूरमति वीसरी, दिन रातडी नवी जाणी;
प्रभु गुणगण सांकळशुं बांध्युं, चंचळ चित्तडुं ताणी रे.||१||
मनना० ।।१ ।। पहेलां तो एक केवल हरखे, हेजाळु थई हळियो;
गुण जाणीने रुपे मिलियो, अभ्यंतर जई भळियो. मनना०।। २ ।|
। वीतराग ईम जस निसुणीने, रागी राग करेह;
आप अरुपी राग निमित्ते, दास अरुप धरेह रे.मनना० ||३ ।।
श्री सीमंधर! तुं जगबंधु, सुंदर ताहरी वाणी;
मंदर भूधर अधिक धीरज धर, वंदे ते धन्य प्राणी रे. मनना ।।४।।
श्री श्रेयांस नरेसर नंदन, चंदन शीतल वाणी;
सत्यकी माता वृषभ लंछन,
‘ज्ञानविमल’ गुणखाणी रे. मनना० ||५||`,
      sa: "",
      en: `Taaree mooratie mana mohyun re, mananaa mohaneeyaa!
Taaree sooratie jaga sohyun re, jaganaa jeevaneeyaa!
Tuma jotaan savi dooramati veesaree, dina raatadee navee jaanee;
Prabhu gunagana saankalashun baandhyun, chanchala chittadun taanee re.||1||
Mananaa0 ||1 || pahelaan to eka kevala harakhe, hejaalu thaee haliyo;
Guna jaaneene rupe miliyo, abhyantara jaee bhaliyo. mananaa0|| 2 ||
| veetaraaga eema jasa nisuneene, raagee raaga kareha;
Aapa arupee raaga nimitte, daasa arupa dhareha re.mananaa0 ||3 ||
Shree seemandhara! tun jagabandhu, sundara taaharee vaanee;
Mandara bhoodhara adhika dheeraja dhara, vande te dhanya praanee re. mananaa ||4||
Shree shreyaansa naresara nandana, chandana sheetala vaanee;
Satyakee maataa vrushabha lanchhana,
‘jnyaanavimala’ gunakhaanee re. mananaa0 ||5||`,
    },
  },
  {
    id: "tarjo-din-dayal-vasupujya",
    type: "bhajan",
    title: {
      gu: "તારજો દીન દયાળ વાસુપૂજ્ય, તારજો દીન દયાળ વાસુપૂજ્ય",
      hi: "तारजो दीन दयाळ वासुपूज्य, तारजो दीन दयाळ वासुपूज्य",
      sa: "",
      en: "Tarjo Din Dayal Vasupujya",
    },
    text: {
      gu: `તારજો દીન દયાળ વાસુપૂજ્ય, તારજો દીન દયાળ વાસુપૂજ્ય;
મોહની રચના નવી નવી દેખી, તેહમાં ગયો મારો કાળ. તા૦ ।।૧।।
પૂરવ પુણ્યે પ્રભુ મળ્યાથી,
થાય આતમ ઉદ્ધાર. તા૦ ||૨ ।।
દુષમ કાળે જીવ પ્રમાદી,
શ્રદ્ધા નથી લગાર..‌‌ ता० ॥३॥
નિર્મોહી વિતરાગ બન્યા છો,
લેજો સેવક સંભાળ.||૪||
‘માન’ કહે શુદ્ધ શ્રદ્ધા રાખી,
ભક્તિ આપે સુખકાર.||૫||`,
      hi: `तारजो दीन दयाळ वासुपूज्य, तारजो दीन दयाळ वासुपूज्य;
मोहनी रचना नवी नवी देखी, तेहमां गयो मारो काळ. ता० ।।१।।
पूरव पुण्ये प्रभु मळ्याथी,
थाय आतम उद्धार. ता० ||२ ।।
दुषम काळे जीव प्रमादी,
श्रद्धा नथी लगार..‌‌ ता० ॥३॥
निर्मोही वितराग बन्या छो,
लेजो सेवक संभाळ.||४||
‘मान’ कहे शुद्ध श्रद्धा राखी,
भक्ति आपे सुखकार.||५||`,
      sa: "",
      en: `Taarajo deena dayaala vaasupoojya, taarajo deena dayaala vaasupoojya;
Mohanee rachanaa navee navee dekhee, tehamaan gayo maaro kaala. taa0 ||1||
Poorava punye prabhu malyaathee,
Thaaya aatama uddhaara. taa0 ||2 ||
Dushama kaale jeeva pramaadee,
Shraddhaa nathee lagaara..‌‌ ता0 ||3||
Nirmohee vitaraaga banyaa chho,
Lejo sevaka sanbhaala.||4||
‘maana’ kahe shuddha shraddhaa raakhee,
Bhakti aape sukhakaara.||5||`,
    },
  },
  {
    id: "tero-darshan-man-bhayo",
    type: "bhajan",
    title: {
      gu: "તેરો દરશ મન ભાયો ચરમ જિન! તેરો દરશ મન ભાયો..",
      hi: "तेरो दरश मन भायो चरम जिन! तेरो दरश मन भायो..",
      sa: "",
      en: "Tero Darshan Man Bhayo",
    },
    text: {
      gu: `તેરો દરશ મન ભાયો ચરમ જિન! તેરો દરશ મન ભાયો..
તું પ્રભુ કરુણારસમય સ્વામી, ગર્ભ મેં શોક મિટાયો;
ત્રિશલા માતા કો આનંદ દીનો, જ્ઞાતનંદન જગ ગાયો.||૧||
વરસીદાન દઈ રોરતા વારી, સંયમ રાજ ઉપાયો;
દિન હીનતા કબહું ન તેરે, સચ્ચિદાનંદ રાયો.||૨||
કરુણા મંથર નયને નિહાળી, ચંડકૌશિક સુખદાયો;
આનંદ રસભર સ્વર્ગે પહુંતો, ઐસો કૌન કરાયો.||૩||
રત્નકંબલ દ્વિજવર કો દીનો, ગોશાલક ઉદ્ધરાયો;
જમાલી પન્નર ભવ અંતે, મહાનંદ પદ પાયો.||૪||
મત્સરી ગૌતમ કો ગણધારી, શાસન નાયક ઠાયો;
તેરે અવદાત ગિનું જગ કે તે, તું કરુણાસિંધુ સોહાયો.||૫||
હું બાળક શરણાગત તેરો, મુજકો ક્યું વીસરાયો;
તેરે વિરહ સે હું દુઃખ પામું, કર મુજ “આતમરાયો.||૬||`,
      hi: `तेरो दरश मन भायो चरम जिन! तेरो दरश मन भायो..
तुं प्रभु करुणारसमय स्वामी, गर्भ में शोक मिटायो;
त्रिशला माता को आनंद दीनो, ज्ञातनंदन जग गायो.||१||
वरसीदान दई रोरता वारी, संयम राज उपायो;
दिन हीनता कबहुं न तेरे, सच्चिदानंद रायो.||२||
करुणा मंथर नयने निहाळी, चंडकौशिक सुखदायो;
आनंद रसभर स्वर्गे पहुंतो, ऐसो कौन करायो.||३||
रत्नकंबल द्विजवर को दीनो, गोशालक उद्धरायो;
जमाली पन्नर भव अंते, महानंद पद पायो.||४||
मत्सरी गौतम को गणधारी, शासन नायक ठायो;
तेरे अवदात गिनुं जग के ते, तुं करुणासिंधु सोहायो.||५||
हुं बाळक शरणागत तेरो, मुजको क्युं वीसरायो;
तेरे विरह से हुं दुःख पामुं, कर मुज “आतमरायो.||६||`,
      sa: "",
      en: `Tero darasha mana bhaayo charama jina! tero darasha mana bhaayo..
Tun prabhu karunaarasamaya svaamee, garbha men shoka mitaayo;
Trishalaa maataa ko aananda deeno, jnyaatanandana jaga gaayo.||1||
Varaseedaana daee rorataa vaaree, sanyama raaja upaayo;
Dina heenataa kabahun na tere, sachchidaananda raayo.||2||
Karunaa manthara nayane nihaalee, chandakaushika sukhadaayo;
Aananda rasabhara svarge pahunto, aiso kauna karaayo.||3||
Ratnakanbala dvijavara ko deeno, goshaalaka uddharaayo;
Jamaalee pannara bhava ante, mahaananda pada paayo.||4||
Matsaree gautama ko ganadhaaree, shaasana naayaka thaayo;
Tere avadaata ginun jaga ke te, tun karunaasindhu sohaayo.||5||
Hun baalaka sharanaagata tero, mujako kyun veesaraayo;
Tere viraha se hun dukha paamun, kara muja “aatamaraayo.||6||`,
    },
  },
  {
    id: "thasu-prem-banyo-che-aaj",
    type: "bhajan",
    title: {
      gu: "થાશું પ્રેમ બન્યો છે રાજ, નિરવહેશો તો લેખે",
      hi: "थाशुं प्रेम बन्यो छे राज, निरवहेशो तो लेखे",
      sa: "",
      en: "Thasu Prem Banyo Che Aaj",
    },
    text: {
      gu: `થાશું પ્રેમ બન્યો છે રાજ, નિરવહેશો તો લેખે;
મેં રાગી પ્રભુ! થેં છો નિરાગી, અણજુગતે હોય હાંસી;
એક પખો જે નેહ નિર્વહેશો,.તેમાં કી શાબાશી. ॥੧॥
નિરાગી સેવે કાંઈ હોવે, ઇમ મનમેં નવિ આણું;
ફળ અચેતન પણ જિમ સુરમણિ, તિમ તુમ ભગતિ પ્રમાણું.||૨||
ચંદન શીતલતા ઉપજાવે, અગ્નિ તે શીત મિટાવે;
સેવકનાં તિમ દુઃખ ગમાવે, પ્રભુ ગુણ પ્રેમ સ્વભાવે. ॥३॥
વ્યસન ઉદય જલધિ અનુહરે, શશિને નેહ સંબંધે;
અણસંબંધે કુમુદ અણુહરે, શુદ્ધ સ્વભાવ પ્રબંધે.॥४॥
દેવ અનેરા તુમથી છોટા, થેં જગમેં અધિકેરા;
‘જશ’ કહે ધર્મ જિનેસર થાશું, દિલ માન્યા હે મેરા. ॥५॥`,
      hi: `थाशुं प्रेम बन्यो छे राज, निरवहेशो तो लेखे;
में रागी प्रभु! थें छो निरागी, अणजुगते होय हांसी;
एक पखो जे नेह निर्वहेशो,.तेमां की शाबाशी. ॥੧॥
निरागी सेवे कांई होवे, इम मनमें नवि आणुं;
फळ अचेतन पण जिम सुरमणि, तिम तुम भगति प्रमाणुं.||२||
चंदन शीतलता उपजावे, अग्नि ते शीत मिटावे;
सेवकनां तिम दुःख गमावे, प्रभु गुण प्रेम स्वभावे. ॥३॥
व्यसन उदय जलधि अनुहरे, शशिने नेह संबंधे;
अणसंबंधे कुमुद अणुहरे, शुद्ध स्वभाव प्रबंधे.॥४॥
देव अनेरा तुमथी छोटा, थें जगमें अधिकेरा;
‘जश’ कहे धर्म जिनेसर थाशुं, दिल मान्या हे मेरा. ॥५॥`,
      sa: "",
      en: `Thaashun prema banyo chhe raaja, niravahesho to lekhe;
Men raagee prabhu! then chho niraagee, anajugate hoya haansee;
Eka pakho je neha nirvahesho,.temaan kee shaabaashee. ||1||
Niraagee seve kaanee hove, ima manamen navi aanun;
Phala achetana pana jima suramani, tima tuma bhagati pramaanun.||2||
Chandana sheetalataa upajaave, agni te sheeta mitaave;
Sevakanaan tima dukha gamaave, prabhu guna prema svabhaave. ||3||
Vyasana udaya jaladhi anuhare, shashine neha sanbandhe;
Anasanbandhe kumuda anuhare, shuddha svabhaava prabandhe.||4||
Deva aneraa tumathee chhotaa, then jagamen adhikeraa;
‘jasha’ kahe dharma jinesara thaashun, dila maanyaa he meraa. ||5||`,
    },
  },
  {
    id: "to-bin-aur-na-jayu",
    type: "bhajan",
    title: {
      gu: "તો બિન ઔર ન જાચું, જિણંદરાય! તો બિન ઔર ન જાચું; જિ૦!",
      hi: "तो बिन और न जाचुं, जिणंदराय! तो बिन और न जाचुं; जि०!",
      sa: "",
      en: "To Bin Aur Na Jayu",
    },
    text: {
      gu: `તો બિન ઔર ન જાચું, જિણંદરાય! તો બિન ઔર ન જાચું; જિ૦!
મેં મેરો મન નિશ્ચય કીનો, એહમાં કછું નહિ કાચું. ॥੧॥
તુમ ચરણકમલ પર પંકજ મન મેરો, અનુભવ રસભર ચાખું;
અંતરંગ અમૃત રસ ચાખો, એહ વચન મન સાચું. ॥२॥
“જસ’ પ્રભુ મહારસ પાયો, અવર રસે નહિ રાચું;
અંતરંગ ફરસ્યો‌ દરસન તેરી, તુજ ગુણ રસ સંગ માચું. ॥3॥`,
      hi: `तो बिन और न जाचुं, जिणंदराय! तो बिन और न जाचुं; जि०!
में मेरो मन निश्चय कीनो, एहमां कछुं नहि काचुं. ॥੧॥
तुम चरणकमल पर पंकज मन मेरो, अनुभव रसभर चाखुं;
अंतरंग अमृत रस चाखो, एह वचन मन साचुं. ॥२॥
“जस’ प्रभु महारस पायो, अवर रसे नहि राचुं;
अंतरंग फरस्यो‌ दरसन तेरी, तुज गुण रस संग माचुं. ॥3॥`,
      sa: "",
      en: `To bina aura na jaachun, jinandaraaya! to bina aura na jaachun; ji0!
Men mero mana nishchaya keeno, ehamaan kachhun nahi kaachun. ||1||
Tuma charanakamala para pankaja mana mero, anubhava rasabhara chaakhun;
Antaranga amruta rasa chaakho, eha vachana mana saachun. ||2||
“jasa’ prabhu mahaarasa paayo, avara rase nahi raachun;
Antaranga pharasyo‌ darasana teree, tuja guna rasa sanga maachun. ||3||`,
    },
  },
  {
    id: "to-shu-prit-bhandhani",
    type: "bhajan",
    title: {
      gu: "તો શું પ્રીત બંધાણી જગતગુરુ! તો શું પ્રીત બંધાણી",
      hi: "तो शुं प्रीत बंधाणी जगतगुरु! तो शुं प्रीत बंधाणी",
      sa: "",
      en: "To Shu Prit Bhandhani",
    },
    text: {
      gu: `તો શું પ્રીત બંધાણી જગતગુરુ! તો શું પ્રીત બંધાણી;
વેદ અરથ કહી મોં બ્રાહ્મણકું, ખિણમેં કીધો ગુણ ખાણી. ॥੧॥
બાલક પરે મેં જે જે પૂછ્યું, તે ભાખ્યું હિત આણી;
મુજ કાલાને કુણ સમજાવે, તો બિન મધુરી વાણી.॥२॥
વયણ સુધારસ વરસી વસુધા, પાવન ખેત સમાણી;
નર નારકી તિરિ પ્રમોદિત બોધિત, તોહિ ગુણમણી ખાણી. ।।૩।।
પાઉં પરું અબ જાઈ, કિનકી પકરું પાની;
કુણ મુજ ગોયમ કહી બોલાવે, તો સમ કુણ વખાણી. ॥४॥
અઈમુત્તો આયો મુજ સાથે, રમતો કાચલી પાણી;
કેવલ કમલા ઉસકું દિની, યાહિ કિરતી નહિ છાની. ॥५॥
ચઉદ સહસ અણગારમાં, મોટો કીનો કાહું પિછાની;
અંતિમ અવસર કરુણા સાગર, દૂરે ભેજ્યો જાણી. ॥૬॥
ભાગ ન માંગત સ્વામી, રહેત ન છેડો તાણી;
બિચમેં છોડ ગયે શિવમંદિર, લોકમાં હોત કહાણી. ॥७॥
ખામી કુછ ખિજમત મેં કીની, તાકી યાહિ કમાણી;
સ્વામી ભાવ લહે સુસેવક, યાહિ વાત નિપાની.॥८॥
વીતરાગ ભાવે ચેતનતા, અંતર મૂરત ઠરાણી;
“ખિમાવિજય’ જિન ગૌતમ ગણધર,
જ્યોતિશું જ્યોતિ મિલાણી. ।।૯।।`,
      hi: `तो शुं प्रीत बंधाणी जगतगुरु! तो शुं प्रीत बंधाणी;
वेद अरथ कही मों ब्राह्मणकुं, खिणमें कीधो गुण खाणी. ॥੧॥
बालक परे में जे जे पूछ्युं, ते भाख्युं हित आणी;
मुज कालाने कुण समजावे, तो बिन मधुरी वाणी.॥२॥
वयण सुधारस वरसी वसुधा, पावन खेत समाणी;
नर नारकी तिरि प्रमोदित बोधित, तोहि गुणमणी खाणी. ।।३।।
पाउं परुं अब जाई, किनकी पकरुं पानी;
कुण मुज गोयम कही बोलावे, तो सम कुण वखाणी. ॥४॥
अईमुत्तो आयो मुज साथे, रमतो काचली पाणी;
केवल कमला उसकुं दिनी, याहि किरती नहि छानी. ॥५॥
चउद सहस अणगारमां, मोटो कीनो काहुं पिछानी;
अंतिम अवसर करुणा सागर, दूरे भेज्यो जाणी. ॥६॥
भाग न मांगत स्वामी, रहेत न छेडो ताणी;
बिचमें छोड गये शिवमंदिर, लोकमां होत कहाणी. ॥७॥
खामी कुछ खिजमत में कीनी, ताकी याहि कमाणी;
स्वामी भाव लहे सुसेवक, याहि वात निपानी.॥८॥
वीतराग भावे चेतनता, अंतर मूरत ठराणी;
“खिमाविजय’ जिन गौतम गणधर,
ज्योतिशुं ज्योति मिलाणी. ।।९।।`,
      sa: "",
      en: `To shun preeta bandhaanee jagataguru! to shun preeta bandhaanee;
Veda aratha kahee mon braahmanakun, khinamen keedho guna khaanee. ||1||
Baalaka pare men je je poochhyun, te bhaakhyun hita aanee;
Muja kaalaane kuna samajaave, to bina madhuree vaanee.||2||
Vayana sudhaarasa varasee vasudhaa, paavana kheta samaanee;
Nara naarakee tiri pramodita bodhita, tohi gunamanee khaanee. ||3||
Paaun parun aba jaaee, kinakee pakarun paanee;
Kuna muja goyama kahee bolaave, to sama kuna vakhaanee. ||4||
Aeemutto aayo muja saathe, ramato kaachalee paanee;
Kevala kamalaa usakun dinee, yaahi kiratee nahi chhaanee. ||5||
Chauda sahasa anagaaramaan, moto keeno kaahun pichhaanee;
Antima avasara karunaa saagara, doore bhejyo jaanee. ||6||
Bhaaga na maangata svaamee, raheta na chhedo taanee;
Bichamen chhoda gaye shivamandira, lokamaan hota kahaanee. ||7||
Khaamee kuchha khijamata men keenee, taakee yaahi kamaanee;
Svaamee bhaava lahe susevaka, yaahi vaata nipaanee.||8||
Veetaraaga bhaave chetanataa, antara moorata tharaanee;
“khimaavijaya’ jina gautama ganadhara,
Jyotishun jyoti milaanee. ||9||`,
    },
  },
  {
    id: "toran-aavi-rath-feri-gaya-re-ha",
    type: "bhajan",
    title: {
      gu: "તોરણ આવી રથ ફેરી ગયા રે હાં, પશુઆં દેઈ શિર દોષ મેરે વાલમા",
      hi: "तोरण आवी रथ फेरी गया रे हां, पशुआं देई शिर दोष मेरे वालमा",
      sa: "",
      en: "Toran Aavi Rath Feri Gaya Re Ha",
    },
    text: {
      gu: `તોરણ આવી રથ ફેરી ગયા રે હાં, પશુઆં દેઈ શિર દોષ મેરે વાલમા;
નવ ભવ નેહ નિવારિયો રે હાં, શો જોઈ આવ્યા જોષ. મેરે૦ ।।૧ ।।
ચંદ્ર કલંકી જેહથી રે હાં, રામને સીતા વિયોગ;
મેરે૦ કુરંગને વયણડે રે હાં, પતિ આવે કુણ લોગ. મેરે૦ ।।૨ ।|
ઉતારી હું ચિત્તથી રે હાં, મુક્તિ ધુતારી હેત;
મેરે૦ સિદ્ધ અનંતે ભોગવી રે હાં, તેહશું કવણ સંકેત. मेरे०॥३॥
પ્રીત કરંતા સોહિલી રે હાં, નિર્વહંતા જંજાલ;
મેરે૦ જેહવો વ્યાલ ખેલાવવો રે હાં, જેહવી અગનની ઝાલ. मेरे०॥૪॥
મેરે૦।।૪ ।। જો વિવાહ અવસર દિયો રે હાં, હાથ ઉપર નવિ હાથ;
મેરે૦ દીક્ષા અવસર દિજીયે રે હાં, શિર ઉપર જગનાથ. મેરે૦ ||પે ાાાા
ઈમ વલવલતી રાજુલ ગઈ રે હાં, નેમિ કને વ્રત લીધ;
મેરે૦ વાચક ‘યશ’ કહે પ્રણમીએ રે હાં,
એ દંપતી દોય સિદ્ધ. મેરે૦||૬||`,
      hi: `तोरण आवी रथ फेरी गया रे हां, पशुआं देई शिर दोष मेरे वालमा;
नव भव नेह निवारियो रे हां, शो जोई आव्या जोष. मेरे० ।।१ ।।
चंद्र कलंकी जेहथी रे हां, रामने सीता वियोग;
मेरे० कुरंगने वयणडे रे हां, पति आवे कुण लोग. मेरे० ।।२ ।|
उतारी हुं चित्तथी रे हां, मुक्ति धुतारी हेत;
मेरे० सिद्ध अनंते भोगवी रे हां, तेहशुं कवण संकेत. मेरे०॥३॥
प्रीत करंता सोहिली रे हां, निर्वहंता जंजाल;
मेरे० जेहवो व्याल खेलाववो रे हां, जेहवी अगननी झाल. मेरे०॥४॥
मेरे०।।४ ।। जो विवाह अवसर दियो रे हां, हाथ उपर नवि हाथ;
मेरे० दीक्षा अवसर दिजीये रे हां, शिर उपर जगनाथ. मेरे० ||पे ाााा
ईम वलवलती राजुल गई रे हां, नेमि कने व्रत लीध;
मेरे० वाचक ‘यश’ कहे प्रणमीए रे हां,
ए दंपती दोय सिद्ध. मेरे०||६||`,
      sa: "",
      en: `Torana aavee ratha pheree gayaa re haan, pashuaan deee shira dosha mere vaalamaa;
Nava bhava neha nivaariyo re haan, sho joee aavyaa josha. mere0 ||1 ||
Chandra kalankee jehathee re haan, raamane seetaa viyoga;
Mere0 kurangane vayanade re haan, pati aave kuna loga. mere0 ||2 ||
Utaaree hun chittathee re haan, mukti dhutaaree heta;
Mere0 siddha anante bhogavee re haan, tehashun kavana sanketa. मेरे0||3||
Preeta karantaa sohilee re haan, nirvahantaa janjaala;
Mere0 jehavo vyaala khelaavavo re haan, jehavee agananee jhaala. मेरे0||4||
Mere0||4 || jo vivaaha avasara diyo re haan, haatha upara navi haatha;
Mere0 deekshaa avasara dijeeye re haan, shira upara jaganaatha. mere0 ||pe ાાાા
Eema valavalatee raajula gaee re haan, nemi kane vrata leedha;
Mere0 vaachaka ‘yasha’ kahe pranameee re haan,
E danpatee doya siddha. mere0||6||`,
    },
  },
  {
    id: "tu-gat-meri-jane-jinaji",
    type: "bhajan",
    title: {
      gu: "તું ગત મેરી જાને જિનજી!……… તું ગત મેરી જાને………!",
      hi: "तुं गत मेरी जाने जिनजी!……… तुं गत मेरी जाने………!",
      sa: "",
      en: "Tu Gat Meri Jane Jinaji",
    },
    text: {
      gu: `તું ગત મેરી જાને જિનજી!……… તું ગત મેરી જાને………!
મેં જગવાસી સહી દુઃખ રાશિ, સો તો તુમસે ન છાને… ॥१॥
સબ લોકન મેં જો જિઉંકી સત્તા,
દેખત દરિસન જ્ઞાને……… ॥२॥
ઈન કારણ કહા તુમસે કહેવો,
કહીયે તો ન સુણો કાને.. ॥3॥
અપનો હી જ જાન નિવાજસ કીજે,
દેઈ સમકિત દાને… ॥४॥
માનો અજિત પ્રભુ અરજ હૈ ઈતની,
જ્યું અમૃત’ મન માને… ॥૫॥`,
      hi: `तुं गत मेरी जाने जिनजी!……… तुं गत मेरी जाने………!
में जगवासी सही दुःख राशि, सो तो तुमसे न छाने… ॥१॥
सब लोकन में जो जिउंकी सत्ता,
देखत दरिसन ज्ञाने……… ॥२॥
ईन कारण कहा तुमसे कहेवो,
कहीये तो न सुणो काने.. ॥3॥
अपनो ही ज जान निवाजस कीजे,
देई समकित दाने… ॥४॥
मानो अजित प्रभु अरज है ईतनी,
ज्युं अमृत’ मन माने… ॥५॥`,
      sa: "",
      en: `Tun gata meree jaane jinajee!……… tun gata meree jaane………!
Men jagavaasee sahee dukha raashi, so to tumase na chhaane… ||1||
Saba lokana men jo jiunkee sattaa,
Dekhata darisana jnyaane……… ||2||
Eena kaarana kahaa tumase kahevo,
Kaheeye to na suno kaane.. ||3||
Apano hee ja jaana nivaajasa keeje,
Deee samakita daane… ||4||
Maano ajita prabhu araja hai eetanee,
Jyun amruta’ mana maane… ||5||`,
    },
  },
  {
    id: "tu-parangat-tu-parmeshwar",
    type: "bhajan",
    title: {
      gu: "તું પારંગત તું પરમેશ્વર, વાલા મારા તું પરમારથ વેદી રે",
      hi: "तुं पारंगत तुं परमेश्वर, वाला मारा तुं परमारथ वेदी रे",
      sa: "",
      en: "Tu Parangat Tu Parmeshwar",
    },
    text: {
      gu: `તું પારંગત તું પરમેશ્વર, વાલા મારા તું પરમારથ વેદી રે;
તું પરમાતમ તું પુરુષોત્તમ, તુંહિ અછેદી અવેદી રે,
મનના મોહનિયા; તાહરી કીકી કામણગારી રે,
જગના સોહનિયા. ॥੧॥
યોગી અયોગી ભોગી અભોગી, વા૦ તુંહિ જ કામી અકામી રે;
તુંહિ અનાથ નાથ સહુ જગનો, આતમ સંપદ રામી રે. ॥२॥
એક અસંખ્ય અનંત અનુચર, વા૦ અકલ સકલ અવિનાશી રે;
અરસ અવર્ણ અગંધ અફરસી, તું હિ અપાશી અનાશી રે. ॥३॥
મુખ પંકજ ભ્રમરી પરે અમરી, વા૦ તું હિ સદા બ્રહ્મચારી રે
સમવસરણ લીલા અધિકારી, તું હિ જ સંયમધારી રે.||૪||
અચિરાનંદન અચરિજ એહી, વા૦ કહણીમાંહિ ન આવે રે;
‘ક્ષમાવિજય’ જિન વયણ સુધારસ, પીવે તેહિ જ પાવે રે. ॥५॥`,
      hi: `तुं पारंगत तुं परमेश्वर, वाला मारा तुं परमारथ वेदी रे;
तुं परमातम तुं पुरुषोत्तम, तुंहि अछेदी अवेदी रे,
मनना मोहनिया; ताहरी कीकी कामणगारी रे,
जगना सोहनिया. ॥੧॥
योगी अयोगी भोगी अभोगी, वा० तुंहि ज कामी अकामी रे;
तुंहि अनाथ नाथ सहु जगनो, आतम संपद रामी रे. ॥२॥
एक असंख्य अनंत अनुचर, वा० अकल सकल अविनाशी रे;
अरस अवर्ण अगंध अफरसी, तुं हि अपाशी अनाशी रे. ॥३॥
मुख पंकज भ्रमरी परे अमरी, वा० तुं हि सदा ब्रह्मचारी रे
समवसरण लीला अधिकारी, तुं हि ज संयमधारी रे.||४||
अचिरानंदन अचरिज एही, वा० कहणीमांहि न आवे रे;
‘क्षमाविजय’ जिन वयण सुधारस, पीवे तेहि ज पावे रे. ॥५॥`,
      sa: "",
      en: `Tun paarangata tun parameshvara, vaalaa maaraa tun paramaaratha vedee re;
Tun paramaatama tun purushottama, tunhi achhedee avedee re,
Mananaa mohaniyaa; taaharee keekee kaamanagaaree re,
Jaganaa sohaniyaa. ||1||
Yogee ayogee bhogee abhogee, vaa0 tunhi ja kaamee akaamee re;
Tunhi anaatha naatha sahu jagano, aatama sanpada raamee re. ||2||
Eka asankhya ananta anuchara, vaa0 akala sakala avinaashee re;
Arasa avarna agandha apharasee, tun hi apaashee anaashee re. ||3||
Mukha pankaja bhramaree pare amaree, vaa0 tun hi sadaa brahmachaaree re
Samavasarana leelaa adhikaaree, tun hi ja sanyamadhaaree re.||4||
Achiraanandana acharija ehee, vaa0 kahaneemaanhi na aave re;
‘kshamaavijaya’ jina vayana sudhaarasa, peeve tehi ja paave re. ||5||`,
    },
  },
  {
    id: "tu-prabhu-mahro-hu-prabhu-tahro",
    type: "bhajan",
    title: {
      gu: "તું પ્રભુ મારો હું પ્રભુ તારો, ક્ષણ એક મુજને નાહિ વિસારો",
      hi: "तुं प्रभु मारो हुं प्रभु तारो, क्षण एक मुजने नाहि विसारो",
      sa: "",
      en: "Tu Prabhu Mahro Hu Prabhu Tahro",
    },
    text: {
      gu: `તું પ્રભુ મારો હું પ્રભુ તારો, ક્ષણ એક મુજને નાહિ વિસારો;
મહેર કરી મુજ વિનંતી સ્વીકારો,
સ્વામી સેવક જાણી નિહાળો. ।।૧ ।।
લાખ ચોરાશી ભટકી પ્રભુજી, આવ્યો હું તારે શરણે હો જિનજી;
દુર્ગતિ કાપો શિવસુખ આપો, ભક્ત સેવકને નિજપદ સ્થાપો. ।। ૨ ।
અક્ષય ખજાનો પ્રભુ તારો ભર્યો છે, આપો કૃપાળુ મેં હાથ ધર્યો છે;
વામાનંદન જગવંદન પ્યાર, દેવ અનેરા માંહે તુંહી જ ન્યારો. ।।૩।।
પલ પલ સમરું નાથ શંખેશ્વર, સમરથ તારણ તુંહી જિનેશ્વર;
પ્રાણ થકી તું અધિકો વહાલો, દયા કરી મુજને નેહે નિહાળો. ।।૪ ।।
તારું બિરુદ કેડ ન છોડું એમ લેજો જાણી;
ચરણોની સેવા નિત નિત ચાહું, ઘડી ઘડી મનમાંહે હું ઉમાહું. ॥૫।।
‘જ્ઞાનવિમલ’ તુજ ભક્તિ પ્રભાવે, ભવોભવનાં સંતાપ શમાવે;
અમીય ભરેલી તારી મૂરતિ નિહાળી,
પાપ અંતરના દેજો પખાળી. ।।૬।।`,
      hi: `तुं प्रभु मारो हुं प्रभु तारो, क्षण एक मुजने नाहि विसारो;
महेर करी मुज विनंती स्वीकारो,
स्वामी सेवक जाणी निहाळो. ।।१ ।।
लाख चोराशी भटकी प्रभुजी, आव्यो हुं तारे शरणे हो जिनजी;
दुर्गति कापो शिवसुख आपो, भक्त सेवकने निजपद स्थापो. ।। २ ।
अक्षय खजानो प्रभु तारो भर्यो छे, आपो कृपाळु में हाथ धर्यो छे;
वामानंदन जगवंदन प्यार, देव अनेरा मांहे तुंही ज न्यारो. ।।३।।
पल पल समरुं नाथ शंखेश्वर, समरथ तारण तुंही जिनेश्वर;
प्राण थकी तुं अधिको वहालो, दया करी मुजने नेहे निहाळो. ।।४ ।।
तारुं बिरुद केड न छोडुं एम लेजो जाणी;
चरणोनी सेवा नित नित चाहुं, घडी घडी मनमांहे हुं उमाहुं. ॥५।।
‘ज्ञानविमल’ तुज भक्ति प्रभावे, भवोभवनां संताप शमावे;
अमीय भरेली तारी मूरति निहाळी,
पाप अंतरना देजो पखाळी. ।।६।।`,
      sa: "",
      en: `Tun prabhu maaro hun prabhu taaro, kshana eka mujane naahi visaaro;
Mahera karee muja vinantee sveekaaro,
Svaamee sevaka jaanee nihaalo. ||1 ||
Laakha choraashee bhatakee prabhujee, aavyo hun taare sharane ho jinajee;
Durgati kaapo shivasukha aapo, bhakta sevakane nijapada sthaapo. || 2 |
Akshaya khajaano prabhu taaro bharyo chhe, aapo krupaalu men haatha dharyo chhe;
Vaamaanandana jagavandana pyaara, deva aneraa maanhe tunhee ja nyaaro. ||3||
Pala pala samarun naatha shankheshvara, samaratha taarana tunhee jineshvara;
Praana thakee tun adhiko vahaalo, dayaa karee mujane nehe nihaalo. ||4 ||
Taarun biruda keda na chhodun ema lejo jaanee;
Charanonee sevaa nita nita chaahun, ghadee ghadee manamaanhe hun umaahun. ||5||
‘jnyaanavimala’ tuja bhakti prabhaave, bhavobhavanaan santaapa shamaave;
Ameeya bharelee taaree moorati nihaalee,
Paapa antaranaa dejo pakhaalee. ||6||`,
    },
  },
  {
    id: "tuj-mukh-sanmukh-nirakhta",
    type: "bhajan",
    title: {
      gu: "તુજ મુખ સન્મુખ નીરખતાં, મુજ લોચન અમીય ઠરંતા",
      hi: "तुज मुख सन्मुख नीरखतां, मुज लोचन अमीय ठरंता",
      sa: "",
      en: "Tuj Mukh Sanmukh Nirakhta",
    },
    text: {
      gu: `તુજ મુખ સન્મુખ નીરખતાં, મુજ લોચન અમીય ઠરંતા;
જેહની શીતલતા વ્યાપે, કિમ રહેવાયે કહો તાપે.||૧||
તુજ નામ સુણ્યું જબ કાને, હઈડું આવે તવ સાને;
મૂંઝાયો માણસ વાટે, જિમ સજ્જ હુયે અમૃત છાટે.||૨||
શુભ ગંધને તરતમ યોગે, આકુલતા હુઈ ભોગે;
તુજ અદ્ભુત દેહ સુવાસે, તેહ મિટ ગઈ રહત ઉદાસે.||૩||
તુજ ગુણ સંસ્તવને રસના, છાંડે અન્ય લયની તૃષ્ણા;
પૂજાએ તુજ તનુ ફરસે, ફરસન શીતલ થઈ ઉલ્લસે.||૪||
મનની ચંચલતા ભાગી, સવિ છંડી થયો તુજ રાગી;
કવિ “માન” કહે તુજ સંગે, શીતલતા થઈ અંગો અંગે.||૫||`,
      hi: `तुज मुख सन्मुख नीरखतां, मुज लोचन अमीय ठरंता;
जेहनी शीतलता व्यापे, किम रहेवाये कहो तापे.||१||
तुज नाम सुण्युं जब काने, हईडुं आवे तव साने;
मूंझायो माणस वाटे, जिम सज्ज हुये अमृत छाटे.||२||
शुभ गंधने तरतम योगे, आकुलता हुई भोगे;
तुज अद्भुत देह सुवासे, तेह मिट गई रहत उदासे.||३||
तुज गुण संस्तवने रसना, छांडे अन्य लयनी तृष्णा;
पूजाए तुज तनु फरसे, फरसन शीतल थई उल्लसे.||४||
मननी चंचलता भागी, सवि छंडी थयो तुज रागी;
कवि “मान” कहे तुज संगे, शीतलता थई अंगो अंगे.||५||`,
      sa: "",
      en: `Tuja mukha sanmukha neerakhataan, muja lochana ameeya tharantaa;
Jehanee sheetalataa vyaape, kima rahevaaye kaho taape.||1||
Tuja naama sunyun jaba kaane, haeedun aave tava saane;
Moonjhaayo maanasa vaate, jima sajja huye amruta chhaate.||2||
Shubha gandhane taratama yoge, aakulataa huee bhoge;
Tuja adbhuta deha suvaase, teha mita gaee rahata udaase.||3||
Tuja guna sanstavane rasanaa, chhaande anya layanee trushnaa;
Poojaae tuja tanu pharase, pharasana sheetala thaee ullase.||4||
Mananee chanchalataa bhaagee, savi chhandee thayo tuja raagee;
Kavi “maana” kahe tuja sange, sheetalataa thaee ango ange.||5||`,
    },
  },
  {
    id: "tum-darishan-bhale-payo",
    type: "bhajan",
    title: {
      gu: "તુમ દરિસણ ભલે પાયો, પ્રથમ જિન! તુમ દરિસણ ભલે પાયો",
      hi: "तुम दरिसण भले पायो, प्रथम जिन! तुम दरिसण भले पायो",
      sa: "",
      en: "Tum Darishan Bhale Payo",
    },
    text: {
      gu: `તુમ દરિસણ ભલે પાયો, પ્રથમ જિન! તુમ દરિસણ ભલે પાયો;
નાભિ નરેસર નંદન નિરુપમ, માતા મરુદેવી જાયો. ॥੧॥
આજ અમીરસ જલધર વૂઠો, માનું ગંગાજલે નાહ્યો;
સુરતરુ સુરમણિ પ્રમુખ અનુપમ, તે સવિ આજ મેં પાયો.||૨||
યુગલાધર્મ નિવારણ તારણ, જગ જસ મંડપ છાયો;
પ્રભુ ! તુજ શાસન વાસન સમકિત, અંતર વૈરી હરાયો.||૩||
કુદેવ કુગુરુ કુધર્મની વાસે, મિથ્યામતમેં ફસાયો;
મેં પ્રભુ! આજ સે નિશ્ચય કીનો, સવિ મિથ્યાત્વ ગમાયો.||૪||
બેર બેર કરું વિનંતી ઈતની, તુમ સેવા રસ પાયો;
“જ્ઞાનવિમલ’ પ્રભુ સાહિબ નજરે, સમકિત પૂરણ સવાયો.||૫||`,
      hi: `तुम दरिसण भले पायो, प्रथम जिन! तुम दरिसण भले पायो;
नाभि नरेसर नंदन निरुपम, माता मरुदेवी जायो. ॥੧॥
आज अमीरस जलधर वूठो, मानुं गंगाजले नाह्यो;
सुरतरु सुरमणि प्रमुख अनुपम, ते सवि आज में पायो.||२||
युगलाधर्म निवारण तारण, जग जस मंडप छायो;
प्रभु ! तुज शासन वासन समकित, अंतर वैरी हरायो.||३||
कुदेव कुगुरु कुधर्मनी वासे, मिथ्यामतमें फसायो;
में प्रभु! आज से निश्चय कीनो, सवि मिथ्यात्व गमायो.||४||
बेर बेर करुं विनंती ईतनी, तुम सेवा रस पायो;
“ज्ञानविमल’ प्रभु साहिब नजरे, समकित पूरण सवायो.||५||`,
      sa: "",
      en: `Tuma darisana bhale paayo, prathama jina! tuma darisana bhale paayo;
Naabhi naresara nandana nirupama, maataa marudevee jaayo. ||1||
Aaja ameerasa jaladhara vootho, maanun gangaajale naahyo;
Surataru suramani pramukha anupama, te savi aaja men paayo.||2||
Yugalaadharma nivaarana taarana, jaga jasa mandapa chhaayo;
Prabhu ! tuja shaasana vaasana samakita, antara vairee haraayo.||3||
Kudeva kuguru kudharmanee vaase, mithyaamatamen phasaayo;
Men prabhu! aaja se nishchaya keeno, savi mithyaatva gamaayo.||4||
Bera bera karun vinantee eetanee, tuma sevaa rasa paayo;
“jnyaanavimala’ prabhu saahiba najare, samakita poorana savaayo.||5||`,
    },
  },
  {
    id: "tume-bahu-metri-re-saheba",
    type: "bhajan",
    title: {
      gu: "તુમે બહુ મૈત્રી રે સાહેબા, માહરે તો મન એક",
      hi: "तुमे बहु मैत्री रे साहेबा, माहरे तो मन एक",
      sa: "",
      en: "Tume Bahu Metri Re Saheba",
    },
    text: {
      gu: `તુમે બહુ મૈત્રી રે સાહેબા, માહરે તો મન એક;
તુમ વિણ બીજો રે નવિ ગમે, એ મુજ મોટી રે ટેક.
શ્રી શ્રેયાંસ જિન કૃપા કરો…||૧||‌‌‌‌
મન રાખો તુમે સવિ તણાં,‌‌ પણ કીહાં એક મળી જાઓ;
લલચાવો લખ લોકોને, સાથી સહજ ન થાઓ.!||૨||
રાગ ભરે જન મન રહે, પણ તિહું કાલ વિરાગ;
ચિત્ત તુમારો રે સમુદ્રનો, કોઈ ન પામે રે તાગ. ||૩||
એહવા શું ચિત્ત મેળવ્યું, કેળવ્યું પહેલાં ન કાંઈ;
સેવક નિપટ અબૂઝ છે, નિર્વહશો તુમે સાંઈ.||૪||
નિરાગીશું રે કિમ મિલે?, પણ મળવાનો એકાંત;
“વાચક યશ’ કહે મુજ મિલ્યો,‌‌ ભગતે કામણ તંત.||૫||`,
      hi: `तुमे बहु मैत्री रे साहेबा, माहरे तो मन एक;
तुम विण बीजो रे नवि गमे, ए मुज मोटी रे टेक.
श्री श्रेयांस जिन कृपा करो…||१||‌‌‌‌
मन राखो तुमे सवि तणां,‌‌ पण कीहां एक मळी जाओ;
ललचावो लख लोकोने, साथी सहज न थाओ.!||२||
राग भरे जन मन रहे, पण तिहुं काल विराग;
चित्त तुमारो रे समुद्रनो, कोई न पामे रे ताग. ||३||
एहवा शुं चित्त मेळव्युं, केळव्युं पहेलां न कांई;
सेवक निपट अबूझ छे, निर्वहशो तुमे सांई.||४||
निरागीशुं रे किम मिले?, पण मळवानो एकांत;
“वाचक यश’ कहे मुज मिल्यो,‌‌ भगते कामण तंत.||५||`,
      sa: "",
      en: `Tume bahu maitree re saahebaa, maahare to mana eka;
Tuma vina beejo re navi game, e muja motee re teka.
Shree shreyaansa jina krupaa karo…||1||‌‌‌‌
Mana raakho tume savi tanaan,‌‌ pana keehaan eka malee jaao;
Lalachaavo lakha lokone, saathee sahaja na thaao.!||2||
Raaga bhare jana mana rahe, pana tihun kaala viraaga;
Chitta tumaaro re samudrano, koee na paame re taaga. ||3||
Ehavaa shun chitta melavyun, kelavyun pahelaan na kaanee;
Sevaka nipata aboojha chhe, nirvahasho tume saanee.||4||
Niraageeshun re kima mile?, pana malavaano ekaanta;
“vaachaka yasha’ kahe muja milyo,‌‌ bhagate kaamana tanta.||5||`,
    },
  },
  {
    id: "vamanandan-jagadanandan",
    type: "bhajan",
    title: {
      gu: "વામાનંદન જગદાનંદન, સેવક જન આશા વિસરામ",
      hi: "वामानंदन जगदानंदन, सेवक जन आशा विसराम",
      sa: "",
      en: "Vamanandan Jagadanandan",
    },
    text: {
      gu: `વામાનંદન જગદાનંદન, સેવક જન આશા વિસરામ;
નેહ નજર કરી મોહી પર નીરખો, તુમ હો કરુણા રસકે ધામ. ।।૧।।
ઈતની ભૂમિ પ્રભુ! તુમ હી આણ્યો, પરિ પરિ બહુત બઢાઈ મામ;
અબ દો-ચાર ગુણઠાણ બઢાવત, લાગત હૈ કહાં તુમકું દામ? ।| ૨ ।।
અહનિશિ ધ્યાન ધરું હું તેરો, મુખથી ન વિસારું તુમ નામ;
શ્રી નયવિજય વિબુધ વર “સેવક’, કહે તુમ મેરે આતમરામ. ।।૩।।`,
      hi: `वामानंदन जगदानंदन, सेवक जन आशा विसराम;
नेह नजर करी मोही पर नीरखो, तुम हो करुणा रसके धाम. ।।१।।
ईतनी भूमि प्रभु! तुम ही आण्यो, परि परि बहुत बढाई माम;
अब दो-चार गुणठाण बढावत, लागत है कहां तुमकुं दाम? ।| २ ।।
अहनिशि ध्यान धरुं हुं तेरो, मुखथी न विसारुं तुम नाम;
श्री नयविजय विबुध वर “सेवक’, कहे तुम मेरे आतमराम. ।।३।।`,
      sa: "",
      en: `Vaamaanandana jagadaanandana, sevaka jana aashaa visaraama;
Neha najara karee mohee para neerakho, tuma ho karunaa rasake dhaama. ||1||
Eetanee bhoomi prabhu! tuma hee aanyo, pari pari bahuta badhaaee maama;
Aba do-chaara gunathaana badhaavata, laagata hai kahaan tumakun daama? || 2 ||
Ahanishi dhyaana dharun hun tero, mukhathee na visaarun tuma naama;
Shree nayavijaya vibudha vara “sevaka’, kahe tuma mere aatamaraama. ||3||`,
    },
  },
  {
    id: "vamanandan-vandana-prabhu",
    type: "bhajan",
    title: {
      gu: "વામાનંદન વંદના પ્રભુ, ચરણોમાં અવધારો રે",
      hi: "वामानंदन वंदना प्रभु, चरणोमां अवधारो रे",
      sa: "",
      en: "Vamanandan Vandana Prabhu",
    },
    text: {
      gu: `વામાનંદન વંદના પ્રભુ, ચરણોમાં અવધારો રે;
કરુણાકરી કરુણાનિધિ, મને ભવસાગરથી તારો રે.||૧||
એક સમય સંસારમાં પ્રભુ, આપણે સાથે રમ્યા;
તમે નિર્મોહી થઈ ગયા, અમે ભવ અટવીમાં ભમ્યા.||૨||
દુઃખડાં નરક નિગોદનાં પ્રભુ, કહેતાં ન આવે પાર રે;
છેદન ભેદન બહુ સહ્યા, વળી પરમાધામીના માર રે. વામા૦ ।।૩।।
પરિણતિ તીવ્ર કષાયની, ભટકાવે લાખ ચોરાશી રે;
નાના જન્મો ધરાવીને, નાંખે ગળામાં ફાંસી રે.||૪||
અવર નહીં કોઈ વિશ્વમાં પ્રભુ, તુમ વિણ તારણહાર રે;
ઈમ જાણીને હું આવીયો, સ્વામી તુમ દરબાર રે.||૫||
પ્રીત પુરાતન દાખવો પ્રભુ, આપો નિજ ગુણ નાથ રે;
હું ભવ ખૂંપ્યો, ઉગારો ઝાલી હાથ રે.||૬||
ધન-દોલત માંગું નહિ, માહરી એક અરદાસ રે
ત્રિભુવન તારક બોલાવજો, “રુપવિજય” તુજ પાસ રે. વામા૦ ।।૭।।`,
      hi: `वामानंदन वंदना प्रभु, चरणोमां अवधारो रे;
करुणाकरी करुणानिधि, मने भवसागरथी तारो रे.||१||
एक समय संसारमां प्रभु, आपणे साथे रम्या;
तमे निर्मोही थई गया, अमे भव अटवीमां भम्या.||२||
दुःखडां नरक निगोदनां प्रभु, कहेतां न आवे पार रे;
छेदन भेदन बहु सह्या, वळी परमाधामीना मार रे. वामा० ।।३।।
परिणति तीव्र कषायनी, भटकावे लाख चोराशी रे;
नाना जन्मो धरावीने, नांखे गळामां फांसी रे.||४||
अवर नहीं कोई विश्वमां प्रभु, तुम विण तारणहार रे;
ईम जाणीने हुं आवीयो, स्वामी तुम दरबार रे.||५||
प्रीत पुरातन दाखवो प्रभु, आपो निज गुण नाथ रे;
हुं भव खूंप्यो, उगारो झाली हाथ रे.||६||
धन-दोलत मांगुं नहि, माहरी एक अरदास रे
त्रिभुवन तारक बोलावजो, “रुपविजय” तुज पास रे. वामा० ।।७।।`,
      sa: "",
      en: `Vaamaanandana vandanaa prabhu, charanomaan avadhaaro re;
Karunaakaree karunaanidhi, mane bhavasaagarathee taaro re.||1||
Eka samaya sansaaramaan prabhu, aapane saathe ramyaa;
Tame nirmohee thaee gayaa, ame bhava ataveemaan bhamyaa.||2||
Dukhadaan naraka nigodanaan prabhu, kahetaan na aave paara re;
Chhedana bhedana bahu sahyaa, valee paramaadhaameenaa maara re. vaamaa0 ||3||
Parinati teevra kashaayanee, bhatakaave laakha choraashee re;
Naanaa janmo dharaaveene, naankhe galaamaan phaansee re.||4||
Avara naheen koee vishvamaan prabhu, tuma vina taaranahaara re;
Eema jaaneene hun aaveeyo, svaamee tuma darabaara re.||5||
Preeta puraatana daakhavo prabhu, aapo nija guna naatha re;
Hun bhava khoonpyo, ugaaro jhaalee haatha re.||6||
Dhana-dolata maangun nahi, maaharee eka aradaasa re
Tribhuvana taaraka bolaavajo, “rupavijaya” tuja paasa re. vaamaa0 ||7||`,
    },
  },
  {
    id: "vardhaman-jinvarna-dhyane",
    type: "bhajan",
    title: {
      gu: "વર્ધમાન જિનવરના ધ્યાને, વર્ધમાન સમ થાવેજી",
      hi: "वर्धमान जिनवरना ध्याने, वर्धमान सम थावेजी",
      sa: "",
      en: "Vardhaman Jinvarna Dhyane",
    },
    text: {
      gu: `વર્ધમાન જિનવરના ધ્યાને, વર્ધમાન સમ થાવેજી;
વર્ધમાન વિદ્યા સુપસાયે, વર્ધમાન સુખ પાવેજી. ॥੧॥
તું ગતિ તું મતિ સાહિબો તું, જીવન પ્રાણ આધારજી;
જયવંતુ જગમાં જસ શાસન, કરતું બહુ ઉપગારજી.॥२॥
જે અજ્ઞાની તુમ મત સરીખો, પરમતને કરી જાણેજી;
કહો કુણ અમૃતને વિષ સરીખું, મંદમતિ વિણ જાણેજી.॥3॥
જે તુમ આગમ સરસ સુધારસે, સિંચ્યો શીતલ થાયજી;
તાસ જનમ સુ-કૃતારથ જાણો, સુરનર તસ ગુણ ગાયજી.॥४॥
સાહિબ તુમ પદપંકજ સેવા, નિત નિત એહી જ યાચુંજી;
શ્રી ‘જ્ઞાનવિમલ’ સૂરીસર ભાખે, પ્રભુધ્યાને હું માચુંજી.||૫||`,
      hi: `वर्धमान जिनवरना ध्याने, वर्धमान सम थावेजी;
वर्धमान विद्या सुपसाये, वर्धमान सुख पावेजी. ॥੧॥
तुं गति तुं मति साहिबो तुं, जीवन प्राण आधारजी;
जयवंतु जगमां जस शासन, करतुं बहु उपगारजी.॥२॥
जे अज्ञानी तुम मत सरीखो, परमतने करी जाणेजी;
कहो कुण अमृतने विष सरीखुं, मंदमति विण जाणेजी.॥3॥
जे तुम आगम सरस सुधारसे, सिंच्यो शीतल थायजी;
तास जनम सु-कृतारथ जाणो, सुरनर तस गुण गायजी.॥४॥
साहिब तुम पदपंकज सेवा, नित नित एही ज याचुंजी;
श्री ‘ज्ञानविमल’ सूरीसर भाखे, प्रभुध्याने हुं माचुंजी.||५||`,
      sa: "",
      en: `Vardhamaana jinavaranaa dhyaane, vardhamaana sama thaavejee;
Vardhamaana vidyaa supasaaye, vardhamaana sukha paavejee. ||1||
Tun gati tun mati saahibo tun, jeevana praana aadhaarajee;
Jayavantu jagamaan jasa shaasana, karatun bahu upagaarajee.||2||
Je ajnyaanee tuma mata sareekho, paramatane karee jaanejee;
Kaho kuna amrutane visha sareekhun, mandamati vina jaanejee.||3||
Je tuma aagama sarasa sudhaarase, sinchyo sheetala thaayajee;
Taasa janama su-krutaaratha jaano, suranara tasa guna gaayajee.||4||
Saahiba tuma padapankaja sevaa, nita nita ehee ja yaachunjee;
Shree ‘jnyaanavimala’ sooreesara bhaakhe, prabhudhyaane hun maachunjee.||5||`,
    },
  },
  {
    id: "vasupujiya-jin-antarjami",
    type: "bhajan",
    title: {
      gu: "વાસુપૂજ્ય જિન અંતરજામી, હું પ્રણમું શિરનામી રે",
      hi: "वासुपूज्य जिन अंतरजामी, हुं प्रणमुं शिरनामी रे",
      sa: "",
      en: "Vasupujiya Jin Antarjami",
    },
    text: {
      gu: `વાસુપૂજ્ય જિન અંતરજામી, હું પ્રણમું શિરનામી રે;
ત્રિકરણ યોગે ધ્યાન તમારું, કરતાં ભવભય વારું રે.||૧||
ચોત્રીશ અતિશય શોભાકારી, તુમચી જાઉં બલિહારી રે;
ધ્યાન વિન્નાણે શક્તિ પ્રમાણે, સુરપતિ ગુણ વખાણે રે.||૨||
દેશના દેતા તખ્ત બિરાજે, જલધરની પરે ગાજે રે;
વાણી સુધારસ ગુણમણિ ખાણી, ભાવ ધરી સુણો પ્રાણી રે.||૩||
દુવિધ ધર્મ દયાનિધિ ભાખે, હેતુ જુગતે પ્રકાશે રે;
ભેદરહિત પ્રભુ નીરખો મુજને, તો શોભા છે તુજને રે.||૪||
મુદ્રા સુંદર દીપે તાહરી, મોહ્યા અમર નરનારી રે;
સાહિબ સમતા રસનો દરિયો, માર્દવ ગુણે જે ભરિયો રે.||૫||
સહજાનંદી સાહિબ સાચો, જેમ હોય હીરો જાચો રે;
પરમાતમ પ્રભુ ધ્યાને ધ્યાવો, તો અક્ષય લીલા પાવો રે.||૬||
રક્ત વરણ દીપે તનુ કાંતિ, જોતાં ટળે ભવભ્રાંતિ રે;
ઉત્તમ વિજય વિબુધનો શિષ્ય, “રતનવિજય” સુજગીશ ર.||૭||`,
      hi: `वासुपूज्य जिन अंतरजामी, हुं प्रणमुं शिरनामी रे;
त्रिकरण योगे ध्यान तमारुं, करतां भवभय वारुं रे.||१||
चोत्रीश अतिशय शोभाकारी, तुमची जाउं बलिहारी रे;
ध्यान विन्नाणे शक्ति प्रमाणे, सुरपति गुण वखाणे रे.||२||
देशना देता तख्त बिराजे, जलधरनी परे गाजे रे;
वाणी सुधारस गुणमणि खाणी, भाव धरी सुणो प्राणी रे.||३||
दुविध धर्म दयानिधि भाखे, हेतु जुगते प्रकाशे रे;
भेदरहित प्रभु नीरखो मुजने, तो शोभा छे तुजने रे.||४||
मुद्रा सुंदर दीपे ताहरी, मोह्या अमर नरनारी रे;
साहिब समता रसनो दरियो, मार्दव गुणे जे भरियो रे.||५||
सहजानंदी साहिब साचो, जेम होय हीरो जाचो रे;
परमातम प्रभु ध्याने ध्यावो, तो अक्षय लीला पावो रे.||६||
रक्त वरण दीपे तनु कांति, जोतां टळे भवभ्रांति रे;
उत्तम विजय विबुधनो शिष्य, “रतनविजय” सुजगीश र.||७||`,
      sa: "",
      en: `Vaasupoojya jina antarajaamee, hun pranamun shiranaamee re;
Trikarana yoge dhyaana tamaarun, karataan bhavabhaya vaarun re.||1||
Chotreesha atishaya shobhaakaaree, tumachee jaaun balihaaree re;
Dhyaana vinnaane shakti pramaane, surapati guna vakhaane re.||2||
Deshanaa detaa takhta biraaje, jaladharanee pare gaaje re;
Vaanee sudhaarasa gunamani khaanee, bhaava dharee suno praanee re.||3||
Duvidha dharma dayaanidhi bhaakhe, hetu jugate prakaashe re;
Bhedarahita prabhu neerakho mujane, to shobhaa chhe tujane re.||4||
Mudraa sundara deepe taaharee, mohyaa amara naranaaree re;
Saahiba samataa rasano dariyo, maardava gune je bhariyo re.||5||
Sahajaanandee saahiba saacho, jema hoya heero jaacho re;
Paramaatama prabhu dhyaane dhyaavo, to akshaya leelaa paavo re.||6||
Rakta varana deepe tanu kaanti, jotaan tale bhavabhraanti re;
Uttama vijaya vibudhano shishya, “ratanavijaya” sujageesha ra.||7||`,
    },
  },
  {
    id: "vasupujiya-jin-tribhuvan-swami",
    type: "bhajan",
    title: {
      gu: "વાસુપૂજ્ય જિન ત્રિભુવન સ્વામી, ઘનનામી પરિણામી રે",
      hi: "वासुपूज्य जिन त्रिभुवन स्वामी, घननामी परिणामी रे",
      sa: "",
      en: "Vasupujiya Jin Tribhuvan Swami",
    },
    text: {
      gu: `વાસુપૂજ્ય જિન ત્રિભુવન સ્વામી, ઘનનામી પરિણામી રે;
નિરાકાર સાકાર સચેતન, કરમ કરમ ફલ કામી રે.||૧||
નિરાકાર અભેદ સંગ્રાહક, ભેદ ગ્રાહક સાકારો રે;
દર્શન જ્ઞાન દુભેદ ચેતના, વસ્તુ ગ્રહણ વ્યાપારો રે. ॥૨॥
કર્તા પરિણામી પરિણામો, કર્મ જે જીવે કરીએ રે;
એક અનેક રૂપ નયવાદે, નિયતે નય અનુસરીએ રે..॥૩॥
દુઃખ સુખ રુપ ફલ જાણો, નિશ્ચય એક આનંદો રે;
ચેતનતા પરિણામ ન ચૂકે, ચેતન કહે જિનચંદો રે.‌॥४॥
પરિણામી ચેતન પરિણામો, જ્ઞાન કરમ ફલ ભાવી રે;
જ્ઞાન કરમ ફલ ચેતન કહીએ, લેજો તેહ મનાવી રે.॥५॥
આતમજ્ઞાની શ્રમણ કહાવે, બીજા તો દ્રવ્યલિંગી રે;
વસ્તુગતે જે વસ્તુ પ્રકાશે, “આનંદઘન’ મત સંગી રે.||૬||`,
      hi: `वासुपूज्य जिन त्रिभुवन स्वामी, घननामी परिणामी रे;
निराकार साकार सचेतन, करम करम फल कामी रे.||१||
निराकार अभेद संग्राहक, भेद ग्राहक साकारो रे;
दर्शन ज्ञान दुभेद चेतना, वस्तु ग्रहण व्यापारो रे. ॥२॥
कर्ता परिणामी परिणामो, कर्म जे जीवे करीए रे;
एक अनेक रूप नयवादे, नियते नय अनुसरीए रे..॥३॥
दुःख सुख रुप फल जाणो, निश्चय एक आनंदो रे;
चेतनता परिणाम न चूके, चेतन कहे जिनचंदो रे.‌॥४॥
परिणामी चेतन परिणामो, ज्ञान करम फल भावी रे;
ज्ञान करम फल चेतन कहीए, लेजो तेह मनावी रे.॥५॥
आतमज्ञानी श्रमण कहावे, बीजा तो द्रव्यलिंगी रे;
वस्तुगते जे वस्तु प्रकाशे, “आनंदघन’ मत संगी रे.||६||`,
      sa: "",
      en: `Vaasupoojya jina tribhuvana svaamee, ghananaamee parinaamee re;
Niraakaara saakaara sachetana, karama karama phala kaamee re.||1||
Niraakaara abheda sangraahaka, bheda graahaka saakaaro re;
Darshana jnyaana dubheda chetanaa, vastu grahana vyaapaaro re. ||2||
Kartaa parinaamee parinaamo, karma je jeeve kareee re;
Eka aneka roopa nayavaade, niyate naya anusareee re..||3||
Dukha sukha rupa phala jaano, nishchaya eka aanando re;
Chetanataa parinaama na chooke, chetana kahe jinachando re.‌||4||
Parinaamee chetana parinaamo, jnyaana karama phala bhaavee re;
Jnyaana karama phala chetana kaheee, lejo teha manaavee re.||5||
Aatamajnyaanee shramana kahaave, beejaa to dravyalingee re;
Vastugate je vastu prakaashe, “aanandaghana’ mata sangee re.||6||`,
    },
  },
  {
    id: "veer-jinand-jagat-upkari",
    type: "bhajan",
    title: {
      gu: "વીર જિણંદ જગત ઉપકારી, મિથ્યાધામ નિવારીજી",
      hi: "वीर जिणंद जगत उपकारी, मिथ्याधाम निवारीजी",
      sa: "",
      en: "Veer Jinand Jagat Upkari",
    },
    text: {
      gu: `વીર જિણંદ જગત ઉપકારી, મિથ્યાધામ નિવારીજી;
દેશના અમૃતધારા વરસી, પરપરિણતિ સવિ વારીજી. ॥१॥
પાંચમે આરે જેહનું શાસન, દોય હજાર ને ચારજી;
યુગપ્રધાન સૂરીશ્વર વહેશે, સુવિહિત મુનિ આધારજી. ॥२॥
ઉત્તમ આચારજ મુનિ અજ્જા, શ્રાવક શ્રાવિકા અચ્છજી;
લવણ જલધિમાંહી મીઠું જલ, પીવે શૃંગી મચ્છજી.||૩||
દશ અચ્છેરે દૂષિત ભરતે, બહુ મતભેદ કરાલજી;
જિન કેવલી પૂરવધર વિરહે, ફણિસમ પંચમ કાલજી. ॥४॥
તેહનું ઝેર નિવારણ મણિસમ, તુજ આગમ તુજ બિંબજી;
નિશિ દીપક પ્રવહણ જિમ દરિયે, મરુમાં સુરતરું લુંબજી. ॥५॥
જૈનાગમ વક્તા ને શ્રોતા, સ્યાદ્વાદ શુચિ બોધજી;
કલિકાલે પણ પ્રભુ! તુજ શાસન, વર્તે છે અવિરોધજી.॥६॥
માહરે તો સુષમાથી દુઃષમા, અવસર પુણ્ય નિધાનજી;
“ક્ષમાવિજય’ જિન વીર સદાગમ, પામ્યો સિદ્ધિ નિદાનજી. ।।૭।।`,
      hi: `वीर जिणंद जगत उपकारी, मिथ्याधाम निवारीजी;
देशना अमृतधारा वरसी, परपरिणति सवि वारीजी. ॥१॥
पांचमे आरे जेहनुं शासन, दोय हजार ने चारजी;
युगप्रधान सूरीश्वर वहेशे, सुविहित मुनि आधारजी. ॥२॥
उत्तम आचारज मुनि अज्जा, श्रावक श्राविका अच्छजी;
लवण जलधिमांही मीठुं जल, पीवे शृंगी मच्छजी.||३||
दश अच्छेरे दूषित भरते, बहु मतभेद करालजी;
जिन केवली पूरवधर विरहे, फणिसम पंचम कालजी. ॥४॥
तेहनुं झेर निवारण मणिसम, तुज आगम तुज बिंबजी;
निशि दीपक प्रवहण जिम दरिये, मरुमां सुरतरुं लुंबजी. ॥५॥
जैनागम वक्ता ने श्रोता, स्याद्वाद शुचि बोधजी;
कलिकाले पण प्रभु! तुज शासन, वर्ते छे अविरोधजी.॥६॥
माहरे तो सुषमाथी दुःषमा, अवसर पुण्य निधानजी;
“क्षमाविजय’ जिन वीर सदागम, पाम्यो सिद्धि निदानजी. ।।७।।`,
      sa: "",
      en: `Veera jinanda jagata upakaaree, mithyaadhaama nivaareejee;
Deshanaa amrutadhaaraa varasee, paraparinati savi vaareejee. ||1||
Paanchame aare jehanun shaasana, doya hajaara ne chaarajee;
Yugapradhaana sooreeshvara vaheshe, suvihita muni aadhaarajee. ||2||
Uttama aachaaraja muni ajjaa, shraavaka shraavikaa achchhajee;
Lavana jaladhimaanhee meethun jala, peeve shrungee machchhajee.||3||
Dasha achchhere dooshita bharate, bahu matabheda karaalajee;
Jina kevalee pooravadhara virahe, phanisama panchama kaalajee. ||4||
Tehanun jhera nivaarana manisama, tuja aagama tuja binbajee;
Nishi deepaka pravahana jima dariye, marumaan suratarun lunbajee. ||5||
Jainaagama vaktaa ne shrotaa, syaadvaada shuchi bodhajee;
Kalikaale pana prabhu! tuja shaasana, varte chhe avirodhajee.||6||
Maahare to sushamaathee dushamaa, avasara punya nidhaanajee;
“kshamaavijaya’ jina veera sadaagama, paamyo siddhi nidaanajee. ||7||`,
    },
  },
  {
    id: "veer-jineshwar-charane-lagu",
    type: "bhajan",
    title: {
      gu: "વીર જિનેશ્વર ચરણે લાગું, વીરપણું તે માંગું રે",
      hi: "वीर जिनेश्वर चरणे लागुं, वीरपणुं ते मांगुं रे",
      sa: "",
      en: "Veer Jineshwar Charane Lagu",
    },
    text: {
      gu: `વીર જિનેશ્વર ચરણે લાગું, વીરપણું તે માંગું રે;
મિથ્યા મોહ તિમિર ભય ભાગ્યું, જીત નગારું વાગ્યું રે.||૧||
છઉમત્થ વીર્ય લેશ્યા સંગે, અભિસંધિજ મતિ અંગે રે;
સૂક્ષ્મ ક્રિયાને રંગે, યોગી થયો ઉમંગે રે.||૨||
અસંખ્ય પ્રદેશે વીર્ય અસંખે, યોગ અસંખિત કંખે રે;
પુદ્ગલગણ તિણે લેશ્યા વિશેષે, યથાશક્તિ મતિ લેખે રે.||૩||
ઉત્કૃષ્ટ વીર્ય નિવેશે, યોગક્રિયા નવિ પેસે રે;
યોગતણી ધ્રુવતાને લેશે, આતમ શક્તિ ન ખેસે રે.||૪||
કામવીર્ય વશે જિમ ભોગી, તિમ આતમ થયો ભોગી રે;
શૂરપણે આતમ ઉપયોગી, થાયે તેહ અયોગી રે.||૫||
વીરપણું તે આતમઠાણે, જાણ્યું તુમચી વાણે રે;
ધ્યાન વિન્નાણે શક્તિ પ્રમાણે, નિજ ધ્રુવપદ પહિચાણે રે.||૬||
આલંબન સાધન જે ત્યાગે, પર પરિણતિને ભાગે રે;
અક્ષય દર્શન જ્ઞાન વૈરાગે, “આનંદઘન’ પ્રભુ જાગે રે.||૭||`,
      hi: `वीर जिनेश्वर चरणे लागुं, वीरपणुं ते मांगुं रे;
मिथ्या मोह तिमिर भय भाग्युं, जीत नगारुं वाग्युं रे.||१||
छउमत्थ वीर्य लेश्या संगे, अभिसंधिज मति अंगे रे;
सूक्ष्म क्रियाने रंगे, योगी थयो उमंगे रे.||२||
असंख्य प्रदेशे वीर्य असंखे, योग असंखित कंखे रे;
पुद्गलगण तिणे लेश्या विशेषे, यथाशक्ति मति लेखे रे.||३||
उत्कृष्ट वीर्य निवेशे, योगक्रिया नवि पेसे रे;
योगतणी ध्रुवताने लेशे, आतम शक्ति न खेसे रे.||४||
कामवीर्य वशे जिम भोगी, तिम आतम थयो भोगी रे;
शूरपणे आतम उपयोगी, थाये तेह अयोगी रे.||५||
वीरपणुं ते आतमठाणे, जाण्युं तुमची वाणे रे;
ध्यान विन्नाणे शक्ति प्रमाणे, निज ध्रुवपद पहिचाणे रे.||६||
आलंबन साधन जे त्यागे, पर परिणतिने भागे रे;
अक्षय दर्शन ज्ञान वैरागे, “आनंदघन’ प्रभु जागे रे.||७||`,
      sa: "",
      en: `Veera jineshvara charane laagun, veerapanun te maangun re;
Mithyaa moha timira bhaya bhaagyun, jeeta nagaarun vaagyun re.||1||
Chhaumattha veerya leshyaa sange, abhisandhija mati ange re;
Sookshma kriyaane range, yogee thayo umange re.||2||
Asankhya pradeshe veerya asankhe, yoga asankhita kankhe re;
Pudgalagana tine leshyaa visheshe, yathaashakti mati lekhe re.||3||
Utkrushta veerya niveshe, yogakriyaa navi pese re;
Yogatanee dhruvataane leshe, aatama shakti na khese re.||4||
Kaamaveerya vashe jima bhogee, tima aatama thayo bhogee re;
Shoorapane aatama upayogee, thaaye teha ayogee re.||5||
Veerapanun te aatamathaane, jaanyun tumachee vaane re;
Dhyaana vinnaane shakti pramaane, nija dhruvapada pahichaane re.||6||
Aalanbana saadhana je tyaage, para parinatine bhaage re;
Akshaya darshana jnyaana vairaage, “aanandaghana’ prabhu jaage re.||7||`,
    },
  },
  {
    id: "veer-vad-dhir-mahaveer-moto",
    type: "bhajan",
    title: {
      gu: "વીર વડ ધીર મહાવીર મોટો પ્રભુ",
      hi: "वीर वड धीर महावीर मोटो प्रभु",
      sa: "",
      en: "Veer Vad Dhir Mahaveer Moto",
    },
    text: {
      gu: `વીર વડ ધીર મહાવીર મોટો પ્રભુ,
પેખતાં પાપ સંતાપ નાસે;
જેહના નામ ગુણધામ બહુમાનથી,
અવિચલ લીલ હૈયે ઉલ્લાસે.||૧||
કર્મ અરિ જીપતો દીપતો વીર! તું,
ધીર પરિષહ સહે મેરુ તોલે
સુરે બલ પરખીયો રમત કરી નિરખીયો,
હરખીયો નામ મહાવીર બોલે.||૨||
સાપ ચંડકોશીયો જે મહારોષીયો,
પોષીયો તે સુધા નયન પૂરે;
એવડા અવગુણ શા પ્રભુ મે કર્યા;
તાહરા ચરણથી રાખે દૂર.||૩||
શૂલપાણિ સુરને પ્રતિબોધીયો,
ચંદના ચિત્ત ચિંતા નિવારી;
મહેર ધરી ઘેર પહોતા પ્રભુ જેહને
તેહ પામ્યા ભવ દુ:ખ પારી.||૪||
ગૌતમાદિકને જઈ પ્રભુ તારવા,
વારવા યજ્ઞ મિથ્યાત્વ ખોટો;
તેહ અગિયાર પરિવારશું બુઝવી,
રુઝવી રોગ અજ્ઞાન મોટો.||૫||
હવે પ્રભુ! મુજ ભણી તું ત્રિભુવન ધણી,
દાસ અરદાસ સુણી સામું જોવે;
આપ પદ આપતાં આપદા કાપતાં,
તારે અંશ ઓછું ન હોવે.||૬||
ગુણગણે રાજતા અધિક દિવાજતા,
છાજતા જેહ કલિકાલ માંહે;
શ્રી ખિમાવિજય પય સેવ નિત્યમેવ લહી,
પામીયે શમરસ “સુજશ’ ત્યાંહે.||૭||`,
      hi: `वीर वड धीर महावीर मोटो प्रभु,
पेखतां पाप संताप नासे;
जेहना नाम गुणधाम बहुमानथी,
अविचल लील हैये उल्लासे.||१||
कर्म अरि जीपतो दीपतो वीर! तुं,
धीर परिषह सहे मेरु तोले
सुरे बल परखीयो रमत करी निरखीयो,
हरखीयो नाम महावीर बोले.||२||
साप चंडकोशीयो जे महारोषीयो,
पोषीयो ते सुधा नयन पूरे;
एवडा अवगुण शा प्रभु मे कर्या;
ताहरा चरणथी राखे दूर.||३||
शूलपाणि सुरने प्रतिबोधीयो,
चंदना चित्त चिंता निवारी;
महेर धरी घेर पहोता प्रभु जेहने
तेह पाम्या भव दु:ख पारी.||४||
गौतमादिकने जई प्रभु तारवा,
वारवा यज्ञ मिथ्यात्व खोटो;
तेह अगियार परिवारशुं बुझवी,
रुझवी रोग अज्ञान मोटो.||५||
हवे प्रभु! मुज भणी तुं त्रिभुवन धणी,
दास अरदास सुणी सामुं जोवे;
आप पद आपतां आपदा कापतां,
तारे अंश ओछुं न होवे.||६||
गुणगणे राजता अधिक दिवाजता,
छाजता जेह कलिकाल मांहे;
श्री खिमाविजय पय सेव नित्यमेव लही,
पामीये शमरस “सुजश’ त्यांहे.||७||`,
      sa: "",
      en: `Veera vada dheera mahaaveera moto prabhu,
Pekhataan paapa santaapa naase;
Jehanaa naama gunadhaama bahumaanathee,
Avichala leela haiye ullaase.||1||
Karma ari jeepato deepato veera! tun,
Dheera parishaha sahe meru tole
Sure bala parakheeyo ramata karee nirakheeyo,
Harakheeyo naama mahaaveera bole.||2||
Saapa chandakosheeyo je mahaarosheeyo,
Posheeyo te sudhaa nayana poore;
Evadaa avaguna shaa prabhu me karyaa;
Taaharaa charanathee raakhe doora.||3||
Shoolapaani surane pratibodheeyo,
Chandanaa chitta chintaa nivaaree;
Mahera dharee ghera pahotaa prabhu jehane
Teha paamyaa bhava du:kha paaree.||4||
Gautamaadikane jaee prabhu taaravaa,
Vaaravaa yajnya mithyaatva khoto;
Teha agiyaara parivaarashun bujhavee,
Rujhavee roga ajnyaana moto.||5||
Have prabhu! muja bhanee tun tribhuvana dhanee,
Daasa aradaasa sunee saamun jove;
Aapa pada aapataan aapadaa kaapataan,
Taare ansha ochhun na hove.||6||
Gunagane raajataa adhika divaajataa,
Chhaajataa jeha kalikaala maanhe;
Shree khimaavijaya paya seva nityameva lahee,
Paameeye shamarasa “sujasha’ tyaanhe.||7||`,
    },
  },
  {
    id: "veer-vehela-aavo-re",
    type: "bhajan",
    title: {
      gu: "વીર વહેલા આવો રે, ગૌતમ કહી બોલાવો રે",
      hi: "वीर वहेला आवो रे, गौतम कही बोलावो रे",
      sa: "",
      en: "Veer Vehela Aavo Re",
    },
    text: {
      gu: `વીર વહેલા આવો રે, ગૌતમ કહી બોલાવો રે,
દરિશણ વહેલા દીજિયે હો જી…
પ્રભુ તું નિઃસ્નેહી હું સસનેહી અજાણ રે.||૧||
ગૌતમ ભણે ભો! નાથ તેં, વિશ્વાસ આપી છેતર્યો;
પરગામ મુજને મોકલી, તું મુક્તિ રમણીને વર્યો;
હે જિનજી તારા, ગુપ્ત ભેદોથી અજાણ રે.||૨||
શિવનગર હતું શું સાંકડું, કે હતી નહીં મુજ યોગ્યતા;
જો કહ્યું હોત મુજને, તો કોણ કોઈને રોકતા;
હે જિનજી! હું શું, માંગત ભાગ સુજાણ રે.||૩||
મમ પ્રશ્નના ઉત્તર દેઈ, ગૌતમ કહી કોણ બોલાવશે;
કોણ કરશે સાર સંઘની ને, શંકા બિચારી ક્યાં જશે?
હે પુણ્ય કથા કહી, પાવન કરો મમ કાન રે.||૪||
જિન ભાણ અસ્ત થતાં, તિમિર મિથ્યાત્વ સઘળે વ્યાપશે;
કુમતિ જાગશે ને, ચોર ચુંગલ વધી જશે;
હે ત્રિગડે બેસી, દેશના ઘો જગભાણ રે.||૫||
મુનિ ચૌદ સહસ છે તાહરે ને, માહરે વીર તું એક છે;
ટળવળતો મૂકી ગયા મને, પ્રભુ ક્યાં તમારી ટેક છે;
પ્રભુ સ્વપ્નાંતરમાં, અંતર ન ધર્યો સુજાણ રે.||૬||
પણ હું આજ્ઞાવાટે ચાલ્યો, ન મળ્યો ઈણ અવસરે;
હું રાગવશ રખડું નિરાગી, વીર શિવપુર સંચરે;
હું વર વીર કહું, વીર ન ધરે કાંઈ કાન રે.||૭||
કોણ વીર ને કોણ ગૌતમ, નહીં કોઈ કોઈનું કદા;
એ રાગ ગ્રંથિ તૂટતાં, વરજ્ઞાન ગૌતમને થતાં;
હે સુરતરુ સુરમણિ, ગૌતમ નામે નિધાન રે.||૮||
કાર્તિક માસ અમાસ રાત્રે, અસ્ત ભાવદીપક તણો;
દ્રવ્ય દીપક જ્યોત પ્રગટે, લોક દિવાળી ભણે;
હે “વીરવિજય’ના, નર નારી કરે ગુણગાન રે.||૯||`,
      hi: `वीर वहेला आवो रे, गौतम कही बोलावो रे,
दरिशण वहेला दीजिये हो जी…
प्रभु तुं निःस्नेही हुं ससनेही अजाण रे.||१||
गौतम भणे भो! नाथ तें, विश्वास आपी छेतर्यो;
परगाम मुजने मोकली, तुं मुक्ति रमणीने वर्यो;
हे जिनजी तारा, गुप्त भेदोथी अजाण रे.||२||
शिवनगर हतुं शुं सांकडुं, के हती नहीं मुज योग्यता;
जो कह्युं होत मुजने, तो कोण कोईने रोकता;
हे जिनजी! हुं शुं, मांगत भाग सुजाण रे.||३||
मम प्रश्नना उत्तर देई, गौतम कही कोण बोलावशे;
कोण करशे सार संघनी ने, शंका बिचारी क्यां जशे?
हे पुण्य कथा कही, पावन करो मम कान रे.||४||
जिन भाण अस्त थतां, तिमिर मिथ्यात्व सघळे व्यापशे;
कुमति जागशे ने, चोर चुंगल वधी जशे;
हे त्रिगडे बेसी, देशना घो जगभाण रे.||५||
मुनि चौद सहस छे ताहरे ने, माहरे वीर तुं एक छे;
टळवळतो मूकी गया मने, प्रभु क्यां तमारी टेक छे;
प्रभु स्वप्नांतरमां, अंतर न धर्यो सुजाण रे.||६||
पण हुं आज्ञावाटे चाल्यो, न मळ्यो ईण अवसरे;
हुं रागवश रखडुं निरागी, वीर शिवपुर संचरे;
हुं वर वीर कहुं, वीर न धरे कांई कान रे.||७||
कोण वीर ने कोण गौतम, नहीं कोई कोईनुं कदा;
ए राग ग्रंथि तूटतां, वरज्ञान गौतमने थतां;
हे सुरतरु सुरमणि, गौतम नामे निधान रे.||८||
कार्तिक मास अमास रात्रे, अस्त भावदीपक तणो;
द्रव्य दीपक ज्योत प्रगटे, लोक दिवाळी भणे;
हे “वीरविजय’ना, नर नारी करे गुणगान रे.||९||`,
      sa: "",
      en: `Veera vahelaa aavo re, gautama kahee bolaavo re,
Darishana vahelaa deejiye ho jee…
Prabhu tun nisnehee hun sasanehee ajaana re.||1||
Gautama bhane bho! naatha ten, vishvaasa aapee chhetaryo;
Paragaama mujane mokalee, tun mukti ramaneene varyo;
He jinajee taaraa, gupta bhedothee ajaana re.||2||
Shivanagara hatun shun saankadun, ke hatee naheen muja yogyataa;
Jo kahyun hota mujane, to kona koeene rokataa;
He jinajee! hun shun, maangata bhaaga sujaana re.||3||
Mama prashnanaa uttara deee, gautama kahee kona bolaavashe;
Kona karashe saara sanghanee ne, shankaa bichaaree kyaan jashe?
He punya kathaa kahee, paavana karo mama kaana re.||4||
Jina bhaana asta thataan, timira mithyaatva saghale vyaapashe;
Kumati jaagashe ne, chora chungala vadhee jashe;
He trigade besee, deshanaa gho jagabhaana re.||5||
Muni chauda sahasa chhe taahare ne, maahare veera tun eka chhe;
Talavalato mookee gayaa mane, prabhu kyaan tamaaree teka chhe;
Prabhu svapnaantaramaan, antara na dharyo sujaana re.||6||
Pana hun aajnyaavaate chaalyo, na malyo eena avasare;
Hun raagavasha rakhadun niraagee, veera shivapura sanchare;
Hun vara veera kahun, veera na dhare kaanee kaana re.||7||
Kona veera ne kona gautama, naheen koee koeenun kadaa;
E raaga granthi tootataan, varajnyaana gautamane thataan;
He surataru suramani, gautama naame nidhaana re.||8||
Kaartika maasa amaasa raatre, asta bhaavadeepaka tano;
Dravya deepaka jyota pragate, loka divaalee bhane;
He “veeravijaya’naa, nara naaree kare gunagaana re.||9||`,
    },
  },
  {
    id: "veer-vin-vani-kon-sunave",
    type: "bhajan",
    title: {
      gu: "વીર વિણ વાણી કોણ સુણાવે, પ્રભુ વિણ વાણી કોણ સુણાવે",
      hi: "वीर विण वाणी कोण सुणावे, प्रभु विण वाणी कोण सुणावे",
      sa: "",
      en: "Veer Vin Vani Kon Sunave",
    },
    text: {
      gu: `વીર વિણ વાણી કોણ સુણાવે, પ્રભુ વિણ વાણી કોણ સુણાવે,
જબ યે વીર ગયે શિવમંદિર,
અબ મેરી શંકા કોણ મિટાવે. વીર૦ ।।૧।।
તુમ વિણ ચઉવિહ સંઘ કમલદલ,
વિકસિત કોણ કરાવે. વીર૦||૨ ।।
કહે ગૌતમ ગણધર તુમ વિરહે,
જિનવર દિનકર જાવે.વીર૦॥૩॥
મોકું સાથ લઈ ક્યું ન ચલે,
ચિત્ત અપરાધ ધરાવે. वी२०॥४॥
ઈમ પરભાવ વિચારી અપના,
ભાવશું ભાવ મિલાવે. વીર૦॥૫॥
સમવસરણ મેં બેઠે સિંહાસન પર,
હુકમ કોણ ફરમાવે.||૬||
વીર વીર લવતે વીર અક્ષર,
અંતર તિમિર હટાવે. વિર૦।।૭।।
સકલ સુરાસુર હર્ષિત હોવે,
જુહાર કારણકું આવે. वी२०॥૮॥
ઈન્દ્રભૂતિ અનુભવ કી લીલા,
‘જ્ઞાનવિમલ’ ગુણ ગાવે.||૯||`,
      hi: `वीर विण वाणी कोण सुणावे, प्रभु विण वाणी कोण सुणावे,
जब ये वीर गये शिवमंदिर,
अब मेरी शंका कोण मिटावे. वीर० ।।१।।
तुम विण चउविह संघ कमलदल,
विकसित कोण करावे. वीर०||२ ।।
कहे गौतम गणधर तुम विरहे,
जिनवर दिनकर जावे.वीर०॥३॥
मोकुं साथ लई क्युं न चले,
चित्त अपराध धरावे. वी२०॥४॥
ईम परभाव विचारी अपना,
भावशुं भाव मिलावे. वीर०॥५॥
समवसरण में बेठे सिंहासन पर,
हुकम कोण फरमावे.||६||
वीर वीर लवते वीर अक्षर,
अंतर तिमिर हटावे. विर०।।७।।
सकल सुरासुर हर्षित होवे,
जुहार कारणकुं आवे. वी२०॥८॥
ईन्द्रभूति अनुभव की लीला,
‘ज्ञानविमल’ गुण गावे.||९||`,
      sa: "",
      en: `Veera vina vaanee kona sunaave, prabhu vina vaanee kona sunaave,
Jaba ye veera gaye shivamandira,
Aba meree shankaa kona mitaave. veera0 ||1||
Tuma vina chauviha sangha kamaladala,
Vikasita kona karaave. veera0||2 ||
Kahe gautama ganadhara tuma virahe,
Jinavara dinakara jaave.veera0||3||
Mokun saatha laee kyun na chale,
Chitta aparaadha dharaave. वी20||4||
Eema parabhaava vichaaree apanaa,
Bhaavashun bhaava milaave. veera0||5||
Samavasarana men bethe sinhaasana para,
Hukama kona pharamaave.||6||
Veera veera lavate veera akshara,
Antara timira hataave. vira0||7||
Sakala suraasura harshita hove,
Juhaara kaaranakun aave. वी20||8||
Eendrabhooti anubhava kee leelaa,
‘jnyaanavimala’ guna gaave.||9||`,
    },
  },
  {
    id: "veerji-suno-ek-vinanti-mori",
    type: "bhajan",
    title: {
      gu: "વીરજી સુણો એક વિનંતી મોરી, વાત વિચારો તુમે ધણી રે",
      hi: "वीरजी सुणो एक विनंती मोरी, वात विचारो तुमे धणी रे",
      sa: "",
      en: "Veerji Suno Ek Vinanti Mori",
    },
    text: {
      gu: `વીરજી સુણો એક વિનંતી મોરી, વાત વિચારો તુમે ધણી રે;
વીર! મને તારો મહાવીર! મને તારો, ભવજલ પાર ઉતારો.||૧||
પરિભ્રમણ મેં અનંતા રે કીધાં, હજુએ ન આવ્યો છેડલો રે;
તુમે તો થયા પ્રભુ સિદ્ધ નિરંજન,
અમે તો અનંતા ભવ ભમ્યાં રે. ।। ૨ ।।
તમે અમે વાર અનંતી વેળા, રમિયા સંસારી પણે રે;
તેહ પ્રીત જો પૂરણ પાળો, તો અમને તુમ સમ કરો રે. ॥३॥
તુમ સમ અમને યોગ્ય ન જાણો, તો કાંઈ થોડું દીજિએ રે;
ભવોભવ તુમ ચરણોની સેવા, પામી અમે ઘણું રીઝીએ રે. ॥४॥
ઈન્દ્રજાળીયો કહેતો રે આવ્યો, ગણધર પદ તેહને દિયો રે;
અર્જુનમાળી જે ઘોર પાપી, તેહને જિન! તમે ઉદ્ધર્યો રે.॥५॥
ચંદનબાળાએ અડદના બાકુળા, પડિલાભ્યા તમને પ્રભુ રે;
તેહને સાહુણી સાચી રે કીધી, શિવવધૂ સાથે ભેળવી રે. ॥६॥
ચરણે ચંડકોશિયો ડસિયો, કલ્પ આઠમે તે ગયો રે;
ગુણ તો તમારા પ્રભુ મુખથી સુણીને,
આવી તુમ સન્મુખ રહ્યો રે. ॥૭॥
નિરંજન પ્રભુ નામ ધરાવો, તો સહુને સરીખા ગણો રે;
ભેદભાવ પ્રભુ! દૂર કરીને, મુજશું રમો એકમેકશું રે.||૮||
મોડા વહેલા તુમ હી જ તારક, હવે વિલંબ શા કારણે રે;
જ્ઞાન તણા ભવના પાપ મિટાવો,
વારી જાઉં વીર તોરા વારણે રે. ।।૯।।`,
      hi: `वीरजी सुणो एक विनंती मोरी, वात विचारो तुमे धणी रे;
वीर! मने तारो महावीर! मने तारो, भवजल पार उतारो.||१||
परिभ्रमण में अनंता रे कीधां, हजुए न आव्यो छेडलो रे;
तुमे तो थया प्रभु सिद्ध निरंजन,
अमे तो अनंता भव भम्यां रे. ।। २ ।।
तमे अमे वार अनंती वेळा, रमिया संसारी पणे रे;
तेह प्रीत जो पूरण पाळो, तो अमने तुम सम करो रे. ॥३॥
तुम सम अमने योग्य न जाणो, तो कांई थोडुं दीजिए रे;
भवोभव तुम चरणोनी सेवा, पामी अमे घणुं रीझीए रे. ॥४॥
ईन्द्रजाळीयो कहेतो रे आव्यो, गणधर पद तेहने दियो रे;
अर्जुनमाळी जे घोर पापी, तेहने जिन! तमे उद्धर्यो रे.॥५॥
चंदनबाळाए अडदना बाकुळा, पडिलाभ्या तमने प्रभु रे;
तेहने साहुणी साची रे कीधी, शिववधू साथे भेळवी रे. ॥६॥
चरणे चंडकोशियो डसियो, कल्प आठमे ते गयो रे;
गुण तो तमारा प्रभु मुखथी सुणीने,
आवी तुम सन्मुख रह्यो रे. ॥७॥
निरंजन प्रभु नाम धरावो, तो सहुने सरीखा गणो रे;
भेदभाव प्रभु! दूर करीने, मुजशुं रमो एकमेकशुं रे.||८||
मोडा वहेला तुम ही ज तारक, हवे विलंब शा कारणे रे;
ज्ञान तणा भवना पाप मिटावो,
वारी जाउं वीर तोरा वारणे रे. ।।९।।`,
      sa: "",
      en: `Veerajee suno eka vinantee moree, vaata vichaaro tume dhanee re;
Veera! mane taaro mahaaveera! mane taaro, bhavajala paara utaaro.||1||
Paribhramana men anantaa re keedhaan, hajue na aavyo chhedalo re;
Tume to thayaa prabhu siddha niranjana,
Ame to anantaa bhava bhamyaan re. || 2 ||
Tame ame vaara anantee velaa, ramiyaa sansaaree pane re;
Teha preeta jo poorana paalo, to amane tuma sama karo re. ||3||
Tuma sama amane yogya na jaano, to kaanee thodun deejie re;
Bhavobhava tuma charanonee sevaa, paamee ame ghanun reejheee re. ||4||
Eendrajaaleeyo kaheto re aavyo, ganadhara pada tehane diyo re;
Arjunamaalee je ghora paapee, tehane jina! tame uddharyo re.||5||
Chandanabaalaae adadanaa baakulaa, padilaabhyaa tamane prabhu re;
Tehane saahunee saachee re keedhee, shivavadhoo saathe bhelavee re. ||6||
Charane chandakoshiyo dasiyo, kalpa aathame te gayo re;
Guna to tamaaraa prabhu mukhathee suneene,
Aavee tuma sanmukha rahyo re. ||7||
Niranjana prabhu naama dharaavo, to sahune sareekhaa gano re;
Bhedabhaava prabhu! doora kareene, mujashun ramo ekamekashun re.||8||
Modaa vahelaa tuma hee ja taaraka, have vilanba shaa kaarane re;
Jnyaana tanaa bhavanaa paapa mitaavo,
Vaaree jaaun veera toraa vaarane re. ||9||`,
    },
  },
  {
    id: "chaumasi-parnu-aave",
    type: "bhajan",
    title: {
      gu: "ચઉમાસી પારણું આવે, કરી વિનંતી નિજ ઘર જાવે",
      hi: "चउमासी पारणुं आवे, करी विनंती निज घर जावे",
      sa: "",
      en: "Chaumasi Parnu Aave",
    },
    text: {
      gu: `ચઉમાસી પારણું આવે, કરી વિનંતી નિજ ઘર જાવે;
પ્રિયા પુત્રને વાત જણાવે, પટકૂલ જરી પથરાવે રે;
મહાવીર પ્રભુ ઘેર આવે, જીરણ શેઠજી ભાવના ભાવે રે.||૧||
ઊભી શેરીએ જળ છંટકાવે,
જાઈ કેતકી ફૂલ બિછાવે; નિજ ઘેર તોરણ બંધાવે,
મેવા મીઠાઈ થાળ ભરાવે રે. મહા૦ ।। ૨ ।।
અરિહાને દાન જ દીજે, દેતાં જે દેખીને રીઝે;
ષટ્કાસી રોગ હરીજે, સિઝે દાયક ભવ ત્રીજે રે.||૩||
જિનવરની સન્મુખ જાઉં, મુજ મંદિરીએ પધરાવું;
પારણું ભલી ભાતે કરાવું, જુગતે જિનપૂજા રચાવું રે.||૪||
પછી પ્રભુને વળાવા જઈશું, કરજોડીને સન્મુખ રહીશું;
નમી વંદીને પાવન થઈશું, વિરતિ અતિ રંગે વરશું રે.||૫||
દયા દાન ક્ષમા શીલ ધરશું, ઉપદેશ સજ્જનને કરશું;
સત્ય જ્ઞાનદશા અનુસરશું, અનુકંપા લક્ષણ વરશું રે.||૬||
એમ જીરણ શેઠ વદંતા, પરિણામની ધારે ચઢંતા;
સીમે ઠરંતા, દેવ દુંદુભિ નાદ સુણંતા રે. ||૭||
કરી આયુ પૂરણ શુભ ભાવે, સુરલોક અચ્યુતે જાવે;
શાતાવેદનીય સુખ તે પાવે; ‘શુભવીર’ વચન રસ ગાવે રે. મહા૦।।૮।।`,
      hi: `चउमासी पारणुं आवे, करी विनंती निज घर जावे;
प्रिया पुत्रने वात जणावे, पटकूल जरी पथरावे रे;
महावीर प्रभु घेर आवे, जीरण शेठजी भावना भावे रे.||१||
ऊभी शेरीए जळ छंटकावे,
जाई केतकी फूल बिछावे; निज घेर तोरण बंधावे,
मेवा मीठाई थाळ भरावे रे. महा० ।। २ ।।
अरिहाने दान ज दीजे, देतां जे देखीने रीझे;
षट्कासी रोग हरीजे, सिझे दायक भव त्रीजे रे.||३||
जिनवरनी सन्मुख जाउं, मुज मंदिरीए पधरावुं;
पारणुं भली भाते करावुं, जुगते जिनपूजा रचावुं रे.||४||
पछी प्रभुने वळावा जईशुं, करजोडीने सन्मुख रहीशुं;
नमी वंदीने पावन थईशुं, विरति अति रंगे वरशुं रे.||५||
दया दान क्षमा शील धरशुं, उपदेश सज्जनने करशुं;
सत्य ज्ञानदशा अनुसरशुं, अनुकंपा लक्षण वरशुं रे.||६||
एम जीरण शेठ वदंता, परिणामनी धारे चढंता;
सीमे ठरंता, देव दुंदुभि नाद सुणंता रे. ||७||
करी आयु पूरण शुभ भावे, सुरलोक अच्युते जावे;
शातावेदनीय सुख ते पावे; ‘शुभवीर’ वचन रस गावे रे. महा०।।८।।`,
      sa: "",
      en: `Chaumaasee paaranun aave, karee vinantee nija ghara jaave;
Priyaa putrane vaata janaave, patakoola jaree patharaave re;
Mahaaveera prabhu ghera aave, jeerana shethajee bhaavanaa bhaave re.||1||
Oobhee shereee jala chhantakaave,
Jaaee ketakee phoola bichhaave; nija ghera torana bandhaave,
Mevaa meethaaee thaala bharaave re. mahaa0 || 2 ||
Arihaane daana ja deeje, detaan je dekheene reejhe;
Shatkaasee roga hareeje, sijhe daayaka bhava treeje re.||3||
Jinavaranee sanmukha jaaun, muja mandireee padharaavun;
Paaranun bhalee bhaate karaavun, jugate jinapoojaa rachaavun re.||4||
Pachhee prabhune valaavaa jaeeshun, karajodeene sanmukha raheeshun;
Namee vandeene paavana thaeeshun, virati ati range varashun re.||5||
Dayaa daana kshamaa sheela dharashun, upadesha sajjanane karashun;
Satya jnyaanadashaa anusarashun, anukanpaa lakshana varashun re.||6||
Ema jeerana shetha vadantaa, parinaamanee dhaare chadhantaa;
Seeme tharantaa, deva dundubhi naada sunantaa re. ||7||
Karee aayu poorana shubha bhaave, suraloka achyute jaave;
Shaataavedaneeya sukha te paave; ‘shubhaveera’ vachana rasa gaave re. mahaa0||8||`,
    },
  },
  {
    id: "vimal-jin-vimalta-tahriji",
    type: "bhajan",
    title: {
      gu: "વિમલ જિન વિમલતા તાહરીજી, અવર બીજે ન કહાય",
      hi: "विमल जिन विमलता ताहरीजी, अवर बीजे न कहाय",
      sa: "",
      en: "Vimal Jin Vimalta Tahriji",
    },
    text: {
      gu: `વિમલ જિન વિમલતા તાહરીજી, અવર બીજે ન કહાય;
લઘુ નદી જિમ તિમ લંઘીએજી, પણ સ્વયંભૂરમણ ન તરાય.||૧||
સયલ પુઢવી ગિરી જલ તરુજી, કોઈ તોલે એક હત્થ;
તેહ પણ તુજ ગુણગણ ભણીજી, ભાખવા નહિ સમરથ.||૨||
સર્વ પુદ્રલ નભ ધરમનાજી, તેમ અધર્મ‌ પ્રદેશ,
તાસ ગુણ ધર્મ પજ્જવ સહુજી, તુજ ગુણ ઈક તણો લેશ.||૩||
એમ નિજ ભાવ અનંતનીજી, અસ્તિતા કેટલી થાય;
નાસ્તિતા સ્વ પર પદ અસ્તિતાજી, તુજ સમ કાળ સમાય.||૪||
તાહરા શુદ્ધ સ્વભાવનેજી, આદરે ધરી બહુમાન;
તેહને તેહીજ નીપજેજી, એ કોઈ અદ્ભુત તાન.||૫||
તુમ પ્રભુ તુમ તારક વિભુજી, તુમ સમો અવર ન કોઈ;
તુમ દરસણ થકી હું તર્યોજી, શુદ્ધ આલંબન હોય.||૬||
પ્રભુ તણી વિમલતા ઓળખીજી, જે કરે થિર મન સેવ;
“દેવચંદ્ર’ પદ તે લહેજી, વિમલ આનંદ સ્વયમેવ.||૭||`,
      hi: `विमल जिन विमलता ताहरीजी, अवर बीजे न कहाय;
लघु नदी जिम तिम लंघीएजी, पण स्वयंभूरमण न तराय.||१||
सयल पुढवी गिरी जल तरुजी, कोई तोले एक हत्थ;
तेह पण तुज गुणगण भणीजी, भाखवा नहि समरथ.||२||
सर्व पुद्रल नभ धरमनाजी, तेम अधर्म‌ प्रदेश,
तास गुण धर्म पज्जव सहुजी, तुज गुण ईक तणो लेश.||३||
एम निज भाव अनंतनीजी, अस्तिता केटली थाय;
नास्तिता स्व पर पद अस्तिताजी, तुज सम काळ समाय.||४||
ताहरा शुद्ध स्वभावनेजी, आदरे धरी बहुमान;
तेहने तेहीज नीपजेजी, ए कोई अद्भुत तान.||५||
तुम प्रभु तुम तारक विभुजी, तुम समो अवर न कोई;
तुम दरसण थकी हुं तर्योजी, शुद्ध आलंबन होय.||६||
प्रभु तणी विमलता ओळखीजी, जे करे थिर मन सेव;
“देवचंद्र’ पद ते लहेजी, विमल आनंद स्वयमेव.||७||`,
      sa: "",
      en: `Vimala jina vimalataa taahareejee, avara beeje na kahaaya;
Laghu nadee jima tima langheeejee, pana svayanbhooramana na taraaya.||1||
Sayala pudhavee giree jala tarujee, koee tole eka hattha;
Teha pana tuja gunagana bhaneejee, bhaakhavaa nahi samaratha.||2||
Sarva pudrala nabha dharamanaajee, tema adharma‌ pradesha,
Taasa guna dharma pajjava sahujee, tuja guna eeka tano lesha.||3||
Ema nija bhaava anantaneejee, astitaa ketalee thaaya;
Naastitaa sva para pada astitaajee, tuja sama kaala samaaya.||4||
Taaharaa shuddha svabhaavanejee, aadare dharee bahumaana;
Tehane teheeja neepajejee, e koee adbhuta taana.||5||
Tuma prabhu tuma taaraka vibhujee, tuma samo avara na koee;
Tuma darasana thakee hun taryojee, shuddha aalanbana hoya.||6||
Prabhu tanee vimalataa olakheejee, je kare thira mana seva;
“devachandra’ pada te lahejee, vimala aananda svayameva.||7||`,
    },
  },
  {
    id: "vimal-jineshwar-jagatno-pyaro",
    type: "bhajan",
    title: {
      gu: "વિમલ જિનેશ્વર જગતનો પ્યારો, જીવન પ્રાણ આધાર હમારો",
      hi: "विमल जिनेश्वर जगतनो प्यारो, जीवन प्राण आधार हमारो",
      sa: "",
      en: "Vimal Jineshwar Jagatno Pyaro",
    },
    text: {
      gu: `વિમલ જિનેશ્વર જગતનો પ્યારો, જીવન પ્રાણ આધાર હમારો;
સાહિબ! મોહે વિમલ જિણંદા, મોહના! સમ સુરતરુકંદા. ॥੧॥
સાત રાજ અલગો જઈ વસીયો,
પણ મુજ ભક્તિતણો છે રસીયો. ।। ૨ ।।
મુજ ચિત્ત અંતર ક્યું કરી જાસી,
સેવક સુખીયો પ્રભુ શાબાશી. ॥૩॥
આળસ રશો જો સુખ દેવા,
તો કુણ કરશે તુમચી સેવા. ||૪ ||
મોહાદિક પ્રભુ દિલથી ઉગારો,
જન્મ જરાના દુઃખ નિવારો.||૫||
સેવક દુઃખ જો સ્વામી ન ભાંજે,
પૂરવ પાતિક નહિ મુજ માંજે. ।।૬।।
તો કુણ બીજો આશા પૂરે,
સાહિબ કાંઈ ઇચ્છિત પૂરે. ॥७॥
‘જ્ઞાનવિમલ’ સૂરિ જિનગુણ ગાવે,
સહેજે સમકિત બહુગુણ પાવે. ।।૮ ।।`,
      hi: `विमल जिनेश्वर जगतनो प्यारो, जीवन प्राण आधार हमारो;
साहिब! मोहे विमल जिणंदा, मोहना! सम सुरतरुकंदा. ॥੧॥
सात राज अलगो जई वसीयो,
पण मुज भक्तितणो छे रसीयो. ।। २ ।।
मुज चित्त अंतर क्युं करी जासी,
सेवक सुखीयो प्रभु शाबाशी. ॥३॥
आळस रशो जो सुख देवा,
तो कुण करशे तुमची सेवा. ||४ ||
मोहादिक प्रभु दिलथी उगारो,
जन्म जराना दुःख निवारो.||५||
सेवक दुःख जो स्वामी न भांजे,
पूरव पातिक नहि मुज मांजे. ।।६।।
तो कुण बीजो आशा पूरे,
साहिब कांई इच्छित पूरे. ॥७॥
‘ज्ञानविमल’ सूरि जिनगुण गावे,
सहेजे समकित बहुगुण पावे. ।।८ ।।`,
      sa: "",
      en: `Vimala jineshvara jagatano pyaaro, jeevana praana aadhaara hamaaro;
Saahiba! mohe vimala jinandaa, mohanaa! sama suratarukandaa. ||1||
Saata raaja alago jaee vaseeyo,
Pana muja bhaktitano chhe raseeyo. || 2 ||
Muja chitta antara kyun karee jaasee,
Sevaka sukheeyo prabhu shaabaashee. ||3||
Aalasa rasho jo sukha devaa,
To kuna karashe tumachee sevaa. ||4 ||
Mohaadika prabhu dilathee ugaaro,
Janma jaraanaa dukha nivaaro.||5||
Sevaka dukha jo svaamee na bhaanje,
Poorava paatika nahi muja maanje. ||6||
To kuna beejo aashaa poore,
Saahiba kaanee ichchhita poore. ||7||
‘jnyaanavimala’ soori jinaguna gaave,
Saheje samakita bahuguna paave. ||8 ||`,
    },
  },
  {
    id: "vimal-jineshwar-muj-parmeshwar",
    type: "bhajan",
    title: {
      gu: "વિમલ જિનેશ્વર મુજ પરમેશ્વર, અલવેસર ઉપગારી રે",
      hi: "विमल जिनेश्वर मुज परमेश्वर, अलवेसर उपगारी रे",
      sa: "",
      en: "Vimal Jineshwar Muj Parmeshwar",
    },
    text: {
      gu: `વિમલ જિનેશ્વર મુજ પરમેશ્વર, અલવેસર ઉપગારી રે;
સુણ સાહિબા સાચા, જગજીવન જિનરાજ જયંકર.
મુજને તુજ સુરતિ પ્યારી રે…||૧||
મહિર કરી જે વાંછિત દિજે, સેવક ચિત્ત ધરીજે;
એવા જાણી શિવસુખ પ્રાણી, ભક્તિ સહિ નાણી દીજે રે.||૨||
કામકુંભને સુરતરુથી પણ, પ્રભુભક્તિ મુજ પ્યારી રે;
એક ક્ષણ લગી સેવી, શિવસુખની દાતારી રે.‌॥3॥
ભક્તિ સુવાસના વાસે વાસિત, જે હોયે ભવિ પ્રાણી રે;
જીવ મુક્તિ ચિદાનંદરુપી, તે કહીએ શુદ્ધ નાણી રે.‌॥४॥
પ્રભુ તુજ શક્તિ તણી અતિ મોટી, શક્તિ એ જગમાં વ્યાપે રે;
એક વાર પણ ભાવે સેવી, ચિદાનંદ પદ આપે રે.‌॥५॥
પૂરણ પૂરવ પુણ્ય પસાયે, જો તુમ્હ ભગતિ મેં રે;
તો હું દુસ્તર એ ભવ દરિયો, તરિયો સહેજ સ્વામી રે.॥६॥
સાહિબ સેવક જાણી સાચો, નેકશું નજરે જોજો રે;
“નયવિજય’ કહે ભવોભવ જિનજી, તુમ ભક્તિ મુજ હોજો રે. ॥૭॥`,
      hi: `विमल जिनेश्वर मुज परमेश्वर, अलवेसर उपगारी रे;
सुण साहिबा साचा, जगजीवन जिनराज जयंकर.
मुजने तुज सुरति प्यारी रे…||१||
महिर करी जे वांछित दिजे, सेवक चित्त धरीजे;
एवा जाणी शिवसुख प्राणी, भक्ति सहि नाणी दीजे रे.||२||
कामकुंभने सुरतरुथी पण, प्रभुभक्ति मुज प्यारी रे;
एक क्षण लगी सेवी, शिवसुखनी दातारी रे.‌॥3॥
भक्ति सुवासना वासे वासित, जे होये भवि प्राणी रे;
जीव मुक्ति चिदानंदरुपी, ते कहीए शुद्ध नाणी रे.‌॥४॥
प्रभु तुज शक्ति तणी अति मोटी, शक्ति ए जगमां व्यापे रे;
एक वार पण भावे सेवी, चिदानंद पद आपे रे.‌॥५॥
पूरण पूरव पुण्य पसाये, जो तुम्ह भगति में रे;
तो हुं दुस्तर ए भव दरियो, तरियो सहेज स्वामी रे.॥६॥
साहिब सेवक जाणी साचो, नेकशुं नजरे जोजो रे;
“नयविजय’ कहे भवोभव जिनजी, तुम भक्ति मुज होजो रे. ॥७॥`,
      sa: "",
      en: `Vimala jineshvara muja parameshvara, alavesara upagaaree re;
Suna saahibaa saachaa, jagajeevana jinaraaja jayankara.
Mujane tuja surati pyaaree re…||1||
Mahira karee je vaanchhita dije, sevaka chitta dhareeje;
Evaa jaanee shivasukha praanee, bhakti sahi naanee deeje re.||2||
Kaamakunbhane surataruthee pana, prabhubhakti muja pyaaree re;
Eka kshana lagee sevee, shivasukhanee daataaree re.‌||3||
Bhakti suvaasanaa vaase vaasita, je hoye bhavi praanee re;
Jeeva mukti chidaanandarupee, te kaheee shuddha naanee re.‌||4||
Prabhu tuja shakti tanee ati motee, shakti e jagamaan vyaape re;
Eka vaara pana bhaave sevee, chidaananda pada aape re.‌||5||
Poorana poorava punya pasaaye, jo tumha bhagati men re;
To hun dustara e bhava dariyo, tariyo saheja svaamee re.||6||
Saahiba sevaka jaanee saacho, nekashun najare jojo re;
“nayavijaya’ kahe bhavobhava jinajee, tuma bhakti muja hojo re. ||7||`,
    },
  },
  {
    id: "vimalnath-muj-man-vase",
    type: "bhajan",
    title: {
      gu: "વિમલનાથ મુજ મન વસે",
      hi: "विमलनाथ मुज मन वसे",
      sa: "",
      en: "Vimalnath Muj Man Vase",
    },
    text: {
      gu: `વિમલનાથ મુજ મન વસે,
જિમ સીતા મન રામ.||૧||
પિક વંછે સહકારને,
પંથી મન જિમ ધામ.वि०॥२॥
કુંજર ચિત્ત રેવા વસે,
કમલા મન ગોવિંદ.वि०॥३॥
ગૌરી મન શંકર વસે,
કુમુદિની મન જિમ ચંદ.वि०॥४॥
અલિ મન વિકસિત માલતી,
કમલિની ચિત્ત દિણંદ.वि०॥५॥
વાચક ‘જસ’ને વાહલો,
તિમ શ્રી વિમલ જિણંદ.वि०॥६॥`,
      hi: `विमलनाथ मुज मन वसे,
जिम सीता मन राम.||१||
पिक वंछे सहकारने,
पंथी मन जिम धाम.वि०॥२॥
कुंजर चित्त रेवा वसे,
कमला मन गोविंद.वि०॥३॥
गौरी मन शंकर वसे,
कुमुदिनी मन जिम चंद.वि०॥४॥
अलि मन विकसित मालती,
कमलिनी चित्त दिणंद.वि०॥५॥
वाचक ‘जस’ने वाहलो,
तिम श्री विमल जिणंद.वि०॥६॥`,
      sa: "",
      en: `Vimalanaatha muja mana vase,
Jima seetaa mana raama.||1||
Pika vanchhe sahakaarane,
Panthee mana jima dhaama.वि0||2||
Kunjara chitta revaa vase,
Kamalaa mana govinda.वि0||3||
Gauree mana shankara vase,
Kumudinee mana jima chanda.वि0||4||
Ali mana vikasita maalatee,
Kamalinee chitta dinanda.वि0||5||
Vaachaka ‘jasa’ne vaahalo,
Tima shree vimala jinanda.वि0||6||`,
    },
  },
  {
    id: "virah-se-bhayo-re",
    type: "bhajan",
    title: {
      gu: "વિરહ સે ભયો રે ઉદાસી હો વીરજિન!…વિરહ સે ભયો રે!",
      hi: "विरह से भयो रे उदासी हो वीरजिन!…विरह से भयो रे!",
      sa: "",
      en: "Virah Se Bhayo Re",
    },
    text: {
      gu: `વિરહ સે ભયો રે ઉદાસી હો વીરજિન!…વિરહ સે ભયો રે!
દુઃષમ કાલમેં દુઃખિયો છોડી, તુમ ભયે શિવપુર વાસી. હો૦।।૧।।
પ્રભુ દરિસણ પ્રત્યક્ષ ન દીઠું,
ઈણશું ભયો રે નિરાશી. ||૨||
મોહરાય સુભટે મુજ ઘેર્યો,
મમ્હારી કરે સબ હાંસી.हो०॥३॥
તુ વિના એકાકી મુજ દેખી,
ડારી ગલે મોહ ફાંસી.હો૦ ।।૪ ।|
પ્રભુ વિના કોન કરે મુજ કરુણા,
દેખો દિલમેં વિમાસી. હો.।।૫।।
પણ તુજ આગમને તુજ મૂરતિ,
એહી શરણ મુજ થાસી. હો૦।।૬।।
એહ ભરોસો મુજ મન મોટો,
ભાંગી ભવ કી ઉદાસી. હો૦।।૭।|
“વીરવિજય’ કહે વીરપ્રભુ કી,
મૂરતિ શરણ જ થાસી. હો૦।।૮।।`,
      hi: `विरह से भयो रे उदासी हो वीरजिन!…विरह से भयो रे!
दुःषम कालमें दुःखियो छोडी, तुम भये शिवपुर वासी. हो०।।१।।
प्रभु दरिसण प्रत्यक्ष न दीठुं,
ईणशुं भयो रे निराशी. ||२||
मोहराय सुभटे मुज घेर्यो,
मम्हारी करे सब हांसी.हो०॥३॥
तु विना एकाकी मुज देखी,
डारी गले मोह फांसी.हो० ।।४ ।|
प्रभु विना कोन करे मुज करुणा,
देखो दिलमें विमासी. हो.।।५।।
पण तुज आगमने तुज मूरति,
एही शरण मुज थासी. हो०।।६।।
एह भरोसो मुज मन मोटो,
भांगी भव की उदासी. हो०।।७।|
“वीरविजय’ कहे वीरप्रभु की,
मूरति शरण ज थासी. हो०।।८।।`,
      sa: "",
      en: `Viraha se bhayo re udaasee ho veerajina!…viraha se bhayo re!
Dushama kaalamen dukhiyo chhodee, tuma bhaye shivapura vaasee. ho0||1||
Prabhu darisana pratyaksha na deethun,
Eenashun bhayo re niraashee. ||2||
Moharaaya subhate muja gheryo,
Mamhaaree kare saba haansee.हो0||3||
Tu vinaa ekaakee muja dekhee,
Daaree gale moha phaansee.ho0 ||4 ||
Prabhu vinaa kona kare muja karunaa,
Dekho dilamen vimaasee. ho.||5||
Pana tuja aagamane tuja moorati,
Ehee sharana muja thaasee. ho0||6||
Eha bharoso muja mana moto,
Bhaangee bhava kee udaasee. ho0||7||
“veeravijaya’ kahe veeraprabhu kee,
Moorati sharana ja thaasee. ho0||8||`,
    },
  },
];

// Expose for the pages.
if (typeof window !== "undefined") {
  window.CONTENT = CONTENT;
  window.CATEGORIES = CATEGORIES;
}
