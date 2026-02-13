import React from 'react'
import { Link } from 'react-router-dom'

function DeaddictionCommunity() {
  return (
    <section className="section deaddiction-community-section">
      <div className="container">
        <div className="community-content">
          <div className="community-text">
            <h3 className="community-title">Deaddiction groups & communities</h3>
            <p className="community-description">
              Mental health and addiction-related problems are not uncommon. If you are struggling with such issues, you are not alone. Help is just a few clicks away. Find some of the popular groups and communities in the mental health and de-addiction space right here.
            </p>
            <Link to="/communities" className="btn btn-outline">
              Learn More <span className="arrow">→</span>
            </Link>
          </div>

          <div className="community-image">
            <div className="illustration-box">
              <svg viewBox="0 0 800 600" className="community-illustration">
                {/* Background */}
                <rect x="0" y="0" width="800" height="600" fill="#2d7f5e" rx="20"/>
                
                {/* Decorative circles */}
                <circle cx="150" cy="450" r="100" fill="#236b4f" opacity="0.3"/>
                <circle cx="650" cy="150" r="120" fill="#236b4f" opacity="0.3"/>
                
                {/* Ground/Floor line */}
                <line x1="100" y1="480" x2="700" y2="480" stroke="#1a5c42" strokeWidth="3"/>
                
                {/* Person 1 - Left, standing */}
                <g transform="translate(150, 280)">
                  {/* Head */}
                  <ellipse cx="0" cy="0" rx="30" ry="35" fill="#8b6f47"/>
                  <path d="M -20,-10 Q -15,-25 0,-28 Q 15,-25 20,-10" fill="#2c2416"/>
                  
                  {/* Body - Yellow top */}
                  <path d="M -35,35 L -25,40 L -25,120 L 25,120 L 25,40 L 35,35 L 0,35 Z" fill="#ffd93d"/>
                  
                  {/* Arms */}
                  <ellipse cx="-40" cy="80" rx="12" ry="35" fill="#ffd93d" transform="rotate(-20 -40 80)"/>
                  <ellipse cx="40" cy="80" rx="12" ry="35" fill="#ffd93d" transform="rotate(20 40 80)"/>
                  <circle cx="-45" cy="110" r="10" fill="#c9a86a"/>
                  <circle cx="45" cy="110" r="10" fill="#c9a86a"/>
                  
                  {/* Pants - Blue */}
                  <rect x="-25" y="120" width="22" height="80" fill="#4a7ba7" rx="3"/>
                  <rect x="3" y="120" width="22" height="80" fill="#4a7ba7" rx="3"/>
                  
                  {/* Shoes */}
                  <ellipse cx="-14" cy="205" rx="18" ry="8" fill="#ff9f43"/>
                  <ellipse cx="14" cy="205" rx="18" ry="8" fill="#ff9f43"/>
                </g>

                {/* Person 2 - Sitting left */}
                <g transform="translate(280, 350)">
                  {/* Head */}
                  <ellipse cx="0" cy="0" rx="30" ry="35" fill="#d4a574"/>
                  <path d="M -20,-10 Q -15,-25 0,-28 Q 15,-25 20,-10" fill="#2c2416"/>
                  
                  {/* Body - Yellow top */}
                  <path d="M -35,35 L -25,40 L -25,80 L 25,80 L 25,40 L 35,35 L 0,35 Z" fill="#ffd93d"/>
                  
                  {/* Arms */}
                  <ellipse cx="-40" cy="60" rx="12" ry="30" fill="#ffd93d" transform="rotate(-30 -40 60)"/>
                  <ellipse cx="40" cy="60" rx="12" ry="30" fill="#ffd93d" transform="rotate(30 40 60)"/>
                  
                  {/* Sitting - Legs bent */}
                  <path d="M -20,80 L -20,100 L -60,130 L -60,140 L -40,140 L -40,105" fill="#4a7ba7"/>
                  <path d="M 20,80 L 20,100 L 60,130 L 60,140 L 40,140 L 40,105" fill="#4a7ba7"/>
                  
                  {/* Shoes */}
                  <ellipse cx="-50" cy="140" rx="18" ry="8" fill="#ff9f43"/>
                  <ellipse cx="50" cy="140" rx="18" ry="8" fill="#ff9f43"/>
                </g>

                {/* Person 3 - Center, black shirt */}
                <g transform="translate(420, 260)">
                  {/* Head */}
                  <ellipse cx="0" cy="0" rx="32" ry="37" fill="#8b6f47"/>
                  <path d="M -20,-10 Q -10,-22 10,-18" fill="#2c2416"/>
                  
                  {/* Body - Black vest */}
                  <path d="M -40,37 L -30,42 L -30,130 L 30,130 L 30,42 L 40,37 L 0,37 Z" fill="#2c2c2c"/>
                  
                  {/* Arms - skin showing */}
                  <ellipse cx="-50" cy="85" rx="14" ry="40" fill="#c9a86a" transform="rotate(-15 -50 85)"/>
                  <ellipse cx="50" cy="85" rx="14" ry="40" fill="#c9a86a" transform="rotate(15 50 85)"/>
                  <circle cx="-55" cy="120" r="11" fill="#c9a86a"/>
                  <circle cx="55" cy="120" r="11" fill="#c9a86a"/>
                  
                  {/* Pants - Blue */}
                  <rect x="-28" y="130" width="25" height="90" fill="#4a7ba7" rx="3"/>
                  <rect x="3" y="130" width="25" height="90" fill="#4a7ba7" rx="3"/>
                  
                  {/* Shoes */}
                  <ellipse cx="-15" cy="225" rx="20" ry="8" fill="#8b4513"/>
                  <ellipse cx="15" cy="225" rx="20" ry="8" fill="#8b4513"/>
                </g>

                {/* Person 4 - Right side */}
                <g transform="translate(560, 280)">
                  {/* Head */}
                  <ellipse cx="0" cy="0" rx="30" ry="35" fill="#d4a574"/>
                  <path d="M -22,-12 Q -15,-25 0,-27 Q 15,-24 22,-10" fill="#3d2817"/>
                  
                  {/* Body - Yellow top */}
                  <path d="M -35,35 L -25,40 L -25,120 L 25,120 L 25,40 L 35,35 L 0,35 Z" fill="#ffd93d"/>
                  
                  {/* Arms */}
                  <ellipse cx="-38" cy="75" rx="12" ry="32" fill="#ffd93d" transform="rotate(-25 -38 75)"/>
                  <ellipse cx="38" cy="75" rx="12" ry="32" fill="#ffd93d" transform="rotate(25 38 75)"/>
                  
                  {/* Pants - Blue */}
                  <rect x="-24" y="120" width="22" height="80" fill="#4a7ba7" rx="3"/>
                  <rect x="2" y="120" width="22" height="80" fill="#4a7ba7" rx="3"/>
                  
                  {/* Shoes */}
                  <ellipse cx="-13" cy="205" rx="18" ry="8" fill="#ff9f43"/>
                  <ellipse cx="13" cy="205" rx="18" ry="8" fill="#ff9f43"/>
                </g>

                {/* Person 5 - Far right */}
                <g transform="translate(680, 270)">
                  {/* Head */}
                  <ellipse cx="0" cy="0" rx="30" ry="35" fill="#c9a86a"/>
                  <path d="M -20,-10 Q -10,-24 0,-26 Q 12,-23 20,-8" fill="#3d2817"/>
                  
                  {/* Body - Yellow top */}
                  <path d="M -35,35 L -25,40 L -25,125 L 25,125 L 25,40 L 35,35 L 0,35 Z" fill="#ffd93d"/>
                  
                  {/* Arms */}
                  <ellipse cx="-37" cy="78" rx="12" ry="33" fill="#ffd93d" transform="rotate(-20 -37 78)"/>
                  <ellipse cx="37" cy="78" rx="12" ry="33" fill="#ffd93d" transform="rotate(20 37 78)"/>
                  
                  {/* Pants - Blue */}
                  <rect x="-24" y="125" width="22" height="85" fill="#4a7ba7" rx="3"/>
                  <rect x="2" y="125" width="22" height="85" fill="#4a7ba7" rx="3"/>
                  
                  {/* Shoes */}
                  <ellipse cx="-13" cy="215" rx="18" ry="8" fill="#ff9f43"/>
                  <ellipse cx="13" cy="215" rx="18" ry="8" fill="#ff9f43"/>
                </g>

                {/* Crown decoration */}
                <g transform="translate(680, 520)">
                  <path d="M 0,30 L 10,0 L 20,30 L 30,5 L 40,30 L 50,0 L 60,30 Z" fill="#ffd700"/>
                  <rect x="0" y="30" width="60" height="15" fill="#ffd700" rx="3"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeaddictionCommunity
