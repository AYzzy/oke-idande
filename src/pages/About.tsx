
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-church-navy text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Church</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Learn more about World Soul Winning Evangelistic Ministry and our mission to spread the Gospel.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-church-navy mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6">
              World Soul Winning Evangelistic Ministry was founded with a vision to reach the world with the message of God's love and salvation. Our journey began with a small group of dedicated believers committed to fulfilling the Great Commission.
            </p>
            <p className="text-gray-700 mb-10">
              Over the years, we have grown into a vibrant community of faith, focused on Biblical teaching, worship, discipleship, and outreach. We believe that every person has a purpose in God's kingdom, and we strive to help each individual discover and fulfill that purpose.
            </p>
            
            <h2 className="text-3xl font-bold text-church-navy mb-6">Our Vision</h2>
            <p className="text-gray-700 mb-10">
              To be a church that transforms lives through the power of the Gospel, equips believers for ministry, and impacts communities locally and globally with the love of Christ.
            </p>
            
            <h2 className="text-3xl font-bold text-church-navy mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              To lead people to Christ, build them up in faith, and send them out to serve.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-10">
              <li className="mb-2">Reach the lost with the Gospel of Jesus Christ</li>
              <li className="mb-2">Teach the Word of God for spiritual growth and maturity</li>
              <li className="mb-2">Train believers for effective ministry and service</li>
              <li className="mb-2">Send disciples to impact their communities and the world</li>
            </ul>
            
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-church-red mb-10">
              <p className="text-lg italic text-gray-800 scripture-quote">
                "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you always, even unto the end of the world."
              </p>
              <p className="text-right font-semibold text-church-navy mt-2">- Matthew 28:19-20</p>
            </div>
            
            <h2 className="text-3xl font-bold text-church-navy mb-6">Our Values</h2>
            <div className="space-y-6 mb-10">
              <div>
                <h3 className="text-xl font-semibold text-church-navy mb-2">Bible-Centered Teaching</h3>
                <p className="text-gray-700">We believe the Bible is God's inspired Word and the foundation for all we do and teach.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-church-navy mb-2">Worship</h3>
                <p className="text-gray-700">We are committed to heartfelt, Spirit-led worship that honors God.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-church-navy mb-2">Prayer</h3>
                <p className="text-gray-700">We believe in the power of prayer and its essential role in the life of believers and the church.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-church-navy mb-2">Evangelism</h3>
                <p className="text-gray-700">We are passionate about sharing the Gospel and making disciples of all nations.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-church-navy mb-2">Community</h3>
                <p className="text-gray-700">We foster authentic relationships and a sense of belonging for all who come.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-church-navy mb-2">Service</h3>
                <p className="text-gray-700">We encourage every member to discover and use their gifts to serve God and others.</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-church-navy mb-6">Our Leadership</h2>
            <p className="text-gray-700 mb-6">
              World Soul Winning Evangelistic Ministry is led by a team of dedicated pastors and leaders who are committed to serving God and His people with integrity, compassion, and vision.
            </p>
            <p className="text-gray-700">
              We believe in servant leadership as modeled by Jesus Christ, and our leaders strive to exemplify this in their ministry and daily lives.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
