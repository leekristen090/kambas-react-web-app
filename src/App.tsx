// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Labs from "./Labs";
import Kambaz from "./Kambaz";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Kambaz/store";

export default function App() {
    return (
        <HashRouter>
            <Provider store={store}>
                <div>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"Kambaz"}/>} />
                        <Route path={"/Labs/*"} element={<Labs />} />
                        <Route path={"/Kambaz/*"} element={<Kambaz />} />
                    </Routes>
                </div>
            </Provider>
        </HashRouter>
    );
}

// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <h1>Welcome to WebDev</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
//
// export default App
