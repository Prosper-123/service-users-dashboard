import React, { useState } from "react";
import { Link } from "react-router-dom";

const serviceUsers = [
    { id: 1, name: "John Doe", age: 78, careStatus: "Active", nextAppointment: "2024-11-18T10:00:00Z" },
    { id: 2, name: "Jane Smith", age: 84, careStatus: "Inactive", nextAppointment: "2024-11-20T14:30:00Z" },
    { id: 3, name: "Mary Johnson", age: 92, careStatus: "Active", nextAppointment: "2024-11-19T09:00:00Z" },
    { id: 4, name: "Peter Brown", age: 75, careStatus: "On Hold", nextAppointment: "2024-11-22T11:00:00Z" },
    { id: 5, name: "Susan Davis", age: 88, careStatus: "Active", nextAppointment: "2024-11-23T08:30:00Z" },
    { id: 6, name: "James Wilson", age: 82, careStatus: "Active", nextAppointment: "2024-11-24T15:00:00Z" },
    { id: 7, name: "Patricia Taylor", age: 79, careStatus: "Inactive", nextAppointment: "2024-11-21T10:30:00Z" },
    { id: 8, name: "Michael Thomas", age: 85, careStatus: "Active", nextAppointment: "2024-11-25T09:30:00Z" },
    { id: 9, name: "Linda White", age: 81, careStatus: "Active", nextAppointment: "2024-11-26T13:00:00Z" },
    { id: 10, name: "Barbara Harris", age: 90, careStatus: "On Hold", nextAppointment: "2024-11-27T12:00:00Z" },
    { id: 11, name: "Steven Martin", age: 77, careStatus: "Active", nextAppointment: "2024-11-18T11:30:00Z" },
    { id: 12, name: "Elizabeth Moore", age: 86, careStatus: "Active", nextAppointment: "2024-11-20T16:00:00Z" },
    { id: 13, name: "Charles Clark", age: 89, careStatus: "Inactive", nextAppointment: "2024-11-19T14:00:00Z" },
    { id: 14, name: "Dorothy Lewis", age: 87, careStatus: "Active", nextAppointment: "2024-11-21T15:30:00Z" },
    { id: 15, name: "Christopher Walker", age: 83, careStatus: "Active", nextAppointment: "2024-11-23T11:15:00Z" },
    { id: 16, name: "Nancy Hall", age: 91, careStatus: "Inactive", nextAppointment: "2024-11-24T10:45:00Z" },
    { id: 17, name: "Daniel Young", age: 76, careStatus: "On Hold", nextAppointment: "2024-11-25T12:30:00Z" },
    { id: 18, name: "Karen King", age: 80, careStatus: "Active", nextAppointment: "2024-11-26T09:15:00Z" },
    { id: 19, name: "Joseph Wright", age: 84, careStatus: "Active", nextAppointment: "2024-11-27T10:00:00Z" },
    { id: 20, name: "Betty Lopez", age: 78, careStatus: "Inactive", nextAppointment: "2024-11-28T13:45:00Z" }
  ];
  

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const handleSearch = (e) => setSearchQuery(e.target.value.toLowerCase());
  const handleFilterChange = (e) => setSelectedStatus(e.target.value);

  const filteredUsers = serviceUsers.filter((user) => {
    const matchesStatus = selectedStatus === "All" || user.careStatus === selectedStatus;
    const matchesSearch = user.name.toLowerCase().includes(searchQuery);
    return matchesStatus && matchesSearch;
  });

  return (
    <div>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <select value={selectedStatus} onChange={handleFilterChange} className="status-filter">
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="On Hold">On Hold</option>
        </select>
      </div>

      <div className="summary-cards">
        <SummaryCard title="Active Users" count={serviceUsers.filter((user) => user.careStatus === "Active").length} />
        <SummaryCard title="Inactive Users" count={serviceUsers.filter((user) => user.careStatus === "Inactive").length} />
        <SummaryCard title="Users on Hold" count={serviceUsers.filter((user) => user.careStatus === "On Hold").length} />
      </div>

      <table className="user-table">
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
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.careStatus}</td>
              <td>{new Date(user.nextAppointment).toLocaleString()}</td>
              <td>
                <Link to={`/user/${user.id}`} className="view-link">
                  View Profile
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SummaryCard = ({ title, count }) => (
  <div className="summary-card">
    <p>{title}</p>
    <h3>{count}</h3>
  </div>
);

export default Dashboard;
