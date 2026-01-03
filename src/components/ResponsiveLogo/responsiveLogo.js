import { StyledResponsiveLogo } from './StyledResponsiveLogo'

export default function ResponsiveLogo({
        src,
        alt = '',
        maxWidth = '170px',
        maxHeight,        // optional
        tabletMaxWidth,   // optional
        tabletMaxHeight,  // optional
        mobileMaxWidth,   // optional
        mobileMaxHeight,  // optional
        opacity = '1',
        noHover = false,
        ...props
    }) {

    return (
        <StyledResponsiveLogo
            src={src}
            alt={alt}
            $maxWidth={maxWidth}
            $maxHeight={maxHeight}
            $tabletMaxWidth={tabletMaxWidth}
            $tabletMaxHeight={tabletMaxHeight}
            $mobileMaxWidth={mobileMaxWidth}
            $mobileMaxHeight={mobileMaxHeight}
            $opacity={opacity}
            $noHover={noHover}
            loading="lazy"
            {...props}
        />
    )
}