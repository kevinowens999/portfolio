import Link from 'next/link';
export default function APTProjectCard() { return (<article className={"case-study case-study--card apt-project-card"}>
<Link className={"case-study__link"} href={"/projects/apt"}></Link>
<div className={"case-study__thumb"}>
<img decoding={"async"} src={"/assets/apt/hero.png"} alt={"APT"} className={"case-study__img"} loading={"lazy"} title={"Portfolio 13"} />
<svg className={"case-study__thumb-svg"} width={"480"} height={"305"} viewBox={"0 0 480 305"} fill={"none"}>
<g opacity={"0.6"} filter={"url(#apt-card-glow)"}>
<path d={"M-26.6341 254.574C106.195 225.915 431.609 174.76 616.778 220.877C741.802 252.015 921.643 390.954 955.473 436.322"} stroke={"#695EFE"} strokeWidth={"189.194"}></path>

</g>

<defs>
<filter id={"apt-card-glow"} x={"-154.357"} y={"-0.000205994"} width={"1293.44"} height={"600.644"} filterUnits={"userSpaceOnUse"} colorInterpolationFilters={"sRGB"}>
<feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

<feBlend mode={"normal"} in={"SourceGraphic"} in2={"BackgroundImageFix"} result={"shape"}></feBlend>

<feGaussianBlur stdDeviation={"53.8861"} result={"effect1_foregroundBlur_8084_18002"}></feGaussianBlur>

</filter>

</defs>

</svg>
<div className={"flex"}>
<img src="/assets/apt/logo.png" alt="APT" width="98" height="115" className="case-study__logo" loading="lazy" />
<span className={"case-study__company"}>{"Travel"}</span>
</div>
</div>
<div className={"case-study__content"}>
<span className={"tag tag-black tag-small"}>{"Travel"}</span>
<h3 className={"case-study__title"}>{"APT: Email Personalisation & Customer Segmentation"}</h3>
<div className={"case-study__content_body"}><div className={"tags case-study__tags"}><span className="case-study__tag">Salesforce Marketing Cloud</span><span className="case-study__tag">Customer segmentation</span><span className="case-study__tag">Email personalisation</span></div>
<p className="case-study__excerpt">I helped APT turn customer insights into more relevant email campaigns through Salesforce Marketing Cloud, audience segmentation, and personalisation.</p>
<Link href={"/projects/apt"} className={"btn btn-medium btn-blue btn-blue--transparent"} title={"Case details"}>{"Case details"}<svg className={"icon"}>
<use href={"/assets/sprite.svg#icon-diagonal-arrow"}></use>

</svg>
</Link>
</div>
</div>
</article>); }
