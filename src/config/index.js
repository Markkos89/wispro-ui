/* set your data here */
const email = 'super-email-of-the-auther@gmail.com';
const domain = 'your-project-domain.com'
/* ***************** */

const repository = 'https://github.com/suren-atoyan/react-pwa';

const messages = {
  app: {
    crash: {
      title: 'Oooops... Sorry, I guess, something went wrong. You can:',
      options: {
        email: `contact with author by this email - ${email}`,
        reset: 'Press here to reset the application',
      },
    },
  },
  loader: {
    fail: 'Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea',
  },
  images: {
    failed: 'something went wrong during image loading :(',
  },
  404: 'Hey bro? What are you looking for?',
};

const cancelationMessage = 'operation is manually canceled';

const dateFormat = 'MMMM DD, YYYY';

const title = 'FotoPlus';

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

export {
  messages,
  cancelationMessage,
  dateFormat,
  email,
  domain,
  repository,
  loader,
  title,
};
