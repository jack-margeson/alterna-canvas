import "./Announcements.scss"
import AnnouncementBlock from "./AnnouncementBlock";

function Announcements ({childToParent}){
    childToParent("Classes")
    
    return(
        <div className="announcements-main">
            <AnnouncementBlock classnum="CS5001" announcement="Explore the fascinating world of human behavior and mental processes. Dive into topics like memory, emotions, and cognition. Class meets Mondays and Wednesdays, 9:00 AM - 10:30 AM." viewed="no"></AnnouncementBlock>
            <AnnouncementBlock classnum="CS5001" announcement="Unlock the secrets of programming and algorithms. No prior coding experience needed. Join us on Tuesdays and Thursdays, 11:00 AM - 12:30 PM." viewed="no"></AnnouncementBlock>
            <AnnouncementBlock classnum="CS5001" announcement="Journey through centuries of global events, cultures, and revolutions." viewed="no"></AnnouncementBlock>
            <AnnouncementBlock classnum="CS5001" announcement="Cultivate your storytelling skills. Explore various genres and receive constructive feedback from peers." viewed="yes"></AnnouncementBlock>
            <AnnouncementBlock classnum="CS5001" announcement="Understand environmental challenges and sustainable solutions. Labs and field trips included." viewed="yes"></AnnouncementBlock>
            <AnnouncementBlock classnum="CS5001" announcement="Delve into the fundamentals of entrepreneurship, marketing, and finance. " viewed="yes"></AnnouncementBlock>
            <AnnouncementBlock classnum="CS5001" announcement="Embark on a cosmic journey, exploring planets, stars, and galaxies. Observational nights included." viewed="yes"></AnnouncementBlock>
        </div>
    )
}

export default Announcements;