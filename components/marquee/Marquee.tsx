'use client'
import ReactMarquee from "react-fast-marquee";
import Image from 'next/image'

export default function Marquee({ products }: any) {

    const images = products.Items.map((p: any) => {

        <Image
            key={p.ID}
            src={products.Items[0].xp.Images[0].url}
            alt="Picture of the author"
            width={350}
            height={350}
        />

    })

    return (
        <ReactMarquee gradient={false} style={{backgroundColor: 'white'}}>
            <Image
                key={products.Items[0].ID}
                src={products.Items[0].xp.Images[0].url}
                alt="Picture of the author"
                width={350}
                height={350}
            />
            <Image
                key={products.Items[1].ID}
                src={products.Items[1].xp.Images[0].url}
                alt="Picture of the author"
                width={350}
                height={350}
            />
            <Image
                key={products.Items[2].ID}
                src={products.Items[2].xp.Images[0].url}
                alt="Picture of the author"
                width={350}
                height={350}
            />
            <Image
                key={products.Items[3].ID}
                src={products.Items[3].xp.Images[0].url}
                alt="Picture of the author"
                width={350}
                height={350}
            />
            <Image
                key={products.Items[4].ID}
                src={products.Items[4].xp.Images[0].url}
                alt="Picture of the author"
                width={350}
                height={350}
            />
            <Image
                key={products.Items[5].ID}
                src={products.Items[5].xp.Images[0].url}
                alt="Picture of the author"
                width={350}
                height={350}
            />
            <Image
                key={products.Items[6].ID}
                src={products.Items[6].xp.Images[0].url}
                alt="Picture of the author"
                width={350}
                height={350}
            />
        </ReactMarquee >
    )
}