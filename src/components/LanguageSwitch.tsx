"use client";

import { Button, Flex } from "@once-ui-system/core";
import { useLanguage } from "@/components/LanguageContext";

export default function LanguageSwitch() {
  // Mengambil state bahasa saat ini dan fungsi pengubahnya dari Context yang kita buat
  const { language, toggleLanguage } = useLanguage();

  return (
    <Flex gap="8" align="center">
      {/* --- TOMBOL INDONESIA (ID) --- */}
      <Button
        id="switch-id"
        // Logika Tampilan: Jika bahasa sedang 'id', pakai warna 'primary' (menyala).
        // Jika bukan, pakai 'tertiary' (transparan/samar).
        variant={language === 'id' ? 'primary' : 'tertiary'}
        size="s" // Ukuran kecil agar rapi
        onClick={() => toggleLanguage('id')}
      >
        ID
      </Button>

      {/* --- TOMBOL INGGRIS (EN) --- */}
      <Button
        id="switch-en"
        variant={language === 'en' ? 'primary' : 'tertiary'}
        size="s"
        onClick={() => toggleLanguage('en')}
      >
        EN
      </Button>
    </Flex>
  );
}