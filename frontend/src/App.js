import Routes from './routes';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle/>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;