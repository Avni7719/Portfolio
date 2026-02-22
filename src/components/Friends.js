import React from 'react';

const Friends = ({ friends }) => {
  return (
    <section id="friends" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">People Who Helped</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {friends.map((friend, idx) => (
            <div key={idx} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{friend.name} — {friend.role}</h3>
              <p className="text-gray-600 dark:text-gray-300">{friend.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Friends;
