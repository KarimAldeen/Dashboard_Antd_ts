import React from 'react';
import Chart from './Chart';
import { CardData } from '../../types/App';
import { BigCard } from '../../Components/Home/BigCard';
import { SmallCard } from '../../Components/Home/SmallCard';



const Page: React.FC = () => {


  // Array of data for SmallCard
  const smallCardsData: CardData[] = [
    { title: 'Order', value: '32,350', subTitle: '9350', percentage: 25.25 ,Good:true},
    { title: 'Gross Sale', value: '$12,460.25', subTitle: '11350', percentage: 10.25 ,Good:true},
    { title: 'Sold Items', value: '2,3600', subTitle: '1350', percentage: 2.65 },
    { title: 'Total Shipping Cost', value: '$6,240', subTitle: '4350', percentage: 13.15 },
  ];

  return (
    <div className='HomePage'>
      <div className='HomeCards'>
        <BigCard />
        {smallCardsData.map((card, index) => (
          <SmallCard key={index} {...card} />
        ))}
      </div>
      <Chart />
    </div>
  );
};

export default Page;
