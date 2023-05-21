import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import RootRoutes from "@Routes/RootRoutes";
import "@Assets/scss/footer.scss";
import "@Assets/Scss/global.scss";
import "@Assets/scss/header.scss";
import { store } from "./Store/configureStore";
import "react-toastify/dist/ReactToastify.css";

function App() {
  localStorage.setItem(
    "user",
    JSON.stringify({
      user: {
        id: "",
        username: "",
        role: "",
        password: ""
      },
      token: "",
      teacherData: {},
      studentData: {}
    })
  );
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <RootRoutes />
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
