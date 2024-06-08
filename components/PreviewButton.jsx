import { ZoomIn } from "lucide-react";

const PreviewButton = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      <ZoomIn className="w-4 h-4" />
      Preview
    </div>
  );
};

export default PreviewButton;
