import React, { useState } from "react";

const SHOWROOM = {
  name: "Maa Vaishno Automobile - Yamaha Latehar",
  phone: "7008453858",
  whatsapp: "9471155873",
  email: "gvansh518@gmail.com",
  address: "Latehar, Jharkhand",
  mapLink:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5219635056525!2d84.5925423!3d23.7232153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398b6d7a03f04ab5%3A0xf4e7129ce910df61!2sLatehar!5e0!3m2!1sen!2sin!4v1701354138437!5m2!1sen!2sin",
};

const BIKES = [
  {
    id: 1,
    name: "Yamaha R15 V4",
    
    img: "/bikes/r15v4.png",
    desc: "Sporty 155cc single-cylinder, race-inspired styling.",
  },
  {
    id: 2,
    name: "Yamaha MT-15",
    
    img: "/bikes/mt15.png",
    desc: "Naked streetfighter, agile and punchy.",
  },
  {
    id: 3,
    name: "Yamaha FZ-FI",
   
    img: "/bikes/fzfi.png",
    desc: "Popular commuter with performance touch.",
  },
];

const SCOOTERS = [
  {
    id: 1,
    name: "Yamaha Fascino 125",
    
    img: "/bikes/fascino.png",
    desc: "Stylish, smooth riding 125cc scooter.",
  },
  {
    id: 2,
    name: "Yamaha RayZR 125",
    
    img: "/bikes/rayzr.png",
    desc: "Sporty scooter with modern features.",
  },
  {
    id: 3,
    name: "Yamaha Aerox 155",
    
    img: "/bikes/aerox.png",
    desc: "High-performance maxi-scooter.",
  },
];

const showroomFront = "/images/front.jpeg";
const showroomInterior = "/images/interior.jpeg";

export default function App() {
  const [enquiry, setEnquiry] = useState({
    name: "",
    phone: "",
    model: "",
    message: "",
  });
  const [serviceBooking, setServiceBooking] = useState({
    name: "",
    phone: "",
    regNo: "",
    serviceType: "",
  });
  const [testRide, setTestRide] = useState({ name: "", phone: "", model: "" });
  const [showToast, setShowToast] = useState("");

  function openWhatsApp(prefilled) {
    const number = SHOWROOM.whatsapp;
    if (!number) return alert("Set WhatsApp number with country code");
    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(prefilled)}`,
      "_blank"
    );
  }

  function handleEnquirySubmit(e) {
    e.preventDefault();
    openWhatsApp(
      `Hi, I am ${enquiry.name} (${enquiry.phone}). Interested in: ${enquiry.model} - ${enquiry.message}`
    );
    setShowToast("Enquiry opened in WhatsApp.");
  }

  function handleServiceSubmit(e) {
    e.preventDefault();
    openWhatsApp(
      `Service booking: ${serviceBooking.name} (${serviceBooking.phone}), Reg: ${serviceBooking.regNo}, Service: ${serviceBooking.serviceType}`
    );
    setShowToast("Service booking opened in WhatsApp.");
  }

  function handleTestRideSubmit(e) {
    e.preventDefault();
    openWhatsApp(
      `Test ride request: ${testRide.name} (${testRide.phone}), Model: ${testRide.model}`
    );
    setShowToast("Test ride opened in WhatsApp.");
  }

  return (
    <div className="min-h-screen relative text-gray-800 bg-gray-50 overflow-hidden">
      {/* Background Yamaha Watermark */}
      <img
        src="/images/logo.png"
        alt="Yamaha watermark"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             opacity-[0.15] w-[500px] max-w-[90vw] pointer-events-none 
             select-none z-0"
      />
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo + Name */}
          <div className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="Yamaha Logo"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h1 className="text-lg font-semibold">{SHOWROOM.name}</h1>
              <p className="text-sm text-gray-500">
                Authorized Yamaha Sales & Service — Latehar
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SHOWROOM.phone}`}
              className="hidden md:inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Call Now
            </a>

            <button
              onClick={() =>
                openWhatsApp("Hello, I want to enquire about Yamaha bikes.")
              }
              className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600 transition"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </header>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold animate-fadeIn">
              Welcome to {SHOWROOM.name}
            </h2>
            <p className="mt-3 text-lg animate-fadeIn delay-100">
              Authorized Yamaha dealer in Latehar — Sales, Genuine Service &
              Spare Parts. Fast delivery, honest prices and friendly staff.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() =>
                  document
                    .getElementById("enquiryForm")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-blue-700 px-4 py-2 rounded-md font-semibold shadow hover:shadow-lg transform transition hover:scale-105"
              >
                Enquire Now
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("testRideForm")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-transparent border border-white px-4 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Book Test Ride
              </button>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {[
                "Same-day Service",
                "Genuine Yamaha Parts",
                "Easy Finance",
                "Exchange Offers",
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="bg-white text-gray-800 p-3 rounded shadow text-center font-medium hover:shadow-lg transform transition hover:scale-105"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img
              src={showroomFront}
              alt="Showroom Front"
              className="w-full h-56 object-cover rounded shadow-lg transform transition hover:scale-105"
            />
            <img
              src={showroomInterior}
              alt="Showroom Interior"
              className="w-full h-56 object-cover rounded shadow-lg transform transition hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Quick Enquiry Box */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Instant Enquiry</h3>
          <form
            id="enquiryForm"
            onSubmit={handleEnquirySubmit}
            className="space-y-3"
          >
            <input
              required
              value={enquiry.name}
              onChange={(e) => setEnquiry({ ...enquiry, name: e.target.value })}
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              required
              value={enquiry.phone}
              onChange={(e) =>
                setEnquiry({ ...enquiry, phone: e.target.value })
              }
              placeholder="Mobile Number"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              required
              value={enquiry.model}
              onChange={(e) =>
                setEnquiry({ ...enquiry, model: e.target.value })
              }
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select model</option>
              {BIKES.concat(SCOOTERS).map((m) => (
                <option key={m.id + m.name} value={m.name}>
                  {m.name}
                </option>
              ))}
            </select>
            <textarea
              value={enquiry.message}
              onChange={(e) =>
                setEnquiry({ ...enquiry, message: e.target.value })
              }
              placeholder="Message (optional)"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Send via WhatsApp
              </button>
              <a
                href={`mailto:${
                  SHOWROOM.email
                }?subject=Enquiry&body=${encodeURIComponent(
                  JSON.stringify(enquiry)
                )}`}
                className="px-4 py-2 border rounded hover:bg-gray-100 transition"
              >
                Send Email
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* Catalogs */}
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Bikes and Scooters */}
        {[
          { title: "Bikes", items: BIKES },
          { title: "Scooters", items: SCOOTERS },
        ].map((cat) => (
          <section key={cat.title}>
            <h3 className="text-2xl font-semibold mb-4">{cat.title}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded shadow p-4 hover:shadow-lg transform transition hover:scale-105"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-40 w-full object-contain rounded"
                  />

                  <h4 className="mt-3 font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  <p className="mt-2 font-semibold">{item.price}</p>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => {
                        setEnquiry({ ...enquiry, model: item.name });
                        document
                          .getElementById("enquiryForm")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      Enquire
                    </button>
                    <button
                      onClick={() => {
                        setTestRide({ ...testRide, model: item.name });
                        document
                          .getElementById("testRideForm")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-3 py-2 border rounded hover:bg-gray-100 transition"
                    >
                      Test Ride
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Services */}
        <section className="bg-white rounded shadow p-6 space-y-4">
          <h3 className="text-2xl font-semibold">Service Center</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>General Service — Same day delivery</li>
                <li>Engine & Mechanical Repairs</li>
                <li>Oil Change & Consumables</li>
                <li>Genuine Yamaha Spare Parts</li>
                <li>Brake & Clutch Work</li>
                <li>Pickup & Drop (ask for availability)</li>
              </ul>
              <form onSubmit={handleServiceSubmit} className="mt-4 space-y-3">
                <input
                  required
                  value={serviceBooking.name}
                  onChange={(e) =>
                    setServiceBooking({
                      ...serviceBooking,
                      name: e.target.value,
                    })
                  }
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  required
                  value={serviceBooking.phone}
                  onChange={(e) =>
                    setServiceBooking({
                      ...serviceBooking,
                      phone: e.target.value,
                    })
                  }
                  placeholder="Phone"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  value={serviceBooking.regNo}
                  onChange={(e) =>
                    setServiceBooking({
                      ...serviceBooking,
                      regNo: e.target.value,
                    })
                  }
                  placeholder="Registration No (optional)"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <select
                  required
                  value={serviceBooking.serviceType}
                  onChange={(e) =>
                    setServiceBooking({
                      ...serviceBooking,
                      serviceType: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select service type</option>
                  <option>General Service</option>
                  <option>Oil Change</option>
                  <option>Brake Repair</option>
                  <option>Engine Repair</option>
                </select>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    Book via WhatsApp
                  </button>
                  <a
                    href={`tel:${SHOWROOM.phone}`}
                    className="px-4 py-2 border rounded hover:bg-gray-100 transition"
                  >
                    Call Service
                  </a>
                </div>
              </form>
            </div>
            <div>
              <h4 className="font-semibold">Why choose our service?</h4>
              <p className="text-gray-700 mt-2">
                Certified Yamaha parts, trained mechanics, transparent billing,
                and quick turnarounds. Keep your bike healthy and get reminders
                for periodic service.
              </p>
            </div>
          </div>
        </section>

        {/* Test Ride */}
        <section
          id="testRideForm"
          className="bg-white rounded shadow p-6 space-y-4"
        >
          <h3 className="text-2xl font-semibold">Book Test Ride</h3>
          <form
            onSubmit={handleTestRideSubmit}
            className="grid md:grid-cols-3 gap-3"
          >
            <input
              required
              value={testRide.name}
              onChange={(e) =>
                setTestRide({ ...testRide, name: e.target.value })
              }
              placeholder="Your name"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              required
              value={testRide.phone}
              onChange={(e) =>
                setTestRide({ ...testRide, phone: e.target.value })
              }
              placeholder="Phone"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              required
              value={testRide.model}
              onChange={(e) =>
                setTestRide({ ...testRide, model: e.target.value })
              }
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select model</option>
              {BIKES.concat(SCOOTERS).map((m) => (
                <option key={m.id + m.name} value={m.name}>
                  {m.name}
                </option>
              ))}
            </select>
            <div className="md:col-span-3 flex gap-3">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                Book on WhatsApp
              </button>
              <a
                href={`tel:${SHOWROOM.phone}`}
                className="px-4 py-2 border rounded hover:bg-gray-100 transition"
              >
                Call to confirm
              </a>
            </div>
          </form>
        </section>

        {/* Gallery & Reviews */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* Photo Gallery */}
          <div className="bg-white rounded shadow p-4 space-y-3">
            <h4 className="text-xl font-semibold">Photo Gallery</h4>

            <div className="grid grid-cols-2 gap-3">
              <img
                src="/images/interior.jpeg"
                alt="Showroom Interior"
                className="h-36 w-full object-cover rounded hover:scale-105 transition"
              />

              <img
                src="/images/interior2.jpeg"
                alt="Service Bay"
                className="h-36 w-full object-cover rounded hover:scale-105 transition"
              />

              <img
                src="/images/service.jpeg"
                alt="Vehicle Delivery"
                className="h-36 w-full object-cover rounded hover:scale-105 transition"
              />

              <img
                src="/images/team.jpeg"
                alt="Our Team"
                className="h-36 w-full object-cover rounded hover:scale-105 transition"
              />
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="bg-white rounded shadow p-4 space-y-3">
            <h4 className="text-xl font-semibold">Customer Reviews</h4>

            <div className="space-y-3">
              <div className="p-3 border rounded">
                <p className="font-semibold">Ankit Kumar</p>
                <p className="text-sm text-gray-600">
                  Excellent service and quick delivery. Recommended!
                </p>
              </div>

              <div className="p-3 border rounded">
                <p className="font-semibold">Ravi Kumar</p>
                <p className="text-sm text-gray-600">
                  Very polite staff. My bike runs smoother now.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Offers & Why choose us */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-yellow-100 to-white rounded p-6">
            <h4 className="text-xl font-semibold mb-2">Current Offers</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Festive Exchange Bonus</li>
              <li>Zero down payment options</li>
              <li>Free bike wash for first 100 service customers</li>
            </ul>
          </div>
          <div className="bg-white rounded shadow p-6">
            <h4 className="text-xl font-semibold mb-2">
              Why Choose {SHOWROOM.name}?
            </h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Authorized Yamaha showroom with genuine parts</li>
              <li>Fast, transparent & affordable service</li>
              <li>Owner present and responsive</li>
              <li>Easy finance and exchange options</li>
            </ul>
          </div>
        </section>

        {/* Contact & Map */}
        <section className="bg-white rounded shadow p-6">
          <h3 className="text-2xl font-semibold mb-3">Contact & Location</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold">{SHOWROOM.name}</p>
              <p className="text-gray-700 mt-1">{SHOWROOM.address}</p>
              <p className="mt-2">
                Phone:{" "}
                <a href={`tel:${SHOWROOM.phone}`} className="text-blue-600">
                  {SHOWROOM.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${SHOWROOM.email}`} className="text-blue-600">
                  {SHOWROOM.email}
                </a>
              </p>
              <div className="mt-4 flex gap-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={SHOWROOM.mapLink}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Open in Google Maps
                </a>
                <a
                  href={`tel:${SHOWROOM.phone}`}
                  className="px-4 py-2 border rounded hover:bg-gray-100 transition"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div>
              <iframe
                title="showroom-map"
                src={SHOWROOM.mapLink}
                className="w-full h-56 rounded"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp */}
      <button
        onClick={() =>
          openWhatsApp("Hi, I want to enquire about Yamaha bikes.")
        }
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg text-white hover:scale-105 transform transition"
      >
        WA
      </button>

      {/* Toast */}
      {showToast && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-28 bg-black text-white px-4 py-2 rounded">
          {showToast}
        </div>
      )}
    </div>
  );
}
