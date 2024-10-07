"use client";

import React, { useRef } from 'react';
import Script from 'next/script';

// Add this at the top of your file
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

// Define the structure of a menu item
interface MenuItem {
  name: string;
  description: string;
  thumbnail: string;
  glbModel: string;
  usdzModel: string;
}

// Define the props for our component
interface ARFoodMenuProps {
  menuItems: MenuItem[];
}

// Add this type definition at the top of your file
type ModelViewerProps = {
  src: string;
  'ios-src': string;
  alt: string;
  ar: boolean;
  'ar-modes': string;
  'camera-controls': boolean;
  poster: string;
  style: React.CSSProperties;
};

const ARFoodMenu: React.FC<ARFoodMenuProps> = ({ menuItems }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Script
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        type="module"
      />
      <div ref={containerRef}>
        <h1>AR Food Menu</h1>
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <model-viewer
              src={item.glbModel}
              ios-src={item.usdzModel}
              alt={`${item.name} 3D model`}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              poster={item.thumbnail}
              style={{ width: '100%', height: '300px' }}
            >
              <button slot="ar-button" style={{
                backgroundColor: 'white',
                borderRadius: '4px',
                border: 'none',
                position: 'absolute',
                bottom: '16px',
                right: '16px',
              }}>
                👀 View in AR
              </button>
            </model-viewer>
          </div>
        ))}
      </div>
    </>
  );
};

export default ARFoodMenu;
