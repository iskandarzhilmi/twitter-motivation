export type Tweet = {
  id: string;
  handle: string;
  name: string;
  avatarColor: string;
  content: string;
  likes: number;
  retweets: number;
  replies: number;
  views: number;
  time: string;
  verified: boolean;
  bookmarked: boolean;
};

const AVATAR_COLORS = [
  "#1d9bf0",
  "#7856ff",
  "#f91880",
  "#ff7a00",
  "#00ba7c",
  "#ffd400",
  "#794bc4",
  "#e0245e",
  "#17bf63",
  "#f45d22",
];

export function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function formatNumber(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

// Seeded shuffle for deterministic order
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  let s = seed;
  for (let i = result.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = s % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const rawTweets: Omit<Tweet, "id" | "avatarColor">[] = [
  {
    handle: "davidgoggins",
    name: "David Goggins",
    content:
      "Nobody cares about your feelings. Nobody cares about your excuses. Nobody is coming to save you. The sooner you accept this, the sooner you start building something real.",
    likes: 84200,
    retweets: 21400,
    replies: 3200,
    views: 4500000,
    time: "2h",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "naval",
    name: "Naval",
    content:
      "The most dangerous thing you can do is play it safe. A comfortable life is a wasted life. You're not avoiding risk — you're avoiding growth.",
    likes: 42100,
    retweets: 12300,
    replies: 1800,
    views: 2100000,
    time: "4h",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "graboron",
    name: "Iron Mind",
    content:
      "You don't lack motivation. You lack discipline. Motivation is a feeling. Discipline is a decision. Stop waiting to feel like doing it.",
    likes: 15800,
    retweets: 5400,
    replies: 890,
    views: 890000,
    time: "6h",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "hubaboron",
    name: "Jocko Willink",
    content:
      "Discipline equals freedom. Every excuse you make is a brick in the prison you're building around yourself.",
    likes: 67300,
    retweets: 18900,
    replies: 2700,
    views: 3800000,
    time: "3h",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "brutalhonesty",
    name: "No Excuses",
    content:
      "Your friends are getting married, buying houses, launching companies. You're still \"figuring things out.\" The clock doesn't care about your timeline.",
    likes: 23400,
    retweets: 8900,
    replies: 4100,
    views: 1200000,
    time: "1h",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "alexhormozi",
    name: "Alex Hormozi",
    content:
      "The reason you're not where you want to be is simple: you're not willing to do the boring work consistently. Everyone wants the result. Nobody wants the process.",
    likes: 91200,
    retweets: 24500,
    replies: 3800,
    views: 5200000,
    time: "5h",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "mindsetforge",
    name: "Forge",
    content:
      "You're not tired. You're uninspired. There's a massive difference. One is physical. The other is a choice you're making every single day.",
    likes: 11200,
    retweets: 3400,
    replies: 670,
    views: 560000,
    time: "8h",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "elonmusk",
    name: "Elon Musk",
    content:
      "When something is important enough, you do it even if the odds are not in your favor.",
    likes: 156000,
    retweets: 34200,
    replies: 12800,
    views: 18000000,
    time: "7h",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "hardtruthsdaily",
    name: "Hard Truths",
    content:
      "Nobody owes you a career. Nobody owes you an opportunity. The world doesn't know you exist. Go make it impossible to ignore you.",
    likes: 19800,
    retweets: 6700,
    replies: 1200,
    views: 980000,
    time: "45m",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "thestoicemperor",
    name: "Marcus Aurelius",
    content:
      "You could leave life right now. Let that determine what you do and say and think. Stop acting as if you have ten thousand years left.",
    likes: 38900,
    retweets: 14200,
    replies: 2100,
    views: 2800000,
    time: "9h",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "grindset",
    name: "GRINDSET",
    content:
      "Your 20s are not for \"finding yourself.\" They're for building yourself. You can find yourself when you're dead. Right now, execute.",
    likes: 27600,
    retweets: 9800,
    replies: 3400,
    views: 1500000,
    time: "12h",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "andyfrisella",
    name: "Andy Frisella",
    content:
      "You're one decision away from a completely different life. But you keep making the same decision every morning: comfort over growth.",
    likes: 45100,
    retweets: 13200,
    replies: 2900,
    views: 2400000,
    time: "10h",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "wakeupking",
    name: "Wake Up",
    content:
      "The gym doesn't care about your feelings.\nThe market doesn't care about your feelings.\nYour competition doesn't care about your feelings.\n\nFeelings are not a strategy.",
    likes: 33400,
    retweets: 11200,
    replies: 1800,
    views: 1900000,
    time: "14h",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "jordanbpeterson",
    name: "Jordan B Peterson",
    content:
      "Compare yourself to who you were yesterday, not to who someone else is today. But don't use that as an excuse to move slowly.",
    likes: 52800,
    retweets: 15600,
    replies: 4200,
    views: 3100000,
    time: "11h",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "executiononly",
    name: "Execute",
    content:
      "Planning is a drug. It gives you the dopamine of progress without actually doing anything. Close the notebook. Open the work.",
    likes: 18900,
    retweets: 7200,
    replies: 980,
    views: 870000,
    time: "16h",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "taboron",
    name: "Tim Grover",
    content:
      "Don't think. When you think, you die. Relentless people don't analyze — they act. While you're making pros and cons lists, someone hungrier already shipped.",
    likes: 29800,
    retweets: 8900,
    replies: 1600,
    views: 1400000,
    time: "18h",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "nopleasantries",
    name: "Zero Comfort",
    content:
      "If your daily routine is comfortable, you're losing. Comfort is the enemy of achievement. The things you avoid are exactly the things you need to do.",
    likes: 14200,
    retweets: 4800,
    replies: 720,
    views: 640000,
    time: "20h",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "garyvee",
    name: "Gary Vaynerchuk",
    content:
      "You're spending 4 hours a day on your phone consuming content about success instead of creating anything. That's not research. That's procrastination with extra steps.",
    likes: 78400,
    retweets: 22100,
    replies: 5600,
    views: 4200000,
    time: "1d",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "rawmindset",
    name: "Raw Mindset",
    content:
      "You're not depressed. You're not anxious. You're bored. You have no mission, no purpose, no reason to get out of bed. Find something worth suffering for.",
    likes: 41200,
    retweets: 15800,
    replies: 6200,
    views: 2600000,
    time: "1d",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "50cent",
    name: "50cent",
    content:
      "Sleep is for people who are broke. I don't mean literally — I mean stop sleeping on your potential. Every hour you waste, someone else is putting in work.",
    likes: 62100,
    retweets: 17800,
    replies: 3400,
    views: 3500000,
    time: "22h",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "silentgrinder",
    name: "Silent Work",
    content:
      "The loudest person in the room is the weakest. Real power is built in silence. Stop announcing what you're going to do. Just do it. Then let the results make the noise.",
    likes: 25600,
    retweets: 9400,
    replies: 1300,
    views: 1100000,
    time: "1d",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "warrenbuffett",
    name: "Warren Buffett",
    content:
      "The difference between successful people and really successful people is that really successful people say no to almost everything.",
    likes: 89300,
    retweets: 28400,
    replies: 4100,
    views: 6200000,
    time: "2d",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "coldreality",
    name: "Cold Reality",
    content:
      "Your comfort zone is a beautiful place. But nothing ever grows there. The fruit is on the branches you're afraid to climb.",
    likes: 16700,
    retweets: 5600,
    replies: 890,
    views: 780000,
    time: "1d",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "codie_sanchez",
    name: "Codie Sanchez",
    content:
      "Rich people have big libraries. Poor people have big TVs. What you consume determines what you produce. Choose wisely.",
    likes: 34500,
    retweets: 11800,
    replies: 2800,
    views: 1800000,
    time: "1d",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "midnighthustle",
    name: "Midnight Hustle",
    content:
      "Everyone wants to be a beast until it's time to do what beasts do. The sacrifice, the loneliness, the 3am work sessions when nobody's watching. That's where greatness lives.",
    likes: 21300,
    retweets: 7600,
    replies: 1100,
    views: 950000,
    time: "2d",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "hubermanlab",
    name: "Andrew Huberman",
    content:
      "Your brain will always choose the path of least resistance. That's not a flaw — it's a feature you have to override manually. Every. Single. Day.",
    likes: 56700,
    retweets: 18200,
    replies: 3200,
    views: 3400000,
    time: "2d",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "unfiltered_truth",
    name: "Unfiltered",
    content:
      "You don't need a mentor. You don't need a course. You don't need permission. You need to start. Today. With whatever you have. Imperfect action beats perfect planning every time.",
    likes: 19200,
    retweets: 6800,
    replies: 920,
    views: 830000,
    time: "2d",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "therock",
    name: "Dwayne Johnson",
    content:
      "Be the hardest worker in the room. In any room. Always. When talent doesn't work hard, hard work beats talent.",
    likes: 124000,
    retweets: 31200,
    replies: 6800,
    views: 8900000,
    time: "3d",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "darksidegrind",
    name: "Dark Grind",
    content:
      "The alarm goes off at 5am. You have two choices:\n1. Hit snooze and dream about success\n2. Get up and go build it\n\nYou've been choosing option 1 for years.",
    likes: 31200,
    retweets: 10800,
    replies: 2400,
    views: 1600000,
    time: "3d",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "drjulie",
    name: "Dr. Julie Smith",
    content:
      "Healing isn't comfortable. Growth isn't comfortable. Change isn't comfortable. If you're uncomfortable, congratulations — you're probably doing it right.",
    likes: 43800,
    retweets: 14600,
    replies: 2100,
    views: 2500000,
    time: "3d",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "nomercy_grind",
    name: "No Mercy",
    content:
      "You're not stuck. You're scared. There's a difference. Stuck implies you can't move. Scared means you won't. One is a circumstance, the other is a choice.",
    likes: 22100,
    retweets: 8200,
    replies: 1400,
    views: 1100000,
    time: "3d",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "markcuban",
    name: "Mark Cuban",
    content:
      "Work like there is someone working 24 hours a day to take it all away from you. Because there is.",
    likes: 71200,
    retweets: 19800,
    replies: 3600,
    views: 4100000,
    time: "4d",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "ironwill_fit",
    name: "Iron Will",
    content:
      "Your body is capable of incredible things. Your mind quits 40% before your body does. Remember that next time you think you're at your limit. You're not even close.",
    likes: 28900,
    retweets: 9800,
    replies: 1800,
    views: 1400000,
    time: "4d",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "dailystoic",
    name: "Daily Stoic",
    content:
      "You could be good today. But instead you choose tomorrow. — Marcus Aurelius\n\nThe most devastating quote ever written. Read it again.",
    likes: 47800,
    retweets: 16200,
    replies: 2800,
    views: 2900000,
    time: "4d",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "brutalmindset",
    name: "Brutal Mindset",
    content:
      "Scrolling is the new smoking. You know it's killing your potential. You know you should stop. But you do it anyway because it feels good in the moment.",
    likes: 35200,
    retweets: 12400,
    replies: 2200,
    views: 1900000,
    time: "5d",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "rfrancis",
    name: "Ryan Francis",
    content:
      "The person you're going to be in 5 years is being built right now by the habits you refuse to change today.",
    likes: 18400,
    retweets: 6200,
    replies: 980,
    views: 820000,
    time: "5d",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "conaboron",
    name: "Conor McGregor",
    content:
      "There's no talent here, this is hard work. This is an obsession. Talent does not exist. We are all equals as human beings. You could be anyone if you put in the time.",
    likes: 98400,
    retweets: 26800,
    replies: 5400,
    views: 5800000,
    time: "5d",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "the_grind_never_stops",
    name: "TGNS",
    content:
      "You want balance? Balance is for people who've already won. You haven't won yet. Go be obsessed. Go be unreasonable. Go be the person everyone thinks is crazy. Results will validate you later.",
    likes: 24800,
    retweets: 8900,
    replies: 1600,
    views: 1200000,
    time: "5d",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "kevinhart4real",
    name: "Kevin Hart",
    content:
      "Everybody wants to be famous but nobody wants to put the work in. I live by that. You grind hard so you can play hard.",
    likes: 67800,
    retweets: 18400,
    replies: 3200,
    views: 3800000,
    time: "6d",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "harshreality_x",
    name: "Harsh Reality",
    content:
      "Your parents sacrificed everything so you could have a better life. And you're wasting it watching 30-second videos of other people living theirs. Let that sink in.",
    likes: 52300,
    retweets: 19800,
    replies: 4800,
    views: 3200000,
    time: "6d",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "tfrancis",
    name: "Tim Ferriss",
    content:
      "A person's success in life can usually be measured by the number of uncomfortable conversations he or she is willing to have.",
    likes: 41200,
    retweets: 13600,
    replies: 2400,
    views: 2200000,
    time: "6d",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "mentalfortress",
    name: "Mental Fortress",
    content:
      "Most people don't actually want success. They want the IDEA of success. Because real success requires you to become someone you're not yet. And that terrifies people.",
    likes: 29800,
    retweets: 10200,
    replies: 1800,
    views: 1500000,
    time: "1w",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "miketyson",
    name: "Mike Tyson",
    content:
      "Everyone has a plan till they get punched in the mouth. Life is going to hit you. The question isn't if — it's whether you get back up.",
    likes: 112000,
    retweets: 29400,
    replies: 5200,
    views: 6800000,
    time: "1w",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "sigma_mentality",
    name: "Sigma",
    content:
      "Delete social media for 30 days. Watch how fast your life changes. You'll realize 90% of your problems were manufactured by an algorithm designed to keep you distracted.",
    likes: 38400,
    retweets: 14200,
    replies: 3200,
    views: 2100000,
    time: "1w",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "saaboron",
    name: "Sahil Bloom",
    content:
      "The most successful people I know share one trait: they do the hard thing first. Every. Single. Morning. While you're easing into your day, they've already won theirs.",
    likes: 36700,
    retweets: 12800,
    replies: 2100,
    views: 1900000,
    time: "1w",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "pain_is_fuel",
    name: "Pain Is Fuel",
    content:
      "The gym is the only place where you can voluntarily suffer and come out stronger. Apply that principle to your entire life. Seek discomfort. Chase resistance. Grow.",
    likes: 17800,
    retweets: 6200,
    replies: 890,
    views: 780000,
    time: "1w",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "imsaboron",
    name: "Iman Gadzhi",
    content:
      "Stop learning. Start doing. You've watched 500 hours of YouTube tutorials. You've read 20 books. You've taken 5 courses. You've built nothing. Information without execution is entertainment.",
    likes: 54200,
    retweets: 18400,
    replies: 3800,
    views: 3200000,
    time: "2w",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "apex_discipline",
    name: "Apex",
    content:
      "Motivation comes and goes. That's why it's worthless as a strategy. Build systems. Build habits. Build discipline. Those don't depend on how you feel when the alarm goes off.",
    likes: 21400,
    retweets: 7800,
    replies: 1100,
    views: 950000,
    time: "2w",
    verified: false,
    bookmarked: false,
  },
  {
    handle: "willsmith",
    name: "Will Smith",
    content:
      "Self-discipline is the center of all material success. You can't win the war against the world if you can't win the war against your own mind.",
    likes: 78900,
    retweets: 21600,
    replies: 4200,
    views: 4500000,
    time: "2w",
    verified: true,
    bookmarked: false,
  },
  {
    handle: "nofear_mentality",
    name: "No Fear",
    content:
      "In 10 years you won't remember the Netflix series. You won't remember the viral tweets. You'll remember the risks you didn't take and the work you didn't put in. That's what keeps people up at night at 40.",
    likes: 44200,
    retweets: 16800,
    replies: 3600,
    views: 2800000,
    time: "2w",
    verified: false,
    bookmarked: false,
  },
];

export const tweets: Tweet[] = seededShuffle(
  rawTweets.map((t, i) => ({
    ...t,
    id: `tweet-${i}`,
    avatarColor: getAvatarColor(t.name),
  })),
  42
);
