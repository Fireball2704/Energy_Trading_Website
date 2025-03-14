import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./buyer_dashboard/b_dashboard.css"; // You'll need to create this CSS file

const BuyerDashboard = () => {
  // Sample auction data - in a real app, you would fetch this from an API
  const [auctions, setAuctions] = useState([
    {
      id: 1,
      seller: "Prosumer_123",
      quantity: "35 kWh",
      currentBid: "0.18 ETH",
      bidHistory: [
        { user: "User_123", amount: "0.20 ETH" },
        { user: "User_153", amount: "0.25 ETH" }
      ]
    },
    // You can add more auctions here
  ]);

  const [bidAmount, setBidAmount] = useState("");
  
  const handleBidChange = (e) => {
    setBidAmount(e.target.value);
  };
  
  const handlePlaceBid = (auctionId) => {
    // Logic to place a bid
    console.log(`Placing bid of ${bidAmount} ETH on auction ${auctionId}`);
    
    // In a real app, you would make an API call here to place the bid
    // Then update the auctions state with the new bid
    
    // Clear bid input
    setBidAmount("");
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo">
          <img src="/logo.svg" alt="EnerGenius" />
          <h1>EnerGenius</h1>
        </div>
        <Link to="/login" className="logout-button">Logout</Link>
      </header>

      <main className="dashboard-content">
        <h2 className="section-title">ACTIVE AUCTIONS</h2>
        
        <div className="auctions-grid">
          {auctions.map((auction) => (
            <div key={auction.id} className="auction-card">
              <div className="auction-details">
                <div className="auction-info">
                  <p><strong>Seller:</strong> {auction.seller}</p>
                  <p><strong>Quantity:</strong> {auction.quantity}</p>
                  <p><strong>Current Bid:</strong> {auction.currentBid}</p>
                </div>
                
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                
                <div className="bid-controls">
                  <input 
                    type="text" 
                    placeholder="Enter Bid" 
                    value={bidAmount}
                    onChange={handleBidChange}
                    className="bid-input"
                  />
                  <button 
                    className="place-bid-button"
                    onClick={() => handlePlaceBid(auction.id)}
                  >
                    Place Bid
                  </button>
                </div>
                
                <div className="bid-history">
                  <h4>Bid History</h4>
                  {auction.bidHistory.map((bid, index) => (
                    <p key={index}>{bid.user}: {bid.amount}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BuyerDashboard;