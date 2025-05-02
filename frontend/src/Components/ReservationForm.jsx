import React, { useState } from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaReddit, FaYoutube } from 'react-icons/fa'


const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    time:"",
    guests:"",
    date:""
  })

  const handleChanges = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})

  }

  const generateTimeSlots = () => {
    const slots = [];
    for(let hour = 9; hour < 21; hour++){
       const startHour = hour % 12 === 0 ? 12 : hour % 12;
       const startPeriod = hour < 12 ? 'AM' : 'PM';

        const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
        const endPeriod = (hour + 1) < 12 ? 'AM' : 'PM';
        
        slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`);

    }
    return slots;
  }


  return (
    <div className=' min-h-screen bg-[#ffe2b7] p-6 md:p-12'> 
      <div className=' max-w-6xl mx-auto grid md:grid-cols-3 gap-8'>
        <form className=' md:col-span-2 bg-white p-8 rounded-lg shadow-md'>
          <h2 className=' text-xl font-semibold text-amber-400 uppercase tracking-wider'>Reserve a Table</h2>
          <h1 className=' text-3xl font-bold mb-4'>Dine with Us- <span className=' text-amber-500'>Reserve Now</span></h1>

          <div className=' grid md:grid-cols-2 gap-4'>
            <div className=' grid gap-1.5'>
              <label className=' font-bold' htmlFor="">Full Name</label>
              <input name='name' value={formData.name} onChange={handleChanges} type="text" placeholder='Full Name' required className=' w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300' />
            </div>

            <div className=' grid gap-1.5'>
              <label className=' font-bold'  htmlFor="">Email</label>
              <input name='email' value={formData.email} onChange={handleChanges} type="email" placeholder='Email' required className=' w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'/>
            </div>

            <div className=' grid gap-1.5'>
              <label className=' font-bold'  htmlFor="">Phone Number</label>
              <input name='phone' value={formData.phone} onChange={handleChanges} type="tel" placeholder='Phone Number' required className=' w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'/>
            </div>

            <div className=' grid gap-1.5'>
              <label className=' font-bold'  htmlFor="">Reservation Date</label>
              <input name='date' value={formData.date} onChange={handleChanges} type="date"  required className=' w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'/>
            </div>
            
            <div className=' grid gap-1.5'>
              <label className=' font-bold'  htmlFor="">Time of Reservation</label>
              <select name='time' value={formData.time} onChange={handleChanges} required>className=' w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'
                <option value="">Select Time</option>
                {generateTimeSlots().map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>


            <div className=' grid gap-1.5'>
            <label  className=' font-bold' htmlFor="">Number of Guests</label>
              <select name='guests' value={formData.guests} onChange={handleChanges} required>className=' w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'
                <option value="">Select Number of Guests</option>
                {[...Array(10)].map((_, index) => (
                  <option key={index} value={index + 1}>{index + 1} Guest(s)</option>
                ))}
              </select>
            </div>
          </div>
          <button type='submit' className=' w-full mt-4 bg-amber-600 text-white p-3 rounded-lg hover:bg-amber-500 transition cursor-pointer'>BOOK NOW</button>
        </form> 

        <div className=' bg-black text-gray-300 p-8 rounded-lg shadow-md space-y-10'>
          <div>
            <h3 className=' text-lg font-bold'>Address</h3>
            <p>Bambili, Bamenda, Nort West Region, Cameroon</p>          
          </div>

          <div>
            <h3 className=' text-lg font-bold'>Open Time</h3>
            <p>Mon-Fri: 11:00 AM - 10:00 PM</p>
            <p>Sat-Sun: 10:00 AM - 11:00 PM</p>
          </div>

          <div>
            <div>
              <h3 className=' text-lg font-bold mb-2'>Stay Connected</h3>
              <div className=' flex gap-4 cursor-pointer'>
                <FaFacebook className="text-4xl text-red-500"/>
                <FaTwitter className="text-4xl text-red-500"/>
                <FaInstagram className="text-4xl text-red-500"/>
                <FaLinkedin className="text-4xl text-red-500"/>
                <FaReddit className="text-4xl text-red-500"/>
                <FaYoutube className="text-4xl text-red-500"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationForm