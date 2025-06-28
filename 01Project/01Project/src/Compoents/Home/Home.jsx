import React from 'react'

function Home() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-4">Welcome to Smart School</h2>
    <p className="text-lg mb-4">We provide high-quality education in a smart environment. Our mission is to create leaders for the digital world.</p>
    <section className="mt-8">
      <h3 className="text-2xl font-semibold mb-2">About Us</h3>
      <p className="text-md">Our school is equipped with digital classrooms, expert faculty, modern labs, and a student-first approach.</p>
    </section>
    <section className="mt-8">
      <h3 className="text-2xl font-semibold mb-2">Highlights</h3>
      <ul className="list-disc pl-6 text-md">
        <li>Smart Classes with Interactive Learning</li>
        <li>Certified and Experienced Teachers</li>
        <li>Modern Library and Computer Labs</li>
        <li>Sports, Arts, and Cultural Programs</li>
      </ul>
    </section>
  </main>
  )
}

export default Home