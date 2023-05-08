import * as React from "react"
import { Container } from "./ui/grid"
import Contribute from "./contribute"
// import Logo from "../svg/logo.svg"

const Footer = () => {
  const date = new Date()

  return (
    <footer className="relative pt-10 pb-8 bg-gray-white border-t border-light">
      {/* <Logo className="absolute -top-20 inset-x-0 mx-auto h-auto w-20" /> */}

      <Container className="text-gray">
        <Contribute color="gray" size="sm" />

        <small className="mt-4 max-w-3xl mx-auto block text-center">
          {date.getFullYear()} &copy; TestForMe Authors. All rights reserved.
        </small>
      </Container>
    </footer>
  )
}

export default Footer
