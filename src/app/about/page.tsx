"use client";

import React from "react";
import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Row,
  SmartLink
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";

// 1. Import Context Bahasa
// Pastikan path ini benar (sesuaikan titiknya jika perlu ../../)
import { useLanguage } from '@/components/LanguageContext'; 

export default function About() {
  // 2. Gunakan Hook Bahasa
  const { language } = useLanguage();

  // 3. Fungsi Helper Cerdas: Memilih Teks Berdasarkan Bahasa
  // Jika data berbentuk object {en: "...", id: "..."}, dia ambil sesuai bahasa.
  // Jika data masih string biasa (belum diupdate), dia tampilkan apa adanya.
  const t = (data: any) => {
    if (data && typeof data === 'object' && !React.isValidElement(data) && !Array.isArray(data)) {
       return data[language] || data['en'] || "";
    }
    return data;
  };

  const structure = [
    {
      title: t(about.intro.title),
      display: about.intro.display,
      items: [],
    },
    {
      title: t(about.work.title),
      display: about.work.display,
      items: about.work.experiences.map((experience) => t(experience.company)),
    },
    {
      title: t(about.studies.title),
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => t(institution.name)),
    },
    {
      title: t(about.technical.title),
      display: about.technical.display,
      items: about.technical.skills.map((skill) => t(skill.title)),
    },
  ];

  return (
    <Column maxWidth="m">
      {/* Schema (SEO) tetap menggunakan data default (Inggris) agar aman */}
      {/* Anda bisa menghapus bagian Schema ini jika error, atau biarkan statis */}
      
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {t(person.location)}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={t(about.intro.title)}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">
                    {language === 'id' ? "Jadwalkan panggilan" : "Schedule a call"}
                </Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {t(person.role)}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                  .filter((item) => item.essential)
                  .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {/* GUNAKAN helper t() */}
              {t(about.intro.description)}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={t(about.work.title)} variant="display-strong-s" marginBottom="m">
                {t(about.work.title)}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {/* Jika timeframe ingin dwibahasa, pastikan di resources.ts diubah jadi object */}
                        {t(experience.timeframe)}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {t(experience.role)}
                    </Text>
                    <Column as="ul" gap="16">
                      {/* KHUSUS ARRAY (Achievements): Kita perlu penanganan khusus */}
                      {/* Asumsi: Nanti di resources.ts, achievements akan jadi object { en: [], id: [] } */}
                      {/* Code ini mengecek: apakah ini array biasa atau object bahasa */}
                      
                      {(Array.isArray(experience.achievements) ? experience.achievements : (experience.achievements[language] || experience.achievements['en'])).map(
                        (achievement: any, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={t(about.studies.title)} variant="display-strong-s" marginBottom="m">
                {t(about.studies.title)}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {t(institution.name)}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {t(institution.description)}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={t(about.technical.title)}
                variant="display-strong-s"
                marginBottom="40"
              >
                {t(about.technical.title)}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {t(skill.title)}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {t(skill.description)}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}