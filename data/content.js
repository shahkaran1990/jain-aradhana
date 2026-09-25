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
];

// Expose for the pages.
if (typeof window !== "undefined") {
  window.CONTENT = CONTENT;
  window.CATEGORIES = CATEGORIES;
}
