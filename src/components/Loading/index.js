import React from 'react';
import './styles.css';

export default function Loading() {
  return (
    <div className="center-block-loading">
      <div className="loading">
        <div className="line" />
      </div>
      <div className="loading-name">
        <div className="line" />
      </div>
    </div>
  );
}
