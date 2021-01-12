import './global.css';
import * as serviceWorker from './serviceWorker';

if (!document.ie) { // check for ie
  Promise.all([
    import('react'),
    import('react-dom'),
    import('App'),
  ]).then(([
    { default: React },
    { default: ReactDOM },
    { default: App },
  ]) => {
    ReactDOM.render(
      <App />,
      document.getElementById('root'),
    );
  });

  // VER DE IMPLEMENTAR UPDATE NOTIFICATIONS CON REDUX

  // serviceWorker.register({
  //   onSuccess: () => getSWActions().handleSuccess(),
  //   onUpdate: reg => getSWActions().handleUpdate(reg),
  // });
  serviceWorker.register();
}
