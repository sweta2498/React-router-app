import { useSearchParams } from "react-router-dom";

function Filter()
{
    const [searchparam, setsecrchparam]=useSearchParams();

    const age=searchparam.get('age')
    const city=searchparam.get('city')


    return <>
    <div className="App">
        <h1>Filter Page...!!</h1>
        <h2>Age is : {age}</h2>
        <h2>City is : {city}</h2>
        <br/><br/>
        <button onClick={()=>setsecrchparam({age:40})}>Set Age in param</button><br/><br/>
        <button onClick={()=>setsecrchparam({city:'surat'})}>Set City in param</button>

    </div>
    </>
}

export default Filter;