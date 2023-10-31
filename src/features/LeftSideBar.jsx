import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import TagIcon from '@mui/icons-material/Tag';

function LeftSideBar() {

    let names = localStorage.getItem('name')
    return (
        <div> <div className='leftSideBar'>
            <div className='upperDiv'>
                <div className='camera'>
                    <i className="fa fa-camera cameraIcon"></i>
                </div>
                <h3 className='h3'>Welcome, {names}</h3>
                <hr></hr>
                <p className='connections'> Connections</p>
                <hr></hr>
                <p className='growYour'>Grow your network</p>
                <hr></hr>
                <p className='access'>Access exclusive Tools & insights</p>
                <hr></hr>
                <i className="fa fa-bookmark bookmark"> My Items</i>
            </div>
            <div className='lowerDiv'>
                <p><BookmarkIcon />My jobs</p>
                <p><GroupsIcon />Group</p>
                <h5><CloudSyncIcon />CloudComputing</h5>
                <h5><EventIcon />Events</h5>
                <h5><TagIcon />Followed Hashtags</h5>
                <hr></hr>
                <p>Discover more</p>
            </div>
        </div>

        </div>
    )
}

export default LeftSideBar