import React from "react"
import styled from "styled-components"

export default function WeatherWidget() {
  const icon = "/images/icons/icon-sun.svg"
  const temp = "72"
  const description = "Sun for the hour."

  return (
    <Widget>
      <Icon src={icon} />
      <Temp>{temp}º</Temp>
      <Description>{description}</Description>
    </Widget>
  )
}

const Widget = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  left: 1650px;
  top: 20px;

  /* Blue Gradient

Clear Weather Widget
*/
  background: linear-gradient(180deg, #0b84ff -4.4%, #0040dc 100%);
  /* Widget Shadow

Shadows for widgets
*/
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 25px;
`
const Icon = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 25px;
  top: 25px;
`

const Temp = styled.p`
  position: absolute;
  width: 71px;
  height: 57px;
  left: 25px;
  top: 85px;

  font-family: "SF Pro Rounded";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 57px;

  color: #ffffff;
`

const Description = styled.p`
  position: absolute;
  width: 200px;
  height: 42px;
  left: 25px;
  top: 183px;

  font-family: "SF Pro Rounded";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;

  color: #ffffff;
`
