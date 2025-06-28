import React from 'react'

function Contect() {
  return (
    <main className="p-6 max-w-xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded" required />
      <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded" required />
      <textarea placeholder="Message" className="w-full p-3 border border-gray-300 rounded h-32" required></textarea>
      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Send Message</button>
    </form>
  </main>
  )
}

export default Contect