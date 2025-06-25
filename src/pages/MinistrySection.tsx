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
}

export default MinistrySection