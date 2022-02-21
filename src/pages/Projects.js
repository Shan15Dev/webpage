import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './index.css';

const Projects = () => {
    return (
        <div className='container'>
            <h1>Projects</h1>
            <div id='post'>
                <a href='https://github.com/Shan15Dev/ShanBrowserChromium'>
                <h3>ShanBrowser</h3>
                <div id='text'>
                    <p>Der ShanBrowser ist ein Browser, welches auf der Chromium Engine basiert und dementsprechend auch gleich schnell ist wie Google Chrome oder Microsoft Edge.</p>
                </div>
                </a>
            </div>
        </div>
    );
}

export default Projects;