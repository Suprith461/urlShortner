import React,{useState,useEffect} from 'react'
import {Paper} from '@material-ui/core'
import DoughnutChart from './../components/DoughnutChart'
import firebase from 'firebase'
const StatisticScreen = (props) => {
    //const {shortCode} = props.location.state
    
    
    const shortCode = "suprith"
    const [labels,setLables] = useState([]);
    const [data,setData] = useState([]);
    const [colors,setColors]=useState(['red',"green","blue","yellow","brown","cyan","black"])
    const [totalClicks,setTotalClicks] = useState(0)
    useEffect(()=>{
        firebase.firestore().collection("urls").doc(shortCode).get().then((doc)=>{
            
            
            const data = doc.data()
            console.log("Error",data)
            var labels = Object.keys(data.countries)
            var dt = Object.values(data.countries)
            var colo = colors.slice(0,labels.length)
            var count=0;
            dt.forEach((val)=>{
                count = count+ parseInt(val)
            })
            setColors(colo)
            setData(dt)
            setLables(labels)
            setTotalClicks(count)


        })
    },[])

    return (
        <div>
            <Paper>
                <DoughnutChart backgroundColors={colors} data={data} labels={labels} totalClicks={totalClicks}/>
            </Paper>
        </div>
    )
}

export default StatisticScreen
