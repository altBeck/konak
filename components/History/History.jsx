import './history.css';

import Image from 'next/image';

const History = () => {
  return (
    <div id='about' className="history--container">
      <div className="history--heading">
        <h1>About Konak</h1>
        <p>Konak Solar is a leading provider of renewable energy solutions, specializing in the design, installation, and maintenance of solar power systems. With a commitment to sustainability and a focus on innovation, we aim to revolutionize the energy landscape by harnessing the power of the sun to create a cleaner and more sustainable future.</p>
      </div>

      <div className="history--sub_heading">
        <p>At Konak Solar, We believe that every project is unique, and that&apos;s why we take a collaborative approach, working closely with our clients to develop customized solar solutions that optimize energy production and maximize cost savings. Our team of experts utilizes advanced technology, industry best practices, and the highest quality components to ensure the performance, reliability, and longevity of every solar system we install.</p>
        <Image 
          src="/history.jpg"
          width={540}
          height={302.5}
          alt="worker welding stands for solar panel"
          priority
          className="history--hero--img"
        />
      </div>
    </div>
  )
}

export default History