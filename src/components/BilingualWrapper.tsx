"use client";

import React, { ReactNode } from 'react';
// PENTING: Sesuaikan path ini ke file context Anda
// Karena file ini ada di 'src/components', maka importnya './LanguageContext'
import { useLanguage } from './LanguageContext'; 

// Komponen Pembungkus Bahasa Inggris
export const En = ({ children }: { children: ReactNode }) => {
  const { language } = useLanguage();
  // Kalau bahasa 'en', tampilkan isinya. Kalau bukan, hilangkan (null).
  if (language !== 'en') return null;
  return <>{children}</>;
};

// Komponen Pembungkus Bahasa Indonesia
export const Id = ({ children }: { children: ReactNode }) => {
  const { language } = useLanguage();
  // Kalau bahasa 'id', tampilkan isinya. Kalau bukan, hilangkan (null).
  if (language !== 'id') return null;
  return <>{children}</>;
};