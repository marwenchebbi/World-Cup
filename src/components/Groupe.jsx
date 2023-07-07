import React from 'react'
import dr1 from '../images/flag1.jpg';
import flag2 from '../images/flag2.png';
import flag3 from '../images/flag3.png';
import flag4 from '../images/flag4.png';

const Groupe = () => {
  return (
    <div name='Groupe' className=' flex text w-full h-screen bg-gradient-to-r from-red-600 to-red-250'>
<div className='inline'>
<p className='text-4xl font-bold inline border-b-4 border-pink-600  mt-10px' >Groupe D</p>

    <table class="tab1" >
        <caption className='text-2xl font-bold text-[#e4e4e7] underline'>le groupe de la tunisie coupe de monde 2022</caption>
<tr className='text-3xl font-bold  '>
    <th > rang</th>
    <th>Flag          </th>
    <th>Equipe          </th>
    <th>Points         </th>
    
</tr>
<tr >
    <td>1</td>
    <td > <img className='h-20 w-20' src={flag2} alt="fance" /></td>
    <td className=' font-medium  text-black' >France</td>
    <td>6</td>
</tr>
<tr>
    <td>2</td>
    <td > <img className='h-20 w-20' src={flag3} alt="australia" /></td>
    <td  className=' font-medium  text-black'>Australia</td>
    <td>6</td>
</tr>
<tr>
    <td>3</td>
    <td > <img className='h-20 w-20' src={dr1} alt="" /></td>
    <td  className=' font-medium  text-black'>Tunis</td>
    <td>4</td>
</tr>
<tr>
    <td>4</td>
    <td > <img className='h-20 w-20' src={flag4} alt="" /></td>
    <td  className=' font-medium  text-black'>Denmark</td>
    <td>1</td>
</tr>
    </table>
</div>
      
    </div>
  )
}

export default Groupe;
