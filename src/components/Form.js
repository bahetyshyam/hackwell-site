import React, { Component } from 'react';

class Form extends Component {
  state = {};

  render() {
    return (
      <div className="w-full pt-5">
        <form className="bg-white shadow rounded">

          {/* No of members div */}
          <div className="px-6 pb-2 pt-5">
            <label className="block text-black mb-2">
              No. of Members
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 mb-2 leading-tight focus:outline-none focus:shadow-outline" type="number" min="1" max="4" placeholder="No. of members"></input>
            <p class="text-red-500 text-xs italic">Error Message</p>
          </div>

          {/* College Name and Team Name Flex Box */}
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-6 py-2">
              <label className="block text-black mb-2">
                College Name
            </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-2 mb-2 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="College Name"></input>
              <p class="text-red-500 text-xs italic">Error Message</p>
            </div>
            <div className="w-full md:w-1/2 px-6 py-2">
              <label className="block text-black mb-2">
                Team Name
            </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-2 mb-2 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Team Name"></input>
              <p class="text-red-500 text-xs italic">Error Message</p>
            </div>
          </div>

          {/* Member Details Section Starts Here */}
          <p className="px-6 mt-6 text-black font-bold">Member Details</p>

          {/* Member Name */}
          <div className="px-6 py-2">
            <label className="block text-black mb-2">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 mb-2 leading-tight focus:outline-none focus:shadow-outline " type="text" placeholder="Name"></input>
            <p class="text-red-500 text-xs italic">Error Message</p>
          </div>

          {/* Member Phone Number */}
          <div className="px-6 py-2">
            <label className="block text-black mb-2">
              Phone
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 mb-2 leading-tight focus:outline-none focus:shadow-outline " type="tel" placeholder="Phone"></input>
            <p class="text-red-500 text-xs italic">Error Message</p>
          </div>

          {/* Member Email */}
          <div className="px-6 py-2">
            <label className="block text-black mb-2">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 mb-2 leading-tight focus:outline-none focus:shadow-outline " type="email" placeholder="Email"></input>
            <p class="text-red-500 text-xs italic">Error Message</p>
          </div>

          {/* Register Button */}
          <div className="flex justify-center px-6 pt-2 pb-5">
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Register
             </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
