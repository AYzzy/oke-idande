import { useState, useEffect } from "react";
import QRCode from "qrcode";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "./ui/sonner";
import { Download, Share2, Copy, QrCode } from "lucide-react";

interface QRCodeGeneratorProps {
  defaultUrl?: string;
  title?: string;
}

const QRCodeGenerator = ({ defaultUrl = "", title = "QR Code Generator" }: QRCodeGeneratorProps) => {
  const [url, setUrl] = useState(defaultUrl);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState("");
  const [size, setSize] = useState("200");
  const [errorLevel, setErrorLevel] = useState("M");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQRCode = async () => {
    if (!url.trim()) {
      toast.error("Please enter a URL");
      return;
    }

    setIsGenerating(true);
    try {
      const qrCodeUrl = await QRCode.toDataURL(url, {
        width: parseInt(size),
        errorCorrectionLevel: errorLevel as any,
        color: {
          dark: '#1A1F2C', // church-navy color
          light: '#FFFFFF'
        },
        margin: 2
      });
      setQrCodeDataUrl(qrCodeUrl);
      toast.success("QR Code generated successfully!");
    } catch (error) {
      console.error("Error generating QR code:", error);
      toast.error("Failed to generate QR code");
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeDataUrl) return;

    const link = document.createElement('a');
    link.download = `qr-code-${Date.now()}.png`;
    link.href = qrCodeDataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("QR Code downloaded!");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("URL copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy URL");
    }
  };

  const shareQRCode = async () => {
    if (navigator.share && qrCodeDataUrl) {
      try {
        // Convert data URL to blob
        const response = await fetch(qrCodeDataUrl);
        const blob = await response.blob();
        const file = new File([blob], 'qr-code.png', { type: 'image/png' });

        await navigator.share({
          title: 'QR Code',
          text: `QR Code for: ${url}`,
          files: [file]
        });
      } catch (error) {
        // Fallback to copying URL
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  // Auto-generate QR code when component mounts with default URL
  useEffect(() => {
    if (defaultUrl) {
      generateQRCode();
    }
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-church-navy">
          <QrCode size={24} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="url">Website URL</Label>
            <Input
              id="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://your-website.com"
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="size">Size (px)</Label>
              <Select value={size} onValueChange={setSize}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="150">150px</SelectItem>
                  <SelectItem value="200">200px</SelectItem>
                  <SelectItem value="300">300px</SelectItem>
                  <SelectItem value="400">400px</SelectItem>
                  <SelectItem value="500">500px</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="errorLevel">Error Correction</Label>
              <Select value={errorLevel} onValueChange={setErrorLevel}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L">Low (7%)</SelectItem>
                  <SelectItem value="M">Medium (15%)</SelectItem>
                  <SelectItem value="Q">Quartile (25%)</SelectItem>
                  <SelectItem value="H">High (30%)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            onClick={generateQRCode} 
            disabled={isGenerating || !url.trim()}
            className="w-full bg-church-navy hover:bg-opacity-90"
          >
            {isGenerating ? "Generating..." : "Generate QR Code"}
          </Button>
        </div>

        {qrCodeDataUrl && (
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="p-4 bg-white rounded-lg shadow-md border">
                <img 
                  src={qrCodeDataUrl} 
                  alt="Generated QR Code" 
                  className="max-w-full h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Button
                onClick={downloadQRCode}
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Download size={16} />
                Download
              </Button>
              <Button
                onClick={shareQRCode}
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Share2 size={16} />
                Share
              </Button>
              <Button
                onClick={copyToClipboard}
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Copy size={16} />
                Copy URL
              </Button>
            </div>

            <div className="text-center text-sm text-gray-600">
              <p>Scan this QR code to visit:</p>
              <p className="font-medium text-church-navy break-all">{url}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QRCodeGenerator;