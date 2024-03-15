import React from 'react';
import './DescribeFile.css'; // Import CSS for styling
import Video from './v2.mp4';

export default function DescribePage() {
    return (
        <div className="describe-container">
            <h1 className="title">Project Description</h1>
            <div className="video-wrapper">
                <video src={Video} controls="controls" className="video"/>
            </div>
        </div>
    );
}