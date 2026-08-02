import React from 'react';

function AdminPanel() {
  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <div>
        <button onClick={() => console.log('User Management')}>User Management</button>
        <button onClick={() => console.log('Content Management')}>Content Management</button>
        <button onClick={() => console.log('System Settings')}>System Settings</button>
        {/* More admin functionalities as needed */}
      </div>
    </div>
  );
}

export default AdminPanel;
