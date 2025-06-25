import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { toast } from "../components/ui/sonner";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    ministry: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast.success("Thank you for your message! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      ministry: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-church-navy text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us for any questions, prayer requests, or to learn more about our church.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-church-navy">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-church-red mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-church-navy">Address</h3>
                      <p className="text-gray-600">23, Rami Olademeji street<br />Ebutte-Meta(West)<br />Lagos, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="text-church-red mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-church-navy">Phone</h3>
                      <p className="text-gray-600">(+234) 9059624483</p>
                      <p className="text-gray-600">(+234) 9030119087</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="text-church-red mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-church-navy">Email</h3>
                      <p className="text-gray-600">cacwosemokeidande@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="text-church-red mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-church-navy">Service Times</h3>
                      <div className="text-gray-600">
                        <p>Sunday: 9:00 AM & 12:00 PM</p>
                        <p>Wednesday: 6:00 PM</p>
                        <p>Friday: 11:00 PM (Night Vigil)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-church-navy">Prayer Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We believe in the power of prayer. If you have a prayer request, please don't hesitate to share it with us.
                  </p>
                  <Button className="w-full bg-church-red hover:bg-opacity-90">
                    Submit Prayer Request
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-church-navy">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+234 xxx xxx xxxx"
                        />
                      </div>
                      <div>
                        <Label htmlFor="ministry">Ministry Interest</Label>
                        <Select value={formData.ministry} onValueChange={(value) => handleInputChange("ministry", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a ministry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="youth">Youth Ministry</SelectItem>
                            <SelectItem value="womens">Women's Ministry</SelectItem>
                            <SelectItem value="worship">Worship Ministry</SelectItem>
                            <SelectItem value="outreach">Outreach Ministry</SelectItem>
                            <SelectItem value="missions">Missions</SelectItem>
                            <SelectItem value="bible-study">Bible Study</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please share your message, questions, or prayer requests..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-church-navy hover:bg-opacity-90">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-church-navy">Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">
                    Interactive map would be embedded here<br />
                    23, Rami Olademeji street, Ebutte-Meta(West), Lagos
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <Button 
                    onClick={() => window.open("https://maps.google.com/?q=23+Rami+Olademeji+street+Ebutte-Meta+West+Lagos", "_blank")}
                    variant="outline" 
                    className="border-church-navy text-church-navy hover:bg-church-navy hover:text-white"
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;