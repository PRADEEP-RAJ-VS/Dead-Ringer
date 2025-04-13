import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
    return (
        <div className='main'>
            <div className="nav">
                <p>Dead Ringer</p>
                <img src={assets.user_icon} alt='User Icon' />
            </div>
            <div className="main-container">
                {!showResult
                ?
                <>
                     <div className="greet">
                    <p><span>Welcome, Chief 🐦‍🔥</span></p>    
                    <p>You got somethin’ cookin'? Hit me with it</p>    
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Where should we hide the evidence? Suggest a place... somewhere beautiful.</p>
                        <img src={assets.compass_icon} alt='Card Icon' />
                    </div>
                    <div className="card">
                        <p>Make it quick, clean, and straight to the point... no need for extra baggage.</p>
                        <img src={assets.bulb_icon} alt='Card Icon' />
                    </div>
                    <div className="card">
                        <p>How do we forge their loyalty? Brainstorm connections... blood's thicker than water.</p>
                        <img src={assets.message_icon} alt='Card Icon' />
                    </div>
                    <div className="card">
                        <p>Make it crystal clear, no room for mistakes... one slip-up and you’re dead to me.</p>
                        <img src={assets.code_icon} alt='Card Icon' />
                    </div>
                </div>
                </>
                :<div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt=""/>
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt=""/>
                        {loading
                        ?<div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        }

                    </div>
                </div>
                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange= {(e) => setInput(e.target.value)} value={input} type="text" placeholder='Lay it on me, I’m ready to bleed.'/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img
                                onClick={() =>onSent()}
                                src={assets.send_icon}
                                alt="Send"
                                />:null}


                        </div>
                    </div>
                        <p className="bottom-info">
                        End of the road... for them. For you? It’s just chapter one.A Pradeep's Original!
                        </p>
                </div>
                
            </div>
        </div>
    );
};

export default Main;