
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://san3y.vercel.app"),

  title: {
    default: "صنايعي.كوم | منصة طلبات الصيانة المنزلية",
    template: "%s | صنايعي.كوم",
  },

  description:
    "صنايعي.كوم منصة تربط العملاء بالصنايعية المناسبين لشغلهم. انشر طلبك، واستقبل عروض الصنايعية، واختار المناسب ليك. متاحة حاليًا في فيصل لخدمات السباكة والكهرباء.",

  keywords: [
    "صنايعي",
    "صنايعي.كوم",
    "طلب صنايعي",
    "صنايعية في فيصل",
    "سباك في فيصل",
    "كهربائي في فيصل",
    "صيانة منزلية",
    "خدمات منزلية",
    "طلبات صيانة",
    "سباكة",
    "كهرباء",
    "الصنايعية",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://san3y.vercel.app",
    siteName: "صنايعي.كوم",
    title: "صنايعي.كوم | منصة طلبات الصيانة المنزلية",
    description:
      "عندك شغل محتاج يتعمل؟ انشر طلبك واستقبل عروض الصنايعية المناسبين ليك. ابدأ حاليًا في فيصل لخدمات السباكة والكهرباء.",
    images: [
      {
        url: "https://san3y.vercel.app/sanay3y.png",
        width: 1200,
        height: 630,
        alt: "صنايعي.كوم - منصة تربط العملاء بالصنايعية المناسبين لشغلهم",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "صنايعي.كوم | منصة طلبات الصيانة المنزلية",
    description:
      "انشر طلب شغلك، واستقبل عروض الصنايعية، واختار المناسب ليك.",
    images: [
      {
        url: "https://san3y.vercel.app/sanay3y.png",
        alt: "صنايعي.كوم - منصة طلبات الصيانة المنزلية",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function Sanay3yLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
