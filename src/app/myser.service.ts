import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserService {
  videoTitles: string[] = [
    "10 HOURS of Rain Sounds for Sleeping and Relaxation",
    "React Native Tutorial for Beginners - Build a To-Do App",
    "Unboxing the NEW iPhone 13 Pro Max",
    "Cooking with Gordon Ramsay: Homemade Pasta",
    "The Science of Climate Change Explained",
    "The Most Beautiful Places to Visit in Japan",
    "10 Minute HIIT Workout for Fat Loss",
    "Making a DIY Desk Organizer with Woodworking Tools",
    "Exploring the Abandoned Ghost Town of Bodie, California",
    "How to Build a Gaming PC - Step by Step Guide",
    "Learning French for Beginners - Lesson 1",
    "The History of the Roman Empire - Documentary",
    "The Best Chocolate Chip Cookies Recipe Ever!",
    "The Benefits of Meditation for Stress Relief",
    "Solving a Rubik's Cube in Under 10 Seconds",
    "The Most Dangerous Hiking Trail in the World",
    "How to Start a Successful Online Business",
    "Street Food Tour of Bangkok, Thailand",
    "The Top 10 Must-See Movies of 2023",
    "My Morning Routine for Productivity and Success",
    "The World's Biggest Roller Coaster - POV",
    "10 Minute Yoga Flow for Flexibility",
    "The Psychology of Procrastination Explained",
    "The History of Jazz Music - Documentary",
    "Cooking with Jamie Oliver: Perfect Roast Chicken",
    "The Top 5 Reasons to Visit New Zealand",
    "10 Minute Guided Meditation for Deep Relaxation",
    "Building a Treehouse with Basic Tools and Materials",
    "Exploring the Ancient Mayan Ruins of Tikal",
    "The Best Places to Travel in Europe on a Budget",
    "10 Minute Ab Workout for a Strong Core",
    "Learning Japanese for Beginners - Lesson 1",
    "The History of World War II - Documentary",
    "How to Make the Perfect Cup of Coffee",
    "The Benefits of Yoga for Mind and Body",
    "Surviving in the Wilderness: Basic Skills and Tips",
    "The Most Beautiful Waterfalls in the World",
    "The Top 10 Best-Selling Books of 2023",
    "10 Minute Guided Breathwork Meditation",
    "Building a Raised Garden Bed for Beginners",
    "Exploring the Amazon Rainforest",
    "The Top 5 Ski Resorts in the World",
    "The Science of Sleep - How to Get a Good Night's Rest",
    "Cooking with Nigella Lawson: Ultimate Chocolate Cake",
    "The Top 10 Places to Visit in Australia",
    "10 Minute Guided Body Scan Meditation",
    "The History of Ancient Egypt - Documentary",
    "How to Make Homemade Ice Cream with a Blender",
    "The Benefits of Running for Physical and Mental Health",
    "Surviving a Zombie Apocalypse: Tips and Strategies",
  ];
  youtuberNames: string[] = [
    "Tech Guru",
    "Fitness Freaks",
    "Travel Vlogger",
    "Cooking With Kelly",
    "Comedy Central",
    "Gaming with Grace",
    "Nature Lovers",
    "Art and Design",
    "Car Enthusiasts",
    "Life Lessons with Lisa",
    "Educate and Entertain",
    "Foodie Finds",
    "Daily Dose of Dance",
    "Sports Nation",
    "Science Squad",
    "DIY with Dylan",
    "Gardening Gurus",
    "Music Makers",
    "The Book Club",
    "Fashion Frenzy",
    "Pet Lovers United",
    "Film Fanatics",
    "Spiritual Seekers",
    "Money Matters",
    "Political Pulse",
    "Techies Unite",
    "Adventure Seekers",
    "The Great Outdoors",
    "Mindful Meditations",
    "Comics and Cartoons",
    "Parenting 101",
    "Fitness First",
    "Traveling Twosome",
    "Food and Wine",
    "Beauty and Style",
    "Career Corner",
    "Entertainment Tonight",
    "Crafting Crew",
    "History Buffs",
    "Gaming Gurus",
    "Theater Talk",
    "Cooking with Casey",
    "Relationship Rescue",
    "The Amazing Race",
    "Celebrity Scoop",
    "Social Media Stars",
    "Green Living",
    "Sustainable Solutions",
    "Craft Beer Connoisseurs",
    "Healthy Habits",
  ];
  sideBarIcons: string[] = [
    'assets/icons/home2.png',
    'assets/icons/shorts.png',
    'assets/icons/subscription.png',
    'assets/icons/library.png',
    'assets/icons/history.png',
    'assets/icons/your-videos.png',
    'assets/icons/watch-later.png',
    'assets/icons/your-clips.png',
    'assets/icons/show-more.png',
    'assets/icons/show-more.png',
    'assets/icons/show-more.png',
    // 'assets/icons/show-more.png',
    'assets/icons/show-more.png',
    'assets/icons/show-more.png',
    'assets/icons/show-more.png',
    'assets/icons/trending.png',
    'assets/icons/shopping.png',
    'assets/icons/music.png',
    'assets/icons/movies.png',
    'assets/icons/live.png',
    'assets/icons/gaming.png',
    'assets/icons/news.png',
    'assets/icons/sports.png',
    'assets/icons/learning.png',
    'assets/icons/fashion.png',
    'assets/icons/yt-logo.png',
    'assets/icons/yt-studio.png',
    'assets/icons/yt-music.png',
    'assets/icons/yt-kids.png',
    'assets/icons/settings.png',
    'assets/icons/report.png',
    'assets/icons/help.png',
    'assets/icons/feedback.png',
  ];

  generateRandomDate(): string {
    const start: any = new Date('2005-05-02'); // Start from Unix epoch (January 1, 1970)
    const end: any = new Date(); // Today's date
    const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime()); // Generate a random timestamp between start and end
    const randomDate: any = new Date(randomTimestamp); // Create a new date object using the random timestamp

    var seconds = (end - randomDate) / 1000;
    var numyears = Math.floor(seconds / 31536000);
    var nummonths = Math.floor((seconds % 31536000) / 2628000);
    var numdays = Math.floor(((seconds % 31536000) % 2628000) / 86400);
    var numhours = Math.floor((((seconds % 31536000) % 2628000) % 86400) / 3600);
    var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);

    if (numyears) {
      return numyears + ' years'
    }
    else if (nummonths) {
      return nummonths + ' months'
    }
    else if (numdays) {
      return numdays + ' days'
    }
    else if (numhours) {
      return numhours + ' hours'
    }
    else if (numminutes) {
      return numminutes + ' minutes'
    }
    return 'Just Now';
  }

  ngOnInit() {
  }

  modifyDate() {

  }

  giphy = {
    baseURL: "https://api.giphy.com/v1/gifs/",
    apiKey: "7IfGSmZdSFRLfxQaPcLtpQamsqj1ySOa",
    tag: "funny",
    // TAG EG. funny
    type: "random",
    rating: "pg-13"
    // RATING EG. pg-13
  };

  giphyURL = encodeURI(
    this.giphy.baseURL +
    this.giphy.type +
    "?api_key=" +
    this.giphy.apiKey +
    "&tag=" +
    this.giphy.tag +
    "&rating=" +
    this.giphy.rating
  );
  //newGif();
  data:any;
  newGif() {
   return this.http.get(this.giphyURL)
  }

  constructor(private http: HttpClient) { }
}
