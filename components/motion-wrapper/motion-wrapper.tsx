"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const MotionImage = motion.create(Image);

export const MotionLink = motion.create(Link);
