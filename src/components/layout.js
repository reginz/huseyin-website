import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { scale } from "../utils/typography"

import Footer from "./footer"
import "./global.css"

const Layout = ({ location, title, children }) => {
  const toggle = (
    <ThemeToggler>
      {({ toggleTheme, theme }) => {
        const isDarkMode = theme === "dark"
        if (theme == null) {
          return null
        }

        return (
          <button
            aria-label="theme-switch"
            className="leading-none p-1"
            onClick={() => toggleTheme(isDarkMode ? "light" : "dark")}
          >
            {isDarkMode ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.2822 21.9999H12.1819C10.8075 21.9894 9.44895 21.7048 8.18586 21.1628C6.92278 20.6207 5.78054 19.8321 4.82604 18.8431C3.05606 16.9503 2.04993 14.469 2.00181 11.878C1.95369 9.28699 2.867 6.77001 4.56548 4.81279C5.65973 3.58648 7.03535 2.64418 8.57414 2.06686C8.75369 1.99777 8.94933 1.98182 9.1377 2.02091C9.32607 2.06001 9.49921 2.1525 9.63643 2.28733C9.76353 2.41693 9.85303 2.57862 9.89539 2.75513C9.93775 2.93163 9.93138 3.11633 9.87695 3.2895C9.32772 4.79368 9.21891 6.42332 9.56327 7.98717C9.90764 9.55102 10.6909 10.9842 11.8212 12.1186C12.9619 13.2453 14.3985 14.026 15.9646 14.37C17.5307 14.7141 19.1622 14.6076 20.6703 14.0628C20.8498 13.9996 21.0435 13.9888 21.2289 14.0317C21.4143 14.0746 21.5837 14.1694 21.7172 14.305C21.8507 14.4406 21.9428 14.6114 21.9828 14.7975C22.0228 14.9835 22.009 15.1771 21.943 15.3556C21.4311 16.7222 20.6313 17.9629 19.598 18.9934C18.6367 19.9518 17.4956 20.7108 16.2401 21.2267C14.9846 21.7427 13.6395 22.0054 12.2822 21.9999V21.9999Z"></path>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 6C11.7463 6 11.503 5.89922 11.3236 5.71984C11.1443 5.54046 11.0435 5.29716 11.0435 5.04348V2.95652C11.0435 2.70284 11.1443 2.45954 11.3236 2.28016C11.503 2.10078 11.7463 2 12 2C12.2537 2 12.497 2.10078 12.6764 2.28016C12.8557 2.45954 12.9565 2.70284 12.9565 2.95652V5.04348C12.9565 5.29716 12.8557 5.54046 12.6764 5.71984C12.497 5.89922 12.2537 6 12 6Z"></path>
                <path d="M12 22C11.7463 22 11.503 21.8992 11.3236 21.7198C11.1443 21.5405 11.0435 21.2972 11.0435 21.0435V18.9565C11.0435 18.7028 11.1443 18.4595 11.3236 18.2802C11.503 18.1008 11.7463 18 12 18C12.2537 18 12.497 18.1008 12.6764 18.2802C12.8557 18.4595 12.9565 18.7028 12.9565 18.9565V21.0435C12.9565 21.2972 12.8557 21.5405 12.6764 21.7198C12.497 21.8992 12.2537 22 12 22Z"></path>
                <path d="M16.9191 8.03739C16.73 8.03737 16.5451 7.98127 16.3878 7.87619C16.2306 7.77111 16.108 7.62177 16.0356 7.44704C15.9632 7.27231 15.9442 7.08003 15.9811 6.89452C16.0179 6.709 16.1089 6.53857 16.2426 6.40478L17.7183 4.92912C17.8984 4.75364 18.1405 4.65618 18.392 4.65783C18.6435 4.65949 18.8842 4.76013 19.062 4.93797C19.2399 5.11581 19.3405 5.35654 19.3422 5.60804C19.3438 5.85954 19.2464 6.10157 19.0709 6.28173L17.5952 7.75739C17.5065 7.84628 17.4011 7.91678 17.2851 7.96483C17.1691 8.01288 17.0447 8.03754 16.9191 8.03739Z"></path>
                <path d="M5.60524 19.3513C5.41604 19.3513 5.23111 19.2952 5.07382 19.19C4.91653 19.0849 4.79395 18.9355 4.72158 18.7607C4.64921 18.5859 4.6303 18.3935 4.66725 18.208C4.7042 18.0224 4.79534 17.852 4.92915 17.7183L6.4048 16.2426C6.49318 16.1519 6.59871 16.0796 6.71526 16.03C6.8318 15.9803 6.95704 15.9543 7.08371 15.9535C7.21038 15.9527 7.33596 15.977 7.45315 16.0251C7.57034 16.0732 7.6768 16.1441 7.76638 16.2336C7.85595 16.3232 7.92683 16.4297 7.97492 16.5469C8.02301 16.6641 8.04735 16.7896 8.04651 16.9163C8.04568 17.043 8.01969 17.1682 7.97006 17.2848C7.92044 17.4013 7.84815 17.5068 7.75741 17.5952L6.28176 19.0709C6.19303 19.1599 6.08758 19.2305 5.97148 19.2786C5.85538 19.3267 5.73091 19.3514 5.60524 19.3513Z"></path>
                <path d="M21.0435 12.9565H18.9565C18.7028 12.9565 18.4595 12.8557 18.2802 12.6764C18.1008 12.497 18 12.2537 18 12C18 11.7463 18.1008 11.503 18.2802 11.3236C18.4595 11.1443 18.7028 11.0435 18.9565 11.0435H21.0435C21.2972 11.0435 21.5405 11.1443 21.7198 11.3236C21.8992 11.503 22 11.7463 22 12C22 12.2537 21.8992 12.497 21.7198 12.6764C21.5405 12.8557 21.2972 12.9565 21.0435 12.9565Z"></path>
                <path d="M5.04348 12.9565H2.95652C2.70284 12.9565 2.45954 12.8557 2.28016 12.6764C2.10078 12.497 2 12.2537 2 12C2 11.7463 2.10078 11.503 2.28016 11.3236C2.45954 11.1443 2.70284 11.0435 2.95652 11.0435H5.04348C5.29716 11.0435 5.54046 11.1443 5.71984 11.3236C5.89922 11.503 6 11.7463 6 12C6 12.2537 5.89922 12.497 5.71984 12.6764C5.54046 12.8557 5.29716 12.9565 5.04348 12.9565Z"></path>
                <path d="M18.3948 19.3513C18.2691 19.3514 18.1447 19.3267 18.0286 19.2786C17.9125 19.2305 17.807 19.1599 17.7183 19.0709L16.2426 17.5952C16.0672 17.4151 15.9697 17.173 15.9714 16.9215C15.973 16.67 16.0737 16.4293 16.2515 16.2515C16.4293 16.0736 16.6701 15.973 16.9216 15.9713C17.1731 15.9697 17.4151 16.0671 17.5952 16.2426L19.0709 17.7183C19.2047 17.852 19.2958 18.0224 19.3328 18.208C19.3697 18.3935 19.3508 18.5859 19.2785 18.7607C19.2061 18.9355 19.0835 19.0849 18.9262 19.19C18.7689 19.2952 18.584 19.3513 18.3948 19.3513Z"></path>
                <path d="M7.08085 8.03738C6.95526 8.03763 6.83086 8.01301 6.71482 7.96496C6.59879 7.9169 6.49341 7.84635 6.40477 7.75738L4.92912 6.28173C4.75364 6.10156 4.65618 5.85953 4.65783 5.60803C4.65949 5.35654 4.76013 5.11581 4.93797 4.93797C5.11581 4.76013 5.35653 4.65949 5.60803 4.65783C5.85953 4.65618 6.10156 4.75364 6.28173 4.92912L7.75737 6.40477C7.89106 6.53857 7.98208 6.709 8.01893 6.89451C8.05578 7.08003 8.0368 7.2723 7.96439 7.44703C7.89199 7.62176 7.76941 7.77111 7.61214 7.87618C7.45488 7.98126 7.26999 8.03736 7.08085 8.03738Z"></path>
                <path d="M12 16.4348C11.1229 16.4348 10.2655 16.1747 9.53618 15.6874C8.80689 15.2001 8.23847 14.5075 7.90281 13.6971C7.56715 12.8868 7.47933 11.9951 7.65045 11.1348C7.82157 10.2746 8.24394 9.48435 8.86415 8.86414C9.48437 8.24392 10.2746 7.82155 11.1348 7.65043C11.9951 7.47931 12.8868 7.56714 13.6971 7.9028C14.5075 8.23845 15.2001 8.80687 15.6874 9.53617C16.1747 10.2655 16.4348 11.1229 16.4348 12C16.4334 13.1758 15.9657 14.303 15.1343 15.1343C14.303 15.9657 13.1758 16.4334 12 16.4348Z"></path>
              </svg>
            )}
          </button>
        )
      }}
    </ThemeToggler>
  )

  const header = (
    <>
      {toggle}
      <h2
        style={{
          ...scale(1),
          marginBottom: 0,
          marginTop: 0,
          fontFamily: `Montserrat, sans-serif`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h2>
      <div style={{
        display:"flex",
        gap:"2em",
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        color: `inherit`,
        boxShadow: `none`
      }}>
        <Link to="https://github.com/huseyinevecen" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </Link>

        <Link to="https://www.linkedin.com/in/huseyinevecen/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>
        </Link>

        <Link to="https://twitter.com/huseyinevecen" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
        </Link>

        <Link to="https://www.goodreads.com/user/show/86760837-h-seyin-evecen" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="16" height="16"
        viewBox="0 0 16 16"
        fill="currentColor">
        <path d="M 25 2 C 20.459 2 16.58664 3.9082151 13.982422 6.9453125 C 11.378203 9.9824099 10 14.07975 10 18.5 C 10 22.92025 11.378203 27.017589 13.982422 30.054688 C 16.58664 33.091785 20.459 35 25 35 C 29.531588 35 33.395936 33.098395 36 30.072266 L 36 35 C 36 37.598543 35.181497 39.764071 33.548828 41.339844 C 31.91616 42.915616 29.363725 44 25.5 44 C 17.784314 44 15 39.933333 15 36 L 11 36 C 11 42.066667 16.215686 48 25.5 48 C 30.136275 48 33.83384 46.622274 36.326172 44.216797 C 38.818503 41.811319 40 38.476457 40 35 L 40 18.5 L 40 3 L 36 3 L 36 6.9277344 C 33.395936 3.9016049 29.531588 2 25 2 z M 25 6 C 28.459 6 31.08664 7.3379255 32.982422 9.5488281 C 34.878203 11.759731 36 14.91225 36 18.5 C 36 22.08775 34.878203 25.240269 32.982422 27.451172 C 31.08664 29.662074 28.459 31 25 31 C 21.541 31 18.91336 29.662074 17.017578 27.451172 C 15.121797 25.240269 14 22.08775 14 18.5 C 14 14.91225 15.121797 11.759731 17.017578 9.5488281 C 18.91336 7.3379255 21.541 6 25 6 z"></path></svg>
        </Link>
        <Link to="mailto:huseyin@evecen.com" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
          </svg>
        </Link>
      </div>
    </>
  )

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--textNormal)",
        transition: "color 0.2s ease-out, background 0.2s ease-out",
        minHeight: "100vh",
      }}
    >
      <div className="sidebar">
        <div
          className="md:h-screen p-4 flex flex-col justify-center items-center"
          style={{ minHeight: 200 }}
        >
          {header}
        </div>
      </div>

      <div className="main-content relative">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
