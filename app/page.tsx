// app/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle button click to trigger file input
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // Handle file selection (placeholder for now)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name, file.size);
      // Add file handling logic later with react-dropzone
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-8">
      {/* Heading and Description */}
      <h1 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl text-center">
        Welcome to Doc Converter
      </h1>
      <p className="mt-3 max-w-md text-base text-muted-foreground sm:text-lg text-center">
        Effortlessly convert your files using FFmpeg.wasm in your browser.
      </p>

      {/* Upload Box */}
      <div className="mt-8 w-full max-w-lg rounded-lg border border-border bg-card p-6 shadow-lg transition-shadow hover:shadow-xl">
        <h2 className="text-center text-xl font-semibold text-foreground sm:text-2xl mb-4">
          Upload a File
        </h2>

        <div className="border-2 border-dashed border-muted p-8 rounded-md text-center">
          <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-3" aria-hidden="true" />
          <p className="text-sm text-muted-foreground sm:text-base">
            Drag and drop your file here or click to upload
          </p>

          {/* Format Selection (Placeholder) */}
          <div className="mt-4">
            <Select disabled>
              <SelectTrigger className="w-full max-w-xs mx-auto">
                <SelectValue placeholder="Select output format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mp4">MP4</SelectItem>
                <SelectItem value="mp3">MP3</SelectItem>
                <SelectItem value="wav">WAV</SelectItem>
                <SelectItem value="png">PNG</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* File Input and Button */}
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            aria-label="Upload file"
          />
          <Button
            className="mt-4"
            variant="default"
            size="lg"
            onClick={handleButtonClick}
          >
            <Upload className="mr-2 h-4 w-4" /> Select File
          </Button>
        </div>
      </div>
    </div>
  );
}