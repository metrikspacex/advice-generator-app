"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import type { HTMLAttributes } from "react";

import Styles from "@/styles/components/Card.module.scss";
import type { ContentData } from "@/types/ContentData";

export type CardProps = {
  data: ContentData;
} & HTMLAttributes<HTMLElement>;
export default function Card({ className, data }: CardProps) {
  const router = useRouter();

  return (
    <section className={clsx(Styles.root, className)}>
      <h1 className={Styles.id}>Advice #{data.slip.id}</h1>
      <h1 className={Styles.advice}>{data.slip.advice}</h1>
      <div className={Styles.divider} />
      <div className={Styles.dice}>
        <button
          type="button"
          onClick={() => {
            router.refresh();
          }}
        />
      </div>
    </section>
  );
}
