import React from "react"
import Header from "../../components/header/Header"
import Posts from '../../components/posts/Post'
import SideBar from "../../components/sidebar/SideBar"
import "./home.css"

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
          <Posts />
          <SideBar />
      </div>
    </>
  );
}
