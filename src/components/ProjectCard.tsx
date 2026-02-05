"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

// Pastikan path import ini benar (sesuaikan titiknya ./ atau ../)
import { useLanguage } from './LanguageContext'; 

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  title_id?: string;
  content: string;
  description: string;
  description_id?: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  title_id,
  content,
  description,
  description_id,
  avatars,
  link,
}) => {
  const { language } = useLanguage();

  // Logika Bahasa
  const displayTitle = (language === 'id' && title_id) ? title_id : title;
  const displayDesc = (language === 'id' && description_id) ? description_id : description;
  
  const readCaseStudyText = language === 'id' ? 'Baca studi kasus' : 'Read case study';
  const viewProjectText = language === 'id' ? 'Lihat proyek' : 'View project';

  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        items={images.map((image) => ({
          slide: image,
          alt: displayTitle,
        }))}
      />
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {displayTitle && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {displayTitle}
            </Heading>
          </Flex>
        )}
        
        {/* HAPUS kondisi content?.trim(), ganti jadi true agar kolom selalu muncul */}
        <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            
            {displayDesc?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {displayDesc}
              </Text>
            )}
            
            <Flex gap="24" wrap>
              {/* PERBAIKAN DI SINI: Cek href, bukan content */}
              {href && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">{readCaseStudyText}</Text>
                </SmartLink>
              )}
              
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">{viewProjectText}</Text>
                </SmartLink>
              )}
            </Flex>
        </Column>
      </Flex>
    </Column>
  );
};