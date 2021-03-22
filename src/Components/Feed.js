import React from 'react'
import '../CSS/Feed.css';

export default function Feed() {
    return (
        <main>
            <article>
                <ul className="feed-box">
                    <li className="feed-box-item">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/raya.jpg`} alt="Raya i ostatni smok - plakat" ></img>
                        <div className="feed-box-item-desc">
                            <h1>RAYA I OSTATNI SMOK</h1>
                            <h3>Raya and the Last Dragon</h3>
                        </div>
                    </li>
                </ul>
            </article>
            <aside>
                kjhg
            </aside>
        </main>
    )
}
