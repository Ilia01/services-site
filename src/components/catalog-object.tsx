import Image from "next/image";

// Native presentation of the existing original photo; no generated reference or
// third-party reference imagery is embedded in the website.
export function CatalogObject({ small = false }: { small?: boolean }) {
  return (
    <div
      className={
        small ? "catalog-object catalog-object-small" : "catalog-object"
      }
    >
      <Image
        src="/images/hero.webp"
        alt={small ? "" : "Illustrative solid oak writing desk"}
        width={1536}
        height={1024}
        sizes={small ? "180px" : "(max-width: 767px) 100vw, 800px"}
        priority={!small}
        quality={85}
      />
    </div>
  );
}
