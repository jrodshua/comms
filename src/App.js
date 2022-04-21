import TitleMenu from './components/menu/TitleMenu';
import './styles.css';

function App() {
  return (
    <div className="bg-slate-300 w-screen h-screen flex">
      <div className="w-5/6 h-5/6 border-solid border-2 border-red-600 m-auto p-2 flex justify-between">
        <div className="border-2 border-red-50 w-1/4">
          <TitleMenu />
        </div>
        <div className="border-2 border-purple-700 w-3/4">bulletin</div>
      </div>
    </div>
  );
}

export default App;
