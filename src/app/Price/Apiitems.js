import React, { useState, useEffect } from 'react';
import Agriitems from './Agriitems';

export default function Apiitems() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="rounded-bottom " style={{backgroundColor:'rgb(154 255 193 / 82%)',margin:'3px' }}>
            {data && data.records && data.records.map((record, index) => (
                <div  key={record.index}>
                    <Agriitems
                        Title={record.state}
                        district={record. district}
                        market={record.market}
                        commodity={record.commodity}
                        variety={record.variety}
                        arrival_date={record.arrival_date}
                        min_price={record.min_price}
                        max_price={record.max_price}
                        modal_price={record.modal_price}
                    />
                </div>
            ))}
        </div>
      
    );
}