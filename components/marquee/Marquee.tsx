'use client'
import ReactMarquee from "react-fast-marquee";
import Image from 'next/image'

export default function Marquee({ products }: any) {
    console.log("Marquee ", products);

    return (
        <ReactMarquee gradient={false}>
            {products.Items.map((p: any) => {
                console.log(p.xp.Images[0].url);
                <Image
                    src={p.xp.Images[0].url}
                    alt="Picture of the author"
                    width={350}
                    height={350}
                />
            })}

            <Image
                src="/champion_jacket_1.png"
                alt="Picture of the author"
                width={350}
                height={350}
            />
        </ReactMarquee >
    )
}