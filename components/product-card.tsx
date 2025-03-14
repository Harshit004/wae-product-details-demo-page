import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  image: string
  title: string
  description: string
}

export default function ProductCard({ image, title, description }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/products/${title.toLowerCase().replace(/\s+/g, "-")}`} className="block">
        <div className="relative w-full h-[360px] mb-4 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="text-[16px] leading-[15.63px] tracking-[-0.43px] font-normal uppercase mb-1 group-hover:underline">
          {title}
        </h3>
      </Link>
      <div className="max-w-[450px]">
        <p className="text-[16px] leading-[15.63px] tracking-[-0.43px] font-normal text-[#6A6A6A]">{description}</p>
      </div>
    </div>
  )
}

