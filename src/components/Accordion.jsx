/* ■■■■■■■■■■■■■■■■■■■■■■■ IMPORT ■■■■■■■■■■■■■■■■■■■■■■■ */
// import usestate
import { useState } from 'react';
//import react icons
import { GoTriangleLeft, GoTriangleDown } from 'react-icons/go';

/* ■■■■■■■■■■■■■■■■■■■■■■ FUNCTION ■■■■■■■■■■■■■■■■■■■■■■ */
function Accordion({ items }) {
  /* STATE ________________________________________________ */
  const [expandedIndex, setExpandedIndex] = useState(-1);

  /* HANDLER ______________________________________________ */
  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoTriangleDown /> : <GoTriangleLeft />}
      </span>
    );
    return (
      <div className="mx-4  " key={item.id}>
        <div
          onClick={() => {
            handleClick(index);
          }}
          className="flex items-center justify-between gap-2 p-3 bg-gray-100 border-b hover:scale-105 transition duration-300 cursor-pointer"
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && (
          <div className="p-4 duration-700 delay-500 animate__animated animate__slideInDown ">
            {item.content}
          </div>
        )}
      </div>
    );
  });

  /* RETURN _______________________________________________ */
  return (
    <div className="flex flex-col justify-center h-screen items-left border-x">
      {renderedItems}
    </div>
  );
}

export default Accordion;

/* ■■■■■■■■■■■■■■■■■■■■■■ Alternative ■■■■■■■■■■■■■■■■■■■■■■ */
// import { useState } from 'react';
// import { GoTriangleLeft, GoTriangleDown } from 'react-icons/go';

// const Accordion = ({ items }) => {
//   /* USESTATE ___________________________________________ */
//   const [expandedIndex, setExpandedIndex] = useState(0);
//   /* HANDLER ____________________________________________ */
//   const handleClick = (nextIndex) => {
//     if (expandedIndex === nextIndex) {
//       setExpandedIndex(-1);
//     } else {
//       setExpandedIndex(nextIndex);
//     }
//   };

//   const renderedItems = items.map((item, index) => {
//     const isExpanded = index === expandedIndex;
//     const icon = isExpanded ? <GoTriangleDown /> : <GoTriangleLeft />;

//     return (
//       <div className="flex flex-col align-center justify-center items-center  ">
//         <div
//           className="flex bg-teal-200 rounded-lg m-1 p-4 w-1/2  align-center justify-center items-center hover:cursor-pointer justify-between "
//           onClick={() => handleClick(index)}
//         >
//           {item.label}
//           {icon}
//         </div>
//         {isExpanded && (
//           <div className="w-1/2 p-2 border-b border-t ">{item.content}</div>
//         )}
//       </div>
//     );
//   });
//   return <div>{renderedItems}</div>;
// };

// export default Accordion;
