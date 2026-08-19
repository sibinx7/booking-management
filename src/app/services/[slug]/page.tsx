import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesData, getServiceBySlug } from '@/data/services';
import ServiceDetailClient from './ServiceDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Anahata Spa',
    };
  }

  return {
    title: `${service.title} | Anahata Exotic Spa & Sanctuary`,
    description: service.tagline,
    openGraph: {
      title: `${service.title} | Anahata Exotic Spa`,
      description: service.overview,
      images: [service.heroImage],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
