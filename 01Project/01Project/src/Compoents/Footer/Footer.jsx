import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer style={{ background: "purple", color: "#fff", padding: "40px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
            <div>
                <h1 className='text-3xl'>codeschool</h1>
                <p>Online Learning</p>
                <p>Community school for coder kids Powered by  Silveroak</p>
            </div>
            <div>
                <h1 className='text-3xl'>Popular Links</h1>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li><a href="#" style={{ color: "#fff" }}>Home</a></li>
                    <li><a href="#" style={{ color: "#fff" }}>Courses</a></li>
                    <li><a href="#" style={{ color: "#fff" }}>About</a></li>
                    
                </ul>
            </div>
            <div>
                <h1 className='text-3xl'>Social Profiles</h1>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li><a href="#" style={{ color: "#fff" }}>Facebook</a></li>
                    <li><a href="#" style={{ color: "#fff" }}>Twitter</a></li>
                    <li><a href="#" style={{ color: "#fff" }}>Instagram</a></li>
                    <li><a href="#" style={{ color: "#fff" }}>LinkedIn</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-3xl'>Contact Us</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="fullname"
                        style={{ display: "block", margin: "8px 0", padding: "8px", width: "200px" }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        style={{ display: "block", margin: "8px 0", padding: "8px", width: "200px" }}
                    />
                    <textarea
                        placeholder="Message"
                        name="message"
                        rows="3"
                        style={{ display: "block", margin: "8px 0", padding: "8px", width: "200px" }}
                    />
                    <button type="submit" style={{ padding: "8px 16px", background: "#444", color: "#fff", border: "none" }}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer