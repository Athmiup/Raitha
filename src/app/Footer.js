import React from "react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2d572c", color: "#fff", padding: "20px 0"}}>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {/* Raithapi Section */}
        <div>
          <h5>Raithapi</h5>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>About Us</a></li>
            <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Our Mission</a></li>
            <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Success Stories</a></li>
            <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Privacy Policy</a></li>
            <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Terms and Conditions</a></li>
            <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Careers at Raithapi</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h5>Help</h5>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>FAQs</a></li>
            <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact Us</a></li>
            <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Support Farmers</a></li>
            <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Vendor Connect</a></li>
          </ul>
        </div>

        {/* Branding and Social Section */}
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "10px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/88/Farm_logo.png"
              alt="Raithapi Logo"
              style={{ width: "120px", marginBottom: "10px" }}
            />
            <p>Empowering Farmers, Growing Communities</p>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/800px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              style={{ width: "120px", marginRight: "10px" }}
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              style={{ width: "120px" }}
            />
          </div>
          <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "15px" }}>
            <a href="https://www.instagram.com/achinthyaupadhyaya/" style={{ color: "#fff", textDecoration: "none" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                style={{ width: "30px" }}
              />
            </a>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="Facebook"
                style={{ width: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
