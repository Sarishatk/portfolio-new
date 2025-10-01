import { Timeline } from 'antd';

interface ExperienceItem {
  position?: 'left' | 'right';
  children: React.ReactNode;
}

const Experience: React.FC = () => {

 

  

  const items: ExperienceItem[] = [
    {
      children: (
        <>
          <p className='fw-bolder'>Bachelor of computer application</p>
          <p style={{ fontSize: '12px' }}>university of calicut · Full-time</p>
          <p style={{ fontSize: '12px' }}>college of applied science chelakkara</p>
          <p style={{ fontSize: '12px' }}>thrissur, Kerala, India</p>
        </>
      ),
    },
    {
      position: 'left',
      children: (
        <>
          <p className='fw-bolder'>HSE plustwo</p>
          <p style={{ fontSize: '12px' }}>Kerala Board</p>
          <p style={{ fontSize: '12px' }}>Government higer secondary school ottapalam</p>
          <p style={{ fontSize: '12px' }}>palakkad, Kerala, India</p>
        </>
      ),
    },
    {
      position: 'right',
      children: (
        <>
          <p className='fw-bolder'>SSLC</p>
          <p style={{ fontSize: '12px' }}>Kerala Board</p>
          <p style={{ fontSize: '12px' }}>Lady sankaran nair HSS school ottapalam</p>
          <p style={{ fontSize: '12px' }}>palakkad, Kerala, India</p>
        </>
      ),
    },
  ];

  return (
    <>
      <p className='fw-bold fs-3 text-light ms-2'>EDUCATION</p>
      <div className='py-1' style={{ overflowY: 'scroll', height: '250px', overflowX: 'hidden' }}>
        <Timeline
          style={{ color: '#fff' }}
          mode="alternate"
          items={items}
        />
      </div>
    </>
  );
};

export default Experience;
