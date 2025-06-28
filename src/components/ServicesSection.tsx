
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">Join Us for Worship</h2>
          <div className="w-20 h-1 bg-church-red mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We invite you to join us for our weekly services. No matter where you are in your faith journey, 
            you are welcome here.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sunday Morning Service */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-1 bg-church-red w-full"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-church-navy">Sunday Morning Worship</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <CalendarDays size={18} className="text-church-red" />
                  <span>Every Sunday</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Clock size={18} className="text-church-red" />
                  <span>9:00 AM & 11:00 AM</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-700">
                  <MapPin size={18} className="text-church-red mt-1" />
                  <span>Church Auditorium<br />23, Rami Oladimeji street, Ebute-Meta(West)</span>
                </div>
                <p className="border-t border-gray-200 pt-4 text-gray-600">
                  Join us for powerful worship, Biblical teaching, and a warm community experience.
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Tuesday Night Service */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-1 bg-church-blue w-full"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-church-navy">Tuesday Bible Study</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <CalendarDays size={18} className="text-church-blue" />
                  <span>Every Tuesday</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Clock size={18} className="text-church-blue" />
                  <span>6:00 PM</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-700">
                  <MapPin size={18} className="text-church-blue mt-1" />
                  <span>Church Auditorium <br />23, Rami Oladimeji street, Ebute-Meta(West)</span>
                </div>
                <p className="border-t border-gray-200 pt-4 text-gray-600">
                  Mid-week spiritual recharge with in-depth Bible teaching and prayer.
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Night Vigil */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-1 bg-church-navy w-full"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-church-navy">Night Vigil</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <CalendarDays size={18} className="text-church-navy" />
                  <span>Every Friday</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Clock size={18} className="text-church-navy" />
                  <span>11:00 pm</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-700">
                  <MapPin size={18} className="text-church-navy mt-1" />
                  <span>Church Auditorium<br />23, Rami Oladimeji street, Ebute-Meta(West)</span>
                </div>
                <p className="border-t border-gray-200 pt-4 text-gray-600">
                  Engaging worship, relevant teaching and powerful prayers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-2">
            Need directions or have questions?
          </p>
          <p className="font-semibold text-church-navy">
            Call us at (+234) 9030119087 (+234) 9059624483  or email cacwosemokeidande@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
