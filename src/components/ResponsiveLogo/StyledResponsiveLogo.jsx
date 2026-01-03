import styled from "styled-components"

export const StyledResponsiveLogo = styled.img`
    max-width: ${({ $maxWidth }) => $maxWidth || '170px'};
    max-height: ${({ $maxHeight }) => $maxHeight || 'none'};
    width: auto;
    height: auto;
    display: block;
    object-fit: contain;
    border: solid 1px yellow;

    /* === TABLET === */
    @media (max-width: 1200px) {
        max-width: ${({ $maxWidth, $tabletMaxWidth }) => {
            // Ja ir padots tabletMaxWidth – lietojam to
            if ($tabletMaxWidth) return $tabletMaxWidth

            // Pretējā gadījumā – esošā loģika: 75% no maxWidth
            const width = parseInt($maxWidth || '170', 10)
            return width * 0.75 + 'px'
        }};
        max-height: ${({ $maxHeight, $tabletMaxHeight }) => {
            if ($tabletMaxHeight) return $tabletMaxHeight
            if (!$maxHeight || $maxHeight === 'none') return 'none'

            const height = parseInt($maxHeight, 10)
            return height * 0.75 + 'px'
        }};
    }

    /* === MOBILE === */
    @media (max-width: 768px) {
        max-width: ${({ $maxWidth, $mobileMaxWidth }) => {
            // Ja ir padots mobileMaxWidth – lietojam to
            if ($mobileMaxWidth) return $mobileMaxWidth

            // Pretējā gadījumā – esošā loģika: 50% no maxWidth
            const width = parseInt($maxWidth || '170', 10)
            return width * 0.5 + 'px'
        }};
        max-height: ${({ $maxHeight, $mobileMaxHeight }) => {
            if ($mobileMaxHeight) return $mobileMaxHeight
            if (!$maxHeight || $maxHeight === 'none') return 'none'

            const height = parseInt($maxHeight, 10)
            return height * 0.5 + 'px'
        }};
    }
`
