interface AdSlotProps {
  size: "banner" | "sidebar" | "footer";
  className?: string;
}

export default function AdSlot({ size, className = "" }: AdSlotProps) {
  const sizeClasses = {
    banner: "h-24 w-full max-w-3xl", // 728x90 equivalent
    sidebar: "h-64 w-full max-w-xs",
    footer: "h-20 w-full max-w-2xl"
  };

  const sizeLabels = {
    banner: "728x90 Banner Ad",
    sidebar: "Sidebar Ad",
    footer: "Footer Ad"
  };

  return (
    <div className={`
      ${sizeClasses[size]} 
      border-2 border-dashed border-gray-600 
      bg-gray-800/30 
      rounded-lg 
      flex items-center justify-center 
      text-gray-400 text-sm
      ${className}
    `}>
      <div className="text-center">
        <div className="font-medium">Ad Space</div>
        <div className="text-xs opacity-75">{sizeLabels[size]}</div>
      </div>
    </div>
  );
}