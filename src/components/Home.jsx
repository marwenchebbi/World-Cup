
import React from 'react'
import Logo from '../images/logo.png';
function Home() {
  return (
    <div name='home' className=' flex text w-full h-screen bg-gradient-to-r from-red-600 to-red-250'>
      {/* Container */}
      <div className=' break-normal max-w-[1500px] mx-auto px-1 flex flex-col justify-center h-full'>
        
        <table>
          <tr>
            <td>
          <p className='text-[#4c1717d0] text-lg font-bold'>Hello World Cup</p>
        <h1 className='break-normal text-4xl sm:text-8xl font-bold text-[#ff0000]'>
          Vive la Tunisie!!
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#4c1717d0]'>
          Les aigles Du Carthage
        </h2>
        <p className='text-[#000000] py-4 max-w-[700px]'>
        L'équipe de Tunisie de football  est l'équipe nationale qui représente la Tunisie dans le football international masculin, depuis qu'elle a disputé son premier match le 2 juin 1957 contre la Libye. Membre depuis 1960 de la FIFA au niveau international et de la Confédération africaine de football au niveau continental, ainsi que de l'UAFA depuis 1978 et de l'UNAF depuis 2005, elle est supervisée par la Fédération tunisienne de football, fondée le 29 mars 1957, après l'indépendance de la Tunisie. 
        </p>
        </td>
        <td>
         <img className='' src={Logo} alt="tunisian squad logo" style={{ width: '320px' }} id="logo" />
         </td>
         </tr>
         </table>
      </div>
    </div>



  )
}
export default Home;