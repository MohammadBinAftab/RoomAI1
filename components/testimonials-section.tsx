import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    content: 'This AI tool has revolutionized how I present concepts to clients.',
    avatar: '/avatars/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Homeowner',
    content: 'Transformed my living room in minutes. Absolutely incredible!',
    avatar: '/avatars/michael.jpg',
  },
  {
    name: 'Emma Davis',
    role: 'Architect',
    content: 'The accuracy and creativity of the AI designs are remarkable.',
    avatar: '/avatars/emma.jpg',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}