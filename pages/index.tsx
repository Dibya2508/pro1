import Link from 'next/link'
import React from 'react'
import Layout from "./layout/index"
import Tabs from "./components/tabs"

import{Nav,PageBody} from "./layout/style"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
   <Layout>Tab component will be displayed here</Layout>
   <Tabs> kuch ho gya h  </Tabs>
    
  </div>

  
  )
}