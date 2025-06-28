import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QRCodeGenerator from "../components/QRCodeGenerator";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { QrCode, Smartphone, Share2, Download } from "lucide-react";

const QRCodePage = () => {
  // Get the current website URL
  const currentUrl = window.location.origin;

  const useCases = [
    {
      icon: <Smartphone className="h-8 w-8 text-church-red" />,
      title: "Easy Access",
      description: "Let visitors quickly access your website by scanning the QR code with their phones."
    },
    {
      icon: <Share2 className="h-8 w-8 text-church-red" />,
      title: "Share Ministry",
      description: "Print QR codes on flyers, bulletins, and banners to share your ministry online."
    },
    {
      icon: <Download className="h-8 w-8 text-church-red" />,
      title: "Offline to Online",
      description: "Bridge the gap between physical and digital ministry outreach."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-church-navy text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <QrCode className="mx-auto mb-4" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">QR Code Generator</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Generate QR codes for your ministry website and make it easy for people to connect with your church online.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* QR Code Generator */}
            <div>
              <QRCodeGenerator 
                defaultUrl={currentUrl}
                title="Website QR Code"
              />
            </div>

            {/* Information and Use Cases */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-church-navy mb-6">Share Your Ministry</h2>
                <p className="text-gray-600 mb-6">
                  Use QR codes to make it easy for people to find and connect with your ministry online. 
                  Perfect for church bulletins, flyers, business cards, and event materials.
                </p>
              </div>

              <div className="grid gap-6">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="border-l-4 border-church-red">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {useCase.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-church-navy mb-2">
                            {useCase.title}
                          </h3>
                          <p className="text-gray-600">
                            {useCase.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-church-navy">How to Use QR Codes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Generate a QR code using the form on the left</li>
                    <li>Download the QR code image</li>
                    <li>Add it to your church materials (bulletins, flyers, posters)</li>
                    <li>People can scan it with their phone camera to visit your website</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-church-red text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Ministry Tip</h3>
                  <p>
                    Include a QR code on your church bulletin with the text "Scan to visit our website" 
                    to help congregation members easily access sermons, events, and ministry information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional QR Code Ideas */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-church-navy mb-8 text-center">More QR Code Ideas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-church-navy mb-2">Sermon Page</h3>
                  <p className="text-sm text-gray-600">Direct link to your sermons collection</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-church-navy mb-2">Contact Info</h3>
                  <p className="text-sm text-gray-600">Quick access to church contact details</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-church-navy mb-2">Events</h3>
                  <p className="text-sm text-gray-600">Link to upcoming church events</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-church-navy mb-2">Donation</h3>
                  <p className="text-sm text-gray-600">Easy giving and donation options</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QRCodePage;