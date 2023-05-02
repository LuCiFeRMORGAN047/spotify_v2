import {
  MdLibraryMusic,
  MdDashboardCustomize,
  MdHighQuality,
  MdDownloadForOffline,
  MdRecommend,
  MdDevices,
} from "react-icons/md";

export default function Features() {
  return (
    <div className="mt-32">
      <h2 className="text-4xl font-bold text-center">
        Discover What Sets Us Apart
      </h2>

      <div className="grid md:grid-cols-3 mt-16 gap-4 max-w-7xl mx-auto">
        {FEATURES.map((props, i) => (
          <FeaturesCard key={i} {...props} />
        ))}
      </div>
    </div>
  );
}

function FeaturesCard({ feature, description, Icon }) {
  return (
    <div className="flex rounded-lg overflow-hidden cursor-pointer">
      <span className="w-full max-w-[4px] bg-gradient-to-b from-emerald-700 to-green-500" />
      <div className="flex flex-col items-start bg-neutral-900 transition-colors hover:bg-neutral-800 p-4 ">
        <div className="bg-gradient-to-bl from-emerald-700 to-green-500 p-2 rounded-md">
          <Icon size={24} />
        </div>
        <h3 className="mt-4 font-semibold text-lg">{feature}</h3>
        <p className="mt-2 text-neutral-200 font-medium">{description}</p>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    feature: "Large music library",
    description:
      "Offer a wide variety of songs and music genres to cater to different tastes.",
    Icon: MdLibraryMusic,
  },
  {
    feature: "Customizable playlists",
    description:
      "Allow users to create their own playlists or recommend playlists based on their listening history.",
    Icon: MdDashboardCustomize,
  },
  {
    feature: "High-quality streaming",
    description:
      "Ensure that the music streaming experience is smooth and of high quality, even on slower internet connections.",
    Icon: MdHighQuality,
  },
  {
    feature: "Offline playback",
    description:
      "Allow users to download songs and listen to them offline, without an internet connection.",
    Icon: MdDownloadForOffline,
  },
  {
    feature: "Personalized recommendations",
    description:
      "Use algorithms to recommend new songs, artists, and playlists based on a user's listening history.",
    Icon: MdRecommend,
  },
  {
    feature: "Cross-platform support",
    description:
      "Ensure that the music streaming service is accessible across different devices and platforms, including desktop, mobile, and smart speakers.",
    Icon: MdDevices,
  },
];
