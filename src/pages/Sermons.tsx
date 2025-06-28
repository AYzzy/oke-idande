import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Calendar, Clock, Play, Download, ExternalLink, Search, Filter } from "lucide-react";

const Sermons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPreacher, setSelectedPreacher] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  // Extended sermons data - this would come from your storage/database
  const allSermons = [
    {
      id: 1,
      title: "Laying your Treasures in the Wrong Place",
      preacher: "Pastor Olakunke Agboola",
      date: "May 18, 2025",
      year: "2025",
      duration: "45 min",
      description: "A powerful message about trusting God in uncertain times and walking by faith, not by sight.",
      audioUrl: "https://audiomack.com/cacwosemokeidande/song/sermon-3?share-user-id=144151068",
      videoUrl: "https://youtube.com/watch?v=example1",
      downloadUrl: "https://example.com/sermon1-download.mp3",
      scripture: "2 Corinthians 5:7",
      thumbnail: "https://th.bing.com/th/id/OIP.L7SWsMJ-2FMxQ939nwZR-wHaEJ?w=900&h=504&rs=1&pid=ImgDetMain&cb=idpwebpc2 ",
      series: "Faith Series",
    },
    {
      id: 2,
      title: "The Power of Prayer",
      preacher: "Pastor Sarah",
      date: "December 8, 2024",
      year: "2024",
      duration: "38 min",
      description: "Understanding the importance of prayer in our daily lives and how it transforms our relationship with God.",
      audioUrl: "https://example.com/sermon2.mp3",
      videoUrl: "https://youtube.com/watch?v=example2",
      downloadUrl: "https://example.com/sermon2-download.mp3",
      scripture: "1 Thessalonians 5:17",
      thumbnail: "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=400",
      series: "Prayer Life",
    },
    {
      id: 3,
      title: "God's Love Never Fails",
      preacher: "Pastor Michael",
      date: "December 1, 2024",
      year: "2024",
      duration: "42 min",
      description: "Exploring the unconditional love of God and how it sustains us through every season of life.",
      audioUrl: "https://example.com/sermon3.mp3",
      videoUrl: "https://youtube.com/watch?v=example3",
      downloadUrl: "https://example.com/sermon3-download.mp3",
      scripture: "1 Corinthians 13:8",
      thumbnail: "https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&w=400",
      series: "Love of God",
    },
    {
      id: 4,
      title: "Hope in Difficult Times",
      preacher: "Pastor John",
      date: "November 24, 2024",
      year: "2024",
      duration: "40 min",
      description: "Finding hope and strength in God during life's most challenging moments.",
      audioUrl: "https://example.com/sermon4.mp3",
      videoUrl: "https://youtube.com/watch?v=example4",
      downloadUrl: "https://example.com/sermon4-download.mp3",
      scripture: "Romans 15:13",
      thumbnail: "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=400",
      series: "Hope Series",
    },
    {
      id: 5,
      title: "The Great Commission",
      preacher: "Pastor Sarah",
      date: "November 17, 2024",
      year: "2024",
      duration: "50 min",
      description: "Understanding our calling to share the Gospel and make disciples of all nations.",
      audioUrl: "https://example.com/sermon5.mp3",
      videoUrl: "https://youtube.com/watch?v=example5",
      downloadUrl: "https://example.com/sermon5-download.mp3",
      scripture: "Matthew 28:19-20",
      thumbnail: "https://images.pexels.com/photos/8468/bible-open-book-religion-christian.jpg?auto=compress&cs=tinysrgb&w=400",
      series: "Mission & Evangelism",
    },
    {
      id: 6,
      title: "Forgiveness and Grace",
      preacher: "Pastor Michael",
      date: "November 10, 2024",
      year: "2024",
      duration: "44 min",
      description: "The transformative power of God's forgiveness and how we extend grace to others.",
      audioUrl: "https://example.com/sermon6.mp3",
      videoUrl: "https://youtube.com/watch?v=example6",
      downloadUrl: "https://example.com/sermon6-download.mp3",
      scripture: "Ephesians 4:32",
      thumbnail: "https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&w=400",
      series: "Grace & Mercy",
    },
  ];

  // Get unique preachers and years for filter options
  const preachers = [...new Set(allSermons.map(sermon => sermon.preacher))];
  const years = [...new Set(allSermons.map(sermon => sermon.year))];

  // Filter sermons based on search and filters
  const filteredSermons = allSermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.scripture.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.series.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPreacher = selectedPreacher === "all" || sermon.preacher === selectedPreacher;
    const matchesYear = selectedYear === "all" || sermon.year === selectedYear;
    
    return matchesSearch && matchesPreacher && matchesYear;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-church-navy text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sermons & Messages</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Listen to inspiring messages from God's Word. Download, stream, or watch our sermons anytime.
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    placeholder="Search sermons, topics, or scriptures..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedPreacher} onValueChange={setSelectedPreacher}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Preachers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Preachers</SelectItem>
                    {preachers.map(preacher => (
                      <SelectItem key={preacher} value={preacher}>{preacher}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    {years.map(year => (
                      <SelectItem key={year} value={year}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Sermons Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredSermons.length} of {allSermons.length} sermons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.map((sermon) => (
              <Card key={sermon.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={sermon.thumbnail} 
                    alt={sermon.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-church-red text-white px-2 py-1 rounded text-xs font-medium">
                    {sermon.series}
                  </div>
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

          {filteredSermons.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No sermons found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedPreacher("all");
                  setSelectedYear("all");
                }}
                className="mt-4 bg-church-navy hover:bg-opacity-90"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-church-navy mb-4">Stay Connected</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our podcast or follow us on social media to never miss a message.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-church-red hover:bg-opacity-90">
                Subscribe to Podcast
              </Button>
              <Button 
              variant="outline" 
              className="border-church-navy text-church-navy hover:bg-church-navy hover:text-white"
              onClick={() => window.open("https://youtube.com/@christapostolicchurchwosem2678?si=AHqvsfeJUPFS3Gvd", "_blank")}
              >
                Follow on YouTube
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sermons;