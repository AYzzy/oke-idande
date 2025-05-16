
import { Button } from "../components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EventsSection = () => {
  // Example events
  const events = [
    {
      id: 1,
      title: "Community Outreach Program",
      date: "June 15, 2025",
      time: "9:00 AM - 2:00 PM",
      location: "City Park",
      description: "Join us as we serve our community with food, clothing, and prayer.",
      image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Annual Gospel Concert",
      date: "July 8, 2025",
      time: "6:30 PM - 9:00 PM",
      location: "Main Sanctuary",
      description: "An evening of inspirational music and worship with special guest performers.",
      image: "https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Bible Study Conference",
      date: "August 22-24, 2025",
      time: "Various Times",
      location: "Fellowship Hall",
      description: "Three days of in-depth Bible study, workshops, and spiritual growth.",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-church-red mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for these special events and activities. There's something for everyone in our church community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-church-navy">{event.title}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Calendar size={18} className="text-church-red" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Clock size={18} className="text-church-red" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-700">
                    <MapPin size={18} className="text-church-red mt-1" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                <Button asChild variant="outline" className="w-full border-church-red text-church-red hover:bg-church-red hover:text-white">
                  <Link to={`/events/${event.id}`} className="flex items-center justify-center space-x-1">
                    <span>Event Details</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-church-navy hover:bg-opacity-90">
            <Link to="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
