import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid, Container } from "../components/ui/grid"
import Button from "../components/ui/button"
import Features from "../components/features"
import HeroWrapper from "../components/ui/hero-wrapper"
import Pipes from "../components/ui/pipes"
import TestForMeHero from "../components/ui/testforme-hero"
import thumbnail from "../images/thumbnails/home.png"

const IndexPage = ({ location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              github
            }
          }
        }
      }
    `
  )

  return (
    <Layout location={location}>
      <Seo
        title="Home"
        description="Kubernetes native continues functional testing"
        url={location.href}
        image={thumbnail}
      />

      <HeroWrapper bg="dark">
        <Grid lg={2} alignY="center">
          <div className="relative z-10 text-white">
            <h1 className="pr-12 xl:pr-12 text-5xl lg:text-7xl 2xl:pr-0 2xl:text-8xl">
              Get More Done with{" "}
              <span className="text-primary">TestForMe</span>
            </h1>

            <p className="text-2xl md:pr-12 xl:pr-36 2xl:pr-48">
              Kubernetes native tool that helps to orchestrate, execute, 
              and manage test data, to do testing right.
            </p>

            <div className="mt-8 space-y-4 md:mt-8 md:space-x-4 md:space-y-0">
              <Button
                to={site.siteMetadata.social.github}
                type="primary"
                label="View on GitHub"
              />
            </div>
          </div>

          <div className="relative z-0 mt-12">
            <Pipes className="absolute top-1/2 left-1/2 w-8/12 max-w-full transform rotate-90 -translate-x-1/2 -translate-y-1/2" />
            <TestForMeHero className="relative z-10 block mx-auto w-40 h-auto max-w-full lg:mt-12 lg:w-52 2xl:w-72" />
          </div>
        </Grid>
      </HeroWrapper>

      <Container className="mt-12">
        <h2 className="text-center lg:mb-24">
          Our <span className="text-primary">Solution</span>
        </h2>

        <Features />
      </Container>

      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full max-h-none -z-1 bg-light transform -skew-y-6 origin-full-0 overflow-hidden"></div>

        <Container className="pt-[calc(calc(calc(100vw-0px)*0.05)+4rem)] lg:pt-[calc(calc(calc(100vw-0px)*0.05)+9rem)]">
          <h2 className="text-center">
            Join the growing <span className="text-primary">community</span>
          </h2>

          <h2 className="text-2xl text-center">
            Created by <a href="https://zygotech.org">ZygoTech</a>
          </h2>

          <div className="pt-4 pb-40 lg:pb-48">
            <p className="text-center">
            <a
              href="/community/join-slack"
              className="underline">
              Contact us
            </a>
              &nbsp;to learn more about corporate maintainers.</p>
            <div className="mt-8 space-y-4 text-center md:space-x-4 md:space-y-0">
              <Button
                to={site.siteMetadata.social.github}
                type="primary"
                label="View on GitHub"
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
