import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { toast } from "../components/ui/sonner";
import { Plus, Save, Trash2, Edit, Eye } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Sermon {
  id: number;
  title: string;
  preacher: string;
  date: string;
  duration: string;
  description: string;
  audioUrl: string;
  videoUrl: string;
  downloadUrl: string;
  scripture: string;
  series: string;
  thumbnail: string;
}

const SermonAdmin = () => {
  const [sermons, setSermons] = useState<Sermon[]>([
    {
      id: 1,
      title: "Walking in Faith",
      preacher: "Pastor John",
      date: "2024-12-15",
      duration: "45 min",
      description: "A powerful message about trusting God in uncertain times and walking by faith, not by sight.",
      audioUrl: "https://example.com/sermon1.mp3",
      videoUrl: "https://youtube.com/watch?v=example1",
      downloadUrl: "https://example.com/sermon1-download.mp3",
      scripture: "2 Corinthians 5:7",
      series: "Faith Series",
      thumbnail: "https://images.pexels.com/photos/8468/bible-open-book-religion-christian.jpg?auto=compress&cs=tinysrgb&w=400",
    },
  ]);

  const [editingSermon, setEditingSermon] = useState<Sermon | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [formData, setFormData] = useState<Partial<Sermon>>({
    title: "",
    preacher: "",
    date: "",
    duration: "",
    description: "",
    audioUrl: "",
    videoUrl: "",
    downloadUrl: "",
    scripture: "",
    series: "",
    thumbnail: "",
  });

  const handleInputChange = (field: keyof Sermon, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formData.title || !formData.preacher || !formData.date) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (editingSermon) {
      // Update existing sermon
      setSermons(prev => prev.map(sermon => 
        sermon.id === editingSermon.id 
          ? { ...sermon, ...formData } as Sermon
          : sermon
      ));
      toast.success("Sermon updated successfully!");
    } else {
      // Add new sermon
      const { id, ...restFormData } = formData as Sermon;
      const newSermon: Sermon = {
        id: Date.now(),
        ...restFormData,
      };
      setSermons(prev => [newSermon, ...prev]);
      toast.success("Sermon added successfully!");
    }

    resetForm();
  };

  const handleEdit = (sermon: Sermon) => {
    setEditingSermon(sermon);
    setFormData(sermon);
    setIsAddingNew(false);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this sermon?")) {
      setSermons(prev => prev.filter(sermon => sermon.id !== id));
      toast.success("Sermon deleted successfully!");
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      preacher: "",
      date: "",
      duration: "",
      description: "",
      audioUrl: "",
      videoUrl: "",
      downloadUrl: "",
      scripture: "",
      series: "",
      thumbnail: "",
    });
    setEditingSermon(null);
    setIsAddingNew(false);
  };

  const startAddingNew = () => {
    resetForm();
    setIsAddingNew(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="bg-church-navy text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sermon Management</h1>
            <p className="text-xl opacity-90">Add, edit, and manage your church sermons</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {editingSermon ? "Edit Sermon" : isAddingNew ? "Add New Sermon" : "Sermon Form"}
                    {!isAddingNew && !editingSermon && (
                      <Button onClick={startAddingNew} size="sm" className="bg-church-red hover:bg-opacity-90">
                        <Plus size={16} className="mr-1" />
                        Add New
                      </Button>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title || ""}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Sermon title"
                    />
                  </div>

                  <div>
                    <Label htmlFor="preacher">Preacher *</Label>
                    <Select value={formData.preacher || ""} onValueChange={(value) => handleInputChange("preacher", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preacher" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pastor John">Pastor John</SelectItem>
                        <SelectItem value="Pastor Sarah">Pastor Sarah</SelectItem>
                        <SelectItem value="Pastor Michael">Pastor Michael</SelectItem>
                        <SelectItem value="Guest Speaker">Guest Speaker</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="date">Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date || ""}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      value={formData.duration || ""}
                      onChange={(e) => handleInputChange("duration", e.target.value)}
                      placeholder="e.g., 45 min"
                    />
                  </div>

                  <div>
                    <Label htmlFor="scripture">Scripture Reference</Label>
                    <Input
                      id="scripture"
                      value={formData.scripture || ""}
                      onChange={(e) => handleInputChange("scripture", e.target.value)}
                      placeholder="e.g., John 3:16"
                    />
                  </div>

                  <div>
                    <Label htmlFor="series">Series</Label>
                    <Input
                      id="series"
                      value={formData.series || ""}
                      onChange={(e) => handleInputChange("series", e.target.value)}
                      placeholder="e.g., Faith Series"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description || ""}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Brief description of the sermon"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="audioUrl">Audio URL</Label>
                    <Input
                      id="audioUrl"
                      value={formData.audioUrl || ""}
                      onChange={(e) => handleInputChange("audioUrl", e.target.value)}
                      placeholder="https://example.com/audio.mp3"
                    />
                  </div>

                  <div>
                    <Label htmlFor="videoUrl">Video URL (YouTube, Vimeo, etc.)</Label>
                    <Input
                      id="videoUrl"
                      value={formData.videoUrl || ""}
                      onChange={(e) => handleInputChange("videoUrl", e.target.value)}
                      placeholder="https://youtube.com/watch?v=..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="downloadUrl">Download URL</Label>
                    <Input
                      id="downloadUrl"
                      value={formData.downloadUrl || ""}
                      onChange={(e) => handleInputChange("downloadUrl", e.target.value)}
                      placeholder="https://example.com/download.mp3"
                    />
                  </div>

                  <div>
                    <Label htmlFor="thumbnail">Thumbnail Image URL</Label>
                    <Input
                      id="thumbnail"
                      value={formData.thumbnail || ""}
                      onChange={(e) => handleInputChange("thumbnail", e.target.value)}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button onClick={handleSave} className="bg-church-navy hover:bg-opacity-90 flex-1">
                      <Save size={16} className="mr-1" />
                      {editingSermon ? "Update" : "Save"}
                    </Button>
                    {(editingSermon || isAddingNew) && (
                      <Button onClick={resetForm} variant="outline" className="flex-1">
                        Cancel
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sermons List */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Existing Sermons ({sermons.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sermons.map((sermon) => (
                      <div key={sermon.id} className="border rounded-lg p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-church-navy">{sermon.title}</h3>
                            <p className="text-sm text-gray-600">
                              {sermon.preacher} • {new Date(sermon.date).toLocaleDateString()} • {sermon.duration}
                            </p>
                            {sermon.scripture && (
                              <p className="text-sm text-church-red font-medium">{sermon.scripture}</p>
                            )}
                            {sermon.series && (
                              <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs mt-1">
                                {sermon.series}
                              </span>
                            )}
                            <p className="text-sm text-gray-700 mt-2 line-clamp-2">{sermon.description}</p>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEdit(sermon)}
                              className="text-church-navy border-church-navy hover:bg-church-navy hover:text-white"
                            >
                              <Edit size={14} />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDelete(sermon.id)}
                              className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                            >
                              <Trash2 size={14} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}

                    {sermons.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        <p>No sermons added yet.</p>
                        <Button onClick={startAddingNew} className="mt-4 bg-church-red hover:bg-opacity-90">
                          <Plus size={16} className="mr-1" />
                          Add Your First Sermon
                        </Button>
                      </div>
                    )}
                  </div>
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

export default SermonAdmin;