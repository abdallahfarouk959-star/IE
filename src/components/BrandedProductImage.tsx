import type { ReactNode } from 'react';

export type ProductPrintKind = 'tee' | 'hoodie' | 'cap' | 'mug' | 'sticker' | 'phone' | 'gift' | 'leather';

const printKinds: Record<string, ProductPrintKind> = {
  tee: 'tee', hoodie: 'hoodie', cap: 'cap', stickers: 'sticker',
  mug: 'mug', gift: 'gift', case: 'phone', leather: 'leather',
};

const printPlacement: Record<ProductPrintKind, string> = {
  tee: '[left:49%] [top:39%]',
  hoodie: '[left:46%] [top:46%]',
  cap: '[left:43%] [top:42%]',
  mug: '[left:29%] [top:48%]',
  sticker: '[left:49%] [top:45%]',
  phone: '[left:34%] [top:54%]',
  gift: '[left:69%] [top:61%]',
  leather: '[left:75%] [top:72%]',
};

export function productPrintKindFor(productId: string): ProductPrintKind {
  return printKinds[productId] || 'gift';
}

type BrandedProductImageProps = {
  src: string;
  alt: string;
  kind: ProductPrintKind;
  className?: string;
  showBrand?: boolean;
  children?: ReactNode;
};

export default function BrandedProductImage({
  src,
  alt,
  kind,
  className = '',
  showBrand = true,
  children,
}: BrandedProductImageProps) {
  return (
    <span className={`[display:block] [position:absolute] [width:58px] [height:48px] [overflow:hidden] [inset:0] [flex:0_0_58px] max-[720px]:[width:48px] max-[720px]:[height:42px] max-[720px]:[flex-basis:48px] ${className}`}>
      <img className={"[display:block] [width:100%] [height:100%] [object-fit:cover] [transition:transform_.6s_cubic-bezier(.2,.75,.2,1)] [transform:scale(1.04)]"} src={src} alt={alt} loading="lazy" />
      {showBrand && (
        <img
          className={`[position:absolute] [z-index:2] [width:24px] [height:auto] [aspect-ratio:1] [object-fit:contain] [box-shadow:0_3px_10px_rgba(0,0,0,.18)] [pointer-events:none] [right:auto] [bottom:auto] ${printPlacement[kind]}`}
          src="/assets/yuzersef-profile-original.jpg"
          alt=""
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
