import React from 'react'
import FollowCSS from '../style/Follow.module.css'

const Follow = () => {
  return (
   
    
<header className='followMe'>
    <div className={FollowCSS.container, FollowCSS.bgFollow1}>

        <div className={FollowCSS.parallax}>
            <div className={FollowCSS.name}>
                Hallo I'm Wisnu Sadewa
            </div>

            <div className={FollowCSS.wrapper}>
                <div className={FollowCSS.card}>
                    <div className='text-center'>
                        <h1 className={FollowCSS.title}>Youtube</h1>
                        <div className={FollowCSS.icon1}>
                        <i className="fa-brands fa-youtube icon"></i>
                        </div>
                        <p className={FollowCSS.description}>My Youtube Channel</p>
                        <button className={FollowCSS.btn}><a href="https://www.youtube.com/channel/UC3tQvHhx1rUjWfZB2AwTPsQ">Follow</a></button>
                    </div>
                </div>

                <div className={FollowCSS.card}>
                    <div className='text-center'>
                        <h1 className={FollowCSS.title}>Instagram</h1>
                        <div className={FollowCSS.icon2}>
                            <i className="fa-brands fa-instagram icon"></i>
                        </div>
                        <p className={FollowCSS.description}>My Instagram Account</p>
                        <button className={FollowCSS.btn}><a href="https://www.instagram.com/wisnusadew/">Follow</a></button>
                    </div>
                </div>

                <div className={FollowCSS.card}>
                    <div className="text-center">
                        <h1 className={FollowCSS.title}>Tiktok</h1>
                        <div className={FollowCSS.icon3}>
                            <i className="fa-brands fa-tiktok icon"></i>
                        </div>
                        <p className={FollowCSS.description}>My Tiktok Account</p>
                        <button className={FollowCSS.btn}><a href="https://www.tiktok.com/@moodmakesmoney">Follow</a></button>
                    </div>
                </div>

                <div className={FollowCSS.card}>
                    <div className="text-center">
                        <h1 className={FollowCSS.title}>Tiktok</h1>
                        <div className={FollowCSS.icon4}>
                            <i className="fa-solid fa-shop icon"></i>
                        </div>
                        <p className={FollowCSS.description}>My Tiktok Account</p>
                        <button className={FollowCSS.btn}><a href="https://shopee.co.id/mmmtechid">Follow</a></button>
                    </div>
                </div>

            </div>
        </div>

        <div className={FollowCSS.parallax, FollowCSS.bgFollow2}></div>


    </div>


    </header>
  )
}

export default Follow;