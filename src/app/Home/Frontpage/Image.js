

export default function Image() {
    return (
        <>
         <img
  src="https://plus.unsplash.com/premium_photo-1661900503280-36c1b4be3a66?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="..."
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    maxHeight:'1000px',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1, // Ensure the image stays behind the form
    // Bottom left radius
    borderBottomRightRadius: '400px',
    borderBottomLeftRadius: '200px', // Bottom right radius
  }}
/>
</>


         
    );
}
