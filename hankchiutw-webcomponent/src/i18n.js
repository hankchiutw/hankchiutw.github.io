import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import axios from 'axios';

export const _ = i18next.t.bind(i18next);

const gistID = 'i18next';
const validNS = ['translation', 'resume'];
async function getJSONMap() {
  const res = await axios.get('https://api.github.com/users/hankchiutw/gists');
  const gist = res.data.find(({ description }) => description === gistID);

  try {
    const enMap = validNS.reduce(
      (obj, ns) => ({
        [ns]: gist.files[`${ns}.json`].raw_url,
        ...obj,
      }),
      {}
    );
    return {
      en: enMap,
    };
  } catch (e) {
    throw new Error(`Cannot find locale files from github gists: ${e}`);
  }
}
export const i18nReady = getJSONMap().then(jsonMap => {
  return i18next.use(XHR).init({
    debug: false,
    lng: 'en',
    fallbackLng: 'en',
    ns: validNS,
    defaultNS: validNS[0],
    backend: {
      loadPath: (lng, ns) => jsonMap[lng][ns],
      crossDomain: true,
    },
  });
});
