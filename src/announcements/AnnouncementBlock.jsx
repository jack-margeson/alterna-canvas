import "./AnnouncementBlock.scss"

function AnnouncementBlock ({classnum, announcement, viewed}){
    if(viewed==="yes"){
        return(
            <div className="viewedannouncementblockcontainer">
                <p className="classnumber">{classnum}</p>
                <p className="announcement">{announcement}</p>
            </div>
        )
    }
    else{
        return(
            <div className="unviewedannouncementblockcontainer">
                <p className="classnumber">{classnum}</p>
                <p className="announcement">{announcement}</p>
            </div>
        )
    }
}

export default AnnouncementBlock;