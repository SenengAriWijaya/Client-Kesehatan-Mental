import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faBrain, faCalendarDays, faHeartPulse } from '@fortawesome/free-solid-svg-icons'

const CardSensor = () => {
  return(
    <div className="container mx-auto font-inter sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
      <div className='rounded-lg shadow-lg box-border w-full mx-3 sm:mx-0 md:mx-0 lg:mx-0 bg-white overflow-hidden mb-5 sm:mb-0 md:mb-0 lg:mb-0 sm:w-64 md:w-80 lg:w-64'>
        <div className='flex items-center bg-orange-100 w-full '>
          <FontAwesomeIcon icon={faCalendarDays} className='w-6 h-6 ml-7 py-4'/>
          <h1 className='text-3xl font-bold text-gray-900 text-center mx-7 items-center'>Sensors</h1>
        </div>
        <h1 className='font-bold text-center text-2xl my-7'>10</h1>
      </div>     
    </div>
  )
}

export default CardSensor