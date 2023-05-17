import Accordion from './components/Accordion';

const App = () => {
  const dummyData = [
    {
      id: '32cdsq3f',
      label: 'How Can I be a good programmer?',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptatem, repudiandae fugit itaque veniam nostrum quia rerum laborum cupiditate molestiae, accusamus labore autem tempora aliquam fuga quam necessitatibus eum at!',
    },
    {
      id: '32cdsq3dsfrff',
      label: 'How Can I find My Passion?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos maxime cupiditate, molestiae quia rerum perspiciatis blanditiis placeat? Exercitationem voluptatem, sunt temporibus laboriosam cum placeat? Cupiditate magnam iste voluptatem inventore commodi!',
    },
    {
      id: '32cdsq3ffwefwjn',
      label: 'Is there enough job positions for a Developer?',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum earum quisquam necessitatibus ex nobis officiis iste veniam voluptatem dolore temporibus reprehenderit ratione laborum quibusdam ad placeat recusandae, ipsum fugit beatae.',
    },
  ];
  return (
    <div className="mt-10">
      <Accordion items={dummyData} />
    </div>
  );
};

export default App;
