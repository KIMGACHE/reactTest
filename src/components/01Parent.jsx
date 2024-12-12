import SonComponent from "./01Son";
import {useState} from 'react';

const ParentComponent = () => {
    
    const data = {name: "hong", age:30}
    const [data2,setData2] = useState(null);

    const handleData2 = (data) => {
        // 선처리(생략)
        setData2(data);
    }

    return (
        <>
            <SonComponent data={data} handleData2={handleData2} />
            <hr/>
            <h2>부모 받은 데이터</h2>
            {data2 && (
                <>
                    {data2.phone} <br/>
                    {data2.addr} <br/>
                </>
            )}
            
        </>
    );
}

export default ParentComponent;