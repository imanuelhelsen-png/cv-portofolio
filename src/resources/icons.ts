import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
} from "react-icons/si";

import { 
  FaDiscord, 
  FaGithub, 
  FaLinkedin, 
  FaX, 
  FaThreads, 
  FaInstagram, 
  FaXTwitter, 
  FaFacebook, 
  FaPinterest, 
  FaWhatsapp, 
  FaReddit, 
  FaTelegram,
  // --- ICON LAMA ---
  FaWindows,
  FaLinux,
  FaDatabase,
  FaShieldHalved,
  FaNetworkWired,
  FaServer,
  FaScrewdriverWrench,
  // --- ICON BARU UNTUK WEB DEV ---
  FaLaravel,    // Icon Laravel
  FaNodeJs,     // Icon Node.js
  FaPhp         // Icon PHP
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,

  // --- PEMETAAN ICON IT & WEB DEV ---
  fortinet: FaShieldHalved,
  mikrotik: FaNetworkWired,
  cisco: FaServer,
  window: FaWindows,
  linux: FaLinux,
  database: FaDatabase,
  hardware: FaScrewdriverWrench,
  laravel: FaLaravel,  // Daftar baru
  nodejs: FaNodeJs,    // Daftar baru
  php: FaPhp           // Daftar baru
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;