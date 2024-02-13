import i18next from 'i18next';

i18next.init({
  lng: 'es', // if you're using a language detector, do not define the lng option
  debug: false,
  resources: {
    en: {
        translation: {
          //Chatbox
          ChatBoxTop: 'say something',
          ChatBoxPlaceholder: 'Type Your Message',
          ChatBoxButton: 'Send',
        },
      },
      es: {
        translation: {
          //Chatbox
          ChatBoxTop: 'Preguntame algo',
          ChatBoxPlaceholder: 'Escribe tu mensaje',
          ChatBoxButton: 'Enviar',
        },
      },
  }
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
export default i18next;