import Button from '../components/Button';
// import { AiFillStar, AiTwotoneStar } from 'react-icons/go';
import { AiFillStar } from 'react-icons/ai';
import { GoTriangleRight } from 'react-icons/go';

const App = () => {
  /* HANDLERS _____________________________________________ */
  const handleClick = () => {
    console.log('You clicked me!');
  };

  const handleOnMouse = () => {
    console.log('You have touched me!');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen align-center bg-slate-100">
      <Button warning outline onClick={handleClick} onMouseOver={handleOnMouse}>
        <AiFillStar />
        Amir
      </Button>
      <Button className="mb-10" primary rounded outline onClick={handleClick}>
        <AiFillStar />
        Amir
      </Button>
      <Button secondary>
        <AiFillStar />
        Eli
      </Button>
      <Button success>Ati</Button>
      <Button danger rounded>
        Ebi
      </Button>
      <Button danger>Hossein</Button>
      <Button warning rounded>
        Baba
      </Button>
      <Button primary rounded>
        <GoTriangleRight />
        Maman
      </Button>
    </div>
  );
};

export default App;
