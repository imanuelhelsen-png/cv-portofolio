"use client";

import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Flex,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
// HAPUS IMPORT PROJECTS DARI SINI KARENA MENYEBABKAN ERROR FS
import { useLanguage } from "@/components/LanguageContext";
import LanguageSwitch from "@/components/LanguageSwitch";
import { ReactNode } from "react";

// Terima 'children' sebagai props
export default function HomeContent({ children }: { children: ReactNode }) {
  const { t } = useLanguage();

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* --- TOMBOL GANTI BAHASA --- */}
      <Column fillWidth horizontal="end" paddingBottom="16" paddingRight="12">
        <LanguageSwitch />
      </Column>
      
      {/* --- HERO SECTION --- */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {t.hero.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {t.hero.subline}
            </Text>
          </RevealFx>

          {/* Tombol About & CV */}
          <RevealFx paddingTop="12" delay={0.4} horizontal="center">
            <Row gap="16" vertical="center" align="center">
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar
                      marginRight="8"
                      style={{ marginLeft: "-0.75rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {t.hero.aboutButton}
                </Row>
              </Button>

              <Button
                id="download-cv"
                data-border="rounded"
                href="/cv-helsen.pdf"
                variant="primary"
                size="m"
                weight="default"
                target="_blank"
              >
                <Row gap="8" vertical="center">
                  {t.hero.downloadCv}
                </Row>
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>

      {/* --- BAGIAN PERUSAHAAN (COMPANIES) --- */}
      <RevealFx translateY="12" delay={0.5} fillWidth horizontal="center">
        <Column fillWidth horizontal="center" gap="32" paddingY="48">
          <Heading variant="heading-strong-l" align="center">
            {t.companies.title}
          </Heading>
          
          <Flex wrap gap="24" horizontal="center" fillWidth>
            {/* Kartu 1: PT. IIDA */}
            <Column 
              className="company-card"
              background="neutral-alpha-weak" 
              radius="l" 
              padding="32" 
              align="center" 
              border="neutral-alpha-weak"
              style={{ width: '300px', height: '200px', justifyContent: 'center' }}
            >
              <img src="/images/companies/iida.png" alt="IIDA Group" style={{ maxHeight: '110px', maxWidth: '100%', objectFit: 'contain' }} />
              <Text variant="label-default-m" align="center" style={{ marginTop: '24px' }}>PT. IIDA Group</Text>
            </Column>

            {/* Kartu 2: Sido Muncul */}
            <Column 
              className="company-card"
              background="neutral-alpha-weak" 
              radius="l" 
              padding="32" 
              align="center" 
              border="neutral-alpha-weak"
              style={{ width: '300px', height: '200px', justifyContent: 'center' }}
            >
              <img src="/images/companies/sidomuncul.png" alt="Sido Muncul" style={{ maxHeight: '110px', maxWidth: '100%', objectFit: 'contain' }} />
              <Text variant="label-default-m" align="center" style={{ marginTop: '24px' }}>Sido Muncul, Tbk</Text>
            </Column>

             {/* Kartu 3: Newton */}
             <Column 
              className="company-card"
              background="neutral-alpha-weak" 
              radius="l" 
              padding="32" 
              align="center" 
              border="neutral-alpha-weak"
              style={{ width: '300px', height: '200px', justifyContent: 'center' }}
            >
              <img src="/images/companies/newton.png" alt="Newton" style={{ maxHeight: '110px', maxWidth: '100%', objectFit: 'contain' }} />
              <Text variant="label-default-m" align="center" style={{ marginTop: '24px' }}>Newton Teknologi</Text>
            </Column>
          </Flex>
        </Column>
      </RevealFx>
      
      {/* --- PROJECT LIST (DIGANTI DENGAN CHILDREN) --- */}
      <RevealFx translateY="16" delay={0.6}>
        {/* Di sini kita render komponen yang dititipkan dari page.tsx */}
        {children}
      </RevealFx>
    </Column>
  );
}