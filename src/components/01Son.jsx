import {useState} from 'react';

const SonComponent = ({data, handleData2}) => {
    const [phone,setPhone] = useState("");
    const [addr,setAddr] = useState("");
    const handleClick = () => {
        handleData2({phone:phone, addr:addr})
    }
    return (
        <>
            <h2>자식 컴포넌트가 받은 데이터</h2>
            {data.name} <br/>
            {data.age}
            <hr/>
            <input  type="text"
                    name="phone"
                    onChange={e=>setPhone(e.target.value)}
            />
            <br/>
            <input  type="text"
                    name="addr"
                    onChange={e=>setAddr(e.target.value)}
            />
            <br/>
            <button onClick={handleClick} >부모에게 전달</button>
        </>
    );
}

export default SonComponent;