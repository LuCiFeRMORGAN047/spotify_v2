import { BsQuote as Quote } from "react-icons/all";

export default function Testimonials() {
  return (
    <div className="mt-40 text-center">
      <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
        See What Our Customers Are Saying
      </h2>
      <h2 className="font-medium text-2xl text-neutral-100 mt-2 max-w-5xl mx-auto">
        Read some of the reviews and testimonials from our satisfied customers
        to learn more about how Spotify is changing the way people listen to
        music.
      </h2>

      <div className="grid grid-cols-3 grid-rows-2 mt-20 gap-8">
        {TESTIMONIALS.map((props, i) => (
          <Card key={i} {...props} />
        ))}
      </div>
    </div>
  );
}

function Card({ name, occupation, quote, image }) {
  return (
    <div className="flex rounded-xl flex-col text-start border border-neutral-700 p-4 relative">
      <Quote
        size={128}
        className="absolute -z-10 -right-1 -bottom-3 text-neutral-900 "
      />
      <h3 className="mb-4 text-neutral-100 mt-2 ">{quote}</h3>
      <div className="flex gap-3 items-center mt-auto">
        <img
          src={image}
          alt={name + "'s image"}
          className="w-10 aspect-square rounded-full object-cover "
        />
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-pink-600 font-medium text-xs">{occupation}</p>
        </div>
      </div>
    </div>
  );
}

const TESTIMONIALS = [
  {
    name: "John Smith",
    occupation: "Musician",
    quote:
      "Spotify has revolutionized the way I discover new music. The personalized recommendations and playlists are spot on, and the high-quality streaming means I can enjoy my favorite songs wherever I go.",
    image: "users/user3.jpg",
  },
  {
    name: "Jane Doe",
    occupation: "Fitness Trainer",
    quote:
      "As a fitness trainer, I rely on Spotify to keep me and my clients motivated during workouts. The customizable playlists and offline playback feature are game-changers for my fitness routine.",
    image: "users/user5.jpg",
  },
  {
    name: "David Lee",
    occupation: "Student",
    quote:
      "I can't imagine my study sessions without Spotify. The vast library of songs and the ability to create my own playlists keep me focused and productive.",
    image: "users/user4.jpg",
  },
  {
    name: "Emily Chen",
    occupation: "Blogger",
    quote:
      "Spotify is the perfect companion for my blogging sessions. The personalized recommendations and the ability to discover new artists and songs make writing more enjoyable and inspiring.",
    image: "users/user6.jpg",
  },
  {
    name: "Sarah Johnson",
    occupation: "Graphic Designer",
    quote:
      "As a designer, I need a constant stream of inspiration to keep my creative juices flowing. Spotify's vast library of music, podcasts, and other audio content helps me stay inspired.",
    image: "users/user2.jpg",
  },
  {
    name: "Mark Williams",
    occupation: "Entrepreneur",
    quote:
      "Spotify is the perfect companion for my daily commute. The high-quality streaming and personalized recommendations help me discover new artists and keep me entertained during long drives.",
    image: "users/user1.jpg",
  },
];
