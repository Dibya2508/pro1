import styled from "styled-components" 
export const TabHead = styled.div`
display: flex; background: black;
`

export const TabContainer=styled.div`width: 30em; height: 30 em;`
export const TabBody=styled.div`height:100%; width:100%;`
export const Tab=styled.div`padding:1em;background:${({selected})=>(selected?"grey":"black")};*{color:white;}`
