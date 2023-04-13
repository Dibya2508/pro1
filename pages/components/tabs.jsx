import React, { useState } from "react"
import Link from "next/link"
import {Router, withRouter} from "next/router"
import {TabHead,Tab,TabBody,TabContainer} from "./styled"
const Tabs=({currenttab})=>{
    //const{query:{tab}}=currenttab
     const [tab,settab]=useState("1")
    const changetab = (current)=>{
       settab(current)
    console.log(tab)
    console.log(!(tab === '1'))

    }
    return(
        <TabContainer>
            <TabHead>
                <Tab selected={tab==='1'}><Link onClick ={()=>changetab("1")}href={{pathname:"/"}}>tab1</Link></Tab>
                <Tab selected={!tab === '1'}><Link onClick ={()=>changetab("2")}href={{pathname:"/" }}>tab2 </Link></Tab>
            </TabHead>
            <TabBody>
                {tab === '1' && <div> This is tab 1 for u kk </div>}
                {!(tab=== '1') && <div> This is tab 2 for u kk </div>}
            </TabBody>
        </TabContainer>
    )
}
export default withRouter(Tabs)