'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Upload, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const styles = [
  { value: 'modern', label: 'Modern' },
  { value: 'minimalist', label: 'Minimalist' },
  { value: 'tropical', label: 'Tropical' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'scandinavian', label: 'Scandinavian' },
];

const models = [
  { value: 'stable-diffusion', label: 'Stable Diffusion 3' },
  { value: 'dalle2', label: 'DALL-E 2' },
];

export default function DashboardPage() {
  const [image, setImage] = useState<string | null>(null);
  const [style, setStyle] = useState<string>('');
  const [model, setModel] = useState<string>('stable-diffusion');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!image || !style) {
      toast({
        title: 'Error',
        description: 'Please upload an image and select a style',
        variant: 'destructive',
      });
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image, style, model }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Redesign Your Room</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              {image ? (
                <div className="relative h-64">
                  <Image
                    src={image}
                    alt="Uploaded room"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center h-64 cursor-pointer">
                  <Upload className="h-12 w-12 text-gray-400" />
                  <span className="mt-2 text-sm text-gray-500">
                    Upload your room photo
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>

            <div className="space-y-4">
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger>
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  {styles.map((style) => (
                    <SelectItem key={style.value} value={style.value}>
                      {style.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={model} onValueChange={setModel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select AI model" />
                </SelectTrigger>
                <SelectContent>
                  {models.map((model) => (
                    <SelectItem key={model.value} value={model.value}>
                      {model.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                {loading ? (
                  'Generating...'
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate Design
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
            {result ? (
              <div className="relative h-64">
                <Image
                  src={result}
                  alt="Generated design"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-gray-400">
                Generated design will appear here
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}