import React from 'react'
import match1 from '../images/match1.mp4'
import match2 from '../images/match 2.mp4'
import match3 from '../images/match3.mp4'
import dr1 from '../images/flag1.jpg';
import flag2 from '../images/flag2.png';
import flag3 from '../images/flag3.png';
import flag4 from '../images/flag4.png';


const Qatar = () => {
  return (
    <div name='Qatar' className=' flex text w-full h-screen bg-gradient-to-r from-red-600 to-red-250'>
    <div >
    <p  className='text-4xl mt-85 font-bold inline border-b-4 border-pink-600  mt-10px' >Qatar World Cup</p>
    
        <table class="tab2" >
            <caption className='text-2xl font-bold text-[#e4e4e7] underline '>resume de match de l'equipe nationale</caption>
    <tr className='text-3xl font-bold  '>
        <th >  Match</th>
        <th> Equipes        </th>
        <th>Result         </th>
        <th>Resume         </th>
        
    </tr>
    <tr >
        <td>1 </td>
        <td  className=' font-medium  text-black'><img className='h-10 w-10' src={flag4} alt="denmark" /> Denmark <br /> vs Tunis <br />  <img className='h-10 w-10' src={dr1} alt="tunis" /> </td>
        <td  className=' font-medium  text-black'><img className='h-10 w-10' src={flag4} alt="denmark" />0-0<img className='h-10 w-10' src={dr1} alt="tunis" /></td>
        <td className='h-50 w-50'> <video src={match1} controls></video></td>
    </tr>
    <tr>
        <td  className=' font-medium  text-black'>2 </td>
        <td  className=' font-medium  text-black'><img className='h-10 w-10' src={flag3} alt="australia" /> <span>Australia vs Tunis</span>  <img className='h-10 w-10' src={dr1} alt="tunis" /> </td>
        <td  className=' font-medium  text-black'> <img className='h-10 w-10' src={flag3} alt="australia" />1-0  <img className='h-10 w-10' src={dr1} alt="tunis" /></td>
        <td className='h-50 w-50'> <video src={match2} controls></video></td>
    </tr>
    <tr>
        <td  className=' font-medium  text-black'>3 </td>
        <td  className=' font-medium  text-black'> <img className='h-10 w-10' src={dr1} alt="" /><span>Tunis vs France </span>  <img className='h-10 w-10' src={flag2} alt="fance" /></td>
        <td  className=' font-medium  text-black'> <img className='h-10 w-10' src={dr1} alt="" />1-0 <img className='h-10 w-10' src={flag2} alt="fance" /></td>
        <td className='h-50 w-50'> <video src={match3} controls></video></td>

    </tr>

        </table>
    </div>
          
        </div>
      )
    }

export default Qatar