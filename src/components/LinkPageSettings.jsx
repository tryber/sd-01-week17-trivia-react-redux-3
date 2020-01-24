import React from 'react';
import { Link } from 'react-router-dom';
import './LinkPageSettings.css';

const linkPageSettings = () => (
  <Link to="/settings">
    <div className="settings">
      <button type="button" className="button-settings" data-testid="config-button" />
    </div>
  </Link>
);

export default linkPageSettings;
