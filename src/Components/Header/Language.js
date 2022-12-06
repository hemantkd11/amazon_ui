import React, { useEffect, useState } from "react";
import { useQuery } from "../";
const DEFAULT_LANGUAGE = {
  country_lang: {
    english: {
      id: 1,
      code: "En",
      name: "english",
    },
  },
};

const Language = () => {
  const { query, replaceQueryParams } = useQuery();
  const [selectedLang, setSelectedLang] = useState({
    id: 1,
    code: "En",
    name: "english",
  });
  const [languages, setLanguages] = useState(DEFAULT_LANGUAGE);

  const getLanguages = async () => {
    let response = await fetch("/languages");
    let resp = await response.json();

    console.log(resp);
    if (resp.lang) {
      setLanguages(resp.lang);
    }
  };

  useEffect(() => {
    getLanguages();
  }, []);

  useEffect(() => {
    console.log(
      "query.lang, languages.country_lang",
      query.lang,
      languages.country_lang
    );
    if (languages.country_lang && selectedLang.code !== query.lang) {
      Object.keys(languages.country_lang || {}).map((item) => {
        if (languages.country_lang[item].code === query.lang) {
          setSelectedLang(languages.country_lang[item]);
        }
      });
    }
  }, [languages.country_lang]);

  return (
    <div className="flex-container column  relative  language-container relative">
      <div className="language">{selectedLang.name}</div>
      <div className="language-menu">
        {Object.values(languages.country_lang || {}).map((lang) => (
          <div key={lang.code}>
            <input
              checked={lang.code === selectedLang.code}
              type="radio"
              value={lang.code}
              name="lang"
              onChange={(e) => {
                setSelectedLang(lang);
                replaceQueryParams({
                  lang: lang.code,
                  name: undefined,
                });
              }}
            />
            <label>{lang.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Language;
