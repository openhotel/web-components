import { DiscordIconComponent } from "./discord-icon.component";
import { BskyIconComponent } from "./bsky-icon.component";
import { GithubIconComponent } from "./github-icon.component";
import { HomeIconComponent } from "./home-icon.component";
import { HotelIconComponent } from "./hotel-icon.component";

import { CCIconComponent, BYIconComponent, NCEUIconComponent } from "./cc";

export default {
  title: "Components/Icons",
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Discord = () => <DiscordIconComponent />;
export const Bsky = () => <BskyIconComponent />;
export const Github = () => <GithubIconComponent />;
export const Home = () => <HomeIconComponent />;
export const Hotel = () => <HotelIconComponent />;

export const CC = () => <CCIconComponent />;
export const BY = () => <BYIconComponent />;
export const NC_EU = () => <NCEUIconComponent />;
