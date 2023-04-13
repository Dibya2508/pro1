import React from "react"
import Link from "next/link"
import { Nav, PageBody } from "./style"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav>
        <Link href="/">
         page1
        </Link>
        <Link href="/page2">
          Page 2
        </Link>
      </Nav>
      <PageBody>{children}</PageBody>
    </React.Fragment>
  )
}

export default Layout