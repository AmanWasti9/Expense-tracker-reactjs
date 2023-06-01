import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import AddTransactions from './components/AddTransactions';
import History from './components/History';
import { GlobalProvider } from './Context/GloabalState';
// import BarChart from './components/BarChart';

function App() {
  return (
      <GlobalProvider>
        <div className="MainBoxs">
        <Header/>
        <div className="container">
        <Balance/>
        <IncomeExpense/>
        <History/>
        <AddTransactions/>
        </div>
        </div>         
      </GlobalProvider>
      

  );
}

export default App;
