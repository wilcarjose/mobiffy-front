// src/components/ProductCard.tsx
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <article
    className={`product-card transitionEffect relative rounded-2xl p-3 shadow-md`}
  >
    <div className="product-image-container h-[250px] w-full overflow-hidden rounded-2xl lg:h-[220px] 2xl:h-[300px]">
      <Image
        src={product.image.url}
        alt={`${product.name}`}
        width={product.image.width}
        height={product.image.height}
        className="product-image h-full w-full object-contain object-bottom"
        sizes="(max-width: 640px) 100vw, 300px"
        priority={false}
      />
    </div>
    <div className="product-details mt-3">
      <div className="product-title flex items-center justify-between">
        <h3 className="product-title font-semibold">{product.name}</h3>
        <div className="price-container {`text-neutral-500 ${
            false ? 'block' : 'hidden'
          } text-sm line-through`}">
          {product.previousPrice && (
            <span className="previous-price">
              ${product.previousPrice}
            </span>
          )}
          <span className="current-price">
            ${product.currentPrice}
          </span>
        </div>
      </div>
    </div>
  </article>
);

export default ProductCard;
