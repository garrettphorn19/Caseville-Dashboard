import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import DateWidget from "../components/widgets/DateWidget"
import SunsetWidget from "../components/widgets/SunsetWidget"
import WeatherWidget from "../components/widgets/WeatherWidget"
import TimelineWidget from "../components/widgets/TimelineWidget"
import PhotoWidget from "../components/widgets/PhotoWidget"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <DateWidget />
        <SunsetWidget />
        <WeatherWidget />
        <TimelineWidget />
        <PhotoWidget />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

const Wrapper = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;

  background: #d1d1d6;
`