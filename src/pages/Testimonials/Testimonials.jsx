import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alice',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      comment: 'Great tour, had so much fun!',
    },
    {
      name: 'Mark',
      photo: 'https://randomuser.me/api/portraits/men/34.jpg',
      comment: 'Loved the experience, will come again.',
    },
    {
      name: 'Sophie',
      photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      comment: 'Amazing guides and beautiful places!',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        What Our Clients Say
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center"
          >
            <img
              src={t.photo}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-green-500 object-cover"
            />
            <p className="text-gray-600 italic mb-3">"{t.comment}"</p>
            <h3 className="text-lg font-semibold text-gray-800">- {t.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
