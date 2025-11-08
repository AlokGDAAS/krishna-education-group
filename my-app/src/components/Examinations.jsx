import React, { useState } from "react";

const UPPSC = ({ text, lan }) => {
  return (
    <div className="text-white">
      <p className="text-center text-4xl font-bold">UPPSC</p>
      <h2 className="text-gray-300 font-semibold text-2xl py-4">
        Brief History
      </h2>
      {text[lan].para_1}
    </div>
  );
};

const Examinations = () => {
  const [lan, setLan] = useState("en");
  const [name, setName] = useState("हिंदी"); // button text for next language

  const language = () => {
    setLan((prev) => (prev === "en" ? "hi" : "en"));
    setName((prev) => (prev === "English" ? "हिंदी" : "English"));
  };

  const pcstext = {
    en: {
      para_1: (
        <p className="">
          In <b>1858</b>, the British Government took direct control over the
          administration of India. This announcement was made in November 1858
          at <b>Minto Park, Allahabad</b>, where the then Viceroy,{" "}
          <b>Lord Canning</b>, read out the <b>Proclamation of Queen Victoria</b>.
          <br />
          <br />
          In <b>June 1923</b>, a <b>Royal Commission on the Superior Civil Services
          in India</b> was appointed under <b>Lord Lee of Fareham</b>. The{" "}
          <b>Lee Commission of 1924</b> first recommended the establishment of a{" "}
          <b>Public Service Commission</b> consisting of five members “to regulate
          and exercise disciplinary control over the services.” Thus, the{" "}
          <b>Public Service Commission of India</b> came into existence in{" "}
          <b>1926</b>.
          <br />
          <br />
          In <b>1929</b>, the first <b>Provincial Public Service Commission</b> was
          established in the <b>Madras Presidency</b>. The{" "}
          <b>Government of India Act of 1935</b> introduced the <b>federal
          principle</b>, providing for both a <b>Federal Public Service
          Commission</b> and <b>Provincial Public Service Commissions</b>.
          <br />
          <br />
          The <b>Part III</b> of the <b>Government of India Act, 1935</b>, which
          introduced <b>provincial autonomy</b>, came into effect in{" "}
          <b>April 1937</b>, leading to the establishment of seven{" "}
          <b>Provincial Public Service Commissions</b>:
          <br />
          <br />
          1. Assam (at Shillong) <br />
          2. Bengal (at Calcutta) <br />
          3. Bombay and Sind (at Bombay) <br />
          4. Central Provinces, Bihar and Orissa (at Ranchi) <br />
          5. Burma (at Rangoon) <br />
          6. Punjab and North-West (at Lahore) <br />
          7. United Provinces (at Allahabad)
          <br />
          <br />
          <b>Formation of the Uttar Pradesh Public Service Commission (UPPSC)</b>
          <br />
          <br />
          The <b>Uttar Pradesh Public Service Commission</b> was constituted on{" "}
          <b>1 April 1937</b> under <b>Section 264</b> of the{" "}
          <b>Government of India Act, 1935</b>, with its headquarters at{" "}
          <b>Allahabad</b>.
        </p>
      ),
      para_2:(
        <p></p>
      )
    },
    hi: {
      para_1: (
        <p className="">
          वर्ष <b>1858</b> में ब्रिटिश सरकार ने भारत के प्रशासन का प्रत्यक्ष
          नियंत्रण अपने हाथ में ले लिया। यह घोषणा <b>नवंबर 1858</b> में{" "}
          <b>इलाहाबाद के मिंटो पार्क</b> में की गई, जहाँ तत्कालीन वायसराय{" "}
          <b>लॉर्ड कैनिंग</b> ने <b>महारानी विक्टोरिया की उद्घोषणा</b> को पढ़कर
          सुनाया।
          <br />
          <br />
          <b>जून 1923</b> में, भारत में उच्च सिविल सेवाओं पर एक{" "}
          <b>रॉयल कमीशन</b> का गठन किया गया, जिसकी अध्यक्षता{" "}
          <b>लॉर्ड ली ऑफ फेयरहम</b> ने की।{" "}
          <b>1924 के ली आयोग</b> ने पहली बार पाँच सदस्यों वाला एक{" "}
          <b>लोक सेवा आयोग</b> गठित करने की सिफारिश की। इसी प्रकार,{" "}
          <b>भारत का लोक सेवा आयोग</b> वर्ष <b>1926</b> में अस्तित्व में आया।
          <br />
          <br />
          वर्ष <b>1929</b> में, प्रथम <b>प्रांतीय लोक सेवा आयोग</b> की स्थापना{" "}
          <b>मद्रास प्रेसीडेंसी</b> में की गई।{" "}
          <b>भारत सरकार अधिनियम 1935</b> ने संघीय सिद्धांत को लागू किया, जिसके
          अंतर्गत एक <b>संघीय लोक सेवा आयोग</b> और{" "}
          <b>प्रांतीय लोक सेवा आयोगों</b> दोनों का प्रावधान किया गया।
          <br />
          <br />
          <b>भारत सरकार अधिनियम 1935</b> के <b>भाग-III</b> में{" "}
          <b>प्रांतीय स्वायत्तता</b> की व्यवस्था की गई थी, जो{" "}
          <b>अप्रैल 1937</b> में लागू हुई। इसके परिणामस्वरूप, 1935 के अधिनियम
          के तहत सात <b>प्रांतीय लोक सेवा आयोगों</b> की स्थापना की गई:
          <br />
          <br />
          1. असम (शिलांग में) <br />
          2. बंगाल (कलकत्ता में) <br />
          3. बॉम्बे और सिंध (बॉम्बे में) <br />
          4. मध्य प्रांत, बिहार और उड़ीसा (रांची में) <br />
          5. बर्मा (रंगून में) <br />
          6. पंजाब और उत्तर-पश्चिम (लाहौर में) <br />
          7. संयुक्त प्रांत (इलाहाबाद में)
          <br />
          <br />
          <b>उत्तर प्रदेश लोक सेवा आयोग (UPPSC) का गठन</b>
          <br />
          <br />
          <b>उत्तर प्रदेश लोक सेवा आयोग</b> का गठन{" "}
          <b>1 अप्रैल 1937</b> को{" "}
          <b>भारत सरकार अधिनियम 1935</b> की <b>धारा 264</b> के अंतर्गत किया गया,
          जिसका मुख्यालय <b>इलाहाबाद</b> में स्थापित किया गया।
        </p>
      ),
    },
  };

  return (
    <div>
      <h1 className="text-white font-semibold text-lg text-center py-4">
        Know Your Examination
      </h1>
      <div className="md:border border-gray-400">
        <div className="w-8/12 mx-auto py-4 md:flex text-center gap-4 exams">
          <div className="md:w-10/12">
            <p className="">UPPSC</p>
            <p className="mt-2">Lower PCS</p>
          </div>
          <div className="md:w-10/12 mt-2 md:mt-0">
            <p className="">RO/ARO</p>
            <p className="mt-2">O Level</p>
          </div>
        </div>

        {/* details */}
        <div className="md:w-8/12 mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-white font-semibold text-xl"></h1>
            <button
              onClick={language}
              className="cursor-pointer bg-blue-400 rounded-full py-1 px-4 text-center font-semibold text-white"
            >
              {name}
            </button>
          </div>
          <div className="pb-4">
          <UPPSC text={pcstext} lan={lan} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Examinations;

