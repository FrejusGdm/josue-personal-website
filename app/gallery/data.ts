export interface GalleryItem {
  id: string;
  src: string;
  date: string;
  caption: string;
  rotation: number; // Random initial rotation for the polaroid look
  location: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
    date: "Sept 2021",
    caption: "First day on campus. The leaves were already turning.",
    location: "Hanover, NH",
    rotation: -4,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    date: "Oct 2021",
    caption: "Late night study sessions in the library.",
    location: "Baker-Berry",
    rotation: 3,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
    date: "Jan 2022",
    caption: "Winter carnival snow sculpture building.",
    location: "The Green",
    rotation: -2,
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop",
    date: "May 2022",
    caption: "Hiking Mt. Moosilauke.",
    location: "White Mountains",
    rotation: 5,
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
    date: "Aug 2022",
    caption: "Summer internship in the city.",
    location: "New York, NY",
    rotation: -3,
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    date: "Nov 2022",
    caption: "Friendsgiving dinner.",
    location: "Off Campus",
    rotation: 2,
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop",
    date: "Mar 2023",
    caption: "Spring break trip.",
    location: "Unknown",
    rotation: -5,
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=800&auto=format&fit=crop",
    date: "Jun 2023",
    caption: "Graduation day for the seniors.",
    location: "The Green",
    rotation: 4,
  },
];

