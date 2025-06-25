import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Calendar, Clock, Play, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const SermonsSection = () => {
  // Example sermons data - this would come from your storage/database
  const sermons = [
    {
      id: 1,
      title: "Walking in Faith",
      preacher: "Pastor John",
      date: "December 15, 2024",
      duration: "45 min",
      description: "A powerful message about trusting God in uncertain times and walking by faith, not by sight.",
      audioUrl: "https://example.com/sermon1.mp3",
      videoUrl: "https://youtube.com/watch?v=example1",
      downloadUrl: "https://example.com/sermon1-download.mp3",
      scripture: "2 Corinthians 5:7",
      thumbnail: "https://images.pexels.com/photos/8468/bible-open-book-religion-christian.jpg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      title: "The Power of Prayer",
      preacher: "Pastor Sarah",
      date: "December 8, 2024",
      duration: "38 min",
      description: "Understanding the importance of prayer in our daily lives and how it transforms our relationship with God.",
      audioUrl: "https://example.com/sermon2.mp3",
      videoUrl: "https://youtube.com/watch?v=example2",
      downloadUrl: "https://example.com/sermon2-download.mp3",
      scripture: "1 Thessalonians 5:17",
      thumbnail: "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      title: "God's Love Never Fails",
      preacher: "Pastor Michael",
      date: "December 1, 2024",
      duration: "42 min",
      description: "Exploring the unconditional love of God and how it sustains us through every season of life.",
      audioUrl: "https://example.com/sermon3.mp3",
      videoUrl: "https://youtube.com/watch?v=example3",
      downloadUrl: "https://example.com/sermon3-download.mp3",
      scripture: "1 Corinthians 13:8",
      thumbnail: "https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">Recent Sermons</h2>
          <div className="w-20 h-1 bg-church-red mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Listen to our latest messages and be encouraged in your faith journey. All sermons are available for streaming and download.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <Card key={sermon.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={sermon.thumbnail} 
                  alt={sermon.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-church-navy line-clamp-2">{sermon.title}</CardTitle>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="font-medium">{sermon.preacher}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{sermon.date}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Clock size={16} className="text-church-red" />
                  <span>{sermon.duration}</span>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-church-navy mb-1">Scripture:</p>
                  <p className="text-sm text-gray-700">{sermon.scripture}</p>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-3">
                  {sermon.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {sermon.audioUrl && (
                    <Button 
                      size="sm" 
                      className="bg-church-red hover:bg-opacity-90 flex-1"
                      onClick={() => window.open(sermon.audioUrl, '_blank')}
                    >
                      <Play size={14} className="mr-1" />
                      Listen
                    </Button>
                  )}
                  {sermon.videoUrl && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-church-navy text-church-navy hover:bg-church-navy hover:text-white flex-1"
                      onClick={() => window.open(sermon.videoUrl, '_blank')}
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Watch
                    </Button>
                  )}
                </div>
                
                {sermon.downloadUrl && (
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="w-full text-church-navy hover:bg-gray-100"
                    onClick={() => window.open(sermon.downloadUrl, '_blank')}
                  >
                    <Download size={14} className="mr-1" />
                    Download
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-church-navy hover:bg-opacity-90">
            <Link to="/sermons">View All Sermons</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SermonsSection;