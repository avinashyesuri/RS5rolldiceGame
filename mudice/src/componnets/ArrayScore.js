// import React, { useState } from 'react';
// import './AllPags.css';
// import fd1 from '../imgs/cubes_gambling_n_02 1.png'
// import fd2 from '../imgs/cubes_gambling_n_02 2.png'
// import fd3 from '../imgs/cubes_gambling_n_02 3.png'
// import fd4 from '../imgs/cubes_gambling_n_02 4.png'
// import fd5 from '../imgs/cubes_gambling_n_02 5.png'
// import fd6 from '../imgs/cubes_gambling_n_02 6.png'

// const ArrayScore = ({arrayVal,diceVal,arrayNum}) => {
//     const arrayScre = {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-end"
//     };

//     const arrayNum = [1, 2, 3, 4, 5, 6];
//     const [arrayVal, setArrayVal] = useState(null);



//     const [diceVal,setDiceVal] = useState(1)
//     const randomFun = (max,min)=>{
//         console.log(Math.ceil(Math.random() * (max -min) + min))
//         return Math.ceil(Math.random() * (max -min) + min)
//     }

//  const Rolldice = ()=>{
//    const ranDomNum = randomFun(0,6)
//        setDiceVal((prev) => ranDomNum);
//    }

    // return (
    //     <div style={arrayScre}>
    //         <div className='flex'>
    //             {arrayNum.map((val, inde) => (
    //                 <div
    //                     key={inde}
    //                     className={`Box ${arrayVal === val ? 'selected' : ''}`}
  //we set here array use-state value, then using this we equate USESTATE === VAL then backand colortext will change
//                         onClick={() => setArrayVal(val)}
//                     >
//                         {val}
//                     </div>
//                 ))}
//             </div>
//             <p style={{ margin: "10px", color: "black", fontWeight: "bolder", alignItems: "flex-end" }}>
//                 SELECT NO
//             </p>

//             <div onClick={Rolldice}>
//                 <img src={`fd${diceVal}`} alt ={`dice ${diceVal}`}/>
//                 <p style={{ margin: "10px", color: "black", fontWeight: "bolder", alignItems: "flex-end" }}>
//                 CLICK ON DICE TO ROLL
//             </p>
//             <button>Reset Scores</button>
//             <button>Show Rulz</button>
//             </div>




//         </div>
//     );
// }

// export default ArrayScore;





import React from 'react';
import './AllPags.css';

const ArrayScore = ({ arrayVal, diceVal, arrayNum, setArrayVal, Rolldice }) => {
  const arrayScre = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  };

  return (
    <div style={arrayScre}>
      <div className='flex'>
        {arrayNum.map((val, inde) => (
          <div
            key={inde}
            className={`Box ${arrayVal === val ? 'selected' : ''}`}
            onClick={() => setArrayVal(val)}  // Use the passed setter function
          >
            {val}
          </div>
        ))}
      </div>
      <p style={{ margin: '10px', color: 'black', fontWeight: 'bolder', alignItems: 'flex-end' }}>
        SELECT NO
      </p>

      <div onClick={Rolldice}>
        <img src={`fd${diceVal}`} alt={`dice ${diceVal}`} />
        <p style={{ margin: '10px', color: 'black', fontWeight: 'bolder', alignItems: 'flex-end' }}>
          CLICK ON DICE TO ROLL
        </p>
        <button>Reset Scores</button>
        <button>Show Rulz</button>
      </div>
    </div>
  );
};

export default ArrayScore;
