import { Timeline } from 'antd';
import { useEffect, useState } from 'react';

interface ExperienceItem {
  position?: 'left' | 'right';
  children: React.ReactNode;
}

const Experience: React.FC = () => {
  const [totalMonth, setTotalMonth] = useState<string>('');

  const dynamicDate = (inputMonth: number, inputYear: number): string => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const totalMonthsCurrent = currentYear * 12 + currentMonth;
    const totalMonthsInput = inputYear * 12 + inputMonth;
    const monthsSinceInput = totalMonthsCurrent - totalMonthsInput;
    return monthsSinceInput.toString();
  };

  useEffect(() => {
    const inputMonth = 3;
    const inputYear = 2024;
    const monthsSinceInput = dynamicDate(inputMonth, inputYear);
    setTotalMonth(monthsSinceInput);
  }, []);

  const items: ExperienceItem[] = [
    {
      children: (
        <>
          <p className='fw-bolder'>bachelor of computer application</p>
          <p style={{ fontSize: '12px' }}><a className='social-link' target='_blank' href='https://www.assyst.net/'>university of calicut</a> · Full-time</p>
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
          <p style={{ fontSize: '12px' }}><a className='social-link' target='_blank' href='https://www.assyst.net/'>Kerala Board</a></p>
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
          <p style={{ fontSize: '12px' }}><a className='social-link' target='_blank' href='https://www.luminartechnolab.com/'>Kerala Board</a> </p>
          <p style={{ fontSize: '12px' }}>Lady sankaran nair HSS school ottapalam</p>
          <p style={{ fontSize: '12px' }}>palakkad, Kerala, India · Remote</p>
        </>
      ),
    },
  ];

  return (
    <>
      <p className='guntertest-font fs-3 text-light ms-2'>EDUCATION</p>
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
