type IconType = {
    icon?: string,
    classIcon?: string,
    width?: number,
    height?: number,
    alt?: string,

}

export default function IconInterface({
    icon,
    classIcon,
    width,
    height,
    alt
}: IconType) {
    return (
        <img
            src={icon}
            className={classIcon}
            style={{
                width: width,
                height: height
            }}
            alt={alt} />
    );
};