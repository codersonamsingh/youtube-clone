import React from 'react'
import './Slidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Slidebar = () => {
  return (

    <div className='slidebar'>
    <div className="sortcut-links">
        <div className="sidelink">
            <img src={home} alt="" /><p>Home</p>
        </div>
        <div className="sidelink">
            <img src={game_icon} alt="" /><p>Gaming</p>
        </div>
        <div className="sidelink">
            <img src={automobiles} alt="" /><p>Automobiles</p>
        </div>
        <div className="sidelink">
            <img src={sports} alt="" /><p>Sports</p>
        </div>
        <div className="sidelink">
            <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>
        <div className="sidelink">
            <img src={tech} alt="" /><p>Technology</p>
        </div>
        <div className="sidelink">
            <img src={music} alt="" /><p>Music</p>
        </div>
        <div className="sidelink">
            <img src={blogs} alt="" /><p>Blogs</p>
        </div>
        <div className="sidelink">
            <img src={news} alt="" /><p>News</p>
        </div>

    </div>

    </div>
  )
}

export default Slidebar