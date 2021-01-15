import React, { useEffect, useState } from 'react';
import './style.css'
import {connect} from 'react-redux'
import LazyLoad from 'react-lazyload'

const Spinner = () => {
    return (
        <div className='loading'>
            <svg
                width="50"
                height="50"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle
                    cx="50"
                    cy="50"
                    fill="none"
                    stroke="#49d1e0"
                    strokeWidth="10"
                    r="35"
                    strokeDasharray="164.93361431346415 56.97787143782138"
                    transform="rotate(275.845 50 50)"
                >
                    <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="linear"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="1s"
                    begin="0s"
                    repeatCount="indefinite"
                    />
                </circle>
            </svg>
        </div>
    )
}

const DataCard = (props) => {
    // const [userData, setuserData] = useState([])
    const {dataPersonnel} = props.Person
    const [filterPerson, setfilterPerson] = useState([])
    const [limitPage, setlimitPage] = useState(4)
    const [startPage, setstartPage] = useState(0)
    const [find, setFind] = useState('')

    const shortID = (id) => {
        let theid = id.split('-')
        return theid[0]
    }

    const dateModified = (date) => {
        let splitDate = date.split('T')
        let newDate = splitDate[0].split('-')
        return `${newDate[2]} - ${newDate[1]}`
    }

    // useEffect(()=> {
    //     setuserData(props.Person.dataPersonnel)
    // },[])

    useEffect(()=> {
        renderData()
    },[startPage, limitPage, dataPersonnel])


    useEffect(()=> {
        const getFindData = (data) => {
            if(data) {
                let reduxPeople = dataPersonnel
                var validperson = reduxPeople.filter((val, ind)=> {
                    return val.name.first.toLocaleLowerCase().includes(data)
                })
                console.log(validperson);
                setfilterPerson(validperson)
            } else {
                setfilterPerson('')
            }
        }
        getFindData(find)
    },[find, dataPersonnel])

    const renderData = () => {
        let allData
        if(!filterPerson) {
            let reduxPeople = dataPersonnel
            allData = reduxPeople.map((val, ind)=> {
                if(ind < limitPage && ind >= startPage) {
                    return (
                        <div key={ind} className="personcard">
                            <div className="topcard">
                                <div style={{fontSize: '15px'}} className="personid">
                                    Personnel ID: <span style={{color: '#23c7c6', fontSize: '13px'}}>{shortID(val.login.uuid)}</span>
                                </div>
                                <span><i className="fas fa-ellipsis-h"></i></span>
                            </div>
                            <div className='lines' />
                            <div className="mobilestretch">
                                <div className="midcard">
                                    <div className="insidephoto">
                                        <img className='imgcard' src={val.picture.medium} alt=""/>
                                    </div>
                                </div>
                                <div className="bottcard">
                                    <div className="info">
                                        <div className="infotitle">Name</div>
                                        <div className="infocontain">{val.name.first} {val.name.last}</div>
                                    </div>
                                    <div className="info">
                                        <div className="infotitle">Telephone</div>
                                        <div className="infocontain">{val.cell}</div>
                                    </div>
                                    <div className="info hidebr">
                                        <div className="infotitle">Birthday</div>
                                        <div className="infocontain">{dateModified(val.dob.date)}</div>
                                    </div>
                                    <div className="info hideemail">
                                        <div className="infotitle">Email</div>
                                        <div className="infocontain">{val.email}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        } else {
            allData = filterPerson.map((val, ind)=> {
                if(ind < limitPage && ind >= startPage) {
                    return (
                        <div key={ind} className="personcard">
                            <div className="topcard">
                                <div style={{fontSize: '15px'}} className="personid">
                                    Personnel ID: <span style={{color: '#23c7c6', fontSize: '13px'}}>{shortID(val.login.uuid)}</span>
                                </div>
                                <span><i className="fas fa-ellipsis-h"></i></span>
                            </div>
                            <div className='lines' />
                            <div className="mobilestretch">
                                <div className="midcard">
                                    <div className="insidephoto">
                                        <img className='imgcard' src={val.picture.medium} alt=""/>
                                    </div>
                                </div>
                                <div className="bottcard">
                                    <div className="info">
                                        <div className="infotitle">Name</div>
                                        <div className="infocontain">{val.name.first} {val.name.last}</div>
                                    </div>
                                    <div className="info">
                                        <div className="infotitle">Telephone</div>
                                        <div className="infocontain">{val.cell}</div>
                                    </div>
                                    <div className="info hidebr">
                                        <div className="infotitle">Birthday</div>
                                        <div className="infocontain">{dateModified(val.dob.date)}</div>
                                    </div>
                                    <div className="info hideemail">
                                        <div className="infotitle">Email</div>
                                        <div className="infocontain">{val.email}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
        return allData
    }

    const renderDataMobile = () => {
        let mobileData
        if(!filterPerson) {
            let reduxPeople = dataPersonnel
            mobileData = reduxPeople.map((val, ind)=> {
                return (
                    <LazyLoad key={ind} height={100} offset={[-100, 100]} placeholder={<Spinner />}>
                    <div key={ind} className="personcard">
                        <div className="topcard">
                            <div style={{fontSize: '15px'}} className="personid">
                                Personnel ID: <span style={{color: '#23c7c6', fontSize: '13px'}}>{shortID(val.login.uuid)}</span>
                            </div>
                            <span><i className="fas fa-ellipsis-h"></i></span>
                        </div>
                        <div className='lines' />
                        <div className="mobilestretch">
                            <div className="midcard">
                                <div className="insidephoto">
                                    <img className='imgcard' src={val.picture.medium} alt=""/>
                                </div>
                            </div>
                            <div className="bottcard">
                                <div className="info">
                                    <div className="infotitle">Name</div>
                                    <div className="infocontain">{val.name.first} {val.name.last}</div>
                                </div>
                                <div className="info">
                                    <div className="infotitle">Telephone</div>
                                    <div className="infocontain">{val.cell}</div>
                                </div>
                                <div className="info hidebr">
                                    <div className="infotitle">Birthday</div>
                                    <div className="infocontain">{dateModified(val.dob.date)}</div>
                                </div>
                                <div className="info hideemail">
                                    <div className="infotitle">Email</div>
                                    <div className="infocontain">{val.email}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </LazyLoad>
                )
            })
        } else {
            mobileData = filterPerson.map((val, ind)=> {
                return (
                    <div key={ind} className="personcard">
                        <div className="topcard">
                            <div style={{fontSize: '15px'}} className="personid">
                                Personnel ID: <span style={{color: '#23c7c6', fontSize: '13px'}}>{shortID(val.login.uuid)}</span>
                            </div>
                            <span><i className="fas fa-ellipsis-h"></i></span>
                        </div>
                        <div className='lines' />
                        <div className="mobilestretch">
                            <div className="midcard">
                                <div className="insidephoto">
                                    <img className='imgcard' src={val.picture.medium} alt=""/>
                                </div>
                            </div>
                            <div className="bottcard">
                                <div className="info">
                                    <div className="infotitle">Name</div>
                                    <div className="infocontain">{val.name.first} {val.name.last}</div>
                                </div>
                                <div className="info">
                                    <div className="infotitle">Telephone</div>
                                    <div className="infocontain">{val.cell}</div>
                                </div>
                                <div className="info hidebr">
                                    <div className="infotitle">Birthday</div>
                                    <div className="infocontain">{dateModified(val.dob.date)}</div>
                                </div>
                                <div className="info hideemail">
                                    <div className="infotitle">Email</div>
                                    <div className="infocontain">{val.email}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return mobileData
    }

    const movePage = (bool) => {
        if(bool === true) {
            let newStart = startPage + 4
            let limit = limitPage + 4
            setstartPage(newStart)
            setlimitPage(limit)
        } else {
            let newStart = startPage - 4
            let limit = limitPage - 4
            setstartPage(newStart)
            setlimitPage(limit)
        }
    }

    return (
        <div className="mainsection">
            <div className="maintitle">
                <div className="lefttitle">
                    <div className='personlist'>PERSONNEL LIST</div>
                    <div className='listperson'>List of all personnels</div>
                </div>
                <div className="righttitle">
                    <div className="findperson">
                        <i className="fas fa-search"></i>
                        <input onChange={(e)=> setFind(e.target.value.toLocaleLowerCase())} className='inputfield' type="text" placeholder='Find Personnel'/>
                    </div>
                    <div className="addperson">
                        <button className='btn'>ADD PERSONNEL<i className="fas fa-plus"></i></button>
                    </div>
                </div>
            </div>
            
            <div className="maincard">
                {renderData()}
            </div>

            <div className="mobilecard">
                {renderDataMobile()}
            </div>

            <div className="navigation hidenav">
                {
                    startPage === 0?
                    <div className="previous disableprev"><span><i className="fas fa-chevron-left"></i></span>Previous Page</div>
                    :
                    <div onClick={()=> movePage(false)} className="previous"><span><i className="fas fa-chevron-left"></i></span>Previous Page</div>
                }
                {
                    filterPerson?
                        limitPage >= filterPerson.length?
                        <div className="next disablenext">Next Page<span><i className="fas fa-chevron-right"></i></span></div>
                        :
                        <div onClick={()=> movePage(true)} className="next">Next Page<span><i className="fas fa-chevron-right"></i></span></div>
                    :    
                    limitPage === 28 ?
                    <div className="next disablenext">Next Page<span><i className="fas fa-chevron-right"></i></span></div>
                    :
                    <div onClick={()=> movePage(true)} className="next">Next Page<span><i className="fas fa-chevron-right"></i></span></div>
                }
            </div>
        </div>
    )
}

const Statetoprops = (state) => {
    return {
      Person: state.Person
    }
  }

export default connect(Statetoprops) (DataCard);