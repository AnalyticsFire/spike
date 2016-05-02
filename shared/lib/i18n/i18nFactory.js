/* global require */

import i18n from 'i18next';

function i18nFactory(environment, directory, provider, callback) {
  let BackendProvider = provider || require('i18next-xhr-backend');
  let path = (environment === 'server') ? `${directory}/..` : '';
  
  let options = {
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translation'],
    defaultNS: 'translation',

    debug: true,
    /* nsSeparator: false,
    keySeparator: false, */

    interpolation: {
      escapeValue: false // not needed for react!!
    },

    backend: {
      // path where resources get loaded from
      loadPath: `${path}/assets/translations/{{lng}}.json`,

      // your backend server supports multiloading
      // /locales/resources.json?lng=de+en&ns=ns1+ns2
      allowMultiLoading: false,
      // allow cross domain requests
      crossDomain: true

    }
  };

  return i18n
    .use(BackendProvider)
    .init(options, callback);

}


export default i18nFactory;