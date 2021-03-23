import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Feed.css';
import {feedArr} from './RoutPath';


export default function Feed() {
    return (
        <main>
            <article>
                <ul className="feed-box">
                    {feedArr.map((v, i) => (
                        <li className="feed-box-item" key={i}>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/${v.pathPoster}`} alt={v.titleEnglish + " - poster"} ></img>
                            <div className="feed-box-item-desc atBottom">
                                <div>
                                    <h1>{v.titleEnglish}</h1>
                                    <h3>{v.titlePolish}</h3>
                                    <p>{v.desc}</p>
                                </div>
                                <div className="">
                                    <Link  key={i} to={v.path} ><div className='btn wave link'>Read more!</div></Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </article>
            <aside>
                <div className="aside-block">
                    <h3>Archiwum</h3>
                    {feedArr.map((v, i) => (
                        <Link key={i} to={v.path} ><div>{v.titleEnglish}</div></Link>
                    ))}
                </div>
                <div className="aside-block">
                    <h3>Archiwum</h3>
                    {feedArr.map((v, i) => (
                        <Link key={i} to={v.path} ><div>{v.titleEnglish}</div></Link>
                    ))}
                </div>
            </aside>
        </main>
    )
}
