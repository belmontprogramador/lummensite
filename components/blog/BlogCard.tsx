"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const BASE_URL = "https://botgrupo.lummen-app.com";

export default function BlogCard({ post, onPress }: any) {
  const { t } = useTranslation();

  const cover = post.coverImage
    ? post.coverImage.startsWith("http")
      ? post.coverImage
      : `${BASE_URL}${post.coverImage}`
    : null;

  const authorName =
    typeof post.author === "string"
      ? post.author
      : post.author?.name || t("blogCard.unknownAuthor");

  const published = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString()
    : t("blogCard.noDate");

  return (
    <Card
      className="cursor-pointer overflow-hidden rounded-xl shadow-sm transition hover:shadow-md"
      onClick={onPress}
    >
      {/* IMAGE */}
      {cover && (
        <img
          src={cover}
          alt={t("blogCard.coverImage") as string}
          className="w-full h-40 object-cover"
        />
      )}

      {/* CONTENT */}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">
          {post.title}
        </CardTitle>

        {post.subtitle && (
          <p className="text-sm text-muted-foreground mt-1">
            {post.subtitle}
          </p>
        )}
      </CardHeader>

      <CardContent>
        <p className="text-xs text-muted-foreground">
          {authorName} • {published}
        </p>
      </CardContent>
    </Card>
  );
}
