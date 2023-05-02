import Button from './components/Button';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen align-center bg-slate-100 ">
      <Button primary className="w-1/5 p-2 m-2 bg-red-300 rounded-lg">
        Amir
      </Button>
      <Button primary className="w-1/5 p-2 m-2 bg-blue-300 rounded-lg">
        Eli
      </Button>
      <Button className="w-1/5 p-2 m-2 bg-red-300 rounded-lg">Ati</Button>
      <Button className="w-1/5 p-2 m-2 bg-yellow-300 rounded-lg">Ebi</Button>
      <Button className="w-1/5 p-2 m-2 bg-green-300 rounded-lg">Hossein</Button>
    </div>
  );
};

export default App;
