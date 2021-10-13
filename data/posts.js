import { USERS } from "./users";

export const POSTS = [
  {
    imageurl:
      "https://i.pinimg.com/1200x/93/32/cc/9332cc43b9cd28c3f8b188117c8bed01.jpg",
    user: USERS[0].user,
    likes: 7870,
    caption:
      "Train Ride to Hogwarts. 😂🚆, Wow! This build looks fire. Super excited about,Wow! This build looks fire. Super excited about",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "theqazman",
        comment: "Wow! This build looks fire. Super excited about",
      },
      {
        user: "amaanath.dev",
        comment: "Once I wake up, I'll finally be ready to code this up!",
      },
    ],
  },
  {
    imageurl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    user: USERS[1].user,
    likes: 6660,
    caption: "Train Ride to Mumbai. 😂🚆",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "theqazman",
        comment: "Wow! This build looks fire. Super excited about",
      },
      {
        user: "amaanath.dev",
        comment: "Once I wake up, I'll finally be ready to code this up!",
      },
    ],
  },
  {
    imageurl:
      "https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg",
    user: USERS[2].user,
    likes: 3470,
    caption: "Train Ride to Japan. 😂🚆",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: "theqazman",
        comment: "Wow! This build looks fire. Super excited about",
      },
      {
        user: "amaanath.dev",
        comment: "Once I wake up, I'll finally be ready to code this up!",
      },
    ],
  },
];
