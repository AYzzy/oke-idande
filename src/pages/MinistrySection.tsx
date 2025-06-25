import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Heart, Users, Globe, BookOpen, Mic, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";

const MinistrySection = () => {
  const ministries = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Bible Study",
      description: "Deep dive into God's Word with our weekly Bible study sessions. Learn, grow, and apply Biblical principles to your daily life.",
      schedule: "Wednesdays 6:00 PM",
      color: "bg-blue-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Youth Ministry",
      description: "Empowering the next generation through engaging activities, mentorship, and spiritual growth programs.",
      schedule: "Saturdays 4:00 PM",
      color: "bg-green-500",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Women's Ministry",
      description: "A supportive community for women to grow in faith, fellowship, and service to God and others.",
      schedule: "First Saturday of each month",
      color: "bg-pink-500",
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Worship Ministry",
      description: "Leading the congregation in heartfelt worship through music, song, and praise to glorify God.",
      schedule: "Sundays & Special Events",
      color: "bg-purple-500",
    },
    {
      icon: <HandHeart className="h-8 w-8" />,
      title: "Outreach Ministry",
      description: "Serving our community through various outreach programs, food drives, and community service projects.",
      schedule: "Monthly community events",
      color: "bg-orange-500",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Missions",
      description: "Supporting global evangelism and missions work to spread the Gospel to all nations.",
      schedule: "Ongoing support & annual trips",
      color: "bg-teal-500",
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">Our Ministries</h2>
          <div className="w-20 h-1 bg-church-red mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the various ways you can get involved and serve in our church community. 
            There's a place for everyone to use their gifts and talents for God's glory.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <CardHeader className="text-center pb-4">
                <div className={`${ministry.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {ministry.icon}
                </div>
                <CardTitle className="text-xl text-church-navy">{ministry.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  {ministry.description}
                </p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-church-navy mb-1">Schedule:</p>
                  <p className="text-sm text-gray-700">{ministry.schedule}</p>
                </div>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-church-red text-church-red hover:bg-church-red hover:text-white"
                >
                  <Link to="/contact">Get Involved</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-church-navy mb-4">Ready to Serve?</h3>
            <p className="text-gray-600 mb-6">
              God has given each of us unique gifts and talents. We believe that everyone has a role to play 
              in building God's kingdom. Whether you're new to faith or have been walking with God for years, 
              there's a place for you to serve and grow.
            </p>
            <div className="scripture-quote bg-gray-100 p-6 rounded-lg border-l-4 border-church-red mb-6">
              <p className="text-lg italic text-gray-800">
                "As each has received a gift, use it to serve one another, as good stewards of God's varied grace."
              </p>
              <p className="text-right font-semibold text-church-navy mt-2">- 1 Peter 4:10</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-church-red hover:bg-opacity-90">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="border-church-navy text-church-navy hover:bg-church-navy hover:text-white">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MinistrySection