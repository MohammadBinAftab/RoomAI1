import Image from 'next/image';

const examples = [
  {
    before: '/examples/before-1.jpg',
    after: '/examples/after-1.jpg',
    title: 'Modern Living Room',
  },
  {
    before: '/examples/before-2.jpg',
    after: '/examples/after-2.jpg',
    title: 'Minimalist Bedroom',
  },
  {
    before: '/examples/before-3.jpg',
    after: '/examples/after-3.jpg',
    title: 'Contemporary Kitchen',
  },
  {
    before: '/examples/before-4.jpg',
    after: '/examples/after-4.jpg',
    title: 'Cozy Home Office',
  },
];

export function ExamplesSection() {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          AI-Generated Transformations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{example.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48">
                  <Image
                    src={example.before}
                    alt="Before"
                    fill
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    Before
                  </div>
                </div>
                <div className="relative h-48">
                  <Image
                    src={example.after}
                    alt="After"
                    fill
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    After
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}