// components/TeamMembers.jsx
export default function TeamMembers() {
  const team = [
    {
      name: "Sory Madison",
      title: "CEO Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Hary Worth",
      title: "Head Manager",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Jenny Hobb",
      title: "Branch Manager",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Johnny Smith",
      title: "Supervisor",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 border ">
      <div className="text-center mb-12">
        <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-2 rounded-4xl shadow-2xl bg-white p-4 w-fit mx-auto ">
          • OUR TEAM •
        </p>
        <h2 className="mt-4 text-3xl font-bold">Team Members</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Sint ratione facere, delectus cumba consequatur, harum distinctio!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-8 ">
        {team.map((m, i) => (
          <div
            key={i}
            className="w-64 relative bg-white rounded-2xl shadow-lg h-[350px] p-4"
          >
            <img
              src={m.image}
              alt={m.name}
              className="w-full h-64 object-cover rounded-3xl "
            />
            <div className="bg-red-500 text-white text-center py-3 absolute left-0 top-[230px] rounded-3xl w-[236px] ml-2">
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-sm">{m.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
