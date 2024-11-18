import React from 'react';

const ServiceUserList = ({ users }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Care Status</th>
        <th>Next Appointment</th>
        <th>Actions</th>
      </tr>
    </thead>
    
    <tbody>
      {users.map((user) => (
        <tr key={user.id} style={{ backgroundColor: user.careStatus === 'Active' ? '#e6f7e6' : '#f7e6e6' }}>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.careStatus}</td>
          <td>{user.nextAppointment || 'N/A'}</td>
          <td>
            <button>Edit</button>
            <button>View Profile</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ServiceUserList;
