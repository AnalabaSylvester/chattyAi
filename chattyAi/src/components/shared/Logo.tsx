import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img
          src="openai.png"
          alt="openai"
          width={"30px"}
          height={"30px"}
          className="image-inverted"
        />

      </Link>{" "}
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          color: "#064f9c",
          fontWeight: "800",
          // textShadow: "0 2px 0px #000",
        }}
      >
        <span style={{ fontSize: "20px" }}>CHATTY </span>-AI

      </Typography>

      <Typography        
       sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontSize: "12px",
          color: "#064f9d",
          fontWeight: "800",
          // textShadow: "0 2px 0px #000",
        }}
>
      <small>Interact and chat with me..</small>

      </Typography>
    </div>
  )
}

export default Logo
