import React,{useEffect,useState} from 'react';
import DataFixer from "../apis/DataFixer";

import './RatesTable.css'
const RatesTable = () => {
    const Even = (num) => (num%2==0?'even':'')
    const Hkd =(cur)=>(cur=='HKD'?'HKD':'')
    const Strip= (number) =>parseFloat(number.toPrecision(12))
    const[cur,setCur]=useState([])
    const result =[]
    useEffect(()=>{
        const fetchData= async()=>{
        try{
            const response = await DataFixer.get()
            const data = response
            setCur(data.data.rates)

        }catch(err){
            console.log(err)
        }

        }
        fetchData()
    },[])
  return (
    <table>
        <thead>
            <tr>
                <th>currency</th>
                <th>rate</th>
                <th>new variable</th>
            </tr>
        </thead>
        <tbody>
            {Object.entries(cur).map(([key,val]) =>(
                <tr>
                <td >{key}</td>
                <td className={Hkd(key)} id= {Even(val)}>{val}</td>
                <td>{Strip(val+10.002)}</td>
                </tr>
            )
            )}
        </tbody>
    </table>
  )
}

export default RatesTable