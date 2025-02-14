'use client'
import React from 'react'

const YarnBall = ({color}:{color:string}) => {
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            <defs>
                <radialGradient id="yarnGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.9" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.6" />
                </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#yarnGlow)" />
            <path
                d="M50 5 Q35 25 50 45 Q65 25 50 5"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeOpacity="0.3"
            />
            <path
                d="M50 95 Q35 75 50 55 Q65 75 50 95"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeOpacity="0.3"
            />
        </svg>
    )
}

export default YarnBall
