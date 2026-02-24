type Props = React.ImgHTMLAttributes<HTMLImageElement>

export function Image(props: Props) {
  return (
    <img
      loading="lazy"
      decoding="async"
      {...props}
    />
  )
}