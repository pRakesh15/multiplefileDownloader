import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const marksheets = [
    '/download (1).png',
    '/public/download.png'
];

const downloadMarksheets = () => {
    marksheets.forEach((url, index) => {
        const a = document.createElement('a');
        a.href = url;
        a.download = `marksheet${index + 1}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
};
  return (
    <div>
    {marksheets.map((src, index) => (
        <img key={index} src={src} alt={`Marksheet ${index + 1}`} />
    ))}

    {/* Download button */}
    <button onClick={downloadMarksheets}>Download All Marksheets</button>
</div>
  )
}

export default App
