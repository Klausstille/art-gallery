import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Card({ piece, onFavorite, favorites }) {
    return (
        <RelativeDiv>
            <Link href={`gallery/${piece.slug}`} key={piece.slug}>
                <StyledCard>
                    <div className="text">
                        <h4>{piece.name}</h4>
                        <h5>{piece.artist}</h5>
                    </div>

                    <Image
                        src={piece.imageSource}
                        fill
                        alt={piece.name}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvHnbdwAHUgMVjiMF2wAAAABJRU5ErkJggg=="
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={75}
                    />
                </StyledCard>
            </Link>
            <FavoriteButton
                slug={piece.slug}
                onFavorite={onFavorite}
                favorites={favorites}
            />
        </RelativeDiv>
    );
}

// Styles

const StyledCard = styled.section`
    border: 1px solid black;
    border-radius: 10px;
    position: relative;
    min-height: 300px;
    display: flex;
    align-items: end;
    aspect-ratio: 3/4;
    overflow: hidden;

    img {
        z-index: -1;
    }

    .text {
        background-color: white;
        width: 100%;
        padding: 1rem;
    }
`;

const RelativeDiv = styled.div`
    position: relative;
`;
