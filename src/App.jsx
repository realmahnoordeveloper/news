



import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NewsItem from './components/NewsItem';

function App() {
  // Aapka news data
  const newsData = [
    {
      title: "New ES6 upgrade available",
      description: "Sed up perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventor verittis et qasi architecto"
    },
    {
      title: "The importance of REACT in the development",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque curropti quos doloras et qauas molest exepttura sint occati caadogi non provident"
    },
    {
      title: "REACT developers going on strike",
      description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequater?Quis autern vel eum iura reprehenderat qui in ea voluptate velit esse quam nehil nonmolastiae qunesequatura, ven illum qui delorem eumfugiat quoleneyby nella paristent?"
    },
    {
      title: "Say what again. I dare you.",
      description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequater?Quis autern vel eum iura reprehenderat qui in ea voluptate velit esse quam nehil nonmolastiae qunesequatura, ven illum qui delorem eumfugiat quoleneyby nella paristent?"
    
    }
  ];

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* Top Sections */}
      <Header />
      <Navbar />

      {/* News Articles List */}
      <main style={{ backgroundColor: '#fff', minHeight: '50vh' }}>
        {newsData.map((item, index) => (
          <NewsItem 
            key={index} 
            title={item.title} 
            description={item.description} 
          />
        ))}
      </main>
    </div>
  );
}

export default App;