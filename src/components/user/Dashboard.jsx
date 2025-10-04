import React, { useContext } from "react";
import { useAuth } from "../../context/AuthContext";
import BorrowedBooks from "./BorrowedBooks";
import ReservedBooks from "./ReservedBooks";
import "./dashboard.css";

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {currentUser.name}</h1>
        <div className="user-info">
          <p>
            <strong>Membership ID:</strong> {currentUser.membershipId}
          </p>
          <p>
            <strong>Member Since:</strong> {currentUser.joinDate}
          </p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2>Your Borrowed Books</h2>
          <BorrowedBooks />
        </div>

        <div className="dashboard-section">
          <h2>Your Reserved Books</h2>
          <ReservedBooks />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
