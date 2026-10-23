import { useMemo, useState } from 'react';
import { ArrowUpLeft, Image as ImageIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import BrandedProductImage, { type ProductPrintKind } from '../components/BrandedProductImage';
import { galleryItems } from '../data/services';
import { useLanguage } from '../lib/language';

const filters = [
  { id: 'all', ar: 'الكل', en: 'All' },
  { id: 'apparel', ar: 'ملابس', en: 'Apparel' },
  { id: 'gifts', ar: 'هدايا', en: 'Gifts' },
  { id: 'prints', ar: 'طباعة', en: 'Prints' },
  { id: 'accessories', ar: 'إكسسوارات', en: 'Accessories' },
];
const serviceForCategory: Record<string, string> = { apparel: 'tee', gifts: 'mug', prints: 'stickers', accessories: 'case' };
const galleryPrintKind: Record<string, ProductPrintKind> = { g1: 'tee', g2: 'tee', g3: 'mug', g4: 'sticker', g5: 'phone', g6: 'cap' };
const galleryCardHeights = [
  '[&>button]:[height:330px] max-[720px]:[&>button]:[height:190px] max-[390px]:[&>button]:[height:158px]',
  '[&>button]:[height:248px] max-[720px]:[&>button]:[height:190px] max-[390px]:[&>button]:[height:158px]',
  '[&>button]:[height:285px] max-[720px]:[&>button]:[height:190px] max-[390px]:[&>button]:[height:158px]',
];

export default function Gallery() {
  const { isEn } = useLanguage();
  const [active, setActive] = useState('all');
  const navigate = useNavigate();
  const items = useMemo(() => active === 'all' ? galleryItems : galleryItems.filter((item) => item.category === active), [active]);

  return <div className={"[min-height:65vh]"}>
    <section className={"[&_h1_em]:[font-style:normal] [&_h1_em]:[color:#688573] [padding-block:89px_59px] [border-bottom:1px_solid_#dce3dc] [&_h1]:[font-size:clamp(44px,6.4vw,76px)] [&_h1]:[line-height:1.1] [&_h1]:[letter-spacing:-.05em] [&_h1]:[font-weight:600] [&_h1]:[color:#0b3b32] [&_h1]:[margin:22px_0_24px] max-[720px]:[padding-block:58px_32px] max-[720px]:[&_h1]:[font-size:clamp(42px,11vw,61px)] max-[720px]:[&_h1]:[margin:17px_0] [padding-bottom:51px] max-[720px]:[padding-bottom:30px] [width:min(1220px,calc(100%_-_72px))] [margin-inline:auto]    max-[1000px]:[width:min(100%_-_48px,900px)] max-[720px]:[width:calc(100%_-_38px)]   max-[390px]:[width:calc(100%_-_30px)]"}>
      <div className={"[display:flex] [align-items:center] [gap:10px] [font:700_9px_Manrope,'IBM_Plex_Sans_Arabic',sans-serif] [letter-spacing:.16em] [color:#5c756a] [&_>span]:[display:inline-block] [&_>span]:[width:20px] [&_>span]:[height:1px] [&_>span]:[background:#99aa8d] [justify-content:center]"}><span />{isEn ? 'A LITTLE INSPIRATION' : 'شوية إلهام'}</div>
      <h1>{isEn ? <>Ideas, made<br /><em>into keepsakes.</em></> : <>أفكار اتطبعت،<br /><em>وبقت حكاية.</em></>}</h1>
      <div className={"[display:flex] [justify-content:space-between] [align-items:flex-end] [gap:30px] [&_>p]:[max-width:470px] [&_>p]:[margin:0] [&_>p]:[color:#6f7d75] [&_>p]:[font-size:13px] [&_>p]:[line-height:1.9] max-[720px]:[align-items:flex-start] max-[720px]:[flex-direction:column] max-[720px]:[gap:15px] max-[720px]:[&_>p]:[font-size:11px]"}>
        <p>{isEn ? 'These are visual references to help you imagine what is possible. Choose one to start a request inspired by its category.' : 'الصور دي مراجع بصرية تساعدك تتخيل فكرتك. اختاري واحدة وابدئي طلبًا من نفس الفئة.'}</p>
        <div className={"[display:flex] [align-items:center] [gap:8px] [color:#77847d] [font-size:10px] max-[720px]:[font-size:9px]"}><ImageIcon size={15} />{isEn ? 'Visual concepts and official brand imagery; not verified client projects' : 'تصورات بصرية وصورة رسمية للعلامة؛ وليست أعمالًا موثقة لعملاء'}</div>
      </div>
    </section>
    <section className={"[padding-block:31px_76px] max-[720px]:[padding-block:22px_48px] [width:min(1220px,calc(100%_-_72px))] [margin-inline:auto]    max-[1000px]:[width:min(100%_-_48px,900px)] max-[720px]:[width:calc(100%_-_38px)]   max-[390px]:[width:calc(100%_-_30px)]"}>
      <div className={"[display:flex] [align-items:center] [gap:18px] [padding-bottom:20px] [border-bottom:1px_solid_#dfe5df] [margin-bottom:25px] [justify-content:space-between] max-[720px]:[align-items:flex-start] max-[720px]:[gap:12px] max-[720px]:[flex-direction:column]"}>
        <div className={"[display:flex] [align-items:center] [gap:7px] [flex-wrap:wrap] max-[720px]:[gap:5px]"}>{filters.map((filter) => <button key={filter.id} className={`[border:1px_solid_#dbe2db] [background:transparent] [color:#627168] [padding:8px_13px] [font-size:10px] [transition:.2s] hover:[background:#0b3b32] hover:[border-color:#0b3b32] hover:[color:#fff] max-[720px]:[font-size:9px] max-[720px]:[padding:7px_9px] ${active === filter.id ? "[color:#0b3b32] [font-weight:700] [background:#0b3b32] [border-color:#0b3b32] [&_>span]:[background:#0b3b32] [&_>span]:[border-color:#0b3b32] [&_>span]:[color:#fff]" : ''}`} onClick={() => setActive(filter.id)}>{isEn ? filter.en : filter.ar}</button>)}</div>
        <span className={"[margin-inline-start:auto] [font:700_8px_Manrope,sans-serif] [color:#87948b] [letter-spacing:.12em] [white-space:nowrap] max-[720px]:[margin-inline-start:0] max-[720px]:[align-self:flex-end]"}>{String(items.length).padStart(2, '0')} {isEn ? 'REFERENCES' : 'مرجع'}</span>
      </div>
      <div className={"[display:grid] [grid-template-columns:repeat(3,1fr)] [gap:17px] [align-items:start] max-[720px]:[grid-template-columns:1fr_1fr] max-[720px]:[gap:9px]"}>
        {items.map((item, index) => (
          <article key={item.id} className={`[min-width:0] [&:nth-child(3n+2)]:[margin-top:38px] max-[720px]:[&:nth-child(3n+2)]:[margin-top:0] max-[720px]:[&:nth-child(even)]:[margin-top:24px] ${galleryCardHeights[index % 3]}`}>
            <button type="button" className={"[padding:0] [border:0] [width:100%] [height:285px] [position:relative] [overflow:hidden] [background:#dce5dc] [text-align:start] [&_img]:[width:100%] [&_img]:[height:100%] [&_img]:[object-fit:cover] [&_img]:[transition:transform_.55s_cubic-bezier(.2,.75,.2,1)] hover:[transform:scale(1.05)] max-[720px]:[height:190px] max-[390px]:[height:158px]"} onClick={() => navigate('/request', { state: { referenceId: item.id, serviceId: serviceForCategory[item.category] } })} aria-label={isEn ? `Use ${item.title.en} as a reference` : `استخدمي ${item.title.ar} كمرجع`}>
              <BrandedProductImage src={item.image} alt={isEn ? item.title.en : item.title.ar} kind={galleryPrintKind[item.id] || 'gift'} showBrand={item.id !== 'g1'} />
              <span className={"[position:absolute] [inset:0] [background:rgba(7,43,35,.48)] [color:#fff] [display:flex] [align-items:center] [justify-content:center] [gap:9px] [font-size:11px] [font-weight:700] [opacity:1] [transition:opacity_.2s]"}><span>{isEn ? 'USE AS REFERENCE' : 'استخدمي كمرجع'}</span><ArrowUpLeft size={18} /></span>
            </button>
            <div className={"[display:flex] [justify-content:space-between] [align-items:flex-start] [padding:13px_1px] [&_>div>span]:[font-size:9px] [&_>div>span]:[color:#809086] [&_h3]:[font-size:14px] [&_h3]:[color:#0b3b32] [&_h3]:[margin:5px_0_0] [&_h3]:[font-weight:600] [&_>span]:[font:700_9px_Manrope,sans-serif] [&_>span]:[color:#9aa79c] max-[720px]:[&_h3]:[font-size:11px]"}><div><span>{isEn ? item.label.en : item.label.ar}</span><h3>{isEn ? item.title.en : item.title.ar}</h3></div><span>0{index + 1}</span></div>
          </article>
        ))}
      </div>
    </section>
    <section className={"[border-top:1px_solid_#dfe4de] [padding-block:26px_75px]  [align-items:center]  [&_>p]:[margin:0] [&_>p]:[font-size:13px] [&_>p]:[color:#52675b] max-[720px]:[align-items:flex-start] max-[720px]:[flex-direction:column] max-[720px]:[gap:14px] max-[720px]:[padding-block:21px_50px] max-[720px]:[&_>p]:[font-size:11px] [width:min(1220px,calc(100%_-_72px))] [margin-inline:auto] [display:flex] [justify-content:space-between]  max-[1000px]:[width:min(100%_-_48px,900px)] max-[720px]:[width:calc(100%_-_38px)]   max-[390px]:[width:calc(100%_-_30px)]"}><p>{isEn ? 'Your version can be completely different. That is the point.' : 'طلبك مش لازم يبقى زي الصور — دي البداية بس.'}</p><Link className={"[min-height:40px] [padding:0_21px] [border:1px_solid_transparent] [display:inline-flex] [align-items:center] [justify-content:center] [gap:11px] [font-size:10px] [font-weight:600] [transition:transform_.25s_cubic-bezier(.2,.75,.2,1),background_.25s,color_.25s,border_.25s] [white-space:nowrap] hover:[transform:translateY(-2px)] [min-width:180px] [margin-inline-start:auto] [align-self:flex-start] [margin-top:15px] [padding-inline:12px] max-[720px]:[min-height:39px] max-[720px]:[padding-inline:10px] max-[720px]:[margin-inline-start:0] max-[720px]:[font-size:9px] max-[720px]:[align-self:flex-start] [background:#0b3b32] [color:#fff] hover:[background:#164c40]"} to="/request">{isEn ? 'Start from your own idea' : 'ابدئي من فكرتك'}<ArrowUpLeft size={16} /></Link></section>
  </div>;
}
